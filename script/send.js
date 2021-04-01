function sendMsg(msgObj) {
    msgObj['counter'] = window._counter++;
    window.top.postMessage(msgObj, '*');
}