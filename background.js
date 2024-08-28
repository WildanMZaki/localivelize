chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "switchToLocal") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      let url = tabs[0].url;
      if (url.startsWith("https://")) {
        let localUrl = "http://localhost/" + url.slice("https://".length);
        chrome.tabs.update(tabs[0].id, { url: localUrl });
      }
    });
  } else if (message.action === "switchToLive") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      let url = tabs[0].url;
      if (url.startsWith("http://localhost")) {
        let liveUrl = url.replace("http://localhost/", "https://");
        chrome.tabs.update(tabs[0].id, { url: liveUrl });
      }
      if (url.startsWith("https://localhost")) {
        let liveUrl = url.replace("localhost/", "");
        chrome.tabs.update(tabs[0].id, { url: liveUrl });
      }
    });
  }
});
