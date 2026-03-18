import { validateUrl, jsonResponse } from '../_shared/utils.js';

export async function onRequestGet(context) {
  const reqUrl = new URL(context.request.url);
  const targetUrl = reqUrl.searchParams.get('url');

  if (!targetUrl) return jsonResponse({ error: 'Missing url parameter' }, 400);

  const err = validateUrl(targetUrl);
  if (err) return jsonResponse({ error: err }, 403);

  try {
    const upstream = await fetch(targetUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        Accept: '*/*',
      },
    });

    if (!upstream.ok) {
      return jsonResponse(
        { error: 'HLS proxy failed', details: `Status ${upstream.status}` },
        upstream.status,
      );
    }

    let manifest = await upstream.text();

    function resolveUrl(base, relative) {
      try {
        return new URL(relative, base).href;
      } catch (_) {
        return relative;
      }
    }

    const origin = reqUrl.origin;

    function proxyUrl(absUrl) {
      const isPlaylist = /\.m3u8/i.test(absUrl.split('?')[0]);
      const endpoint = isPlaylist ? '/api/hls' : '/api/proxy';
      return `${origin}${endpoint}?url=${encodeURIComponent(absUrl)}`;
    }

    const lines = manifest.split('\n');
    const rewritten = lines.map((line) => {
      const trimmed = line.trim();

      // Tags with embedded URI= attributes (EXT-X-KEY, EXT-X-MAP, EXT-X-MEDIA)
      if (
        trimmed.startsWith('#EXT-X-KEY') ||
        trimmed.startsWith('#EXT-X-MAP') ||
        trimmed.startsWith('#EXT-X-MEDIA')
      ) {
        return trimmed.replace(/URI="([^"]+)"/g, (_, uri) => {
          const abs = resolveUrl(targetUrl, uri);
          return `URI="${proxyUrl(abs)}"`;
        });
      }

      // Skip other comment/tag lines
      if (!trimmed || trimmed.startsWith('#')) {
        return line;
      }

      // Non-comment lines are segment / sub-playlist URLs
      const absUrl = resolveUrl(targetUrl, trimmed);
      return proxyUrl(absUrl);
    });

    return new Response(rewritten.join('\n'), {
      headers: {
        'Content-Type': 'application/vnd.apple.mpegurl',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache',
      },
    });
  } catch (err) {
    return jsonResponse(
      { error: 'HLS proxy failed', details: err.message, url: targetUrl },
      502,
    );
  }
}
