chrome.contextMenus.create({
    "title": "阿咯哈呣啦！",
    "type": "normal",
    "contexts": ['editable'],
    "onclick": function(info, tab) {
        chrome.tabs.sendMessage(tab.id, {text: "1997"});
    },
    "documentUrlPatterns": ["https://*.google.com/forms/d/*"]
});
