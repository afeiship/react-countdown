!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("react")):"function"==typeof define&&define.amd?define(["classnames","react"],t):"object"==typeof exports?exports.ReactCoutdown=t(require("classnames"),require("react")):e.ReactCoutdown=t(e.classnames,e.react)}(this,function(e,t){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),u=o(r);t.default=u.default},function(e,t,n){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(2),c=o(a),l=function(t){function n(e){r(this,n);var t=u(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={startTime:e.startTime,onCounting:e.onCounting,onComplete:e.onComplete,interval:e.interval},t}return s(n,t),i(n,[{key:"start",value:function(){var e=this;this._timer=setInterval(function(){e._couter--?e.state.onCounting(e._couter):(e.stop(),e.state.onComplete(e._couter))},this.state.interval)}},{key:"stop",value:function(){clearInterval(this._timer)}},{key:"reset",value:function(){this._timer=null,this._couter=this.state.startTime}},{key:"render",value:function(){return e.createElement("span",{className:(0,c.default)("react-coutdown",this.props.cssClass)},this.props.children)}}]),n}(e.Component);l.propTypes={cssClass:e.PropTypes.string,template:e.PropTypes.string,startTime:e.PropTypes.number,onCounting:e.PropTypes.func,onComplete:e.PropTypes.func},l.defaultProps={startTime:60,interval:1e3,onCounting:function(){},onComplete:function(){}},t.default=l}).call(t,n(3))},function(t,n){t.exports=e},function(e,n){e.exports=t}])});
//# sourceMappingURL=react-coutdown.js.map