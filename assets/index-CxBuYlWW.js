const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-B_1rgP44.js","assets/query-CSyQ0w5Y.js","assets/vendor-CBH9K-97.js","assets/router-BWB2dKYR.js","assets/SEO-CE0wqVtH.js","assets/ui-qr7cu0yN.js","assets/Search-CUDH-Kdb.js","assets/Glassmorphism-B6x2MkMT.js","assets/GlassButton-BfRB-w5d.js","assets/VehicleDetail-Bv0iTYh1.js","assets/About-CymwrAu1.js","assets/Contact-Dwd3A_vj.js","assets/Dashboard-BM9IteAN.js","assets/Login-a4cnF0G8.js","assets/GlassForm-H9qvmeAC.js","assets/Register-Dchmx0lJ.js","assets/FAQ-C71gCbx_.js","assets/SetupAdmin-DLbhEHdd.js","assets/Unauthorized-ChESoKZR.js","assets/NotFound-B9JScyaF.js"])))=>i.map(i=>d[i]);
var Rm=Object.defineProperty;var Cm=(n,e,t)=>e in n?Rm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Tt=(n,e,t)=>Cm(n,typeof e!="symbol"?e+"":e,t);import{j as g,Q as Pm,a as km}from"./query-CSyQ0w5Y.js";import{b as xm,g as Ia,r as J,a as wt}from"./vendor-CBH9K-97.js";import{u as vh,L as xe,N as yo,B as Nm,R as Om,a as Be}from"./router-BWB2dKYR.js";import{m as Ut,A as _l}from"./ui-qr7cu0yN.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Bo={},El=xm;Bo.createRoot=El.createRoot,Bo.hydrateRoot=El.hydrateRoot;const Dm="modulepreload",Vm=function(n){return"/RIDE-SHARE/"+n},Tl={},Ue=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(t.map(u=>{if(u=Vm(u),u in Tl)return;Tl[u]=!0;const h=u.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const m=document.createElement("link");if(m.rel=h?"stylesheet":Dm,h||(m.as="script"),m.crossOrigin="",m.href=u,c&&m.setAttribute("nonce",c),document.head.appendChild(m),h)return new Promise((T,x)=>{m.addEventListener("load",T),m.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return s.then(a=>{for(const c of a||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};var Lm=typeof Element<"u",Mm=typeof Map=="function",Fm=typeof Set=="function",Um=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Ls(n,e){if(n===e)return!0;if(n&&e&&typeof n=="object"&&typeof e=="object"){if(n.constructor!==e.constructor)return!1;var t,r,s;if(Array.isArray(n)){if(t=n.length,t!=e.length)return!1;for(r=t;r--!==0;)if(!Ls(n[r],e[r]))return!1;return!0}var i;if(Mm&&n instanceof Map&&e instanceof Map){if(n.size!==e.size)return!1;for(i=n.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;for(i=n.entries();!(r=i.next()).done;)if(!Ls(r.value[1],e.get(r.value[0])))return!1;return!0}if(Fm&&n instanceof Set&&e instanceof Set){if(n.size!==e.size)return!1;for(i=n.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(Um&&ArrayBuffer.isView(n)&&ArrayBuffer.isView(e)){if(t=n.length,t!=e.length)return!1;for(r=t;r--!==0;)if(n[r]!==e[r])return!1;return!0}if(n.constructor===RegExp)return n.source===e.source&&n.flags===e.flags;if(n.valueOf!==Object.prototype.valueOf&&typeof n.valueOf=="function"&&typeof e.valueOf=="function")return n.valueOf()===e.valueOf();if(n.toString!==Object.prototype.toString&&typeof n.toString=="function"&&typeof e.toString=="function")return n.toString()===e.toString();if(s=Object.keys(n),t=s.length,t!==Object.keys(e).length)return!1;for(r=t;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,s[r]))return!1;if(Lm&&n instanceof Element)return!1;for(r=t;r--!==0;)if(!((s[r]==="_owner"||s[r]==="__v"||s[r]==="__o")&&n.$$typeof)&&!Ls(n[s[r]],e[s[r]]))return!1;return!0}return n!==n&&e!==e}var jm=function(e,t){try{return Ls(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const Bm=Ia(jm);var $m=function(n,e,t,r,s,i,a,c){if(!n){var u;if(e===void 0)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var h=[t,r,s,i,a,c],f=0;u=new Error(e.replace(/%s/g,function(){return h[f++]})),u.name="Invariant Violation"}throw u.framesToPop=1,u}},qm=$m;const wl=Ia(qm);var Hm=function(e,t,r,s){var i=r?r.call(s,e,t):void 0;if(i!==void 0)return!!i;if(e===t)return!0;if(typeof e!="object"||!e||typeof t!="object"||!t)return!1;var a=Object.keys(e),c=Object.keys(t);if(a.length!==c.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),h=0;h<a.length;h++){var f=a[h];if(!u(f))return!1;var m=e[f],T=t[f];if(i=r?r.call(s,m,T,f):void 0,i===!1||i===void 0&&m!==T)return!1}return!0};const zm=Ia(Hm);var Ah=(n=>(n.BASE="base",n.BODY="body",n.HEAD="head",n.HTML="html",n.LINK="link",n.META="meta",n.NOSCRIPT="noscript",n.SCRIPT="script",n.STYLE="style",n.TITLE="title",n.FRAGMENT="Symbol(react.fragment)",n))(Ah||{}),_o={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Il=Object.values(Ah),va={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Wm=Object.entries(va).reduce((n,[e,t])=>(n[t]=e,n),{}),Je="data-rh",Bn={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},$n=(n,e)=>{for(let t=n.length-1;t>=0;t-=1){const r=n[t];if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}return null},Km=n=>{let e=$n(n,"title");const t=$n(n,Bn.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),t&&e)return t.replace(/%s/g,()=>e);const r=$n(n,Bn.DEFAULT_TITLE);return e||r||void 0},Gm=n=>$n(n,Bn.ON_CHANGE_CLIENT_STATE)||(()=>{}),Eo=(n,e)=>e.filter(t=>typeof t[n]<"u").map(t=>t[n]).reduce((t,r)=>({...t,...r}),{}),Qm=(n,e)=>e.filter(t=>typeof t.base<"u").map(t=>t.base).reverse().reduce((t,r)=>{if(!t.length){const s=Object.keys(r);for(let i=0;i<s.length;i+=1){const c=s[i].toLowerCase();if(n.indexOf(c)!==-1&&r[c])return t.concat(r)}}return t},[]),Jm=n=>console&&typeof console.warn=="function"&&console.warn(n),Sr=(n,e,t)=>{const r={};return t.filter(s=>Array.isArray(s[n])?!0:(typeof s[n]<"u"&&Jm(`Helmet: ${n} should be of type "Array". Instead found type "${typeof s[n]}"`),!1)).map(s=>s[n]).reverse().reduce((s,i)=>{const a={};i.filter(u=>{let h;const f=Object.keys(u);for(let T=0;T<f.length;T+=1){const x=f[T],A=x.toLowerCase();e.indexOf(A)!==-1&&!(h==="rel"&&u[h].toLowerCase()==="canonical")&&!(A==="rel"&&u[A].toLowerCase()==="stylesheet")&&(h=A),e.indexOf(x)!==-1&&(x==="innerHTML"||x==="cssText"||x==="itemprop")&&(h=x)}if(!h||!u[h])return!1;const m=u[h].toLowerCase();return r[h]||(r[h]={}),a[h]||(a[h]={}),r[h][m]?!1:(a[h][m]=!0,!0)}).reverse().forEach(u=>s.push(u));const c=Object.keys(a);for(let u=0;u<c.length;u+=1){const h=c[u],f={...r[h],...a[h]};r[h]=f}return s},[]).reverse()},Ym=(n,e)=>{if(Array.isArray(n)&&n.length){for(let t=0;t<n.length;t+=1)if(n[t][e])return!0}return!1},Xm=n=>({baseTag:Qm(["href"],n),bodyAttributes:Eo("bodyAttributes",n),defer:$n(n,Bn.DEFER),encode:$n(n,Bn.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Eo("htmlAttributes",n),linkTags:Sr("link",["rel","href"],n),metaTags:Sr("meta",["name","charset","http-equiv","property","itemprop"],n),noscriptTags:Sr("noscript",["innerHTML"],n),onChangeClientState:Gm(n),scriptTags:Sr("script",["src","innerHTML"],n),styleTags:Sr("style",["cssText"],n),title:Km(n),titleAttributes:Eo("titleAttributes",n),prioritizeSeoTags:Ym(n,Bn.PRIORITIZE_SEO_TAGS)}),bh=n=>Array.isArray(n)?n.join(""):n,Zm=(n,e)=>{const t=Object.keys(n);for(let r=0;r<t.length;r+=1)if(e[t[r]]&&e[t[r]].includes(n[t[r]]))return!0;return!1},To=(n,e)=>Array.isArray(n)?n.reduce((t,r)=>(Zm(r,e)?t.priority.push(r):t.default.push(r),t),{priority:[],default:[]}):{default:n,priority:[]},vl=(n,e)=>({...n,[e]:void 0}),eg=["noscript","script","style"],$o=(n,e=!0)=>e===!1?String(n):String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Sh=n=>Object.keys(n).reduce((e,t)=>{const r=typeof n[t]<"u"?`${t}="${n[t]}"`:`${t}`;return e?`${e} ${r}`:r},""),tg=(n,e,t,r)=>{const s=Sh(t),i=bh(e);return s?`<${n} ${Je}="true" ${s}>${$o(i,r)}</${n}>`:`<${n} ${Je}="true">${$o(i,r)}</${n}>`},ng=(n,e,t=!0)=>e.reduce((r,s)=>{const i=s,a=Object.keys(i).filter(h=>!(h==="innerHTML"||h==="cssText")).reduce((h,f)=>{const m=typeof i[f]>"u"?f:`${f}="${$o(i[f],t)}"`;return h?`${h} ${m}`:m},""),c=i.innerHTML||i.cssText||"",u=eg.indexOf(n)===-1;return`${r}<${n} ${Je}="true" ${a}${u?"/>":`>${c}</${n}>`}`},""),Rh=(n,e={})=>Object.keys(n).reduce((t,r)=>{const s=va[r];return t[s||r]=n[r],t},e),rg=(n,e,t)=>{const r={key:e,[Je]:!0},s=Rh(t,r);return[wt.createElement("title",s,e)]},Ms=(n,e)=>e.map((t,r)=>{const s={key:r,[Je]:!0};return Object.keys(t).forEach(i=>{const c=va[i]||i;if(c==="innerHTML"||c==="cssText"){const u=t.innerHTML||t.cssText;s.dangerouslySetInnerHTML={__html:u}}else s[c]=t[i]}),wt.createElement(n,s)}),qe=(n,e,t=!0)=>{switch(n){case"title":return{toComponent:()=>rg(n,e.title,e.titleAttributes),toString:()=>tg(n,e.title,e.titleAttributes,t)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Rh(e),toString:()=>Sh(e)};default:return{toComponent:()=>Ms(n,e),toString:()=>ng(n,e,t)}}},sg=({metaTags:n,linkTags:e,scriptTags:t,encode:r})=>{const s=To(n,_o.meta),i=To(e,_o.link),a=To(t,_o.script);return{priorityMethods:{toComponent:()=>[...Ms("meta",s.priority),...Ms("link",i.priority),...Ms("script",a.priority)],toString:()=>`${qe("meta",s.priority,r)} ${qe("link",i.priority,r)} ${qe("script",a.priority,r)}`},metaTags:s.default,linkTags:i.default,scriptTags:a.default}},ig=n=>{const{baseTag:e,bodyAttributes:t,encode:r=!0,htmlAttributes:s,noscriptTags:i,styleTags:a,title:c="",titleAttributes:u,prioritizeSeoTags:h}=n;let{linkTags:f,metaTags:m,scriptTags:T}=n,x={toComponent:()=>{},toString:()=>""};return h&&({priorityMethods:x,linkTags:f,metaTags:m,scriptTags:T}=sg(n)),{priority:x,base:qe("base",e,r),bodyAttributes:qe("bodyAttributes",t,r),htmlAttributes:qe("htmlAttributes",s,r),link:qe("link",f,r),meta:qe("meta",m,r),noscript:qe("noscript",i,r),script:qe("script",T,r),style:qe("style",a,r),title:qe("title",{title:c,titleAttributes:u},r)}},qo=ig,Ss=[],Ch=!!(typeof window<"u"&&window.document&&window.document.createElement),Ho=class{constructor(n,e){Tt(this,"instances",[]);Tt(this,"canUseDOM",Ch);Tt(this,"context");Tt(this,"value",{setHelmet:n=>{this.context.helmet=n},helmetInstances:{get:()=>this.canUseDOM?Ss:this.instances,add:n=>{(this.canUseDOM?Ss:this.instances).push(n)},remove:n=>{const e=(this.canUseDOM?Ss:this.instances).indexOf(n);(this.canUseDOM?Ss:this.instances).splice(e,1)}}});this.context=n,this.canUseDOM=e||!1,e||(n.helmet=qo({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},og={},Ph=wt.createContext(og),pn,kh=(pn=class extends J.Component{constructor(t){super(t);Tt(this,"helmetData");this.helmetData=new Ho(this.props.context||{},pn.canUseDOM)}render(){return wt.createElement(Ph.Provider,{value:this.helmetData.value},this.props.children)}},Tt(pn,"canUseDOM",Ch),pn),Vn=(n,e)=>{const t=document.head||document.querySelector("head"),r=t.querySelectorAll(`${n}[${Je}]`),s=[].slice.call(r),i=[];let a;return e&&e.length&&e.forEach(c=>{const u=document.createElement(n);for(const h in c)if(Object.prototype.hasOwnProperty.call(c,h))if(h==="innerHTML")u.innerHTML=c.innerHTML;else if(h==="cssText")u.styleSheet?u.styleSheet.cssText=c.cssText:u.appendChild(document.createTextNode(c.cssText));else{const f=h,m=typeof c[f]>"u"?"":c[f];u.setAttribute(h,m)}u.setAttribute(Je,"true"),s.some((h,f)=>(a=f,u.isEqualNode(h)))?s.splice(a,1):i.push(u)}),s.forEach(c=>{var u;return(u=c.parentNode)==null?void 0:u.removeChild(c)}),i.forEach(c=>t.appendChild(c)),{oldTags:s,newTags:i}},zo=(n,e)=>{const t=document.getElementsByTagName(n)[0];if(!t)return;const r=t.getAttribute(Je),s=r?r.split(","):[],i=[...s],a=Object.keys(e);for(const c of a){const u=e[c]||"";t.getAttribute(c)!==u&&t.setAttribute(c,u),s.indexOf(c)===-1&&s.push(c);const h=i.indexOf(c);h!==-1&&i.splice(h,1)}for(let c=i.length-1;c>=0;c-=1)t.removeAttribute(i[c]);s.length===i.length?t.removeAttribute(Je):t.getAttribute(Je)!==a.join(",")&&t.setAttribute(Je,a.join(","))},ag=(n,e)=>{typeof n<"u"&&document.title!==n&&(document.title=bh(n)),zo("title",e)},Al=(n,e)=>{const{baseTag:t,bodyAttributes:r,htmlAttributes:s,linkTags:i,metaTags:a,noscriptTags:c,onChangeClientState:u,scriptTags:h,styleTags:f,title:m,titleAttributes:T}=n;zo("body",r),zo("html",s),ag(m,T);const x={baseTag:Vn("base",t),linkTags:Vn("link",i),metaTags:Vn("meta",a),noscriptTags:Vn("noscript",c),scriptTags:Vn("script",h),styleTags:Vn("style",f)},A={},C={};Object.keys(x).forEach(R=>{const{newTags:D,oldTags:M}=x[R];D.length&&(A[R]=D),M.length&&(C[R]=x[R].oldTags)}),e&&e(),u(n,A,C)},Rr=null,cg=n=>{Rr&&cancelAnimationFrame(Rr),n.defer?Rr=requestAnimationFrame(()=>{Al(n,()=>{Rr=null})}):(Al(n),Rr=null)},lg=cg,bl=class extends J.Component{constructor(){super(...arguments);Tt(this,"rendered",!1)}shouldComponentUpdate(e){return!zm(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:t}=this.props.context;let r=null;const s=Xm(e.get().map(i=>{const a={...i.props};return delete a.context,a}));kh.canUseDOM?lg(s):qo&&(r=qo(s)),t(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},jo,sS=(jo=class extends J.Component{shouldComponentUpdate(n){return!Bm(vl(this.props,"helmetData"),vl(n,"helmetData"))}mapNestedChildrenToProps(n,e){if(!e)return null;switch(n.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${n.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(n,e,t,r){return{...e,[n.type]:[...e[n.type]||[],{...t,...this.mapNestedChildrenToProps(n,r)}]}}mapObjectTypeChildren(n,e,t,r){switch(n.type){case"title":return{...e,[n.type]:r,titleAttributes:{...t}};case"body":return{...e,bodyAttributes:{...t}};case"html":return{...e,htmlAttributes:{...t}};default:return{...e,[n.type]:{...t}}}}mapArrayTypeChildrenToProps(n,e){let t={...e};return Object.keys(n).forEach(r=>{t={...t,[r]:n[r]}}),t}warnOnInvalidChildren(n,e){return wl(Il.some(t=>n.type===t),typeof n.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Il.join(", ")} are allowed. Helmet does not support rendering <${n.type}> elements. Refer to our API for more information.`),wl(!e||typeof e=="string"||Array.isArray(e)&&!e.some(t=>typeof t!="string"),`Helmet expects a string as a child of <${n.type}>. Did you forget to wrap your children in braces? ( <${n.type}>{\`\`}</${n.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(n,e){let t={};return wt.Children.forEach(n,r=>{if(!r||!r.props)return;const{children:s,...i}=r.props,a=Object.keys(i).reduce((u,h)=>(u[Wm[h]||h]=i[h],u),{});let{type:c}=r;switch(typeof c=="symbol"?c=c.toString():this.warnOnInvalidChildren(r,s),c){case"Symbol(react.fragment)":e=this.mapChildrenToProps(s,e);break;case"link":case"meta":case"noscript":case"script":case"style":t=this.flattenArrayTypeChildren(r,t,a,s);break;default:e=this.mapObjectTypeChildren(r,e,a,s);break}}),this.mapArrayTypeChildrenToProps(t,e)}render(){const{children:n,...e}=this.props;let t={...e},{helmetData:r}=e;if(n&&(t=this.mapChildrenToProps(n,t)),r&&!(r instanceof Ho)){const s=r;r=new Ho(s.context,!0),delete t.helmetData}return r?wt.createElement(bl,{...t,context:r.value}):wt.createElement(Ph.Consumer,null,s=>wt.createElement(bl,{...t,context:s}))}},Tt(jo,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),jo);function xh(n,e){return function(){return n.apply(e,arguments)}}const{toString:ug}=Object.prototype,{getPrototypeOf:Aa}=Object,{iterator:Ii,toStringTag:Nh}=Symbol,vi=(n=>e=>{const t=ug.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),tt=n=>(n=n.toLowerCase(),e=>vi(e)===n),Ai=n=>e=>typeof e===n,{isArray:tr}=Array,Kn=Ai("undefined");function Zr(n){return n!==null&&!Kn(n)&&n.constructor!==null&&!Kn(n.constructor)&&Oe(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const Oh=tt("ArrayBuffer");function hg(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&Oh(n.buffer),e}const dg=Ai("string"),Oe=Ai("function"),Dh=Ai("number"),es=n=>n!==null&&typeof n=="object",fg=n=>n===!0||n===!1,Fs=n=>{if(vi(n)!=="object")return!1;const e=Aa(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Nh in n)&&!(Ii in n)},pg=n=>{if(!es(n)||Zr(n))return!1;try{return Object.keys(n).length===0&&Object.getPrototypeOf(n)===Object.prototype}catch{return!1}},mg=tt("Date"),gg=tt("File"),yg=tt("Blob"),_g=tt("FileList"),Eg=n=>es(n)&&Oe(n.pipe),Tg=n=>{let e;return n&&(typeof FormData=="function"&&n instanceof FormData||Oe(n.append)&&((e=vi(n))==="formdata"||e==="object"&&Oe(n.toString)&&n.toString()==="[object FormData]"))},wg=tt("URLSearchParams"),[Ig,vg,Ag,bg]=["ReadableStream","Request","Response","Headers"].map(tt),Sg=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ts(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let r,s;if(typeof n!="object"&&(n=[n]),tr(n))for(r=0,s=n.length;r<s;r++)e.call(null,n[r],r,n);else{if(Zr(n))return;const i=t?Object.getOwnPropertyNames(n):Object.keys(n),a=i.length;let c;for(r=0;r<a;r++)c=i[r],e.call(null,n[c],c,n)}}function Vh(n,e){if(Zr(n))return null;e=e.toLowerCase();const t=Object.keys(n);let r=t.length,s;for(;r-- >0;)if(s=t[r],e===s.toLowerCase())return s;return null}const hn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Lh=n=>!Kn(n)&&n!==hn;function Wo(){const{caseless:n,skipUndefined:e}=Lh(this)&&this||{},t={},r=(s,i)=>{const a=n&&Vh(t,i)||i;Fs(t[a])&&Fs(s)?t[a]=Wo(t[a],s):Fs(s)?t[a]=Wo({},s):tr(s)?t[a]=s.slice():(!e||!Kn(s))&&(t[a]=s)};for(let s=0,i=arguments.length;s<i;s++)arguments[s]&&ts(arguments[s],r);return t}const Rg=(n,e,t,{allOwnKeys:r}={})=>(ts(e,(s,i)=>{t&&Oe(s)?n[i]=xh(s,t):n[i]=s},{allOwnKeys:r}),n),Cg=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),Pg=(n,e,t,r)=>{n.prototype=Object.create(e.prototype,r),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},kg=(n,e,t,r)=>{let s,i,a;const c={};if(e=e||{},n==null)return e;do{for(s=Object.getOwnPropertyNames(n),i=s.length;i-- >0;)a=s[i],(!r||r(a,n,e))&&!c[a]&&(e[a]=n[a],c[a]=!0);n=t!==!1&&Aa(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},xg=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const r=n.indexOf(e,t);return r!==-1&&r===t},Ng=n=>{if(!n)return null;if(tr(n))return n;let e=n.length;if(!Dh(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},Og=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&Aa(Uint8Array)),Dg=(n,e)=>{const r=(n&&n[Ii]).call(n);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(n,i[0],i[1])}},Vg=(n,e)=>{let t;const r=[];for(;(t=n.exec(e))!==null;)r.push(t);return r},Lg=tt("HTMLFormElement"),Mg=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,r,s){return r.toUpperCase()+s}),Sl=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),Fg=tt("RegExp"),Mh=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),r={};ts(t,(s,i)=>{let a;(a=e(s,i,n))!==!1&&(r[i]=a||s)}),Object.defineProperties(n,r)},Ug=n=>{Mh(n,(e,t)=>{if(Oe(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const r=n[t];if(Oe(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},jg=(n,e)=>{const t={},r=s=>{s.forEach(i=>{t[i]=!0})};return tr(n)?r(n):r(String(n).split(e)),t},Bg=()=>{},$g=(n,e)=>n!=null&&Number.isFinite(n=+n)?n:e;function qg(n){return!!(n&&Oe(n.append)&&n[Nh]==="FormData"&&n[Ii])}const Hg=n=>{const e=new Array(10),t=(r,s)=>{if(es(r)){if(e.indexOf(r)>=0)return;if(Zr(r))return r;if(!("toJSON"in r)){e[s]=r;const i=tr(r)?[]:{};return ts(r,(a,c)=>{const u=t(a,s+1);!Kn(u)&&(i[c]=u)}),e[s]=void 0,i}}return r};return t(n,0)},zg=tt("AsyncFunction"),Wg=n=>n&&(es(n)||Oe(n))&&Oe(n.then)&&Oe(n.catch),Fh=((n,e)=>n?setImmediate:e?((t,r)=>(hn.addEventListener("message",({source:s,data:i})=>{s===hn&&i===t&&r.length&&r.shift()()},!1),s=>{r.push(s),hn.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",Oe(hn.postMessage)),Kg=typeof queueMicrotask<"u"?queueMicrotask.bind(hn):typeof process<"u"&&process.nextTick||Fh,Gg=n=>n!=null&&Oe(n[Ii]),P={isArray:tr,isArrayBuffer:Oh,isBuffer:Zr,isFormData:Tg,isArrayBufferView:hg,isString:dg,isNumber:Dh,isBoolean:fg,isObject:es,isPlainObject:Fs,isEmptyObject:pg,isReadableStream:Ig,isRequest:vg,isResponse:Ag,isHeaders:bg,isUndefined:Kn,isDate:mg,isFile:gg,isBlob:yg,isRegExp:Fg,isFunction:Oe,isStream:Eg,isURLSearchParams:wg,isTypedArray:Og,isFileList:_g,forEach:ts,merge:Wo,extend:Rg,trim:Sg,stripBOM:Cg,inherits:Pg,toFlatObject:kg,kindOf:vi,kindOfTest:tt,endsWith:xg,toArray:Ng,forEachEntry:Dg,matchAll:Vg,isHTMLForm:Lg,hasOwnProperty:Sl,hasOwnProp:Sl,reduceDescriptors:Mh,freezeMethods:Ug,toObjectSet:jg,toCamelCase:Mg,noop:Bg,toFiniteNumber:$g,findKey:Vh,global:hn,isContextDefined:Lh,isSpecCompliantForm:qg,toJSONObject:Hg,isAsyncFn:zg,isThenable:Wg,setImmediate:Fh,asap:Kg,isIterable:Gg};function z(n,e,t,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}P.inherits(z,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:P.toJSONObject(this.config),code:this.code,status:this.status}}});const Uh=z.prototype,jh={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{jh[n]={value:n}});Object.defineProperties(z,jh);Object.defineProperty(Uh,"isAxiosError",{value:!0});z.from=(n,e,t,r,s,i)=>{const a=Object.create(Uh);P.toFlatObject(n,a,function(f){return f!==Error.prototype},h=>h!=="isAxiosError");const c=n&&n.message?n.message:"Error",u=e==null&&n?n.code:e;return z.call(a,c,u,t,r,s),n&&a.cause==null&&Object.defineProperty(a,"cause",{value:n,configurable:!0}),a.name=n&&n.name||"Error",i&&Object.assign(a,i),a};const Qg=null;function Ko(n){return P.isPlainObject(n)||P.isArray(n)}function Bh(n){return P.endsWith(n,"[]")?n.slice(0,-2):n}function Rl(n,e,t){return n?n.concat(e).map(function(s,i){return s=Bh(s),!t&&i?"["+s+"]":s}).join(t?".":""):e}function Jg(n){return P.isArray(n)&&!n.some(Ko)}const Yg=P.toFlatObject(P,{},null,function(e){return/^is[A-Z]/.test(e)});function bi(n,e,t){if(!P.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=P.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(C,R){return!P.isUndefined(R[C])});const r=t.metaTokens,s=t.visitor||f,i=t.dots,a=t.indexes,u=(t.Blob||typeof Blob<"u"&&Blob)&&P.isSpecCompliantForm(e);if(!P.isFunction(s))throw new TypeError("visitor must be a function");function h(A){if(A===null)return"";if(P.isDate(A))return A.toISOString();if(P.isBoolean(A))return A.toString();if(!u&&P.isBlob(A))throw new z("Blob is not supported. Use a Buffer instead.");return P.isArrayBuffer(A)||P.isTypedArray(A)?u&&typeof Blob=="function"?new Blob([A]):Buffer.from(A):A}function f(A,C,R){let D=A;if(A&&!R&&typeof A=="object"){if(P.endsWith(C,"{}"))C=r?C:C.slice(0,-2),A=JSON.stringify(A);else if(P.isArray(A)&&Jg(A)||(P.isFileList(A)||P.endsWith(C,"[]"))&&(D=P.toArray(A)))return C=Bh(C),D.forEach(function(j,X){!(P.isUndefined(j)||j===null)&&e.append(a===!0?Rl([C],X,i):a===null?C:C+"[]",h(j))}),!1}return Ko(A)?!0:(e.append(Rl(R,C,i),h(A)),!1)}const m=[],T=Object.assign(Yg,{defaultVisitor:f,convertValue:h,isVisitable:Ko});function x(A,C){if(!P.isUndefined(A)){if(m.indexOf(A)!==-1)throw Error("Circular reference detected in "+C.join("."));m.push(A),P.forEach(A,function(D,M){(!(P.isUndefined(D)||D===null)&&s.call(e,D,P.isString(M)?M.trim():M,C,T))===!0&&x(D,C?C.concat(M):[M])}),m.pop()}}if(!P.isObject(n))throw new TypeError("data must be an object");return x(n),e}function Cl(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function ba(n,e){this._pairs=[],n&&bi(n,this,e)}const $h=ba.prototype;$h.append=function(e,t){this._pairs.push([e,t])};$h.toString=function(e){const t=e?function(r){return e.call(this,r,Cl)}:Cl;return this._pairs.map(function(s){return t(s[0])+"="+t(s[1])},"").join("&")};function Xg(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function qh(n,e,t){if(!e)return n;const r=t&&t.encode||Xg;P.isFunction(t)&&(t={serialize:t});const s=t&&t.serialize;let i;if(s?i=s(e,t):i=P.isURLSearchParams(e)?e.toString():new ba(e,t).toString(r),i){const a=n.indexOf("#");a!==-1&&(n=n.slice(0,a)),n+=(n.indexOf("?")===-1?"?":"&")+i}return n}class Pl{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){P.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Hh={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Zg=typeof URLSearchParams<"u"?URLSearchParams:ba,ey=typeof FormData<"u"?FormData:null,ty=typeof Blob<"u"?Blob:null,ny={isBrowser:!0,classes:{URLSearchParams:Zg,FormData:ey,Blob:ty},protocols:["http","https","file","blob","url","data"]},Sa=typeof window<"u"&&typeof document<"u",Go=typeof navigator=="object"&&navigator||void 0,ry=Sa&&(!Go||["ReactNative","NativeScript","NS"].indexOf(Go.product)<0),sy=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",iy=Sa&&window.location.href||"http://localhost",oy=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Sa,hasStandardBrowserEnv:ry,hasStandardBrowserWebWorkerEnv:sy,navigator:Go,origin:iy},Symbol.toStringTag,{value:"Module"})),Re={...oy,...ny};function ay(n,e){return bi(n,new Re.classes.URLSearchParams,{visitor:function(t,r,s,i){return Re.isNode&&P.isBuffer(t)?(this.append(r,t.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...e})}function cy(n){return P.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function ly(n){const e={},t=Object.keys(n);let r;const s=t.length;let i;for(r=0;r<s;r++)i=t[r],e[i]=n[i];return e}function zh(n){function e(t,r,s,i){let a=t[i++];if(a==="__proto__")return!0;const c=Number.isFinite(+a),u=i>=t.length;return a=!a&&P.isArray(s)?s.length:a,u?(P.hasOwnProp(s,a)?s[a]=[s[a],r]:s[a]=r,!c):((!s[a]||!P.isObject(s[a]))&&(s[a]=[]),e(t,r,s[a],i)&&P.isArray(s[a])&&(s[a]=ly(s[a])),!c)}if(P.isFormData(n)&&P.isFunction(n.entries)){const t={};return P.forEachEntry(n,(r,s)=>{e(cy(r),s,t,0)}),t}return null}function uy(n,e,t){if(P.isString(n))try{return(e||JSON.parse)(n),P.trim(n)}catch(r){if(r.name!=="SyntaxError")throw r}return(t||JSON.stringify)(n)}const ns={transitional:Hh,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const r=t.getContentType()||"",s=r.indexOf("application/json")>-1,i=P.isObject(e);if(i&&P.isHTMLForm(e)&&(e=new FormData(e)),P.isFormData(e))return s?JSON.stringify(zh(e)):e;if(P.isArrayBuffer(e)||P.isBuffer(e)||P.isStream(e)||P.isFile(e)||P.isBlob(e)||P.isReadableStream(e))return e;if(P.isArrayBufferView(e))return e.buffer;if(P.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let c;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return ay(e,this.formSerializer).toString();if((c=P.isFileList(e))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return bi(c?{"files[]":e}:e,u&&new u,this.formSerializer)}}return i||s?(t.setContentType("application/json",!1),uy(e)):e}],transformResponse:[function(e){const t=this.transitional||ns.transitional,r=t&&t.forcedJSONParsing,s=this.responseType==="json";if(P.isResponse(e)||P.isReadableStream(e))return e;if(e&&P.isString(e)&&(r&&!this.responseType||s)){const a=!(t&&t.silentJSONParsing)&&s;try{return JSON.parse(e,this.parseReviver)}catch(c){if(a)throw c.name==="SyntaxError"?z.from(c,z.ERR_BAD_RESPONSE,this,null,this.response):c}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Re.classes.FormData,Blob:Re.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};P.forEach(["delete","get","head","post","put","patch"],n=>{ns.headers[n]={}});const hy=P.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),dy=n=>{const e={};let t,r,s;return n&&n.split(`
`).forEach(function(a){s=a.indexOf(":"),t=a.substring(0,s).trim().toLowerCase(),r=a.substring(s+1).trim(),!(!t||e[t]&&hy[t])&&(t==="set-cookie"?e[t]?e[t].push(r):e[t]=[r]:e[t]=e[t]?e[t]+", "+r:r)}),e},kl=Symbol("internals");function Cr(n){return n&&String(n).trim().toLowerCase()}function Us(n){return n===!1||n==null?n:P.isArray(n)?n.map(Us):String(n)}function fy(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=t.exec(n);)e[r[1]]=r[2];return e}const py=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function wo(n,e,t,r,s){if(P.isFunction(r))return r.call(this,e,t);if(s&&(e=t),!!P.isString(e)){if(P.isString(r))return e.indexOf(r)!==-1;if(P.isRegExp(r))return r.test(e)}}function my(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r)}function gy(n,e){const t=P.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(n,r+t,{value:function(s,i,a){return this[r].call(this,e,s,i,a)},configurable:!0})})}let De=class{constructor(e){e&&this.set(e)}set(e,t,r){const s=this;function i(c,u,h){const f=Cr(u);if(!f)throw new Error("header name must be a non-empty string");const m=P.findKey(s,f);(!m||s[m]===void 0||h===!0||h===void 0&&s[m]!==!1)&&(s[m||u]=Us(c))}const a=(c,u)=>P.forEach(c,(h,f)=>i(h,f,u));if(P.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(P.isString(e)&&(e=e.trim())&&!py(e))a(dy(e),t);else if(P.isObject(e)&&P.isIterable(e)){let c={},u,h;for(const f of e){if(!P.isArray(f))throw TypeError("Object iterator must return a key-value pair");c[h=f[0]]=(u=c[h])?P.isArray(u)?[...u,f[1]]:[u,f[1]]:f[1]}a(c,t)}else e!=null&&i(t,e,r);return this}get(e,t){if(e=Cr(e),e){const r=P.findKey(this,e);if(r){const s=this[r];if(!t)return s;if(t===!0)return fy(s);if(P.isFunction(t))return t.call(this,s,r);if(P.isRegExp(t))return t.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Cr(e),e){const r=P.findKey(this,e);return!!(r&&this[r]!==void 0&&(!t||wo(this,this[r],r,t)))}return!1}delete(e,t){const r=this;let s=!1;function i(a){if(a=Cr(a),a){const c=P.findKey(r,a);c&&(!t||wo(r,r[c],c,t))&&(delete r[c],s=!0)}}return P.isArray(e)?e.forEach(i):i(e),s}clear(e){const t=Object.keys(this);let r=t.length,s=!1;for(;r--;){const i=t[r];(!e||wo(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const t=this,r={};return P.forEach(this,(s,i)=>{const a=P.findKey(r,i);if(a){t[a]=Us(s),delete t[i];return}const c=e?my(i):String(i).trim();c!==i&&delete t[i],t[c]=Us(s),r[c]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return P.forEach(this,(r,s)=>{r!=null&&r!==!1&&(t[s]=e&&P.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[kl]=this[kl]={accessors:{}}).accessors,s=this.prototype;function i(a){const c=Cr(a);r[c]||(gy(s,a),r[c]=!0)}return P.isArray(e)?e.forEach(i):i(e),this}};De.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);P.reduceDescriptors(De.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(r){this[t]=r}}});P.freezeMethods(De);function Io(n,e){const t=this||ns,r=e||t,s=De.from(r.headers);let i=r.data;return P.forEach(n,function(c){i=c.call(t,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function Wh(n){return!!(n&&n.__CANCEL__)}function nr(n,e,t){z.call(this,n??"canceled",z.ERR_CANCELED,e,t),this.name="CanceledError"}P.inherits(nr,z,{__CANCEL__:!0});function Kh(n,e,t){const r=t.config.validateStatus;!t.status||!r||r(t.status)?n(t):e(new z("Request failed with status code "+t.status,[z.ERR_BAD_REQUEST,z.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function yy(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function _y(n,e){n=n||10;const t=new Array(n),r=new Array(n);let s=0,i=0,a;return e=e!==void 0?e:1e3,function(u){const h=Date.now(),f=r[i];a||(a=h),t[s]=u,r[s]=h;let m=i,T=0;for(;m!==s;)T+=t[m++],m=m%n;if(s=(s+1)%n,s===i&&(i=(i+1)%n),h-a<e)return;const x=f&&h-f;return x?Math.round(T*1e3/x):void 0}}function Ey(n,e){let t=0,r=1e3/e,s,i;const a=(h,f=Date.now())=>{t=f,s=null,i&&(clearTimeout(i),i=null),n(...h)};return[(...h)=>{const f=Date.now(),m=f-t;m>=r?a(h,f):(s=h,i||(i=setTimeout(()=>{i=null,a(s)},r-m)))},()=>s&&a(s)]}const Xs=(n,e,t=3)=>{let r=0;const s=_y(50,250);return Ey(i=>{const a=i.loaded,c=i.lengthComputable?i.total:void 0,u=a-r,h=s(u),f=a<=c;r=a;const m={loaded:a,total:c,progress:c?a/c:void 0,bytes:u,rate:h||void 0,estimated:h&&c&&f?(c-a)/h:void 0,event:i,lengthComputable:c!=null,[e?"download":"upload"]:!0};n(m)},t)},xl=(n,e)=>{const t=n!=null;return[r=>e[0]({lengthComputable:t,total:n,loaded:r}),e[1]]},Nl=n=>(...e)=>P.asap(()=>n(...e)),Ty=Re.hasStandardBrowserEnv?((n,e)=>t=>(t=new URL(t,Re.origin),n.protocol===t.protocol&&n.host===t.host&&(e||n.port===t.port)))(new URL(Re.origin),Re.navigator&&/(msie|trident)/i.test(Re.navigator.userAgent)):()=>!0,wy=Re.hasStandardBrowserEnv?{write(n,e,t,r,s,i){const a=[n+"="+encodeURIComponent(e)];P.isNumber(t)&&a.push("expires="+new Date(t).toGMTString()),P.isString(r)&&a.push("path="+r),P.isString(s)&&a.push("domain="+s),i===!0&&a.push("secure"),document.cookie=a.join("; ")},read(n){const e=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Iy(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function vy(n,e){return e?n.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):n}function Gh(n,e,t){let r=!Iy(e);return n&&(r||t==!1)?vy(n,e):e}const Ol=n=>n instanceof De?{...n}:n;function yn(n,e){e=e||{};const t={};function r(h,f,m,T){return P.isPlainObject(h)&&P.isPlainObject(f)?P.merge.call({caseless:T},h,f):P.isPlainObject(f)?P.merge({},f):P.isArray(f)?f.slice():f}function s(h,f,m,T){if(P.isUndefined(f)){if(!P.isUndefined(h))return r(void 0,h,m,T)}else return r(h,f,m,T)}function i(h,f){if(!P.isUndefined(f))return r(void 0,f)}function a(h,f){if(P.isUndefined(f)){if(!P.isUndefined(h))return r(void 0,h)}else return r(void 0,f)}function c(h,f,m){if(m in e)return r(h,f);if(m in n)return r(void 0,h)}const u={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c,headers:(h,f,m)=>s(Ol(h),Ol(f),m,!0)};return P.forEach(Object.keys({...n,...e}),function(f){const m=u[f]||s,T=m(n[f],e[f],f);P.isUndefined(T)&&m!==c||(t[f]=T)}),t}const Qh=n=>{const e=yn({},n);let{data:t,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:a,auth:c}=e;if(e.headers=a=De.from(a),e.url=qh(Gh(e.baseURL,e.url,e.allowAbsoluteUrls),n.params,n.paramsSerializer),c&&a.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),P.isFormData(t)){if(Re.hasStandardBrowserEnv||Re.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(P.isFunction(t.getHeaders)){const u=t.getHeaders(),h=["content-type","content-length"];Object.entries(u).forEach(([f,m])=>{h.includes(f.toLowerCase())&&a.set(f,m)})}}if(Re.hasStandardBrowserEnv&&(r&&P.isFunction(r)&&(r=r(e)),r||r!==!1&&Ty(e.url))){const u=s&&i&&wy.read(i);u&&a.set(s,u)}return e},Ay=typeof XMLHttpRequest<"u",by=Ay&&function(n){return new Promise(function(t,r){const s=Qh(n);let i=s.data;const a=De.from(s.headers).normalize();let{responseType:c,onUploadProgress:u,onDownloadProgress:h}=s,f,m,T,x,A;function C(){x&&x(),A&&A(),s.cancelToken&&s.cancelToken.unsubscribe(f),s.signal&&s.signal.removeEventListener("abort",f)}let R=new XMLHttpRequest;R.open(s.method.toUpperCase(),s.url,!0),R.timeout=s.timeout;function D(){if(!R)return;const j=De.from("getAllResponseHeaders"in R&&R.getAllResponseHeaders()),ne={data:!c||c==="text"||c==="json"?R.responseText:R.response,status:R.status,statusText:R.statusText,headers:j,config:n,request:R};Kh(function(w){t(w),C()},function(w){r(w),C()},ne),R=null}"onloadend"in R?R.onloadend=D:R.onreadystatechange=function(){!R||R.readyState!==4||R.status===0&&!(R.responseURL&&R.responseURL.indexOf("file:")===0)||setTimeout(D)},R.onabort=function(){R&&(r(new z("Request aborted",z.ECONNABORTED,n,R)),R=null)},R.onerror=function(X){const ne=X&&X.message?X.message:"Network Error",ee=new z(ne,z.ERR_NETWORK,n,R);ee.event=X||null,r(ee),R=null},R.ontimeout=function(){let X=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const ne=s.transitional||Hh;s.timeoutErrorMessage&&(X=s.timeoutErrorMessage),r(new z(X,ne.clarifyTimeoutError?z.ETIMEDOUT:z.ECONNABORTED,n,R)),R=null},i===void 0&&a.setContentType(null),"setRequestHeader"in R&&P.forEach(a.toJSON(),function(X,ne){R.setRequestHeader(ne,X)}),P.isUndefined(s.withCredentials)||(R.withCredentials=!!s.withCredentials),c&&c!=="json"&&(R.responseType=s.responseType),h&&([T,A]=Xs(h,!0),R.addEventListener("progress",T)),u&&R.upload&&([m,x]=Xs(u),R.upload.addEventListener("progress",m),R.upload.addEventListener("loadend",x)),(s.cancelToken||s.signal)&&(f=j=>{R&&(r(!j||j.type?new nr(null,n,R):j),R.abort(),R=null)},s.cancelToken&&s.cancelToken.subscribe(f),s.signal&&(s.signal.aborted?f():s.signal.addEventListener("abort",f)));const M=yy(s.url);if(M&&Re.protocols.indexOf(M)===-1){r(new z("Unsupported protocol "+M+":",z.ERR_BAD_REQUEST,n));return}R.send(i||null)})},Sy=(n,e)=>{const{length:t}=n=n?n.filter(Boolean):[];if(e||t){let r=new AbortController,s;const i=function(h){if(!s){s=!0,c();const f=h instanceof Error?h:this.reason;r.abort(f instanceof z?f:new nr(f instanceof Error?f.message:f))}};let a=e&&setTimeout(()=>{a=null,i(new z(`timeout ${e} of ms exceeded`,z.ETIMEDOUT))},e);const c=()=>{n&&(a&&clearTimeout(a),a=null,n.forEach(h=>{h.unsubscribe?h.unsubscribe(i):h.removeEventListener("abort",i)}),n=null)};n.forEach(h=>h.addEventListener("abort",i));const{signal:u}=r;return u.unsubscribe=()=>P.asap(c),u}},Ry=function*(n,e){let t=n.byteLength;if(t<e){yield n;return}let r=0,s;for(;r<t;)s=r+e,yield n.slice(r,s),r=s},Cy=async function*(n,e){for await(const t of Py(n))yield*Ry(t,e)},Py=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const e=n.getReader();try{for(;;){const{done:t,value:r}=await e.read();if(t)break;yield r}}finally{await e.cancel()}},Dl=(n,e,t,r)=>{const s=Cy(n,e);let i=0,a,c=u=>{a||(a=!0,r&&r(u))};return new ReadableStream({async pull(u){try{const{done:h,value:f}=await s.next();if(h){c(),u.close();return}let m=f.byteLength;if(t){let T=i+=m;t(T)}u.enqueue(new Uint8Array(f))}catch(h){throw c(h),h}},cancel(u){return c(u),s.return()}},{highWaterMark:2})},Vl=64*1024,{isFunction:Rs}=P,ky=(({Request:n,Response:e})=>({Request:n,Response:e}))(P.global),{ReadableStream:Ll,TextEncoder:Ml}=P.global,Fl=(n,...e)=>{try{return!!n(...e)}catch{return!1}},xy=n=>{n=P.merge.call({skipUndefined:!0},ky,n);const{fetch:e,Request:t,Response:r}=n,s=e?Rs(e):typeof fetch=="function",i=Rs(t),a=Rs(r);if(!s)return!1;const c=s&&Rs(Ll),u=s&&(typeof Ml=="function"?(A=>C=>A.encode(C))(new Ml):async A=>new Uint8Array(await new t(A).arrayBuffer())),h=i&&c&&Fl(()=>{let A=!1;const C=new t(Re.origin,{body:new Ll,method:"POST",get duplex(){return A=!0,"half"}}).headers.has("Content-Type");return A&&!C}),f=a&&c&&Fl(()=>P.isReadableStream(new r("").body)),m={stream:f&&(A=>A.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(A=>{!m[A]&&(m[A]=(C,R)=>{let D=C&&C[A];if(D)return D.call(C);throw new z(`Response type '${A}' is not supported`,z.ERR_NOT_SUPPORT,R)})});const T=async A=>{if(A==null)return 0;if(P.isBlob(A))return A.size;if(P.isSpecCompliantForm(A))return(await new t(Re.origin,{method:"POST",body:A}).arrayBuffer()).byteLength;if(P.isArrayBufferView(A)||P.isArrayBuffer(A))return A.byteLength;if(P.isURLSearchParams(A)&&(A=A+""),P.isString(A))return(await u(A)).byteLength},x=async(A,C)=>{const R=P.toFiniteNumber(A.getContentLength());return R??T(C)};return async A=>{let{url:C,method:R,data:D,signal:M,cancelToken:j,timeout:X,onDownloadProgress:ne,onUploadProgress:ee,responseType:w,headers:y,withCredentials:E="same-origin",fetchOptions:v}=Qh(A),I=e||fetch;w=w?(w+"").toLowerCase():"text";let b=Sy([M,j&&j.toAbortSignal()],X),_=null;const ae=b&&b.unsubscribe&&(()=>{b.unsubscribe()});let rt;try{if(ee&&h&&R!=="get"&&R!=="head"&&(rt=await x(y,D))!==0){let Ge=new t(C,{method:"POST",body:D,duplex:"half"}),_t;if(P.isFormData(D)&&(_t=Ge.headers.get("content-type"))&&y.setContentType(_t),Ge.body){const[kn,Et]=xl(rt,Xs(Nl(ee)));D=Dl(Ge.body,Vl,kn,Et)}}P.isString(E)||(E=E?"include":"omit");const je=i&&"credentials"in t.prototype,fs={...v,signal:b,method:R.toUpperCase(),headers:y.normalize().toJSON(),body:D,duplex:"half",credentials:je?E:void 0};_=i&&new t(C,fs);let Le=await(i?I(_,v):I(C,fs));const rn=f&&(w==="stream"||w==="response");if(f&&(ne||rn&&ae)){const Ge={};["status","statusText","headers"].forEach(xn=>{Ge[xn]=Le[xn]});const _t=P.toFiniteNumber(Le.headers.get("content-length")),[kn,Et]=ne&&xl(_t,Xs(Nl(ne),!0))||[];Le=new r(Dl(Le.body,Vl,kn,()=>{Et&&Et(),ae&&ae()}),Ge)}w=w||"text";let Wi=await m[P.findKey(m,w)||"text"](Le,A);return!rn&&ae&&ae(),await new Promise((Ge,_t)=>{Kh(Ge,_t,{data:Wi,headers:De.from(Le.headers),status:Le.status,statusText:Le.statusText,config:A,request:_})})}catch(je){throw ae&&ae(),je&&je.name==="TypeError"&&/Load failed|fetch/i.test(je.message)?Object.assign(new z("Network Error",z.ERR_NETWORK,A,_),{cause:je.cause||je}):z.from(je,je&&je.code,A,_)}}},Ny=new Map,Jh=n=>{let e=n?n.env:{};const{fetch:t,Request:r,Response:s}=e,i=[r,s,t];let a=i.length,c=a,u,h,f=Ny;for(;c--;)u=i[c],h=f.get(u),h===void 0&&f.set(u,h=c?new Map:xy(e)),f=h;return h};Jh();const Qo={http:Qg,xhr:by,fetch:{get:Jh}};P.forEach(Qo,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const Ul=n=>`- ${n}`,Oy=n=>P.isFunction(n)||n===null||n===!1,Yh={getAdapter:(n,e)=>{n=P.isArray(n)?n:[n];const{length:t}=n;let r,s;const i={};for(let a=0;a<t;a++){r=n[a];let c;if(s=r,!Oy(r)&&(s=Qo[(c=String(r)).toLowerCase()],s===void 0))throw new z(`Unknown adapter '${c}'`);if(s&&(P.isFunction(s)||(s=s.get(e))))break;i[c||"#"+a]=s}if(!s){const a=Object.entries(i).map(([u,h])=>`adapter ${u} `+(h===!1?"is not supported by the environment":"is not available in the build"));let c=t?a.length>1?`since :
`+a.map(Ul).join(`
`):" "+Ul(a[0]):"as no adapter specified";throw new z("There is no suitable adapter to dispatch the request "+c,"ERR_NOT_SUPPORT")}return s},adapters:Qo};function vo(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new nr(null,n)}function jl(n){return vo(n),n.headers=De.from(n.headers),n.data=Io.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),Yh.getAdapter(n.adapter||ns.adapter,n)(n).then(function(r){return vo(n),r.data=Io.call(n,n.transformResponse,r),r.headers=De.from(r.headers),r},function(r){return Wh(r)||(vo(n),r&&r.response&&(r.response.data=Io.call(n,n.transformResponse,r.response),r.response.headers=De.from(r.response.headers))),Promise.reject(r)})}const Xh="1.12.2",Si={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{Si[n]=function(r){return typeof r===n||"a"+(e<1?"n ":" ")+n}});const Bl={};Si.transitional=function(e,t,r){function s(i,a){return"[Axios v"+Xh+"] Transitional option '"+i+"'"+a+(r?". "+r:"")}return(i,a,c)=>{if(e===!1)throw new z(s(a," has been removed"+(t?" in "+t:"")),z.ERR_DEPRECATED);return t&&!Bl[a]&&(Bl[a]=!0,console.warn(s(a," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(i,a,c):!0}};Si.spelling=function(e){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function Dy(n,e,t){if(typeof n!="object")throw new z("options must be an object",z.ERR_BAD_OPTION_VALUE);const r=Object.keys(n);let s=r.length;for(;s-- >0;){const i=r[s],a=e[i];if(a){const c=n[i],u=c===void 0||a(c,i,n);if(u!==!0)throw new z("option "+i+" must be "+u,z.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new z("Unknown option "+i,z.ERR_BAD_OPTION)}}const js={assertOptions:Dy,validators:Si},ot=js.validators;let mn=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Pl,response:new Pl}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=yn(this.defaults,t);const{transitional:r,paramsSerializer:s,headers:i}=t;r!==void 0&&js.assertOptions(r,{silentJSONParsing:ot.transitional(ot.boolean),forcedJSONParsing:ot.transitional(ot.boolean),clarifyTimeoutError:ot.transitional(ot.boolean)},!1),s!=null&&(P.isFunction(s)?t.paramsSerializer={serialize:s}:js.assertOptions(s,{encode:ot.function,serialize:ot.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),js.assertOptions(t,{baseUrl:ot.spelling("baseURL"),withXsrfToken:ot.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let a=i&&P.merge(i.common,i[t.method]);i&&P.forEach(["delete","get","head","post","put","patch","common"],A=>{delete i[A]}),t.headers=De.concat(a,i);const c=[];let u=!0;this.interceptors.request.forEach(function(C){typeof C.runWhen=="function"&&C.runWhen(t)===!1||(u=u&&C.synchronous,c.unshift(C.fulfilled,C.rejected))});const h=[];this.interceptors.response.forEach(function(C){h.push(C.fulfilled,C.rejected)});let f,m=0,T;if(!u){const A=[jl.bind(this),void 0];for(A.unshift(...c),A.push(...h),T=A.length,f=Promise.resolve(t);m<T;)f=f.then(A[m++],A[m++]);return f}T=c.length;let x=t;for(;m<T;){const A=c[m++],C=c[m++];try{x=A(x)}catch(R){C.call(this,R);break}}try{f=jl.call(this,x)}catch(A){return Promise.reject(A)}for(m=0,T=h.length;m<T;)f=f.then(h[m++],h[m++]);return f}getUri(e){e=yn(this.defaults,e);const t=Gh(e.baseURL,e.url,e.allowAbsoluteUrls);return qh(t,e.params,e.paramsSerializer)}};P.forEach(["delete","get","head","options"],function(e){mn.prototype[e]=function(t,r){return this.request(yn(r||{},{method:e,url:t,data:(r||{}).data}))}});P.forEach(["post","put","patch"],function(e){function t(r){return function(i,a,c){return this.request(yn(c||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}mn.prototype[e]=t(),mn.prototype[e+"Form"]=t(!0)});let Vy=class Zh{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(i){t=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const a=new Promise(c=>{r.subscribe(c),i=c}).then(s);return a.cancel=function(){r.unsubscribe(i)},a},e(function(i,a,c){r.reason||(r.reason=new nr(i,a,c),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=r=>{e.abort(r)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new Zh(function(s){e=s}),cancel:e}}};function Ly(n){return function(t){return n.apply(null,t)}}function My(n){return P.isObject(n)&&n.isAxiosError===!0}const Jo={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Jo).forEach(([n,e])=>{Jo[e]=n});function ed(n){const e=new mn(n),t=xh(mn.prototype.request,e);return P.extend(t,mn.prototype,e,{allOwnKeys:!0}),P.extend(t,e,null,{allOwnKeys:!0}),t.create=function(s){return ed(yn(n,s))},t}const le=ed(ns);le.Axios=mn;le.CanceledError=nr;le.CancelToken=Vy;le.isCancel=Wh;le.VERSION=Xh;le.toFormData=bi;le.AxiosError=z;le.Cancel=le.CanceledError;le.all=function(e){return Promise.all(e)};le.spread=Ly;le.isAxiosError=My;le.mergeConfig=yn;le.AxiosHeaders=De;le.formToJSON=n=>zh(P.isHTMLForm(n)?new FormData(n):n);le.getAdapter=Yh.getAdapter;le.HttpStatusCode=Jo;le.default=le;const{Axios:aS,AxiosError:cS,CanceledError:lS,isCancel:uS,CancelToken:hS,VERSION:dS,all:fS,Cancel:pS,isAxiosError:mS,spread:gS,toFormData:yS,AxiosHeaders:_S,HttpStatusCode:ES,formToJSON:TS,getAdapter:wS,mergeConfig:IS}=le,Fy=()=>{const n=le.create({baseURL:"http://localhost:5000/api",timeout:1e4,headers:{"Content-Type":"application/json"}});return n.interceptors.request.use(async e=>{if((localStorage.getItem("authMethod")||"firebase")==="firebase")try{const{auth:r}=await Ue(async()=>{const{auth:i}=await Promise.resolve().then(()=>Nb);return{auth:i}},void 0),s=r.currentUser;if(s){const i=await s.getIdToken();e.headers.Authorization=`Bearer ${i}`}}catch(r){console.error("Error getting Firebase token:",r)}else{const r=localStorage.getItem("accessToken");r&&(e.headers.Authorization=`Bearer ${r}`)}return e},e=>Promise.reject(e)),n.interceptors.response.use(e=>e,async e=>{var r;const t=e.config;if(((r=e.response)==null?void 0:r.status)===401&&!t._retry){t._retry=!0;try{const s=localStorage.getItem("refreshToken");if(s){const i=await le.post("http://localhost:5000/api/auth/refresh",{refreshToken:s}),{accessToken:a}=i.data;return localStorage.setItem("accessToken",a),t.headers.Authorization=`Bearer ${a}`,n(t)}}catch{localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),window.location.href="/login"}}return Promise.reject(e)}),n},Cs=Fy(),Uy=()=>{};var $l={};/**
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
 */const td=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},jy=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},nd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,h=u?n[s+2]:0,f=i>>2,m=(i&3)<<4|c>>4;let T=(c&15)<<2|h>>6,x=h&63;u||(x=64,a||(T=64)),r.push(t[f],t[m],t[T],t[x])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(td(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):jy(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||m==null)throw new By;const T=i<<2|c>>4;if(r.push(T),h!==64){const x=c<<4&240|h>>2;if(r.push(x),m!==64){const A=h<<6&192|m;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class By extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $y=function(n){const e=td(n);return nd.encodeByteArray(e,!0)},Zs=function(n){return $y(n).replace(/\./g,"")},rd=function(n){try{return nd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function qy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Hy=()=>qy().__FIREBASE_DEFAULTS__,zy=()=>{if(typeof process>"u"||typeof $l>"u")return;const n=$l.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Wy=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&rd(n[1]);return e&&JSON.parse(e)},Ri=()=>{try{return Uy()||Hy()||zy()||Wy()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},sd=n=>{var e,t;return(t=(e=Ri())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Ky=n=>{const e=sd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},id=()=>{var n;return(n=Ri())==null?void 0:n.config},od=n=>{var e;return(e=Ri())==null?void 0:e[`_${n}`]};/**
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
 */class Gy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function rr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ad(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Qy(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Zs(JSON.stringify(t)),Zs(JSON.stringify(a)),""].join(".")}const Vr={};function Jy(){const n={prod:[],emulator:[]};for(const e of Object.keys(Vr))Vr[e]?n.emulator.push(e):n.prod.push(e);return n}function Yy(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let ql=!1;function cd(n,e){if(typeof window>"u"||typeof document>"u"||!rr(window.location.host)||Vr[n]===e||Vr[n]||ql)return;Vr[n]=e;function t(T){return`__firebase__banner__${T}`}const r="__firebase__banner",i=Jy().prod.length>0;function a(){const T=document.getElementById(r);T&&T.remove()}function c(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function u(T,x){T.setAttribute("width","24"),T.setAttribute("id",x),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function h(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{ql=!0,a()},T}function f(T,x){T.setAttribute("id",x),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function m(){const T=Yy(r),x=t("text"),A=document.getElementById(x)||document.createElement("span"),C=t("learnmore"),R=document.getElementById(C)||document.createElement("a"),D=t("preprendIcon"),M=document.getElementById(D)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const j=T.element;c(j),f(R,C);const X=h();u(M,D),j.append(M,A,R,X),document.body.appendChild(j)}i?(A.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(M.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,A.innerText="Preview backend running in this workspace."),A.setAttribute("id",x)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function Zy(){var e;const n=(e=Ri())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function e_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ld(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function t_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function n_(){const n=Ce();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function r_(){return!Zy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ud(){try{return typeof indexedDB=="object"}catch{return!1}}function hd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}function s_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const i_="FirebaseError";class nt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=i_,Object.setPrototypeOf(this,nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,An.prototype.create)}}class An{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?o_(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new nt(s,c,r)}}function o_(n,e){return n.replace(a_,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const a_=/\{\$([^}]+)}/g;function c_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Qt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Hl(i)&&Hl(a)){if(!Qt(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Hl(n){return n!==null&&typeof n=="object"}/**
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
 */function rs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Pr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function kr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function l_(n,e){const t=new u_(n,e);return t.subscribe.bind(t)}class u_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");h_(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ao),s.error===void 0&&(s.error=Ao),s.complete===void 0&&(s.complete=Ao);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function h_(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ao(){}/**
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
 */const d_=1e3,f_=2,p_=4*60*60*1e3,m_=.5;function zl(n,e=d_,t=f_){const r=e*Math.pow(t,n),s=Math.round(m_*r*(Math.random()-.5)*2);return Math.min(p_,r+s)}/**
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
 */function we(n){return n&&n._delegate?n._delegate:n}class Ze{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const un="[DEFAULT]";/**
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
 */class g_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Gy;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(__(e))try{this.getOrInitializeService({instanceIdentifier:un})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=un){return this.instances.has(e)}getOptions(e=un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:y_(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=un){return this.component?this.component.multipleInstances?e:un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function y_(n){return n===un?void 0:n}function __(n){return n.instantiationMode==="EAGER"}/**
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
 */class E_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new g_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const T_={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},w_=K.INFO,I_={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},v_=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=I_[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ci{constructor(e){this.name=e,this._logLevel=w_,this._logHandler=v_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?T_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const A_=(n,e)=>e.some(t=>n instanceof t);let Wl,Kl;function b_(){return Wl||(Wl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function S_(){return Kl||(Kl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dd=new WeakMap,Yo=new WeakMap,fd=new WeakMap,bo=new WeakMap,Ra=new WeakMap;function R_(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(zt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&dd.set(t,n)}).catch(()=>{}),Ra.set(e,n),e}function C_(n){if(Yo.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Yo.set(n,e)}let Xo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Yo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||fd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return zt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function P_(n){Xo=n(Xo)}function k_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(So(this),e,...t);return fd.set(r,e.sort?e.sort():[e]),zt(r)}:S_().includes(n)?function(...e){return n.apply(So(this),e),zt(dd.get(this))}:function(...e){return zt(n.apply(So(this),e))}}function x_(n){return typeof n=="function"?k_(n):(n instanceof IDBTransaction&&C_(n),A_(n,b_())?new Proxy(n,Xo):n)}function zt(n){if(n instanceof IDBRequest)return R_(n);if(bo.has(n))return bo.get(n);const e=x_(n);return e!==n&&(bo.set(n,e),Ra.set(e,n)),e}const So=n=>Ra.get(n);function pd(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=zt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(zt(a.result),u.oldVersion,u.newVersion,zt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const N_=["get","getKey","getAll","getAllKeys","count"],O_=["put","add","delete","clear"],Ro=new Map;function Gl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ro.get(e))return Ro.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=O_.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||N_.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&u.done]))[0]};return Ro.set(e,i),i}P_(n=>({...n,get:(e,t,r)=>Gl(e,t)||n.get(e,t,r),has:(e,t)=>!!Gl(e,t)||n.has(e,t)}));/**
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
 */class D_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(V_(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function V_(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zo="@firebase/app",Ql="0.14.3";/**
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
 */const St=new Ci("@firebase/app"),L_="@firebase/app-compat",M_="@firebase/analytics-compat",F_="@firebase/analytics",U_="@firebase/app-check-compat",j_="@firebase/app-check",B_="@firebase/auth",$_="@firebase/auth-compat",q_="@firebase/database",H_="@firebase/data-connect",z_="@firebase/database-compat",W_="@firebase/functions",K_="@firebase/functions-compat",G_="@firebase/installations",Q_="@firebase/installations-compat",J_="@firebase/messaging",Y_="@firebase/messaging-compat",X_="@firebase/performance",Z_="@firebase/performance-compat",eE="@firebase/remote-config",tE="@firebase/remote-config-compat",nE="@firebase/storage",rE="@firebase/storage-compat",sE="@firebase/firestore",iE="@firebase/ai",oE="@firebase/firestore-compat",aE="firebase",cE="12.3.0";/**
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
 */const ea="[DEFAULT]",lE={[Zo]:"fire-core",[L_]:"fire-core-compat",[F_]:"fire-analytics",[M_]:"fire-analytics-compat",[j_]:"fire-app-check",[U_]:"fire-app-check-compat",[B_]:"fire-auth",[$_]:"fire-auth-compat",[q_]:"fire-rtdb",[H_]:"fire-data-connect",[z_]:"fire-rtdb-compat",[W_]:"fire-fn",[K_]:"fire-fn-compat",[G_]:"fire-iid",[Q_]:"fire-iid-compat",[J_]:"fire-fcm",[Y_]:"fire-fcm-compat",[X_]:"fire-perf",[Z_]:"fire-perf-compat",[eE]:"fire-rc",[tE]:"fire-rc-compat",[nE]:"fire-gcs",[rE]:"fire-gcs-compat",[sE]:"fire-fst",[oE]:"fire-fst-compat",[iE]:"fire-vertex","fire-js":"fire-js",[aE]:"fire-js-all"};/**
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
 */const ei=new Map,uE=new Map,ta=new Map;function Jl(n,e){try{n.container.addComponent(e)}catch(t){St.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function pt(n){const e=n.name;if(ta.has(e))return St.debug(`There were multiple attempts to register component ${e}.`),!1;ta.set(e,n);for(const t of ei.values())Jl(t,n);for(const t of uE.values())Jl(t,n);return!0}function bn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function He(n){return n==null?!1:n.settings!==void 0}/**
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
 */const hE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wt=new An("app","Firebase",hE);/**
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
 */class dE{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wt.create("app-deleted",{appName:this._name})}}/**
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
 */const sr=cE;function md(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:ea,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Wt.create("bad-app-name",{appName:String(s)});if(t||(t=id()),!t)throw Wt.create("no-options");const i=ei.get(s);if(i){if(Qt(t,i.options)&&Qt(r,i.config))return i;throw Wt.create("duplicate-app",{appName:s})}const a=new E_(s);for(const u of ta.values())a.addComponent(u);const c=new dE(t,r,a);return ei.set(s,c),c}function Ca(n=ea){const e=ei.get(n);if(!e&&n===ea&&id())return md();if(!e)throw Wt.create("no-app",{appName:n});return e}function Ke(n,e,t){let r=lE[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),St.warn(a.join(" "));return}pt(new Ze(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const fE="firebase-heartbeat-database",pE=1,qr="firebase-heartbeat-store";let Co=null;function gd(){return Co||(Co=pd(fE,pE,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(qr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Wt.create("idb-open",{originalErrorMessage:n.message})})),Co}async function mE(n){try{const t=(await gd()).transaction(qr),r=await t.objectStore(qr).get(yd(n));return await t.done,r}catch(e){if(e instanceof nt)St.warn(e.message);else{const t=Wt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});St.warn(t.message)}}}async function Yl(n,e){try{const r=(await gd()).transaction(qr,"readwrite");await r.objectStore(qr).put(e,yd(n)),await r.done}catch(t){if(t instanceof nt)St.warn(t.message);else{const r=Wt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});St.warn(r.message)}}}function yd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const gE=1024,yE=30;class _E{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new TE(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Xl();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>yE){const a=wE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){St.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Xl(),{heartbeatsToSend:r,unsentEntries:s}=EE(this._heartbeatsCache.heartbeats),i=Zs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return St.warn(t),""}}}function Xl(){return new Date().toISOString().substring(0,10)}function EE(n,e=gE){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Zl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Zl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class TE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ud()?hd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await mE(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Yl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Yl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Zl(n){return Zs(JSON.stringify({version:2,heartbeats:n})).length}function wE(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function IE(n){pt(new Ze("platform-logger",e=>new D_(e),"PRIVATE")),pt(new Ze("heartbeat",e=>new _E(e),"PRIVATE")),Ke(Zo,Ql,n),Ke(Zo,Ql,"esm2020"),Ke("fire-js","")}IE("");function _d(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vE=_d,Ed=new An("auth","Firebase",_d());/**
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
 */const ti=new Ci("@firebase/auth");function AE(n,...e){ti.logLevel<=K.WARN&&ti.warn(`Auth (${sr}): ${n}`,...e)}function Bs(n,...e){ti.logLevel<=K.ERROR&&ti.error(`Auth (${sr}): ${n}`,...e)}/**
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
 */function et(n,...e){throw Pa(n,...e)}function ct(n,...e){return Pa(n,...e)}function Td(n,e,t){const r={...vE(),[e]:t};return new An("auth","Firebase",r).create(e,{appName:n.name})}function At(n){return Td(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Pa(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ed.create(n,...e)}function B(n,e,...t){if(!n)throw Pa(e,...t)}function It(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Bs(e),new Error(e)}function Rt(n,e){n||It(e)}/**
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
 */function na(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function bE(){return eu()==="http:"||eu()==="https:"}function eu(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function SE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bE()||ld()||"connection"in navigator)?navigator.onLine:!0}function RE(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ss{constructor(e,t){this.shortDelay=e,this.longDelay=t,Rt(t>e,"Short delay should be less than long delay!"),this.isMobile=Xy()||t_()}get(){return SE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ka(n,e){Rt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class wd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;It("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;It("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;It("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const CE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const PE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],kE=new ss(3e4,6e4);function kt(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function yt(n,e,t,r,s={}){return Id(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=rs({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:u,...i};return e_()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&rr(n.emulatorConfig.host)&&(h.credentials="include"),wd.fetch()(await vd(n,n.config.apiHost,t,c),h)})}async function Id(n,e,t){n._canInitEmulator=!1;const r={...CE,...e};try{const s=new NE(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Ps(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ps(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Ps(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Ps(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Td(n,f,h);et(n,f)}}catch(s){if(s instanceof nt)throw s;et(n,"network-request-failed",{message:String(s)})}}async function is(n,e,t,r,s={}){const i=await yt(n,e,t,r,s);return"mfaPendingCredential"in i&&et(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function vd(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?ka(n.config,s):`${n.config.apiScheme}://${s}`;return PE.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function xE(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class NE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ct(this.auth,"network-request-failed")),kE.get())})}}function Ps(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=ct(n,e,r);return s.customData._tokenResponse=t,s}function tu(n){return n!==void 0&&n.enterprise!==void 0}class OE{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return xE(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function DE(n,e){return yt(n,"GET","/v2/recaptchaConfig",kt(n,e))}/**
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
 */async function VE(n,e){return yt(n,"POST","/v1/accounts:delete",e)}async function ni(n,e){return yt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Lr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LE(n,e=!1){const t=we(n),r=await t.getIdToken(e),s=xa(r);B(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Lr(Po(s.auth_time)),issuedAtTime:Lr(Po(s.iat)),expirationTime:Lr(Po(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Po(n){return Number(n)*1e3}function xa(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Bs("JWT malformed, contained fewer than 3 sections"),null;try{const s=rd(t);return s?JSON.parse(s):(Bs("Failed to decode base64 JWT payload"),null)}catch(s){return Bs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function nu(n){const e=xa(n);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Gn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof nt&&ME(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function ME({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class FE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ra{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Lr(this.lastLoginAt),this.creationTime=Lr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ri(n){var m;const e=n.auth,t=await n.getIdToken(),r=await Gn(n,ni(e,{idToken:t}));B(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?Ad(s.providerUserInfo):[],a=jE(n.providerData,i),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ra(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function UE(n){const e=we(n);await ri(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jE(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ad(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function BE(n,e){const t=await Id(n,{},async()=>{const r=rs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await vd(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&rr(n.emulatorConfig.host)&&(u.credentials="include"),wd.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function $E(n,e){return yt(n,"POST","/v2/accounts:revokeToken",kt(n,e))}/**
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
 */class qn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){B(e.length!==0,"internal-error");const t=nu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await BE(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new qn;return r&&(B(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(B(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(B(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qn,this.toJSON())}_performRefresh(){return It("not implemented")}}/**
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
 */function Mt(n,e){B(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ye{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new FE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ra(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Gn(this,this.stsTokenManager.getToken(this.auth,e));return B(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return LE(this,e)}reload(){return UE(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ye({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ri(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(He(this.auth.app))return Promise.reject(At(this.auth));const e=await this.getIdToken();return await Gn(this,VE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,u=t._redirectEventId??void 0,h=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:m,emailVerified:T,isAnonymous:x,providerData:A,stsTokenManager:C}=t;B(m&&C,e,"internal-error");const R=qn.fromJSON(this.name,C);B(typeof m=="string",e,"internal-error"),Mt(r,e.name),Mt(s,e.name),B(typeof T=="boolean",e,"internal-error"),B(typeof x=="boolean",e,"internal-error"),Mt(i,e.name),Mt(a,e.name),Mt(c,e.name),Mt(u,e.name),Mt(h,e.name),Mt(f,e.name);const D=new Ye({uid:m,auth:e,email:s,emailVerified:T,displayName:r,isAnonymous:x,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:R,createdAt:h,lastLoginAt:f});return A&&Array.isArray(A)&&(D.providerData=A.map(M=>({...M}))),u&&(D._redirectEventId=u),D}static async _fromIdTokenResponse(e,t,r=!1){const s=new qn;s.updateFromServerResponse(t);const i=new Ye({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ri(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];B(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ad(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new qn;c.updateFromIdToken(r);const u=new Ye({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ra(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
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
 */const ru=new Map;function vt(n){Rt(n instanceof Function,"Expected a class definition");let e=ru.get(n);return e?(Rt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ru.set(n,e),e)}/**
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
 */class bd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}bd.type="NONE";const su=bd;/**
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
 */function $s(n,e,t){return`firebase:${n}:${e}:${t}`}class Hn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=$s(this.userKey,s.apiKey,i),this.fullPersistenceKey=$s("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ni(this.auth,{idToken:e}).catch(()=>{});return t?Ye._fromGetAccountInfoResponse(this.auth,t,e):null}return Ye._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Hn(vt(su),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||vt(su);const a=$s(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(a);if(f){let m;if(typeof f=="string"){const T=await ni(e,{idToken:f}).catch(()=>{});if(!T)break;m=await Ye._fromGetAccountInfoResponse(e,T,f)}else m=Ye._fromJSON(e,f);h!==i&&(c=m),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Hn(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Hn(i,e,r))}}/**
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
 */function iu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Pd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xd(e))return"Blackberry";if(Nd(e))return"Webos";if(Rd(e))return"Safari";if((e.includes("chrome/")||Cd(e))&&!e.includes("edge/"))return"Chrome";if(kd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Sd(n=Ce()){return/firefox\//i.test(n)}function Rd(n=Ce()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cd(n=Ce()){return/crios\//i.test(n)}function Pd(n=Ce()){return/iemobile/i.test(n)}function kd(n=Ce()){return/android/i.test(n)}function xd(n=Ce()){return/blackberry/i.test(n)}function Nd(n=Ce()){return/webos/i.test(n)}function Na(n=Ce()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function qE(n=Ce()){var e;return Na(n)&&!!((e=window.navigator)!=null&&e.standalone)}function HE(){return n_()&&document.documentMode===10}function Od(n=Ce()){return Na(n)||kd(n)||Nd(n)||xd(n)||/windows phone/i.test(n)||Pd(n)}/**
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
 */function Dd(n,e=[]){let t;switch(n){case"Browser":t=iu(Ce());break;case"Worker":t=`${iu(Ce())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${sr}/${r}`}/**
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
 */class zE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function WE(n,e={}){return yt(n,"GET","/v2/passwordPolicy",kt(n,e))}/**
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
 */const KE=6;class GE{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??KE,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class QE{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ou(this),this.idTokenSubscription=new ou(this),this.beforeStateQueue=new zE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ed,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=vt(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Hn.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ni(this,{idToken:e}),r=await Ye._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(He(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ri(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=RE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(He(this.app))return Promise.reject(At(this));const t=e?we(e):null;return t&&B(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return He(this.app)?Promise.reject(At(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return He(this.app)?Promise.reject(At(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await WE(this),t=new GE(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new An("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await $E(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&vt(e)||this._popupRedirectResolver;B(t,this,"argument-error"),this.redirectPersistenceManager=await Hn.create(this,[vt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(He(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&AE(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function nn(n){return we(n)}class ou{constructor(e){this.auth=e,this.observer=null,this.addObserver=l_(t=>this.observer=t)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Pi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function JE(n){Pi=n}function Vd(n){return Pi.loadJS(n)}function YE(){return Pi.recaptchaEnterpriseScript}function XE(){return Pi.gapiScript}function ZE(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class eT{constructor(){this.enterprise=new tT}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class tT{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const nT="recaptcha-enterprise",Ld="NO_RECAPTCHA";class rT{constructor(e){this.type=nT,this.auth=nn(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{DE(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new OE(u);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(u=>{c(u)})})}function s(i,a,c){const u=window.grecaptcha;tu(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(Ld)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new eT().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&tu(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=YE();u.length!==0&&(u+=c),Vd(u).then(()=>{s(c,i,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}}async function au(n,e,t,r=!1,s=!1){const i=new rT(n);let a;if(s)a=Ld;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function si(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await au(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await au(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
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
 */function sT(n,e){const t=bn(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Qt(i,e??{}))return s;et(s,"already-initialized")}return t.initialize({options:e})}function iT(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(vt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function oT(n,e,t){const r=nn(n);B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Md(e),{host:a,port:c}=aT(e),u=c===null?"":`:${c}`,h={url:`${i}//${a}${u}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){B(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),B(Qt(h,r.config.emulator)&&Qt(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,rr(a)?(ad(`${i}//${a}${u}`),cd("Auth",!0)):cT()}function Md(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function aT(n){const e=Md(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:cu(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:cu(a)}}}function cu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function cT(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Oa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return It("not implemented")}_getIdTokenResponse(e){return It("not implemented")}_linkToIdToken(e,t){return It("not implemented")}_getReauthenticationResolver(e){return It("not implemented")}}async function lT(n,e){return yt(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function uT(n,e){return is(n,"POST","/v1/accounts:signInWithPassword",kt(n,e))}async function Fd(n,e){return yt(n,"POST","/v1/accounts:sendOobCode",kt(n,e))}async function hT(n,e){return Fd(n,e)}async function dT(n,e){return Fd(n,e)}/**
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
 */async function fT(n,e){return is(n,"POST","/v1/accounts:signInWithEmailLink",kt(n,e))}async function pT(n,e){return is(n,"POST","/v1/accounts:signInWithEmailLink",kt(n,e))}/**
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
 */class Hr extends Oa{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Hr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Hr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return si(e,t,"signInWithPassword",uT);case"emailLink":return fT(e,{email:this._email,oobCode:this._password});default:et(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return si(e,r,"signUpPassword",lT);case"emailLink":return pT(e,{idToken:t,email:this._email,oobCode:this._password});default:et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function zn(n,e){return is(n,"POST","/v1/accounts:signInWithIdp",kt(n,e))}/**
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
 */const mT="http://localhost";class _n extends Oa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new _n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):et("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new _n(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return zn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,zn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,zn(e,t)}buildRequest(){const e={requestUri:mT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=rs(t)}return e}}/**
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
 */function gT(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yT(n){const e=Pr(kr(n)).link,t=e?Pr(kr(e)).deep_link_id:null,r=Pr(kr(n)).deep_link_id;return(r?Pr(kr(r)).link:null)||r||t||e||n}class Da{constructor(e){const t=Pr(kr(e)),r=t.apiKey??null,s=t.oobCode??null,i=gT(t.mode??null);B(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=yT(e);try{return new Da(t)}catch{return null}}}/**
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
 */class ir{constructor(){this.providerId=ir.PROVIDER_ID}static credential(e,t){return Hr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Da.parseLink(t);return B(r,"argument-error"),Hr._fromEmailAndCode(e,r.code,r.tenantId)}}ir.PROVIDER_ID="password";ir.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ir.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ud{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class os extends Ud{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class jt extends os{constructor(){super("facebook.com")}static credential(e){return _n._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jt.credential(e.oauthAccessToken)}catch{return null}}}jt.FACEBOOK_SIGN_IN_METHOD="facebook.com";jt.PROVIDER_ID="facebook.com";/**
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
 */class Bt extends os{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return _n._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Bt.credential(t,r)}catch{return null}}}Bt.GOOGLE_SIGN_IN_METHOD="google.com";Bt.PROVIDER_ID="google.com";/**
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
 */class $t extends os{constructor(){super("github.com")}static credential(e){return _n._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $t.credential(e.oauthAccessToken)}catch{return null}}}$t.GITHUB_SIGN_IN_METHOD="github.com";$t.PROVIDER_ID="github.com";/**
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
 */class qt extends os{constructor(){super("twitter.com")}static credential(e,t){return _n._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return qt.credential(t,r)}catch{return null}}}qt.TWITTER_SIGN_IN_METHOD="twitter.com";qt.PROVIDER_ID="twitter.com";/**
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
 */async function _T(n,e){return is(n,"POST","/v1/accounts:signUp",kt(n,e))}/**
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
 */class En{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Ye._fromIdTokenResponse(e,r,s),a=lu(r);return new En({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=lu(r);return new En({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function lu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class ii extends nt{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ii.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ii(e,t,r,s)}}function jd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ii._fromErrorAndOperation(n,i,e,r):i})}async function ET(n,e,t=!1){const r=await Gn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return En._forOperation(n,"link",r)}/**
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
 */async function TT(n,e,t=!1){const{auth:r}=n;if(He(r.app))return Promise.reject(At(r));const s="reauthenticate";try{const i=await Gn(n,jd(r,s,e,n),t);B(i.idToken,r,"internal-error");const a=xa(i.idToken);B(a,r,"internal-error");const{sub:c}=a;return B(n.uid===c,r,"user-mismatch"),En._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&et(r,"user-mismatch"),i}}/**
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
 */async function Bd(n,e,t=!1){if(He(n.app))return Promise.reject(At(n));const r="signIn",s=await jd(n,r,e),i=await En._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function wT(n,e){return Bd(nn(n),e)}/**
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
 */async function $d(n){const e=nn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function IT(n,e,t){const r=nn(n);await si(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",dT)}async function vT(n,e,t){if(He(n.app))return Promise.reject(At(n));const r=nn(n),a=await si(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",_T).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&$d(n),u}),c=await En._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function AT(n,e,t){return He(n.app)?Promise.reject(At(n)):wT(we(n),ir.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&$d(n),r})}async function bT(n,e){const t=we(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:i}=await hT(t.auth,s);i!==n.email&&await n.reload()}/**
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
 */async function ST(n,e){return yt(n,"POST","/v1/accounts:update",e)}/**
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
 */async function RT(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=we(n),i={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await Gn(r,ST(r.auth,i));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function CT(n,e,t,r){return we(n).onIdTokenChanged(e,t,r)}function PT(n,e,t){return we(n).beforeAuthStateChanged(e,t)}function kT(n,e,t,r){return we(n).onAuthStateChanged(e,t,r)}function xT(n){return we(n).signOut()}const oi="__sak";/**
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
 */class qd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(oi,"1"),this.storage.removeItem(oi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const NT=1e3,OT=10;class Hd extends qd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Od(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);HE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,OT):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},NT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hd.type="LOCAL";const DT=Hd;/**
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
 */class zd extends qd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}zd.type="SESSION";const Wd=zd;/**
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
 */function VT(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ki{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ki(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),u=await VT(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ki.receivers=[];/**
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
 */function Va(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class LT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const h=Va("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(m){const T=m;if(T.data.eventId===h)switch(T.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(T.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function lt(){return window}function MT(n){lt().location.href=n}/**
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
 */function Kd(){return typeof lt().WorkerGlobalScope<"u"&&typeof lt().importScripts=="function"}async function FT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function UT(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function jT(){return Kd()?self:null}/**
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
 */const Gd="firebaseLocalStorageDb",BT=1,ai="firebaseLocalStorage",Qd="fbase_key";class as{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function xi(n,e){return n.transaction([ai],e?"readwrite":"readonly").objectStore(ai)}function $T(){const n=indexedDB.deleteDatabase(Gd);return new as(n).toPromise()}function sa(){const n=indexedDB.open(Gd,BT);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ai,{keyPath:Qd})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ai)?e(r):(r.close(),await $T(),e(await sa()))})})}async function uu(n,e,t){const r=xi(n,!0).put({[Qd]:e,value:t});return new as(r).toPromise()}async function qT(n,e){const t=xi(n,!1).get(e),r=await new as(t).toPromise();return r===void 0?null:r.value}function hu(n,e){const t=xi(n,!0).delete(e);return new as(t).toPromise()}const HT=800,zT=3;class Jd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>zT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ki._getInstance(jT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await FT(),!this.activeServiceWorker)return;this.sender=new LT(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||UT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sa();return await uu(e,oi,"1"),await hu(e,oi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>uu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>qT(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>hu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=xi(s,!1).getAll();return new as(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jd.type="LOCAL";const WT=Jd;new ss(3e4,6e4);/**
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
 */function KT(n,e){return e?vt(e):(B(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class La extends Oa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return zn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return zn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function GT(n){return Bd(n.auth,new La(n),n.bypassAuthState)}function QT(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),TT(t,new La(n),n.bypassAuthState)}async function JT(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),ET(t,new La(n),n.bypassAuthState)}/**
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
 */class Yd{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GT;case"linkViaPopup":case"linkViaRedirect":return JT;case"reauthViaPopup":case"reauthViaRedirect":return QT;default:et(this.auth,"internal-error")}}resolve(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const YT=new ss(2e3,1e4);class jn extends Yd{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,jn.currentPopupAction&&jn.currentPopupAction.cancel(),jn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){Rt(this.filter.length===1,"Popup operations only handle one event");const e=Va();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,YT.get())};e()}}jn.currentPopupAction=null;/**
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
 */const XT="pendingRedirect",qs=new Map;class ZT extends Yd{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=qs.get(this.auth._key());if(!e){try{const r=await ew(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}qs.set(this.auth._key(),e)}return this.bypassAuthState||qs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ew(n,e){const t=rw(e),r=nw(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function tw(n,e){qs.set(n._key(),e)}function nw(n){return vt(n._redirectPersistence)}function rw(n){return $s(XT,n.config.apiKey,n.name)}async function sw(n,e,t=!1){if(He(n.app))return Promise.reject(At(n));const r=nn(n),s=KT(r,e),a=await new ZT(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const iw=10*60*1e3;class ow{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!aw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Xd(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(ct(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iw&&this.cachedEventUids.clear(),this.cachedEventUids.has(du(e))}saveEventToCache(e){this.cachedEventUids.add(du(e)),this.lastProcessedEventTime=Date.now()}}function du(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Xd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function aw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xd(n);default:return!1}}/**
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
 */async function cw(n,e={}){return yt(n,"GET","/v1/projects",e)}/**
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
 */const lw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uw=/^https?/;async function hw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await cw(n);for(const t of e)try{if(dw(t))return}catch{}et(n,"unauthorized-domain")}function dw(n){const e=na(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!uw.test(t))return!1;if(lw.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const fw=new ss(3e4,6e4);function fu(){const n=lt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function pw(n){return new Promise((e,t)=>{var s,i,a;function r(){fu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fu(),t(ct(n,"network-request-failed"))},timeout:fw.get()})}if((i=(s=lt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=lt().gapi)!=null&&a.load)r();else{const c=ZE("iframefcb");return lt()[c]=()=>{gapi.load?r():t(ct(n,"network-request-failed"))},Vd(`${XE()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Hs=null,e})}let Hs=null;function mw(n){return Hs=Hs||pw(n),Hs}/**
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
 */const gw=new ss(5e3,15e3),yw="__/auth/iframe",_w="emulator/auth/iframe",Ew={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Tw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ww(n){const e=n.config;B(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ka(e,_w):`https://${n.config.authDomain}/${yw}`,r={apiKey:e.apiKey,appName:n.name,v:sr},s=Tw.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${rs(r).slice(1)}`}async function Iw(n){const e=await mw(n),t=lt().gapi;return B(t,n,"internal-error"),e.open({where:document.body,url:ww(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ew,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=ct(n,"network-request-failed"),c=lt().setTimeout(()=>{i(a)},gw.get());function u(){lt().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const vw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Aw=500,bw=600,Sw="_blank",Rw="http://localhost";class pu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Cw(n,e,t,r=Aw,s=bw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u={...vw,width:r.toString(),height:s.toString(),top:i,left:a},h=Ce().toLowerCase();t&&(c=Cd(h)?Sw:t),Sd(h)&&(e=e||Rw,u.scrollbars="yes");const f=Object.entries(u).reduce((T,[x,A])=>`${T}${x}=${A},`,"");if(qE(h)&&c!=="_self")return Pw(e||"",c),new pu(null);const m=window.open(e||"",c,f);B(m,n,"popup-blocked");try{m.focus()}catch{}return new pu(m)}function Pw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const kw="__/auth/handler",xw="emulator/auth/handler",Nw=encodeURIComponent("fac");async function mu(n,e,t,r,s,i){B(n.config.authDomain,n,"auth-domain-config-required"),B(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:sr,eventId:s};if(e instanceof Ud){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",c_(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))a[f]=m}if(e instanceof os){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await n._getAppCheckToken(),h=u?`#${Nw}=${encodeURIComponent(u)}`:"";return`${Ow(n)}?${rs(c).slice(1)}${h}`}function Ow({config:n}){return n.emulator?ka(n,xw):`https://${n.authDomain}/${kw}`}/**
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
 */const ko="webStorageSupport";class Dw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wd,this._completeRedirectFn=sw,this._overrideRedirectResult=tw}async _openPopup(e,t,r,s){var a;Rt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await mu(e,t,r,na(),s);return Cw(e,i,Va())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await mu(e,t,r,na(),s);return MT(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Rt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Iw(e),r=new ow(e);return t.register("authEvent",s=>(B(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ko,{type:ko},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[ko];i!==void 0&&t(!!i),et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=hw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Od()||Rd()||Na()}}const Vw=Dw;var gu="@firebase/auth",yu="1.11.0";/**
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
 */class Lw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Mw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Fw(n){pt(new Ze("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;B(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dd(n)},h=new QE(r,s,i,u);return iT(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),pt(new Ze("auth-internal",e=>{const t=nn(e.getProvider("auth").getImmediate());return(r=>new Lw(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ke(gu,yu,Mw(n)),Ke(gu,yu,"esm2020")}/**
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
 */const Uw=5*60,jw=od("authIdTokenMaxAge")||Uw;let _u=null;const Bw=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>jw)return;const s=t==null?void 0:t.token;_u!==s&&(_u=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function $w(n=Ca()){const e=bn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=sT(n,{popupRedirectResolver:Vw,persistence:[WT,DT,Wd]}),r=od("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Bw(i.toString());PT(t,a,()=>a(t.currentUser)),CT(t,c=>a(c))}}const s=sd("auth");return s&&oT(t,`http://${s}`),t}function qw(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}JE({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=ct("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",qw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Fw("Browser");var Eu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kt,Zd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function E(){}E.prototype=y.prototype,w.F=y.prototype,w.prototype=new E,w.prototype.constructor=w,w.D=function(v,I,b){for(var _=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)_[ae-2]=arguments[ae];return y.prototype[I].apply(v,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,y,E){E||(E=0);const v=Array(16);if(typeof y=="string")for(var I=0;I<16;++I)v[I]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(I=0;I<16;++I)v[I]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=w.g[0],E=w.g[1],I=w.g[2];let b=w.g[3],_;_=y+(b^E&(I^b))+v[0]+3614090360&4294967295,y=E+(_<<7&4294967295|_>>>25),_=b+(I^y&(E^I))+v[1]+3905402710&4294967295,b=y+(_<<12&4294967295|_>>>20),_=I+(E^b&(y^E))+v[2]+606105819&4294967295,I=b+(_<<17&4294967295|_>>>15),_=E+(y^I&(b^y))+v[3]+3250441966&4294967295,E=I+(_<<22&4294967295|_>>>10),_=y+(b^E&(I^b))+v[4]+4118548399&4294967295,y=E+(_<<7&4294967295|_>>>25),_=b+(I^y&(E^I))+v[5]+1200080426&4294967295,b=y+(_<<12&4294967295|_>>>20),_=I+(E^b&(y^E))+v[6]+2821735955&4294967295,I=b+(_<<17&4294967295|_>>>15),_=E+(y^I&(b^y))+v[7]+4249261313&4294967295,E=I+(_<<22&4294967295|_>>>10),_=y+(b^E&(I^b))+v[8]+1770035416&4294967295,y=E+(_<<7&4294967295|_>>>25),_=b+(I^y&(E^I))+v[9]+2336552879&4294967295,b=y+(_<<12&4294967295|_>>>20),_=I+(E^b&(y^E))+v[10]+4294925233&4294967295,I=b+(_<<17&4294967295|_>>>15),_=E+(y^I&(b^y))+v[11]+2304563134&4294967295,E=I+(_<<22&4294967295|_>>>10),_=y+(b^E&(I^b))+v[12]+1804603682&4294967295,y=E+(_<<7&4294967295|_>>>25),_=b+(I^y&(E^I))+v[13]+4254626195&4294967295,b=y+(_<<12&4294967295|_>>>20),_=I+(E^b&(y^E))+v[14]+2792965006&4294967295,I=b+(_<<17&4294967295|_>>>15),_=E+(y^I&(b^y))+v[15]+1236535329&4294967295,E=I+(_<<22&4294967295|_>>>10),_=y+(I^b&(E^I))+v[1]+4129170786&4294967295,y=E+(_<<5&4294967295|_>>>27),_=b+(E^I&(y^E))+v[6]+3225465664&4294967295,b=y+(_<<9&4294967295|_>>>23),_=I+(y^E&(b^y))+v[11]+643717713&4294967295,I=b+(_<<14&4294967295|_>>>18),_=E+(b^y&(I^b))+v[0]+3921069994&4294967295,E=I+(_<<20&4294967295|_>>>12),_=y+(I^b&(E^I))+v[5]+3593408605&4294967295,y=E+(_<<5&4294967295|_>>>27),_=b+(E^I&(y^E))+v[10]+38016083&4294967295,b=y+(_<<9&4294967295|_>>>23),_=I+(y^E&(b^y))+v[15]+3634488961&4294967295,I=b+(_<<14&4294967295|_>>>18),_=E+(b^y&(I^b))+v[4]+3889429448&4294967295,E=I+(_<<20&4294967295|_>>>12),_=y+(I^b&(E^I))+v[9]+568446438&4294967295,y=E+(_<<5&4294967295|_>>>27),_=b+(E^I&(y^E))+v[14]+3275163606&4294967295,b=y+(_<<9&4294967295|_>>>23),_=I+(y^E&(b^y))+v[3]+4107603335&4294967295,I=b+(_<<14&4294967295|_>>>18),_=E+(b^y&(I^b))+v[8]+1163531501&4294967295,E=I+(_<<20&4294967295|_>>>12),_=y+(I^b&(E^I))+v[13]+2850285829&4294967295,y=E+(_<<5&4294967295|_>>>27),_=b+(E^I&(y^E))+v[2]+4243563512&4294967295,b=y+(_<<9&4294967295|_>>>23),_=I+(y^E&(b^y))+v[7]+1735328473&4294967295,I=b+(_<<14&4294967295|_>>>18),_=E+(b^y&(I^b))+v[12]+2368359562&4294967295,E=I+(_<<20&4294967295|_>>>12),_=y+(E^I^b)+v[5]+4294588738&4294967295,y=E+(_<<4&4294967295|_>>>28),_=b+(y^E^I)+v[8]+2272392833&4294967295,b=y+(_<<11&4294967295|_>>>21),_=I+(b^y^E)+v[11]+1839030562&4294967295,I=b+(_<<16&4294967295|_>>>16),_=E+(I^b^y)+v[14]+4259657740&4294967295,E=I+(_<<23&4294967295|_>>>9),_=y+(E^I^b)+v[1]+2763975236&4294967295,y=E+(_<<4&4294967295|_>>>28),_=b+(y^E^I)+v[4]+1272893353&4294967295,b=y+(_<<11&4294967295|_>>>21),_=I+(b^y^E)+v[7]+4139469664&4294967295,I=b+(_<<16&4294967295|_>>>16),_=E+(I^b^y)+v[10]+3200236656&4294967295,E=I+(_<<23&4294967295|_>>>9),_=y+(E^I^b)+v[13]+681279174&4294967295,y=E+(_<<4&4294967295|_>>>28),_=b+(y^E^I)+v[0]+3936430074&4294967295,b=y+(_<<11&4294967295|_>>>21),_=I+(b^y^E)+v[3]+3572445317&4294967295,I=b+(_<<16&4294967295|_>>>16),_=E+(I^b^y)+v[6]+76029189&4294967295,E=I+(_<<23&4294967295|_>>>9),_=y+(E^I^b)+v[9]+3654602809&4294967295,y=E+(_<<4&4294967295|_>>>28),_=b+(y^E^I)+v[12]+3873151461&4294967295,b=y+(_<<11&4294967295|_>>>21),_=I+(b^y^E)+v[15]+530742520&4294967295,I=b+(_<<16&4294967295|_>>>16),_=E+(I^b^y)+v[2]+3299628645&4294967295,E=I+(_<<23&4294967295|_>>>9),_=y+(I^(E|~b))+v[0]+4096336452&4294967295,y=E+(_<<6&4294967295|_>>>26),_=b+(E^(y|~I))+v[7]+1126891415&4294967295,b=y+(_<<10&4294967295|_>>>22),_=I+(y^(b|~E))+v[14]+2878612391&4294967295,I=b+(_<<15&4294967295|_>>>17),_=E+(b^(I|~y))+v[5]+4237533241&4294967295,E=I+(_<<21&4294967295|_>>>11),_=y+(I^(E|~b))+v[12]+1700485571&4294967295,y=E+(_<<6&4294967295|_>>>26),_=b+(E^(y|~I))+v[3]+2399980690&4294967295,b=y+(_<<10&4294967295|_>>>22),_=I+(y^(b|~E))+v[10]+4293915773&4294967295,I=b+(_<<15&4294967295|_>>>17),_=E+(b^(I|~y))+v[1]+2240044497&4294967295,E=I+(_<<21&4294967295|_>>>11),_=y+(I^(E|~b))+v[8]+1873313359&4294967295,y=E+(_<<6&4294967295|_>>>26),_=b+(E^(y|~I))+v[15]+4264355552&4294967295,b=y+(_<<10&4294967295|_>>>22),_=I+(y^(b|~E))+v[6]+2734768916&4294967295,I=b+(_<<15&4294967295|_>>>17),_=E+(b^(I|~y))+v[13]+1309151649&4294967295,E=I+(_<<21&4294967295|_>>>11),_=y+(I^(E|~b))+v[4]+4149444226&4294967295,y=E+(_<<6&4294967295|_>>>26),_=b+(E^(y|~I))+v[11]+3174756917&4294967295,b=y+(_<<10&4294967295|_>>>22),_=I+(y^(b|~E))+v[2]+718787259&4294967295,I=b+(_<<15&4294967295|_>>>17),_=E+(b^(I|~y))+v[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(I+(_<<21&4294967295|_>>>11))&4294967295,w.g[2]=w.g[2]+I&4294967295,w.g[3]=w.g[3]+b&4294967295}r.prototype.v=function(w,y){y===void 0&&(y=w.length);const E=y-this.blockSize,v=this.C;let I=this.h,b=0;for(;b<y;){if(I==0)for(;b<=E;)s(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<y;)if(v[I++]=w.charCodeAt(b++),I==this.blockSize){s(this,v),I=0;break}}else for(;b<y;)if(v[I++]=w[b++],I==this.blockSize){s(this,v),I=0;break}}this.h=I,this.o+=y},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;y=this.o*8;for(var E=w.length-8;E<w.length;++E)w[E]=y&255,y/=256;for(this.v(w),w=Array(16),y=0,E=0;E<4;++E)for(let v=0;v<32;v+=8)w[y++]=this.g[E]>>>v&255;return w};function i(w,y){var E=c;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=y(w)}function a(w,y){this.h=y;const E=[];let v=!0;for(let I=w.length-1;I>=0;I--){const b=w[I]|0;v&&b==y||(E[I]=b,v=!1)}this.g=E}var c={};function u(w){return-128<=w&&w<128?i(w,function(y){return new a([y|0],y<0?-1:0)}):new a([w|0],w<0?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return m;if(w<0)return R(h(-w));const y=[];let E=1;for(let v=0;w>=E;v++)y[v]=w/E|0,E*=4294967296;return new a(y,0)}function f(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return R(f(w.substring(1),y));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=h(Math.pow(y,8));let v=m;for(let b=0;b<w.length;b+=8){var I=Math.min(8,w.length-b);const _=parseInt(w.substring(b,b+I),y);I<8?(I=h(Math.pow(y,I)),v=v.j(I).add(h(_))):(v=v.j(E),v=v.add(h(_)))}return v}var m=u(0),T=u(1),x=u(16777216);n=a.prototype,n.m=function(){if(C(this))return-R(this).m();let w=0,y=1;for(let E=0;E<this.g.length;E++){const v=this.i(E);w+=(v>=0?v:4294967296+v)*y,y*=4294967296}return w},n.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(A(this))return"0";if(C(this))return"-"+R(this).toString(w);const y=h(Math.pow(w,6));var E=this;let v="";for(;;){const I=X(E,y).g;E=D(E,I.j(y));let b=((E.g.length>0?E.g[0]:E.h)>>>0).toString(w);if(E=I,A(E))return b+v;for(;b.length<6;)b="0"+b;v=b+v}},n.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function A(w){if(w.h!=0)return!1;for(let y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function C(w){return w.h==-1}n.l=function(w){return w=D(this,w),C(w)?-1:A(w)?0:1};function R(w){const y=w.g.length,E=[];for(let v=0;v<y;v++)E[v]=~w.g[v];return new a(E,~w.h).add(T)}n.abs=function(){return C(this)?R(this):this},n.add=function(w){const y=Math.max(this.g.length,w.g.length),E=[];let v=0;for(let I=0;I<=y;I++){let b=v+(this.i(I)&65535)+(w.i(I)&65535),_=(b>>>16)+(this.i(I)>>>16)+(w.i(I)>>>16);v=_>>>16,b&=65535,_&=65535,E[I]=_<<16|b}return new a(E,E[E.length-1]&-2147483648?-1:0)};function D(w,y){return w.add(R(y))}n.j=function(w){if(A(this)||A(w))return m;if(C(this))return C(w)?R(this).j(R(w)):R(R(this).j(w));if(C(w))return R(this.j(R(w)));if(this.l(x)<0&&w.l(x)<0)return h(this.m()*w.m());const y=this.g.length+w.g.length,E=[];for(var v=0;v<2*y;v++)E[v]=0;for(v=0;v<this.g.length;v++)for(let I=0;I<w.g.length;I++){const b=this.i(v)>>>16,_=this.i(v)&65535,ae=w.i(I)>>>16,rt=w.i(I)&65535;E[2*v+2*I]+=_*rt,M(E,2*v+2*I),E[2*v+2*I+1]+=b*rt,M(E,2*v+2*I+1),E[2*v+2*I+1]+=_*ae,M(E,2*v+2*I+1),E[2*v+2*I+2]+=b*ae,M(E,2*v+2*I+2)}for(w=0;w<y;w++)E[w]=E[2*w+1]<<16|E[2*w];for(w=y;w<2*y;w++)E[w]=0;return new a(E,0)};function M(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function j(w,y){this.g=w,this.h=y}function X(w,y){if(A(y))throw Error("division by zero");if(A(w))return new j(m,m);if(C(w))return y=X(R(w),y),new j(R(y.g),R(y.h));if(C(y))return y=X(w,R(y)),new j(R(y.g),y.h);if(w.g.length>30){if(C(w)||C(y))throw Error("slowDivide_ only works with positive integers.");for(var E=T,v=y;v.l(w)<=0;)E=ne(E),v=ne(v);var I=ee(E,1),b=ee(v,1);for(v=ee(v,2),E=ee(E,2);!A(v);){var _=b.add(v);_.l(w)<=0&&(I=I.add(E),b=_),v=ee(v,1),E=ee(E,1)}return y=D(w,I.j(y)),new j(I,y)}for(I=m;w.l(y)>=0;){for(E=Math.max(1,Math.floor(w.m()/y.m())),v=Math.ceil(Math.log(E)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),b=h(E),_=b.j(y);C(_)||_.l(w)>0;)E-=v,b=h(E),_=b.j(y);A(b)&&(b=T),I=I.add(b),w=D(w,_)}return new j(I,w)}n.B=function(w){return X(this,w).h},n.and=function(w){const y=Math.max(this.g.length,w.g.length),E=[];for(let v=0;v<y;v++)E[v]=this.i(v)&w.i(v);return new a(E,this.h&w.h)},n.or=function(w){const y=Math.max(this.g.length,w.g.length),E=[];for(let v=0;v<y;v++)E[v]=this.i(v)|w.i(v);return new a(E,this.h|w.h)},n.xor=function(w){const y=Math.max(this.g.length,w.g.length),E=[];for(let v=0;v<y;v++)E[v]=this.i(v)^w.i(v);return new a(E,this.h^w.h)};function ne(w){const y=w.g.length+1,E=[];for(let v=0;v<y;v++)E[v]=w.i(v)<<1|w.i(v-1)>>>31;return new a(E,w.h)}function ee(w,y){const E=y>>5;y%=32;const v=w.g.length-E,I=[];for(let b=0;b<v;b++)I[b]=y>0?w.i(b+E)>>>y|w.i(b+E+1)<<32-y:w.i(b+E);return new a(I,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Zd=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Kt=a}).apply(typeof Eu<"u"?Eu:typeof self<"u"?self:typeof window<"u"?window:{});var ks=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ef,xr,tf,zs,ia,nf,rf,sf;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ks=="object"&&ks];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var S=o[p];if(!(S in d))break e;d=d[S]}o=o[o.length-1],p=d[o],l=l(p),l!=p&&l!=null&&e(d,o,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(l){var d=[],p;for(p in l)Object.prototype.hasOwnProperty.call(l,p)&&d.push([p,l[p]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function u(o,l,d){return o.call.apply(o.bind,arguments)}function h(o,l,d){return h=u,h.apply(null,arguments)}function f(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function m(o,l){function d(){}d.prototype=l.prototype,o.Z=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(p,S,k){for(var V=Array(arguments.length-2),W=2;W<arguments.length;W++)V[W-2]=arguments[W];return l.prototype[S].apply(p,V)}}var T=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function x(o){const l=o.length;if(l>0){const d=Array(l);for(let p=0;p<l;p++)d[p]=o[p];return d}return[]}function A(o,l){for(let p=1;p<arguments.length;p++){const S=arguments[p];var d=typeof S;if(d=d!="object"?d:S?Array.isArray(S)?"array":d:"null",d=="array"||d=="object"&&typeof S.length=="number"){d=o.length||0;const k=S.length||0;o.length=d+k;for(let V=0;V<k;V++)o[d+V]=S[V]}else o.push(S)}}class C{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function R(o){a.setTimeout(()=>{throw o},0)}function D(){var o=w;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class M{constructor(){this.h=this.g=null}add(l,d){const p=j.get();p.set(l,d),this.h?this.h.next=p:this.g=p,this.h=p}}var j=new C(()=>new X,o=>o.reset());class X{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ne,ee=!1,w=new M,y=()=>{const o=Promise.resolve(void 0);ne=()=>{o.then(E)}};function E(){for(var o;o=D();){try{o.h.call(o.g)}catch(d){R(d)}var l=j;l.j(o),l.h<100&&(l.h++,o.next=l.g,l.g=o)}ee=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var b=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};a.addEventListener("test",d,l),a.removeEventListener("test",d,l)}catch{}return o}();function _(o){return/^[\s\xa0]*$/.test(o)}function ae(o,l){I.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,l)}m(ae,I),ae.prototype.init=function(o,l){const d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget,l||(d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement)),this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&ae.Z.h.call(this)},ae.prototype.h=function(){ae.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var rt="closure_listenable_"+(Math.random()*1e6|0),je=0;function fs(o,l,d,p,S){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!p,this.ha=S,this.key=++je,this.da=this.fa=!1}function Le(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function rn(o,l,d){for(const p in o)l.call(d,o[p],p,o)}function Wi(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function Ge(o){const l={};for(const d in o)l[d]=o[d];return l}const _t="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function kn(o,l){let d,p;for(let S=1;S<arguments.length;S++){p=arguments[S];for(d in p)o[d]=p[d];for(let k=0;k<_t.length;k++)d=_t[k],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function Et(o){this.src=o,this.g={},this.h=0}Et.prototype.add=function(o,l,d,p,S){const k=o.toString();o=this.g[k],o||(o=this.g[k]=[],this.h++);const V=Ki(o,l,p,S);return V>-1?(l=o[V],d||(l.fa=!1)):(l=new fs(l,this.src,k,!!p,S),l.fa=d,o.push(l)),l};function xn(o,l){const d=l.type;if(d in o.g){var p=o.g[d],S=Array.prototype.indexOf.call(p,l,void 0),k;(k=S>=0)&&Array.prototype.splice.call(p,S,1),k&&(Le(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Ki(o,l,d,p){for(let S=0;S<o.length;++S){const k=o[S];if(!k.da&&k.listener==l&&k.capture==!!d&&k.ha==p)return S}return-1}var Gi="closure_lm_"+(Math.random()*1e6|0),Qi={};function Tc(o,l,d,p,S){if(Array.isArray(l)){for(let k=0;k<l.length;k++)Tc(o,l[k],d,p,S);return null}return d=vc(d),o&&o[rt]?o.J(l,d,c(p)?!!p.capture:!1,S):Xp(o,l,d,!1,p,S)}function Xp(o,l,d,p,S,k){if(!l)throw Error("Invalid event type");const V=c(S)?!!S.capture:!!S;let W=Yi(o);if(W||(o[Gi]=W=new Et(o)),d=W.add(l,d,p,V,k),d.proxy)return d;if(p=Zp(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)b||(S=V),S===void 0&&(S=!1),o.addEventListener(l.toString(),p,S);else if(o.attachEvent)o.attachEvent(Ic(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Zp(){function o(d){return l.call(o.src,o.listener,d)}const l=em;return o}function wc(o,l,d,p,S){if(Array.isArray(l))for(var k=0;k<l.length;k++)wc(o,l[k],d,p,S);else p=c(p)?!!p.capture:!!p,d=vc(d),o&&o[rt]?(o=o.i,k=String(l).toString(),k in o.g&&(l=o.g[k],d=Ki(l,d,p,S),d>-1&&(Le(l[d]),Array.prototype.splice.call(l,d,1),l.length==0&&(delete o.g[k],o.h--)))):o&&(o=Yi(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Ki(l,d,p,S)),(d=o>-1?l[o]:null)&&Ji(d))}function Ji(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[rt])xn(l.i,o);else{var d=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(d,p,o.capture):l.detachEvent?l.detachEvent(Ic(d),p):l.addListener&&l.removeListener&&l.removeListener(p),(d=Yi(l))?(xn(d,o),d.h==0&&(d.src=null,l[Gi]=null)):Le(o)}}}function Ic(o){return o in Qi?Qi[o]:Qi[o]="on"+o}function em(o,l){if(o.da)o=!0;else{l=new ae(l,this);const d=o.listener,p=o.ha||o.src;o.fa&&Ji(o),o=d.call(p,l)}return o}function Yi(o){return o=o[Gi],o instanceof Et?o:null}var Xi="__closure_events_fn_"+(Math.random()*1e9>>>0);function vc(o){return typeof o=="function"?o:(o[Xi]||(o[Xi]=function(l){return o.handleEvent(l)}),o[Xi])}function ve(){v.call(this),this.i=new Et(this),this.M=this,this.G=null}m(ve,v),ve.prototype[rt]=!0,ve.prototype.removeEventListener=function(o,l,d,p){wc(this,o,l,d,p)};function Pe(o,l){var d,p=o.G;if(p)for(d=[];p;p=p.G)d.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new I(l,o);else if(l instanceof I)l.target=l.target||o;else{var S=l;l=new I(p,o),kn(l,S)}S=!0;let k,V;if(d)for(V=d.length-1;V>=0;V--)k=l.g=d[V],S=ps(k,p,!0,l)&&S;if(k=l.g=o,S=ps(k,p,!0,l)&&S,S=ps(k,p,!1,l)&&S,d)for(V=0;V<d.length;V++)k=l.g=d[V],S=ps(k,p,!1,l)&&S}ve.prototype.N=function(){if(ve.Z.N.call(this),this.i){var o=this.i;for(const l in o.g){const d=o.g[l];for(let p=0;p<d.length;p++)Le(d[p]);delete o.g[l],o.h--}}this.G=null},ve.prototype.J=function(o,l,d,p){return this.i.add(String(o),l,!1,d,p)},ve.prototype.K=function(o,l,d,p){return this.i.add(String(o),l,!0,d,p)};function ps(o,l,d,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();let S=!0;for(let k=0;k<l.length;++k){const V=l[k];if(V&&!V.da&&V.capture==d){const W=V.listener,fe=V.ha||V.src;V.fa&&xn(o.i,V),S=W.call(fe,p)!==!1&&S}}return S&&!p.defaultPrevented}function tm(o,l){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(o,l||0)}function Ac(o){o.g=tm(()=>{o.g=null,o.i&&(o.i=!1,Ac(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class nm extends v{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Ac(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ur(o){v.call(this),this.h=o,this.g={}}m(ur,v);var bc=[];function Sc(o){rn(o.g,function(l,d){this.g.hasOwnProperty(d)&&Ji(l)},o),o.g={}}ur.prototype.N=function(){ur.Z.N.call(this),Sc(this)},ur.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Zi=a.JSON.stringify,rm=a.JSON.parse,sm=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Rc(){}function Cc(){}var hr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function eo(){I.call(this,"d")}m(eo,I);function to(){I.call(this,"c")}m(to,I);var sn={},Pc=null;function ms(){return Pc=Pc||new ve}sn.Ia="serverreachability";function kc(o){I.call(this,sn.Ia,o)}m(kc,I);function dr(o){const l=ms();Pe(l,new kc(l))}sn.STAT_EVENT="statevent";function xc(o,l){I.call(this,sn.STAT_EVENT,o),this.stat=l}m(xc,I);function ke(o){const l=ms();Pe(l,new xc(l,o))}sn.Ja="timingevent";function Nc(o,l){I.call(this,sn.Ja,o),this.size=l}m(Nc,I);function fr(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},l)}function pr(){this.g=!0}pr.prototype.ua=function(){this.g=!1};function im(o,l,d,p,S,k){o.info(function(){if(o.g)if(k){var V="",W=k.split("&");for(let te=0;te<W.length;te++){var fe=W[te].split("=");if(fe.length>1){const ge=fe[0];fe=fe[1];const it=ge.split("_");V=it.length>=2&&it[1]=="type"?V+(ge+"="+fe+"&"):V+(ge+"=redacted&")}}}else V=null;else V=k;return"XMLHTTP REQ ("+p+") [attempt "+S+"]: "+l+`
`+d+`
`+V})}function om(o,l,d,p,S,k,V){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+S+"]: "+l+`
`+d+`
`+k+" "+V})}function Nn(o,l,d,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+cm(o,d)+(p?" "+p:"")})}function am(o,l){o.info(function(){return"TIMEOUT: "+l})}pr.prototype.info=function(){};function cm(o,l){if(!o.g)return l;if(!l)return null;try{const k=JSON.parse(l);if(k){for(o=0;o<k.length;o++)if(Array.isArray(k[o])){var d=k[o];if(!(d.length<2)){var p=d[1];if(Array.isArray(p)&&!(p.length<1)){var S=p[0];if(S!="noop"&&S!="stop"&&S!="close")for(let V=1;V<p.length;V++)p[V]=""}}}}return Zi(k)}catch{return l}}var gs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Oc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Dc;function no(){}m(no,Rc),no.prototype.g=function(){return new XMLHttpRequest},Dc=new no;function mr(o){return encodeURIComponent(String(o))}function lm(o){var l=1;o=o.split(":");const d=[];for(;l>0&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function xt(o,l,d,p){this.j=o,this.i=l,this.l=d,this.S=p||1,this.V=new ur(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Vc}function Vc(){this.i=null,this.g="",this.h=!1}var Lc={},ro={};function so(o,l,d){o.M=1,o.A=_s(st(l)),o.u=d,o.R=!0,Mc(o,null)}function Mc(o,l){o.F=Date.now(),ys(o),o.B=st(o.A);var d=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),Jc(d.i,"t",p),o.C=0,d=o.j.L,o.h=new Vc,o.g=pl(o.j,d?l:null,!o.u),o.P>0&&(o.O=new nm(h(o.Y,o,o.g),o.P)),l=o.V,d=o.g,p=o.ba;var S="readystatechange";Array.isArray(S)||(S&&(bc[0]=S.toString()),S=bc);for(let k=0;k<S.length;k++){const V=Tc(d,S[k],p||l.handleEvent,!1,l.h||l);if(!V)break;l.g[V.key]=V}l=o.J?Ge(o.J):{},o.u?(o.v||(o.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,l)):(o.v="GET",o.g.ea(o.B,o.v,null,l)),dr(),im(o.i,o.v,o.B,o.l,o.S,o.u)}xt.prototype.ba=function(o){o=o.target;const l=this.O;l&&Dt(o)==3?l.j():this.Y(o)},xt.prototype.Y=function(o){try{if(o==this.g)e:{const W=Dt(this.g),fe=this.g.ya(),te=this.g.ca();if(!(W<3)&&(W!=3||this.g&&(this.h.h||this.g.la()||rl(this.g)))){this.K||W!=4||fe==7||(fe==8||te<=0?dr(3):dr(2)),io(this);var l=this.g.ca();this.X=l;var d=um(this);if(this.o=l==200,om(this.i,this.v,this.B,this.l,this.S,W,l),this.o){if(this.U&&!this.L){t:{if(this.g){var p,S=this.g;if((p=S.g?S.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(p)){var k=p;break t}}k=null}if(o=k)Nn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,oo(this,o);else{this.o=!1,this.m=3,ke(12),on(this),gr(this);break e}}if(this.R){o=!0;let ge;for(;!this.K&&this.C<d.length;)if(ge=hm(this,d),ge==ro){W==4&&(this.m=4,ke(14),o=!1),Nn(this.i,this.l,null,"[Incomplete Response]");break}else if(ge==Lc){this.m=4,ke(15),Nn(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else Nn(this.i,this.l,ge,null),oo(this,ge);if(Fc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),W!=4||d.length!=0||this.h.h||(this.m=1,ke(16),o=!1),this.o=this.o&&o,!o)Nn(this.i,this.l,d,"[Invalid Chunked Response]"),on(this),gr(this);else if(d.length>0&&!this.W){this.W=!0;var V=this.j;V.g==this&&V.aa&&!V.P&&(V.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),mo(V),V.P=!0,ke(11))}}else Nn(this.i,this.l,d,null),oo(this,d);W==4&&on(this),this.o&&!this.K&&(W==4?ul(this.j,this):(this.o=!1,ys(this)))}else bm(this.g),l==400&&d.indexOf("Unknown SID")>0?(this.m=3,ke(12)):(this.m=0,ke(13)),on(this),gr(this)}}}catch{}finally{}};function um(o){if(!Fc(o))return o.g.la();const l=rl(o.g);if(l==="")return"";let d="";const p=l.length,S=Dt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return on(o),gr(o),"";o.h.i=new a.TextDecoder}for(let k=0;k<p;k++)o.h.h=!0,d+=o.h.i.decode(l[k],{stream:!(S&&k==p-1)});return l.length=0,o.h.g+=d,o.C=0,o.h.g}function Fc(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function hm(o,l){var d=o.C,p=l.indexOf(`
`,d);return p==-1?ro:(d=Number(l.substring(d,p)),isNaN(d)?Lc:(p+=1,p+d>l.length?ro:(l=l.slice(p,p+d),o.C=p+d,l)))}xt.prototype.cancel=function(){this.K=!0,on(this)};function ys(o){o.T=Date.now()+o.H,Uc(o,o.H)}function Uc(o,l){if(o.D!=null)throw Error("WatchDog timer not null");o.D=fr(h(o.aa,o),l)}function io(o){o.D&&(a.clearTimeout(o.D),o.D=null)}xt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(am(this.i,this.B),this.M!=2&&(dr(),ke(17)),on(this),this.m=2,gr(this)):Uc(this,this.T-o)};function gr(o){o.j.I==0||o.K||ul(o.j,o)}function on(o){io(o);var l=o.O;l&&typeof l.dispose=="function"&&l.dispose(),o.O=null,Sc(o.V),o.g&&(l=o.g,o.g=null,l.abort(),l.dispose())}function oo(o,l){try{var d=o.j;if(d.I!=0&&(d.g==o||ao(d.h,o))){if(!o.L&&ao(d.h,o)&&d.I==3){try{var p=d.Ba.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var S=p;if(S[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)vs(d),ws(d);else break e;po(d),ke(18)}}else d.xa=S[1],0<d.xa-d.K&&S[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=fr(h(d.Va,d),6e3));$c(d.h)<=1&&d.ta&&(d.ta=void 0)}else cn(d,11)}else if((o.L||d.g==o)&&vs(d),!_(l))for(S=d.Ba.g.parse(l),l=0;l<S.length;l++){let te=S[l];const ge=te[0];if(!(ge<=d.K))if(d.K=ge,te=te[1],d.I==2)if(te[0]=="c"){d.M=te[1],d.ba=te[2];const it=te[3];it!=null&&(d.ka=it,d.j.info("VER="+d.ka));const ln=te[4];ln!=null&&(d.za=ln,d.j.info("SVER="+d.za));const Vt=te[5];Vt!=null&&typeof Vt=="number"&&Vt>0&&(p=1.5*Vt,d.O=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Lt=o.g;if(Lt){const bs=Lt.g?Lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bs){var k=p.h;k.g||bs.indexOf("spdy")==-1&&bs.indexOf("quic")==-1&&bs.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(co(k,k.h),k.h=null))}if(p.G){const go=Lt.g?Lt.g.getResponseHeader("X-HTTP-Session-Id"):null;go&&(p.wa=go,re(p.J,p.G,go))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),p=d;var V=o;if(p.na=fl(p,p.L?p.ba:null,p.W),V.L){qc(p.h,V);var W=V,fe=p.O;fe&&(W.H=fe),W.D&&(io(W),ys(W)),p.g=V}else cl(p);d.i.length>0&&Is(d)}else te[0]!="stop"&&te[0]!="close"||cn(d,7);else d.I==3&&(te[0]=="stop"||te[0]=="close"?te[0]=="stop"?cn(d,7):fo(d):te[0]!="noop"&&d.l&&d.l.qa(te),d.A=0)}}dr(4)}catch{}}var dm=class{constructor(o,l){this.g=o,this.map=l}};function jc(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Bc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function $c(o){return o.h?1:o.g?o.g.size:0}function ao(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function co(o,l){o.g?o.g.add(l):o.h=l}function qc(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}jc.prototype.cancel=function(){if(this.i=Hc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Hc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.G);return l}return x(o.i)}var zc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fm(o,l){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const p=o[d].indexOf("=");let S,k=null;p>=0?(S=o[d].substring(0,p),k=o[d].substring(p+1)):S=o[d],l(S,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Nt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;o instanceof Nt?(this.l=o.l,yr(this,o.j),this.o=o.o,this.g=o.g,_r(this,o.u),this.h=o.h,lo(this,Yc(o.i)),this.m=o.m):o&&(l=String(o).match(zc))?(this.l=!1,yr(this,l[1]||"",!0),this.o=Er(l[2]||""),this.g=Er(l[3]||"",!0),_r(this,l[4]),this.h=Er(l[5]||"",!0),lo(this,l[6]||"",!0),this.m=Er(l[7]||"")):(this.l=!1,this.i=new wr(null,this.l))}Nt.prototype.toString=function(){const o=[];var l=this.j;l&&o.push(Tr(l,Wc,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Tr(l,Wc,!0),"@"),o.push(mr(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Tr(d,d.charAt(0)=="/"?gm:mm,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Tr(d,_m)),o.join("")},Nt.prototype.resolve=function(o){const l=st(this);let d=!!o.j;d?yr(l,o.j):d=!!o.o,d?l.o=o.o:d=!!o.g,d?l.g=o.g:d=o.u!=null;var p=o.h;if(d)_r(l,o.u);else if(d=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var S=l.h.lastIndexOf("/");S!=-1&&(p=l.h.slice(0,S+1)+p)}if(S=p,S==".."||S==".")p="";else if(S.indexOf("./")!=-1||S.indexOf("/.")!=-1){p=S.lastIndexOf("/",0)==0,S=S.split("/");const k=[];for(let V=0;V<S.length;){const W=S[V++];W=="."?p&&V==S.length&&k.push(""):W==".."?((k.length>1||k.length==1&&k[0]!="")&&k.pop(),p&&V==S.length&&k.push("")):(k.push(W),p=!0)}p=k.join("/")}else p=S}return d?l.h=p:d=o.i.toString()!=="",d?lo(l,Yc(o.i)):d=!!o.m,d&&(l.m=o.m),l};function st(o){return new Nt(o)}function yr(o,l,d){o.j=d?Er(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function _r(o,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);o.u=l}else o.u=null}function lo(o,l,d){l instanceof wr?(o.i=l,Em(o.i,o.l)):(d||(l=Tr(l,ym)),o.i=new wr(l,o.l))}function re(o,l,d){o.i.set(l,d)}function _s(o){return re(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Er(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Tr(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,pm),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function pm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Wc=/[#\/\?@]/g,mm=/[#\?:]/g,gm=/[#\?]/g,ym=/[#\?@]/g,_m=/#/g;function wr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function an(o){o.g||(o.g=new Map,o.h=0,o.i&&fm(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=wr.prototype,n.add=function(o,l){an(this),this.i=null,o=On(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function Kc(o,l){an(o),l=On(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Gc(o,l){return an(o),l=On(o,l),o.g.has(l)}n.forEach=function(o,l){an(this),this.g.forEach(function(d,p){d.forEach(function(S){o.call(l,S,p,this)},this)},this)};function Qc(o,l){an(o);let d=[];if(typeof l=="string")Gc(o,l)&&(d=d.concat(o.g.get(On(o,l))));else for(o=Array.from(o.g.values()),l=0;l<o.length;l++)d=d.concat(o[l]);return d}n.set=function(o,l){return an(this),this.i=null,o=On(this,o),Gc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=Qc(this,o),o.length>0?String(o[0]):l):l};function Jc(o,l,d){Kc(o,l),d.length>0&&(o.i=null,o.g.set(On(o,l),x(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(let p=0;p<l.length;p++){var d=l[p];const S=mr(d);d=Qc(this,d);for(let k=0;k<d.length;k++){let V=S;d[k]!==""&&(V+="="+mr(d[k])),o.push(V)}}return this.i=o.join("&")};function Yc(o){const l=new wr;return l.i=o.i,o.g&&(l.g=new Map(o.g),l.h=o.h),l}function On(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Em(o,l){l&&!o.j&&(an(o),o.i=null,o.g.forEach(function(d,p){const S=p.toLowerCase();p!=S&&(Kc(this,p),Jc(this,S,d))},o)),o.j=l}function Tm(o,l){const d=new pr;if(a.Image){const p=new Image;p.onload=f(Ot,d,"TestLoadImage: loaded",!0,l,p),p.onerror=f(Ot,d,"TestLoadImage: error",!1,l,p),p.onabort=f(Ot,d,"TestLoadImage: abort",!1,l,p),p.ontimeout=f(Ot,d,"TestLoadImage: timeout",!1,l,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function wm(o,l){const d=new pr,p=new AbortController,S=setTimeout(()=>{p.abort(),Ot(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(k=>{clearTimeout(S),k.ok?Ot(d,"TestPingServer: ok",!0,l):Ot(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(S),Ot(d,"TestPingServer: error",!1,l)})}function Ot(o,l,d,p,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),p(d)}catch{}}function Im(){this.g=new sm}function uo(o){this.i=o.Sb||null,this.h=o.ab||!1}m(uo,Rc),uo.prototype.g=function(){return new Es(this.i,this.h)};function Es(o,l){ve.call(this),this.H=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Es,ve),n=Es.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=l,this.readyState=1,vr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(l.body=o),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ir(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,vr(this)),this.g&&(this.readyState=3,vr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Xc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Xc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Ir(this):vr(this),this.readyState==3&&Xc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Ir(this))},n.Na=function(o){this.g&&(this.response=o,Ir(this))},n.ga=function(){this.g&&Ir(this)};function Ir(o){o.readyState=4,o.l=null,o.j=null,o.B=null,vr(o)}n.setRequestHeader=function(o,l){this.A.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function vr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Es.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Zc(o){let l="";return rn(o,function(d,p){l+=p,l+=":",l+=d,l+=`\r
`}),l}function ho(o,l,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Zc(d),typeof o=="string"?d!=null&&mr(d):re(o,l,d))}function ce(o){ve.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(ce,ve);var vm=/^https?$/i,Am=["POST","PUT"];n=ce.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,l,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Dc.g(),this.g.onreadystatechange=T(h(this.Ca,this));try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(k){el(this,k);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var S in p)d.set(S,p[S]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const k of p.keys())d.set(k,p.get(k));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(k=>k.toLowerCase()=="content-type"),S=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Am,l,void 0)>=0)||p||S||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,V]of d)this.g.setRequestHeader(k,V);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(k){el(this,k)}};function el(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.o=5,tl(o),Ts(o)}function tl(o){o.A||(o.A=!0,Pe(o,"complete"),Pe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Pe(this,"complete"),Pe(this,"abort"),Ts(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ts(this,!0)),ce.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?nl(this):this.Xa())},n.Xa=function(){nl(this)};function nl(o){if(o.h&&typeof i<"u"){if(o.v&&Dt(o)==4)setTimeout(o.Ca.bind(o),0);else if(Pe(o,"readystatechange"),Dt(o)==4){o.h=!1;try{const k=o.ca();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var p;if(p=k===0){let V=String(o.D).match(zc)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),p=!vm.test(V?V.toLowerCase():"")}d=p}if(d)Pe(o,"complete"),Pe(o,"success");else{o.o=6;try{var S=Dt(o)>2?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.ca()+"]",tl(o)}}finally{Ts(o)}}}}function Ts(o,l){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,l||Pe(o,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Dt(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Dt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),rm(l)}};function rl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function bm(o){const l={};o=(o.g&&Dt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(_(o[p]))continue;var d=lm(o[p]);const S=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const k=l[S]||[];l[S]=k,k.push(d)}Wi(l,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ar(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function sl(o){this.za=0,this.i=[],this.j=new pr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ar("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ar("baseRetryDelayMs",5e3,o),this.Za=Ar("retryDelaySeedMs",1e4,o),this.Ta=Ar("forwardChannelMaxRetries",2,o),this.va=Ar("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new jc(o&&o.concurrentRequestLimit),this.Ba=new Im,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=sl.prototype,n.ka=8,n.I=1,n.connect=function(o,l,d,p){ke(0),this.W=o,this.H=l||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.J=fl(this,null,this.W),Is(this)};function fo(o){if(il(o),o.I==3){var l=o.V++,d=st(o.J);if(re(d,"SID",o.M),re(d,"RID",l),re(d,"TYPE","terminate"),br(o,d),l=new xt(o,o.j,l),l.M=2,l.A=_s(st(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!d&&a.Image&&(new Image().src=l.A,d=!0),d||(l.g=pl(l.j,null),l.g.ea(l.A)),l.F=Date.now(),ys(l)}dl(o)}function ws(o){o.g&&(mo(o),o.g.cancel(),o.g=null)}function il(o){ws(o),o.v&&(a.clearTimeout(o.v),o.v=null),vs(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Is(o){if(!Bc(o.h)&&!o.m){o.m=!0;var l=o.Ea;ne||y(),ee||(ne(),ee=!0),w.add(l,o),o.D=0}}function Sm(o,l){return $c(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=l.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=fr(h(o.Ea,o,l),hl(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const S=new xt(this,this.j,o);let k=this.o;if(this.U&&(k?(k=Ge(k),kn(k,this.U)):k=this.U),this.u!==null||this.R||(S.J=k,k=null),this.S)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,l>4096){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=al(this,S,l),d=st(this.J),re(d,"RID",o),re(d,"CVER",22),this.G&&re(d,"X-HTTP-Session-Id",this.G),br(this,d),k&&(this.R?l="headers="+mr(Zc(k))+"&"+l:this.u&&ho(d,this.u,k)),co(this.h,S),this.Ra&&re(d,"TYPE","init"),this.S?(re(d,"$req",l),re(d,"SID","null"),S.U=!0,so(S,d,null)):so(S,d,l),this.I=2}}else this.I==3&&(o?ol(this,o):this.i.length==0||Bc(this.h)||ol(this))};function ol(o,l){var d;l?d=l.l:d=o.V++;const p=st(o.J);re(p,"SID",o.M),re(p,"RID",d),re(p,"AID",o.K),br(o,p),o.u&&o.o&&ho(p,o.u,o.o),d=new xt(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),l&&(o.i=l.G.concat(o.i)),l=al(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),co(o.h,d),so(d,p,l)}function br(o,l){o.H&&rn(o.H,function(d,p){re(l,p,d)}),o.l&&rn({},function(d,p){re(l,p,d)})}function al(o,l,d){d=Math.min(o.i.length,d);const p=o.l?h(o.l.Ka,o.l,o):null;e:{var S=o.i;let W=-1;for(;;){const fe=["count="+d];W==-1?d>0?(W=S[0].g,fe.push("ofs="+W)):W=0:fe.push("ofs="+W);let te=!0;for(let ge=0;ge<d;ge++){var k=S[ge].g;const it=S[ge].map;if(k-=W,k<0)W=Math.max(0,S[ge].g-100),te=!1;else try{k="req"+k+"_"||"";try{var V=it instanceof Map?it:Object.entries(it);for(const[ln,Vt]of V){let Lt=Vt;c(Vt)&&(Lt=Zi(Vt)),fe.push(k+ln+"="+encodeURIComponent(Lt))}}catch(ln){throw fe.push(k+"type="+encodeURIComponent("_badmap")),ln}}catch{p&&p(it)}}if(te){V=fe.join("&");break e}}V=void 0}return o=o.i.splice(0,d),l.G=o,V}function cl(o){if(!o.g&&!o.v){o.Y=1;var l=o.Da;ne||y(),ee||(ne(),ee=!0),w.add(l,o),o.A=0}}function po(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=fr(h(o.Da,o),hl(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,ll(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=fr(h(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ke(10),ws(this),ll(this))};function mo(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function ll(o){o.g=new xt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var l=st(o.na);re(l,"RID","rpc"),re(l,"SID",o.M),re(l,"AID",o.K),re(l,"CI",o.F?"0":"1"),!o.F&&o.ia&&re(l,"TO",o.ia),re(l,"TYPE","xmlhttp"),br(o,l),o.u&&o.o&&ho(l,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=_s(st(l)),d.u=null,d.R=!0,Mc(d,o)}n.Va=function(){this.C!=null&&(this.C=null,ws(this),po(this),ke(19))};function vs(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function ul(o,l){var d=null;if(o.g==l){vs(o),mo(o),o.g=null;var p=2}else if(ao(o.h,l))d=l.G,qc(o.h,l),p=1;else return;if(o.I!=0){if(l.o)if(p==1){d=l.u?l.u.length:0,l=Date.now()-l.F;var S=o.D;p=ms(),Pe(p,new Nc(p,d)),Is(o)}else cl(o);else if(S=l.m,S==3||S==0&&l.X>0||!(p==1&&Sm(o,l)||p==2&&po(o)))switch(d&&d.length>0&&(l=o.h,l.i=l.i.concat(d)),S){case 1:cn(o,5);break;case 4:cn(o,10);break;case 3:cn(o,6);break;default:cn(o,2)}}}function hl(o,l){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*l}function cn(o,l){if(o.j.info("Error code "+l),l==2){var d=h(o.bb,o),p=o.Ua;const S=!p;p=new Nt(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||yr(p,"https"),_s(p),S?Tm(p.toString(),d):wm(p.toString(),d)}else ke(2);o.I=0,o.l&&o.l.pa(l),dl(o),il(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),ke(2)):(this.j.info("Failed to ping google.com"),ke(1))};function dl(o){if(o.I=0,o.ja=[],o.l){const l=Hc(o.h);(l.length!=0||o.i.length!=0)&&(A(o.ja,l),A(o.ja,o.i),o.h.i.length=0,x(o.i),o.i.length=0),o.l.oa()}}function fl(o,l,d){var p=d instanceof Nt?st(d):new Nt(d);if(p.g!="")l&&(p.g=l+"."+p.g),_r(p,p.u);else{var S=a.location;p=S.protocol,l=l?l+"."+S.hostname:S.hostname,S=+S.port;const k=new Nt(null);p&&yr(k,p),l&&(k.g=l),S&&_r(k,S),d&&(k.h=d),p=k}return d=o.G,l=o.wa,d&&l&&re(p,d,l),re(p,"VER",o.ka),br(o,p),p}function pl(o,l,d){if(l&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Aa&&!o.ma?new ce(new uo({ab:d})):new ce(o.ma),l.Fa(o.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ml(){}n=ml.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function As(){}As.prototype.g=function(o,l){return new Me(o,l)};function Me(o,l){ve.call(this),this.g=new sl(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(o?o["X-WebChannel-Client-Profile"]=l.sa:o={"X-WebChannel-Client-Profile":l.sa}),this.g.U=o,(o=l&&l.Qb)&&!_(o)&&(this.g.u=o),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!_(l)&&(this.g.G=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Dn(this)}m(Me,ve),Me.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Me.prototype.close=function(){fo(this.g)},Me.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=Zi(o),o=d);l.i.push(new dm(l.Ya++,o)),l.I==3&&Is(l)},Me.prototype.N=function(){this.g.l=null,delete this.j,fo(this.g),delete this.g,Me.Z.N.call(this)};function gl(o){eo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const d in l){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}m(gl,eo);function yl(){to.call(this),this.status=1}m(yl,to);function Dn(o){this.g=o}m(Dn,ml),Dn.prototype.ra=function(){Pe(this.g,"a")},Dn.prototype.qa=function(o){Pe(this.g,new gl(o))},Dn.prototype.pa=function(o){Pe(this.g,new yl)},Dn.prototype.oa=function(){Pe(this.g,"b")},As.prototype.createWebChannel=As.prototype.g,Me.prototype.send=Me.prototype.o,Me.prototype.open=Me.prototype.m,Me.prototype.close=Me.prototype.close,sf=function(){return new As},rf=function(){return ms()},nf=sn,ia={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},gs.NO_ERROR=0,gs.TIMEOUT=8,gs.HTTP_ERROR=6,zs=gs,Oc.COMPLETE="complete",tf=Oc,Cc.EventType=hr,hr.OPEN="a",hr.CLOSE="b",hr.ERROR="c",hr.MESSAGE="d",ve.prototype.listen=ve.prototype.J,xr=Cc,ce.prototype.listenOnce=ce.prototype.K,ce.prototype.getLastError=ce.prototype.Ha,ce.prototype.getLastErrorCode=ce.prototype.ya,ce.prototype.getStatus=ce.prototype.ca,ce.prototype.getResponseJson=ce.prototype.La,ce.prototype.getResponseText=ce.prototype.la,ce.prototype.send=ce.prototype.ea,ce.prototype.setWithCredentials=ce.prototype.Fa,ef=ce}).apply(typeof ks<"u"?ks:typeof self<"u"?self:typeof window<"u"?window:{});const Tu="@firebase/firestore",wu="4.9.2";/**
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
 */class be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}be.UNAUTHENTICATED=new be(null),be.GOOGLE_CREDENTIALS=new be("google-credentials-uid"),be.FIRST_PARTY=new be("first-party-uid"),be.MOCK_USER=new be("mock-user");/**
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
 */let or="12.3.0";/**
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
 */const Tn=new Ci("@firebase/firestore");function Ln(){return Tn.logLevel}function L(n,...e){if(Tn.logLevel<=K.DEBUG){const t=e.map(Ma);Tn.debug(`Firestore (${or}): ${n}`,...t)}}function Ct(n,...e){if(Tn.logLevel<=K.ERROR){const t=e.map(Ma);Tn.error(`Firestore (${or}): ${n}`,...t)}}function Qn(n,...e){if(Tn.logLevel<=K.WARN){const t=e.map(Ma);Tn.warn(`Firestore (${or}): ${n}`,...t)}}function Ma(n){if(typeof n=="string")return n;try{/**
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
 */function $(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,of(n,r,t)}function of(n,e,t){let r=`FIRESTORE (${or}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Ct(r),new Error(r)}function Z(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||of(e,s,r)}function H(n,e){return n}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends nt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Gt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class af{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Hw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(be.UNAUTHENTICATED))}shutdown(){}}class zw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Ww{constructor(e){this.t=e,this.currentUser=be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Z(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Gt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Gt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Gt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string",31837,{l:r}),new af(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Z(e===null||typeof e=="string",2055,{h:e}),new be(e)}}class Kw{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=be.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Gw{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Kw(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Iu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Qw{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,He(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Z(this.o===void 0,3512);const r=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Iu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Z(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Iu(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Jw(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Fa{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Jw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function G(n,e){return n<e?-1:n>e?1:0}function oa(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return xo(s)===xo(i)?G(s,i):xo(s)?1:-1}return G(n.length,e.length)}const Yw=55296,Xw=57343;function xo(n){const e=n.charCodeAt(0);return e>=Yw&&e<=Xw}function Jn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const vu="__name__";class at{constructor(e,t,r){t===void 0?t=0:t>e.length&&$(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&$(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return at.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof at?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=at.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return G(e.length,t.length)}static compareSegments(e,t){const r=at.isNumericId(e),s=at.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?at.extractNumericId(e).compare(at.extractNumericId(t)):oa(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Kt.fromString(e.substring(4,e.length-2))}}class ie extends at{construct(e,t,r){return new ie(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ie(t)}static emptyPath(){return new ie([])}}const Zw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Te extends at{construct(e,t,r){return new Te(e,t,r)}static isValidIdentifier(e){return Zw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Te.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===vu}static keyField(){return new Te([vu])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new F(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new F(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new F(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new F(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Te(t)}static emptyPath(){return new Te([])}}/**
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
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(ie.fromString(e))}static fromName(e){return new U(ie.fromString(e).popFirst(5))}static empty(){return new U(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ie.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new ie(e.slice()))}}/**
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
 */function eI(n,e,t){if(!t)throw new F(O.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function tI(n,e,t,r){if(e===!0&&r===!0)throw new F(O.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Au(n){if(!U.isDocumentKey(n))throw new F(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function cf(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ua(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":$(12329,{type:typeof n})}function zr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new F(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ua(n);throw new F(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function de(n,e){const t={typeString:n};return e&&(t.value=e),t}function cs(n,e){if(!cf(n))throw new F(O.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new F(O.INVALID_ARGUMENT,t);return!0}/**
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
 */const bu=-62135596800,Su=1e6;class se{static now(){return se.fromMillis(Date.now())}static fromDate(e){return se.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Su);return new se(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new F(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new F(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<bu)throw new F(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Su}_compareTo(e){return this.seconds===e.seconds?G(this.nanoseconds,e.nanoseconds):G(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:se._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(cs(e,se._jsonSchema))return new se(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-bu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}se._jsonSchemaVersion="firestore/timestamp/1.0",se._jsonSchema={type:de("string",se._jsonSchemaVersion),seconds:de("number"),nanoseconds:de("number")};/**
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
 */class q{static fromTimestamp(e){return new q(e)}static min(){return new q(new se(0,0))}static max(){return new q(new se(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Wr=-1;function nI(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=q.fromTimestamp(r===1e9?new se(t+1,0):new se(t,r));return new Jt(s,U.empty(),e)}function rI(n){return new Jt(n.readTime,n.key,Wr)}class Jt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Jt(q.min(),U.empty(),Wr)}static max(){return new Jt(q.max(),U.empty(),Wr)}}function sI(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=U.comparator(n.documentKey,e.documentKey),t!==0?t:G(n.largestBatchId,e.largestBatchId))}/**
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
 */const iI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class oI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ar(n){if(n.code!==O.FAILED_PRECONDITION||n.message!==iI)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&$(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,r)=>{t(e)})}static reject(e){return new N((t,r)=>{r(e)})}static waitFor(e){return new N((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=N.resolve(!1);for(const r of e)t=t.next(s=>s?N.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new N((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const h=u;t(e[h]).next(f=>{a[h]=f,++c,c===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new N((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function aI(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function cr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ni{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ni.ce=-1;/**
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
 */const ja=-1;function Oi(n){return n==null}function ci(n){return n===0&&1/n==-1/0}function cI(n){return typeof n=="number"&&Number.isInteger(n)&&!ci(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const lf="";function lI(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Ru(e)),e=uI(n.get(t),e);return Ru(e)}function uI(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case lf:t+="";break;default:t+=i}}return t}function Ru(n){return n+lf+""}/**
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
 */function Cu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Sn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function uf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class oe{constructor(e,t){this.comparator=e,this.root=t||Ee.EMPTY}insert(e,t){return new oe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ee.BLACK,null,null))}remove(e){return new oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ee.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xs(this.root,e,this.comparator,!1)}getReverseIterator(){return new xs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xs(this.root,e,this.comparator,!0)}}class xs{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ee{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ee.RED,this.left=s??Ee.EMPTY,this.right=i??Ee.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ee(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ee.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ee.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw $(43730,{key:this.key,value:this.value});if(this.right.isRed())throw $(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw $(27949);return e+(this.isRed()?0:1)}}Ee.EMPTY=null,Ee.RED=!0,Ee.BLACK=!1;Ee.EMPTY=new class{constructor(){this.size=0}get key(){throw $(57766)}get value(){throw $(16141)}get color(){throw $(16727)}get left(){throw $(29726)}get right(){throw $(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ee(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class me{constructor(e){this.comparator=e,this.data=new oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Pu(this.data.getIterator())}getIteratorFrom(e){return new Pu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof me)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new me(this.comparator);return t.data=e,t}}class Pu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Xe{constructor(e){this.fields=e,e.sort(Te.comparator)}static empty(){return new Xe([])}unionWith(e){let t=new me(Te.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Xe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Jn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class hf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ie{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new hf("Invalid base64 string: "+i):i}}(e);return new Ie(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Ie(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return G(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ie.EMPTY_BYTE_STRING=new Ie("");const hI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yt(n){if(Z(!!n,39018),typeof n=="string"){let e=0;const t=hI.exec(n);if(Z(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ue(n.seconds),nanos:ue(n.nanos)}}function ue(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Xt(n){return typeof n=="string"?Ie.fromBase64String(n):Ie.fromUint8Array(n)}/**
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
 */const df="server_timestamp",ff="__type__",pf="__previous_value__",mf="__local_write_time__";function Ba(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[ff])==null?void 0:r.stringValue)===df}function Di(n){const e=n.mapValue.fields[pf];return Ba(e)?Di(e):e}function Kr(n){const e=Yt(n.mapValue.fields[mf].timestampValue);return new se(e.seconds,e.nanos)}/**
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
 */class dI{constructor(e,t,r,s,i,a,c,u,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const li="(default)";class Gr{constructor(e,t){this.projectId=e,this.database=t||li}static empty(){return new Gr("","")}get isDefaultDatabase(){return this.database===li}isEqual(e){return e instanceof Gr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const gf="__type__",fI="__max__",Ns={mapValue:{}},yf="__vector__",ui="value";function Zt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ba(n)?4:mI(n)?9007199254740991:pI(n)?10:11:$(28295,{value:n})}function mt(n,e){if(n===e)return!0;const t=Zt(n);if(t!==Zt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Kr(n).isEqual(Kr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Yt(s.timestampValue),c=Yt(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Xt(s.bytesValue).isEqual(Xt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ue(s.geoPointValue.latitude)===ue(i.geoPointValue.latitude)&&ue(s.geoPointValue.longitude)===ue(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ue(s.integerValue)===ue(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ue(s.doubleValue),c=ue(i.doubleValue);return a===c?ci(a)===ci(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Jn(n.arrayValue.values||[],e.arrayValue.values||[],mt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Cu(a)!==Cu(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!mt(a[u],c[u])))return!1;return!0}(n,e);default:return $(52216,{left:n})}}function Qr(n,e){return(n.values||[]).find(t=>mt(t,e))!==void 0}function Yn(n,e){if(n===e)return 0;const t=Zt(n),r=Zt(e);if(t!==r)return G(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return G(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=ue(i.integerValue||i.doubleValue),u=ue(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return ku(n.timestampValue,e.timestampValue);case 4:return ku(Kr(n),Kr(e));case 5:return oa(n.stringValue,e.stringValue);case 6:return function(i,a){const c=Xt(i),u=Xt(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),u=a.split("/");for(let h=0;h<c.length&&h<u.length;h++){const f=G(c[h],u[h]);if(f!==0)return f}return G(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=G(ue(i.latitude),ue(a.latitude));return c!==0?c:G(ue(i.longitude),ue(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return xu(n.arrayValue,e.arrayValue);case 10:return function(i,a){var T,x,A,C;const c=i.fields||{},u=a.fields||{},h=(T=c[ui])==null?void 0:T.arrayValue,f=(x=u[ui])==null?void 0:x.arrayValue,m=G(((A=h==null?void 0:h.values)==null?void 0:A.length)||0,((C=f==null?void 0:f.values)==null?void 0:C.length)||0);return m!==0?m:xu(h,f)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Ns.mapValue&&a===Ns.mapValue)return 0;if(i===Ns.mapValue)return 1;if(a===Ns.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const T=oa(u[m],f[m]);if(T!==0)return T;const x=Yn(c[u[m]],h[f[m]]);if(x!==0)return x}return G(u.length,f.length)}(n.mapValue,e.mapValue);default:throw $(23264,{he:t})}}function ku(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return G(n,e);const t=Yt(n),r=Yt(e),s=G(t.seconds,r.seconds);return s!==0?s:G(t.nanos,r.nanos)}function xu(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Yn(t[s],r[s]);if(i)return i}return G(t.length,r.length)}function Xn(n){return aa(n)}function aa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Yt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Xt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return U.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=aa(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${aa(t.fields[a])}`;return s+"}"}(n.mapValue):$(61005,{value:n})}function Ws(n){switch(Zt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Di(n);return e?16+Ws(e):16;case 5:return 2*n.stringValue.length;case 6:return Xt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ws(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Sn(r.fields,(i,a)=>{s+=i.length+Ws(a)}),s}(n.mapValue);default:throw $(13486,{value:n})}}function ca(n){return!!n&&"integerValue"in n}function $a(n){return!!n&&"arrayValue"in n}function Nu(n){return!!n&&"nullValue"in n}function Ou(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ks(n){return!!n&&"mapValue"in n}function pI(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[gf])==null?void 0:r.stringValue)===yf}function Mr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Sn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Mr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Mr(n.arrayValue.values[t]);return e}return{...n}}function mI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===fI}/**
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
 */class ze{constructor(e){this.value=e}static empty(){return new ze({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ks(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Mr(t)}setAll(e){let t=Te.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=Mr(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Ks(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return mt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ks(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Sn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ze(Mr(this.value))}}function _f(n){const e=[];return Sn(n.fields,(t,r)=>{const s=new Te([t]);if(Ks(r)){const i=_f(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Xe(e)}/**
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
 */class Se{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Se(e,0,q.min(),q.min(),q.min(),ze.empty(),0)}static newFoundDocument(e,t,r,s){return new Se(e,1,t,q.min(),r,s,0)}static newNoDocument(e,t){return new Se(e,2,t,q.min(),q.min(),ze.empty(),0)}static newUnknownDocument(e,t){return new Se(e,3,t,q.min(),q.min(),ze.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ze.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ze.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Se&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Se(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class hi{constructor(e,t){this.position=e,this.inclusive=t}}function Du(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=U.comparator(U.fromName(a.referenceValue),t.key):r=Yn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Vu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!mt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class di{constructor(e,t="asc"){this.field=e,this.dir=t}}function gI(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Ef{}class pe extends Ef{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new _I(e,t,r):t==="array-contains"?new wI(e,r):t==="in"?new II(e,r):t==="not-in"?new vI(e,r):t==="array-contains-any"?new AI(e,r):new pe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new EI(e,r):new TI(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Yn(t,this.value)):t!==null&&Zt(this.value)===Zt(t)&&this.matchesComparison(Yn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gt extends Ef{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new gt(e,t)}matches(e){return Tf(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Tf(n){return n.op==="and"}function wf(n){return yI(n)&&Tf(n)}function yI(n){for(const e of n.filters)if(e instanceof gt)return!1;return!0}function la(n){if(n instanceof pe)return n.field.canonicalString()+n.op.toString()+Xn(n.value);if(wf(n))return n.filters.map(e=>la(e)).join(",");{const e=n.filters.map(t=>la(t)).join(",");return`${n.op}(${e})`}}function If(n,e){return n instanceof pe?function(r,s){return s instanceof pe&&r.op===s.op&&r.field.isEqual(s.field)&&mt(r.value,s.value)}(n,e):n instanceof gt?function(r,s){return s instanceof gt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&If(a,s.filters[c]),!0):!1}(n,e):void $(19439)}function vf(n){return n instanceof pe?function(t){return`${t.field.canonicalString()} ${t.op} ${Xn(t.value)}`}(n):n instanceof gt?function(t){return t.op.toString()+" {"+t.getFilters().map(vf).join(" ,")+"}"}(n):"Filter"}class _I extends pe{constructor(e,t,r){super(e,t,r),this.key=U.fromName(r.referenceValue)}matches(e){const t=U.comparator(e.key,this.key);return this.matchesComparison(t)}}class EI extends pe{constructor(e,t){super(e,"in",t),this.keys=Af("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class TI extends pe{constructor(e,t){super(e,"not-in",t),this.keys=Af("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Af(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>U.fromName(r.referenceValue))}class wI extends pe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return $a(t)&&Qr(t.arrayValue,this.value)}}class II extends pe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Qr(this.value.arrayValue,t)}}class vI extends pe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Qr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Qr(this.value.arrayValue,t)}}class AI extends pe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!$a(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Qr(this.value.arrayValue,r))}}/**
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
 */class bI{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function Lu(n,e=null,t=[],r=[],s=null,i=null,a=null){return new bI(n,e,t,r,s,i,a)}function qa(n){const e=H(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>la(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Oi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Xn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Xn(r)).join(",")),e.Te=t}return e.Te}function Ha(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!gI(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!If(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Vu(n.startAt,e.startAt)&&Vu(n.endAt,e.endAt)}function ua(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Vi{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function SI(n,e,t,r,s,i,a,c){return new Vi(n,e,t,r,s,i,a,c)}function za(n){return new Vi(n)}function Mu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function RI(n){return n.collectionGroup!==null}function Fr(n){const e=H(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new me(Te.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new di(i,r))}),t.has(Te.keyField().canonicalString())||e.Ie.push(new di(Te.keyField(),r))}return e.Ie}function ut(n){const e=H(n);return e.Ee||(e.Ee=CI(e,Fr(n))),e.Ee}function CI(n,e){if(n.limitType==="F")return Lu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new di(s.field,i)});const t=n.endAt?new hi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new hi(n.startAt.position,n.startAt.inclusive):null;return Lu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ha(n,e,t){return new Vi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Li(n,e){return Ha(ut(n),ut(e))&&n.limitType===e.limitType}function bf(n){return`${qa(ut(n))}|lt:${n.limitType}`}function Mn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>vf(s)).join(", ")}]`),Oi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Xn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Xn(s)).join(",")),`Target(${r})`}(ut(n))}; limitType=${n.limitType})`}function Mi(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):U.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Fr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,u){const h=Du(a,c,u);return a.inclusive?h<=0:h<0}(r.startAt,Fr(r),s)||r.endAt&&!function(a,c,u){const h=Du(a,c,u);return a.inclusive?h>=0:h>0}(r.endAt,Fr(r),s))}(n,e)}function PI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Sf(n){return(e,t)=>{let r=!1;for(const s of Fr(n)){const i=kI(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function kI(n,e,t){const r=n.field.isKeyField()?U.comparator(e.key,t.key):function(i,a,c){const u=a.data.field(i),h=c.data.field(i);return u!==null&&h!==null?Yn(u,h):$(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return $(19790,{direction:n.dir})}}/**
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
 */class Rn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Sn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return uf(this.inner)}size(){return this.innerSize}}/**
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
 */const xI=new oe(U.comparator);function Pt(){return xI}const Rf=new oe(U.comparator);function Nr(...n){let e=Rf;for(const t of n)e=e.insert(t.key,t);return e}function Cf(n){let e=Rf;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function dn(){return Ur()}function Pf(){return Ur()}function Ur(){return new Rn(n=>n.toString(),(n,e)=>n.isEqual(e))}const NI=new oe(U.comparator),OI=new me(U.comparator);function Q(...n){let e=OI;for(const t of n)e=e.add(t);return e}const DI=new me(G);function VI(){return DI}/**
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
 */function Wa(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ci(e)?"-0":e}}function kf(n){return{integerValue:""+n}}function LI(n,e){return cI(e)?kf(e):Wa(n,e)}/**
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
 */class Fi{constructor(){this._=void 0}}function MI(n,e,t){return n instanceof fi?function(s,i){const a={fields:{[ff]:{stringValue:df},[mf]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ba(i)&&(i=Di(i)),i&&(a.fields[pf]=i),{mapValue:a}}(t,e):n instanceof Jr?Nf(n,e):n instanceof Yr?Of(n,e):function(s,i){const a=xf(s,i),c=Fu(a)+Fu(s.Ae);return ca(a)&&ca(s.Ae)?kf(c):Wa(s.serializer,c)}(n,e)}function FI(n,e,t){return n instanceof Jr?Nf(n,e):n instanceof Yr?Of(n,e):t}function xf(n,e){return n instanceof pi?function(r){return ca(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class fi extends Fi{}class Jr extends Fi{constructor(e){super(),this.elements=e}}function Nf(n,e){const t=Df(e);for(const r of n.elements)t.some(s=>mt(s,r))||t.push(r);return{arrayValue:{values:t}}}class Yr extends Fi{constructor(e){super(),this.elements=e}}function Of(n,e){let t=Df(e);for(const r of n.elements)t=t.filter(s=>!mt(s,r));return{arrayValue:{values:t}}}class pi extends Fi{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Fu(n){return ue(n.integerValue||n.doubleValue)}function Df(n){return $a(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function UI(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Jr&&s instanceof Jr||r instanceof Yr&&s instanceof Yr?Jn(r.elements,s.elements,mt):r instanceof pi&&s instanceof pi?mt(r.Ae,s.Ae):r instanceof fi&&s instanceof fi}(n.transform,e.transform)}class jI{constructor(e,t){this.version=e,this.transformResults=t}}class bt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new bt}static exists(e){return new bt(void 0,e)}static updateTime(e){return new bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Gs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ui{}function Vf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Mf(n.key,bt.none()):new ls(n.key,n.data,bt.none());{const t=n.data,r=ze.empty();let s=new me(Te.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Cn(n.key,r,new Xe(s.toArray()),bt.none())}}function BI(n,e,t){n instanceof ls?function(s,i,a){const c=s.value.clone(),u=ju(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Cn?function(s,i,a){if(!Gs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=ju(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Lf(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function jr(n,e,t,r){return n instanceof ls?function(i,a,c,u){if(!Gs(i.precondition,a))return c;const h=i.value.clone(),f=Bu(i.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Cn?function(i,a,c,u){if(!Gs(i.precondition,a))return c;const h=Bu(i.fieldTransforms,u,a),f=a.data;return f.setAll(Lf(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(i,a,c){return Gs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function $I(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=xf(r.transform,s||null);i!=null&&(t===null&&(t=ze.empty()),t.set(r.field,i))}return t||null}function Uu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Jn(r,s,(i,a)=>UI(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ls extends Ui{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Cn extends Ui{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Lf(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function ju(n,e,t){const r=new Map;Z(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,FI(a,c,t[s]))}return r}function Bu(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,MI(i,a,e))}return r}class Mf extends Ui{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qI extends Ui{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class HI{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&BI(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=jr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=jr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Pf();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=Vf(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Q())}isEqual(e){return this.batchId===e.batchId&&Jn(this.mutations,e.mutations,(t,r)=>Uu(t,r))&&Jn(this.baseMutations,e.baseMutations,(t,r)=>Uu(t,r))}}class Ka{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Z(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return NI}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Ka(e,t,r,s)}}/**
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
 */class zI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class WI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var he,Y;function KI(n){switch(n){case O.OK:return $(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return $(15467,{code:n})}}function Ff(n){if(n===void 0)return Ct("GRPC error has no .code"),O.UNKNOWN;switch(n){case he.OK:return O.OK;case he.CANCELLED:return O.CANCELLED;case he.UNKNOWN:return O.UNKNOWN;case he.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case he.INTERNAL:return O.INTERNAL;case he.UNAVAILABLE:return O.UNAVAILABLE;case he.UNAUTHENTICATED:return O.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case he.NOT_FOUND:return O.NOT_FOUND;case he.ALREADY_EXISTS:return O.ALREADY_EXISTS;case he.PERMISSION_DENIED:return O.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case he.ABORTED:return O.ABORTED;case he.OUT_OF_RANGE:return O.OUT_OF_RANGE;case he.UNIMPLEMENTED:return O.UNIMPLEMENTED;case he.DATA_LOSS:return O.DATA_LOSS;default:return $(39323,{code:n})}}(Y=he||(he={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function GI(){return new TextEncoder}/**
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
 */const QI=new Kt([4294967295,4294967295],0);function $u(n){const e=GI().encode(n),t=new Zd;return t.update(e),new Uint8Array(t.digest())}function qu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Kt([t,r],0),new Kt([s,i],0)]}class Ga{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Or(`Invalid padding: ${t}`);if(r<0)throw new Or(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Or(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Or(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Kt.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Kt.fromNumber(r)));return s.compare(QI)===1&&(s=new Kt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=$u(e),[r,s]=qu(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Ga(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.ge===0)return;const t=$u(e),[r,s]=qu(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Or extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ji{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,us.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ji(q.min(),s,new oe(G),Pt(),Q())}}class us{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new us(r,t,Q(),Q(),Q())}}/**
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
 */class Qs{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Uf{constructor(e,t){this.targetId=e,this.Ce=t}}class jf{constructor(e,t,r=Ie.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Hu{constructor(){this.ve=0,this.Fe=zu(),this.Me=Ie.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Q(),t=Q(),r=Q();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:$(38017,{changeType:i})}}),new us(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=zu()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Z(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class JI{constructor(e){this.Ge=e,this.ze=new Map,this.je=Pt(),this.Je=Os(),this.He=Os(),this.Ye=new oe(G)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:$(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(ua(i))if(r===0){const a=new U(i.path);this.et(t,a,Se.newNoDocument(a,q.min()))}else Z(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const c=this.ut(e),u=c?this.ct(c,e,a):1;if(u!==0){this.it(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Xt(r).toUint8Array()}catch(u){if(u instanceof hf)return Qn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Ga(a,s,i)}catch(u){return Qn(u instanceof Or?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const c=this.ot(a);if(c){if(i.current&&ua(c.target)){const u=new U(c.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,Se.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.qe())}});let r=Q();this.He.forEach((i,a)=>{let c=!0;a.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new ji(e,t,this.Ye,this.je,r);return this.je=Pt(),this.Je=Os(),this.He=Os(),this.Ye=new oe(G),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Hu,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new me(G),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new me(G),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||L("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Hu),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Os(){return new oe(U.comparator)}function zu(){return new oe(U.comparator)}const YI={asc:"ASCENDING",desc:"DESCENDING"},XI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ZI={and:"AND",or:"OR"};class ev{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function da(n,e){return n.useProto3Json||Oi(e)?e:{value:e}}function mi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Bf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function tv(n,e){return mi(n,e.toTimestamp())}function ht(n){return Z(!!n,49232),q.fromTimestamp(function(t){const r=Yt(t);return new se(r.seconds,r.nanos)}(n))}function Qa(n,e){return fa(n,e).canonicalString()}function fa(n,e){const t=function(s){return new ie(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function $f(n){const e=ie.fromString(n);return Z(Kf(e),10190,{key:e.toString()}),e}function pa(n,e){return Qa(n.databaseId,e.path)}function No(n,e){const t=$f(e);if(t.get(1)!==n.databaseId.projectId)throw new F(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new F(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new U(Hf(t))}function qf(n,e){return Qa(n.databaseId,e)}function nv(n){const e=$f(n);return e.length===4?ie.emptyPath():Hf(e)}function ma(n){return new ie(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Hf(n){return Z(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Wu(n,e,t){return{name:pa(n,e),fields:t.value.mapValue.fields}}function rv(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:$(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Z(f===void 0||typeof f=="string",58123),Ie.fromBase64String(f||"")):(Z(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ie.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const f=h.code===void 0?O.UNKNOWN:Ff(h.code);return new F(f,h.message||"")}(a);t=new jf(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=No(n,r.document.name),i=ht(r.document.updateTime),a=r.document.createTime?ht(r.document.createTime):q.min(),c=new ze({mapValue:{fields:r.document.fields}}),u=Se.newFoundDocument(s,i,a,c),h=r.targetIds||[],f=r.removedTargetIds||[];t=new Qs(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=No(n,r.document),i=r.readTime?ht(r.readTime):q.min(),a=Se.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Qs([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=No(n,r.document),i=r.removedTargetIds||[];t=new Qs([],i,s,null)}else{if(!("filter"in e))return $(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new WI(s,i),c=r.targetId;t=new Uf(c,a)}}return t}function sv(n,e){let t;if(e instanceof ls)t={update:Wu(n,e.key,e.value)};else if(e instanceof Mf)t={delete:pa(n,e.key)};else if(e instanceof Cn)t={update:Wu(n,e.key,e.data),updateMask:fv(e.fieldMask)};else{if(!(e instanceof qI))return $(16599,{Vt:e.type});t={verify:pa(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof fi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Jr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Yr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof pi)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw $(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:tv(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$(27497)}(n,e.precondition)),t}function iv(n,e){return n&&n.length>0?(Z(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?ht(s.updateTime):ht(i);return a.isEqual(q.min())&&(a=ht(i)),new jI(a,s.transformResults||[])}(t,e))):[]}function ov(n,e){return{documents:[qf(n,e.path)]}}function av(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=qf(n,s);const i=function(h){if(h.length!==0)return Wf(gt.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(T){return{field:Fn(T.field),direction:uv(T.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=da(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:t,parent:s}}function cv(n){let e=nv(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Z(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(m){const T=zf(m);return T instanceof gt&&wf(T)?T.getFilters():[T]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(T=>function(A){return new di(Un(A.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(T))}(t.orderBy));let c=null;t.limit&&(c=function(m){let T;return T=typeof m=="object"?m.value:m,Oi(T)?null:T}(t.limit));let u=null;t.startAt&&(u=function(m){const T=!!m.before,x=m.values||[];return new hi(x,T)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const T=!m.before,x=m.values||[];return new hi(x,T)}(t.endAt)),SI(e,s,a,i,c,"F",u,h)}function lv(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function zf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Un(t.unaryFilter.field);return pe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Un(t.unaryFilter.field);return pe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Un(t.unaryFilter.field);return pe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Un(t.unaryFilter.field);return pe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return $(61313);default:return $(60726)}}(n):n.fieldFilter!==void 0?function(t){return pe.create(Un(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return $(58110);default:return $(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return gt.create(t.compositeFilter.filters.map(r=>zf(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return $(1026)}}(t.compositeFilter.op))}(n):$(30097,{filter:n})}function uv(n){return YI[n]}function hv(n){return XI[n]}function dv(n){return ZI[n]}function Fn(n){return{fieldPath:n.canonicalString()}}function Un(n){return Te.fromServerFormat(n.fieldPath)}function Wf(n){return n instanceof pe?function(t){if(t.op==="=="){if(Ou(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NAN"}};if(Nu(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ou(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NOT_NAN"}};if(Nu(t.value))return{unaryFilter:{field:Fn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fn(t.field),op:hv(t.op),value:t.value}}}(n):n instanceof gt?function(t){const r=t.getFilters().map(s=>Wf(s));return r.length===1?r[0]:{compositeFilter:{op:dv(t.op),filters:r}}}(n):$(54877,{filter:n})}function fv(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Kf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Ht{constructor(e,t,r,s,i=q.min(),a=q.min(),c=Ie.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Ht(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class pv{constructor(e){this.yt=e}}function mv(n){const e=cv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ha(e,e.limit,"L"):e}/**
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
 */class gv{constructor(){this.Cn=new yv}addToCollectionParentIndex(e,t){return this.Cn.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(Jt.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(Jt.min())}updateCollectionGroup(e,t,r){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class yv{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new me(ie.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new me(ie.comparator)).toArray()}}/**
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
 */const Ku={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Gf=41943040;class Ne{static withCacheSize(e){return new Ne(e,Ne.DEFAULT_COLLECTION_PERCENTILE,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ne.DEFAULT_COLLECTION_PERCENTILE=10,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ne.DEFAULT=new Ne(Gf,Ne.DEFAULT_COLLECTION_PERCENTILE,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ne.DISABLED=new Ne(-1,0,0);/**
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
 */class Zn{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Zn(0)}static cr(){return new Zn(-1)}}/**
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
 */const Gu="LruGarbageCollector",_v=1048576;function Qu([n,e],[t,r]){const s=G(n,t);return s===0?G(e,r):s}class Ev{constructor(e){this.Ir=e,this.buffer=new me(Qu),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Qu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Tv{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){L(Gu,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){cr(t)?L(Gu,"Ignoring IndexedDB error during garbage collection: ",t):await ar(t)}await this.Vr(3e5)})}}class wv{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return N.resolve(Ni.ce);const r=new Ev(t);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(Ku)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ku):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,i,a,c,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,c=Date.now(),this.removeTargets(e,r,t))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),Ln()<=K.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function Iv(n,e){return new wv(n,e)}/**
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
 */class vv{constructor(){this.changes=new Rn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Se.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?N.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Av{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class bv{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&jr(r.mutation,s,Xe.empty(),se.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Q()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Q()){const s=dn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Nr();return i.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=dn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Q()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=Pt();const a=Ur(),c=function(){return Ur()}();return t.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Cn)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),jr(f.mutation,h,f.mutation.getFieldMask(),se.now())):a.set(h.key,Xe.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>c.set(h,new Av(f,a.get(h)??null))),c))}recalculateAndSaveOverlays(e,t){const r=Ur();let s=new oe((a,c)=>a-c),i=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let f=r.get(u)||Xe.empty();f=c.applyToLocalView(h,f),r.set(u,f);const m=(s.get(c.batchId)||Q()).add(u);s=s.insert(c.batchId,m)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,f=u.value,m=Pf();f.forEach(T=>{if(!i.has(T)){const x=Vf(t.get(T),r.get(T));x!==null&&m.set(T,x),i=i.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return N.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return U.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):RI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):N.resolve(dn());let c=Wr,u=i;return a.next(h=>N.forEach(h,(f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),i.get(f)?N.resolve():this.remoteDocumentCache.getEntry(e,f).next(T=>{u=u.insert(f,T)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,Q())).next(f=>({batchId:c,changes:Cf(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next(r=>{let s=Nr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Nr();return this.indexManager.getCollectionParents(e,i).next(c=>N.forEach(c,u=>{const h=function(m,T){return new Vi(T,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((m,T)=>{a=a.insert(m,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Se.newInvalidDocument(f)))});let c=Nr();return a.forEach((u,h)=>{const f=i.get(u);f!==void 0&&jr(f.mutation,h,Xe.empty(),se.now()),Mi(t,h)&&(c=c.insert(u,h))}),c})}}/**
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
 */class Sv{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return N.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:ht(s.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(s){return{name:s.name,query:mv(s.bundledQuery),readTime:ht(s.readTime)}}(t)),N.resolve()}}/**
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
 */class Rv{constructor(){this.overlays=new oe(U.comparator),this.qr=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const r=dn();return N.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),N.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),N.resolve()}getOverlaysForCollection(e,t,r){const s=dn(),i=t.length+1,a=new U(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return N.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new oe((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=dn(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=dn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return N.resolve(c)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new zI(t,r));let i=this.qr.get(t);i===void 0&&(i=Q(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
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
 */class Cv{constructor(){this.sessionToken=Ie.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
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
 */class Ja{constructor(){this.Qr=new me(ye.$r),this.Ur=new me(ye.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new ye(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Gr(new ye(e,t))}zr(e,t){e.forEach(r=>this.removeReference(r,t))}jr(e){const t=new U(new ie([])),r=new ye(t,e),s=new ye(t,e+1),i=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),i.push(a.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new U(new ie([])),r=new ye(t,e),s=new ye(t,e+1);let i=Q();return this.Ur.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new ye(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ye{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return U.comparator(e.key,t.key)||G(e.Yr,t.Yr)}static Kr(e,t){return G(e.Yr,t.Yr)||U.comparator(e.key,t.key)}}/**
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
 */class Pv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new me(ye.$r)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new HI(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Zr=this.Zr.add(new ye(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,t){return N.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),i=s<0?0:s;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?ja:this.tr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ye(t,0),s=new ye(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],a=>{const c=this.Xr(a.Yr);i.push(c)}),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new me(G);return t.forEach(s=>{const i=new ye(s,0),a=new ye(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],c=>{r=r.add(c.Yr)})}),N.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;U.isDocumentKey(i)||(i=i.child(""));const a=new ye(new U(i),0);let c=new me(G);return this.Zr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(u.Yr)),!0)},a),N.resolve(this.ti(c))}ti(e){const t=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Z(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return N.forEach(t.mutations,s=>{const i=new ye(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){const r=new ye(t,0),s=this.Zr.firstAfterOrEqual(r);return N.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class kv{constructor(e){this.ri=e,this.docs=function(){return new oe(U.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return N.resolve(r?r.document.mutableCopy():Se.newInvalidDocument(t))}getEntries(e,t){let r=Pt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Se.newInvalidDocument(s))}),N.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Pt();const a=t.path,c=new U(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||sI(rI(f),r)<=0||(s.has(f.key)||Mi(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,t,r,s){$(9500)}ii(e,t){return N.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new xv(this)}getSize(e){return N.resolve(this.size)}}class xv extends vv{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),N.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class Nv{constructor(e){this.persistence=e,this.si=new Rn(t=>qa(t),Ha),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.oi=0,this._i=new Ja,this.targetCount=0,this.ai=Zn.ur()}forEachTarget(e,t){return this.si.forEach((r,s)=>t(s)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),N.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Zn(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.Pr(t),N.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.si.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),N.waitFor(i).next(()=>s)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return N.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),N.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),N.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return N.resolve(r)}containsKey(e,t){return N.resolve(this._i.containsKey(t))}}/**
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
 */class Qf{constructor(e,t){this.ui={},this.overlays={},this.ci=new Ni(0),this.li=!1,this.li=!0,this.hi=new Cv,this.referenceDelegate=e(this),this.Pi=new Nv(this),this.indexManager=new gv,this.remoteDocumentCache=function(s){return new kv(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new pv(t),this.Ii=new Sv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Rv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new Pv(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){L("MemoryPersistence","Starting transaction:",e);const s=new Ov(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,t){return N.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class Ov extends oI{constructor(e){super(),this.currentSequenceNumber=e}}class Ya{constructor(e){this.persistence=e,this.Ri=new Ja,this.Vi=null}static mi(e){return new Ya(e)}get fi(){if(this.Vi)return this.Vi;throw $(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),N.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),N.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.fi,r=>{const s=U.fromPath(r);return this.gi(e,s).next(i=>{i||t.removeEntry(s,q.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return N.or([()=>N.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class gi{constructor(e,t){this.persistence=e,this.pi=new Rn(r=>lI(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Iv(this,t)}static mi(e,t){return new gi(e,t)}Ei(){}di(e){return N.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}pr(e,t){return N.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?N.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,a=>this.br(e,a,t).next(c=>{c||(r++,i.removeEntry(a,q.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),N.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),N.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),N.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ws(e.data.value)),t}br(e,t,r){return N.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return N.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Xa{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=Q(),s=Q();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Xa(e,t.fromCache,r,s)}}/**
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
 */class Dv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Vv{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return r_()?8:aI(Ce())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ys(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ws(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Dv;return this.Ss(e,t,a).next(c=>{if(i.result=c,this.Vs)return this.bs(e,t,a,c.size)})}).next(()=>i.result)}bs(e,t,r,s){return r.documentReadCount<this.fs?(Ln()<=K.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",Mn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),N.resolve()):(Ln()<=K.DEBUG&&L("QueryEngine","Query:",Mn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Ln()<=K.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",Mn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ut(t))):N.resolve())}ys(e,t){if(Mu(t))return N.resolve(null);let r=ut(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=ha(t,null,"F"),r=ut(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=Q(...i);return this.ps.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ds(t,c);return this.Cs(t,h,a,u.readTime)?this.ys(e,ha(t,null,"F")):this.vs(e,h,t,u)}))})))}ws(e,t,r,s){return Mu(t)||s.isEqual(q.min())?N.resolve(null):this.ps.getDocuments(e,r).next(i=>{const a=this.Ds(t,i);return this.Cs(t,a,r,s)?N.resolve(null):(Ln()<=K.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Mn(t)),this.vs(e,a,t,nI(s,Wr)).next(c=>c))})}Ds(e,t){let r=new me(Sf(e));return t.forEach((s,i)=>{Mi(e,i)&&(r=r.add(i))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return Ln()<=K.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Mn(t)),this.ps.getDocumentsMatchingQuery(e,t,Jt.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const Za="LocalStore",Lv=3e8;class Mv{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new oe(G),this.xs=new Rn(i=>qa(i),Ha),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bv(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function Fv(n,e,t,r){return new Mv(n,e,t,r)}async function Jf(n,e){const t=H(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let u=Q();for(const h of s){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(h=>({Ls:h,removedBatchIds:a,addedBatchIds:c}))})})}function Uv(n,e){const t=H(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return function(c,u,h,f){const m=h.batch,T=m.keys();let x=N.resolve();return T.forEach(A=>{x=x.next(()=>f.getEntry(u,A)).next(C=>{const R=h.docVersions.get(A);Z(R!==null,48541),C.version.compareTo(R)<0&&(m.applyToRemoteDocument(C,h),C.isValidDocument()&&(C.setReadTime(h.commitVersion),f.addEntry(C)))})}),x.next(()=>c.mutationQueue.removeMutationBatch(u,m))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=Q();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Yf(n){const e=H(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function jv(n,e){const t=H(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const c=[];e.targetChanges.forEach((f,m)=>{const T=s.get(m);if(!T)return;c.push(t.Pi.removeMatchingKeys(i,f.removedDocuments,m).next(()=>t.Pi.addMatchingKeys(i,f.addedDocuments,m)));let x=T.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?x=x.withResumeToken(Ie.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):f.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(f.resumeToken,r)),s=s.insert(m,x),function(C,R,D){return C.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=Lv?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(T,x,f)&&c.push(t.Pi.updateTargetData(i,x))});let u=Pt(),h=Q();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(Bv(i,a,e.documentUpdates).next(f=>{u=f.ks,h=f.qs})),!r.isEqual(q.min())){const f=t.Pi.getLastRemoteSnapshotVersion(i).next(m=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return N.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(t.Ms=s,i))}function Bv(n,e,t){let r=Q(),s=Q();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Pt();return t.forEach((c,u)=>{const h=i.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(q.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):L(Za,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{ks:a,qs:s}})}function $v(n,e){const t=H(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ja),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function qv(n,e){const t=H(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Pi.getTargetData(r,e).next(i=>i?(s=i,N.resolve(s)):t.Pi.allocateTargetId(r).next(a=>(s=new Ht(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r})}async function ga(n,e,t){const r=H(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!cr(a))throw a;L(Za,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Ju(n,e,t){const r=H(n);let s=q.min(),i=Q();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){const m=H(u),T=m.xs.get(f);return T!==void 0?N.resolve(m.Ms.get(T)):m.Pi.getTargetData(h,f)}(r,a,ut(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,c.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:q.min(),t?i:Q())).next(c=>(Hv(r,PI(e),c),{documents:c,Qs:i})))}function Hv(n,e,t){let r=n.Os.get(e)||q.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Os.set(e,r)}class Yu{constructor(){this.activeTargetIds=VI()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zv{constructor(){this.Mo=new Yu,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Yu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Wv{Oo(e){}shutdown(){}}/**
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
 */const Xu="ConnectivityMonitor";class Zu{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){L(Xu,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){L(Xu,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ds=null;function ya(){return Ds===null?Ds=function(){return 268435456+Math.round(2147483648*Math.random())}():Ds++,"0x"+Ds.toString(16)}/**
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
 */const Oo="RestConnection",Kv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Gv{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===li?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,i){const a=ya(),c=this.zo(e,t.toUriEncodedString());L(Oo,`Sending RPC '${e}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:h}=new URL(c),f=rr(h);return this.Jo(e,c,u,r,f).then(m=>(L(Oo,`Received RPC '${e}' ${a}: `,m),m),m=>{throw Qn(Oo,`RPC '${e}' ${a} failed with error: `,m,"url: ",c,"request:",r),m})}Ho(e,t,r,s,i,a){return this.Go(e,t,r,s,i)}jo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+or}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,t){const r=Kv[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
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
 */class Qv{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Ae="WebChannelConnection";class Jv extends Gv{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const a=ya();return new Promise((c,u)=>{const h=new ef;h.setWithCredentials(!0),h.listenOnce(tf.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case zs.NO_ERROR:const m=h.getResponseJson();L(Ae,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),c(m);break;case zs.TIMEOUT:L(Ae,`RPC '${e}' ${a} timed out`),u(new F(O.DEADLINE_EXCEEDED,"Request time out"));break;case zs.HTTP_ERROR:const T=h.getStatus();if(L(Ae,`RPC '${e}' ${a} failed with status:`,T,"response text:",h.getResponseText()),T>0){let x=h.getResponseJson();Array.isArray(x)&&(x=x[0]);const A=x==null?void 0:x.error;if(A&&A.status&&A.message){const C=function(D){const M=D.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(M)>=0?M:O.UNKNOWN}(A.status);u(new F(C,A.message))}else u(new F(O.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new F(O.UNAVAILABLE,"Connection failed."));break;default:$(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{L(Ae,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(s);L(Ae,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",f,r,15)})}T_(e,t,r){const s=ya(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=sf(),c=rf(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=i.join("");L(Ae,`Creating RPC '${e}' stream ${s}: ${f}`,u);const m=a.createWebChannel(f,u);this.I_(m);let T=!1,x=!1;const A=new Qv({Yo:R=>{x?L(Ae,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(T||(L(Ae,`Opening RPC '${e}' stream ${s} transport.`),m.open(),T=!0),L(Ae,`RPC '${e}' stream ${s} sending:`,R),m.send(R))},Zo:()=>m.close()}),C=(R,D,M)=>{R.listen(D,j=>{try{M(j)}catch(X){setTimeout(()=>{throw X},0)}})};return C(m,xr.EventType.OPEN,()=>{x||(L(Ae,`RPC '${e}' stream ${s} transport opened.`),A.o_())}),C(m,xr.EventType.CLOSE,()=>{x||(x=!0,L(Ae,`RPC '${e}' stream ${s} transport closed`),A.a_(),this.E_(m))}),C(m,xr.EventType.ERROR,R=>{x||(x=!0,Qn(Ae,`RPC '${e}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),A.a_(new F(O.UNAVAILABLE,"The operation could not be completed")))}),C(m,xr.EventType.MESSAGE,R=>{var D;if(!x){const M=R.data[0];Z(!!M,16349);const j=M,X=(j==null?void 0:j.error)||((D=j[0])==null?void 0:D.error);if(X){L(Ae,`RPC '${e}' stream ${s} received error:`,X);const ne=X.status;let ee=function(E){const v=he[E];if(v!==void 0)return Ff(v)}(ne),w=X.message;ee===void 0&&(ee=O.INTERNAL,w="Unknown error status: "+ne+" with message "+X.message),x=!0,A.a_(new F(ee,w)),m.close()}else L(Ae,`RPC '${e}' stream ${s} received:`,M),A.u_(M)}}),C(c,nf.STAT_EVENT,R=>{R.stat===ia.PROXY?L(Ae,`RPC '${e}' stream ${s} detected buffering proxy`):R.stat===ia.NOPROXY&&L(Ae,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{A.__()},0),A}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function Do(){return typeof document<"u"?document:null}/**
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
 */function Bi(n){return new ev(n,!0)}/**
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
 */class Xf{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const eh="PersistentStream";class Zf{constructor(e,t,r,s,i,a,c,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Xf(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===O.RESOURCE_EXHAUSTED?(Ct(t.toString()),Ct("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new F(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return L(eh,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(L(eh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Yv extends Zf{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=rv(this.serializer,e),r=function(i){if(!("targetChange"in i))return q.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?q.min():a.readTime?ht(a.readTime):q.min()}(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=ma(this.serializer),t.addTarget=function(i,a){let c;const u=a.target;if(c=ua(u)?{documents:ov(i,u)}:{query:av(i,u).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Bf(i,a.resumeToken);const h=da(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(q.min())>0){c.readTime=mi(i,a.snapshotVersion.toTimestamp());const h=da(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=lv(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=ma(this.serializer),t.removeTarget=e,this.q_(t)}}class Xv extends Zf{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Z(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Z(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Z(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=iv(e.writeResults,e.commitTime),r=ht(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=ma(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>sv(this.serializer,r))};this.q_(t)}}/**
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
 */class Zv{}class eA extends Zv{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new F(O.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Go(e,fa(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(O.UNKNOWN,i.toString())})}Ho(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Ho(e,fa(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new F(O.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class tA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ct(t),this.aa=!1):L("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const wn="RemoteStore";class nA{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{Pn(this)&&(L(wn,"Restarting streams for network reachability change."),await async function(u){const h=H(u);h.Ea.add(4),await hs(h),h.Ra.set("Unknown"),h.Ea.delete(4),await $i(h)}(this))})}),this.Ra=new tA(r,s)}}async function $i(n){if(Pn(n))for(const e of n.da)await e(!0)}async function hs(n){for(const e of n.da)await e(!1)}function ep(n,e){const t=H(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),rc(t)?nc(t):lr(t).O_()&&tc(t,e))}function ec(n,e){const t=H(n),r=lr(t);t.Ia.delete(e),r.O_()&&tp(t,e),t.Ia.size===0&&(r.O_()?r.L_():Pn(t)&&t.Ra.set("Unknown"))}function tc(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}lr(n).Y_(e)}function tp(n,e){n.Va.Ue(e),lr(n).Z_(e)}function nc(n){n.Va=new JI({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),lr(n).start(),n.Ra.ua()}function rc(n){return Pn(n)&&!lr(n).x_()&&n.Ia.size>0}function Pn(n){return H(n).Ea.size===0}function np(n){n.Va=void 0}async function rA(n){n.Ra.set("Online")}async function sA(n){n.Ia.forEach((e,t)=>{tc(n,e)})}async function iA(n,e){np(n),rc(n)?(n.Ra.ha(e),nc(n)):n.Ra.set("Unknown")}async function oA(n,e,t){if(n.Ra.set("Online"),e instanceof jf&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.Va.removeTarget(c))}(n,e)}catch(r){L(wn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await yi(n,r)}else if(e instanceof Qs?n.Va.Ze(e):e instanceof Uf?n.Va.st(e):n.Va.tt(e),!t.isEqual(q.min()))try{const r=await Yf(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Va.Tt(a);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,h)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(Ie.EMPTY_BYTE_STRING,f.snapshotVersion)),tp(i,u);const m=new Ht(f.target,u,h,f.sequenceNumber);tc(i,m)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){L(wn,"Failed to raise snapshot:",r),await yi(n,r)}}async function yi(n,e,t){if(!cr(e))throw e;n.Ea.add(1),await hs(n),n.Ra.set("Offline"),t||(t=()=>Yf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{L(wn,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await $i(n)})}function rp(n,e){return e().catch(t=>yi(n,t,e))}async function qi(n){const e=H(n),t=en(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ja;for(;aA(e);)try{const s=await $v(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,cA(e,s)}catch(s){await yi(e,s)}sp(e)&&ip(e)}function aA(n){return Pn(n)&&n.Ta.length<10}function cA(n,e){n.Ta.push(e);const t=en(n);t.O_()&&t.X_&&t.ea(e.mutations)}function sp(n){return Pn(n)&&!en(n).x_()&&n.Ta.length>0}function ip(n){en(n).start()}async function lA(n){en(n).ra()}async function uA(n){const e=en(n);for(const t of n.Ta)e.ea(t.mutations)}async function hA(n,e,t){const r=n.Ta.shift(),s=Ka.from(r,e,t);await rp(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await qi(n)}async function dA(n,e){e&&en(n).X_&&await async function(r,s){if(function(a){return KI(a)&&a!==O.ABORTED}(s.code)){const i=r.Ta.shift();en(r).B_(),await rp(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await qi(r)}}(n,e),sp(n)&&ip(n)}async function th(n,e){const t=H(n);t.asyncQueue.verifyOperationInProgress(),L(wn,"RemoteStore received new credentials");const r=Pn(t);t.Ea.add(3),await hs(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await $i(t)}async function fA(n,e){const t=H(n);e?(t.Ea.delete(2),await $i(t)):e||(t.Ea.add(2),await hs(t),t.Ra.set("Unknown"))}function lr(n){return n.ma||(n.ma=function(t,r,s){const i=H(t);return i.sa(),new Yv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:rA.bind(null,n),t_:sA.bind(null,n),r_:iA.bind(null,n),H_:oA.bind(null,n)}),n.da.push(async e=>{e?(n.ma.B_(),rc(n)?nc(n):n.Ra.set("Unknown")):(await n.ma.stop(),np(n))})),n.ma}function en(n){return n.fa||(n.fa=function(t,r,s){const i=H(t);return i.sa(),new Xv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:lA.bind(null,n),r_:dA.bind(null,n),ta:uA.bind(null,n),na:hA.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await qi(n)):(await n.fa.stop(),n.Ta.length>0&&(L(wn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class sc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new sc(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ic(n,e){if(Ct("AsyncQueue",`${e}: ${n}`),cr(n))return new F(O.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Wn{static emptySet(e){return new Wn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||U.comparator(t.key,r.key):(t,r)=>U.comparator(t.key,r.key),this.keyedMap=Nr(),this.sortedSet=new oe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Wn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Wn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class nh{constructor(){this.ga=new oe(U.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):$(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class er{constructor(e,t,r,s,i,a,c,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new er(e,t,Wn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Li(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class pA{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class mA{constructor(){this.queries=rh(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=H(t),i=s.queries;s.queries=rh(),i.forEach((a,c)=>{for(const u of c.Sa)u.onError(r)})})(this,new F(O.ABORTED,"Firestore shutting down"))}}function rh(){return new Rn(n=>bf(n),Li)}async function gA(n,e){const t=H(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new pA,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=ic(a,`Initialization of query '${Mn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&oc(t)}async function yA(n,e){const t=H(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function _A(n,e){const t=H(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.Sa)c.Fa(s)&&(r=!0);a.wa=s}}r&&oc(t)}function EA(n,e,t){const r=H(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function oc(n){n.Ca.forEach(e=>{e.next()})}var _a,sh;(sh=_a||(_a={})).Ma="default",sh.Cache="cache";class TA{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new er(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=er.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==_a.Cache}}/**
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
 */class op{constructor(e){this.key=e}}class ap{constructor(e){this.key=e}}class wA{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Q(),this.mutatedKeys=Q(),this.eu=Sf(e),this.tu=new Wn(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new nh,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const T=s.get(f),x=Mi(this.query,m)?m:null,A=!!T&&this.mutatedKeys.has(T.key),C=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let R=!1;T&&x?T.data.isEqual(x.data)?A!==C&&(r.track({type:3,doc:x}),R=!0):this.su(T,x)||(r.track({type:2,doc:x}),R=!0,(u&&this.eu(x,u)>0||h&&this.eu(x,h)<0)&&(c=!0)):!T&&x?(r.track({type:0,doc:x}),R=!0):T&&!x&&(r.track({type:1,doc:T}),R=!0,(u||h)&&(c=!0)),R&&(x?(a=a.add(x),i=C?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:a,iu:r,Cs:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((f,m)=>function(x,A){const C=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $(20277,{Rt:R})}};return C(x)-C(A)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),s=s??!1;const c=t&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,h=u!==this.Za;return this.Za=u,a.length!==0||h?{snapshot:new er(this.query,e.tu,i,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new nh,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Q(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const t=[];return e.forEach(r=>{this.Xa.has(r)||t.push(new ap(r))}),this.Xa.forEach(r=>{e.has(r)||t.push(new op(r))}),t}cu(e){this.Ya=e.Qs,this.Xa=Q();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return er.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ac="SyncEngine";class IA{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class vA{constructor(e){this.key=e,this.hu=!1}}class AA{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Rn(c=>bf(c),Li),this.Iu=new Map,this.Eu=new Set,this.du=new oe(U.comparator),this.Au=new Map,this.Ru=new Ja,this.Vu={},this.mu=new Map,this.fu=Zn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function bA(n,e,t=!0){const r=fp(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await cp(r,e,t,!0),s}async function SA(n,e){const t=fp(n);await cp(t,e,!0,!1)}async function cp(n,e,t,r){const s=await qv(n.localStore,ut(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await RA(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&ep(n.remoteStore,s),c}async function RA(n,e,t,r,s){n.pu=(m,T,x)=>async function(C,R,D,M){let j=R.view.ru(D);j.Cs&&(j=await Ju(C.localStore,R.query,!1).then(({documents:w})=>R.view.ru(w,j)));const X=M&&M.targetChanges.get(R.targetId),ne=M&&M.targetMismatches.get(R.targetId)!=null,ee=R.view.applyChanges(j,C.isPrimaryClient,X,ne);return oh(C,R.targetId,ee.au),ee.snapshot}(n,m,T,x);const i=await Ju(n.localStore,e,!0),a=new wA(e,i.Qs),c=a.ru(i.documents),u=us.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,u);oh(n,t,h.au);const f=new IA(e,t,a);return n.Tu.set(e,f),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function CA(n,e,t){const r=H(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(a=>!Li(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ga(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&ec(r.remoteStore,s.targetId),Ea(r,s.targetId)}).catch(ar)):(Ea(r,s.targetId),await ga(r.localStore,s.targetId,!0))}async function PA(n,e){const t=H(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ec(t.remoteStore,r.targetId))}async function kA(n,e,t){const r=MA(n);try{const s=await function(a,c){const u=H(a),h=se.now(),f=c.reduce((x,A)=>x.add(A.key),Q());let m,T;return u.persistence.runTransaction("Locally write mutations","readwrite",x=>{let A=Pt(),C=Q();return u.Ns.getEntries(x,f).next(R=>{A=R,A.forEach((D,M)=>{M.isValidDocument()||(C=C.add(D))})}).next(()=>u.localDocuments.getOverlayedDocuments(x,A)).next(R=>{m=R;const D=[];for(const M of c){const j=$I(M,m.get(M.key).overlayedDocument);j!=null&&D.push(new Cn(M.key,j,_f(j.value.mapValue),bt.exists(!0)))}return u.mutationQueue.addMutationBatch(x,h,D,c)}).next(R=>{T=R;const D=R.applyToLocalDocumentSet(m,C);return u.documentOverlayCache.saveOverlays(x,R.batchId,D)})}).then(()=>({batchId:T.batchId,changes:Cf(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,u){let h=a.Vu[a.currentUser.toKey()];h||(h=new oe(G)),h=h.insert(c,u),a.Vu[a.currentUser.toKey()]=h}(r,s.batchId,t),await ds(r,s.changes),await qi(r.remoteStore)}catch(s){const i=ic(s,"Failed to persist write");t.reject(i)}}async function lp(n,e){const t=H(n);try{const r=await jv(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Au.get(i);a&&(Z(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?Z(a.hu,14607):s.removedDocuments.size>0&&(Z(a.hu,42227),a.hu=!1))}),await ds(t,r,e)}catch(r){await ar(r)}}function ih(n,e,t){const r=H(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const u=H(a);u.onlineState=c;let h=!1;u.queries.forEach((f,m)=>{for(const T of m.Sa)T.va(c)&&(h=!0)}),h&&oc(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function xA(n,e,t){const r=H(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new oe(U.comparator);a=a.insert(i,Se.newNoDocument(i,q.min()));const c=Q().add(i),u=new ji(q.min(),new Map,new oe(G),a,c);await lp(r,u),r.du=r.du.remove(i),r.Au.delete(e),cc(r)}else await ga(r.localStore,e,!1).then(()=>Ea(r,e,t)).catch(ar)}async function NA(n,e){const t=H(n),r=e.batch.batchId;try{const s=await Uv(t.localStore,e);hp(t,r,null),up(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ds(t,s)}catch(s){await ar(s)}}async function OA(n,e,t){const r=H(n);try{const s=await function(a,c){const u=H(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,c).next(m=>(Z(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);hp(r,e,t),up(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ds(r,s)}catch(s){await ar(s)}}function up(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function hp(n,e,t){const r=H(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Ea(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach(r=>{n.Ru.containsKey(r)||dp(n,r)})}function dp(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(ec(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),cc(n))}function oh(n,e,t){for(const r of t)r instanceof op?(n.Ru.addReference(r.key,e),DA(n,r)):r instanceof ap?(L(ac,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||dp(n,r.key)):$(19791,{wu:r})}function DA(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(L(ac,"New document in limbo: "+t),n.Eu.add(r),cc(n))}function cc(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new U(ie.fromString(e)),r=n.fu.next();n.Au.set(r,new vA(t)),n.du=n.du.insert(t,r),ep(n.remoteStore,new Ht(ut(za(t.path)),r,"TargetPurposeLimboResolution",Ni.ce))}}async function ds(n,e,t){const r=H(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((c,u)=>{a.push(r.pu(u,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){s.push(h);const m=Xa.As(u.targetId,h);i.push(m)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(u,h){const f=H(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>N.forEach(h,T=>N.forEach(T.Es,x=>f.persistence.referenceDelegate.addReference(m,T.targetId,x)).next(()=>N.forEach(T.ds,x=>f.persistence.referenceDelegate.removeReference(m,T.targetId,x)))))}catch(m){if(!cr(m))throw m;L(Za,"Failed to update sequence numbers: "+m)}for(const m of h){const T=m.targetId;if(!m.fromCache){const x=f.Ms.get(T),A=x.snapshotVersion,C=x.withLastLimboFreeSnapshotVersion(A);f.Ms=f.Ms.insert(T,C)}}}(r.localStore,i))}async function VA(n,e){const t=H(n);if(!t.currentUser.isEqual(e)){L(ac,"User change. New user:",e.toKey());const r=await Jf(t.localStore,e);t.currentUser=e,function(i,a){i.mu.forEach(c=>{c.forEach(u=>{u.reject(new F(O.CANCELLED,a))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ds(t,r.Ls)}}function LA(n,e){const t=H(n),r=t.Au.get(e);if(r&&r.hu)return Q().add(r.key);{let s=Q();const i=t.Iu.get(e);if(!i)return s;for(const a of i){const c=t.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function fp(n){const e=H(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=lp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=LA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xA.bind(null,e),e.Pu.H_=_A.bind(null,e.eventManager),e.Pu.yu=EA.bind(null,e.eventManager),e}function MA(n){const e=H(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=NA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=OA.bind(null,e),e}class _i{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Bi(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Fv(this.persistence,new Vv,e.initialUser,this.serializer)}Cu(e){return new Qf(Ya.mi,this.serializer)}Du(e){return new zv}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_i.provider={build:()=>new _i};class FA extends _i{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Z(this.persistence.referenceDelegate instanceof gi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Tv(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ne.withCacheSize(this.cacheSizeBytes):Ne.DEFAULT;return new Qf(r=>gi.mi(r,t),this.serializer)}}class Ta{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ih(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=VA.bind(null,this.syncEngine),await fA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new mA}()}createDatastore(e){const t=Bi(e.databaseInfo.databaseId),r=function(i){return new Jv(i)}(e.databaseInfo);return function(i,a,c,u){return new eA(i,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new nA(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>ih(this.syncEngine,t,0),function(){return Zu.v()?new Zu:new Wv}())}createSyncEngine(e,t){return function(s,i,a,c,u,h,f){const m=new AA(s,i,a,c,u,h);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=H(s);L(wn,"RemoteStore shutting down."),i.Ea.add(5),await hs(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Ta.provider={build:()=>new Ta};/**
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
 */class UA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ct("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const tn="FirestoreClient";class jA{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=be.UNAUTHENTICATED,this.clientId=Fa.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{L(tn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(L(tn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ic(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Vo(n,e){n.asyncQueue.verifyOperationInProgress(),L(tn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Jf(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function ah(n,e){n.asyncQueue.verifyOperationInProgress();const t=await BA(n);L(tn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>th(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>th(e.remoteStore,s)),n._onlineComponents=e}async function BA(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L(tn,"Using user provided OfflineComponentProvider");try{await Vo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===O.FAILED_PRECONDITION||s.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Qn("Error using user provided cache. Falling back to memory cache: "+t),await Vo(n,new _i)}}else L(tn,"Using default OfflineComponentProvider"),await Vo(n,new FA(void 0));return n._offlineComponents}async function pp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L(tn,"Using user provided OnlineComponentProvider"),await ah(n,n._uninitializedComponentsProvider._online)):(L(tn,"Using default OnlineComponentProvider"),await ah(n,new Ta))),n._onlineComponents}function $A(n){return pp(n).then(e=>e.syncEngine)}async function qA(n){const e=await pp(n),t=e.eventManager;return t.onListen=bA.bind(null,e.syncEngine),t.onUnlisten=CA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=SA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=PA.bind(null,e.syncEngine),t}function HA(n,e,t={}){const r=new Gt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,h){const f=new UA({next:T=>{f.Nu(),a.enqueueAndForget(()=>yA(i,m));const x=T.docs.has(c);!x&&T.fromCache?h.reject(new F(O.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&T.fromCache&&u&&u.source==="server"?h.reject(new F(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(T)},error:T=>h.reject(T)}),m=new TA(za(c.path),f,{includeMetadataChanges:!0,qa:!0});return gA(i,m)}(await qA(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function mp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const ch=new Map;/**
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
 */const gp="firestore.googleapis.com",lh=!0;class uh{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new F(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=gp,this.ssl=lh}else this.host=e.host,this.ssl=e.ssl??lh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Gf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<_v)throw new F(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mp(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new F(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new F(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new F(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class lc{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new F(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Hw;switch(r.type){case"firstParty":return new Gw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=ch.get(t);r&&(L("ComponentProvider","Removing Datastore"),ch.delete(t),r.terminate())}(this),Promise.resolve()}}function zA(n,e,t,r={}){var h;n=zr(n,lc);const s=rr(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(ad(`https://${c}`),cd("Firestore",!0)),i.host!==gp&&i.host!==c&&Qn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:c,ssl:s,emulatorOptions:r};if(!Qt(u,a)&&(n._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=be.MOCK_USER;else{f=Qy(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new F(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new be(T)}n._authCredentials=new zw(new af(f,m))}}/**
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
 */class uc{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new uc(this.firestore,e,this._query)}}class _e{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _e(this.firestore,e,this._key)}toJSON(){return{type:_e._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(cs(t,_e._jsonSchema))return new _e(e,r||null,new U(ie.fromString(t.referencePath)))}}_e._jsonSchemaVersion="firestore/documentReference/1.0",_e._jsonSchema={type:de("string",_e._jsonSchemaVersion),referencePath:de("string")};class Xr extends uc{constructor(e,t,r){super(e,t,za(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _e(this.firestore,null,new U(e))}withConverter(e){return new Xr(this.firestore,e,this._path)}}function Lo(n,e,...t){if(n=we(n),arguments.length===1&&(e=Fa.newId()),eI("doc","path",e),n instanceof lc){const r=ie.fromString(e,...t);return Au(r),new _e(n,null,new U(r))}{if(!(n instanceof _e||n instanceof Xr))throw new F(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ie.fromString(e,...t));return Au(r),new _e(n.firestore,n instanceof Xr?n.converter:null,new U(r))}}/**
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
 */const hh="AsyncQueue";class dh{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Xf(this,"async_queue_retry"),this._c=()=>{const r=Do();r&&L(hh,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Do();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Do();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Gt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!cr(e))throw e;L(hh,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Ct("INTERNAL UNHANDLED ERROR: ",fh(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=sc.createAndSchedule(this,e,t,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&$(47125,{Pc:fh(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function fh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class hc extends lc{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new dh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new dh(e),this._firestoreClient=void 0,await e}}}function WA(n,e){const t=typeof n=="object"?n:Ca(),r=typeof n=="string"?n:li,s=bn(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Ky("firestore");i&&zA(s,...i)}return s}function yp(n){if(n._terminated)throw new F(O.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||KA(n),n._firestoreClient}function KA(n){var r,s,i;const e=n._freezeSettings(),t=function(c,u,h,f){return new dI(c,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,mp(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new jA(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class We{constructor(e){this._byteString=e}static fromBase64String(e){try{return new We(Ie.fromBase64String(e))}catch(t){throw new F(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new We(Ie.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:We._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(cs(e,We._jsonSchema))return We.fromBase64String(e.bytes)}}We._jsonSchemaVersion="firestore/bytes/1.0",We._jsonSchema={type:de("string",We._jsonSchemaVersion),bytes:de("string")};/**
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
 */class dc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new F(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Te(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class _p{constructor(e){this._methodName=e}}/**
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
 */class dt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new F(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new F(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return G(this._lat,e._lat)||G(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:dt._jsonSchemaVersion}}static fromJSON(e){if(cs(e,dt._jsonSchema))return new dt(e.latitude,e.longitude)}}dt._jsonSchemaVersion="firestore/geoPoint/1.0",dt._jsonSchema={type:de("string",dt._jsonSchemaVersion),latitude:de("number"),longitude:de("number")};/**
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
 */class ft{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ft._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(cs(e,ft._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new ft(e.vectorValues);throw new F(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ft._jsonSchemaVersion="firestore/vectorValue/1.0",ft._jsonSchema={type:de("string",ft._jsonSchemaVersion),vectorValues:de("object")};/**
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
 */const GA=/^__.*__$/;class QA{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Cn(e,this.data,this.fieldMask,t,this.fieldTransforms):new ls(e,this.data,t,this.fieldTransforms)}}function Ep(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $(40011,{Ac:n})}}class fc{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new fc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ei(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Ep(this.Ac)&&GA.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class JA{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Bi(e)}Cc(e,t,r,s=!1){return new fc({Ac:e,methodName:t,Dc:r,path:Te.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function YA(n){const e=n._freezeSettings(),t=Bi(n._databaseId);return new JA(n._databaseId,!!e.ignoreUndefinedProperties,t)}function XA(n,e,t,r,s,i={}){const a=n.Cc(i.merge||i.mergeFields?2:0,e,t,s);vp("Data must be an object, but it was:",a,r);const c=wp(r,a);let u,h;if(i.merge)u=new Xe(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const T=ZA(e,m,t);if(!a.contains(T))throw new F(O.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);t0(f,T)||f.push(T)}u=new Xe(f),h=a.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=a.fieldTransforms;return new QA(new ze(c),u,h)}function Tp(n,e){if(Ip(n=we(n)))return vp("Unsupported field value:",e,n),wp(n,e);if(n instanceof _p)return function(r,s){if(!Ep(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let u=Tp(c,s.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=we(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return LI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=se.fromDate(r);return{timestampValue:mi(s.serializer,i)}}if(r instanceof se){const i=new se(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:mi(s.serializer,i)}}if(r instanceof dt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof We)return{bytesValue:Bf(s.serializer,r._byteString)};if(r instanceof _e){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Qa(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ft)return function(a,c){return{mapValue:{fields:{[gf]:{stringValue:yf},[ui]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.Sc("VectorValues must only contain numeric values.");return Wa(c.serializer,h)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Ua(r)}`)}(n,e)}function wp(n,e){const t={};return uf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Sn(n,(r,s)=>{const i=Tp(s,e.mc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Ip(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof se||n instanceof dt||n instanceof We||n instanceof _e||n instanceof _p||n instanceof ft)}function vp(n,e,t){if(!Ip(t)||!cf(t)){const r=Ua(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function ZA(n,e,t){if((e=we(e))instanceof dc)return e._internalPath;if(typeof e=="string")return Ap(n,e);throw Ei("Field path arguments must be of type string or ",n,!1,void 0,t)}const e0=new RegExp("[~\\*/\\[\\]]");function Ap(n,e,t){if(e.search(e0)>=0)throw Ei(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new dc(...e.split("."))._internalPath}catch{throw Ei(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ei(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new F(O.INVALID_ARGUMENT,c+n+u)}function t0(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class bp{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new n0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Sp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class n0 extends bp{data(){return super.data()}}function Sp(n,e){return typeof e=="string"?Ap(n,e):e instanceof dc?e._internalPath:e._delegate._internalPath}class r0{convertValue(e,t="none"){switch(Zt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Xt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw $(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Sn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[ui].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>ue(a.doubleValue));return new ft(t)}convertGeoPoint(e){return new dt(ue(e.latitude),ue(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Di(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Kr(e));default:return null}}convertTimestamp(e){const t=Yt(e);return new se(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ie.fromString(e);Z(Kf(r),9688,{name:e});const s=new Gr(r.get(1),r.get(3)),i=new U(r.popFirst(5));return s.isEqual(t)||Ct(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function s0(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Dr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gn extends bp{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Js(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Sp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new F(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=gn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}gn._jsonSchemaVersion="firestore/documentSnapshot/1.0",gn._jsonSchema={type:de("string",gn._jsonSchemaVersion),bundleSource:de("string","DocumentSnapshot"),bundleName:de("string"),bundle:de("string")};class Js extends gn{data(e={}){return super.data(e)}}class Br{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Dr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Js(this._firestore,this._userDataWriter,r.key,r,new Dr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new F(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const u=new Js(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Dr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new Js(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Dr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:i0(c.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new F(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Br._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Fa.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function i0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $(61501,{type:n})}}/**
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
 */function o0(n){n=zr(n,_e);const e=zr(n.firestore,hc);return HA(yp(e),n._key).then(t=>l0(e,n,t))}Br._jsonSchemaVersion="firestore/querySnapshot/1.0",Br._jsonSchema={type:de("string",Br._jsonSchemaVersion),bundleSource:de("string","QuerySnapshot"),bundleName:de("string"),bundle:de("string")};class a0 extends r0{constructor(e){super(),this.firestore=e}convertBytes(e){return new We(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new _e(this.firestore,null,t)}}function ph(n,e,t){n=zr(n,_e);const r=zr(n.firestore,hc),s=s0(n.converter,e,t);return c0(r,[XA(YA(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,bt.none())])}function c0(n,e){return function(r,s){const i=new Gt;return r.asyncQueue.enqueueAndForget(async()=>kA(await $A(r),s,i)),i.promise}(yp(n),e)}function l0(n,e,t){const r=t.docs.get(e._key),s=new a0(n);return new gn(n,s,e._key,r,new Dr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){or=s})(sr),pt(new Ze("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new hc(new Ww(r.getProvider("auth-internal")),new Qw(a,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new F(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gr(h.options.projectId,f)}(a,s),a);return i={useFetchStreams:t,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Ke(Tu,wu,e),Ke(Tu,wu,"esm2020")})();var u0="firebase",h0="12.3.0";/**
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
 */Ke(u0,h0,"app");const Rp="@firebase/installations",pc="0.6.19";/**
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
 */const Cp=1e4,Pp=`w:${pc}`,kp="FIS_v2",d0="https://firebaseinstallations.googleapis.com/v1",f0=60*60*1e3,p0="installations",m0="Installations";/**
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
 */const g0={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},In=new An(p0,m0,g0);function xp(n){return n instanceof nt&&n.code.includes("request-failed")}/**
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
 */function Np({projectId:n}){return`${d0}/projects/${n}/installations`}function Op(n){return{token:n.token,requestStatus:2,expiresIn:_0(n.expiresIn),creationTime:Date.now()}}async function Dp(n,e){const r=(await e.json()).error;return In.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Vp({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function y0(n,{refreshToken:e}){const t=Vp(n);return t.append("Authorization",E0(e)),t}async function Lp(n){const e=await n();return e.status>=500&&e.status<600?n():e}function _0(n){return Number(n.replace("s","000"))}function E0(n){return`${kp} ${n}`}/**
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
 */async function T0({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Np(n),s=Vp(n),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={fid:t,authVersion:kp,appId:n.appId,sdkVersion:Pp},c={method:"POST",headers:s,body:JSON.stringify(a)},u=await Lp(()=>fetch(r,c));if(u.ok){const h=await u.json();return{fid:h.fid||t,registrationStatus:2,refreshToken:h.refreshToken,authToken:Op(h.authToken)}}else throw await Dp("Create Installation",u)}/**
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
 */function Mp(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function w0(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const I0=/^[cdef][\w-]{21}$/,wa="";function v0(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=A0(n);return I0.test(t)?t:wa}catch{return wa}}function A0(n){return w0(n).substr(0,22)}/**
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
 */function Hi(n){return`${n.appName}!${n.appId}`}/**
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
 */const Fp=new Map;function Up(n,e){const t=Hi(n);jp(t,e),b0(t,e)}function jp(n,e){const t=Fp.get(n);if(t)for(const r of t)r(e)}function b0(n,e){const t=S0();t&&t.postMessage({key:n,fid:e}),R0()}let fn=null;function S0(){return!fn&&"BroadcastChannel"in self&&(fn=new BroadcastChannel("[Firebase] FID Change"),fn.onmessage=n=>{jp(n.data.key,n.data.fid)}),fn}function R0(){Fp.size===0&&fn&&(fn.close(),fn=null)}/**
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
 */const C0="firebase-installations-database",P0=1,vn="firebase-installations-store";let Mo=null;function mc(){return Mo||(Mo=pd(C0,P0,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(vn)}}})),Mo}async function Ti(n,e){const t=Hi(n),s=(await mc()).transaction(vn,"readwrite"),i=s.objectStore(vn),a=await i.get(t);return await i.put(e,t),await s.done,(!a||a.fid!==e.fid)&&Up(n,e.fid),e}async function Bp(n){const e=Hi(n),r=(await mc()).transaction(vn,"readwrite");await r.objectStore(vn).delete(e),await r.done}async function zi(n,e){const t=Hi(n),s=(await mc()).transaction(vn,"readwrite"),i=s.objectStore(vn),a=await i.get(t),c=e(a);return c===void 0?await i.delete(t):await i.put(c,t),await s.done,c&&(!a||a.fid!==c.fid)&&Up(n,c.fid),c}/**
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
 */async function gc(n){let e;const t=await zi(n.appConfig,r=>{const s=k0(r),i=x0(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===wa?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function k0(n){const e=n||{fid:v0(),registrationStatus:0};return $p(e)}function x0(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(In.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=N0(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:O0(n)}:{installationEntry:e}}async function N0(n,e){try{const t=await T0(n,e);return Ti(n.appConfig,t)}catch(t){throw xp(t)&&t.customData.serverCode===409?await Bp(n.appConfig):await Ti(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function O0(n){let e=await mh(n.appConfig);for(;e.registrationStatus===1;)await Mp(100),e=await mh(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await gc(n);return r||t}return e}function mh(n){return zi(n,e=>{if(!e)throw In.create("installation-not-found");return $p(e)})}function $p(n){return D0(n)?{fid:n.fid,registrationStatus:0}:n}function D0(n){return n.registrationStatus===1&&n.registrationTime+Cp<Date.now()}/**
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
 */async function V0({appConfig:n,heartbeatServiceProvider:e},t){const r=L0(n,t),s=y0(n,t),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={installation:{sdkVersion:Pp,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(a)},u=await Lp(()=>fetch(r,c));if(u.ok){const h=await u.json();return Op(h)}else throw await Dp("Generate Auth Token",u)}function L0(n,{fid:e}){return`${Np(n)}/${e}/authTokens:generate`}/**
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
 */async function yc(n,e=!1){let t;const r=await zi(n.appConfig,i=>{if(!qp(i))throw In.create("not-registered");const a=i.authToken;if(!e&&U0(a))return i;if(a.requestStatus===1)return t=M0(n,e),i;{if(!navigator.onLine)throw In.create("app-offline");const c=B0(i);return t=F0(n,c),c}});return t?await t:r.authToken}async function M0(n,e){let t=await gh(n.appConfig);for(;t.authToken.requestStatus===1;)await Mp(100),t=await gh(n.appConfig);const r=t.authToken;return r.requestStatus===0?yc(n,e):r}function gh(n){return zi(n,e=>{if(!qp(e))throw In.create("not-registered");const t=e.authToken;return $0(t)?{...e,authToken:{requestStatus:0}}:e})}async function F0(n,e){try{const t=await V0(n,e),r={...e,authToken:t};return await Ti(n.appConfig,r),t}catch(t){if(xp(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Bp(n.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Ti(n.appConfig,r)}throw t}}function qp(n){return n!==void 0&&n.registrationStatus===2}function U0(n){return n.requestStatus===2&&!j0(n)}function j0(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+f0}function B0(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function $0(n){return n.requestStatus===1&&n.requestTime+Cp<Date.now()}/**
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
 */async function q0(n){const e=n,{installationEntry:t,registrationPromise:r}=await gc(e);return r?r.catch(console.error):yc(e).catch(console.error),t.fid}/**
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
 */async function H0(n,e=!1){const t=n;return await z0(t),(await yc(t,e)).token}async function z0(n){const{registrationPromise:e}=await gc(n);e&&await e}/**
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
 */function W0(n){if(!n||!n.options)throw Fo("App Configuration");if(!n.name)throw Fo("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Fo(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Fo(n){return In.create("missing-app-config-values",{valueName:n})}/**
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
 */const Hp="installations",K0="installations-internal",G0=n=>{const e=n.getProvider("app").getImmediate(),t=W0(e),r=bn(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Q0=n=>{const e=n.getProvider("app").getImmediate(),t=bn(e,Hp).getImmediate();return{getId:()=>q0(t),getToken:s=>H0(t,s)}};function J0(){pt(new Ze(Hp,G0,"PUBLIC")),pt(new Ze(K0,Q0,"PRIVATE"))}J0();Ke(Rp,pc);Ke(Rp,pc,"esm2020");/**
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
 */const wi="analytics",Y0="firebase_id",X0="origin",Z0=60*1e3,eb="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",_c="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ve=new Ci("@firebase/analytics");/**
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
 */const tb={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Fe=new An("analytics","Analytics",tb);/**
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
 */function nb(n){if(!n.startsWith(_c)){const e=Fe.create("invalid-gtag-resource",{gtagURL:n});return Ve.warn(e.message),""}return n}function zp(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function rb(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function sb(n,e){const t=rb("firebase-js-sdk-policy",{createScriptURL:nb}),r=document.createElement("script"),s=`${_c}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function ib(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function ob(n,e,t,r,s,i){const a=r[s];try{if(a)await e[a];else{const u=(await zp(t)).find(h=>h.measurementId===s);u&&await e[u.appId]}}catch(c){Ve.error(c)}n("config",s,i)}async function ab(n,e,t,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const c=await zp(t);for(const u of a){const h=c.find(m=>m.measurementId===u),f=h&&e[h.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",r,s||{})}catch(i){Ve.error(i)}}function cb(n,e,t,r){async function s(i,...a){try{if(i==="event"){const[c,u]=a;await ab(n,e,t,c,u)}else if(i==="config"){const[c,u]=a;await ob(n,e,t,r,c,u)}else if(i==="consent"){const[c,u]=a;n("consent",c,u)}else if(i==="get"){const[c,u,h]=a;n("get",c,u,h)}else if(i==="set"){const[c]=a;n("set",c)}else n(i,...a)}catch(c){Ve.error(c)}}return s}function lb(n,e,t,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=cb(i,n,e,t),{gtagCore:i,wrappedGtag:window[s]}}function ub(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(_c)&&t.src.includes(n))return t;return null}/**
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
 */const hb=30,db=1e3;class fb{constructor(e={},t=db){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Wp=new fb;function pb(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function mb(n){var a;const{appId:e,apiKey:t}=n,r={method:"GET",headers:pb(t)},s=eb.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let c="";try{const u=await i.json();(a=u.error)!=null&&a.message&&(c=u.error.message)}catch{}throw Fe.create("config-fetch-failed",{httpStatus:i.status,responseMessage:c})}return i.json()}async function gb(n,e=Wp,t){const{appId:r,apiKey:s,measurementId:i}=n.options;if(!r)throw Fe.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Fe.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new Eb;return setTimeout(async()=>{c.abort()},Z0),Kp({appId:r,apiKey:s,measurementId:i},a,c,e)}async function Kp(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=Wp){var c;const{appId:i,measurementId:a}=n;try{await yb(r,e)}catch(u){if(a)return Ve.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:i,measurementId:a};throw u}try{const u=await mb(n);return s.deleteThrottleMetadata(i),u}catch(u){const h=u;if(!_b(h)){if(s.deleteThrottleMetadata(i),a)return Ve.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:i,measurementId:a};throw u}const f=Number((c=h==null?void 0:h.customData)==null?void 0:c.httpStatus)===503?zl(t,s.intervalMillis,hb):zl(t,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:t+1};return s.setThrottleMetadata(i,m),Ve.debug(`Calling attemptFetch again in ${f} millis`),Kp(n,m,r,s)}}function yb(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(i),r(Fe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function _b(n){if(!(n instanceof nt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Eb{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Tb(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const i=await e,a={...r,send_to:i};n("event",t,a)}}/**
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
 */async function wb(){if(ud())try{await hd()}catch(n){return Ve.warn(Fe.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Ve.warn(Fe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Ib(n,e,t,r,s,i,a){const c=gb(n);c.then(T=>{t[T.measurementId]=T.appId,n.options.measurementId&&T.measurementId!==n.options.measurementId&&Ve.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${T.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(T=>Ve.error(T)),e.push(c);const u=wb().then(T=>{if(T)return r.getId()}),[h,f]=await Promise.all([c,u]);ub(i)||sb(i,h.measurementId),s("js",new Date);const m=(a==null?void 0:a.config)??{};return m[X0]="firebase",m.update=!0,f!=null&&(m[Y0]=f),s("config",h.measurementId,m),h.measurementId}/**
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
 */class vb{constructor(e){this.app=e}_delete(){return delete $r[this.app.options.appId],Promise.resolve()}}let $r={},yh=[];const _h={};let Uo="dataLayer",Ab="gtag",Eh,Gp,Th=!1;function bb(){const n=[];if(ld()&&n.push("This is a browser extension environment."),s_()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=Fe.create("invalid-analytics-context",{errorInfo:e});Ve.warn(t.message)}}function Sb(n,e,t){bb();const r=n.options.appId;if(!r)throw Fe.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Ve.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Fe.create("no-api-key");if($r[r]!=null)throw Fe.create("already-exists",{id:r});if(!Th){ib(Uo);const{wrappedGtag:i,gtagCore:a}=lb($r,yh,_h,Uo,Ab);Gp=i,Eh=a,Th=!0}return $r[r]=Ib(n,yh,_h,e,Eh,Uo,t),new vb(n)}function Rb(n=Ca()){n=we(n);const e=bn(n,wi);return e.isInitialized()?e.getImmediate():Cb(n)}function Cb(n,e={}){const t=bn(n,wi);if(t.isInitialized()){const s=t.getImmediate();if(Qt(e,t.getOptions()))return s;throw Fe.create("already-initialized")}return t.initialize({options:e})}function Pb(n,e,t,r){n=we(n),Tb(Gp,$r[n.app.options.appId],e,t,r).catch(s=>Ve.error(s))}const wh="@firebase/analytics",Ih="0.10.18";function kb(){pt(new Ze(wi,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Sb(r,s,t)},"PUBLIC")),pt(new Ze("analytics-internal",n,"PRIVATE")),Ke(wh,Ih),Ke(wh,Ih,"esm2020");function n(e){try{const t=e.getProvider(wi).getImmediate();return{logEvent:(r,s,i)=>Pb(t,r,s,i)}}catch(t){throw Fe.create("interop-component-reg-failed",{reason:t})}}}kb();const xb={apiKey:"AIzaSyCUn6sq5qode0tO73tfDgXneg03_CobxjI",authDomain:"ride-share-56610.firebaseapp.com",projectId:"ride-share-56610",storageBucket:"ride-share-56610.firebasestorage.app",messagingSenderId:"1074725088115",appId:"1:1074725088115:web:9d53e6c7b24a497cf3b306",measurementId:"G-XN91B7PKY4"},Ec=md(xb),Ft=$w(Ec),Ys=WA(Ec);typeof window<"u"&&Rb(Ec);const Nb=Object.freeze(Object.defineProperty({__proto__:null,auth:Ft,db:Ys},Symbol.toStringTag,{value:"Module"}));class Vs{static async signIn(e,t){try{const s=(await AT(Ft,e,t)).user;return await this.getUserProfile(s.uid)}catch(r){throw new Error(this.getErrorMessage(r.code))}}static async register(e,t,r,s,i="renter",a){try{const u=(await vT(Ft,e,t)).user;await RT(u,{displayName:`${r} ${s}`}),await bT(u);const h={uid:u.uid,email:u.email,firstName:r,lastName:s,role:i,phone:a||"",isEmailVerified:!1,createdAt:new Date().toISOString()};return await ph(Lo(Ys,"users",u.uid),h),h}catch(c){throw new Error(this.getErrorMessage(c.code))}}static async signOut(){try{await xT(Ft)}catch{throw new Error("Failed to sign out")}}static async getCurrentUser(){const e=Ft.currentUser;if(!e)return null;try{return await this.getUserProfile(e.uid)}catch(t){return console.error("Error getting current user:",t),null}}static async getUserProfile(e){try{const t=await o0(Lo(Ys,"users",e));if(!t.exists())throw new Error("User profile not found");return t.data()}catch{throw new Error("Failed to get user profile")}}static async updateUserProfile(e,t){try{await ph(Lo(Ys,"users",e),t,{merge:!0})}catch{throw new Error("Failed to update user profile")}}static async resetPassword(e){try{await IT(Ft,e)}catch(t){throw new Error(this.getErrorMessage(t.code))}}static onAuthStateChanged(e){return kT(Ft,async t=>{if(t)try{const r=await this.getUserProfile(t.uid);e(r)}catch(r){console.error("Error getting user profile:",r),e(null)}else e(null)})}static async getIdToken(){const e=Ft.currentUser;if(!e)return null;try{return await e.getIdToken()}catch(t){return console.error("Error getting ID token:",t),null}}static getErrorMessage(e){return{"auth/user-not-found":"No user found with this email address.","auth/wrong-password":"Incorrect password.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password should be at least 6 characters.","auth/invalid-email":"Invalid email address.","auth/user-disabled":"This account has been disabled.","auth/too-many-requests":"Too many failed attempts. Please try again later.","auth/network-request-failed":"Network error. Please check your connection."}[e]||"An error occurred. Please try again."}}const Qp=J.createContext(void 0),Ob=({children:n})=>{const[e,t]=J.useState(null),[r,s]=J.useState(!0),[i,a]=J.useState(localStorage.getItem("authMethod")||"firebase");J.useEffect(()=>{c()},[i]);const c=async()=>{s(!0);try{if(i==="firebase")return;{if(!localStorage.getItem("accessToken")){t(null);return}const D=await Cs.get("/auth/me");t(D.data.user),localStorage.setItem("userRole",D.data.user.role)}}catch{t(null),i==="express"&&(localStorage.removeItem("accessToken"),localStorage.removeItem("userRole"))}finally{s(!1)}};J.useEffect(()=>{if(i==="firebase"){const R=Vs.onAuthStateChanged(D=>{t(D?{uid:D.uid,email:D.email,firstName:D.firstName,lastName:D.lastName,role:D.role,phone:D.phone,isEmailVerified:D.isEmailVerified}:null),s(!1)});return()=>R()}},[i]);const C={user:e,login:async(R,D)=>{if(i==="firebase"){const M=await Vs.signIn(R,D),j={uid:M.uid,email:M.email,firstName:M.firstName,lastName:M.lastName,role:M.role,phone:M.phone,isEmailVerified:M.isEmailVerified};t(j),localStorage.setItem("userRole",M.role)}else{const M=await Cs.post("/auth/login",{email:R,password:D});t(M.data.user),localStorage.setItem("accessToken",M.data.accessToken),localStorage.setItem("userRole",M.data.user.role)}},register:async R=>{if(i==="firebase"){const D=await Vs.register(R.email,R.password,R.firstName,R.lastName,R.role,R.phone);t({uid:D.uid,email:D.email,firstName:D.firstName,lastName:D.lastName,role:D.role,phone:D.phone,isEmailVerified:D.isEmailVerified})}else{const D=await Cs.post("/auth/register",R);t(D.data.user),localStorage.setItem("accessToken",D.data.accessToken),localStorage.setItem("userRole",D.data.user.role)}},logout:async()=>{i==="firebase"?await Vs.signOut():(t(null),localStorage.removeItem("accessToken"),localStorage.removeItem("userRole"),Cs.post("/auth/logout"))},loading:r,isAdmin:()=>(e==null?void 0:e.role)==="admin",isHost:()=>(e==null?void 0:e.role)==="host",isRenter:()=>(e==null?void 0:e.role)==="renter",hasRole:R=>(e==null?void 0:e.role)===R,authMethod:i,setAuthMethod:R=>{a(R),localStorage.setItem("authMethod",R)}};return g.jsx(Qp.Provider,{value:C,children:n})},Jp=J.createContext(void 0),Db=({children:n})=>{const[e,t]=J.useState(!1);J.useEffect(()=>{const i=localStorage.getItem("theme");t(i?i==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches)},[]),J.useEffect(()=>{localStorage.setItem("theme",e?"dark":"light"),e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[e]);const s={isDark:e,toggleTheme:()=>{t(!e)}};return g.jsx(Jp.Provider,{value:s,children:n})},Yp=()=>{const n=J.useContext(Qp);if(n===void 0)throw new Error("useAuth must be used within an AuthProvider");return n},Vb=()=>{const n=J.useContext(Jp);if(n===void 0)throw new Error("useTheme must be used within a ThemeProvider");return n},Lb=()=>{const[n,e]=J.useState(!1),[t,r]=J.useState([{id:"1",text:"Hi! I'm your RideShare SA assistant. How can I help you today?",isUser:!1,timestamp:new Date}]),[s,i]=J.useState(""),[a,c]=J.useState(!1),u=J.useRef(null),h=()=>{var A;(A=u.current)==null||A.scrollIntoView({behavior:"smooth"})};J.useEffect(()=>{h()},[t]);const f=A=>{const C=A.toLowerCase();return C.includes("hello")||C.includes("hi")||C.includes("hey")?"Hello! 👋 Welcome to RideShare SA! I'm here to help you with bookings, listings, and any questions you might have. What can I assist you with today?":C.includes("book")||C.includes("rent")||C.includes("reserve")?`Great! To book a vehicle: 🚗

1. Go to "Browse Rentals" in the menu
2. Search by location and dates
3. Filter by vehicle type and features
4. Click "Book Now" on your chosen vehicle
5. Complete the booking process

Need help with any of these steps?`:C.includes("list")||C.includes("host")||C.includes("earn")?`Perfect! To list your vehicle and start earning: 💰

1. Click "List Your Vehicle" in the menu
2. Create a host account (if you haven't already)
3. Add vehicle details, photos, and description
4. Set your availability and pricing
5. Submit for approval

Our hosts typically earn R200-800 per day!`:C.includes("price")||C.includes("cost")||C.includes("expensive")?`Our pricing is competitive and varies by vehicle: 💵

• Economy cars: R150-300/day
• SUVs: R300-500/day
• Luxury vehicles: R500+/day
• Bakkies: R200-400/day

All prices include basic insurance. You can see exact pricing when browsing vehicles!`:C.includes("safe")||C.includes("insurance")||C.includes("secure")?`Safety is our #1 priority! 🛡️

✅ All vehicles are fully insured
✅ Hosts are verified and background checked
✅ 24/7 support team
✅ Secure payment processing
✅ Vehicle condition checks

You can read reviews and safety guidelines before booking.`:C.includes("pay")||C.includes("payment")||C.includes("eft")||C.includes("card")?`We accept multiple payment methods: 💳

• Credit/Debit cards
• EFT transfers
• Payfast (South African)
• Bank transfers

Payment is 100% secure and processed when you confirm your booking. No hidden fees!`:C.includes("where")||C.includes("location")||C.includes("city")?`We operate across South Africa! 🇿🇦

Major cities:
• Cape Town
• Johannesburg
• Durban
• Pretoria
• Port Elizabeth
• Bloemfontein

Use the location filter to find vehicles near you!`:C.includes("help")||C.includes("support")||C.includes("problem")?`I'm here to help! 🤝

For additional support:
• FAQ page: /faq
• Email: support@rideshare-sa.co.za
• Phone: +27 21 123 4567
• Live chat: Right here!

What specific issue can I help you with?`:C.includes("contact support")||C.includes("contact")?`Here's how to reach our support team: 📞

• Email: support@rideshare-sa.co.za
• Phone: +27 21 123 4567
• Live chat: Available 24/7 (that's me!)
• FAQ: Visit /faq for common questions

Is there something specific I can help you with right now?`:`I understand you're asking about: "${A}" 🤔

I can help with:
• Booking vehicles
• Listing your car
• Pricing information
• Safety & insurance
• Payment methods
• Locations
• General support

What would you like to know more about?`},m=async A=>{const C=A||s.trim();if(!C)return;const R={id:Date.now().toString(),text:C,isUser:!0,timestamp:new Date};r(D=>[...D,R]),i(""),c(!0),setTimeout(()=>{const D={id:(Date.now()+1).toString(),text:f(C),isUser:!1,timestamp:new Date};r(M=>[...M,D]),c(!1)},1e3+Math.random()*1e3)},T=A=>{A.key==="Enter"&&!A.shiftKey&&(A.preventDefault(),m())},x=["How do I book a vehicle?","How do I list my car?","What are your prices?","Is it safe?","Contact support"];return g.jsxs(g.Fragment,{children:[g.jsx(Ut.button,{onClick:()=>e(!n),className:"fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300",whileHover:{scale:1.1},whileTap:{scale:.95},"aria-label":"Open chat",children:g.jsx(_l,{mode:"wait",children:n?g.jsx(Ut.svg,{initial:{rotate:-90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:90,opacity:0},className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})},"close"):g.jsx(Ut.svg,{initial:{rotate:90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:-90,opacity:0},className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})},"chat")})}),g.jsx(_l,{children:n&&g.jsxs(Ut.div,{initial:{opacity:0,y:20,scale:.8},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:20,scale:.8},transition:{duration:.3,type:"spring",damping:25,stiffness:500},className:"fixed bottom-24 right-6 w-80 h-96 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 flex flex-col",children:[g.jsxs("div",{className:"bg-blue-600 text-white p-4 rounded-t-xl flex items-center justify-between",children:[g.jsxs("div",{className:"flex items-center",children:[g.jsx("div",{className:"w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3",children:g.jsx("span",{className:"text-sm",children:"🤖"})}),g.jsxs("div",{children:[g.jsx("h3",{className:"font-semibold",children:"RideShare Assistant"}),g.jsx("p",{className:"text-xs text-blue-100",children:"Online now"})]})]}),g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsx("button",{onClick:()=>{r([{id:"1",text:"Hi! I'm your RideShare SA assistant. How can I help you today?",isUser:!1,timestamp:new Date}])},className:"text-white hover:text-blue-200 transition-colors p-1",title:"Start new conversation",children:g.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})})}),g.jsx("button",{onClick:()=>e(!1),className:"text-white hover:text-blue-200 transition-colors p-1",children:g.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]})]}),g.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:[t.map(A=>g.jsx(Ut.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:`flex ${A.isUser?"justify-end":"justify-start"}`,children:g.jsxs("div",{className:`max-w-xs px-4 py-2 rounded-lg ${A.isUser?"bg-blue-600 text-white":"bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"}`,children:[g.jsx("div",{className:"text-sm whitespace-pre-line",children:A.text}),g.jsx("p",{className:"text-xs opacity-70 mt-1",children:A.timestamp.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]})},A.id)),a&&g.jsx(Ut.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"flex justify-start",children:g.jsx("div",{className:"bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg",children:g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsxs("div",{className:"flex space-x-1",children:[g.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce"}),g.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"0.1s"}}),g.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"0.2s"}})]}),g.jsx("span",{className:"text-xs text-gray-500",children:"RideShare Assistant is typing..."})]})})}),g.jsx("div",{ref:u})]}),t.length===1&&g.jsxs("div",{className:"px-4 pb-2",children:[g.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mb-2",children:"Quick questions:"}),g.jsx("div",{className:"flex flex-wrap gap-2",children:x.map((A,C)=>g.jsx("button",{onClick:()=>m(A),className:"text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-1 rounded-full transition-colors",children:A},C))})]}),g.jsx("div",{className:"p-4 border-t border-gray-200 dark:border-gray-700",children:g.jsxs("div",{className:"flex space-x-2",children:[g.jsx("input",{type:"text",value:s,onChange:A=>i(A.target.value),onKeyPress:T,placeholder:"Type your message...",className:"flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white text-sm"}),g.jsx("button",{onClick:()=>m(),disabled:!s.trim()||a,className:"bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center",children:a?g.jsx("div",{className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"}):g.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 19l9 2-9-18-9 18 9-2zm0 0v-8"})})})]})})]})})]})},$e=({name:n,size:e="md",className:t=""})=>{const r={sm:"w-4 h-4",md:"w-5 h-5",lg:"w-6 h-6"},s={Home:g.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})}),Search:g.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),Car:g.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7v8a2 2 0 002 2h4a2 2 0 002-2V7M8 7a2 2 0 00-2 2v6a2 2 0 002 2M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2m-6 0h6"})}),Info:g.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),Phone:g.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})}),User:g.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),Logout:g.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})}),Login:g.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"})}),Plus:g.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v16m8-8H4"})}),Menu:g.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})}),Sun:g.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}),Moon:g.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})};return g.jsx(g.Fragment,{children:s[n]||null})},Qe=({children:n})=>{const{user:e,logout:t}=Yp(),{isDark:r,toggleTheme:s}=Vb(),[i,a]=J.useState(!1),c=vh(),u=f=>c.pathname===f,h=[{name:"Home",path:"/",icon:"Home"},{name:"Browse",path:"/search",icon:"Search"},{name:"Host",path:"/dashboard/host",icon:"Car"},{name:"About",path:"/about",icon:"Info"},{name:"Contact",path:"/contact",icon:"Phone"}];return g.jsxs("div",{className:"min-h-screen",children:[g.jsx("header",{className:"fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4",children:g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsx(xe,{to:"/",className:"flex items-center hover:opacity-80 transition-all duration-300",children:g.jsx("img",{src:"/logo.png",alt:"RideShare SA Logo",className:"h-[60px] w-auto drop-shadow-lg"})}),g.jsx("nav",{className:"flex items-center",children:g.jsxs("div",{className:"bg-white/25 backdrop-blur-md border border-white/20 rounded-full shadow-xl px-6 py-3",children:[g.jsxs("div",{className:"flex items-center justify-center h-[60px] px-6",children:[g.jsx("div",{className:"hidden md:flex items-center space-x-2",children:h.map(f=>g.jsxs(xe,{to:f.path,className:`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${u(f.path)?"glass-button-primary text-white":"glass-button text-white/80 hover:text-white"}`,children:[g.jsx($e,{name:f.icon,size:"sm"}),g.jsx("span",{children:f.name})]},f.path))}),g.jsxs("div",{className:"flex items-center space-x-2 ml-4",children:[g.jsx("button",{onClick:s,className:"glass-button p-2 text-white/80 hover:text-white transition-all duration-300",title:r?"Switch to light mode":"Switch to dark mode",children:g.jsx($e,{name:r?"Sun":"Moon",size:"sm"})}),e?g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsxs(xe,{to:"/dashboard",className:`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${u("/dashboard")||c.pathname.startsWith("/dashboard")?"glass-button-primary text-white":"glass-button text-white/80 hover:text-white"}`,children:[g.jsx($e,{name:"User",size:"sm"}),g.jsx("span",{className:"hidden sm:block",children:"Dashboard"})]}),g.jsxs("button",{onClick:t,className:"glass-button flex items-center space-x-2 px-3 py-2 text-white/80 hover:text-white transition-all duration-300",children:[g.jsx($e,{name:"Logout",size:"sm"}),g.jsx("span",{className:"hidden sm:block",children:"Logout"})]})]}):g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsxs(xe,{to:"/login",className:`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${u("/login")?"glass-button-primary text-white":"glass-button text-white/80 hover:text-white"}`,children:[g.jsx($e,{name:"Login",size:"sm"}),g.jsx("span",{className:"hidden sm:block",children:"Login"})]}),g.jsxs(xe,{to:"/register",className:"btn-primary flex items-center space-x-2 px-4 py-2",children:[g.jsx($e,{name:"Plus",size:"sm"}),g.jsx("span",{className:"hidden sm:block",children:"Sign Up"})]})]}),g.jsx("button",{onClick:()=>a(!i),className:"md:hidden glass-button p-2 text-white/80 hover:text-white transition-all duration-300",children:g.jsx($e,{name:"Menu",size:"sm"})})]})]}),i&&g.jsx("div",{className:"md:hidden border-t border-white/20 mt-2 pt-4 pb-4",children:g.jsxs("div",{className:"space-y-2",children:[h.map(f=>g.jsxs(xe,{to:f.path,onClick:()=>a(!1),className:`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${u(f.path)?"glass-button-primary text-white":"glass-button text-white/80 hover:text-white"}`,children:[g.jsx($e,{name:f.icon,size:"sm"}),g.jsx("span",{children:f.name})]},f.path)),e?g.jsxs(g.Fragment,{children:[g.jsxs(xe,{to:"/dashboard",onClick:()=>a(!1),className:`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${u("/dashboard")||c.pathname.startsWith("/dashboard")?"glass-button-primary text-white":"glass-button text-white/80 hover:text-white"}`,children:[g.jsx($e,{name:"User",size:"sm"}),g.jsx("span",{children:"Dashboard"})]}),g.jsxs("button",{onClick:()=>{t(),a(!1)},className:"glass-button flex items-center space-x-3 w-full px-4 py-3 text-white/80 hover:text-white transition-all duration-300",children:[g.jsx($e,{name:"Logout",size:"sm"}),g.jsx("span",{children:"Logout"})]})]}):g.jsxs(g.Fragment,{children:[g.jsxs(xe,{to:"/login",onClick:()=>a(!1),className:`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${u("/login")?"glass-button-primary text-white":"glass-button text-white/80 hover:text-white"}`,children:[g.jsx($e,{name:"Login",size:"sm"}),g.jsx("span",{children:"Login"})]}),g.jsxs(xe,{to:"/register",onClick:()=>a(!1),className:"btn-primary flex items-center space-x-3 px-4 py-3",children:[g.jsx($e,{name:"Plus",size:"sm"}),g.jsx("span",{children:"Sign Up"})]})]})]})})]})})]})}),g.jsx("main",{className:"pt-20",children:n}),g.jsx("footer",{className:"bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[g.jsxs("div",{className:"md:col-span-2",children:[g.jsx("div",{className:"flex items-center mb-6",children:g.jsx("img",{src:"/logo.png",alt:"RideShare SA Logo",className:"h-12 w-auto"})}),g.jsx("p",{className:"text-gray-300 mb-6 max-w-md",children:"South Africa's premier peer-to-peer vehicle rental platform. Connect with trusted hosts and renters across the country."}),g.jsxs("div",{className:"flex space-x-4",children:[g.jsx("a",{href:"#",className:"text-gray-400 hover:text-white transition-colors transform hover:scale-110","aria-label":"Facebook",children:g.jsx("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})}),g.jsx("a",{href:"#",className:"text-gray-400 hover:text-white transition-colors transform hover:scale-110","aria-label":"Twitter",children:g.jsx("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{d:"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"})})}),g.jsx("a",{href:"#",className:"text-gray-400 hover:text-white transition-colors transform hover:scale-110","aria-label":"Instagram",children:g.jsx("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{d:"M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"})})}),g.jsx("a",{href:"#",className:"text-gray-400 hover:text-white transition-colors transform hover:scale-110","aria-label":"LinkedIn",children:g.jsx("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})})]})]}),g.jsxs("div",{children:[g.jsx("h4",{className:"text-lg font-semibold mb-4 text-white",children:"Quick Links"}),g.jsxs("ul",{className:"space-y-2",children:[g.jsx("li",{children:g.jsx(xe,{to:"/",className:"text-gray-300 hover:text-white transition-colors text-sm",children:"Home"})}),g.jsx("li",{children:g.jsx(xe,{to:"/search",className:"text-gray-300 hover:text-white transition-colors text-sm",children:"Browse Vehicles"})}),g.jsx("li",{children:g.jsx(xe,{to:"/about",className:"text-gray-300 hover:text-white transition-colors text-sm",children:"About Us"})}),g.jsx("li",{children:g.jsx(xe,{to:"/contact",className:"text-gray-300 hover:text-white transition-colors text-sm",children:"Contact"})}),g.jsx("li",{children:g.jsx(xe,{to:"/faq",className:"text-gray-300 hover:text-white transition-colors text-sm",children:"FAQ"})})]})]}),g.jsxs("div",{children:[g.jsx("h4",{className:"text-lg font-semibold mb-4 text-white",children:"Support"}),g.jsxs("ul",{className:"space-y-2",children:[g.jsx("li",{children:g.jsx("a",{href:"#",className:"text-gray-300 hover:text-white transition-colors text-sm",children:"Help Center"})}),g.jsx("li",{children:g.jsx("a",{href:"#",className:"text-gray-300 hover:text-white transition-colors text-sm",children:"Safety Guidelines"})}),g.jsx("li",{children:g.jsx("a",{href:"#",className:"text-gray-300 hover:text-white transition-colors text-sm",children:"Terms of Service"})}),g.jsx("li",{children:g.jsx("a",{href:"#",className:"text-gray-300 hover:text-white transition-colors text-sm",children:"Privacy Policy"})}),g.jsx("li",{children:g.jsx("a",{href:"#",className:"text-gray-300 hover:text-white transition-colors text-sm",children:"Insurance"})})]})]})]}),g.jsx("div",{className:"border-t border-gray-700 mt-8 pt-8",children:g.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[g.jsx("p",{className:"text-gray-400 text-sm mb-4 md:mb-0",children:"© 2024 RideShare SA. All rights reserved. | Cape Town, South Africa"}),g.jsxs("div",{className:"flex items-center space-x-4 text-sm text-gray-400",children:[g.jsx("span",{children:"🔒 Secure Payments"}),g.jsx("span",{children:"🛡️ Insured Rentals"}),g.jsx("span",{children:"⭐ Trusted Platform"})]})]})})]})}),g.jsx(Lb,{})]})},Mb=({children:n,requiredRole:e,allowedRoles:t})=>{const{user:r,loading:s}=Yp(),i=vh();return s?g.jsx("div",{className:"min-h-screen flex items-center justify-center",children:g.jsx("div",{className:"animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"})}):r?e&&r.role!==e?g.jsx(yo,{to:"/unauthorized",replace:!0}):t&&!t.includes(r.role)?g.jsx(yo,{to:"/unauthorized",replace:!0}):g.jsx(g.Fragment,{children:n}):g.jsx(yo,{to:"/login",state:{from:i},replace:!0})},Fb=({size:n="md",text:e="Loading...",className:t=""})=>{const r={sm:"h-6 w-6",md:"h-12 w-12",lg:"h-16 w-16"};return g.jsxs("div",{className:`flex flex-col items-center justify-center min-h-screen ${t}`,children:[g.jsx(Ut.div,{className:`${r[n]} border-4 border-blue-200 border-t-blue-600 rounded-full`,animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"}}),e&&g.jsx(Ut.p,{className:"mt-4 text-gray-600 dark:text-gray-300",initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},children:e})]})},Ub=J.lazy(()=>Ue(()=>import("./Home-B_1rgP44.js"),__vite__mapDeps([0,1,2,3,4,5]))),jb=J.lazy(()=>Ue(()=>import("./Search-CUDH-Kdb.js"),__vite__mapDeps([6,1,2,3,4,7,8,5]))),Bb=J.lazy(()=>Ue(()=>import("./VehicleDetail-Bv0iTYh1.js"),__vite__mapDeps([9,1,2,3,5]))),$b=J.lazy(()=>Ue(()=>import("./About-CymwrAu1.js"),__vite__mapDeps([10,1,2,3,5]))),qb=J.lazy(()=>Ue(()=>import("./Contact-Dwd3A_vj.js"),__vite__mapDeps([11,1,2,3]))),Hb=J.lazy(()=>Ue(()=>import("./Dashboard-BM9IteAN.js"),__vite__mapDeps([12,1,2,3,7,5]))),zb=J.lazy(()=>Ue(()=>import("./Login-a4cnF0G8.js"),__vite__mapDeps([13,1,2,3,14,7,8,5]))),Wb=J.lazy(()=>Ue(()=>import("./Register-Dchmx0lJ.js"),__vite__mapDeps([15,1,2,3,14,7,8,5]))),Kb=J.lazy(()=>Ue(()=>import("./FAQ-C71gCbx_.js"),__vite__mapDeps([16,1,2]))),Gb=J.lazy(()=>Ue(()=>import("./SetupAdmin-DLbhEHdd.js"),__vite__mapDeps([17,1,2,3,5]))),Qb=J.lazy(()=>Ue(()=>import("./Unauthorized-ChESoKZR.js"),__vite__mapDeps([18,1,2,3]))),Jb=J.lazy(()=>Ue(()=>import("./NotFound-B9JScyaF.js"),__vite__mapDeps([19,1,2,3]))),Yb=new Pm({defaultOptions:{queries:{staleTime:5*60*1e3,gcTime:10*60*1e3,retry:3,refetchOnWindowFocus:!1}}});function Xb(){return g.jsx(kh,{children:g.jsx(km,{client:Yb,children:g.jsx(Nm,{children:g.jsx(Ob,{children:g.jsx(Db,{children:g.jsx("div",{className:"App",children:g.jsx(J.Suspense,{fallback:g.jsx(Fb,{}),children:g.jsxs(Om,{children:[g.jsx(Be,{path:"/",element:g.jsx(Qe,{children:g.jsx(Ub,{})})}),g.jsx(Be,{path:"/search",element:g.jsx(Qe,{children:g.jsx(jb,{})})}),g.jsx(Be,{path:"/vehicle/:id",element:g.jsx(Qe,{children:g.jsx(Bb,{})})}),g.jsx(Be,{path:"/about",element:g.jsx(Qe,{children:g.jsx($b,{})})}),g.jsx(Be,{path:"/contact",element:g.jsx(Qe,{children:g.jsx(qb,{})})}),g.jsx(Be,{path:"/faq",element:g.jsx(Qe,{children:g.jsx(Kb,{})})}),g.jsx(Be,{path:"/dashboard/*",element:g.jsx(Mb,{children:g.jsx(Qe,{children:g.jsx(Hb,{})})})}),g.jsx(Be,{path:"/login",element:g.jsx(Qe,{children:g.jsx(zb,{})})}),g.jsx(Be,{path:"/register",element:g.jsx(Qe,{children:g.jsx(Wb,{})})}),g.jsx(Be,{path:"/setup-admin",element:g.jsx(Gb,{})}),g.jsx(Be,{path:"/unauthorized",element:g.jsx(Qe,{children:g.jsx(Qb,{})})}),g.jsx(Be,{path:"*",element:g.jsx(Qe,{children:g.jsx(Jb,{})})})]})})})})})})})})}Bo.createRoot(document.getElementById("root")).render(g.jsx(wt.StrictMode,{children:g.jsx(Xb,{})}));export{sS as H,$e as I,Cs as a,le as b,vT as c,Ft as d,Lo as e,Ys as f,AT as g,xT as h,ph as s,Yp as u};
