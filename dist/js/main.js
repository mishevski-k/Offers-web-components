/*! For license information please see main.js.LICENSE.txt */
!function(t){var e={};function i(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(o,s,function(e){return t[e]}.bind(null,s));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);const o=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol();class r{constructor(t,e){if(e!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return o&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const n=new Map,l=t=>{let e=n.get(t);return void 0===e&&n.set(t,e=new r(t,s)),e},a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(t instanceof r)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return l(i)},h=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>l("string"==typeof t?t:t+""))(e)})(t):t;var d,c,p,u;const f={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:v};class g extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const o=this.Πp(i,e);void 0!==o&&(this.Πm.set(o,i),t.push(o))}),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const s=this[t];this[e]=o,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static"Πp"(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise(t=>this.enableUpdating=t),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{o?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{const i=document.createElement("style");i.textContent=e.cssText,t.appendChild(i)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}),this.Πo=new Promise(t=>this.Πl=t)}attributeChangedCallback(t,e,i){this.K(t,i)}"Πj"(t,e,i=m){var o,s;const r=this.constructor.Πp(t,i);if(void 0!==r&&!0===i.reflect){const n=(null!==(s=null===(o=i.converter)||void 0===o?void 0:o.toAttribute)&&void 0!==s?s:f.toAttribute)(e,i.type);this.Πh=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this.Πh=null}}K(t,e){var i,o,s;const r=this.constructor,n=r.Πm.get(t);if(void 0!==n&&this.Πh!==n){const t=r.getPropertyOptions(n),l=t.converter,a=null!==(s=null!==(o=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==o?o:"function"==typeof l?l:null)&&void 0!==s?s:f.fromAttribute;this.Πh=n,this[n]=a(e,t.type),this.Πh=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===i.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach((t,e)=>this[e]=t),this.Πi=void 0);let e=!1;const i=this.L;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this.ΠU)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(i)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach((t,e)=>this.Πj(e,this[e],t)),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}var y,b,w,x;g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null===(c=(d=globalThis).reactiveElementPlatformSupport)||void 0===c||c.call(d,{ReactiveElement:g}),(null!==(p=(u=globalThis).reactiveElementVersions)&&void 0!==p?p:u.reactiveElementVersions=[]).push("1.0.0-rc.2");const S=globalThis.trustedTypes,P=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,C="?"+$,O=`<${C}>`,U=document,k=(t="")=>U.createComment(t),E=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,H=t=>{var e;return T(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,A=/-->/g,N=/>/g,z=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,M=/'/g,B=/"/g,j=/^(?:script|style|textarea)$/i,_=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),L=_(1),I=(_(2),Symbol.for("lit-noChange")),D=Symbol.for("lit-nothing"),V=new WeakMap,F=U.createTreeWalker(U,129,null,!1),W=(t,e)=>{const i=t.length-1,o=[];let s,r=2===e?"<svg>":"",n=R;for(let e=0;e<i;e++){const i=t[e];let l,a,h=-1,d=0;for(;d<i.length&&(n.lastIndex=d,a=n.exec(i),null!==a);)d=n.lastIndex,n===R?"!--"===a[1]?n=A:void 0!==a[1]?n=N:void 0!==a[2]?(j.test(a[2])&&(s=RegExp("</"+a[2],"g")),n=z):void 0!==a[3]&&(n=z):n===z?">"===a[0]?(n=null!=s?s:R,h=-1):void 0===a[1]?h=-2:(h=n.lastIndex-a[2].length,l=a[1],n=void 0===a[3]?z:'"'===a[3]?B:M):n===B||n===M?n=z:n===A||n===N?n=R:(n=z,s=void 0);const c=n===z&&t[e+1].startsWith("/>")?" ":"";r+=n===R?i+O:h>=0?(o.push(l),i.slice(0,h)+"$lit$"+i.slice(h)+$+c):i+$+(-2===h?(o.push(void 0),e):c)}const l=r+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==P?P.createHTML(l):l,o]};class q{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let s=0,r=0;const n=t.length-1,l=this.parts,[a,h]=W(t,e);if(this.el=q.createElement(a,i),F.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=F.nextNode())&&l.length<n;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const i=h[r++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?Q:"?"===e[1]?X:"@"===e[1]?Y:G})}else l.push({type:6,index:s})}for(const e of t)o.removeAttribute(e)}if(j.test(o.tagName)){const t=o.textContent.split($),e=t.length-1;if(e>0){o.textContent=S?S.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],k()),F.nextNode(),l.push({type:2,index:++s});o.append(t[e],k())}}}else if(8===o.nodeType)if(o.data===C)l.push({type:2,index:s});else{let t=-1;for(;-1!==(t=o.data.indexOf($,t+1));)l.push({type:7,index:s}),t+=$.length-1}s++}}static createElement(t,e){const i=U.createElement("template");return i.innerHTML=t,i}}function K(t,e,i=t,o){var s,r,n,l;if(e===I)return e;let a=void 0!==o?null===(s=i.Σi)||void 0===s?void 0:s[o]:i.Σo;const h=E(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(r=null==a?void 0:a.O)||void 0===r||r.call(a,!1),void 0===h?a=void 0:(a=new h(t),a.T(t,i,o)),void 0!==o?(null!==(n=(l=i).Σi)&&void 0!==n?n:l.Σi=[])[o]=a:i.Σo=a),void 0!==a&&(e=K(t,a.S(t,e.values),a,o)),e}class J{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:i},parts:o}=this.D,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:U).importNode(i,!0);F.currentNode=s;let r=F.nextNode(),n=0,l=0,a=o[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Z(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new tt(r,this,t)),this.l.push(e),a=o[++l]}n!==(null==a?void 0:a.index)&&(r=F.nextNode(),n++)}return s}v(t){let e=0;for(const i of this.l)void 0!==i&&(void 0!==i.strings?(i.I(t,i,e),e+=i.strings.length-2):i.I(t[e])),e++}}class Z{constructor(t,e,i,o){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=i,this.options=o}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=K(this,t,e),E(t)?t===D||null==t||""===t?(this.H!==D&&this.R(),this.H=D):t!==this.H&&t!==I&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):H(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(U.createTextNode(t)),this.H=t}_(t){var e;const{values:i,_$litType$:o}=t,s="number"==typeof o?this.C(t):(void 0===o.el&&(o.el=q.createElement(o.h,this.options)),o);if((null===(e=this.H)||void 0===e?void 0:e.D)===s)this.H.v(i);else{const t=new J(s,this),e=t.u(this.options);t.v(i),this.$(e),this.H=t}}C(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new q(t)),e}g(t){T(this.H)||(this.H=[],this.R());const e=this.H;let i,o=0;for(const s of t)o===e.length?e.push(i=new Z(this.k(k()),this.k(k()),this,this.options)):i=e[o],i.I(s),o++;o<e.length&&(this.R(i&&i.B.nextSibling,o),e.length=o)}R(t=this.A.nextSibling,e){var i;for(null===(i=this.P)||void 0===i||i.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class G{constructor(t,e,i,o,s){this.type=1,this.H=D,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this.H=Array(i.length-1).fill(D),this.strings=i):this.H=D}get tagName(){return this.element.tagName}I(t,e=this,i,o){const s=this.strings;let r=!1;if(void 0===s)t=K(this,t,e,0),r=!E(t)||t!==this.H&&t!==I,r&&(this.H=t);else{const o=t;let n,l;for(t=s[0],n=0;n<s.length-1;n++)l=K(this,o[i+n],e,n),l===I&&(l=this.H[n]),r||(r=!E(l)||l!==this.H[n]),l===D?t=D:t!==D&&(t+=(null!=l?l:"")+s[n+1]),this.H[n]=l}r&&!o&&this.W(t)}W(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Q extends G{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===D?void 0:t}}class X extends G{constructor(){super(...arguments),this.type=4}W(t){t&&t!==D?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class Y extends G{constructor(){super(...arguments),this.type=5}I(t,e=this){var i;if((t=null!==(i=K(this,t,e,0))&&void 0!==i?i:D)===I)return;const o=this.H,s=t===D&&o!==D||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==D&&(o===D||s);s&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,i;"function"==typeof this.H?this.H.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this.H.handleEvent(t)}}class tt{constructor(t,e,i){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=i}I(t){K(this,t)}}var et,it,ot,st,rt,nt;null===(b=(y=globalThis).litHtmlPlatformSupport)||void 0===b||b.call(y,q,Z),(null!==(w=(x=globalThis).litHtmlVersions)&&void 0!==w?w:x.litHtmlVersions=[]).push("2.0.0-rc.3");(null!==(et=(nt=globalThis).litElementVersions)&&void 0!==et?et:nt.litElementVersions=[]).push("3.0.0-rc.2");class lt extends g{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();super.update(t),this.Φt=((t,e,i)=>{var o,s;const r=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let n=r._$litPart$;if(void 0===n){const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;r._$litPart$=n=new Z(e.insertBefore(k(),t),t,void 0,i)}return n.I(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return I}}lt.finalized=!0,lt._$litElement$=!0,null===(ot=(it=globalThis).litElementHydrateSupport)||void 0===ot||ot.call(it,{LitElement:lt}),null===(rt=(st=globalThis).litElementPlatformSupport)||void 0===rt||rt.call(st,{LitElement:lt});const at=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:o}=e;return{kind:i,elements:o,finisher(e){window.customElements.define(t,e)}}})(t,e),ht=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function dt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):ht(t,e)}const ct=Element.prototype;ct.msMatchesSelector||ct.webkitMatchesSelector;var pt=function(t,e,i,o){var s,r=arguments.length,n=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let ut=class extends lt{render(){return L`
            <slot></slot>
        `}};ut.styles=a`
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
        }
    `,ut=pt([at("oap-offers-wrapper")],ut);let ft=class extends lt{constructor(){super(...arguments),this.offerImage="https://intro-web-dev.media-ed-online.com/topic-12/img/hw-icon-placeholdergen.png",this.offerRewardValue="0",this.offerTitle="No Title Found",this.offerDescription="No Description is present",this.offerButtonText="",this.OfferButtonURL=""}ifOfferHasButton(){return""!=this.offerButtonText&&""!=this.OfferButtonURL?L`<a class="oap-offer-link" href="${this.OfferButtonURL}">${this.offerButtonText}</a>`:L``}render(){return L`
            <div class="oap-offer-banner">
                <img src="${this.offerImage}">
                <div class="oap-offer-reward">
                    <h1>${this.offerRewardValue}</h1>
                </div>
            </div>
            <div class="oap-offer-details">
                <h1 class="oap-offer-title">${this.offerTitle}</h1>
                <h2 class="oap-offer-description">${this.offerDescription}</h2>
                ${this.ifOfferHasButton()}
            </div>
        `}};ft.styles=a`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

        *
        {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        :host
        {
            width: 100%;
            text-align: center;
            display: flex;
            flex-direction: column;
            border-radius: 5px;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            cursor: pointer;
            background-color: rgb(233, 231, 231);
            font-family: 'Montserrat', sans-serif;
        }
        
        :host(:hover)
        {
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            transition: 0.40s ease-in;
            transform: scale(1.006);
        }

        :host .oap-offer-banner
        {
            position: relative;
        }

        :host .oap-offer-banner img
        {
            width: 100%;
            height: 100%;
            border-radius: 5px 5px 0 0;
        }

        :host .oap-offer-banner .oap-offer-reward
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

        :host .oap-offer-banner .oap-offer-reward h1
        {
            z-index: 99;
            font-size: 1.1rem;
            font-weight: 900;
        }

        :host .oap-offer-banner .oap-offer-reward::before
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

        :host .oap-offer-details
        {
            padding: 2rem clamp(0px, 1rem, 2rem);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 30vh;
        }

        :host .oap-offer-details > *
        {
            margin: 0.3rem 0;
        }

        :host .oap-offer-details .oap-offer-title
        {
            font-size: 1.3rem;
            color: #6a5acd;
        }

        :host .oap-offer-details .oap-offer-description
        {
            font-weight: 500;
            font-size: 1rem;
            color: grey;
        }

        :host .oap-offer-details .oap-offer-link
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

        :host .oap-offer-details .oap-offer-link:hover
        {
            background-color: #cd5700;
            transition: 0.40s ease-in;
        }

        @media only screen and (max-width: 768px)
        {
            :host .oap-offer-details
            {
                height: 25vh;
            }
        }

        @media only screen and (max-width: 500px)
        {
            :host .oap-offer-banner .oap-offer-reward
            {
                height: 4rem;
                width: 4rem;
            }

            :host .oap-offer-banner .oap-offer-reward h1 
            {
                font-size: 0.8rem
            }

            :host .oap-offer-banner .oap-offer-reward::before
            {
                font-size: 1.9rem;
            }
        }
    `,pt([dt()],ft.prototype,"offerImage",void 0),pt([dt()],ft.prototype,"offerRewardValue",void 0),pt([dt()],ft.prototype,"offerTitle",void 0),pt([dt()],ft.prototype,"offerDescription",void 0),pt([dt()],ft.prototype,"offerButtonText",void 0),pt([dt()],ft.prototype,"OfferButtonURL",void 0),ft=pt([at("oap-offer-card")],ft)}]);
//# sourceMappingURL=main.js.map