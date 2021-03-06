//获取元素距离顶部的高度
function getHeight(obj){
    var h = 0;
    while (obj) {
        h += obj.offsetTop;
        obj = obj.offsetParent;
    }
    return h;
}
//重载滚动事件
window.onscroll = function(){
    //获取当前滚动的高度
    var scrollHeight = (window.innerHeight || document.documentElement.scrollHeight) + document.body.clientHeight;
}
//获取首屏的图片
window.onlaod = function(){
    window.onscroll();
}



//完整js代码

window.Echo = (function (window, document, undefined) {

    'use strict';

    var store = [], offset, throttle, poll;

    var _inView = function (el) {
        var coords = el.getBoundingClientRect();
        return ((coords.top >= 0 && coords.left >= 0 && coords.top) <= (window.innerHeight || document.documentElement.clientHeight) + parseInt(offset));
    };
    var _isDeal = function(el){
        return el.getAttribute('src') === el.getAttribute('data-echo');
    }
    var _pollImages = function () {
        for (var i = store.length; i--;) {
            var self = store[i];
            if (!_isDeal(self) && _inView(self)) {
                self.src = self.getAttribute('data-echo');
                store.splice(i, 1);
            }
        }
    };

    var _throttle = function () {
        clearTimeout(poll);
        poll = setTimeout(_pollImages, throttle);
    };

    var init = function (obj) {
        var nodes = document.querySelectorAll('[data-echo]');
        var opts = obj || {};
        offset = opts.offset || 0;
        throttle = opts.throttle || 250;

        for (var i = 0; i < nodes.length; i++) {
            store.push(nodes[i]);
        }

        _throttle();

        if (document.addEventListener) {
            window.addEventListener('scroll', _throttle, false);
        } else {
            window.attachEvent('onscroll', _throttle);
        }
    };

    return {
        init: init,
        render: _throttle
    };

})(window, document);