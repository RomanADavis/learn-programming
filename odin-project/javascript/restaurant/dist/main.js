!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);const r={pages:{home:function(){const e=document.createElement("div");return e.appendChild(function(){const e=document.createElement("div");e.id="image";const n=document.createElement("img");return n.src="https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg",e.appendChild(n),e}()),e.appendChild(function(){const e=document.createElement("div");e.id="headline";const n=document.createElement("span");return n.innerHTML="Here's the headline.",e.appendChild(n),e}()),e.appendChild(function(){const e=document.createElement("div"),n=document.createElement("span");return n.innerHTML="Here's some copy.",e.appendChild(n),e}()),e}(),menu:function(){const e=document.createElement("div"),n=document.createElement("span");return e.innerHTML="Here's the menu.",e.appendChild(n),e}()},loadPage:function(e){const n=document.getElementById("content");e=r.pages[e],n.innerHTML="",n.appendChild(function(e){const n=function(e,n){const t=document.createElement("li");return document.createElement("a"),t.innerHTML=e,t.onclick=`navigation.loadPage("${e}")`,t.class=n?"active":"",t},t=document.createElement("ul"),r=["home","menu"];let o;return(o=e&&e.active?r.map(t=>n(t,e.active===t)):r.map(e=>n(e,"home"===e))).forEach(e=>t.appendChild(e)),t.className="navigation",t}()),n.appendChild(e)}};r.loadPage("home")}]);