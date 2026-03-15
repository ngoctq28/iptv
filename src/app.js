import './styles.css';

// hls.js — expose as global; panel.js accesses window.Hls
const Hls = require('../hls.light.min.js');
if (typeof Hls === 'function' || typeof Hls === 'object') {
  window.Hls = Hls.default || Hls;
}

// Main application logic
require('../panel.js');

// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(() => {});
}
