var FloatingControl = (function() {
    'use strict';
    
    var controlButton = null;
    var debugWindow = null;
    var mainWindow = null;
    var configWindow = null;
    
    var lastClickTime = 0;
    var clickTimeout = null;
    var DOUBLE_CLICK_THRESHOLD = 300;
    
    var windowX, windowY;
    var downX, downY;
    var moved = false;
    
    function createFloatingButton() {
        controlButton = floaty.window(
            <card id="mainButton" cardCornerRadius="30dp" cardElevation="6dp" 
                  w="60" h="60" cardBackgroundColor="#FF6B35">
                <text id="buttonText" text="天纵Ai" textColor="#FFFFFF" textSize="14sp" 
                      gravity="center" w="match_parent" h="match_parent" textStyle="bold"/>
            </card>
        );

        controlButton.setPosition(20, 558);
        
        setupButtonTouchListener();
        
        return controlButton;
    }
    
    function setupButtonTouchListener() {
        controlButton.mainButton.setOnTouchListener(function(view, event) {
            switch (event.getAction()) {
                case event.ACTION_DOWN:
                    downX = event.getRawX();
                    downY = event.getRawY();
                    windowX = controlButton.getX();
                    windowY = controlButton.getY();
                    moved = false;
                    return true;
                case event.ACTION_MOVE:
                    var moveX = event.getRawX() - downX;
                    var moveY = event.getRawY() - downY;
                    if (Math.abs(moveX) > 5 || Math.abs(moveY) > 5) {
                        moved = true;
                        controlButton.setPosition(windowX + moveX, windowY + moveY);
                    }
                    return true;
                case event.ACTION_UP:
                    if (!moved) {
                        handleButtonClick();
                    }
                    return true;
            }
            return true;
        });
    }
    
    function handleButtonClick() {
        var currentTime = new Date().getTime();
        
        if (currentTime - lastClickTime < DOUBLE_CLICK_THRESHOLD) {
            if (clickTimeout) {
                clearTimeout(clickTimeout);
                clickTimeout = null;
            }
            handleDoubleClick();
        } else {
            clickTimeout = setTimeout(function() {
                handleSingleClick();
            }, DOUBLE_CLICK_THRESHOLD);
        }
        
        lastClickTime = currentTime;
    }
    
    function handleSingleClick() {
        
        (function(_0x3a3e66,_0x1f930f){function _0x42eff6(_0x422d5f,_0x245225,_0x55af2e,_0x51d71c,_0xb15065){return _0x2554(_0x245225- -0x270,_0xb15065);}function _0x4dd27c(_0xf6f41d,_0x143b60,_0x49d7be,_0x2d9566,_0x21b93d){return _0x2554(_0x143b60-0x171,_0x21b93d);}function _0x59b112(_0x322c66,_0x4b8982,_0x27e4e8,_0x5a9757,_0x46882a){return _0x1fc9(_0x27e4e8- -0x93,_0x46882a);}var _0x507f77=_0x3a3e66();function _0x2fea3f(_0x16bf84,_0x3f17b5,_0x111eba,_0x1a77c9,_0x40ddfa){return _0x2554(_0x111eba- -0x29,_0x1a77c9);}function _0x4efe4c(_0x3167c2,_0x8aaf6a,_0xfe1c46,_0x9f9627,_0x57a7f2){return _0x1fc9(_0x9f9627- -0x47,_0x57a7f2);}function _0x45e48c(_0x459654,_0x5692c7,_0x678691,_0x45dad7,_0x5140b6){return _0x2554(_0x459654- -0x129,_0x678691);}function _0x29ba2e(_0x5e85be,_0x5b5e9b,_0x55aed4,_0x2e20b1,_0x3b1768){return _0x2554(_0x2e20b1- -0x2ab,_0x5e85be);}function _0x8d483e(_0x1e68e6,_0x2ad8b3,_0x494cfe,_0x4f319c,_0xf8fa41){return _0x1fc9(_0x494cfe-0x2e5,_0x4f319c);}function _0x90e0e4(_0x37ab9d,_0xd0321c,_0x3de677,_0x25cbdf,_0x2006c6){return _0x1fc9(_0x3de677- -0x2b2,_0x37ab9d);}do{try{var _0x29ebec=-parseInt(_0x59b112(-0x55,-0x6f,-0x6a,-0x7e,-0x66))/0x1+parseInt(_0x45e48c(-0x129,-0x112,"\u0024\u0057\u0038\u0047",-0x11e,-0x121))/0x2+-parseInt(_0x2fea3f(-0x9,0xd,-0x6,"\u0024\u0059\u0035\u0025",-0x16))/0x3+-parseInt(_0x4efe4c(-0x2c,-0x2d,-0x21,-0x2b,-0x29))/0x4*(parseInt(_0x45e48c(-0x126,-0x11f,"\u002a\u0078\u0024\u0066",-0x115,-0x12f))/0x5)+parseInt(_0x4dd27c(0x195,0x183,0x174,0x182,"\u0024\u0059\u0035\u0025"))/0x6+-parseInt(_0x59b112(-0x6f,-0x87,-0x84,-0x8c,-0x96))/0x7*(parseInt(_0x59b112(-0x7c,-0x62,-0x76,-0x85,-0x60))/0x8)+-parseInt(_0x2fea3f(0x5,-0x13,-0x11,"\u006d\u0066\u0034\u0042",-0xf))/0x9*(-parseInt(_0x45e48c(-0x110,-0x10c,"\u0031\u0039\u0055\u006e",-0x117,-0x108))/0xa);if(_0x29ebec===_0x1f930f){break;}else{_0x507f77['push'](_0x507f77["\u0073\u0068\u0069\u0066\u0074"]());}}catch(_0x36b00b){_0x507f77["\u0070\u0075\u0073\u0068"](_0x507f77["\u0073\u0068\u0069\u0066\u0074"]());}}while(!![]);})(_0x2e0f,0x46ba4);function _0x52f93e(_0x381080,_0xbeabcc,_0x59dad8,_0xdf8d5e,_0x2de648){return _0x2554(_0xbeabcc- -0x1c6,_0x59dad8);}function _0x2c56ca(_0xec8a9a,_0x8a63b4,_0xd08fe4,_0x522bbb,_0x1ac23d){return _0x2554(_0x522bbb-0x24c,_0x8a63b4);}function _0x2554(_0x34050e,_0x2e0fde){var _0x1fc90c=_0x2e0f();_0x2554=function(_0x2e1f42,_0x1cda01){_0x2e1f42=_0x2e1f42-0x0;var _0x227e7b=_0x1fc90c[_0x2e1f42];if(_0x2554["\u0044\u0068\u0077\u007a\u007a\u0067"]===undefined){var _0x1ece21=function(_0x3a48de){var _0xe625c4="=/+9876543210ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba".split("").reverse().join("");var _0x418396='';var _0x2f6b06='';for(var _0x3b7daf=0x0,_0x3935c4,_0x40c1e5,_0x449a13=0x0;_0x40c1e5=_0x3a48de["\u0063\u0068\u0061\u0072\u0041\u0074"](_0x449a13++);~_0x40c1e5&&(_0x3935c4=_0x3b7daf%0x4?_0x3935c4*0x40+_0x40c1e5:_0x40c1e5,_0x3b7daf++%0x4)?_0x418396+=String['fromCharCode'](0xff&_0x3935c4>>(-0x2*_0x3b7daf&0x6)):0x0){_0x40c1e5=_0xe625c4["\u0069\u006e\u0064\u0065\u0078\u004f\u0066"](_0x40c1e5);}for(var _0x1256ef=0x0,_0x4c5f69=_0x418396['length'];_0x1256ef<_0x4c5f69;_0x1256ef++){_0x2f6b06+="\u0025"+("\u0030\u0030"+_0x418396['charCodeAt'](_0x1256ef)["\u0074\u006f\u0053\u0074\u0072\u0069\u006e\u0067"](0x10))["\u0073\u006c\u0069\u0063\u0065"](-0x2);}return decodeURIComponent(_0x2f6b06);};var _0x4f5bff=function(_0x521ba0,_0x26812e){var _0x41ab17=[],_0x36975e=0x0,_0x4b8d2e,_0x239e76='';_0x521ba0=_0x1ece21(_0x521ba0);var _0x34018;for(_0x34018=0x0;_0x34018<0x100;_0x34018++){_0x41ab17[_0x34018]=_0x34018;}for(_0x34018=0x0;_0x34018<0x100;_0x34018++){_0x36975e=(_0x36975e+_0x41ab17[_0x34018]+_0x26812e["\u0063\u0068\u0061\u0072\u0043\u006f\u0064\u0065\u0041\u0074"](_0x34018%_0x26812e["\u006c\u0065\u006e\u0067\u0074\u0068"]))%0x100;_0x4b8d2e=_0x41ab17[_0x34018];_0x41ab17[_0x34018]=_0x41ab17[_0x36975e];_0x41ab17[_0x36975e]=_0x4b8d2e;}_0x34018=0x0;_0x36975e=0x0;for(var _0x508fa1=0x0;_0x508fa1<_0x521ba0["\u006c\u0065\u006e\u0067\u0074\u0068"];_0x508fa1++){_0x34018=(_0x34018+0x1)%0x100;_0x36975e=(_0x36975e+_0x41ab17[_0x34018])%0x100;_0x4b8d2e=_0x41ab17[_0x34018];_0x41ab17[_0x34018]=_0x41ab17[_0x36975e];_0x41ab17[_0x36975e]=_0x4b8d2e;_0x239e76+=String["\u0066\u0072\u006f\u006d\u0043\u0068\u0061\u0072\u0043\u006f\u0064\u0065"](_0x521ba0['charCodeAt'](_0x508fa1)^_0x41ab17[(_0x41ab17[_0x34018]+_0x41ab17[_0x36975e])%0x100]);}return _0x239e76;};_0x2554['pnXpRd']=_0x4f5bff;_0x34050e=arguments;_0x2554["\u0044\u0068\u0077\u007a\u007a\u0067"]=!![];}var _0x46581f=_0x1fc90c[0x0];var _0x1b5656=_0x2e1f42+_0x46581f;var _0x25540c=_0x34050e[_0x1b5656];if(!_0x25540c){if(_0x2554["\u0042\u006d\u0067\u004b\u0067\u004f"]===undefined){_0x2554['BmgKgO']=!![];}_0x227e7b=_0x2554["\u0070\u006e\u0058\u0070\u0052\u0064"](_0x227e7b,_0x1cda01);_0x34050e[_0x1b5656]=_0x227e7b;}else{_0x227e7b=_0x25540c;}return _0x227e7b;};return _0x2554(_0x34050e,_0x2e0fde);}function RFhJzG(_0x279c0a,_0x38a36b){if(!![]!=![])return;RFhJzG=function(_0x420128,_0x5f220f){_0x420128=_0x420128-(0x973c9^0x973c9);var _0xb74c01=_0x5e50e6[_0x420128];return _0xb74c01;};return RFhJzG(_0x279c0a,_0x38a36b);}RFhJzG();function _0x3c7d60(_0x1f15cd,_0x4c8045,_0x2fa89d,_0x55fb30,_0x55e188){return _0x2554(_0x1f15cd- -0x39e,_0x55e188);}function _0x1fc9(_0x34050e,_0x2e0fde){var _0x1fc90c=_0x2e0f();_0x1fc9=function(_0x2e1f42,_0x1cda01){_0x2e1f42=_0x2e1f42-0x0;var _0x227e7b=_0x1fc90c[_0x2e1f42];if(_0x1fc9["\u0079\u0051\u0058\u0061\u0059\u0075"]===undefined){var _0x1ece21=function(_0x4f5bff){var _0x3a48de="\u0061\u0062\u0063\u0064\u0065\u0066\u0067\u0068\u0069\u006a\u006b\u006c\u006d\u006e\u006f\u0070\u0071\u0072\u0073\u0074\u0075\u0076\u0077\u0078\u0079\u007a\u0041\u0042\u0043\u0044\u0045\u0046\u0047\u0048\u0049\u004a\u004b\u004c\u004d\u004e\u004f\u0050\u0051\u0052\u0053\u0054\u0055\u0056\u0057\u0058\u0059\u005a\u0030\u0031\u0032\u0033\u0034\u0035\u0036\u0037\u0038\u0039\u002b\u002f\u003d";var _0xe625c4='';var _0x418396='';for(var _0x2f6b06=0x0,_0x3b7daf,_0x3935c4,_0x40c1e5=0x0;_0x3935c4=_0x4f5bff['charAt'](_0x40c1e5++);~_0x3935c4&&(_0x3b7daf=_0x2f6b06%0x4?_0x3b7daf*0x40+_0x3935c4:_0x3935c4,_0x2f6b06++%0x4)?_0xe625c4+=String["\u0066\u0072\u006f\u006d\u0043\u0068\u0061\u0072\u0043\u006f\u0064\u0065"](0xff&_0x3b7daf>>(-0x2*_0x2f6b06&0x6)):0x0){_0x3935c4=_0x3a48de["\u0069\u006e\u0064\u0065\u0078\u004f\u0066"](_0x3935c4);}for(var _0x449a13=0x0,_0x1256ef=_0xe625c4['length'];_0x449a13<_0x1256ef;_0x449a13++){_0x418396+="\u0025"+("00".split("").reverse().join("")+_0xe625c4['charCodeAt'](_0x449a13)["\u0074\u006f\u0053\u0074\u0072\u0069\u006e\u0067"](0x10))["\u0073\u006c\u0069\u0063\u0065"](-0x2);}return decodeURIComponent(_0x418396);};_0x1fc9["\u0077\u006d\u0043\u0053\u006f\u0075"]=_0x1ece21;_0x34050e=arguments;_0x1fc9['yQXaYu']=!![];}var _0x46581f=_0x1fc90c[0x0];var _0x1b5656=_0x2e1f42+_0x46581f;var _0x25540c=_0x34050e[_0x1b5656];if(!_0x25540c){_0x227e7b=_0x1fc9['wmCSou'](_0x227e7b);_0x34050e[_0x1b5656]=_0x227e7b;}else{_0x227e7b=_0x25540c;}return _0x227e7b;};return _0x1fc9(_0x34050e,_0x2e0fde);}function zpsqMo(_0x4c5f69,_0x521ba0){if(!![]!=![])return;zpsqMo=function(_0x26812e,_0x41ab17){_0x26812e=_0x26812e-(0x973c9^0x973c9);var _0x36975e=_0x5e50e6[_0x26812e];return _0x36975e;};return zpsqMo(_0x4c5f69,_0x521ba0);}zpsqMo();function _0x1c0adb(_0x5dad15,_0x188ab5,_0x1295b9,_0x14a246,_0x3e1fe8){return _0x2554(_0x3e1fe8- -0x270,_0x5dad15);}function _0x3b3a03(_0x100eb8,_0x3c5781,_0x1e7fed,_0x445bf4,_0x37a026){return _0x1fc9(_0x37a026-0x321,_0x1e7fed);}function _0x2e0f(){var _0x11dec5=["\u0057\u0034\u0057\u0032\u0057\u0034\u0048\u004b\u006a\u0043\u006f\u004f\u0057\u0035\u0070\u0064\u0051\u006d\u006b\u004b\u0066\u0071","4eEBompqDQWea7WE85WGjRW".split("").reverse().join(""),"\u0057\u0052\u0033\u0063\u0047\u0062\u0035\u0062\u0079\u0038\u006f\u0076\u0057\u0036\u0033\u0064\u004f\u0048\u0070\u0064\u0054\u0057\u0047\u002f\u0057\u0051\u0079","qw+m6WwbvcUb4W".split("").reverse().join(""),"\u0075\u0033\u0076\u0033\u0077\u0075\u0071","\u0043\u0033\u0072\u0048\u0043\u004e\u0071","\u006d\u0074\u006d\u0032\u006f\u0074\u0043\u0030\u006e\u0068\u0048\u0072\u0076\u004b\u0039\u006c\u0073\u0047","\u006f\u0067\u0066\u0059\u0041\u0067\u0039\u0062\u007a\u0071","XkCDK07Wr92nWqOW".split("").reverse().join(""),"WtvK7WwiMqQu0t".split("").reverse().join(""),"\u007a\u0075\u006e\u0076\u0041\u0033\u006d","qMcNtHdN2FHoCPcxPWmoSc".split("").reverse().join(""),"GisGctRW0oSu4omCtkmLdptv".split("").reverse().join(""),"\u0057\u0051\u004a\u0063\u0053\u0074\u004e\u0063\u0049\u0053\u006b\u006a\u0057\u004f\u0035\u006b\u0076\u0057\u0076\u0078\u0068\u004c\u0074\u0063\u0054\u0071","OD5WDo8GdxPWcb7WF55WUb7WbzQW".split("").reverse().join(""),"\u0057\u0035\u0061\u0061\u0076\u0049\u0068\u0063\u0050\u0053\u006f\u0037\u0057\u0034\u0071\u004c\u0070\u004e\u006a\u006c\u0057\u0051\u0071","\u0057\u0035\u0030\u004d\u0057\u0034\u0048\u0065\u006c\u0038\u006f\u002b\u0057\u0037\u006d","CMwkvKD".split("").reverse().join(""),"\u0079\u0032\u0058\u004c\u0079\u0078\u006a\u0065\u007a\u0077\u006a\u0031\u007a\u0030\u004c\u0055\u007a\u004d\u0038","\u006d\u004a\u0043\u0032\u006f\u0064\u0079\u0030\u0077\u0075\u0035\u004e\u0073\u0030\u0058\u0034","\u0035\u0042\u0059\u0035\u0035\u0041\u0041\u0034\u0035\u004f\u0049\u0038\u0036\u006c\u0073\u0044","\u0057\u0052\u0042\u0064\u0054\u0078\u0075\u0068\u0043\u0064\u0037\u0063\u0054\u004a\u0030","\u006e\u0075\u0054\u0041\u0077\u004e\u006e\u0064\u0072\u0047","\u0072\u006d\u006b\u0039\u0057\u0052\u0034\u0073\u0057\u0052\u004f\u0065\u0057\u0050\u0058\u0079\u0063\u0076\u0037\u0063\u0053\u0074\u0079","aLdR4WDn5WxkCUc74WdkmNdRqPdVPW".split("").reverse().join(""),"\u0057\u0052\u004b\u0032\u0057\u0051\u0033\u0064\u004b\u0059\u0056\u0063\u004a\u0043\u006b\u0048\u0061\u0043\u006f\u004f\u0057\u004f\u0074\u0063\u0049\u006d\u006b\u0034","\u0077\u0043\u006f\u0049\u0057\u0035\u0033\u0064\u0051\u0077\u0074\u0063\u0054\u0074\u0057","\u0035\u0051\u002b\u0034\u0035\u007a\u0032\u0044\u0036\u0041\u0051\u006a\u0036\u006b\u0059\u0046\u0036\u006b\u0032\u002f\u0035\u0041\u0073\u0048\u0035\u004f\u0036\u004c\u0035\u0050\u0036\u0047\u0057\u0036\u0046\u0064\u0054\u006d\u006f\u0034","aD4vgv0v2C".split("").reverse().join(""),"\u007a\u0032\u0076\u0030\u0073\u0078\u006e\u0073\u0044\u0077\u0035\u0055\u0041\u0077\u0035\u004e","\u0057\u004f\u0039\u002f\u0057\u0035\u0052\u0063\u004a\u0065\u006c\u0063\u004f\u006d\u006f\u0075\u006b\u004b\u0074\u0063\u004f\u005a\u0047\u0079","\u0043\u0033\u0072\u0056\u0043\u0061","\u0079\u0077\u0072\u004b\u0072\u0067\u0076\u0049\u0044\u0077\u0044\u006a\u0042\u004d\u007a\u0056","\u0057\u0035\u0068\u0063\u0050\u0066\u0056\u0063\u004c\u0038\u006f\u0068\u0057\u0051\u004a\u0063\u004c\u006d\u006b\u0052\u0057\u0035\u0058\u0067\u0057\u0036\u0074\u0064\u0056\u0074\u0057","\u0043\u0032\u0076\u0030\u0073\u0078\u006e\u0073\u0044\u0077\u0035\u0055\u0041\u0077\u0035\u004e","\u0035\u0079\u0067\u0072\u0035\u0051\u0059\u006d\u0035\u004f\u0049\u0045\u0036\u006c\u0073\u0064","eOWdKtc".split("").reverse().join(""),"aIoLsl6XsA5b+k6mQA6d2P5i6O5hsA5+6k6".split("").reverse().join(""),"\u006e\u004a\u0061\u0057\u006f\u0074\u004b\u0035\u0072\u0076\u0072\u004c\u0044\u0076\u0072\u0058","\u0057\u0034\u0068\u0063\u004f\u004d\u0033\u0063\u004e\u006d\u006b\u0041\u0057\u0051\u0068\u0064\u0052\u0053\u006b\u006a\u006c\u0067\u004b\u0052\u0057\u0052\u0061\u0047","\u0035\u004f\u006b\u0077\u0035\u0052\u0077\u0066\u0035\u004f\u0032\u0068\u0036\u007a\u006b\u006a\u0036\u006b\u0036\u0036\u0035\u0041\u0077\u0034\u0035\u004f\u0059\u0046\u0035\u0050\u0059\u005a\u0036\u0041\u0051\u004e\u0036\u006b\u002b\u0059\u0035\u0041\u0073\u0054\u0036\u006c\u0041\u0076\u0057\u0035\u0048\u002b","qMczHIsjKOWnkSIcVdScVQW".split("").reverse().join(""),"\u0035\u0041\u0077\u006b\u0035\u0037\u0049\u0038\u0057\u0051\u006e\u0071","\u0057\u0034\u0068\u0064\u0056\u0053\u006f\u0057\u0065\u0043\u006f\u0034\u0057\u0050\u004f","\u0073\u0076\u0066\u0050\u0076\u0032\u004f"];_0x2e0f=function(){return _0x11dec5;};return _0x2e0f();}function _0x208e06(_0x2b85de,_0x50ab38,_0x57ea58,_0x3c1dd1,_0x5c259f){return _0x2554(_0x5c259f- -0x9c,_0x3c1dd1);}if(typeof PurchaseScript!==_0x208e06(-0x69,-0x8b,-0x73,"\u0031\u0039\u0055\u006e",-0x7e)&&!PurchaseScript["\u0067\u0065\u0074\u0049\u0073\u0052\u0075\u006e\u006e\u0069\u006e\u0067"]()){toast(_0x52f93e(-0x1cf,-0x1c2,"0Tjw".split("").reverse().join(""),-0x1ba,-0x1c2));DeviceAuth["\u0076\u0065\u0072\u0069\u0066\u0079"](function(_0x13c43e,_0x3a88b0,_0x1c5fe2){function _0x19f4d7(_0x1873f2,_0x277520,_0xc61a65,_0x4a7ad8,_0x212894){return _0x2554(_0x212894-0x183,_0x4a7ad8);}var _0x25ea9e={"\u0076\u0045\u004a\u005a\u0067":_0x19f4d7(0x1b8,0x1ad,0x1ad,"\u0075\u004c\u0028\u0035",0x1ad),'IQiWj':function(_0x45eecd){return _0x45eecd();},"\u0053\u0075\u0077\u0059\u0044":function(_0x2fc81f,_0x3c284e){return _0x2fc81f+_0x3c284e;},'eCUks':_0x31a7e2(-0x30b,-0x308,-0x315,-0x328,-0x318)};function _0x31a7e2(_0x46f220,_0x3a03ef,_0x2acdcc,_0x32b167,_0xe6417d){return _0x1fc9(_0xe6417d- -0x326,_0x2acdcc);}function _0x38b327(_0xa77bb1,_0x28fcca,_0x5e79bc,_0x7ac041,_0x4b6d43){return _0x1fc9(_0x7ac041- -0x351,_0xa77bb1);}function _0x13c603(_0x231f86,_0x2be066,_0x29fc5c,_0x872869,_0x961357){return _0x2554(_0x872869- -0x3ae,_0x961357);}function _0x5e0e67(_0xea2dcb,_0x27aab3,_0x3162bf,_0x85c0d7,_0x5cfad1){return _0x2554(_0xea2dcb-0x146,_0x85c0d7);}if(_0x13c43e){PurchaseScript['setIsRunning'](!![]);toast(_0x25ea9e["\u0076\u0045\u004a\u005a\u0067"]);controlButton['buttonText']['setText']("\u505c\u6b62");PurchaseScript['clearDebugInfo']();PurchaseScript["\u0061\u0064\u0064\u0044\u0065\u0062\u0075\u0067\u0049\u006e\u0066\u006f"](_0x31a7e2(-0x2fc,-0x30b,-0x302,-0x2fb,-0x30b));PurchaseScript["\u0061\u0064\u0064\u0044\u0065\u0062\u0075\u0067\u0049\u006e\u0066\u006f"](_0x19f4d7(0x184,0x19b,0x196,"\u0075\u0036\u0056\u0059",0x190));_0x25ea9e["\u0049\u0051\u0069\u0057\u006a"](closeAllWindows);PurchaseScript["\u0073\u0074\u0061\u0072\u0074\u0050\u0075\u0072\u0063\u0068\u0061\u0073\u0065"]();}else{toast(_0x25ea9e["\u0053\u0075\u0077\u0059\u0044"](_0x25ea9e['eCUks'],_0x3a88b0));log(_0x5e0e67(0x157,0x16d,0x168,"MeQJ".split("").reverse().join(""),0x16e)+_0x3a88b0);}});}else if(typeof PurchaseScript!==_0x3c7d60(-0x37f,-0x37b,-0x382,-0x37c,"MeQJ".split("").reverse().join(""))&&PurchaseScript['getIsRunning']()){PurchaseScript["\u0073\u0065\u0074\u0049\u0073\u0052\u0075\u006e\u006e\u0069\u006e\u0067"](![]);toast(_0x3c7d60(-0x392,-0x3a5,-0x39f,-0x37e,"\u006a\u0037\u0044\u0049"));controlButton["\u0062\u0075\u0074\u0074\u006f\u006e\u0054\u0065\u0078\u0074"]["\u0073\u0065\u0074\u0054\u0065\u0078\u0074"](_0x1c0adb("\u0044\u0063\u0038\u0057",-0x270,-0x263,-0x26b,-0x25d));PurchaseScript['addDebugInfo'](_0x3b3a03(0x312,0x31b,0x331,0x333,0x329));}
        
    }
    
    function handleDoubleClick() {
        if (!mainWindow && !configWindow) {
            createMainWindow();
        }
    }
    
    function createMainWindow() {
        
        var screenWidth = device.width;
        var screenHeight = device.height;
        var density = context.getResources().getDisplayMetrics().density;
        
        var panelPadding = 20 * density;     
        var panelWidth = 280 * density;      
        var estimatedHeight = 300 * density; 
        
        var screenCenterX = screenWidth / 2;      
        var screenCenterY = screenHeight / 2;     
        var panelX = Math.floor(screenCenterX - panelWidth / 2);        
        var panelY = Math.floor(screenCenterY - estimatedHeight / 2);    
        
        if (panelX < 10) panelX = 10;
        if (panelY < 10) panelY = 10;
        if (panelX + panelWidth > screenWidth - 10) {
            panelX = screenWidth - panelWidth - 10;
        }
        if (panelY + estimatedHeight > screenHeight - 10) {
            panelY = screenHeight - estimatedHeight - 10;
        }
        
        mainWindow = floaty.window(
            <card cardCornerRadius="15dp" cardElevation="8dp" cardBackgroundColor="#F5F5F5">
                <vertical padding="20" w="280">
                    <horizontal>
                        <text text="抢购控制" textColor="#FF6B35" 
                              textSize="20sp" textStyle="bold" layout_weight="1"/>
                        <text id="closeBtn" text="×" textColor="#999999" textSize="24sp" paddingRight="5"/>
                    </horizontal>
                    
                    
                   
                    <text text="购买方式" textColor="#FF6B35" 
                          textSize="16sp" marginTop="15" textStyle="bold"/>
                    <radiogroup id="purchaseTypeGroup" marginTop="5">
                        
                        <radio id="deliveryRadio" text="送到家" 
                               textColor="#333333"/>
                        
                        <radio id="pickupRadio" text="到店取" 
                               textColor="#333333"/>
                       
                        <radio id="flowRadio" text="流态式刷新" 
                               textColor="#333333"/>
                    </radiogroup>
                    
                    
                    
                    <text text="下单模式" textColor="#FF6B35" 
                          textSize="16sp" marginTop="15" textStyle="bold"/>
                    <radiogroup id="orderTypeGroup" orientation="horizontal" marginTop="5">
                        
                        <radio id="normalRadio" text="天纵推荐" 
                               textColor="#333333"/>
                        
                        <radio id="shieldRadio" text="破盾下单" 
                               textColor="#333333" marginLeft="20"/>
                    </radiogroup>
                    
                   
                    
                    <card id="configBtn" cardCornerRadius="20dp" cardElevation="2dp" 
                          cardBackgroundColor="#FFF4F0" marginTop="20" w="match_parent" h="40">
                        <horizontal gravity="center">
                            <text text="⚙" textColor="#FF6B35" textSize="18sp" marginRight="5"/>
                            <text text="配置选项" textColor="#FF6B35" textSize="14sp"/>
                        </horizontal>
                    </card>
                </vertical>
            </card>
        );
        
        mainWindow.setPosition(panelX, panelY);
        mainWindow.setAdjustEnabled(false);
        
        setupMainWindowEvents();
        updateMainWindowOptions();
    }
    
    function setupMainWindowEvents() {
        mainWindow.closeBtn.click(function() {
            if (typeof PurchaseScript !== 'undefined') {
                PurchaseScript.saveConfig();
            }
            closeMainWindow();
        });
        
        mainWindow.configBtn.click(function() {
            closeMainWindow();
            createConfigWindow();
        });
        
        mainWindow.deliveryRadio.on("check", function(checked) {
            if (checked && typeof PurchaseScript !== 'undefined') {
                PurchaseScript.setPurchaseType("送到家");
                PurchaseScript.saveConfig();
                
                if (typeof PurchaseScript.updateDebugWindow !== 'undefined') {
                    PurchaseScript.updateDebugWindow();
                }
                toast("切换到：送到家");
            }
        });
        
        mainWindow.pickupRadio.on("check", function(checked) {
            if (checked && typeof PurchaseScript !== 'undefined') {
                PurchaseScript.setPurchaseType("到店取");
                PurchaseScript.saveConfig();
                
                if (typeof PurchaseScript.updateDebugWindow !== 'undefined') {
                    PurchaseScript.updateDebugWindow();
                }
                toast("切换到：到店取");
            }
        });
        
        mainWindow.flowRadio.on("check", function(checked) {
            if (checked && typeof PurchaseScript !== 'undefined') {
                PurchaseScript.setPurchaseType("流态式刷新");
                PurchaseScript.saveConfig();
                
                if (typeof PurchaseScript.updateDebugWindow !== 'undefined') {
                    PurchaseScript.updateDebugWindow();
                }
                toast("切换到：流态式刷新");
            }
        });
        
        mainWindow.normalRadio.on("check", function(checked) {
            if (checked && typeof PurchaseScript !== 'undefined') {
                PurchaseScript.setOrderType("天纵推荐");
                PurchaseScript.saveConfig();
               
                if (typeof PurchaseScript.updateDebugWindow !== 'undefined') {
                    PurchaseScript.updateDebugWindow();
                }
                toast("切换到：天纵推荐");
            }
        });
        
        mainWindow.shieldRadio.on("check", function(checked) {
            if (checked && typeof PurchaseScript !== 'undefined') {
                PurchaseScript.setOrderType("破盾下单");
                PurchaseScript.saveConfig();
                
                if (typeof PurchaseScript.updateDebugWindow !== 'undefined') {
                    PurchaseScript.updateDebugWindow();
                }
                toast("切换到：破盾下单");
            }
        });
    }
    
    function updateMainWindowOptions() {
        if (!mainWindow || typeof PurchaseScript === 'undefined') return;
        
        var purchaseType = PurchaseScript.getPurchaseType();
        var orderType = PurchaseScript.getOrderType();
        
        if (purchaseType === "送到家") {
            mainWindow.deliveryRadio.setChecked(true);
        } else if (purchaseType === "到店取") {
            mainWindow.pickupRadio.setChecked(true);
        } else {
            mainWindow.flowRadio.setChecked(true);
        }
        
        if (orderType === "天纵推荐") {
            mainWindow.normalRadio.setChecked(true);
        } else {
            mainWindow.shieldRadio.setChecked(true);
        }
    }
    
    function createConfigWindow() {
        
        var screenWidth = device.width;
        var screenHeight = device.height;
        var density = context.getResources().getDisplayMetrics().density;
        
        var panelPadding = 20 * density;
        var panelWidth = 300 * density;
        var estimatedHeight = 550 * density;
        
        var screenCenterX = screenWidth / 2;
        var screenCenterY = screenHeight / 2;
        var panelX = Math.floor(screenCenterX - panelWidth / 2);
        var panelY = Math.floor(screenCenterY - estimatedHeight / 2);
        
        if (panelX < 10) panelX = 10;
        if (panelY < 10) panelY = 10;
        if (panelX + panelWidth > screenWidth - 10) {
            panelX = screenWidth - panelWidth - 10;
        }
        if (panelY + estimatedHeight > screenHeight - 10) {
            panelY = screenHeight - estimatedHeight - 10;
        }
        
        configWindow = floaty.window(
            <card cardCornerRadius="15dp" cardElevation="8dp" cardBackgroundColor="#F5F5F5">  
                <vertical w="300">
                    <horizontal padding="20 20 20 10">
                        <text id="backBtn" text="←" textColor="#FF6B35" textSize="24sp" paddingRight="10"/>
                        <text text="配置选项" textColor="#FF6B35" 
                              textSize="20sp" textStyle="bold" layout_weight="1"/>
                    </horizontal>
                    
                    <card cardCornerRadius="10dp" cardElevation="2dp" cardBackgroundColor="#FFF8DC" margin="20 10 20 5" w="match_parent">
                        <vertical padding="8">
                            <text text="⚠️ 注意事项" 
                                  textColor="#FF6B35" 
                                  textSize="12sp" textStyle="bold"/>
                            <text text="建议不要去更改这里的设置，恢复默认就是由Ai动态调节频率跟延迟" 
                                  textColor="#FF8C00" 
                                  textSize="10sp" marginTop="3"/>
                        </vertical>
                    </card>
                    
                    <ScrollView layout_weight="1" h="400">
                        <vertical padding="20 0 20 20">
                    
                    
                    
                    <card cardCornerRadius="10dp" cardBackgroundColor="#FFF4F0" marginTop="15" padding="15">
                        <vertical>
                            <text text="刷新延迟" textColor="#FF6B35" 
                                  textSize="16sp" textStyle="bold"/>
                            
                            
                            <vertical marginTop="10">
                                <text text="切换延迟" textColor="#666666" 
                                      textSize="14sp"/>
                               
                                <horizontal gravity="center_vertical" marginTop="5">
                                    <text id="refreshAdjustText" text="+0ms" textColor="#FF6B35" textSize="12sp" w="60"/>
                                    <seekbar id="refreshSeekbar" max="16" progress="8" layout_weight="1" 
                                            progressTint="#FF6B35" thumbTint="#FF6B35"/>
                                </horizontal>
                            </vertical>
                            
                           
                            <vertical marginTop="15">
                                <text text="安全延迟" textColor="#666666" 
                                      textSize="14sp"/>
                                
                                <horizontal gravity="center_vertical" marginTop="5">
                                    <text id="safetyAdjustText" text="+0ms" textColor="#FF6B35" textSize="12sp" w="60"/>
                                    <seekbar id="safetySeekbar" max="16" progress="8" layout_weight="1"
                                            progressTint="#FF6B35" thumbTint="#FF6B35"/>
                                </horizontal>
                            </vertical>
                            
                            
                            <vertical marginTop="15">
                                <text text="流态式刷新" textColor="#666666" 
                                      textSize="14sp"/>
                               
                                <horizontal gravity="center_vertical" marginTop="5">
                                    <text id="flowAdjustText" text="+0ms" textColor="#FF6B35" textSize="12sp" w="60"/>
                                    <seekbar id="flowSeekbar" max="16" progress="8" layout_weight="1"
                                            progressTint="#FF6B35" thumbTint="#FF6B35"/>
                                </horizontal>
                            </vertical>
                        </vertical>
                    </card>
                    
                   
                    
                    <card cardCornerRadius="10dp" cardBackgroundColor="#FFF4F0" marginTop="15" padding="15">
                        <vertical>
                            <text text="下单循环延迟" textColor="#FF6B35" 
                                  textSize="16sp" textStyle="bold"/>
                            
                           
                            <vertical marginTop="10">
                                <text text="天纵推荐模式" textColor="#666666" 
                                      textSize="14sp"/>
                                
                                <horizontal gravity="center_vertical" marginTop="5">
                                    <text id="normalAdjustText" text="+0ms" textColor="#FF6B35" textSize="12sp" w="60"/>
                                    <seekbar id="normalSeekbar" max="16" progress="8" layout_weight="1"
                                            progressTint="#FF6B35" thumbTint="#FF6B35"/>
                                </horizontal>
                            </vertical>
                            
                           
                            <vertical marginTop="15">
                                <text text="破盾下单延迟" textColor="#666666" 
                                      textSize="14sp"/>
                                
                                <horizontal gravity="center_vertical" marginTop="5">
                                    <text id="shieldAdjustText" text="+0ms" textColor="#FF6B35" textSize="12sp" w="60"/>
                                    <seekbar id="shieldSeekbar" max="16" progress="8" layout_weight="1"
                                            progressTint="#FF6B35" thumbTint="#FF6B35"/>
                                </horizontal>
                            </vertical>
                        </vertical>
                    </card>
                    
                   
                   
                    <card cardCornerRadius="10dp" cardBackgroundColor="#FFF4F0" marginTop="15" padding="15">
                        <vertical>
                            <text text="进入循环延迟" textColor="#FF6B35" 
                                  textSize="16sp" textStyle="bold"/>
                            
                            
                            <vertical marginTop="10">
                                <text text="进入天纵推荐" textColor="#666666" 
                                      textSize="14sp"/>
                               
                                <horizontal gravity="center_vertical" marginTop="5">
                                    <text id="normalLoopEntryText" text="+0ms" textColor="#FF6B35" textSize="12sp" w="60"/>
                                    <seekbar id="normalLoopEntrySeekbar" max="16" progress="8" layout_weight="1"
                                            progressTint="#FF6B35" thumbTint="#FF6B35"/>
                                </horizontal>
                            </vertical>
                            
                            
                            <vertical marginTop="15">
                                <text text="进入破盾下单" textColor="#666666" 
                                      textSize="14sp"/>
                                
                                <horizontal gravity="center_vertical" marginTop="5">
                                    <text id="shieldLoopEntryText" text="+0ms" textColor="#FF6B35" textSize="12sp" w="60"/>
                                    <seekbar id="shieldLoopEntrySeekbar" max="16" progress="8" layout_weight="1"
                                            progressTint="#FF6B35" thumbTint="#FF6B35"/>
                                </horizontal>
                            </vertical>
                        </vertical>
                    </card>
                    
                   
                    
                    <card cardCornerRadius="10dp" cardBackgroundColor="#FFF4F0" marginTop="15" padding="15">
                        <vertical>
                            <text text="二阶防盾循环设置" textColor="#FF6B35" 
                                  textSize="16sp" textStyle="bold"/>
                            
                           
                            <vertical marginTop="10">
                                <text text="快循环持续时间" textColor="#666666" 
                                      textSize="14sp"/>
                               
                                <horizontal gravity="center_vertical" marginTop="5">
                                    <text id="fastLoopDurationText" text="5秒" textColor="#FF6B35" textSize="12sp" w="60"/>
                                    <seekbar id="fastLoopDurationSeekbar" max="10" progress="5" layout_weight="1"
                                            progressTint="#FF6B35" thumbTint="#FF6B35"/>
                                </horizontal>
                            </vertical>
                            
                            
                            <vertical marginTop="15">
                                <text text="天纵推荐慢循环" textColor="#666666" 
                                      textSize="14sp"/>
                               
                                <horizontal gravity="center_vertical" marginTop="5">
                                    <text id="slowNormalText" text="1500ms" textColor="#FF6B35" textSize="12sp" w="60"/>
                                    <seekbar id="slowNormalSeekbar" max="20" progress="10" layout_weight="1"
                                            progressTint="#FF6B35" thumbTint="#FF6B35"/>
                                </horizontal>
                            </vertical>
                            
                            
                            <vertical marginTop="15">
                                <text text="破盾模式慢循环" textColor="#666666" 
                                      textSize="14sp"/>
                               
                                <horizontal gravity="center_vertical" marginTop="5">
                                    <text id="slowShieldText" text="1200ms" textColor="#FF6B35" textSize="12sp" w="60"/>
                                    <seekbar id="slowShieldSeekbar" max="20" progress="8" layout_weight="1"
                                            progressTint="#FF6B35" thumbTint="#FF6B35"/>
                                </horizontal>
                            </vertical>
                        </vertical>
                    </card>
                        </vertical>
                    </ScrollView>
                    
                    <horizontal padding="20 20 15 20" marginTop="10">
                        <button id="saveBtn" text="保存设置" w="0" layout_weight="1" h="45"
                                backgroundTint="#FF6B35" textColor="#FFFFFF"/>
                        <button id="resetBtn" text="恢复默认" w="0" layout_weight="1" h="45" marginLeft="10"
                                backgroundTint="#FFB399" textColor="#FFFFFF"/>
                    </horizontal>
                </vertical>
            </card>
        );
        
        configWindow.setPosition(panelX, panelY);
        configWindow.setAdjustEnabled(false);
        
        setupConfigWindowEvents();
    }
    
    function setupConfigWindowEvents() {
        configWindow.backBtn.click(function() {
            closeConfigWindow();
            createMainWindow();
        });
        
        
        if (typeof PurchaseScript !== 'undefined') {
            var adjustments = PurchaseScript.getCurrentAdjustments();
            configWindow.refreshSeekbar.setProgress(8 + adjustments.refreshAdjust / 80);
            configWindow.safetySeekbar.setProgress(8 + adjustments.safetyDelayAdjust / 20);
            configWindow.flowSeekbar.setProgress(8 + adjustments.flowRefreshAdjust / 80);
            configWindow.normalSeekbar.setProgress(8 + adjustments.normalLoopAdjust / 80);
            configWindow.shieldSeekbar.setProgress(8 + adjustments.shieldBreakAdjust / 80);
            configWindow.normalLoopEntrySeekbar.setProgress(8 + adjustments.normalLoopEntryAdjust / 50);
            configWindow.shieldLoopEntrySeekbar.setProgress(8 + adjustments.shieldLoopEntryAdjust / 50);
            
           
            configWindow.fastLoopDurationSeekbar.setProgress(adjustments.fastLoopDuration || CONFIG.PURCHASE_DEFAULTS.FAST_LOOP_DURATION);
            configWindow.slowNormalSeekbar.setProgress((adjustments.slowNormalLoopDelay || CONFIG.PURCHASE_DEFAULTS.SLOW_NORMAL_LOOP_DELAY) / 150);  // 150ms为一个单位
            configWindow.slowShieldSeekbar.setProgress((adjustments.slowShieldBreakDelay || CONFIG.PURCHASE_DEFAULTS.SLOW_SHIELD_BREAK_DELAY) / 150);
            
            updateAdjustText(configWindow.refreshAdjustText, adjustments.refreshAdjust);
            updateAdjustText(configWindow.safetyAdjustText, adjustments.safetyDelayAdjust);
            updateAdjustText(configWindow.flowAdjustText, adjustments.flowRefreshAdjust);
            updateAdjustText(configWindow.normalAdjustText, adjustments.normalLoopAdjust);
            updateAdjustText(configWindow.shieldAdjustText, adjustments.shieldBreakAdjust);
            updateAdjustText(configWindow.normalLoopEntryText, adjustments.normalLoopEntryAdjust);
            updateAdjustText(configWindow.shieldLoopEntryText, adjustments.shieldLoopEntryAdjust);
            
           
            updateTwoPhaseText(configWindow.fastLoopDurationText, adjustments.fastLoopDuration || CONFIG.PURCHASE_DEFAULTS.FAST_LOOP_DURATION, "秒");
            updateTwoPhaseText(configWindow.slowNormalText, adjustments.slowNormalLoopDelay || CONFIG.PURCHASE_DEFAULTS.SLOW_NORMAL_LOOP_DELAY, "ms");
            updateTwoPhaseText(configWindow.slowShieldText, adjustments.slowShieldBreakDelay || CONFIG.PURCHASE_DEFAULTS.SLOW_SHIELD_BREAK_DELAY, "ms");
        }
        
        configWindow.saveBtn.click(function() {
            if (typeof PurchaseScript !== 'undefined') {
                var refreshAdjust = (configWindow.refreshSeekbar.getProgress() - 8) * 80;
                var safetyDelayAdjust = (configWindow.safetySeekbar.getProgress() - 8) * 20;
                var flowRefreshAdjust = (configWindow.flowSeekbar.getProgress() - 8) * 80;
                var normalLoopAdjust = (configWindow.normalSeekbar.getProgress() - 8) * 80;
                var shieldBreakAdjust = (configWindow.shieldSeekbar.getProgress() - 8) * 80;
                var normalLoopEntryAdjust = (configWindow.normalLoopEntrySeekbar.getProgress() - 8) * 50;
                var shieldLoopEntryAdjust = (configWindow.shieldLoopEntrySeekbar.getProgress() - 8) * 50;
                
               
                var fastLoopDuration = configWindow.fastLoopDurationSeekbar.getProgress();  
                var slowNormalLoopDelay = configWindow.slowNormalSeekbar.getProgress() * 150;  
                var slowShieldBreakDelay = configWindow.slowShieldSeekbar.getProgress() * 150;  
                
                PurchaseScript.updateAdjustments({
                    refreshAdjust: refreshAdjust,
                    safetyDelayAdjust: safetyDelayAdjust,
                    flowRefreshAdjust: flowRefreshAdjust,
                    normalLoopAdjust: normalLoopAdjust,
                    shieldBreakAdjust: shieldBreakAdjust,
                    normalLoopEntryAdjust: normalLoopEntryAdjust,
                    shieldLoopEntryAdjust: shieldLoopEntryAdjust,
                    fastLoopDuration: fastLoopDuration,
                    slowNormalLoopDelay: slowNormalLoopDelay,
                    slowShieldBreakDelay: slowShieldBreakDelay
                });
                
                PurchaseScript.saveConfig();
                toast("设置已保存");
                closeConfigWindow();
                createMainWindow();
            }
        });
        
        configWindow.resetBtn.click(function() {
            if (typeof PurchaseScript !== 'undefined') {
                PurchaseScript.resetToDefault();
                
                configWindow.refreshSeekbar.setProgress(8);
                configWindow.safetySeekbar.setProgress(8);
                configWindow.flowSeekbar.setProgress(8);
                configWindow.normalSeekbar.setProgress(8);
                configWindow.shieldSeekbar.setProgress(8);
                configWindow.normalLoopEntrySeekbar.setProgress(8);
                configWindow.shieldLoopEntrySeekbar.setProgress(8);
                
                
                configWindow.fastLoopDurationSeekbar.setProgress(CONFIG.PURCHASE_DEFAULTS.FAST_LOOP_DURATION);
                configWindow.slowNormalSeekbar.setProgress(CONFIG.PURCHASE_DEFAULTS.SLOW_NORMAL_LOOP_DELAY / 150);  // 150ms为一个单位
                configWindow.slowShieldSeekbar.setProgress(CONFIG.PURCHASE_DEFAULTS.SLOW_SHIELD_BREAK_DELAY / 150);
                
                updateAdjustText(configWindow.refreshAdjustText, 0);
                updateAdjustText(configWindow.safetyAdjustText, 0);
                updateAdjustText(configWindow.flowAdjustText, 0);
                updateAdjustText(configWindow.normalAdjustText, 0);
                updateAdjustText(configWindow.shieldAdjustText, 0);
                updateAdjustText(configWindow.normalLoopEntryText, 0);
                updateAdjustText(configWindow.shieldLoopEntryText, 0);
                
                
                updateTwoPhaseText(configWindow.fastLoopDurationText, CONFIG.PURCHASE_DEFAULTS.FAST_LOOP_DURATION, "秒");
                updateTwoPhaseText(configWindow.slowNormalText, CONFIG.PURCHASE_DEFAULTS.SLOW_NORMAL_LOOP_DELAY, "ms");
                updateTwoPhaseText(configWindow.slowShieldText, CONFIG.PURCHASE_DEFAULTS.SLOW_SHIELD_BREAK_DELAY, "ms");
                
                toast("已恢复默认参数");
            }
        });
        
        
        configWindow.refreshSeekbar.setOnSeekBarChangeListener({
            onProgressChanged: function(seekBar, progress, fromUser) {
                var adjust = (progress - 8) * 80;
                updateAdjustText(configWindow.refreshAdjustText, adjust);
            }
        });
        
        configWindow.safetySeekbar.setOnSeekBarChangeListener({
            onProgressChanged: function(seekBar, progress, fromUser) {
                var adjust = (progress - 8) * 20;
                updateAdjustText(configWindow.safetyAdjustText, adjust);
            }
        });
        
        configWindow.flowSeekbar.setOnSeekBarChangeListener({
            onProgressChanged: function(seekBar, progress, fromUser) {
                var adjust = (progress - 8) * 80;
                updateAdjustText(configWindow.flowAdjustText, adjust);
            }
        });
        
        configWindow.normalSeekbar.setOnSeekBarChangeListener({
            onProgressChanged: function(seekBar, progress, fromUser) {
                var adjust = (progress - 8) * 80;
                updateAdjustText(configWindow.normalAdjustText, adjust);
            }
        });
        
        configWindow.shieldSeekbar.setOnSeekBarChangeListener({
            onProgressChanged: function(seekBar, progress, fromUser) {
                var adjust = (progress - 8) * 80;
                updateAdjustText(configWindow.shieldAdjustText, adjust);
            }
        });
        
        configWindow.normalLoopEntrySeekbar.setOnSeekBarChangeListener({
            onProgressChanged: function(seekBar, progress, fromUser) {
                var adjust = (progress - 8) * 50;
                updateAdjustText(configWindow.normalLoopEntryText, adjust);
            }
        });
        
        configWindow.shieldLoopEntrySeekbar.setOnSeekBarChangeListener({
            onProgressChanged: function(seekBar, progress, fromUser) {
                var adjust = (progress - 8) * 50;
                updateAdjustText(configWindow.shieldLoopEntryText, adjust);
            }
        });
        
        
        configWindow.fastLoopDurationSeekbar.setOnSeekBarChangeListener({
            onProgressChanged: function(seekBar, progress, fromUser) {
                var seconds = Math.max(1, progress);  
                updateTwoPhaseText(configWindow.fastLoopDurationText, seconds, "秒");
            }
        });
        
        configWindow.slowNormalSeekbar.setOnSeekBarChangeListener({
            onProgressChanged: function(seekBar, progress, fromUser) {
                var delay = Math.max(150, progress * 150); 
                updateTwoPhaseText(configWindow.slowNormalText, delay, "ms");
            }
        });
        
        configWindow.slowShieldSeekbar.setOnSeekBarChangeListener({
            onProgressChanged: function(seekBar, progress, fromUser) {
                var delay = Math.max(150, progress * 150);  
                updateTwoPhaseText(configWindow.slowShieldText, delay, "ms");
            }
        });
    }
    
    function updateAdjustText(textView, value) {
        var sign = value >= 0 ? "+" : "";
        textView.setText(sign + value + "ms");
    }
    
    function updateTwoPhaseText(textView, value, unit) {
        textView.setText(value + unit);
    }
    
    function closeMainWindow() {
        if (mainWindow) {
            mainWindow.close();
            mainWindow = null;
        }
    }
    
    function closeConfigWindow() {
        if (configWindow) {
            configWindow.close();
            configWindow = null;
        }
    }
    
    function closeAllWindows() {
        closeMainWindow();
        closeConfigWindow();
    }
    
    function cleanup() {
        closeAllWindows();
        if (controlButton) {
            try {
                controlButton.close();
            } catch (e) {}
            controlButton = null;
        }
        if (debugWindow) {
            try {
                debugWindow.close();
            } catch (e) {}
            debugWindow = null;
        }
    }
    
    function getControlButton() {
        return controlButton;
    }
    
    function setDebugWindow(window) {
        debugWindow = window;
    }
    
    
    return {
        createFloatingButton: createFloatingButton,
        createMainWindow: createMainWindow,
        createConfigWindow: createConfigWindow,
        closeMainWindow: closeMainWindow,
        closeConfigWindow: closeConfigWindow,
        closeAllWindows: closeAllWindows,
        cleanup: cleanup,
        getControlButton: getControlButton,
        setDebugWindow: setDebugWindow,
        updateMainWindowOptions: updateMainWindowOptions
    };
})();


if (typeof module !== 'undefined' && module.exports) {
    module.exports = FloatingControl;
}
