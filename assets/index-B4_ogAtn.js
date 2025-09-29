const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-D7io9ct2.js","assets/query-CSyQ0w5Y.js","assets/vendor-CBH9K-97.js","assets/router-BWB2dKYR.js","assets/SEO-8m2IsXap.js","assets/ui-qr7cu0yN.js","assets/Search-Bcy6KnZK.js","assets/client-Cqft9O8K.js","assets/index-ngrFHoWO.js","assets/Glassmorphism-B6x2MkMT.js","assets/GlassButton-BfRB-w5d.js","assets/VehicleDetail-BdeYH-NB.js","assets/About-CaQWXzU8.js","assets/Contact-B91eBf97.js","assets/Dashboard-CKv6EOOz.js","assets/Login-BdOqd13o.js","assets/GlassForm-H9qvmeAC.js","assets/Register-CiTwsqae.js","assets/AdminLogin-C5rN51kp.js","assets/FAQ-Cs9G7_6s.js","assets/SetupAdmin-Bdu4CdFv.js","assets/Unauthorized-ChESoKZR.js","assets/NotFound-B9JScyaF.js","assets/AdminGuard-DwBpTs7o.js"])))=>i.map(i=>d[i]);
var jp=Object.defineProperty;var Fp=(n,e,t)=>e in n?jp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var _t=(n,e,t)=>Fp(n,typeof e!="symbol"?e+"":e,t);import{j as f,Q as Up,a as $p}from"./query-CSyQ0w5Y.js";import{b as Ku,g as aa,r as q,a as vt}from"./vendor-CBH9K-97.js";import{u as Qu,L as Me,N as so,B as Bp,R as zp,a as Be}from"./router-BWB2dKYR.js";import{m as qe,A as el}from"./ui-qr7cu0yN.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var ko={},tl=Ku;ko.createRoot=tl.createRoot,ko.hydrateRoot=tl.hydrateRoot;const qp="modulepreload",Hp=function(n){return"/RIDE-SHARE/"+n},nl={},Ue=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(t.map(u=>{if(u=Hp(u),u in nl)return;nl[u]=!0;const h=u.endsWith(".css"),m=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${m}`))return;const y=document.createElement("link");if(y.rel=h?"stylesheet":qp,h||(y.as="script"),y.crossOrigin="",y.href=u,c&&y.setAttribute("nonce",c),document.head.appendChild(y),h)return new Promise((I,k)=>{y.addEventListener("load",I),y.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return s.then(a=>{for(const c of a||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};var Wp=typeof Element<"u",Gp=typeof Map=="function",Kp=typeof Set=="function",Qp=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Ms(n,e){if(n===e)return!0;if(n&&e&&typeof n=="object"&&typeof e=="object"){if(n.constructor!==e.constructor)return!1;var t,r,s;if(Array.isArray(n)){if(t=n.length,t!=e.length)return!1;for(r=t;r--!==0;)if(!Ms(n[r],e[r]))return!1;return!0}var i;if(Gp&&n instanceof Map&&e instanceof Map){if(n.size!==e.size)return!1;for(i=n.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;for(i=n.entries();!(r=i.next()).done;)if(!Ms(r.value[1],e.get(r.value[0])))return!1;return!0}if(Kp&&n instanceof Set&&e instanceof Set){if(n.size!==e.size)return!1;for(i=n.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(Qp&&ArrayBuffer.isView(n)&&ArrayBuffer.isView(e)){if(t=n.length,t!=e.length)return!1;for(r=t;r--!==0;)if(n[r]!==e[r])return!1;return!0}if(n.constructor===RegExp)return n.source===e.source&&n.flags===e.flags;if(n.valueOf!==Object.prototype.valueOf&&typeof n.valueOf=="function"&&typeof e.valueOf=="function")return n.valueOf()===e.valueOf();if(n.toString!==Object.prototype.toString&&typeof n.toString=="function"&&typeof e.toString=="function")return n.toString()===e.toString();if(s=Object.keys(n),t=s.length,t!==Object.keys(e).length)return!1;for(r=t;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,s[r]))return!1;if(Wp&&n instanceof Element)return!1;for(r=t;r--!==0;)if(!((s[r]==="_owner"||s[r]==="__v"||s[r]==="__o")&&n.$$typeof)&&!Ms(n[s[r]],e[s[r]]))return!1;return!0}return n!==n&&e!==e}var Yp=function(e,t){try{return Ms(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const Xp=aa(Yp);var Jp=function(n,e,t,r,s,i,a,c){if(!n){var u;if(e===void 0)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var h=[t,r,s,i,a,c],m=0;u=new Error(e.replace(/%s/g,function(){return h[m++]})),u.name="Invariant Violation"}throw u.framesToPop=1,u}},Zp=Jp;const rl=aa(Zp);var em=function(e,t,r,s){var i=r?r.call(s,e,t):void 0;if(i!==void 0)return!!i;if(e===t)return!0;if(typeof e!="object"||!e||typeof t!="object"||!t)return!1;var a=Object.keys(e),c=Object.keys(t);if(a.length!==c.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),h=0;h<a.length;h++){var m=a[h];if(!u(m))return!1;var y=e[m],I=t[m];if(i=r?r.call(s,y,I,m):void 0,i===!1||i===void 0&&y!==I)return!1}return!0};const tm=aa(em);var Yu=(n=>(n.BASE="base",n.BODY="body",n.HEAD="head",n.HTML="html",n.LINK="link",n.META="meta",n.NOSCRIPT="noscript",n.SCRIPT="script",n.STYLE="style",n.TITLE="title",n.FRAGMENT="Symbol(react.fragment)",n))(Yu||{}),io={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},sl=Object.values(Yu),ca={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},nm=Object.entries(ca).reduce((n,[e,t])=>(n[t]=e,n),{}),Je="data-rh",Hn={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Wn=(n,e)=>{for(let t=n.length-1;t>=0;t-=1){const r=n[t];if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}return null},rm=n=>{let e=Wn(n,"title");const t=Wn(n,Hn.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),t&&e)return t.replace(/%s/g,()=>e);const r=Wn(n,Hn.DEFAULT_TITLE);return e||r||void 0},sm=n=>Wn(n,Hn.ON_CHANGE_CLIENT_STATE)||(()=>{}),oo=(n,e)=>e.filter(t=>typeof t[n]<"u").map(t=>t[n]).reduce((t,r)=>({...t,...r}),{}),im=(n,e)=>e.filter(t=>typeof t.base<"u").map(t=>t.base).reverse().reduce((t,r)=>{if(!t.length){const s=Object.keys(r);for(let i=0;i<s.length;i+=1){const c=s[i].toLowerCase();if(n.indexOf(c)!==-1&&r[c])return t.concat(r)}}return t},[]),om=n=>console&&typeof console.warn=="function"&&console.warn(n),Pr=(n,e,t)=>{const r={};return t.filter(s=>Array.isArray(s[n])?!0:(typeof s[n]<"u"&&om(`Helmet: ${n} should be of type "Array". Instead found type "${typeof s[n]}"`),!1)).map(s=>s[n]).reverse().reduce((s,i)=>{const a={};i.filter(u=>{let h;const m=Object.keys(u);for(let I=0;I<m.length;I+=1){const k=m[I],S=k.toLowerCase();e.indexOf(S)!==-1&&!(h==="rel"&&u[h].toLowerCase()==="canonical")&&!(S==="rel"&&u[S].toLowerCase()==="stylesheet")&&(h=S),e.indexOf(k)!==-1&&(k==="innerHTML"||k==="cssText"||k==="itemprop")&&(h=k)}if(!h||!u[h])return!1;const y=u[h].toLowerCase();return r[h]||(r[h]={}),a[h]||(a[h]={}),r[h][y]?!1:(a[h][y]=!0,!0)}).reverse().forEach(u=>s.push(u));const c=Object.keys(a);for(let u=0;u<c.length;u+=1){const h=c[u],m={...r[h],...a[h]};r[h]=m}return s},[]).reverse()},am=(n,e)=>{if(Array.isArray(n)&&n.length){for(let t=0;t<n.length;t+=1)if(n[t][e])return!0}return!1},cm=n=>({baseTag:im(["href"],n),bodyAttributes:oo("bodyAttributes",n),defer:Wn(n,Hn.DEFER),encode:Wn(n,Hn.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:oo("htmlAttributes",n),linkTags:Pr("link",["rel","href"],n),metaTags:Pr("meta",["name","charset","http-equiv","property","itemprop"],n),noscriptTags:Pr("noscript",["innerHTML"],n),onChangeClientState:sm(n),scriptTags:Pr("script",["src","innerHTML"],n),styleTags:Pr("style",["cssText"],n),title:rm(n),titleAttributes:oo("titleAttributes",n),prioritizeSeoTags:am(n,Hn.PRIORITIZE_SEO_TAGS)}),Xu=n=>Array.isArray(n)?n.join(""):n,lm=(n,e)=>{const t=Object.keys(n);for(let r=0;r<t.length;r+=1)if(e[t[r]]&&e[t[r]].includes(n[t[r]]))return!0;return!1},ao=(n,e)=>Array.isArray(n)?n.reduce((t,r)=>(lm(r,e)?t.priority.push(r):t.default.push(r),t),{priority:[],default:[]}):{default:n,priority:[]},il=(n,e)=>({...n,[e]:void 0}),um=["noscript","script","style"],Ro=(n,e=!0)=>e===!1?String(n):String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Ju=n=>Object.keys(n).reduce((e,t)=>{const r=typeof n[t]<"u"?`${t}="${n[t]}"`:`${t}`;return e?`${e} ${r}`:r},""),hm=(n,e,t,r)=>{const s=Ju(t),i=Xu(e);return s?`<${n} ${Je}="true" ${s}>${Ro(i,r)}</${n}>`:`<${n} ${Je}="true">${Ro(i,r)}</${n}>`},dm=(n,e,t=!0)=>e.reduce((r,s)=>{const i=s,a=Object.keys(i).filter(h=>!(h==="innerHTML"||h==="cssText")).reduce((h,m)=>{const y=typeof i[m]>"u"?m:`${m}="${Ro(i[m],t)}"`;return h?`${h} ${y}`:y},""),c=i.innerHTML||i.cssText||"",u=um.indexOf(n)===-1;return`${r}<${n} ${Je}="true" ${a}${u?"/>":`>${c}</${n}>`}`},""),Zu=(n,e={})=>Object.keys(n).reduce((t,r)=>{const s=ca[r];return t[s||r]=n[r],t},e),fm=(n,e,t)=>{const r={key:e,[Je]:!0},s=Zu(t,r);return[vt.createElement("title",s,e)]},js=(n,e)=>e.map((t,r)=>{const s={key:r,[Je]:!0};return Object.keys(t).forEach(i=>{const c=ca[i]||i;if(c==="innerHTML"||c==="cssText"){const u=t.innerHTML||t.cssText;s.dangerouslySetInnerHTML={__html:u}}else s[c]=t[i]}),vt.createElement(n,s)}),He=(n,e,t=!0)=>{switch(n){case"title":return{toComponent:()=>fm(n,e.title,e.titleAttributes),toString:()=>hm(n,e.title,e.titleAttributes,t)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Zu(e),toString:()=>Ju(e)};default:return{toComponent:()=>js(n,e),toString:()=>dm(n,e,t)}}},pm=({metaTags:n,linkTags:e,scriptTags:t,encode:r})=>{const s=ao(n,io.meta),i=ao(e,io.link),a=ao(t,io.script);return{priorityMethods:{toComponent:()=>[...js("meta",s.priority),...js("link",i.priority),...js("script",a.priority)],toString:()=>`${He("meta",s.priority,r)} ${He("link",i.priority,r)} ${He("script",a.priority,r)}`},metaTags:s.default,linkTags:i.default,scriptTags:a.default}},mm=n=>{const{baseTag:e,bodyAttributes:t,encode:r=!0,htmlAttributes:s,noscriptTags:i,styleTags:a,title:c="",titleAttributes:u,prioritizeSeoTags:h}=n;let{linkTags:m,metaTags:y,scriptTags:I}=n,k={toComponent:()=>{},toString:()=>""};return h&&({priorityMethods:k,linkTags:m,metaTags:y,scriptTags:I}=pm(n)),{priority:k,base:He("base",e,r),bodyAttributes:He("bodyAttributes",t,r),htmlAttributes:He("htmlAttributes",s,r),link:He("link",m,r),meta:He("meta",y,r),noscript:He("noscript",i,r),script:He("script",I,r),style:He("style",a,r),title:He("title",{title:c,titleAttributes:u},r)}},Co=mm,Ss=[],eh=!!(typeof window<"u"&&window.document&&window.document.createElement),Po=class{constructor(n,e){_t(this,"instances",[]);_t(this,"canUseDOM",eh);_t(this,"context");_t(this,"value",{setHelmet:n=>{this.context.helmet=n},helmetInstances:{get:()=>this.canUseDOM?Ss:this.instances,add:n=>{(this.canUseDOM?Ss:this.instances).push(n)},remove:n=>{const e=(this.canUseDOM?Ss:this.instances).indexOf(n);(this.canUseDOM?Ss:this.instances).splice(e,1)}}});this.context=n,this.canUseDOM=e||!1,e||(n.helmet=Co({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},gm={},th=vt.createContext(gm),gn,nh=(gn=class extends q.Component{constructor(t){super(t);_t(this,"helmetData");this.helmetData=new Po(this.props.context||{},gn.canUseDOM)}render(){return vt.createElement(th.Provider,{value:this.helmetData.value},this.props.children)}},_t(gn,"canUseDOM",eh),gn),Mn=(n,e)=>{const t=document.head||document.querySelector("head"),r=t.querySelectorAll(`${n}[${Je}]`),s=[].slice.call(r),i=[];let a;return e&&e.length&&e.forEach(c=>{const u=document.createElement(n);for(const h in c)if(Object.prototype.hasOwnProperty.call(c,h))if(h==="innerHTML")u.innerHTML=c.innerHTML;else if(h==="cssText")u.styleSheet?u.styleSheet.cssText=c.cssText:u.appendChild(document.createTextNode(c.cssText));else{const m=h,y=typeof c[m]>"u"?"":c[m];u.setAttribute(h,y)}u.setAttribute(Je,"true"),s.some((h,m)=>(a=m,u.isEqualNode(h)))?s.splice(a,1):i.push(u)}),s.forEach(c=>{var u;return(u=c.parentNode)==null?void 0:u.removeChild(c)}),i.forEach(c=>t.appendChild(c)),{oldTags:s,newTags:i}},No=(n,e)=>{const t=document.getElementsByTagName(n)[0];if(!t)return;const r=t.getAttribute(Je),s=r?r.split(","):[],i=[...s],a=Object.keys(e);for(const c of a){const u=e[c]||"";t.getAttribute(c)!==u&&t.setAttribute(c,u),s.indexOf(c)===-1&&s.push(c);const h=i.indexOf(c);h!==-1&&i.splice(h,1)}for(let c=i.length-1;c>=0;c-=1)t.removeAttribute(i[c]);s.length===i.length?t.removeAttribute(Je):t.getAttribute(Je)!==a.join(",")&&t.setAttribute(Je,a.join(","))},ym=(n,e)=>{typeof n<"u"&&document.title!==n&&(document.title=Xu(n)),No("title",e)},ol=(n,e)=>{const{baseTag:t,bodyAttributes:r,htmlAttributes:s,linkTags:i,metaTags:a,noscriptTags:c,onChangeClientState:u,scriptTags:h,styleTags:m,title:y,titleAttributes:I}=n;No("body",r),No("html",s),ym(y,I);const k={baseTag:Mn("base",t),linkTags:Mn("link",i),metaTags:Mn("meta",a),noscriptTags:Mn("noscript",c),scriptTags:Mn("script",h),styleTags:Mn("style",m)},S={},P={};Object.keys(k).forEach(C=>{const{newTags:F,oldTags:H}=k[C];F.length&&(S[C]=F),H.length&&(P[C]=k[C].oldTags)}),e&&e(),u(n,S,P)},Nr=null,_m=n=>{Nr&&cancelAnimationFrame(Nr),n.defer?Nr=requestAnimationFrame(()=>{ol(n,()=>{Nr=null})}):(ol(n),Nr=null)},wm=_m,al=class extends q.Component{constructor(){super(...arguments);_t(this,"rendered",!1)}shouldComponentUpdate(e){return!tm(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:t}=this.props.context;let r=null;const s=cm(e.get().map(i=>{const a={...i.props};return delete a.context,a}));nh.canUseDOM?wm(s):Co&&(r=Co(s)),t(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},So,kb=(So=class extends q.Component{shouldComponentUpdate(n){return!Xp(il(this.props,"helmetData"),il(n,"helmetData"))}mapNestedChildrenToProps(n,e){if(!e)return null;switch(n.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${n.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(n,e,t,r){return{...e,[n.type]:[...e[n.type]||[],{...t,...this.mapNestedChildrenToProps(n,r)}]}}mapObjectTypeChildren(n,e,t,r){switch(n.type){case"title":return{...e,[n.type]:r,titleAttributes:{...t}};case"body":return{...e,bodyAttributes:{...t}};case"html":return{...e,htmlAttributes:{...t}};default:return{...e,[n.type]:{...t}}}}mapArrayTypeChildrenToProps(n,e){let t={...e};return Object.keys(n).forEach(r=>{t={...t,[r]:n[r]}}),t}warnOnInvalidChildren(n,e){return rl(sl.some(t=>n.type===t),typeof n.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${sl.join(", ")} are allowed. Helmet does not support rendering <${n.type}> elements. Refer to our API for more information.`),rl(!e||typeof e=="string"||Array.isArray(e)&&!e.some(t=>typeof t!="string"),`Helmet expects a string as a child of <${n.type}>. Did you forget to wrap your children in braces? ( <${n.type}>{\`\`}</${n.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(n,e){let t={};return vt.Children.forEach(n,r=>{if(!r||!r.props)return;const{children:s,...i}=r.props,a=Object.keys(i).reduce((u,h)=>(u[nm[h]||h]=i[h],u),{});let{type:c}=r;switch(typeof c=="symbol"?c=c.toString():this.warnOnInvalidChildren(r,s),c){case"Symbol(react.fragment)":e=this.mapChildrenToProps(s,e);break;case"link":case"meta":case"noscript":case"script":case"style":t=this.flattenArrayTypeChildren(r,t,a,s);break;default:e=this.mapObjectTypeChildren(r,e,a,s);break}}),this.mapArrayTypeChildrenToProps(t,e)}render(){const{children:n,...e}=this.props;let t={...e},{helmetData:r}=e;if(n&&(t=this.mapChildrenToProps(n,t)),r&&!(r instanceof Po)){const s=r;r=new Po(s.context,!0),delete t.helmetData}return r?vt.createElement(al,{...t,context:r.value}):vt.createElement(th.Consumer,null,s=>vt.createElement(al,{...t,context:s}))}},_t(So,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),So);const vm=()=>{};var cl={};/**
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
 */const rh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Tm=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},sh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,h=u?n[s+2]:0,m=i>>2,y=(i&3)<<4|c>>4;let I=(c&15)<<2|h>>6,k=h&63;u||(k=64,a||(I=64)),r.push(t[m],t[y],t[I],t[k])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(rh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Tm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const y=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||y==null)throw new Em;const I=i<<2|c>>4;if(r.push(I),h!==64){const k=c<<4&240|h>>2;if(r.push(k),y!==64){const S=h<<6&192|y;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Em extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Im=function(n){const e=rh(n);return sh.encodeByteArray(e,!0)},Ys=function(n){return Im(n).replace(/\./g,"")},ih=function(n){try{return sh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Am=()=>bm().__FIREBASE_DEFAULTS__,xm=()=>{if(typeof process>"u"||typeof cl>"u")return;const n=cl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Sm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ih(n[1]);return e&&JSON.parse(e)},wi=()=>{try{return vm()||Am()||xm()||Sm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},oh=n=>{var e,t;return(t=(e=wi())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},km=n=>{const e=oh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ah=()=>{var n;return(n=wi())==null?void 0:n.config},ch=n=>{var e;return(e=wi())==null?void 0:e[`_${n}`]};/**
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
 */class Rm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function sr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function lh(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Cm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Ys(JSON.stringify(t)),Ys(JSON.stringify(a)),""].join(".")}const Ur={};function Pm(){const n={prod:[],emulator:[]};for(const e of Object.keys(Ur))Ur[e]?n.emulator.push(e):n.prod.push(e);return n}function Nm(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let ll=!1;function uh(n,e){if(typeof window>"u"||typeof document>"u"||!sr(window.location.host)||Ur[n]===e||Ur[n]||ll)return;Ur[n]=e;function t(I){return`__firebase__banner__${I}`}const r="__firebase__banner",i=Pm().prod.length>0;function a(){const I=document.getElementById(r);I&&I.remove()}function c(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function u(I,k){I.setAttribute("width","24"),I.setAttribute("id",k),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function h(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{ll=!0,a()},I}function m(I,k){I.setAttribute("id",k),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function y(){const I=Nm(r),k=t("text"),S=document.getElementById(k)||document.createElement("span"),P=t("learnmore"),C=document.getElementById(P)||document.createElement("a"),F=t("preprendIcon"),H=document.getElementById(F)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const D=I.element;c(D),m(C,P);const K=h();u(H,F),D.append(H,S,C,K),document.body.appendChild(D)}i?(S.innerText="Preview backend disconnected.",H.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(H.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
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
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function Dm(){var e;const n=(e=wi())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Om(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Lm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Mm(){const n=Ve();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function jm(){return!Dm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dh(){try{return typeof indexedDB=="object"}catch{return!1}}function fh(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}function Fm(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Um="FirebaseError";class rt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Um,Object.setPrototypeOf(this,rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bn.prototype.create)}}class bn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?$m(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new rt(s,c,r)}}function $m(n,e){return n.replace(Bm,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Bm=/\{\$([^}]+)}/g;function zm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Qt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(ul(i)&&ul(a)){if(!Qt(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function ul(n){return n!==null&&typeof n=="object"}/**
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
 */function ss(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Dr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Or(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function qm(n,e){const t=new Hm(n,e);return t.subscribe.bind(t)}class Hm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Wm(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=co),s.error===void 0&&(s.error=co),s.complete===void 0&&(s.complete=co);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Wm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function co(){}/**
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
 */const Gm=1e3,Km=2,Qm=4*60*60*1e3,Ym=.5;function hl(n,e=Gm,t=Km){const r=e*Math.pow(t,n),s=Math.round(Ym*r*(Math.random()-.5)*2);return Math.min(Qm,r+s)}/**
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
 */function xe(n){return n&&n._delegate?n._delegate:n}class tt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const fn="[DEFAULT]";/**
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
 */class Xm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Rm;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zm(e))try{this.getOrInitializeService({instanceIdentifier:fn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=fn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fn){return this.instances.has(e)}getOptions(e=fn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Jm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=fn){return this.component?this.component.multipleInstances?e:fn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jm(n){return n===fn?void 0:n}function Zm(n){return n.instantiationMode==="EAGER"}/**
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
 */class eg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Xm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var X;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(X||(X={}));const tg={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},ng=X.INFO,rg={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},sg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=rg[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vi{constructor(e){this.name=e,this._logLevel=ng,this._logHandler=sg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const ig=(n,e)=>e.some(t=>n instanceof t);let dl,fl;function og(){return dl||(dl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ag(){return fl||(fl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ph=new WeakMap,Vo=new WeakMap,mh=new WeakMap,lo=new WeakMap,la=new WeakMap;function cg(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Ht(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ph.set(t,n)}).catch(()=>{}),la.set(e,n),e}function lg(n){if(Vo.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Vo.set(n,e)}let Do={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Vo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||mh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ht(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ug(n){Do=n(Do)}function hg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(uo(this),e,...t);return mh.set(r,e.sort?e.sort():[e]),Ht(r)}:ag().includes(n)?function(...e){return n.apply(uo(this),e),Ht(ph.get(this))}:function(...e){return Ht(n.apply(uo(this),e))}}function dg(n){return typeof n=="function"?hg(n):(n instanceof IDBTransaction&&lg(n),ig(n,og())?new Proxy(n,Do):n)}function Ht(n){if(n instanceof IDBRequest)return cg(n);if(lo.has(n))return lo.get(n);const e=dg(n);return e!==n&&(lo.set(n,e),la.set(e,n)),e}const uo=n=>la.get(n);function gh(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=Ht(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Ht(a.result),u.oldVersion,u.newVersion,Ht(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const fg=["get","getKey","getAll","getAllKeys","count"],pg=["put","add","delete","clear"],ho=new Map;function pl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ho.get(e))return ho.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=pg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||fg.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&u.done]))[0]};return ho.set(e,i),i}ug(n=>({...n,get:(e,t,r)=>pl(e,t)||n.get(e,t,r),has:(e,t)=>!!pl(e,t)||n.has(e,t)}));/**
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
 */class mg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(gg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function gg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Oo="@firebase/app",ml="0.14.3";/**
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
 */const At=new vi("@firebase/app"),yg="@firebase/app-compat",_g="@firebase/analytics-compat",wg="@firebase/analytics",vg="@firebase/app-check-compat",Tg="@firebase/app-check",Eg="@firebase/auth",Ig="@firebase/auth-compat",bg="@firebase/database",Ag="@firebase/data-connect",xg="@firebase/database-compat",Sg="@firebase/functions",kg="@firebase/functions-compat",Rg="@firebase/installations",Cg="@firebase/installations-compat",Pg="@firebase/messaging",Ng="@firebase/messaging-compat",Vg="@firebase/performance",Dg="@firebase/performance-compat",Og="@firebase/remote-config",Lg="@firebase/remote-config-compat",Mg="@firebase/storage",jg="@firebase/storage-compat",Fg="@firebase/firestore",Ug="@firebase/ai",$g="@firebase/firestore-compat",Bg="firebase",zg="12.3.0";/**
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
 */const Lo="[DEFAULT]",qg={[Oo]:"fire-core",[yg]:"fire-core-compat",[wg]:"fire-analytics",[_g]:"fire-analytics-compat",[Tg]:"fire-app-check",[vg]:"fire-app-check-compat",[Eg]:"fire-auth",[Ig]:"fire-auth-compat",[bg]:"fire-rtdb",[Ag]:"fire-data-connect",[xg]:"fire-rtdb-compat",[Sg]:"fire-fn",[kg]:"fire-fn-compat",[Rg]:"fire-iid",[Cg]:"fire-iid-compat",[Pg]:"fire-fcm",[Ng]:"fire-fcm-compat",[Vg]:"fire-perf",[Dg]:"fire-perf-compat",[Og]:"fire-rc",[Lg]:"fire-rc-compat",[Mg]:"fire-gcs",[jg]:"fire-gcs-compat",[Fg]:"fire-fst",[$g]:"fire-fst-compat",[Ug]:"fire-vertex","fire-js":"fire-js",[Bg]:"fire-js-all"};/**
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
 */const Xs=new Map,Hg=new Map,Mo=new Map;function gl(n,e){try{n.container.addComponent(e)}catch(t){At.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ft(n){const e=n.name;if(Mo.has(e))return At.debug(`There were multiple attempts to register component ${e}.`),!1;Mo.set(e,n);for(const t of Xs.values())gl(t,n);for(const t of Hg.values())gl(t,n);return!0}function An(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function We(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Wg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wt=new bn("app","Firebase",Wg);/**
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
 */class Gg{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wt.create("app-deleted",{appName:this._name})}}/**
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
 */const ir=zg;function yh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Lo,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Wt.create("bad-app-name",{appName:String(s)});if(t||(t=ah()),!t)throw Wt.create("no-options");const i=Xs.get(s);if(i){if(Qt(t,i.options)&&Qt(r,i.config))return i;throw Wt.create("duplicate-app",{appName:s})}const a=new eg(s);for(const u of Mo.values())a.addComponent(u);const c=new Gg(t,r,a);return Xs.set(s,c),c}function ua(n=Lo){const e=Xs.get(n);if(!e&&n===Lo&&ah())return yh();if(!e)throw Wt.create("no-app",{appName:n});return e}function Qe(n,e,t){let r=qg[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),At.warn(a.join(" "));return}ft(new tt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Kg="firebase-heartbeat-database",Qg=1,Kr="firebase-heartbeat-store";let fo=null;function _h(){return fo||(fo=gh(Kg,Qg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Kr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Wt.create("idb-open",{originalErrorMessage:n.message})})),fo}async function Yg(n){try{const t=(await _h()).transaction(Kr),r=await t.objectStore(Kr).get(wh(n));return await t.done,r}catch(e){if(e instanceof rt)At.warn(e.message);else{const t=Wt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});At.warn(t.message)}}}async function yl(n,e){try{const r=(await _h()).transaction(Kr,"readwrite");await r.objectStore(Kr).put(e,wh(n)),await r.done}catch(t){if(t instanceof rt)At.warn(t.message);else{const r=Wt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});At.warn(r.message)}}}function wh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Xg=1024,Jg=30;class Zg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ty(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=_l();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Jg){const a=ny(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){At.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=_l(),{heartbeatsToSend:r,unsentEntries:s}=ey(this._heartbeatsCache.heartbeats),i=Ys(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return At.warn(t),""}}}function _l(){return new Date().toISOString().substring(0,10)}function ey(n,e=Xg){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),wl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),wl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class ty{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dh()?fh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Yg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return yl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return yl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function wl(n){return Ys(JSON.stringify({version:2,heartbeats:n})).length}function ny(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function ry(n){ft(new tt("platform-logger",e=>new mg(e),"PRIVATE")),ft(new tt("heartbeat",e=>new Zg(e),"PRIVATE")),Qe(Oo,ml,n),Qe(Oo,ml,"esm2020"),Qe("fire-js","")}ry("");function vh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sy=vh,Th=new bn("auth","Firebase",vh());/**
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
 */const Js=new vi("@firebase/auth");function iy(n,...e){Js.logLevel<=X.WARN&&Js.warn(`Auth (${ir}): ${n}`,...e)}function Fs(n,...e){Js.logLevel<=X.ERROR&&Js.error(`Auth (${ir}): ${n}`,...e)}/**
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
 */function nt(n,...e){throw ha(n,...e)}function at(n,...e){return ha(n,...e)}function Eh(n,e,t){const r={...sy(),[e]:t};return new bn("auth","Firebase",r).create(e,{appName:n.name})}function It(n){return Eh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ha(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Th.create(n,...e)}function B(n,e,...t){if(!n)throw ha(e,...t)}function Tt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Fs(e),new Error(e)}function xt(n,e){n||Tt(e)}/**
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
 */function jo(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function oy(){return vl()==="http:"||vl()==="https:"}function vl(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function ay(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oy()||hh()||"connection"in navigator)?navigator.onLine:!0}function cy(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class is{constructor(e,t){this.shortDelay=e,this.longDelay=t,xt(t>e,"Short delay should be less than long delay!"),this.isMobile=Vm()||Lm()}get(){return ay()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function da(n,e){xt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ih{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ly={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const uy=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],hy=new is(3e4,6e4);function Rt(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function gt(n,e,t,r,s={}){return bh(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=ss({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:u,...i};return Om()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&sr(n.emulatorConfig.host)&&(h.credentials="include"),Ih.fetch()(await Ah(n,n.config.apiHost,t,c),h)})}async function bh(n,e,t){n._canInitEmulator=!1;const r={...ly,...e};try{const s=new fy(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ks(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ks(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw ks(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw ks(n,"user-disabled",a);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Eh(n,m,h);nt(n,m)}}catch(s){if(s instanceof rt)throw s;nt(n,"network-request-failed",{message:String(s)})}}async function os(n,e,t,r,s={}){const i=await gt(n,e,t,r,s);return"mfaPendingCredential"in i&&nt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Ah(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?da(n.config,s):`${n.config.apiScheme}://${s}`;return uy.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function dy(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class fy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(at(this.auth,"network-request-failed")),hy.get())})}}function ks(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=at(n,e,r);return s.customData._tokenResponse=t,s}function Tl(n){return n!==void 0&&n.enterprise!==void 0}class py{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return dy(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function my(n,e){return gt(n,"GET","/v2/recaptchaConfig",Rt(n,e))}/**
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
 */async function gy(n,e){return gt(n,"POST","/v1/accounts:delete",e)}async function Zs(n,e){return gt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function $r(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yy(n,e=!1){const t=xe(n),r=await t.getIdToken(e),s=fa(r);B(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:$r(po(s.auth_time)),issuedAtTime:$r(po(s.iat)),expirationTime:$r(po(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function po(n){return Number(n)*1e3}function fa(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Fs("JWT malformed, contained fewer than 3 sections"),null;try{const s=ih(t);return s?JSON.parse(s):(Fs("Failed to decode base64 JWT payload"),null)}catch(s){return Fs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function El(n){const e=fa(n);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Xn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof rt&&_y(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function _y({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class wy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Fo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$r(this.lastLoginAt),this.creationTime=$r(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ei(n){var y;const e=n.auth,t=await n.getIdToken(),r=await Xn(n,Zs(e,{idToken:t}));B(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(y=s.providerUserInfo)!=null&&y.length?xh(s.providerUserInfo):[],a=Ty(n.providerData,i),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Fo(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,m)}async function vy(n){const e=xe(n);await ei(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ty(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function xh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Ey(n,e){const t=await bh(n,{},async()=>{const r=ss({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Ah(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&sr(n.emulatorConfig.host)&&(u.credentials="include"),Ih.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Iy(n,e){return gt(n,"POST","/v2/accounts:revokeToken",Rt(n,e))}/**
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
 */class Gn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):El(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){B(e.length!==0,"internal-error");const t=El(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Ey(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Gn;return r&&(B(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(B(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(B(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gn,this.toJSON())}_performRefresh(){return Tt("not implemented")}}/**
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
 */function Mt(n,e){B(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ze{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new wy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Fo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Xn(this,this.stsTokenManager.getToken(this.auth,e));return B(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return yy(this,e)}reload(){return vy(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ze({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ei(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(We(this.auth.app))return Promise.reject(It(this.auth));const e=await this.getIdToken();return await Xn(this,gy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,u=t._redirectEventId??void 0,h=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:y,emailVerified:I,isAnonymous:k,providerData:S,stsTokenManager:P}=t;B(y&&P,e,"internal-error");const C=Gn.fromJSON(this.name,P);B(typeof y=="string",e,"internal-error"),Mt(r,e.name),Mt(s,e.name),B(typeof I=="boolean",e,"internal-error"),B(typeof k=="boolean",e,"internal-error"),Mt(i,e.name),Mt(a,e.name),Mt(c,e.name),Mt(u,e.name),Mt(h,e.name),Mt(m,e.name);const F=new Ze({uid:y,auth:e,email:s,emailVerified:I,displayName:r,isAnonymous:k,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:C,createdAt:h,lastLoginAt:m});return S&&Array.isArray(S)&&(F.providerData=S.map(H=>({...H}))),u&&(F._redirectEventId=u),F}static async _fromIdTokenResponse(e,t,r=!1){const s=new Gn;s.updateFromServerResponse(t);const i=new Ze({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ei(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];B(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?xh(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Gn;c.updateFromIdToken(r);const u=new Ze({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Fo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
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
 */const Il=new Map;function Et(n){xt(n instanceof Function,"Expected a class definition");let e=Il.get(n);return e?(xt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Il.set(n,e),e)}/**
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
 */class Sh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Sh.type="NONE";const bl=Sh;/**
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
 */function Us(n,e,t){return`firebase:${n}:${e}:${t}`}class Kn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Us(this.userKey,s.apiKey,i),this.fullPersistenceKey=Us("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Zs(this.auth,{idToken:e}).catch(()=>{});return t?Ze._fromGetAccountInfoResponse(this.auth,t,e):null}return Ze._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Kn(Et(bl),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Et(bl);const a=Us(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const m=await h._get(a);if(m){let y;if(typeof m=="string"){const I=await Zs(e,{idToken:m}).catch(()=>{});if(!I)break;y=await Ze._fromGetAccountInfoResponse(e,I,m)}else y=Ze._fromJSON(e,m);h!==i&&(c=y),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Kn(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Kn(i,e,r))}}/**
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
 */function Al(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ph(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vh(e))return"Blackberry";if(Dh(e))return"Webos";if(Rh(e))return"Safari";if((e.includes("chrome/")||Ch(e))&&!e.includes("edge/"))return"Chrome";if(Nh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function kh(n=Ve()){return/firefox\//i.test(n)}function Rh(n=Ve()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ch(n=Ve()){return/crios\//i.test(n)}function Ph(n=Ve()){return/iemobile/i.test(n)}function Nh(n=Ve()){return/android/i.test(n)}function Vh(n=Ve()){return/blackberry/i.test(n)}function Dh(n=Ve()){return/webos/i.test(n)}function pa(n=Ve()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function by(n=Ve()){var e;return pa(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Ay(){return Mm()&&document.documentMode===10}function Oh(n=Ve()){return pa(n)||Nh(n)||Dh(n)||Vh(n)||/windows phone/i.test(n)||Ph(n)}/**
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
 */function Lh(n,e=[]){let t;switch(n){case"Browser":t=Al(Ve());break;case"Worker":t=`${Al(Ve())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ir}/${r}`}/**
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
 */class xy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function Sy(n,e={}){return gt(n,"GET","/v2/passwordPolicy",Rt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const ky=6;class Ry{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??ky,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Cy{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xl(this),this.idTokenSubscription=new xl(this),this.beforeStateQueue=new xy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Th,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Et(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Kn.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Zs(this,{idToken:e}),r=await Ze._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(We(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ei(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(We(this.app))return Promise.reject(It(this));const t=e?xe(e):null;return t&&B(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return We(this.app)?Promise.reject(It(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return We(this.app)?Promise.reject(It(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Et(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Sy(this),t=new Ry(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new bn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Iy(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Et(e)||this._popupRedirectResolver;B(t,this,"argument-error"),this.redirectPersistenceManager=await Kn.create(this,[Et(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Lh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(We(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&iy(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function nn(n){return xe(n)}class xl{constructor(e){this.auth=e,this.observer=null,this.addObserver=qm(t=>this.observer=t)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ti={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Py(n){Ti=n}function Mh(n){return Ti.loadJS(n)}function Ny(){return Ti.recaptchaEnterpriseScript}function Vy(){return Ti.gapiScript}function Dy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Oy{constructor(){this.enterprise=new Ly}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Ly{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const My="recaptcha-enterprise",jh="NO_RECAPTCHA";class jy{constructor(e){this.type=My,this.auth=nn(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{my(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new py(u);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(u=>{c(u)})})}function s(i,a,c){const u=window.grecaptcha;Tl(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(jh)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Oy().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&Tl(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Ny();u.length!==0&&(u+=c),Mh(u).then(()=>{s(c,i,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}}async function Sl(n,e,t,r=!1,s=!1){const i=new jy(n);let a;if(s)a=jh;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function ti(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Sl(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Sl(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
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
 */function Fy(n,e){const t=An(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Qt(i,e??{}))return s;nt(s,"already-initialized")}return t.initialize({options:e})}function Uy(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Et);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function $y(n,e,t){const r=nn(n);B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Fh(e),{host:a,port:c}=By(e),u=c===null?"":`:${c}`,h={url:`${i}//${a}${u}/`},m=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){B(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),B(Qt(h,r.config.emulator)&&Qt(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,sr(a)?(lh(`${i}//${a}${u}`),uh("Auth",!0)):zy()}function Fh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function By(n){const e=Fh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:kl(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:kl(a)}}}function kl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function zy(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class ma{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Tt("not implemented")}_getIdTokenResponse(e){return Tt("not implemented")}_linkToIdToken(e,t){return Tt("not implemented")}_getReauthenticationResolver(e){return Tt("not implemented")}}async function qy(n,e){return gt(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Hy(n,e){return os(n,"POST","/v1/accounts:signInWithPassword",Rt(n,e))}async function Uh(n,e){return gt(n,"POST","/v1/accounts:sendOobCode",Rt(n,e))}async function Wy(n,e){return Uh(n,e)}async function Gy(n,e){return Uh(n,e)}/**
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
 */async function Ky(n,e){return os(n,"POST","/v1/accounts:signInWithEmailLink",Rt(n,e))}async function Qy(n,e){return os(n,"POST","/v1/accounts:signInWithEmailLink",Rt(n,e))}/**
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
 */class Qr extends ma{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Qr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Qr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ti(e,t,"signInWithPassword",Hy);case"emailLink":return Ky(e,{email:this._email,oobCode:this._password});default:nt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ti(e,r,"signUpPassword",qy);case"emailLink":return Qy(e,{idToken:t,email:this._email,oobCode:this._password});default:nt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Qn(n,e){return os(n,"POST","/v1/accounts:signInWithIdp",Rt(n,e))}/**
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
 */const Yy="http://localhost";class _n extends ma{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new _n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):nt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new _n(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Qn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Qn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qn(e,t)}buildRequest(){const e={requestUri:Yy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ss(t)}return e}}/**
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
 */function Xy(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Jy(n){const e=Dr(Or(n)).link,t=e?Dr(Or(e)).deep_link_id:null,r=Dr(Or(n)).deep_link_id;return(r?Dr(Or(r)).link:null)||r||t||e||n}class ga{constructor(e){const t=Dr(Or(e)),r=t.apiKey??null,s=t.oobCode??null,i=Xy(t.mode??null);B(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Jy(e);try{return new ga(t)}catch{return null}}}/**
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
 */class or{constructor(){this.providerId=or.PROVIDER_ID}static credential(e,t){return Qr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=ga.parseLink(t);return B(r,"argument-error"),Qr._fromEmailAndCode(e,r.code,r.tenantId)}}or.PROVIDER_ID="password";or.EMAIL_PASSWORD_SIGN_IN_METHOD="password";or.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class $h{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class as extends $h{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ut extends as{constructor(){super("facebook.com")}static credential(e){return _n._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ut.credential(e.oauthAccessToken)}catch{return null}}}Ut.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ut.PROVIDER_ID="facebook.com";/**
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
 */class $t extends as{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return _n._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return $t.credential(t,r)}catch{return null}}}$t.GOOGLE_SIGN_IN_METHOD="google.com";$t.PROVIDER_ID="google.com";/**
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
 */class Bt extends as{constructor(){super("github.com")}static credential(e){return _n._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bt.credential(e.oauthAccessToken)}catch{return null}}}Bt.GITHUB_SIGN_IN_METHOD="github.com";Bt.PROVIDER_ID="github.com";/**
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
 */class zt extends as{constructor(){super("twitter.com")}static credential(e,t){return _n._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return zt.credential(t,r)}catch{return null}}}zt.TWITTER_SIGN_IN_METHOD="twitter.com";zt.PROVIDER_ID="twitter.com";/**
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
 */async function Zy(n,e){return os(n,"POST","/v1/accounts:signUp",Rt(n,e))}/**
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
 */class wn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Ze._fromIdTokenResponse(e,r,s),a=Rl(r);return new wn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Rl(r);return new wn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Rl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class ni extends rt{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ni.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ni(e,t,r,s)}}function Bh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ni._fromErrorAndOperation(n,i,e,r):i})}async function e_(n,e,t=!1){const r=await Xn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return wn._forOperation(n,"link",r)}/**
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
 */async function t_(n,e,t=!1){const{auth:r}=n;if(We(r.app))return Promise.reject(It(r));const s="reauthenticate";try{const i=await Xn(n,Bh(r,s,e,n),t);B(i.idToken,r,"internal-error");const a=fa(i.idToken);B(a,r,"internal-error");const{sub:c}=a;return B(n.uid===c,r,"user-mismatch"),wn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&nt(r,"user-mismatch"),i}}/**
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
 */async function zh(n,e,t=!1){if(We(n.app))return Promise.reject(It(n));const r="signIn",s=await Bh(n,r,e),i=await wn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function n_(n,e){return zh(nn(n),e)}/**
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
 */async function qh(n){const e=nn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function r_(n,e,t){const r=nn(n);await ti(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Gy)}async function s_(n,e,t){if(We(n.app))return Promise.reject(It(n));const r=nn(n),a=await ti(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Zy).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&qh(n),u}),c=await wn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function i_(n,e,t){return We(n.app)?Promise.reject(It(n)):n_(xe(n),or.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&qh(n),r})}async function o_(n,e){const t=xe(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:i}=await Wy(t.auth,s);i!==n.email&&await n.reload()}/**
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
 */async function a_(n,e){return gt(n,"POST","/v1/accounts:update",e)}/**
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
 */async function c_(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=xe(n),i={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await Xn(r,a_(r.auth,i));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function l_(n,e,t,r){return xe(n).onIdTokenChanged(e,t,r)}function u_(n,e,t){return xe(n).beforeAuthStateChanged(e,t)}function h_(n,e,t,r){return xe(n).onAuthStateChanged(e,t,r)}function d_(n){return xe(n).signOut()}const ri="__sak";/**
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
 */class Hh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ri,"1"),this.storage.removeItem(ri),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const f_=1e3,p_=10;class Wh extends Hh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Oh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Ay()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,p_):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},f_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wh.type="LOCAL";const m_=Wh;/**
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
 */class Gh extends Hh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Gh.type="SESSION";const Kh=Gh;/**
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
 */function g_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ei{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Ei(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),u=await g_(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ei.receivers=[];/**
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
 */function ya(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class y_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const h=ya("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(y){const I=y;if(I.data.eventId===h)switch(I.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(I.data.response);break;default:clearTimeout(m),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function ct(){return window}function __(n){ct().location.href=n}/**
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
 */function Qh(){return typeof ct().WorkerGlobalScope<"u"&&typeof ct().importScripts=="function"}async function w_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function v_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function T_(){return Qh()?self:null}/**
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
 */const Yh="firebaseLocalStorageDb",E_=1,si="firebaseLocalStorage",Xh="fbase_key";class cs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ii(n,e){return n.transaction([si],e?"readwrite":"readonly").objectStore(si)}function I_(){const n=indexedDB.deleteDatabase(Yh);return new cs(n).toPromise()}function Uo(){const n=indexedDB.open(Yh,E_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(si,{keyPath:Xh})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(si)?e(r):(r.close(),await I_(),e(await Uo()))})})}async function Cl(n,e,t){const r=Ii(n,!0).put({[Xh]:e,value:t});return new cs(r).toPromise()}async function b_(n,e){const t=Ii(n,!1).get(e),r=await new cs(t).toPromise();return r===void 0?null:r.value}function Pl(n,e){const t=Ii(n,!0).delete(e);return new cs(t).toPromise()}const A_=800,x_=3;class Jh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Uo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>x_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ei._getInstance(T_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await w_(),!this.activeServiceWorker)return;this.sender=new y_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||v_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Uo();return await Cl(e,ri,"1"),await Pl(e,ri),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Cl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>b_(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Pl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ii(s,!1).getAll();return new cs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),A_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jh.type="LOCAL";const S_=Jh;new is(3e4,6e4);/**
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
 */function k_(n,e){return e?Et(e):(B(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class _a extends ma{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function R_(n){return zh(n.auth,new _a(n),n.bypassAuthState)}function C_(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),t_(t,new _a(n),n.bypassAuthState)}async function P_(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),e_(t,new _a(n),n.bypassAuthState)}/**
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
 */class Zh{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return R_;case"linkViaPopup":case"linkViaRedirect":return P_;case"reauthViaPopup":case"reauthViaRedirect":return C_;default:nt(this.auth,"internal-error")}}resolve(e){xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const N_=new is(2e3,1e4);class qn extends Zh{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,qn.currentPopupAction&&qn.currentPopupAction.cancel(),qn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){xt(this.filter.length===1,"Popup operations only handle one event");const e=ya();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(at(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(at(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(at(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,N_.get())};e()}}qn.currentPopupAction=null;/**
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
 */const V_="pendingRedirect",$s=new Map;class D_ extends Zh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=$s.get(this.auth._key());if(!e){try{const r=await O_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}$s.set(this.auth._key(),e)}return this.bypassAuthState||$s.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function O_(n,e){const t=j_(e),r=M_(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function L_(n,e){$s.set(n._key(),e)}function M_(n){return Et(n._redirectPersistence)}function j_(n){return Us(V_,n.config.apiKey,n.name)}async function F_(n,e,t=!1){if(We(n.app))return Promise.reject(It(n));const r=nn(n),s=k_(r,e),a=await new D_(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const U_=10*60*1e3;class $_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!B_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!ed(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(at(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=U_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nl(e))}saveEventToCache(e){this.cachedEventUids.add(Nl(e)),this.lastProcessedEventTime=Date.now()}}function Nl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ed({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function B_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ed(n);default:return!1}}/**
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
 */async function z_(n,e={}){return gt(n,"GET","/v1/projects",e)}/**
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
 */const q_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,H_=/^https?/;async function W_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await z_(n);for(const t of e)try{if(G_(t))return}catch{}nt(n,"unauthorized-domain")}function G_(n){const e=jo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!H_.test(t))return!1;if(q_.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const K_=new is(3e4,6e4);function Vl(){const n=ct().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Q_(n){return new Promise((e,t)=>{var s,i,a;function r(){Vl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vl(),t(at(n,"network-request-failed"))},timeout:K_.get()})}if((i=(s=ct().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=ct().gapi)!=null&&a.load)r();else{const c=Dy("iframefcb");return ct()[c]=()=>{gapi.load?r():t(at(n,"network-request-failed"))},Mh(`${Vy()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Bs=null,e})}let Bs=null;function Y_(n){return Bs=Bs||Q_(n),Bs}/**
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
 */const X_=new is(5e3,15e3),J_="__/auth/iframe",Z_="emulator/auth/iframe",e0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},t0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function n0(n){const e=n.config;B(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?da(e,Z_):`https://${n.config.authDomain}/${J_}`,r={apiKey:e.apiKey,appName:n.name,v:ir},s=t0.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${ss(r).slice(1)}`}async function r0(n){const e=await Y_(n),t=ct().gapi;return B(t,n,"internal-error"),e.open({where:document.body,url:n0(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:e0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=at(n,"network-request-failed"),c=ct().setTimeout(()=>{i(a)},X_.get());function u(){ct().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const s0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},i0=500,o0=600,a0="_blank",c0="http://localhost";class Dl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function l0(n,e,t,r=i0,s=o0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u={...s0,width:r.toString(),height:s.toString(),top:i,left:a},h=Ve().toLowerCase();t&&(c=Ch(h)?a0:t),kh(h)&&(e=e||c0,u.scrollbars="yes");const m=Object.entries(u).reduce((I,[k,S])=>`${I}${k}=${S},`,"");if(by(h)&&c!=="_self")return u0(e||"",c),new Dl(null);const y=window.open(e||"",c,m);B(y,n,"popup-blocked");try{y.focus()}catch{}return new Dl(y)}function u0(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const h0="__/auth/handler",d0="emulator/auth/handler",f0=encodeURIComponent("fac");async function Ol(n,e,t,r,s,i){B(n.config.authDomain,n,"auth-domain-config-required"),B(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ir,eventId:s};if(e instanceof $h){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",zm(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,y]of Object.entries({}))a[m]=y}if(e instanceof as){const m=e.getScopes().filter(y=>y!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const u=await n._getAppCheckToken(),h=u?`#${f0}=${encodeURIComponent(u)}`:"";return`${p0(n)}?${ss(c).slice(1)}${h}`}function p0({config:n}){return n.emulator?da(n,d0):`https://${n.authDomain}/${h0}`}/**
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
 */const mo="webStorageSupport";class m0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kh,this._completeRedirectFn=F_,this._overrideRedirectResult=L_}async _openPopup(e,t,r,s){var a;xt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await Ol(e,t,r,jo(),s);return l0(e,i,ya())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Ol(e,t,r,jo(),s);return __(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(xt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await r0(e),r=new $_(e);return t.register("authEvent",s=>(B(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(mo,{type:mo},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[mo];i!==void 0&&t(!!i),nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=W_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Oh()||Rh()||pa()}}const g0=m0;var Ll="@firebase/auth",Ml="1.11.0";/**
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
 */class y0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _0(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function w0(n){ft(new tt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;B(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lh(n)},h=new Cy(r,s,i,u);return Uy(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ft(new tt("auth-internal",e=>{const t=nn(e.getProvider("auth").getImmediate());return(r=>new y0(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qe(Ll,Ml,_0(n)),Qe(Ll,Ml,"esm2020")}/**
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
 */const v0=5*60,T0=ch("authIdTokenMaxAge")||v0;let jl=null;const E0=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>T0)return;const s=t==null?void 0:t.token;jl!==s&&(jl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function I0(n=ua()){const e=An(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Fy(n,{popupRedirectResolver:g0,persistence:[S_,m_,Kh]}),r=ch("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=E0(i.toString());u_(t,a,()=>a(t.currentUser)),l_(t,c=>a(c))}}const s=oh("auth");return s&&$y(t,`http://${s}`),t}function b0(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Py({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=at("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",b0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});w0("Browser");var Fl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gt,td;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,g){function _(){}_.prototype=g.prototype,v.F=g.prototype,v.prototype=new _,v.prototype.constructor=v,v.D=function(E,T,b){for(var w=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)w[_e-2]=arguments[_e];return g.prototype[T].apply(E,w)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,g,_){_||(_=0);const E=Array(16);if(typeof g=="string")for(var T=0;T<16;++T)E[T]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(T=0;T<16;++T)E[T]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=v.g[0],_=v.g[1],T=v.g[2];let b=v.g[3],w;w=g+(b^_&(T^b))+E[0]+3614090360&4294967295,g=_+(w<<7&4294967295|w>>>25),w=b+(T^g&(_^T))+E[1]+3905402710&4294967295,b=g+(w<<12&4294967295|w>>>20),w=T+(_^b&(g^_))+E[2]+606105819&4294967295,T=b+(w<<17&4294967295|w>>>15),w=_+(g^T&(b^g))+E[3]+3250441966&4294967295,_=T+(w<<22&4294967295|w>>>10),w=g+(b^_&(T^b))+E[4]+4118548399&4294967295,g=_+(w<<7&4294967295|w>>>25),w=b+(T^g&(_^T))+E[5]+1200080426&4294967295,b=g+(w<<12&4294967295|w>>>20),w=T+(_^b&(g^_))+E[6]+2821735955&4294967295,T=b+(w<<17&4294967295|w>>>15),w=_+(g^T&(b^g))+E[7]+4249261313&4294967295,_=T+(w<<22&4294967295|w>>>10),w=g+(b^_&(T^b))+E[8]+1770035416&4294967295,g=_+(w<<7&4294967295|w>>>25),w=b+(T^g&(_^T))+E[9]+2336552879&4294967295,b=g+(w<<12&4294967295|w>>>20),w=T+(_^b&(g^_))+E[10]+4294925233&4294967295,T=b+(w<<17&4294967295|w>>>15),w=_+(g^T&(b^g))+E[11]+2304563134&4294967295,_=T+(w<<22&4294967295|w>>>10),w=g+(b^_&(T^b))+E[12]+1804603682&4294967295,g=_+(w<<7&4294967295|w>>>25),w=b+(T^g&(_^T))+E[13]+4254626195&4294967295,b=g+(w<<12&4294967295|w>>>20),w=T+(_^b&(g^_))+E[14]+2792965006&4294967295,T=b+(w<<17&4294967295|w>>>15),w=_+(g^T&(b^g))+E[15]+1236535329&4294967295,_=T+(w<<22&4294967295|w>>>10),w=g+(T^b&(_^T))+E[1]+4129170786&4294967295,g=_+(w<<5&4294967295|w>>>27),w=b+(_^T&(g^_))+E[6]+3225465664&4294967295,b=g+(w<<9&4294967295|w>>>23),w=T+(g^_&(b^g))+E[11]+643717713&4294967295,T=b+(w<<14&4294967295|w>>>18),w=_+(b^g&(T^b))+E[0]+3921069994&4294967295,_=T+(w<<20&4294967295|w>>>12),w=g+(T^b&(_^T))+E[5]+3593408605&4294967295,g=_+(w<<5&4294967295|w>>>27),w=b+(_^T&(g^_))+E[10]+38016083&4294967295,b=g+(w<<9&4294967295|w>>>23),w=T+(g^_&(b^g))+E[15]+3634488961&4294967295,T=b+(w<<14&4294967295|w>>>18),w=_+(b^g&(T^b))+E[4]+3889429448&4294967295,_=T+(w<<20&4294967295|w>>>12),w=g+(T^b&(_^T))+E[9]+568446438&4294967295,g=_+(w<<5&4294967295|w>>>27),w=b+(_^T&(g^_))+E[14]+3275163606&4294967295,b=g+(w<<9&4294967295|w>>>23),w=T+(g^_&(b^g))+E[3]+4107603335&4294967295,T=b+(w<<14&4294967295|w>>>18),w=_+(b^g&(T^b))+E[8]+1163531501&4294967295,_=T+(w<<20&4294967295|w>>>12),w=g+(T^b&(_^T))+E[13]+2850285829&4294967295,g=_+(w<<5&4294967295|w>>>27),w=b+(_^T&(g^_))+E[2]+4243563512&4294967295,b=g+(w<<9&4294967295|w>>>23),w=T+(g^_&(b^g))+E[7]+1735328473&4294967295,T=b+(w<<14&4294967295|w>>>18),w=_+(b^g&(T^b))+E[12]+2368359562&4294967295,_=T+(w<<20&4294967295|w>>>12),w=g+(_^T^b)+E[5]+4294588738&4294967295,g=_+(w<<4&4294967295|w>>>28),w=b+(g^_^T)+E[8]+2272392833&4294967295,b=g+(w<<11&4294967295|w>>>21),w=T+(b^g^_)+E[11]+1839030562&4294967295,T=b+(w<<16&4294967295|w>>>16),w=_+(T^b^g)+E[14]+4259657740&4294967295,_=T+(w<<23&4294967295|w>>>9),w=g+(_^T^b)+E[1]+2763975236&4294967295,g=_+(w<<4&4294967295|w>>>28),w=b+(g^_^T)+E[4]+1272893353&4294967295,b=g+(w<<11&4294967295|w>>>21),w=T+(b^g^_)+E[7]+4139469664&4294967295,T=b+(w<<16&4294967295|w>>>16),w=_+(T^b^g)+E[10]+3200236656&4294967295,_=T+(w<<23&4294967295|w>>>9),w=g+(_^T^b)+E[13]+681279174&4294967295,g=_+(w<<4&4294967295|w>>>28),w=b+(g^_^T)+E[0]+3936430074&4294967295,b=g+(w<<11&4294967295|w>>>21),w=T+(b^g^_)+E[3]+3572445317&4294967295,T=b+(w<<16&4294967295|w>>>16),w=_+(T^b^g)+E[6]+76029189&4294967295,_=T+(w<<23&4294967295|w>>>9),w=g+(_^T^b)+E[9]+3654602809&4294967295,g=_+(w<<4&4294967295|w>>>28),w=b+(g^_^T)+E[12]+3873151461&4294967295,b=g+(w<<11&4294967295|w>>>21),w=T+(b^g^_)+E[15]+530742520&4294967295,T=b+(w<<16&4294967295|w>>>16),w=_+(T^b^g)+E[2]+3299628645&4294967295,_=T+(w<<23&4294967295|w>>>9),w=g+(T^(_|~b))+E[0]+4096336452&4294967295,g=_+(w<<6&4294967295|w>>>26),w=b+(_^(g|~T))+E[7]+1126891415&4294967295,b=g+(w<<10&4294967295|w>>>22),w=T+(g^(b|~_))+E[14]+2878612391&4294967295,T=b+(w<<15&4294967295|w>>>17),w=_+(b^(T|~g))+E[5]+4237533241&4294967295,_=T+(w<<21&4294967295|w>>>11),w=g+(T^(_|~b))+E[12]+1700485571&4294967295,g=_+(w<<6&4294967295|w>>>26),w=b+(_^(g|~T))+E[3]+2399980690&4294967295,b=g+(w<<10&4294967295|w>>>22),w=T+(g^(b|~_))+E[10]+4293915773&4294967295,T=b+(w<<15&4294967295|w>>>17),w=_+(b^(T|~g))+E[1]+2240044497&4294967295,_=T+(w<<21&4294967295|w>>>11),w=g+(T^(_|~b))+E[8]+1873313359&4294967295,g=_+(w<<6&4294967295|w>>>26),w=b+(_^(g|~T))+E[15]+4264355552&4294967295,b=g+(w<<10&4294967295|w>>>22),w=T+(g^(b|~_))+E[6]+2734768916&4294967295,T=b+(w<<15&4294967295|w>>>17),w=_+(b^(T|~g))+E[13]+1309151649&4294967295,_=T+(w<<21&4294967295|w>>>11),w=g+(T^(_|~b))+E[4]+4149444226&4294967295,g=_+(w<<6&4294967295|w>>>26),w=b+(_^(g|~T))+E[11]+3174756917&4294967295,b=g+(w<<10&4294967295|w>>>22),w=T+(g^(b|~_))+E[2]+718787259&4294967295,T=b+(w<<15&4294967295|w>>>17),w=_+(b^(T|~g))+E[9]+3951481745&4294967295,v.g[0]=v.g[0]+g&4294967295,v.g[1]=v.g[1]+(T+(w<<21&4294967295|w>>>11))&4294967295,v.g[2]=v.g[2]+T&4294967295,v.g[3]=v.g[3]+b&4294967295}r.prototype.v=function(v,g){g===void 0&&(g=v.length);const _=g-this.blockSize,E=this.C;let T=this.h,b=0;for(;b<g;){if(T==0)for(;b<=_;)s(this,v,b),b+=this.blockSize;if(typeof v=="string"){for(;b<g;)if(E[T++]=v.charCodeAt(b++),T==this.blockSize){s(this,E),T=0;break}}else for(;b<g;)if(E[T++]=v[b++],T==this.blockSize){s(this,E),T=0;break}}this.h=T,this.o+=g},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var g=1;g<v.length-8;++g)v[g]=0;g=this.o*8;for(var _=v.length-8;_<v.length;++_)v[_]=g&255,g/=256;for(this.v(v),v=Array(16),g=0,_=0;_<4;++_)for(let E=0;E<32;E+=8)v[g++]=this.g[_]>>>E&255;return v};function i(v,g){var _=c;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=g(v)}function a(v,g){this.h=g;const _=[];let E=!0;for(let T=v.length-1;T>=0;T--){const b=v[T]|0;E&&b==g||(_[T]=b,E=!1)}this.g=_}var c={};function u(v){return-128<=v&&v<128?i(v,function(g){return new a([g|0],g<0?-1:0)}):new a([v|0],v<0?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return y;if(v<0)return C(h(-v));const g=[];let _=1;for(let E=0;v>=_;E++)g[E]=v/_|0,_*=4294967296;return new a(g,0)}function m(v,g){if(v.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(v.charAt(0)=="-")return C(m(v.substring(1),g));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=h(Math.pow(g,8));let E=y;for(let b=0;b<v.length;b+=8){var T=Math.min(8,v.length-b);const w=parseInt(v.substring(b,b+T),g);T<8?(T=h(Math.pow(g,T)),E=E.j(T).add(h(w))):(E=E.j(_),E=E.add(h(w)))}return E}var y=u(0),I=u(1),k=u(16777216);n=a.prototype,n.m=function(){if(P(this))return-C(this).m();let v=0,g=1;for(let _=0;_<this.g.length;_++){const E=this.i(_);v+=(E>=0?E:4294967296+E)*g,g*=4294967296}return v},n.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(S(this))return"0";if(P(this))return"-"+C(this).toString(v);const g=h(Math.pow(v,6));var _=this;let E="";for(;;){const T=K(_,g).g;_=F(_,T.j(g));let b=((_.g.length>0?_.g[0]:_.h)>>>0).toString(v);if(_=T,S(_))return b+E;for(;b.length<6;)b="0"+b;E=b+E}},n.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function S(v){if(v.h!=0)return!1;for(let g=0;g<v.g.length;g++)if(v.g[g]!=0)return!1;return!0}function P(v){return v.h==-1}n.l=function(v){return v=F(this,v),P(v)?-1:S(v)?0:1};function C(v){const g=v.g.length,_=[];for(let E=0;E<g;E++)_[E]=~v.g[E];return new a(_,~v.h).add(I)}n.abs=function(){return P(this)?C(this):this},n.add=function(v){const g=Math.max(this.g.length,v.g.length),_=[];let E=0;for(let T=0;T<=g;T++){let b=E+(this.i(T)&65535)+(v.i(T)&65535),w=(b>>>16)+(this.i(T)>>>16)+(v.i(T)>>>16);E=w>>>16,b&=65535,w&=65535,_[T]=w<<16|b}return new a(_,_[_.length-1]&-2147483648?-1:0)};function F(v,g){return v.add(C(g))}n.j=function(v){if(S(this)||S(v))return y;if(P(this))return P(v)?C(this).j(C(v)):C(C(this).j(v));if(P(v))return C(this.j(C(v)));if(this.l(k)<0&&v.l(k)<0)return h(this.m()*v.m());const g=this.g.length+v.g.length,_=[];for(var E=0;E<2*g;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(let T=0;T<v.g.length;T++){const b=this.i(E)>>>16,w=this.i(E)&65535,_e=v.i(T)>>>16,Le=v.i(T)&65535;_[2*E+2*T]+=w*Le,H(_,2*E+2*T),_[2*E+2*T+1]+=b*Le,H(_,2*E+2*T+1),_[2*E+2*T+1]+=w*_e,H(_,2*E+2*T+1),_[2*E+2*T+2]+=b*_e,H(_,2*E+2*T+2)}for(v=0;v<g;v++)_[v]=_[2*v+1]<<16|_[2*v];for(v=g;v<2*g;v++)_[v]=0;return new a(_,0)};function H(v,g){for(;(v[g]&65535)!=v[g];)v[g+1]+=v[g]>>>16,v[g]&=65535,g++}function D(v,g){this.g=v,this.h=g}function K(v,g){if(S(g))throw Error("division by zero");if(S(v))return new D(y,y);if(P(v))return g=K(C(v),g),new D(C(g.g),C(g.h));if(P(g))return g=K(v,C(g)),new D(C(g.g),g.h);if(v.g.length>30){if(P(v)||P(g))throw Error("slowDivide_ only works with positive integers.");for(var _=I,E=g;E.l(v)<=0;)_=se(_),E=se(E);var T=te(_,1),b=te(E,1);for(E=te(E,2),_=te(_,2);!S(E);){var w=b.add(E);w.l(v)<=0&&(T=T.add(_),b=w),E=te(E,1),_=te(_,1)}return g=F(v,T.j(g)),new D(T,g)}for(T=y;v.l(g)>=0;){for(_=Math.max(1,Math.floor(v.m()/g.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),b=h(_),w=b.j(g);P(w)||w.l(v)>0;)_-=E,b=h(_),w=b.j(g);S(b)&&(b=I),T=T.add(b),v=F(v,w)}return new D(T,v)}n.B=function(v){return K(this,v).h},n.and=function(v){const g=Math.max(this.g.length,v.g.length),_=[];for(let E=0;E<g;E++)_[E]=this.i(E)&v.i(E);return new a(_,this.h&v.h)},n.or=function(v){const g=Math.max(this.g.length,v.g.length),_=[];for(let E=0;E<g;E++)_[E]=this.i(E)|v.i(E);return new a(_,this.h|v.h)},n.xor=function(v){const g=Math.max(this.g.length,v.g.length),_=[];for(let E=0;E<g;E++)_[E]=this.i(E)^v.i(E);return new a(_,this.h^v.h)};function se(v){const g=v.g.length+1,_=[];for(let E=0;E<g;E++)_[E]=v.i(E)<<1|v.i(E-1)>>>31;return new a(_,v.h)}function te(v,g){const _=g>>5;g%=32;const E=v.g.length-_,T=[];for(let b=0;b<E;b++)T[b]=g>0?v.i(b+_)>>>g|v.i(b+_+1)<<32-g:v.i(b+_);return new a(T,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,td=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=m,Gt=a}).apply(typeof Fl<"u"?Fl:typeof self<"u"?self:typeof window<"u"?window:{});var Rs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nd,Lr,rd,zs,$o,sd,id,od;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Rs=="object"&&Rs];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var A=o[p];if(!(A in d))break e;d=d[A]}o=o[o.length-1],p=d[o],l=l(p),l!=p&&l!=null&&e(d,o,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(l){var d=[],p;for(p in l)Object.prototype.hasOwnProperty.call(l,p)&&d.push([p,l[p]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function u(o,l,d){return o.call.apply(o.bind,arguments)}function h(o,l,d){return h=u,h.apply(null,arguments)}function m(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function y(o,l){function d(){}d.prototype=l.prototype,o.Z=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(p,A,x){for(var V=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)V[Q-2]=arguments[Q];return l.prototype[A].apply(p,V)}}var I=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function k(o){const l=o.length;if(l>0){const d=Array(l);for(let p=0;p<l;p++)d[p]=o[p];return d}return[]}function S(o,l){for(let p=1;p<arguments.length;p++){const A=arguments[p];var d=typeof A;if(d=d!="object"?d:A?Array.isArray(A)?"array":d:"null",d=="array"||d=="object"&&typeof A.length=="number"){d=o.length||0;const x=A.length||0;o.length=d+x;for(let V=0;V<x;V++)o[d+V]=A[V]}else o.push(A)}}class P{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function C(o){a.setTimeout(()=>{throw o},0)}function F(){var o=v;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class H{constructor(){this.h=this.g=null}add(l,d){const p=D.get();p.set(l,d),this.h?this.h.next=p:this.g=p,this.h=p}}var D=new P(()=>new K,o=>o.reset());class K{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let se,te=!1,v=new H,g=()=>{const o=Promise.resolve(void 0);se=()=>{o.then(_)}};function _(){for(var o;o=F();){try{o.h.call(o.g)}catch(d){C(d)}var l=D;l.j(o),l.h<100&&(l.h++,o.next=l.g,l.g=o)}te=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var b=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};a.addEventListener("test",d,l),a.removeEventListener("test",d,l)}catch{}return o}();function w(o){return/^[\s\xa0]*$/.test(o)}function _e(o,l){T.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,l)}y(_e,T),_e.prototype.init=function(o,l){const d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget,l||(d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement)),this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&_e.Z.h.call(this)},_e.prototype.h=function(){_e.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Le="closure_listenable_"+(Math.random()*1e6|0),Ye=0;function yt(o,l,d,p,A){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!p,this.ha=A,this.key=++Ye,this.da=this.fa=!1}function U(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function rn(o,l,d){for(const p in o)l.call(d,o[p],p,o)}function ps(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function fr(o){const l={};for(const d in o)l[d]=o[d];return l}const Cn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function we(o,l){let d,p;for(let A=1;A<arguments.length;A++){p=arguments[A];for(d in p)o[d]=p[d];for(let x=0;x<Cn.length;x++)d=Cn[x],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function ve(o){this.src=o,this.g={},this.h=0}ve.prototype.add=function(o,l,d,p,A){const x=o.toString();o=this.g[x],o||(o=this.g[x]=[],this.h++);const V=Pn(o,l,p,A);return V>-1?(l=o[V],d||(l.fa=!1)):(l=new yt(l,this.src,x,!!p,A),l.fa=d,o.push(l)),l};function Ct(o,l){const d=l.type;if(d in o.g){var p=o.g[d],A=Array.prototype.indexOf.call(p,l,void 0),x;(x=A>=0)&&Array.prototype.splice.call(p,A,1),x&&(U(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Pn(o,l,d,p){for(let A=0;A<o.length;++A){const x=o[A];if(!x.da&&x.listener==l&&x.capture==!!d&&x.ha==p)return A}return-1}var le="closure_lm_"+(Math.random()*1e6|0),Nn={};function sn(o,l,d,p,A){if(Array.isArray(l)){for(let x=0;x<l.length;x++)sn(o,l[x],d,p,A);return null}return d=ic(d),o&&o[Le]?o.J(l,d,c(p)?!!p.capture:!1,A):Vn(o,l,d,!1,p,A)}function Vn(o,l,d,p,A,x){if(!l)throw Error("Invalid event type");const V=c(A)?!!A.capture:!!A;let Q=Fi(o);if(Q||(o[le]=Q=new ve(o)),d=Q.add(l,d,p,V,x),d.proxy)return d;if(p=pr(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)b||(A=V),A===void 0&&(A=!1),o.addEventListener(l.toString(),p,A);else if(o.attachEvent)o.attachEvent(sc(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function pr(){function o(d){return l.call(o.src,o.listener,d)}const l=hp;return o}function on(o,l,d,p,A){if(Array.isArray(l))for(var x=0;x<l.length;x++)on(o,l[x],d,p,A);else p=c(p)?!!p.capture:!!p,d=ic(d),o&&o[Le]?(o=o.i,x=String(l).toString(),x in o.g&&(l=o.g[x],d=Pn(l,d,p,A),d>-1&&(U(l[d]),Array.prototype.splice.call(l,d,1),l.length==0&&(delete o.g[x],o.h--)))):o&&(o=Fi(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Pn(l,d,p,A)),(d=o>-1?l[o]:null)&&ji(d))}function ji(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Le])Ct(l.i,o);else{var d=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(d,p,o.capture):l.detachEvent?l.detachEvent(sc(d),p):l.addListener&&l.removeListener&&l.removeListener(p),(d=Fi(l))?(Ct(d,o),d.h==0&&(d.src=null,l[le]=null)):U(o)}}}function sc(o){return o in Nn?Nn[o]:Nn[o]="on"+o}function hp(o,l){if(o.da)o=!0;else{l=new _e(l,this);const d=o.listener,p=o.ha||o.src;o.fa&&ji(o),o=d.call(p,l)}return o}function Fi(o){return o=o[le],o instanceof ve?o:null}var Ui="__closure_events_fn_"+(Math.random()*1e9>>>0);function ic(o){return typeof o=="function"?o:(o[Ui]||(o[Ui]=function(l){return o.handleEvent(l)}),o[Ui])}function ke(){E.call(this),this.i=new ve(this),this.M=this,this.G=null}y(ke,E),ke.prototype[Le]=!0,ke.prototype.removeEventListener=function(o,l,d,p){on(this,o,l,d,p)};function De(o,l){var d,p=o.G;if(p)for(d=[];p;p=p.G)d.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new T(l,o);else if(l instanceof T)l.target=l.target||o;else{var A=l;l=new T(p,o),we(l,A)}A=!0;let x,V;if(d)for(V=d.length-1;V>=0;V--)x=l.g=d[V],A=ms(x,p,!0,l)&&A;if(x=l.g=o,A=ms(x,p,!0,l)&&A,A=ms(x,p,!1,l)&&A,d)for(V=0;V<d.length;V++)x=l.g=d[V],A=ms(x,p,!1,l)&&A}ke.prototype.N=function(){if(ke.Z.N.call(this),this.i){var o=this.i;for(const l in o.g){const d=o.g[l];for(let p=0;p<d.length;p++)U(d[p]);delete o.g[l],o.h--}}this.G=null},ke.prototype.J=function(o,l,d,p){return this.i.add(String(o),l,!1,d,p)},ke.prototype.K=function(o,l,d,p){return this.i.add(String(o),l,!0,d,p)};function ms(o,l,d,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();let A=!0;for(let x=0;x<l.length;++x){const V=l[x];if(V&&!V.da&&V.capture==d){const Q=V.listener,pe=V.ha||V.src;V.fa&&Ct(o.i,V),A=Q.call(pe,p)!==!1&&A}}return A&&!p.defaultPrevented}function dp(o,l){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(o,l||0)}function oc(o){o.g=dp(()=>{o.g=null,o.i&&(o.i=!1,oc(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class fp extends E{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:oc(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mr(o){E.call(this),this.h=o,this.g={}}y(mr,E);var ac=[];function cc(o){rn(o.g,function(l,d){this.g.hasOwnProperty(d)&&ji(l)},o),o.g={}}mr.prototype.N=function(){mr.Z.N.call(this),cc(this)},mr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $i=a.JSON.stringify,pp=a.JSON.parse,mp=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function lc(){}function uc(){}var gr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Bi(){T.call(this,"d")}y(Bi,T);function zi(){T.call(this,"c")}y(zi,T);var an={},hc=null;function gs(){return hc=hc||new ke}an.Ia="serverreachability";function dc(o){T.call(this,an.Ia,o)}y(dc,T);function yr(o){const l=gs();De(l,new dc(l))}an.STAT_EVENT="statevent";function fc(o,l){T.call(this,an.STAT_EVENT,o),this.stat=l}y(fc,T);function Oe(o){const l=gs();De(l,new fc(l,o))}an.Ja="timingevent";function pc(o,l){T.call(this,an.Ja,o),this.size=l}y(pc,T);function _r(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},l)}function wr(){this.g=!0}wr.prototype.ua=function(){this.g=!1};function gp(o,l,d,p,A,x){o.info(function(){if(o.g)if(x){var V="",Q=x.split("&");for(let re=0;re<Q.length;re++){var pe=Q[re].split("=");if(pe.length>1){const Te=pe[0];pe=pe[1];const it=Te.split("_");V=it.length>=2&&it[1]=="type"?V+(Te+"="+pe+"&"):V+(Te+"=redacted&")}}}else V=null;else V=x;return"XMLHTTP REQ ("+p+") [attempt "+A+"]: "+l+`
`+d+`
`+V})}function yp(o,l,d,p,A,x,V){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+A+"]: "+l+`
`+d+`
`+x+" "+V})}function Dn(o,l,d,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+wp(o,d)+(p?" "+p:"")})}function _p(o,l){o.info(function(){return"TIMEOUT: "+l})}wr.prototype.info=function(){};function wp(o,l){if(!o.g)return l;if(!l)return null;try{const x=JSON.parse(l);if(x){for(o=0;o<x.length;o++)if(Array.isArray(x[o])){var d=x[o];if(!(d.length<2)){var p=d[1];if(Array.isArray(p)&&!(p.length<1)){var A=p[0];if(A!="noop"&&A!="stop"&&A!="close")for(let V=1;V<p.length;V++)p[V]=""}}}}return $i(x)}catch{return l}}var ys={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},mc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},gc;function qi(){}y(qi,lc),qi.prototype.g=function(){return new XMLHttpRequest},gc=new qi;function vr(o){return encodeURIComponent(String(o))}function vp(o){var l=1;o=o.split(":");const d=[];for(;l>0&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function Pt(o,l,d,p){this.j=o,this.i=l,this.l=d,this.S=p||1,this.V=new mr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new yc}function yc(){this.i=null,this.g="",this.h=!1}var _c={},Hi={};function Wi(o,l,d){o.M=1,o.A=ws(st(l)),o.u=d,o.R=!0,wc(o,null)}function wc(o,l){o.F=Date.now(),_s(o),o.B=st(o.A);var d=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),Nc(d.i,"t",p),o.C=0,d=o.j.L,o.h=new yc,o.g=Yc(o.j,d?l:null,!o.u),o.P>0&&(o.O=new fp(h(o.Y,o,o.g),o.P)),l=o.V,d=o.g,p=o.ba;var A="readystatechange";Array.isArray(A)||(A&&(ac[0]=A.toString()),A=ac);for(let x=0;x<A.length;x++){const V=sn(d,A[x],p||l.handleEvent,!1,l.h||l);if(!V)break;l.g[V.key]=V}l=o.J?fr(o.J):{},o.u?(o.v||(o.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,l)):(o.v="GET",o.g.ea(o.B,o.v,null,l)),yr(),gp(o.i,o.v,o.B,o.l,o.S,o.u)}Pt.prototype.ba=function(o){o=o.target;const l=this.O;l&&Dt(o)==3?l.j():this.Y(o)},Pt.prototype.Y=function(o){try{if(o==this.g)e:{const Q=Dt(this.g),pe=this.g.ya(),re=this.g.ca();if(!(Q<3)&&(Q!=3||this.g&&(this.h.h||this.g.la()||Fc(this.g)))){this.K||Q!=4||pe==7||(pe==8||re<=0?yr(3):yr(2)),Gi(this);var l=this.g.ca();this.X=l;var d=Tp(this);if(this.o=l==200,yp(this.i,this.v,this.B,this.l,this.S,Q,l),this.o){if(this.U&&!this.L){t:{if(this.g){var p,A=this.g;if((p=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(p)){var x=p;break t}}x=null}if(o=x)Dn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ki(this,o);else{this.o=!1,this.m=3,Oe(12),cn(this),Tr(this);break e}}if(this.R){o=!0;let Te;for(;!this.K&&this.C<d.length;)if(Te=Ep(this,d),Te==Hi){Q==4&&(this.m=4,Oe(14),o=!1),Dn(this.i,this.l,null,"[Incomplete Response]");break}else if(Te==_c){this.m=4,Oe(15),Dn(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else Dn(this.i,this.l,Te,null),Ki(this,Te);if(vc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Q!=4||d.length!=0||this.h.h||(this.m=1,Oe(16),o=!1),this.o=this.o&&o,!o)Dn(this.i,this.l,d,"[Invalid Chunked Response]"),cn(this),Tr(this);else if(d.length>0&&!this.W){this.W=!0;var V=this.j;V.g==this&&V.aa&&!V.P&&(V.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),no(V),V.P=!0,Oe(11))}}else Dn(this.i,this.l,d,null),Ki(this,d);Q==4&&cn(this),this.o&&!this.K&&(Q==4?Wc(this.j,this):(this.o=!1,_s(this)))}else Lp(this.g),l==400&&d.indexOf("Unknown SID")>0?(this.m=3,Oe(12)):(this.m=0,Oe(13)),cn(this),Tr(this)}}}catch{}finally{}};function Tp(o){if(!vc(o))return o.g.la();const l=Fc(o.g);if(l==="")return"";let d="";const p=l.length,A=Dt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return cn(o),Tr(o),"";o.h.i=new a.TextDecoder}for(let x=0;x<p;x++)o.h.h=!0,d+=o.h.i.decode(l[x],{stream:!(A&&x==p-1)});return l.length=0,o.h.g+=d,o.C=0,o.h.g}function vc(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Ep(o,l){var d=o.C,p=l.indexOf(`
`,d);return p==-1?Hi:(d=Number(l.substring(d,p)),isNaN(d)?_c:(p+=1,p+d>l.length?Hi:(l=l.slice(p,p+d),o.C=p+d,l)))}Pt.prototype.cancel=function(){this.K=!0,cn(this)};function _s(o){o.T=Date.now()+o.H,Tc(o,o.H)}function Tc(o,l){if(o.D!=null)throw Error("WatchDog timer not null");o.D=_r(h(o.aa,o),l)}function Gi(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Pt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(_p(this.i,this.B),this.M!=2&&(yr(),Oe(17)),cn(this),this.m=2,Tr(this)):Tc(this,this.T-o)};function Tr(o){o.j.I==0||o.K||Wc(o.j,o)}function cn(o){Gi(o);var l=o.O;l&&typeof l.dispose=="function"&&l.dispose(),o.O=null,cc(o.V),o.g&&(l=o.g,o.g=null,l.abort(),l.dispose())}function Ki(o,l){try{var d=o.j;if(d.I!=0&&(d.g==o||Qi(d.h,o))){if(!o.L&&Qi(d.h,o)&&d.I==3){try{var p=d.Ba.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var A=p;if(A[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)bs(d),Es(d);else break e;to(d),Oe(18)}}else d.xa=A[1],0<d.xa-d.K&&A[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=_r(h(d.Va,d),6e3));bc(d.h)<=1&&d.ta&&(d.ta=void 0)}else un(d,11)}else if((o.L||d.g==o)&&bs(d),!w(l))for(A=d.Ba.g.parse(l),l=0;l<A.length;l++){let re=A[l];const Te=re[0];if(!(Te<=d.K))if(d.K=Te,re=re[1],d.I==2)if(re[0]=="c"){d.M=re[1],d.ba=re[2];const it=re[3];it!=null&&(d.ka=it,d.j.info("VER="+d.ka));const hn=re[4];hn!=null&&(d.za=hn,d.j.info("SVER="+d.za));const Ot=re[5];Ot!=null&&typeof Ot=="number"&&Ot>0&&(p=1.5*Ot,d.O=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Lt=o.g;if(Lt){const xs=Lt.g?Lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xs){var x=p.h;x.g||xs.indexOf("spdy")==-1&&xs.indexOf("quic")==-1&&xs.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(Yi(x,x.h),x.h=null))}if(p.G){const ro=Lt.g?Lt.g.getResponseHeader("X-HTTP-Session-Id"):null;ro&&(p.wa=ro,ie(p.J,p.G,ro))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),p=d;var V=o;if(p.na=Qc(p,p.L?p.ba:null,p.W),V.L){Ac(p.h,V);var Q=V,pe=p.O;pe&&(Q.H=pe),Q.D&&(Gi(Q),_s(Q)),p.g=V}else qc(p);d.i.length>0&&Is(d)}else re[0]!="stop"&&re[0]!="close"||un(d,7);else d.I==3&&(re[0]=="stop"||re[0]=="close"?re[0]=="stop"?un(d,7):eo(d):re[0]!="noop"&&d.l&&d.l.qa(re),d.A=0)}}yr(4)}catch{}}var Ip=class{constructor(o,l){this.g=o,this.map=l}};function Ec(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ic(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function bc(o){return o.h?1:o.g?o.g.size:0}function Qi(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Yi(o,l){o.g?o.g.add(l):o.h=l}function Ac(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Ec.prototype.cancel=function(){if(this.i=xc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function xc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.G);return l}return k(o.i)}var Sc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bp(o,l){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const p=o[d].indexOf("=");let A,x=null;p>=0?(A=o[d].substring(0,p),x=o[d].substring(p+1)):A=o[d],l(A,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Nt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;o instanceof Nt?(this.l=o.l,Er(this,o.j),this.o=o.o,this.g=o.g,Ir(this,o.u),this.h=o.h,Xi(this,Vc(o.i)),this.m=o.m):o&&(l=String(o).match(Sc))?(this.l=!1,Er(this,l[1]||"",!0),this.o=br(l[2]||""),this.g=br(l[3]||"",!0),Ir(this,l[4]),this.h=br(l[5]||"",!0),Xi(this,l[6]||"",!0),this.m=br(l[7]||"")):(this.l=!1,this.i=new xr(null,this.l))}Nt.prototype.toString=function(){const o=[];var l=this.j;l&&o.push(Ar(l,kc,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Ar(l,kc,!0),"@"),o.push(vr(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Ar(d,d.charAt(0)=="/"?Sp:xp,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Ar(d,Rp)),o.join("")},Nt.prototype.resolve=function(o){const l=st(this);let d=!!o.j;d?Er(l,o.j):d=!!o.o,d?l.o=o.o:d=!!o.g,d?l.g=o.g:d=o.u!=null;var p=o.h;if(d)Ir(l,o.u);else if(d=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var A=l.h.lastIndexOf("/");A!=-1&&(p=l.h.slice(0,A+1)+p)}if(A=p,A==".."||A==".")p="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){p=A.lastIndexOf("/",0)==0,A=A.split("/");const x=[];for(let V=0;V<A.length;){const Q=A[V++];Q=="."?p&&V==A.length&&x.push(""):Q==".."?((x.length>1||x.length==1&&x[0]!="")&&x.pop(),p&&V==A.length&&x.push("")):(x.push(Q),p=!0)}p=x.join("/")}else p=A}return d?l.h=p:d=o.i.toString()!=="",d?Xi(l,Vc(o.i)):d=!!o.m,d&&(l.m=o.m),l};function st(o){return new Nt(o)}function Er(o,l,d){o.j=d?br(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Ir(o,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);o.u=l}else o.u=null}function Xi(o,l,d){l instanceof xr?(o.i=l,Cp(o.i,o.l)):(d||(l=Ar(l,kp)),o.i=new xr(l,o.l))}function ie(o,l,d){o.i.set(l,d)}function ws(o){return ie(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function br(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ar(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,Ap),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Ap(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var kc=/[#\/\?@]/g,xp=/[#\?:]/g,Sp=/[#\?]/g,kp=/[#\?@]/g,Rp=/#/g;function xr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function ln(o){o.g||(o.g=new Map,o.h=0,o.i&&bp(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=xr.prototype,n.add=function(o,l){ln(this),this.i=null,o=On(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function Rc(o,l){ln(o),l=On(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Cc(o,l){return ln(o),l=On(o,l),o.g.has(l)}n.forEach=function(o,l){ln(this),this.g.forEach(function(d,p){d.forEach(function(A){o.call(l,A,p,this)},this)},this)};function Pc(o,l){ln(o);let d=[];if(typeof l=="string")Cc(o,l)&&(d=d.concat(o.g.get(On(o,l))));else for(o=Array.from(o.g.values()),l=0;l<o.length;l++)d=d.concat(o[l]);return d}n.set=function(o,l){return ln(this),this.i=null,o=On(this,o),Cc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=Pc(this,o),o.length>0?String(o[0]):l):l};function Nc(o,l,d){Rc(o,l),d.length>0&&(o.i=null,o.g.set(On(o,l),k(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(let p=0;p<l.length;p++){var d=l[p];const A=vr(d);d=Pc(this,d);for(let x=0;x<d.length;x++){let V=A;d[x]!==""&&(V+="="+vr(d[x])),o.push(V)}}return this.i=o.join("&")};function Vc(o){const l=new xr;return l.i=o.i,o.g&&(l.g=new Map(o.g),l.h=o.h),l}function On(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Cp(o,l){l&&!o.j&&(ln(o),o.i=null,o.g.forEach(function(d,p){const A=p.toLowerCase();p!=A&&(Rc(this,p),Nc(this,A,d))},o)),o.j=l}function Pp(o,l){const d=new wr;if(a.Image){const p=new Image;p.onload=m(Vt,d,"TestLoadImage: loaded",!0,l,p),p.onerror=m(Vt,d,"TestLoadImage: error",!1,l,p),p.onabort=m(Vt,d,"TestLoadImage: abort",!1,l,p),p.ontimeout=m(Vt,d,"TestLoadImage: timeout",!1,l,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function Np(o,l){const d=new wr,p=new AbortController,A=setTimeout(()=>{p.abort(),Vt(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(x=>{clearTimeout(A),x.ok?Vt(d,"TestPingServer: ok",!0,l):Vt(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),Vt(d,"TestPingServer: error",!1,l)})}function Vt(o,l,d,p,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),p(d)}catch{}}function Vp(){this.g=new mp}function Ji(o){this.i=o.Sb||null,this.h=o.ab||!1}y(Ji,lc),Ji.prototype.g=function(){return new vs(this.i,this.h)};function vs(o,l){ke.call(this),this.H=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}y(vs,ke),n=vs.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=l,this.readyState=1,kr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(l.body=o),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Sr(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,kr(this)),this.g&&(this.readyState=3,kr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Dc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Dc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Sr(this):kr(this),this.readyState==3&&Dc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Sr(this))},n.Na=function(o){this.g&&(this.response=o,Sr(this))},n.ga=function(){this.g&&Sr(this)};function Sr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,kr(o)}n.setRequestHeader=function(o,l){this.A.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function kr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(vs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Oc(o){let l="";return rn(o,function(d,p){l+=p,l+=":",l+=d,l+=`\r
`}),l}function Zi(o,l,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Oc(d),typeof o=="string"?d!=null&&vr(d):ie(o,l,d))}function ue(o){ke.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}y(ue,ke);var Dp=/^https?$/i,Op=["POST","PUT"];n=ue.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,l,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():gc.g(),this.g.onreadystatechange=I(h(this.Ca,this));try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(x){Lc(this,x);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var A in p)d.set(A,p[A]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const x of p.keys())d.set(x,p.get(x));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(x=>x.toLowerCase()=="content-type"),A=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Op,l,void 0)>=0)||p||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,V]of d)this.g.setRequestHeader(x,V);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(x){Lc(this,x)}};function Lc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.o=5,Mc(o),Ts(o)}function Mc(o){o.A||(o.A=!0,De(o,"complete"),De(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,De(this,"complete"),De(this,"abort"),Ts(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ts(this,!0)),ue.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?jc(this):this.Xa())},n.Xa=function(){jc(this)};function jc(o){if(o.h&&typeof i<"u"){if(o.v&&Dt(o)==4)setTimeout(o.Ca.bind(o),0);else if(De(o,"readystatechange"),Dt(o)==4){o.h=!1;try{const x=o.ca();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var p;if(p=x===0){let V=String(o.D).match(Sc)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),p=!Dp.test(V?V.toLowerCase():"")}d=p}if(d)De(o,"complete"),De(o,"success");else{o.o=6;try{var A=Dt(o)>2?o.g.statusText:""}catch{A=""}o.l=A+" ["+o.ca()+"]",Mc(o)}}finally{Ts(o)}}}}function Ts(o,l){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,l||De(o,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Dt(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Dt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),pp(l)}};function Fc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Lp(o){const l={};o=(o.g&&Dt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(w(o[p]))continue;var d=vp(o[p]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const x=l[A]||[];l[A]=x,x.push(d)}ps(l,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Rr(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function Uc(o){this.za=0,this.i=[],this.j=new wr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Rr("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Rr("baseRetryDelayMs",5e3,o),this.Za=Rr("retryDelaySeedMs",1e4,o),this.Ta=Rr("forwardChannelMaxRetries",2,o),this.va=Rr("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Ec(o&&o.concurrentRequestLimit),this.Ba=new Vp,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Uc.prototype,n.ka=8,n.I=1,n.connect=function(o,l,d,p){Oe(0),this.W=o,this.H=l||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.J=Qc(this,null,this.W),Is(this)};function eo(o){if($c(o),o.I==3){var l=o.V++,d=st(o.J);if(ie(d,"SID",o.M),ie(d,"RID",l),ie(d,"TYPE","terminate"),Cr(o,d),l=new Pt(o,o.j,l),l.M=2,l.A=ws(st(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!d&&a.Image&&(new Image().src=l.A,d=!0),d||(l.g=Yc(l.j,null),l.g.ea(l.A)),l.F=Date.now(),_s(l)}Kc(o)}function Es(o){o.g&&(no(o),o.g.cancel(),o.g=null)}function $c(o){Es(o),o.v&&(a.clearTimeout(o.v),o.v=null),bs(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Is(o){if(!Ic(o.h)&&!o.m){o.m=!0;var l=o.Ea;se||g(),te||(se(),te=!0),v.add(l,o),o.D=0}}function Mp(o,l){return bc(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=l.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=_r(h(o.Ea,o,l),Gc(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const A=new Pt(this,this.j,o);let x=this.o;if(this.U&&(x?(x=fr(x),we(x,this.U)):x=this.U),this.u!==null||this.R||(A.J=x,x=null),this.S)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,l>4096){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=zc(this,A,l),d=st(this.J),ie(d,"RID",o),ie(d,"CVER",22),this.G&&ie(d,"X-HTTP-Session-Id",this.G),Cr(this,d),x&&(this.R?l="headers="+vr(Oc(x))+"&"+l:this.u&&Zi(d,this.u,x)),Yi(this.h,A),this.Ra&&ie(d,"TYPE","init"),this.S?(ie(d,"$req",l),ie(d,"SID","null"),A.U=!0,Wi(A,d,null)):Wi(A,d,l),this.I=2}}else this.I==3&&(o?Bc(this,o):this.i.length==0||Ic(this.h)||Bc(this))};function Bc(o,l){var d;l?d=l.l:d=o.V++;const p=st(o.J);ie(p,"SID",o.M),ie(p,"RID",d),ie(p,"AID",o.K),Cr(o,p),o.u&&o.o&&Zi(p,o.u,o.o),d=new Pt(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),l&&(o.i=l.G.concat(o.i)),l=zc(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Yi(o.h,d),Wi(d,p,l)}function Cr(o,l){o.H&&rn(o.H,function(d,p){ie(l,p,d)}),o.l&&rn({},function(d,p){ie(l,p,d)})}function zc(o,l,d){d=Math.min(o.i.length,d);const p=o.l?h(o.l.Ka,o.l,o):null;e:{var A=o.i;let Q=-1;for(;;){const pe=["count="+d];Q==-1?d>0?(Q=A[0].g,pe.push("ofs="+Q)):Q=0:pe.push("ofs="+Q);let re=!0;for(let Te=0;Te<d;Te++){var x=A[Te].g;const it=A[Te].map;if(x-=Q,x<0)Q=Math.max(0,A[Te].g-100),re=!1;else try{x="req"+x+"_"||"";try{var V=it instanceof Map?it:Object.entries(it);for(const[hn,Ot]of V){let Lt=Ot;c(Ot)&&(Lt=$i(Ot)),pe.push(x+hn+"="+encodeURIComponent(Lt))}}catch(hn){throw pe.push(x+"type="+encodeURIComponent("_badmap")),hn}}catch{p&&p(it)}}if(re){V=pe.join("&");break e}}V=void 0}return o=o.i.splice(0,d),l.G=o,V}function qc(o){if(!o.g&&!o.v){o.Y=1;var l=o.Da;se||g(),te||(se(),te=!0),v.add(l,o),o.A=0}}function to(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=_r(h(o.Da,o),Gc(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Hc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=_r(h(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Oe(10),Es(this),Hc(this))};function no(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Hc(o){o.g=new Pt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var l=st(o.na);ie(l,"RID","rpc"),ie(l,"SID",o.M),ie(l,"AID",o.K),ie(l,"CI",o.F?"0":"1"),!o.F&&o.ia&&ie(l,"TO",o.ia),ie(l,"TYPE","xmlhttp"),Cr(o,l),o.u&&o.o&&Zi(l,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=ws(st(l)),d.u=null,d.R=!0,wc(d,o)}n.Va=function(){this.C!=null&&(this.C=null,Es(this),to(this),Oe(19))};function bs(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Wc(o,l){var d=null;if(o.g==l){bs(o),no(o),o.g=null;var p=2}else if(Qi(o.h,l))d=l.G,Ac(o.h,l),p=1;else return;if(o.I!=0){if(l.o)if(p==1){d=l.u?l.u.length:0,l=Date.now()-l.F;var A=o.D;p=gs(),De(p,new pc(p,d)),Is(o)}else qc(o);else if(A=l.m,A==3||A==0&&l.X>0||!(p==1&&Mp(o,l)||p==2&&to(o)))switch(d&&d.length>0&&(l=o.h,l.i=l.i.concat(d)),A){case 1:un(o,5);break;case 4:un(o,10);break;case 3:un(o,6);break;default:un(o,2)}}}function Gc(o,l){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*l}function un(o,l){if(o.j.info("Error code "+l),l==2){var d=h(o.bb,o),p=o.Ua;const A=!p;p=new Nt(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Er(p,"https"),ws(p),A?Pp(p.toString(),d):Np(p.toString(),d)}else Oe(2);o.I=0,o.l&&o.l.pa(l),Kc(o),$c(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Oe(2)):(this.j.info("Failed to ping google.com"),Oe(1))};function Kc(o){if(o.I=0,o.ja=[],o.l){const l=xc(o.h);(l.length!=0||o.i.length!=0)&&(S(o.ja,l),S(o.ja,o.i),o.h.i.length=0,k(o.i),o.i.length=0),o.l.oa()}}function Qc(o,l,d){var p=d instanceof Nt?st(d):new Nt(d);if(p.g!="")l&&(p.g=l+"."+p.g),Ir(p,p.u);else{var A=a.location;p=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;const x=new Nt(null);p&&Er(x,p),l&&(x.g=l),A&&Ir(x,A),d&&(x.h=d),p=x}return d=o.G,l=o.wa,d&&l&&ie(p,d,l),ie(p,"VER",o.ka),Cr(o,p),p}function Yc(o,l,d){if(l&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Aa&&!o.ma?new ue(new Ji({ab:d})):new ue(o.ma),l.Fa(o.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xc(){}n=Xc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function As(){}As.prototype.g=function(o,l){return new $e(o,l)};function $e(o,l){ke.call(this),this.g=new Uc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(o?o["X-WebChannel-Client-Profile"]=l.sa:o={"X-WebChannel-Client-Profile":l.sa}),this.g.U=o,(o=l&&l.Qb)&&!w(o)&&(this.g.u=o),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!w(l)&&(this.g.G=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Ln(this)}y($e,ke),$e.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},$e.prototype.close=function(){eo(this.g)},$e.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=$i(o),o=d);l.i.push(new Ip(l.Ya++,o)),l.I==3&&Is(l)},$e.prototype.N=function(){this.g.l=null,delete this.j,eo(this.g),delete this.g,$e.Z.N.call(this)};function Jc(o){Bi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const d in l){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}y(Jc,Bi);function Zc(){zi.call(this),this.status=1}y(Zc,zi);function Ln(o){this.g=o}y(Ln,Xc),Ln.prototype.ra=function(){De(this.g,"a")},Ln.prototype.qa=function(o){De(this.g,new Jc(o))},Ln.prototype.pa=function(o){De(this.g,new Zc)},Ln.prototype.oa=function(){De(this.g,"b")},As.prototype.createWebChannel=As.prototype.g,$e.prototype.send=$e.prototype.o,$e.prototype.open=$e.prototype.m,$e.prototype.close=$e.prototype.close,od=function(){return new As},id=function(){return gs()},sd=an,$o={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ys.NO_ERROR=0,ys.TIMEOUT=8,ys.HTTP_ERROR=6,zs=ys,mc.COMPLETE="complete",rd=mc,uc.EventType=gr,gr.OPEN="a",gr.CLOSE="b",gr.ERROR="c",gr.MESSAGE="d",ke.prototype.listen=ke.prototype.J,Lr=uc,ue.prototype.listenOnce=ue.prototype.K,ue.prototype.getLastError=ue.prototype.Ha,ue.prototype.getLastErrorCode=ue.prototype.ya,ue.prototype.getStatus=ue.prototype.ca,ue.prototype.getResponseJson=ue.prototype.La,ue.prototype.getResponseText=ue.prototype.la,ue.prototype.send=ue.prototype.ea,ue.prototype.setWithCredentials=ue.prototype.Fa,nd=ue}).apply(typeof Rs<"u"?Rs:typeof self<"u"?self:typeof window<"u"?window:{});const Ul="@firebase/firestore",$l="4.9.2";/**
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
 */class Pe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pe.UNAUTHENTICATED=new Pe(null),Pe.GOOGLE_CREDENTIALS=new Pe("google-credentials-uid"),Pe.FIRST_PARTY=new Pe("first-party-uid"),Pe.MOCK_USER=new Pe("mock-user");/**
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
 */let ar="12.3.0";/**
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
 */const vn=new vi("@firebase/firestore");function Fn(){return vn.logLevel}function O(n,...e){if(vn.logLevel<=X.DEBUG){const t=e.map(wa);vn.debug(`Firestore (${ar}): ${n}`,...t)}}function St(n,...e){if(vn.logLevel<=X.ERROR){const t=e.map(wa);vn.error(`Firestore (${ar}): ${n}`,...t)}}function Jn(n,...e){if(vn.logLevel<=X.WARN){const t=e.map(wa);vn.warn(`Firestore (${ar}): ${n}`,...t)}}function wa(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function z(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,ad(n,r,t)}function ad(n,e,t){let r=`FIRESTORE (${ar}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw St(r),new Error(r)}function ne(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||ad(e,s,r)}function G(n,e){return n}/**
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends rt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Kt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class cd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class A0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Pe.UNAUTHENTICATED))}shutdown(){}}class x0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class S0{constructor(e){this.t=e,this.currentUser=Pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ne(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Kt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Kt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Kt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ne(typeof r.accessToken=="string",31837,{l:r}),new cd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ne(e===null||typeof e=="string",2055,{h:e}),new Pe(e)}}class k0{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Pe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class R0{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new k0(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Pe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Bl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class C0{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,We(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ne(this.o===void 0,3512);const r=i=>{i.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,O("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Bl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ne(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Bl(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function P0(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class va{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=P0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function J(n,e){return n<e?-1:n>e?1:0}function Bo(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return go(s)===go(i)?J(s,i):go(s)?1:-1}return J(n.length,e.length)}const N0=55296,V0=57343;function go(n){const e=n.charCodeAt(0);return e>=N0&&e<=V0}function Zn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const zl="__name__";class ot{constructor(e,t,r){t===void 0?t=0:t>e.length&&z(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&z(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ot.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ot?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=ot.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return J(e.length,t.length)}static compareSegments(e,t){const r=ot.isNumericId(e),s=ot.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?ot.extractNumericId(e).compare(ot.extractNumericId(t)):Bo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Gt.fromString(e.substring(4,e.length-2))}}class ae extends ot{construct(e,t,r){return new ae(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ae(t)}static emptyPath(){return new ae([])}}const D0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ae extends ot{construct(e,t,r){return new Ae(e,t,r)}static isValidIdentifier(e){return D0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===zl}static keyField(){return new Ae([zl])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new j(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new j(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new j(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new j(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ae(t)}static emptyPath(){return new Ae([])}}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(ae.fromString(e))}static fromName(e){return new $(ae.fromString(e).popFirst(5))}static empty(){return new $(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ae.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new ae(e.slice()))}}/**
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
 */function O0(n,e,t){if(!t)throw new j(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function L0(n,e,t,r){if(e===!0&&r===!0)throw new j(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ql(n){if(!$.isDocumentKey(n))throw new j(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ld(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ta(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":z(12329,{type:typeof n})}function Yr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ta(n);throw new j(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function fe(n,e){const t={typeString:n};return e&&(t.value=e),t}function ls(n,e){if(!ld(n))throw new j(N.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new j(N.INVALID_ARGUMENT,t);return!0}/**
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
 */const Hl=-62135596800,Wl=1e6;class oe{static now(){return oe.fromMillis(Date.now())}static fromDate(e){return oe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Wl);return new oe(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Hl)throw new j(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Wl}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:oe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ls(e,oe._jsonSchema))return new oe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Hl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}oe._jsonSchemaVersion="firestore/timestamp/1.0",oe._jsonSchema={type:fe("string",oe._jsonSchemaVersion),seconds:fe("number"),nanoseconds:fe("number")};/**
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
 */class W{static fromTimestamp(e){return new W(e)}static min(){return new W(new oe(0,0))}static max(){return new W(new oe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Xr=-1;function M0(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=W.fromTimestamp(r===1e9?new oe(t+1,0):new oe(t,r));return new Yt(s,$.empty(),e)}function j0(n){return new Yt(n.readTime,n.key,Xr)}class Yt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Yt(W.min(),$.empty(),Xr)}static max(){return new Yt(W.max(),$.empty(),Xr)}}function F0(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=$.comparator(n.documentKey,e.documentKey),t!==0?t:J(n.largestBatchId,e.largestBatchId))}/**
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
 */const U0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function cr(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==U0)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):R.reject(t)}static resolve(e){return new R((t,r)=>{t(e)})}static reject(e){return new R((t,r)=>{r(e)})}static waitFor(e){return new R((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=R.resolve(!1);for(const r of e)t=t.next(s=>s?R.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new R((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const h=u;t(e[h]).next(m=>{a[h]=m,++c,c===i&&r(a)},m=>s(m))}})}static doWhile(e,t){return new R((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function B0(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function lr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class bi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}bi.ce=-1;/**
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
 */const Ea=-1;function Ai(n){return n==null}function ii(n){return n===0&&1/n==-1/0}function z0(n){return typeof n=="number"&&Number.isInteger(n)&&!ii(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const ud="";function q0(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Gl(e)),e=H0(n.get(t),e);return Gl(e)}function H0(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case ud:t+="";break;default:t+=i}}return t}function Gl(n){return n+ud+""}/**
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
 */function Kl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function xn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function hd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ce{constructor(e,t){this.comparator=e,this.root=t||be.EMPTY}insert(e,t){return new ce(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,be.BLACK,null,null))}remove(e){return new ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,be.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Cs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Cs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Cs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Cs(this.root,e,this.comparator,!0)}}class Cs{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class be{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??be.RED,this.left=s??be.EMPTY,this.right=i??be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new be(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return be.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw z(27949);return e+(this.isRed()?0:1)}}be.EMPTY=null,be.RED=!0,be.BLACK=!1;be.EMPTY=new class{constructor(){this.size=0}get key(){throw z(57766)}get value(){throw z(16141)}get color(){throw z(16727)}get left(){throw z(29726)}get right(){throw z(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new be(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ye{constructor(e){this.comparator=e,this.data=new ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ql(this.data.getIterator())}getIteratorFrom(e){return new Ql(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ye)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ye(this.comparator);return t.data=e,t}}class Ql{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class et{constructor(e){this.fields=e,e.sort(Ae.comparator)}static empty(){return new et([])}unionWith(e){let t=new ye(Ae.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new et(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class dd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Se{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new dd("Invalid base64 string: "+i):i}}(e);return new Se(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Se(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Se.EMPTY_BYTE_STRING=new Se("");const W0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xt(n){if(ne(!!n,39018),typeof n=="string"){let e=0;const t=W0.exec(n);if(ne(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:he(n.seconds),nanos:he(n.nanos)}}function he(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Jt(n){return typeof n=="string"?Se.fromBase64String(n):Se.fromUint8Array(n)}/**
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
 */const fd="server_timestamp",pd="__type__",md="__previous_value__",gd="__local_write_time__";function Ia(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[pd])==null?void 0:r.stringValue)===fd}function xi(n){const e=n.mapValue.fields[md];return Ia(e)?xi(e):e}function Jr(n){const e=Xt(n.mapValue.fields[gd].timestampValue);return new oe(e.seconds,e.nanos)}/**
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
 */class G0{constructor(e,t,r,s,i,a,c,u,h,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=m}}const oi="(default)";class Zr{constructor(e,t){this.projectId=e,this.database=t||oi}static empty(){return new Zr("","")}get isDefaultDatabase(){return this.database===oi}isEqual(e){return e instanceof Zr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const yd="__type__",K0="__max__",Ps={mapValue:{}},_d="__vector__",ai="value";function Zt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ia(n)?4:Y0(n)?9007199254740991:Q0(n)?10:11:z(28295,{value:n})}function pt(n,e){if(n===e)return!0;const t=Zt(n);if(t!==Zt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Jr(n).isEqual(Jr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Xt(s.timestampValue),c=Xt(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Jt(s.bytesValue).isEqual(Jt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return he(s.geoPointValue.latitude)===he(i.geoPointValue.latitude)&&he(s.geoPointValue.longitude)===he(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return he(s.integerValue)===he(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=he(s.doubleValue),c=he(i.doubleValue);return a===c?ii(a)===ii(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Zn(n.arrayValue.values||[],e.arrayValue.values||[],pt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Kl(a)!==Kl(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!pt(a[u],c[u])))return!1;return!0}(n,e);default:return z(52216,{left:n})}}function es(n,e){return(n.values||[]).find(t=>pt(t,e))!==void 0}function er(n,e){if(n===e)return 0;const t=Zt(n),r=Zt(e);if(t!==r)return J(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return J(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=he(i.integerValue||i.doubleValue),u=he(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return Yl(n.timestampValue,e.timestampValue);case 4:return Yl(Jr(n),Jr(e));case 5:return Bo(n.stringValue,e.stringValue);case 6:return function(i,a){const c=Jt(i),u=Jt(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),u=a.split("/");for(let h=0;h<c.length&&h<u.length;h++){const m=J(c[h],u[h]);if(m!==0)return m}return J(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=J(he(i.latitude),he(a.latitude));return c!==0?c:J(he(i.longitude),he(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Xl(n.arrayValue,e.arrayValue);case 10:return function(i,a){var I,k,S,P;const c=i.fields||{},u=a.fields||{},h=(I=c[ai])==null?void 0:I.arrayValue,m=(k=u[ai])==null?void 0:k.arrayValue,y=J(((S=h==null?void 0:h.values)==null?void 0:S.length)||0,((P=m==null?void 0:m.values)==null?void 0:P.length)||0);return y!==0?y:Xl(h,m)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Ps.mapValue&&a===Ps.mapValue)return 0;if(i===Ps.mapValue)return 1;if(a===Ps.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),h=a.fields||{},m=Object.keys(h);u.sort(),m.sort();for(let y=0;y<u.length&&y<m.length;++y){const I=Bo(u[y],m[y]);if(I!==0)return I;const k=er(c[u[y]],h[m[y]]);if(k!==0)return k}return J(u.length,m.length)}(n.mapValue,e.mapValue);default:throw z(23264,{he:t})}}function Yl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return J(n,e);const t=Xt(n),r=Xt(e),s=J(t.seconds,r.seconds);return s!==0?s:J(t.nanos,r.nanos)}function Xl(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=er(t[s],r[s]);if(i)return i}return J(t.length,r.length)}function tr(n){return zo(n)}function zo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Xt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Jt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return $.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=zo(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${zo(t.fields[a])}`;return s+"}"}(n.mapValue):z(61005,{value:n})}function qs(n){switch(Zt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=xi(n);return e?16+qs(e):16;case 5:return 2*n.stringValue.length;case 6:return Jt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+qs(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return xn(r.fields,(i,a)=>{s+=i.length+qs(a)}),s}(n.mapValue);default:throw z(13486,{value:n})}}function qo(n){return!!n&&"integerValue"in n}function ba(n){return!!n&&"arrayValue"in n}function Jl(n){return!!n&&"nullValue"in n}function Zl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Hs(n){return!!n&&"mapValue"in n}function Q0(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[yd])==null?void 0:r.stringValue)===_d}function Br(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return xn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Br(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Br(n.arrayValue.values[t]);return e}return{...n}}function Y0(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===K0}/**
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
 */class Ge{constructor(e){this.value=e}static empty(){return new Ge({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Hs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Br(t)}setAll(e){let t=Ae.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=Br(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Hs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return pt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Hs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){xn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ge(Br(this.value))}}function wd(n){const e=[];return xn(n.fields,(t,r)=>{const s=new Ae([t]);if(Hs(r)){const i=wd(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new et(e)}/**
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
 */class Ne{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ne(e,0,W.min(),W.min(),W.min(),Ge.empty(),0)}static newFoundDocument(e,t,r,s){return new Ne(e,1,t,W.min(),r,s,0)}static newNoDocument(e,t){return new Ne(e,2,t,W.min(),W.min(),Ge.empty(),0)}static newUnknownDocument(e,t){return new Ne(e,3,t,W.min(),W.min(),Ge.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ge.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ge.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ne&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ne(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ci{constructor(e,t){this.position=e,this.inclusive=t}}function eu(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=$.comparator($.fromName(a.referenceValue),t.key):r=er(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function tu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!pt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class li{constructor(e,t="asc"){this.field=e,this.dir=t}}function X0(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class vd{}class ge extends vd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Z0(e,t,r):t==="array-contains"?new nw(e,r):t==="in"?new rw(e,r):t==="not-in"?new sw(e,r):t==="array-contains-any"?new iw(e,r):new ge(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new ew(e,r):new tw(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(er(t,this.value)):t!==null&&Zt(this.value)===Zt(t)&&this.matchesComparison(er(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mt extends vd{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new mt(e,t)}matches(e){return Td(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Td(n){return n.op==="and"}function Ed(n){return J0(n)&&Td(n)}function J0(n){for(const e of n.filters)if(e instanceof mt)return!1;return!0}function Ho(n){if(n instanceof ge)return n.field.canonicalString()+n.op.toString()+tr(n.value);if(Ed(n))return n.filters.map(e=>Ho(e)).join(",");{const e=n.filters.map(t=>Ho(t)).join(",");return`${n.op}(${e})`}}function Id(n,e){return n instanceof ge?function(r,s){return s instanceof ge&&r.op===s.op&&r.field.isEqual(s.field)&&pt(r.value,s.value)}(n,e):n instanceof mt?function(r,s){return s instanceof mt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Id(a,s.filters[c]),!0):!1}(n,e):void z(19439)}function bd(n){return n instanceof ge?function(t){return`${t.field.canonicalString()} ${t.op} ${tr(t.value)}`}(n):n instanceof mt?function(t){return t.op.toString()+" {"+t.getFilters().map(bd).join(" ,")+"}"}(n):"Filter"}class Z0 extends ge{constructor(e,t,r){super(e,t,r),this.key=$.fromName(r.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class ew extends ge{constructor(e,t){super(e,"in",t),this.keys=Ad("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class tw extends ge{constructor(e,t){super(e,"not-in",t),this.keys=Ad("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ad(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>$.fromName(r.referenceValue))}class nw extends ge{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ba(t)&&es(t.arrayValue,this.value)}}class rw extends ge{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&es(this.value.arrayValue,t)}}class sw extends ge{constructor(e,t){super(e,"not-in",t)}matches(e){if(es(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!es(this.value.arrayValue,t)}}class iw extends ge{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ba(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>es(this.value.arrayValue,r))}}/**
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
 */class ow{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function nu(n,e=null,t=[],r=[],s=null,i=null,a=null){return new ow(n,e,t,r,s,i,a)}function Aa(n){const e=G(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ho(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ai(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>tr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>tr(r)).join(",")),e.Te=t}return e.Te}function xa(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!X0(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Id(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!tu(n.startAt,e.startAt)&&tu(n.endAt,e.endAt)}function Wo(n){return $.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Si{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function aw(n,e,t,r,s,i,a,c){return new Si(n,e,t,r,s,i,a,c)}function Sa(n){return new Si(n)}function ru(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function cw(n){return n.collectionGroup!==null}function zr(n){const e=G(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ye(Ae.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new li(i,r))}),t.has(Ae.keyField().canonicalString())||e.Ie.push(new li(Ae.keyField(),r))}return e.Ie}function lt(n){const e=G(n);return e.Ee||(e.Ee=lw(e,zr(n))),e.Ee}function lw(n,e){if(n.limitType==="F")return nu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new li(s.field,i)});const t=n.endAt?new ci(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ci(n.startAt.position,n.startAt.inclusive):null;return nu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Go(n,e,t){return new Si(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ki(n,e){return xa(lt(n),lt(e))&&n.limitType===e.limitType}function xd(n){return`${Aa(lt(n))}|lt:${n.limitType}`}function Un(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>bd(s)).join(", ")}]`),Ai(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>tr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>tr(s)).join(",")),`Target(${r})`}(lt(n))}; limitType=${n.limitType})`}function Ri(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):$.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of zr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,u){const h=eu(a,c,u);return a.inclusive?h<=0:h<0}(r.startAt,zr(r),s)||r.endAt&&!function(a,c,u){const h=eu(a,c,u);return a.inclusive?h>=0:h>0}(r.endAt,zr(r),s))}(n,e)}function uw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Sd(n){return(e,t)=>{let r=!1;for(const s of zr(n)){const i=hw(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function hw(n,e,t){const r=n.field.isKeyField()?$.comparator(e.key,t.key):function(i,a,c){const u=a.data.field(i),h=c.data.field(i);return u!==null&&h!==null?er(u,h):z(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return z(19790,{direction:n.dir})}}/**
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
 */class Sn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){xn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return hd(this.inner)}size(){return this.innerSize}}/**
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
 */const dw=new ce($.comparator);function kt(){return dw}const kd=new ce($.comparator);function Mr(...n){let e=kd;for(const t of n)e=e.insert(t.key,t);return e}function Rd(n){let e=kd;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function pn(){return qr()}function Cd(){return qr()}function qr(){return new Sn(n=>n.toString(),(n,e)=>n.isEqual(e))}const fw=new ce($.comparator),pw=new ye($.comparator);function Z(...n){let e=pw;for(const t of n)e=e.add(t);return e}const mw=new ye(J);function gw(){return mw}/**
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
 */function ka(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ii(e)?"-0":e}}function Pd(n){return{integerValue:""+n}}function yw(n,e){return z0(e)?Pd(e):ka(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Ci{constructor(){this._=void 0}}function _w(n,e,t){return n instanceof ui?function(s,i){const a={fields:{[pd]:{stringValue:fd},[gd]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ia(i)&&(i=xi(i)),i&&(a.fields[md]=i),{mapValue:a}}(t,e):n instanceof ts?Vd(n,e):n instanceof ns?Dd(n,e):function(s,i){const a=Nd(s,i),c=su(a)+su(s.Ae);return qo(a)&&qo(s.Ae)?Pd(c):ka(s.serializer,c)}(n,e)}function ww(n,e,t){return n instanceof ts?Vd(n,e):n instanceof ns?Dd(n,e):t}function Nd(n,e){return n instanceof hi?function(r){return qo(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ui extends Ci{}class ts extends Ci{constructor(e){super(),this.elements=e}}function Vd(n,e){const t=Od(e);for(const r of n.elements)t.some(s=>pt(s,r))||t.push(r);return{arrayValue:{values:t}}}class ns extends Ci{constructor(e){super(),this.elements=e}}function Dd(n,e){let t=Od(e);for(const r of n.elements)t=t.filter(s=>!pt(s,r));return{arrayValue:{values:t}}}class hi extends Ci{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function su(n){return he(n.integerValue||n.doubleValue)}function Od(n){return ba(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function vw(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof ts&&s instanceof ts||r instanceof ns&&s instanceof ns?Zn(r.elements,s.elements,pt):r instanceof hi&&s instanceof hi?pt(r.Ae,s.Ae):r instanceof ui&&s instanceof ui}(n.transform,e.transform)}class Tw{constructor(e,t){this.version=e,this.transformResults=t}}class bt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new bt}static exists(e){return new bt(void 0,e)}static updateTime(e){return new bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ws(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Pi{}function Ld(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new jd(n.key,bt.none()):new us(n.key,n.data,bt.none());{const t=n.data,r=Ge.empty();let s=new ye(Ae.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new kn(n.key,r,new et(s.toArray()),bt.none())}}function Ew(n,e,t){n instanceof us?function(s,i,a){const c=s.value.clone(),u=ou(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof kn?function(s,i,a){if(!Ws(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=ou(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Md(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Hr(n,e,t,r){return n instanceof us?function(i,a,c,u){if(!Ws(i.precondition,a))return c;const h=i.value.clone(),m=au(i.fieldTransforms,u,a);return h.setAll(m),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof kn?function(i,a,c,u){if(!Ws(i.precondition,a))return c;const h=au(i.fieldTransforms,u,a),m=a.data;return m.setAll(Md(i)),m.setAll(h),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(y=>y.field))}(n,e,t,r):function(i,a,c){return Ws(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function Iw(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Nd(r.transform,s||null);i!=null&&(t===null&&(t=Ge.empty()),t.set(r.field,i))}return t||null}function iu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Zn(r,s,(i,a)=>vw(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class us extends Pi{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class kn extends Pi{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Md(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function ou(n,e,t){const r=new Map;ne(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,ww(a,c,t[s]))}return r}function au(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,_w(i,a,e))}return r}class jd extends Pi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bw extends Pi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Aw{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Ew(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Hr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Hr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Cd();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=Ld(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Z())}isEqual(e){return this.batchId===e.batchId&&Zn(this.mutations,e.mutations,(t,r)=>iu(t,r))&&Zn(this.baseMutations,e.baseMutations,(t,r)=>iu(t,r))}}class Ra{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){ne(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return fw}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Ra(e,t,r,s)}}/**
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
 */class xw{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Sw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var de,ee;function kw(n){switch(n){case N.OK:return z(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return z(15467,{code:n})}}function Fd(n){if(n===void 0)return St("GRPC error has no .code"),N.UNKNOWN;switch(n){case de.OK:return N.OK;case de.CANCELLED:return N.CANCELLED;case de.UNKNOWN:return N.UNKNOWN;case de.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case de.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case de.INTERNAL:return N.INTERNAL;case de.UNAVAILABLE:return N.UNAVAILABLE;case de.UNAUTHENTICATED:return N.UNAUTHENTICATED;case de.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case de.NOT_FOUND:return N.NOT_FOUND;case de.ALREADY_EXISTS:return N.ALREADY_EXISTS;case de.PERMISSION_DENIED:return N.PERMISSION_DENIED;case de.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case de.ABORTED:return N.ABORTED;case de.OUT_OF_RANGE:return N.OUT_OF_RANGE;case de.UNIMPLEMENTED:return N.UNIMPLEMENTED;case de.DATA_LOSS:return N.DATA_LOSS;default:return z(39323,{code:n})}}(ee=de||(de={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Rw(){return new TextEncoder}/**
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
 */const Cw=new Gt([4294967295,4294967295],0);function cu(n){const e=Rw().encode(n),t=new td;return t.update(e),new Uint8Array(t.digest())}function lu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Gt([t,r],0),new Gt([s,i],0)]}class Ca{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new jr(`Invalid padding: ${t}`);if(r<0)throw new jr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new jr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new jr(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Gt.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Gt.fromNumber(r)));return s.compare(Cw)===1&&(s=new Gt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=cu(e),[r,s]=lu(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Ca(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.ge===0)return;const t=cu(e),[r,s]=lu(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class jr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ni{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,hs.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ni(W.min(),s,new ce(J),kt(),Z())}}class hs{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new hs(r,t,Z(),Z(),Z())}}/**
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
 */class Gs{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Ud{constructor(e,t){this.targetId=e,this.Ce=t}}class $d{constructor(e,t,r=Se.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class uu{constructor(){this.ve=0,this.Fe=hu(),this.Me=Se.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Z(),t=Z(),r=Z();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:z(38017,{changeType:i})}}),new hs(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=hu()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ne(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Pw{constructor(e){this.Ge=e,this.ze=new Map,this.je=kt(),this.Je=Ns(),this.He=Ns(),this.Ye=new ce(J)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:z(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Wo(i))if(r===0){const a=new $(i.path);this.et(t,a,Ne.newNoDocument(a,W.min()))}else ne(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const c=this.ut(e),u=c?this.ct(c,e,a):1;if(u!==0){this.it(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Jt(r).toUint8Array()}catch(u){if(u instanceof dd)return Jn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Ca(a,s,i)}catch(u){return Jn(u instanceof jr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const c=this.ot(a);if(c){if(i.current&&Wo(c.target)){const u=new $(c.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,Ne.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.qe())}});let r=Z();this.He.forEach((i,a)=>{let c=!0;a.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new Ni(e,t,this.Ye,this.je,r);return this.je=kt(),this.Je=Ns(),this.He=Ns(),this.Ye=new ce(J),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new uu,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new ye(J),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new ye(J),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new uu),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ns(){return new ce($.comparator)}function hu(){return new ce($.comparator)}const Nw={asc:"ASCENDING",desc:"DESCENDING"},Vw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Dw={and:"AND",or:"OR"};class Ow{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ko(n,e){return n.useProto3Json||Ai(e)?e:{value:e}}function di(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Bd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Lw(n,e){return di(n,e.toTimestamp())}function ut(n){return ne(!!n,49232),W.fromTimestamp(function(t){const r=Xt(t);return new oe(r.seconds,r.nanos)}(n))}function Pa(n,e){return Qo(n,e).canonicalString()}function Qo(n,e){const t=function(s){return new ae(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function zd(n){const e=ae.fromString(n);return ne(Kd(e),10190,{key:e.toString()}),e}function Yo(n,e){return Pa(n.databaseId,e.path)}function yo(n,e){const t=zd(e);if(t.get(1)!==n.databaseId.projectId)throw new j(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new $(Hd(t))}function qd(n,e){return Pa(n.databaseId,e)}function Mw(n){const e=zd(n);return e.length===4?ae.emptyPath():Hd(e)}function Xo(n){return new ae(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Hd(n){return ne(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function du(n,e,t){return{name:Yo(n,e),fields:t.value.mapValue.fields}}function jw(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:z(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,m){return h.useProto3Json?(ne(m===void 0||typeof m=="string",58123),Se.fromBase64String(m||"")):(ne(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),Se.fromUint8Array(m||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const m=h.code===void 0?N.UNKNOWN:Fd(h.code);return new j(m,h.message||"")}(a);t=new $d(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=yo(n,r.document.name),i=ut(r.document.updateTime),a=r.document.createTime?ut(r.document.createTime):W.min(),c=new Ge({mapValue:{fields:r.document.fields}}),u=Ne.newFoundDocument(s,i,a,c),h=r.targetIds||[],m=r.removedTargetIds||[];t=new Gs(h,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=yo(n,r.document),i=r.readTime?ut(r.readTime):W.min(),a=Ne.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Gs([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=yo(n,r.document),i=r.removedTargetIds||[];t=new Gs([],i,s,null)}else{if(!("filter"in e))return z(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Sw(s,i),c=r.targetId;t=new Ud(c,a)}}return t}function Fw(n,e){let t;if(e instanceof us)t={update:du(n,e.key,e.value)};else if(e instanceof jd)t={delete:Yo(n,e.key)};else if(e instanceof kn)t={update:du(n,e.key,e.data),updateMask:Kw(e.fieldMask)};else{if(!(e instanceof bw))return z(16599,{Vt:e.type});t={verify:Yo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof ui)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ts)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ns)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof hi)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw z(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Lw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:z(27497)}(n,e.precondition)),t}function Uw(n,e){return n&&n.length>0?(ne(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?ut(s.updateTime):ut(i);return a.isEqual(W.min())&&(a=ut(i)),new Tw(a,s.transformResults||[])}(t,e))):[]}function $w(n,e){return{documents:[qd(n,e.path)]}}function Bw(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=qd(n,s);const i=function(h){if(h.length!==0)return Gd(mt.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(m=>function(I){return{field:$n(I.field),direction:Hw(I.dir)}}(m))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Ko(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:t,parent:s}}function zw(n){let e=Mw(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){ne(r===1,65062);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=function(y){const I=Wd(y);return I instanceof mt&&Ed(I)?I.getFilters():[I]}(t.where));let a=[];t.orderBy&&(a=function(y){return y.map(I=>function(S){return new li(Bn(S.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(I))}(t.orderBy));let c=null;t.limit&&(c=function(y){let I;return I=typeof y=="object"?y.value:y,Ai(I)?null:I}(t.limit));let u=null;t.startAt&&(u=function(y){const I=!!y.before,k=y.values||[];return new ci(k,I)}(t.startAt));let h=null;return t.endAt&&(h=function(y){const I=!y.before,k=y.values||[];return new ci(k,I)}(t.endAt)),aw(e,s,a,i,c,"F",u,h)}function qw(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Wd(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Bn(t.unaryFilter.field);return ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Bn(t.unaryFilter.field);return ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Bn(t.unaryFilter.field);return ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Bn(t.unaryFilter.field);return ge.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return z(61313);default:return z(60726)}}(n):n.fieldFilter!==void 0?function(t){return ge.create(Bn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return z(58110);default:return z(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return mt.create(t.compositeFilter.filters.map(r=>Wd(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return z(1026)}}(t.compositeFilter.op))}(n):z(30097,{filter:n})}function Hw(n){return Nw[n]}function Ww(n){return Vw[n]}function Gw(n){return Dw[n]}function $n(n){return{fieldPath:n.canonicalString()}}function Bn(n){return Ae.fromServerFormat(n.fieldPath)}function Gd(n){return n instanceof ge?function(t){if(t.op==="=="){if(Zl(t.value))return{unaryFilter:{field:$n(t.field),op:"IS_NAN"}};if(Jl(t.value))return{unaryFilter:{field:$n(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Zl(t.value))return{unaryFilter:{field:$n(t.field),op:"IS_NOT_NAN"}};if(Jl(t.value))return{unaryFilter:{field:$n(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$n(t.field),op:Ww(t.op),value:t.value}}}(n):n instanceof mt?function(t){const r=t.getFilters().map(s=>Gd(s));return r.length===1?r[0]:{compositeFilter:{op:Gw(t.op),filters:r}}}(n):z(54877,{filter:n})}function Kw(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Kd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class qt{constructor(e,t,r,s,i=W.min(),a=W.min(),c=Se.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new qt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Qw{constructor(e){this.yt=e}}function Yw(n){const e=zw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Go(e,e.limit,"L"):e}/**
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
 */class Xw{constructor(){this.Cn=new Jw}addToCollectionParentIndex(e,t){return this.Cn.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(Yt.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(Yt.min())}updateCollectionGroup(e,t,r){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class Jw{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ye(ae.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ye(ae.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const fu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Qd=41943040;class je{static withCacheSize(e){return new je(e,je.DEFAULT_COLLECTION_PERCENTILE,je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */je.DEFAULT_COLLECTION_PERCENTILE=10,je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,je.DEFAULT=new je(Qd,je.DEFAULT_COLLECTION_PERCENTILE,je.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),je.DISABLED=new je(-1,0,0);/**
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
 */class nr{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new nr(0)}static cr(){return new nr(-1)}}/**
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
 */const pu="LruGarbageCollector",Zw=1048576;function mu([n,e],[t,r]){const s=J(n,t);return s===0?J(e,r):s}class ev{constructor(e){this.Ir=e,this.buffer=new ye(mu),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();mu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class tv{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){O(pu,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){lr(t)?O(pu,"Ignoring IndexedDB error during garbage collection: ",t):await cr(t)}await this.Vr(3e5)})}}class nv{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return R.resolve(bi.ce);const r=new ev(t);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(fu)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),fu):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,i,a,c,u,h;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(y=>(y>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),s=this.params.maximumSequenceNumbersToCollect):s=y,a=Date.now(),this.nthSequenceNumber(e,s))).next(y=>(r=y,c=Date.now(),this.removeTargets(e,r,t))).next(y=>(i=y,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(y=>(h=Date.now(),Fn()<=X.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${y} documents in `+(h-u)+`ms
Total Duration: ${h-m}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:y})))}}function rv(n,e){return new nv(n,e)}/**
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
 */class sv{constructor(){this.changes=new Sn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ne.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?R.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class iv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class ov{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Hr(r.mutation,s,et.empty(),oe.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Z()){const s=pn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Mr();return i.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=pn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Z()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=kt();const a=qr(),c=function(){return qr()}();return t.forEach((u,h)=>{const m=r.get(h.key);s.has(h.key)&&(m===void 0||m.mutation instanceof kn)?i=i.insert(h.key,h):m!==void 0?(a.set(h.key,m.mutation.getFieldMask()),Hr(m.mutation,h,m.mutation.getFieldMask(),oe.now())):a.set(h.key,et.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,m)=>a.set(h,m)),t.forEach((h,m)=>c.set(h,new iv(m,a.get(h)??null))),c))}recalculateAndSaveOverlays(e,t){const r=qr();let s=new ce((a,c)=>a-c),i=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let m=r.get(u)||et.empty();m=c.applyToLocalView(h,m),r.set(u,m);const y=(s.get(c.batchId)||Z()).add(u);s=s.insert(c.batchId,y)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,m=u.value,y=Cd();m.forEach(I=>{if(!i.has(I)){const k=Ld(t.get(I),r.get(I));k!==null&&y.set(I,k),i=i.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,y))}return R.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return $.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):cw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):R.resolve(pn());let c=Xr,u=i;return a.next(h=>R.forEach(h,(m,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),i.get(m)?R.resolve():this.remoteDocumentCache.getEntry(e,m).next(I=>{u=u.insert(m,I)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,Z())).next(m=>({batchId:c,changes:Rd(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next(r=>{let s=Mr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Mr();return this.indexManager.getCollectionParents(e,i).next(c=>R.forEach(c,u=>{const h=function(y,I){return new Si(I,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(m=>{m.forEach((y,I)=>{a=a.insert(y,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,h)=>{const m=h.getKey();a.get(m)===null&&(a=a.insert(m,Ne.newInvalidDocument(m)))});let c=Mr();return a.forEach((u,h)=>{const m=i.get(u);m!==void 0&&Hr(m.mutation,h,et.empty(),oe.now()),Ri(t,h)&&(c=c.insert(u,h))}),c})}}/**
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
 */class av{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return R.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:ut(s.createTime)}}(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(s){return{name:s.name,query:Yw(s.bundledQuery),readTime:ut(s.readTime)}}(t)),R.resolve()}}/**
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
 */class cv{constructor(){this.overlays=new ce($.comparator),this.qr=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const r=pn();return R.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),R.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),R.resolve()}getOverlaysForCollection(e,t,r){const s=pn(),i=t.length+1,a=new $(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return R.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ce((h,m)=>h-m);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let m=i.get(h.largestBatchId);m===null&&(m=pn(),i=i.insert(h.largestBatchId,m)),m.set(h.getKey(),h)}}const c=pn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,m)=>c.set(h,m)),!(c.size()>=s)););return R.resolve(c)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new xw(t,r));let i=this.qr.get(t);i===void 0&&(i=Z(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class lv{constructor(){this.sessionToken=Se.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
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
 */class Na{constructor(){this.Qr=new ye(Ee.$r),this.Ur=new ye(Ee.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new Ee(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Gr(new Ee(e,t))}zr(e,t){e.forEach(r=>this.removeReference(r,t))}jr(e){const t=new $(new ae([])),r=new Ee(t,e),s=new Ee(t,e+1),i=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),i.push(a.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new $(new ae([])),r=new Ee(t,e),s=new Ee(t,e+1);let i=Z();return this.Ur.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Ee(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ee{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return $.comparator(e.key,t.key)||J(e.Yr,t.Yr)}static Kr(e,t){return J(e.Yr,t.Yr)||$.comparator(e.key,t.key)}}/**
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
 */class uv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new ye(Ee.$r)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Aw(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Zr=this.Zr.add(new Ee(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return R.resolve(a)}lookupMutationBatch(e,t){return R.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?Ea:this.tr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ee(t,0),s=new Ee(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],a=>{const c=this.Xr(a.Yr);i.push(c)}),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ye(J);return t.forEach(s=>{const i=new Ee(s,0),a=new Ee(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],c=>{r=r.add(c.Yr)})}),R.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;$.isDocumentKey(i)||(i=i.child(""));const a=new Ee(new $(i),0);let c=new ye(J);return this.Zr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(u.Yr)),!0)},a),R.resolve(this.ti(c))}ti(e){const t=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ne(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return R.forEach(t.mutations,s=>{const i=new Ee(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){const r=new Ee(t,0),s=this.Zr.firstAfterOrEqual(r);return R.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class hv{constructor(e){this.ri=e,this.docs=function(){return new ce($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return R.resolve(r?r.document.mutableCopy():Ne.newInvalidDocument(t))}getEntries(e,t){let r=kt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ne.newInvalidDocument(s))}),R.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=kt();const a=t.path,c=new $(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:m}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||F0(j0(m),r)<=0||(s.has(m.key)||Ri(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,t,r,s){z(9500)}ii(e,t){return R.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new dv(this)}getSize(e){return R.resolve(this.size)}}class dv extends sv{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),R.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class fv{constructor(e){this.persistence=e,this.si=new Sn(t=>Aa(t),xa),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.oi=0,this._i=new Na,this.targetCount=0,this.ai=nr.ur()}forEachTarget(e,t){return this.si.forEach((r,s)=>t(s)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),R.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new nr(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.Pr(t),R.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.si.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),R.waitFor(i).next(()=>s)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return R.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),R.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),R.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return R.resolve(r)}containsKey(e,t){return R.resolve(this._i.containsKey(t))}}/**
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
 */class Yd{constructor(e,t){this.ui={},this.overlays={},this.ci=new bi(0),this.li=!1,this.li=!0,this.hi=new lv,this.referenceDelegate=e(this),this.Pi=new fv(this),this.indexManager=new Xw,this.remoteDocumentCache=function(s){return new hv(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new Qw(t),this.Ii=new av(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new cv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new uv(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){O("MemoryPersistence","Starting transaction:",e);const s=new pv(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,t){return R.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class pv extends $0{constructor(e){super(),this.currentSequenceNumber=e}}class Va{constructor(e){this.persistence=e,this.Ri=new Na,this.Vi=null}static mi(e){return new Va(e)}get fi(){if(this.Vi)return this.Vi;throw z(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),R.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),R.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.fi,r=>{const s=$.fromPath(r);return this.gi(e,s).next(i=>{i||t.removeEntry(s,W.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return R.or([()=>R.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class fi{constructor(e,t){this.persistence=e,this.pi=new Sn(r=>q0(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=rv(this,t)}static mi(e,t){return new fi(e,t)}Ei(){}di(e){return R.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}pr(e,t){return R.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?R.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,a=>this.br(e,a,t).next(c=>{c||(r++,i.removeEntry(a,W.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),R.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),R.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),R.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),R.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=qs(e.data.value)),t}br(e,t,r){return R.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return R.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Da{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=Z(),s=Z();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Da(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class mv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class gv{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return jm()?8:B0(Ve())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ys(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ws(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new mv;return this.Ss(e,t,a).next(c=>{if(i.result=c,this.Vs)return this.bs(e,t,a,c.size)})}).next(()=>i.result)}bs(e,t,r,s){return r.documentReadCount<this.fs?(Fn()<=X.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",Un(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),R.resolve()):(Fn()<=X.DEBUG&&O("QueryEngine","Query:",Un(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Fn()<=X.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",Un(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,lt(t))):R.resolve())}ys(e,t){if(ru(t))return R.resolve(null);let r=lt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Go(t,null,"F"),r=lt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=Z(...i);return this.ps.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ds(t,c);return this.Cs(t,h,a,u.readTime)?this.ys(e,Go(t,null,"F")):this.vs(e,h,t,u)}))})))}ws(e,t,r,s){return ru(t)||s.isEqual(W.min())?R.resolve(null):this.ps.getDocuments(e,r).next(i=>{const a=this.Ds(t,i);return this.Cs(t,a,r,s)?R.resolve(null):(Fn()<=X.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Un(t)),this.vs(e,a,t,M0(s,Xr)).next(c=>c))})}Ds(e,t){let r=new ye(Sd(e));return t.forEach((s,i)=>{Ri(e,i)&&(r=r.add(i))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return Fn()<=X.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Un(t)),this.ps.getDocumentsMatchingQuery(e,t,Yt.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const Oa="LocalStore",yv=3e8;class _v{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new ce(J),this.xs=new Sn(i=>Aa(i),xa),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ov(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function wv(n,e,t,r){return new _v(n,e,t,r)}async function Xd(n,e){const t=G(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let u=Z();for(const h of s){a.push(h.batchId);for(const m of h.mutations)u=u.add(m.key)}for(const h of i){c.push(h.batchId);for(const m of h.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(r,u).next(h=>({Ls:h,removedBatchIds:a,addedBatchIds:c}))})})}function vv(n,e){const t=G(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return function(c,u,h,m){const y=h.batch,I=y.keys();let k=R.resolve();return I.forEach(S=>{k=k.next(()=>m.getEntry(u,S)).next(P=>{const C=h.docVersions.get(S);ne(C!==null,48541),P.version.compareTo(C)<0&&(y.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),m.addEntry(P)))})}),k.next(()=>c.mutationQueue.removeMutationBatch(u,y))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=Z();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Jd(n){const e=G(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function Tv(n,e){const t=G(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const c=[];e.targetChanges.forEach((m,y)=>{const I=s.get(y);if(!I)return;c.push(t.Pi.removeMatchingKeys(i,m.removedDocuments,y).next(()=>t.Pi.addMatchingKeys(i,m.addedDocuments,y)));let k=I.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(y)!==null?k=k.withResumeToken(Se.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):m.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(m.resumeToken,r)),s=s.insert(y,k),function(P,C,F){return P.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=yv?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(I,k,m)&&c.push(t.Pi.updateTargetData(i,k))});let u=kt(),h=Z();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))}),c.push(Ev(i,a,e.documentUpdates).next(m=>{u=m.ks,h=m.qs})),!r.isEqual(W.min())){const m=t.Pi.getLastRemoteSnapshotVersion(i).next(y=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(m)}return R.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(t.Ms=s,i))}function Ev(n,e,t){let r=Z(),s=Z();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=kt();return t.forEach((c,u)=>{const h=i.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(W.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):O(Oa,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{ks:a,qs:s}})}function Iv(n,e){const t=G(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Ea),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function bv(n,e){const t=G(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Pi.getTargetData(r,e).next(i=>i?(s=i,R.resolve(s)):t.Pi.allocateTargetId(r).next(a=>(s=new qt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r})}async function Jo(n,e,t){const r=G(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!lr(a))throw a;O(Oa,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function gu(n,e,t){const r=G(n);let s=W.min(),i=Z();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,m){const y=G(u),I=y.xs.get(m);return I!==void 0?R.resolve(y.Ms.get(I)):y.Pi.getTargetData(h,m)}(r,a,lt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,c.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:W.min(),t?i:Z())).next(c=>(Av(r,uw(e),c),{documents:c,Qs:i})))}function Av(n,e,t){let r=n.Os.get(e)||W.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Os.set(e,r)}class yu{constructor(){this.activeTargetIds=gw()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xv{constructor(){this.Mo=new yu,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new yu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Sv{Oo(e){}shutdown(){}}/**
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
 */const _u="ConnectivityMonitor";class wu{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){O(_u,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){O(_u,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Vs=null;function Zo(){return Vs===null?Vs=function(){return 268435456+Math.round(2147483648*Math.random())}():Vs++,"0x"+Vs.toString(16)}/**
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
 */const _o="RestConnection",kv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Rv{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===oi?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,i){const a=Zo(),c=this.zo(e,t.toUriEncodedString());O(_o,`Sending RPC '${e}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:h}=new URL(c),m=sr(h);return this.Jo(e,c,u,r,m).then(y=>(O(_o,`Received RPC '${e}' ${a}: `,y),y),y=>{throw Jn(_o,`RPC '${e}' ${a} failed with error: `,y,"url: ",c,"request:",r),y})}Ho(e,t,r,s,i,a){return this.Go(e,t,r,s,i)}jo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ar}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,t){const r=kv[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
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
 */class Cv{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Re="WebChannelConnection";class Pv extends Rv{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const a=Zo();return new Promise((c,u)=>{const h=new nd;h.setWithCredentials(!0),h.listenOnce(rd.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case zs.NO_ERROR:const y=h.getResponseJson();O(Re,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(y)),c(y);break;case zs.TIMEOUT:O(Re,`RPC '${e}' ${a} timed out`),u(new j(N.DEADLINE_EXCEEDED,"Request time out"));break;case zs.HTTP_ERROR:const I=h.getStatus();if(O(Re,`RPC '${e}' ${a} failed with status:`,I,"response text:",h.getResponseText()),I>0){let k=h.getResponseJson();Array.isArray(k)&&(k=k[0]);const S=k==null?void 0:k.error;if(S&&S.status&&S.message){const P=function(F){const H=F.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(H)>=0?H:N.UNKNOWN}(S.status);u(new j(P,S.message))}else u(new j(N.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new j(N.UNAVAILABLE,"Connection failed."));break;default:z(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{O(Re,`RPC '${e}' ${a} completed.`)}});const m=JSON.stringify(s);O(Re,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",m,r,15)})}T_(e,t,r){const s=Zo(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=od(),c=id(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const m=i.join("");O(Re,`Creating RPC '${e}' stream ${s}: ${m}`,u);const y=a.createWebChannel(m,u);this.I_(y);let I=!1,k=!1;const S=new Cv({Yo:C=>{k?O(Re,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(I||(O(Re,`Opening RPC '${e}' stream ${s} transport.`),y.open(),I=!0),O(Re,`RPC '${e}' stream ${s} sending:`,C),y.send(C))},Zo:()=>y.close()}),P=(C,F,H)=>{C.listen(F,D=>{try{H(D)}catch(K){setTimeout(()=>{throw K},0)}})};return P(y,Lr.EventType.OPEN,()=>{k||(O(Re,`RPC '${e}' stream ${s} transport opened.`),S.o_())}),P(y,Lr.EventType.CLOSE,()=>{k||(k=!0,O(Re,`RPC '${e}' stream ${s} transport closed`),S.a_(),this.E_(y))}),P(y,Lr.EventType.ERROR,C=>{k||(k=!0,Jn(Re,`RPC '${e}' stream ${s} transport errored. Name:`,C.name,"Message:",C.message),S.a_(new j(N.UNAVAILABLE,"The operation could not be completed")))}),P(y,Lr.EventType.MESSAGE,C=>{var F;if(!k){const H=C.data[0];ne(!!H,16349);const D=H,K=(D==null?void 0:D.error)||((F=D[0])==null?void 0:F.error);if(K){O(Re,`RPC '${e}' stream ${s} received error:`,K);const se=K.status;let te=function(_){const E=de[_];if(E!==void 0)return Fd(E)}(se),v=K.message;te===void 0&&(te=N.INTERNAL,v="Unknown error status: "+se+" with message "+K.message),k=!0,S.a_(new j(te,v)),y.close()}else O(Re,`RPC '${e}' stream ${s} received:`,H),S.u_(H)}}),P(c,sd.STAT_EVENT,C=>{C.stat===$o.PROXY?O(Re,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===$o.NOPROXY&&O(Re,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.__()},0),S}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function wo(){return typeof document<"u"?document:null}/**
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
 */function Vi(n){return new Ow(n,!0)}/**
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
 */class Zd{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const vu="PersistentStream";class ef{constructor(e,t,r,s,i,a,c,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Zd(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(St(t.toString()),St("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new j(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return O(vu,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(O(vu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Nv extends ef{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=jw(this.serializer,e),r=function(i){if(!("targetChange"in i))return W.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?W.min():a.readTime?ut(a.readTime):W.min()}(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=Xo(this.serializer),t.addTarget=function(i,a){let c;const u=a.target;if(c=Wo(u)?{documents:$w(i,u)}:{query:Bw(i,u).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Bd(i,a.resumeToken);const h=Ko(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(W.min())>0){c.readTime=di(i,a.snapshotVersion.toTimestamp());const h=Ko(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=qw(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=Xo(this.serializer),t.removeTarget=e,this.q_(t)}}class Vv extends ef{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ne(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ne(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ne(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Uw(e.writeResults,e.commitTime),r=ut(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Xo(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Fw(this.serializer,r))};this.q_(t)}}/**
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
 */class Dv{}class Ov extends Dv{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new j(N.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Go(e,Qo(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(N.UNKNOWN,i.toString())})}Ho(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Ho(e,Qo(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new j(N.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class Lv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(St(t),this.aa=!1):O("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Tn="RemoteStore";class Mv{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{Rn(this)&&(O(Tn,"Restarting streams for network reachability change."),await async function(u){const h=G(u);h.Ea.add(4),await ds(h),h.Ra.set("Unknown"),h.Ea.delete(4),await Di(h)}(this))})}),this.Ra=new Lv(r,s)}}async function Di(n){if(Rn(n))for(const e of n.da)await e(!0)}async function ds(n){for(const e of n.da)await e(!1)}function tf(n,e){const t=G(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Fa(t)?ja(t):ur(t).O_()&&Ma(t,e))}function La(n,e){const t=G(n),r=ur(t);t.Ia.delete(e),r.O_()&&nf(t,e),t.Ia.size===0&&(r.O_()?r.L_():Rn(t)&&t.Ra.set("Unknown"))}function Ma(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ur(n).Y_(e)}function nf(n,e){n.Va.Ue(e),ur(n).Z_(e)}function ja(n){n.Va=new Pw({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),ur(n).start(),n.Ra.ua()}function Fa(n){return Rn(n)&&!ur(n).x_()&&n.Ia.size>0}function Rn(n){return G(n).Ea.size===0}function rf(n){n.Va=void 0}async function jv(n){n.Ra.set("Online")}async function Fv(n){n.Ia.forEach((e,t)=>{Ma(n,e)})}async function Uv(n,e){rf(n),Fa(n)?(n.Ra.ha(e),ja(n)):n.Ra.set("Unknown")}async function $v(n,e,t){if(n.Ra.set("Online"),e instanceof $d&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.Va.removeTarget(c))}(n,e)}catch(r){O(Tn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await pi(n,r)}else if(e instanceof Gs?n.Va.Ze(e):e instanceof Ud?n.Va.st(e):n.Va.tt(e),!t.isEqual(W.min()))try{const r=await Jd(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Va.Tt(a);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const m=i.Ia.get(h);m&&i.Ia.set(h,m.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,h)=>{const m=i.Ia.get(u);if(!m)return;i.Ia.set(u,m.withResumeToken(Se.EMPTY_BYTE_STRING,m.snapshotVersion)),nf(i,u);const y=new qt(m.target,u,h,m.sequenceNumber);Ma(i,y)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){O(Tn,"Failed to raise snapshot:",r),await pi(n,r)}}async function pi(n,e,t){if(!lr(e))throw e;n.Ea.add(1),await ds(n),n.Ra.set("Offline"),t||(t=()=>Jd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{O(Tn,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Di(n)})}function sf(n,e){return e().catch(t=>pi(n,t,e))}async function Oi(n){const e=G(n),t=en(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ea;for(;Bv(e);)try{const s=await Iv(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,zv(e,s)}catch(s){await pi(e,s)}of(e)&&af(e)}function Bv(n){return Rn(n)&&n.Ta.length<10}function zv(n,e){n.Ta.push(e);const t=en(n);t.O_()&&t.X_&&t.ea(e.mutations)}function of(n){return Rn(n)&&!en(n).x_()&&n.Ta.length>0}function af(n){en(n).start()}async function qv(n){en(n).ra()}async function Hv(n){const e=en(n);for(const t of n.Ta)e.ea(t.mutations)}async function Wv(n,e,t){const r=n.Ta.shift(),s=Ra.from(r,e,t);await sf(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Oi(n)}async function Gv(n,e){e&&en(n).X_&&await async function(r,s){if(function(a){return kw(a)&&a!==N.ABORTED}(s.code)){const i=r.Ta.shift();en(r).B_(),await sf(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Oi(r)}}(n,e),of(n)&&af(n)}async function Tu(n,e){const t=G(n);t.asyncQueue.verifyOperationInProgress(),O(Tn,"RemoteStore received new credentials");const r=Rn(t);t.Ea.add(3),await ds(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Di(t)}async function Kv(n,e){const t=G(n);e?(t.Ea.delete(2),await Di(t)):e||(t.Ea.add(2),await ds(t),t.Ra.set("Unknown"))}function ur(n){return n.ma||(n.ma=function(t,r,s){const i=G(t);return i.sa(),new Nv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:jv.bind(null,n),t_:Fv.bind(null,n),r_:Uv.bind(null,n),H_:$v.bind(null,n)}),n.da.push(async e=>{e?(n.ma.B_(),Fa(n)?ja(n):n.Ra.set("Unknown")):(await n.ma.stop(),rf(n))})),n.ma}function en(n){return n.fa||(n.fa=function(t,r,s){const i=G(t);return i.sa(),new Vv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:qv.bind(null,n),r_:Gv.bind(null,n),ta:Hv.bind(null,n),na:Wv.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await Oi(n)):(await n.fa.stop(),n.Ta.length>0&&(O(Tn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class Ua{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new Ua(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $a(n,e){if(St("AsyncQueue",`${e}: ${n}`),lr(n))return new j(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Yn{static emptySet(e){return new Yn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||$.comparator(t.key,r.key):(t,r)=>$.comparator(t.key,r.key),this.keyedMap=Mr(),this.sortedSet=new ce(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Yn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Yn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Eu{constructor(){this.ga=new ce($.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):z(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class rr{constructor(e,t,r,s,i,a,c,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new rr(e,t,Yn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ki(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Qv{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class Yv{constructor(){this.queries=Iu(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=G(t),i=s.queries;s.queries=Iu(),i.forEach((a,c)=>{for(const u of c.Sa)u.onError(r)})})(this,new j(N.ABORTED,"Firestore shutting down"))}}function Iu(){return new Sn(n=>xd(n),ki)}async function Xv(n,e){const t=G(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new Qv,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=$a(a,`Initialization of query '${Un(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&Ba(t)}async function Jv(n,e){const t=G(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Zv(n,e){const t=G(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.Sa)c.Fa(s)&&(r=!0);a.wa=s}}r&&Ba(t)}function eT(n,e,t){const r=G(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function Ba(n){n.Ca.forEach(e=>{e.next()})}var ea,bu;(bu=ea||(ea={})).Ma="default",bu.Cache="cache";class tT{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new rr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=rr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ea.Cache}}/**
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
 */class cf{constructor(e){this.key=e}}class lf{constructor(e){this.key=e}}class nT{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Z(),this.mutatedKeys=Z(),this.eu=Sd(e),this.tu=new Yn(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new Eu,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,y)=>{const I=s.get(m),k=Ri(this.query,y)?y:null,S=!!I&&this.mutatedKeys.has(I.key),P=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let C=!1;I&&k?I.data.isEqual(k.data)?S!==P&&(r.track({type:3,doc:k}),C=!0):this.su(I,k)||(r.track({type:2,doc:k}),C=!0,(u&&this.eu(k,u)>0||h&&this.eu(k,h)<0)&&(c=!0)):!I&&k?(r.track({type:0,doc:k}),C=!0):I&&!k&&(r.track({type:1,doc:I}),C=!0,(u||h)&&(c=!0)),C&&(k?(a=a.add(k),i=P?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}return{tu:a,iu:r,Cs:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((m,y)=>function(k,S){const P=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z(20277,{Rt:C})}};return P(k)-P(S)}(m.type,y.type)||this.eu(m.doc,y.doc)),this.ou(r),s=s??!1;const c=t&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,h=u!==this.Za;return this.Za=u,a.length!==0||h?{snapshot:new rr(this.query,e.tu,i,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Eu,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Z(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const t=[];return e.forEach(r=>{this.Xa.has(r)||t.push(new lf(r))}),this.Xa.forEach(r=>{e.has(r)||t.push(new cf(r))}),t}cu(e){this.Ya=e.Qs,this.Xa=Z();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return rr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const za="SyncEngine";class rT{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class sT{constructor(e){this.key=e,this.hu=!1}}class iT{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Sn(c=>xd(c),ki),this.Iu=new Map,this.Eu=new Set,this.du=new ce($.comparator),this.Au=new Map,this.Ru=new Na,this.Vu={},this.mu=new Map,this.fu=nr.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function oT(n,e,t=!0){const r=mf(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await uf(r,e,t,!0),s}async function aT(n,e){const t=mf(n);await uf(t,e,!0,!1)}async function uf(n,e,t,r){const s=await bv(n.localStore,lt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await cT(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&tf(n.remoteStore,s),c}async function cT(n,e,t,r,s){n.pu=(y,I,k)=>async function(P,C,F,H){let D=C.view.ru(F);D.Cs&&(D=await gu(P.localStore,C.query,!1).then(({documents:v})=>C.view.ru(v,D)));const K=H&&H.targetChanges.get(C.targetId),se=H&&H.targetMismatches.get(C.targetId)!=null,te=C.view.applyChanges(D,P.isPrimaryClient,K,se);return xu(P,C.targetId,te.au),te.snapshot}(n,y,I,k);const i=await gu(n.localStore,e,!0),a=new nT(e,i.Qs),c=a.ru(i.documents),u=hs.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,u);xu(n,t,h.au);const m=new rT(e,t,a);return n.Tu.set(e,m),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function lT(n,e,t){const r=G(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(a=>!ki(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Jo(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&La(r.remoteStore,s.targetId),ta(r,s.targetId)}).catch(cr)):(ta(r,s.targetId),await Jo(r.localStore,s.targetId,!0))}async function uT(n,e){const t=G(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),La(t.remoteStore,r.targetId))}async function hT(n,e,t){const r=_T(n);try{const s=await function(a,c){const u=G(a),h=oe.now(),m=c.reduce((k,S)=>k.add(S.key),Z());let y,I;return u.persistence.runTransaction("Locally write mutations","readwrite",k=>{let S=kt(),P=Z();return u.Ns.getEntries(k,m).next(C=>{S=C,S.forEach((F,H)=>{H.isValidDocument()||(P=P.add(F))})}).next(()=>u.localDocuments.getOverlayedDocuments(k,S)).next(C=>{y=C;const F=[];for(const H of c){const D=Iw(H,y.get(H.key).overlayedDocument);D!=null&&F.push(new kn(H.key,D,wd(D.value.mapValue),bt.exists(!0)))}return u.mutationQueue.addMutationBatch(k,h,F,c)}).next(C=>{I=C;const F=C.applyToLocalDocumentSet(y,P);return u.documentOverlayCache.saveOverlays(k,C.batchId,F)})}).then(()=>({batchId:I.batchId,changes:Rd(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,u){let h=a.Vu[a.currentUser.toKey()];h||(h=new ce(J)),h=h.insert(c,u),a.Vu[a.currentUser.toKey()]=h}(r,s.batchId,t),await fs(r,s.changes),await Oi(r.remoteStore)}catch(s){const i=$a(s,"Failed to persist write");t.reject(i)}}async function hf(n,e){const t=G(n);try{const r=await Tv(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Au.get(i);a&&(ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?ne(a.hu,14607):s.removedDocuments.size>0&&(ne(a.hu,42227),a.hu=!1))}),await fs(t,r,e)}catch(r){await cr(r)}}function Au(n,e,t){const r=G(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const u=G(a);u.onlineState=c;let h=!1;u.queries.forEach((m,y)=>{for(const I of y.Sa)I.va(c)&&(h=!0)}),h&&Ba(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function dT(n,e,t){const r=G(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new ce($.comparator);a=a.insert(i,Ne.newNoDocument(i,W.min()));const c=Z().add(i),u=new Ni(W.min(),new Map,new ce(J),a,c);await hf(r,u),r.du=r.du.remove(i),r.Au.delete(e),qa(r)}else await Jo(r.localStore,e,!1).then(()=>ta(r,e,t)).catch(cr)}async function fT(n,e){const t=G(n),r=e.batch.batchId;try{const s=await vv(t.localStore,e);ff(t,r,null),df(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await fs(t,s)}catch(s){await cr(s)}}async function pT(n,e,t){const r=G(n);try{const s=await function(a,c){const u=G(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let m;return u.mutationQueue.lookupMutationBatch(h,c).next(y=>(ne(y!==null,37113),m=y.keys(),u.mutationQueue.removeMutationBatch(h,y))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,m,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,m)).next(()=>u.localDocuments.getDocuments(h,m))})}(r.localStore,e);ff(r,e,t),df(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await fs(r,s)}catch(s){await cr(s)}}function df(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function ff(n,e,t){const r=G(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function ta(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach(r=>{n.Ru.containsKey(r)||pf(n,r)})}function pf(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(La(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),qa(n))}function xu(n,e,t){for(const r of t)r instanceof cf?(n.Ru.addReference(r.key,e),mT(n,r)):r instanceof lf?(O(za,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||pf(n,r.key)):z(19791,{wu:r})}function mT(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(O(za,"New document in limbo: "+t),n.Eu.add(r),qa(n))}function qa(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new $(ae.fromString(e)),r=n.fu.next();n.Au.set(r,new sT(t)),n.du=n.du.insert(t,r),tf(n.remoteStore,new qt(lt(Sa(t.path)),r,"TargetPurposeLimboResolution",bi.ce))}}async function fs(n,e,t){const r=G(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((c,u)=>{a.push(r.pu(u,e,t).then(h=>{var m;if((h||t)&&r.isPrimaryClient){const y=h?!h.fromCache:(m=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:m.current;r.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(h){s.push(h);const y=Da.As(u.targetId,h);i.push(y)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(u,h){const m=G(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>R.forEach(h,I=>R.forEach(I.Es,k=>m.persistence.referenceDelegate.addReference(y,I.targetId,k)).next(()=>R.forEach(I.ds,k=>m.persistence.referenceDelegate.removeReference(y,I.targetId,k)))))}catch(y){if(!lr(y))throw y;O(Oa,"Failed to update sequence numbers: "+y)}for(const y of h){const I=y.targetId;if(!y.fromCache){const k=m.Ms.get(I),S=k.snapshotVersion,P=k.withLastLimboFreeSnapshotVersion(S);m.Ms=m.Ms.insert(I,P)}}}(r.localStore,i))}async function gT(n,e){const t=G(n);if(!t.currentUser.isEqual(e)){O(za,"User change. New user:",e.toKey());const r=await Xd(t.localStore,e);t.currentUser=e,function(i,a){i.mu.forEach(c=>{c.forEach(u=>{u.reject(new j(N.CANCELLED,a))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await fs(t,r.Ls)}}function yT(n,e){const t=G(n),r=t.Au.get(e);if(r&&r.hu)return Z().add(r.key);{let s=Z();const i=t.Iu.get(e);if(!i)return s;for(const a of i){const c=t.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function mf(n){const e=G(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=hf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dT.bind(null,e),e.Pu.H_=Zv.bind(null,e.eventManager),e.Pu.yu=eT.bind(null,e.eventManager),e}function _T(n){const e=G(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pT.bind(null,e),e}class mi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Vi(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return wv(this.persistence,new gv,e.initialUser,this.serializer)}Cu(e){return new Yd(Va.mi,this.serializer)}Du(e){return new xv}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}mi.provider={build:()=>new mi};class wT extends mi{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ne(this.persistence.referenceDelegate instanceof fi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new tv(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?je.withCacheSize(this.cacheSizeBytes):je.DEFAULT;return new Yd(r=>fi.mi(r,t),this.serializer)}}class na{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Au(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gT.bind(null,this.syncEngine),await Kv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Yv}()}createDatastore(e){const t=Vi(e.databaseInfo.databaseId),r=function(i){return new Pv(i)}(e.databaseInfo);return function(i,a,c,u){return new Ov(i,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new Mv(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Au(this.syncEngine,t,0),function(){return wu.v()?new wu:new Sv}())}createSyncEngine(e,t){return function(s,i,a,c,u,h,m){const y=new iT(s,i,a,c,u,h);return m&&(y.gu=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=G(s);O(Tn,"RemoteStore shutting down."),i.Ea.add(5),await ds(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}na.provider={build:()=>new na};/**
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
 */class vT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):St("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const tn="FirestoreClient";class TT{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Pe.UNAUTHENTICATED,this.clientId=va.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{O(tn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(O(tn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=$a(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vo(n,e){n.asyncQueue.verifyOperationInProgress(),O(tn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Xd(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Su(n,e){n.asyncQueue.verifyOperationInProgress();const t=await ET(n);O(tn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Tu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Tu(e.remoteStore,s)),n._onlineComponents=e}async function ET(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O(tn,"Using user provided OfflineComponentProvider");try{await vo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Jn("Error using user provided cache. Falling back to memory cache: "+t),await vo(n,new mi)}}else O(tn,"Using default OfflineComponentProvider"),await vo(n,new wT(void 0));return n._offlineComponents}async function gf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O(tn,"Using user provided OnlineComponentProvider"),await Su(n,n._uninitializedComponentsProvider._online)):(O(tn,"Using default OnlineComponentProvider"),await Su(n,new na))),n._onlineComponents}function IT(n){return gf(n).then(e=>e.syncEngine)}async function bT(n){const e=await gf(n),t=e.eventManager;return t.onListen=oT.bind(null,e.syncEngine),t.onUnlisten=lT.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=aT.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=uT.bind(null,e.syncEngine),t}function AT(n,e,t={}){const r=new Kt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,h){const m=new vT({next:I=>{m.Nu(),a.enqueueAndForget(()=>Jv(i,y));const k=I.docs.has(c);!k&&I.fromCache?h.reject(new j(N.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&I.fromCache&&u&&u.source==="server"?h.reject(new j(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(I)},error:I=>h.reject(I)}),y=new tT(Sa(c.path),m,{includeMetadataChanges:!0,qa:!0});return Xv(i,y)}(await bT(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function yf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const ku=new Map;/**
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
 */const _f="firestore.googleapis.com",Ru=!0;class Cu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new j(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_f,this.ssl=Ru}else this.host=e.host,this.ssl=e.ssl??Ru;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Qd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Zw)throw new j(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}L0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yf(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new j(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new j(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new j(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ha{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new A0;switch(r.type){case"firstParty":return new R0(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=ku.get(t);r&&(O("ComponentProvider","Removing Datastore"),ku.delete(t),r.terminate())}(this),Promise.resolve()}}function xT(n,e,t,r={}){var h;n=Yr(n,Ha);const s=sr(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(lh(`https://${c}`),uh("Firestore",!0)),i.host!==_f&&i.host!==c&&Jn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:c,ssl:s,emulatorOptions:r};if(!Qt(u,a)&&(n._setSettings(u),r.mockUserToken)){let m,y;if(typeof r.mockUserToken=="string")m=r.mockUserToken,y=Pe.MOCK_USER;else{m=Cm(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const I=r.mockUserToken.sub||r.mockUserToken.user_id;if(!I)throw new j(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new Pe(I)}n._authCredentials=new x0(new cd(m,y))}}/**
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
 */class Wa{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Wa(this.firestore,e,this._query)}}class Ie{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ie(this.firestore,e,this._key)}toJSON(){return{type:Ie._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(ls(t,Ie._jsonSchema))return new Ie(e,r||null,new $(ae.fromString(t.referencePath)))}}Ie._jsonSchemaVersion="firestore/documentReference/1.0",Ie._jsonSchema={type:fe("string",Ie._jsonSchemaVersion),referencePath:fe("string")};class rs extends Wa{constructor(e,t,r){super(e,t,Sa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ie(this.firestore,null,new $(e))}withConverter(e){return new rs(this.firestore,e,this._path)}}function To(n,e,...t){if(n=xe(n),arguments.length===1&&(e=va.newId()),O0("doc","path",e),n instanceof Ha){const r=ae.fromString(e,...t);return ql(r),new Ie(n,null,new $(r))}{if(!(n instanceof Ie||n instanceof rs))throw new j(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ae.fromString(e,...t));return ql(r),new Ie(n.firestore,n instanceof rs?n.converter:null,new $(r))}}/**
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
 */const Pu="AsyncQueue";class Nu{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Zd(this,"async_queue_retry"),this._c=()=>{const r=wo();r&&O(Pu,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=wo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=wo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Kt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!lr(e))throw e;O(Pu,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,St("INTERNAL UNHANDLED ERROR: ",Vu(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Ua.createAndSchedule(this,e,t,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&z(47125,{Pc:Vu(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Vu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Ga extends Ha{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Nu,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Nu(e),this._firestoreClient=void 0,await e}}}function ST(n,e){const t=typeof n=="object"?n:ua(),r=typeof n=="string"?n:oi,s=An(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=km("firestore");i&&xT(s,...i)}return s}function wf(n){if(n._terminated)throw new j(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||kT(n),n._firestoreClient}function kT(n){var r,s,i;const e=n._freezeSettings(),t=function(c,u,h,m){return new G0(c,u,h,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,yf(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)}(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new TT(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class Ke{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ke(Se.fromBase64String(e))}catch(t){throw new j(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ke(Se.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ke._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ls(e,Ke._jsonSchema))return Ke.fromBase64String(e.bytes)}}Ke._jsonSchemaVersion="firestore/bytes/1.0",Ke._jsonSchema={type:fe("string",Ke._jsonSchemaVersion),bytes:fe("string")};/**
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
 */class Ka{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class vf{constructor(e){this._methodName=e}}/**
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
 */class ht{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ht._jsonSchemaVersion}}static fromJSON(e){if(ls(e,ht._jsonSchema))return new ht(e.latitude,e.longitude)}}ht._jsonSchemaVersion="firestore/geoPoint/1.0",ht._jsonSchema={type:fe("string",ht._jsonSchemaVersion),latitude:fe("number"),longitude:fe("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class dt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:dt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ls(e,dt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new dt(e.vectorValues);throw new j(N.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}dt._jsonSchemaVersion="firestore/vectorValue/1.0",dt._jsonSchema={type:fe("string",dt._jsonSchemaVersion),vectorValues:fe("object")};/**
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
 */const RT=/^__.*__$/;class CT{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new kn(e,this.data,this.fieldMask,t,this.fieldTransforms):new us(e,this.data,t,this.fieldTransforms)}}function Tf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z(40011,{Ac:n})}}class Qa{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Qa({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return gi(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Tf(this.Ac)&&RT.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class PT{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Vi(e)}Cc(e,t,r,s=!1){return new Qa({Ac:e,methodName:t,Dc:r,path:Ae.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function NT(n){const e=n._freezeSettings(),t=Vi(n._databaseId);return new PT(n._databaseId,!!e.ignoreUndefinedProperties,t)}function VT(n,e,t,r,s,i={}){const a=n.Cc(i.merge||i.mergeFields?2:0,e,t,s);Af("Data must be an object, but it was:",a,r);const c=If(r,a);let u,h;if(i.merge)u=new et(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const y of i.mergeFields){const I=DT(e,y,t);if(!a.contains(I))throw new j(N.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);LT(m,I)||m.push(I)}u=new et(m),h=a.fieldTransforms.filter(y=>u.covers(y.field))}else u=null,h=a.fieldTransforms;return new CT(new Ge(c),u,h)}function Ef(n,e){if(bf(n=xe(n)))return Af("Unsupported field value:",e,n),If(n,e);if(n instanceof vf)return function(r,s){if(!Tf(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let u=Ef(c,s.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=xe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return yw(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=oe.fromDate(r);return{timestampValue:di(s.serializer,i)}}if(r instanceof oe){const i=new oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:di(s.serializer,i)}}if(r instanceof ht)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ke)return{bytesValue:Bd(s.serializer,r._byteString)};if(r instanceof Ie){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Pa(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof dt)return function(a,c){return{mapValue:{fields:{[yd]:{stringValue:_d},[ai]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.Sc("VectorValues must only contain numeric values.");return ka(c.serializer,h)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Ta(r)}`)}(n,e)}function If(n,e){const t={};return hd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xn(n,(r,s)=>{const i=Ef(s,e.mc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function bf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof oe||n instanceof ht||n instanceof Ke||n instanceof Ie||n instanceof vf||n instanceof dt)}function Af(n,e,t){if(!bf(t)||!ld(t)){const r=Ta(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function DT(n,e,t){if((e=xe(e))instanceof Ka)return e._internalPath;if(typeof e=="string")return xf(n,e);throw gi("Field path arguments must be of type string or ",n,!1,void 0,t)}const OT=new RegExp("[~\\*/\\[\\]]");function xf(n,e,t){if(e.search(OT)>=0)throw gi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ka(...e.split("."))._internalPath}catch{throw gi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function gi(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new j(N.INVALID_ARGUMENT,c+n+u)}function LT(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Sf{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ie(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new MT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(kf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class MT extends Sf{data(){return super.data()}}function kf(n,e){return typeof e=="string"?xf(n,e):e instanceof Ka?e._internalPath:e._delegate._internalPath}class jT{convertValue(e,t="none"){switch(Zt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return he(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Jt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw z(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return xn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[ai].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>he(a.doubleValue));return new dt(t)}convertGeoPoint(e){return new ht(he(e.latitude),he(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=xi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Jr(e));default:return null}}convertTimestamp(e){const t=Xt(e);return new oe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ae.fromString(e);ne(Kd(r),9688,{name:e});const s=new Zr(r.get(1),r.get(3)),i=new $(r.popFirst(5));return s.isEqual(t)||St(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function FT(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Fr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yn extends Sf{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ks(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(kf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new j(N.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=yn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}yn._jsonSchemaVersion="firestore/documentSnapshot/1.0",yn._jsonSchema={type:fe("string",yn._jsonSchemaVersion),bundleSource:fe("string","DocumentSnapshot"),bundleName:fe("string"),bundle:fe("string")};class Ks extends yn{data(e={}){return super.data(e)}}class Wr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Fr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ks(this._firestore,this._userDataWriter,r.key,r,new Fr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const u=new Ks(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Fr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new Ks(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Fr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,m=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:UT(c.type),doc:u,oldIndex:h,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new j(N.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Wr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=va.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function UT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z(61501,{type:n})}}/**
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
 */function $T(n){n=Yr(n,Ie);const e=Yr(n.firestore,Ga);return AT(wf(e),n._key).then(t=>qT(e,n,t))}Wr._jsonSchemaVersion="firestore/querySnapshot/1.0",Wr._jsonSchema={type:fe("string",Wr._jsonSchemaVersion),bundleSource:fe("string","QuerySnapshot"),bundleName:fe("string"),bundle:fe("string")};class BT extends jT{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ke(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ie(this.firestore,null,t)}}function Du(n,e,t){n=Yr(n,Ie);const r=Yr(n.firestore,Ga),s=FT(n.converter,e,t);return zT(r,[VT(NT(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,bt.none())])}function zT(n,e){return function(r,s){const i=new Kt;return r.asyncQueue.enqueueAndForget(async()=>hT(await IT(r),s,i)),i.promise}(wf(n),e)}function qT(n,e,t){const r=t.docs.get(e._key),s=new BT(n);return new yn(n,s,e._key,r,new Fr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){ar=s})(ir),ft(new tt("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Ga(new S0(r.getProvider("auth-internal")),new C0(a,r.getProvider("app-check-internal")),function(h,m){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new j(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zr(h.options.projectId,m)}(a,s),a);return i={useFetchStreams:t,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Qe(Ul,$l,e),Qe(Ul,$l,"esm2020")})();var HT="firebase",WT="12.3.0";/**
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
 */Qe(HT,WT,"app");const Rf="@firebase/installations",Ya="0.6.19";/**
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
 */const Cf=1e4,Pf=`w:${Ya}`,Nf="FIS_v2",GT="https://firebaseinstallations.googleapis.com/v1",KT=60*60*1e3,QT="installations",YT="Installations";/**
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
 */const XT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},En=new bn(QT,YT,XT);function Vf(n){return n instanceof rt&&n.code.includes("request-failed")}/**
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
 */function Df({projectId:n}){return`${GT}/projects/${n}/installations`}function Of(n){return{token:n.token,requestStatus:2,expiresIn:ZT(n.expiresIn),creationTime:Date.now()}}async function Lf(n,e){const r=(await e.json()).error;return En.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Mf({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function JT(n,{refreshToken:e}){const t=Mf(n);return t.append("Authorization",eE(e)),t}async function jf(n){const e=await n();return e.status>=500&&e.status<600?n():e}function ZT(n){return Number(n.replace("s","000"))}function eE(n){return`${Nf} ${n}`}/**
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
 */async function tE({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Df(n),s=Mf(n),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={fid:t,authVersion:Nf,appId:n.appId,sdkVersion:Pf},c={method:"POST",headers:s,body:JSON.stringify(a)},u=await jf(()=>fetch(r,c));if(u.ok){const h=await u.json();return{fid:h.fid||t,registrationStatus:2,refreshToken:h.refreshToken,authToken:Of(h.authToken)}}else throw await Lf("Create Installation",u)}/**
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
 */function Ff(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function nE(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const rE=/^[cdef][\w-]{21}$/,ra="";function sE(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=iE(n);return rE.test(t)?t:ra}catch{return ra}}function iE(n){return nE(n).substr(0,22)}/**
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
 */function Li(n){return`${n.appName}!${n.appId}`}/**
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
 */const Uf=new Map;function $f(n,e){const t=Li(n);Bf(t,e),oE(t,e)}function Bf(n,e){const t=Uf.get(n);if(t)for(const r of t)r(e)}function oE(n,e){const t=aE();t&&t.postMessage({key:n,fid:e}),cE()}let mn=null;function aE(){return!mn&&"BroadcastChannel"in self&&(mn=new BroadcastChannel("[Firebase] FID Change"),mn.onmessage=n=>{Bf(n.data.key,n.data.fid)}),mn}function cE(){Uf.size===0&&mn&&(mn.close(),mn=null)}/**
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
 */const lE="firebase-installations-database",uE=1,In="firebase-installations-store";let Eo=null;function Xa(){return Eo||(Eo=gh(lE,uE,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(In)}}})),Eo}async function yi(n,e){const t=Li(n),s=(await Xa()).transaction(In,"readwrite"),i=s.objectStore(In),a=await i.get(t);return await i.put(e,t),await s.done,(!a||a.fid!==e.fid)&&$f(n,e.fid),e}async function zf(n){const e=Li(n),r=(await Xa()).transaction(In,"readwrite");await r.objectStore(In).delete(e),await r.done}async function Mi(n,e){const t=Li(n),s=(await Xa()).transaction(In,"readwrite"),i=s.objectStore(In),a=await i.get(t),c=e(a);return c===void 0?await i.delete(t):await i.put(c,t),await s.done,c&&(!a||a.fid!==c.fid)&&$f(n,c.fid),c}/**
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
 */async function Ja(n){let e;const t=await Mi(n.appConfig,r=>{const s=hE(r),i=dE(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===ra?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function hE(n){const e=n||{fid:sE(),registrationStatus:0};return qf(e)}function dE(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(En.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=fE(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:pE(n)}:{installationEntry:e}}async function fE(n,e){try{const t=await tE(n,e);return yi(n.appConfig,t)}catch(t){throw Vf(t)&&t.customData.serverCode===409?await zf(n.appConfig):await yi(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function pE(n){let e=await Ou(n.appConfig);for(;e.registrationStatus===1;)await Ff(100),e=await Ou(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Ja(n);return r||t}return e}function Ou(n){return Mi(n,e=>{if(!e)throw En.create("installation-not-found");return qf(e)})}function qf(n){return mE(n)?{fid:n.fid,registrationStatus:0}:n}function mE(n){return n.registrationStatus===1&&n.registrationTime+Cf<Date.now()}/**
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
 */async function gE({appConfig:n,heartbeatServiceProvider:e},t){const r=yE(n,t),s=JT(n,t),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={installation:{sdkVersion:Pf,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(a)},u=await jf(()=>fetch(r,c));if(u.ok){const h=await u.json();return Of(h)}else throw await Lf("Generate Auth Token",u)}function yE(n,{fid:e}){return`${Df(n)}/${e}/authTokens:generate`}/**
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
 */async function Za(n,e=!1){let t;const r=await Mi(n.appConfig,i=>{if(!Hf(i))throw En.create("not-registered");const a=i.authToken;if(!e&&vE(a))return i;if(a.requestStatus===1)return t=_E(n,e),i;{if(!navigator.onLine)throw En.create("app-offline");const c=EE(i);return t=wE(n,c),c}});return t?await t:r.authToken}async function _E(n,e){let t=await Lu(n.appConfig);for(;t.authToken.requestStatus===1;)await Ff(100),t=await Lu(n.appConfig);const r=t.authToken;return r.requestStatus===0?Za(n,e):r}function Lu(n){return Mi(n,e=>{if(!Hf(e))throw En.create("not-registered");const t=e.authToken;return IE(t)?{...e,authToken:{requestStatus:0}}:e})}async function wE(n,e){try{const t=await gE(n,e),r={...e,authToken:t};return await yi(n.appConfig,r),t}catch(t){if(Vf(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await zf(n.appConfig);else{const r={...e,authToken:{requestStatus:0}};await yi(n.appConfig,r)}throw t}}function Hf(n){return n!==void 0&&n.registrationStatus===2}function vE(n){return n.requestStatus===2&&!TE(n)}function TE(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+KT}function EE(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function IE(n){return n.requestStatus===1&&n.requestTime+Cf<Date.now()}/**
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
 */async function bE(n){const e=n,{installationEntry:t,registrationPromise:r}=await Ja(e);return r?r.catch(console.error):Za(e).catch(console.error),t.fid}/**
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
 */async function AE(n,e=!1){const t=n;return await xE(t),(await Za(t,e)).token}async function xE(n){const{registrationPromise:e}=await Ja(n);e&&await e}/**
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
 */function SE(n){if(!n||!n.options)throw Io("App Configuration");if(!n.name)throw Io("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Io(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Io(n){return En.create("missing-app-config-values",{valueName:n})}/**
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
 */const Wf="installations",kE="installations-internal",RE=n=>{const e=n.getProvider("app").getImmediate(),t=SE(e),r=An(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},CE=n=>{const e=n.getProvider("app").getImmediate(),t=An(e,Wf).getImmediate();return{getId:()=>bE(t),getToken:s=>AE(t,s)}};function PE(){ft(new tt(Wf,RE,"PUBLIC")),ft(new tt(kE,CE,"PRIVATE"))}PE();Qe(Rf,Ya);Qe(Rf,Ya,"esm2020");/**
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
 */const _i="analytics",NE="firebase_id",VE="origin",DE=60*1e3,OE="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ec="https://www.googletagmanager.com/gtag/js";/**
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
 */const Fe=new vi("@firebase/analytics");/**
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
 */const LE={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ze=new bn("analytics","Analytics",LE);/**
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
 */function ME(n){if(!n.startsWith(ec)){const e=ze.create("invalid-gtag-resource",{gtagURL:n});return Fe.warn(e.message),""}return n}function Gf(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function jE(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function FE(n,e){const t=jE("firebase-js-sdk-policy",{createScriptURL:ME}),r=document.createElement("script"),s=`${ec}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function UE(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function $E(n,e,t,r,s,i){const a=r[s];try{if(a)await e[a];else{const u=(await Gf(t)).find(h=>h.measurementId===s);u&&await e[u.appId]}}catch(c){Fe.error(c)}n("config",s,i)}async function BE(n,e,t,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const c=await Gf(t);for(const u of a){const h=c.find(y=>y.measurementId===u),m=h&&e[h.appId];if(m)i.push(m);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",r,s||{})}catch(i){Fe.error(i)}}function zE(n,e,t,r){async function s(i,...a){try{if(i==="event"){const[c,u]=a;await BE(n,e,t,c,u)}else if(i==="config"){const[c,u]=a;await $E(n,e,t,r,c,u)}else if(i==="consent"){const[c,u]=a;n("consent",c,u)}else if(i==="get"){const[c,u,h]=a;n("get",c,u,h)}else if(i==="set"){const[c]=a;n("set",c)}else n(i,...a)}catch(c){Fe.error(c)}}return s}function qE(n,e,t,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=zE(i,n,e,t),{gtagCore:i,wrappedGtag:window[s]}}function HE(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(ec)&&t.src.includes(n))return t;return null}/**
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
 */const WE=30,GE=1e3;class KE{constructor(e={},t=GE){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Kf=new KE;function QE(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function YE(n){var a;const{appId:e,apiKey:t}=n,r={method:"GET",headers:QE(t)},s=OE.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let c="";try{const u=await i.json();(a=u.error)!=null&&a.message&&(c=u.error.message)}catch{}throw ze.create("config-fetch-failed",{httpStatus:i.status,responseMessage:c})}return i.json()}async function XE(n,e=Kf,t){const{appId:r,apiKey:s,measurementId:i}=n.options;if(!r)throw ze.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw ze.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new eI;return setTimeout(async()=>{c.abort()},DE),Qf({appId:r,apiKey:s,measurementId:i},a,c,e)}async function Qf(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=Kf){var c;const{appId:i,measurementId:a}=n;try{await JE(r,e)}catch(u){if(a)return Fe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:i,measurementId:a};throw u}try{const u=await YE(n);return s.deleteThrottleMetadata(i),u}catch(u){const h=u;if(!ZE(h)){if(s.deleteThrottleMetadata(i),a)return Fe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:i,measurementId:a};throw u}const m=Number((c=h==null?void 0:h.customData)==null?void 0:c.httpStatus)===503?hl(t,s.intervalMillis,WE):hl(t,s.intervalMillis),y={throttleEndTimeMillis:Date.now()+m,backoffCount:t+1};return s.setThrottleMetadata(i,y),Fe.debug(`Calling attemptFetch again in ${m} millis`),Qf(n,y,r,s)}}function JE(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(i),r(ze.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function ZE(n){if(!(n instanceof rt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class eI{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function tI(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const i=await e,a={...r,send_to:i};n("event",t,a)}}/**
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
 */async function nI(){if(dh())try{await fh()}catch(n){return Fe.warn(ze.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Fe.warn(ze.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function rI(n,e,t,r,s,i,a){const c=XE(n);c.then(I=>{t[I.measurementId]=I.appId,n.options.measurementId&&I.measurementId!==n.options.measurementId&&Fe.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>Fe.error(I)),e.push(c);const u=nI().then(I=>{if(I)return r.getId()}),[h,m]=await Promise.all([c,u]);HE(i)||FE(i,h.measurementId),s("js",new Date);const y=(a==null?void 0:a.config)??{};return y[VE]="firebase",y.update=!0,m!=null&&(y[NE]=m),s("config",h.measurementId,y),h.measurementId}/**
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
 */class sI{constructor(e){this.app=e}_delete(){return delete Gr[this.app.options.appId],Promise.resolve()}}let Gr={},Mu=[];const ju={};let bo="dataLayer",iI="gtag",Fu,Yf,Uu=!1;function oI(){const n=[];if(hh()&&n.push("This is a browser extension environment."),Fm()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=ze.create("invalid-analytics-context",{errorInfo:e});Fe.warn(t.message)}}function aI(n,e,t){oI();const r=n.options.appId;if(!r)throw ze.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Fe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ze.create("no-api-key");if(Gr[r]!=null)throw ze.create("already-exists",{id:r});if(!Uu){UE(bo);const{wrappedGtag:i,gtagCore:a}=qE(Gr,Mu,ju,bo,iI);Yf=i,Fu=a,Uu=!0}return Gr[r]=rI(n,Mu,ju,e,Fu,bo,t),new sI(n)}function cI(n=ua()){n=xe(n);const e=An(n,_i);return e.isInitialized()?e.getImmediate():lI(n)}function lI(n,e={}){const t=An(n,_i);if(t.isInitialized()){const s=t.getImmediate();if(Qt(e,t.getOptions()))return s;throw ze.create("already-initialized")}return t.initialize({options:e})}function uI(n,e,t,r){n=xe(n),tI(Yf,Gr[n.app.options.appId],e,t,r).catch(s=>Fe.error(s))}const $u="@firebase/analytics",Bu="0.10.18";function hI(){ft(new tt(_i,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return aI(r,s,t)},"PUBLIC")),ft(new tt("analytics-internal",n,"PRIVATE")),Qe($u,Bu),Qe($u,Bu,"esm2020");function n(e){try{const t=e.getProvider(_i).getImmediate();return{logEvent:(r,s,i)=>uI(t,r,s,i)}}catch(t){throw ze.create("interop-component-reg-failed",{reason:t})}}}hI();const dI={apiKey:"AIzaSyCUn6sq5qode0tO73tfDgXneg03_CobxjI",authDomain:"ride-share-56610.firebaseapp.com",projectId:"ride-share-56610",storageBucket:"ride-share-56610.appspot.com",messagingSenderId:"1074725088115",appId:"1:1074725088115:web:9d53e6c7b24a497cf3b306",measurementId:"G-XN91B7PKY4"},tc=yh(dI),Ft=I0(tc),Qs=ST(tc);typeof window<"u"&&cI(tc);const Cb=Object.freeze(Object.defineProperty({__proto__:null,auth:Ft,db:Qs},Symbol.toStringTag,{value:"Module"}));class Ds{static async signIn(e,t){try{const s=(await i_(Ft,e,t)).user;return await this.getUserProfile(s.uid)}catch(r){throw new Error(this.getErrorMessage(r.code))}}static async register(e,t,r,s,i="renter",a){try{const u=(await s_(Ft,e,t)).user;await c_(u,{displayName:`${r} ${s}`}),await o_(u);const h={uid:u.uid,email:u.email,firstName:r,lastName:s,role:i,phone:a||"",isEmailVerified:!1,createdAt:new Date().toISOString()};return await Du(To(Qs,"users",u.uid),h),h}catch(c){throw new Error(this.getErrorMessage(c.code))}}static async signOut(){try{await d_(Ft)}catch{throw new Error("Failed to sign out")}}static async getCurrentUser(){const e=Ft.currentUser;if(!e)return null;try{return await this.getUserProfile(e.uid)}catch(t){return console.error("Error getting current user:",t),null}}static async getUserProfile(e){try{const t=await $T(To(Qs,"users",e));if(!t.exists())throw new Error("User profile not found");return t.data()}catch{throw new Error("Failed to get user profile")}}static async updateUserProfile(e,t){try{await Du(To(Qs,"users",e),t,{merge:!0})}catch{throw new Error("Failed to update user profile")}}static async resetPassword(e){try{await r_(Ft,e)}catch(t){throw new Error(this.getErrorMessage(t.code))}}static onAuthStateChanged(e){return h_(Ft,async t=>{if(t)try{const r=await this.getUserProfile(t.uid);e(r)}catch(r){console.error("Error getting user profile:",r),e(null)}else e(null)})}static async getIdToken(){const e=Ft.currentUser;if(!e)return null;try{return await e.getIdToken()}catch(t){return console.error("Error getting ID token:",t),null}}static getErrorMessage(e){return{"auth/user-not-found":"No user found with this email address.","auth/wrong-password":"Incorrect password.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password should be at least 6 characters.","auth/invalid-email":"Invalid email address.","auth/user-disabled":"This account has been disabled.","auth/too-many-requests":"Too many failed attempts. Please try again later.","auth/network-request-failed":"Network error. Please check your connection."}[e]||"An error occurred. Please try again."}}const Xf=q.createContext(void 0),fI=({children:n})=>{const[e,t]=q.useState(null),[r,s]=q.useState(!0);q.useEffect(()=>{i()},[]);const i=async()=>{s(!0);try{return}catch{t(null)}finally{s(!1)}};q.useEffect(()=>{const S=Ds.onAuthStateChanged(P=>{t(P?{uid:P.uid,email:P.email,firstName:P.firstName,lastName:P.lastName,role:P.role,phone:P.phone,isEmailVerified:P.isEmailVerified}:null),s(!1)});return()=>S()},[]);const k={user:e,login:async(S,P)=>{const C=await Ds.signIn(S,P),F={uid:C.uid,email:C.email,firstName:C.firstName,lastName:C.lastName,role:C.role,phone:C.phone,isEmailVerified:C.isEmailVerified};t(F),localStorage.setItem("userRole",C.role)},register:async S=>{const P=await Ds.register(S.email,S.password,S.firstName,S.lastName,S.role,S.phone);t({uid:P.uid,email:P.email,firstName:P.firstName,lastName:P.lastName,role:P.role,phone:P.phone,isEmailVerified:P.isEmailVerified})},logout:async()=>{await Ds.signOut()},loading:r,isAdmin:()=>(e==null?void 0:e.role)==="admin",isHost:()=>(e==null?void 0:e.role)==="host",isRenter:()=>(e==null?void 0:e.role)==="renter",hasRole:S=>(e==null?void 0:e.role)===S};return f.jsx(Xf.Provider,{value:k,children:n})},pI=q.createContext(void 0),mI=({children:n})=>{const[e,t]=q.useState(!1);q.useEffect(()=>{const i=localStorage.getItem("theme");t(i?i==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches)},[]),q.useEffect(()=>{localStorage.setItem("theme",e?"dark":"light"),e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[e]);const s={isDark:e,toggleTheme:()=>{t(!e)}};return f.jsx(pI.Provider,{value:s,children:n})};function Jf(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var s=n.length;for(e=0;e<s;e++)n[e]&&(t=Jf(n[e]))&&(r&&(r+=" "),r+=t)}else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function gI(){for(var n,e,t=0,r="",s=arguments.length;t<s;t++)(n=arguments[t])&&(e=Jf(n))&&(r&&(r+=" "),r+=e);return r}const nc="-",yI=n=>{const e=wI(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:r}=n;return{getClassGroupId:a=>{const c=a.split(nc);return c[0]===""&&c.length!==1&&c.shift(),Zf(c,e)||_I(a)},getConflictingClassGroupIds:(a,c)=>{const u=t[a]||[];return c&&r[a]?[...u,...r[a]]:u}}},Zf=(n,e)=>{var a;if(n.length===0)return e.classGroupId;const t=n[0],r=e.nextPart.get(t),s=r?Zf(n.slice(1),r):void 0;if(s)return s;if(e.validators.length===0)return;const i=n.join(nc);return(a=e.validators.find(({validator:c})=>c(i)))==null?void 0:a.classGroupId},zu=/^\[(.+)\]$/,_I=n=>{if(zu.test(n)){const e=zu.exec(n)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},wI=n=>{const{theme:e,classGroups:t}=n,r={nextPart:new Map,validators:[]};for(const s in t)sa(t[s],r,s,e);return r},sa=(n,e,t,r)=>{n.forEach(s=>{if(typeof s=="string"){const i=s===""?e:qu(e,s);i.classGroupId=t;return}if(typeof s=="function"){if(vI(s)){sa(s(r),e,t,r);return}e.validators.push({validator:s,classGroupId:t});return}Object.entries(s).forEach(([i,a])=>{sa(a,qu(e,i),t,r)})})},qu=(n,e)=>{let t=n;return e.split(nc).forEach(r=>{t.nextPart.has(r)||t.nextPart.set(r,{nextPart:new Map,validators:[]}),t=t.nextPart.get(r)}),t},vI=n=>n.isThemeGetter,TI=n=>{if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,r=new Map;const s=(i,a)=>{t.set(i,a),e++,e>n&&(e=0,r=t,t=new Map)};return{get(i){let a=t.get(i);if(a!==void 0)return a;if((a=r.get(i))!==void 0)return s(i,a),a},set(i,a){t.has(i)?t.set(i,a):s(i,a)}}},ia="!",oa=":",EI=oa.length,II=n=>{const{prefix:e,experimentalParseClassName:t}=n;let r=s=>{const i=[];let a=0,c=0,u=0,h;for(let S=0;S<s.length;S++){let P=s[S];if(a===0&&c===0){if(P===oa){i.push(s.slice(u,S)),u=S+EI;continue}if(P==="/"){h=S;continue}}P==="["?a++:P==="]"?a--:P==="("?c++:P===")"&&c--}const m=i.length===0?s:s.substring(u),y=bI(m),I=y!==m,k=h&&h>u?h-u:void 0;return{modifiers:i,hasImportantModifier:I,baseClassName:y,maybePostfixModifierPosition:k}};if(e){const s=e+oa,i=r;r=a=>a.startsWith(s)?i(a.substring(s.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:a,maybePostfixModifierPosition:void 0}}if(t){const s=r;r=i=>t({className:i,parseClassName:s})}return r},bI=n=>n.endsWith(ia)?n.substring(0,n.length-1):n.startsWith(ia)?n.substring(1):n,AI=n=>{const e=Object.fromEntries(n.orderSensitiveModifiers.map(r=>[r,!0]));return r=>{if(r.length<=1)return r;const s=[];let i=[];return r.forEach(a=>{a[0]==="["||e[a]?(s.push(...i.sort(),a),i=[]):i.push(a)}),s.push(...i.sort()),s}},xI=n=>({cache:TI(n.cacheSize),parseClassName:II(n),sortModifiers:AI(n),...yI(n)}),SI=/\s+/,kI=(n,e)=>{const{parseClassName:t,getClassGroupId:r,getConflictingClassGroupIds:s,sortModifiers:i}=e,a=[],c=n.trim().split(SI);let u="";for(let h=c.length-1;h>=0;h-=1){const m=c[h],{isExternal:y,modifiers:I,hasImportantModifier:k,baseClassName:S,maybePostfixModifierPosition:P}=t(m);if(y){u=m+(u.length>0?" "+u:u);continue}let C=!!P,F=r(C?S.substring(0,P):S);if(!F){if(!C){u=m+(u.length>0?" "+u:u);continue}if(F=r(S),!F){u=m+(u.length>0?" "+u:u);continue}C=!1}const H=i(I).join(":"),D=k?H+ia:H,K=D+F;if(a.includes(K))continue;a.push(K);const se=s(F,C);for(let te=0;te<se.length;++te){const v=se[te];a.push(D+v)}u=m+(u.length>0?" "+u:u)}return u};function RI(){let n=0,e,t,r="";for(;n<arguments.length;)(e=arguments[n++])&&(t=ep(e))&&(r&&(r+=" "),r+=t);return r}const ep=n=>{if(typeof n=="string")return n;let e,t="";for(let r=0;r<n.length;r++)n[r]&&(e=ep(n[r]))&&(t&&(t+=" "),t+=e);return t};function CI(n,...e){let t,r,s,i=a;function a(u){const h=e.reduce((m,y)=>y(m),n());return t=xI(h),r=t.cache.get,s=t.cache.set,i=c,c(u)}function c(u){const h=r(u);if(h)return h;const m=kI(u,t);return s(u,m),m}return function(){return i(RI.apply(null,arguments))}}const me=n=>{const e=t=>t[n]||[];return e.isThemeGetter=!0,e},tp=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,np=/^\((?:(\w[\w-]*):)?(.+)\)$/i,PI=/^\d+\/\d+$/,NI=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,VI=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,DI=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,OI=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,LI=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,jn=n=>PI.test(n),Y=n=>!!n&&!Number.isNaN(Number(n)),jt=n=>!!n&&Number.isInteger(Number(n)),Ao=n=>n.endsWith("%")&&Y(n.slice(0,-1)),wt=n=>NI.test(n),MI=()=>!0,jI=n=>VI.test(n)&&!DI.test(n),rp=()=>!1,FI=n=>OI.test(n),UI=n=>LI.test(n),$I=n=>!L(n)&&!M(n),BI=n=>hr(n,op,rp),L=n=>tp.test(n),dn=n=>hr(n,ap,jI),xo=n=>hr(n,GI,Y),Hu=n=>hr(n,sp,rp),zI=n=>hr(n,ip,UI),Os=n=>hr(n,cp,FI),M=n=>np.test(n),Vr=n=>dr(n,ap),qI=n=>dr(n,KI),Wu=n=>dr(n,sp),HI=n=>dr(n,op),WI=n=>dr(n,ip),Ls=n=>dr(n,cp,!0),hr=(n,e,t)=>{const r=tp.exec(n);return r?r[1]?e(r[1]):t(r[2]):!1},dr=(n,e,t=!1)=>{const r=np.exec(n);return r?r[1]?e(r[1]):t:!1},sp=n=>n==="position"||n==="percentage",ip=n=>n==="image"||n==="url",op=n=>n==="length"||n==="size"||n==="bg-size",ap=n=>n==="length",GI=n=>n==="number",KI=n=>n==="family-name",cp=n=>n==="shadow",QI=()=>{const n=me("color"),e=me("font"),t=me("text"),r=me("font-weight"),s=me("tracking"),i=me("leading"),a=me("breakpoint"),c=me("container"),u=me("spacing"),h=me("radius"),m=me("shadow"),y=me("inset-shadow"),I=me("text-shadow"),k=me("drop-shadow"),S=me("blur"),P=me("perspective"),C=me("aspect"),F=me("ease"),H=me("animate"),D=()=>["auto","avoid","all","avoid-page","page","left","right","column"],K=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],se=()=>[...K(),M,L],te=()=>["auto","hidden","clip","visible","scroll"],v=()=>["auto","contain","none"],g=()=>[M,L,u],_=()=>[jn,"full","auto",...g()],E=()=>[jt,"none","subgrid",M,L],T=()=>["auto",{span:["full",jt,M,L]},jt,M,L],b=()=>[jt,"auto",M,L],w=()=>["auto","min","max","fr",M,L],_e=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Le=()=>["start","end","center","stretch","center-safe","end-safe"],Ye=()=>["auto",...g()],yt=()=>[jn,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...g()],U=()=>[n,M,L],rn=()=>[...K(),Wu,Hu,{position:[M,L]}],ps=()=>["no-repeat",{repeat:["","x","y","space","round"]}],fr=()=>["auto","cover","contain",HI,BI,{size:[M,L]}],Cn=()=>[Ao,Vr,dn],we=()=>["","none","full",h,M,L],ve=()=>["",Y,Vr,dn],Ct=()=>["solid","dashed","dotted","double"],Pn=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],le=()=>[Y,Ao,Wu,Hu],Nn=()=>["","none",S,M,L],sn=()=>["none",Y,M,L],Vn=()=>["none",Y,M,L],pr=()=>[Y,M,L],on=()=>[jn,"full",...g()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[wt],breakpoint:[wt],color:[MI],container:[wt],"drop-shadow":[wt],ease:["in","out","in-out"],font:[$I],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[wt],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[wt],shadow:[wt],spacing:["px",Y],text:[wt],"text-shadow":[wt],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",jn,L,M,C]}],container:["container"],columns:[{columns:[Y,L,M,c]}],"break-after":[{"break-after":D()}],"break-before":[{"break-before":D()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:se()}],overflow:[{overflow:te()}],"overflow-x":[{"overflow-x":te()}],"overflow-y":[{"overflow-y":te()}],overscroll:[{overscroll:v()}],"overscroll-x":[{"overscroll-x":v()}],"overscroll-y":[{"overscroll-y":v()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:_()}],"inset-x":[{"inset-x":_()}],"inset-y":[{"inset-y":_()}],start:[{start:_()}],end:[{end:_()}],top:[{top:_()}],right:[{right:_()}],bottom:[{bottom:_()}],left:[{left:_()}],visibility:["visible","invisible","collapse"],z:[{z:[jt,"auto",M,L]}],basis:[{basis:[jn,"full","auto",c,...g()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Y,jn,"auto","initial","none",L]}],grow:[{grow:["",Y,M,L]}],shrink:[{shrink:["",Y,M,L]}],order:[{order:[jt,"first","last","none",M,L]}],"grid-cols":[{"grid-cols":E()}],"col-start-end":[{col:T()}],"col-start":[{"col-start":b()}],"col-end":[{"col-end":b()}],"grid-rows":[{"grid-rows":E()}],"row-start-end":[{row:T()}],"row-start":[{"row-start":b()}],"row-end":[{"row-end":b()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":w()}],"auto-rows":[{"auto-rows":w()}],gap:[{gap:g()}],"gap-x":[{"gap-x":g()}],"gap-y":[{"gap-y":g()}],"justify-content":[{justify:[..._e(),"normal"]}],"justify-items":[{"justify-items":[...Le(),"normal"]}],"justify-self":[{"justify-self":["auto",...Le()]}],"align-content":[{content:["normal",..._e()]}],"align-items":[{items:[...Le(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Le(),{baseline:["","last"]}]}],"place-content":[{"place-content":_e()}],"place-items":[{"place-items":[...Le(),"baseline"]}],"place-self":[{"place-self":["auto",...Le()]}],p:[{p:g()}],px:[{px:g()}],py:[{py:g()}],ps:[{ps:g()}],pe:[{pe:g()}],pt:[{pt:g()}],pr:[{pr:g()}],pb:[{pb:g()}],pl:[{pl:g()}],m:[{m:Ye()}],mx:[{mx:Ye()}],my:[{my:Ye()}],ms:[{ms:Ye()}],me:[{me:Ye()}],mt:[{mt:Ye()}],mr:[{mr:Ye()}],mb:[{mb:Ye()}],ml:[{ml:Ye()}],"space-x":[{"space-x":g()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":g()}],"space-y-reverse":["space-y-reverse"],size:[{size:yt()}],w:[{w:[c,"screen",...yt()]}],"min-w":[{"min-w":[c,"screen","none",...yt()]}],"max-w":[{"max-w":[c,"screen","none","prose",{screen:[a]},...yt()]}],h:[{h:["screen","lh",...yt()]}],"min-h":[{"min-h":["screen","lh","none",...yt()]}],"max-h":[{"max-h":["screen","lh",...yt()]}],"font-size":[{text:["base",t,Vr,dn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,M,xo]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Ao,L]}],"font-family":[{font:[qI,L,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[s,M,L]}],"line-clamp":[{"line-clamp":[Y,"none",M,xo]}],leading:[{leading:[i,...g()]}],"list-image":[{"list-image":["none",M,L]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",M,L]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:U()}],"text-color":[{text:U()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Ct(),"wavy"]}],"text-decoration-thickness":[{decoration:[Y,"from-font","auto",M,dn]}],"text-decoration-color":[{decoration:U()}],"underline-offset":[{"underline-offset":[Y,"auto",M,L]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:g()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",M,L]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",M,L]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:rn()}],"bg-repeat":[{bg:ps()}],"bg-size":[{bg:fr()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},jt,M,L],radial:["",M,L],conic:[jt,M,L]},WI,zI]}],"bg-color":[{bg:U()}],"gradient-from-pos":[{from:Cn()}],"gradient-via-pos":[{via:Cn()}],"gradient-to-pos":[{to:Cn()}],"gradient-from":[{from:U()}],"gradient-via":[{via:U()}],"gradient-to":[{to:U()}],rounded:[{rounded:we()}],"rounded-s":[{"rounded-s":we()}],"rounded-e":[{"rounded-e":we()}],"rounded-t":[{"rounded-t":we()}],"rounded-r":[{"rounded-r":we()}],"rounded-b":[{"rounded-b":we()}],"rounded-l":[{"rounded-l":we()}],"rounded-ss":[{"rounded-ss":we()}],"rounded-se":[{"rounded-se":we()}],"rounded-ee":[{"rounded-ee":we()}],"rounded-es":[{"rounded-es":we()}],"rounded-tl":[{"rounded-tl":we()}],"rounded-tr":[{"rounded-tr":we()}],"rounded-br":[{"rounded-br":we()}],"rounded-bl":[{"rounded-bl":we()}],"border-w":[{border:ve()}],"border-w-x":[{"border-x":ve()}],"border-w-y":[{"border-y":ve()}],"border-w-s":[{"border-s":ve()}],"border-w-e":[{"border-e":ve()}],"border-w-t":[{"border-t":ve()}],"border-w-r":[{"border-r":ve()}],"border-w-b":[{"border-b":ve()}],"border-w-l":[{"border-l":ve()}],"divide-x":[{"divide-x":ve()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ve()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Ct(),"hidden","none"]}],"divide-style":[{divide:[...Ct(),"hidden","none"]}],"border-color":[{border:U()}],"border-color-x":[{"border-x":U()}],"border-color-y":[{"border-y":U()}],"border-color-s":[{"border-s":U()}],"border-color-e":[{"border-e":U()}],"border-color-t":[{"border-t":U()}],"border-color-r":[{"border-r":U()}],"border-color-b":[{"border-b":U()}],"border-color-l":[{"border-l":U()}],"divide-color":[{divide:U()}],"outline-style":[{outline:[...Ct(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Y,M,L]}],"outline-w":[{outline:["",Y,Vr,dn]}],"outline-color":[{outline:U()}],shadow:[{shadow:["","none",m,Ls,Os]}],"shadow-color":[{shadow:U()}],"inset-shadow":[{"inset-shadow":["none",y,Ls,Os]}],"inset-shadow-color":[{"inset-shadow":U()}],"ring-w":[{ring:ve()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:U()}],"ring-offset-w":[{"ring-offset":[Y,dn]}],"ring-offset-color":[{"ring-offset":U()}],"inset-ring-w":[{"inset-ring":ve()}],"inset-ring-color":[{"inset-ring":U()}],"text-shadow":[{"text-shadow":["none",I,Ls,Os]}],"text-shadow-color":[{"text-shadow":U()}],opacity:[{opacity:[Y,M,L]}],"mix-blend":[{"mix-blend":[...Pn(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Pn()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Y]}],"mask-image-linear-from-pos":[{"mask-linear-from":le()}],"mask-image-linear-to-pos":[{"mask-linear-to":le()}],"mask-image-linear-from-color":[{"mask-linear-from":U()}],"mask-image-linear-to-color":[{"mask-linear-to":U()}],"mask-image-t-from-pos":[{"mask-t-from":le()}],"mask-image-t-to-pos":[{"mask-t-to":le()}],"mask-image-t-from-color":[{"mask-t-from":U()}],"mask-image-t-to-color":[{"mask-t-to":U()}],"mask-image-r-from-pos":[{"mask-r-from":le()}],"mask-image-r-to-pos":[{"mask-r-to":le()}],"mask-image-r-from-color":[{"mask-r-from":U()}],"mask-image-r-to-color":[{"mask-r-to":U()}],"mask-image-b-from-pos":[{"mask-b-from":le()}],"mask-image-b-to-pos":[{"mask-b-to":le()}],"mask-image-b-from-color":[{"mask-b-from":U()}],"mask-image-b-to-color":[{"mask-b-to":U()}],"mask-image-l-from-pos":[{"mask-l-from":le()}],"mask-image-l-to-pos":[{"mask-l-to":le()}],"mask-image-l-from-color":[{"mask-l-from":U()}],"mask-image-l-to-color":[{"mask-l-to":U()}],"mask-image-x-from-pos":[{"mask-x-from":le()}],"mask-image-x-to-pos":[{"mask-x-to":le()}],"mask-image-x-from-color":[{"mask-x-from":U()}],"mask-image-x-to-color":[{"mask-x-to":U()}],"mask-image-y-from-pos":[{"mask-y-from":le()}],"mask-image-y-to-pos":[{"mask-y-to":le()}],"mask-image-y-from-color":[{"mask-y-from":U()}],"mask-image-y-to-color":[{"mask-y-to":U()}],"mask-image-radial":[{"mask-radial":[M,L]}],"mask-image-radial-from-pos":[{"mask-radial-from":le()}],"mask-image-radial-to-pos":[{"mask-radial-to":le()}],"mask-image-radial-from-color":[{"mask-radial-from":U()}],"mask-image-radial-to-color":[{"mask-radial-to":U()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":K()}],"mask-image-conic-pos":[{"mask-conic":[Y]}],"mask-image-conic-from-pos":[{"mask-conic-from":le()}],"mask-image-conic-to-pos":[{"mask-conic-to":le()}],"mask-image-conic-from-color":[{"mask-conic-from":U()}],"mask-image-conic-to-color":[{"mask-conic-to":U()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:rn()}],"mask-repeat":[{mask:ps()}],"mask-size":[{mask:fr()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",M,L]}],filter:[{filter:["","none",M,L]}],blur:[{blur:Nn()}],brightness:[{brightness:[Y,M,L]}],contrast:[{contrast:[Y,M,L]}],"drop-shadow":[{"drop-shadow":["","none",k,Ls,Os]}],"drop-shadow-color":[{"drop-shadow":U()}],grayscale:[{grayscale:["",Y,M,L]}],"hue-rotate":[{"hue-rotate":[Y,M,L]}],invert:[{invert:["",Y,M,L]}],saturate:[{saturate:[Y,M,L]}],sepia:[{sepia:["",Y,M,L]}],"backdrop-filter":[{"backdrop-filter":["","none",M,L]}],"backdrop-blur":[{"backdrop-blur":Nn()}],"backdrop-brightness":[{"backdrop-brightness":[Y,M,L]}],"backdrop-contrast":[{"backdrop-contrast":[Y,M,L]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Y,M,L]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Y,M,L]}],"backdrop-invert":[{"backdrop-invert":["",Y,M,L]}],"backdrop-opacity":[{"backdrop-opacity":[Y,M,L]}],"backdrop-saturate":[{"backdrop-saturate":[Y,M,L]}],"backdrop-sepia":[{"backdrop-sepia":["",Y,M,L]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":g()}],"border-spacing-x":[{"border-spacing-x":g()}],"border-spacing-y":[{"border-spacing-y":g()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",M,L]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Y,"initial",M,L]}],ease:[{ease:["linear","initial",F,M,L]}],delay:[{delay:[Y,M,L]}],animate:[{animate:["none",H,M,L]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[P,M,L]}],"perspective-origin":[{"perspective-origin":se()}],rotate:[{rotate:sn()}],"rotate-x":[{"rotate-x":sn()}],"rotate-y":[{"rotate-y":sn()}],"rotate-z":[{"rotate-z":sn()}],scale:[{scale:Vn()}],"scale-x":[{"scale-x":Vn()}],"scale-y":[{"scale-y":Vn()}],"scale-z":[{"scale-z":Vn()}],"scale-3d":["scale-3d"],skew:[{skew:pr()}],"skew-x":[{"skew-x":pr()}],"skew-y":[{"skew-y":pr()}],transform:[{transform:[M,L,"","none","gpu","cpu"]}],"transform-origin":[{origin:se()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:on()}],"translate-x":[{"translate-x":on()}],"translate-y":[{"translate-y":on()}],"translate-z":[{"translate-z":on()}],"translate-none":["translate-none"],accent:[{accent:U()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:U()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",M,L]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":g()}],"scroll-mx":[{"scroll-mx":g()}],"scroll-my":[{"scroll-my":g()}],"scroll-ms":[{"scroll-ms":g()}],"scroll-me":[{"scroll-me":g()}],"scroll-mt":[{"scroll-mt":g()}],"scroll-mr":[{"scroll-mr":g()}],"scroll-mb":[{"scroll-mb":g()}],"scroll-ml":[{"scroll-ml":g()}],"scroll-p":[{"scroll-p":g()}],"scroll-px":[{"scroll-px":g()}],"scroll-py":[{"scroll-py":g()}],"scroll-ps":[{"scroll-ps":g()}],"scroll-pe":[{"scroll-pe":g()}],"scroll-pt":[{"scroll-pt":g()}],"scroll-pr":[{"scroll-pr":g()}],"scroll-pb":[{"scroll-pb":g()}],"scroll-pl":[{"scroll-pl":g()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",M,L]}],fill:[{fill:["none",...U()]}],"stroke-w":[{stroke:[Y,Vr,dn,xo]}],stroke:[{stroke:["none",...U()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},YI=CI(QI);function zn(...n){return YI(gI(n))}const XI=(n,e)=>{switch(e.type){case"ADD_TOAST":return{...n,toasts:[...n.toasts,e.payload]};case"REMOVE_TOAST":return{...n,toasts:n.toasts.filter(t=>t.id!==e.payload)};case"CLEAR_TOASTS":return{...n,toasts:[]};default:return n}},lp=q.createContext(void 0),rc=()=>{const n=q.useContext(lp);if(!n)throw new Error("useToast must be used within a ToastProvider");return n},JI=({children:n})=>{const[e,t]=q.useReducer(XI,{toasts:[]}),r=a=>{const c=Math.random().toString(36).substr(2,9);t({type:"ADD_TOAST",payload:{...a,id:c}})},s=a=>{t({type:"REMOVE_TOAST",payload:a})},i=()=>{t({type:"CLEAR_TOASTS"})};return f.jsxs(lp.Provider,{value:{toasts:e.toasts,addToast:r,removeToast:s,clearToasts:i},children:[n,f.jsx(ZI,{})]})},ZI=()=>{const{toasts:n}=rc();return Ku.createPortal(f.jsx("div",{className:"fixed top-4 right-4 z-50 space-y-2",children:n.map(e=>f.jsx(eb,{toast:e},e.id))}),document.body)},eb=({toast:n})=>{const{removeToast:e}=rc();q.useEffect(()=>{if(n.duration!==0){const s=setTimeout(()=>{e(n.id)},n.duration||5e3);return()=>clearTimeout(s)}},[n.id,n.duration,e]);const t=()=>{switch(n.type){case"success":return f.jsx("svg",{className:"h-5 w-5 text-green-400",fill:"currentColor",viewBox:"0 0 20 20",children:f.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})});case"error":return f.jsx("svg",{className:"h-5 w-5 text-red-400",fill:"currentColor",viewBox:"0 0 20 20",children:f.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})});case"warning":return f.jsx("svg",{className:"h-5 w-5 text-yellow-400",fill:"currentColor",viewBox:"0 0 20 20",children:f.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})});case"info":return f.jsx("svg",{className:"h-5 w-5 text-blue-400",fill:"currentColor",viewBox:"0 0 20 20",children:f.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})})}},r=()=>{switch(n.type){case"success":return"bg-green-50 border-green-200 text-green-800";case"error":return"bg-red-50 border-red-200 text-red-800";case"warning":return"bg-yellow-50 border-yellow-200 text-yellow-800";case"info":return"bg-blue-50 border-blue-200 text-blue-800"}};return f.jsx("div",{className:zn("max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden border",r()),role:"alert","aria-live":"assertive",children:f.jsx("div",{className:"p-4",children:f.jsxs("div",{className:"flex items-start",children:[f.jsx("div",{className:"flex-shrink-0",children:t()}),f.jsxs("div",{className:"ml-3 w-0 flex-1",children:[f.jsx("p",{className:"text-sm font-medium",children:n.title}),n.message&&f.jsx("p",{className:"mt-1 text-sm opacity-90",children:n.message}),n.action&&f.jsx("div",{className:"mt-2",children:f.jsx("button",{onClick:n.action.onClick,className:"text-sm font-medium underline hover:no-underline",children:n.action.label})})]}),f.jsx("div",{className:"ml-4 flex-shrink-0 flex",children:f.jsxs("button",{onClick:()=>e(n.id),className:"rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[f.jsx("span",{className:"sr-only",children:"Close"}),f.jsx("svg",{className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:f.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})]})})})},Pb=()=>{const{addToast:n}=rc();return{success:(e,t)=>n({type:"success",title:e,message:t}),error:(e,t)=>n({type:"error",title:e,message:t}),warning:(e,t)=>n({type:"warning",title:e,message:t}),info:(e,t)=>n({type:"info",title:e,message:t})}},up=()=>{const n=q.useContext(Xf);if(n===void 0)throw new Error("useAuth must be used within an AuthProvider");return n},Ce=({name:n,size:e="md",className:t=""})=>{const r={sm:"w-4 h-4",md:"w-5 h-5",lg:"w-6 h-6"},s={Home:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})}),Search:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),Car:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7v8a2 2 0 002 2h4a2 2 0 002-2V7M8 7a2 2 0 00-2 2v6a2 2 0 002 2M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2m-6 0h6"})}),Info:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),Phone:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})}),User:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),Logout:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})}),Login:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"})}),Plus:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v16m8-8H4"})}),Menu:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})}),Sun:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}),Moon:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})}),CheckCircle:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),XCircle:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),AlertTriangle:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z"})}),Clock:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),FileText:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),CreditCard:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"})}),DollarSign:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"})}),MapPin:f.jsxs("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]}),Star:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"currentColor",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"})}),Mail:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),Lock:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),Shield:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})}),BarChart:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),TrendingUp:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),Upload:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})}),Download:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),Edit:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})}),Trash:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})}),Heart:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"currentColor",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})}),Calendar:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})}),Clipboard:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})}),Users:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"})}),Gift:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"})}),Calculator:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"})}),Bell:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 17h5l-5 5v-5zM4.828 7l2.586 2.586a2 2 0 002.828 0L12.828 7H4.828zM4 12h16M4 16h16M4 20h16"})}),Scale:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l-2.83 2.83M6 7l2.83 2.83m6.17-2.83l-3 9m3-9l3 1m-3-1l-2.83 2.83M18 7l2.83 2.83M18 7l-3 9m3-9l3 1m-3-1l-2.83 2.83"})}),Settings:f.jsxs("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),Play:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"currentColor",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z"})}),Pause:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"currentColor",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),Zap:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),Eye:f.jsxs("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}),Motorcycle:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"})})};return f.jsx(f.Fragment,{children:s[n]||null})},tb=()=>{const[n,e]=q.useState(!1),[t,r]=q.useState([{id:"1",text:"Hi! I'm your RideShare SA assistant. How can I help you today?",isUser:!1,timestamp:new Date,type:"text"}]),[s,i]=q.useState(""),[a,c]=q.useState(!1),[u,h]=q.useState({conversationHistory:[],userPreferences:{}}),m=q.useRef(null),y=[{keywords:["hello","hi","hey","good morning","good afternoon","good evening"],synonyms:["greetings","salutations","howdy"],response:"Hello! Welcome to RideShare SA! I'm here to help you with bookings, listings, and any questions you might have. What can I assist you with today?",followUp:["How do I book a vehicle?","How do I list my car?","What are your prices?"],priority:1},{keywords:["book","rent","reserve","hire","rental"],synonyms:["reservation","booking","renting","hiring"],response:`Great! To book a vehicle:

1. Go to "Browse Rentals" in the menu
2. Search by location and dates
3. Filter by vehicle type and features
4. Click "Book Now" on your chosen vehicle
5. Complete the booking process

Need help with any of these steps?`,followUp:["What documents do I need?","How do I cancel a booking?","What if the car breaks down?"],priority:2},{keywords:["list","host","earn","money","income"],synonyms:["hosting","listing","earning","revenue"],response:`Perfect! To list your vehicle and start earning:

1. Click "List Your Vehicle" in the menu
2. Create a host account (if you haven't already)
3. Add vehicle details, photos, and description
4. Set your availability and pricing
5. Submit for approval

Our hosts typically earn R200-800 per day!`,followUp:["What are the requirements?","How much can I earn?","What insurance do I need?"],priority:2},{keywords:["price","cost","expensive","cheap","affordable"],synonyms:["pricing","rates","fees","costs"],response:`Our pricing is competitive and varies by vehicle:

• Economy cars: R150-300/day
• SUVs: R300-500/day
• Luxury vehicles: R500+/day
• Bakkies: R200-400/day

All prices include basic insurance. You can see exact pricing when browsing vehicles!`,followUp:["Are there any hidden fees?","Do you offer discounts?","What payment methods do you accept?"],priority:3},{keywords:["safe","insurance","secure","protection"],synonyms:["safety","security","insured","protected"],response:`Safety is our #1 priority!

• All vehicles are fully insured
• Hosts are verified and background checked
• 24/7 support team
• Secure payment processing
• Vehicle condition checks

You can read reviews and safety guidelines before booking.`,followUp:["What insurance is included?","How do you verify hosts?","What if there's an accident?"],priority:3},{keywords:["pay","payment","eft","card","money"],synonyms:["paying","billing","transaction","checkout"],response:`We accept multiple payment methods:

• Credit/Debit cards
• EFT transfers
• Payfast (South African)
• Bank transfers

Payment is 100% secure and processed when you confirm your booking. No hidden fees!`,followUp:["When do I get charged?","Can I get a refund?","Do you accept cash?"],priority:3},{keywords:["where","location","city","area"],synonyms:["place","region","town","province"],response:`We operate across South Africa! 🇿🇦

Major cities:
• Cape Town
• Johannesburg
• Durban
• Pretoria
• Port Elizabeth
• Bloemfontein

Use the location filter to find vehicles near you!`,followUp:["Do you deliver to my area?","Can I pick up from the airport?","Are there any restrictions?"],priority:3},{keywords:["help","support","problem","issue","trouble"],synonyms:["assistance","aid","support","problem"],response:`I'm here to help! 🤝

For additional support:
• FAQ page: /faq
• Email: support@rideshare-sa.co.za
• Phone: +27 21 123 4567
• Live chat: Right here!

What specific issue can I help you with?`,followUp:["How do I contact support?","What are your hours?","Can you escalate my issue?"],priority:4}],I=()=>{var D;(D=m.current)==null||D.scrollIntoView({behavior:"smooth"})};q.useEffect(()=>{I()},[t]);const k=q.useCallback(D=>{const K=D.toLowerCase(),se=K.split(/\s+/);let te=null,v=0;for(const g of y){let _=0;for(const E of g.keywords)K.includes(E)&&(_+=2);for(const E of g.synonyms)K.includes(E)&&(_+=1.5);for(const E of se)for(const T of g.keywords)(T.includes(E)||E.includes(T))&&(_+=.5);_*=1+g.priority*.1,_>v&&(v=_,te=g)}return v>1?te:null},[]),S=q.useCallback(D=>{const K=k(D);return K?(h(v=>({...v,lastIntent:K.keywords[0],conversationHistory:[...v.conversationHistory.slice(-4),D]})),{response:K.response,followUp:K.followUp}):u.conversationHistory.slice(-3).some(v=>v.toLowerCase().includes("book")||v.toLowerCase().includes("rent"))?{response:`I see you're interested in booking!

I can help with:
• Finding the right vehicle
• Booking process
• Payment options
• Pickup locations

What specific aspect would you like to know more about?`,followUp:["What documents do I need?","How do I cancel?","What if there's a problem?"]}:{response:`I understand you're asking about: "${D}"

I can help with:
• Booking vehicles
• Listing your car
• Pricing information
• Safety & insurance
• Payment methods
• Locations
• General support

What would you like to know more about?`,followUp:["How do I book a vehicle?","How do I list my car?","What are your prices?","Is it safe?"]}},[k,u.conversationHistory]),P=async D=>{const K=D||s.trim();if(!K)return;const se={id:Date.now().toString(),text:K,isUser:!0,timestamp:new Date,type:"text"};r(v=>[...v,se]),i(""),c(!0);const te=800+Math.random()*1200;setTimeout(()=>{const v=S(K),g={id:(Date.now()+1).toString(),text:v.response,isUser:!1,timestamp:new Date,type:"text"};r(_=>[..._,g]),c(!1)},te)},C=D=>{D.key==="Enter"&&!D.shiftKey&&(D.preventDefault(),P())},F=[{text:"How do I book a vehicle?",icon:"Car"},{text:"How do I list my car?",icon:"DollarSign"},{text:"What are your prices?",icon:"DollarSign"},{text:"Is it safe?",icon:"Shield"},{text:"Contact support",icon:"Phone"}],H=D=>{P(D)};return f.jsxs(f.Fragment,{children:[f.jsx(qe.button,{onClick:()=>e(!n),className:"fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-full shadow-2xl z-50 transition-all duration-300 hover:shadow-blue-500/25",whileHover:{scale:1.1,rotate:5},whileTap:{scale:.95},"aria-label":"Open chat",children:f.jsxs("div",{className:"relative",children:[f.jsx(el,{mode:"wait",children:n?f.jsx(qe.svg,{initial:{rotate:-90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:90,opacity:0},className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})},"close"):f.jsx(qe.svg,{initial:{rotate:90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:-90,opacity:0},className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})},"chat")}),!n&&f.jsx(qe.div,{initial:{scale:0},animate:{scale:1},className:"absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"})]})}),f.jsx(el,{children:n&&f.jsxs(qe.div,{initial:{opacity:0,y:20,scale:.8},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:20,scale:.8},transition:{duration:.3,type:"spring",damping:25,stiffness:500},className:"fixed bottom-24 right-6 w-96 h-[500px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 flex flex-col backdrop-blur-sm bg-white/95 dark:bg-gray-900/95",children:[f.jsxs("div",{className:"bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl flex items-center justify-between",children:[f.jsxs("div",{className:"flex items-center",children:[f.jsx("div",{className:"w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3 backdrop-blur-sm",children:f.jsx("span",{className:"text-lg",children:"🤖"})}),f.jsxs("div",{children:[f.jsx("h3",{className:"font-bold text-lg",children:"RideShare Assistant"}),f.jsxs("div",{className:"flex items-center",children:[f.jsx("div",{className:"w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"}),f.jsx("p",{className:"text-sm text-blue-100",children:"Online now"})]})]})]}),f.jsxs("div",{className:"flex items-center space-x-2",children:[f.jsx(qe.button,{onClick:()=>{r([{id:"1",text:"Hi! I'm your RideShare SA assistant. How can I help you today?",isUser:!1,timestamp:new Date,type:"text"}]),h({conversationHistory:[],userPreferences:{}})},className:"text-white hover:text-blue-200 transition-colors p-2 rounded-lg hover:bg-white/10",title:"Start new conversation",whileHover:{scale:1.1},whileTap:{scale:.9},children:f.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})})}),f.jsx(qe.button,{onClick:()=>e(!1),className:"text-white hover:text-blue-200 transition-colors p-2 rounded-lg hover:bg-white/10",whileHover:{scale:1.1},whileTap:{scale:.9},children:f.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]})]}),f.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-800",children:[t.map(D=>f.jsx(qe.div,{initial:{opacity:0,y:10,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{duration:.2},className:`flex ${D.isUser?"justify-end":"justify-start"}`,children:f.jsxs("div",{className:`flex items-end space-x-2 ${D.isUser?"flex-row-reverse space-x-reverse":""}`,children:[!D.isUser&&f.jsx("div",{className:"w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold",children:"🤖"}),f.jsxs("div",{className:`max-w-xs px-4 py-3 rounded-2xl shadow-sm ${D.isUser?"bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-md":"bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 rounded-bl-md"}`,children:[f.jsx("div",{className:"text-sm whitespace-pre-line leading-relaxed",children:D.text}),f.jsx("p",{className:`text-xs mt-2 ${D.isUser?"text-blue-100":"text-gray-500 dark:text-gray-400"}`,children:D.timestamp.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]}),D.isUser&&f.jsx("div",{className:"w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold",children:f.jsx(Ce,{name:"User",size:"sm"})})]})},D.id)),a&&f.jsx(qe.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"flex justify-start",children:f.jsxs("div",{className:"flex items-end space-x-2",children:[f.jsx("div",{className:"w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold",children:"🤖"}),f.jsx("div",{className:"bg-white dark:bg-gray-700 px-4 py-3 rounded-2xl rounded-bl-md border border-gray-200 dark:border-gray-600 shadow-sm",children:f.jsxs("div",{className:"flex items-center space-x-2",children:[f.jsxs("div",{className:"flex space-x-1",children:[f.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full animate-bounce"}),f.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full animate-bounce",style:{animationDelay:"0.1s"}}),f.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full animate-bounce",style:{animationDelay:"0.2s"}})]}),f.jsx("span",{className:"text-xs text-gray-500 dark:text-gray-400",children:"RideShare Assistant is typing..."})]})})]})}),f.jsx("div",{ref:m})]}),t.length===1&&f.jsxs("div",{className:"px-4 pb-2 bg-gray-50 dark:bg-gray-800",children:[f.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mb-3 font-medium",children:"Quick questions:"}),f.jsx("div",{className:"flex flex-wrap gap-2",children:F.map((D,K)=>f.jsxs(qe.button,{onClick:()=>H(D.text),className:"text-xs bg-white dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600 px-3 py-2 rounded-full transition-all duration-200 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-gray-500 flex items-center space-x-1 shadow-sm hover:shadow-md",whileHover:{scale:1.05},whileTap:{scale:.95},children:[f.jsx(Ce,{name:D.icon,size:"sm"}),f.jsx("span",{children:D.text})]},K))})]}),f.jsx("div",{className:"p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900",children:f.jsxs("div",{className:"flex space-x-3",children:[f.jsxs("div",{className:"flex-1 relative",children:[f.jsx("input",{type:"text",value:s,onChange:D=>i(D.target.value),onKeyPress:C,placeholder:"Type your message...",className:"w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white text-sm placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 shadow-sm focus:shadow-md"}),s&&f.jsx(qe.div,{initial:{scale:0},animate:{scale:1},className:"absolute right-3 top-1/2 transform -translate-y-1/2",children:f.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"})})]}),f.jsx(qe.button,{onClick:()=>P(),disabled:!s.trim()||a,className:"bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed text-white px-4 py-3 rounded-2xl transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl disabled:shadow-none",whileHover:{scale:s.trim()&&!a?1.05:1},whileTap:{scale:s.trim()&&!a?.95:1},children:a?f.jsx("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"}):f.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 19l9 2-9-18-9 18 9-2zm0 0v-8"})})})]})})]})})]})},nb=({userId:n,className:e=""})=>{const[t,r]=q.useState([]),[s,i]=q.useState(!1),[a,c]=q.useState(0);q.useEffect(()=>{u();const S=setInterval(u,3e4);return()=>clearInterval(S)},[n]);const u=async()=>{try{const S=localStorage.getItem("authToken"),P=await fetch(`/api/notifications/${n}`,{headers:{Authorization:`Bearer ${S}`,"Content-Type":"application/json"}});if(P.ok){const C=await P.json();r(C.notifications||[]),c(C.unreadCount||0)}}catch(S){console.error("Error fetching notifications:",S),r([{id:"1",type:"approval",title:"Account Approved!",message:"Your account has been verified and approved. You can now make bookings on RideShare SA.",timestamp:new Date(Date.now()-1e3*60*30),read:!1,actionUrl:"/dashboard",actionText:"Go to Dashboard"},{id:"2",type:"rejection",title:"Document Rejected",message:"Your driver's license was rejected. Please upload a clearer photo and resubmit.",timestamp:new Date(Date.now()-1e3*60*60*2),read:!1,actionUrl:"/dashboard/documents",actionText:"Resubmit Documents"},{id:"3",type:"approval",title:"Vehicle Listing Approved",message:"Your 2020 Toyota Corolla listing has been approved and is now live on the marketplace.",timestamp:new Date(Date.now()-1e3*60*60*24),read:!0,actionUrl:"/dashboard/host",actionText:"View Listing"}]),c(2)}},h=async S=>{try{const P=localStorage.getItem("authToken");await fetch(`/api/notifications/${S}/read`,{method:"POST",headers:{Authorization:`Bearer ${P}`,"Content-Type":"application/json"}}),r(C=>C.map(F=>F.id===S?{...F,read:!0}:F)),c(C=>Math.max(0,C-1))}catch(P){console.error("Error marking notification as read:",P)}},m=async()=>{try{const S=localStorage.getItem("authToken");await fetch(`/api/notifications/${n}/read-all`,{method:"POST",headers:{Authorization:`Bearer ${S}`,"Content-Type":"application/json"}}),r(P=>P.map(C=>({...C,read:!0}))),c(0)}catch(S){console.error("Error marking all notifications as read:",S)}},y=S=>{switch(S){case"approval":return"CheckCircle";case"rejection":return"XCircle";case"info":return"Info";default:return"Bell"}},I=S=>{switch(S){case"approval":return"text-green-400";case"rejection":return"text-red-400";case"info":return"text-blue-400";default:return"text-white"}},k=S=>{const C=new Date().getTime()-S.getTime(),F=Math.floor(C/(1e3*60)),H=Math.floor(C/(1e3*60*60)),D=Math.floor(C/(1e3*60*60*24));return F<60?`${F}m ago`:H<24?`${H}h ago`:`${D}d ago`};return f.jsxs("div",{className:`relative ${e}`,children:[f.jsxs("button",{onClick:()=>i(!s),className:"relative p-2 glass-button hover:bg-white/20 transition-all duration-300",title:"Notifications",children:[f.jsx("svg",{className:"w-5 h-5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 00-15 0v5h5l-5 5-5-5h5v-5a7.5 7.5 0 0115 0v5z"})}),a>0&&f.jsx("span",{className:"absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center",children:a>9?"9+":a})]}),s&&f.jsxs("div",{className:"absolute right-0 top-full mt-2 w-80 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl z-50",children:[f.jsx("div",{className:"p-4 border-b border-white/20",children:f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("h3",{className:"text-lg font-semibold text-white",children:"Notifications"}),a>0&&f.jsx("button",{onClick:m,className:"text-xs text-blue-400 hover:text-blue-300 transition-colors",children:"Mark all as read"})]})}),f.jsx("div",{className:"max-h-96 overflow-y-auto",children:t.length===0?f.jsxs("div",{className:"p-4 text-center text-white/70",children:[f.jsx("div",{className:"mb-2",children:f.jsx(Ce,{name:"Bell",size:"lg",className:"text-white/50 mx-auto"})}),f.jsx("p",{children:"No notifications yet"})]}):t.map(S=>f.jsx("div",{className:`p-4 border-b border-white/10 hover:bg-white/5 transition-colors ${S.read?"":"bg-white/5"}`,onClick:()=>{S.read||h(S.id),S.actionUrl&&(window.location.href=S.actionUrl)},children:f.jsxs("div",{className:"flex items-start space-x-3",children:[f.jsx(Ce,{name:y(S.type),size:"lg"}),f.jsxs("div",{className:"flex-1 min-w-0",children:[f.jsxs("div",{className:"flex items-center justify-between mb-1",children:[f.jsx("h4",{className:`text-sm font-medium ${I(S.type)}`,children:S.title}),f.jsxs("div",{className:"flex items-center space-x-2",children:[f.jsx("span",{className:"text-xs text-white/60",children:k(S.timestamp)}),!S.read&&f.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"})]})]}),f.jsx("p",{className:"text-sm text-white/80 mb-2",children:S.message}),S.actionText&&f.jsxs("button",{className:"text-xs text-blue-400 hover:text-blue-300 transition-colors",children:[S.actionText," →"]})]})]})},S.id))}),t.length>0&&f.jsx("div",{className:"p-4 border-t border-white/20",children:f.jsx("button",{className:"w-full text-center text-sm text-white/70 hover:text-white transition-colors",children:"View all notifications"})})]})]})},Xe=({children:n})=>{const{user:e,logout:t}=up(),[r,s]=q.useState(!1),i=Qu(),a=u=>i.pathname===u,c=[{name:"Home",path:"/",icon:"Home"},{name:"Browse",path:"/search",icon:"Search"},{name:"Host",path:"/dashboard/host",icon:"Car"},{name:"About",path:"/about",icon:"Info"},{name:"Contact",path:"/contact",icon:"Phone"}];return f.jsxs("div",{className:"min-h-screen",children:[f.jsx("header",{className:"fixed top-4 left-0 right-0 z-50 w-full px-4",children:f.jsxs("div",{className:"flex items-center max-w-6xl mx-auto h-16",children:[f.jsx(Me,{to:"/",className:"flex items-center hover:opacity-80 transition-all duration-300 h-full",children:f.jsx("div",{className:"flex items-center bg-gray-700 rounded-full h-full px-8 shadow-lg",children:f.jsx("img",{src:"/logo.png",alt:"RideShare SA Logo",className:"h-8 w-auto"})})}),f.jsx("nav",{className:"flex items-center absolute left-1/2 transform -translate-x-1/2",children:f.jsxs("div",{className:"bg-white/25 backdrop-blur-md border border-white/20 rounded-full shadow-xl px-4 py-2",children:[f.jsxs("div",{className:"flex items-center justify-center h-[40px] px-4",children:[f.jsx("div",{className:"hidden md:flex items-center space-x-1",children:c.map(u=>f.jsxs(Me,{to:u.path,className:`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${a(u.path)?"glass-button-primary text-white":"glass-button text-white/80 hover:text-white"}`,children:[f.jsx(Ce,{name:u.icon,size:"sm"}),f.jsx("span",{children:u.name})]},u.path))}),f.jsxs("div",{className:"flex items-center space-x-1 ml-3",children:[e&&e.id&&f.jsx(nb,{userId:e.id.toString()}),e?f.jsxs("div",{className:"flex items-center space-x-1",children:[f.jsxs(Me,{to:"/dashboard",className:`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${a("/dashboard")||i.pathname.startsWith("/dashboard")?"glass-button-primary text-white":"glass-button text-white/80 hover:text-white"}`,children:[f.jsx(Ce,{name:"User",size:"sm"}),f.jsx("span",{className:"hidden sm:block",children:"Dashboard"})]}),f.jsxs("button",{onClick:t,className:"glass-button flex items-center space-x-1 px-2.5 py-1.5 text-white/80 hover:text-white transition-all duration-300",children:[f.jsx(Ce,{name:"Logout",size:"sm"}),f.jsx("span",{className:"hidden sm:block",children:"Logout"})]})]}):f.jsxs("div",{className:"flex items-center space-x-1",children:[f.jsxs(Me,{to:"/login",className:`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${a("/login")?"glass-button-primary text-white":"glass-button text-white/80 hover:text-white"}`,children:[f.jsx(Ce,{name:"Login",size:"sm"}),f.jsx("span",{className:"hidden sm:block",children:"Login"})]}),f.jsxs(Me,{to:"/register",className:"btn-primary flex items-center space-x-1 px-3 py-1.5",children:[f.jsx(Ce,{name:"Plus",size:"sm"}),f.jsx("span",{className:"hidden sm:block",children:"Sign Up"})]})]}),f.jsx("button",{onClick:()=>s(!r),className:"md:hidden glass-button p-1.5 text-white/80 hover:text-white transition-all duration-300",children:f.jsx(Ce,{name:"Menu",size:"sm"})})]})]}),r&&f.jsx("div",{className:"md:hidden absolute top-full left-0 right-0 mt-2 bg-white/25 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl px-4 py-4 min-w-max",children:f.jsxs("div",{className:"space-y-2",children:[c.map(u=>f.jsxs(Me,{to:u.path,onClick:()=>s(!1),className:`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${a(u.path)?"glass-button-primary text-white":"glass-button text-white/80 hover:text-white"}`,children:[f.jsx(Ce,{name:u.icon,size:"sm"}),f.jsx("span",{children:u.name})]},u.path)),e?f.jsxs(f.Fragment,{children:[f.jsxs(Me,{to:"/dashboard",onClick:()=>s(!1),className:`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${a("/dashboard")||i.pathname.startsWith("/dashboard")?"glass-button-primary text-white":"glass-button text-white/80 hover:text-white"}`,children:[f.jsx(Ce,{name:"User",size:"sm"}),f.jsx("span",{children:"Dashboard"})]}),f.jsxs("button",{onClick:()=>{t(),s(!1)},className:"glass-button flex items-center space-x-3 w-full px-4 py-3 text-white/80 hover:text-white transition-all duration-300 whitespace-nowrap",children:[f.jsx(Ce,{name:"Logout",size:"sm"}),f.jsx("span",{children:"Logout"})]})]}):f.jsxs(f.Fragment,{children:[f.jsxs(Me,{to:"/login",onClick:()=>s(!1),className:`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${a("/login")?"glass-button-primary text-white":"glass-button text-white/80 hover:text-white"}`,children:[f.jsx(Ce,{name:"Login",size:"sm"}),f.jsx("span",{children:"Login"})]}),f.jsxs(Me,{to:"/register",onClick:()=>s(!1),className:"btn-primary flex items-center space-x-3 px-4 py-3 whitespace-nowrap",children:[f.jsx(Ce,{name:"Plus",size:"sm"}),f.jsx("span",{children:"Sign Up"})]})]})]})})]})})]})}),f.jsx("main",{className:"pt-20",children:n}),f.jsx("footer",{className:"bg-black/50 backdrop-blur-sm border-t border-white/10 py-4",children:f.jsx("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:f.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0",children:[f.jsxs("div",{className:"flex items-center space-x-4",children:[f.jsx("div",{className:"logo-footer",children:f.jsx("img",{src:"/logo.png",alt:"RideShare SA Logo",className:"h-8 w-auto"})}),f.jsx("p",{className:"text-gray-400 text-xs",children:"© 2024 RideShare SA. Cape Town, South Africa"})]}),f.jsxs("div",{className:"flex items-center space-x-6",children:[f.jsx(Me,{to:"/",className:"text-gray-400 hover:text-white transition-colors text-xs",children:"Home"}),f.jsx(Me,{to:"/search",className:"text-gray-400 hover:text-white transition-colors text-xs",children:"Browse"}),f.jsx(Me,{to:"/about",className:"text-gray-400 hover:text-white transition-colors text-xs",children:"About"}),f.jsx(Me,{to:"/contact",className:"text-gray-400 hover:text-white transition-colors text-xs",children:"Contact"})]}),f.jsxs("div",{className:"flex items-center space-x-4",children:[f.jsx("a",{href:"#",className:"text-gray-400 hover:text-white transition-colors","aria-label":"Facebook",children:f.jsx("svg",{className:"h-4 w-4",fill:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})}),f.jsx("a",{href:"#",className:"text-gray-400 hover:text-white transition-colors","aria-label":"Twitter",children:f.jsx("svg",{className:"h-4 w-4",fill:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{d:"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"})})}),f.jsx("a",{href:"#",className:"text-gray-400 hover:text-white transition-colors","aria-label":"LinkedIn",children:f.jsx("svg",{className:"h-4 w-4",fill:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),f.jsxs(Me,{to:"/admin-login",className:"text-gray-400 hover:text-white transition-colors text-xs flex items-center space-x-1",title:"Admin Access",children:[f.jsx(Ce,{name:"User",size:"sm"}),f.jsx("span",{children:"Admin"})]})]})]})})}),f.jsx(tb,{})]})},rb=({children:n,requiredRole:e,allowedRoles:t})=>{const{user:r,loading:s}=up(),i=Qu();return s?f.jsx("div",{className:"min-h-screen flex items-center justify-center",children:f.jsx("div",{className:"animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"})}):r?e&&r.role!==e?f.jsx(so,{to:"/unauthorized",replace:!0}):t&&!t.includes(r.role)?f.jsx(so,{to:"/unauthorized",replace:!0}):f.jsx(f.Fragment,{children:n}):f.jsx(so,{to:"/login",state:{from:i},replace:!0})},Gu={sm:"h-4 w-4",md:"h-8 w-8",lg:"h-12 w-12"},sb=({size:n="md",variant:e="spinner",className:t,text:r})=>{const s=()=>f.jsxs("svg",{className:zn("animate-spin",Gu[n],t),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[f.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),f.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),i=()=>f.jsx("div",{className:zn("flex space-x-1",t),children:[0,1,2].map(h=>f.jsx("div",{className:zn("rounded-full bg-current animate-pulse",n==="sm"?"h-2 w-2":n==="md"?"h-3 w-3":"h-4 w-4"),style:{animationDelay:`${h*.2}s`,animationDuration:"1s"}},h))}),a=()=>f.jsx("div",{className:zn("rounded-full bg-current animate-pulse",Gu[n],t)}),c=()=>f.jsxs("div",{className:zn("animate-pulse",t),children:[f.jsx("div",{className:"h-4 bg-gray-200 rounded w-3/4 mb-2"}),f.jsx("div",{className:"h-4 bg-gray-200 rounded w-1/2"})]}),u=()=>{switch(e){case"dots":return i();case"pulse":return a();case"skeleton":return c();default:return s()}};return f.jsxs("div",{className:"flex flex-col items-center justify-center space-y-2",children:[u(),r&&f.jsx("p",{className:"text-sm text-gray-500 animate-pulse",children:r})]})},ib=({text:n="Loading..."})=>f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm",children:f.jsxs("div",{className:"text-center",children:[f.jsx(sb,{size:"lg"}),f.jsx("p",{className:"mt-4 text-lg text-gray-600",children:n})]})});class ob extends q.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error("ErrorBoundary caught an error:",e,t),console.log("Error reported to monitoring service")}render(){return this.state.hasError?this.props.fallback||f.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:f.jsxs("div",{className:"text-center p-8",children:[f.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Oops! Something went wrong"}),f.jsx("p",{className:"text-gray-600 mb-6",children:"We're sorry, but something unexpected happened. Please try refreshing the page."}),f.jsx("button",{onClick:()=>window.location.reload(),className:"bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors",children:"Refresh Page"})]})}):this.props.children}}const ab=q.lazy(()=>Ue(()=>import("./Home-D7io9ct2.js"),__vite__mapDeps([0,1,2,3,4,5]))),cb=q.lazy(()=>Ue(()=>import("./Search-Bcy6KnZK.js"),__vite__mapDeps([6,1,2,3,7,8,4,9,10,5]))),lb=q.lazy(()=>Ue(()=>import("./VehicleDetail-BdeYH-NB.js"),__vite__mapDeps([11,1,2,8,3,5]))),ub=q.lazy(()=>Ue(()=>import("./About-CaQWXzU8.js"),__vite__mapDeps([12,1,2,3,7,8,5]))),hb=q.lazy(()=>Ue(()=>import("./Contact-B91eBf97.js"),__vite__mapDeps([13,1,2,3,5]))),db=q.lazy(()=>Ue(()=>import("./Dashboard-CKv6EOOz.js"),__vite__mapDeps([14,1,2,3,9,5]))),fb=q.lazy(()=>Ue(()=>import("./Login-BdOqd13o.js"),__vite__mapDeps([15,1,2,3,16,9,10,5]))),pb=q.lazy(()=>Ue(()=>import("./Register-CiTwsqae.js"),__vite__mapDeps([17,1,2,3,16,9,10,5]))),mb=q.lazy(()=>Ue(()=>import("./AdminLogin-C5rN51kp.js"),__vite__mapDeps([18,1,2,3,4,5]))),gb=q.lazy(()=>Ue(()=>import("./FAQ-Cs9G7_6s.js"),__vite__mapDeps([19,1,2,3,5]))),yb=q.lazy(()=>Ue(()=>import("./SetupAdmin-Bdu4CdFv.js"),__vite__mapDeps([20,1,2,3,5]))),_b=q.lazy(()=>Ue(()=>import("./Unauthorized-ChESoKZR.js"),__vite__mapDeps([21,1,2,3]))),wb=q.lazy(()=>Ue(()=>import("./NotFound-B9JScyaF.js"),__vite__mapDeps([22,1,2,3]))),vb=q.lazy(()=>Ue(()=>import("./AdminGuard-DwBpTs7o.js"),__vite__mapDeps([23,1,2,3,5]))),Tb=new Up({defaultOptions:{queries:{staleTime:5*60*1e3,gcTime:10*60*1e3,retry:3,refetchOnWindowFocus:!1}}});function Eb(){return q.useEffect(()=>{const n=t=>{if(t.message&&t.message.includes("message channel closed"))return t.preventDefault(),console.warn("Suppressed message channel error (likely from browser extension):",t.message),!1},e=t=>{if(t.reason&&t.reason.message&&t.reason.message.includes("message channel closed"))return t.preventDefault(),console.warn("Suppressed message channel promise rejection (likely from browser extension):",t.reason.message),!1};return window.addEventListener("error",n),window.addEventListener("unhandledrejection",e),()=>{window.removeEventListener("error",n),window.removeEventListener("unhandledrejection",e)}},[]),f.jsx(nh,{children:f.jsx($p,{client:Tb,children:f.jsx(JI,{children:f.jsx(ob,{children:f.jsx(Bp,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:f.jsx(fI,{children:f.jsx(mI,{children:f.jsx("div",{className:"App",children:f.jsx(q.Suspense,{fallback:f.jsx(ib,{text:"Loading RideShare SA..."}),children:f.jsxs(zp,{children:[f.jsx(Be,{path:"/",element:f.jsx(Xe,{children:f.jsx(ab,{})})}),f.jsx(Be,{path:"/search",element:f.jsx(Xe,{children:f.jsx(cb,{})})}),f.jsx(Be,{path:"/vehicle/:id",element:f.jsx(Xe,{children:f.jsx(lb,{})})}),f.jsx(Be,{path:"/about",element:f.jsx(Xe,{children:f.jsx(ub,{})})}),f.jsx(Be,{path:"/contact",element:f.jsx(Xe,{children:f.jsx(hb,{})})}),f.jsx(Be,{path:"/faq",element:f.jsx(Xe,{children:f.jsx(gb,{})})}),f.jsx(Be,{path:"/dashboard/*",element:f.jsx(rb,{allowedRoles:["host","admin"],children:f.jsx(Xe,{children:f.jsx(db,{})})})}),f.jsx(Be,{path:"/login",element:f.jsx(Xe,{children:f.jsx(fb,{})})}),f.jsx(Be,{path:"/register",element:f.jsx(Xe,{children:f.jsx(pb,{})})}),f.jsx(Be,{path:"/admin-login",element:f.jsx(mb,{})}),f.jsx(Be,{path:"/setup-admin",element:f.jsx(vb,{children:f.jsx(yb,{})})}),f.jsx(Be,{path:"/unauthorized",element:f.jsx(Xe,{children:f.jsx(_b,{})})}),f.jsx(Be,{path:"*",element:f.jsx(Xe,{children:f.jsx(wb,{})})})]})})})})})})})})})})}ko.createRoot(document.getElementById("root")).render(f.jsx(vt.StrictMode,{children:f.jsx(Eb,{})}));export{Ds as F,kb as H,Ce as I,Ue as _,gI as a,Pb as b,zn as c,s_ as d,Ft as e,To as f,Qs as g,i_ as h,d_ as i,Cb as j,Du as s,up as u};
