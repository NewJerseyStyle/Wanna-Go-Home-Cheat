chrome.runtime.onMessage.addListener(function (request) {
    var iBox = document.querySelector('input[type="text"]');
    var elem = document.querySelector('div[data-params]')
    var data = elem.getAttribute('data-params');
    var text = data.match(/\[\"\d+\"\]/)[0];
    text = text.replace( /\D/g, '');
    iBox.value = '';
    iBox.focus();
    document.execCommand('insertText', false, text);
});
