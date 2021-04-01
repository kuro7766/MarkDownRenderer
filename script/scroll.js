window._counter = 0;

$(document).ready(function () {
    window.top.postMessage({'type': 'setstate', 'h': $(document).height(), 'counter': window._counter}, '*');
    window._counter++;
});

window.addEventListener('mousewheel', function (e, delta) {
    // var name=e.target.className;
    console.log(e.target.className);
    console.log(e['deltaY']);
    window.top.postMessage({
        'type': 'scroll',
        'h': $(document).height(),
        'y': e['deltaY'],
        'counter': window._counter
    }, '*');
    window._counter++;
    // if(name=='white_color' | name=='scrollmenu' | name=='my_checkbox'){
    //   window.scrollWidget.scrollLeft += e['deltaY'];
    // // console.log(e);
    //   window.scroll_position=window.scrollWidget.scrollLeft;
    //   e.preventDefault();
    // }
}, {passive: false});