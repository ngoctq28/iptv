import { XMLParser } from 'fast-xml-parser';
import { validateUrl } from './utils.js';

const epgCache = {};
const CACHE_TTL = 2 * 60 * 60 * 1000; // 2 hours

function normalizeChName(s) {
  if (!s) return '';
  return s
    .toLowerCase()
    .replace(/\s*\(\d+p\)\s*/g, '')
    .replace(/\s*\[.*?\]\s*/g, '')
    .replace(/\s*(f?hd|uhd|sd|4k|h\.?265|hevc|plus)\s*$/i, '')
    .replace(/[^a-z0-9\u00C0-\u024F\u1E00-\u1EFF\u0400-\u04FF\u0600-\u06FF\u0E00-\u0E7F\u0900-\u097F\u3040-\u30FF\u4E00-\u9FFF\uAC00-\uD7AF]+/g, '')
    .trim();
}

function parseXMLTVDate(s) {
  if (!s) return null;
  const m = String(s).match(/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})\s*([+-]\d{4})?/);
  if (!m) return new Date(s).getTime();
  const iso = `${m[1]}-${m[2]}-${m[3]}T${m[4]}:${m[5]}:${m[6]}${m[7] ? m[7].replace(/(\d{2})(\d{2})/, '$1:$2') : 'Z'}`;
  return new Date(iso).getTime();
}

export async function fetchAndParseEPG(url) {
  const err = validateUrl(url);
  if (err) throw new Error(`Blocked: ${err}`);

  const now = Date.now();
  if (epgCache[url] && now - epgCache[url].timestamp < CACHE_TTL) {
    return epgCache[url];
  }

  const resp = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0' },
  });
  if (!resp.ok) throw new Error(`Failed to fetch EPG: ${resp.status}`);

  const contentType = resp.headers.get('content-type') || '';
  const isGzip = url.endsWith('.gz') || url.endsWith('.gzip') || contentType.includes('gzip');

  let xmlText;
  const buffer = await resp.arrayBuffer();

  if (isGzip) {
    try {
      const ds = new DecompressionStream('gzip');
      const writer = ds.writable.getWriter();
      writer.write(new Uint8Array(buffer));
      writer.close();
      xmlText = await new Response(ds.readable).text();
    } catch (e) {
      xmlText = new TextDecoder().decode(buffer);
    }
  } else {
    xmlText = new TextDecoder().decode(buffer);
  }

  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
  });

  const doc = parser.parse(xmlText);
  const tv = doc.tv || {};
  let channels = tv.channel || [];
  if (!Array.isArray(channels)) channels = [channels];
  let programmes = tv.programme || [];
  if (!Array.isArray(programmes)) programmes = [programmes];

  const channelMap = {};
  for (const ch of channels) {
    const id = ch['@_id'];
    if (!id) continue;
    let names = ch['display-name'];
    if (!names) names = [];
    if (!Array.isArray(names)) names = [names];
    for (const nameObj of names) {
      const name = typeof nameObj === 'object' ? nameObj['#text'] : nameObj;
      if (name) {
        const norm = normalizeChName(name);
        if (norm) channelMap[norm] = id;
        channelMap[name.toLowerCase()] = id;
      }
    }
    channelMap[id.toLowerCase()] = id;
    const idBase = id.replace(/@(SD|HD|FHD|Plus\d*|\d+)$/i, '').toLowerCase();
    if (idBase !== id.toLowerCase()) channelMap[idBase] = id;
  }

  const programMap = {};
  for (const p of programmes) {
    const chId = p['@_channel'];
    if (!chId) continue;
    const start = parseXMLTVDate(p['@_start']);
    const stop = parseXMLTVDate(p['@_stop']);
    let title = '';
    if (p.title) {
      title = typeof p.title === 'object' ? p.title['#text'] : p.title;
    }
    if (!programMap[chId]) programMap[chId] = [];
    programMap[chId].push({ start, stop, title });
  }

  for (const chId in programMap) {
    programMap[chId].sort((a, b) => a.start - b.start);
  }

  epgCache[url] = { timestamp: now, channelMap, programMap };
  return epgCache[url];
}
