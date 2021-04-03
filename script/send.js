function sendMsg(msgObj) {

    function getParameterByName( name ){
        name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
        var regexS = "[\\?&]"+name+"=([^&#]*)";
        var regex = new RegExp( regexS );
        var results = regex.exec( window.location.href );
        if( results == null )
            return "";
        else
            return decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    msgObj['counter'] = window._counter++;
    msgObj['uuid']=getParameterByName('uuid');
    window.top.postMessage(msgObj, '*');
}