import { jsonResponse } from '../../_shared/utils.js';
import { fetchAndParseEPG } from '../../_shared/epg.js';

export async function onRequestGet(context) {
  try {
    const url = new URL(context.request.url);
    const epgUrl = url.searchParams.get('url');

    if (!epgUrl) return jsonResponse({ error: 'Missing url parameter' }, 400);

    const data = await fetchAndParseEPG(epgUrl);
    return jsonResponse({
      channelMap: data.channelMap,
      channelCount: Object.keys(data.channelMap).length,
    });
  } catch (error) {
    return jsonResponse(
      { error: 'Failed to download or parse EPG', details: error.message },
      500,
    );
  }
}
