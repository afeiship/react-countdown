!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("next-interval"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["classnames","next-interval","noop","object-assign","prop-types","react","react-dom"],t):"object"==typeof exports?exports.ReactCountdown=t(require("classnames"),require("next-interval"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-dom")):e.ReactCountdown=t(e.classnames,e["next-interval"],e.noop,e["object-assign"],e["prop-types"],e.react,e["react-dom"])}(this,function(e,t,n,r,o,i,a){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i=r(o);t.default=i.default},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){n(this,e)}return r(e,[{key:"stop",value:function(){this.destroy()}},{key:"start",value:function(){var e=this;this.destroy(),this._interval=nx.interval(function(){e.count()},this.props.interval)}},{key:"count",value:function(){var e=this.props.onChange,t=this.props.value-1;t>=0?e({target:{value:t}}):this.stop()}},{key:"destroy",value:function(){this._interval&&this._interval.destroy()}}]),e}();t.default=o},function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,c,f,l,p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),v=n(14),h=r(v),y=n(15),b=(r(y),n(13)),m=r(b),g=n(9),x=r(g),j=n(11),O=r(j),w=n(12);r(w);n(10);var C=n(1),_=r(C),R=(s=e([_.default]),s((l=f=function(e){function t(){return i(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),d(t,[{key:"componentDidMount",value:function(){var e=this.props.status;this[e]()}},{key:"componentWillReceiveProps",value:function(e){var t=e.status;this[t]()}},{key:"render",value:function(){var e=this.props,t=e.className,n=(e.interval,e.value),r=(e.onChange,e.status),i=o(e,["className","interval","value","onChange","status"]);return h.default.createElement("span",p({"data-status":r,"data-value":n,className:(0,x.default)("react-countdown",t)},i))}}]),t}(v.Component),f.propTypes={className:m.default.string,value:m.default.number,onChange:m.default.func,interval:m.default.number,status:m.default.string},f.defaultProps={value:5,interval:1e3,status:"stop",onChange:O.default},c=l))||c);t.default=R}).call(t,n(6))},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.id,r,""]]);n(7)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(5)(),t.push([e.id,"",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function r(e,t,n){e.forEach(function(e){e in t||Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}var o=Array.prototype.slice,i=Object.getOwnPropertyNames,a="string";e.exports=function(e){var t=Array.isArray(e)?e:o.call(arguments),u=t.map(function(e){return typeof e===a?n(8)("./"+e).default:e});return function(e){var t=e.prototype;u.forEach(function(n){var o=n,a=n.prototype,u=i(o),s=i(a);r(u,e,o),r(s,t,a)})}}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=d[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(c(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(c(r.parts[i],t));d[r.id]={id:r.id,refs:1,parts:a}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a=o[1],u=o[2],s=o[3],c={css:a,media:u,sourceMap:s};n[i]?n[i].parts.push(c):t.push(n[i]={id:i,parts:[c]})}return t}function i(e,t){var n=y(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function u(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function s(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function c(e,t){var n,r,o;if(t.singleton){var i=m++;n=b||(b=u(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(t),r=p.bind(null,n),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=u(t),r=l.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function l(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var d={},v=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=v(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),y=v(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,m=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var u=n[a],s=d[u.id];s.refs--,i.push(s)}if(e){var c=o(e);r(c,t)}for(var a=0;a<i.length;a++){var s=i[a];if(0===s.refs){for(var f=0;f<s.parts.length;f++)s.parts[f]();delete d[s.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){function r(e){return n(o(e))}function o(e){return i[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var i={"./actions":1,"./actions.js":1,"./react-countdown":2,"./react-countdown.js":2,"./style":3,"./style.scss":3};r.keys=function(){return Object.keys(i)},r.resolve=o,e.exports=r,r.id=8},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=i},function(e,t){e.exports=a}])});
//# sourceMappingURL=react-countdown.js.map