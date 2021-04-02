if (window.initialized === undefined) {
    window._counter = 0;
    window.addEventListener('mousewheel', function (e, delta) {
        // var name=e.target.className;
        // console.log(e.target.className);
        // console.log(e['deltaY']);
        sendMsg({
            'type': 'scroll',
            'msg': e['deltaY']
        });
        // if(name=='white_color' | name=='scrollmenu' | name=='my_checkbox'){
        //   window.scrollWidget.scrollLeft += e['deltaY'];
        // // console.log(e);
        //   window.scroll_position=window.scrollWidget.scrollLeft;
        //   e.preventDefault();
        // }
    }, {passive: false});
    //
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
    //
    window._previousHeight = 0;
    window._timeOuts = 0;
    var f = function () {
        if (window._timeOuts > 10) {
            return;
        }
        var h = $('#content').height();
        window._previousHeight = h;
        sendMsg({
            'type': 'setHeight', 'msg': h
        });
        setTimeout(f, 1000);
        window._timeOuts++;
        console.log('timeout:'+window._timeOuts);
    };
    setTimeout(f, 1000);
} else {
    window.initialized = 1;
}