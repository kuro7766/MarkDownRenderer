(function anm() {
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
})();