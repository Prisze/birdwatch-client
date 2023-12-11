(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function pi(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const se={},Xt=[],He=()=>{},du=()=>!1,hu=/^on[^a-z]/,Wr=t=>hu.test(t),mi=t=>t.startsWith("onUpdate:"),ge=Object.assign,gi=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},pu=Object.prototype.hasOwnProperty,K=(t,e)=>pu.call(t,e),H=Array.isArray,Qt=t=>zr(t)==="[object Map]",Ha=t=>zr(t)==="[object Set]",j=t=>typeof t=="function",fe=t=>typeof t=="string",Vr=t=>typeof t=="symbol",ie=t=>t!==null&&typeof t=="object",$a=t=>(ie(t)||j(t))&&j(t.then)&&j(t.catch),ja=Object.prototype.toString,zr=t=>ja.call(t),mu=t=>zr(t).slice(8,-1),Wa=t=>zr(t)==="[object Object]",_i=t=>fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,pr=pi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Kr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},gu=/-(\w)/g,et=Kr(t=>t.replace(gu,(e,n)=>n?n.toUpperCase():"")),_u=/\B([A-Z])/g,mn=Kr(t=>t.replace(_u,"-$1").toLowerCase()),qr=Kr(t=>t.charAt(0).toUpperCase()+t.slice(1)),hs=Kr(t=>t?`on${qr(t)}`:""),Ht=(t,e)=>!Object.is(t,e),mr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Cr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ms=t=>{const e=parseFloat(t);return isNaN(e)?t:e},yu=t=>{const e=fe(t)?Number(t):NaN;return isNaN(e)?t:e};let io;const Ls=()=>io||(io=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function yi(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=fe(r)?wu(r):yi(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(fe(t)||ie(t))return t}const bu=/;(?![^(]*\))/g,vu=/:([^]+)/,Eu=/\/\*[^]*?\*\//g;function wu(t){const e={};return t.replace(Eu,"").split(bu).forEach(n=>{if(n){const r=n.split(vu);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function bi(t){let e="";if(fe(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const r=bi(t[n]);r&&(e+=r+" ")}else if(ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Iu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tu=pi(Iu);function Va(t){return!!t||t===""}const On=t=>fe(t)?t:t==null?"":H(t)||ie(t)&&(t.toString===ja||!j(t.toString))?JSON.stringify(t,za,2):String(t),za=(t,e)=>e&&e.__v_isRef?za(t,e.value):Qt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Ha(e)?{[`Set(${e.size})`]:[...e.values()]}:ie(e)&&!H(e)&&!Wa(e)?String(e):e;let Le;class Ru{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Le,!e&&Le&&(this.index=(Le.scopes||(Le.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Le;try{return Le=this,e()}finally{Le=n}}}on(){Le=this}off(){Le=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Su(t,e=Le){e&&e.active&&e.effects.push(t)}function Au(){return Le}const vi=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ka=t=>(t.w&Ct)>0,qa=t=>(t.n&Ct)>0,Cu=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ct},Ou=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Ka(s)&&!qa(s)?s.delete(t):e[n++]=s,s.w&=~Ct,s.n&=~Ct}e.length=n}},Us=new WeakMap;let Rn=0,Ct=1;const Bs=30;let Fe;const Ut=Symbol(""),Fs=Symbol("");class Ei{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Su(this,r)}run(){if(!this.active)return this.fn();let e=Fe,n=Tt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Fe,Fe=this,Tt=!0,Ct=1<<++Rn,Rn<=Bs?Cu(this):oo(this),this.fn()}finally{Rn<=Bs&&Ou(this),Ct=1<<--Rn,Fe=this.parent,Tt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Fe===this?this.deferStop=!0:this.active&&(oo(this),this.onStop&&this.onStop(),this.active=!1)}}function oo(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Tt=!0;const Ja=[];function gn(){Ja.push(Tt),Tt=!1}function _n(){const t=Ja.pop();Tt=t===void 0?!0:t}function Re(t,e,n){if(Tt&&Fe){let r=Us.get(t);r||Us.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=vi()),Ga(s)}}function Ga(t,e){let n=!1;Rn<=Bs?qa(t)||(t.n|=Ct,n=!Ka(t)):n=!t.has(Fe),n&&(t.add(Fe),Fe.deps.push(t))}function ct(t,e,n,r,s,i){const o=Us.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t)){const c=Number(r);o.forEach((l,f)=>{(f==="length"||!Vr(f)&&f>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?_i(n)&&a.push(o.get("length")):(a.push(o.get(Ut)),Qt(t)&&a.push(o.get(Fs)));break;case"delete":H(t)||(a.push(o.get(Ut)),Qt(t)&&a.push(o.get(Fs)));break;case"set":Qt(t)&&a.push(o.get(Ut));break}if(a.length===1)a[0]&&Hs(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Hs(vi(c))}}function Hs(t,e){const n=H(t)?t:[...t];for(const r of n)r.computed&&ao(r);for(const r of n)r.computed||ao(r)}function ao(t,e){(t!==Fe||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Pu=pi("__proto__,__v_isRef,__isVue"),Ya=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Vr)),co=ku();function ku(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=G(this);for(let i=0,o=this.length;i<o;i++)Re(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(G)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){gn();const r=G(this)[e].apply(this,n);return _n(),r}}),t}function Nu(t){const e=G(this);return Re(e,"has",t),e.hasOwnProperty(t)}class Xa{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(s?i?zu:tc:i?ec:Za).get(e))return e;const o=H(e);if(!s){if(o&&K(co,n))return Reflect.get(co,n,r);if(n==="hasOwnProperty")return Nu}const a=Reflect.get(e,n,r);return(Vr(n)?Ya.has(n):Pu(n))||(s||Re(e,"get",n),i)?a:ve(a)?o&&_i(n)?a:a.value:ie(a)?s?rc(a):Gr(a):a}}class Qa extends Xa{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(on(i)&&ve(i)&&!ve(r))return!1;if(!this._shallow&&(!Or(r)&&!on(r)&&(i=G(i),r=G(r)),!H(e)&&ve(i)&&!ve(r)))return i.value=r,!0;const o=H(e)&&_i(n)?Number(n)<e.length:K(e,n),a=Reflect.set(e,n,r,s);return e===G(s)&&(o?Ht(r,i)&&ct(e,"set",n,r):ct(e,"add",n,r)),a}deleteProperty(e,n){const r=K(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&ct(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Vr(n)||!Ya.has(n))&&Re(e,"has",n),r}ownKeys(e){return Re(e,"iterate",H(e)?"length":Ut),Reflect.ownKeys(e)}}class xu extends Xa{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Du=new Qa,Mu=new xu,Lu=new Qa(!0),wi=t=>t,Jr=t=>Reflect.getPrototypeOf(t);function ar(t,e,n=!1,r=!1){t=t.__v_raw;const s=G(t),i=G(e);n||(Ht(e,i)&&Re(s,"get",e),Re(s,"get",i));const{has:o}=Jr(s),a=r?wi:n?Ri:Ln;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function cr(t,e=!1){const n=this.__v_raw,r=G(n),s=G(t);return e||(Ht(t,s)&&Re(r,"has",t),Re(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function lr(t,e=!1){return t=t.__v_raw,!e&&Re(G(t),"iterate",Ut),Reflect.get(t,"size",t)}function lo(t){t=G(t);const e=G(this);return Jr(e).has.call(e,t)||(e.add(t),ct(e,"add",t,t)),this}function uo(t,e){e=G(e);const n=G(this),{has:r,get:s}=Jr(n);let i=r.call(n,t);i||(t=G(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Ht(e,o)&&ct(n,"set",t,e):ct(n,"add",t,e),this}function fo(t){const e=G(this),{has:n,get:r}=Jr(e);let s=n.call(e,t);s||(t=G(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&ct(e,"delete",t,void 0),i}function ho(){const t=G(this),e=t.size!==0,n=t.clear();return e&&ct(t,"clear",void 0,void 0),n}function ur(t,e){return function(r,s){const i=this,o=i.__v_raw,a=G(o),c=e?wi:t?Ri:Ln;return!t&&Re(a,"iterate",Ut),o.forEach((l,f)=>r.call(s,c(l),c(f),i))}}function fr(t,e,n){return function(...r){const s=this.__v_raw,i=G(s),o=Qt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),f=n?wi:e?Ri:Ln;return!e&&Re(i,"iterate",c?Fs:Ut),{next(){const{value:u,done:p}=l.next();return p?{value:u,done:p}:{value:a?[f(u[0]),f(u[1])]:f(u),done:p}},[Symbol.iterator](){return this}}}}function ht(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Uu(){const t={get(i){return ar(this,i)},get size(){return lr(this)},has:cr,add:lo,set:uo,delete:fo,clear:ho,forEach:ur(!1,!1)},e={get(i){return ar(this,i,!1,!0)},get size(){return lr(this)},has:cr,add:lo,set:uo,delete:fo,clear:ho,forEach:ur(!1,!0)},n={get(i){return ar(this,i,!0)},get size(){return lr(this,!0)},has(i){return cr.call(this,i,!0)},add:ht("add"),set:ht("set"),delete:ht("delete"),clear:ht("clear"),forEach:ur(!0,!1)},r={get(i){return ar(this,i,!0,!0)},get size(){return lr(this,!0)},has(i){return cr.call(this,i,!0)},add:ht("add"),set:ht("set"),delete:ht("delete"),clear:ht("clear"),forEach:ur(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=fr(i,!1,!1),n[i]=fr(i,!0,!1),e[i]=fr(i,!1,!0),r[i]=fr(i,!0,!0)}),[t,n,e,r]}const[Bu,Fu,Hu,$u]=Uu();function Ii(t,e){const n=e?t?$u:Hu:t?Fu:Bu;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(K(n,s)&&s in r?n:r,s,i)}const ju={get:Ii(!1,!1)},Wu={get:Ii(!1,!0)},Vu={get:Ii(!0,!1)},Za=new WeakMap,ec=new WeakMap,tc=new WeakMap,zu=new WeakMap;function Ku(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qu(t){return t.__v_skip||!Object.isExtensible(t)?0:Ku(mu(t))}function Gr(t){return on(t)?t:Ti(t,!1,Du,ju,Za)}function nc(t){return Ti(t,!1,Lu,Wu,ec)}function rc(t){return Ti(t,!0,Mu,Vu,tc)}function Ti(t,e,n,r,s){if(!ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=qu(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Zt(t){return on(t)?Zt(t.__v_raw):!!(t&&t.__v_isReactive)}function on(t){return!!(t&&t.__v_isReadonly)}function Or(t){return!!(t&&t.__v_isShallow)}function sc(t){return Zt(t)||on(t)}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function ic(t){return Cr(t,"__v_skip",!0),t}const Ln=t=>ie(t)?Gr(t):t,Ri=t=>ie(t)?rc(t):t;function oc(t){Tt&&Fe&&(t=G(t),Ga(t.dep||(t.dep=vi())))}function ac(t,e){t=G(t);const n=t.dep;n&&Hs(n)}function ve(t){return!!(t&&t.__v_isRef===!0)}function tt(t){return cc(t,!1)}function Ju(t){return cc(t,!0)}function cc(t,e){return ve(t)?t:new Gu(t,e)}class Gu{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:G(e),this._value=n?e:Ln(e)}get value(){return oc(this),this._value}set value(e){const n=this.__v_isShallow||Or(e)||on(e);e=n?e:G(e),Ht(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ln(e),ac(this))}}function Ae(t){return ve(t)?t.value:t}const Yu={get:(t,e,n)=>Ae(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ve(s)&&!ve(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function lc(t){return Zt(t)?t:new Proxy(t,Yu)}class Xu{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ei(e,()=>{this._dirty||(this._dirty=!0,ac(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=G(this);return oc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Qu(t,e,n=!1){let r,s;const i=j(t);return i?(r=t,s=He):(r=t.get,s=t.set),new Xu(r,s,i||!s,n)}function Rt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Jn(i,e,n)}return s}function $e(t,e,n,r){if(j(t)){const i=Rt(t,e,n,r);return i&&$a(i)&&i.catch(o=>{Jn(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push($e(t[i],e,n,r));return s}function Jn(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Rt(c,null,10,[t,o,a]);return}}Zu(t,n,s,r)}function Zu(t,e,n,r=!0){console.error(t)}let Un=!1,$s=!1;const be=[];let Ye=0;const en=[];let it=null,Dt=0;const uc=Promise.resolve();let Si=null;function fc(t){const e=Si||uc;return t?e.then(this?t.bind(this):t):e}function ef(t){let e=Ye+1,n=be.length;for(;e<n;){const r=e+n>>>1,s=be[r],i=Bn(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Ai(t){(!be.length||!be.includes(t,Un&&t.allowRecurse?Ye+1:Ye))&&(t.id==null?be.push(t):be.splice(ef(t.id),0,t),dc())}function dc(){!Un&&!$s&&($s=!0,Si=uc.then(pc))}function tf(t){const e=be.indexOf(t);e>Ye&&be.splice(e,1)}function js(t){H(t)?en.push(...t):(!it||!it.includes(t,t.allowRecurse?Dt+1:Dt))&&en.push(t),dc()}function po(t,e=Un?Ye+1:0){for(;e<be.length;e++){const n=be[e];n&&n.pre&&(be.splice(e,1),e--,n())}}function hc(t){if(en.length){const e=[...new Set(en)];if(en.length=0,it){it.push(...e);return}for(it=e,it.sort((n,r)=>Bn(n)-Bn(r)),Dt=0;Dt<it.length;Dt++)it[Dt]();it=null,Dt=0}}const Bn=t=>t.id==null?1/0:t.id,nf=(t,e)=>{const n=Bn(t)-Bn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function pc(t){$s=!1,Un=!0,be.sort(nf);const e=He;try{for(Ye=0;Ye<be.length;Ye++){const n=be[Ye];n&&n.active!==!1&&Rt(n,null,14)}}finally{Ye=0,be.length=0,hc(),Un=!1,Si=null,(be.length||en.length)&&pc()}}function rf(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||se;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:u,trim:p}=r[f]||se;p&&(s=n.map(g=>fe(g)?g.trim():g)),u&&(s=n.map(Ms))}let a,c=r[a=hs(e)]||r[a=hs(et(e))];!c&&i&&(c=r[a=hs(mn(e))]),c&&$e(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,$e(l,t,6,s)}}function mc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!j(t)){const c=l=>{const f=mc(l,e,!0);f&&(a=!0,ge(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ie(t)&&r.set(t,null),null):(H(i)?i.forEach(c=>o[c]=null):ge(o,i),ie(t)&&r.set(t,o),o)}function Yr(t,e){return!t||!Wr(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(t,e[0].toLowerCase()+e.slice(1))||K(t,mn(e))||K(t,e))}let Ne=null,Xr=null;function Pr(t){const e=Ne;return Ne=t,Xr=t&&t.type.__scopeId||null,e}function gc(t){Xr=t}function _c(){Xr=null}function Pn(t,e=Ne,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&So(-1);const i=Pr(e);let o;try{o=t(...s)}finally{Pr(i),r._d&&So(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ps(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:f,renderCache:u,data:p,setupState:g,ctx:_,inheritAttrs:v}=t;let k,O;const N=Pr(t);try{if(n.shapeFlag&4){const R=s||r,F=R;k=Be(f.call(F,R,u,i,g,p,_)),O=c}else{const R=e;k=Be(R.length>1?R(i,{attrs:c,slots:a,emit:l}):R(i,null)),O=e.props?c:of(c)}}catch(R){Nn.length=0,Jn(R,t,1),k=he($t)}let B=k;if(O&&v!==!1){const R=Object.keys(O),{shapeFlag:F}=B;R.length&&F&7&&(o&&R.some(mi)&&(O=af(O,o)),B=cn(B,O))}return n.dirs&&(B=cn(B),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&(B.transition=n.transition),k=B,Pr(N),k}function sf(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(xr(r)){if(r.type!==$t||r.children==="v-if"){if(e)return;e=r}}else return}return e}const of=t=>{let e;for(const n in t)(n==="class"||n==="style"||Wr(n))&&((e||(e={}))[n]=t[n]);return e},af=(t,e)=>{const n={};for(const r in t)(!mi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function cf(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?mo(r,o,l):!!o;if(c&8){const f=e.dynamicProps;for(let u=0;u<f.length;u++){const p=f[u];if(o[p]!==r[p]&&!Yr(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?mo(r,o,l):!0:!!o;return!1}function mo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Yr(n,i))return!0}return!1}function Ci({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const yc="components";function bc(t,e){return uf(yc,t,!0,e)||t}const lf=Symbol.for("v-ndc");function uf(t,e,n=!0,r=!1){const s=Ne||me;if(s){const i=s.type;if(t===yc){const a=cd(i,!1);if(a&&(a===e||a===et(e)||a===qr(et(e))))return i}const o=go(s[t]||i[t],e)||go(s.appContext[t],e);return!o&&r?i:o}}function go(t,e){return t&&(t[e]||t[et(e)]||t[qr(et(e))])}const ff=t=>t.__isSuspense,df={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,c,l){t==null?pf(e,n,r,s,i,o,a,c,l):mf(t,e,n,r,s,o,a,c,l)},hydrate:gf,create:Oi,normalize:_f},hf=df;function Fn(t,e){const n=t.props&&t.props[e];j(n)&&n()}function pf(t,e,n,r,s,i,o,a,c){const{p:l,o:{createElement:f}}=c,u=f("div"),p=t.suspense=Oi(t,s,r,e,u,n,i,o,a,c);l(null,p.pendingBranch=t.ssContent,u,null,r,p,i,o),p.deps>0?(Fn(t,"onPending"),Fn(t,"onFallback"),l(null,t.ssFallback,e,n,r,null,i,o),tn(p,t.ssFallback)):p.resolve(!1,!0)}function mf(t,e,n,r,s,i,o,a,{p:c,um:l,o:{createElement:f}}){const u=e.suspense=t.suspense;u.vnode=e,e.el=t.el;const p=e.ssContent,g=e.ssFallback,{activeBranch:_,pendingBranch:v,isInFallback:k,isHydrating:O}=u;if(v)u.pendingBranch=p,bt(p,v)?(c(v,p,u.hiddenContainer,null,s,u,i,o,a),u.deps<=0?u.resolve():k&&(c(_,g,n,r,s,null,i,o,a),tn(u,g))):(u.pendingId++,O?(u.isHydrating=!1,u.activeBranch=v):l(v,s,u),u.deps=0,u.effects.length=0,u.hiddenContainer=f("div"),k?(c(null,p,u.hiddenContainer,null,s,u,i,o,a),u.deps<=0?u.resolve():(c(_,g,n,r,s,null,i,o,a),tn(u,g))):_&&bt(p,_)?(c(_,p,n,r,s,u,i,o,a),u.resolve(!0)):(c(null,p,u.hiddenContainer,null,s,u,i,o,a),u.deps<=0&&u.resolve()));else if(_&&bt(p,_))c(_,p,n,r,s,u,i,o,a),tn(u,p);else if(Fn(e,"onPending"),u.pendingBranch=p,u.pendingId++,c(null,p,u.hiddenContainer,null,s,u,i,o,a),u.deps<=0)u.resolve();else{const{timeout:N,pendingId:B}=u;N>0?setTimeout(()=>{u.pendingId===B&&u.fallback(g)},N):N===0&&u.fallback(g)}}function Oi(t,e,n,r,s,i,o,a,c,l,f=!1){const{p:u,m:p,um:g,n:_,o:{parentNode:v,remove:k}}=l;let O;const N=bf(t);N&&e!=null&&e.pendingBranch&&(O=e.pendingId,e.deps++);const B=t.props?yu(t.props.timeout):void 0,R={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:s,anchor:i,deps:0,pendingId:0,timeout:typeof B=="number"?B:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:f,isUnmounted:!1,effects:[],resolve(F=!1,q=!1){const{vnode:re,activeBranch:ee,pendingBranch:oe,pendingId:le,effects:pe,parentComponent:Oe,container:_e}=R;let Ke=!1;if(R.isHydrating)R.isHydrating=!1;else if(!F){Ke=ee&&oe.transition&&oe.transition.mode==="out-in",Ke&&(ee.transition.afterLeave=()=>{le===R.pendingId&&(p(oe,_e,J,0),js(pe))});let{anchor:J}=R;ee&&(J=_(ee),g(ee,Oe,R,!0)),Ke||p(oe,_e,J,0)}tn(R,oe),R.pendingBranch=null,R.isInFallback=!1;let Pe=R.parent,ce=!1;for(;Pe;){if(Pe.pendingBranch){Pe.effects.push(...pe),ce=!0;break}Pe=Pe.parent}!ce&&!Ke&&js(pe),R.effects=[],N&&e&&e.pendingBranch&&O===e.pendingId&&(e.deps--,e.deps===0&&!q&&e.resolve()),Fn(re,"onResolve")},fallback(F){if(!R.pendingBranch)return;const{vnode:q,activeBranch:re,parentComponent:ee,container:oe,isSVG:le}=R;Fn(q,"onFallback");const pe=_(re),Oe=()=>{!R.isInFallback||(u(null,F,oe,pe,ee,null,le,a,c),tn(R,F))},_e=F.transition&&F.transition.mode==="out-in";_e&&(re.transition.afterLeave=Oe),R.isInFallback=!0,g(re,ee,null,!0),_e||Oe()},move(F,q,re){R.activeBranch&&p(R.activeBranch,F,q,re),R.container=F},next(){return R.activeBranch&&_(R.activeBranch)},registerDep(F,q){const re=!!R.pendingBranch;re&&R.deps++;const ee=F.vnode.el;F.asyncDep.catch(oe=>{Jn(oe,F,0)}).then(oe=>{if(F.isUnmounted||R.isUnmounted||R.pendingId!==F.suspenseId)return;F.asyncResolved=!0;const{vnode:le}=F;Gs(F,oe,!1),ee&&(le.el=ee);const pe=!ee&&F.subTree.el;q(F,le,v(ee||F.subTree.el),ee?null:_(F.subTree),R,o,c),pe&&k(pe),Ci(F,le.el),re&&--R.deps===0&&R.resolve()})},unmount(F,q){R.isUnmounted=!0,R.activeBranch&&g(R.activeBranch,n,F,q),R.pendingBranch&&g(R.pendingBranch,n,F,q)}};return R}function gf(t,e,n,r,s,i,o,a,c){const l=e.suspense=Oi(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),f=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(!1,!0),f}function _f(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=_o(r?n.default:n),t.ssFallback=r?_o(n.fallback):he($t)}function _o(t){let e;if(j(t)){const n=an&&t._c;n&&(t._d=!1,Ce()),t=t(),n&&(t._d=!0,e=xe,Mc())}return H(t)&&(t=sf(t)),t=Be(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function yf(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):js(t)}function tn(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,s=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=s,Ci(r,s))}function bf(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}const dr={};function gr(t,e,n){return vc(t,e,n)}function vc(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=se){var a;const c=Au()===((a=me)==null?void 0:a.scope)?me:null;let l,f=!1,u=!1;if(ve(t)?(l=()=>t.value,f=Or(t)):Zt(t)?(l=()=>t,r=!0):H(t)?(u=!0,f=t.some(R=>Zt(R)||Or(R)),l=()=>t.map(R=>{if(ve(R))return R.value;if(Zt(R))return Lt(R);if(j(R))return Rt(R,c,2)})):j(t)?e?l=()=>Rt(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return p&&p(),$e(t,c,3,[g])}:l=He,e&&r){const R=l;l=()=>Lt(R())}let p,g=R=>{p=N.onStop=()=>{Rt(R,c,4),p=N.onStop=void 0}},_;if(Hn)if(g=He,e?n&&$e(e,c,3,[l(),u?[]:void 0,g]):l(),s==="sync"){const R=fd();_=R.__watcherHandles||(R.__watcherHandles=[])}else return He;let v=u?new Array(t.length).fill(dr):dr;const k=()=>{if(!!N.active)if(e){const R=N.run();(r||f||(u?R.some((F,q)=>Ht(F,v[q])):Ht(R,v)))&&(p&&p(),$e(e,c,3,[R,v===dr?void 0:u&&v[0]===dr?[]:v,g]),v=R)}else N.run()};k.allowRecurse=!!e;let O;s==="sync"?O=k:s==="post"?O=()=>Te(k,c&&c.suspense):(k.pre=!0,c&&(k.id=c.uid),O=()=>Ai(k));const N=new Ei(l,O);e?n?k():v=N.run():s==="post"?Te(N.run.bind(N),c&&c.suspense):N.run();const B=()=>{N.stop(),c&&c.scope&&gi(c.scope.effects,N)};return _&&_.push(B),B}function vf(t,e,n){const r=this.proxy,s=fe(t)?t.includes(".")?Ec(r,t):()=>r[t]:t.bind(r,r);let i;j(e)?i=e:(i=e.handler,n=e);const o=me;ln(this);const a=vc(s,i.bind(r),n);return o?ln(o):Bt(),a}function Ec(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Lt(t,e){if(!ie(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ve(t))Lt(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)Lt(t[n],e);else if(Ha(t)||Qt(t))t.forEach(n=>{Lt(n,e)});else if(Wa(t))for(const n in t)Lt(t[n],e);return t}function Ws(t,e){const n=Ne;if(n===null)return t;const r=ts(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=se]=e[i];o&&(j(o)&&(o={mounted:o,updated:o}),o.deep&&Lt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function kt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(gn(),$e(c,n,8,[t.el,a,t,e]),_n())}}/*! #__NO_SIDE_EFFECTS__ */function wc(t,e){return j(t)?(()=>ge({name:t.name},e,{setup:t}))():t}const _r=t=>!!t.type.__asyncLoader,Ic=t=>t.type.__isKeepAlive;function Ef(t,e){Tc(t,"a",e)}function wf(t,e){Tc(t,"da",e)}function Tc(t,e,n=me){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Qr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ic(s.parent.vnode)&&If(r,e,n,s),s=s.parent}}function If(t,e,n,r){const s=Qr(e,t,r,!0);Sc(()=>{gi(r[e],s)},n)}function Qr(t,e,n=me,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;gn(),ln(n);const a=$e(e,n,t,o);return Bt(),_n(),a});return r?s.unshift(i):s.push(i),i}}const ft=t=>(e,n=me)=>(!Hn||t==="sp")&&Qr(t,(...r)=>e(...r),n),Tf=ft("bm"),Rc=ft("m"),Rf=ft("bu"),Sf=ft("u"),Af=ft("bum"),Sc=ft("um"),Cf=ft("sp"),Of=ft("rtg"),Pf=ft("rtc");function kf(t,e=me){Qr("ec",t,e)}function Nf(t,e,n,r){let s;const i=n&&n[r];if(H(t)||fe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ie(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Vs=t=>t?Bc(t)?ts(t)||t.proxy:Vs(t.parent):null,kn=ge(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Vs(t.parent),$root:t=>Vs(t.root),$emit:t=>t.emit,$options:t=>Pi(t),$forceUpdate:t=>t.f||(t.f=()=>Ai(t.update)),$nextTick:t=>t.n||(t.n=fc.bind(t.proxy)),$watch:t=>vf.bind(t)}),ms=(t,e)=>t!==se&&!t.__isScriptSetup&&K(t,e),xf={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ms(r,e))return o[e]=1,r[e];if(s!==se&&K(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&K(l,e))return o[e]=3,i[e];if(n!==se&&K(n,e))return o[e]=4,n[e];zs&&(o[e]=0)}}const f=kn[e];let u,p;if(f)return e==="$attrs"&&Re(t,"get",e),f(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==se&&K(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,K(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ms(s,e)?(s[e]=n,!0):r!==se&&K(r,e)?(r[e]=n,!0):K(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==se&&K(t,o)||ms(e,o)||(a=i[0])&&K(a,o)||K(r,o)||K(kn,o)||K(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:K(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function yo(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let zs=!0;function Df(t){const e=Pi(t),n=t.proxy,r=t.ctx;zs=!1,e.beforeCreate&&bo(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:f,beforeMount:u,mounted:p,beforeUpdate:g,updated:_,activated:v,deactivated:k,beforeDestroy:O,beforeUnmount:N,destroyed:B,unmounted:R,render:F,renderTracked:q,renderTriggered:re,errorCaptured:ee,serverPrefetch:oe,expose:le,inheritAttrs:pe,components:Oe,directives:_e,filters:Ke}=e;if(l&&Mf(l,r,null),o)for(const J in o){const Y=o[J];j(Y)&&(r[J]=Y.bind(n))}if(s){const J=s.call(n,n);ie(J)&&(t.data=Gr(J))}if(zs=!0,i)for(const J in i){const Y=i[J],rt=j(Y)?Y.bind(n,n):j(Y.get)?Y.get.bind(n,n):He,dt=!j(Y)&&j(Y.set)?Y.set.bind(n):He,qe=ke({get:rt,set:dt});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>qe.value,set:Ie=>qe.value=Ie})}if(a)for(const J in a)Ac(a[J],r,n,J);if(c){const J=j(c)?c.call(n):c;Reflect.ownKeys(J).forEach(Y=>{yr(Y,J[Y])})}f&&bo(f,t,"c");function ce(J,Y){H(Y)?Y.forEach(rt=>J(rt.bind(n))):Y&&J(Y.bind(n))}if(ce(Tf,u),ce(Rc,p),ce(Rf,g),ce(Sf,_),ce(Ef,v),ce(wf,k),ce(kf,ee),ce(Pf,q),ce(Of,re),ce(Af,N),ce(Sc,R),ce(Cf,oe),H(le))if(le.length){const J=t.exposed||(t.exposed={});le.forEach(Y=>{Object.defineProperty(J,Y,{get:()=>n[Y],set:rt=>n[Y]=rt})})}else t.exposed||(t.exposed={});F&&t.render===He&&(t.render=F),pe!=null&&(t.inheritAttrs=pe),Oe&&(t.components=Oe),_e&&(t.directives=_e)}function Mf(t,e,n=He){H(t)&&(t=Ks(t));for(const r in t){const s=t[r];let i;ie(s)?"default"in s?i=je(s.from||r,s.default,!0):i=je(s.from||r):i=je(s),ve(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function bo(t,e,n){$e(H(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ac(t,e,n,r){const s=r.includes(".")?Ec(n,r):()=>n[r];if(fe(t)){const i=e[t];j(i)&&gr(s,i)}else if(j(t))gr(s,t.bind(n));else if(ie(t))if(H(t))t.forEach(i=>Ac(i,e,n,r));else{const i=j(t.handler)?t.handler.bind(n):e[t.handler];j(i)&&gr(s,i,t)}}function Pi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>kr(c,l,o,!0)),kr(c,e,o)),ie(e)&&i.set(e,c),c}function kr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&kr(t,i,n,!0),s&&s.forEach(o=>kr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Lf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Lf={data:vo,props:Eo,emits:Eo,methods:Sn,computed:Sn,beforeCreate:we,created:we,beforeMount:we,mounted:we,beforeUpdate:we,updated:we,beforeDestroy:we,beforeUnmount:we,destroyed:we,unmounted:we,activated:we,deactivated:we,errorCaptured:we,serverPrefetch:we,components:Sn,directives:Sn,watch:Bf,provide:vo,inject:Uf};function vo(t,e){return e?t?function(){return ge(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function Uf(t,e){return Sn(Ks(t),Ks(e))}function Ks(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function we(t,e){return t?[...new Set([].concat(t,e))]:e}function Sn(t,e){return t?ge(Object.create(null),t,e):e}function Eo(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:ge(Object.create(null),yo(t),yo(e!=null?e:{})):e}function Bf(t,e){if(!t)return e;if(!e)return t;const n=ge(Object.create(null),t);for(const r in e)n[r]=we(t[r],e[r]);return n}function Cc(){return{app:null,config:{isNativeTag:du,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ff=0;function Hf(t,e){return function(r,s=null){j(r)||(r=ge({},r)),s!=null&&!ie(s)&&(s=null);const i=Cc(),o=new WeakSet;let a=!1;const c=i.app={_uid:Ff++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:dd,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&j(l.install)?(o.add(l),l.install(c,...f)):j(l)&&(o.add(l),l(c,...f))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,f){return f?(i.components[l]=f,c):i.components[l]},directive(l,f){return f?(i.directives[l]=f,c):i.directives[l]},mount(l,f,u){if(!a){const p=he(r,s);return p.appContext=i,f&&e?e(p,l):t(p,l,u),a=!0,c._container=l,l.__vue_app__=c,ts(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,f){return i.provides[l]=f,c},runWithContext(l){Nr=c;try{return l()}finally{Nr=null}}};return c}}let Nr=null;function yr(t,e){if(me){let n=me.provides;const r=me.parent&&me.parent.provides;r===n&&(n=me.provides=Object.create(r)),n[t]=e}}function je(t,e,n=!1){const r=me||Ne;if(r||Nr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Nr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&j(e)?e.call(r&&r.proxy):e}}function $f(t,e,n,r=!1){const s={},i={};Cr(i,es,1),t.propsDefaults=Object.create(null),Oc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:nc(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function jf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=G(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let u=0;u<f.length;u++){let p=f[u];if(Yr(t.emitsOptions,p))continue;const g=e[p];if(c)if(K(i,p))g!==i[p]&&(i[p]=g,l=!0);else{const _=et(p);s[_]=qs(c,a,_,g,t,!1)}else g!==i[p]&&(i[p]=g,l=!0)}}}else{Oc(t,e,s,i)&&(l=!0);let f;for(const u in a)(!e||!K(e,u)&&((f=mn(u))===u||!K(e,f)))&&(c?n&&(n[u]!==void 0||n[f]!==void 0)&&(s[u]=qs(c,a,u,void 0,t,!0)):delete s[u]);if(i!==a)for(const u in i)(!e||!K(e,u)&&!0)&&(delete i[u],l=!0)}l&&ct(t,"set","$attrs")}function Oc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(pr(c))continue;const l=e[c];let f;s&&K(s,f=et(c))?!i||!i.includes(f)?n[f]=l:(a||(a={}))[f]=l:Yr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=G(n),l=a||se;for(let f=0;f<i.length;f++){const u=i[f];n[u]=qs(s,c,u,l[u],t,!K(l,u))}}return o}function qs(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=K(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&j(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(ln(s),r=l[n]=c.call(null,e),Bt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===mn(n))&&(r=!0))}return r}function Pc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!j(t)){const f=u=>{c=!0;const[p,g]=Pc(u,e,!0);ge(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return ie(t)&&r.set(t,Xt),Xt;if(H(i))for(let f=0;f<i.length;f++){const u=et(i[f]);wo(u)&&(o[u]=se)}else if(i)for(const f in i){const u=et(f);if(wo(u)){const p=i[f],g=o[u]=H(p)||j(p)?{type:p}:ge({},p);if(g){const _=Ro(Boolean,g.type),v=Ro(String,g.type);g[0]=_>-1,g[1]=v<0||_<v,(_>-1||K(g,"default"))&&a.push(u)}}}const l=[o,a];return ie(t)&&r.set(t,l),l}function wo(t){return t[0]!=="$"}function Io(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function To(t,e){return Io(t)===Io(e)}function Ro(t,e){return H(e)?e.findIndex(n=>To(n,t)):j(e)&&To(e,t)?0:-1}const kc=t=>t[0]==="_"||t==="$stable",ki=t=>H(t)?t.map(Be):[Be(t)],Wf=(t,e,n)=>{if(e._n)return e;const r=Pn((...s)=>ki(e(...s)),n);return r._c=!1,r},Nc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(kc(s))continue;const i=t[s];if(j(i))e[s]=Wf(s,i,r);else if(i!=null){const o=ki(i);e[s]=()=>o}}},xc=(t,e)=>{const n=ki(e);t.slots.default=()=>n},Vf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=G(e),Cr(e,"_",n)):Nc(e,t.slots={})}else t.slots={},e&&xc(t,e);Cr(t.slots,es,1)},zf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=se;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ge(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Nc(e,s)),o=e}else e&&(xc(t,e),o={default:1});if(i)for(const a in s)!kc(a)&&o[a]==null&&delete s[a]};function Js(t,e,n,r,s=!1){if(H(t)){t.forEach((p,g)=>Js(p,e&&(H(e)?e[g]:e),n,r,s));return}if(_r(r)&&!s)return;const i=r.shapeFlag&4?ts(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,f=a.refs===se?a.refs={}:a.refs,u=a.setupState;if(l!=null&&l!==c&&(fe(l)?(f[l]=null,K(u,l)&&(u[l]=null)):ve(l)&&(l.value=null)),j(c))Rt(c,a,12,[o,f]);else{const p=fe(c),g=ve(c);if(p||g){const _=()=>{if(t.f){const v=p?K(u,c)?u[c]:f[c]:c.value;s?H(v)&&gi(v,i):H(v)?v.includes(i)||v.push(i):p?(f[c]=[i],K(u,c)&&(u[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else p?(f[c]=o,K(u,c)&&(u[c]=o)):g&&(c.value=o,t.k&&(f[t.k]=o))};o?(_.id=-1,Te(_,n)):_()}}}const Te=yf;function Kf(t){return qf(t)}function qf(t,e){const n=Ls();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:u,nextSibling:p,setScopeId:g=He,insertStaticContent:_}=t,v=(d,h,m,y=null,w=null,I=null,P=!1,S=null,A=!!h.dynamicChildren)=>{if(d===h)return;d&&!bt(d,h)&&(y=E(d),Ie(d,w,I,!0),d=null),h.patchFlag===-2&&(A=!1,h.dynamicChildren=null);const{type:T,ref:L,shapeFlag:D}=h;switch(T){case Zr:k(d,h,m,y);break;case $t:O(d,h,m,y);break;case gs:d==null&&N(h,m,y,P);break;case Ue:Oe(d,h,m,y,w,I,P,S,A);break;default:D&1?F(d,h,m,y,w,I,P,S,A):D&6?_e(d,h,m,y,w,I,P,S,A):(D&64||D&128)&&T.process(d,h,m,y,w,I,P,S,A,C)}L!=null&&w&&Js(L,d&&d.ref,I,h||d,!h)},k=(d,h,m,y)=>{if(d==null)r(h.el=a(h.children),m,y);else{const w=h.el=d.el;h.children!==d.children&&l(w,h.children)}},O=(d,h,m,y)=>{d==null?r(h.el=c(h.children||""),m,y):h.el=d.el},N=(d,h,m,y)=>{[d.el,d.anchor]=_(d.children,h,m,y,d.el,d.anchor)},B=({el:d,anchor:h},m,y)=>{let w;for(;d&&d!==h;)w=p(d),r(d,m,y),d=w;r(h,m,y)},R=({el:d,anchor:h})=>{let m;for(;d&&d!==h;)m=p(d),s(d),d=m;s(h)},F=(d,h,m,y,w,I,P,S,A)=>{P=P||h.type==="svg",d==null?q(h,m,y,w,I,P,S,A):oe(d,h,w,I,P,S,A)},q=(d,h,m,y,w,I,P,S)=>{let A,T;const{type:L,props:D,shapeFlag:U,transition:W,dirs:V}=d;if(A=d.el=o(d.type,I,D&&D.is,D),U&8?f(A,d.children):U&16&&ee(d.children,A,null,y,w,I&&L!=="foreignObject",P,S),V&&kt(d,null,y,"created"),re(A,d,d.scopeId,P,y),D){for(const Z in D)Z!=="value"&&!pr(Z)&&i(A,Z,null,D[Z],I,d.children,y,w,ye);"value"in D&&i(A,"value",null,D.value),(T=D.onVnodeBeforeMount)&&Ge(T,y,d)}V&&kt(d,null,y,"beforeMount");const ne=Jf(w,W);ne&&W.beforeEnter(A),r(A,h,m),((T=D&&D.onVnodeMounted)||ne||V)&&Te(()=>{T&&Ge(T,y,d),ne&&W.enter(A),V&&kt(d,null,y,"mounted")},w)},re=(d,h,m,y,w)=>{if(m&&g(d,m),y)for(let I=0;I<y.length;I++)g(d,y[I]);if(w){let I=w.subTree;if(h===I){const P=w.vnode;re(d,P,P.scopeId,P.slotScopeIds,w.parent)}}},ee=(d,h,m,y,w,I,P,S,A=0)=>{for(let T=A;T<d.length;T++){const L=d[T]=S?_t(d[T]):Be(d[T]);v(null,L,h,m,y,w,I,P,S)}},oe=(d,h,m,y,w,I,P)=>{const S=h.el=d.el;let{patchFlag:A,dynamicChildren:T,dirs:L}=h;A|=d.patchFlag&16;const D=d.props||se,U=h.props||se;let W;m&&Nt(m,!1),(W=U.onVnodeBeforeUpdate)&&Ge(W,m,h,d),L&&kt(h,d,m,"beforeUpdate"),m&&Nt(m,!0);const V=w&&h.type!=="foreignObject";if(T?le(d.dynamicChildren,T,S,m,y,V,I):P||Y(d,h,S,null,m,y,V,I,!1),A>0){if(A&16)pe(S,h,D,U,m,y,w);else if(A&2&&D.class!==U.class&&i(S,"class",null,U.class,w),A&4&&i(S,"style",D.style,U.style,w),A&8){const ne=h.dynamicProps;for(let Z=0;Z<ne.length;Z++){const ue=ne[Z],Me=D[ue],Kt=U[ue];(Kt!==Me||ue==="value")&&i(S,ue,Me,Kt,w,d.children,m,y,ye)}}A&1&&d.children!==h.children&&f(S,h.children)}else!P&&T==null&&pe(S,h,D,U,m,y,w);((W=U.onVnodeUpdated)||L)&&Te(()=>{W&&Ge(W,m,h,d),L&&kt(h,d,m,"updated")},y)},le=(d,h,m,y,w,I,P)=>{for(let S=0;S<h.length;S++){const A=d[S],T=h[S],L=A.el&&(A.type===Ue||!bt(A,T)||A.shapeFlag&70)?u(A.el):m;v(A,T,L,null,y,w,I,P,!0)}},pe=(d,h,m,y,w,I,P)=>{if(m!==y){if(m!==se)for(const S in m)!pr(S)&&!(S in y)&&i(d,S,m[S],null,P,h.children,w,I,ye);for(const S in y){if(pr(S))continue;const A=y[S],T=m[S];A!==T&&S!=="value"&&i(d,S,T,A,P,h.children,w,I,ye)}"value"in y&&i(d,"value",m.value,y.value)}},Oe=(d,h,m,y,w,I,P,S,A)=>{const T=h.el=d?d.el:a(""),L=h.anchor=d?d.anchor:a("");let{patchFlag:D,dynamicChildren:U,slotScopeIds:W}=h;W&&(S=S?S.concat(W):W),d==null?(r(T,m,y),r(L,m,y),ee(h.children,m,L,w,I,P,S,A)):D>0&&D&64&&U&&d.dynamicChildren?(le(d.dynamicChildren,U,m,w,I,P,S),(h.key!=null||w&&h===w.subTree)&&Dc(d,h,!0)):Y(d,h,m,L,w,I,P,S,A)},_e=(d,h,m,y,w,I,P,S,A)=>{h.slotScopeIds=S,d==null?h.shapeFlag&512?w.ctx.activate(h,m,y,P,A):Ke(h,m,y,w,I,P,A):Pe(d,h,A)},Ke=(d,h,m,y,w,I,P)=>{const S=d.component=rd(d,y,w);if(Ic(d)&&(S.ctx.renderer=C),sd(S),S.asyncDep){if(w&&w.registerDep(S,ce),!d.el){const A=S.subTree=he($t);O(null,A,h,m)}return}ce(S,d,h,m,w,I,P)},Pe=(d,h,m)=>{const y=h.component=d.component;if(cf(d,h,m))if(y.asyncDep&&!y.asyncResolved){J(y,h,m);return}else y.next=h,tf(y.update),y.update();else h.el=d.el,y.vnode=h},ce=(d,h,m,y,w,I,P)=>{const S=()=>{if(d.isMounted){let{next:L,bu:D,u:U,parent:W,vnode:V}=d,ne=L,Z;Nt(d,!1),L?(L.el=V.el,J(d,L,P)):L=V,D&&mr(D),(Z=L.props&&L.props.onVnodeBeforeUpdate)&&Ge(Z,W,L,V),Nt(d,!0);const ue=ps(d),Me=d.subTree;d.subTree=ue,v(Me,ue,u(Me.el),E(Me),d,w,I),L.el=ue.el,ne===null&&Ci(d,ue.el),U&&Te(U,w),(Z=L.props&&L.props.onVnodeUpdated)&&Te(()=>Ge(Z,W,L,V),w)}else{let L;const{el:D,props:U}=h,{bm:W,m:V,parent:ne}=d,Z=_r(h);if(Nt(d,!1),W&&mr(W),!Z&&(L=U&&U.onVnodeBeforeMount)&&Ge(L,ne,h),Nt(d,!0),D&&X){const ue=()=>{d.subTree=ps(d),X(D,d.subTree,d,w,null)};Z?h.type.__asyncLoader().then(()=>!d.isUnmounted&&ue()):ue()}else{const ue=d.subTree=ps(d);v(null,ue,m,y,d,w,I),h.el=ue.el}if(V&&Te(V,w),!Z&&(L=U&&U.onVnodeMounted)){const ue=h;Te(()=>Ge(L,ne,ue),w)}(h.shapeFlag&256||ne&&_r(ne.vnode)&&ne.vnode.shapeFlag&256)&&d.a&&Te(d.a,w),d.isMounted=!0,h=m=y=null}},A=d.effect=new Ei(S,()=>Ai(T),d.scope),T=d.update=()=>A.run();T.id=d.uid,Nt(d,!0),T()},J=(d,h,m)=>{h.component=d;const y=d.vnode.props;d.vnode=h,d.next=null,jf(d,h.props,y,m),zf(d,h.children,m),gn(),po(),_n()},Y=(d,h,m,y,w,I,P,S,A=!1)=>{const T=d&&d.children,L=d?d.shapeFlag:0,D=h.children,{patchFlag:U,shapeFlag:W}=h;if(U>0){if(U&128){dt(T,D,m,y,w,I,P,S,A);return}else if(U&256){rt(T,D,m,y,w,I,P,S,A);return}}W&8?(L&16&&ye(T,w,I),D!==T&&f(m,D)):L&16?W&16?dt(T,D,m,y,w,I,P,S,A):ye(T,w,I,!0):(L&8&&f(m,""),W&16&&ee(D,m,y,w,I,P,S,A))},rt=(d,h,m,y,w,I,P,S,A)=>{d=d||Xt,h=h||Xt;const T=d.length,L=h.length,D=Math.min(T,L);let U;for(U=0;U<D;U++){const W=h[U]=A?_t(h[U]):Be(h[U]);v(d[U],W,m,null,w,I,P,S,A)}T>L?ye(d,w,I,!0,!1,D):ee(h,m,y,w,I,P,S,A,D)},dt=(d,h,m,y,w,I,P,S,A)=>{let T=0;const L=h.length;let D=d.length-1,U=L-1;for(;T<=D&&T<=U;){const W=d[T],V=h[T]=A?_t(h[T]):Be(h[T]);if(bt(W,V))v(W,V,m,null,w,I,P,S,A);else break;T++}for(;T<=D&&T<=U;){const W=d[D],V=h[U]=A?_t(h[U]):Be(h[U]);if(bt(W,V))v(W,V,m,null,w,I,P,S,A);else break;D--,U--}if(T>D){if(T<=U){const W=U+1,V=W<L?h[W].el:y;for(;T<=U;)v(null,h[T]=A?_t(h[T]):Be(h[T]),m,V,w,I,P,S,A),T++}}else if(T>U)for(;T<=D;)Ie(d[T],w,I,!0),T++;else{const W=T,V=T,ne=new Map;for(T=V;T<=U;T++){const Se=h[T]=A?_t(h[T]):Be(h[T]);Se.key!=null&&ne.set(Se.key,T)}let Z,ue=0;const Me=U-V+1;let Kt=!1,no=0;const En=new Array(Me);for(T=0;T<Me;T++)En[T]=0;for(T=W;T<=D;T++){const Se=d[T];if(ue>=Me){Ie(Se,w,I,!0);continue}let Je;if(Se.key!=null)Je=ne.get(Se.key);else for(Z=V;Z<=U;Z++)if(En[Z-V]===0&&bt(Se,h[Z])){Je=Z;break}Je===void 0?Ie(Se,w,I,!0):(En[Je-V]=T+1,Je>=no?no=Je:Kt=!0,v(Se,h[Je],m,null,w,I,P,S,A),ue++)}const ro=Kt?Gf(En):Xt;for(Z=ro.length-1,T=Me-1;T>=0;T--){const Se=V+T,Je=h[Se],so=Se+1<L?h[Se+1].el:y;En[T]===0?v(null,Je,m,so,w,I,P,S,A):Kt&&(Z<0||T!==ro[Z]?qe(Je,m,so,2):Z--)}}},qe=(d,h,m,y,w=null)=>{const{el:I,type:P,transition:S,children:A,shapeFlag:T}=d;if(T&6){qe(d.component.subTree,h,m,y);return}if(T&128){d.suspense.move(h,m,y);return}if(T&64){P.move(d,h,m,C);return}if(P===Ue){r(I,h,m);for(let D=0;D<A.length;D++)qe(A[D],h,m,y);r(d.anchor,h,m);return}if(P===gs){B(d,h,m);return}if(y!==2&&T&1&&S)if(y===0)S.beforeEnter(I),r(I,h,m),Te(()=>S.enter(I),w);else{const{leave:D,delayLeave:U,afterLeave:W}=S,V=()=>r(I,h,m),ne=()=>{D(I,()=>{V(),W&&W()})};U?U(I,V,ne):ne()}else r(I,h,m)},Ie=(d,h,m,y=!1,w=!1)=>{const{type:I,props:P,ref:S,children:A,dynamicChildren:T,shapeFlag:L,patchFlag:D,dirs:U}=d;if(S!=null&&Js(S,null,m,d,!0),L&256){h.ctx.deactivate(d);return}const W=L&1&&U,V=!_r(d);let ne;if(V&&(ne=P&&P.onVnodeBeforeUnmount)&&Ge(ne,h,d),L&6)or(d.component,m,y);else{if(L&128){d.suspense.unmount(m,y);return}W&&kt(d,null,h,"beforeUnmount"),L&64?d.type.remove(d,h,m,w,C,y):T&&(I!==Ue||D>0&&D&64)?ye(T,h,m,!1,!0):(I===Ue&&D&384||!w&&L&16)&&ye(A,h,m),y&&Vt(d)}(V&&(ne=P&&P.onVnodeUnmounted)||W)&&Te(()=>{ne&&Ge(ne,h,d),W&&kt(d,null,h,"unmounted")},m)},Vt=d=>{const{type:h,el:m,anchor:y,transition:w}=d;if(h===Ue){zt(m,y);return}if(h===gs){R(d);return}const I=()=>{s(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:P,delayLeave:S}=w,A=()=>P(m,I);S?S(d.el,I,A):A()}else I()},zt=(d,h)=>{let m;for(;d!==h;)m=p(d),s(d),d=m;s(h)},or=(d,h,m)=>{const{bum:y,scope:w,update:I,subTree:P,um:S}=d;y&&mr(y),w.stop(),I&&(I.active=!1,Ie(P,d,h,m)),S&&Te(S,h),Te(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},ye=(d,h,m,y=!1,w=!1,I=0)=>{for(let P=I;P<d.length;P++)Ie(d[P],h,m,y,w)},E=d=>d.shapeFlag&6?E(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el),x=(d,h,m)=>{d==null?h._vnode&&Ie(h._vnode,null,null,!0):v(h._vnode||null,d,h,null,null,null,m),po(),hc(),h._vnode=d},C={p:v,um:Ie,m:qe,r:Vt,mt:Ke,mc:ee,pc:Y,pbc:le,n:E,o:t};let M,X;return e&&([M,X]=e(C)),{render:x,hydrate:M,createApp:Hf(x,M)}}function Nt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Jf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Dc(t,e,n=!1){const r=t.children,s=e.children;if(H(r)&&H(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=_t(s[i]),a.el=o.el),n||Dc(o,a)),a.type===Zr&&(a.el=o.el)}}function Gf(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Yf=t=>t.__isTeleport,Ue=Symbol.for("v-fgt"),Zr=Symbol.for("v-txt"),$t=Symbol.for("v-cmt"),gs=Symbol.for("v-stc"),Nn=[];let xe=null;function Ce(t=!1){Nn.push(xe=t?null:[])}function Mc(){Nn.pop(),xe=Nn[Nn.length-1]||null}let an=1;function So(t){an+=t}function Lc(t){return t.dynamicChildren=an>0?xe||Xt:null,Mc(),an>0&&xe&&xe.push(t),t}function We(t,e,n,r,s,i){return Lc(ae(t,e,n,r,s,i,!0))}function Xf(t,e,n,r,s){return Lc(he(t,e,n,r,s,!0))}function xr(t){return t?t.__v_isVNode===!0:!1}function bt(t,e){return t.type===e.type&&t.key===e.key}const es="__vInternal",Uc=({key:t})=>t!=null?t:null,br=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?fe(t)||ve(t)||j(t)?{i:Ne,r:t,k:e,f:!!n}:t:null);function ae(t,e=null,n=null,r=0,s=null,i=t===Ue?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Uc(e),ref:e&&br(e),scopeId:Xr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ne};return a?(Ni(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=fe(n)?8:16),an>0&&!o&&xe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&xe.push(c),c}const he=Qf;function Qf(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===lf)&&(t=$t),xr(t)){const a=cn(t,e,!0);return n&&Ni(a,n),an>0&&!i&&xe&&(a.shapeFlag&6?xe[xe.indexOf(t)]=a:xe.push(a)),a.patchFlag|=-2,a}if(ld(t)&&(t=t.__vccOpts),e){e=Zf(e);let{class:a,style:c}=e;a&&!fe(a)&&(e.class=bi(a)),ie(c)&&(sc(c)&&!H(c)&&(c=ge({},c)),e.style=yi(c))}const o=fe(t)?1:ff(t)?128:Yf(t)?64:ie(t)?4:j(t)?2:0;return ae(t,e,n,r,s,o,i,!0)}function Zf(t){return t?sc(t)||es in t?ge({},t):t:null}function cn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?ed(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Uc(a),ref:e&&e.ref?n&&s?H(s)?s.concat(br(e)):[s,br(e)]:br(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ue?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&cn(t.ssContent),ssFallback:t.ssFallback&&cn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function vr(t=" ",e=0){return he(Zr,null,t,e)}function Be(t){return t==null||typeof t=="boolean"?he($t):H(t)?he(Ue,null,t.slice()):typeof t=="object"?_t(t):he(Zr,null,String(t))}function _t(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:cn(t)}function Ni(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ni(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(es in e)?e._ctx=Ne:s===3&&Ne&&(Ne.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:Ne},n=32):(e=String(e),r&64?(n=16,e=[vr(e)]):n=8);t.children=e,t.shapeFlag|=n}function ed(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=bi([e.class,r.class]));else if(s==="style")e.style=yi([e.style,r.style]);else if(Wr(s)){const i=e[s],o=r[s];o&&i!==o&&!(H(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ge(t,e,n,r=null){$e(t,e,7,[n,r])}const td=Cc();let nd=0;function rd(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||td,i={uid:nd++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ru(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pc(r,s),emitsOptions:mc(r,s),emit:null,emitted:null,propsDefaults:se,inheritAttrs:r.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=rf.bind(null,i),t.ce&&t.ce(i),i}let me=null,xi,qt,Ao="__VUE_INSTANCE_SETTERS__";(qt=Ls()[Ao])||(qt=Ls()[Ao]=[]),qt.push(t=>me=t),xi=t=>{qt.length>1?qt.forEach(e=>e(t)):qt[0](t)};const ln=t=>{xi(t),t.scope.on()},Bt=()=>{me&&me.scope.off(),xi(null)};function Bc(t){return t.vnode.shapeFlag&4}let Hn=!1;function sd(t,e=!1){Hn=e;const{props:n,children:r}=t.vnode,s=Bc(t);$f(t,n,s,e),Vf(t,r);const i=s?id(t,e):void 0;return Hn=!1,i}function id(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ic(new Proxy(t.ctx,xf));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?ad(t):null;ln(t),gn();const i=Rt(r,t,0,[t.props,s]);if(_n(),Bt(),$a(i)){if(i.then(Bt,Bt),e)return i.then(o=>{Gs(t,o,e)}).catch(o=>{Jn(o,t,0)});t.asyncDep=i}else Gs(t,i,e)}else Fc(t,e)}function Gs(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ie(e)&&(t.setupState=lc(e)),Fc(t,n)}let Co;function Fc(t,e,n){const r=t.type;if(!t.render){if(!e&&Co&&!r.render){const s=r.template||Pi(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ge(ge({isCustomElement:i,delimiters:a},o),c);r.render=Co(s,l)}}t.render=r.render||He}{ln(t),gn();try{Df(t)}finally{_n(),Bt()}}}function od(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Re(t,"get","$attrs"),e[n]}}))}function ad(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return od(t)},slots:t.slots,emit:t.emit,expose:e}}function ts(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(lc(ic(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in kn)return kn[n](t)},has(e,n){return n in e||n in kn}}))}function cd(t,e=!0){return j(t)?t.displayName||t.name:t.name||e&&t.__name}function ld(t){return j(t)&&"__vccOpts"in t}const ke=(t,e)=>Qu(t,e,Hn);function Hc(t,e,n){const r=arguments.length;return r===2?ie(e)&&!H(e)?xr(e)?he(t,null,[e]):he(t,e):he(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&xr(n)&&(n=[n]),he(t,e,n))}const ud=Symbol.for("v-scx"),fd=()=>je(ud),dd="3.3.9",hd="http://www.w3.org/2000/svg",Mt=typeof document<"u"?document:null,Oo=Mt&&Mt.createElement("template"),pd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Mt.createElementNS(hd,t):Mt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Mt.createTextNode(t),createComment:t=>Mt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Mt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Oo.innerHTML=r?`<svg>${t}</svg>`:t;const a=Oo.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},md=Symbol("_vtc");function gd(t,e,n){const r=t[md];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Di=Symbol("_vod"),_d={beforeMount(t,{value:e},{transition:n}){t[Di]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):wn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),wn(t,!0),r.enter(t)):r.leave(t,()=>{wn(t,!1)}):wn(t,e))},beforeUnmount(t,{value:e}){wn(t,e)}};function wn(t,e){t.style.display=e?t[Di]:"none"}function yd(t,e,n){const r=t.style,s=fe(n);if(n&&!s){if(e&&!fe(e))for(const i in e)n[i]==null&&Ys(r,i,"");for(const i in n)Ys(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),Di in t&&(r.display=i)}}const Po=/\s*!important$/;function Ys(t,e,n){if(H(n))n.forEach(r=>Ys(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=bd(t,e);Po.test(n)?t.setProperty(mn(r),n.replace(Po,""),"important"):t[r]=n}}const ko=["Webkit","Moz","ms"],_s={};function bd(t,e){const n=_s[e];if(n)return n;let r=et(e);if(r!=="filter"&&r in t)return _s[e]=r;r=qr(r);for(let s=0;s<ko.length;s++){const i=ko[s]+r;if(i in t)return _s[e]=i}return e}const No="http://www.w3.org/1999/xlink";function vd(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(No,e.slice(6,e.length)):t.setAttributeNS(No,e,n);else{const i=Tu(e);n==null||i&&!Va(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Ed(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,f=n==null?"":n;l!==f&&(t.value=f),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Va(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Jt(t,e,n,r){t.addEventListener(e,n,r)}function wd(t,e,n,r){t.removeEventListener(e,n,r)}const xo=Symbol("_vei");function Id(t,e,n,r,s=null){const i=t[xo]||(t[xo]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Td(e);if(r){const l=i[e]=Ad(r,s);Jt(t,a,l,c)}else o&&(wd(t,a,o,c),i[e]=void 0)}}const Do=/(?:Once|Passive|Capture)$/;function Td(t){let e;if(Do.test(t)){e={};let r;for(;r=t.match(Do);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):mn(t.slice(2)),e]}let ys=0;const Rd=Promise.resolve(),Sd=()=>ys||(Rd.then(()=>ys=0),ys=Date.now());function Ad(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;$e(Cd(r,n.value),e,5,[r])};return n.value=t,n.attached=Sd(),n}function Cd(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Mo=/^on[a-z]/,Od=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?gd(t,r,s):e==="style"?yd(t,n,r):Wr(e)?mi(e)||Id(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Pd(t,e,r,s))?Ed(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),vd(t,e,r,s))};function Pd(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Mo.test(e)&&j(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Mo.test(e)&&fe(n)?!1:e in t}const Lo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>mr(e,n):e};function kd(t){t.target.composing=!0}function Uo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const bs=Symbol("_assign"),Bo={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[bs]=Lo(s);const i=r||s.props&&s.props.type==="number";Jt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ms(a)),t[bs](a)}),n&&Jt(t,"change",()=>{t.value=t.value.trim()}),e||(Jt(t,"compositionstart",kd),Jt(t,"compositionend",Uo),Jt(t,"change",Uo))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[bs]=Lo(i),t.composing)return;const o=s||t.type==="number"?Ms(t.value):t.value,a=e==null?"":e;o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},Nd=["ctrl","shift","alt","meta"],xd={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Nd.some(n=>t[`${n}Key`]&&!e.includes(n))},Dd=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=xd[e[s]];if(i&&i(n,e))return}return t(n,...r)},Md=ge({patchProp:Od},pd);let Fo;function Ld(){return Fo||(Fo=Kf(Md))}const Ud=(...t)=>{const e=Ld().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Bd(r);if(!s)return;const i=e._component;!j(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Bd(t){return fe(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Gt=typeof window<"u";function Fd(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Q=Object.assign;function vs(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ve(s)?s.map(t):t(s)}return n}const xn=()=>{},Ve=Array.isArray,Hd=/\/$/,$d=t=>t.replace(Hd,"");function Es(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=zd(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function jd(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ho(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Wd(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&un(e.matched[r],n.matched[s])&&$c(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function un(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function $c(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Vd(t[n],e[n]))return!1;return!0}function Vd(t,e){return Ve(t)?$o(t,e):Ve(e)?$o(e,t):t===e}function $o(t,e){return Ve(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function zd(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var $n;(function(t){t.pop="pop",t.push="push"})($n||($n={}));var Dn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Dn||(Dn={}));function Kd(t){if(!t)if(Gt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),$d(t)}const qd=/^[^#]+#/;function Jd(t,e){return t.replace(qd,"#")+e}function Gd(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ns=()=>({left:window.pageXOffset,top:window.pageYOffset});function Yd(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Gd(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function jo(t,e){return(history.state?history.state.position-e:-1)+t}const Xs=new Map;function Xd(t,e){Xs.set(t,e)}function Qd(t){const e=Xs.get(t);return Xs.delete(t),e}let Zd=()=>location.protocol+"//"+location.host;function jc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Ho(c,"")}return Ho(n,t)+r+s}function eh(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=jc(t,location),_=n.value,v=e.value;let k=0;if(p){if(n.value=g,e.value=p,o&&o===_){o=null;return}k=v?p.position-v.position:0}else r(g);s.forEach(O=>{O(n.value,_,{delta:k,type:$n.pop,direction:k?k>0?Dn.forward:Dn.back:Dn.unknown})})};function c(){o=n.value}function l(p){s.push(p);const g=()=>{const _=s.indexOf(p);_>-1&&s.splice(_,1)};return i.push(g),g}function f(){const{history:p}=window;!p.state||p.replaceState(Q({},p.state,{scroll:ns()}),"")}function u(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:l,destroy:u}}function Wo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ns():null}}function th(t){const{history:e,location:n}=window,r={value:jc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,f){const u=t.indexOf("#"),p=u>-1?(n.host&&document.querySelector("base")?t:t.slice(u))+c:Zd()+t+c;try{e[f?"replaceState":"pushState"](l,"",p),s.value=l}catch(g){console.error(g),n[f?"replace":"assign"](p)}}function o(c,l){const f=Q({},e.state,Wo(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,f,!0),r.value=c}function a(c,l){const f=Q({},s.value,e.state,{forward:c,scroll:ns()});i(f.current,f,!0);const u=Q({},Wo(r.value,c,null),{position:f.position+1},l);i(c,u,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function nh(t){t=Kd(t);const e=th(t),n=eh(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Q({location:"",base:t,go:r,createHref:Jd.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function rh(t){return typeof t=="string"||t&&typeof t=="object"}function Wc(t){return typeof t=="string"||typeof t=="symbol"}const pt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Vc=Symbol("");var Vo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Vo||(Vo={}));function fn(t,e){return Q(new Error,{type:t,[Vc]:!0},e)}function st(t,e){return t instanceof Error&&Vc in t&&(e==null||!!(t.type&e))}const zo="[^/]+?",sh={sensitive:!1,strict:!1,start:!0,end:!0},ih=/[.+*?^${}()[\]/\\]/g;function oh(t,e){const n=Q({},sh,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let u=0;u<l.length;u++){const p=l[u];let g=40+(n.sensitive?.25:0);if(p.type===0)u||(s+="/"),s+=p.value.replace(ih,"\\$&"),g+=40;else if(p.type===1){const{value:_,repeatable:v,optional:k,regexp:O}=p;i.push({name:_,repeatable:v,optional:k});const N=O||zo;if(N!==zo){g+=10;try{new RegExp(`(${N})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${_}" (${N}): `+R.message)}}let B=v?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;u||(B=k&&l.length<2?`(?:/${B})`:"/"+B),k&&(B+="?"),s+=B,g+=20,k&&(g+=-8),v&&(g+=-20),N===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const f=l.match(o),u={};if(!f)return null;for(let p=1;p<f.length;p++){const g=f[p]||"",_=i[p-1];u[_.name]=g&&_.repeatable?g.split("/"):g}return u}function c(l){let f="",u=!1;for(const p of t){(!u||!f.endsWith("/"))&&(f+="/"),u=!1;for(const g of p)if(g.type===0)f+=g.value;else if(g.type===1){const{value:_,repeatable:v,optional:k}=g,O=_ in l?l[_]:"";if(Ve(O)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const N=Ve(O)?O.join("/"):O;if(!N)if(k)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):u=!0);else throw new Error(`Missing required param "${_}"`);f+=N}}return f||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function ah(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function ch(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=ah(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ko(r))return 1;if(Ko(s))return-1}return s.length-r.length}function Ko(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const lh={type:0,value:""},uh=/[a-zA-Z0-9_]/;function fh(t){if(!t)return[[]];if(t==="/")return[[lh]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",f="";function u(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&u(),o()):c===":"?(u(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:uh.test(c)?p():(u(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:u(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),u(),o(),s}function dh(t,e,n){const r=oh(fh(t.path),n),s=Q(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function hh(t,e){const n=[],r=new Map;e=Go({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,u,p){const g=!p,_=ph(f);_.aliasOf=p&&p.record;const v=Go(e,f),k=[_];if("alias"in f){const B=typeof f.alias=="string"?[f.alias]:f.alias;for(const R of B)k.push(Q({},_,{components:p?p.record.components:_.components,path:R,aliasOf:p?p.record:_}))}let O,N;for(const B of k){const{path:R}=B;if(u&&R[0]!=="/"){const F=u.record.path,q=F[F.length-1]==="/"?"":"/";B.path=u.record.path+(R&&q+R)}if(O=dh(B,u,v),p?p.alias.push(O):(N=N||O,N!==O&&N.alias.push(O),g&&f.name&&!Jo(O)&&o(f.name)),_.children){const F=_.children;for(let q=0;q<F.length;q++)i(F[q],O,p&&p.children[q])}p=p||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&c(O)}return N?()=>{o(N)}:xn}function o(f){if(Wc(f)){const u=r.get(f);u&&(r.delete(f),n.splice(n.indexOf(u),1),u.children.forEach(o),u.alias.forEach(o))}else{const u=n.indexOf(f);u>-1&&(n.splice(u,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){let u=0;for(;u<n.length&&ch(f,n[u])>=0&&(f.record.path!==n[u].record.path||!zc(f,n[u]));)u++;n.splice(u,0,f),f.record.name&&!Jo(f)&&r.set(f.record.name,f)}function l(f,u){let p,g={},_,v;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw fn(1,{location:f});v=p.record.name,g=Q(qo(u.params,p.keys.filter(N=>!N.optional).map(N=>N.name)),f.params&&qo(f.params,p.keys.map(N=>N.name))),_=p.stringify(g)}else if("path"in f)_=f.path,p=n.find(N=>N.re.test(_)),p&&(g=p.parse(_),v=p.record.name);else{if(p=u.name?r.get(u.name):n.find(N=>N.re.test(u.path)),!p)throw fn(1,{location:f,currentLocation:u});v=p.record.name,g=Q({},u.params,f.params),_=p.stringify(g)}const k=[];let O=p;for(;O;)k.unshift(O.record),O=O.parent;return{name:v,path:_,params:g,matched:k,meta:gh(k)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function qo(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ph(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:mh(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function mh(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Jo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function gh(t){return t.reduce((e,n)=>Q(e,n.meta),{})}function Go(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function zc(t,e){return e.children.some(n=>n===t||zc(t,n))}const Kc=/#/g,_h=/&/g,yh=/\//g,bh=/=/g,vh=/\?/g,qc=/\+/g,Eh=/%5B/g,wh=/%5D/g,Jc=/%5E/g,Ih=/%60/g,Gc=/%7B/g,Th=/%7C/g,Yc=/%7D/g,Rh=/%20/g;function Mi(t){return encodeURI(""+t).replace(Th,"|").replace(Eh,"[").replace(wh,"]")}function Sh(t){return Mi(t).replace(Gc,"{").replace(Yc,"}").replace(Jc,"^")}function Qs(t){return Mi(t).replace(qc,"%2B").replace(Rh,"+").replace(Kc,"%23").replace(_h,"%26").replace(Ih,"`").replace(Gc,"{").replace(Yc,"}").replace(Jc,"^")}function Ah(t){return Qs(t).replace(bh,"%3D")}function Ch(t){return Mi(t).replace(Kc,"%23").replace(vh,"%3F")}function Oh(t){return t==null?"":Ch(t).replace(yh,"%2F")}function Dr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Ph(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(qc," "),o=i.indexOf("="),a=Dr(o<0?i:i.slice(0,o)),c=o<0?null:Dr(i.slice(o+1));if(a in e){let l=e[a];Ve(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Yo(t){let e="";for(let n in t){const r=t[n];if(n=Ah(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ve(r)?r.map(i=>i&&Qs(i)):[r&&Qs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function kh(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ve(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Nh=Symbol(""),Xo=Symbol(""),rs=Symbol(""),Li=Symbol(""),Zs=Symbol("");function In(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function yt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=u=>{u===!1?a(fn(4,{from:n,to:e})):u instanceof Error?a(u):rh(u)?a(fn(2,{from:e,to:u})):(i&&r.enterCallbacks[s]===i&&typeof u=="function"&&i.push(u),o())},l=t.call(r&&r.instances[s],e,n,c);let f=Promise.resolve(l);t.length<3&&(f=f.then(c)),f.catch(u=>a(u))})}function ws(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(xh(a)){const l=(a.__vccOpts||a)[e];l&&s.push(yt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=Fd(l)?l.default:l;i.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&yt(p,n,r,i,o)()}))}}return s}function xh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Qo(t){const e=je(rs),n=je(Li),r=ke(()=>e.resolve(Ae(t.to))),s=ke(()=>{const{matched:c}=r.value,{length:l}=c,f=c[l-1],u=n.matched;if(!f||!u.length)return-1;const p=u.findIndex(un.bind(null,f));if(p>-1)return p;const g=Zo(c[l-2]);return l>1&&Zo(f)===g&&u[u.length-1].path!==g?u.findIndex(un.bind(null,c[l-2])):p}),i=ke(()=>s.value>-1&&Uh(n.params,r.value.params)),o=ke(()=>s.value>-1&&s.value===n.matched.length-1&&$c(n.params,r.value.params));function a(c={}){return Lh(c)?e[Ae(t.replace)?"replace":"push"](Ae(t.to)).catch(xn):Promise.resolve()}return{route:r,href:ke(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Dh=wc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Qo,setup(t,{slots:e}){const n=Gr(Qo(t)),{options:r}=je(rs),s=ke(()=>({[ea(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ea(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Hc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Mh=Dh;function Lh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Uh(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ve(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Zo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ea=(t,e,n)=>t!=null?t:e!=null?e:n,Bh=wc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=je(Zs),s=ke(()=>t.route||r.value),i=je(Xo,0),o=ke(()=>{let l=Ae(i);const{matched:f}=s.value;let u;for(;(u=f[l])&&!u.components;)l++;return l}),a=ke(()=>s.value.matched[o.value]);yr(Xo,ke(()=>o.value+1)),yr(Nh,a),yr(Zs,s);const c=tt();return gr(()=>[c.value,a.value,t.name],([l,f,u],[p,g,_])=>{f&&(f.instances[u]=l,g&&g!==f&&l&&l===p&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),l&&f&&(!g||!un(f,g)||!p)&&(f.enterCallbacks[u]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=s.value,f=t.name,u=a.value,p=u&&u.components[f];if(!p)return ta(n.default,{Component:p,route:l});const g=u.props[f],_=g?g===!0?l.params:typeof g=="function"?g(l):g:null,k=Hc(p,Q({},_,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(u.instances[f]=null)},ref:c}));return ta(n.default,{Component:k,route:l})||k}}});function ta(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Fh=Bh;function Hh(t){const e=hh(t.routes,t),n=t.parseQuery||Ph,r=t.stringifyQuery||Yo,s=t.history,i=In(),o=In(),a=In(),c=Ju(pt);let l=pt;Gt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=vs.bind(null,E=>""+E),u=vs.bind(null,Oh),p=vs.bind(null,Dr);function g(E,x){let C,M;return Wc(E)?(C=e.getRecordMatcher(E),M=x):M=E,e.addRoute(M,C)}function _(E){const x=e.getRecordMatcher(E);x&&e.removeRoute(x)}function v(){return e.getRoutes().map(E=>E.record)}function k(E){return!!e.getRecordMatcher(E)}function O(E,x){if(x=Q({},x||c.value),typeof E=="string"){const m=Es(n,E,x.path),y=e.resolve({path:m.path},x),w=s.createHref(m.fullPath);return Q(m,y,{params:p(y.params),hash:Dr(m.hash),redirectedFrom:void 0,href:w})}let C;if("path"in E)C=Q({},E,{path:Es(n,E.path,x.path).path});else{const m=Q({},E.params);for(const y in m)m[y]==null&&delete m[y];C=Q({},E,{params:u(m)}),x.params=u(x.params)}const M=e.resolve(C,x),X=E.hash||"";M.params=f(p(M.params));const d=jd(r,Q({},E,{hash:Sh(X),path:M.path})),h=s.createHref(d);return Q({fullPath:d,hash:X,query:r===Yo?kh(E.query):E.query||{}},M,{redirectedFrom:void 0,href:h})}function N(E){return typeof E=="string"?Es(n,E,c.value.path):Q({},E)}function B(E,x){if(l!==E)return fn(8,{from:x,to:E})}function R(E){return re(E)}function F(E){return R(Q(N(E),{replace:!0}))}function q(E){const x=E.matched[E.matched.length-1];if(x&&x.redirect){const{redirect:C}=x;let M=typeof C=="function"?C(E):C;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=N(M):{path:M},M.params={}),Q({query:E.query,hash:E.hash,params:"path"in M?{}:E.params},M)}}function re(E,x){const C=l=O(E),M=c.value,X=E.state,d=E.force,h=E.replace===!0,m=q(C);if(m)return re(Q(N(m),{state:typeof m=="object"?Q({},X,m.state):X,force:d,replace:h}),x||C);const y=C;y.redirectedFrom=x;let w;return!d&&Wd(r,M,C)&&(w=fn(16,{to:y,from:M}),qe(M,M,!0,!1)),(w?Promise.resolve(w):le(y,M)).catch(I=>st(I)?st(I,2)?I:dt(I):Y(I,y,M)).then(I=>{if(I){if(st(I,2))return re(Q({replace:h},N(I.to),{state:typeof I.to=="object"?Q({},X,I.to.state):X,force:d}),x||y)}else I=Oe(y,M,!0,h,X);return pe(y,M,I),I})}function ee(E,x){const C=B(E,x);return C?Promise.reject(C):Promise.resolve()}function oe(E){const x=zt.values().next().value;return x&&typeof x.runWithContext=="function"?x.runWithContext(E):E()}function le(E,x){let C;const[M,X,d]=$h(E,x);C=ws(M.reverse(),"beforeRouteLeave",E,x);for(const m of M)m.leaveGuards.forEach(y=>{C.push(yt(y,E,x))});const h=ee.bind(null,E,x);return C.push(h),ye(C).then(()=>{C=[];for(const m of i.list())C.push(yt(m,E,x));return C.push(h),ye(C)}).then(()=>{C=ws(X,"beforeRouteUpdate",E,x);for(const m of X)m.updateGuards.forEach(y=>{C.push(yt(y,E,x))});return C.push(h),ye(C)}).then(()=>{C=[];for(const m of d)if(m.beforeEnter)if(Ve(m.beforeEnter))for(const y of m.beforeEnter)C.push(yt(y,E,x));else C.push(yt(m.beforeEnter,E,x));return C.push(h),ye(C)}).then(()=>(E.matched.forEach(m=>m.enterCallbacks={}),C=ws(d,"beforeRouteEnter",E,x),C.push(h),ye(C))).then(()=>{C=[];for(const m of o.list())C.push(yt(m,E,x));return C.push(h),ye(C)}).catch(m=>st(m,8)?m:Promise.reject(m))}function pe(E,x,C){a.list().forEach(M=>oe(()=>M(E,x,C)))}function Oe(E,x,C,M,X){const d=B(E,x);if(d)return d;const h=x===pt,m=Gt?history.state:{};C&&(M||h?s.replace(E.fullPath,Q({scroll:h&&m&&m.scroll},X)):s.push(E.fullPath,X)),c.value=E,qe(E,x,C,h),dt()}let _e;function Ke(){_e||(_e=s.listen((E,x,C)=>{if(!or.listening)return;const M=O(E),X=q(M);if(X){re(Q(X,{replace:!0}),M).catch(xn);return}l=M;const d=c.value;Gt&&Xd(jo(d.fullPath,C.delta),ns()),le(M,d).catch(h=>st(h,12)?h:st(h,2)?(re(h.to,M).then(m=>{st(m,20)&&!C.delta&&C.type===$n.pop&&s.go(-1,!1)}).catch(xn),Promise.reject()):(C.delta&&s.go(-C.delta,!1),Y(h,M,d))).then(h=>{h=h||Oe(M,d,!1),h&&(C.delta&&!st(h,8)?s.go(-C.delta,!1):C.type===$n.pop&&st(h,20)&&s.go(-1,!1)),pe(M,d,h)}).catch(xn)}))}let Pe=In(),ce=In(),J;function Y(E,x,C){dt(E);const M=ce.list();return M.length?M.forEach(X=>X(E,x,C)):console.error(E),Promise.reject(E)}function rt(){return J&&c.value!==pt?Promise.resolve():new Promise((E,x)=>{Pe.add([E,x])})}function dt(E){return J||(J=!E,Ke(),Pe.list().forEach(([x,C])=>E?C(E):x()),Pe.reset()),E}function qe(E,x,C,M){const{scrollBehavior:X}=t;if(!Gt||!X)return Promise.resolve();const d=!C&&Qd(jo(E.fullPath,0))||(M||!C)&&history.state&&history.state.scroll||null;return fc().then(()=>X(E,x,d)).then(h=>h&&Yd(h)).catch(h=>Y(h,E,x))}const Ie=E=>s.go(E);let Vt;const zt=new Set,or={currentRoute:c,listening:!0,addRoute:g,removeRoute:_,hasRoute:k,getRoutes:v,resolve:O,options:t,push:R,replace:F,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ce.add,isReady:rt,install(E){const x=this;E.component("RouterLink",Mh),E.component("RouterView",Fh),E.config.globalProperties.$router=x,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>Ae(c)}),Gt&&!Vt&&c.value===pt&&(Vt=!0,R(s.location).catch(X=>{}));const C={};for(const X in pt)Object.defineProperty(C,X,{get:()=>c.value[X],enumerable:!0});E.provide(rs,x),E.provide(Li,nc(C)),E.provide(Zs,c);const M=E.unmount;zt.add(E),E.unmount=function(){zt.delete(E),zt.size<1&&(l=pt,_e&&_e(),_e=null,c.value=pt,Vt=!1,J=!1),M()}}};function ye(E){return E.reduce((x,C)=>x.then(()=>oe(C)),Promise.resolve())}return or}function $h(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>un(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>un(l,c))||s.push(c))}return[n,r,s]}function jh(){return je(rs)}function Wh(){return je(Li)}const Vh="/birdwatch-client/";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},zh=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Qc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,f=i>>2,u=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(p=64)),r.push(n[f],n[u],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Xc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||u==null)throw new Kh;const p=i<<2|a>>4;if(r.push(p),l!==64){const g=a<<4&240|l>>2;if(r.push(g),u!==64){const _=l<<6&192|u;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Kh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qh=function(t){const e=Xc(t);return Qc.encodeByteArray(e,!0)},Zc=function(t){return qh(t).replace(/\./g,"")},el=function(t){try{return Qc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=()=>Jh().__FIREBASE_DEFAULTS__,Yh=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Xh=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&el(t[1]);return e&&JSON.parse(e)},Ui=()=>{try{return Gh()||Yh()||Xh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qh=t=>{var e,n;return(n=(e=Ui())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},tl=()=>{var t;return(t=Ui())===null||t===void 0?void 0:t.config},nl=t=>{var e;return(e=Ui())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ep(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function tp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function np(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rp(){const t=Ee();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sp(){try{return typeof indexedDB=="object"}catch{return!1}}function ip(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op="FirebaseError";class Ot extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=op,Object.setPrototypeOf(this,Ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gn.prototype.create)}}class Gn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ap(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ot(s,a,r)}}function ap(t,e){return t.replace(cp,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const cp=/\{\$([^}]+)}/g;function lp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Mr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(na(i)&&na(o)){if(!Mr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function na(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function An(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Cn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function up(t,e){const n=new fp(t,e);return n.subscribe.bind(n)}class fp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");dp(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Is),s.error===void 0&&(s.error=Is),s.complete===void 0&&(s.complete=Is);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Is(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t){return t&&t._delegate?t._delegate:t}class dn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Zh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mp(e))try{this.getOrInitializeService({instanceIdentifier:xt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xt){return this.instances.has(e)}getOptions(e=xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pp(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xt){return this.component?this.component.multipleInstances?e:xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pp(t){return t===xt?void 0:t}function mp(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const _p={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},yp=te.INFO,bp={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},vp=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=bp[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rl{constructor(e){this.name=e,this._logLevel=yp,this._logHandler=vp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_p[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const Ep=(t,e)=>e.some(n=>t instanceof n);let ra,sa;function wp(){return ra||(ra=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ip(){return sa||(sa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sl=new WeakMap,ei=new WeakMap,il=new WeakMap,Ts=new WeakMap,Bi=new WeakMap;function Tp(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(St(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&sl.set(n,t)}).catch(()=>{}),Bi.set(e,t),e}function Rp(t){if(ei.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ei.set(t,e)}let ti={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ei.get(t);if(e==="objectStoreNames")return t.objectStoreNames||il.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return St(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Sp(t){ti=t(ti)}function Ap(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rs(this),e,...n);return il.set(r,e.sort?e.sort():[e]),St(r)}:Ip().includes(t)?function(...e){return t.apply(Rs(this),e),St(sl.get(this))}:function(...e){return St(t.apply(Rs(this),e))}}function Cp(t){return typeof t=="function"?Ap(t):(t instanceof IDBTransaction&&Rp(t),Ep(t,wp())?new Proxy(t,ti):t)}function St(t){if(t instanceof IDBRequest)return Tp(t);if(Ts.has(t))return Ts.get(t);const e=Cp(t);return e!==t&&(Ts.set(t,e),Bi.set(e,t)),e}const Rs=t=>Bi.get(t);function Op(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=St(o);return r&&o.addEventListener("upgradeneeded",c=>{r(St(o.result),c.oldVersion,c.newVersion,St(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Pp=["get","getKey","getAll","getAllKeys","count"],kp=["put","add","delete","clear"],Ss=new Map;function ia(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ss.get(e))return Ss.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=kp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Pp.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Ss.set(e,i),i}Sp(t=>({...t,get:(e,n,r)=>ia(e,n)||t.get(e,n,r),has:(e,n)=>!!ia(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function xp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ni="@firebase/app",oa="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=new rl("@firebase/app"),Dp="@firebase/app-compat",Mp="@firebase/analytics-compat",Lp="@firebase/analytics",Up="@firebase/app-check-compat",Bp="@firebase/app-check",Fp="@firebase/auth",Hp="@firebase/auth-compat",$p="@firebase/database",jp="@firebase/database-compat",Wp="@firebase/functions",Vp="@firebase/functions-compat",zp="@firebase/installations",Kp="@firebase/installations-compat",qp="@firebase/messaging",Jp="@firebase/messaging-compat",Gp="@firebase/performance",Yp="@firebase/performance-compat",Xp="@firebase/remote-config",Qp="@firebase/remote-config-compat",Zp="@firebase/storage",em="@firebase/storage-compat",tm="@firebase/firestore",nm="@firebase/firestore-compat",rm="firebase",sm="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri="[DEFAULT]",im={[ni]:"fire-core",[Dp]:"fire-core-compat",[Lp]:"fire-analytics",[Mp]:"fire-analytics-compat",[Bp]:"fire-app-check",[Up]:"fire-app-check-compat",[Fp]:"fire-auth",[Hp]:"fire-auth-compat",[$p]:"fire-rtdb",[jp]:"fire-rtdb-compat",[Wp]:"fire-fn",[Vp]:"fire-fn-compat",[zp]:"fire-iid",[Kp]:"fire-iid-compat",[qp]:"fire-fcm",[Jp]:"fire-fcm-compat",[Gp]:"fire-perf",[Yp]:"fire-perf-compat",[Xp]:"fire-rc",[Qp]:"fire-rc-compat",[Zp]:"fire-gcs",[em]:"fire-gcs-compat",[tm]:"fire-fst",[nm]:"fire-fst-compat","fire-js":"fire-js",[rm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new Map,si=new Map;function om(t,e){try{t.container.addComponent(e)}catch(n){jt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function jn(t){const e=t.name;if(si.has(e))return jt.debug(`There were multiple attempts to register component ${e}.`),!1;si.set(e,t);for(const n of Lr.values())om(n,t);return!0}function ol(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},At=new Gn("app","Firebase",am);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=sm;function al(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ri,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw At.create("bad-app-name",{appName:String(s)});if(n||(n=tl()),!n)throw At.create("no-options");const i=Lr.get(s);if(i){if(Mr(n,i.options)&&Mr(r,i.config))return i;throw At.create("duplicate-app",{appName:s})}const o=new gp(s);for(const c of si.values())o.addComponent(c);const a=new cm(n,r,o);return Lr.set(s,a),a}function lm(t=ri){const e=Lr.get(t);if(!e&&t===ri&&tl())return al();if(!e)throw At.create("no-app",{appName:t});return e}function nn(t,e,n){var r;let s=(r=im[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jt.warn(a.join(" "));return}jn(new dn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um="firebase-heartbeat-database",fm=1,Wn="firebase-heartbeat-store";let As=null;function cl(){return As||(As=Op(um,fm,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Wn)}}}).catch(t=>{throw At.create("idb-open",{originalErrorMessage:t.message})})),As}async function dm(t){try{return await(await cl()).transaction(Wn).objectStore(Wn).get(ll(t))}catch(e){if(e instanceof Ot)jt.warn(e.message);else{const n=At.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jt.warn(n.message)}}}async function aa(t,e){try{const r=(await cl()).transaction(Wn,"readwrite");await r.objectStore(Wn).put(e,ll(t)),await r.done}catch(n){if(n instanceof Ot)jt.warn(n.message);else{const r=At.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});jt.warn(r.message)}}}function ll(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm=1024,pm=30*24*60*60*1e3;class mm{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _m(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ca();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=pm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ca(),{heartbeatsToSend:n,unsentEntries:r}=gm(this._heartbeatsCache.heartbeats),s=Zc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ca(){return new Date().toISOString().substring(0,10)}function gm(t,e=hm){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),la(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),la(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _m{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sp()?ip().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await dm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return aa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return aa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function la(t){return Zc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(t){jn(new dn("platform-logger",e=>new Np(e),"PRIVATE")),jn(new dn("heartbeat",e=>new mm(e),"PRIVATE")),nn(ni,oa,t),nn(ni,oa,"esm2017"),nn("fire-js","")}ym("");var bm="firebase",vm="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn(bm,vm,"app");const Em={apiKey:"AIzaSyBHZoDAPUcd13I0wxaSzz5GXmT0_erVXmk",authDomain:"vue-3-company-directory-798be.firebaseapp.com",projectId:"vue-3-company-directory-798be",storageBucket:"vue-3-company-directory-798be.appspot.com",messagingSenderId:"599549911927",appId:"1:599549911927:web:448741eb9bbcb90c723772"},wm=al(Em);function Fi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ul(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Im=ul,fl=new Gn("auth","Firebase",ul());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=new rl("@firebase/auth");function Tm(t,...e){Ur.logLevel<=te.WARN&&Ur.warn(`Auth (${Xn}): ${t}`,...e)}function Er(t,...e){Ur.logLevel<=te.ERROR&&Ur.error(`Auth (${Xn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(t,...e){throw Hi(t,...e)}function Qe(t,...e){return Hi(t,...e)}function Rm(t,e,n){const r=Object.assign(Object.assign({},Im()),{[e]:n});return new Gn("auth","Firebase",r).create(e,{appName:t.name})}function Hi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return fl.create(t,...e)}function $(t,e,...n){if(!t)throw Hi(e,...n)}function ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Er(e),new Error(e)}function ut(t,e){t||ot(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Sm(){return ua()==="http:"||ua()==="https:"}function ua(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Sm()||tp()||"connection"in navigator)?navigator.onLine:!0}function Cm(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n){this.shortDelay=e,this.longDelay=n,ut(n>e,"Short delay should be less than long delay!"),this.isMobile=ep()||np()}get(){return Am()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t,e){ut(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm=new Qn(3e4,6e4);function Zn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function yn(t,e,n,r,s={}){return hl(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Yn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),dl.fetch()(pl(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function hl(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Om),e);try{const s=new km(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw hr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw hr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw hr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw hr(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Rm(t,f,l);ze(t,f)}}catch(s){if(s instanceof Ot)throw s;ze(t,"network-request-failed",{message:String(s)})}}async function ss(t,e,n,r,s={}){const i=await yn(t,e,n,r,s);return"mfaPendingCredential"in i&&ze(t,"multi-factor-auth-required",{_serverResponse:i}),i}function pl(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?$i(t.config,s):`${t.config.apiScheme}://${s}`}class km{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qe(this.auth,"network-request-failed")),Pm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Qe(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nm(t,e){return yn(t,"POST","/v1/accounts:delete",e)}async function xm(t,e){return yn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Dm(t,e=!1){const n=Pt(t),r=await n.getIdToken(e),s=ji(r);$(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Mn(Cs(s.auth_time)),issuedAtTime:Mn(Cs(s.iat)),expirationTime:Mn(Cs(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Cs(t){return Number(t)*1e3}function ji(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Er("JWT malformed, contained fewer than 3 sections"),null;try{const s=el(n);return s?JSON.parse(s):(Er("Failed to decode base64 JWT payload"),null)}catch(s){return Er("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Mm(t){const e=ji(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ot&&Lm(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Lm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mn(this.lastLoginAt),this.creationTime=Mn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Br(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Vn(t,xm(n,{idToken:r}));$(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Hm(i.providerUserInfo):[],a=Fm(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=c?l:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ml(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,u)}async function Bm(t){const e=Pt(t);await Br(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Fm(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Hm(t){return t.map(e=>{var{providerId:n}=e,r=Fi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $m(t,e){const n=await hl(t,{},async()=>{const r=Yn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=pl(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",dl.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Mm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await $m(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new zn;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&($(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&($(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zn,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ft{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Fi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Um(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ml(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Vn(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Dm(this,e)}reload(){return Bm(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ft(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Br(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Vn(this,Nm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,f;const u=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(l=n.createdAt)!==null&&l!==void 0?l:void 0,N=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:B,emailVerified:R,isAnonymous:F,providerData:q,stsTokenManager:re}=n;$(B&&re,e,"internal-error");const ee=zn.fromJSON(this.name,re);$(typeof B=="string",e,"internal-error"),mt(u,e.name),mt(p,e.name),$(typeof R=="boolean",e,"internal-error"),$(typeof F=="boolean",e,"internal-error"),mt(g,e.name),mt(_,e.name),mt(v,e.name),mt(k,e.name),mt(O,e.name),mt(N,e.name);const oe=new Ft({uid:B,auth:e,email:p,emailVerified:R,displayName:u,isAnonymous:F,photoURL:_,phoneNumber:g,tenantId:v,stsTokenManager:ee,createdAt:O,lastLoginAt:N});return q&&Array.isArray(q)&&(oe.providerData=q.map(le=>Object.assign({},le))),k&&(oe._redirectEventId=k),oe}static async _fromIdTokenResponse(e,n,r=!1){const s=new zn;s.updateFromServerResponse(n);const i=new Ft({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Br(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa=new Map;function at(t){ut(t instanceof Function,"Expected a class definition");let e=fa.get(t);return e?(ut(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,fa.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}gl.type="NONE";const da=gl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(t,e,n){return`firebase:${t}:${e}:${n}`}class rn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=wr(this.userKey,s.apiKey,i),this.fullPersistenceKey=wr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ft._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new rn(at(da),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||at(da);const o=wr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const f=await l._get(o);if(f){const u=Ft._fromJSON(e,f);l!==i&&(a=u),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new rn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new rn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_l(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(El(e))return"Blackberry";if(wl(e))return"Webos";if(Wi(e))return"Safari";if((e.includes("chrome/")||yl(e))&&!e.includes("edge/"))return"Chrome";if(vl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _l(t=Ee()){return/firefox\//i.test(t)}function Wi(t=Ee()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yl(t=Ee()){return/crios\//i.test(t)}function bl(t=Ee()){return/iemobile/i.test(t)}function vl(t=Ee()){return/android/i.test(t)}function El(t=Ee()){return/blackberry/i.test(t)}function wl(t=Ee()){return/webos/i.test(t)}function is(t=Ee()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jm(t=Ee()){var e;return is(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Wm(){return rp()&&document.documentMode===10}function Il(t=Ee()){return is(t)||vl(t)||wl(t)||El(t)||/windows phone/i.test(t)||bl(t)}function Vm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(t,e=[]){let n;switch(t){case"Browser":n=ha(Ee());break;case"Worker":n=`${ha(Ee())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xn}/${r}`}async function Rl(t,e){return yn(t,"GET","/v2/recaptchaConfig",Zn(t,e))}function pa(t){return t!==void 0&&t.enterprise!==void 0}class Sl{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Al(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Qe("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",zm().appendChild(r)})}function Km(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const qm="https://www.google.com/recaptcha/enterprise.js?render=",Jm="recaptcha-enterprise",Gm="NO_RECAPTCHA";class Cl{constructor(e){this.type=Jm,this.auth=er(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Rl(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Sl(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;pa(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Gm)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&pa(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Al(qm+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function ma(t,e,n,r=!1){const s=new Cl(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ga(this),this.idTokenSubscription=new ga(this),this.beforeStateQueue=new Ym(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=at(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await rn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Br(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Cm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Pt(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(at(e))})}async initializeRecaptchaConfig(){const e=await Rl(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Sl(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Cl(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&at(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await rn.create(this,[at(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Tm(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function er(t){return Pt(t)}class ga{constructor(e){this.auth=e,this.observer=null,this.addObserver=up(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(t,e){const n=ol(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Mr(i,e!=null?e:{}))return s;ze(s,"already-initialized")}return n.initialize({options:e})}function Zm(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(at);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function eg(t,e,n){const r=er(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Ol(e),{host:o,port:a}=tg(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||ng()}function Ol(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tg(t){const e=Ol(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:_a(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:_a(o)}}}function _a(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ng(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ot("not implemented")}_getIdTokenResponse(e){return ot("not implemented")}_linkToIdToken(e,n){return ot("not implemented")}_getReauthenticationResolver(e){return ot("not implemented")}}async function rg(t,e){return yn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Os(t,e){return ss(t,"POST","/v1/accounts:signInWithPassword",Zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sg(t,e){return ss(t,"POST","/v1/accounts:signInWithEmailLink",Zn(t,e))}async function ig(t,e){return ss(t,"POST","/v1/accounts:signInWithEmailLink",Zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Vi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Kn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Kn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await ma(e,r,"signInWithPassword");return Os(e,s)}else return Os(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await ma(e,r,"signInWithPassword");return Os(e,i)}else return Promise.reject(s)});case"emailLink":return sg(e,{email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return rg(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ig(e,{idToken:n,email:this._email,oobCode:this._password});default:ze(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(t,e){return ss(t,"POST","/v1/accounts:signInWithIdp",Zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og="http://localhost";class Wt extends Vi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ze("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Fi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Wt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return sn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,sn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,sn(e,n)}buildRequest(){const e={requestUri:og,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Yn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cg(t){const e=An(Cn(t)).link,n=e?An(Cn(e)).deep_link_id:null,r=An(Cn(t)).deep_link_id;return(r?An(Cn(r)).link:null)||r||n||e||t}class zi{constructor(e){var n,r,s,i,o,a;const c=An(Cn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,u=ag((s=c.mode)!==null&&s!==void 0?s:null);$(l&&f&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=cg(e);try{return new zi(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(){this.providerId=bn.PROVIDER_ID}static credential(e,n){return Kn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=zi.parseLink(n);return $(r,"argument-error"),Kn._fromEmailAndCode(e,r.code,r.tenantId)}}bn.PROVIDER_ID="password";bn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends Pl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends tr{constructor(){super("facebook.com")}static credential(e){return Wt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";vt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends tr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Et.credential(n,r)}catch{return null}}}Et.GOOGLE_SIGN_IN_METHOD="google.com";Et.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends tr{constructor(){super("github.com")}static credential(e){return Wt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch{return null}}}wt.GITHUB_SIGN_IN_METHOD="github.com";wt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends tr{constructor(){super("twitter.com")}static credential(e,n){return Wt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return It.credential(n,r)}catch{return null}}}It.TWITTER_SIGN_IN_METHOD="twitter.com";It.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ft._fromIdTokenResponse(e,r,s),o=ya(r);return new hn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ya(r);return new hn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ya(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends Ot{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Fr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Fr(e,n,r,s)}}function kl(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Fr._fromErrorAndOperation(t,i,e,r):i})}async function lg(t,e,n=!1){const r=await Vn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ug(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Vn(t,kl(r,s,e,t),n);$(i.idToken,r,"internal-error");const o=ji(i.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),hn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ze(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nl(t,e,n=!1){const r="signIn",s=await kl(t,r,e),i=await hn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function fg(t,e){return Nl(er(t),e)}function dg(t,e,n){return fg(Pt(t),bn.credential(e,n))}function hg(t,e,n,r){return Pt(t).onIdTokenChanged(e,n,r)}function pg(t,e,n){return Pt(t).beforeAuthStateChanged(e,n)}function mg(t){return Pt(t).signOut()}const Hr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hr,"1"),this.storage.removeItem(Hr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(){const t=Ee();return Wi(t)||is(t)}const _g=1e3,yg=10;class Dl extends xl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gg()&&Vm(),this.fallbackToPolling=Il(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Wm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,yg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},_g)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dl.type="LOCAL";const bg=Dl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml extends xl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ml.type="SESSION";const Ll=Ml;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new os(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await vg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}os.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ki("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(u){const p=u;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return window}function wg(t){Ze().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(){return typeof Ze().WorkerGlobalScope<"u"&&typeof Ze().importScripts=="function"}async function Ig(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Tg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Rg(){return Ul()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl="firebaseLocalStorageDb",Sg=1,$r="firebaseLocalStorage",Fl="fbase_key";class nr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function as(t,e){return t.transaction([$r],e?"readwrite":"readonly").objectStore($r)}function Ag(){const t=indexedDB.deleteDatabase(Bl);return new nr(t).toPromise()}function oi(){const t=indexedDB.open(Bl,Sg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore($r,{keyPath:Fl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains($r)?e(r):(r.close(),await Ag(),e(await oi()))})})}async function ba(t,e,n){const r=as(t,!0).put({[Fl]:e,value:n});return new nr(r).toPromise()}async function Cg(t,e){const n=as(t,!1).get(e),r=await new nr(n).toPromise();return r===void 0?null:r.value}function va(t,e){const n=as(t,!0).delete(e);return new nr(n).toPromise()}const Og=800,Pg=3;class Hl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await oi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Pg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ul()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=os._getInstance(Rg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ig(),!this.activeServiceWorker)return;this.sender=new Eg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Tg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await oi();return await ba(e,Hr,"1"),await va(e,Hr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ba(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Cg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>va(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=as(s,!1).getAll();return new nr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Og)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hl.type="LOCAL";const kg=Hl;new Qn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(t,e){return e?at(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi extends Vi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return sn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return sn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return sn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xg(t){return Nl(t.auth,new qi(t),t.bypassAuthState)}function Dg(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),ug(n,new qi(t),t.bypassAuthState)}async function Mg(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),lg(n,new qi(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xg;case"linkViaPopup":case"linkViaRedirect":return Mg;case"reauthViaPopup":case"reauthViaRedirect":return Dg;default:ze(this.auth,"internal-error")}}resolve(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=new Qn(2e3,1e4);class Yt extends $l{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Yt.currentPopupAction&&Yt.currentPopupAction.cancel(),Yt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){ut(this.filter.length===1,"Popup operations only handle one event");const e=Ki();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Lg.get())};e()}}Yt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug="pendingRedirect",Ir=new Map;class Bg extends $l{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ir.get(this.auth._key());if(!e){try{const r=await Fg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ir.set(this.auth._key(),e)}return this.bypassAuthState||Ir.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Fg(t,e){const n=jg(e),r=$g(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Hg(t,e){Ir.set(t._key(),e)}function $g(t){return at(t._redirectPersistence)}function jg(t){return wr(Ug,t.config.apiKey,t.name)}async function Wg(t,e,n=!1){const r=er(t),s=Ng(r,e),o=await new Bg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=10*60*1e3;class zg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Kg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!jl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qe(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Vg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ea(e))}saveEventToCache(e){this.cachedEventUids.add(Ea(e)),this.lastProcessedEventTime=Date.now()}}function Ea(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function jl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Kg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jl(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qg(t,e={}){return yn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gg=/^https?/;async function Yg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qg(t);for(const n of e)try{if(Xg(n))return}catch{}ze(t,"unauthorized-domain")}function Xg(t){const e=ii(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Gg.test(n))return!1;if(Jg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg=new Qn(3e4,6e4);function wa(){const t=Ze().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Zg(t){return new Promise((e,n)=>{var r,s,i;function o(){wa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wa(),n(Qe(t,"network-request-failed"))},timeout:Qg.get()})}if(!((s=(r=Ze().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ze().gapi)===null||i===void 0)&&i.load)o();else{const a=Km("iframefcb");return Ze()[a]=()=>{gapi.load?o():n(Qe(t,"network-request-failed"))},Al(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Tr=null,e})}let Tr=null;function e_(t){return Tr=Tr||Zg(t),Tr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=new Qn(5e3,15e3),n_="__/auth/iframe",r_="emulator/auth/iframe",s_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},i_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function o_(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$i(e,r_):`https://${t.config.authDomain}/${n_}`,r={apiKey:e.apiKey,appName:t.name,v:Xn},s=i_.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Yn(r).slice(1)}`}async function a_(t){const e=await e_(t),n=Ze().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:o_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:s_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Qe(t,"network-request-failed"),a=Ze().setTimeout(()=>{i(o)},t_.get());function c(){Ze().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},l_=500,u_=600,f_="_blank",d_="http://localhost";class Ia{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function h_(t,e,n,r=l_,s=u_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},c_),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ee().toLowerCase();n&&(a=yl(l)?f_:n),_l(l)&&(e=e||d_,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[g,_])=>`${p}${g}=${_},`,"");if(jm(l)&&a!=="_self")return p_(e||"",a),new Ia(null);const u=window.open(e||"",a,f);$(u,t,"popup-blocked");try{u.focus()}catch{}return new Ia(u)}function p_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_="__/auth/handler",g_="emulator/auth/handler",__=encodeURIComponent("fac");async function Ta(t,e,n,r,s,i){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Xn,eventId:s};if(e instanceof Pl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",lp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,u]of Object.entries(i||{}))o[f]=u}if(e instanceof tr){const f=e.getScopes().filter(u=>u!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const c=await t._getAppCheckToken(),l=c?`#${__}=${encodeURIComponent(c)}`:"";return`${y_(t)}?${Yn(a).slice(1)}${l}`}function y_({config:t}){return t.emulator?$i(t,g_):`https://${t.authDomain}/${m_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps="webStorageSupport";class b_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ll,this._completeRedirectFn=Wg,this._overrideRedirectResult=Hg}async _openPopup(e,n,r,s){var i;ut((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ta(e,n,r,ii(),s);return h_(e,o,Ki())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ta(e,n,r,ii(),s);return wg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ut(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await a_(e),r=new zg(e);return n.register("authEvent",s=>($(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ps,{type:Ps},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ps];o!==void 0&&n(!!o),ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Yg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Il()||Wi()||is()}}const v_=b_;var Ra="@firebase/auth",Sa="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function I_(t){jn(new dn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tl(t)},l=new Xm(r,s,i,c);return Zm(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),jn(new dn("auth-internal",e=>{const n=er(e.getProvider("auth").getImmediate());return(r=>new E_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(Ra,Sa,w_(t)),nn(Ra,Sa,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_=5*60,R_=nl("authIdTokenMaxAge")||T_;let Aa=null;const S_=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>R_)return;const s=n==null?void 0:n.token;Aa!==s&&(Aa=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function A_(t=lm()){const e=ol(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Qm(t,{popupRedirectResolver:v_,persistence:[kg,bg,Ll]}),r=nl("authTokenSyncURL");if(r){const i=S_(r);pg(n,i,()=>i(n.currentUser)),hg(n,o=>i(o))}const s=Qh("auth");return s&&eg(n,`http://${s}`),n}I_("Browser");function C_(t){const e=tt(t.currentUser),n=ke(()=>!!e.value);return t.onIdTokenChanged(r=>e.value=r),{isAuthenticated:n,user:e}}const ai=A_(wm),{isAuthenticated:Ca,user:O_}=C_(ai),Ji=()=>({isAuthenticated:Ca,user:O_,login:async(n,r)=>(await dg(ai,n,r),Ca.value),logout:async()=>{await mg(ai),to.push({name:"Home"})}});function Wl(t,e){return function(){return t.apply(e,arguments)}}const{toString:P_}=Object.prototype,{getPrototypeOf:Gi}=Object,cs=(t=>e=>{const n=P_.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),nt=t=>(t=t.toLowerCase(),e=>cs(e)===t),ls=t=>e=>typeof e===t,{isArray:vn}=Array,qn=ls("undefined");function k_(t){return t!==null&&!qn(t)&&t.constructor!==null&&!qn(t.constructor)&&De(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Vl=nt("ArrayBuffer");function N_(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Vl(t.buffer),e}const x_=ls("string"),De=ls("function"),zl=ls("number"),us=t=>t!==null&&typeof t=="object",D_=t=>t===!0||t===!1,Rr=t=>{if(cs(t)!=="object")return!1;const e=Gi(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},M_=nt("Date"),L_=nt("File"),U_=nt("Blob"),B_=nt("FileList"),F_=t=>us(t)&&De(t.pipe),H_=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||De(t.append)&&((e=cs(t))==="formdata"||e==="object"&&De(t.toString)&&t.toString()==="[object FormData]"))},$_=nt("URLSearchParams"),j_=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function rr(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),vn(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function Kl(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const ql=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Jl=t=>!qn(t)&&t!==ql;function ci(){const{caseless:t}=Jl(this)&&this||{},e={},n=(r,s)=>{const i=t&&Kl(e,s)||s;Rr(e[i])&&Rr(r)?e[i]=ci(e[i],r):Rr(r)?e[i]=ci({},r):vn(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&rr(arguments[r],n);return e}const W_=(t,e,n,{allOwnKeys:r}={})=>(rr(e,(s,i)=>{n&&De(s)?t[i]=Wl(s,n):t[i]=s},{allOwnKeys:r}),t),V_=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),z_=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},K_=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Gi(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},q_=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},J_=t=>{if(!t)return null;if(vn(t))return t;let e=t.length;if(!zl(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},G_=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Gi(Uint8Array)),Y_=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},X_=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},Q_=nt("HTMLFormElement"),Z_=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Oa=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),ey=nt("RegExp"),Gl=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};rr(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},ty=t=>{Gl(t,(e,n)=>{if(De(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(!!De(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ny=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return vn(t)?r(t):r(String(t).split(e)),n},ry=()=>{},sy=(t,e)=>(t=+t,Number.isFinite(t)?t:e),ks="abcdefghijklmnopqrstuvwxyz",Pa="0123456789",Yl={DIGIT:Pa,ALPHA:ks,ALPHA_DIGIT:ks+ks.toUpperCase()+Pa},iy=(t=16,e=Yl.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function oy(t){return!!(t&&De(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const ay=t=>{const e=new Array(10),n=(r,s)=>{if(us(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=vn(r)?[]:{};return rr(r,(o,a)=>{const c=n(o,s+1);!qn(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},cy=nt("AsyncFunction"),ly=t=>t&&(us(t)||De(t))&&De(t.then)&&De(t.catch),b={isArray:vn,isArrayBuffer:Vl,isBuffer:k_,isFormData:H_,isArrayBufferView:N_,isString:x_,isNumber:zl,isBoolean:D_,isObject:us,isPlainObject:Rr,isUndefined:qn,isDate:M_,isFile:L_,isBlob:U_,isRegExp:ey,isFunction:De,isStream:F_,isURLSearchParams:$_,isTypedArray:G_,isFileList:B_,forEach:rr,merge:ci,extend:W_,trim:j_,stripBOM:V_,inherits:z_,toFlatObject:K_,kindOf:cs,kindOfTest:nt,endsWith:q_,toArray:J_,forEachEntry:Y_,matchAll:X_,isHTMLForm:Q_,hasOwnProperty:Oa,hasOwnProp:Oa,reduceDescriptors:Gl,freezeMethods:ty,toObjectSet:ny,toCamelCase:Z_,noop:ry,toFiniteNumber:sy,findKey:Kl,global:ql,isContextDefined:Jl,ALPHABET:Yl,generateString:iy,isSpecCompliantForm:oy,toJSONObject:ay,isAsyncFn:cy,isThenable:ly};function z(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}b.inherits(z,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:b.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Xl=z.prototype,Ql={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Ql[t]={value:t}});Object.defineProperties(z,Ql);Object.defineProperty(Xl,"isAxiosError",{value:!0});z.from=(t,e,n,r,s,i)=>{const o=Object.create(Xl);return b.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),z.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const uy=null;function li(t){return b.isPlainObject(t)||b.isArray(t)}function Zl(t){return b.endsWith(t,"[]")?t.slice(0,-2):t}function ka(t,e,n){return t?t.concat(e).map(function(s,i){return s=Zl(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function fy(t){return b.isArray(t)&&!t.some(li)}const dy=b.toFlatObject(b,{},null,function(e){return/^is[A-Z]/.test(e)});function fs(t,e,n){if(!b.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=b.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,k){return!b.isUndefined(k[v])});const r=n.metaTokens,s=n.visitor||f,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&b.isSpecCompliantForm(e);if(!b.isFunction(s))throw new TypeError("visitor must be a function");function l(_){if(_===null)return"";if(b.isDate(_))return _.toISOString();if(!c&&b.isBlob(_))throw new z("Blob is not supported. Use a Buffer instead.");return b.isArrayBuffer(_)||b.isTypedArray(_)?c&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function f(_,v,k){let O=_;if(_&&!k&&typeof _=="object"){if(b.endsWith(v,"{}"))v=r?v:v.slice(0,-2),_=JSON.stringify(_);else if(b.isArray(_)&&fy(_)||(b.isFileList(_)||b.endsWith(v,"[]"))&&(O=b.toArray(_)))return v=Zl(v),O.forEach(function(B,R){!(b.isUndefined(B)||B===null)&&e.append(o===!0?ka([v],R,i):o===null?v:v+"[]",l(B))}),!1}return li(_)?!0:(e.append(ka(k,v,i),l(_)),!1)}const u=[],p=Object.assign(dy,{defaultVisitor:f,convertValue:l,isVisitable:li});function g(_,v){if(!b.isUndefined(_)){if(u.indexOf(_)!==-1)throw Error("Circular reference detected in "+v.join("."));u.push(_),b.forEach(_,function(O,N){(!(b.isUndefined(O)||O===null)&&s.call(e,O,b.isString(N)?N.trim():N,v,p))===!0&&g(O,v?v.concat(N):[N])}),u.pop()}}if(!b.isObject(t))throw new TypeError("data must be an object");return g(t),e}function Na(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Yi(t,e){this._pairs=[],t&&fs(t,this,e)}const eu=Yi.prototype;eu.append=function(e,n){this._pairs.push([e,n])};eu.toString=function(e){const n=e?function(r){return e.call(this,r,Na)}:Na;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function hy(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function tu(t,e,n){if(!e)return t;const r=n&&n.encode||hy,s=n&&n.serialize;let i;if(s?i=s(e,n):i=b.isURLSearchParams(e)?e.toString():new Yi(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class py{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){b.forEach(this.handlers,function(r){r!==null&&e(r)})}}const xa=py,nu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},my=typeof URLSearchParams<"u"?URLSearchParams:Yi,gy=typeof FormData<"u"?FormData:null,_y=typeof Blob<"u"?Blob:null,yy={isBrowser:!0,classes:{URLSearchParams:my,FormData:gy,Blob:_y},protocols:["http","https","file","blob","url","data"]},ru=typeof window<"u"&&typeof document<"u",by=(t=>ru&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),vy=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Ey=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ru,hasStandardBrowserWebWorkerEnv:vy,hasStandardBrowserEnv:by},Symbol.toStringTag,{value:"Module"})),Xe={...Ey,...yy};function wy(t,e){return fs(t,new Xe.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return Xe.isNode&&b.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function Iy(t){return b.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Ty(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function su(t){function e(n,r,s,i){let o=n[i++];const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&b.isArray(s)?s.length:o,c?(b.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!b.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&b.isArray(s[o])&&(s[o]=Ty(s[o])),!a)}if(b.isFormData(t)&&b.isFunction(t.entries)){const n={};return b.forEachEntry(t,(r,s)=>{e(Iy(r),s,n,0)}),n}return null}function Ry(t,e,n){if(b.isString(t))try{return(e||JSON.parse)(t),b.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Xi={transitional:nu,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=b.isObject(e);if(i&&b.isHTMLForm(e)&&(e=new FormData(e)),b.isFormData(e))return s&&s?JSON.stringify(su(e)):e;if(b.isArrayBuffer(e)||b.isBuffer(e)||b.isStream(e)||b.isFile(e)||b.isBlob(e))return e;if(b.isArrayBufferView(e))return e.buffer;if(b.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return wy(e,this.formSerializer).toString();if((a=b.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return fs(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Ry(e)):e}],transformResponse:[function(e){const n=this.transitional||Xi.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(e&&b.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?z.from(a,z.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Xe.classes.FormData,Blob:Xe.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};b.forEach(["delete","get","head","post","put","patch"],t=>{Xi.headers[t]={}});const Qi=Xi,Sy=b.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ay=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&Sy[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Da=Symbol("internals");function Tn(t){return t&&String(t).trim().toLowerCase()}function Sr(t){return t===!1||t==null?t:b.isArray(t)?t.map(Sr):String(t)}function Cy(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const Oy=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Ns(t,e,n,r,s){if(b.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!b.isString(e)){if(b.isString(r))return e.indexOf(r)!==-1;if(b.isRegExp(r))return r.test(e)}}function Py(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function ky(t,e){const n=b.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class ds{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,l){const f=Tn(c);if(!f)throw new Error("header name must be a non-empty string");const u=b.findKey(s,f);(!u||s[u]===void 0||l===!0||l===void 0&&s[u]!==!1)&&(s[u||c]=Sr(a))}const o=(a,c)=>b.forEach(a,(l,f)=>i(l,f,c));return b.isPlainObject(e)||e instanceof this.constructor?o(e,n):b.isString(e)&&(e=e.trim())&&!Oy(e)?o(Ay(e),n):e!=null&&i(n,e,r),this}get(e,n){if(e=Tn(e),e){const r=b.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return Cy(s);if(b.isFunction(n))return n.call(this,s,r);if(b.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Tn(e),e){const r=b.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Ns(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=Tn(o),o){const a=b.findKey(r,o);a&&(!n||Ns(r,r[a],a,n))&&(delete r[a],s=!0)}}return b.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||Ns(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return b.forEach(this,(s,i)=>{const o=b.findKey(r,i);if(o){n[o]=Sr(s),delete n[i];return}const a=e?Py(i):String(i).trim();a!==i&&delete n[i],n[a]=Sr(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return b.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&b.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Da]=this[Da]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Tn(o);r[a]||(ky(s,o),r[a]=!0)}return b.isArray(e)?e.forEach(i):i(e),this}}ds.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);b.reduceDescriptors(ds.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});b.freezeMethods(ds);const lt=ds;function xs(t,e){const n=this||Qi,r=e||n,s=lt.from(r.headers);let i=r.data;return b.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function iu(t){return!!(t&&t.__CANCEL__)}function sr(t,e,n){z.call(this,t==null?"canceled":t,z.ERR_CANCELED,e,n),this.name="CanceledError"}b.inherits(sr,z,{__CANCEL__:!0});function Ny(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new z("Request failed with status code "+n.status,[z.ERR_BAD_REQUEST,z.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const xy=Xe.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];b.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),b.isString(r)&&o.push("path="+r),b.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Dy(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function My(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function ou(t,e){return t&&!Dy(e)?My(t,e):e}const Ly=Xe.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=b.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Uy(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function By(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),f=r[i];o||(o=l),n[s]=c,r[s]=l;let u=i,p=0;for(;u!==s;)p+=n[u++],u=u%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),l-o<e)return;const g=f&&l-f;return g?Math.round(p*1e3/g):void 0}}function Ma(t,e){let n=0;const r=By(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,c=r(a),l=i<=o;n=i;const f={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-i)/c:void 0,event:s};f[e?"download":"upload"]=!0,t(f)}}const Fy=typeof XMLHttpRequest<"u",Hy=Fy&&function(t){return new Promise(function(n,r){let s=t.data;const i=lt.from(t.headers).normalize();let{responseType:o,withXSRFToken:a}=t,c;function l(){t.cancelToken&&t.cancelToken.unsubscribe(c),t.signal&&t.signal.removeEventListener("abort",c)}let f;if(b.isFormData(s)){if(Xe.hasStandardBrowserEnv||Xe.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((f=i.getContentType())!==!1){const[v,...k]=f?f.split(";").map(O=>O.trim()).filter(Boolean):[];i.setContentType([v||"multipart/form-data",...k].join("; "))}}let u=new XMLHttpRequest;if(t.auth){const v=t.auth.username||"",k=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(v+":"+k))}const p=ou(t.baseURL,t.url);u.open(t.method.toUpperCase(),tu(p,t.params,t.paramsSerializer),!0),u.timeout=t.timeout;function g(){if(!u)return;const v=lt.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),O={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:v,config:t,request:u};Ny(function(B){n(B),l()},function(B){r(B),l()},O),u=null}if("onloadend"in u?u.onloadend=g:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(g)},u.onabort=function(){!u||(r(new z("Request aborted",z.ECONNABORTED,t,u)),u=null)},u.onerror=function(){r(new z("Network Error",z.ERR_NETWORK,t,u)),u=null},u.ontimeout=function(){let k=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const O=t.transitional||nu;t.timeoutErrorMessage&&(k=t.timeoutErrorMessage),r(new z(k,O.clarifyTimeoutError?z.ETIMEDOUT:z.ECONNABORTED,t,u)),u=null},Xe.hasStandardBrowserEnv&&(a&&b.isFunction(a)&&(a=a(t)),a||a!==!1&&Ly(p))){const v=t.xsrfHeaderName&&t.xsrfCookieName&&xy.read(t.xsrfCookieName);v&&i.set(t.xsrfHeaderName,v)}s===void 0&&i.setContentType(null),"setRequestHeader"in u&&b.forEach(i.toJSON(),function(k,O){u.setRequestHeader(O,k)}),b.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),o&&o!=="json"&&(u.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&u.addEventListener("progress",Ma(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Ma(t.onUploadProgress)),(t.cancelToken||t.signal)&&(c=v=>{!u||(r(!v||v.type?new sr(null,t,u):v),u.abort(),u=null)},t.cancelToken&&t.cancelToken.subscribe(c),t.signal&&(t.signal.aborted?c():t.signal.addEventListener("abort",c)));const _=Uy(p);if(_&&Xe.protocols.indexOf(_)===-1){r(new z("Unsupported protocol "+_+":",z.ERR_BAD_REQUEST,t));return}u.send(s||null)})},ui={http:uy,xhr:Hy};b.forEach(ui,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const La=t=>`- ${t}`,$y=t=>b.isFunction(t)||t===null||t===!1,au={getAdapter:t=>{t=b.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!$y(n)&&(r=ui[(o=String(n)).toLowerCase()],r===void 0))throw new z(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(La).join(`
`):" "+La(i[0]):"as no adapter specified";throw new z("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:ui};function Ds(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new sr(null,t)}function Ua(t){return Ds(t),t.headers=lt.from(t.headers),t.data=xs.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),au.getAdapter(t.adapter||Qi.adapter)(t).then(function(r){return Ds(t),r.data=xs.call(t,t.transformResponse,r),r.headers=lt.from(r.headers),r},function(r){return iu(r)||(Ds(t),r&&r.response&&(r.response.data=xs.call(t,t.transformResponse,r.response),r.response.headers=lt.from(r.response.headers))),Promise.reject(r)})}const Ba=t=>t instanceof lt?t.toJSON():t;function pn(t,e){e=e||{};const n={};function r(l,f,u){return b.isPlainObject(l)&&b.isPlainObject(f)?b.merge.call({caseless:u},l,f):b.isPlainObject(f)?b.merge({},f):b.isArray(f)?f.slice():f}function s(l,f,u){if(b.isUndefined(f)){if(!b.isUndefined(l))return r(void 0,l,u)}else return r(l,f,u)}function i(l,f){if(!b.isUndefined(f))return r(void 0,f)}function o(l,f){if(b.isUndefined(f)){if(!b.isUndefined(l))return r(void 0,l)}else return r(void 0,f)}function a(l,f,u){if(u in e)return r(l,f);if(u in t)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,f)=>s(Ba(l),Ba(f),!0)};return b.forEach(Object.keys(Object.assign({},t,e)),function(f){const u=c[f]||s,p=u(t[f],e[f],f);b.isUndefined(p)&&u!==a||(n[f]=p)}),n}const cu="1.6.2",Zi={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Zi[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Fa={};Zi.transitional=function(e,n,r){function s(i,o){return"[Axios v"+cu+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new z(s(o," has been removed"+(n?" in "+n:"")),z.ERR_DEPRECATED);return n&&!Fa[o]&&(Fa[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function jy(t,e,n){if(typeof t!="object")throw new z("options must be an object",z.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new z("option "+i+" must be "+c,z.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new z("Unknown option "+i,z.ERR_BAD_OPTION)}}const fi={assertOptions:jy,validators:Zi},gt=fi.validators;class jr{constructor(e){this.defaults=e,this.interceptors={request:new xa,response:new xa}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=pn(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&fi.assertOptions(r,{silentJSONParsing:gt.transitional(gt.boolean),forcedJSONParsing:gt.transitional(gt.boolean),clarifyTimeoutError:gt.transitional(gt.boolean)},!1),s!=null&&(b.isFunction(s)?n.paramsSerializer={serialize:s}:fi.assertOptions(s,{encode:gt.function,serialize:gt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&b.merge(i.common,i[n.method]);i&&b.forEach(["delete","get","head","post","put","patch","common"],_=>{delete i[_]}),n.headers=lt.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(c=c&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const l=[];this.interceptors.response.forEach(function(v){l.push(v.fulfilled,v.rejected)});let f,u=0,p;if(!c){const _=[Ua.bind(this),void 0];for(_.unshift.apply(_,a),_.push.apply(_,l),p=_.length,f=Promise.resolve(n);u<p;)f=f.then(_[u++],_[u++]);return f}p=a.length;let g=n;for(u=0;u<p;){const _=a[u++],v=a[u++];try{g=_(g)}catch(k){v.call(this,k);break}}try{f=Ua.call(this,g)}catch(_){return Promise.reject(_)}for(u=0,p=l.length;u<p;)f=f.then(l[u++],l[u++]);return f}getUri(e){e=pn(this.defaults,e);const n=ou(e.baseURL,e.url);return tu(n,e.params,e.paramsSerializer)}}b.forEach(["delete","get","head","options"],function(e){jr.prototype[e]=function(n,r){return this.request(pn(r||{},{method:e,url:n,data:(r||{}).data}))}});b.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(pn(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}jr.prototype[e]=n(),jr.prototype[e+"Form"]=n(!0)});const Ar=jr;class eo{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new sr(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new eo(function(s){e=s}),cancel:e}}}const Wy=eo;function Vy(t){return function(n){return t.apply(null,n)}}function zy(t){return b.isObject(t)&&t.isAxiosError===!0}const di={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(di).forEach(([t,e])=>{di[e]=t});const Ky=di;function lu(t){const e=new Ar(t),n=Wl(Ar.prototype.request,e);return b.extend(n,Ar.prototype,e,{allOwnKeys:!0}),b.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return lu(pn(t,s))},n}const de=lu(Qi);de.Axios=Ar;de.CanceledError=sr;de.CancelToken=Wy;de.isCancel=iu;de.VERSION=cu;de.toFormData=fs;de.AxiosError=z;de.Cancel=de.CanceledError;de.all=function(e){return Promise.all(e)};de.spread=Vy;de.isAxiosError=zy;de.mergeConfig=pn;de.AxiosHeaders=lt;de.formToJSON=t=>su(b.isHTMLForm(t)?new FormData(t):t);de.getAdapter=au.getAdapter;de.HttpStatusCode=Ky;de.default=de;const qy=de,uu=tt([]),Jy=tt(1),hi=tt(!1),Gy=tt(1),Yy=tt(8),Xy=qy.create({baseURL:"https://final-project-gpop.onrender.com"}),Qy=async()=>{hi.value=!0;const{data:t,headers:e}=await Xy.get("/api/posts",{});uu.value=t,console.log(t),hi.value=!1},fu=()=>({pages:Jy,activePage:Gy,loading:hi,pageSize:Yy,posts:uu,getPosts:Qy});const ir=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Zy=t=>(gc("data-v-7d0f9b8a"),t=t(),_c(),t),eb={class:"scontainer mx-autp p-4 w-3/4"},tb={class:"min-w-full table-auto mx-auto"},nb=Zy(()=>ae("thead",{class:"bg-gray-200"},[ae("tr",null,[ae("th",{class:"px-4 py-2"},"User"),ae("th",{class:"px-4 py-2"},"Bird"),ae("th",{class:"px-4 py-2"},"Date")])],-1)),rb={class:"px-4 py-2"},sb={class:"px-4 py-2"},ib={class:"px-4 py-2"},ob={__name:"MainTable",setup(t){const{posts:e}=fu();return(n,r)=>(Ce(),We("div",eb,[(Ce(),Xf(hf,null,{default:Pn(()=>[ae("table",tb,[nb,ae("tbody",null,[(Ce(!0),We(Ue,null,Nf(Ae(e),s=>(Ce(),We("tr",{key:s.id,class:"bg-white border-b"},[ae("td",rb,On(s.user.username),1),ae("td",sb,On(s.bird.common_name),1),ae("td",ib,On(new Date(s.created_at).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})),1)]))),128))])])]),_:1}))]))}},ab=ir(ob,[["__scopeId","data-v-7d0f9b8a"]]);const cb={key:0},lb={key:1,class:"wrapper"},ub={__name:"MainPage",setup(t){const{getPosts:e,loading:n}=fu();return Rc(async()=>{await e()}),(r,s)=>Ae(n)?(Ce(),We("p",cb,"Loading...")):(Ce(),We("div",lb,[he(ab)]))}},fb=ir(ub,[["__scopeId","data-v-c0eba89d"]]);const db=t=>(gc("data-v-a6d935b5"),t=t(),_c(),t),hb=["onSubmit"],pb=db(()=>ae("button",{type:"submit",class:"bg-green-500 px-4 py-2"},"Log In",-1)),mb={__name:"LoginPage",setup(t){const{login:e,logout:n}=Ji(),r=jh(),s=Wh(),i=tt(""),o=tt(""),a=async()=>{await e(i.value,o.value)?s.query.redirect?r.push(s.query.redirect):r.push({name:"Home"}):n()};return(c,l)=>(Ce(),We("form",{class:"login-form",onSubmit:Dd(a,["prevent"])},[Ws(ae("input",{"onUpdate:modelValue":l[0]||(l[0]=f=>i.value=f),type:"text",placeholder:"Username"},null,512),[[Bo,i.value]]),Ws(ae("input",{"onUpdate:modelValue":l[1]||(l[1]=f=>o.value=f),type:"password",placeholder:"Password"},null,512),[[Bo,o.value]]),pb],40,hb))}},gb=ir(mb,[["__scopeId","data-v-a6d935b5"]]),_b={};function yb(t,e){return Ce(),We("h1",null,"Settings Page")}const bb=ir(_b,[["render",yb]]),{isAuthenticated:vb}=Ji(),Eb=[{path:"/",name:"Home",component:fb},{path:"/login",name:"Login",component:gb},{path:"/settings",name:"Settings",component:bb,meta:{requiresAuth:!0}}],to=Hh({history:nh(Vh),routes:Eb});to.beforeEach((t,e,n)=>{t.meta.requiresAuth&&!vb.value?n({name:"Login",query:{redirect:t.fullPath}}):n()});const wb={class:"wrapper"},Ib={class:"brand-title"},Tb={class:"menu"},Rb={class:"px-2 py-4"},Sb={key:0},Ab={key:1},Cb={__name:"NavBar",setup(t){const{isAuthenticated:e,logout:n,user:r}=Ji(),s=tt("Bird Watchers");return(i,o)=>{var c;const a=bc("RouterLink");return Ce(),We("nav",null,[ae("div",wb,[he(a,{to:{name:"Home"},class:"brand"},{default:Pn(()=>[ae("span",Ib,On(s.value),1)]),_:1}),ae("div",Tb,[Ws(ae("p",Rb,[vr(" Welcome back "),ae("strong",null,[ae("i",null,On((c=Ae(r))==null?void 0:c.email),1)])],512),[[_d,Ae(e)]]),Ae(e)?(Ce(),We("div",Sb,[he(a,{to:{name:"Settings"},href:"#",class:"menu-item"},{default:Pn(()=>[vr("Settings")]),_:1}),ae("button",{class:"menu-logout",onClick:o[0]||(o[0]=(...l)=>Ae(n)&&Ae(n)(...l))},"Logout")])):(Ce(),We("div",Ab,[he(a,{to:{name:"Login"},href:"#",class:"menu-login"},{default:Pn(()=>[vr("Login")]),_:1})]))])])])}}},Ob=ir(Cb,[["__scopeId","data-v-41b3c175"]]),Pb={__name:"App",setup(t){return(e,n)=>{const r=bc("RouterView");return Ce(),We(Ue,null,[he(Ob),he(r)],64)}}};Ud(Pb).use(to).mount("#app");
