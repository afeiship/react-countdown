!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("prop-types"),require("react"),require("noop"),require("react-dom"),require("classnames"),require("object-assign")):"function"==typeof define&&define.amd?define(["prop-types","react","noop","react-dom","classnames","object-assign"],e):"object"==typeof exports?exports.BoilerplateReactComponent=e(require("prop-types"),require("react"),require("noop"),require("react-dom"),require("classnames"),require("object-assign")):t.BoilerplateReactComponent=e(t["prop-types"],t.react,t.noop,t["react-dom"],t.classnames,t["object-assign"])}(window,function(t,e,n,r,o,i){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e){t.exports=n},function(t,e){t.exports=r},function(t,e){t.exports=o},function(t,e){t.exports=i},function(t,e,n){
/*!
 * name: next-fsm
 * url: https://github.com/afeiship/next-fsm
 * version: 1.0.0
 * date: 2019-08-14T09:09:11.677Z
 * license: MIT
 */
!function(){var e=e||this||window||Function("return this")(),r=e.nx||n(7),o={state:null,transitions:[],onTransition:r.noop},i=r.declare("nx.Fsm",{methods:{init:function(t){this.options=r.mix(null,o,t),this.state=this.options.init,this.transitions=this.options.transitions,this.__generateStateExecutor()},transition:function(t){var e=this.transitions.find(function(e){return e.name===t});if(this.state===e.from||"*"===e.from){var n=e.to;this.state=n,this.options.onTransition({target:{value:n}})}},__generateStateExecutor:function(){var t=this;this.transitions.map(function(t){return t.name}).forEach(function(e){t[e]=function(){t.transition(e)}})}}});t.exports&&(t.exports=i)}()},function(t,e,n){var r;nx={BREAKER:{},VERSION:"1.6.5",DEBUG:!1,GLOBAL:function(){return this}.call(null)},function(t,e){var n=Array.prototype,r=Object.prototype.hasOwnProperty;e.nx=e.nx||t,t.noop=function(){},t.error=function(t){throw new Error(t)},t.try=function(t){try{t()}catch(t){}},t.forEach=function(e,n,r){var o,i=e.length;for(o=0;o<i&&n.call(r,e[o],o,e)!==t.BREAKER;o++);},t.forIn=function(e,n,o){var i;for(i in e)if(r.call(e,i)&&n.call(o,i,e[i],e)===t.BREAKER)break},t.each=function(e,n,o){var i,s,a=function(r,i,s){return n.call(o,r,i,e,s)===t.BREAKER};if(e)if("number"==typeof(s=e.length))for(i=0;i<s&&!a(i,e[i],!0);i++);else for(i in e)if(r.call(e,i)&&a(i,e[i],!1))break},t.map=function(e,n,r){var o=[];return t.each(e,function(){var e=n.apply(r,arguments);if(e===t.BREAKER)return t.BREAKER;o.push(e)}),o},t.mix=function(e){var n,r,o=e||{},i=arguments;for(n=1,r=i.length;n<r;n++)t.forIn(i[n],function(t,e){o[t]=e});return o},t.slice=function(t,e,r){return n.slice.call(t,e,r)},t.set=function(e,n,r){for(var o=n.split("."),i=e||t.GLOBAL,s=o.length-1,a=o[s],u=0;u<s;u++){var c=o[u],_=isNaN(+o[u+1])?{}:[];i=i[c]=i[c]||_}return i[a]=r,e},t.get=function(e,n){var r=n.split("."),o=e||t.GLOBAL;return r.forEach(function(t){o=o&&o[t]}),o},t.path=function(t,e,n){return null==n?this.get(t,e):this.set(t,e,n)}}(nx,nx.GLOBAL),t.exports?t.exports=nx:void 0===(r=function(){return nx}.apply(e,[]))||(t.exports=r),function(t,e){var n=function(){},r={__class_id__:0,__type__:"nx.RootClass",__base__:Object,__meta__:{},__static__:!1,__statics__:{},__properties__:{},__methods__:{},__method_init__:t.noop,__static_init__:t.noop},o={base:function(){var t,e=this.base.caller;if(e&&(t=e.__base__))return t.apply(this,arguments)},parent:function(e){var n=void 0===this.__id__,r=t.slice(arguments,1),o=n?this.__base__:this.__base__.prototype,i=this["@"+e].__type__,s=["get","set"][r.length];switch(i){case"method":return o[e].apply(this,r);case"property":return o["@"+e][s].apply(this,r)}}};r.__methods__=n.prototype=t.mix({constructor:n,init:t.noop,destroy:t.noop,toString:function(){return"[Class@"+this.__type__+"]"}},o),t.mix(r.__statics__,o),t.mix(n,r),t.mix(n,r.__statics__),t.RootClass=n}(nx,nx.GLOBAL),function(t,e){t.defineProperty=function(e,n,r,o){var i,s,a,u,c,_="@"+n,f=r&&"object"==typeof r?r:{value:r};return"value"in f?(u=f.value,c="_"+n,i=function(){return c in this?this[c]:"function"==typeof u?u.call(this):u},s=function(t){this[c]=t}):(i=r.get||e[_]&&e[_].get||t.noop,s=r.set||e[_]&&e[_].set||t.noop),_ in e&&(i.__base__=e[_].get,s.__base__=e[_].set),a=e[_]={__meta__:r,__name__:n,__type__:"property",__static__:!!o,get:i,set:s,configurable:!0},Object.defineProperty(e,n,a),a},t.defineMethod=function(t,e,n,r){var o="@"+e;return t[e]=n,t[o]={__meta__:n,__name__:e,__type__:"method",__static__:!!r}},t.defineBombMethod=function(e,n,r,o){n.split(",").forEach(function(n,i){t.defineMethod(e,n,r.call(e,n,i),o)})},t.defineMembers=function(e,n,r,o){t.forIn(r,function(r,i){r.indexOf(",")>-1?t.defineBombMethod(n,r,i,o):t["define"+e](n,r,i,o)})}}(nx,nx.GLOBAL),function(t,e){var n=1,r=0;function o(e,n){this.type=e,this.meta=n,this.base=n.extends||t.RootClass,this.$base=this.base.prototype,this.__class_meta__={},this.__class__=null,this.__constructor__=null}o.prototype={constructor:o,initMetaProcessor:function(){var e=this.meta,r=e.methods||{},o=e.statics||{};t.mix(this.__class_meta__,{__type__:this.type,__meta__:e,__base__:this.base,__class_id__:n++,__method_init__:r.init||this.base.__method_init__,__static_init__:o.init||this.base.__static_init__,__static__:!e.methods&&!!e.statics})},createClassProcessor:function(){var t=this;this.__class__=function(){this.__id__=r++,t.__constructor__.apply(this,arguments),t.registerDebug(this)}},inheritProcessor:function(){var t=this.__class_meta__;this.inheritedClass(t),this.defineMethods(t,!0),this.defineMethods(t,!1),this.defineProperties(t)},inheritedClass:function(t){var e=function(){},n=this.__class__;e.prototype=this.$base,n.prototype=new e,n.prototype.$base=this.$base,n.prototype.constructor=n},defineMethods:function(e,n){var r=n?"statics":"methods",o="__"+r+"__",i=n?this.__class__:this.__class__.prototype,s=(n?this.base:this.base.prototype)[o]||{};t.forIn(this.meta[r],function(t,e){s[t]&&"function"==typeof e&&(e.__base__=s[t])}),i[o]=t.mix(e[o],s,this.meta[r]),t.defineMembers("Method",i,i[o],n)},defineProperties:function(e){var n=e.__static__,r=n?this.__class__:this.__class__.prototype;r.__properties__=t.mix(e.__properties__,this.meta.properties),t.defineMembers("Property",r,r.__properties__,n)},methodsConstructorProcessor:function(){var t=this.__class_meta__;this.__constructor__=function(){t.__method_init__.apply(this,arguments)}},staticsConstructorProcessor:function(){this.__class_meta__.__static_init__.call(this.__class__)},registerProcessor:function(){var e=this.__class__,n=this.type,r=this.__class_meta__;t.mix(e.prototype,r),t.mix(e,r),-1===n.indexOf("nx.Anonymous")&&t.set(t.GLOBAL,n,e)},registerDebug:function(e){t.DEBUG&&(t.set(t,"__instances__."+(r-1),e),t.set(t,"__instances__.length",r))}},t.declare=function(t,e){var r=new o("string"==typeof t?t:"nx.Anonymous"+n,e||t);return r.initMetaProcessor(),r.createClassProcessor(),r.inheritProcessor(),r.methodsConstructorProcessor(),r.staticsConstructorProcessor(),r.registerProcessor(),r.__class__}}(nx,nx.GLOBAL)},function(t,e,n){var r,o,i,s,a,u;window,t.exports=(r=n(0),o=n(1),i=n(3),s=n(4),a=n(2),u=n(5),function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e){t.exports=r},function(t,e){t.exports=o},function(t,e){t.exports=i},function(t,e){t.exports=s},function(t,e){t.exports=a},function(t,e){t.exports=u},function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),i=(n(2),n(0)),s=n.n(i);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n(3),n(4),n(5);var l=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}(this,f(e).apply(this,arguments))}var n,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(e,r.Component),n=e,(i=[{key:"render",value:function(){var t=this.props,e=(t.value,t.items,t.children,t.nodeName),n=t.virtual,r=function(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}(t,["value","items","children","nodeName","virtual"]),i=n?o.a.Fragment:e;return o.a.createElement(i,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(n,!0).forEach(function(e){c(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({children:this.children},r))}},{key:"children",get:function(){var t=this.props,e=t.value,n=t.children,r=t.items;return n.map(function(t,n){return e===r[n]?t:null})}}])&&_(n.prototype,i),e}();l.propTypes={className:s.a.string,items:s.a.array,value:s.a.any,nodeName:s.a.any,virtual:s.a.bool},l.defaultProps={items:[],nodeName:"div",virtual:!1},e.default=l}]))},function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),i=(n(3),n(0)),s=n.n(i),a=(n(4),n(2)),u=n.n(a);n(5),n(6),n(8);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var y=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=p(this,l(e).call(this,t))).state={value:t.start},n}var n,i,s;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(e,r["Component"]),n=e,(i=[{key:"componentDidMount",value:function(){this[this.props.status]()}},{key:"init",value:function(){var t=this.props,e=t.start,n=t.onChange;this.setState({value:e},function(){n({target:{value:e,status:"init"}})})}},{key:"count",value:function(){var t=this,e=this.props,n=e.interval,r=e.step,o=e.end,i=e.onChange;this.timer=setInterval(function(){var e={value:t.state.value+r};t.setState(e,function(){e.status="count",e.value===o?t.done():i({target:e})})},n)}},{key:"done",value:function(){var t=this.props,e=t.end,n=t.onChange;clearInterval(this.timer),n({target:{value:e,status:"done"}})}},{key:"render",value:function(){var t=this.props,e=(t.className,t.status,t.start,t.end,t.step,t.interval,t.onChange,_(t,["className","status","start","end","step","interval","onChange"])),n=this.state.value;return o.a.createElement(r.Fragment,e,n)}}])&&f(n.prototype,i),s&&f(n,s),e}();y.propTypes={className:s.a.string,status:s.a.string,start:s.a.number,end:s.a.number,step:s.a.number,interval:s.a.number,onChange:s.a.func},y.defaultProps={status:"init",start:10,end:1,step:-1,interval:1e3,onChange:u.a};e.default=y}])});