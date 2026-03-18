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
        {
          error: 'Proxy fetch failed',
          details: `Status ${upstream.status}`,
          url: targetUrl,
        },
        upstream.status,
      );
    }

    // Decompress if the origin sent compressed content
    const encoding = (
      upstream.headers.get('content-encoding') || ''
    ).toLowerCase();
    let body = upstream.body;

    if (encoding === 'gzip' || encoding === 'deflate') {
      try {
        body = upstream.body.pipeThrough(new DecompressionStream(encoding));
      } catch (_) {
        // Fallback: forward as-is
      }
    }

    return new Response(body, {
      headers: {
        'Content-Type':
          upstream.headers.get('content-type') || 'application/octet-stream',
        'Access-Control-Allow-Origin': '*',
        'X-Proxy-Source': targetUrl,
      },
    });
  } catch (err) {
    return jsonResponse(
      { error: 'Proxy fetch failed', details: err.message, url: targetUrl },
      502,
    );
  }
}
