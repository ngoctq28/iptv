import { jsonResponse, optionsResponse } from './_shared/utils.js';
import { onRequestGet as hlsHandler } from './api/hls.js';
import { onRequestGet as proxyHandler } from './api/proxy.js';
import { onRequestGet as epgChannelsHandler } from './api/epg/channels.js';
import {
  onRequestPost as epgProgrammesHandler,
  onRequestOptions as epgProgrammesOptions,
} from './api/epg/programmes.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;
    const context = { request, env, ctx };

    // CORS preflight for all /api/ routes
    if (method === 'OPTIONS' && path.startsWith('/api/')) {
      return optionsResponse();
    }

    if (path === '/api/hls' && method === 'GET') {
      return hlsHandler(context);
    }

    if (path === '/api/proxy' && method === 'GET') {
      return proxyHandler(context);
    }

    if (path === '/api/epg/channels' && method === 'GET') {
      return epgChannelsHandler(context);
    }

    if (path === '/api/epg/programmes') {
      if (method === 'OPTIONS') return epgProgrammesOptions();
      if (method === 'POST') return epgProgrammesHandler(context);
    }

    // Everything else falls through to static assets (served by [assets])
    return env.ASSETS.fetch(request);
  },
};
