parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mDcL":[function(require,module,exports) {
"use strict";function e(e,n){return Array.isArray(n)?n.map(n=>r(e,n)):r(e,n)}function r(e,r){for(const n of e)if(n.hasMessage(r))return n;return null}Object.defineProperty(exports,"__esModule",{value:!0}),exports.mapBundleSync=e;
},{}],"JDfh":[function(require,module,exports) {
"use strict";async function e(e,r){if(!Array.isArray(r)){for await(const t of e)if(t.hasMessage(r))return t;return null}const t=new Array(r.length).fill(null);let n=r.length;for await(const s of e)for(const[e,o]of r.entries())if(!t[e]&&s.hasMessage(o)&&(t[e]=s,n--),0===n)return t;return t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.mapBundleAsync=e;
},{}],"QccG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"mapBundleSync",{enumerable:!0,get:function(){return e.mapBundleSync}}),Object.defineProperty(exports,"mapBundleAsync",{enumerable:!0,get:function(){return n.mapBundleAsync}});var e=require("./map_sync.js"),n=require("./map_async.js");
},{"./map_sync.js":"mDcL","./map_async.js":"JDfh"}],"Upfk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;class e extends Array{static from(e){return e instanceof this?e:new this(e)}}exports.default=e;
},{}],"OKyI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("./cached_iterable.mjs"));function e(t){return t&&t.__esModule?t:{default:t}}class r extends t.default{constructor(t){if(super(),!(Symbol.iterator in Object(t)))throw new TypeError("Argument must implement the iteration protocol.");this.iterator=t[Symbol.iterator]()}[Symbol.iterator](){const t=this;let e=0;return{next:()=>(t.length<=e&&t.push(t.iterator.next()),t[e++])}}touchNext(t=1){let e=0;for(;e++<t;){const t=this[this.length-1];if(t&&t.done)break;this.push(this.iterator.next())}return this[this.length-1]}}exports.default=r;
},{"./cached_iterable.mjs":"Upfk"}],"TL8G":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("./cached_iterable.mjs"));function e(t){return t&&t.__esModule?t:{default:t}}class r extends t.default{constructor(t){if(super(),Symbol.asyncIterator in Object(t))this.iterator=t[Symbol.asyncIterator]();else{if(!(Symbol.iterator in Object(t)))throw new TypeError("Argument must implement the iteration protocol.");this.iterator=t[Symbol.iterator]()}}[Symbol.asyncIterator](){const t=this;let e=0;return{next:async()=>(t.length<=e&&t.push(t.iterator.next()),t[e++])}}async touchNext(t=1){let e=0;for(;e++<t;){const t=this[this.length-1];if(t&&(await t).done)break;this.push(this.iterator.next())}return this[this.length-1]}}exports.default=r;
},{"./cached_iterable.mjs":"Upfk"}],"PQe0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"CachedSyncIterable",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(exports,"CachedAsyncIterable",{enumerable:!0,get:function(){return r.default}});var e=t(require("./cached_sync_iterable.mjs")),r=t(require("./cached_async_iterable.mjs"));function t(e){return e&&e.__esModule?e:{default:e}}
},{"./cached_sync_iterable.mjs":"OKyI","./cached_async_iterable.mjs":"TL8G"}],"uOLC":[function(require,module,exports) {
"use strict";var e=require("@fluent/sequence"),t=require("cached-iterable");const s="messageId";class r extends HTMLElement{getMessage({messageId:t,args:s,whitelist:r=[]}){if(this._bundles){const n=(0,e.mapBundleSync)(this._bundles,t);if(n){const e=n.getMessage(t);if(e){const i={value:null,attributes:{}};let a=[];if(i.value=n.formatPattern(e.value,s,a),Object.entries(e.attributes).forEach(([e,t])=>{r.includes(e)&&(i.attributes[e]=n.formatPattern(t,s,a))}),a.length>0){const r=new CustomEvent("fluent-web-error",{bubbles:!0,detail:{messageId:t,args:s,message:e,errors:a}});this.dispatchEvent(r)}return i}{const e=new CustomEvent("fluent-web-error",{bubbles:!0,detail:{messageId:t,args:s,errors:[new Error("Message object not found")]}});this.dispatchEvent(e)}}}return null}connectedCallback(){this.render()}set bundles(e){this._bundles=t.CachedSyncIterable.from(e),this.render()}set attributeWhitelist(e){this.whitelist=e,this.render()}set args(e){this.messageArgs=e,this.render()}static get observedAttributes(){return[s]}attributeChangedCallback(e,t,r){e===s&&t!==r&&this.render()}}function n(e,t){if(t.value&&"{???}"!==t.value){const s=document.createElement("template");s.innerHTML=t.value,e.innerHTML="",Array.from(s.content.childNodes).forEach(t=>{e.appendChild(t)})}}customElements.define("fluent-text",class extends r{render(){const e=this.getMessage({messageId:this.getAttribute(s),args:this.messageArgs});e&&n(this,e)}}),customElements.define("fluent-element",class extends r{render(){if(this.firstElementChild){const e=this.getMessage({messageId:this.getAttribute(s),args:this.messageArgs,whitelist:this.whitelist});e&&(Object.entries(e.attributes).forEach(([e,t])=>{this.firstElementChild.setAttribute(e,t)}),n(this.firstElementChild,e))}}});
},{"@fluent/sequence":"QccG","cached-iterable":"PQe0"}]},{},["uOLC"], null)
//# sourceMappingURL=/src.df1a007d.js.map