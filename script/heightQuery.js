(function anm() {
    window._previousHeight = 0;
    var f = function () {
        var h = $('#content').height();
        window._previousHeight = h;
        sendMsg({
            'type': 'setHeight', 'msg': h
        });
        setTimeout(f, 1000);
    };
    setTimeout(f, 1000);
})();