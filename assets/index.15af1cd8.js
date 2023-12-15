(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Ti(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ae={},sn=[],je=()=>{},Cu=()=>!1,Pu=/^on[^a-z]/,ns=t=>Pu.test(t),Ri=t=>t.startsWith("onUpdate:"),ve=Object.assign,Si=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ou=Object.prototype.hasOwnProperty,q=(t,e)=>Ou.call(t,e),B=Array.isArray,on=t=>rr(t)==="[object Map]",rs=t=>rr(t)==="[object Set]",Eo=t=>rr(t)==="[object Date]",j=t=>typeof t=="function",me=t=>typeof t=="string",mn=t=>typeof t=="symbol",ie=t=>t!==null&&typeof t=="object",nc=t=>(ie(t)||j(t))&&j(t.then)&&j(t.catch),rc=Object.prototype.toString,rr=t=>rc.call(t),ku=t=>rr(t).slice(8,-1),sc=t=>rr(t)==="[object Object]",Ai=t=>me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Rr=Ti(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ss=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},xu=/-(\w)/g,rt=ss(t=>t.replace(xu,(e,n)=>n?n.toUpperCase():"")),Nu=/\B([A-Z])/g,Rn=ss(t=>t.replace(Nu,"-$1").toLowerCase()),is=ss(t=>t.charAt(0).toUpperCase()+t.slice(1)),As=ss(t=>t?`on${is(t)}`:""),qt=(t,e)=>!Object.is(t,e),Sr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Br=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Fr=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Du=t=>{const e=me(t)?Number(t):NaN;return isNaN(e)?t:e};let wo;const Js=()=>wo||(wo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ci(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=me(r)?Bu(r):Ci(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(me(t)||ie(t))return t}const Lu=/;(?![^(]*\))/g,Mu=/:([^]+)/,Uu=/\/\*[^]*?\*\//g;function Bu(t){const e={};return t.replace(Uu,"").split(Lu).forEach(n=>{if(n){const r=n.split(Mu);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Pi(t){let e="";if(me(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const r=Pi(t[n]);r&&(e+=r+" ")}else if(ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Fu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$u=Ti(Fu);function ic(t){return!!t||t===""}function Hu(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=os(t[r],e[r]);return n}function os(t,e){if(t===e)return!0;let n=Eo(t),r=Eo(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=mn(t),r=mn(e),n||r)return t===e;if(n=B(t),r=B(e),n||r)return n&&r?Hu(t,e):!1;if(n=ie(t),r=ie(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!os(t[o],e[o]))return!1}}return String(t)===String(e)}function ju(t,e){return t.findIndex(n=>os(n,e))}const We=t=>me(t)?t:t==null?"":B(t)||ie(t)&&(t.toString===rc||!j(t.toString))?JSON.stringify(t,oc,2):String(t),oc=(t,e)=>e&&e.__v_isRef?oc(t,e.value):on(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:rs(e)?{[`Set(${e.size})`]:[...e.values()]}:ie(e)&&!B(e)&&!sc(e)?String(e):e;let Fe;class Wu{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Fe,!e&&Fe&&(this.index=(Fe.scopes||(Fe.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Fe;try{return Fe=this,e()}finally{Fe=n}}}on(){Fe=this}off(){Fe=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Vu(t,e=Fe){e&&e.active&&e.effects.push(t)}function zu(){return Fe}const Oi=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ac=t=>(t.w&xt)>0,cc=t=>(t.n&xt)>0,Ku=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=xt},qu=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];ac(s)&&!cc(s)?s.delete(t):e[n++]=s,s.w&=~xt,s.n&=~xt}e.length=n}},Gs=new WeakMap;let Mn=0,xt=1;const Ys=30;let He;const Vt=Symbol(""),Xs=Symbol("");class ki{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Vu(this,r)}run(){if(!this.active)return this.fn();let e=He,n=Ct;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=He,He=this,Ct=!0,xt=1<<++Mn,Mn<=Ys?Ku(this):Io(this),this.fn()}finally{Mn<=Ys&&qu(this),xt=1<<--Mn,He=this.parent,Ct=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){He===this?this.deferStop=!0:this.active&&(Io(this),this.onStop&&this.onStop(),this.active=!1)}}function Io(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Ct=!0;const lc=[];function Sn(){lc.push(Ct),Ct=!1}function An(){const t=lc.pop();Ct=t===void 0?!0:t}function Pe(t,e,n){if(Ct&&He){let r=Gs.get(t);r||Gs.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Oi()),uc(s)}}function uc(t,e){let n=!1;Mn<=Ys?cc(t)||(t.n|=xt,n=!ac(t)):n=!t.has(He),n&&(t.add(He),He.deps.push(t))}function ft(t,e,n,r,s,i){const o=Gs.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t)){const c=Number(r);o.forEach((l,f)=>{(f==="length"||!mn(f)&&f>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?Ai(n)&&a.push(o.get("length")):(a.push(o.get(Vt)),on(t)&&a.push(o.get(Xs)));break;case"delete":B(t)||(a.push(o.get(Vt)),on(t)&&a.push(o.get(Xs)));break;case"set":on(t)&&a.push(o.get(Vt));break}if(a.length===1)a[0]&&Qs(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Qs(Oi(c))}}function Qs(t,e){const n=B(t)?t:[...t];for(const r of n)r.computed&&To(r);for(const r of n)r.computed||To(r)}function To(t,e){(t!==He||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Ju=Ti("__proto__,__v_isRef,__isVue"),fc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(mn)),Ro=Gu();function Gu(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Y(this);for(let i=0,o=this.length;i<o;i++)Pe(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Y)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Sn();const r=Y(this)[e].apply(this,n);return An(),r}}),t}function Yu(t){const e=Y(this);return Pe(e,"has",t),e.hasOwnProperty(t)}class dc{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(s?i?uf:gc:i?mc:pc).get(e))return e;const o=B(e);if(!s){if(o&&q(Ro,n))return Reflect.get(Ro,n,r);if(n==="hasOwnProperty")return Yu}const a=Reflect.get(e,n,r);return(mn(n)?fc.has(n):Ju(n))||(s||Pe(e,"get",n),i)?a:Te(a)?o&&Ai(n)?a:a.value:ie(a)?s?yc(a):cs(a):a}}class hc extends dc{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(gn(i)&&Te(i)&&!Te(r))return!1;if(!this._shallow&&(!$r(r)&&!gn(r)&&(i=Y(i),r=Y(r)),!B(e)&&Te(i)&&!Te(r)))return i.value=r,!0;const o=B(e)&&Ai(n)?Number(n)<e.length:q(e,n),a=Reflect.set(e,n,r,s);return e===Y(s)&&(o?qt(r,i)&&ft(e,"set",n,r):ft(e,"add",n,r)),a}deleteProperty(e,n){const r=q(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&ft(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!mn(n)||!fc.has(n))&&Pe(e,"has",n),r}ownKeys(e){return Pe(e,"iterate",B(e)?"length":Vt),Reflect.ownKeys(e)}}class Xu extends dc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Qu=new hc,Zu=new Xu,ef=new hc(!0),xi=t=>t,as=t=>Reflect.getPrototypeOf(t);function yr(t,e,n=!1,r=!1){t=t.__v_raw;const s=Y(t),i=Y(e);n||(qt(e,i)&&Pe(s,"get",e),Pe(s,"get",i));const{has:o}=as(s),a=r?xi:n?Li:zn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function br(t,e=!1){const n=this.__v_raw,r=Y(n),s=Y(t);return e||(qt(t,s)&&Pe(r,"has",t),Pe(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function vr(t,e=!1){return t=t.__v_raw,!e&&Pe(Y(t),"iterate",Vt),Reflect.get(t,"size",t)}function So(t){t=Y(t);const e=Y(this);return as(e).has.call(e,t)||(e.add(t),ft(e,"add",t,t)),this}function Ao(t,e){e=Y(e);const n=Y(this),{has:r,get:s}=as(n);let i=r.call(n,t);i||(t=Y(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?qt(e,o)&&ft(n,"set",t,e):ft(n,"add",t,e),this}function Co(t){const e=Y(this),{has:n,get:r}=as(e);let s=n.call(e,t);s||(t=Y(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&ft(e,"delete",t,void 0),i}function Po(){const t=Y(this),e=t.size!==0,n=t.clear();return e&&ft(t,"clear",void 0,void 0),n}function Er(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Y(o),c=e?xi:t?Li:zn;return!t&&Pe(a,"iterate",Vt),o.forEach((l,f)=>r.call(s,c(l),c(f),i))}}function wr(t,e,n){return function(...r){const s=this.__v_raw,i=Y(s),o=on(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),f=n?xi:e?Li:zn;return!e&&Pe(i,"iterate",c?Xs:Vt),{next(){const{value:u,done:p}=l.next();return p?{value:u,done:p}:{value:a?[f(u[0]),f(u[1])]:f(u),done:p}},[Symbol.iterator](){return this}}}}function _t(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function tf(){const t={get(i){return yr(this,i)},get size(){return vr(this)},has:br,add:So,set:Ao,delete:Co,clear:Po,forEach:Er(!1,!1)},e={get(i){return yr(this,i,!1,!0)},get size(){return vr(this)},has:br,add:So,set:Ao,delete:Co,clear:Po,forEach:Er(!1,!0)},n={get(i){return yr(this,i,!0)},get size(){return vr(this,!0)},has(i){return br.call(this,i,!0)},add:_t("add"),set:_t("set"),delete:_t("delete"),clear:_t("clear"),forEach:Er(!0,!1)},r={get(i){return yr(this,i,!0,!0)},get size(){return vr(this,!0)},has(i){return br.call(this,i,!0)},add:_t("add"),set:_t("set"),delete:_t("delete"),clear:_t("clear"),forEach:Er(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=wr(i,!1,!1),n[i]=wr(i,!0,!1),e[i]=wr(i,!1,!0),r[i]=wr(i,!0,!0)}),[t,n,e,r]}const[nf,rf,sf,of]=tf();function Ni(t,e){const n=e?t?of:sf:t?rf:nf;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(q(n,s)&&s in r?n:r,s,i)}const af={get:Ni(!1,!1)},cf={get:Ni(!1,!0)},lf={get:Ni(!0,!1)},pc=new WeakMap,mc=new WeakMap,gc=new WeakMap,uf=new WeakMap;function ff(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function df(t){return t.__v_skip||!Object.isExtensible(t)?0:ff(ku(t))}function cs(t){return gn(t)?t:Di(t,!1,Qu,af,pc)}function _c(t){return Di(t,!1,ef,cf,mc)}function yc(t){return Di(t,!0,Zu,lf,gc)}function Di(t,e,n,r,s){if(!ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=df(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function an(t){return gn(t)?an(t.__v_raw):!!(t&&t.__v_isReactive)}function gn(t){return!!(t&&t.__v_isReadonly)}function $r(t){return!!(t&&t.__v_isShallow)}function bc(t){return an(t)||gn(t)}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function vc(t){return Br(t,"__v_skip",!0),t}const zn=t=>ie(t)?cs(t):t,Li=t=>ie(t)?yc(t):t;function Ec(t){Ct&&He&&(t=Y(t),uc(t.dep||(t.dep=Oi())))}function wc(t,e){t=Y(t);const n=t.dep;n&&Qs(n)}function Te(t){return!!(t&&t.__v_isRef===!0)}function _e(t){return Ic(t,!1)}function hf(t){return Ic(t,!0)}function Ic(t,e){return Te(t)?t:new pf(t,e)}class pf{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Y(e),this._value=n?e:zn(e)}get value(){return Ec(this),this._value}set value(e){const n=this.__v_isShallow||$r(e)||gn(e);e=n?e:Y(e),qt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:zn(e),wc(this))}}function ce(t){return Te(t)?t.value:t}const mf={get:(t,e,n)=>ce(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Te(s)&&!Te(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Tc(t){return an(t)?t:new Proxy(t,mf)}class gf{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ki(e,()=>{this._dirty||(this._dirty=!0,wc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Y(this);return Ec(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function _f(t,e,n=!1){let r,s;const i=j(t);return i?(r=t,s=je):(r=t.get,s=t.set),new gf(r,s,i||!s,n)}function Pt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){sr(i,e,n)}return s}function Ve(t,e,n,r){if(j(t)){const i=Pt(t,e,n,r);return i&&nc(i)&&i.catch(o=>{sr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ve(t[i],e,n,r));return s}function sr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Pt(c,null,10,[t,o,a]);return}}yf(t,n,s,r)}function yf(t,e,n,r=!0){console.error(t)}let Kn=!1,Zs=!1;const Ie=[];let Qe=0;const cn=[];let at=null,Ft=0;const Rc=Promise.resolve();let Mi=null;function Sc(t){const e=Mi||Rc;return t?e.then(this?t.bind(this):t):e}function bf(t){let e=Qe+1,n=Ie.length;for(;e<n;){const r=e+n>>>1,s=Ie[r],i=qn(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Ui(t){(!Ie.length||!Ie.includes(t,Kn&&t.allowRecurse?Qe+1:Qe))&&(t.id==null?Ie.push(t):Ie.splice(bf(t.id),0,t),Ac())}function Ac(){!Kn&&!Zs&&(Zs=!0,Mi=Rc.then(Pc))}function vf(t){const e=Ie.indexOf(t);e>Qe&&Ie.splice(e,1)}function ei(t){B(t)?cn.push(...t):(!at||!at.includes(t,t.allowRecurse?Ft+1:Ft))&&cn.push(t),Ac()}function Oo(t,e=Kn?Qe+1:0){for(;e<Ie.length;e++){const n=Ie[e];n&&n.pre&&(Ie.splice(e,1),e--,n())}}function Cc(t){if(cn.length){const e=[...new Set(cn)];if(cn.length=0,at){at.push(...e);return}for(at=e,at.sort((n,r)=>qn(n)-qn(r)),Ft=0;Ft<at.length;Ft++)at[Ft]();at=null,Ft=0}}const qn=t=>t.id==null?1/0:t.id,Ef=(t,e)=>{const n=qn(t)-qn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Pc(t){Zs=!1,Kn=!0,Ie.sort(Ef);const e=je;try{for(Qe=0;Qe<Ie.length;Qe++){const n=Ie[Qe];n&&n.active!==!1&&Pt(n,null,14)}}finally{Qe=0,Ie.length=0,Cc(),Kn=!1,Mi=null,(Ie.length||cn.length)&&Pc()}}function wf(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ae;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:u,trim:p}=r[f]||ae;p&&(s=n.map(g=>me(g)?g.trim():g)),u&&(s=n.map(Fr))}let a,c=r[a=As(e)]||r[a=As(rt(e))];!c&&i&&(c=r[a=As(Rn(e))]),c&&Ve(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ve(l,t,6,s)}}function Oc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!j(t)){const c=l=>{const f=Oc(l,e,!0);f&&(a=!0,ve(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ie(t)&&r.set(t,null),null):(B(i)?i.forEach(c=>o[c]=null):ve(o,i),ie(t)&&r.set(t,o),o)}function ls(t,e){return!t||!ns(e)?!1:(e=e.slice(2).replace(/Once$/,""),q(t,e[0].toLowerCase()+e.slice(1))||q(t,Rn(e))||q(t,e))}let Le=null,us=null;function Hr(t){const e=Le;return Le=t,us=t&&t.type.__scopeId||null,e}function Bi(t){us=t}function Fi(){us=null}function ln(t,e=Le,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&jo(-1);const i=Hr(e);let o;try{o=t(...s)}finally{Hr(i),r._d&&jo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Cs(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:f,renderCache:u,data:p,setupState:g,ctx:_,inheritAttrs:v}=t;let k,P;const x=Hr(t);try{if(n.shapeFlag&4){const R=s||r,$=R;k=$e(f.call($,R,u,i,g,p,_)),P=c}else{const R=e;k=$e(R.length>1?R(i,{attrs:c,slots:a,emit:l}):R(i,null)),P=e.props?c:Tf(c)}}catch(R){Hn.length=0,sr(R,t,1),k=fe(ht)}let F=k;if(P&&v!==!1){const R=Object.keys(P),{shapeFlag:$}=F;R.length&&$&7&&(o&&R.some(Ri)&&(P=Rf(P,o)),F=yn(F,P))}return n.dirs&&(F=yn(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),k=F,Hr(x),k}function If(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(Vr(r)){if(r.type!==ht||r.children==="v-if"){if(e)return;e=r}}else return}return e}const Tf=t=>{let e;for(const n in t)(n==="class"||n==="style"||ns(n))&&((e||(e={}))[n]=t[n]);return e},Rf=(t,e)=>{const n={};for(const r in t)(!Ri(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Sf(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ko(r,o,l):!!o;if(c&8){const f=e.dynamicProps;for(let u=0;u<f.length;u++){const p=f[u];if(o[p]!==r[p]&&!ls(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ko(r,o,l):!0:!!o;return!1}function ko(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ls(n,i))return!0}return!1}function $i({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const kc="components";function xc(t,e){return Cf(kc,t,!0,e)||t}const Af=Symbol.for("v-ndc");function Cf(t,e,n=!0,r=!1){const s=Le||be;if(s){const i=s.type;if(t===kc){const a=Td(i,!1);if(a&&(a===e||a===rt(e)||a===is(rt(e))))return i}const o=xo(s[t]||i[t],e)||xo(s.appContext[t],e);return!o&&r?i:o}}function xo(t,e){return t&&(t[e]||t[rt(e)]||t[is(rt(e))])}const Pf=t=>t.__isSuspense,Of={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,c,l){t==null?kf(e,n,r,s,i,o,a,c,l):xf(t,e,n,r,s,o,a,c,l)},hydrate:Nf,create:Hi,normalize:Df},Nc=Of;function Jn(t,e){const n=t.props&&t.props[e];j(n)&&n()}function kf(t,e,n,r,s,i,o,a,c){const{p:l,o:{createElement:f}}=c,u=f("div"),p=t.suspense=Hi(t,s,r,e,u,n,i,o,a,c);l(null,p.pendingBranch=t.ssContent,u,null,r,p,i,o),p.deps>0?(Jn(t,"onPending"),Jn(t,"onFallback"),l(null,t.ssFallback,e,n,r,null,i,o),un(p,t.ssFallback)):p.resolve(!1,!0)}function xf(t,e,n,r,s,i,o,a,{p:c,um:l,o:{createElement:f}}){const u=e.suspense=t.suspense;u.vnode=e,e.el=t.el;const p=e.ssContent,g=e.ssFallback,{activeBranch:_,pendingBranch:v,isInFallback:k,isHydrating:P}=u;if(v)u.pendingBranch=p,It(p,v)?(c(v,p,u.hiddenContainer,null,s,u,i,o,a),u.deps<=0?u.resolve():k&&(c(_,g,n,r,s,null,i,o,a),un(u,g))):(u.pendingId++,P?(u.isHydrating=!1,u.activeBranch=v):l(v,s,u),u.deps=0,u.effects.length=0,u.hiddenContainer=f("div"),k?(c(null,p,u.hiddenContainer,null,s,u,i,o,a),u.deps<=0?u.resolve():(c(_,g,n,r,s,null,i,o,a),un(u,g))):_&&It(p,_)?(c(_,p,n,r,s,u,i,o,a),u.resolve(!0)):(c(null,p,u.hiddenContainer,null,s,u,i,o,a),u.deps<=0&&u.resolve()));else if(_&&It(p,_))c(_,p,n,r,s,u,i,o,a),un(u,p);else if(Jn(e,"onPending"),u.pendingBranch=p,u.pendingId++,c(null,p,u.hiddenContainer,null,s,u,i,o,a),u.deps<=0)u.resolve();else{const{timeout:x,pendingId:F}=u;x>0?setTimeout(()=>{u.pendingId===F&&u.fallback(g)},x):x===0&&u.fallback(g)}}function Hi(t,e,n,r,s,i,o,a,c,l,f=!1){const{p:u,m:p,um:g,n:_,o:{parentNode:v,remove:k}}=l;let P;const x=Mf(t);x&&e!=null&&e.pendingBranch&&(P=e.pendingId,e.deps++);const F=t.props?Du(t.props.timeout):void 0,R={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:s,anchor:i,deps:0,pendingId:0,timeout:typeof F=="number"?F:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:f,isUnmounted:!1,effects:[],resolve($=!1,J=!1){const{vnode:oe,activeBranch:ne,pendingBranch:ue,pendingId:he,effects:ye,parentComponent:xe,container:Ee}=R;let Je=!1;if(R.isHydrating)R.isHydrating=!1;else if(!$){Je=ne&&ue.transition&&ue.transition.mode==="out-in",Je&&(ne.transition.afterLeave=()=>{he===R.pendingId&&(p(ue,Ee,G,0),ei(ye))});let{anchor:G}=R;ne&&(G=_(ne),g(ne,xe,R,!0)),Je||p(ue,Ee,G,0)}un(R,ue),R.pendingBranch=null,R.isInFallback=!1;let Ne=R.parent,de=!1;for(;Ne;){if(Ne.pendingBranch){Ne.effects.push(...ye),de=!0;break}Ne=Ne.parent}!de&&!Je&&ei(ye),R.effects=[],x&&e&&e.pendingBranch&&P===e.pendingId&&(e.deps--,e.deps===0&&!J&&e.resolve()),Jn(oe,"onResolve")},fallback($){if(!R.pendingBranch)return;const{vnode:J,activeBranch:oe,parentComponent:ne,container:ue,isSVG:he}=R;Jn(J,"onFallback");const ye=_(oe),xe=()=>{!R.isInFallback||(u(null,$,ue,ye,ne,null,he,a,c),un(R,$))},Ee=$.transition&&$.transition.mode==="out-in";Ee&&(oe.transition.afterLeave=xe),R.isInFallback=!0,g(oe,ne,null,!0),Ee||xe()},move($,J,oe){R.activeBranch&&p(R.activeBranch,$,J,oe),R.container=$},next(){return R.activeBranch&&_(R.activeBranch)},registerDep($,J){const oe=!!R.pendingBranch;oe&&R.deps++;const ne=$.vnode.el;$.asyncDep.catch(ue=>{sr(ue,$,0)}).then(ue=>{if($.isUnmounted||R.isUnmounted||R.pendingId!==$.suspenseId)return;$.asyncResolved=!0;const{vnode:he}=$;oi($,ue,!1),ne&&(he.el=ne);const ye=!ne&&$.subTree.el;J($,he,v(ne||$.subTree.el),ne?null:_($.subTree),R,o,c),ye&&k(ye),$i($,he.el),oe&&--R.deps===0&&R.resolve()})},unmount($,J){R.isUnmounted=!0,R.activeBranch&&g(R.activeBranch,n,$,J),R.pendingBranch&&g(R.pendingBranch,n,$,J)}};return R}function Nf(t,e,n,r,s,i,o,a,c){const l=e.suspense=Hi(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),f=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(!1,!0),f}function Df(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=No(r?n.default:n),t.ssFallback=r?No(n.fallback):fe(ht)}function No(t){let e;if(j(t)){const n=_n&&t._c;n&&(t._d=!1,te()),t=t(),n&&(t._d=!0,e=Me,Jc())}return B(t)&&(t=If(t)),t=$e(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Lf(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):ei(t)}function un(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,s=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=s,$i(r,s))}function Mf(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}const Ir={};function Ar(t,e,n){return Dc(t,e,n)}function Dc(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ae){var a;const c=zu()===((a=be)==null?void 0:a.scope)?be:null;let l,f=!1,u=!1;if(Te(t)?(l=()=>t.value,f=$r(t)):an(t)?(l=()=>t,r=!0):B(t)?(u=!0,f=t.some(R=>an(R)||$r(R)),l=()=>t.map(R=>{if(Te(R))return R.value;if(an(R))return jt(R);if(j(R))return Pt(R,c,2)})):j(t)?e?l=()=>Pt(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return p&&p(),Ve(t,c,3,[g])}:l=je,e&&r){const R=l;l=()=>jt(R())}let p,g=R=>{p=x.onStop=()=>{Pt(R,c,4),p=x.onStop=void 0}},_;if(Gn)if(g=je,e?n&&Ve(e,c,3,[l(),u?[]:void 0,g]):l(),s==="sync"){const R=Ad();_=R.__watcherHandles||(R.__watcherHandles=[])}else return je;let v=u?new Array(t.length).fill(Ir):Ir;const k=()=>{if(!!x.active)if(e){const R=x.run();(r||f||(u?R.some(($,J)=>qt($,v[J])):qt(R,v)))&&(p&&p(),Ve(e,c,3,[R,v===Ir?void 0:u&&v[0]===Ir?[]:v,g]),v=R)}else x.run()};k.allowRecurse=!!e;let P;s==="sync"?P=k:s==="post"?P=()=>Ce(k,c&&c.suspense):(k.pre=!0,c&&(k.id=c.uid),P=()=>Ui(k));const x=new ki(l,P);e?n?k():v=x.run():s==="post"?Ce(x.run.bind(x),c&&c.suspense):x.run();const F=()=>{x.stop(),c&&c.scope&&Si(c.scope.effects,x)};return _&&_.push(F),F}function Uf(t,e,n){const r=this.proxy,s=me(t)?t.includes(".")?Lc(r,t):()=>r[t]:t.bind(r,r);let i;j(e)?i=e:(i=e.handler,n=e);const o=be;bn(this);const a=Dc(s,i.bind(r),n);return o?bn(o):zt(),a}function Lc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function jt(t,e){if(!ie(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Te(t))jt(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)jt(t[n],e);else if(rs(t)||on(t))t.forEach(n=>{jt(n,e)});else if(sc(t))for(const n in t)jt(t[n],e);return t}function Ze(t,e){const n=Le;if(n===null)return t;const r=ms(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ae]=e[i];o&&(j(o)&&(o={mounted:o,updated:o}),o.deep&&jt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Mt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Sn(),Ve(c,n,8,[t.el,a,t,e]),An())}}/*! #__NO_SIDE_EFFECTS__ */function Mc(t,e){return j(t)?(()=>ve({name:t.name},e,{setup:t}))():t}const Cr=t=>!!t.type.__asyncLoader,Uc=t=>t.type.__isKeepAlive;function Bf(t,e){Bc(t,"a",e)}function Ff(t,e){Bc(t,"da",e)}function Bc(t,e,n=be){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(fs(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Uc(s.parent.vnode)&&$f(r,e,n,s),s=s.parent}}function $f(t,e,n,r){const s=fs(e,t,r,!0);Fc(()=>{Si(r[e],s)},n)}function fs(t,e,n=be,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Sn(),bn(n);const a=Ve(e,n,t,o);return zt(),An(),a});return r?s.unshift(i):s.push(i),i}}const mt=t=>(e,n=be)=>(!Gn||t==="sp")&&fs(t,(...r)=>e(...r),n),Hf=mt("bm"),ds=mt("m"),jf=mt("bu"),Wf=mt("u"),Vf=mt("bum"),Fc=mt("um"),zf=mt("sp"),Kf=mt("rtg"),qf=mt("rtc");function Jf(t,e=be){fs("ec",t,e)}function ji(t,e,n,r){let s;const i=n&&n[r];if(B(t)||me(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ie(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const ti=t=>t?Xc(t)?ms(t)||t.proxy:ti(t.parent):null,$n=ve(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ti(t.parent),$root:t=>ti(t.root),$emit:t=>t.emit,$options:t=>Wi(t),$forceUpdate:t=>t.f||(t.f=()=>Ui(t.update)),$nextTick:t=>t.n||(t.n=Sc.bind(t.proxy)),$watch:t=>Uf.bind(t)}),Ps=(t,e)=>t!==ae&&!t.__isScriptSetup&&q(t,e),Gf={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ps(r,e))return o[e]=1,r[e];if(s!==ae&&q(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&q(l,e))return o[e]=3,i[e];if(n!==ae&&q(n,e))return o[e]=4,n[e];ni&&(o[e]=0)}}const f=$n[e];let u,p;if(f)return e==="$attrs"&&Pe(t,"get",e),f(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==ae&&q(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,q(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ps(s,e)?(s[e]=n,!0):r!==ae&&q(r,e)?(r[e]=n,!0):q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ae&&q(t,o)||Ps(e,o)||(a=i[0])&&q(a,o)||q(r,o)||q($n,o)||q(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Do(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ni=!0;function Yf(t){const e=Wi(t),n=t.proxy,r=t.ctx;ni=!1,e.beforeCreate&&Lo(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:f,beforeMount:u,mounted:p,beforeUpdate:g,updated:_,activated:v,deactivated:k,beforeDestroy:P,beforeUnmount:x,destroyed:F,unmounted:R,render:$,renderTracked:J,renderTriggered:oe,errorCaptured:ne,serverPrefetch:ue,expose:he,inheritAttrs:ye,components:xe,directives:Ee,filters:Je}=e;if(l&&Xf(l,r,null),o)for(const G in o){const X=o[G];j(X)&&(r[G]=X.bind(n))}if(s){const G=s.call(n,n);ie(G)&&(t.data=cs(G))}if(ni=!0,i)for(const G in i){const X=i[G],it=j(X)?X.bind(n,n):j(X.get)?X.get.bind(n,n):je,gt=!j(X)&&j(X.set)?X.set.bind(n):je,Ge=De({get:it,set:gt});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:Ae=>Ge.value=Ae})}if(a)for(const G in a)$c(a[G],r,n,G);if(c){const G=j(c)?c.call(n):c;Reflect.ownKeys(G).forEach(X=>{Pr(X,G[X])})}f&&Lo(f,t,"c");function de(G,X){B(X)?X.forEach(it=>G(it.bind(n))):X&&G(X.bind(n))}if(de(Hf,u),de(ds,p),de(jf,g),de(Wf,_),de(Bf,v),de(Ff,k),de(Jf,ne),de(qf,J),de(Kf,oe),de(Vf,x),de(Fc,R),de(zf,ue),B(he))if(he.length){const G=t.exposed||(t.exposed={});he.forEach(X=>{Object.defineProperty(G,X,{get:()=>n[X],set:it=>n[X]=it})})}else t.exposed||(t.exposed={});$&&t.render===je&&(t.render=$),ye!=null&&(t.inheritAttrs=ye),xe&&(t.components=xe),Ee&&(t.directives=Ee)}function Xf(t,e,n=je){B(t)&&(t=ri(t));for(const r in t){const s=t[r];let i;ie(s)?"default"in s?i=ze(s.from||r,s.default,!0):i=ze(s.from||r):i=ze(s),Te(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Lo(t,e,n){Ve(B(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function $c(t,e,n,r){const s=r.includes(".")?Lc(n,r):()=>n[r];if(me(t)){const i=e[t];j(i)&&Ar(s,i)}else if(j(t))Ar(s,t.bind(n));else if(ie(t))if(B(t))t.forEach(i=>$c(i,e,n,r));else{const i=j(t.handler)?t.handler.bind(n):e[t.handler];j(i)&&Ar(s,i,t)}}function Wi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>jr(c,l,o,!0)),jr(c,e,o)),ie(e)&&i.set(e,c),c}function jr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&jr(t,i,n,!0),s&&s.forEach(o=>jr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Qf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Qf={data:Mo,props:Uo,emits:Uo,methods:Un,computed:Un,beforeCreate:Se,created:Se,beforeMount:Se,mounted:Se,beforeUpdate:Se,updated:Se,beforeDestroy:Se,beforeUnmount:Se,destroyed:Se,unmounted:Se,activated:Se,deactivated:Se,errorCaptured:Se,serverPrefetch:Se,components:Un,directives:Un,watch:ed,provide:Mo,inject:Zf};function Mo(t,e){return e?t?function(){return ve(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function Zf(t,e){return Un(ri(t),ri(e))}function ri(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Se(t,e){return t?[...new Set([].concat(t,e))]:e}function Un(t,e){return t?ve(Object.create(null),t,e):e}function Uo(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:ve(Object.create(null),Do(t),Do(e!=null?e:{})):e}function ed(t,e){if(!t)return e;if(!e)return t;const n=ve(Object.create(null),t);for(const r in e)n[r]=Se(t[r],e[r]);return n}function Hc(){return{app:null,config:{isNativeTag:Cu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let td=0;function nd(t,e){return function(r,s=null){j(r)||(r=ve({},r)),s!=null&&!ie(s)&&(s=null);const i=Hc(),o=new WeakSet;let a=!1;const c=i.app={_uid:td++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Cd,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&j(l.install)?(o.add(l),l.install(c,...f)):j(l)&&(o.add(l),l(c,...f))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,f){return f?(i.components[l]=f,c):i.components[l]},directive(l,f){return f?(i.directives[l]=f,c):i.directives[l]},mount(l,f,u){if(!a){const p=fe(r,s);return p.appContext=i,f&&e?e(p,l):t(p,l,u),a=!0,c._container=l,l.__vue_app__=c,ms(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,f){return i.provides[l]=f,c},runWithContext(l){Wr=c;try{return l()}finally{Wr=null}}};return c}}let Wr=null;function Pr(t,e){if(be){let n=be.provides;const r=be.parent&&be.parent.provides;r===n&&(n=be.provides=Object.create(r)),n[t]=e}}function ze(t,e,n=!1){const r=be||Le;if(r||Wr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Wr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&j(e)?e.call(r&&r.proxy):e}}function rd(t,e,n,r=!1){const s={},i={};Br(i,ps,1),t.propsDefaults=Object.create(null),jc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:_c(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function sd(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Y(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let u=0;u<f.length;u++){let p=f[u];if(ls(t.emitsOptions,p))continue;const g=e[p];if(c)if(q(i,p))g!==i[p]&&(i[p]=g,l=!0);else{const _=rt(p);s[_]=si(c,a,_,g,t,!1)}else g!==i[p]&&(i[p]=g,l=!0)}}}else{jc(t,e,s,i)&&(l=!0);let f;for(const u in a)(!e||!q(e,u)&&((f=Rn(u))===u||!q(e,f)))&&(c?n&&(n[u]!==void 0||n[f]!==void 0)&&(s[u]=si(c,a,u,void 0,t,!0)):delete s[u]);if(i!==a)for(const u in i)(!e||!q(e,u)&&!0)&&(delete i[u],l=!0)}l&&ft(t,"set","$attrs")}function jc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Rr(c))continue;const l=e[c];let f;s&&q(s,f=rt(c))?!i||!i.includes(f)?n[f]=l:(a||(a={}))[f]=l:ls(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=Y(n),l=a||ae;for(let f=0;f<i.length;f++){const u=i[f];n[u]=si(s,c,u,l[u],t,!q(l,u))}}return o}function si(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=q(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&j(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(bn(s),r=l[n]=c.call(null,e),zt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Rn(n))&&(r=!0))}return r}function Wc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!j(t)){const f=u=>{c=!0;const[p,g]=Wc(u,e,!0);ve(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return ie(t)&&r.set(t,sn),sn;if(B(i))for(let f=0;f<i.length;f++){const u=rt(i[f]);Bo(u)&&(o[u]=ae)}else if(i)for(const f in i){const u=rt(f);if(Bo(u)){const p=i[f],g=o[u]=B(p)||j(p)?{type:p}:ve({},p);if(g){const _=Ho(Boolean,g.type),v=Ho(String,g.type);g[0]=_>-1,g[1]=v<0||_<v,(_>-1||q(g,"default"))&&a.push(u)}}}const l=[o,a];return ie(t)&&r.set(t,l),l}function Bo(t){return t[0]!=="$"}function Fo(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function $o(t,e){return Fo(t)===Fo(e)}function Ho(t,e){return B(e)?e.findIndex(n=>$o(n,t)):j(e)&&$o(e,t)?0:-1}const Vc=t=>t[0]==="_"||t==="$stable",Vi=t=>B(t)?t.map($e):[$e(t)],id=(t,e,n)=>{if(e._n)return e;const r=ln((...s)=>Vi(e(...s)),n);return r._c=!1,r},zc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Vc(s))continue;const i=t[s];if(j(i))e[s]=id(s,i,r);else if(i!=null){const o=Vi(i);e[s]=()=>o}}},Kc=(t,e)=>{const n=Vi(e);t.slots.default=()=>n},od=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Y(e),Br(e,"_",n)):zc(e,t.slots={})}else t.slots={},e&&Kc(t,e);Br(t.slots,ps,1)},ad=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ae;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ve(s,e),!n&&a===1&&delete s._):(i=!e.$stable,zc(e,s)),o=e}else e&&(Kc(t,e),o={default:1});if(i)for(const a in s)!Vc(a)&&o[a]==null&&delete s[a]};function ii(t,e,n,r,s=!1){if(B(t)){t.forEach((p,g)=>ii(p,e&&(B(e)?e[g]:e),n,r,s));return}if(Cr(r)&&!s)return;const i=r.shapeFlag&4?ms(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,f=a.refs===ae?a.refs={}:a.refs,u=a.setupState;if(l!=null&&l!==c&&(me(l)?(f[l]=null,q(u,l)&&(u[l]=null)):Te(l)&&(l.value=null)),j(c))Pt(c,a,12,[o,f]);else{const p=me(c),g=Te(c);if(p||g){const _=()=>{if(t.f){const v=p?q(u,c)?u[c]:f[c]:c.value;s?B(v)&&Si(v,i):B(v)?v.includes(i)||v.push(i):p?(f[c]=[i],q(u,c)&&(u[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else p?(f[c]=o,q(u,c)&&(u[c]=o)):g&&(c.value=o,t.k&&(f[t.k]=o))};o?(_.id=-1,Ce(_,n)):_()}}}const Ce=Lf;function cd(t){return ld(t)}function ld(t,e){const n=Js();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:u,nextSibling:p,setScopeId:g=je,insertStaticContent:_}=t,v=(d,h,m,y=null,w=null,I=null,O=!1,S=null,A=!!h.dynamicChildren)=>{if(d===h)return;d&&!It(d,h)&&(y=E(d),Ae(d,w,I,!0),d=null),h.patchFlag===-2&&(A=!1,h.dynamicChildren=null);const{type:T,ref:M,shapeFlag:D}=h;switch(T){case hs:k(d,h,m,y);break;case ht:P(d,h,m,y);break;case Os:d==null&&x(h,m,y,O);break;case ke:xe(d,h,m,y,w,I,O,S,A);break;default:D&1?$(d,h,m,y,w,I,O,S,A):D&6?Ee(d,h,m,y,w,I,O,S,A):(D&64||D&128)&&T.process(d,h,m,y,w,I,O,S,A,C)}M!=null&&w&&ii(M,d&&d.ref,I,h||d,!h)},k=(d,h,m,y)=>{if(d==null)r(h.el=a(h.children),m,y);else{const w=h.el=d.el;h.children!==d.children&&l(w,h.children)}},P=(d,h,m,y)=>{d==null?r(h.el=c(h.children||""),m,y):h.el=d.el},x=(d,h,m,y)=>{[d.el,d.anchor]=_(d.children,h,m,y,d.el,d.anchor)},F=({el:d,anchor:h},m,y)=>{let w;for(;d&&d!==h;)w=p(d),r(d,m,y),d=w;r(h,m,y)},R=({el:d,anchor:h})=>{let m;for(;d&&d!==h;)m=p(d),s(d),d=m;s(h)},$=(d,h,m,y,w,I,O,S,A)=>{O=O||h.type==="svg",d==null?J(h,m,y,w,I,O,S,A):ue(d,h,w,I,O,S,A)},J=(d,h,m,y,w,I,O,S)=>{let A,T;const{type:M,props:D,shapeFlag:U,transition:W,dirs:z}=d;if(A=d.el=o(d.type,I,D&&D.is,D),U&8?f(A,d.children):U&16&&ne(d.children,A,null,y,w,I&&M!=="foreignObject",O,S),z&&Mt(d,null,y,"created"),oe(A,d,d.scopeId,O,y),D){for(const ee in D)ee!=="value"&&!Rr(ee)&&i(A,ee,null,D[ee],I,d.children,y,w,we);"value"in D&&i(A,"value",null,D.value),(T=D.onVnodeBeforeMount)&&Xe(T,y,d)}z&&Mt(d,null,y,"beforeMount");const se=ud(w,W);se&&W.beforeEnter(A),r(A,h,m),((T=D&&D.onVnodeMounted)||se||z)&&Ce(()=>{T&&Xe(T,y,d),se&&W.enter(A),z&&Mt(d,null,y,"mounted")},w)},oe=(d,h,m,y,w)=>{if(m&&g(d,m),y)for(let I=0;I<y.length;I++)g(d,y[I]);if(w){let I=w.subTree;if(h===I){const O=w.vnode;oe(d,O,O.scopeId,O.slotScopeIds,w.parent)}}},ne=(d,h,m,y,w,I,O,S,A=0)=>{for(let T=A;T<d.length;T++){const M=d[T]=S?Et(d[T]):$e(d[T]);v(null,M,h,m,y,w,I,O,S)}},ue=(d,h,m,y,w,I,O)=>{const S=h.el=d.el;let{patchFlag:A,dynamicChildren:T,dirs:M}=h;A|=d.patchFlag&16;const D=d.props||ae,U=h.props||ae;let W;m&&Ut(m,!1),(W=U.onVnodeBeforeUpdate)&&Xe(W,m,h,d),M&&Mt(h,d,m,"beforeUpdate"),m&&Ut(m,!0);const z=w&&h.type!=="foreignObject";if(T?he(d.dynamicChildren,T,S,m,y,z,I):O||X(d,h,S,null,m,y,z,I,!1),A>0){if(A&16)ye(S,h,D,U,m,y,w);else if(A&2&&D.class!==U.class&&i(S,"class",null,U.class,w),A&4&&i(S,"style",D.style,U.style,w),A&8){const se=h.dynamicProps;for(let ee=0;ee<se.length;ee++){const pe=se[ee],Be=D[pe],en=U[pe];(en!==Be||pe==="value")&&i(S,pe,Be,en,w,d.children,m,y,we)}}A&1&&d.children!==h.children&&f(S,h.children)}else!O&&T==null&&ye(S,h,D,U,m,y,w);((W=U.onVnodeUpdated)||M)&&Ce(()=>{W&&Xe(W,m,h,d),M&&Mt(h,d,m,"updated")},y)},he=(d,h,m,y,w,I,O)=>{for(let S=0;S<h.length;S++){const A=d[S],T=h[S],M=A.el&&(A.type===ke||!It(A,T)||A.shapeFlag&70)?u(A.el):m;v(A,T,M,null,y,w,I,O,!0)}},ye=(d,h,m,y,w,I,O)=>{if(m!==y){if(m!==ae)for(const S in m)!Rr(S)&&!(S in y)&&i(d,S,m[S],null,O,h.children,w,I,we);for(const S in y){if(Rr(S))continue;const A=y[S],T=m[S];A!==T&&S!=="value"&&i(d,S,T,A,O,h.children,w,I,we)}"value"in y&&i(d,"value",m.value,y.value)}},xe=(d,h,m,y,w,I,O,S,A)=>{const T=h.el=d?d.el:a(""),M=h.anchor=d?d.anchor:a("");let{patchFlag:D,dynamicChildren:U,slotScopeIds:W}=h;W&&(S=S?S.concat(W):W),d==null?(r(T,m,y),r(M,m,y),ne(h.children,m,M,w,I,O,S,A)):D>0&&D&64&&U&&d.dynamicChildren?(he(d.dynamicChildren,U,m,w,I,O,S),(h.key!=null||w&&h===w.subTree)&&qc(d,h,!0)):X(d,h,m,M,w,I,O,S,A)},Ee=(d,h,m,y,w,I,O,S,A)=>{h.slotScopeIds=S,d==null?h.shapeFlag&512?w.ctx.activate(h,m,y,O,A):Je(h,m,y,w,I,O,A):Ne(d,h,A)},Je=(d,h,m,y,w,I,O)=>{const S=d.component=bd(d,y,w);if(Uc(d)&&(S.ctx.renderer=C),vd(S),S.asyncDep){if(w&&w.registerDep(S,de),!d.el){const A=S.subTree=fe(ht);P(null,A,h,m)}return}de(S,d,h,m,w,I,O)},Ne=(d,h,m)=>{const y=h.component=d.component;if(Sf(d,h,m))if(y.asyncDep&&!y.asyncResolved){G(y,h,m);return}else y.next=h,vf(y.update),y.update();else h.el=d.el,y.vnode=h},de=(d,h,m,y,w,I,O)=>{const S=()=>{if(d.isMounted){let{next:M,bu:D,u:U,parent:W,vnode:z}=d,se=M,ee;Ut(d,!1),M?(M.el=z.el,G(d,M,O)):M=z,D&&Sr(D),(ee=M.props&&M.props.onVnodeBeforeUpdate)&&Xe(ee,W,M,z),Ut(d,!0);const pe=Cs(d),Be=d.subTree;d.subTree=pe,v(Be,pe,u(Be.el),E(Be),d,w,I),M.el=pe.el,se===null&&$i(d,pe.el),U&&Ce(U,w),(ee=M.props&&M.props.onVnodeUpdated)&&Ce(()=>Xe(ee,W,M,z),w)}else{let M;const{el:D,props:U}=h,{bm:W,m:z,parent:se}=d,ee=Cr(h);if(Ut(d,!1),W&&Sr(W),!ee&&(M=U&&U.onVnodeBeforeMount)&&Xe(M,se,h),Ut(d,!0),D&&Q){const pe=()=>{d.subTree=Cs(d),Q(D,d.subTree,d,w,null)};ee?h.type.__asyncLoader().then(()=>!d.isUnmounted&&pe()):pe()}else{const pe=d.subTree=Cs(d);v(null,pe,m,y,d,w,I),h.el=pe.el}if(z&&Ce(z,w),!ee&&(M=U&&U.onVnodeMounted)){const pe=h;Ce(()=>Xe(M,se,pe),w)}(h.shapeFlag&256||se&&Cr(se.vnode)&&se.vnode.shapeFlag&256)&&d.a&&Ce(d.a,w),d.isMounted=!0,h=m=y=null}},A=d.effect=new ki(S,()=>Ui(T),d.scope),T=d.update=()=>A.run();T.id=d.uid,Ut(d,!0),T()},G=(d,h,m)=>{h.component=d;const y=d.vnode.props;d.vnode=h,d.next=null,sd(d,h.props,y,m),ad(d,h.children,m),Sn(),Oo(),An()},X=(d,h,m,y,w,I,O,S,A=!1)=>{const T=d&&d.children,M=d?d.shapeFlag:0,D=h.children,{patchFlag:U,shapeFlag:W}=h;if(U>0){if(U&128){gt(T,D,m,y,w,I,O,S,A);return}else if(U&256){it(T,D,m,y,w,I,O,S,A);return}}W&8?(M&16&&we(T,w,I),D!==T&&f(m,D)):M&16?W&16?gt(T,D,m,y,w,I,O,S,A):we(T,w,I,!0):(M&8&&f(m,""),W&16&&ne(D,m,y,w,I,O,S,A))},it=(d,h,m,y,w,I,O,S,A)=>{d=d||sn,h=h||sn;const T=d.length,M=h.length,D=Math.min(T,M);let U;for(U=0;U<D;U++){const W=h[U]=A?Et(h[U]):$e(h[U]);v(d[U],W,m,null,w,I,O,S,A)}T>M?we(d,w,I,!0,!1,D):ne(h,m,y,w,I,O,S,A,D)},gt=(d,h,m,y,w,I,O,S,A)=>{let T=0;const M=h.length;let D=d.length-1,U=M-1;for(;T<=D&&T<=U;){const W=d[T],z=h[T]=A?Et(h[T]):$e(h[T]);if(It(W,z))v(W,z,m,null,w,I,O,S,A);else break;T++}for(;T<=D&&T<=U;){const W=d[D],z=h[U]=A?Et(h[U]):$e(h[U]);if(It(W,z))v(W,z,m,null,w,I,O,S,A);else break;D--,U--}if(T>D){if(T<=U){const W=U+1,z=W<M?h[W].el:y;for(;T<=U;)v(null,h[T]=A?Et(h[T]):$e(h[T]),m,z,w,I,O,S,A),T++}}else if(T>U)for(;T<=D;)Ae(d[T],w,I,!0),T++;else{const W=T,z=T,se=new Map;for(T=z;T<=U;T++){const Oe=h[T]=A?Et(h[T]):$e(h[T]);Oe.key!=null&&se.set(Oe.key,T)}let ee,pe=0;const Be=U-z+1;let en=!1,yo=0;const xn=new Array(Be);for(T=0;T<Be;T++)xn[T]=0;for(T=W;T<=D;T++){const Oe=d[T];if(pe>=Be){Ae(Oe,w,I,!0);continue}let Ye;if(Oe.key!=null)Ye=se.get(Oe.key);else for(ee=z;ee<=U;ee++)if(xn[ee-z]===0&&It(Oe,h[ee])){Ye=ee;break}Ye===void 0?Ae(Oe,w,I,!0):(xn[Ye-z]=T+1,Ye>=yo?yo=Ye:en=!0,v(Oe,h[Ye],m,null,w,I,O,S,A),pe++)}const bo=en?fd(xn):sn;for(ee=bo.length-1,T=Be-1;T>=0;T--){const Oe=z+T,Ye=h[Oe],vo=Oe+1<M?h[Oe+1].el:y;xn[T]===0?v(null,Ye,m,vo,w,I,O,S,A):en&&(ee<0||T!==bo[ee]?Ge(Ye,m,vo,2):ee--)}}},Ge=(d,h,m,y,w=null)=>{const{el:I,type:O,transition:S,children:A,shapeFlag:T}=d;if(T&6){Ge(d.component.subTree,h,m,y);return}if(T&128){d.suspense.move(h,m,y);return}if(T&64){O.move(d,h,m,C);return}if(O===ke){r(I,h,m);for(let D=0;D<A.length;D++)Ge(A[D],h,m,y);r(d.anchor,h,m);return}if(O===Os){F(d,h,m);return}if(y!==2&&T&1&&S)if(y===0)S.beforeEnter(I),r(I,h,m),Ce(()=>S.enter(I),w);else{const{leave:D,delayLeave:U,afterLeave:W}=S,z=()=>r(I,h,m),se=()=>{D(I,()=>{z(),W&&W()})};U?U(I,z,se):se()}else r(I,h,m)},Ae=(d,h,m,y=!1,w=!1)=>{const{type:I,props:O,ref:S,children:A,dynamicChildren:T,shapeFlag:M,patchFlag:D,dirs:U}=d;if(S!=null&&ii(S,null,m,d,!0),M&256){h.ctx.deactivate(d);return}const W=M&1&&U,z=!Cr(d);let se;if(z&&(se=O&&O.onVnodeBeforeUnmount)&&Xe(se,h,d),M&6)_r(d.component,m,y);else{if(M&128){d.suspense.unmount(m,y);return}W&&Mt(d,null,h,"beforeUnmount"),M&64?d.type.remove(d,h,m,w,C,y):T&&(I!==ke||D>0&&D&64)?we(T,h,m,!1,!0):(I===ke&&D&384||!w&&M&16)&&we(A,h,m),y&&Qt(d)}(z&&(se=O&&O.onVnodeUnmounted)||W)&&Ce(()=>{se&&Xe(se,h,d),W&&Mt(d,null,h,"unmounted")},m)},Qt=d=>{const{type:h,el:m,anchor:y,transition:w}=d;if(h===ke){Zt(m,y);return}if(h===Os){R(d);return}const I=()=>{s(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:O,delayLeave:S}=w,A=()=>O(m,I);S?S(d.el,I,A):A()}else I()},Zt=(d,h)=>{let m;for(;d!==h;)m=p(d),s(d),d=m;s(h)},_r=(d,h,m)=>{const{bum:y,scope:w,update:I,subTree:O,um:S}=d;y&&Sr(y),w.stop(),I&&(I.active=!1,Ae(O,d,h,m)),S&&Ce(S,h),Ce(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},we=(d,h,m,y=!1,w=!1,I=0)=>{for(let O=I;O<d.length;O++)Ae(d[O],h,m,y,w)},E=d=>d.shapeFlag&6?E(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el),N=(d,h,m)=>{d==null?h._vnode&&Ae(h._vnode,null,null,!0):v(h._vnode||null,d,h,null,null,null,m),Oo(),Cc(),h._vnode=d},C={p:v,um:Ae,m:Ge,r:Qt,mt:Je,mc:ne,pc:X,pbc:he,n:E,o:t};let L,Q;return e&&([L,Q]=e(C)),{render:N,hydrate:L,createApp:nd(N,L)}}function Ut({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ud(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function qc(t,e,n=!1){const r=t.children,s=e.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Et(s[i]),a.el=o.el),n||qc(o,a)),a.type===hs&&(a.el=o.el)}}function fd(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const dd=t=>t.__isTeleport,ke=Symbol.for("v-fgt"),hs=Symbol.for("v-txt"),ht=Symbol.for("v-cmt"),Os=Symbol.for("v-stc"),Hn=[];let Me=null;function te(t=!1){Hn.push(Me=t?null:[])}function Jc(){Hn.pop(),Me=Hn[Hn.length-1]||null}let _n=1;function jo(t){_n+=t}function Gc(t){return t.dynamicChildren=_n>0?Me||sn:null,Jc(),_n>0&&Me&&Me.push(t),t}function le(t,e,n,r,s,i){return Gc(V(t,e,n,r,s,i,!0))}function zi(t,e,n,r,s){return Gc(fe(t,e,n,r,s,!0))}function Vr(t){return t?t.__v_isVNode===!0:!1}function It(t,e){return t.type===e.type&&t.key===e.key}const ps="__vInternal",Yc=({key:t})=>t!=null?t:null,Or=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?me(t)||Te(t)||j(t)?{i:Le,r:t,k:e,f:!!n}:t:null);function V(t,e=null,n=null,r=0,s=null,i=t===ke?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Yc(e),ref:e&&Or(e),scopeId:us,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Le};return a?(Ki(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=me(n)?8:16),_n>0&&!o&&Me&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Me.push(c),c}const fe=hd;function hd(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Af)&&(t=ht),Vr(t)){const a=yn(t,e,!0);return n&&Ki(a,n),_n>0&&!i&&Me&&(a.shapeFlag&6?Me[Me.indexOf(t)]=a:Me.push(a)),a.patchFlag|=-2,a}if(Rd(t)&&(t=t.__vccOpts),e){e=pd(e);let{class:a,style:c}=e;a&&!me(a)&&(e.class=Pi(a)),ie(c)&&(bc(c)&&!B(c)&&(c=ve({},c)),e.style=Ci(c))}const o=me(t)?1:Pf(t)?128:dd(t)?64:ie(t)?4:j(t)?2:0;return V(t,e,n,r,s,o,i,!0)}function pd(t){return t?bc(t)||ps in t?ve({},t):t:null}function yn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?gd(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Yc(a),ref:e&&e.ref?n&&s?B(s)?s.concat(Or(e)):[s,Or(e)]:Or(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ke?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&yn(t.ssContent),ssFallback:t.ssFallback&&yn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ct(t=" ",e=0){return fe(hs,null,t,e)}function md(t="",e=!1){return e?(te(),zi(ht,null,t)):fe(ht,null,t)}function $e(t){return t==null||typeof t=="boolean"?fe(ht):B(t)?fe(ke,null,t.slice()):typeof t=="object"?Et(t):fe(hs,null,String(t))}function Et(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:yn(t)}function Ki(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ki(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ps in e)?e._ctx=Le:s===3&&Le&&(Le.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:Le},n=32):(e=String(e),r&64?(n=16,e=[ct(e)]):n=8);t.children=e,t.shapeFlag|=n}function gd(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Pi([e.class,r.class]));else if(s==="style")e.style=Ci([e.style,r.style]);else if(ns(s)){const i=e[s],o=r[s];o&&i!==o&&!(B(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Xe(t,e,n,r=null){Ve(t,e,7,[n,r])}const _d=Hc();let yd=0;function bd(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||_d,i={uid:yd++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Wu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wc(r,s),emitsOptions:Oc(r,s),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:r.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=wf.bind(null,i),t.ce&&t.ce(i),i}let be=null,qi,tn,Wo="__VUE_INSTANCE_SETTERS__";(tn=Js()[Wo])||(tn=Js()[Wo]=[]),tn.push(t=>be=t),qi=t=>{tn.length>1?tn.forEach(e=>e(t)):tn[0](t)};const bn=t=>{qi(t),t.scope.on()},zt=()=>{be&&be.scope.off(),qi(null)};function Xc(t){return t.vnode.shapeFlag&4}let Gn=!1;function vd(t,e=!1){Gn=e;const{props:n,children:r}=t.vnode,s=Xc(t);rd(t,n,s,e),od(t,r);const i=s?Ed(t,e):void 0;return Gn=!1,i}function Ed(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=vc(new Proxy(t.ctx,Gf));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Id(t):null;bn(t),Sn();const i=Pt(r,t,0,[t.props,s]);if(An(),zt(),nc(i)){if(i.then(zt,zt),e)return i.then(o=>{oi(t,o,e)}).catch(o=>{sr(o,t,0)});t.asyncDep=i}else oi(t,i,e)}else Qc(t,e)}function oi(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ie(e)&&(t.setupState=Tc(e)),Qc(t,n)}let Vo;function Qc(t,e,n){const r=t.type;if(!t.render){if(!e&&Vo&&!r.render){const s=r.template||Wi(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ve(ve({isCustomElement:i,delimiters:a},o),c);r.render=Vo(s,l)}}t.render=r.render||je}{bn(t),Sn();try{Yf(t)}finally{An(),zt()}}}function wd(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Pe(t,"get","$attrs"),e[n]}}))}function Id(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return wd(t)},slots:t.slots,emit:t.emit,expose:e}}function ms(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Tc(vc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in $n)return $n[n](t)},has(e,n){return n in e||n in $n}}))}function Td(t,e=!0){return j(t)?t.displayName||t.name:t.name||e&&t.__name}function Rd(t){return j(t)&&"__vccOpts"in t}const De=(t,e)=>_f(t,e,Gn);function Zc(t,e,n){const r=arguments.length;return r===2?ie(e)&&!B(e)?Vr(e)?fe(t,null,[e]):fe(t,e):fe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Vr(n)&&(n=[n]),fe(t,e,n))}const Sd=Symbol.for("v-scx"),Ad=()=>ze(Sd),Cd="3.3.9",Pd="http://www.w3.org/2000/svg",$t=typeof document<"u"?document:null,zo=$t&&$t.createElement("template"),Od={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?$t.createElementNS(Pd,t):$t.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>$t.createTextNode(t),createComment:t=>$t.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>$t.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{zo.innerHTML=r?`<svg>${t}</svg>`:t;const a=zo.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},kd=Symbol("_vtc");function xd(t,e,n){const r=t[kd];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ji=Symbol("_vod"),el={beforeMount(t,{value:e},{transition:n}){t[Ji]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Nn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Nn(t,!0),r.enter(t)):r.leave(t,()=>{Nn(t,!1)}):Nn(t,e))},beforeUnmount(t,{value:e}){Nn(t,e)}};function Nn(t,e){t.style.display=e?t[Ji]:"none"}function Nd(t,e,n){const r=t.style,s=me(n);if(n&&!s){if(e&&!me(e))for(const i in e)n[i]==null&&ai(r,i,"");for(const i in n)ai(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),Ji in t&&(r.display=i)}}const Ko=/\s*!important$/;function ai(t,e,n){if(B(n))n.forEach(r=>ai(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Dd(t,e);Ko.test(n)?t.setProperty(Rn(r),n.replace(Ko,""),"important"):t[r]=n}}const qo=["Webkit","Moz","ms"],ks={};function Dd(t,e){const n=ks[e];if(n)return n;let r=rt(e);if(r!=="filter"&&r in t)return ks[e]=r;r=is(r);for(let s=0;s<qo.length;s++){const i=qo[s]+r;if(i in t)return ks[e]=i}return e}const Jo="http://www.w3.org/1999/xlink";function Ld(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Jo,e.slice(6,e.length)):t.setAttributeNS(Jo,e,n);else{const i=$u(e);n==null||i&&!ic(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Md(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,f=n==null?"":n;l!==f&&(t.value=f),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ic(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Ht(t,e,n,r){t.addEventListener(e,n,r)}function Ud(t,e,n,r){t.removeEventListener(e,n,r)}const Go=Symbol("_vei");function Bd(t,e,n,r,s=null){const i=t[Go]||(t[Go]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Fd(e);if(r){const l=i[e]=jd(r,s);Ht(t,a,l,c)}else o&&(Ud(t,a,o,c),i[e]=void 0)}}const Yo=/(?:Once|Passive|Capture)$/;function Fd(t){let e;if(Yo.test(t)){e={};let r;for(;r=t.match(Yo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Rn(t.slice(2)),e]}let xs=0;const $d=Promise.resolve(),Hd=()=>xs||($d.then(()=>xs=0),xs=Date.now());function jd(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ve(Wd(r,n.value),e,5,[r])};return n.value=t,n.attached=Hd(),n}function Wd(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Xo=/^on[a-z]/,Vd=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?xd(t,r,s):e==="style"?Nd(t,n,r):ns(e)?Ri(e)||Bd(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):zd(t,e,r,s))?Md(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ld(t,e,r,s))};function zd(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Xo.test(e)&&j(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Xo.test(e)&&me(n)?!1:e in t}const zr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>Sr(e,n):e};function Kd(t){t.target.composing=!0}function Qo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const fn=Symbol("_assign"),Wt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[fn]=zr(s);const i=r||s.props&&s.props.type==="number";Ht(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Fr(a)),t[fn](a)}),n&&Ht(t,"change",()=>{t.value=t.value.trim()}),e||(Ht(t,"compositionstart",Kd),Ht(t,"compositionend",Qo),Ht(t,"change",Qo))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[fn]=zr(i),t.composing)return;const o=s||t.type==="number"?Fr(t.value):t.value,a=e==null?"":e;o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},qd={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=rs(e);Ht(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Fr(Kr(o)):Kr(o));t[fn](t.multiple?s?new Set(i):i:i[0])}),t[fn]=zr(r)},mounted(t,{value:e}){Zo(t,e)},beforeUpdate(t,e,n){t[fn]=zr(n)},updated(t,{value:e}){Zo(t,e)}};function Zo(t,e){const n=t.multiple;if(!(n&&!B(e)&&!rs(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=Kr(i);if(n)B(e)?i.selected=ju(e,o)>-1:i.selected=e.has(o);else if(os(Kr(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Kr(t){return"_value"in t?t._value:t.value}const Jd=["ctrl","shift","alt","meta"],Gd={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Jd.some(n=>t[`${n}Key`]&&!e.includes(n))},tl=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Gd[e[s]];if(i&&i(n,e))return}return t(n,...r)},Yd=ve({patchProp:Vd},Od);let ea;function Xd(){return ea||(ea=cd(Yd))}const Qd=(...t)=>{const e=Xd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Zd(r);if(!s)return;const i=e._component;!j(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Zd(t){return me(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const nn=typeof window<"u";function eh(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Z=Object.assign;function Ns(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ke(s)?s.map(t):t(s)}return n}const jn=()=>{},Ke=Array.isArray,th=/\/$/,nh=t=>t.replace(th,"");function Ds(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=oh(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function rh(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ta(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function sh(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&vn(e.matched[r],n.matched[s])&&nl(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function vn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function nl(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!ih(t[n],e[n]))return!1;return!0}function ih(t,e){return Ke(t)?na(t,e):Ke(e)?na(e,t):t===e}function na(t,e){return Ke(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function oh(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Yn;(function(t){t.pop="pop",t.push="push"})(Yn||(Yn={}));var Wn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Wn||(Wn={}));function ah(t){if(!t)if(nn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),nh(t)}const ch=/^[^#]+#/;function lh(t,e){return t.replace(ch,"#")+e}function uh(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const gs=()=>({left:window.pageXOffset,top:window.pageYOffset});function fh(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=uh(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ra(t,e){return(history.state?history.state.position-e:-1)+t}const ci=new Map;function dh(t,e){ci.set(t,e)}function hh(t){const e=ci.get(t);return ci.delete(t),e}let ph=()=>location.protocol+"//"+location.host;function rl(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),ta(c,"")}return ta(n,t)+r+s}function mh(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=rl(t,location),_=n.value,v=e.value;let k=0;if(p){if(n.value=g,e.value=p,o&&o===_){o=null;return}k=v?p.position-v.position:0}else r(g);s.forEach(P=>{P(n.value,_,{delta:k,type:Yn.pop,direction:k?k>0?Wn.forward:Wn.back:Wn.unknown})})};function c(){o=n.value}function l(p){s.push(p);const g=()=>{const _=s.indexOf(p);_>-1&&s.splice(_,1)};return i.push(g),g}function f(){const{history:p}=window;!p.state||p.replaceState(Z({},p.state,{scroll:gs()}),"")}function u(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:l,destroy:u}}function sa(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?gs():null}}function gh(t){const{history:e,location:n}=window,r={value:rl(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,f){const u=t.indexOf("#"),p=u>-1?(n.host&&document.querySelector("base")?t:t.slice(u))+c:ph()+t+c;try{e[f?"replaceState":"pushState"](l,"",p),s.value=l}catch(g){console.error(g),n[f?"replace":"assign"](p)}}function o(c,l){const f=Z({},e.state,sa(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,f,!0),r.value=c}function a(c,l){const f=Z({},s.value,e.state,{forward:c,scroll:gs()});i(f.current,f,!0);const u=Z({},sa(r.value,c,null),{position:f.position+1},l);i(c,u,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function _h(t){t=ah(t);const e=gh(t),n=mh(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Z({location:"",base:t,go:r,createHref:lh.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function yh(t){return typeof t=="string"||t&&typeof t=="object"}function sl(t){return typeof t=="string"||typeof t=="symbol"}const yt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},il=Symbol("");var ia;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ia||(ia={}));function En(t,e){return Z(new Error,{type:t,[il]:!0},e)}function ot(t,e){return t instanceof Error&&il in t&&(e==null||!!(t.type&e))}const oa="[^/]+?",bh={sensitive:!1,strict:!1,start:!0,end:!0},vh=/[.+*?^${}()[\]/\\]/g;function Eh(t,e){const n=Z({},bh,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let u=0;u<l.length;u++){const p=l[u];let g=40+(n.sensitive?.25:0);if(p.type===0)u||(s+="/"),s+=p.value.replace(vh,"\\$&"),g+=40;else if(p.type===1){const{value:_,repeatable:v,optional:k,regexp:P}=p;i.push({name:_,repeatable:v,optional:k});const x=P||oa;if(x!==oa){g+=10;try{new RegExp(`(${x})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${_}" (${x}): `+R.message)}}let F=v?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;u||(F=k&&l.length<2?`(?:/${F})`:"/"+F),k&&(F+="?"),s+=F,g+=20,k&&(g+=-8),v&&(g+=-20),x===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const f=l.match(o),u={};if(!f)return null;for(let p=1;p<f.length;p++){const g=f[p]||"",_=i[p-1];u[_.name]=g&&_.repeatable?g.split("/"):g}return u}function c(l){let f="",u=!1;for(const p of t){(!u||!f.endsWith("/"))&&(f+="/"),u=!1;for(const g of p)if(g.type===0)f+=g.value;else if(g.type===1){const{value:_,repeatable:v,optional:k}=g,P=_ in l?l[_]:"";if(Ke(P)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const x=Ke(P)?P.join("/"):P;if(!x)if(k)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):u=!0);else throw new Error(`Missing required param "${_}"`);f+=x}}return f||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function wh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Ih(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=wh(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(aa(r))return 1;if(aa(s))return-1}return s.length-r.length}function aa(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Th={type:0,value:""},Rh=/[a-zA-Z0-9_]/;function Sh(t){if(!t)return[[]];if(t==="/")return[[Th]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",f="";function u(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&u(),o()):c===":"?(u(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Rh.test(c)?p():(u(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:u(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),u(),o(),s}function Ah(t,e,n){const r=Eh(Sh(t.path),n),s=Z(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Ch(t,e){const n=[],r=new Map;e=ua({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,u,p){const g=!p,_=Ph(f);_.aliasOf=p&&p.record;const v=ua(e,f),k=[_];if("alias"in f){const F=typeof f.alias=="string"?[f.alias]:f.alias;for(const R of F)k.push(Z({},_,{components:p?p.record.components:_.components,path:R,aliasOf:p?p.record:_}))}let P,x;for(const F of k){const{path:R}=F;if(u&&R[0]!=="/"){const $=u.record.path,J=$[$.length-1]==="/"?"":"/";F.path=u.record.path+(R&&J+R)}if(P=Ah(F,u,v),p?p.alias.push(P):(x=x||P,x!==P&&x.alias.push(P),g&&f.name&&!la(P)&&o(f.name)),_.children){const $=_.children;for(let J=0;J<$.length;J++)i($[J],P,p&&p.children[J])}p=p||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&c(P)}return x?()=>{o(x)}:jn}function o(f){if(sl(f)){const u=r.get(f);u&&(r.delete(f),n.splice(n.indexOf(u),1),u.children.forEach(o),u.alias.forEach(o))}else{const u=n.indexOf(f);u>-1&&(n.splice(u,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){let u=0;for(;u<n.length&&Ih(f,n[u])>=0&&(f.record.path!==n[u].record.path||!ol(f,n[u]));)u++;n.splice(u,0,f),f.record.name&&!la(f)&&r.set(f.record.name,f)}function l(f,u){let p,g={},_,v;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw En(1,{location:f});v=p.record.name,g=Z(ca(u.params,p.keys.filter(x=>!x.optional).map(x=>x.name)),f.params&&ca(f.params,p.keys.map(x=>x.name))),_=p.stringify(g)}else if("path"in f)_=f.path,p=n.find(x=>x.re.test(_)),p&&(g=p.parse(_),v=p.record.name);else{if(p=u.name?r.get(u.name):n.find(x=>x.re.test(u.path)),!p)throw En(1,{location:f,currentLocation:u});v=p.record.name,g=Z({},u.params,f.params),_=p.stringify(g)}const k=[];let P=p;for(;P;)k.unshift(P.record),P=P.parent;return{name:v,path:_,params:g,matched:k,meta:kh(k)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function ca(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Ph(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Oh(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Oh(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function la(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function kh(t){return t.reduce((e,n)=>Z(e,n.meta),{})}function ua(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ol(t,e){return e.children.some(n=>n===t||ol(t,n))}const al=/#/g,xh=/&/g,Nh=/\//g,Dh=/=/g,Lh=/\?/g,cl=/\+/g,Mh=/%5B/g,Uh=/%5D/g,ll=/%5E/g,Bh=/%60/g,ul=/%7B/g,Fh=/%7C/g,fl=/%7D/g,$h=/%20/g;function Gi(t){return encodeURI(""+t).replace(Fh,"|").replace(Mh,"[").replace(Uh,"]")}function Hh(t){return Gi(t).replace(ul,"{").replace(fl,"}").replace(ll,"^")}function li(t){return Gi(t).replace(cl,"%2B").replace($h,"+").replace(al,"%23").replace(xh,"%26").replace(Bh,"`").replace(ul,"{").replace(fl,"}").replace(ll,"^")}function jh(t){return li(t).replace(Dh,"%3D")}function Wh(t){return Gi(t).replace(al,"%23").replace(Lh,"%3F")}function Vh(t){return t==null?"":Wh(t).replace(Nh,"%2F")}function qr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function zh(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(cl," "),o=i.indexOf("="),a=qr(o<0?i:i.slice(0,o)),c=o<0?null:qr(i.slice(o+1));if(a in e){let l=e[a];Ke(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function fa(t){let e="";for(let n in t){const r=t[n];if(n=jh(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ke(r)?r.map(i=>i&&li(i)):[r&&li(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Kh(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ke(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const qh=Symbol(""),da=Symbol(""),_s=Symbol(""),Yi=Symbol(""),ui=Symbol("");function Dn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function wt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=u=>{u===!1?a(En(4,{from:n,to:e})):u instanceof Error?a(u):yh(u)?a(En(2,{from:e,to:u})):(i&&r.enterCallbacks[s]===i&&typeof u=="function"&&i.push(u),o())},l=t.call(r&&r.instances[s],e,n,c);let f=Promise.resolve(l);t.length<3&&(f=f.then(c)),f.catch(u=>a(u))})}function Ls(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Jh(a)){const l=(a.__vccOpts||a)[e];l&&s.push(wt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=eh(l)?l.default:l;i.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&wt(p,n,r,i,o)()}))}}return s}function Jh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ha(t){const e=ze(_s),n=ze(Yi),r=De(()=>e.resolve(ce(t.to))),s=De(()=>{const{matched:c}=r.value,{length:l}=c,f=c[l-1],u=n.matched;if(!f||!u.length)return-1;const p=u.findIndex(vn.bind(null,f));if(p>-1)return p;const g=pa(c[l-2]);return l>1&&pa(f)===g&&u[u.length-1].path!==g?u.findIndex(vn.bind(null,c[l-2])):p}),i=De(()=>s.value>-1&&Qh(n.params,r.value.params)),o=De(()=>s.value>-1&&s.value===n.matched.length-1&&nl(n.params,r.value.params));function a(c={}){return Xh(c)?e[ce(t.replace)?"replace":"push"](ce(t.to)).catch(jn):Promise.resolve()}return{route:r,href:De(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Gh=Mc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ha,setup(t,{slots:e}){const n=cs(ha(t)),{options:r}=ze(_s),s=De(()=>({[ma(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ma(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Zc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Yh=Gh;function Xh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Qh(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ke(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function pa(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ma=(t,e,n)=>t!=null?t:e!=null?e:n,Zh=Mc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=ze(ui),s=De(()=>t.route||r.value),i=ze(da,0),o=De(()=>{let l=ce(i);const{matched:f}=s.value;let u;for(;(u=f[l])&&!u.components;)l++;return l}),a=De(()=>s.value.matched[o.value]);Pr(da,De(()=>o.value+1)),Pr(qh,a),Pr(ui,s);const c=_e();return Ar(()=>[c.value,a.value,t.name],([l,f,u],[p,g,_])=>{f&&(f.instances[u]=l,g&&g!==f&&l&&l===p&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),l&&f&&(!g||!vn(f,g)||!p)&&(f.enterCallbacks[u]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=s.value,f=t.name,u=a.value,p=u&&u.components[f];if(!p)return ga(n.default,{Component:p,route:l});const g=u.props[f],_=g?g===!0?l.params:typeof g=="function"?g(l):g:null,k=Zc(p,Z({},_,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(u.instances[f]=null)},ref:c}));return ga(n.default,{Component:k,route:l})||k}}});function ga(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ep=Zh;function tp(t){const e=Ch(t.routes,t),n=t.parseQuery||zh,r=t.stringifyQuery||fa,s=t.history,i=Dn(),o=Dn(),a=Dn(),c=hf(yt);let l=yt;nn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Ns.bind(null,E=>""+E),u=Ns.bind(null,Vh),p=Ns.bind(null,qr);function g(E,N){let C,L;return sl(E)?(C=e.getRecordMatcher(E),L=N):L=E,e.addRoute(L,C)}function _(E){const N=e.getRecordMatcher(E);N&&e.removeRoute(N)}function v(){return e.getRoutes().map(E=>E.record)}function k(E){return!!e.getRecordMatcher(E)}function P(E,N){if(N=Z({},N||c.value),typeof E=="string"){const m=Ds(n,E,N.path),y=e.resolve({path:m.path},N),w=s.createHref(m.fullPath);return Z(m,y,{params:p(y.params),hash:qr(m.hash),redirectedFrom:void 0,href:w})}let C;if("path"in E)C=Z({},E,{path:Ds(n,E.path,N.path).path});else{const m=Z({},E.params);for(const y in m)m[y]==null&&delete m[y];C=Z({},E,{params:u(m)}),N.params=u(N.params)}const L=e.resolve(C,N),Q=E.hash||"";L.params=f(p(L.params));const d=rh(r,Z({},E,{hash:Hh(Q),path:L.path})),h=s.createHref(d);return Z({fullPath:d,hash:Q,query:r===fa?Kh(E.query):E.query||{}},L,{redirectedFrom:void 0,href:h})}function x(E){return typeof E=="string"?Ds(n,E,c.value.path):Z({},E)}function F(E,N){if(l!==E)return En(8,{from:N,to:E})}function R(E){return oe(E)}function $(E){return R(Z(x(E),{replace:!0}))}function J(E){const N=E.matched[E.matched.length-1];if(N&&N.redirect){const{redirect:C}=N;let L=typeof C=="function"?C(E):C;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=x(L):{path:L},L.params={}),Z({query:E.query,hash:E.hash,params:"path"in L?{}:E.params},L)}}function oe(E,N){const C=l=P(E),L=c.value,Q=E.state,d=E.force,h=E.replace===!0,m=J(C);if(m)return oe(Z(x(m),{state:typeof m=="object"?Z({},Q,m.state):Q,force:d,replace:h}),N||C);const y=C;y.redirectedFrom=N;let w;return!d&&sh(r,L,C)&&(w=En(16,{to:y,from:L}),Ge(L,L,!0,!1)),(w?Promise.resolve(w):he(y,L)).catch(I=>ot(I)?ot(I,2)?I:gt(I):X(I,y,L)).then(I=>{if(I){if(ot(I,2))return oe(Z({replace:h},x(I.to),{state:typeof I.to=="object"?Z({},Q,I.to.state):Q,force:d}),N||y)}else I=xe(y,L,!0,h,Q);return ye(y,L,I),I})}function ne(E,N){const C=F(E,N);return C?Promise.reject(C):Promise.resolve()}function ue(E){const N=Zt.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(E):E()}function he(E,N){let C;const[L,Q,d]=np(E,N);C=Ls(L.reverse(),"beforeRouteLeave",E,N);for(const m of L)m.leaveGuards.forEach(y=>{C.push(wt(y,E,N))});const h=ne.bind(null,E,N);return C.push(h),we(C).then(()=>{C=[];for(const m of i.list())C.push(wt(m,E,N));return C.push(h),we(C)}).then(()=>{C=Ls(Q,"beforeRouteUpdate",E,N);for(const m of Q)m.updateGuards.forEach(y=>{C.push(wt(y,E,N))});return C.push(h),we(C)}).then(()=>{C=[];for(const m of d)if(m.beforeEnter)if(Ke(m.beforeEnter))for(const y of m.beforeEnter)C.push(wt(y,E,N));else C.push(wt(m.beforeEnter,E,N));return C.push(h),we(C)}).then(()=>(E.matched.forEach(m=>m.enterCallbacks={}),C=Ls(d,"beforeRouteEnter",E,N),C.push(h),we(C))).then(()=>{C=[];for(const m of o.list())C.push(wt(m,E,N));return C.push(h),we(C)}).catch(m=>ot(m,8)?m:Promise.reject(m))}function ye(E,N,C){a.list().forEach(L=>ue(()=>L(E,N,C)))}function xe(E,N,C,L,Q){const d=F(E,N);if(d)return d;const h=N===yt,m=nn?history.state:{};C&&(L||h?s.replace(E.fullPath,Z({scroll:h&&m&&m.scroll},Q)):s.push(E.fullPath,Q)),c.value=E,Ge(E,N,C,h),gt()}let Ee;function Je(){Ee||(Ee=s.listen((E,N,C)=>{if(!_r.listening)return;const L=P(E),Q=J(L);if(Q){oe(Z(Q,{replace:!0}),L).catch(jn);return}l=L;const d=c.value;nn&&dh(ra(d.fullPath,C.delta),gs()),he(L,d).catch(h=>ot(h,12)?h:ot(h,2)?(oe(h.to,L).then(m=>{ot(m,20)&&!C.delta&&C.type===Yn.pop&&s.go(-1,!1)}).catch(jn),Promise.reject()):(C.delta&&s.go(-C.delta,!1),X(h,L,d))).then(h=>{h=h||xe(L,d,!1),h&&(C.delta&&!ot(h,8)?s.go(-C.delta,!1):C.type===Yn.pop&&ot(h,20)&&s.go(-1,!1)),ye(L,d,h)}).catch(jn)}))}let Ne=Dn(),de=Dn(),G;function X(E,N,C){gt(E);const L=de.list();return L.length?L.forEach(Q=>Q(E,N,C)):console.error(E),Promise.reject(E)}function it(){return G&&c.value!==yt?Promise.resolve():new Promise((E,N)=>{Ne.add([E,N])})}function gt(E){return G||(G=!E,Je(),Ne.list().forEach(([N,C])=>E?C(E):N()),Ne.reset()),E}function Ge(E,N,C,L){const{scrollBehavior:Q}=t;if(!nn||!Q)return Promise.resolve();const d=!C&&hh(ra(E.fullPath,0))||(L||!C)&&history.state&&history.state.scroll||null;return Sc().then(()=>Q(E,N,d)).then(h=>h&&fh(h)).catch(h=>X(h,E,N))}const Ae=E=>s.go(E);let Qt;const Zt=new Set,_r={currentRoute:c,listening:!0,addRoute:g,removeRoute:_,hasRoute:k,getRoutes:v,resolve:P,options:t,push:R,replace:$,go:Ae,back:()=>Ae(-1),forward:()=>Ae(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:de.add,isReady:it,install(E){const N=this;E.component("RouterLink",Yh),E.component("RouterView",ep),E.config.globalProperties.$router=N,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>ce(c)}),nn&&!Qt&&c.value===yt&&(Qt=!0,R(s.location).catch(Q=>{}));const C={};for(const Q in yt)Object.defineProperty(C,Q,{get:()=>c.value[Q],enumerable:!0});E.provide(_s,N),E.provide(Yi,_c(C)),E.provide(ui,c);const L=E.unmount;Zt.add(E),E.unmount=function(){Zt.delete(E),Zt.size<1&&(l=yt,Ee&&Ee(),Ee=null,c.value=yt,Qt=!1,G=!1),L()}}};function we(E){return E.reduce((N,C)=>N.then(()=>ue(C)),Promise.resolve())}return _r}function np(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>vn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>vn(l,c))||s.push(c))}return[n,r,s]}function Xi(){return ze(_s)}function ir(){return ze(Yi)}const rp="/birdwatch-client/";/**
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
 */const dl=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},sp=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},hl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,f=i>>2,u=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(p=64)),r.push(n[f],n[u],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||u==null)throw new ip;const p=i<<2|a>>4;if(r.push(p),l!==64){const g=a<<4&240|l>>2;if(r.push(g),u!==64){const _=l<<6&192|u;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ip extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const op=function(t){const e=dl(t);return hl.encodeByteArray(e,!0)},pl=function(t){return op(t).replace(/\./g,"")},ml=function(t){try{return hl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ap(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const cp=()=>ap().__FIREBASE_DEFAULTS__,lp=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},up=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ml(t[1]);return e&&JSON.parse(e)},Qi=()=>{try{return cp()||lp()||up()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},fp=t=>{var e,n;return(n=(e=Qi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gl=()=>{var t;return(t=Qi())===null||t===void 0?void 0:t.config},_l=t=>{var e;return(e=Qi())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class dp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function pp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gp(){const t=Re();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _p(){try{return typeof indexedDB=="object"}catch{return!1}}function yp(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const bp="FirebaseError";class Dt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=bp,Object.setPrototypeOf(this,Dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,or.prototype.create)}}class or{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?vp(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Dt(s,a,r)}}function vp(t,e){return t.replace(Ep,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Ep=/\{\$([^}]+)}/g;function wp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Jr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(_a(i)&&_a(o)){if(!Jr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function _a(t){return t!==null&&typeof t=="object"}/**
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
 */function ar(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Bn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Fn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ip(t,e){const n=new Tp(t,e);return n.subscribe.bind(n)}class Tp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Rp(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ms),s.error===void 0&&(s.error=Ms),s.complete===void 0&&(s.complete=Ms);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Rp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ms(){}/**
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
 */function Lt(t){return t&&t._delegate?t._delegate:t}class wn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Bt="[DEFAULT]";/**
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
 */class Sp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new dp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Cp(e))try{this.getOrInitializeService({instanceIdentifier:Bt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Bt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bt){return this.instances.has(e)}getOptions(e=Bt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ap(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Bt){return this.component?this.component.multipleInstances?e:Bt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ap(t){return t===Bt?void 0:t}function Cp(t){return t.instantiationMode==="EAGER"}/**
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
 */class Pp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Sp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const Op={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},kp=re.INFO,xp={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},Np=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=xp[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yl{constructor(e){this.name=e,this._logLevel=kp,this._logHandler=Np,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Op[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const Dp=(t,e)=>e.some(n=>t instanceof n);let ya,ba;function Lp(){return ya||(ya=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mp(){return ba||(ba=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bl=new WeakMap,fi=new WeakMap,vl=new WeakMap,Us=new WeakMap,Zi=new WeakMap;function Up(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ot(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&bl.set(n,t)}).catch(()=>{}),Zi.set(e,t),e}function Bp(t){if(fi.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});fi.set(t,e)}let di={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ot(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Fp(t){di=t(di)}function $p(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Bs(this),e,...n);return vl.set(r,e.sort?e.sort():[e]),Ot(r)}:Mp().includes(t)?function(...e){return t.apply(Bs(this),e),Ot(bl.get(this))}:function(...e){return Ot(t.apply(Bs(this),e))}}function Hp(t){return typeof t=="function"?$p(t):(t instanceof IDBTransaction&&Bp(t),Dp(t,Lp())?new Proxy(t,di):t)}function Ot(t){if(t instanceof IDBRequest)return Up(t);if(Us.has(t))return Us.get(t);const e=Hp(t);return e!==t&&(Us.set(t,e),Zi.set(e,t)),e}const Bs=t=>Zi.get(t);function jp(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Ot(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ot(o.result),c.oldVersion,c.newVersion,Ot(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Wp=["get","getKey","getAll","getAllKeys","count"],Vp=["put","add","delete","clear"],Fs=new Map;function va(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fs.get(e))return Fs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Vp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Wp.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Fs.set(e,i),i}Fp(t=>({...t,get:(e,n,r)=>va(e,n)||t.get(e,n,r),has:(e,n)=>!!va(e,n)||t.has(e,n)}));/**
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
 */class zp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Kp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Kp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hi="@firebase/app",Ea="0.9.13";/**
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
 */const Jt=new yl("@firebase/app"),qp="@firebase/app-compat",Jp="@firebase/analytics-compat",Gp="@firebase/analytics",Yp="@firebase/app-check-compat",Xp="@firebase/app-check",Qp="@firebase/auth",Zp="@firebase/auth-compat",em="@firebase/database",tm="@firebase/database-compat",nm="@firebase/functions",rm="@firebase/functions-compat",sm="@firebase/installations",im="@firebase/installations-compat",om="@firebase/messaging",am="@firebase/messaging-compat",cm="@firebase/performance",lm="@firebase/performance-compat",um="@firebase/remote-config",fm="@firebase/remote-config-compat",dm="@firebase/storage",hm="@firebase/storage-compat",pm="@firebase/firestore",mm="@firebase/firestore-compat",gm="firebase",_m="9.23.0";/**
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
 */const pi="[DEFAULT]",ym={[hi]:"fire-core",[qp]:"fire-core-compat",[Gp]:"fire-analytics",[Jp]:"fire-analytics-compat",[Xp]:"fire-app-check",[Yp]:"fire-app-check-compat",[Qp]:"fire-auth",[Zp]:"fire-auth-compat",[em]:"fire-rtdb",[tm]:"fire-rtdb-compat",[nm]:"fire-fn",[rm]:"fire-fn-compat",[sm]:"fire-iid",[im]:"fire-iid-compat",[om]:"fire-fcm",[am]:"fire-fcm-compat",[cm]:"fire-perf",[lm]:"fire-perf-compat",[um]:"fire-rc",[fm]:"fire-rc-compat",[dm]:"fire-gcs",[hm]:"fire-gcs-compat",[pm]:"fire-fst",[mm]:"fire-fst-compat","fire-js":"fire-js",[gm]:"fire-js-all"};/**
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
 */const Gr=new Map,mi=new Map;function bm(t,e){try{t.container.addComponent(e)}catch(n){Jt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xn(t){const e=t.name;if(mi.has(e))return Jt.debug(`There were multiple attempts to register component ${e}.`),!1;mi.set(e,t);for(const n of Gr.values())bm(n,t);return!0}function El(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const vm={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},kt=new or("app","Firebase",vm);/**
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
 */class Em{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kt.create("app-deleted",{appName:this._name})}}/**
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
 */const cr=_m;function wl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:pi,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw kt.create("bad-app-name",{appName:String(s)});if(n||(n=gl()),!n)throw kt.create("no-options");const i=Gr.get(s);if(i){if(Jr(n,i.options)&&Jr(r,i.config))return i;throw kt.create("duplicate-app",{appName:s})}const o=new Pp(s);for(const c of mi.values())o.addComponent(c);const a=new Em(n,r,o);return Gr.set(s,a),a}function wm(t=pi){const e=Gr.get(t);if(!e&&t===pi&&gl())return wl();if(!e)throw kt.create("no-app",{appName:t});return e}function dn(t,e,n){var r;let s=(r=ym[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jt.warn(a.join(" "));return}Xn(new wn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Im="firebase-heartbeat-database",Tm=1,Qn="firebase-heartbeat-store";let $s=null;function Il(){return $s||($s=jp(Im,Tm,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qn)}}}).catch(t=>{throw kt.create("idb-open",{originalErrorMessage:t.message})})),$s}async function Rm(t){try{return await(await Il()).transaction(Qn).objectStore(Qn).get(Tl(t))}catch(e){if(e instanceof Dt)Jt.warn(e.message);else{const n=kt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Jt.warn(n.message)}}}async function wa(t,e){try{const r=(await Il()).transaction(Qn,"readwrite");await r.objectStore(Qn).put(e,Tl(t)),await r.done}catch(n){if(n instanceof Dt)Jt.warn(n.message);else{const r=kt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Jt.warn(r.message)}}}function Tl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Sm=1024,Am=30*24*60*60*1e3;class Cm{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Om(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ia();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Am}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ia(),{heartbeatsToSend:n,unsentEntries:r}=Pm(this._heartbeatsCache.heartbeats),s=pl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ia(){return new Date().toISOString().substring(0,10)}function Pm(t,e=Sm){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ta(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ta(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Om{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _p()?yp().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Rm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return wa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return wa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ta(t){return pl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function km(t){Xn(new wn("platform-logger",e=>new zp(e),"PRIVATE")),Xn(new wn("heartbeat",e=>new Cm(e),"PRIVATE")),dn(hi,Ea,t),dn(hi,Ea,"esm2017"),dn("fire-js","")}km("");var xm="firebase",Nm="9.23.0";/**
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
 */dn(xm,Nm,"app");const Dm={apiKey:"AIzaSyBHZoDAPUcd13I0wxaSzz5GXmT0_erVXmk",authDomain:"vue-3-company-directory-798be.firebaseapp.com",projectId:"vue-3-company-directory-798be",storageBucket:"vue-3-company-directory-798be.appspot.com",messagingSenderId:"599549911927",appId:"1:599549911927:web:448741eb9bbcb90c723772"},Lm=wl(Dm);function eo(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Rl(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Mm=Rl,Sl=new or("auth","Firebase",Rl());/**
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
 */const Yr=new yl("@firebase/auth");function Um(t,...e){Yr.logLevel<=re.WARN&&Yr.warn(`Auth (${cr}): ${t}`,...e)}function kr(t,...e){Yr.logLevel<=re.ERROR&&Yr.error(`Auth (${cr}): ${t}`,...e)}/**
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
 */function qe(t,...e){throw to(t,...e)}function tt(t,...e){return to(t,...e)}function Bm(t,e,n){const r=Object.assign(Object.assign({},Mm()),{[e]:n});return new or("auth","Firebase",r).create(e,{appName:t.name})}function to(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Sl.create(t,...e)}function H(t,e,...n){if(!t)throw to(e,...n)}function lt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw kr(e),new Error(e)}function pt(t,e){t||lt(e)}/**
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
 */function gi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Fm(){return Ra()==="http:"||Ra()==="https:"}function Ra(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function $m(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fm()||pp()||"connection"in navigator)?navigator.onLine:!0}function Hm(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class lr{constructor(e,n){this.shortDelay=e,this.longDelay=n,pt(n>e,"Short delay should be less than long delay!"),this.isMobile=hp()||mp()}get(){return $m()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function no(t,e){pt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Al{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const jm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Wm=new lr(3e4,6e4);function ur(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Cn(t,e,n,r,s={}){return Cl(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ar(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Al.fetch()(Pl(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Cl(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jm),e);try{const s=new Vm(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Tr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Tr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Tr(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Bm(t,f,l);qe(t,f)}}catch(s){if(s instanceof Dt)throw s;qe(t,"network-request-failed",{message:String(s)})}}async function ys(t,e,n,r,s={}){const i=await Cn(t,e,n,r,s);return"mfaPendingCredential"in i&&qe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Pl(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?no(t.config,s):`${t.config.apiScheme}://${s}`}class Vm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tt(this.auth,"network-request-failed")),Wm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Tr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=tt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function zm(t,e){return Cn(t,"POST","/v1/accounts:delete",e)}async function Km(t,e){return Cn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Vn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qm(t,e=!1){const n=Lt(t),r=await n.getIdToken(e),s=ro(r);H(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Vn(Hs(s.auth_time)),issuedAtTime:Vn(Hs(s.iat)),expirationTime:Vn(Hs(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Hs(t){return Number(t)*1e3}function ro(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return kr("JWT malformed, contained fewer than 3 sections"),null;try{const s=ml(n);return s?JSON.parse(s):(kr("Failed to decode base64 JWT payload"),null)}catch(s){return kr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Jm(t){const e=ro(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Zn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dt&&Gm(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Gm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Ym{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ol{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vn(this.lastLoginAt),this.creationTime=Vn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Xr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Zn(t,Km(n,{idToken:r}));H(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Zm(i.providerUserInfo):[],a=Qm(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=c?l:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ol(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,u)}async function Xm(t){const e=Lt(t);await Xr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Qm(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Zm(t){return t.map(e=>{var{providerId:n}=e,r=eo(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function eg(t,e){const n=await Cl(t,{},async()=>{const r=ar({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Pl(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Al.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class er{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await eg(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new er;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new er,this.toJSON())}_performRefresh(){return lt("not implemented")}}/**
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
 */function bt(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=eo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ym(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ol(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Zn(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qm(this,e)}reload(){return Xm(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Kt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Xr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Zn(this,zm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,f;const u=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,P=(l=n.createdAt)!==null&&l!==void 0?l:void 0,x=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:F,emailVerified:R,isAnonymous:$,providerData:J,stsTokenManager:oe}=n;H(F&&oe,e,"internal-error");const ne=er.fromJSON(this.name,oe);H(typeof F=="string",e,"internal-error"),bt(u,e.name),bt(p,e.name),H(typeof R=="boolean",e,"internal-error"),H(typeof $=="boolean",e,"internal-error"),bt(g,e.name),bt(_,e.name),bt(v,e.name),bt(k,e.name),bt(P,e.name),bt(x,e.name);const ue=new Kt({uid:F,auth:e,email:p,emailVerified:R,displayName:u,isAnonymous:$,photoURL:_,phoneNumber:g,tenantId:v,stsTokenManager:ne,createdAt:P,lastLoginAt:x});return J&&Array.isArray(J)&&(ue.providerData=J.map(he=>Object.assign({},he))),k&&(ue._redirectEventId=k),ue}static async _fromIdTokenResponse(e,n,r=!1){const s=new er;s.updateFromServerResponse(n);const i=new Kt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Xr(i),i}}/**
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
 */const Sa=new Map;function ut(t){pt(t instanceof Function,"Expected a class definition");let e=Sa.get(t);return e?(pt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sa.set(t,e),e)}/**
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
 */class kl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}kl.type="NONE";const Aa=kl;/**
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
 */function xr(t,e,n){return`firebase:${t}:${e}:${n}`}class hn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=xr(this.userKey,s.apiKey,i),this.fullPersistenceKey=xr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new hn(ut(Aa),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ut(Aa);const o=xr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const f=await l._get(o);if(f){const u=Kt._fromJSON(e,f);l!==i&&(a=u),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new hn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new hn(i,e,r))}}/**
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
 */function Ca(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ml(e))return"Blackberry";if(Ul(e))return"Webos";if(so(e))return"Safari";if((e.includes("chrome/")||Nl(e))&&!e.includes("edge/"))return"Chrome";if(Ll(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xl(t=Re()){return/firefox\//i.test(t)}function so(t=Re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Nl(t=Re()){return/crios\//i.test(t)}function Dl(t=Re()){return/iemobile/i.test(t)}function Ll(t=Re()){return/android/i.test(t)}function Ml(t=Re()){return/blackberry/i.test(t)}function Ul(t=Re()){return/webos/i.test(t)}function bs(t=Re()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function tg(t=Re()){var e;return bs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ng(){return gp()&&document.documentMode===10}function Bl(t=Re()){return bs(t)||Ll(t)||Ul(t)||Ml(t)||/windows phone/i.test(t)||Dl(t)}function rg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Fl(t,e=[]){let n;switch(t){case"Browser":n=Ca(Re());break;case"Worker":n=`${Ca(Re())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${cr}/${r}`}async function $l(t,e){return Cn(t,"GET","/v2/recaptchaConfig",ur(t,e))}function Pa(t){return t!==void 0&&t.enterprise!==void 0}class Hl{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function sg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function jl(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=tt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",sg().appendChild(r)})}function ig(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const og="https://www.google.com/recaptcha/enterprise.js?render=",ag="recaptcha-enterprise",cg="NO_RECAPTCHA";class Wl{constructor(e){this.type=ag,this.auth=fr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{$l(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Hl(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Pa(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(cg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Pa(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}jl(og+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Oa(t,e,n,r=!1){const s=new Wl(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class lg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class ug{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ka(this),this.idTokenSubscription=new ka(this),this.beforeStateQueue=new lg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ut(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await hn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Hm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Lt(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ut(e))})}async initializeRecaptchaConfig(){const e=await $l(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Hl(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Wl(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new or("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ut(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await hn.create(this,[ut(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Um(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function fr(t){return Lt(t)}class ka{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ip(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function fg(t,e){const n=El(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Jr(i,e!=null?e:{}))return s;qe(s,"already-initialized")}return n.initialize({options:e})}function dg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ut);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function hg(t,e,n){const r=fr(t);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Vl(e),{host:o,port:a}=pg(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||mg()}function Vl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pg(t){const e=Vl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:xa(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:xa(o)}}}function xa(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class io{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return lt("not implemented")}_getIdTokenResponse(e){return lt("not implemented")}_linkToIdToken(e,n){return lt("not implemented")}_getReauthenticationResolver(e){return lt("not implemented")}}async function gg(t,e){return Cn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function js(t,e){return ys(t,"POST","/v1/accounts:signInWithPassword",ur(t,e))}/**
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
 */async function _g(t,e){return ys(t,"POST","/v1/accounts:signInWithEmailLink",ur(t,e))}async function yg(t,e){return ys(t,"POST","/v1/accounts:signInWithEmailLink",ur(t,e))}/**
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
 */class tr extends io{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new tr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new tr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Oa(e,r,"signInWithPassword");return js(e,s)}else return js(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Oa(e,r,"signInWithPassword");return js(e,i)}else return Promise.reject(s)});case"emailLink":return _g(e,{email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return gg(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return yg(e,{idToken:n,email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function pn(t,e){return ys(t,"POST","/v1/accounts:signInWithIdp",ur(t,e))}/**
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
 */const bg="http://localhost";class Gt extends io{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=eo(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Gt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return pn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,pn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,pn(e,n)}buildRequest(){const e={requestUri:bg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ar(n)}return e}}/**
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
 */function vg(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Eg(t){const e=Bn(Fn(t)).link,n=e?Bn(Fn(e)).deep_link_id:null,r=Bn(Fn(t)).deep_link_id;return(r?Bn(Fn(r)).link:null)||r||n||e||t}class oo{constructor(e){var n,r,s,i,o,a;const c=Bn(Fn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,u=vg((s=c.mode)!==null&&s!==void 0?s:null);H(l&&f&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Eg(e);try{return new oo(n)}catch{return null}}}/**
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
 */class Pn{constructor(){this.providerId=Pn.PROVIDER_ID}static credential(e,n){return tr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=oo.parseLink(n);return H(r,"argument-error"),tr._fromEmailAndCode(e,r.code,r.tenantId)}}Pn.PROVIDER_ID="password";Pn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Pn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class zl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class dr extends zl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Tt extends dr{constructor(){super("facebook.com")}static credential(e){return Gt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch{return null}}}Tt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tt.PROVIDER_ID="facebook.com";/**
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
 */class Rt extends dr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gt._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Rt.credential(n,r)}catch{return null}}}Rt.GOOGLE_SIGN_IN_METHOD="google.com";Rt.PROVIDER_ID="google.com";/**
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
 */class St extends dr{constructor(){super("github.com")}static credential(e){return Gt._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch{return null}}}St.GITHUB_SIGN_IN_METHOD="github.com";St.PROVIDER_ID="github.com";/**
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
 */class At extends dr{constructor(){super("twitter.com")}static credential(e,n){return Gt._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return At.credential(n,r)}catch{return null}}}At.TWITTER_SIGN_IN_METHOD="twitter.com";At.PROVIDER_ID="twitter.com";/**
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
 */class In{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Kt._fromIdTokenResponse(e,r,s),o=Na(r);return new In({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Na(r);return new In({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Na(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Qr extends Dt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Qr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Qr(e,n,r,s)}}function Kl(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Qr._fromErrorAndOperation(t,i,e,r):i})}async function wg(t,e,n=!1){const r=await Zn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return In._forOperation(t,"link",r)}/**
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
 */async function Ig(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Zn(t,Kl(r,s,e,t),n);H(i.idToken,r,"internal-error");const o=ro(i.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),In._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&qe(r,"user-mismatch"),i}}/**
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
 */async function ql(t,e,n=!1){const r="signIn",s=await Kl(t,r,e),i=await In._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Tg(t,e){return ql(fr(t),e)}function Rg(t,e,n){return Tg(Lt(t),Pn.credential(e,n))}function Sg(t,e,n,r){return Lt(t).onIdTokenChanged(e,n,r)}function Ag(t,e,n){return Lt(t).beforeAuthStateChanged(e,n)}function Cg(t){return Lt(t).signOut()}const Zr="__sak";/**
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
 */class Jl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zr,"1"),this.storage.removeItem(Zr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Pg(){const t=Re();return so(t)||bs(t)}const Og=1e3,kg=10;class Gl extends Jl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Pg()&&rg(),this.fallbackToPolling=Bl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);ng()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,kg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Og)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gl.type="LOCAL";const xg=Gl;/**
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
 */class Yl extends Jl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Yl.type="SESSION";const Xl=Yl;/**
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
 */function Ng(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class vs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new vs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Ng(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vs.receivers=[];/**
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
 */function ao(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Dg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=ao("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(u){const p=u;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function nt(){return window}function Lg(t){nt().location.href=t}/**
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
 */function Ql(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function Mg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ug(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Bg(){return Ql()?self:null}/**
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
 */const Zl="firebaseLocalStorageDb",Fg=1,es="firebaseLocalStorage",eu="fbase_key";class hr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Es(t,e){return t.transaction([es],e?"readwrite":"readonly").objectStore(es)}function $g(){const t=indexedDB.deleteDatabase(Zl);return new hr(t).toPromise()}function _i(){const t=indexedDB.open(Zl,Fg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(es,{keyPath:eu})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(es)?e(r):(r.close(),await $g(),e(await _i()))})})}async function Da(t,e,n){const r=Es(t,!0).put({[eu]:e,value:n});return new hr(r).toPromise()}async function Hg(t,e){const n=Es(t,!1).get(e),r=await new hr(n).toPromise();return r===void 0?null:r.value}function La(t,e){const n=Es(t,!0).delete(e);return new hr(n).toPromise()}const jg=800,Wg=3;class tu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _i(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Wg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ql()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vs._getInstance(Bg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Mg(),!this.activeServiceWorker)return;this.sender=new Dg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ug()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _i();return await Da(e,Zr,"1"),await La(e,Zr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Da(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Hg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>La(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Es(s,!1).getAll();return new hr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tu.type="LOCAL";const Vg=tu;new lr(3e4,6e4);/**
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
 */function zg(t,e){return e?ut(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class co extends io{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return pn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return pn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Kg(t){return ql(t.auth,new co(t),t.bypassAuthState)}function qg(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),Ig(n,new co(t),t.bypassAuthState)}async function Jg(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),wg(n,new co(t),t.bypassAuthState)}/**
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
 */class nu{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Kg;case"linkViaPopup":case"linkViaRedirect":return Jg;case"reauthViaPopup":case"reauthViaRedirect":return qg;default:qe(this.auth,"internal-error")}}resolve(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Gg=new lr(2e3,1e4);class rn extends nu{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,rn.currentPopupAction&&rn.currentPopupAction.cancel(),rn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){pt(this.filter.length===1,"Popup operations only handle one event");const e=ao();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Gg.get())};e()}}rn.currentPopupAction=null;/**
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
 */const Yg="pendingRedirect",Nr=new Map;class Xg extends nu{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Nr.get(this.auth._key());if(!e){try{const r=await Qg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Nr.set(this.auth._key(),e)}return this.bypassAuthState||Nr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Qg(t,e){const n=t_(e),r=e_(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Zg(t,e){Nr.set(t._key(),e)}function e_(t){return ut(t._redirectPersistence)}function t_(t){return xr(Yg,t.config.apiKey,t.name)}async function n_(t,e,n=!1){const r=fr(t),s=zg(r,e),o=await new Xg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const r_=10*60*1e3;class s_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!i_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ru(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=r_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ma(e))}saveEventToCache(e){this.cachedEventUids.add(Ma(e)),this.lastProcessedEventTime=Date.now()}}function Ma(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ru({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function i_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ru(t);default:return!1}}/**
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
 */async function o_(t,e={}){return Cn(t,"GET","/v1/projects",e)}/**
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
 */const a_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,c_=/^https?/;async function l_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await o_(t);for(const n of e)try{if(u_(n))return}catch{}qe(t,"unauthorized-domain")}function u_(t){const e=gi(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!c_.test(n))return!1;if(a_.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const f_=new lr(3e4,6e4);function Ua(){const t=nt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function d_(t){return new Promise((e,n)=>{var r,s,i;function o(){Ua(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ua(),n(tt(t,"network-request-failed"))},timeout:f_.get()})}if(!((s=(r=nt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=nt().gapi)===null||i===void 0)&&i.load)o();else{const a=ig("iframefcb");return nt()[a]=()=>{gapi.load?o():n(tt(t,"network-request-failed"))},jl(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Dr=null,e})}let Dr=null;function h_(t){return Dr=Dr||d_(t),Dr}/**
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
 */const p_=new lr(5e3,15e3),m_="__/auth/iframe",g_="emulator/auth/iframe",__={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},y_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function b_(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?no(e,g_):`https://${t.config.authDomain}/${m_}`,r={apiKey:e.apiKey,appName:t.name,v:cr},s=y_.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ar(r).slice(1)}`}async function v_(t){const e=await h_(t),n=nt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:b_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:__,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=tt(t,"network-request-failed"),a=nt().setTimeout(()=>{i(o)},p_.get());function c(){nt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const E_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},w_=500,I_=600,T_="_blank",R_="http://localhost";class Ba{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function S_(t,e,n,r=w_,s=I_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},E_),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Re().toLowerCase();n&&(a=Nl(l)?T_:n),xl(l)&&(e=e||R_,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[g,_])=>`${p}${g}=${_},`,"");if(tg(l)&&a!=="_self")return A_(e||"",a),new Ba(null);const u=window.open(e||"",a,f);H(u,t,"popup-blocked");try{u.focus()}catch{}return new Ba(u)}function A_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const C_="__/auth/handler",P_="emulator/auth/handler",O_=encodeURIComponent("fac");async function Fa(t,e,n,r,s,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:cr,eventId:s};if(e instanceof zl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",wp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,u]of Object.entries(i||{}))o[f]=u}if(e instanceof dr){const f=e.getScopes().filter(u=>u!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const c=await t._getAppCheckToken(),l=c?`#${O_}=${encodeURIComponent(c)}`:"";return`${k_(t)}?${ar(a).slice(1)}${l}`}function k_({config:t}){return t.emulator?no(t,P_):`https://${t.authDomain}/${C_}`}/**
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
 */const Ws="webStorageSupport";class x_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xl,this._completeRedirectFn=n_,this._overrideRedirectResult=Zg}async _openPopup(e,n,r,s){var i;pt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Fa(e,n,r,gi(),s);return S_(e,o,ao())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Fa(e,n,r,gi(),s);return Lg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(pt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await v_(e),r=new s_(e);return n.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ws,{type:Ws},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ws];o!==void 0&&n(!!o),qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=l_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bl()||so()||bs()}}const N_=x_;var $a="@firebase/auth",Ha="0.23.2";/**
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
 */class D_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function L_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function M_(t){Xn(new wn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fl(t)},l=new ug(r,s,i,c);return dg(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Xn(new wn("auth-internal",e=>{const n=fr(e.getProvider("auth").getImmediate());return(r=>new D_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn($a,Ha,L_(t)),dn($a,Ha,"esm2017")}/**
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
 */const U_=5*60,B_=_l("authIdTokenMaxAge")||U_;let ja=null;const F_=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>B_)return;const s=n==null?void 0:n.token;ja!==s&&(ja=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function $_(t=wm()){const e=El(t,"auth");if(e.isInitialized())return e.getImmediate();const n=fg(t,{popupRedirectResolver:N_,persistence:[Vg,xg,Xl]}),r=_l("authTokenSyncURL");if(r){const i=F_(r);Ag(n,i,()=>i(n.currentUser)),Sg(n,o=>i(o))}const s=fp("auth");return s&&hg(n,`http://${s}`),n}M_("Browser");function H_(t){const e=_e(t.currentUser),n=De(()=>!!e.value);return t.onIdTokenChanged(r=>e.value=r),{isAuthenticated:n,user:e}}const yi=$_(Lm),{isAuthenticated:Wa,user:Va}=H_(yi),pr=()=>({isAuthenticated:Wa,user:Va,login:async(r,s)=>(await Rg(yi,r,s),Wa.value),logout:async()=>{await Cg(yi),_o.push({name:"Home"})},refresh:async()=>{await Va.value.reload()}});function su(t,e){return function(){return t.apply(e,arguments)}}const{toString:j_}=Object.prototype,{getPrototypeOf:lo}=Object,ws=(t=>e=>{const n=j_.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),st=t=>(t=t.toLowerCase(),e=>ws(e)===t),Is=t=>e=>typeof e===t,{isArray:On}=Array,nr=Is("undefined");function W_(t){return t!==null&&!nr(t)&&t.constructor!==null&&!nr(t.constructor)&&Ue(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const iu=st("ArrayBuffer");function V_(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&iu(t.buffer),e}const z_=Is("string"),Ue=Is("function"),ou=Is("number"),Ts=t=>t!==null&&typeof t=="object",K_=t=>t===!0||t===!1,Lr=t=>{if(ws(t)!=="object")return!1;const e=lo(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},q_=st("Date"),J_=st("File"),G_=st("Blob"),Y_=st("FileList"),X_=t=>Ts(t)&&Ue(t.pipe),Q_=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Ue(t.append)&&((e=ws(t))==="formdata"||e==="object"&&Ue(t.toString)&&t.toString()==="[object FormData]"))},Z_=st("URLSearchParams"),ey=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function mr(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),On(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function au(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const cu=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),lu=t=>!nr(t)&&t!==cu;function bi(){const{caseless:t}=lu(this)&&this||{},e={},n=(r,s)=>{const i=t&&au(e,s)||s;Lr(e[i])&&Lr(r)?e[i]=bi(e[i],r):Lr(r)?e[i]=bi({},r):On(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&mr(arguments[r],n);return e}const ty=(t,e,n,{allOwnKeys:r}={})=>(mr(e,(s,i)=>{n&&Ue(s)?t[i]=su(s,n):t[i]=s},{allOwnKeys:r}),t),ny=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),ry=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},sy=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&lo(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},iy=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},oy=t=>{if(!t)return null;if(On(t))return t;let e=t.length;if(!ou(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},ay=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&lo(Uint8Array)),cy=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},ly=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},uy=st("HTMLFormElement"),fy=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),za=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),dy=st("RegExp"),uu=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};mr(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},hy=t=>{uu(t,(e,n)=>{if(Ue(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(!!Ue(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},py=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return On(t)?r(t):r(String(t).split(e)),n},my=()=>{},gy=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Vs="abcdefghijklmnopqrstuvwxyz",Ka="0123456789",fu={DIGIT:Ka,ALPHA:Vs,ALPHA_DIGIT:Vs+Vs.toUpperCase()+Ka},_y=(t=16,e=fu.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function yy(t){return!!(t&&Ue(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const by=t=>{const e=new Array(10),n=(r,s)=>{if(Ts(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=On(r)?[]:{};return mr(r,(o,a)=>{const c=n(o,s+1);!nr(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},vy=st("AsyncFunction"),Ey=t=>t&&(Ts(t)||Ue(t))&&Ue(t.then)&&Ue(t.catch),b={isArray:On,isArrayBuffer:iu,isBuffer:W_,isFormData:Q_,isArrayBufferView:V_,isString:z_,isNumber:ou,isBoolean:K_,isObject:Ts,isPlainObject:Lr,isUndefined:nr,isDate:q_,isFile:J_,isBlob:G_,isRegExp:dy,isFunction:Ue,isStream:X_,isURLSearchParams:Z_,isTypedArray:ay,isFileList:Y_,forEach:mr,merge:bi,extend:ty,trim:ey,stripBOM:ny,inherits:ry,toFlatObject:sy,kindOf:ws,kindOfTest:st,endsWith:iy,toArray:oy,forEachEntry:cy,matchAll:ly,isHTMLForm:uy,hasOwnProperty:za,hasOwnProp:za,reduceDescriptors:uu,freezeMethods:hy,toObjectSet:py,toCamelCase:fy,noop:my,toFiniteNumber:gy,findKey:au,global:cu,isContextDefined:lu,ALPHABET:fu,generateString:_y,isSpecCompliantForm:yy,toJSONObject:by,isAsyncFn:vy,isThenable:Ey};function K(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}b.inherits(K,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:b.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const du=K.prototype,hu={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{hu[t]={value:t}});Object.defineProperties(K,hu);Object.defineProperty(du,"isAxiosError",{value:!0});K.from=(t,e,n,r,s,i)=>{const o=Object.create(du);return b.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),K.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const wy=null;function vi(t){return b.isPlainObject(t)||b.isArray(t)}function pu(t){return b.endsWith(t,"[]")?t.slice(0,-2):t}function qa(t,e,n){return t?t.concat(e).map(function(s,i){return s=pu(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function Iy(t){return b.isArray(t)&&!t.some(vi)}const Ty=b.toFlatObject(b,{},null,function(e){return/^is[A-Z]/.test(e)});function Rs(t,e,n){if(!b.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=b.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,k){return!b.isUndefined(k[v])});const r=n.metaTokens,s=n.visitor||f,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&b.isSpecCompliantForm(e);if(!b.isFunction(s))throw new TypeError("visitor must be a function");function l(_){if(_===null)return"";if(b.isDate(_))return _.toISOString();if(!c&&b.isBlob(_))throw new K("Blob is not supported. Use a Buffer instead.");return b.isArrayBuffer(_)||b.isTypedArray(_)?c&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function f(_,v,k){let P=_;if(_&&!k&&typeof _=="object"){if(b.endsWith(v,"{}"))v=r?v:v.slice(0,-2),_=JSON.stringify(_);else if(b.isArray(_)&&Iy(_)||(b.isFileList(_)||b.endsWith(v,"[]"))&&(P=b.toArray(_)))return v=pu(v),P.forEach(function(F,R){!(b.isUndefined(F)||F===null)&&e.append(o===!0?qa([v],R,i):o===null?v:v+"[]",l(F))}),!1}return vi(_)?!0:(e.append(qa(k,v,i),l(_)),!1)}const u=[],p=Object.assign(Ty,{defaultVisitor:f,convertValue:l,isVisitable:vi});function g(_,v){if(!b.isUndefined(_)){if(u.indexOf(_)!==-1)throw Error("Circular reference detected in "+v.join("."));u.push(_),b.forEach(_,function(P,x){(!(b.isUndefined(P)||P===null)&&s.call(e,P,b.isString(x)?x.trim():x,v,p))===!0&&g(P,v?v.concat(x):[x])}),u.pop()}}if(!b.isObject(t))throw new TypeError("data must be an object");return g(t),e}function Ja(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function uo(t,e){this._pairs=[],t&&Rs(t,this,e)}const mu=uo.prototype;mu.append=function(e,n){this._pairs.push([e,n])};mu.toString=function(e){const n=e?function(r){return e.call(this,r,Ja)}:Ja;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Ry(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function gu(t,e,n){if(!e)return t;const r=n&&n.encode||Ry,s=n&&n.serialize;let i;if(s?i=s(e,n):i=b.isURLSearchParams(e)?e.toString():new uo(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class Sy{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){b.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Ga=Sy,_u={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ay=typeof URLSearchParams<"u"?URLSearchParams:uo,Cy=typeof FormData<"u"?FormData:null,Py=typeof Blob<"u"?Blob:null,Oy={isBrowser:!0,classes:{URLSearchParams:Ay,FormData:Cy,Blob:Py},protocols:["http","https","file","blob","url","data"]},yu=typeof window<"u"&&typeof document<"u",ky=(t=>yu&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),xy=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Ny=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:yu,hasStandardBrowserWebWorkerEnv:xy,hasStandardBrowserEnv:ky},Symbol.toStringTag,{value:"Module"})),et={...Ny,...Oy};function Dy(t,e){return Rs(t,new et.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return et.isNode&&b.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function Ly(t){return b.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function My(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function bu(t){function e(n,r,s,i){let o=n[i++];const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&b.isArray(s)?s.length:o,c?(b.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!b.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&b.isArray(s[o])&&(s[o]=My(s[o])),!a)}if(b.isFormData(t)&&b.isFunction(t.entries)){const n={};return b.forEachEntry(t,(r,s)=>{e(Ly(r),s,n,0)}),n}return null}function Uy(t,e,n){if(b.isString(t))try{return(e||JSON.parse)(t),b.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const fo={transitional:_u,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=b.isObject(e);if(i&&b.isHTMLForm(e)&&(e=new FormData(e)),b.isFormData(e))return s&&s?JSON.stringify(bu(e)):e;if(b.isArrayBuffer(e)||b.isBuffer(e)||b.isStream(e)||b.isFile(e)||b.isBlob(e))return e;if(b.isArrayBufferView(e))return e.buffer;if(b.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Dy(e,this.formSerializer).toString();if((a=b.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Rs(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Uy(e)):e}],transformResponse:[function(e){const n=this.transitional||fo.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(e&&b.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?K.from(a,K.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:et.classes.FormData,Blob:et.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};b.forEach(["delete","get","head","post","put","patch"],t=>{fo.headers[t]={}});const ho=fo,By=b.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Fy=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&By[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Ya=Symbol("internals");function Ln(t){return t&&String(t).trim().toLowerCase()}function Mr(t){return t===!1||t==null?t:b.isArray(t)?t.map(Mr):String(t)}function $y(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const Hy=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function zs(t,e,n,r,s){if(b.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!b.isString(e)){if(b.isString(r))return e.indexOf(r)!==-1;if(b.isRegExp(r))return r.test(e)}}function jy(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function Wy(t,e){const n=b.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class Ss{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,l){const f=Ln(c);if(!f)throw new Error("header name must be a non-empty string");const u=b.findKey(s,f);(!u||s[u]===void 0||l===!0||l===void 0&&s[u]!==!1)&&(s[u||c]=Mr(a))}const o=(a,c)=>b.forEach(a,(l,f)=>i(l,f,c));return b.isPlainObject(e)||e instanceof this.constructor?o(e,n):b.isString(e)&&(e=e.trim())&&!Hy(e)?o(Fy(e),n):e!=null&&i(n,e,r),this}get(e,n){if(e=Ln(e),e){const r=b.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return $y(s);if(b.isFunction(n))return n.call(this,s,r);if(b.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Ln(e),e){const r=b.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||zs(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=Ln(o),o){const a=b.findKey(r,o);a&&(!n||zs(r,r[a],a,n))&&(delete r[a],s=!0)}}return b.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||zs(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return b.forEach(this,(s,i)=>{const o=b.findKey(r,i);if(o){n[o]=Mr(s),delete n[i];return}const a=e?jy(i):String(i).trim();a!==i&&delete n[i],n[a]=Mr(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return b.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&b.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Ya]=this[Ya]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Ln(o);r[a]||(Wy(s,o),r[a]=!0)}return b.isArray(e)?e.forEach(i):i(e),this}}Ss.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);b.reduceDescriptors(Ss.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});b.freezeMethods(Ss);const dt=Ss;function Ks(t,e){const n=this||ho,r=e||n,s=dt.from(r.headers);let i=r.data;return b.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function vu(t){return!!(t&&t.__CANCEL__)}function gr(t,e,n){K.call(this,t==null?"canceled":t,K.ERR_CANCELED,e,n),this.name="CanceledError"}b.inherits(gr,K,{__CANCEL__:!0});function Vy(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new K("Request failed with status code "+n.status,[K.ERR_BAD_REQUEST,K.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const zy=et.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];b.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),b.isString(r)&&o.push("path="+r),b.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Ky(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function qy(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function Eu(t,e){return t&&!Ky(e)?qy(t,e):e}const Jy=et.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=b.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Gy(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Yy(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),f=r[i];o||(o=l),n[s]=c,r[s]=l;let u=i,p=0;for(;u!==s;)p+=n[u++],u=u%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),l-o<e)return;const g=f&&l-f;return g?Math.round(p*1e3/g):void 0}}function Xa(t,e){let n=0;const r=Yy(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,c=r(a),l=i<=o;n=i;const f={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-i)/c:void 0,event:s};f[e?"download":"upload"]=!0,t(f)}}const Xy=typeof XMLHttpRequest<"u",Qy=Xy&&function(t){return new Promise(function(n,r){let s=t.data;const i=dt.from(t.headers).normalize();let{responseType:o,withXSRFToken:a}=t,c;function l(){t.cancelToken&&t.cancelToken.unsubscribe(c),t.signal&&t.signal.removeEventListener("abort",c)}let f;if(b.isFormData(s)){if(et.hasStandardBrowserEnv||et.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((f=i.getContentType())!==!1){const[v,...k]=f?f.split(";").map(P=>P.trim()).filter(Boolean):[];i.setContentType([v||"multipart/form-data",...k].join("; "))}}let u=new XMLHttpRequest;if(t.auth){const v=t.auth.username||"",k=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(v+":"+k))}const p=Eu(t.baseURL,t.url);u.open(t.method.toUpperCase(),gu(p,t.params,t.paramsSerializer),!0),u.timeout=t.timeout;function g(){if(!u)return;const v=dt.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),P={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:v,config:t,request:u};Vy(function(F){n(F),l()},function(F){r(F),l()},P),u=null}if("onloadend"in u?u.onloadend=g:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(g)},u.onabort=function(){!u||(r(new K("Request aborted",K.ECONNABORTED,t,u)),u=null)},u.onerror=function(){r(new K("Network Error",K.ERR_NETWORK,t,u)),u=null},u.ontimeout=function(){let k=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const P=t.transitional||_u;t.timeoutErrorMessage&&(k=t.timeoutErrorMessage),r(new K(k,P.clarifyTimeoutError?K.ETIMEDOUT:K.ECONNABORTED,t,u)),u=null},et.hasStandardBrowserEnv&&(a&&b.isFunction(a)&&(a=a(t)),a||a!==!1&&Jy(p))){const v=t.xsrfHeaderName&&t.xsrfCookieName&&zy.read(t.xsrfCookieName);v&&i.set(t.xsrfHeaderName,v)}s===void 0&&i.setContentType(null),"setRequestHeader"in u&&b.forEach(i.toJSON(),function(k,P){u.setRequestHeader(P,k)}),b.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),o&&o!=="json"&&(u.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&u.addEventListener("progress",Xa(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Xa(t.onUploadProgress)),(t.cancelToken||t.signal)&&(c=v=>{!u||(r(!v||v.type?new gr(null,t,u):v),u.abort(),u=null)},t.cancelToken&&t.cancelToken.subscribe(c),t.signal&&(t.signal.aborted?c():t.signal.addEventListener("abort",c)));const _=Gy(p);if(_&&et.protocols.indexOf(_)===-1){r(new K("Unsupported protocol "+_+":",K.ERR_BAD_REQUEST,t));return}u.send(s||null)})},Ei={http:wy,xhr:Qy};b.forEach(Ei,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Qa=t=>`- ${t}`,Zy=t=>b.isFunction(t)||t===null||t===!1,wu={getAdapter:t=>{t=b.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!Zy(n)&&(r=Ei[(o=String(n)).toLowerCase()],r===void 0))throw new K(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(Qa).join(`
`):" "+Qa(i[0]):"as no adapter specified";throw new K("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Ei};function qs(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new gr(null,t)}function Za(t){return qs(t),t.headers=dt.from(t.headers),t.data=Ks.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),wu.getAdapter(t.adapter||ho.adapter)(t).then(function(r){return qs(t),r.data=Ks.call(t,t.transformResponse,r),r.headers=dt.from(r.headers),r},function(r){return vu(r)||(qs(t),r&&r.response&&(r.response.data=Ks.call(t,t.transformResponse,r.response),r.response.headers=dt.from(r.response.headers))),Promise.reject(r)})}const ec=t=>t instanceof dt?t.toJSON():t;function Tn(t,e){e=e||{};const n={};function r(l,f,u){return b.isPlainObject(l)&&b.isPlainObject(f)?b.merge.call({caseless:u},l,f):b.isPlainObject(f)?b.merge({},f):b.isArray(f)?f.slice():f}function s(l,f,u){if(b.isUndefined(f)){if(!b.isUndefined(l))return r(void 0,l,u)}else return r(l,f,u)}function i(l,f){if(!b.isUndefined(f))return r(void 0,f)}function o(l,f){if(b.isUndefined(f)){if(!b.isUndefined(l))return r(void 0,l)}else return r(void 0,f)}function a(l,f,u){if(u in e)return r(l,f);if(u in t)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,f)=>s(ec(l),ec(f),!0)};return b.forEach(Object.keys(Object.assign({},t,e)),function(f){const u=c[f]||s,p=u(t[f],e[f],f);b.isUndefined(p)&&u!==a||(n[f]=p)}),n}const Iu="1.6.2",po={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{po[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const tc={};po.transitional=function(e,n,r){function s(i,o){return"[Axios v"+Iu+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new K(s(o," has been removed"+(n?" in "+n:"")),K.ERR_DEPRECATED);return n&&!tc[o]&&(tc[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function eb(t,e,n){if(typeof t!="object")throw new K("options must be an object",K.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new K("option "+i+" must be "+c,K.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new K("Unknown option "+i,K.ERR_BAD_OPTION)}}const wi={assertOptions:eb,validators:po},vt=wi.validators;class ts{constructor(e){this.defaults=e,this.interceptors={request:new Ga,response:new Ga}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Tn(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&wi.assertOptions(r,{silentJSONParsing:vt.transitional(vt.boolean),forcedJSONParsing:vt.transitional(vt.boolean),clarifyTimeoutError:vt.transitional(vt.boolean)},!1),s!=null&&(b.isFunction(s)?n.paramsSerializer={serialize:s}:wi.assertOptions(s,{encode:vt.function,serialize:vt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&b.merge(i.common,i[n.method]);i&&b.forEach(["delete","get","head","post","put","patch","common"],_=>{delete i[_]}),n.headers=dt.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(c=c&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const l=[];this.interceptors.response.forEach(function(v){l.push(v.fulfilled,v.rejected)});let f,u=0,p;if(!c){const _=[Za.bind(this),void 0];for(_.unshift.apply(_,a),_.push.apply(_,l),p=_.length,f=Promise.resolve(n);u<p;)f=f.then(_[u++],_[u++]);return f}p=a.length;let g=n;for(u=0;u<p;){const _=a[u++],v=a[u++];try{g=_(g)}catch(k){v.call(this,k);break}}try{f=Za.call(this,g)}catch(_){return Promise.reject(_)}for(u=0,p=l.length;u<p;)f=f.then(l[u++],l[u++]);return f}getUri(e){e=Tn(this.defaults,e);const n=Eu(e.baseURL,e.url);return gu(n,e.params,e.paramsSerializer)}}b.forEach(["delete","get","head","options"],function(e){ts.prototype[e]=function(n,r){return this.request(Tn(r||{},{method:e,url:n,data:(r||{}).data}))}});b.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(Tn(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}ts.prototype[e]=n(),ts.prototype[e+"Form"]=n(!0)});const Ur=ts;class mo{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new gr(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new mo(function(s){e=s}),cancel:e}}}const tb=mo;function nb(t){return function(n){return t.apply(null,n)}}function rb(t){return b.isObject(t)&&t.isAxiosError===!0}const Ii={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ii).forEach(([t,e])=>{Ii[e]=t});const sb=Ii;function Tu(t){const e=new Ur(t),n=su(Ur.prototype.request,e);return b.extend(n,Ur.prototype,e,{allOwnKeys:!0}),b.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return Tu(Tn(t,s))},n}const ge=Tu(ho);ge.Axios=Ur;ge.CanceledError=gr;ge.CancelToken=tb;ge.isCancel=vu;ge.VERSION=Iu;ge.toFormData=Rs;ge.AxiosError=K;ge.Cancel=ge.CanceledError;ge.all=function(e){return Promise.all(e)};ge.spread=nb;ge.isAxiosError=rb;ge.mergeConfig=Tn;ge.AxiosHeaders=dt;ge.formToJSON=t=>bu(b.isHTMLForm(t)?new FormData(t):t);ge.getAdapter=wu.getAdapter;ge.HttpStatusCode=sb;ge.default=ge;const ib=ge,Ru=_e([]),go=_e(null),ob=_e(1),Yt=_e(!1),ab=_e(1),cb=_e(8),Su=_e([]),{user:Au}=pr(),Nt=ib.create({baseURL:"https://final-project-gpop.onrender.com/"}),lb=async()=>{Yt.value=!0;const{data:t,headers:e}=await Nt.get("/api/posts",{});Ru.value=t,console.log(t),Yt.value=!1},ub=async()=>{const{data:t,headers:e}=await Nt.get("/api/birds",{});Su.value=t,console.log(t)},fb=async t=>{Yt.value=!0;const{data:e,headers:n}=await Nt.get(`/api/posts/${t}`,{});go.value=e,console.log(e),Yt.value=!1},db=async t=>{Yt.value=!0;let e=await Au.value.getIdToken();Nt.defaults.headers.common.Authorization=`Bearer ${e}`;const{data:n,headers:r}=await Nt.post("/api/comments/",{post_id:go.value.id,content:t});console.log(n),console.log(r),Yt.value=!1},hb=async(t,e,n,r,s)=>{let i=await Au.value.getIdToken();Nt.defaults.headers.common.Authorization=`Bearer ${i}`;const{data:o,headers:a}=await Nt.post("/api/posts/",{bird_id:t,longitude:e,latitude:n,description:r,image_url:s});console.log(o),console.log(a)},kn=()=>({api:Nt,pages:ob,activePage:ab,loading:Yt,pageSize:cb,posts:Ru,getPosts:lb,getPost:fb,currentPost:go,createComment:db,birds:Su,getBirds:ub,createPost:hb});const Xt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},pb=t=>(Bi("data-v-c07d4245"),t=t(),Fi(),t),mb={class:"container mx-auto p-4 w-3/4"},gb={class:"min-w-full table-auto mx-auto"},_b=pb(()=>V("thead",{class:"bg-blue-100"},[V("tr",null,[V("th",{class:"px-4 py-2"},"User"),V("th",{class:"px-4 py-2"},"Bird"),V("th",{class:"px-4 py-2"},"Date")])],-1)),yb=["onClick"],bb={class:"px-4 py-2"},vb={class:"px-4 py-2"},Eb={class:"px-4 py-2"},wb={__name:"MainTable",setup(t){const{posts:e}=kn(),n=Xi();return ir(),(r,s)=>(te(),le("div",mb,[(te(),zi(Nc,null,{default:ln(()=>[V("table",gb,[_b,V("tbody",null,[(te(!0),le(ke,null,ji(ce(e),i=>(te(),le("tr",{key:i.id,class:"bg-blue-200 border-b hover:bg-light-blue cursor-pointer",onClick:o=>{ce(n).push(`/post/${i.id}`)}},[V("td",bb,We(i.user.username),1),V("td",vb,We(i.bird.common_name),1),V("td",Eb,We(new Date(i.created_at).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})),1)],8,yb))),128))])])]),_:1}))]))}},Ib=Xt(wb,[["__scopeId","data-v-c07d4245"]]);const Tb={key:0},Rb={key:1,class:"wrapper"},Sb={__name:"MainPage",setup(t){const{getPosts:e,loading:n}=kn();return ds(async()=>{await e()}),(r,s)=>ce(n)?(te(),le("p",Tb,"Loading...")):(te(),le("div",Rb,[fe(Ib)]))}},Ab=Xt(Sb,[["__scopeId","data-v-c0eba89d"]]);const Cb=t=>(Bi("data-v-a1a1cc46"),t=t(),Fi(),t),Pb=["onSubmit"],Ob=Cb(()=>V("button",{type:"submit",class:"bg-green-500 px-4 py-2"},"Log In",-1)),kb={__name:"LoginPage",setup(t){const{login:e,logout:n}=pr(),r=Xi(),s=ir(),i=_e(""),o=_e(""),a=async()=>{await e(i.value,o.value)?s.query.redirect?r.push(s.query.redirect):r.push({name:"Home"}):n()};return(c,l)=>(te(),le("form",{class:"login-form",onSubmit:tl(a,["prevent"])},[Ze(V("input",{"onUpdate:modelValue":l[0]||(l[0]=f=>i.value=f),type:"text",placeholder:"Username"},null,512),[[Wt,i.value]]),Ze(V("input",{"onUpdate:modelValue":l[1]||(l[1]=f=>o.value=f),type:"password",placeholder:"Password"},null,512),[[Wt,o.value]]),Ob],40,Pb))}},xb=Xt(kb,[["__scopeId","data-v-a1a1cc46"]]);const Nb=t=>(Bi("data-v-4fdd07c3"),t=t(),Fi(),t),Db=["onSubmit"],Lb=["value"],Mb=Nb(()=>V("button",{type:"submit",class:"bg-green-500 px-4 py-2"},"Create Post",-1)),Ub={__name:"CreatePostPage",setup(t){const{birds:e,getBirds:n,createPost:r}=kn(),s=Xi();ir();const i=_e(""),o=_e(""),a=_e(""),c=_e(""),l=_e(""),f=async()=>{await r(a.value,parseFloat(l.value),parseFloat(c.value),o.value,i.value),s.push({name:"Home"})};return ds(async()=>{await n()}),(u,p)=>(te(),le("form",{class:"post-form",onSubmit:tl(f,["prevent"])},[ct(" Image URL "),Ze(V("input",{"onUpdate:modelValue":p[0]||(p[0]=g=>i.value=g),type:"text",placeholder:"Image URL"},null,512),[[Wt,i.value]]),ct(" Description "),Ze(V("input",{"onUpdate:modelValue":p[1]||(p[1]=g=>o.value=g),type:"text",placeholder:"Description"},null,512),[[Wt,o.value]]),ct(" Bird "),ce(e).length?Ze((te(),le("select",{key:0,"onUpdate:modelValue":p[2]||(p[2]=g=>a.value=g)},[(te(!0),le(ke,null,ji(ce(e),g=>(te(),le("option",{key:g.id,value:g.id},We(g.common_name),9,Lb))),128))],512)),[[qd,a.value]]):md("",!0),ct(" Latitude "),Ze(V("input",{"onUpdate:modelValue":p[3]||(p[3]=g=>c.value=g),type:"text",placeholder:"Latitude"},null,512),[[Wt,c.value]]),ct(" Longitude "),Ze(V("input",{"onUpdate:modelValue":p[4]||(p[4]=g=>l.value=g),type:"text",placeholder:"Longitude"},null,512),[[Wt,l.value]]),Mb],40,Db))}},Bb=Xt(Ub,[["__scopeId","data-v-4fdd07c3"]]);const Fb={key:0},$b={key:1,class:"flex flex-col justify-center items-center"},Hb=["src"],jb={class:"text-black font-bold text-xl mb-2"},Wb={class:"text-gray-600 italic mb-4"},Vb={class:"text-justify max-w-md"},zb={__name:"PostContent",setup(t){const{currentPost:e,loading:n}=kn();return(r,s)=>(te(),le("div",null,[(te(),zi(Nc,null,{default:ln(()=>[ce(e)?(te(),le("div",$b,[V("img",{src:ce(e).image_url,alt:"Image",class:"mb-4",style:{"max-width":"30%",height:"auto"}},null,8,Hb),V("h1",jb,We(ce(e).bird.common_name),1),V("h2",Wb,We(ce(e).bird.scientific_name),1),V("p",Vb,We(ce(e).description),1)])):(te(),le("div",Fb,"Loading..."))]),_:1}))]))}},Kb=Xt(zb,[["__scopeId","data-v-8dc24859"]]),qb={class:"flex justify-center mt-10"},Jb={class:"w-1/2 bg-white p-6 rounded-lg shadow-lg"},Gb=V("h2",{class:"text-2xl font-bold mb-4"},"Comments",-1),Yb={key:0},Xb={key:1,class:"space-y-4"},Qb={class:"font-bold"},Zb={class:"text-left"},ev={class:"mt-6"},tv={__name:"CommentBox",setup(t){const{currentPost:e,createComment:n,getPost:r}=kn(),{isAuthenticated:s,refresh:i}=pr(),o=ir(),a=_e("");async function c(l){l.trim()&&(a.value="",console.log(l),await n(l),await r(o.params.id))}return(l,f)=>(te(),le("div",qb,[V("div",Jb,[Gb,ce(e)?(te(),le("div",Xb,[(te(!0),le(ke,null,ji(ce(e).comments,u=>(te(),le("div",{key:u.id,class:"border-b pb-4"},[V("p",Qb,We(u.user.username),1),V("p",Zb,We(u.content),1)]))),128))])):(te(),le("div",Yb,"Loading...")),Ze(V("div",ev,[Ze(V("textarea",{"onUpdate:modelValue":f[0]||(f[0]=u=>a.value=u),class:"w-full p-2 border rounded",placeholder:"Write a comment..."},null,512),[[Wt,a.value]]),V("button",{onClick:f[1]||(f[1]=u=>c(a.value)),class:"mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"}," Submit ")],512),[[el,ce(s)]])])]))}};const nv={key:0},rv={key:1,class:"wrapper"},sv={__name:"PostPage",setup(t){const{getPost:e,loading:n}=kn();return ds(async()=>{const r=ir();await e(r.params.id)}),(r,s)=>ce(n)?(te(),le("p",nv,"Loading...")):(te(),le("div",rv,[fe(Kb),fe(tv)]))}},iv=Xt(sv,[["__scopeId","data-v-172235fa"]]),{isAuthenticated:ov}=pr(),av=[{path:"/",name:"Home",component:Ab},{path:"/login",name:"Login",component:xb},{path:"/new_post",name:"NewPost",component:Bb,meta:{requiresAuth:!0}},{path:"/post/:id",name:"Post",component:iv}],_o=tp({history:_h(rp),routes:av});_o.beforeEach((t,e,n)=>{t.meta.requiresAuth&&!ov.value?n({name:"Login",query:{redirect:t.fullPath}}):n()});const cv={class:"wrapper"},lv={class:"brand-title"},uv={class:"menu"},fv={class:"px-2 py-4"},dv={key:0},hv={key:1},pv={__name:"NavBar",setup(t){const{isAuthenticated:e,logout:n,user:r}=pr(),s=_e("BirdWatchers");return(i,o)=>{var c;const a=xc("RouterLink");return te(),le("nav",null,[V("div",cv,[fe(a,{to:{name:"Home"},class:"brand"},{default:ln(()=>[V("span",lv,We(s.value),1)]),_:1}),V("div",uv,[Ze(V("p",fv,[ct(" Welcome back "),V("strong",null,[V("i",null,We((c=ce(r))==null?void 0:c.email),1)])],512),[[el,ce(e)]]),ce(e)?(te(),le("div",dv,[fe(a,{to:{name:"NewPost"},href:"#",class:"menu-item"},{default:ln(()=>[ct("New Post")]),_:1}),V("button",{class:"menu-logout",onClick:o[0]||(o[0]=(...l)=>ce(n)&&ce(n)(...l))},"Logout")])):(te(),le("div",hv,[fe(a,{to:{name:"Login"},href:"#",class:"menu-login"},{default:ln(()=>[ct("Login")]),_:1})]))])])])}}},mv=Xt(pv,[["__scopeId","data-v-46005bd0"]]),gv={__name:"App",setup(t){return(e,n)=>{const r=xc("RouterView");return te(),le(ke,null,[fe(mv),fe(r)],64)}}};Qd(gv).use(_o).mount("#app");
