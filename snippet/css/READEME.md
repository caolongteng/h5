#Css代码片段
---
##目录
1.[移动端重置样式](#reset)
2.[清除浮动](#clear)
3.[单词强制换行](#word-wrap)
4.[文本超出显示...](#text-overflow)
5.[设置input的placeholder](#placeholder)
###<a id="reset">1.移动端重置样式</a>
去除因浏览器差异引起的样式不统一，重置样式
```css
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin:0; padding:0; }
address, cite, dfn, em, var { font-style:normal; }
ul, ol { list-style:none; }
a {  background-color:transparent;text-decoration:none; }
table { border-collapse:collapse; border-spacing:0; } 
body {
  font-family: 'arial,Helvetica';
  -webkit-user-select: none;
  /*禁止ios和android用户选中文字*/
  -webkit-touch-callout: none;
  /*禁止ios 长按时不触发系统的菜单，禁止ios&android长按时下载图片*/
  -webkit-tap-highlight-color: transparent;
  /*去掉ios系统中元素被触摸时产生的半透明灰色遮罩*/
}
```
###<a id="clear">清除浮动</a>
在浮动元素的父级元素添加clear类
```css
.clear:after{
    content: '';
    display: block;
    clear: both;
}
```
###<a id="word-wrap">单词强制换行</a>
```css
p{
  word-wrap: break-word; 
  word-break: normal; 
}
```
###<a id="text-overflow">文本超出显示...</a>
```css
/*单行文本*/
div{
    text-overflow: ellipsis;
    display:block;
    white-space:nowrap;
    overflow:hidden;
}
/*多行文本*/
div{
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;（灵活替换）
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
}
```
###<a id="placeholder">设置input的placeholder</a>
```css
input::-webkit-input-placeholder {
    color: #d0d0d0;
}
```