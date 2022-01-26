/*! For license information please see main.js.LICENSE.txt */
!function(t){var e={};function i(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(r,s,function(e){return t[e]}.bind(null,s));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);const r=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol();class o{constructor(t,e){if(e!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return r&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const n=new Map,l=t=>{let e=n.get(t);return void 0===e&&n.set(t,e=new o(t,s)),e},a=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>l("string"==typeof t?t:t+""))(e)})(t):t;var d,h,c,u;const f={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},p=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:p};class m extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const r=this.Πp(i,e);void 0!==r&&(this.Πm.set(r,i),t.push(r))}),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const s=this[t];this[e]=r,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static"Πp"(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise(t=>this.enableUpdating=t),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{r?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{const i=document.createElement("style");i.textContent=e.cssText,t.appendChild(i)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}),this.Πo=new Promise(t=>this.Πl=t)}attributeChangedCallback(t,e,i){this.K(t,i)}"Πj"(t,e,i=v){var r,s;const o=this.constructor.Πp(t,i);if(void 0!==o&&!0===i.reflect){const n=(null!==(s=null===(r=i.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==s?s:f.toAttribute)(e,i.type);this.Πh=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this.Πh=null}}K(t,e){var i,r,s;const o=this.constructor,n=o.Πm.get(t);if(void 0!==n&&this.Πh!==n){const t=o.getPropertyOptions(n),l=t.converter,a=null!==(s=null!==(r=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==r?r:"function"==typeof l?l:null)&&void 0!==s?s:f.fromAttribute;this.Πh=n,this[n]=a(e,t.type),this.Πh=null}}requestUpdate(t,e,i){let r=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===i.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,i))):r=!1),!this.isUpdatePending&&r&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach((t,e)=>this[e]=t),this.Πi=void 0);let e=!1;const i=this.L;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(i)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach((t,e)=>this.Πj(e,this[e],t)),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}var g,y,b,w;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null===(h=(d=globalThis).reactiveElementPlatformSupport)||void 0===h||h.call(d,{ReactiveElement:m}),(null!==(c=(u=globalThis).reactiveElementVersions)&&void 0!==c?c:u.reactiveElementVersions=[]).push("1.0.0-rc.2");const x=globalThis.trustedTypes,S=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,P=`lit$${(Math.random()+"").slice(9)}$`,C="?"+P,$=`<${C}>`,k=document,E=(t="")=>k.createComment(t),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,A=t=>{var e;return O(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,N=/>/g,R=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,z=/'/g,M=/"/g,j=/^(?:script|style|textarea)$/i,_=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),B=_(1),L=(_(2),Symbol.for("lit-noChange")),I=Symbol.for("lit-nothing"),D=new WeakMap,F=k.createTreeWalker(k,129,null,!1),V=(t,e)=>{const i=t.length-1,r=[];let s,o=2===e?"<svg>":"",n=H;for(let e=0;e<i;e++){const i=t[e];let l,a,d=-1,h=0;for(;h<i.length&&(n.lastIndex=h,a=n.exec(i),null!==a);)h=n.lastIndex,n===H?"!--"===a[1]?n=T:void 0!==a[1]?n=N:void 0!==a[2]?(j.test(a[2])&&(s=RegExp("</"+a[2],"g")),n=R):void 0!==a[3]&&(n=R):n===R?">"===a[0]?(n=null!=s?s:H,d=-1):void 0===a[1]?d=-2:(d=n.lastIndex-a[2].length,l=a[1],n=void 0===a[3]?R:'"'===a[3]?M:z):n===M||n===z?n=R:n===T||n===N?n=H:(n=R,s=void 0);const c=n===R&&t[e+1].startsWith("/>")?" ":"";o+=n===H?i+$:d>=0?(r.push(l),i.slice(0,d)+"$lit$"+i.slice(d)+P+c):i+P+(-2===d?(r.push(void 0),e):c)}const l=o+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==S?S.createHTML(l):l,r]};class W{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let s=0,o=0;const n=t.length-1,l=this.parts,[a,d]=V(t,e);if(this.el=W.createElement(a,i),F.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=F.nextNode())&&l.length<n;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(P)){const i=d[o++];if(t.push(e),void 0!==i){const t=r.getAttribute(i.toLowerCase()+"$lit$").split(P),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?G:"?"===e[1]?Q:"@"===e[1]?X:Z})}else l.push({type:6,index:s})}for(const e of t)r.removeAttribute(e)}if(j.test(r.tagName)){const t=r.textContent.split(P),e=t.length-1;if(e>0){r.textContent=x?x.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],E()),F.nextNode(),l.push({type:2,index:++s});r.append(t[e],E())}}}else if(8===r.nodeType)if(r.data===C)l.push({type:2,index:s});else{let t=-1;for(;-1!==(t=r.data.indexOf(P,t+1));)l.push({type:7,index:s}),t+=P.length-1}s++}}static createElement(t,e){const i=k.createElement("template");return i.innerHTML=t,i}}function q(t,e,i=t,r){var s,o,n,l;if(e===L)return e;let a=void 0!==r?null===(s=i.Σi)||void 0===s?void 0:s[r]:i.Σo;const d=U(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==d&&(null===(o=null==a?void 0:a.O)||void 0===o||o.call(a,!1),void 0===d?a=void 0:(a=new d(t),a.T(t,i,r)),void 0!==r?(null!==(n=(l=i).Σi)&&void 0!==n?n:l.Σi=[])[r]=a:i.Σo=a),void 0!==a&&(e=q(t,a.S(t,e.values),a,r)),e}class K{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:i},parts:r}=this.D,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:k).importNode(i,!0);F.currentNode=s;let o=F.nextNode(),n=0,l=0,a=r[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new J(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new Y(o,this,t)),this.l.push(e),a=r[++l]}n!==(null==a?void 0:a.index)&&(o=F.nextNode(),n++)}return s}v(t){let e=0;for(const i of this.l)void 0!==i&&(void 0!==i.strings?(i.I(t,i,e),e+=i.strings.length-2):i.I(t[e])),e++}}class J{constructor(t,e,i,r){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=i,this.options=r}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=q(this,t,e),U(t)?t===I||null==t||""===t?(this.H!==I&&this.R(),this.H=I):t!==this.H&&t!==L&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):A(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(k.createTextNode(t)),this.H=t}_(t){var e;const{values:i,_$litType$:r}=t,s="number"==typeof r?this.C(t):(void 0===r.el&&(r.el=W.createElement(r.h,this.options)),r);if((null===(e=this.H)||void 0===e?void 0:e.D)===s)this.H.v(i);else{const t=new K(s,this),e=t.u(this.options);t.v(i),this.$(e),this.H=t}}C(t){let e=D.get(t.strings);return void 0===e&&D.set(t.strings,e=new W(t)),e}g(t){O(this.H)||(this.H=[],this.R());const e=this.H;let i,r=0;for(const s of t)r===e.length?e.push(i=new J(this.k(E()),this.k(E()),this,this.options)):i=e[r],i.I(s),r++;r<e.length&&(this.R(i&&i.B.nextSibling,r),e.length=r)}R(t=this.A.nextSibling,e){var i;for(null===(i=this.P)||void 0===i||i.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class Z{constructor(t,e,i,r,s){this.type=1,this.H=I,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=r,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this.H=Array(i.length-1).fill(I),this.strings=i):this.H=I}get tagName(){return this.element.tagName}I(t,e=this,i,r){const s=this.strings;let o=!1;if(void 0===s)t=q(this,t,e,0),o=!U(t)||t!==this.H&&t!==L,o&&(this.H=t);else{const r=t;let n,l;for(t=s[0],n=0;n<s.length-1;n++)l=q(this,r[i+n],e,n),l===L&&(l=this.H[n]),o||(o=!U(l)||l!==this.H[n]),l===I?t=I:t!==I&&(t+=(null!=l?l:"")+s[n+1]),this.H[n]=l}o&&!r&&this.W(t)}W(t){t===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class G extends Z{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===I?void 0:t}}class Q extends Z{constructor(){super(...arguments),this.type=4}W(t){t&&t!==I?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class X extends Z{constructor(){super(...arguments),this.type=5}I(t,e=this){var i;if((t=null!==(i=q(this,t,e,0))&&void 0!==i?i:I)===L)return;const r=this.H,s=t===I&&r!==I||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==I&&(r===I||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,i;"function"==typeof this.H?this.H.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this.H.handleEvent(t)}}class Y{constructor(t,e,i){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=i}I(t){q(this,t)}}var tt,et,it,rt,st,ot;null===(y=(g=globalThis).litHtmlPlatformSupport)||void 0===y||y.call(g,W,J),(null!==(b=(w=globalThis).litHtmlVersions)&&void 0!==b?b:w.litHtmlVersions=[]).push("2.0.0-rc.3");(null!==(tt=(ot=globalThis).litElementVersions)&&void 0!==tt?tt:ot.litElementVersions=[]).push("3.0.0-rc.2");class nt extends m{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();super.update(t),this.Φt=((t,e,i)=>{var r,s;const o=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:e;let n=o._$litPart$;if(void 0===n){const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;o._$litPart$=n=new J(e.insertBefore(E(),t),t,void 0,i)}return n.I(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return L}}nt.finalized=!0,nt._$litElement$=!0,null===(it=(et=globalThis).litElementHydrateSupport)||void 0===it||it.call(et,{LitElement:nt}),null===(st=(rt=globalThis).litElementPlatformSupport)||void 0===st||st.call(rt,{LitElement:nt});const lt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function at(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):lt(t,e)}const dt=Element.prototype;dt.msMatchesSelector||dt.webkitMatchesSelector;var ht=function(t,e,i,r){var s,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(n=(o<3?s(n):o>3?s(e,i,n):s(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let ct=class extends nt{fetchData(){fetch("https://ekstrapoint.com/api/v2/achievement?limit=50&ids=2266,2268,2267,2059,2060,2061&language=en&country=INT").then(t=>t.json()).then(t=>{this.data=t,this.items=this.data.items})}render(){return this.fetchData(),B`
            ${this.items.map(t=>B`
                <div class="offer-card"> 
                    <div class="offer-card-banner">
                        <img src="${t.stateContent[0].image.originalImageUrl}">
                        <div class="offer-card-reward">
                            <h1>${t.rewards[0].value}</h1>
                        </div>
                    </div>
                    <div class="offer-card-details">
                        <h1 class="offer-card-title">${t.stateContent[0].title}</h1>
                        <h2 class="offer-card-description">${t.stateContent[0].description}</h2>
                    </div>
                </div>
                `)}
        `}};ct.styles=((t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,r)=>e+(t=>{if(t instanceof o)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]);return l(i)})`

    /* @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'); */

    *
    {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :host
    {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
        gap: 1.5rem;
        align-items: center;
        width: 100%;
        padding: 0.2rem;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    .offer-card
    {
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        cursor: pointer;
        background-color: rgb(233, 231, 231);
        
    }
    
    .offer-card:hover
    {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        transition: 0.40s ease-in;
        transform: scale(1.006);
    }

    .offer-card .offer-card-banner
    {
        position: relative;
    }

    .offer-card .offer-card-banner img
    {
        width: 100%;
        height: 100%;
        border-radius: 5px 5px 0 0;
    }

    .offer-card .offer-card-banner .offer-card-reward
    {
        background-color: #FF9F90;
        width:  5rem;
        height: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 10px solid #cd5700;
        box-shadow: 4px 3px 5px -3px rgba(0,0,0,0.51) inset;
        position: absolute;
        font-weight: 700;
        color: rgb(250, 196, 115);
        bottom: 10%;
        left: 50%;
        transform: translate(-50%, 50%);    
    }

    .offer-card .offer-card-banner .offer-card-reward h1
    {
        z-index: 99;
        font-size: 1.1rem;
        font-weight: 900;
    }

    .offer-card .offer-card-banner .offer-card-reward::before
    {
        content: "EP";
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        color: #cd5700;
        font-size: 2.3rem;
        z-index: 1;
        background-color: rgba(0,0,0, 0.4);
        border-radius: 50%;
    }

    .offer-card .offer-card-details
    {
        padding: 2rem clamp(0px, 1rem, 2rem);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 30vh;
    }

    .offer-card .offer-card-details > *
    {
        margin: 0.3rem 0;
    }

    .offer-card .offer-card-details .offer-card-title
    {
        font-size: 1.3rem;
        color: #6a5acd;
    }

    .offer-card .offer-card-details .offer-card-description
    {
        font-weight: 500;
        font-size: 1rem;
        color: grey;
    }

    .offer-card .offer-card-details .offer-card-link
    {
        background-color: #FF9F00;
        text-decoration: none;
        color: #FFF;
        border-radius: 25px;
        padding: 0.5rem;
        font-weight: 700;
        font-size: 1.1rem;
        cursor: pointer;
    }

    .offer-card .offer-card-details .offer-card-link:hover
    {
        background-color: #cd5700;
        transition: 0.40s ease-in;
    }

    @media only screen and (max-width: 768px)
    {
        .offer-card .offer-card-details
        {
            height: 25vh;
        }
    }

    @media only screen and (max-width: 500px)
    {
        .offer-card .offer-card-banner .offer-card-reward
        {
            height: 4rem;
            width: 4rem;
        }

        .offer-card .offer-card-banner .offer-card-reward h1 
        {
            font-size: 0.8rem
        }

        .offer-card .offer-card-banner .offer-card-reward::before
        {
            font-size: 1.9rem;
        }
    }
    `,ht([at()],ct.prototype,"data",void 0),ht([at()],ct.prototype,"items",void 0),ct=ht([(t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:r}=e;return{kind:i,elements:r,finisher(e){window.customElements.define(t,e)}}})(t,e))("oap-offers")],ct)}]);
//# sourceMappingURL=main.js.map