export function isPrivateIP(ip) {
  const v4match = ip.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/);
  const addr = v4match ? v4match[1] : ip;

  const parts = addr.split('.').map(Number);
  if (parts.length === 4 && parts.every(p => p >= 0 && p <= 255)) {
    if (parts[0] === 10) return true;
    if (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) return true;
    if (parts[0] === 192 && parts[1] === 168) return true;
    if (parts[0] === 127) return true;
    if (parts[0] === 0) return true;
    if (parts[0] === 169 && parts[1] === 254) return true;
    if (parts[0] === 100 && parts[1] >= 64 && parts[1] <= 127) return true;
    return false;
  }

  if (addr === '::1' || addr === '::') return true;
  if (addr.startsWith('fe80:')) return true;
  if (addr.startsWith('fc') || addr.startsWith('fd')) return true;

  return false;
}

export function validateUrl(urlStr) {
  let parsed;
  try {
    parsed = new URL(urlStr);
  } catch (_) {
    return 'Invalid URL';
  }

  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    return 'Only http and https protocols are allowed';
  }

  if (parsed.username || parsed.password) {
    return 'URLs with credentials are not allowed';
  }

  const hostname = parsed.hostname.toLowerCase();

  if (hostname === 'localhost' || hostname === '0.0.0.0' ||
      hostname.endsWith('.local') || hostname.endsWith('.internal') ||
      hostname === 'metadata.google.internal') {
    return 'Requests to internal hosts are not allowed';
  }

  if (isPrivateIP(hostname)) {
    return 'Requests to private IP addresses are not allowed';
  }

  return null;
}

export function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

export function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

export function optionsResponse() {
  return new Response(null, { status: 204, headers: corsHeaders() });
}
