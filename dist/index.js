!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("prop-types"),require("react"),require("@feizheng/noop"),require("react-dom"),require("classnames")):"function"==typeof define&&define.amd?define(["prop-types","react","@feizheng/noop","react-dom","classnames"],t):"object"==typeof exports?exports.ReactCountdown=t(require("prop-types"),require("react"),require("@feizheng/noop"),require("react-dom"),require("classnames")):e.ReactCountdown=t(e["prop-types"],e.react,e["@feizheng/noop"],e["react-dom"],e.classnames)}(window,(function(e,t,n,r,o){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),u=(n(3),n(0)),a=n.n(u),i=(n(4),n(2)),c=n.n(i);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return t&&y(e.prototype,t),n&&y(e,n),e}function b(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(r,e);var t,n=(t=r,function(){var e,n=h(t);if(d()){var r=h(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return b(this,e)});function r(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=n.call(this,e)).init=function(){var e=t.props.value;t.change(e,"init")},t.pause=function(){t.setState({status:"pause"})},t.reset=function(){clearInterval(t.timer),t.reversed?t.value>=t.boundary&&t.init():t.value<=t.boundary&&t.init()},t.count=function(){var e=t.props.interval;t.reset(),t.timer=setInterval(t.countdown,e)},t.countdown=function(){var e=t.props,n=e.step,r=e.end;if(!t.paused){var o=t.value,u=o+n;t.reversed?o>=r?t.done():t.change(u,"count"):o<=r?t.done():t.change(u,"count")}};var o=e.value;return t.state={value:o},t}return v(r,[{key:"reversed",get:function(){return this.props.step>0}},{key:"value",get:function(){return this.state.value}},{key:"boundary",get:function(){var e=this.props;return e.step+e.end}},{key:"paused",get:function(){return"pause"===this.props.status}}]),v(r,[{key:"shouldComponentUpdate",value:function(e){var t=e.status,n=e.value,r=this.props.status,o=this.state.value;return t!==r&&this[t](),n!==o&&this.setState({value:n,status:"init"}),!0}},{key:"componentDidMount",value:function(){this[this.props.status]()}},{key:"done",value:function(){var e=this.props.end;clearInterval(this.timer),this.change(e,"done")}},{key:"change",value:function(e,t){var n=this.props.onChange,r={value:e};this.setState(r,(function(){r.status=t,n({target:r})}))}},{key:"render",value:function(){var e=this.props,t=(e.virtual,e.status,e.value,e.end,e.step,e.interval,e.onChange,e.transform),n=l(e,["virtual","status","value","end","step","interval","onChange","transform"]),r=this.state.value;return o.a.createElement(o.a.Fragment,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({children:t(r)},n))}}]),r}(r.Component);g.displayName="react-countdown",g.version="1.2.0",g.propTypes={status:a.a.oneOf(["init","pause","count","done"]),value:a.a.number,end:a.a.number,step:a.a.number,transform:a.a.func,interval:a.a.number,onChange:a.a.func},g.defaultProps={status:"init",value:5,end:1,step:-1,interval:1e3,onChange:c.a,transform:function(e){return e}};t.default=g}])}));