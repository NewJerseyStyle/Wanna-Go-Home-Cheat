function getClickHandler(info, tab) {
//   if field is empty, input 000 and submit
//   while field value not right, input value + 1
    chrome.tabs.sendMessage(tab.id, {text: "9999"});
};

var normal = chrome.contextMenus.create({
    "title": "外掛啟動",
    "type": "normal",
    "contexts": ['editable'],
    "onclick": genericOnClick,
    "targetUrlPatterns": ["https://docs.google.com/forms/*"]
});
