if (window.xInitialized === undefined) {
    sendMsg({
        'type': 'log', 'msg': window.xInitialized
    });
    window.xInitialized = 1;

    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    window.createTime = uuidv4();
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
            sendMsg({'type': 'received', 'msg': window.createTime});
        }
        if (data['type'] === 'disconnect') {
            window._connected = 0;
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
        console.log('timeout:' + window._timeOuts);
    };
    setTimeout(f, 1000);
} else {
    sendMsg({
        'type': 'log', 'msg': 'xinit failed'
    });
    window.xInitialized = 1;
}


$(document).ready(function () {
    show("加载中...");
    show('```java' +
        '\n' +
        'public static void main(){' +
        '}' +
        '\n' +
        '```')
    sendMsg({'type': 'webloaded', 'msg': ''});
});
