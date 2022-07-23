function getClickHandler(info, tab) {
    chrome.tabs.query({
        "active": true,
        "currentWindow": true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            "functiontoInvoke": "cheat"
        });
};

var normal = chrome.contextMenus.create({
    "title": "外掛啟動",
    "type": "normal",
    "contexts": ['editable'],
    "onclick": genericOnClick,
    "targetUrlPatterns": ["https://docs.google.com/forms/*"]
});
