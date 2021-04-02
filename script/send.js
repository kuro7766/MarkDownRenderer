function sendMsg(msgObj) {
    if(window._connected===0){
        return;
    }
    msgObj['counter'] = window._counter++;
    window.top.postMessage(msgObj, '*');
}