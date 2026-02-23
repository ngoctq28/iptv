// background.js

chrome.runtime.onMessage.addListener((msg) => {
  if (!msg) return;
  if (msg.type === 'OPEN_TAB' && msg.url) {
    chrome.tabs.create({ url: msg.url, active: true });
  }
});
