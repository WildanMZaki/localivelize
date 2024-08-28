document.getElementById("local").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "switchToLocal" });
});

document.getElementById("live").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "switchToLive" });
});
