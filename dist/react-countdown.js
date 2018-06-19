!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("mixin-decorator"),require("next-interval"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["classnames","mixin-decorator","next-interval","noop","object-assign","prop-types","react","react-dom"],t):"object"==typeof exports?exports.ReactCountdown=t(require("classnames"),require("mixin-decorator"),require("next-interval"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-dom")):e.ReactCountdown=t(e.classnames,e["mixin-decorator"],e["next-interval"],e.noop,e["object-assign"],e["prop-types"],e.react,e["react-dom"])}(this,function(e,t,n,r,o,u,a,i){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),u=r(o);t.default=u.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(5),i=r(a),s=function(){function e(){o(this,e)}return u(e,[{key:"stop",value:function(){this.destroy()}},{key:"start",value:function(){var e=this;this.destroy(),this._interval=(0,i.default)(function(){e.count()},this.props.interval)}},{key:"count",value:function(){var e=this.props.onChange,t=this.props.value-1;t>=0?e({target:{value:t}}):this.stop()}},{key:"destroy",value:function(){this._interval&&this._interval.destroy()}}]),e}();t.default=s},function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,c,l,f,p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),v=n(9),y=(r(v),n(10)),h=(r(y),n(8)),b=r(h),m=n(3),x=(r(m),n(6)),_=r(x),g=n(7),j=(r(g),n(1)),O=r(j),q=(s=e([O.default]),s((f=l=function(e){function t(){return u(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),d(t,[{key:"componentDidMount",value:function(){var e=this.props.status;this[e]()}},{key:"componentWillReceiveProps",value:function(e){var t=e.status;this[t]()}},{key:"componentWillUnmount",value:function(){this.stop()}},{key:"render",value:function(){var e=this.props,t=(e.interval,e.value,e.onChange,e.status,e.nodeName),n=o(e,["interval","value","onChange","status","nodeName"]);return(0,v.createElement)(t,p({},n))}}]),t}(v.Component),l.propTypes={className:b.default.string,value:b.default.number,onChange:b.default.func,nodeName:b.default.any,interval:b.default.number,status:b.default.string},l.defaultProps={value:5,interval:1e3,status:"stop",nodeName:"span",onChange:_.default},c=f))||c);t.default=q}).call(t,n(4))},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=u},function(e,t){e.exports=a},function(e,t){e.exports=i}])});
//# sourceMappingURL=react-countdown.js.map