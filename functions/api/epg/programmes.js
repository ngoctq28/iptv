import { jsonResponse, optionsResponse } from '../../_shared/utils.js';
import { fetchAndParseEPG } from '../../_shared/epg.js';

export async function onRequestOptions() {
  return optionsResponse();
}

export async function onRequestPost(context) {
  try {
    const { urls, id } = await context.request.json();

    if (!urls || !Array.isArray(urls) || !id) {
      return jsonResponse(
        { error: 'Missing urls array or id parameter in body' },
        400,
      );
    }

    let allProgs = [];
    for (const url of urls) {
      try {
        const data = await fetchAndParseEPG(url);
        if (data.programMap[id]) {
          allProgs = allProgs.concat(data.programMap[id]);
        }
      } catch (_) {
        // Skip failed EPG sources
      }
    }

    allProgs.sort((a, b) => a.start - b.start);
    return jsonResponse({ programmes: allProgs });
  } catch (error) {
    return jsonResponse({ error: 'Failed to fetch programmes' }, 500);
  }
}
