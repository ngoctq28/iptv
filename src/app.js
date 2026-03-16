import './styles.css';

// hls.js — expose as global; panel.js accesses window.Hls
const Hls = require('../hls.light.min.js');
if (typeof Hls === 'function' || typeof Hls === 'object') {
  window.Hls = Hls.default || Hls;
}

// Main application logic
require('../panel.js');

// Register service worker with update detection
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    window.location.reload();
  });

  navigator.serviceWorker.register('/sw.js').then((reg) => {
    // Check for updates every 5 minutes
    setInterval(() => reg.update(), 5 * 60 * 1000);

    function onNewSW(worker) {
      showUpdateBanner(() => {
        worker.postMessage({ type: 'SKIP_WAITING' });
      });
    }

    // A new SW is already waiting (e.g. user revisits after deploy)
    if (reg.waiting) {
      onNewSW(reg.waiting);
    }

    // Detect newly found updates
    reg.addEventListener('updatefound', () => {
      const newWorker = reg.installing;
      if (!newWorker) return;
      newWorker.addEventListener('statechange', () => {
        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
          onNewSW(newWorker);
        }
      });
    });
  }).catch(() => {});
}

function showUpdateBanner(onRefresh) {
  if (document.getElementById('updateBanner')) return;
  const banner = document.createElement('div');
  banner.id = 'updateBanner';
  banner.innerHTML =
    '<span>A new version is available</span>' +
    '<button id="updateBtn">Refresh</button>' +
    '<button id="updateDismiss">\u2715</button>';
  document.body.appendChild(banner);
  document.getElementById('updateBtn').addEventListener('click', onRefresh);
  document.getElementById('updateDismiss').addEventListener('click', () => banner.remove());
}
