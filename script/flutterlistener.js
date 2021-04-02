window.onmessage = function (ev) {
    var data = ev.data;
    if (data['type'] === 'render') {
        show(data['msg']);
        sendMsg({'type':'received','msg':0});
    }
    if(data['type']==='disconnect'){
        window._connected=0;
    }
}