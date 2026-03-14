const express = require('express');
const cors = require('cors');
const axios = require('axios');
const zlib = require('zlib');
const path = require('path');
const { XMLParser } = require('fast-xml-parser');
const app = express();

// ── Production mode: silence verbose logging ─────────────────────────────────
const IS_PROD = process.env.NODE_ENV === 'production';
if (IS_PROD) {
  console.log  = () => {};
  console.warn = () => {};
}

app.use(cors());
app.use(express.json());

// Serve the frontend (index.html, panel.js, etc.) as static files
app.use(express.static(__dirname));

// Expose build environment to the browser so panel.js can silence itself
app.get('/env.js', (_req, res) => {
  res.set('Content-Type', 'application/javascript');
  res.set('Cache-Control', 'no-store');
  res.send(`window.__PROD__ = ${IS_PROD};`);
});

// Explicit root route — always serves index.html
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

// In-memory cache for EPG XML data
const epgCache = {}; // { url: { timestamp, channelMap, programMap } }
const CACHE_TTL = 1000 * 60 * 60 * 2; // 2 hours

// normalize channel name (similar to frontend)
function normalizeChName(s) {
  if(!s) return "";
  return s
    .toLowerCase()
    .replace(/\s*\(\d+p\)\s*/g, "")
    .replace(/\s*\[.*?\]\s*/g, "")
    .replace(/\s*(f?hd|uhd|sd|4k|h\.?265|hevc|plus)\s*$/i, "")
    .replace(/[^a-z0-9\u00C0-\u024F\u1E00-\u1EFF\u0400-\u04FF\u0600-\u06FF\u0E00-\u0E7F\u0900-\u097F\u3040-\u30FF\u4E00-\u9FFF\uAC00-\uD7AF]+/g, "")
    .trim();
}

function parseXMLTVDate(s) {
  if(!s) return null;
  const m = String(s).match(/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})\s*([+-]\d{4})?/);
  if (!m) return new Date(s).getTime();
  const iso = `${m[1]}-${m[2]}-${m[3]}T${m[4]}:${m[5]}:${m[6]}${m[7] ? m[7].replace(/(\d{2})(\d{2})/, "$1:$2") : 'Z'}`;
  return new Date(iso).getTime();
}

async function fetchAndParseEPG(url) {
  const now = Date.now();
  if (epgCache[url] && (now - epgCache[url].timestamp < CACHE_TTL)) {
    return epgCache[url];
  }

  console.log(`[EPG Proxy] Downloading EPG from ${url}`);
  const headers = { 'User-Agent': 'Mozilla/5.0' };
  const resp = await axios.get(url, { headers, responseType: 'arraybuffer' });
  
  let xmlText;
  if (url.endsWith('.gz') || url.endsWith('.gzip') || (resp.headers['content-type'] && resp.headers['content-type'].includes('gzip'))) {
    try {
      xmlText = zlib.unzipSync(resp.data).toString('utf-8');
    } catch (e) {
      xmlText = resp.data.toString('utf-8');
    }
  } else {
    xmlText = resp.data.toString('utf-8');
  }

  console.log(`[EPG Proxy] Parsing XML for ${url}`);
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_"
  });
  
  const doc = parser.parse(xmlText);
  const tv = doc.tv || {};
  let channels = tv.channel || [];
  if (!Array.isArray(channels)) channels = [channels];
  let programmes = tv.programme || [];
  if (!Array.isArray(programmes)) programmes = [programmes];

  const channelMap = {};
  for (const ch of channels) {
    const id = ch["@_id"];
    if (!id) continue;
    let names = ch["display-name"];
    if (!names) names = [];
    if (!Array.isArray(names)) names = [names];
    for (const nameObj of names) {
      const name = typeof nameObj === 'object' ? nameObj["#text"] : nameObj;
      if (name) {
        const norm = normalizeChName(name);
        if (norm) channelMap[norm] = id;
        channelMap[name.toLowerCase()] = id;
      }
    }
    channelMap[id.toLowerCase()] = id;
    const idBase = id.replace(/@(SD|HD|FHD|Plus\d*|\d+)$/i, "").toLowerCase();
    if (idBase !== id.toLowerCase()) channelMap[idBase] = id;
  }

  const programMap = {}; // channelId -> array of programs
  for (const p of programmes) {
    const chId = p["@_channel"];
    if (!chId) continue;
    
    // We can filter out old programs immediately or keep them if they're close
    const startObj = p["@_start"];
    const stopObj = p["@_stop"];
    const start = parseXMLTVDate(startObj);
    const stop = parseXMLTVDate(stopObj);
    let title = "";
    if (p.title) {
        title = typeof p.title === 'object' ? p.title["#text"] : p.title;
    }
    
    if (!programMap[chId]) programMap[chId] = [];
    programMap[chId].push({ start, stop, title });
  }

  // Optimize and sort
  for (const chId in programMap) {
      programMap[chId].sort((a,b) => a.start - b.start);
  }

  console.log(`[EPG Proxy] Parsed ${channels.length} channels and ${programmes.length} programmes.`);
  epgCache[url] = { timestamp: now, channelMap, programMap };
  return epgCache[url];
}

// Endpoint to fetch Channel Map
app.get('/api/epg/channels', async (req, res) => {
  try {
    const url = req.query.url;
    if (!url) return res.status(400).json({ error: "Missing url parameter" });
    const data = await fetchAndParseEPG(url);
    res.json({ channelMap: data.channelMap, channelCount: Object.keys(data.channelMap).length });
  } catch (error) {
    console.error("[EPG Proxy] Error:", error.message);
    res.status(500).json({ error: "Failed to download or parse EPG", details: error.message });
  }
});

// Endpoint to fetch programmes for a specific channel
app.post('/api/epg/programmes', async (req, res) => {
  try {
    const { urls, id } = req.body;
    if (!urls || !Array.isArray(urls) || !id) {
       return res.status(400).json({ error: "Missing urls array or id parameter in body" });
    }
    
    let allProgs = [];
    for (const url of urls) {
       try {
           const data = await fetchAndParseEPG(url);
           if (data.programMap[id]) {
               allProgs = allProgs.concat(data.programMap[id]);
           }
       } catch (err) {
           console.error("[EPG Proxy] Error downloading/parsing EPG in batch:", url, err.message);
       }
    }

    allProgs.sort((a, b) => a.start - b.start);
    res.json({ programmes: allProgs });
  } catch (error) {
    console.error("[EPG Proxy] Error:", error.message);
    res.status(500).json({ error: "Failed to fetch programmes" });
  }
});

// ===== HLS manifest proxy =====
// Fetches a remote .m3u8 manifest and rewrites all internal URLs so that
// HLS.js can load every part (segments, sub-playlists, keys) through this
// server, completely avoiding CORS restrictions on the origin.
app.get('/api/hls', async (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).json({ error: 'Missing url parameter' });

  try {
    console.log(`[HLS Proxy] Fetching manifest: ${url}`);
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Accept': '*/*',
    };

    const upstream = await axios.get(url, {
      headers,
      responseType: 'text',
      maxRedirects: 5,
      timeout: 15000,
    });

    let manifest = upstream.data;

    // Resolve a potentially relative URL against the manifest's base URL
    function resolveUrl(base, relative) {
      try {
        return new URL(relative, base).href;
      } catch (_) {
        return relative;
      }
    }

    // Build a proxy URL for a given absolute target URL
    function proxyUrl(targetUrl) {
      // Sub-playlists (.m3u8) go back through /api/hls so their own segments get rewritten too
      const isPlaylist = /\.m3u8/i.test(targetUrl.split('?')[0]);
      const endpoint = isPlaylist ? '/api/hls' : '/api/proxy';
      // Derive origin from the incoming request so this works behind Docker / reverse proxies
      const proto = req.headers['x-forwarded-proto'] || req.protocol || 'http';
      const host  = req.headers['x-forwarded-host']  || req.headers.host;
      const origin = `${proto}://${host}`;
      return `${origin}${endpoint}?url=${encodeURIComponent(targetUrl)}`;
    }

    // Rewrite every URL-bearing line in the manifest
    const lines = manifest.split('\n');
    const rewritten = lines.map(line => {
      const trimmed = line.trim();

      // Skip comment-only lines that have no URLs
      if (!trimmed || (trimmed.startsWith('#') && !trimmed.includes('URI=') && !trimmed.includes('URI='))) {
        // Still rewrite tag attributes that carry URIs
        // e.g. #EXT-X-KEY:METHOD=AES-128,URI="https://..."
        if (trimmed.startsWith('#EXT-X-KEY') || trimmed.startsWith('#EXT-X-MAP') || trimmed.startsWith('#EXT-X-MEDIA')) {
          return trimmed.replace(/URI="([^"]+)"/g, (_, uri) => {
            const abs = resolveUrl(url, uri);
            return `URI="${proxyUrl(abs)}"`;
          });
        }
        return line;
      }

      // Non-comment lines are segment / sub-playlist URLs
      if (!trimmed.startsWith('#')) {
        const absUrl = resolveUrl(url, trimmed);
        return proxyUrl(absUrl);
      }

      // Tags with embedded URI= attributes
      if (trimmed.includes('URI=')) {
        return trimmed.replace(/URI="([^"]+)"/g, (_, uri) => {
          const abs = resolveUrl(url, uri);
          return `URI="${proxyUrl(abs)}"`;
        });
      }

      return line;
    });

    const result = rewritten.join('\n');

    res.set('Content-Type', 'application/vnd.apple.mpegurl');
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Cache-Control', 'no-cache');
    res.send(result);
    console.log(`[HLS Proxy] Served rewritten manifest (${lines.length} lines) for ${url}`);
  } catch (err) {
    const status = err.response ? err.response.status : 502;
    console.error(`[HLS Proxy] Error: ${err.message}`);
    res.status(status).json({ error: 'HLS proxy failed', details: err.message, url });
  }
});

// ===== Generic proxy endpoint =====
// Fetches any remote URL server-side and returns body + headers to the frontend.
// Use as fallback when the browser can't reach a URL directly (CORS, network block, etc.)
app.get('/api/proxy', async (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).json({ error: 'Missing url parameter' });

  try {
    console.log(`[Proxy] Fetching: ${url}`);
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Accept': '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
    };

    const upstream = await axios.get(url, {
      headers,
      responseType: 'arraybuffer',
      maxRedirects: 5,
      timeout: 20000,
    });

    // Decompress if needed
    let body;
    const contentEncoding = (upstream.headers['content-encoding'] || '').toLowerCase();
    const isGzip = contentEncoding === 'gzip' || url.endsWith('.gz') || url.endsWith('.gzip');
    const isBrotli = contentEncoding === 'br';
    const isDeflate = contentEncoding === 'deflate';

    try {
      if (isGzip) {
        body = zlib.gunzipSync(upstream.data);
      } else if (isBrotli) {
        body = zlib.brotliDecompressSync(upstream.data);
      } else if (isDeflate) {
        body = zlib.inflateSync(upstream.data);
      } else {
        body = upstream.data;
      }
    } catch (decompErr) {
      console.warn(`[Proxy] Decompression failed, using raw body: ${decompErr.message}`);
      body = upstream.data;
    }

    // Forward relevant headers
    const contentType = upstream.headers['content-type'] || 'application/octet-stream';
    res.set('Content-Type', contentType);
    res.set('X-Proxy-Source', url);
    res.set('Access-Control-Allow-Origin', '*');
    res.send(body);
    console.log(`[Proxy] OK ${upstream.status} — ${body.length} bytes for ${url}`);
  } catch (err) {
    const status = err.response ? err.response.status : 502;
    console.error(`[Proxy] Error fetching ${url}:`, err.message);
    res.status(status).json({ error: 'Proxy fetch failed', details: err.message, url });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`[Proxy] Server running on http://localhost:${PORT}`);
  console.log(`  EPG channels:  GET  /api/epg/channels?url=<epg-url>`);
  console.log(`  EPG programs:  POST /api/epg/programmes  { urls, id }`);
  console.log(`  Stream proxy:  GET  /api/proxy?url=<any-url>`);
});
