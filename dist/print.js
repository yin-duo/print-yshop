!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("PrintCS",[],e):"object"==typeof exports?exports.PrintCS=e():t.PrintCS=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=0)}([function(t,e,n){"use strict";function i(t,e){var n=t.createElement("style");return n.type="text/css",n.appendChild(window.document.createTextNode(e)),n}function o(t,e){var n=t.createElement("link");return n.type="text/css",n.rel="stylesheet",n.href=e,n}function r(t){var e=window.document.createElement("iframe");return e.setAttribute("style","visibility:hidden;position:absolute;width:0;height:0;top:-10px;left:-10px;"),e.setAttribute("width","0"),e.setAttribute("height","0"),e.setAttribute("wmode","opaque"),t.appendChild(e),e}function a(){console.log("当前站点 "+document.domain+" 使用 Yshop商城后台管理系统 框架技术"),console.log("上海银舵网络科技有限公司版权所有 www.yin-duo.com"),console.log("Yshop - PrintCS")}Object.defineProperty(e,"__esModule",{value:!0}),e.createStyle=i,e.createLinkStyle=o,e.createIFrame=r,e.getSystemInfo=a,n.d(e,"PrintCS",function(){return h});var s=/^(((http[s]?)|file):)?(\/\/)+([0-9a-zA-Z-_.=?&].+)$/,c=/^((\.|\.\.)?\/)([0-9a-zA-Z-_.=?&]+\/)*([0-9a-zA-Z-_.=?&]+)$/,d=function(t){return s.test(t)||c.test(t)},u={parent:window.document.body,headElements:[],bodyElements:[]},h=function(){function t(t){this.isLoading=!1,this.hasEvents=!1,this.opts=Object.assign(u,t||{}),this.iframe=r(this.opts.parent)}return t.prototype.getIFrame=function(){return this.iframe},t.prototype.print=function(t,e,n,r){if(!this.isLoading){var a=this.iframe,s=a.contentDocument,c=a.contentWindow;if(s&&c&&(this.elCopy=t.cloneNode(!0),this.elCopy)){this.isLoading=!0,this.callback=r;var u=c.document;u.open(),u.write('<!DOCTYPE html><html lang="zh"><head><title>Yshop</title></head><body/></html>'),this.addEvents();var h=this.opts,l=h.headElements,p=h.bodyElements;Array.isArray(l)&&l.forEach(function(t){return u.head.appendChild(t)}),Array.isArray(p)&&p.forEach(function(t){return u.body.appendChild(t)}),Array.isArray(e)&&e.forEach(function(t){t&&(d(t)?u.head.appendChild(o(u,t)):u.head.appendChild(i(u,t)))}),u.body.appendChild(this.elCopy),Array.isArray(n)&&n.forEach(function(t){if(t){var e=u.createElement("script");d(t)?e.src=t:e.innerText=t,u.body.appendChild(e)}}),u.close()}}},t.prototype.printURL=function(t,e){this.isLoading||(this.addEvents(),this.isLoading=!0,this.callback=e,this.iframe.src=t)},t.prototype.launchPrint=function(t){t.document.execCommand("print",!1,null)||t.print()},t.prototype.addEvents=function(){var t=this;this.hasEvents||(this.hasEvents=!0,this.iframe.addEventListener("load",function(){return t.onLoad()},!1))},t.prototype.onLoad=function(){var t=this;if(this.iframe){this.isLoading=!1;var e=this.iframe,n=e.contentDocument,i=e.contentWindow;if(!n||!i)return;this.callback?this.callback({iframe:this.iframe,element:this.elCopy,launchPrint:function(){return t.launchPrint(i)}}):this.launchPrint(i)}},t}();e.default=h}])});