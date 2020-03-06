/*! For license information please see app.bundle.js.LICENSE */
!function(e){var t={};function i(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(r,o,function(t){return e[t]}.bind(null,o));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="./",i(i.s=25)}([function(e,t,i){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}e[t]=i}return e[t]}}(),s={};function n(e,t,i){for(var r=0;r<t.length;r++){var o={css:t[r][1],media:t[r][2],sourceMap:t[r][3]};s[e][r]?s[e][r](o):s[e].push(g(o,i))}}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=i.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var s=a(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var d,c=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function h(e,t,i,r){var o=i?"":r.css;if(e.styleSheet)e.styleSheet.cssText=c(t,o);else{var a=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}function u(e,t,i){var r=i.css,o=i.media,a=i.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,m=0;function g(e,t){var i,r,o;if(t.singleton){var a=m++;i=p||(p=l(t)),r=h.bind(null,i,a,!1),o=h.bind(null,i,a,!0)}else i=l(t),r=u.bind(null,i,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t,i){return(i=i||{}).singleton||"boolean"==typeof i.singleton||(i.singleton=o()),e=i.base?e+i.base:e,t=t||[],s[e]||(s[e]=[]),n(e,t,i),function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){s[e]||(s[e]=[]),n(e,t,i);for(var r=t.length;r<s[e].length;r++)s[e][r]();s[e].length=t.length,0===s[e].length&&delete s[e]}}}},function(e,t,i){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=function(e,t){var i=e[1]||"",r=e[3];if(!r)return i;if(t&&"function"==typeof btoa){var o=(s=r,n=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),"/*# ".concat(l," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[i].concat(a).concat([o]).join("\n")}var s,n,l;return[i].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var r=0;r<e.length;r++){var o=[].concat(e[r]);i&&(o[2]?o[2]="".concat(i," and ").concat(o[2]):o[2]=i),t.push(o)}},t}},function(e,t,i){"use strict";(function(e,r){var o,a=i(5);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var s=Object(a.a)(o);t.a=s}).call(this,i(4),i(24)(e))},function(e,t,i){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(e){"object"==typeof window&&(i=window)}e.exports=i},function(e,t,i){"use strict";function r(e){var t,i=e.Symbol;return"function"==typeof i?i.observable?t=i.observable:(t=i("observable"),i.observable=t):t="@@observable",t}i.d(t,"a",(function(){return r}))},function(e,t,i){var r=i(0),o=i(7);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},s=(r(e.i,o,a),o.locals?o.locals:{});e.exports=s},function(e,t,i){(t=i(1)(!1)).push([e.i,"html {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    overflow-y: hidden;\r\n    overflow-x: hidden;\r\n\r\n}\r\n\r\nbody {\r\n    overflow-y: hidden;\r\n    overflow-x: hidden;\r\n    -webkit-overflow-scrolling: touch;\r\n    height: 100%;\r\n    width: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n\r\n}",""]),e.exports=t},function(e,t,i){var r=i(0),o=i(9);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},s=(r(e.i,o,a),o.locals?o.locals:{});e.exports=s},function(e,t,i){(t=i(1)(!1)).push([e.i,"@media only screen and (max-width: 600px) {\r\n    html {\r\n        font-size: 5vmin\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 800px) and (min-width: 601px) {\r\n    html {\r\n        font-size: 1.5vmin\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 801px) {\r\n    html {\r\n        font-size: 2vmin\r\n    }\r\n}",""]),e.exports=t},function(e,t,i){var r=i(0),o=i(11);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},s=(r(e.i,o,a),o.locals?o.locals:{});e.exports=s},function(e,t,i){var r=i(1),o=i(3),a=i(12);t=r(!1);var s=o(a);t.push([e.i,"@font-face {\r\n    font-family: 'geometric-semi';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    src: url("+s+") format('woff2');\r\n}\r\nhtml{\r\n    font-family: 'geometric-semi';\r\n}\r\n    ",""]),e.exports=t},function(e,t,i){"use strict";i.r(t),t.default="data:font/woff2;base64,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"},function(e,t,i){var r=i(0),o=i(14);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},s=(r(e.i,o,a),o.locals?o.locals:{});e.exports=s},function(e,t,i){(t=i(1)(!1)).push([e.i,"html {\r\n    \r\n    --font-display-1-family:inherit;\r\n    --font-display-1-size:9.33rem;\r\n    --font-display-1-weight:300;\r\n\r\n    --font-display-2-family:inherit;\r\n    --font-display-2-size:4.66rem;\r\n    --font-display-2-weight:normal;\r\n\r\n    --font-display-3-family:inherit;\r\n    --font-display-3-size:3.75rem;\r\n    --font-display-3-weight:normal;\r\n\r\n    --font-display-4-family:inherit;\r\n    --font-display-4-size:2.83rem;\r\n    --font-display-4-weight:normal;\r\n\r\n    --font-headline-family:inherit;\r\n    --font-headline-size:2rem;\r\n    --font-headline-weight:normal;\r\n\r\n    --font-title-family:inherit;            \r\n    --font-title-size:1.66rem;\r\n    --font-title-weight:500;\r\n\r\n    --font-subheading-family:inherit;\r\n    --font-subheading-size:1.25rem;\r\n    --font-subheading-weight:normal;\r\n\r\n    --font-body-2-family:inherit;\r\n    --font-body-2-size: 1.08rem;\r\n    --font-body-2-weight:500;\r\n\r\n    --font-body-1-family:inherit;\r\n    --font-body-1-size: 1.08rem;\r\n    --font-body-1-weight:normal;\r\n\r\n    --font-caption-family:inherit;\r\n    --font-caption-size: 1rem;\r\n    --font-caption-weight:normal;\r\n\r\n    --font-button-family:inherit;\r\n    --font-button-size: 1.16rem;\r\n    --font-button-weight:500;\r\n\r\n    --font-header-family:inherit;\r\n    --font-header-size: 1.16rem;\r\n    --font-header-weight:500;\r\n\r\n    --font-subcaption-family:inherit;\r\n    --font-subcaption-size: .8rem;\r\n    --font-subcaption-weight:500;\r\n\r\n    --font-subindex-family:inherit;\r\n    --font-subindex-size: .6rem;\r\n    --font-subindex-weight:600;\r\n}",""]),e.exports=t},function(e,t,i){var r=i(0),o=i(16);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},s=(r(e.i,o,a),o.locals?o.locals:{});e.exports=s},function(e,t,i){(t=i(1)(!1)).push([e.i,"html {\r\n    --orange: #ff6602;\r\n    --orange-5: rgba(255, 102, 0, .5);\r\n    --color-primario: #025790;\r\n    --color-error: #cf2020;\r\n    --color-ok: #06a563;\r\n    --color-activo-oscuro: #e6da44;\r\n    --color-activo: rgb(156, 39, 176);\r\n    --color-activo-claro: #ffff54;\r\n    --fondo-oscuro: #1d1d1d;\r\n    --fondo-claro: #EEEEEE;\r\n    --disable-oscuro: #6E6E6E;\r\n    --disable-claro: #C4C4C4;\r\n    --letra-oscura: #000000;\r\n    --letra-clara: #ffffff;\r\n    --color-destacado: #ffb458;\r\n    --onsurface-color-helper: #5a5856;\r\n    --primary-color: #ff6600;\r\n    --color-lista: #7f0d0d;\r\n    --color-formulario: rgb(123, 76, 19);\r\n    --color-titular: #891597;\r\n    --color-calendario: #146653;\r\n}",""]),e.exports=t},function(e,t,i){var r=i(0),o=i(18);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},s=(r(e.i,o,a),o.locals?o.locals:{});e.exports=s},function(e,t,i){(t=i(1)(!1)).push([e.i,"html {\r\n    --shadow-none-box: none;\r\n    --shadow-none-z: 0;\r\n\r\n    --shadow-elevation-2-box: 0 2px 2px 0 rgba(0, 0, 0, 0.14),0 1px 5px 0 rgba(0, 0, 0, 0.12),0 3px 1px -2px rgba(0, 0, 0, 0.2);\r\n    --shadow-elevation-2-z: 200;\r\n\r\n    --shadow-elevation-3-box: 0 3px 4px 0 rgba(0, 0, 0, 0.14),0 1px 8px 0 rgba(0, 0, 0, 0.12),0 3px 3px -2px rgba(0, 0, 0, 0.4);\r\n    --shadow-elevation-3-z: 300;\r\n\r\n    --shadow-elevation-4-box: 0 4px 5px 0 rgba(0, 0, 0, 0.14),0 1px 10px 0 rgba(0, 0, 0, 0.12),0 2px 4px -1px rgba(0, 0, 0, 0.4);\r\n    --shadow-elevation-4-z: 400;\r\n\r\n    --shadow-elevation-6-box: 0 6px 10px 0 rgba(0, 0, 0, 0.14),0 1px 18px 0 rgba(0, 0, 0, 0.12),0 3px 5px -1px rgba(0, 0, 0, 0.4);\r\n    --shadow-elevation-6-z: 600;\r\n\r\n    --shadow-elevation-8-box: 0 8px 10px 1px rgba(0, 0, 0, 0.14),0 3px 14px 2px rgba(0, 0, 0, 0.12),0 5px 5px -3px rgba(0, 0, 0, 0.4);\r\n    --shadow-elevation-8-z: 800;\r\n\r\n    --shadow-elevation-12-box: 0 12px 16px 1px rgba(0, 0, 0, 0.14),0 4px 22px 3px rgba(0, 0, 0, 0.12),0 6px 7px -4px rgba(0, 0, 0, 0.4);\r\n    --shadow-elevation-12-z: 1200;\r\n\r\n    --shadow-elevation-16-box: 0 16px 24px 2px rgba(0, 0, 0, 0.14),0  6px 30px 5px rgba(0, 0, 0, 0.12),0  8px 10px -5px rgba(0, 0, 0, 0.4);\r\n    --shadow-elevation-16-z: 1600;\r\n\r\n    --shadow-elevation-24-box: 0 24px 38px 3px rgba(0, 0, 0, 0.14),0 9px 46px 8px rgba(0, 0, 0, 0.12),0 11px 15px -7px rgba(0, 0, 0, 0.4);\r\n    --shadow-elevation-24-z: 2400;\r\n}",""]),e.exports=t},function(e,t,i){var r=i(0),o=i(20);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},s=(r(e.i,o,a),o.locals?o.locals:{});e.exports=s},function(e,t,i){var r=i(1),o=i(3),a=i(21),s=i(22);t=r(!1);var n=o(a),l=o(s);t.push([e.i,"view-manager {\r\n    background-image: url("+n+');\r\n    background-size: 100vw 100vh;\r\n\r\n    background-position: center;\r\n    background-size: cover;\r\n    position: relative;\r\n\r\n}\r\n\r\nview-manager[media-size="small"]{\r\n    background-image: url('+l+");\r\n\r\n}",""]),e.exports=t},function(e,t,i){"use strict";i.r(t),t.default=i.p+"475836d9c2ac0dc47b7cf5a3936aead8.jpg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"71ccd01d2f36e5074e5434fa0a552356.png"},function(e,t,i){(function(e){!function(t){"use strict";function i(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function o(e,t,i){o.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:i,enumerable:!0})}function a(e,t){a.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function s(e,t){s.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function n(e,t,i){n.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:i,enumerable:!0})}function l(e,t,i){var r=e.slice((i||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,r),e}function d(e){var t=void 0===e?"undefined":z(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function c(e,t,i,r,h,u,p){p=p||[];var m=(h=h||[]).slice(0);if(void 0!==u){if(r){if("function"==typeof r&&r(m,u))return;if("object"===(void 0===r?"undefined":z(r))){if(r.prefilter&&r.prefilter(m,u))return;if(r.normalize){var g=r.normalize(m,u,e,t);g&&(e=g[0],t=g[1])}}}m.push(u)}"regexp"===d(e)&&"regexp"===d(t)&&(e=e.toString(),t=t.toString());var v=void 0===e?"undefined":z(e),f=void 0===t?"undefined":z(t),w="undefined"!==v||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(u),b="undefined"!==f||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(u);if(!w&&b)i(new a(m,t));else if(!b&&w)i(new s(m,e));else if(d(e)!==d(t))i(new o(m,e,t));else if("date"===d(e)&&e-t!=0)i(new o(m,e,t));else if("object"===v&&null!==e&&null!==t)if(p.filter((function(t){return t.lhs===e})).length)e!==t&&i(new o(m,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var y;for(e.length,y=0;y<e.length;y++)y>=t.length?i(new n(m,y,new s(void 0,e[y]))):c(e[y],t[y],i,r,m,y,p);for(;y<t.length;)i(new n(m,y,new a(void 0,t[y++])))}else{var x=Object.keys(e),S=Object.keys(t);x.forEach((function(o,a){var s=S.indexOf(o);s>=0?(c(e[o],t[o],i,r,m,o,p),S=l(S,s)):c(e[o],void 0,i,r,m,o,p)})),S.forEach((function(e){c(void 0,t[e],i,r,m,e,p)}))}p.length=p.length-1}else e!==t&&("number"===v&&isNaN(e)&&isNaN(t)||i(new o(m,e,t)))}function h(e,t,i,r){return r=r||[],c(e,t,(function(e){e&&r.push(e)}),i),r.length?r:void 0}function u(e,t,i){if(e&&t&&i&&i.kind){for(var r=e,o=-1,a=i.path?i.path.length-1:0;++o<a;)void 0===r[i.path[o]]&&(r[i.path[o]]="number"==typeof i.path[o]?[]:{}),r=r[i.path[o]];switch(i.kind){case"A":!function e(t,i,r){if(r.path&&r.path.length){var o,a=t[i],s=r.path.length-1;for(o=0;o<s;o++)a=a[r.path[o]];switch(r.kind){case"A":e(a[r.path[o]],r.index,r.item);break;case"D":delete a[r.path[o]];break;case"E":case"N":a[r.path[o]]=r.rhs}}else switch(r.kind){case"A":e(t[i],r.index,r.item);break;case"D":t=l(t,i);break;case"E":case"N":t[i]=r.rhs}return t}(i.path?r[i.path[o]]:r,i.index,i.item);break;case"D":delete r[i.path[o]];break;case"E":case"N":r[i.path[o]]=i.rhs}}}function p(e){return"color: "+C[e].color+"; font-weight: bold"}function m(e,t,i,r){var o=h(e,t);try{r?i.groupCollapsed("diff"):i.group("diff")}catch(e){i.log("diff")}o?o.forEach((function(e){var t=e.kind,r=function(e){var t=e.kind,i=e.path,r=e.lhs,o=e.rhs,a=e.index,s=e.item;switch(t){case"E":return[i.join("."),r,"→",o];case"N":return[i.join("."),o];case"D":return[i.join(".")];case"A":return[i.join(".")+"["+a+"]",s];default:return[]}}(e);i.log.apply(i,["%c "+C[t].text,p(t)].concat(k(r)))})):i.log("—— no diff ——");try{i.groupEnd()}catch(e){i.log("—— diff end —— ")}}function g(e,t,i,r){switch(void 0===e?"undefined":z(e)){case"object":return"function"==typeof e[r]?e[r].apply(e,k(i)):e[r];case"function":return e(t);default:return e}}function v(e,t){var i=t.logger,r=t.actionTransformer,o=t.titleFormatter,a=void 0===o?function(e){var t=e.timestamp,i=e.duration;return function(e,r,o){var a=["action"];return a.push("%c"+String(e.type)),t&&a.push("%c@ "+r),i&&a.push("%c(in "+o.toFixed(2)+" ms)"),a.join(" ")}}(t):o,s=t.collapsed,n=t.colors,l=t.level,d=t.diff,c=void 0===t.titleFormatter;e.forEach((function(o,h){var u=o.started,p=o.startedTime,v=o.action,f=o.prevState,w=o.error,b=o.took,y=o.nextState,S=e[h+1];S&&(y=S.prevState,b=S.started-u);var z=r(v),k="function"==typeof s?s((function(){return y}),v,o):s,A=x(p),C=n.title?"color: "+n.title(z)+";":"",M=["color: gray; font-weight: lighter;"];M.push(C),t.timestamp&&M.push("color: gray; font-weight: lighter;"),t.duration&&M.push("color: gray; font-weight: lighter;");var T=a(z,A,b);try{k?n.title&&c?i.groupCollapsed.apply(i,["%c "+T].concat(M)):i.groupCollapsed(T):n.title&&c?i.group.apply(i,["%c "+T].concat(M)):i.group(T)}catch(e){i.log(T)}var j=g(l,z,[f],"prevState"),E=g(l,z,[z],"action"),P=g(l,z,[w,f],"error"),V=g(l,z,[y],"nextState");if(j)if(n.prevState){var N="color: "+n.prevState(f)+"; font-weight: bold";i[j]("%c prev state",N,f)}else i[j]("prev state",f);if(E)if(n.action){var O="color: "+n.action(z)+"; font-weight: bold";i[E]("%c action    ",O,z)}else i[E]("action    ",z);if(w&&P)if(n.error){var D="color: "+n.error(w,f)+"; font-weight: bold;";i[P]("%c error     ",D,w)}else i[P]("error     ",w);if(V)if(n.nextState){var B="color: "+n.nextState(y)+"; font-weight: bold";i[V]("%c next state",B,y)}else i[V]("next state",y);d&&m(f,y,i,k);try{i.groupEnd()}catch(e){i.log("—— log end ——")}}))}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},M,e),i=t.logger,r=t.stateTransformer,o=t.errorTransformer,a=t.predicate,s=t.logErrors,n=t.diffPredicate;if(void 0===i)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var l=[];return function(e){var i=e.getState;return function(e){return function(d){if("function"==typeof a&&!a(i,d))return e(d);var c={};l.push(c),c.started=S.now(),c.startedTime=new Date,c.prevState=r(i()),c.action=d;var h=void 0;if(s)try{h=e(d)}catch(e){c.error=o(e)}else h=e(d);c.took=S.now()-c.started,c.nextState=r(i());var u=t.diff&&"function"==typeof n?n(i,d):t.diff;if(v(l,Object.assign({},t,{diff:u})),l.length=0,c.error)throw c.error;return h}}}}var w,b,y=function(e,t){return function(e,t){return new Array(t+1).join(e)}("0",t-e.toString().length)+e},x=function(e){return y(e.getHours(),2)+":"+y(e.getMinutes(),2)+":"+y(e.getSeconds(),2)+"."+y(e.getMilliseconds(),3)},S="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k=function(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)},A=[];w="object"===(void 0===e?"undefined":z(e))&&e?e:"undefined"!=typeof window?window:{},(b=w.DeepDiff)&&A.push((function(){void 0!==b&&w.DeepDiff===h&&(w.DeepDiff=b,b=void 0)})),i(o,r),i(a,r),i(s,r),i(n,r),Object.defineProperties(h,{diff:{value:h,enumerable:!0},observableDiff:{value:c,enumerable:!0},applyDiff:{value:function(e,t,i){e&&t&&c(e,t,(function(r){i&&!i(e,t,r)||u(e,t,r)}))},enumerable:!0},applyChange:{value:u,enumerable:!0},revertChange:{value:function(e,t,i){if(e&&t&&i&&i.kind){var r,o,a=e;for(o=i.path.length-1,r=0;r<o;r++)void 0===a[i.path[r]]&&(a[i.path[r]]={}),a=a[i.path[r]];switch(i.kind){case"A":!function e(t,i,r){if(r.path&&r.path.length){var o,a=t[i],s=r.path.length-1;for(o=0;o<s;o++)a=a[r.path[o]];switch(r.kind){case"A":e(a[r.path[o]],r.index,r.item);break;case"D":case"E":a[r.path[o]]=r.lhs;break;case"N":delete a[r.path[o]]}}else switch(r.kind){case"A":e(t[i],r.index,r.item);break;case"D":case"E":t[i]=r.lhs;break;case"N":t=l(t,i)}return t}(a[i.path[r]],i.index,i.item);break;case"D":case"E":a[i.path[r]]=i.lhs;break;case"N":delete a[i.path[r]]}}},enumerable:!0},isConflict:{value:function(){return void 0!==b},enumerable:!0},noConflict:{value:function(){return A&&(A.forEach((function(e){e()})),A=null),h},enumerable:!0}});var C={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},M={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,i=e.getState;return"function"==typeof t||"function"==typeof i?f()({dispatch:t,getState:i}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};t.defaults=M,t.createLogger=f,t.logger=T,t.default=T,Object.defineProperty(t,"__esModule",{value:!0})}(t)}).call(this,i(4))},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,i){"use strict";i.r(t);i(6),i(8),i(10),i(13),i(15),i(17),i(19);var r=i(2),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},a={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function s(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);return Object.getOwnPropertySymbols&&i.push.apply(i,Object.getOwnPropertySymbols(e)),t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i}function d(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(i,!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(i).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}i(23);const h=e=>({type:"[ui] seelct menu",option:e}),u=e=>({type:"[ui] set media",size:e}),p={loading:0,errorTimestamp:!1,errorMessages:null,opcionSeleccionada:{option:"",timeStamp:null},media:{size:"large",timeStamp:null},menuOpen:!0},m=(e=p,t)=>{const i={...e};switch(t.type){case"[ui] show spinner":i.loading+=1;break;case"[ui] hide spinner":i.loading-=1;break;case"[ui] show error":i.errorTimeStamp=(new Date).getTime(),i.errorMessages=t.message;break;case"[ui] hide error":i.errorTimeStamp=(new Date).getTime(),i.errorMessages=null;break;case"[ui] seelct menu":i.opcionSeleccionada.option=t.option,i.opcionSeleccionada.timeStamp=(new Date).getTime();break;case"[ui] set media":i.media.size=t.size,i.media.timeStamp=(new Date).getTime();break;case"[ui] toggle menu":i.menuOpen=!i.menuOpen}return i},g="[titular] get",v={timeStamp:null,entity:{}},f=(e=v,t)=>{const i={...e};switch(t.type){case g:i.loading+=1;break;case"[titular] update":i.timeStamp=(new Date).getDate(),i.entity={nombre:t.nombre,documento:t.documento}}return i},w="[mascotas] add",b=e=>({type:"[mascotas] new",item:{id:null,nombre:"",FN:(new Date).toJSON(),tipo:"F",imagen:null}}),y=e=>({type:"[mascotas] set current id",id:e}),x={entities:[],timeStamp:null,selectedItem:null,selectedTimeStamp:null,currentId:null,currentTimeStamp:null,currentTask:"ADD"},S=(e=x,t)=>{const i={...e};switch(t.type){case"[mascotas] get":break;case w:t.item.id=(new Date).getTime(),i.entities.push(t.item),i.timeStamp=(new Date).getTime();break;case"[mascotas] update":i.entities=i.entities.filter(e=>e.id!=i.selectedItem.id),t.item.id=i.selectedItem.id,i.entities.push(t.item),i.timeStamp=(new Date).getTime();break;case"[mascotas] remove":i.entities=i.entities.filter(e=>e.id!=t.id),i.timeStamp=(new Date).getTime();break;case"[mascotas] select":i.selectedItem=t.item,i.selectedTimeStamp=(new Date).getTime(),i.currentTask="UPDATE";break;case"[mascotas] new":i.selectedItem=t.item,i.selectedTimeStamp=(new Date).getTime(),i.currentTask="ADD";break;case"[mascotas] set current id":i.currentId=t.id,i.currentTimeStamp=(new Date).getTime()}return i},z=e=>({type:"[hc] new",item:{id:null,idMascota:0,descripcion:"",fecha:(new Date).toJSON(),realizado:"N"}}),k={entities:[],timeStamp:null,selectedItem:null,selectedTimeStamp:null,currentTask:"ADD"},A=(e=k,t)=>{const i={...e};switch(t.type){case"[hc] get":break;case"[hc] add":t.item.id=(new Date).getTime(),i.entities.push(t.item),i.timeStamp=(new Date).getTime();break;case"[hc] update":i.entities=i.entities.filter(e=>e.id!=i.selectedItem.id),t.item.id=i.selectedItem.id,i.entities.push(t.item),i.timeStamp=(new Date).getTime();break;case"[hc] remove":i.entities=i.entities.filter(e=>e.id!=t.id),i.timeStamp=(new Date).getTime();break;case"[hc] select":i.selectedItem=t.item,i.selectedTimeStamp=(new Date).getTime(),i.currentTask="UPDATE";break;case"[hc] new":i.selectedItem=t.item,i.selectedTimeStamp=(new Date).getTime(),i.currentTask="ADD"}return i},C=e=>({type:"[agenda] new",item:{id:null,idMascota:0,idVacuna:0,fecha:(new Date).toJSON(),realizado:"N"}}),M={entities:[],timeStamp:null,selectedItem:null,selectedTimeStamp:null,currentTask:"ADD"},T=(e=M,t)=>{const i={...e};switch(t.type){case"[agenda] get":break;case"[agenda] add":t.item.id=(new Date).getTime(),i.entities.push(t.item),i.timeStamp=(new Date).getTime();break;case"[agenda] update":i.entities=i.entities.filter(e=>e.id!=i.selectedItem.id),t.item.id=i.selectedItem.id,i.entities.push(t.item),i.timeStamp=(new Date).getTime();break;case"[agenda] remove":i.entities=i.entities.filter(e=>e.id!=t.id),i.timeStamp=(new Date).getTime();break;case"[agenda] select":i.selectedItem=t.item,i.selectedTimeStamp=(new Date).getTime(),i.currentTask="UPDATE";break;case"[agenda] new":i.selectedItem=t.item,i.selectedTimeStamp=(new Date).getTime(),i.currentTask="ADD"}return i},j=[({dispatch:e})=>t=>i=>{if(t(i),"[ui] capture media"==i.type){const t=window.matchMedia("(max-width: 600px)");t.addListener(t=>{t.matches&&e(u("small"))});const i=window.matchMedia("(max-width: 800px) and (min-width: 601px)");i.addListener(t=>{t.matches&&e(u("medium"))});const r=window.matchMedia("(min-width: 801px)");r.addListener(t=>{t.matches&&e(u("large"))}),t.matches&&e(u("small")),i.matches&&e(u("medium")),r.matches&&e(u("large"))}}],E=[({dispatch:e})=>t=>i=>{t(i),i.type!=w&&"[mascotas] update"!=i.type||e(b())}],P=[({dispatch:e})=>t=>i=>{t(i),"[hc] add"!=i.type&&"[hc] update"!=i.type||e(z())}],V=[({dispatch:e})=>t=>i=>{t(i),"[agenda] add"!=i.type&&"[agenda] update"!=i.type||e(C())}],N=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c;let O=[({dispatch:e})=>t=>i=>{if("[app] API Request"===i.type){const{ODataFetch:t,params:r,onSuccess:o,onError:a}=i.meta;t.get(r).then(t=>{e({type:o,payload:{send:r,receive:t}})}).catch(t=>{e({type:a,payload:t})})}if("[app] API Update"===i.type){const{ODataFetch:t,body:r,onSuccess:o,onError:a}=i.meta;t.patch(r).then(t=>{e({type:o,payload:{send:r,receive:t}})}).catch(t=>{e({type:a,payload:{send:r,receive:t}})})}if("[app] API Delete"===i.type){const{ODataFetch:t,body:r,onSuccess:o,onError:a}=i.meta;t.delete(r).then(t=>{e({type:o,payload:{send:r,receive:t}})}).catch(t=>{e({type:a,payload:{send:r,receive:t}})})}if("[app] API Add"===i.type){const{ODataFetch:t,body:r,onSuccess:o,onError:a}=i.meta;t.post(r).then(t=>{e({type:o,payload:{send:r,receive:t}})}).catch(t=>{e({type:a,payload:{send:r,receive:t}})})}if("[app] API Action"===i.type){const{ODataFetch:t,body:r,key:o,accion:a,onSuccess:s,onError:n}=i.meta;t.action(a,r,o).then(t=>{t.redirect&&(location.href=t.redirect),e({type:s,payload:{send:r,receive:t}})}).catch(t=>{e({type:n,payload:{send:r,receive:t}})})}if("[app] API Funct"===i.type){const{ODataFetch:t,funct:r,onSuccess:o,onError:a}=i.meta;t.execute(r).then(t=>{t.redirect&&(location.href=t.redirect),e({type:o,payload:{receive:t}})}).catch(t=>{e({type:a,payload:{send:body,receive:t}})})}return t(i)},...j,...E,...P,...V];const D=function e(t,i,o){var n;if("function"==typeof i&&"function"==typeof o||"function"==typeof o&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof i&&void 0===o&&(o=i,i=void 0),void 0!==o){if("function"!=typeof o)throw new Error("Expected the enhancer to be a function.");return o(e)(t,i)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var l=t,d=i,c=[],h=c,u=!1;function p(){h===c&&(h=c.slice())}function m(){if(u)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return d}function g(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(u)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var t=!0;return p(),h.push(e),function(){if(t){if(u)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");t=!1,p();var i=h.indexOf(e);h.splice(i,1),c=null}}}function v(e){if(!s(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(u)throw new Error("Reducers may not dispatch actions.");try{u=!0,d=l(d,e)}finally{u=!1}for(var t=c=h,i=0;i<t.length;i++){(0,t[i])()}return e}function f(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");l=e,v({type:a.REPLACE})}function w(){var e,t=g;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function i(){e.next&&e.next(m())}return i(),{unsubscribe:t(i)}}})[r.a]=function(){return this},e}return v({type:a.INIT}),(n={dispatch:v,subscribe:g,getState:m,replaceReducer:f})[r.a]=w,n}((e={},t)=>({ui:m(e.ui,t),titular:f(e.titular,t),mascotas:S(e.mascotas,t),hc:A(e.hc,t),agenda:T(e.agenda,t)}),(()=>{try{const e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(e){return}})(),N(function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(e){return function(){var i=e.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:i.getState,dispatch:function(){return r.apply(void 0,arguments)}},a=t.map((function(e){return e(o)}));return d({},i,{dispatch:r=c.apply(void 0,a)(i.dispatch)})}}}(...O)));D.subscribe((function(){(e=>{try{let t=JSON.stringify(e);localStorage.setItem("state",t)}catch(e){}})(D.getState())}));const B=new WeakMap,I=e=>"function"==typeof e&&B.has(e),R=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,L=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},H={},J={},F=`{{lit-${String(Math.random()).slice(2)}}}`,q=`\x3c!--${F}--\x3e`,U=new RegExp(`${F}|${q}`);class _{constructor(e,t){this.parts=[],this.element=t;const i=[],r=[],o=document.createTreeWalker(t.content,133,null,!1);let a=0,s=-1,n=0;const{strings:l,values:{length:d}}=e;for(;n<d;){const e=o.nextNode();if(null!==e){if(s++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let r=0;for(let e=0;e<i;e++)G(t[e].name,"$lit$")&&r++;for(;r-- >0;){const t=l[n],i=X.exec(t)[2],r=i.toLowerCase()+"$lit$",o=e.getAttribute(r);e.removeAttribute(r);const a=o.split(U);this.parts.push({type:"attribute",index:s,name:i,strings:a}),n+=a.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),o.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(F)>=0){const r=e.parentNode,o=t.split(U),a=o.length-1;for(let t=0;t<a;t++){let i,a=o[t];if(""===a)i=W();else{const e=X.exec(a);null!==e&&G(e[2],"$lit$")&&(a=a.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),i=document.createTextNode(a)}r.insertBefore(i,e),this.parts.push({type:"node",index:++s})}""===o[a]?(r.insertBefore(W(),e),i.push(e)):e.data=o[a],n+=a}}else if(8===e.nodeType)if(e.data===F){const t=e.parentNode;null!==e.previousSibling&&s!==a||(s++,t.insertBefore(W(),e)),a=s,this.parts.push({type:"node",index:s}),null===e.nextSibling?e.data="":(i.push(e),s--),n++}else{let t=-1;for(;-1!==(t=e.data.indexOf(F,t+1));)this.parts.push({type:"node",index:-1}),n++}}else o.currentNode=r.pop()}for(const e of i)e.parentNode.removeChild(e)}}const G=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},Y=e=>-1!==e.index,W=()=>document.createComment(""),X=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class Z{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=R?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let o,a=0,s=0,n=r.nextNode();for(;a<i.length;)if(o=i[a],Y(o)){for(;s<o.index;)s++,"TEMPLATE"===n.nodeName&&(t.push(n),r.currentNode=n.content),null===(n=r.nextNode())&&(r.currentNode=t.pop(),n=r.nextNode());if("node"===o.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(n.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(n,o.name,o.strings,this.options));a++}else this.__parts.push(void 0),a++;return R&&(document.adoptNode(e),customElements.upgrade(e)),e}}const K=` ${F} `;class Q{constructor(e,t,i,r){this.strings=e,this.values=t,this.type=i,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let r=0;r<e;r++){const e=this.strings[r],o=e.lastIndexOf("\x3c!--");i=(o>-1||i)&&-1===e.indexOf("--\x3e",o+1);const a=X.exec(e);t+=null===a?e+(i?K:q):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+F}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class $ extends Q{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,i=t.firstChild;return t.removeChild(i),((e,t,i=null,r=null)=>{for(;t!==i;){const i=t.nextSibling;e.insertBefore(t,r),t=i}})(t,i.firstChild),e}}const ee=e=>null===e||!("object"==typeof e||"function"==typeof e),te=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class ie{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new re(this)}_getValue(){const e=this.strings,t=e.length-1;let i="";for(let r=0;r<t;r++){i+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(ee(e)||!te(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class re{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===H||ee(e)&&e===this.value||(this.value=e,I(e)||(this.committer.dirty=!0))}commit(){for(;I(this.value);){const e=this.value;this.value=H,e(this)}this.value!==H&&this.committer.commit()}}class oe{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(W()),this.endNode=e.appendChild(W())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=W()),e.__insert(this.endNode=W())}insertAfterPart(e){e.__insert(this.startNode=W()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;I(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=H,e(this)}const e=this.__pendingValue;e!==H&&(ee(e)?e!==this.value&&this.__commitText(e):e instanceof Q?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):te(e)?this.__commitIterable(e):e===J?(this.value=J,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof Z&&this.value.template===t)this.value.update(e.values);else{const i=new Z(t,e.processor,this.options),r=i._clone();i.update(e.values),this.__commitNode(r),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,r=0;for(const o of e)i=t[r],void 0===i&&(i=new oe(this.options),t.push(i),0===r?i.appendIntoPart(this):i.insertAfterPart(t[r-1])),i.setValue(o),i.commit(),r++;r<t.length&&(t.length=r,this.clear(i&&i.endNode))}clear(e=this.startNode){L(this.startNode.parentNode,e.nextSibling,this.endNode)}}class ae{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;I(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=H,e(this)}if(this.__pendingValue===H)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=H}}class se extends ie{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new ne(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class ne extends re{}let le=!1;try{const e={get capture(){return le=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class de{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;I(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=H,e(this)}if(this.__pendingValue===H)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=ce(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=H}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const ce=e=>e&&(le?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);const he=new class{handleAttributeExpressions(e,t,i,r){const o=t[0];if("."===o){return new se(e,t.slice(1),i).parts}return"@"===o?[new de(e,t.slice(1),r.eventContext)]:"?"===o?[new ae(e,t.slice(1),i)]:new ie(e,t,i).parts}handleTextExpression(e){return new oe(e)}};function ue(e){let t=pe.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},pe.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const r=e.strings.join(F);return i=t.keyString.get(r),void 0===i&&(i=new _(e,e.getTemplateElement()),t.keyString.set(r,i)),t.stringsArray.set(e.strings,i),i}const pe=new Map,me=new WeakMap;(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const ge=(e,...t)=>new Q(e,t,"html",he),ve=(e,...t)=>new $(e,t,"svg",he);function fe(e,t){const{element:{content:i},parts:r}=e,o=document.createTreeWalker(i,133,null,!1);let a=be(r),s=r[a],n=-1,l=0;const d=[];let c=null;for(;o.nextNode();){n++;const e=o.currentNode;for(e.previousSibling===c&&(c=null),t.has(e)&&(d.push(e),null===c&&(c=e)),null!==c&&l++;void 0!==s&&s.index===n;)s.index=null!==c?-1:s.index-l,a=be(r,a),s=r[a]}d.forEach(e=>e.parentNode.removeChild(e))}const we=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},be=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(Y(t))return i}return-1};const ye=(e,t)=>`${e}--${t}`;let xe=!0;void 0===window.ShadyCSS?xe=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),xe=!1);const Se=e=>t=>{const i=ye(t.type,e);let r=pe.get(i);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},pe.set(i,r));let o=r.stringsArray.get(t.strings);if(void 0!==o)return o;const a=t.strings.join(F);if(o=r.keyString.get(a),void 0===o){const i=t.getTemplateElement();xe&&window.ShadyCSS.prepareTemplateDom(i,e),o=new _(t,i),r.keyString.set(a,o)}return r.stringsArray.set(t.strings,o),o},ze=["html","svg"],ke=new Set,Ae=(e,t,i)=>{ke.add(e);const r=i?i.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:a}=o;if(0===a)return void window.ShadyCSS.prepareTemplateStyles(r,e);const s=document.createElement("style");for(let e=0;e<a;e++){const t=o[e];t.parentNode.removeChild(t),s.textContent+=t.textContent}(e=>{ze.forEach(t=>{const i=pe.get(ye(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),fe(e,i)})})})(e);const n=r.content;i?function(e,t,i=null){const{element:{content:r},parts:o}=e;if(null==i)return void r.appendChild(t);const a=document.createTreeWalker(r,133,null,!1);let s=be(o),n=0,l=-1;for(;a.nextNode();){for(l++,a.currentNode===i&&(n=we(t),i.parentNode.insertBefore(t,i));-1!==s&&o[s].index===l;){if(n>0){for(;-1!==s;)o[s].index+=n,s=be(o,s);return}s=be(o,s)}}}(i,s,n.firstChild):n.insertBefore(s,n.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const l=n.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(i){n.insertBefore(s,n.firstChild);const e=new Set;e.add(s),fe(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const Ce={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},Me=(e,t)=>t!==e&&(t==t||e==e),Te={attribute:!0,type:String,converter:Ce,reflect:!1,hasChanged:Me},je=Promise.resolve(!0);class Ee extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=je,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const r=this._attributeNameForProperty(i,t);void 0!==r&&(this._attributeToPropertyMap.set(r,i),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=Te){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[i]},set(t){const r=this[e];this[i]=t,this._requestUpdate(e,r)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=Me){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,r=t.converter||Ce,o="function"==typeof r?r:r.fromAttribute;return o?o(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,r=t.converter;return(r&&r.toAttribute||Ce.toAttribute)(e,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=Te){const r=this.constructor,o=r._attributeNameForProperty(e,i);if(void 0!==o){const e=r._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(o):this.setAttribute(o,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,r=i._attributeToPropertyMap.get(e);if(void 0!==r){const e=i._classProperties.get(r)||Te;this._updateState=16|this._updateState,this[r]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let i=!0;if(void 0!==e){const r=this.constructor,o=r._classProperties.get(e)||Te;r._valueHasChanged(this[e],t,o.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==o.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,o))):i=!1}!this._hasRequestedUpdate&&i&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=4|this._updateState;const i=this._updatePromise;this._updatePromise=new Promise((i,r)=>{e=i,t=r});try{await i}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return 32&this._updateState}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}Ee.finalized=!0;const Pe="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ve=Symbol();class Ne{constructor(e,t){if(t!==Ve)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Pe?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Oe=(e,...t)=>{const i=t.reduce((t,i,r)=>t+(e=>{if(e instanceof Ne)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[r+1],e[0]);return new Ne(i,Ve)};(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const De=e=>e.flat?e.flat(1/0):function e(t,i=[]){for(let r=0,o=t.length;r<o;r++){const o=t[r];Array.isArray(o)?e(o,i):i.push(o)}return i}(e);class Be extends Ee{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){De(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Pe?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof Q&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}Be.finalized=!0,Be.render=(e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const r=i.scopeName,o=me.has(t),a=xe&&11===t.nodeType&&!!t.host,s=a&&!ke.has(r),n=s?document.createDocumentFragment():t;if(((e,t,i)=>{let r=me.get(t);void 0===r&&(L(t,t.firstChild),me.set(t,r=new oe(Object.assign({templateFactory:ue},i))),r.appendInto(t)),r.setValue(e),r.commit()})(e,n,Object.assign({templateFactory:Se(r)},i)),s){const e=me.get(n);me.delete(n);const i=e.value instanceof Z?e.value.template:void 0;Ae(r,n,i),L(t,t.firstChild),t.appendChild(n),me.set(t,e)}!o&&a&&window.ShadyCSS.styleElement(t.host)};const Ie=(...e)=>t=>e.reduce((e,t)=>null!=e&&null!=e[t]?e[t]:null,t),Re=(e,...t)=>i=>class extends i{constructor(){super(),this.__currentStates=[],this.__deepValues=[]}connectedCallback(){for(let i=0;i<t.length;i++){const r=t[i].split(".");this.__currentStates.push(null);let o=r.length>0?Ie(...r):null;this.__deepValues.push(o),this.__storeUnsubscribe=e.subscribe(()=>this.__stateChanged(i,e.getState())),this.__stateChanged(i,e.getState())}super.connectedCallback&&super.connectedCallback()}getCurrent(){return[...this.__currentStates]}disconnectedCallback(){this.__storeUnsubscribe(),super.disconnectedCallback&&super.disconnectedCallback()}__stateChanged(e,i){if(this.stateChanged){let r=!0;if(this.__deepValues[e]){let t=this.__currentStates[e];this.__currentStates[e]=this.__deepValues[e](i),r=t!=this.__currentStates[e]}r&&this.stateChanged(i,t[e])}}},Le=Oe`
         
        .boton:hover {
     
           fill:var(--color-destacado);
           stroke:var(--color-destacado);
           
        }
        .boton {
           display:grid;
           grid-auto-flow:column;
           align-items:center;
           grid-gap:.3rem;
           cursor:pointer;
           color:white;
           fill:white;
           stroke:white;
           background-color:var(--orange);
           border-radius:2rem;
           padding:.5rem;
           box-shadow: 0 3px 6px 0 var(--orange-5);

        }
`,He=Oe`
:host{
    box-shadow: var(--shadow-elevation-4-box);
    border: 0;
    border-radius: 6px;
    background-color:rgb(0,0,0,.7);
    scrollbar-width: thin;
    scrollbar-color: #999 transparent;
    box-sizing: border-box;
}

:host::-webkit-scrollbar-track
{
    border-radius: .3rem;
    background-color: transparent;
}
:host::-webkit-scrollbar
{
    width:.4rem;
}
:host::-webkit-scrollbar-thumb
{
    border-radius: .3rem;
    background-color: #999
}

`,Je=(ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path class="style-scope nano-icon" d="M414 235c1 6 1 14 1 21 0 7-1 14-1 21l45 34c4 3 5 8 2 14l-43 71c-2 5-8 7-13 5l-53-21c-10 8-23 15-36 21l-7 55c-1 4-6 8-11 8l-85 0c-5 0-10-4-11-8l-8-55c-13-6-25-13-36-21l-54 21c-5 2-10 0-12-5l-43-71c-2-5-1-11 2-14l46-34c0-7-1-14-1-21 0-7 1-14 1-21l-45-34c-4-3-5-8-2-14l43-71c2-5 8-7 12-5l54 21c10-8 23-15 36-21l8-55c1-5 6-8 11-8l85 0c5 0 10 4 11 8l8 55c13 6 25 13 36 21l54-21c5-2 10 0 12 5l43 71c2 5 1 11-2 14z m-159-52c-41 0-74 32-74 73 0 41 33 73 74 73 42 0 75-32 75-73 0-41-33-73-75-73z"></path></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z"/></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z"/></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"/></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M 9 16.17 L 4.83 12 l -1.42 1.41 L 9 19 L 21 7 l -1.41 -1.41 Z"/></svg>`),Fe=(ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"/></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M3 4V1h2v3h3v2H5v3H3V6H0V4h3zm3 6V7h3V4h7l1.83 2H23v16H3V10h3zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-3-5c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"/></svg>`),qe=(ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M12 2c-4.97 0-9 4.03-9 9 0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11c0-4.97-4.03-9-9-9zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.3c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>`),Ue=(ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M24 14V6H4v36h40V14H24zM12 38H8v-4h4v4zm0-8H8v-4h4v4zm0-8H8v-4h4v4zm0-8H8v-4h4v4zm8 24h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm20 24H24v-4h4v-4h-4v-4h4v-4h-4v-4h16v20zm-4-16h-4v4h4v-4zm0 8h-4v4h4v-4z"/></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M9 17l3-2.94c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9l-3-3zm2-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4"/><path d="M15.47 20.5L12 17l1.4-1.41 2.07 2.08 5.13-5.17 1.4 1.41z"/></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M8 5h2v2h-.9L12 9.9V9h8v8.9l2 2V7H12V3H5.1L8 5.9zm8 6h2v2h-2zM1.3 1.8L.1 3.1 2 5v16h16l3 3 1.3-1.3-21-20.9zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm4 8H8v-2h2v2zm0-4H8v-2h2v2zm2 4v-2h2l2 2h-4z"/></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><circle cx="15" cy="8" r="4"/><path d="M23 20v-2c0-2.3-4.1-3.7-6.9-3.9l6 5.9h.9zm-11.6-5.5C9.2 15.1 7 16.3 7 18v2h9.9l4 4 1.3-1.3-21-20.9L0 3.1l4 4V10H1v2h3v3h2v-3h2.9l2.5 2.5zM6 10v-.9l.9.9H6z"/></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"/></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H15V3H9v2H6.5c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M17 5H3c-1.1 0-2 .89-2 2v9h2c0 1.65 1.34 3 3 3s3-1.35 3-3h5.5c0 1.65 1.34 3 3 3s3-1.35 3-3H23v-5l-6-6zM3 11V7h4v4H3zm3 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7-6.5H9V7h4v4zm4.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM15 11V7h1l4 4h-5z"/></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg"  width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M17,11V3H7v4H3v14h8v-4h2v4h8V11H17z M7,19H5v-2h2V19z M7,15H5v-2h2V15z M7,11H5V9h2V11z M11,15H9v-2h2V15z M11,11H9V9h2   V11z M11,7H9V5h2V7z M15,15h-2v-2h2V15z M15,11h-2V9h2V11z M15,7h-2V5h2V7z M19,19h-2v-2h2V19z M19,15h-2v-2h2V15z"/></svg>`),_e=(ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M14 7l-5 5 5 5V7z"/></svg>`),Ge=(ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M10 17l5-5-5-5v10z"/></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><circle cx="12" cy="19" r="2"/><path d="M10 3h4v12h-4z"/></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg"  width="2rem" height="2rem" viewBox="0 0 24 24"><g><path d="M24.25,15.368c0.087-0.143,0.151-0.301,0.151-0.481c0-0.272-0.115-0.518-0.3-0.69l-7.64-10.2   c-0.109-0.144-0.257-0.255-0.426-0.318L7.934,0.662C7.527,0.511,7.071,0.657,6.827,1.015C6.582,1.373,6.614,1.851,6.904,2.174   l6.378,7.117c-0.015,0.004-0.031,0.004-0.047,0.009L1.342,12.881C0.545,13.121,0,13.854,0,14.686v0.556   c0,0.569,0.256,1.108,0.699,1.465l8.371,6.77c0.341,0.276,0.761,0.419,1.185,0.419c0.247,0,0.495-0.048,0.729-0.147l12.36-5.194   c0.701-0.295,1.155-0.979,1.155-1.738v-0.513C24.5,15.971,24.411,15.649,24.25,15.368z M8.089,21.583   c-0.315,0-0.569-0.413-0.569-0.921s0.255-0.92,0.569-0.92s0.569,0.412,0.569,0.92S8.404,21.583,8.089,21.583z M10.508,19.44   l-7.519-5.484l4.858-1.518l7.791,5.066L10.508,19.44z M16.695,17.104c-0.032-0.041-0.067-0.081-0.113-0.111l-7.567-4.92l4.59-1.434   l7.916,4.644L16.695,17.104z"/></g></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M8.17 5.7L1 10.48V21h5v-8h4v8h5V10.25z"/><path d="M10 3v1.51l2 1.33L13.73 7H15v.85l2 1.34V11h2v2h-2v2h2v2h-2v4h6V3H10zm9 6h-2V7h2v2z"/></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M17.73 12.02l3.98-3.98c.39-.39.39-1.02 0-1.41l-4.34-4.34c-.39-.39-1.02-.39-1.41 0l-3.98 3.98L8 2.29C7.8 2.1 7.55 2 7.29 2c-.25 0-.51.1-.7.29L2.25 6.63c-.39.39-.39 1.02 0 1.41l3.98 3.98L2.25 16c-.39.39-.39 1.02 0 1.41l4.34 4.34c.39.39 1.02.39 1.41 0l3.98-3.98 3.98 3.98c.2.2.45.29.71.29.26 0 .51-.1.71-.29l4.34-4.34c.39-.39.39-1.02 0-1.41l-3.99-3.98zM12 9c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-4.71 1.96L3.66 7.34l3.63-3.63 3.62 3.62-3.62 3.63zM10 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2.66 9.34l-3.63-3.62 3.63-3.63 3.62 3.62-3.62 3.63z"/></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"/></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"/></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"/></svg>`),Ye=(ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></svg>`),We=(ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"/></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2rem" height="2rem" viewBox="0 0 24 24"><defs><path id="a" d="M24 24H0V0h24v24z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" d="M3 8.41l9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41z"/></svg>`,ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><circle cx="4.5" cy="9.5" r="2.5"/><circle cx="9" cy="5.5" r="2.5"/><circle cx="15" cy="5.5" r="2.5"/><circle cx="19.5" cy="9.5" r="2.5"/><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"/></svg>`),Xe=ve`<svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 0 24 24" width="2rem"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"/></svg>`,Ze=ve`<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 48 48">
<defs>
  <linearGradient id="a" x1="12.811%" x2="94.4%" y1="43.597%" y2="57.648%">
    <stop offset="0%" stop-color="#FF9E16" stop-opacity="0"/>
    <stop offset="4%" stop-color="#FD9516" stop-opacity=".07"/>
    <stop offset="17%" stop-color="#F67717" stop-opacity=".31"/>
    <stop offset="30%" stop-color="#F05E18" stop-opacity=".52"/>
    <stop offset="43%" stop-color="#EB4819" stop-opacity=".7"/>
    <stop offset="57%" stop-color="#E73819" stop-opacity=".83"/>
    <stop offset="69%" stop-color="#E42C1A" stop-opacity=".92"/>
    <stop offset="82%" stop-color="#E3251A" stop-opacity=".98"/>
    <stop offset="93%" stop-color="#E2231A"/>
  </linearGradient>
</defs>
<g fill="none">
  <path fill="#FF9E16" d="M0 39.333v-8.9c7.516-.009 13.606-5.996 13.614-13.384V4.667h9.053v12.382c0 12.286-10.168 22.284-22.667 22.284z"/>
  <path fill="url(#a)" d="M0 39.333v-8.9c7.516-.009 13.606-5.996 13.614-13.384V4.667h9.053v12.382c0 12.286-10.168 22.284-22.667 22.284z"/>
  <path fill="#FF5000" d="M47.657 1.78c.225.24.348.558.343.888A1.328 1.328 0 0 1 46.667 4a1.277 1.277 0 0 1-.942-.391 1.309 1.309 0 0 1-.391-.965c0-.372.162-.726.444-.97.24-.225.56-.347.889-.34.38-.006.742.158.99.445zm-1.763.191a1.044 1.044 0 0 0-.272.71c.008.292.133.568.348.765a1.046 1.046 0 0 0 1.742-.778 1.014 1.014 0 0 0-.356-.775 1.001 1.001 0 0 0-.71-.268.973.973 0 0 0-.75.346h-.002zm1.198.432c-.162-.178-.24-.217-.391-.217a.44.44 0 0 0-.331.139.469.469 0 0 0-.132.339.46.46 0 0 0 .136.341.44.44 0 0 0 .327.139.388.388 0 0 0 .177-.038c.078-.05.15-.11.214-.177l.245.218a1.493 1.493 0 0 1-.05.048.797.797 0 0 1-.583.25.761.761 0 0 1-.592-.26.753.753 0 0 1-.202-.533.788.788 0 0 1 .794-.79c.24.01.463.122.615.306l-.227.235z"/>
  <path fill="#98252B" d="M39.479 47.993a4.518 4.518 0 0 1-3.977-2.36L13.88 6.653A4.494 4.494 0 0 1 14 2.15 4.525 4.525 0 0 1 17.977.002a4.523 4.523 0 0 1 3.853 2.357l21.622 38.987a4.492 4.492 0 0 1-.086 4.45A4.523 4.523 0 0 1 39.484 48l-.005-.007z"/>
  <path fill="#FF5000" d="M39.667 48c-2.394 0-4.334-2.016-4.334-4.503V4.503c0-2.487 1.94-4.503 4.334-4.503C42.06 0 44 2.016 44 4.503v38.994C44 45.984 42.06 48 39.667 48z"/>
</g>
</svg>`,Ke=ve`<svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 0 24 24" width="2rem"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>`;class Qe extends(Re(D)(Be)){constructor(){super(),this.open}static get styles(){return Oe`
        ${Le}
        :host{
            display:grid;
            grid-auto-flow:column;
            grid-gap:1rem;
            align-items:center;
            justify-items:center;
            transition: all .5s;
            overflow-x:hidden;
            font-size:1.2rem;
            font-weight:bold;
         
        }
        :host([media-size="medium"]) .open,:host([media-size="large"]) .open{
            display:none

        }
        :host([media-size="medium"]) .boton{
            grid-auto-flow:row;
            justify-items:center

        }
        
        :host([media-size="small"]) {
            position:absolute;
            grid-gap:2rem;
            left:100vw;
            grid-auto-flow:row;
            justify-items: start;
            align-items:start;
            align-content:start;
            height: 100vh;
            width:75vw;
            font-size:.85rem;
            font-weight:bold;
            background-color:white;
            
        }
       /*  :host([media-size="small"]:not([open])) .label{
            display:none
        } */
        :host([media-size="small"][open]) {         
            left:25vw;
        }

        :host(:not([media-size="small"])) .botonMenu{
            display:none
        }

        .label{
            color:#333333;
            cursor:pointer
        }
        :host([media-size="small"]) .label{
            margin-left:1rem
        }
      
        .menuItem:hover .label{
            color:var(--orange);
            
        }
        .botonMenu{
            stroke:var(--orange);
            fill:var(--orange);
            color:var(--orange);
            display:grid;
            grid-auto-flow:column;
            align-items:center;
            font-size:1.5rem;
            background-color:#f4f3f1;
            justify-self:stretch;
            align-self:stretch;
            padding:1rem

        }
        .separador{
            
            border-bottom:1px solid #e3e3e3;
        }
        
        `}render(){return ge`

            <div class="botonMenu separador" @click="${this.toggle}">
                <div>Naranja</div>
            </div>
            
            <div class="menuItem" @click="${this.selectMenu}" .value="${"TITULAR"}">
                <!-- <div>${qe}</div> -->
                <div class="label">Titular</div>
            </div>
            <div class="menuItem" @click="${this.selectMenu}" .value="${"MASCOTAS"}">
                <!-- <div>${We}</div> -->
                <div class="label">Mascotas</div>
            </div>
            <div class="menuItem" @click="${this.selectMenu}" .value="${"CALENDARIO VACUNACION"}">
                <!-- <div>${Ge}</div> -->
                <div class="label">Calendario Vacunación</div>
            </div>
            <div class="menuItem" @click="${this.selectMenu}" .value="${"HISTORIA CLINICA"}">
                <!-- <div>${Ue}</div> -->
                <div class="label">Historia Clínica</div>
            </div>
            <div class="menuItem" @click="${this.selectMenu}" .value="${"AGENDA VACUNACION"}">
                <!-- <div>${Ye}</div> -->
                <div class="label">Agenda Vacunacion</div>
            </div>
           
        `}selectMenu(e){D.dispatch({type:"[ui] toggle menu"}),D.dispatch(h(e.currentTarget.value))}toggle(e){D.dispatch({type:"[ui] toggle menu"})}stateChanged(e,t){}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},open:{type:Boolean,reflect:!0}}}}window.customElements.define("app-menu",Qe);const $e=Oe`
input{
            color:white;
            border:none;
            background-color:rgb(0,0,0,5);
            outline:none;
            padding:.5rem;
            border-radius:2px;
            
        }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        /* Firefox */
        input[type=number] {
            -moz-appearance:textfield;
        }

        ::-webkit-input-placeholder { /* Edge */
            color: rgba(255,255,255,.6)
        }

        :-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: rgba(255,255,255,.6);
        }

        ::placeholder {
            color: rgba(255,255,255,.6);
        }`;window.customElements.define("nano-input",class extends Be{constructor(){super(),this.type="text",this.readonly=!1,this.disabled=!1,this.label="",this._value="",this.empty=!0,this.errorText="",this.isValid=!0,this.leadingIcon=null,this.noSpinner=!1,this.addEventListener("click",e=>{this.focus()}),this.addEventListener("touch",e=>{this.focus()})}focus(e){this.readonly||this.shadowRoot.querySelector("#input").focus()}static get styles(){return Oe`
        :host
        {
            position:relative;
            display:grid;
            grid-template-columns:auto 1fr;
            border-bottom:1px solid var(--onsurface-color-helper);
            overflow-y:visible;
            min-height:3rem;
           
        }
        :host([type="button"]){
            border-bottom:none;
        }
        svg{
            align-self:center;
            justify-self:center;
            padding:.5rem;
            fill:var(--onsurface-color-helper);
            stroke:var(--onsurface-color-helper)
        }
        #lead{
            display:grid
        }
      
        #container{
            position:relative;
            display:grid
        }
        :host([disabled]) #input,
        :host([disabled]) svg,
        :host([disabled]) #helper,
        :host([disabled]) #label{
            color:var( --onsurface-color-disable);
            fill:var(--onsurface-color-disable);
            stroke:var(--onsurface-color-disable)
        }
        #input{
            position:absolute;
            color:inherit;
            bottom:0;
            border:none;
            width:95%;
            height:2rem;
            outline:none;
            background-color:transparent;
            font-family:inherit;
            font-size:inherit;
            left:.5rem;

        }
        label #label {
            pointer-events:none;
            position:absolute;
            display:grid;
            left:.5rem;
            margin:0;
            width:100%;
            height:100%;
            z-index:1;
            top:calc(100% - 2rem);
            transition:all .3s ease;
            color:var(--primary-color);
        }
        :host([type="button"]) label #label{
            transition:none;
            width:auto;
        }
        :host([type="button"])  #input{
            color:var(--onsurface-color-helper);
            font-size:.8rem;
        }

        :host(:not([type="checkbox"]):not([type="button"])) #input:focus + label #label, 
        :host(:not([empty])) #input + label #label,
        #input[type="date"] + label #label,
        #input[type="datetime-local"] + label #label{
            top:.4rem;
            font-size:.8rem
        }
        
        #input:focus + label #border{
            width:100%
        }
        :host([haveleading]) #input:focus + label #border{
            width:calc(100% + 2.5rem);
        }
        :host([haveleading]) #border{
            left:-2.5rem;
        }
        #border{
            
            pointer-events:none;
            position:absolute;
            left:0;
            margin:0;
            width:0;
            height:auto;
            z-index:2;
            top:100%;
            transition:all .3s ease;
            border-bottom:2px solid var(--primary-color);
        }
        :host([type="button"]) #border{
            height:100%;
            background: linear-gradient(30deg,  transparent 0%, var(--primary-color) 200%);
            border-bottom:none;

        }
        #helper,#error{
            position:absolute;
            font-size:.7rem;
            top:100%;
            padding:.3rem
        }
        #helper{
            color:var(--onsurface-color-variant)
        }
        #error,:host(:not([is-valid])) #label{
            color:var(--error-color)
        }
        :host(:not([is-valid])) #helper{
            display:none
        }
        
        :host([is-valid]) #error{
            display:none
        }
        :host([no-spinner]) input::-webkit-outer-spin-button,
        :host([no-spinner]) input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

      
        :host([no-spinner]) input[type=number] {
            -moz-appearance:textfield;
        }

        :host([type="checkbox"]) #input{
            opacity:0;
            width:1.5rem;
            height:1.5rem;
            justify-self:end
        }
        :host([type="checkbox"]) #input + label::after,:host([type="checkbox"]) #input + label::before{
            position:absolute;
            right:.5rem;
            top:50%;
            transform:translateY(-50%);
            content:"";
            width:1rem;
            height:1rem;
            border:2px solid;
            border-radius:.2rem;
            color:inherit;
            text-align:center;
            line-height: 1rem;
        }
        :host([type="checkbox"]) #input:checked + label::before{
            content:"✔";
            color:var(--primary-color)
        }
        
        `}render(){return ge`
            <div id="lead">
                ${this.leadingIcon}
            </div>
            <div id="container">
                <input id="input" .value="${this.value}" spellcheck="false" autocomplete="off" type="${this.type}" ?readonly=${this.readonly} ?disabled=${this.disabled} @change="${e=>this.value=e.currentTarget.value}" @blur="${this.blur}">
                <label for="input">
                    <div id="label">${this.label}</div>
                    <div id="border"></div>
                </label>
                <div id="helper">${this.helper}</div>
                <div id="error">${this.errorText}</div>
            </div>
           
            `}static get properties(){return{label:{type:String,reflect:!0},type:{type:String,reflect:!0},readonly:{type:Boolean,reflect:!0},helper:{type:String,reflect:!0},isValid:{type:Boolean,attribute:"is-valid",reflect:!0},empty:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},value:{type:String,reflect:!0},errorText:{type:String,reflect:!0},leadingIcon:{type:Object},haveLeading:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},noSpinner:{type:Boolean,reflect:!0,attribute:"no-spinner"}}}set leadingIcon(e){const t=this._leadingIcon;this._leadingIcon=e,this.haveLeading=null!=this._leadingIcon,this.requestUpdate("leadingIcon",t)}get leadingIcon(){return this._leadingIcon}set errorText(e){const t=this._errorText;this._errorText=e,this.isValid=""==this._errorText,this.requestUpdate("errorText",t)}get errorText(){return this._errorText}set value(e){const t=this._value;this._value=e,this.empty=""==this._value,this.requestUpdate("value",t);const i=new Event("validating");this.dispatchEvent(i)}get value(){return this._value}blur(e){const t=new Event("validating");this.dispatchEvent(t)}validate(){const e=new Event("validating");this.dispatchEvent(e)}});class et extends(Re(D,"ui.opcionSeleccionada.timeStamp","titular.timeStamp")(Be)){constructor(){super(),this.oculto=!0,this.item={nombre:"",documento:null}}static get styles(){return Oe`
        ${He}
        ${Le}
             
        :host{
            position:absolute;
            display:grid;
            grid-template-rows:auto auto 5fr 1fr 2fr auto;          
            align-items:center;
            justify-items:center;
            transition: all .5s ease-in-out;
            padding-bottom:1rem;
            background-color:white;
            color:black;
        }
        #status{
            display:grid;
            grid-auto-flow:column;
            align-items:center;
            background-color: white;
            color:var(--primary-color);
            fill:var(--primary-color);
            stroke:var(--primary-color);
            justify-self: stretch;
            padding: .5rem;
            border-bottom:1px solid #e3e3e3;
            background-color:#f4f3f1
        }
        :host(:not([media-size="small"])){
            width:30%;
            left:50%;
            top:50%;
            transform:translate(-50%,-50%);
        }
       
        :host([media-size="small"]){
            top:0;
            left:0;
            width:100%;
            height:100%;         
        }

        :host([oculto]){
            left:-50rem
        }
        #titulo{
            display:grid;
            justify-self:stretch;
            grid-template-columns: auto 1fr;
            align-items:center;
            justify-items:start;
            grid-gap:.5rem;
            font-size:1.5rem;
            margin:1rem;
            background-color:white;
            color:Black;

        }
        #cuerpo{
            display:grid;
            grid-auto-flow:row;
            grid-gap:.5rem;
            background-color:#f4f3f1
        }
        #botonera{
            display:grid;
        }
        nano-input {
            color:black;
            background-color:white;
            border-radius:0;
        }        
        `}render(){return ge`
            <div id="status">
                <div>${Ze}</div>
                <div style="justify-self:end" @click="${this.cerrar}">${Ke}</div>
            </div>     
            <div id="titulo">
                <!-- <div class="boton botonBlanco" @click="${this.cerrar}">${_e}</div> -->
                <div>Mis Datos</div>
            </div>
            <div id ="cuerpo">
                <nano-input style="width:15rem" id="nombre" type="text" label="Apellido y Nombre" .value="${this.item.nombre}"></nano-input>
                <nano-input style="width:15rem" id="documento" type="number" label="Numero de Documento" no-spinner .value="${this.item.documento}"></nano-input>              
            </div>  
          <!--   <a href="#">Politica de Privacidad</a>
            <div id="cartel">
                Por favor comuniquese con Iké Asistencia para regularizar su situación
            
            </div> -->
            <div id="botonera" class="boton" @click="${this.salvar}">
                <!-- <div>${Je}</div> -->
                <div>Aceptar</div>
            </div>  
        `}stateChanged(e,t){"titular.timeStamp"==t&&(this.item=e.titular.entity),"ui.opcionSeleccionada.timeStamp"==t&&(this.oculto="TITULAR"!=e.ui.opcionSeleccionada.option),!this.oculto&&this.shadowRoot.querySelector("#nombre")&&this.shadowRoot.querySelector("#nombre").focus()}cerrar(){this.oculto=!0,D.dispatch({type:"[ui] toggle menu"})}salvar(){var e,t;D.dispatch((e=this.shadowRoot.querySelector("#nombre").value,t=this.shadowRoot.querySelector("#documento").value,{type:"[titular] update",nombre:e,documento:t})),this.oculto=!0}static get properties(){return{oculto:{type:Boolean,reflect:!0},mediaSize:{type:String,reflect:!0,attribute:"media-size"}}}}window.customElements.define("app-titular",et);const tt=Oe`
select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    box-shadow: none;
    border:none;
    border-bottom: 1px solid rgb(90, 88, 86);
    background-color:rgb(0,0,0,.3);
    background-image: none;
    font-size:1rem
  }
  
  select::-ms-expand {
    display: none;
  }
 
  .select {
    position: relative;
    display: flex;
    line-height: 3;
    overflow: hidden;
    border-radius: 4px;
  }
  select {
    padding-top:1rem;
    padding-left:.5rem;
    color: #fff;
    cursor: pointer;
  }
  option{
      color:gray;
      background-color:white;
      padding:.2rem
  }
  select:focus {
    border-bottom: 2px solid  var(--orange);
  }
  
  .select::after {
    content: "\\25BC";
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 1em;
    background: transparent;
    cursor: pointer;
    pointer-events: none;
    -webkit-transition: .25s all ease;
    -o-transition: .25s all ease;
    transition: .25s all ease;
    color:var(--orange)
  }
  
  .select:hover::after {
    color: var(--orange);
  }
  .select label{
      position:absolute;
      top:-.6rem;
      left:.4rem;
      color:var(--orange);
      font-size:.8rem

  }
  `;class it extends(Re(D,"mascotas.selectedTimeStamp","ui.opcionSeleccionada.timeStamp")(Be)){constructor(){super(),this.oculto=!0,this.item={},this.editando=!1}static get styles(){return Oe`
       
        ${He}
        ${Le}
        ${tt}
       
        :host{
            
            display:grid;
            background-color:white;
            grid-template-rows:auto auto auto 1fr auto;
            grid-gap:1rem;
            align-items:center;
            justify-items:center;
            min-width:20rem;
        }
        #status{
            display:grid;
            grid-auto-flow:column;
            align-items:center;
            background-color: white;
            color:var(--primary-color);
            fill:var(--primary-color);
            stroke:var(--primary-color);
            justify-self: stretch;
            padding: .5rem;
            border-bottom:1px solid #e3e3e3;
            background-color:#f4f3f1
        }
        :host(:not([media-size="small"])) #status{
            display:none
        }
       
        :host([media-size="small"]){
            position:absolute;
            top:-100vh;
            left:0 ;
            width:100%;
            height:100%;           
            background-color:white;
            grid-gap:0;
            transition:all .5s
        }
        :host([media-size="small"][editando]){
           
            top:0;
           
        }

        #cerrar{
            justify-self:end
        }
        :host(:not([media-size="small"])) #cerrar{
            display:none
        }
       
        #titulo{
            display:grid;
            justify-self:stretch;
            grid-template-columns: auto 1fr;
            align-items:center;
            justify-items:start;
            grid-gap:.5rem;
            font-size:1.5rem;
            margin:1rem;
            background-color:white;
            color:Black;
        }
        #cuerpo{
            display:grid;
            grid-auto-flow:row;
            grid-gap:.5rem
        }
        #botonera{
            display:grid;
            
        }
       
        nano-input ,select{
            color:black;
            background-color:white;
            border-radius:0
        }
        
        `}render(){return ge`
            <div id="status" style="font-weight:bold"> 
                <div>${Ze}</div>
                <div class="" @click="${this.cerrar}" id="cerrar">${_e}</div>
            </div>       
            <div id="titulo">
                <div>Mi Mascota</div>
            </div>
            
            <div id ="cuerpo">
                <div class="select" style="width:15rem;height:3rem">
                    <label for="tipo">Tipo</label>
                    <select style="width:100%" id="tipo" >          
                        <option value="Canino" .selected="${"Canino"==this.item.tipo}">Canino</option>
                        <option value="Felino" .selected="${"Felino"==this.item.tipo}">Felino</option>
                        <option value="Otro" .selected="${"Otro"==this.item.tipo}">Otro</option>
                    </select>
                </div>
                <nano-input style="width:15rem" id="nombre" type="text" label="Nombre" .value="${this.item.nombre}"></nano-input>
                <nano-input style="width:15rem" id="nacimiento" type="date" label="Nacimiento" no-spinner .value="${this.item.FN.substr(0,10)}"></nano-input>              
            </div>  
            
            <div id="botonera" class="boton" @click="${this.salvar}">
                <div>${this.agregando?"Agregar":"Guardar"}</div>
            </div>   
        `}stateChanged(e,t){"ui.opcionSeleccionada.timeStamp"==t&&(this.oculto="MASCOTA"!=e.ui.opcionSeleccionada.option),"mascotas.selectedTimeStamp"==t&&(this.item={...e.mascotas.selectedItem}),this.oculto||this.shadowRoot.querySelector("#nombre").focus(),this.agregando="ADD"==e.mascotas.currentTask,this.update()}cerrar(){this.shadowRoot.host.offsetParent.editando=!1}salvar(){const e=new Date(this.shadowRoot.querySelector("#nacimiento").value.replace(/-/g,"/"));var t;this.item={nombre:this.shadowRoot.querySelector("#nombre").value,FN:e.toJSON(),imagen:null,tipo:this.shadowRoot.querySelector("#tipo").value},this.update(),"ADD"==D.getState().mascotas.currentTask&&D.dispatch((t=this.item,{type:w,item:t})),"UPDATE"==D.getState().mascotas.currentTask&&D.dispatch((e=>({type:"[mascotas] update",item:e}))(this.item)),this.cerrar()}static get properties(){return{oculto:{type:Boolean,reflect:!0},agregando:{type:Boolean,reflect:!0},mediaSize:{type:String,reflect:!0,attribute:"media-size"},editando:{type:Boolean,reflect:!0}}}}window.customElements.define("app-mascota",it);class rt extends(Re(D,"mascotas.timeStamp","ui.opcionSeleccionada.timeStamp")(Be)){constructor(){super(),this.oculto=!0,this.items=[],this.editando=!1}static get styles(){return Oe`
        ${He}
        ${Le}
        ${$e}
        :host{
            position:absolute;
            display:grid;
            grid-template-rows:auto auto 1fr auto;
            align-items:center;
            justify-items:center;
            transition: all .5s ease-in-out;
            background-color:white;
            color:black;
            grid-gap:.5rem;
        }
        #status{
            display:grid;
            grid-auto-flow:column;
            align-items:center;
            background-color: white;
            color:var(--primary-color);
            fill:var(--primary-color);
            stroke:var(--primary-color);
            justify-self: stretch;
            padding: .5rem;
            border-bottom:1px solid #e3e3e3;
            background-color:#f4f3f1
        }
        
        :host([media-size="small"][editando]) #lista{
            display:none
        }
      
        :host(:not([media-size="small"])){
            width:70%;
            height:80%;    
            left:50%;
            top:55%;
            transform:translate(-50%,-50%);
           
        }
        
        :host([media-size="small"]){
            top:0;
            left:0;
            width:100%;
            height:100%;           
            background-color:white;
            padding:0;
            grid-gap:0;
            align-items:start
        }
        :host([oculto]){
            left:-50rem
        }
        #titulo{
            display:grid;
            justify-self:stretch;
            grid-template-columns: auto 1fr;
            align-items:center;
            justify-items:start;
            grid-gap:.5rem;
            font-size:1.5rem;
            margin:1rem;
            background-color:white;
            color:Black;

        }
       
        #cuerpo{
            display:grid;
            grid-template-columns:2fr 1fr;
            grid-gap:.5rem;
            padding:.5rem;
        }
        :host([media-size="small"]) #cuerpo{           
            grid-template-columns: 1fr;
            width:100%;
            padding:0
            
        }
       
        #lista{
            display:grid;
            grid-auto-flow:row;
            grid-gap:.5rem;
            height:50vh;
            overflow-y:auto;
            align-content:start;
        }
        :host([media-size="small"]) #lista{
            padding:.3rem
        }
        :host([media-size="small"]) .row{
            padding:0
        }
        :host([media-size="small"]) .row .datos{
            color:black
        }
        :host([media-size="small"]) .row #fecha{
            display:none
        }
        :host([media-size="small"]) .row .foto{
            display:grid;
            background-color:var(--orange-5);
            align-self:stretch;
            justify-self:stretch;
            align-items:center;
            justify-content:center;
            padding:.3rem
        }
        :host([media-size="small"]) .row .foto svg{
            display:grid;
            height:2rem;
            width:2rem;
        }
        :host([media-size="small"]) .row .foto .circulo{
            display: grid;
            background-color: white;
            border-radius: 50%;
            width: 3rem;
            height: 3rem;
            align-items: center;
            justify-items: center;
        }
        .row{
            display:grid;
            grid-gap:1rem;
            grid-template-columns:1fr 5fr auto auto auto;
            background-color:white;
            box-shadow:var(--shadow-elevation-2-box);
            min-height:4rem;
            padding:.3rem;
            align-items:center;
            cursor:pointer
        }
        .row .foto svg{
            height:3rem;
            width:3rem;
            stroke:white;          
        }
        .row .datos {
            display:grid;
            grid-auto-flow:row
        }
        .row .datos .nombre {
           color:var(--orange);
           font-size:1.2rem;
           font-weight:bold
        }
        .row .datos .otros{
          display:grid;
          grid-auto-flow:column;
        }
        .emptyRow{
            display:grid;
            grid-auto-flow:row;
            background-color:rgba(0,0,0,.1);
            height:3rem;
        }
       
        :host([media-size="small"]) .botonTarjeta{
            align-self:start;
         
        }
        .botonera{
            display:grid;
            grid-auto-flow:row;
            padding:1rem;
            
        }
        nano-input {
            color:black;
            background-color:white;
            border-radius:0;
        }       

        `}render(){return ge`
         
        <div id="status" style="font-weight:bold"> 
            <div>${Ze}</div>
            <div style="justify-self:end" @click="${this.cerrar}">${Ke}</div>
        </div>       
        <div id="titulo">
            <div>Mascota/s</div>
        </div>
        <div id="cuerpo">
            <div id="lista">
                ${this.getRow()}
            </div>
            <app-mascota id="formulario" media-size="${this.mediaSize}" ?editando="${this.editando}"></app-mascota>
        </div>
        <div class="botonera">
            <div class="boton" @click="${this.agregar}">Nueva Mascota</div>
        </div>
            
        `}getRow(){if(this.items.length>0)return this.items.map(e=>ge`
                <div class="row" .item=${e} @click="${this.seleccionar}">

                    <div class="foto"><div class="circulo">${Fe}</div></div>
                    <div class="datos">
                        <div class="nombre">${e.nombre}</div>
                        <div class="otros" style="overflow-x:visible">                                                    
                            <div id="fecha">${new Date(e.FN).toDateString()}</div>
                            <div>(${e.tipo})</div>
                        </div>
                        
                    </div>
                   
                    <div class="botonTarjeta" @click="${this.verVacunas}" .item="${e}">${Ye}</div>
                    <div class="botonTarjeta" @click="${this.verHistoria}" .item="${e}">${Ue}</div>
                    <div class="botonTarjeta">${Xe}</div> 
                  
                </div>
                `);return[1,2,3,4,5,6].map(e=>ge`
                <div class="emptyRow">

                </div>
                `)}stateChanged(e,t){"ui.opcionSeleccionada.timeStamp"==t&&(this.oculto="MASCOTAS"!=e.ui.opcionSeleccionada.option,this.oculto||(this.items=e.mascotas.entities)),"mascotas.timeStamp"==t&&(this.items=e.mascotas.entities,this.update())}verHistoria(e){D.dispatch(y(e.currentTarget.item.id)),D.dispatch(z()),D.dispatch(h("HISTORIA CLINICA"))}verVacunas(e){D.dispatch(y(e.currentTarget.item.id)),D.dispatch(C()),D.dispatch(h("AGENDA VACUNACION"))}agregar(e){D.dispatch(b()),this.editando=!0}seleccionar(e){D.dispatch({type:"[mascotas] select",item:e.currentTarget.item}),this.editando=!0}cerrar(){this.oculto=!0,D.dispatch({type:"[ui] toggle menu"})}static get properties(){return{oculto:{type:Boolean,reflect:!0},mediaSize:{type:String,reflect:!0,attribute:"media-size"},editando:{type:Boolean,reflect:!0}}}}window.customElements.define("lista-mascotas",rt);class ot extends(Re(D,"hc.selectedTimeStamp","ui.opcionSeleccionada.timeStamp")(Be)){constructor(){super(),this.oculto=!0,this.item={},this.idMascota=0}static get styles(){return Oe`
       
        ${He}
        ${Le}
        ${tt}
       
        :host{
            
            display:grid;
            background-color:white;
            grid-template-rows:auto auto auto 1fr auto;
            grid-gap:1rem;
            align-items:center;
            justify-items:center;
            min-width:20rem;
        }
        #status{
            display:grid;
            grid-auto-flow:column;
            align-items:center;
            background-color: white;
            color:var(--primary-color);
            fill:var(--primary-color);
            stroke:var(--primary-color);
            justify-self: stretch;
            padding: .5rem;
            border-bottom:1px solid #e3e3e3;
            background-color:#f4f3f1
        }
        :host(:not([media-size="small"])) #status{
            display:none
        }
       
        :host([media-size="small"]){
            position:absolute;
            top:-100vh;
            left:0 ;
            width:100%;
            height:100%;           
            background-color:white;
            grid-gap:0;
            transition:all .5s
        }
        :host([media-size="small"][editando]){
           
            top:0;
           
        }

        #cerrar{
            justify-self:end
        }
        :host(:not([media-size="small"])) #cerrar{
            display:none
        }
       
        #titulo{
            display:grid;
            justify-self:stretch;
            grid-template-columns: auto 1fr;
            align-items:center;
            justify-items:start;
            grid-gap:.5rem;
            font-size:1.5rem;
            margin:1rem;
            background-color:white;
            color:Black;
        }
        #cuerpo{
            display:grid;
            grid-auto-flow:row;
            grid-gap:.5rem
        }
        #botonera{
            display:grid;
            
        }
       
        nano-input ,select{
            color:black;
            background-color:white;
            border-radius:0
        }

        `}render(){return ge`
         <div id="status" style="font-weight:bold"> 
                <div>${Ze}</div>
                <div class="" @click="${this.cerrar}" id="cerrar">${_e}</div>
            </div>       
            <div id="titulo">
                <div>Estudio</div>
            </div>

            <div id ="cuerpo">
               
                <nano-input style="width:15rem" id="descripcion" type="text" label="Nombre del Estudio" .value="${this.item.descripcion}"></nano-input>
                <nano-input style="width:15rem" id="fecha" type="date" label="Fecha" no-spinner .value="${this.item.fecha.substr(0,10)}"></nano-input>
                <div class="select" style="width:15rem;height:3rem"> 
                    <label for="realizado">Realizado</label>
                    <select style="width:100%" id="realizado" >          
                        <option value="S" .selected="${"S"==this.item.realizado}">SI</option>
                        <option value="N" .selected="${"N"==this.item.realizado}">NO</option>
                       
                    </select>  
                </div>           
            </div>  
            
            <div id="botonera" class="boton" @click="${this.salvar}">
                <div>${this.agregando?"Agregar":"Guardar"}</div>
            </div>  
        `}stateChanged(e,t){"ui.opcionSeleccionada.timeStamp"==t&&(this.oculto="HISTORIA CLINICA"!=e.ui.opcionSeleccionada.option),"hc.selectedTimeStamp"==t&&(this.item={...e.hc.selectedItem}),this.oculto||this.shadowRoot.querySelector("#descripcion").focus(),this.agregando="ADD"==e.hc.currentTask,this.update()}cerrar(){this.shadowRoot.host.offsetParent.editando=!1}salvar(){const e=new Date(this.shadowRoot.querySelector("#fecha").value.replace(/-/g,"/"));this.item={descripcion:this.shadowRoot.querySelector("#descripcion").value,fecha:e.toJSON(),realizado:this.shadowRoot.querySelector("#realizado").value,idMascota:D.getState().mascotas.currentId},this.update(),"ADD"==D.getState().hc.currentTask&&D.dispatch({type:"[hc] add",item:this.item}),"UPDATE"==D.getState().hc.currentTask&&D.dispatch((e=>({type:"[hc] update",item:e}))(this.item)),this.cerrar()}static get properties(){return{oculto:{type:Boolean,reflect:!0},agregando:{type:Boolean,reflect:!0},mediaSize:{type:String,reflect:!0,attribute:"media-size"},editando:{type:Boolean,reflect:!0}}}}window.customElements.define("app-hc",ot);class at extends(Re(D,"mascotas.timeStamp","mascotas.currentTimeStamp")(Be)){constructor(){super(),this.oculto=!0,this.items=[],this._value=0}static get styles(){return Oe`
     
        ${tt}
       
        :host{
            
            display:grid;
            grid-auto-flow:rows;
            grid-gap:1rem;
            align-items:center;
            justify-items:center;
            
        }
        :host([oculto]){
            left:-50rem
        }
        
        select{
            color:black;
            background-color:white;
            border-radius:0
        }
        
        `}render(){return ge`
            <div class="select" style="width:15rem;height:3rem">
                <label for="tipo"></label>
                <select style="width:100%;font-size:1.2rem;padding-top:0" id="tipo" @change="${this.cambioValor}"> 
                    ${this.items.map(e=>ge`<option value="${e.id}" .selected="${e.id==this._value}" @change="${this._value=e.id}">${e.nombre}</option>`)}                           
                </select>
            </div>   
            
        `}stateChanged(e,t){"mascotas.timeStamp"==t&&(this.items=e.mascotas.entities,this.items.length>0&&(this._value=this.items[0].id,D.dispatch(y(this._value)))),"mascotas.currentTimeStamp"==t&&(this._value=e.mascotas.currentId,this.shadowRoot.querySelector("#tipo").value=this._value),this.update()}cambioValor(e){this._value=parseInt(e.currentTarget.value,10),D.dispatch(y(this._value)),D.dispatch(z()),D.dispatch(C())}static set value(e){this._value=e,D.dispatch(y(e.id)),this.update()}static get value(){return this._value}static get properties(){return{oculto:{type:Boolean,reflect:!0},mediaSize:{type:String,reflect:!0,attribute:"media-size"}}}}window.customElements.define("combo-mascota",at);const st="hc.timeStamp";class nt extends(Re(D,st,"ui.opcionSeleccionada.timeStamp","mascotas.currentTimeStamp")(Be)){constructor(){super(),this.oculto=!0,this.items=[]}static get styles(){return Oe`
        ${He}
        ${Le}
        ${$e}
        :host{
            position:absolute;
            display:grid;
            grid-template-rows:auto auto 1fr auto;
            align-items:center;
            justify-items:center;
            transition: all .5s ease-in-out;
            background-color:white;
            color:black;
            grid-gap:.5rem;    
           
        }
        #status{
            display:grid;
            grid-auto-flow:column;
            align-items:center;
            background-color: white;
            color:var(--primary-color);
            fill:var(--primary-color);
            stroke:var(--primary-color);
            justify-self: stretch;
            padding: .5rem;
            border-bottom:1px solid #e3e3e3;
            background-color:#f4f3f1
        }
        
        :host([media-size="small"][editando]) #lista{
            display:none
        }
        
        :host(:not([media-size="small"])){
            width:70%;
            height:90%;    
            left:50%;
            top:55%;
            transform:translate(-50%,-50%);
        }
       
        :host([media-size="small"]){
            top:0;
            left:0;
            width:100%;
            height:100%;           
            background-color:white;
            padding:0;
            grid-gap:0;
            align-items:start
        }
        :host([oculto]){
            left:-50rem
        }
        #titulo{
            display:grid;
            justify-self:stretch;
            grid-template-columns: auto 1fr;
            align-items:center;
            justify-items:start;
            grid-gap:.5rem;
            font-size:1.5rem;
            margin:1rem;
            background-color:white;
            color:Black;
          
        }
       
        #cuerpo{
            display:grid;
            grid-template-columns:2fr 1fr;
            grid-gap:.5rem;
            
        }
        :host([media-size="small"]) #cuerpo{           
            grid-template-columns: 1fr;
            width:100%;
            padding:0
            
        }
        :host([media-size="small"]) #fecha{
           display:none
        }
        #lista{
            display:grid;
            grid-auto-flow:row;
            grid-gap:.5rem;
            height:50vh;
            overflow-y:auto;
            align-content:start;
        }
        :host([media-size="small"]) #lista{
            padding:.3rem
        }
        :host([media-size="small"]) .row{
            padding:0
        }
        .row{
            display:grid;
            grid-gap:1rem;
            grid-template-columns:1fr  auto;
            background-color:white;
            box-shadow:var(--shadow-elevation-2-box);
            min-height:4rem;
            padding:.3rem;
            align-items:center;
            cursor:pointer

        }
        .row .foto svg{
            height:3rem;
            width:3rem;
            stroke:white;          
           
        }
        :host([media-size="small"]) .row .datos{
            color:black
        }
        .row .datos {
            display:grid;
            grid-auto-flow:row
        }
        .row .datos .nombre {
           color:var(--orange);
           font-size:1.2rem;
           font-weight:bold
        }
        .row .datos .otros{
          display:grid;
          grid-auto-flow:column;
          
        }
        .emptyRow{
            display:grid;
            grid-auto-flow:row;
            background-color:rgba(0,0,0,.1);
            height:3rem;
            
        }
        :host([media-size="small"]) .emptyRow{
          
            background-color:rgba(0,0,0,.1);
           
        }
        :host([media-size="small"]) .row{
            background-color:white;
            box-shadow:var(--shadow-elevation-3-box);
            padding:.2rem
        }
        :host([media-size="small"]) .botonTarjeta{
            align-self:start;
         
        }
        .botonera{
            display:grid;
            grid-auto-flow:row;
            padding:1rem;
            
        }
        .subtit{
            font-weight:bold;
            display:grid;
            grid-auto-flow:column;
            grid-gap:1rem;
            align-items:center;
           
            justify-self: stretch;
            padding: .3rem;
        }
       
        :host([media-size="small"]) .subtit{
            
            justify-items: start;
           
        }

        `}render(){return ge`
        <div id="status" style="font-weight:bold"> 
            <div>${Ze}</div>
            <div style="justify-self:end" @click="${this.cerrar}">${Ke}</div>
        </div>       
        <div id="titulo">
            <div>Historia Clínica</div>
        </div>
        <div class="subtit">
            <combo-mascota .mediaSize="${this.mediaSize}"></combo-mascota>
        </div>       
            
        <div id="cuerpo">
            <div id="lista">
                ${this.getRow()}
            </div>
            <app-hc id="formulario" media-size="${this.mediaSize}" ?editando="${this.editando}"></app-hc>
        </div>
        <div class="botonera">
            <div class="boton" @click="${this.agregar}">Nuevo Estudio</div>
        </div>
            
        `}getRow(){if(this.items.length>0)return this.items.map(e=>ge`
                <div class="row" .item=${e} @click="${this.seleccionar}">
                   
                    <div class="datos">
                        <div class="nombre">${e.descripcion}</div>
                        <div class="otros">
                            <div>${new Date(e.fecha).toDateString()}</div>
                            <div>${"S"==e.realizado?"Realizado":"Sin realizar"}</div>
                        </div>
                        
                    </div>                  
                    
                    <div class="botonTarjeta">${Xe}</div>
                </div>
                `);return[1,2,3,4,5,6].map(e=>ge`
                <div class="emptyRow">

                </div>
                `)}verVacunas(e){D.dispatch(setCurrentMascota(e.currentTarget.item.id)),D.dispatch(C()),D.dispatch(h("AGENDA VACUNACION"))}stateChanged(e,t){"ui.opcionSeleccionada.timeStamp"==t&&(this.oculto="HISTORIA CLINICA"!=e.ui.opcionSeleccionada.option,this.oculto||(this.items=e.hc.entities.filter(t=>t.idMascota==e.mascotas.currentId))),t==st&&(this.items=e.hc.entities.filter(t=>t.idMascota==e.mascotas.currentId)),"mascotas.currentTimeStamp"==t&&(this.items=e.hc.entities.filter(t=>t.idMascota==e.mascotas.currentId)),this.update()}agregar(e){D.dispatch(z()),this.editando=!0}seleccionar(e){D.dispatch({type:"[hc] select",item:e.currentTarget.item}),this.editando=!0}cerrar(){this.oculto=!0,D.dispatch({type:"[ui] toggle menu"})}static get properties(){return{oculto:{type:Boolean,reflect:!0},mediaSize:{type:String,reflect:!0,attribute:"media-size"},editando:{type:Boolean,reflect:!0}}}}window.customElements.define("lista-hc",nt);class lt extends(Re(D,"agenda.selectedTimeStamp","ui.opcionSeleccionada.timeStamp")(Be)){constructor(){super(),this.oculto=!0,this.item={},this.idMascota=0}static get styles(){return Oe`
       
        ${He}
        ${Le}
        ${tt}
       
        :host{
            
            display:grid;
            background-color:white;
            grid-template-rows:auto auto auto 1fr auto;
            grid-gap:1rem;
            align-items:center;
            justify-items:center;
            min-width:20rem;
        }
        #status{
            display:grid;
            grid-auto-flow:column;
            align-items:center;
            background-color: white;
            color:var(--primary-color);
            fill:var(--primary-color);
            stroke:var(--primary-color);
            justify-self: stretch;
            padding: .5rem;
            border-bottom:1px solid #e3e3e3;
            background-color:#f4f3f1
        }
        :host(:not([media-size="small"])) #status{
            display:none
        }
       
        :host([media-size="small"]){
            position:absolute;
            top:-100vh;
            left:0 ;
            width:100%;
            height:100%;           
            background-color:white;
            grid-gap:0;
            transition:all .5s
        }
        :host([media-size="small"][editando]){
           
            top:0;
           
        }

        #cerrar{
            justify-self:end
        }
        :host(:not([media-size="small"])) #cerrar{
            display:none
        }
       
        #titulo{
            display:grid;
            justify-self:stretch;
            grid-template-columns: auto 1fr;
            align-items:center;
            justify-items:start;
            grid-gap:.5rem;
            font-size:1.5rem;
            margin:1rem;
            background-color:white;
            color:Black;
        }
        #cuerpo{
            display:grid;
            grid-auto-flow:row;
            grid-gap:.5rem
        }
        #botonera{
            display:grid;
            
        }
       
        nano-input ,select{
            color:black;
            background-color:white;
            border-radius:0
        }
        
        `}render(){return ge`
             <div id="status" style="font-weight:bold"> 
                <div>${Ze}</div>
                <div class="" @click="${this.cerrar}" id="cerrar">${_e}</div>
            </div>       
            <div id="titulo">
                <div>Vacunas</div>
            </div>
            <div id ="cuerpo">
                <div class="select" style="width:15rem;height:3rem"> 
                    <label for="vacunas">Vacunas</label>
                    <select style="width:100%" id="vacunas" >          
                        <option value="1" .selected="${"1"==this.item.idVacuna}">Corona Virus</option>
                        <option value="2" .selected="${"2"==this.item.idVacuna}">Giardias</option>
                        <option value="3" .selected="${"3"==this.item.idVacuna}">Quintuple</option>
                        <option value="4" .selected="${"4"==this.item.idVacuna}">Rabia</option>
                        <option value="5" .selected="${"5"==this.item.idVacuna}">Sextuple</option>
                        <option value="6" .selected="${"6"==this.item.idVacuna}">Tos de las perreras</option>          
                    </select>  
                </div>       
                
                <nano-input style="width:15rem" id="fecha" type="date" label="Fecha" no-spinner .value="${this.item.fecha.substr(0,10)}"></nano-input>
                <div class="select" style="width:15rem;height:3rem"> 
                    <label for="realizado">Realizado</label>
                    <select style="width:100%" id="realizado" >          
                        <option value="S" .selected="${"S"==this.item.realizado}">SI</option>
                        <option value="N" .selected="${"N"==this.item.realizado}">NO</option>
                       
                    </select>  
                </div>           
            </div>  
            
            <div id="botonera" class="boton" @click="${this.salvar}">
                <div>${this.agregando?"Agregar":"Guardar"}</div>
            </div>   
        `}stateChanged(e,t){"ui.opcionSeleccionada.timeStamp"==t&&(this.oculto="AGENDA VACUNACION"!=e.ui.opcionSeleccionada.option),"agenda.selectedTimeStamp"==t&&(this.item={...e.agenda.selectedItem}),this.oculto||this.shadowRoot.querySelector("#vacunas").focus(),this.agregando="ADD"==e.agenda.currentTask,this.update()}cerrar(){this.shadowRoot.host.offsetParent.editando=!1}salvar(){const e=new Date(this.shadowRoot.querySelector("#fecha").value.replace(/-/g,"/"));this.item={idVacuna:this.shadowRoot.querySelector("#vacunas").value,fecha:e.toJSON(),realizado:this.shadowRoot.querySelector("#realizado").value,idMascota:D.getState().mascotas.currentId},this.update(),"ADD"==D.getState().agenda.currentTask&&D.dispatch({type:"[agenda] add",item:this.item}),"UPDATE"==D.getState().agenda.currentTask&&D.dispatch((e=>({type:"[agenda] update",item:e}))(this.item)),this.cerrar()}static get properties(){return{oculto:{type:Boolean,reflect:!0},agregando:{type:Boolean,reflect:!0},mediaSize:{type:String,reflect:!0,attribute:"media-size"},editando:{type:Boolean,reflect:!0}}}}window.customElements.define("app-agenda",lt);class dt extends(Re(D,"agenda.timeStamp","ui.opcionSeleccionada.timeStamp","mascotas.currentTimeStamp")(Be)){constructor(){super(),this.oculto=!0,this.items=[]}static get styles(){return Oe`
        ${He}
        ${Le}
        ${$e}
        :host{
            position:absolute;
            display:grid;
            grid-template-rows:auto auto 1fr auto;
            align-items:center;
            justify-items:center;
            transition: all .5s ease-in-out;
            background-color:white;
            color:black;
            grid-gap:.5rem;    

        }  
        #status{
            display:grid;
            grid-auto-flow:column;
            align-items:center;
            background-color: white;
            color:var(--primary-color);
            fill:var(--primary-color);
            stroke:var(--primary-color);
            justify-self: stretch;
            padding: .5rem;
            border-bottom:1px solid #e3e3e3;
            background-color:#f4f3f1
        }
        
        :host([media-size="small"][editando]) #lista{
            display:none
        }
        
        :host(:not([media-size="small"])){
            width:70%;
            height:90%;    
            left:50%;
            top:55%;
            transform:translate(-50%,-50%);
        }
       
        :host([media-size="small"]){
            top:0;
            left:0;
            width:100%;
            height:100%;           
            background-color:white;
            padding:0;
            grid-gap:0;
            align-items:start
        }
        :host([oculto]){
            left:-50rem
        }
        #titulo{
            display:grid;
            justify-self:stretch;
            grid-template-columns: auto 1fr;
            align-items:center;
            justify-items:start;
            grid-gap:.5rem;
            font-size:1.5rem;
            margin:1rem;
            background-color:white;
            color:Black;
          
        }
       
        #cuerpo{
            display:grid;
            grid-template-columns:2fr 1fr;
            grid-gap:.5rem;
            
        }
        :host([media-size="small"]) #cuerpo{           
            grid-template-columns: 1fr;
            width:100%;
            padding:0
            
        }
        :host([media-size="small"]) #fecha{
           display:none
        }
        #lista{
            display:grid;
            grid-auto-flow:row;
            grid-gap:.5rem;
            height:50vh;
            overflow-y:auto;
            align-content:start;
        }
        :host([media-size="small"]) #lista{
            padding:.3rem
        }
        :host([media-size="small"]) .row{
            padding:0
        }
        .row{
            display:grid;
            grid-gap:1rem;
            grid-template-columns:1fr  auto;
            background-color:white;
            box-shadow:var(--shadow-elevation-2-box);
            min-height:4rem;
            padding:.3rem;
            align-items:center;
            cursor:pointer

        }
        .row .foto svg{
            height:3rem;
            width:3rem;
            stroke:white;          
           
        }
        :host([media-size="small"]) .row .datos{
            color:black
        }
        .row .datos {
            display:grid;
            grid-auto-flow:row
        }
        .row .datos .nombre {
           color:var(--orange);
           font-size:1.2rem;
           font-weight:bold
        }
        .row .datos .otros{
          display:grid;
          grid-auto-flow:column;
          
        }
        .emptyRow{
            display:grid;
            grid-auto-flow:row;
            background-color:rgba(0,0,0,.1);
            height:3rem;
            
        }
        :host([media-size="small"]) .emptyRow{
          
            background-color:rgba(0,0,0,.1);
           
        }
        :host([media-size="small"]) .row{
            background-color:white;
            box-shadow:var(--shadow-elevation-3-box);
            padding:.2rem
        }
        :host([media-size="small"]) .botonTarjeta{
            align-self:start;
         
        }
        .botonera{
            display:grid;
            grid-auto-flow:row;
            padding:1rem;
            
        }
        .subtit{
            font-weight:bold;
            display:grid;
            grid-auto-flow:column;
            grid-gap:1rem;
            align-items:center;
           
            justify-self: stretch;
            padding: .3rem;
        }
       
        :host([media-size="small"]) .subtit{
            
            justify-items: start;
           
        }
        
        `}render(){return ge`
        <div id="status" style="font-weight:bold"> 
            <div>${Ze}</div>
            <div style="justify-self:end" @click="${this.cerrar}">${Ke}</div>
        </div>       
        <div id="titulo">
            <div>Agenda de Vacunación</div>
        </div>
        
        <div class="subtit">
               
                <combo-mascota .mediaSize="${this.mediaSize}"></combo-mascota>
        </div>   
        <div id="cuerpo">
            <div id="lista">
                ${this.getRow()}
            </div>
            <app-agenda id="formulario" media-size="${this.mediaSize}" ?editando="${this.editando}"></app-agenda>
        </div>
        <div class="botonera">
            <div class="boton" @click="${this.agregar}">Nueva Vacuna</div>
        </div>
            
        `}getRow(){if(this.items.length>0)return this.items.map(e=>ge`
                <div class="row" .item=${e} @click="${this.seleccionar}">
                   
                    <div class="datos">
                        <div class="nombre">${this.getVacuna(e.idVacuna)}</div>
                        <div class="otros">
                            <div>${new Date(e.fecha).toDateString()}</div>
                            <div>${"S"==e.realizado?"Realizado":"Sin realizar"}</div>
                        </div>
                        
                    </div>                             
                    <div class="">${Xe}</div>
                </div>
                `);return[1,2,3,4,5,6].map(e=>ge`
                <div class="emptyRow">

                </div>
                `)}getVacuna(e){return["","Corona Virus","Giardias","Quintuple","Rabia","Sextuple","Tos de las perreras"][e]}stateChanged(e,t){"ui.opcionSeleccionada.timeStamp"==t&&(this.oculto="AGENDA VACUNACION"!=e.ui.opcionSeleccionada.option,this.oculto||(this.items=e.agenda.entities.filter(t=>t.idMascota==e.mascotas.currentId))),"agenda.timeStamp"==t&&(this.items=e.agenda.entities.filter(t=>t.idMascota==e.mascotas.currentId)),"mascotas.currentTimeStamp"==t&&(this.items=e.agenda.entities.filter(t=>t.idMascota==e.mascotas.currentId)),this.update()}agregar(e){D.dispatch(C()),this.editando=!0}seleccionar(e){D.dispatch({type:"[agenda] select",item:e.currentTarget.item}),this.editando=!0}cerrar(){this.oculto=!0,D.dispatch({type:"[ui] toggle menu"})}static get properties(){return{oculto:{type:Boolean,reflect:!0},mediaSize:{type:String,reflect:!0,attribute:"media-size"},editando:{type:Boolean,reflect:!0}}}}window.customElements.define("lista-agenda",dt);class ct extends(Re(D,"ui.opcionSeleccionada.timeStamp")(Be)){constructor(){super(),this.oculto=!0,this.items=[]}static get styles(){return Oe`
        ${He}
        ${Le}
        :host{
            position:absolute;
            display:grid;
            grid-template-rows:auto auto 1fr;
            align-items:center;
            justify-items:center;
            transition: all .5s ease-in-out;
            background-color:white;
            color:black;
            grid-gap:.5rem;    

        }
        #status{
            display:grid;
            grid-auto-flow:column;
            align-items:center;
            background-color: white;
            color:var(--primary-color);
            fill:var(--primary-color);
            stroke:var(--primary-color);
            justify-self: stretch;
            padding: .5rem;
            border-bottom:1px solid #e3e3e3;
            background-color:#f4f3f1
        }
        :host(:not([media-size="small"])){
            width:70%;
            height:90%;    
            left:50%;
            top:55%;
            transform:translate(-50%,-50%);
        }
       
        :host([media-size="small"]){
            top:0;
            left:0;
            width:100%;
            height:100%;           
            background-color:white;
            padding:0;
            grid-gap:0;
            align-items:start
        }
        :host([oculto]){
            left:-50rem
        }
        #titulo{
            display:grid;
            justify-self:stretch;
            grid-template-columns: auto 1fr;
            align-items:center;
            justify-items:start;
            grid-gap:.5rem;
            font-size:1.5rem;
            margin:1rem;
            background-color:white;
            color:Black;
          
        }
        #cuerpo{
            display:grid;
            grid-template-columns:1fr;
            grid-gap:.5rem;
            padding:.5rem;
        }
        #lista{
            display:grid;
            grid-auto-flow:row;
            grid-gap:.5rem;
            height:50vh;
            overflow-y:auto;
            align-content:start;
            scrollbar-width: thin;
            scrollbar-color: #999 transparent;
            box-sizing: border-box;
        }
        :host([media-size="small"]) #lista{
            height:80vh;
        }
        .row{
            display:grid;
            grid-gap:1rem;
            grid-template-columns:1fr 1fr 1fr 1fr 1fr 3fr;
            min-height:4rem;
            padding:.3rem;
            align-items:center;
        
        }
      
        .cabeceraRow{
            display:grid;
            grid-gap:1rem;
            grid-template-columns:1fr 1fr 1fr 1fr 1fr 3fr;
            padding:.3rem;
            color:var(--primary-color);
            align-items:center;
           
        }
        
        #lista::-webkit-scrollbar-track
        {
            border-radius: .3rem;
            background-color: transparent;
        }
        #lista::-webkit-scrollbar
        {
            width:.4rem;
        }
        #lista::-webkit-scrollbar-thumb
        {
            border-radius: .3rem;
            background-color: #999
        }

        .smallRow{
            display:grid;
            grid-auto-flow:row;
            grid-gap:.5rem;
            box-shadow:var(--shadow-elevation-3-box);
            min-height:12rem;
            padding:.3rem;
            align-items:center;
        }
        :host([media-size="small"]) .smallRow{
            background-color:white;
            color:black
        }
        :host([media-size="small"]) .cabeceraRow{
            display:none
        }
        .valor{
            display:grid;
            grid-template-columns:2fr 3fr;
            grid-gap:.3rem
        }
        .label{
            color:var(--primary-color);
            font-size:.8rem
        }

        `}render(){return ge`

       <div id="status" style="font-weight:bold"> 
            <div>${Ze}</div>
            <div style="justify-self:end" @click="${this.cerrar}">${Ke}</div>
        </div>       
        <div id="titulo">
            <div>Calendario de Vacunación</div>
        </div>
        
        <div id="cuerpo">
            <div class="cabeceraRow">
             
                        <div class="cachorro">Cachorro</div>
                        <div class="edad">Edad</div>
                        
                        <div class="obligatorio">Obligatoriedad</div>
                        <div class="periodo">Periodo</div>

                        <div class="vacuna">Vacuna</div>
                        <div class="enfermedad">Enfermedades</div>
                                              
            </div>
            <div id="lista">
                ${this.getRow()}
            </div>
            
        </div>
        
        `}getRow(){return"small"==this.mediaSize?this.items.map(e=>ge`
                <div class="smallRow">
             
                        <div class="valor"><div class="label">Cachorro:</div>${e.cachorro}</div>
                        <div class="valor"><div class="label">Edad:</div>${e.edad}</div>
                        
                        <div class="valor"><div class="label">Obligatoriedad:</div>${e.obligatorio}</div>
                        <div class="valor"><div class="label">Periodo:</div>${e.periodo}</div>

                        <div class="valor"><div class="label">Vacuna:</div>${e.vacuna}</div>
                        <div class="valor"><div class="label">Enfermedades:</div>${e.enfermedad}</div>
                                              
                </div>
                `):this.items.map(e=>ge`
                <div class="row">
             
                        <div class="cachorro">${e.cachorro}</div>
                        <div class="edad">${e.edad}</div>
                        
                        <div class="obligatorio">${e.obligatorio}</div>
                        <div class="periodo">${e.periodo}</div>

                        <div class="vacuna">${e.vacuna}</div>
                        <div class="enfermedad">${e.enfermedad}</div>
                                              
                </div>
                `)}stateChanged(e,t){"ui.opcionSeleccionada.timeStamp"==t&&(this.oculto="CALENDARIO VACUNACION"!=e.ui.opcionSeleccionada.option,this.oculto||(this.items=[{cachorro:"Canino",edad:"Cachorro",obligatorio:"obligatorio",periodo:"45 días",vacuna:"Cuádruple",enfermedad:"Tos de las perreras-Hepatitis-Moquillo-Parvovirus"},{cachorro:"Canino",edad:"Cachorro",obligatorio:"obligatorio",periodo:"65 días",vacuna:"Cuádruple",enfermedad:"Tos de las perreras-Hepatitis-Moquillo-Parvovirus"},{cachorro:"Canino",edad:"Cachorro",obligatorio:"obligatorio",periodo:"95 días",vacuna:"Séxtuple",enfermedad:"Tos de las perreras-Hepatitis-Moquillo-Parvovirus"},{cachorro:"Canino",edad:"Cachorro",obligatorio:"obligatorio",periodo:"120 días",vacuna:"Séxtuple",enfermedad:"Tos de las perreras-Hepatitis-Moquillo-Parvovirus"},{cachorro:"Canino",edad:"Cachorro",obligatorio:"obligatorio",periodo:"6 meses",vacuna:"Rabia",enfermedad:"Rabia"},{cachorro:"Canino",edad:"Adulto",obligatorio:"obligatorio",periodo:"Anual",vacuna:"Sextuple",enfermedad:"Tos de las perreras-Hepatitis-Moquillo-Parvovirus"},{cachorro:"Canino",edad:"Adulto",obligatorio:"obligatorio",periodo:"Anual",vacuna:"Rabia",enfermedad:"Rabia"},{cachorro:"Canino",edad:"Adulto",obligatorio:"optativa",periodo:"Anual",vacuna:"Corona Virus",enfermedad:"Corona Virus"},{cachorro:"Canino",edad:"Adulto",obligatorio:"optativa",periodo:"Anual",vacuna:"Giardias",enfermedad:"Giardias"},{cachorro:"Canino",edad:"Adulto",obligatorio:"optativa",periodo:"Anual",vacuna:"Tos de las Perreras",enfermedad:"Tos de las Perreras"}]))}cerrar(){this.oculto=!0,D.dispatch({type:"[ui] toggle menu"})}static get properties(){return{oculto:{type:Boolean,reflect:!0},mediaSize:{type:String,reflect:!0,attribute:"media-size"}}}}window.customElements.define("lista-calendario",ct);class ht extends(Re(D,"ui.media.timeStamp","ui.menuOpen")(Be)){constructor(){super(),this.current="IKE-MAscotas"}static get styles(){return Oe`
        ${Le}
        :host{
            display: grid;                 
            grid-gap:1rem;
            padding:2rem;
            height:100vh;
            width: 100vw;
            scrollbar-width: thin;
            scrollbar-color: #999 transparent;
            box-sizing: border-box;
            grid-template-rows:1fr 9fr;
            padding:0
            
        }
        :host::-webkit-scrollbar-track
        {
            border-radius: .3rem;
            background-color: transparent;
        }
        :host::-webkit-scrollbar
        {
            width:.4rem;
        }
        :host::-webkit-scrollbar-thumb
        {
            border-radius: .3rem;
            background-color: #999
        }

        #status{
            display:grid;
            grid-auto-flow:column;
            align-items:center;
            background-color: white;
            color:var(--primary-color);
            fill:var(--primary-color);
            stroke:var(--primary-color);
            justify-self: stretch;
            padding: .2rem;
            border-bottom:1px solid #e3e3e3;
            background-color:#f4f3f1
        }
      
        .botonMenu{
            justify-self:end;
        }
        :host(:not([media-size="small"])) .botonMenu,:host(:not([media-size="small"])) #velo{
            display:none
        }
        :host(:not([menu-open])) #velo{
            display:none
        }
        #velo{
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
            background-color:rgba(0,0,0,.5)
        }
        #menu{
            z-index:10
        }
        `}render(){return ge`
        <div id="status">
            <div class="naranja">${Ze}</div>
            <div class="botonMenu" @click="${this.toggleMenu}">
                <div>${Ke}</div>
            </div>
            <app-menu id="menu" media-size="${this.mediaSize}" .open="${this.menuOpen}"></app-menu>
        </div>   

        <div id="cuerpo">
           
        </div>
        <hc2-spinner  type="2"></hc2-spinner>
        <app-titular media-size="${this.mediaSize}"></app-titular>
        <lista-mascotas media-size="${this.mediaSize}"></lista-mascotas>
        <lista-hc  media-size="${this.mediaSize}"></lista-hc>
        <lista-agenda  media-size="${this.mediaSize}"></lista-agenda>
        <lista-calendario media-size="${this.mediaSize}"></lista-calendario>
        <div id="velo" @click="${this.toggleMenu}"></div>
        `}stateChanged(e,t){"ui.media.timeStamp"==t&&(this.mediaSize=e.ui.media.size,this.update()),"ui.menuOpen"==t&&(this.menuOpen=e.ui.menuOpen,this.update())}toggleMenu(e){D.dispatch({type:"[ui] toggle menu"})}static get properties(){return{mediaSize:{type:String,reflect:!0,attribute:"media-size"},menuOpen:{type:Boolean,reflect:!0,attribute:"menu-open"}}}}window.customElements.define("view-manager",ht),D.dispatch({type:"[ui] capture media"}),D.dispatch(b()),D.dispatch(z()),D.dispatch(C())}]);