var cheat = function () {
  var iBox = document.querySelector('input[type="text"]');
  var eMsg = document.querySelector('div[role="alert"]');
//   if field is empty, input 000 and submit
  if (iBox.value.length === 0) {
    iBox.parentElement.lastChild.hidden = true;
    iBox.value = 0;
  }
//   while field value not right, input value + 1
  while (eMsg.innerHTML.length !== 0 && iBox.value != 10000) {
    iBox.value += 1;
  }
}

chrome.extension.onMessage.addListener(function (message, sender, callback) {
    if (message.functiontoInvoke == "cheat") {
        cheat();
    }
});
