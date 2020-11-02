var host = "https://smile.amazon.de";
chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    return {
      redirectUrl: host + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1],
    };
  },
  {
    urls: ["*://www.amazon.de/*", "*://www.amazon.com/*"],
    types: [
      "main_frame",
      "sub_frame",
      "stylesheet",
      "script",
      "image",
      "object",
      "xmlhttprequest",
      "other",
    ],
  },
  ["blocking"]
);
