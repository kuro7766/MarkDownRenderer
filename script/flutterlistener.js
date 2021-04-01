window.onmessage = function (ev) {
    var data = ev.data;
    if (data['type'] === 'render') {
        show(data['msg']);
    }
}