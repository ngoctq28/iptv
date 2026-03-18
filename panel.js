/* ===== Production: silence console.log / console.warn ===== */
if (window.__PROD__) {
  console.log = () => { };
  console.warn = () => { };
}

/* ===== i18n ===== */
const LANGS = {
  vi: {
    flag: "\uD83C\uDDFB\uD83C\uDDF3", label: "Ti\u1EBFng Vi\u1EC7t",
    noChannel: "Ch\u01B0a ch\u1ECDn k\u00EAnh",
    sound: "\u00C2m thanh",
    pip: "Thu nh\u1ECF",
    newTab: "Tab m\u1EDBi",
    reload: "T\u1EA3i l\u1EA1i",
    favHeader: "\u2B50 K\u00EAnh y\u00EAu th\u00EDch",
    favEmpty: "Ch\u01B0a c\u00F3 k\u00EAnh y\u00EAu th\u00EDch",
    sourceToggle: "\uD83D\uDD17 Ngu\u1ED3n k\u00EAnh",
    addPlaceholder: "D\u00E1n link M3U v\u00E0o \u0111\u00E2y...",
    addBtn: "+ Th\u00EAm",
    fileBtn: "\uD83D\uDCC1 File",
    searchPlaceholder: "T\u00ECm k\u00EAnh truy\u1EC1n h\u00ECnh...",
    checkBtn: "Ki\u1EC3m tra k\u00EAnh",
    showAll: "Hi\u1EC7n t\u1EA5t c\u1EA3",
    scrollTop: "L\u00EAn \u0111\u1EA7u",
    defaultBadge: "m\u1EB7c \u0111\u1ECBnh",
    renameTip: "\u0110\u1ED5i t\u00EAn",
    deleteTip: "X\u00F3a ngu\u1ED3n n\u00E0y",
    renamed: "\u0110\u00E3 \u0111\u1ED5i t\u00EAn",
    pipNotSupported: "PiP kh\u00F4ng h\u1ED7 tr\u1EE3",
    reloading: "\u0110ang t\u1EA3i l\u1EA1i...",
    channelN: "K\u00EAnh ",
    networkError: "L\u1ED7i m\u1EA1ng \u2014 \u0111ang th\u1EED l\u1EA1i...",
    mediaError: "L\u1ED7i media \u2014 \u0111ang kh\u1EAFc ph\u1EE5c...",
    playErrorRetry: "L\u1ED7i ph\u00E1t \u2014 t\u1EF1 t\u1EA3i l\u1EA1i",
    playErrorFinal: "L\u1ED7i ph\u00E1t \u2014 nh\u1EA5n T\u1EA3i l\u1EA1i",
    reconnecting: "\u0110ang t\u1EF1 k\u1EBFt n\u1ED1i l\u1EA1i...",
    loading: "\u0110ang t\u1EA3i...",
    checking: "Ki\u1EC3m tra",
    selectSource: "Ch\u1ECDn ngu\u1ED3n k\u00EAnh b\u00EAn d\u01B0\u1EDBi \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u",
    invalidUrl: "Link ph\u1EA3i b\u1EAFt \u0111\u1EA7u b\u1EB1ng http:// ho\u1EB7c https://",
    addedSource: "\u0110\u00E3 th\u00EAm ngu\u1ED3n: ",
    noChannelInFile: "Kh\u00F4ng t\u00ECm th\u1EA5y k\u00EAnh trong file",
    addedFile: "\u0110\u00E3 th\u00EAm: ",
    channelUnit: " k\u00EAnh",
    loadingSources: "\u0110ang t\u1EA3i {n} ngu\u1ED3n...",
    cantLoadSource: "Kh\u00F4ng t\u1EA3i \u0111\u01B0\u1EE3c ngu\u1ED3n k\u00EAnh",
    noChannelFound: "Kh\u00F4ng t\u00ECm th\u1EA5y k\u00EAnh n\u00E0o",
    sourceError: "{e} ngu\u1ED3n l\u1ED7i, {n} k\u00EAnh t\u1EA3i \u0111\u01B0\u1EE3c",
    sourceOk: "{n} k\u00EAnh t\u1EEB {s} ngu\u1ED3n",
    checkTitle: "Ki\u1EC3m tra k\u00EAnh n\u00E0o \u0111ang ho\u1EA1t \u0111\u1ED9ng",
    showAllTitle: "Hi\u1EC7n l\u1EA1i t\u1EA5t c\u1EA3 k\u00EAnh \u0111\u00E3 \u1EA9n",
    fileTitle: "Ch\u1ECDn file M3U t\u1EEB m\u00E1y",
    cinemaMode: "Cinema",
    pinChannel: "Ghim",
    pinChannelTip: "Ghim k\u00EAnh (t\u1EF1 ph\u00E1t khi m\u1EDF l\u1EA1i)",
    favChannel: "Y\u00EAu th\u00EDch",
    hideChannel: "\u1EA8n",
    pinnedToast: "\u0110\u00E3 ghim k\u00EAnh",
    unpinnedToast: "\u0110\u00E3 b\u1ECF ghim k\u00EAnh",
    shortcutsTitle: "Ph\u00EDm t\u1EAFt",
    playPause: "Ph\u00E1t / T\u1EA1m d\u1EEBng",
    seekBack: "Tua l\u1EA1i 10 gi\u00E2y",
    seekForward: "Tua ti\u1EBFp 10 gi\u00E2y",
    prevChannel: "K\u00EAnh tr\u01B0\u1EDBc",
    nextChannel: "K\u00EAnh ti\u1EBFp",
    fullscreen: "To\u00E0n m\u00E0n h\u00ECnh",
    epgLoaded: "\u0110\u00E3 t\u1EA3i EPG",
    retryProxy: "\u0110ang th\u1EED l\u1EA1i qua proxy\u2026",
    epgLoadFailed: "Kh\u00F4ng t\u1EA3i \u0111\u01B0\u1EE3c EPG",
    epgTitle: "L\u1ECBch ph\u00E1t s\u00F3ng",
    epgNoData: "Ch\u01B0a c\u00F3 d\u1EEF li\u1EC7u EPG",
    epgNoProgram: "Kh\u00F4ng c\u00F3 ch\u01B0\u01A1ng tr\u00ECnh",
    epgNoUpcoming: "Kh\u00F4ng c\u00F3 ch\u01B0\u01A1ng tr\u00ECnh s\u1EAFp t\u1EDBi",
    channelListTitle: "Danh s\u00E1ch k\u00EAnh",
    closeTip: "\u0110\u00F3ng",
    castTip: "Truy\u1EC1n",
    castingTip: "D\u1EEBng truy\u1EC1n"
  },
  en: {
    flag: "\uD83C\uDDFA\uD83C\uDDF8", label: "English (US)",
    noChannel: "No channel selected",
    sound: "Sound",
    pip: "Mini",
    newTab: "New tab",
    reload: "Reload",
    favHeader: "\u2B50 Favorites",
    favEmpty: "No favorite channels yet",
    sourceToggle: "\uD83D\uDD17 Sources",
    addPlaceholder: "Paste M3U link here...",
    addBtn: "+ Add",
    fileBtn: "\uD83D\uDCC1 File",
    searchPlaceholder: "Search channels...",
    checkBtn: "Check channels",
    showAll: "Show all",
    scrollTop: "Top",
    defaultBadge: "default",
    renameTip: "Rename",
    deleteTip: "Delete this source",
    renamed: "Renamed",
    pipNotSupported: "PiP not supported",
    reloading: "Reloading...",
    channelN: "Channel ",
    networkError: "Network error \u2014 retrying...",
    mediaError: "Media error \u2014 recovering...",
    playErrorRetry: "Playback error \u2014 auto retry",
    playErrorFinal: "Playback error \u2014 press Reload",
    reconnecting: "Reconnecting...",
    loading: "Loading...",
    checking: "Checking",
    selectSource: "Select a source below to start",
    invalidUrl: "Link must start with http:// or https://",
    addedSource: "Added source: ",
    noChannelInFile: "No channels found in file",
    addedFile: "Added: ",
    channelUnit: " channels",
    loadingSources: "Loading {n} sources...",
    cantLoadSource: "Cannot load sources",
    noChannelFound: "No channels found",
    sourceError: "{e} source errors, {n} channels loaded",
    sourceOk: "{n} channels from {s} sources",
    checkTitle: "Check which channels are working",
    showAllTitle: "Show all hidden channels",
    fileTitle: "Choose M3U file from device",
    cinemaMode: "Cinema",
    pinChannel: "Pin",
    pinChannelTip: "Pin channel (auto-play on startup)",
    favChannel: "Favorite",
    hideChannel: "Hide",
    pinnedToast: "Channel pinned",
    unpinnedToast: "Channel unpinned",
    shortcutsTitle: "Shortcuts",
    playPause: "Play / Pause",
    seekBack: "Rewind 10s",
    seekForward: "Forward 10s",
    prevChannel: "Previous channel",
    nextChannel: "Next channel",
    fullscreen: "Fullscreen",
    epgLoaded: "EPG loaded",
    retryProxy: "Retrying via proxy…",
    epgLoadFailed: "Failed to load EPG",
    epgTitle: "Program Guide",
    epgNoData: "No EPG data loaded",
    epgNoProgram: "No program data",
    epgNoUpcoming: "No upcoming programs",
    channelListTitle: "Channel list",
    closeTip: "Close",
    castTip: "Cast",
    castingTip: "Stop casting"
  }
};
let currentLang = localStorage.getItem("lang") || "en";
function t(key) { return (LANGS[currentLang] || LANGS.vi)[key] || (LANGS.vi)[key] || key; }

const DEFAULT_SOURCES = [
  { name: "VietNam IPTV (Default)", url: "https://raw.githubusercontent.com/giangnam0201/All-In-One-IPTV/refs/heads/main/channels.m3u", default: true }
];

/* ===== DOM ===== */
const video = document.getElementById("player");
let mediaEl = video;
const nowName = document.getElementById("nowPlayingName");
const nowBar = document.getElementById("nowPlaying");
const btnUnmute = document.getElementById("btnUnmute");
const btnPiP = document.getElementById("btnPiP");
const btnPlayPause = document.getElementById("btnPlayPause");
const btnSeekBack = document.getElementById("btnSeekBack");
const btnSeekFwd = document.getElementById("btnSeekForward");
const btnFull = document.getElementById("btnFullscreen");
const btnPlayerFs = document.getElementById("btnPlayerFullscreen");
const btnRetry = document.getElementById("btnRetry");
const volumeSlider = document.getElementById("volumeSlider");
const toast = document.getElementById("statusToast");
const searchIn = document.getElementById("searchInput");
const btnCheck = document.getElementById("btnCheck");
const btnReset = document.getElementById("btnReset");
const grid = document.getElementById("channelGrid");
const emptyState = document.getElementById("emptyState");
const sourceToggle = document.getElementById("sourceToggle");
const sourceBody = document.getElementById("sourceBody");
const sourceListEl = document.getElementById("sourceList");
const addSourceInput = document.getElementById("addSourceInput");
const addSourceBtn = document.getElementById("addSourceBtn");
const pinBtn = document.getElementById("pinBtn");
const favBtn = document.getElementById("favBtn");
const hideBtn = document.getElementById("hideBtn");

/* ===== AUDIO VISUALIZER ===== */
var _audioCtx = null, _analyser = null, _gainNode = null, _vizRAF = null;
var _vizCanvas = document.getElementById("radioVisualizer");
var _vizCtx = _vizCanvas ? _vizCanvas.getContext("2d") : null;
var _userMuted = false;
var _userVolume = 1;

// Volume/mute helpers — route through GainNode when available so the
// AnalyserNode always receives the full audio signal (visualizer keeps working).
function _applyGain() {
  if (!_gainNode) return;
  _gainNode.gain.value = _userMuted ? 0 : _userVolume;
}
function setAppVolume(v) {
  _userVolume = v;
  if (_gainNode) { _applyGain(); mediaEl.volume = 1; mediaEl.muted = false; }
  else { mediaEl.volume = v; }
}
function setAppMuted(m) {
  _userMuted = m;
  if (_gainNode) { _applyGain(); mediaEl.volume = 1; mediaEl.muted = false; }
  else { mediaEl.muted = m; }
}
function getAppVolume() { return _gainNode ? _userVolume : mediaEl.volume; }
function isAppMuted() { return _gainNode ? _userMuted : mediaEl.muted; }

// Create a single persistent AudioContext and connect both media elements once.
// createMediaElementSource can only be called once per element for the lifetime
// of the page, so we set it up once and never tear it down. Both elements feed
// the same analyser; only one plays at a time so there's no mixing.
function initAudioVisualizer() {
  if (_audioCtx) return;
  _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  _analyser = _audioCtx.createAnalyser();
  _analyser.fftSize = 1024;
  _analyser.smoothingTimeConstant = 0.7;
  _gainNode = _audioCtx.createGain();
  _analyser.connect(_gainNode);
  _gainNode.connect(_audioCtx.destination);
  // Capture logical mute/volume from the element before we take over
  _userVolume = mediaEl.volume;
  _userMuted = mediaEl.muted;
  // Keep element at full volume so analyser gets signal; gain node controls output
  mediaEl.volume = 1;
  mediaEl.muted = false;
  _applyGain();
  if (video) {
    try {
      var vs = _audioCtx.createMediaElementSource(video);
      vs.connect(_analyser);
    } catch (e) { }
  }

}

function startVisualizer() {
  if (!_vizCanvas || !_vizCtx) return;
  try { initAudioVisualizer(); } catch (e) { return; }
  if (_audioCtx.state === "suspended") _audioCtx.resume();
  cancelAnimationFrame(_vizRAF);
  var binCount = _analyser.frequencyBinCount;
  var dataArr = new Uint8Array(binCount);
  var trimLo = 2, trimHi = 2;

  // Mutable state that rebuilds when canvas width changes
  var _prevCanvasW = 0;
  var numBars = 0, useBars = 0;
  var logBands = [], smoothBars, drawOrder;

  function rebuildBands(canvasW) {
    _prevCanvasW = canvasW;
    numBars = Math.max(20, Math.min(90, Math.floor(canvasW / 4)));
    useBars = numBars - trimLo - trimHi;
    logBands = [];
    var minF = 1, maxF = binCount;
    for (var i = 0; i < numBars; i++) {
      var lo = Math.floor(minF * Math.pow(maxF / minF, i / numBars));
      var hi = Math.floor(minF * Math.pow(maxF / minF, (i + 1) / numBars));
      if (hi <= lo) hi = lo + 1;
      logBands.push([lo, Math.min(hi, binCount)]);
    }
    smoothBars = new Float32Array(numBars);
    drawOrder = new Array(useBars);
    var half = Math.ceil(useBars / 2);
    for (var i = 0; i < useBars; i++) {
      if (i % 2 === 0) drawOrder[half - 1 - (i >> 1)] = i + trimLo;
      else drawOrder[half + (i >> 1)] = i + trimLo;
    }
  }

  (function draw() {
    _vizRAF = requestAnimationFrame(draw);
    var curW = _vizCanvas.offsetWidth;
    if (curW !== _prevCanvasW) rebuildBands(curW);
    var dpr = window.devicePixelRatio || 1;
    var w = _vizCanvas.width = curW * dpr;
    var h = _vizCanvas.height = _vizCanvas.offsetHeight * dpr;
    _vizCtx.clearRect(0, 0, w, h);
    _analyser.getByteFrequencyData(dataArr);
    var midY = h / 2;
    var gap = 2 * dpr;
    var barW = Math.max(1.5, (w - gap * (useBars + 1)) / useBars);
    var r = barW / 2;
    _vizCtx.fillStyle = "#fff";
    var barHeights = new Float32Array(numBars);
    for (var i = 0; i < numBars; i++) {
      var lo = logBands[i][0], hi = logBands[i][1];
      var sum = 0;
      for (var j = lo; j < hi; j++) sum += dataArr[j];
      var val = (sum / (hi - lo)) / 255;
      smoothBars[i] += (val - smoothBars[i]) * 0.45;
      barHeights[i] = Math.max(2 * dpr, smoothBars[i] * midY * 0.92);
    }
    for (var d = 0; d < useBars; d++) {
      var srcIdx = drawOrder[d];
      var barH = barHeights[srcIdx];
      var x = gap + d * (barW + gap);
      _vizCtx.beginPath();
      _vizCtx.roundRect(x, midY - barH, barW, barH, [r, r, 0, 0]);
      _vizCtx.fill();
      _vizCtx.beginPath();
      _vizCtx.roundRect(x, midY + 1 * dpr, barW, barH, [0, 0, r, r]);
      _vizCtx.fill();
    }
  })();
}

function stopVisualizer() {
  cancelAnimationFrame(_vizRAF);
  _vizRAF = null;
  if (_vizCanvas && _vizCtx) {
    _vizCtx.clearRect(0, 0, _vizCanvas.width, _vizCanvas.height);
  }
}

/* ===== MARQUEE for overflowing text ===== */
let _marqueeEl = null;
let _marqueeText = "";
function setupMarquee(el, text) {
  _marqueeEl = el;
  _marqueeText = text;
  _applyMarquee(el, text);
}
function _applyMarquee(el, text) {
  el.classList.remove("marquee");
  el.textContent = text;
  requestAnimationFrame(() => {
    if (el.scrollWidth > el.clientWidth) {
      el.classList.add("marquee");
      const sep = "\u00A0\u00A0\u00A0\u2022\u00A0\u00A0\u00A0";
      const span = document.createElement("span");
      span.textContent = text + sep + text + sep;
      el.textContent = "";
      el.appendChild(span);
      // Duration scales with content width for consistent speed
      const dur = Math.max(span.offsetWidth / 2 * 0.04, 6);
      el.style.setProperty("--marquee-dur", dur + "s");
    }
  });
}
let _marqueeResizeTimer = null;
window.addEventListener("resize", () => {
  clearTimeout(_marqueeResizeTimer);
  _marqueeResizeTimer = setTimeout(() => {
    if (_marqueeEl && _marqueeText) _applyMarquee(_marqueeEl, _marqueeText);
  }, 200);
});

/* ===== STATE ===== */
let allChannels = [];
let favorites = JSON.parse(localStorage.getItem("fav") || "[]");
let sources = JSON.parse(localStorage.getItem("sources") || "[]");
let activeSources = new Set(JSON.parse(localStorage.getItem("activeSources") || "[0]"));
let currentIdx = -1;
let currentUrl = "";
const hidden = new Set(JSON.parse(localStorage.getItem("hiddenChannels") || "[]"));
let pinnedUrl = localStorage.getItem("pinnedChannel") || "";
const MAX_RETRIES = 5;
let retryCount = 0;
let retryTimer = null;
let stallTimer = null;
let _playbackStopped = false; // set when max retries exhausted to block further retries
const STALL_TIMEOUT = 15000;
let hls = null; // hls.js instance
let hlsLevels = []; // available quality levels
let _nativeHlsUseProxy = false; // native HLS proxy escalation flag
let _nativeHlsProxyRetried = false; // guard: only escalate native HLS to proxy once
let currentCategory = "tv"; // 'tv', 'radio' or 'fav'
const fallbackImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%231a1a2e'/%3E%3Cstop offset='100%25' stop-color='%2316213e'/%3E%3C/linearGradient%3E%3ClinearGradient id='ac' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%2360a5fa'/%3E%3Cstop offset='100%25' stop-color='%23a78bfa'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='120' height='120' rx='16' fill='url(%23bg)'/%3E%3Ccircle cx='60' cy='52' r='28' fill='none' stroke='url(%23ac)' stroke-width='2.5' opacity='.6'/%3E%3Cpolygon points='52 40 52 64 72 52' fill='url(%23ac)' opacity='.85'/%3E%3Crect x='30' y='88' width='60' height='3' rx='1.5' fill='%2360a5fa' opacity='.25'/%3E%3Crect x='40' y='95' width='40' height='3' rx='1.5' fill='%23a78bfa' opacity='.18'/%3E%3C/svg%3E";

/* ===== EPG (Electronic Program Guide) ===== */
let epgData = {}; // { channelId: [ {start, stop, title} ] }  — lazily populated per channel
let epgChannelMap = {}; // { normalizedName: channelId } - display-name → id map
let _epgUrlsConfigured = []; // Configured EPG URLs for lazy fetch via proxy
let _epgLoadedIds = new Set(); // EPG channel IDs whose programmes are already parsed
const nowProgram = document.getElementById("nowProgram");

/* Normalize a channel name for fuzzy matching */
function normalizeChName(s) {
  if (!s) return "";
  return s
    .toLowerCase()
    .replace(/\s*\(\d+p\)\s*/g, "")        // remove (720p), (1080p) etc.
    .replace(/\s*\[.*?\]\s*/g, "")          // remove [Geo-blocked] etc.
    .replace(/\s*(f?hd|uhd|sd|4k|h\.?265|hevc|plus)\s*$/i, "") // trailing quality tags
    .replace(/[^a-z0-9\u00C0-\u024F\u1E00-\u1EFF\u0400-\u04FF\u0600-\u06FF\u0E00-\u0E7F\u0900-\u097F\u3040-\u30FF\u4E00-\u9FFF\uAC00-\uD7AF]+/g, "") // keep alnum + Latin + Cyrillic + Arabic + Thai + Devanagari + CJK + Hangul
    .trim();
}

/* Yield to main thread so UI stays responsive */
function _yieldToMain() { return new Promise(r => setTimeout(r, 0)); }

async function _extractProgrammesForId(epgChId) {
  if (_epgLoadedIds.has(epgChId)) return; // already loaded
  _epgLoadedIds.add(epgChId);
  const pruneCutoff = Date.now() - 2 * 60 * 60 * 1000;

  try {
    const resp = await fetch("/api/epg/programmes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ urls: _epgUrlsConfigured, id: epgChId })
    });
    if (!resp.ok) return;
    const data = await resp.json();

    let count = 0;
    if (!epgData[epgChId]) epgData[epgChId] = [];

    for (const p of data.programmes) {
      if (p.stop && p.stop < pruneCutoff) continue;
      epgData[epgChId].push({ start: new Date(p.start), stop: new Date(p.stop), title: p.title });
      count++;
    }

    if (count > 0) {
      epgData[epgChId].sort((a, b) => a.start - b.start);
      console.log("[EPG] Lazy-loaded " + count + " programmes for " + epgChId);
      if (currentIdx >= 0 && allChannels[currentIdx]) {
        const chIdCheck = findEpgChannelId(allChannels[currentIdx].tvgId, allChannels[currentIdx].name);
        if (chIdCheck === epgChId) updateEpgDisplay();
      }
      if (typeof renderEpgPanel === "function" && document.getElementById("guideDrawer")?.classList.contains("open")) {
        renderEpgPanel();
      }
    }
  } catch (err) {
    console.warn("[EPG] Fetch programmes error:", err);
  }
}

/* Ensure EPG data is available for a given channel (lazy load from stored DOMs) */
function ensureEpgForChannel(tvgId, channelName) {
  if (_epgUrlsConfigured.length === 0) return; // no EPG sources loaded
  const chId = _findEpgChannelIdUncached(tvgId, channelName);
  if (!chId) return;
  if (!_epgLoadedIds.has(chId)) _extractProgrammesForId(chId);
}

async function loadEpgData(urls, merge) {
  if (!merge) { epgData = {}; epgChannelMap = {}; _epgUrlsConfigured = []; _epgLoadedIds.clear(); }

  // Update configured URLs list
  for (const u of urls) {
    if (!_epgUrlsConfigured.includes(u)) _epgUrlsConfigured.push(u);
  }

  // Invalidate lookup cache whenever EPG data changes
  _epgIdCache = Object.create(null);

  let totalMapChannels = 0;
  let loadedCount = 0;
  for (const url of urls) {
    try {
      console.log("[EPG] Fetching channel map via proxy:", url);
      const resp = await fetch("/api/epg/channels?url=" + encodeURIComponent(url));
      if (!resp.ok) { console.warn("[EPG] HTTP proxy failed", url); continue; }

      const data = await resp.json();

      Object.assign(epgChannelMap, data.channelMap);

      totalMapChannels += data.channelCount || Object.keys(data.channelMap).length;
      loadedCount++;
      console.log("[EPG] Indexed", data.channelCount || Object.keys(data.channelMap).length, "channels from proxy (programmes loaded on demand)");
    } catch (e) {
      console.warn("[EPG] Proxy load error:", url, e);
    }
  }
  // Invalidate cache after merge
  _epgIdCache = Object.create(null);

  // Eagerly load EPG only for the currently playing channel
  if (currentIdx >= 0 && currentIdx < allChannels.length) {
    const ch = allChannels[currentIdx];
    ensureEpgForChannel(ch.tvgId, ch.name);
  }

  // update display if currently playing
  updateEpgDisplay();
  // Invalidate known IDs cache
  _knownEpgIds = null;

}

/* ===== EPG LOOKUP CACHE ===== */
// Caches findEpgChannelId results so the expensive O(n) fuzzy loops only run once per channel.
// Invalidated whenever epgData / epgChannelMap changes (see loadEpgData).
let _epgIdCache = Object.create(null);

/* Find the EPG channel id that best matches a given tvgId / channel name */
function findEpgChannelId(tvgId, channelName) {
  // Build a stable cache key from the two inputs
  const cacheKey = (tvgId || "") + "\0" + (channelName || "");
  if (cacheKey in _epgIdCache) return _epgIdCache[cacheKey];

  const result = _findEpgChannelIdUncached(tvgId, channelName);
  _epgIdCache[cacheKey] = result;
  return result;
}

// Cached set of known EPG channel IDs — rebuilt when epgChannelMap changes
let _knownEpgIds = null;
let _knownEpgIdsMapSize = 0;
function _getKnownEpgIds() {
  const mapSize = Object.keys(epgChannelMap).length;
  if (!_knownEpgIds || _knownEpgIdsMapSize !== mapSize) {
    _knownEpgIds = new Set(Object.values(epgChannelMap));
    _knownEpgIdsMapSize = mapSize;
  }
  return _knownEpgIds;
}

function _findEpgChannelIdUncached(tvgId, channelName) {
  // With lazy EPG loading, we resolve channel IDs using epgChannelMap only
  // (programmes are NOT pre-loaded into epgData, they're extracted on demand)

  const _knownIds = _getKnownEpgIds();

  // 1. Direct tvg-id match
  if (tvgId && _knownIds.has(tvgId)) return tvgId;

  // 2. Try tvg-id without @SD/@HD suffix & case-insensitive
  if (tvgId) {
    const tvgLower = tvgId.toLowerCase();
    const idBase = tvgId.replace(/@(SD|HD|FHD|Plus\d*|\d+)$/i, "");
    const idBaseLower = idBase.toLowerCase();
    // tvg-id in channelMap
    if (epgChannelMap[tvgLower]) return epgChannelMap[tvgLower];
    if (epgChannelMap[idBaseLower]) return epgChannelMap[idBaseLower];
  }

  // 3. Map through epgChannelMap using channel name
  if (channelName) {
    const norm = normalizeChName(channelName);
    const nameLower = channelName.toLowerCase().trim();

    // exact display-name match
    if (epgChannelMap[nameLower]) return epgChannelMap[nameLower];
    // normalized match
    if (norm && epgChannelMap[norm]) return epgChannelMap[norm];

    // 3b. Substring / contains matching (e.g. M3U has "VTV3 HD" and EPG has "VTV3")
    for (const mapKey in epgChannelMap) {
      const shorter = nameLower.length <= mapKey.length ? nameLower : mapKey;
      const longer = nameLower.length > mapKey.length ? nameLower : mapKey;
      if (shorter.length < 3 || shorter.length / longer.length < 0.4) continue;
      if (longer.includes(shorter)) return epgChannelMap[mapKey];
    }
    if (norm) {
      for (const mapKey in epgChannelMap) {
        const mapNorm = normalizeChName(mapKey);
        if (!mapNorm) continue;
        const shorter = norm.length <= mapNorm.length ? norm : mapNorm;
        const longer = norm.length > mapNorm.length ? norm : mapNorm;
        if (shorter.length < 3 || shorter.length / longer.length < 0.4) continue;
        if (longer.includes(shorter)) return epgChannelMap[mapKey];
      }
    }
  }

  // 4. Try tvg-id as channel name in the map
  if (tvgId) {
    const tvgNorm = normalizeChName(tvgId);
    if (tvgNorm && epgChannelMap[tvgNorm]) return epgChannelMap[tvgNorm];
    const tvgLower = tvgId.toLowerCase();
    for (const mapKey in epgChannelMap) {
      const shorter = tvgLower.length <= mapKey.length ? tvgLower : mapKey;
      const longer = tvgLower.length > mapKey.length ? tvgLower : mapKey;
      if (shorter.length < 3 || shorter.length / longer.length < 0.4) continue;
      if (longer.includes(shorter)) return epgChannelMap[mapKey];
    }
  }

  return null;
}

function getCurrentProgram(tvgId, channelName) {
  const chId = findEpgChannelId(tvgId, channelName);
  if (!chId) return null;
  // Lazy load programmes for this channel if not yet parsed
  if (!_epgLoadedIds.has(chId)) _extractProgrammesForId(chId);
  if (!epgData[chId]) return null;
  const now = Date.now();
  const progs = epgData[chId];
  // Programs are sorted by start. Binary-search-like scan from the end
  // for the last program whose start <= now.
  for (let i = progs.length - 1; i >= 0; i--) {
    const p = progs[i];
    if (p.start.getTime() <= now) {
      if (p.stop && p.stop.getTime() > now) return p;
      if (!p.stop) return p;
      // This program already ended and all earlier ones started even earlier,
      // so none can be "now". Short-circuit.
      return null;
    }
  }
  return null;
}

function updateEpgDisplay() {
  if (!nowProgram) return;
  if (currentIdx < 0 || currentIdx >= allChannels.length) {
    nowProgram.style.display = "none";
    return;
  }
  const ch = allChannels[currentIdx];
  const prog = getCurrentProgram(ch.tvgId, ch.name);
  if (prog) {
    const timeStr = formatTime(prog.start) + (prog.stop ? " - " + formatTime(prog.stop) : "");
    nowProgram.textContent = "\u25B6 " + timeStr + "  " + prog.title;
    nowProgram.style.display = "block";
  } else {
    nowProgram.style.display = "none";
  }
}

function formatTime(d) {
  return d.getHours().toString().padStart(2, "0") + ":" + d.getMinutes().toString().padStart(2, "0");
}

// Refresh EPG display every 60s so it updates when programs change
let epgIntervalId = null;

/* ===== TOAST ===== */
let toastTimer = null;
function showToast(msg, ms) {
  if (!toast) return;
  clearTimeout(toastTimer);
  toast.textContent = msg;
  toast.classList.add("show");
  if (ms) toastTimer = setTimeout(() => toast.classList.remove("show"), ms);
}
function hideToast() { if (toast) { toast.classList.remove("show"); clearTimeout(toastTimer); } }

/* ===== MUTE / UNMUTE ===== */
function updateMuteIcon() {
  if (!btnUnmute) return;
  const v = getAppVolume();
  const m = isAppMuted();
  let svg;
  if (m || v === 0) svg = '<svg viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>';
  else if (v < 0.5) svg = '<svg viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>';
  else svg = '<svg viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>';
  btnUnmute.querySelector("#muteIcon").innerHTML = svg;
  btnUnmute.classList.toggle("active", !m && v > 0);
}
if (btnUnmute) btnUnmute.addEventListener("click", () => {
  setAppMuted(!isAppMuted());
  if (!isAppMuted() && getAppVolume() === 0) setAppVolume(0.5);
  updateMuteIcon();
  if (volumeSlider) volumeSlider.value = Math.round(isAppMuted() ? 0 : getAppVolume() * 100);
});

/* ===== VOLUME SLIDER ===== */
if (volumeSlider) {
  volumeSlider.value = Math.round(video.volume * 100);
  volumeSlider.addEventListener("input", () => {
    const val = parseInt(volumeSlider.value, 10) / 100;
    setAppVolume(val);
    setAppMuted(val === 0);
    updateMuteIcon();
  });
}

/* ===== PIP (directly on panel video) ===== */
if (btnPiP) btnPiP.addEventListener("click", async () => {
  try {
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
      return;
    }
    await video.requestPictureInPicture();
  } catch (e) { console.warn("PiP error:", e); showToast(t("pipNotSupported"), 2000); }
});

function onVolumeChange() {
  updateMuteIcon();
  if (volumeSlider) volumeSlider.value = Math.round(isAppMuted() ? 0 : getAppVolume() * 100);
}
if (video) {
  video.addEventListener("leavepictureinpicture", () => { if (btnPiP) btnPiP.classList.remove("active"); });
  video.addEventListener("enterpictureinpicture", () => { if (btnPiP) btnPiP.classList.add("active"); });
  video.addEventListener("volumechange", onVolumeChange);
}


/* ===== PLAY/PAUSE & SEEK CENTER CONTROLS ===== */
function updatePlayPauseIcon() {
  if (!btnPlayPause) return;
  const icon = document.getElementById("playPauseIcon");
  if (!icon) return;
  if (mediaEl.paused) {
    icon.innerHTML = '<polygon points="6 3 20 12 6 21 6 3"/>';
  } else {
    icon.innerHTML = '<line x1="10" y1="6" x2="10" y2="18"/><line x1="14" y1="6" x2="14" y2="18"/>';
  }
}
if (btnPlayPause) {
  btnPlayPause.addEventListener("click", () => {
    if (mediaEl.paused) mediaEl.play().catch(() => { });
    else mediaEl.pause();
  });
}
if (video) {
  video.addEventListener("play", updatePlayPauseIcon);
  video.addEventListener("pause", updatePlayPauseIcon);
}

if (btnSeekBack) btnSeekBack.addEventListener("click", () => { mediaEl.currentTime = Math.max(0, mediaEl.currentTime - 10); });
if (btnSeekFwd) btnSeekFwd.addEventListener("click", () => { mediaEl.currentTime += 10; });

/* ===== FULLSCREEN (open stream in new tab) ===== */
if (btnFull) btnFull.addEventListener("click", () => {
  if (currentIdx < 0 || !currentUrl) return;
  window.open(currentUrl, "_blank");
});

/* ===== PLAYER FULLSCREEN ===== */
if (btnPlayerFs) btnPlayerFs.addEventListener("click", () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.body.requestFullscreen();
  }
});
/* ===== FULLSCREEN CONTROLS AUTO-HIDE ===== */
const playerSection = document.getElementById("playerSection");
let _fsControlsTimer = null;
function showFsControls() {
  if (!document.fullscreenElement || !playerSection) return;
  playerSection.classList.add("controls-visible");
  clearTimeout(_fsControlsTimer);
  _fsControlsTimer = setTimeout(() => {
    playerSection.classList.remove("controls-visible");
  }, 3000);
}
if (playerSection) {
  playerSection.addEventListener("mousemove", showFsControls);
  playerSection.addEventListener("touchstart", showFsControls);
  playerSection.addEventListener("click", (e) => {
    if (document.fullscreenElement && !e.target.closest(".ctrl-btn,.ctrl-group")) showFsControls();
    if (document.pictureInPictureElement && !e.target.closest(".ctrl-btn,.ctrl-group")) {
      document.exitPictureInPicture().catch(() => { });
    }
  });
}

document.addEventListener("fullscreenchange", () => {
  if (btnPlayerFs) {
    btnPlayerFs.classList.toggle("active", !!document.fullscreenElement);
    btnPlayerFs.innerHTML = document.fullscreenElement
      ? '<svg viewBox="0 0 24 24"><path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M21 8h-3a2 2 0 0 1-2-2V3"/><path d="M3 16h3a2 2 0 0 1 2 2v3"/><path d="M16 21v-3a2 2 0 0 1 2-2h3"/></svg>'
      : '<svg viewBox="0 0 24 24"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>';
  }
  if (document.fullscreenElement) {
    showFsControls();
  } else {
    clearTimeout(_fsControlsTimer);
    if (playerSection) playerSection.classList.remove("controls-visible");
  }
});

/* ===== RETRY ===== */
if (btnRetry) btnRetry.addEventListener("click", () => {
  if (currentIdx < 0) return;
  playByIndex(currentIdx, { noScroll: true });
  showToast(t("reloading"), 1500);
});

/* ===== PLAY PREVIEW ===== */
function isHlsUrl(url) { return /\.m3u8?(\?|$)/i.test(url); }

function destroyHls() {
  if (hls) { hls.destroy(); hls = null; }
  hlsLevels = [];
  buildQualityMenu();
}

let _wasAutoMuted = false;
function safePlay() {
  var wasMuted = isAppMuted();
  // Only unmute for autoplay attempt if not manually muted by user
  if (!wasMuted) setAppMuted(false);
  const p = mediaEl.play();
  if (p !== undefined) {
    p.catch(err => {
      // Browser blocked autoplay with sound — mute and retry, unmute on first interaction
      if (err.name === 'NotAllowedError') {
        setAppMuted(true);
        if (!wasMuted) _wasAutoMuted = true;
        if (btnUnmute) {
          btnUnmute.querySelector("#muteIcon").innerHTML = '<svg viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>';
          btnUnmute.classList.remove("active");
        }
        mediaEl.muted = true;
      }
      mediaEl.play().catch(() => {
        // Last resort: some mobile browsers need load() before play()
        mediaEl.load();
        mediaEl.play().catch(() => { });
      });
    });
  }
}

// Automatically unmute on first user interaction if the browser forced it muted
function autoUnmuteHandler() {
  if (_wasAutoMuted && isAppMuted()) {
    setAppMuted(false);
    _wasAutoMuted = false;
    if (btnUnmute) {
      btnUnmute.querySelector("#muteIcon").innerHTML = '<svg viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>';
      btnUnmute.classList.add("active");
    }
  }
  document.removeEventListener('click', autoUnmuteHandler);
  document.removeEventListener('keydown', autoUnmuteHandler);
  document.removeEventListener('touchstart', autoUnmuteHandler);
}
document.addEventListener('click', autoUnmuteHandler);
document.addEventListener('keydown', autoUnmuteHandler);
document.addEventListener('touchstart', autoUnmuteHandler);

function playByIndex(idx, opts) {
  if (idx < 0 || idx >= allChannels.length) return;
  opts = opts || {};
  const prevIdx = currentIdx;
  currentIdx = idx;
  const ch = allChannels[idx];

  // Persist selected channel and tab in URL
  const url = new URL(window.location);
  url.searchParams.set("ch", ch.name || "");
  url.hash = currentCategory;
  history.replaceState(null, "", url);

  // highlight — only touch the old and new cards instead of scanning all .ch-card
  if (prevIdx >= 0) {
    const prev = grid && grid.querySelector('.ch-card[data-idx="' + prevIdx + '"]');
    if (prev) prev.classList.remove("active");
  }
  const card = grid && grid.querySelector('.ch-card[data-idx="' + idx + '"]');
  if (card) {
    card.classList.add("active");
    // Auto-scroll to the playing item
    if (!opts.noScroll) card.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  // update now-playing
  const _chTitle = ch.name || t("channelN") + (idx + 1);
  if (nowName) nowName.textContent = _chTitle;
  if (nowBar) nowBar.classList.add("live");
  updateMiniButtons();

  // Update Media Session (mobile lock screen / notification controls)
  if ("mediaSession" in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: _chTitle,
      artist: ch.isRadio ? "Radio" : "Live TV",
      artwork: ch.logo ? [{ src: ch.logo, sizes: "512x512", type: "image/png" }] : []
    });
    navigator.mediaSession.setActionHandler("play", () => { mediaEl.play().catch(() => { }); });
    navigator.mediaSession.setActionHandler("pause", () => { mediaEl.pause(); });
    navigator.mediaSession.setActionHandler("previoustrack", () => { if (typeof navigatePrev === "function") navigatePrev(); });
    navigator.mediaSession.setActionHandler("nexttrack", () => { if (typeof navigateNext === "function") navigateNext(); });
  }

  // radio overlay
  const radioOv = document.getElementById("radioOverlay");
  const radioOvCover = document.getElementById("radioOverlayCoverDark");
  const radioDiscLabel = document.getElementById("radioDiscLabel");
  // Switch media element based on channel type
  // Radio channels use <audio> for direct URLs (works in mobile background).
  // HLS.js requires <video> for MediaSource/TS demuxing.
  const prevMediaEl = mediaEl;
  mediaEl = video;

  // Hide PiP for radio (no video to pip)
  if (btnPiP) btnPiP.style.display = ch.isRadio ? "none" : "";

  // radio overlay (after mediaEl is set so visualizer taps the right element)
  if (radioOv) {
    if (ch.isRadio) {
      radioOv.classList.add("active");
      if (radioOvCover) {
        const _thumb = radioOvCover.querySelector('#radioOverlayThumb');
        const _title = radioOvCover.querySelector('#radioOverlayTitle');
        if (_thumb) {
          _thumb.src = ch.logo || fallbackImg;
          _thumb.onerror = function () { this.onerror = null; this.src = fallbackImg; };
        }
        if (_title) setupMarquee(_title, ch.name || '');
      }
      if (radioDiscLabel) {
        const discImg = new Image();
        discImg.onload = function () { radioDiscLabel.style.backgroundImage = `url(${this.src})`; };
        discImg.onerror = function () { radioDiscLabel.style.backgroundImage = 'none'; };
        discImg.src = ch.logo || fallbackImg;
      }
    } else {
      radioOv.classList.remove("active");
      stopVisualizer();
    }
  }
  // Pause & clean up previous element
  prevMediaEl.pause();
  if (prevMediaEl !== mediaEl) {
    prevMediaEl.removeAttribute("src");
    prevMediaEl.load();
  }
  // Sync volume from previous element
  var prevVol = _gainNode ? _userVolume : prevMediaEl.volume;
  var prevMut = _gainNode ? _userMuted : prevMediaEl.muted;
  setAppVolume(prevVol);
  setAppMuted(prevMut);

  destroyHls();
  clearTimeout(retryTimer);
  clearTimeout(stallTimer);
  retryCount = 0;
  _playbackStopped = false;
  _nativeHlsUseProxy = false;
  _nativeHlsProxyRetried = false;
  currentUrl = ch.url;

  if (typeof Hls !== "undefined" && Hls.isSupported() && isHlsUrl(ch.url)) {
    // ---- HLS.js path (most IPTV streams) ----
    let _hlsProxyRetried = false; // guard: only escalate to proxy once per channel

    function buildHlsInstance(sourceUrl, useProxy) {
      if (hls) { hls.destroy(); hls = null; }

      hls = new Hls({
        maxBufferLength: 10,
        maxMaxBufferLength: 30,
        maxBufferSize: 15 * 1024 * 1024,
        maxBufferHole: 1.5,
        lowLatencyMode: false,
        enableWorker: true,
        startLevel: -1,
        abrEwmaDefaultEstimate: 5000000,
        liveSyncDurationCount: 2,
        liveBackBufferLength: 10,
        fragLoadingTimeOut: 20000,
        fragLoadingMaxRetry: 6,
        fragLoadingRetryDelay: 500,
        fragLoadingMaxRetryTimeout: 15000,
        manifestLoadingTimeOut: 15000,
        manifestLoadingMaxRetry: 4,
        manifestLoadingRetryDelay: 500,
        levelLoadingTimeOut: 15000,
        levelLoadingMaxRetry: 4,
        levelLoadingRetryDelay: 500,
        startFragPrefetch: true,
        xhrSetup: function (xhr, url) { xhr.withCredentials = false; },
        backBufferLength: 10,
        progressive: true,
        testBandwidth: true,
        nudgeMaxRetry: 5,
        maxFragLookUpTolerance: 0.5
      });

      let hlsMediaRecoveryAttempts = 0;
      let hlsNetworkRetries = 0;

      hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        hls.loadSource(sourceUrl);
      });

      hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
        hlsLevels = hls.levels || [];
        buildQualityMenu();
        safePlay();
        if (useProxy) console.log("[HLS] Playing via proxy:", sourceUrl);
      });

      // Handle discontinuities in radio streams: flush old buffer then recover
      let _lastCC = 0;
      hls.on(Hls.Events.FRAG_CHANGED, (event, data) => {
        if (!ch.isRadio) return;
        const frag = data.frag;
        if (!frag || frag.cc === _lastCC) return;
        const prevCC = _lastCC;
        _lastCC = frag.cc;
        if (prevCC === 0 && frag.cc === 0) return;
        console.log("[HLS] Radio discontinuity (cc " + prevCC + " → " + frag.cc + ") — flushing buffer & recovering");
        try {
          // Flush buffered data before the discontinuity point
          const flushEnd = frag.start;
          if (flushEnd > 0) {
            hls.trigger(Hls.Events.BUFFER_FLUSHING, { startOffset: 0, endOffset: flushEnd });
          }
          // Recover media to handle potential codec change across discontinuity
          hls.recoverMediaError();
        } catch (e) { }
      });

      hls.on(Hls.Events.FRAG_LOADED, () => {
        hlsMediaRecoveryAttempts = 0;
        hlsNetworkRetries = 0;
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (!data.fatal) return;
        console.warn("HLS fatal error:", data.type, data.details);
        switch (data.type) {
          case Hls.ErrorTypes.NETWORK_ERROR:
            if (data.details === "manifestLoadError" || data.details === "manifestLoadTimeOut" || data.details === "manifestParsingError") {
              // First failure on a direct URL → escalate to HLS proxy (handles CORS)
              if (!_hlsProxyRetried && !useProxy) {
                _hlsProxyRetried = true;
                showToast(t("retryProxy"), 0);
                console.warn("[HLS] Switching to HLS proxy for:", ch.url);
                const proxiedUrl = "/api/hls?url=" + encodeURIComponent(ch.url);
                buildHlsInstance(proxiedUrl, true);
                hls.attachMedia(mediaEl);
              } else {
                hlsNetworkRetries++;
                if (hlsNetworkRetries > MAX_RETRIES) {
                  console.warn("[HLS] Max retries reached, stopping playback");
                  _playbackStopped = true;
                  showToast(t("playErrorFinal"), 0);
                  destroyHls();
                  clearTimeout(stallTimer);
                  clearTimeout(retryTimer);
                } else {
                  showToast(t("networkError"), 0);
                  setTimeout(() => { if (hls) hls.loadSource(sourceUrl); }, 4000);
                }
              }
            } else {
              hls.startLoad();
            }
            break;
          case Hls.ErrorTypes.MEDIA_ERROR:
            showToast(t("mediaError"), 0);
            hlsMediaRecoveryAttempts++;
            if (hlsMediaRecoveryAttempts <= 2) {
              hls.recoverMediaError();
            } else {
              hls.swapAudioCodec();
              hls.recoverMediaError();
              hlsMediaRecoveryAttempts = 0;
            }
            break;
          default:
            destroyHls();
            doRetry();
            break;
        }
      });
    }

    buildHlsInstance(ch.url, false);
    hls.attachMedia(mediaEl);
  } else if (!_nativeHlsUseProxy && typeof Hls !== "undefined" && !Hls.isSupported() && isHlsUrl(ch.url)) {
    // ---- Native HLS path (iOS Safari / browsers without MSE) ----
    // Try direct URL first; on error the handler will escalate to proxy
    _nativeHlsProxyRetried = false;
    mediaEl.src = ch.url;
    mediaEl.load();
    safePlay();
  } else {
    // ---- Native path (direct .ts / .mp4 / proxy-escalated HLS) ----
    if (_nativeHlsUseProxy && isHlsUrl(ch.url)) {
      mediaEl.src = "/api/hls?url=" + encodeURIComponent(ch.url);
    } else {
      mediaEl.src = ch.url;
    }
    mediaEl.load();
    safePlay();
  }

  resetStallTimer();

  // Load EPG for this channel AFTER playback has started (non-blocking)
  setTimeout(() => {
    if (currentIdx !== idx) return; // user already switched away
    ensureEpgForChannel(ch.tvgId, ch.name);
    updateEpgDisplay();
    if (typeof renderEpgPanel === "function" && document.getElementById("guideDrawer")?.classList.contains("open")) renderEpgPanel();
  }, 300);

  // Push new channel to Chromecast if casting
  if (typeof window.__castLoadMedia === "function") window.__castLoadMedia();
}

function doRetry() {
  if (currentIdx < 0 || _playbackStopped) return;
  retryCount++;
  if (retryCount <= MAX_RETRIES) {
    const delay = Math.min(retryCount * 1500, 5000);
    showToast(t("playErrorRetry"), 0);
    retryTimer = setTimeout(() => playByIndex(currentIdx, { noScroll: true }), delay);
  } else {
    _playbackStopped = true;
    showToast(t("playErrorFinal"), 0);
    // Stop playback completely after max retries
    clearTimeout(stallTimer);
    clearTimeout(retryTimer);
    if (hls) { hls.destroy(); hls = null; }
  }
}

/* ===== STALL WATCHDOG ===== */
let _lastStallReset = 0;
function resetStallTimer() {
  clearTimeout(stallTimer);
  if (currentIdx < 0) return;
  stallTimer = setTimeout(() => {
    if (currentIdx < 0 || _playbackStopped) return;
    // If using hls.js, try recovery first
    if (hls) {
      showToast(t("reconnecting"), 0);
      hls.startLoad();
      resetStallTimer();
      return;
    }
    showToast(t("reconnecting"), 0);
    playByIndex(currentIdx, { noScroll: true });
  }, STALL_TIMEOUT);
}
/* Throttled version — only resets at most once every 5s from timeupdate */
function resetStallTimerThrottled() {
  const now = Date.now();
  if (now - _lastStallReset < 5000) return;
  _lastStallReset = now;
  resetStallTimer();
}

/* ===== VIDEO EVENTS ===== */
function bindMediaEvents(el) {
  el.addEventListener("playing", () => {
    if (el !== mediaEl) return;
    hideToast();
    if (nowBar) nowBar.classList.add("live");
    retryCount = 0;
    resetStallTimer();
    // Start visualizer once audio is actually flowing
    if (currentIdx >= 0 && allChannels[currentIdx] && allChannels[currentIdx].isRadio) {
      startVisualizer();
    }
  });
  el.addEventListener("timeupdate", () => { if (el === mediaEl) resetStallTimerThrottled(); });
  el.addEventListener("waiting", () => { if (el === mediaEl) showToast(t("loading"), 0); });
  el.addEventListener("error", () => {
    if (el !== mediaEl) return;
    if (nowBar) nowBar.classList.remove("live");
    clearTimeout(stallTimer);
    if (currentIdx < 0 || _playbackStopped) return;
    if (hls) return;
    // Native HLS: escalate to proxy on first failure (handles CORS on iOS Safari)
    if (!_nativeHlsProxyRetried && isHlsUrl(currentUrl)) {
      _nativeHlsProxyRetried = true;
      _nativeHlsUseProxy = true;
      console.warn("[Native HLS] Switching to proxy for:", currentUrl);
      showToast(t("retryProxy"), 0);
      mediaEl.src = "/api/hls?url=" + encodeURIComponent(currentUrl);
      mediaEl.load();
      safePlay();
      resetStallTimer();
      return;
    }
    doRetry();
  });
  el.addEventListener("stalled", () => { /* watchdog handles it */ });
  el.addEventListener("canplay", () => { if (el === mediaEl) { hideToast(); retryCount = 0; clearTimeout(retryTimer); } });
}
if (video) bindMediaEvents(video);


/* ===== TOGGLE FAVORITE ===== */
function toggleFav(ch) {
  const i = favorites.findIndex(f => f.url === ch.url);
  if (i === -1) favorites.push(ch); else favorites.splice(i, 1);
  localStorage.setItem("fav", JSON.stringify(favorites));
  renderGrid();
  updateMiniButtons();
}

/* ===== RENDER CARD ===== */
function makeCard(ch, idx, container) {
  const div = document.createElement("div");
  div.className = "ch-card";
  div.dataset.idx = idx;

  const img = document.createElement("img");
  img.src = ch.logo || fallbackImg;
  img.onerror = function () { this.onerror = null; this.src = fallbackImg; };
  img.alt = ch.name;
  img.loading = "lazy";

  const name = document.createElement("div");
  name.className = "ch-name";
  name.textContent = ch.name;

  const star = document.createElement("div");
  const isFav = favorites.some(f => f.url === ch.url);
  star.className = "ch-star" + (isFav ? " on" : "");
  star.textContent = "\u2605";
  star.onclick = (e) => { e.stopPropagation(); toggleFav(ch); };

  div.onclick = () => {
    playByIndex(idx);
    closeList();
  };
  div.append(img, name, star);
  container.appendChild(div);
}

/* ===== RENDER GRID ===== */
function renderGrid() {
  if (!grid) return;
  const q = (searchIn ? searchIn.value : "").toLowerCase();
  const frag = document.createDocumentFragment();
  const isFavCat = currentCategory === "fav";
  const isRadioCat = currentCategory === "radio";
  let count = 0;
  let tvCount = 0;
  let radioCount = 0;
  let favCount = 0;
  allChannels.forEach((ch, i) => {
    if (hidden.has(ch.url)) return;
    const isFav = favorites.some(f => f.url === ch.url);
    if (isFav) favCount++;
    if (ch.isRadio) radioCount++; else tvCount++;
    if (isFavCat) {
      if (!isFav) return;
    } else {
      if (!!ch.isRadio !== isRadioCat) return;
    }
    if (q && !ch.name.toLowerCase().includes(q)) return;
    makeCard(ch, i, frag);
    count++;
  });
  grid.innerHTML = "";
  grid.appendChild(frag);
  if (emptyState) emptyState.classList.toggle("show", count === 0 && allChannels.length > 0);
  if (currentIdx >= 0) {
    const active = grid.querySelector('[data-idx="' + currentIdx + '"]');
    if (active) active.classList.add("active");
  }

  // Update badges
  const favBadge = document.querySelector('.cat-tab[data-cat="fav"] .badge');
  const tvBadge = document.querySelector('.cat-tab[data-cat="tv"] .badge');
  const radioBadge = document.querySelector('.cat-tab[data-cat="radio"] .badge');
  if (favBadge) favBadge.textContent = favCount;
  if (tvBadge) tvBadge.textContent = tvCount;
  if (radioBadge) radioBadge.textContent = radioCount;
}

/* ===== CHANNEL CHECK ===== */
const probeV = (() => {
  const v = document.createElement("video");
  v.style.cssText = "position:absolute;left:-9999px;width:1px;height:1px";
  v.muted = true; v.playsInline = true;
  document.body.appendChild(v);
  return v;
})();

function probeUrl(url, ms) {
  ms = ms || 8000;
  return new Promise(resolve => {
    let done = false;
    const v = probeV;
    function end(ok) { if (done) return; done = true; cleanup(); resolve(ok); }
    function cleanup() {
      v.removeEventListener("canplay", onOk);
      v.removeEventListener("loadedmetadata", onOk);
      v.removeEventListener("error", onFail);
      try { v.pause(); v.src = ""; v.load(); } catch (e) { }
    }
    function onOk() { end(true); }
    function onFail() { end(false); }
    v.addEventListener("canplay", onOk);
    v.addEventListener("loadedmetadata", onOk);
    v.addEventListener("error", onFail);
    try {
      v.src = url;
      var p = v.play();
      if (p && p.catch) p.catch(function () { });
    } catch (e) { end(false); return; }
    setTimeout(function () { end(false); }, ms);
  });
}

async function checkAll() {
  if (!btnCheck) return;
  btnCheck.disabled = true;
  hidden.clear();
  saveHidden();
  renderGrid();
  for (let i = 0; i < allChannels.length; i++) {
    const ch = allChannels[i];
    if (!ch || !ch.url) continue;
    btnCheck.querySelector("span:last-child").textContent = t("checking") + " " + (i + 1) + "/" + allChannels.length;
    const card = document.querySelector('[data-idx="' + i + '"]');
    if (card) card.classList.add("checking");
    const ok = await probeUrl(ch.url, 8000);
    if (!ok) hidden.add(ch.url);
    if (card) card.classList.remove("checking");
    // Update individual card visibility instead of full re-render
    if (!ok && card) card.style.display = "none";
    saveHidden();
  }
  renderGrid(); // single re-render at the end
  btnCheck.disabled = false;
  btnCheck.querySelector("span:last-child").textContent = t("checkBtn");
}

if (btnCheck) btnCheck.onclick = checkAll;
if (btnReset) btnReset.onclick = () => { hidden.clear(); saveHidden(); renderGrid(); };

/* ===== SEARCH & TABS ===== */
let searchTimer = null;
if (searchIn) searchIn.addEventListener("input", () => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(renderGrid, 200);
});

const catTabs = document.querySelectorAll(".cat-tab");
if (catTabs.length > 0) {
  // Restore active tab from URL hash
  const hashCat = window.location.hash.replace("#", "");
  if (["tv", "radio", "fav"].includes(hashCat)) {
    currentCategory = hashCat;
    catTabs.forEach(b => b.classList.toggle("active", b.dataset.cat === hashCat));
  }

  catTabs.forEach(btn => {
    btn.addEventListener("click", () => {
      catTabs.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.cat;
      const url = new URL(window.location);
      url.hash = currentCategory;
      history.replaceState(null, "", url);
      renderGrid();
    });
  });
}

/* ===== SOURCES ===== */
function getAllSources() { return [...DEFAULT_SOURCES, ...sources]; }

function showEmptyState() {
  allChannels = [];
  currentIdx = -1;
  currentUrl = "";
  hidden.clear();
  saveHidden();
  mediaEl.pause();
  destroyHls();
  mediaEl.removeAttribute("src");
  mediaEl.load();
  clearTimeout(retryTimer);
  clearTimeout(stallTimer);
  if (grid) grid.innerHTML = "";
  if (nowName) nowName.textContent = t("noChannel");
  if (nowBar) nowBar.classList.remove("live");
  renderGrid();
  if (emptyState) {
    emptyState.classList.add("show");
    emptyState.querySelector(".icon").textContent = "\uD83D\uDCFA";
    emptyState.querySelector("div:last-child").textContent = t("selectSource");
  }
}

function saveSources() {
  localStorage.setItem("sources", JSON.stringify(sources));
  localStorage.setItem("activeSources", JSON.stringify([...activeSources]));
}

function startRenameSource(i, div, nameEl) {
  const srcIdx = i - DEFAULT_SOURCES.length; // index in custom sources array
  if (srcIdx < 0) return;
  // Already editing?
  if (div.querySelector(".src-name-input")) return;

  const oldName = sources[srcIdx].name || sources[srcIdx].url;
  nameEl.style.display = "none";

  const input = document.createElement("input");
  input.className = "src-name-input";
  input.value = oldName;
  input.maxLength = 60;
  div.insertBefore(input, nameEl.nextSibling);
  input.focus();
  input.select();

  function commit() {
    const newName = input.value.trim();
    if (newName && newName !== oldName) {
      sources[srcIdx].name = newName;
      saveSources();
      showToast(t("renamed"), 1500);
    }
    renderSources();
  }
  function cancel() {
    nameEl.style.display = "";
    if (input.parentNode) input.remove();
  }

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { e.preventDefault(); commit(); }
    if (e.key === "Escape") { e.preventDefault(); cancel(); }
  });
  input.addEventListener("blur", commit);
}

function renderSources() {
  if (!sourceListEl) return;
  sourceListEl.innerHTML = "";
  const all = getAllSources();
  all.forEach((src, i) => {
    const div = document.createElement("div");
    div.className = "source-item" + (activeSources.has(i) ? " active" : "");
    div.style.cursor = "pointer";

    const name = document.createElement("span");
    name.className = "src-name";
    name.textContent = src.name || src.url;
    name.title = src.url;

    div.appendChild(name);

    if (src.default) {
      const badge = document.createElement("span");
      badge.className = "src-default";
      badge.textContent = t("defaultBadge");
      div.appendChild(badge);
    } else {
      // Rename button
      const ren = document.createElement("button");
      ren.className = "src-rename";
      ren.textContent = "\u270E";
      ren.title = t("renameTip");
      ren.addEventListener("click", (e) => {
        e.stopPropagation();
        startRenameSource(i, div, name);
      });
      div.appendChild(ren);

      // Double-click name to rename
      name.addEventListener("dblclick", (e) => {
        e.stopPropagation();
        startRenameSource(i, div, name);
      });

      const del = document.createElement("button");
      del.className = "src-del";
      del.textContent = "\u00D7";
      del.title = t("deleteTip");
      del.addEventListener("click", (e) => {
        e.stopPropagation();
        const srcIdx = i - DEFAULT_SOURCES.length; // index in the custom sources array
        sources.splice(srcIdx, 1);
        // Rebuild activeSources set with adjusted indices
        const newActive = new Set();
        for (const ai of activeSources) {
          if (ai === i) continue; // removed
          if (ai > i) newActive.add(ai - 1);
          else newActive.add(ai);
        }
        activeSources = newActive;
        saveSources();
        renderSources();
        loadActiveSources();
      });
      div.appendChild(del);
    }

    div.addEventListener("click", () => {
      if (activeSources.has(i)) {
        activeSources.delete(i);
      } else {
        activeSources.add(i);
      }
      saveSources();
      renderSources();
      loadActiveSources();
    });

    sourceListEl.appendChild(div);
  });
}

function addSource() {
  if (!addSourceInput) return;
  let url = addSourceInput.value.trim();
  if (!url) return;
  // basic validation
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    showToast(t("invalidUrl"), 2500);
    return;
  }
  // extract a name from URL
  let name = url;
  try {
    const parts = new URL(url).pathname.split("/");
    const file = parts[parts.length - 1] || parts[parts.length - 2] || "";
    if (file) name = decodeURIComponent(file.replace(/\.(m3u8?|txt)$/i, ""));
  } catch (e) { }

  sources.push({ name: name, url: url });
  activeSources.add(getAllSources().length - 1);
  saveSources();
  addSourceInput.value = "";
  renderSources();
  loadActiveSources();
  showToast(t("addedSource"), 2000);
}

// Toggle source panel
if (sourceToggle) sourceToggle.addEventListener("click", () => {
  sourceToggle.classList.toggle("open");
  if (sourceBody) sourceBody.classList.toggle("open");
});

if (addSourceBtn) addSourceBtn.addEventListener("click", addSource);
if (addSourceInput) addSourceInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addSource();
});

/* ===== FILE UPLOAD ===== */
const fileInput = document.getElementById("fileSourceInput");
if (fileInput) fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const text = reader.result;
    const result = parseM3U(text);
    if (result.channels.length === 0) {
      showToast(t("noChannelInFile"), 2500);
      return;
    }
    // Save as a local source (store the M3U content directly)
    const name = file.name.replace(/\.(m3u8?|txt)$/i, "");
    sources.push({ name: "\uD83D\uDCC1 " + name, url: "", local: true, content: text });
    activeSources.add(getAllSources().length - 1);
    saveSources();
    renderSources();
    loadActiveSources();
    showToast(t("addedFile"), 2500);
  };
  reader.readAsText(file);
  fileInput.value = "";
});

/* ===== PARSE M3U TEXT ===== */
function parseM3U(text) {
  const channels = [];
  const lines = text.split(/\r?\n/);
  let cur = null;
  let epgUrl = "";
  for (const raw of lines) {
    const line = raw.trim();
    if (!line || line.startsWith("#EXTVLCOPT") || line.includes("catchup=")) continue;
    if (line.startsWith("#EXTM3U")) {
      const urlTvg = line.match(/url-tvg="([^"]+)"/);
      if (urlTvg) epgUrl = urlTvg[1];
      // Also try x-tvg-url (common alternative)
      if (!epgUrl) {
        const xTvg = line.match(/x-tvg-url="([^"]+)"/);
        if (xTvg) epgUrl = xTvg[1];
      }
      continue;
    }
    if (line.startsWith("#EXTINF")) {
      const logo = line.match(/tvg-logo="([^"]+)"/);
      const tvgId = line.match(/tvg-id="([^"]+)"/);
      const tvgName = line.match(/tvg-name="([^"]+)"/);
      const lineLower = line.toLowerCase();
      const isRadio = lineLower.includes('radio="true"') || lineLower.includes('radio=true') || lineLower.includes('group-title="radio"') || lineLower.includes('radio') || lineLower.includes('vov') || lineLower.includes('audio');
      const rawNm = line.split(",").pop();
      const nm = rawNm
        .replace(/\s*This m3u file[^-]*-\s*/i, '') // strip watermark
        .replace(/^\s*\([^)]*\)\s*/, '')             // strip leading (anytext)
        .trim() || rawNm.trim();
      cur = { name: nm, logo: logo ? logo[1] : "", url: "", tvgId: tvgId ? tvgId[1] : (tvgName ? tvgName[1] : ""), isRadio: isRadio };
    } else if (line.startsWith("http") && cur) {
      cur.url = line;
      if (!cur.isRadio) {
        const lowerUrl = line.toLowerCase();
        if (lowerUrl.includes("radio") || lowerUrl.includes("vov") || lowerUrl.includes("audio")) {
          cur.isRadio = true;
        }
      }
      channels.push(cur);
      cur = null;
    }
  }
  return { channels, epgUrl };
}

/* ===== LOAD FROM ACTIVE SOURCES ===== */
async function loadActiveSources() {
  const all = getAllSources();
  const indices = [...activeSources].filter(i => i >= 0 && i < all.length).sort((a, b) => a - b);

  if (indices.length === 0) {
    showEmptyState();
    return;
  }

  allChannels = [];
  currentIdx = -1;
  currentUrl = "";
  hidden.clear();
  saveHidden();
  if (grid) grid.innerHTML = "";

  if (emptyState) emptyState.classList.add("show");
  if (emptyState) {
    emptyState.querySelector(".icon").textContent = "\uD83D\uDCE1";
    emptyState.querySelector("div:last-child").textContent = t("loadingSources").replace("{n}", indices.length);
  }

  let errors = 0;
  const epgUrls = new Set();
  for (const idx of indices) {
    const src = all[idx];
    try {
      let result = { channels: [], epgUrl: "" };
      if (src.local && src.content) {
        result = parseM3U(src.content);
      } else {
        let text = null;

        // 1st attempt: direct fetch
        try {
          const resp = await fetch(src.url);
          if (resp && resp.ok) text = await resp.text();
        } catch (err) {
          console.warn("[Source] Direct fetch failed, will try proxy:", err.message);
        }

        // 2nd attempt: route through local proxy server as fallback
        if (text === null) {
          try {
            showToast(t("retryProxy"), 0);
            const proxyResp = await fetch("/api/proxy?url=" + encodeURIComponent(src.url));
            if (proxyResp && proxyResp.ok) {
              text = await proxyResp.text();
              console.log("[Source] Loaded via proxy:", src.url);
            }
          } catch (proxyErr) {
            console.warn("[Source] Proxy fetch also failed:", proxyErr.message);
          }
        }

        if (text === null) throw new Error("All fetch attempts failed (direct + proxy)");
        result = parseM3U(text);
      }
      allChannels = allChannels.concat(result.channels);
      if (result.epgUrl) epgUrls.add(result.epgUrl);
    } catch (e) {
      console.error("L\u1ED7i t\u1EA3i:", src.name || src.url, e);
      errors++;
    }
  }

  renderGrid();

  if (allChannels.length === 0) {
    if (emptyState) {
      emptyState.querySelector(".icon").textContent = "\u26A0\uFE0F";
      emptyState.querySelector("div:last-child").textContent = errors > 0
        ? t("cantLoadSource")
        : t("noChannelFound");
    }
  } else {
    if (errors > 0) showToast(t("sourceError").replace("{e}", errors).replace("{n}", allChannels.length), 3000);
    else showToast(t("sourceOk").replace("{n}", allChannels.length).replace("{s}", indices.length), 2000);

    // Auto-play: URL param > pinned channel > first channel
    const urlCh = new URLSearchParams(window.location.search).get("ch");
    let autoIdx = -1;
    if (urlCh) {
      autoIdx = allChannels.findIndex(c => c.name === urlCh);
    }
    if (autoIdx < 0 && pinnedUrl) {
      autoIdx = allChannels.findIndex(c => c.url === pinnedUrl);
    }
    if (autoIdx < 0 && allChannels.length > 0) {
      autoIdx = 0;
    }
    // Auto-switch to the best tab for the playing channel on first load (prefer fav)
    if (autoIdx >= 0) {
      const _ch = allChannels[autoIdx];
      const _isFav = favorites.some(f => f.url === _ch.url);
      const bestTab = _isFav ? "fav" : (_ch.isRadio ? "radio" : "tv");
      if (currentCategory !== bestTab) {
        currentCategory = bestTab;
        const _tabs = document.querySelectorAll(".cat-tab");
        _tabs.forEach(b => b.classList.toggle("active", b.dataset.cat === bestTab));
        renderGrid();
      }
      playByIndex(autoIdx);
    }
  }

  // Load EPG data AFTER playback has started — defer so video gets priority
  if (epgUrls.size > 0) {
    console.log("[EPG] Found EPG URLs in M3U:", [...epgUrls]);
    setTimeout(() => loadEpgData([...epgUrls]), 3000);
  } else {
    console.log("[EPG] No EPG URL found in M3U sources. Use manual EPG URL input in EPG panel.");
  }
}

/* ===== INIT ===== */
// Clean up invalid indices
const maxIdx = getAllSources().length;
activeSources = new Set([...activeSources].filter(i => i >= 0 && i < maxIdx));
renderSources();
if (activeSources.size > 0) {
  loadActiveSources();
} else {
  // First boot: show empty, user must pick a source
  renderGrid();
  if (emptyState) {
    emptyState.classList.add("show");
    emptyState.querySelector(".icon").textContent = "\uD83D\uDCFA";
    emptyState.querySelector("div:last-child").textContent = t("selectSource");
  }
}

/* ===== COLLAPSE / EXPAND CONTROLS ===== */
(function () {
  var ctrlBottom = document.getElementById("controlsBottom");
  // Right side collapsible
  var moreBtn = document.getElementById("moreBtn");
  var collapsible = document.getElementById("ctrlCollapsible");
  // Left side collapsible
  var moreBtnL = document.getElementById("moreBtnLeft");
  var collLeft = document.getElementById("ctrlCollapsibleLeft");
  var collSeek = document.getElementById("ctrlCollapsibleLeftSeek");
  var collSeek2 = document.getElementById("ctrlCollapsibleLeftSeek2");
  if (!ctrlBottom) return;

  var leftCollapsibles = [collLeft, collSeek, collSeek2].filter(Boolean);

  function checkOverflow() {
    // Temporarily expand everything to measure natural width
    ctrlBottom.classList.remove("ctrl-overflow");
    if (collapsible) collapsible.classList.remove("expanded");
    leftCollapsibles.forEach(function (c) { c.classList.remove("expanded"); });
    var overflow = ctrlBottom.scrollWidth > ctrlBottom.clientWidth;
    if (overflow) ctrlBottom.classList.add("ctrl-overflow");
    else ctrlBottom.classList.remove("ctrl-overflow");
  }

  if (moreBtn && collapsible) {
    moreBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      collapsible.classList.toggle("expanded");
      moreBtn.classList.toggle("active", collapsible.classList.contains("expanded"));
    });
  }

  if (moreBtnL && leftCollapsibles.length) {
    moreBtnL.addEventListener("click", function (e) {
      e.stopPropagation();
      var expanding = !leftCollapsibles[0].classList.contains("expanded");
      leftCollapsibles.forEach(function (c) { c.classList.toggle("expanded", expanding); });
      moreBtnL.classList.toggle("active", expanding);
    });
  }

  var ro = new ResizeObserver(checkOverflow);
  ro.observe(ctrlBottom);
  checkOverflow();
})();

/* ===== SCROLL TO TOP ===== */
const scrollBtn = document.getElementById("scrollTop");
const channelDrawer = document.getElementById("channelDrawer");
const gridEl = document.getElementById("channelGrid");
if (scrollBtn) {
  let _scrollTicking = false;
  const onScroll = () => {
    if (!_scrollTicking) {
      _scrollTicking = true;
      requestAnimationFrame(() => {
        const top = Math.max(window.scrollY, gridEl ? gridEl.scrollTop : 0, channelDrawer ? channelDrawer.scrollTop : 0);
        scrollBtn.classList.toggle("show", top > 300);
        _scrollTicking = false;
      });
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  if (gridEl) gridEl.addEventListener("scroll", onScroll, { passive: true });
  if (channelDrawer) channelDrawer.addEventListener("scroll", onScroll, { passive: true });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (gridEl) gridEl.scrollTo({ top: 0, behavior: "smooth" });
    if (channelDrawer) channelDrawer.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ===== QUICK SWITCH MODAL ===== */

/* ===== PIN / FAV / HIDE MINI BUTTONS ===== */
function updateMiniButtons() {
  const ch = currentIdx >= 0 ? allChannels[currentIdx] : null;
  // Pin button
  if (pinBtn) {
    pinBtn.classList.toggle("active", ch && pinnedUrl === ch.url);
  }
  // Fav button
  if (favBtn) {
    const isFav = ch && favorites.some(f => f.url === ch.url);
    favBtn.classList.toggle("active", !!isFav);
  }
  // Hide button - only enable when a channel is selected
  if (hideBtn) {
    hideBtn.disabled = !ch;
  }
}

if (pinBtn) {
  pinBtn.addEventListener("click", () => {
    if (currentIdx < 0) return;
    const ch = allChannels[currentIdx];
    if (!ch) return;
    if (pinnedUrl === ch.url) {
      pinnedUrl = "";
      localStorage.removeItem("pinnedChannel");
      showToast(t("unpinnedToast"), 2000);
    } else {
      pinnedUrl = ch.url;
      localStorage.setItem("pinnedChannel", ch.url);
      showToast(t("pinnedToast"), 2000);
    }
    updateMiniButtons();
  });
}

if (favBtn) {
  favBtn.addEventListener("click", () => {
    if (currentIdx < 0) return;
    const ch = allChannels[currentIdx];
    if (!ch) return;
    toggleFav(ch);
    updateMiniButtons();
  });
}

if (hideBtn) {
  hideBtn.addEventListener("click", () => {
    if (currentIdx < 0) return;
    const ch = allChannels[currentIdx];
    if (!ch) return;
    hidden.add(ch.url);
    saveHidden();
    renderGrid();
    updateMiniButtons();
  });
}

/* ===== LANGUAGE SWITCHER ===== */
const langBtn = document.getElementById("langBtn");
const langFlag = document.getElementById("langFlag");
const langMenu = document.getElementById("langMenu");

function applyLang() {
  const L = LANGS[currentLang] || LANGS.vi;
  // Update lang button (icon-only: just flag)
  if (langFlag) langFlag.textContent = L.flag;

  // Static HTML elements
  if (nowName && currentIdx < 0) nowName.textContent = t("noChannel");
  if (btnUnmute) {
    btnUnmute.title = t("sound") + " (M)";
  }
  if (btnPiP) {
    btnPiP.title = t("pip");
  }
  if (btnFull) {
    btnFull.querySelector("span:last-child").textContent = t("newTab");
    btnFull.title = t("newTab");
  }
  if (btnPlayerFs) {
    btnPlayerFs.title = t("fullscreen");
  }
  if (btnRetry) {
    btnRetry.title = t("reload");
  }

  const srcToggleLabel = sourceToggle ? sourceToggle.querySelector("span:last-child") : null;
  if (srcToggleLabel) srcToggleLabel.textContent = t("sourceToggle").replace(/^[\uD83D\uDD17\s]+/, "");

  if (addSourceInput) addSourceInput.placeholder = t("addPlaceholder");
  if (addSourceBtn) addSourceBtn.textContent = t("addBtn");

  const fileLabel = document.getElementById("fileSourceLabel");
  if (fileLabel) {
    const fileSpan = fileLabel.querySelector("span");
    if (fileSpan) fileSpan.textContent = t("fileBtn").replace(/^[\uD83D\uDCC1\s]+/, "");
    fileLabel.title = t("fileTitle");
  }

  if (searchIn) searchIn.placeholder = t("searchPlaceholder");
  if (btnCheck) {
    btnCheck.querySelector("span:last-child").textContent = t("checkBtn");
    btnCheck.title = t("checkTitle");
  }
  if (btnReset) {
    btnReset.querySelector("span:last-child").textContent = t("showAll");
    btnReset.title = t("showAllTitle");
  }
  if (scrollBtn) scrollBtn.title = t("scrollTop");

  // Mini buttons (icon-only, tooltips only)
  if (pinBtn) pinBtn.title = t("pinChannelTip");
  if (favBtn) favBtn.title = t("favChannel");
  if (hideBtn) hideBtn.title = t("hideChannel");

  // Prev/Next channel buttons
  const _prevBtn = document.getElementById("prevChBtn");
  const _nextBtn = document.getElementById("nextChBtn");
  if (_prevBtn) _prevBtn.title = t("prevChannel") + " (\u2191)";
  if (_nextBtn) _nextBtn.title = t("nextChannel") + " (\u2193)";

  // Center controls
  if (btnPlayPause) btnPlayPause.title = t("playPause") + " (Space)";
  if (btnSeekBack) btnSeekBack.title = t("seekBack");
  if (btnSeekFwd) btnSeekFwd.title = t("seekForward");

  // Shortcuts button
  const _scBtn = document.getElementById("shortcutsBtn");
  if (_scBtn) _scBtn.title = t("shortcutsTitle");

  // List, EPG, Cast & close buttons
  const _listBtn = document.getElementById("listBtn");
  const _epgBtn = document.getElementById("epgBtn");
  const _castBtn = document.getElementById("castBtn");
  const _closeBtn = document.getElementById("channelDrawerCloseBtn");
  if (_listBtn) _listBtn.title = t("channelListTitle");
  if (_epgBtn) _epgBtn.title = t("epgTitle");
  if (_castBtn) _castBtn.title = t("castTip");
  if (_closeBtn) _closeBtn.title = t("closeTip");

  // Re-render dynamic content
  renderSources();
  renderGrid();

  // Build lang menu & shortcuts
  buildShortcutsPanel();
  buildLangMenu();

  // Sync mute button with video state
  if (mediaEl && btnUnmute) {
    btnUnmute.querySelector("#muteIcon").innerHTML = isAppMuted() ? '<svg viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>' : '<svg viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>';
    btnUnmute.classList.toggle("active", !isAppMuted());
  }
}

function buildLangMenu() {
  if (!langMenu) return;
  langMenu.innerHTML = "";
  for (const [code, lang] of Object.entries(LANGS).sort((a, b) => a[1].label.localeCompare(b[1].label))) {
    const btn = document.createElement("button");
    btn.className = "lang-option" + (code === currentLang ? " active" : "");
    btn.innerHTML = "<span class='lang-flag'>" + lang.flag + "</span><span>" + lang.label + "</span>";
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      currentLang = code;
      localStorage.setItem("lang", code);
      applyLang();
    });
    langMenu.appendChild(btn);
  }
}

applyLang();

/* ===== PREV / NEXT CHANNEL BUTTONS ===== */

/** Return indices of channels visible in the active tab (respects search + hidden). */
function getVisibleIndices() {
  const q = (searchIn ? searchIn.value : "").toLowerCase();
  const isFavCat = currentCategory === "fav";
  const isRadioCat = currentCategory === "radio";
  const indices = [];
  allChannels.forEach((ch, i) => {
    if (hidden.has(ch.url)) return;
    const isFav = favorites.some(f => f.url === ch.url);
    if (isFavCat) { if (!isFav) return; }
    else { if (!!ch.isRadio !== isRadioCat) return; }
    if (q && !ch.name.toLowerCase().includes(q)) return;
    indices.push(i);
  });
  return indices;
}

function navigatePrev() {
  const vis = getVisibleIndices();
  if (vis.length === 0) return;
  const pos = vis.indexOf(currentIdx);
  const next = pos <= 0 ? vis[vis.length - 1] : vis[pos - 1];
  playByIndex(next, { noScroll: true });
}

function navigateNext() {
  const vis = getVisibleIndices();
  if (vis.length === 0) return;
  const pos = vis.indexOf(currentIdx);
  const next = pos < 0 || pos >= vis.length - 1 ? vis[0] : vis[pos + 1];
  playByIndex(next, { noScroll: true });
}

const prevChBtn = document.getElementById("prevChBtn");
const nextChBtn = document.getElementById("nextChBtn");

if (prevChBtn) prevChBtn.addEventListener("click", navigatePrev);
if (nextChBtn) nextChBtn.addEventListener("click", navigateNext);

/* ===== EPG PANEL ===== */
var epgBtn = document.getElementById("epgBtn");
var epgToggleBtn = document.getElementById("epgToggleBtn");
var listBtn = document.getElementById("listBtn");
var epgPanel = document.getElementById("epgPanel");
var guideDrawer = document.getElementById("guideDrawer");
var epgListEl = document.getElementById("epgList");
var epgPanelTitle = document.getElementById("epgPanelTitle");
var epgCloseBtn = document.getElementById("epgCloseBtn");

function openEpgPanel() {
  if (!guideDrawer) return;
  guideDrawer.classList.add("open");
  if (epgBtn) epgBtn.classList.add("active");
  if (epgToggleBtn) epgToggleBtn.classList.add("active");
  renderEpgPanel();
}

function closeEpgPanel() {
  if (guideDrawer) guideDrawer.classList.remove("open");
  if (epgBtn) epgBtn.classList.remove("active");
  if (epgToggleBtn) epgToggleBtn.classList.remove("active");
}

function openList() {
  document.body.classList.add("list-open");
  if (listBtn) listBtn.classList.add("active");
}

function closeList() {
  document.body.classList.remove("list-open");
  if (listBtn) listBtn.classList.remove("active");
}

// Channel drawer close button
const channelDrawerCloseBtn = document.getElementById("channelDrawerCloseBtn");
if (channelDrawerCloseBtn) channelDrawerCloseBtn.addEventListener("click", closeList);

// Close drawers when clicking outside
document.addEventListener("click", function (e) {
  if (guideDrawer && guideDrawer.classList.contains("open") && !guideDrawer.contains(e.target) && !(epgBtn && epgBtn.contains(e.target)) && !(epgToggleBtn && epgToggleBtn.contains(e.target))) {
    closeEpgPanel();
  }
  var cd = document.getElementById("channelDrawer");
  if (cd && document.body.classList.contains("list-open") && !cd.contains(e.target) && !(listBtn && listBtn.contains(e.target))) {
    closeList();
  }
});

function renderEpgPanel() {
  if (!epgListEl) return;
  epgListEl.innerHTML = "";

  if (currentIdx < 0 || currentIdx >= allChannels.length) {
    if (epgPanelTitle) epgPanelTitle.textContent = t("epgTitle");
    epgListEl.innerHTML = '<div class="epg-empty">' + t("noChannel") + '</div>';
    return;
  }

  const ch = allChannels[currentIdx];
  if (epgPanelTitle) epgPanelTitle.textContent = ch.name || t("epgTitle");

  // Find programs using the unified matching function
  const epgChId = findEpgChannelId(ch.tvgId, ch.name);
  const programs = epgChId ? epgData[epgChId] : null;

  if (!programs || programs.length === 0) {
    const epgKeys = Object.keys(epgData).length;
    const hint = epgKeys === 0 ? t("epgNoData") : t("epgNoProgram");
    epgListEl.innerHTML = '<div class="epg-empty">' + hint + '</div>';
    return;
  }

  const now = new Date();

  // Show today's programs (past 2 hours + future)
  const cutoff = new Date(now.getTime() - 2 * 60 * 60 * 1000);
  const todayEnd = new Date(now);
  todayEnd.setHours(23, 59, 59, 999);

  let hasItems = false;
  for (const p of programs) {
    // Skip programs that ended before cutoff
    if (p.stop && p.stop < cutoff) continue;
    // Stop after tomorrow
    if (p.start > todayEnd) {
      // Show up to a few hours into tomorrow
      const tomorrowCut = new Date(todayEnd.getTime() + 6 * 60 * 60 * 1000);
      if (p.start > tomorrowCut) break;
    }

    const isNow = p.start <= now && p.stop && p.stop > now;
    const div = document.createElement("div");
    div.className = "epg-item" + (isNow ? " now" : "");

    // Main row: time + title + badge
    const row = document.createElement("div");
    row.className = "epg-item-row";

    const timeEl = document.createElement("span");
    timeEl.className = "epg-time";
    timeEl.textContent = formatTime(p.start) + (p.stop ? " \u2013 " + formatTime(p.stop) : "");

    const titleEl = document.createElement("span");
    titleEl.className = "epg-prog-title";
    titleEl.textContent = p.title;

    row.append(timeEl, titleEl);

    if (isNow) {
      const badge = document.createElement("span");
      badge.className = "epg-now-badge";
      badge.textContent = "\u25CF LIVE";
      row.appendChild(badge);
    }

    div.appendChild(row);

    // Progress bar for current program
    if (isNow && p.stop) {
      const total = p.stop - p.start;
      const elapsed = now - p.start;
      const pct = Math.min(100, Math.max(0, (elapsed / total) * 100));
      const wrap = document.createElement("div");
      wrap.className = "epg-progress-wrap";
      const bar = document.createElement("div");
      bar.className = "epg-progress-bar";
      bar.style.width = pct.toFixed(1) + "%";
      wrap.appendChild(bar);
      div.appendChild(wrap);
    }

    epgListEl.appendChild(div);
    hasItems = true;
  }

  if (!hasItems) {
    epgListEl.innerHTML = '<div class="epg-empty">' + t("epgNoUpcoming") + '</div>';
  }

  // Scroll the "now" item into view
  const nowItem = epgListEl.querySelector(".epg-item.now");
  if (nowItem) nowItem.scrollIntoView({ block: "nearest", behavior: "instant" });
}

if (epgBtn) epgBtn.addEventListener("click", () => {
  if (guideDrawer && guideDrawer.classList.contains("open")) closeEpgPanel();
  else openEpgPanel();
});

if (epgToggleBtn) epgToggleBtn.addEventListener("click", () => {
  if (guideDrawer && guideDrawer.classList.contains("open")) closeEpgPanel();
  else openEpgPanel();
});

if (listBtn) listBtn.addEventListener("click", () => {
  if (document.body.classList.contains("list-open")) closeList();
  else openList();
});

if (epgCloseBtn) epgCloseBtn.addEventListener("click", closeEpgPanel);

// Don't auto-open panels on load — both are overlays now

// Manual EPG URL loading
const epgUrlInput = document.getElementById("epgUrlInput");
const epgUrlBtn = document.getElementById("epgUrlBtn");

// Restore saved EPG URL
const savedEpgUrl = localStorage.getItem("customEpgUrl") || "";
if (epgUrlInput && savedEpgUrl) epgUrlInput.value = savedEpgUrl;

if (epgUrlBtn) epgUrlBtn.addEventListener("click", async () => {
  if (!epgUrlInput) return;
  const rawUrl = epgUrlInput.value.trim();
  if (!rawUrl) return;

  // Support multiple URLs separated by comma or newline
  const urls = rawUrl.split(/[,\n]+/).map(u => u.trim()).filter(u => u);
  for (const u of urls) {
    if (!u.startsWith("http://") && !u.startsWith("https://")) { showToast(t("invalidUrl"), 2500); return; }
  }

  epgUrlBtn.disabled = true;
  epgUrlBtn.textContent = "Loading...";
  try {
    await loadEpgData(urls, true);
    localStorage.setItem("customEpgUrl", rawUrl);
    renderEpgPanel();
  } catch (e) {
    console.error("[EPG] Load failed:", e.message);
  }
  epgUrlBtn.disabled = false;
  epgUrlBtn.textContent = "Load";
});
if (epgUrlInput) epgUrlInput.addEventListener("keydown", (e) => { if (e.key === "Enter" && epgUrlBtn) epgUrlBtn.click(); });

// Auto-load saved EPG URL on startup — delay to let channels render first
if (savedEpgUrl) {
  const urls = savedEpgUrl.split(/[,\n]+/).map(u => u.trim()).filter(u => u && u.startsWith("http"));
  if (urls.length > 0) setTimeout(() => loadEpgData(urls, true), 5000);
}

// Panels are overlays — no auto-open on desktop

// Unified EPG refresh — runs every 60s
function _epgPeriodicRefresh() {
  updateEpgDisplay();
  if (guideDrawer && guideDrawer.classList.contains("open")) renderEpgPanel();
}
epgIntervalId = setInterval(_epgPeriodicRefresh, 60000);

/* ===== PERSIST HIDDEN ===== */
function saveHidden() {
  localStorage.setItem("hiddenChannels", JSON.stringify([...hidden]));
}

/* ===== HLS QUALITY SELECTOR ===== */
var qualityBtn = document.getElementById("qualityBtn");
var qualityMenu = document.getElementById("qualityMenu");

function buildQualityMenu() {
  if (!qualityMenu) return;
  qualityMenu.innerHTML = "";
  if (hlsLevels.length <= 1) {
    if (qualityBtn) qualityBtn.style.display = "none";
    return;
  }
  if (qualityBtn) qualityBtn.style.display = "";

  // Auto option
  const autoBtn = document.createElement("button");
  autoBtn.className = "quality-option" + ((!hls || hls.currentLevel === -1) ? " active" : "");
  autoBtn.textContent = "Auto";
  autoBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (hls) hls.currentLevel = -1;
    qualityMenu.classList.remove("open");
    updateQualityMenu();
  });
  qualityMenu.appendChild(autoBtn);

  // Each level (sorted by height descending)
  [...hlsLevels]
    .map((lvl, i) => ({ idx: i, height: lvl.height, bitrate: lvl.bitrate }))
    .sort((a, b) => b.height - a.height)
    .forEach(({ idx, height, bitrate }) => {
      const btn = document.createElement("button");
      const label = height ? height + "p" : Math.round(bitrate / 1000) + "k";
      btn.className = "quality-option" + ((hls && hls.currentLevel === idx) ? " active" : "");
      btn.textContent = label;
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (hls) hls.currentLevel = idx;
        qualityMenu.classList.remove("open");
        updateQualityMenu();
      });
      qualityMenu.appendChild(btn);
    });
}

function updateQualityMenu() {
  if (!qualityMenu) return;
  const opts = qualityMenu.querySelectorAll(".quality-option");
  const sorted = [...hlsLevels]
    .map((lvl, i) => i)
    .sort((a, b) => (hlsLevels[b]?.height || 0) - (hlsLevels[a]?.height || 0));
  opts.forEach((opt, oi) => {
    if (oi === 0) opt.classList.toggle("active", !hls || hls.currentLevel === -1);
    else opt.classList.toggle("active", hls && hls.currentLevel === sorted[oi - 1]);
  });
  if (qualityBtn) {
    const span = qualityBtn.querySelector(".quality-label");
    if (span) {
      if (!hls || hls.currentLevel === -1) span.textContent = "Auto";
      else {
        const lvl = hlsLevels[hls.currentLevel];
        span.textContent = lvl && lvl.height ? lvl.height + "p" : "Auto";
      }
    }
  }
}

if (qualityBtn) {
  qualityBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (qualityMenu) qualityMenu.classList.toggle("open");
  });
  document.addEventListener("click", () => {
    if (qualityMenu) qualityMenu.classList.remove("open");
  });
}

/* ===== KEYBOARD SHORTCUTS ===== */
document.addEventListener("keydown", (e) => {
  // Don't trigger shortcuts when typing in inputs
  const tag = e.target.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA" || e.target.isContentEditable) return;

  switch (e.key) {
    case " ": // Space = play/pause
      e.preventDefault();
      if (mediaEl.paused) mediaEl.play().catch(() => { });
      else mediaEl.pause();
      break;
    case "m": // M = mute toggle
    case "M":
      e.preventDefault();
      if (btnUnmute) btnUnmute.click();
      break;
    case "ArrowUp": // Previous channel
    case "MediaTrackPrevious":
      e.preventDefault();
      navigatePrev();
      break;
    case "ArrowDown": // Next channel
    case "MediaTrackNext":
      e.preventDefault();
      navigateNext();
      break;
    case "p": // P = toggle EPG panel
    case "P":
      e.preventDefault();
      if (epgToggleBtn) epgToggleBtn.click();
      break;
    case "l": // L = toggle channel list
    case "L":
      e.preventDefault();
      if (listBtn) listBtn.click();
      break;
    case "ArrowLeft": // ArrowLeft = seek back 10s
      e.preventDefault();
      mediaEl.currentTime = Math.max(0, mediaEl.currentTime - 10);
      break;
    case "ArrowRight": // ArrowRight = seek forward 10s
      e.preventDefault();
      mediaEl.currentTime += 10;
      break;
  }
});

/* ===== SHORTCUTS PANEL ===== */
const shortcutsBtn = document.getElementById("shortcutsBtn");
const shortcutsPanel = document.getElementById("shortcutsPanel");

function buildShortcutsPanel() {
  const panel = document.getElementById("shortcutsPanel");
  if (!panel) return;
  const shortcuts = [
    { key: "Space", desc: t("playPause") },
    { key: "\u2190", desc: t("seekBack") },
    { key: "\u2192", desc: t("seekForward") },
    { key: "M", desc: t("sound") },
    { key: "\u2191", desc: t("prevChannel") },
    { key: "\u2193", desc: t("nextChannel") },
    { key: "P", desc: t("epgTitle") },
    { key: "L", desc: t("channelListTitle") }
  ];
  panel.innerHTML = '<div class="sc-title">\u2328 ' + t("shortcutsTitle") + '</div>' +
    shortcuts.map(function (s) { return '<div class="sc-row"><span class="sc-key">' + s.key + '</span><span class="sc-desc">' + s.desc + '</span></div>'; }).join("");
}

buildShortcutsPanel();

/* ===== CHROMECAST (Cast Application Framework) ===== */
window.__initChromecast = function () {
  if (typeof cast === "undefined" || !cast.framework) {
    // SDK not fully loaded yet — retry shortly
    setTimeout(window.__initChromecast, 500);
    return;
  }
  var castBtn = document.getElementById("castBtn");
  var context = cast.framework.CastContext.getInstance();

  context.setOptions({
    receiverApplicationId: chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,
    autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
  });

  function isCasting() {
    return context.getCurrentSession() !== null;
  }

  function updateCastBtn() {
    if (!castBtn) return;
    castBtn.classList.toggle("casting", isCasting());
    castBtn.title = isCasting() ? t("castingTip") : t("castTip");
  }

  function loadMedia() {
    var session = context.getCurrentSession();
    if (!session || !currentUrl) return;
    var contentType = isHlsUrl(currentUrl) ? "application/x-mpegurl" : "video/mp4";
    var mediaInfo = new chrome.cast.media.MediaInfo(currentUrl, contentType);
    mediaInfo.streamType = chrome.cast.media.StreamType.LIVE;
    if (currentIdx >= 0 && allChannels[currentIdx]) {
      mediaInfo.metadata = new chrome.cast.media.GenericMediaMetadata();
      mediaInfo.metadata.title = allChannels[currentIdx].name || "";
      var logo = allChannels[currentIdx].logo;
      if (logo) mediaInfo.metadata.images = [new chrome.cast.Image(logo)];
    }
    var request = new chrome.cast.media.LoadRequest(mediaInfo);
    request.autoplay = true;
    session.loadMedia(request).then(
      function () { console.log("Cast: media loaded"); },
      function (err) { console.warn("Cast loadMedia error:", err); }
    );
  }

  // Listen for session state changes
  context.addEventListener(
    cast.framework.CastContextEventType.SESSION_STATE_CHANGED,
    function (event) {
      updateCastBtn();
      if (event.sessionState === cast.framework.SessionState.SESSION_STARTED ||
        event.sessionState === cast.framework.SessionState.SESSION_RESUMED) {
        if (currentUrl) loadMedia();
      }
    }
  );

  if (castBtn) {
    castBtn.addEventListener("click", function () {
      if (isCasting()) {
        context.getCurrentSession().endSession(true);
      } else {
        // Opens the native Chrome cast device picker
        context.requestSession().then(
          function () { /* session started — handled by event listener */ },
          function (err) { if (err.code !== "cancel") console.warn("Cast request error:", err); }
        );
      }
    });
  }

  // Expose so channel switches push to cast device
  window.__castLoadMedia = function () { if (isCasting()) setTimeout(loadMedia, 500); };

  updateCastBtn();
};
