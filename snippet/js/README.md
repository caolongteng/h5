#Js代码片段
---
## 目录
1.[移动端初始化rem布局](#reset)  
2.[获取url传参](#param)  
3.[cookie操作](#cookie)  
### <a id="reset">1.移动端初始化rem布局</a>
移动端自适应布局初始化逻辑，以750宽度为基准值
```js
(function(){
    var designWidth = 750,baseSize = 100;
    var resize = function(){
        document.documentElement.style.fontSize = window.innerWidth*baseSize/designWidth + 'px';
    };
    (window.onresize = window.onload = resize) && resize();
})()
```
### <a id="param">获取url传参</a>
获取url中传过来的参数
```js
function getParam(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.hash.substr(3).match(reg);
    if (r != null){
        return decodeURIComponent(r[2]);
    }
    return false;
}
```
### <a id="cookie">cookie操作</a>
```js
var cookie = {
    //写cookies
    setCookie: function (name, value){
        var Days = 365;
        var exp =  new  Date();
        exp.setTime(exp.getTime() + Days*24*60*60*1000);
        document.cookie = name +  "=" + escape (value) +  ";expires="  + exp.toUTCString();
    },
     
    //读取cookies
    getCookie: function (name){
        var arr = [],reg= new  RegExp( "(^| )" +name+ "=([^;]*)(;|$)" );
        if (arr = document.cookie.match(reg)) 
            return decodeURIComponent(arr[2]);
        else 
            return false ;
    },
     
    //删除cookies
    delCookie: function (name){
        var exp =  new  Date();
        exp.setTime(exp.getTime() - 1);
        var cval = this.getCookie(name);
        if (cval!== null ) 
            document.cookie= item + "=" +cval+";expires=" +exp.toUTCString();
    }
}
```
