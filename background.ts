const host = "https://smile.amazon.de";

chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    const urlMatch = details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/);

    return urlMatch && urlMatch.length > 0
      ? {
          redirectUrl: host + urlMatch[1],
        }
      : {};
  },
  {
    urls: [
      "*://www.amazon.de/*",
      "*://www.amazon.com/*",
      "*://www.amazon.at/*",
    ],
    types: [
      "main_frame",
      "sub_frame",
      "stylesheet",
      "script",
      "object",
      "xmlhttprequest",
      "other",
    ],
  },
  ["blocking"]
);
