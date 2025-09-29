const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-BM9O-ksp.js","assets/query-CSyQ0w5Y.js","assets/vendor-CBH9K-97.js","assets/router-BWB2dKYR.js","assets/SEO-C4QusKet.js","assets/ui-qr7cu0yN.js","assets/Search-D43p0orm.js","assets/Glassmorphism-B6x2MkMT.js","assets/GlassButton-BfRB-w5d.js","assets/VehicleDetail-WsZc0pPV.js","assets/About-Dh3BWznb.js","assets/Contact-Dwd3A_vj.js","assets/Dashboard-Ioh0mv2D.js","assets/Login-BU9OSm9o.js","assets/GlassForm-H9qvmeAC.js","assets/Register-CI0CDeOu.js","assets/AdminLogin-6RWdLecp.js","assets/FAQ-C71gCbx_.js","assets/SetupAdmin-D2iqKMue.js","assets/Unauthorized-ChESoKZR.js","assets/NotFound-B9JScyaF.js"])))=>i.map(i=>d[i]);
var dg=Object.defineProperty;var fg=(n,e,t)=>e in n?dg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Pt=(n,e,t)=>fg(n,typeof e!="symbol"?e+"":e,t);import{j as g,Q as pg,a as mg}from"./query-CSyQ0w5Y.js";import{b as Yh,g as Ha,r as Y,a as kt}from"./vendor-CBH9K-97.js";import{u as Xh,L as $e,N as Vo,B as gg,R as yg,a as Je}from"./router-BWB2dKYR.js";import{m as Qn,A as Bl}from"./ui-qr7cu0yN.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var aa={},$l=Yh;aa.createRoot=$l.createRoot,aa.hydrateRoot=$l.hydrateRoot;const _g="modulepreload",wg=function(n){return"/RIDE-SHARE/"+n},zl={},Ge=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(t.map(l=>{if(l=wg(l),l in zl)return;zl[l]=!0;const h=l.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const m=document.createElement("link");if(m.rel=h?"stylesheet":_g,h||(m.as="script"),m.crossOrigin="",m.href=l,c&&m.setAttribute("nonce",c),document.head.appendChild(m),h)return new Promise((E,P)=>{m.addEventListener("load",E),m.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};var Eg=typeof Element<"u",Tg=typeof Map=="function",vg=typeof Set=="function",Ig=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function si(n,e){if(n===e)return!0;if(n&&e&&typeof n=="object"&&typeof e=="object"){if(n.constructor!==e.constructor)return!1;var t,r,s;if(Array.isArray(n)){if(t=n.length,t!=e.length)return!1;for(r=t;r--!==0;)if(!si(n[r],e[r]))return!1;return!0}var i;if(Tg&&n instanceof Map&&e instanceof Map){if(n.size!==e.size)return!1;for(i=n.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;for(i=n.entries();!(r=i.next()).done;)if(!si(r.value[1],e.get(r.value[0])))return!1;return!0}if(vg&&n instanceof Set&&e instanceof Set){if(n.size!==e.size)return!1;for(i=n.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(Ig&&ArrayBuffer.isView(n)&&ArrayBuffer.isView(e)){if(t=n.length,t!=e.length)return!1;for(r=t;r--!==0;)if(n[r]!==e[r])return!1;return!0}if(n.constructor===RegExp)return n.source===e.source&&n.flags===e.flags;if(n.valueOf!==Object.prototype.valueOf&&typeof n.valueOf=="function"&&typeof e.valueOf=="function")return n.valueOf()===e.valueOf();if(n.toString!==Object.prototype.toString&&typeof n.toString=="function"&&typeof e.toString=="function")return n.toString()===e.toString();if(s=Object.keys(n),t=s.length,t!==Object.keys(e).length)return!1;for(r=t;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,s[r]))return!1;if(Eg&&n instanceof Element)return!1;for(r=t;r--!==0;)if(!((s[r]==="_owner"||s[r]==="__v"||s[r]==="__o")&&n.$$typeof)&&!si(n[s[r]],e[s[r]]))return!1;return!0}return n!==n&&e!==e}var bg=function(e,t){try{return si(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const Ag=Ha(bg);var Sg=function(n,e,t,r,s,i,o,c){if(!n){var l;if(e===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var h=[t,r,s,i,o,c],f=0;l=new Error(e.replace(/%s/g,function(){return h[f++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},Rg=Sg;const ql=Ha(Rg);var Cg=function(e,t,r,s){var i=r?r.call(s,e,t):void 0;if(i!==void 0)return!!i;if(e===t)return!0;if(typeof e!="object"||!e||typeof t!="object"||!t)return!1;var o=Object.keys(e),c=Object.keys(t);if(o.length!==c.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),h=0;h<o.length;h++){var f=o[h];if(!l(f))return!1;var m=e[f],E=t[f];if(i=r?r.call(s,m,E,f):void 0,i===!1||i===void 0&&m!==E)return!1}return!0};const Pg=Ha(Cg);var Zh=(n=>(n.BASE="base",n.BODY="body",n.HEAD="head",n.HTML="html",n.LINK="link",n.META="meta",n.NOSCRIPT="noscript",n.SCRIPT="script",n.STYLE="style",n.TITLE="title",n.FRAGMENT="Symbol(react.fragment)",n))(Zh||{}),Lo={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Hl=Object.values(Zh),Wa={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},xg=Object.entries(Wa).reduce((n,[e,t])=>(n[t]=e,n),{}),at="data-rh",sr={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},ir=(n,e)=>{for(let t=n.length-1;t>=0;t-=1){const r=n[t];if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}return null},kg=n=>{let e=ir(n,"title");const t=ir(n,sr.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),t&&e)return t.replace(/%s/g,()=>e);const r=ir(n,sr.DEFAULT_TITLE);return e||r||void 0},Ng=n=>ir(n,sr.ON_CHANGE_CLIENT_STATE)||(()=>{}),Mo=(n,e)=>e.filter(t=>typeof t[n]<"u").map(t=>t[n]).reduce((t,r)=>({...t,...r}),{}),Og=(n,e)=>e.filter(t=>typeof t.base<"u").map(t=>t.base).reverse().reduce((t,r)=>{if(!t.length){const s=Object.keys(r);for(let i=0;i<s.length;i+=1){const c=s[i].toLowerCase();if(n.indexOf(c)!==-1&&r[c])return t.concat(r)}}return t},[]),Dg=n=>console&&typeof console.warn=="function"&&console.warn(n),Wr=(n,e,t)=>{const r={};return t.filter(s=>Array.isArray(s[n])?!0:(typeof s[n]<"u"&&Dg(`Helmet: ${n} should be of type "Array". Instead found type "${typeof s[n]}"`),!1)).map(s=>s[n]).reverse().reduce((s,i)=>{const o={};i.filter(l=>{let h;const f=Object.keys(l);for(let E=0;E<f.length;E+=1){const P=f[E],I=P.toLowerCase();e.indexOf(I)!==-1&&!(h==="rel"&&l[h].toLowerCase()==="canonical")&&!(I==="rel"&&l[I].toLowerCase()==="stylesheet")&&(h=I),e.indexOf(P)!==-1&&(P==="innerHTML"||P==="cssText"||P==="itemprop")&&(h=P)}if(!h||!l[h])return!1;const m=l[h].toLowerCase();return r[h]||(r[h]={}),o[h]||(o[h]={}),r[h][m]?!1:(o[h][m]=!0,!0)}).reverse().forEach(l=>s.push(l));const c=Object.keys(o);for(let l=0;l<c.length;l+=1){const h=c[l],f={...r[h],...o[h]};r[h]=f}return s},[]).reverse()},Vg=(n,e)=>{if(Array.isArray(n)&&n.length){for(let t=0;t<n.length;t+=1)if(n[t][e])return!0}return!1},Lg=n=>({baseTag:Og(["href"],n),bodyAttributes:Mo("bodyAttributes",n),defer:ir(n,sr.DEFER),encode:ir(n,sr.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Mo("htmlAttributes",n),linkTags:Wr("link",["rel","href"],n),metaTags:Wr("meta",["name","charset","http-equiv","property","itemprop"],n),noscriptTags:Wr("noscript",["innerHTML"],n),onChangeClientState:Ng(n),scriptTags:Wr("script",["src","innerHTML"],n),styleTags:Wr("style",["cssText"],n),title:kg(n),titleAttributes:Mo("titleAttributes",n),prioritizeSeoTags:Vg(n,sr.PRIORITIZE_SEO_TAGS)}),ed=n=>Array.isArray(n)?n.join(""):n,Mg=(n,e)=>{const t=Object.keys(n);for(let r=0;r<t.length;r+=1)if(e[t[r]]&&e[t[r]].includes(n[t[r]]))return!0;return!1},Fo=(n,e)=>Array.isArray(n)?n.reduce((t,r)=>(Mg(r,e)?t.priority.push(r):t.default.push(r),t),{priority:[],default:[]}):{default:n,priority:[]},Wl=(n,e)=>({...n,[e]:void 0}),Fg=["noscript","script","style"],ca=(n,e=!0)=>e===!1?String(n):String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),td=n=>Object.keys(n).reduce((e,t)=>{const r=typeof n[t]<"u"?`${t}="${n[t]}"`:`${t}`;return e?`${e} ${r}`:r},""),jg=(n,e,t,r)=>{const s=td(t),i=ed(e);return s?`<${n} ${at}="true" ${s}>${ca(i,r)}</${n}>`:`<${n} ${at}="true">${ca(i,r)}</${n}>`},Ug=(n,e,t=!0)=>e.reduce((r,s)=>{const i=s,o=Object.keys(i).filter(h=>!(h==="innerHTML"||h==="cssText")).reduce((h,f)=>{const m=typeof i[f]>"u"?f:`${f}="${ca(i[f],t)}"`;return h?`${h} ${m}`:m},""),c=i.innerHTML||i.cssText||"",l=Fg.indexOf(n)===-1;return`${r}<${n} ${at}="true" ${o}${l?"/>":`>${c}</${n}>`}`},""),nd=(n,e={})=>Object.keys(n).reduce((t,r)=>{const s=Wa[r];return t[s||r]=n[r],t},e),Bg=(n,e,t)=>{const r={key:e,[at]:!0},s=nd(t,r);return[kt.createElement("title",s,e)]},ii=(n,e)=>e.map((t,r)=>{const s={key:r,[at]:!0};return Object.keys(t).forEach(i=>{const c=Wa[i]||i;if(c==="innerHTML"||c==="cssText"){const l=t.innerHTML||t.cssText;s.dangerouslySetInnerHTML={__html:l}}else s[c]=t[i]}),kt.createElement(n,s)}),et=(n,e,t=!0)=>{switch(n){case"title":return{toComponent:()=>Bg(n,e.title,e.titleAttributes),toString:()=>jg(n,e.title,e.titleAttributes,t)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>nd(e),toString:()=>td(e)};default:return{toComponent:()=>ii(n,e),toString:()=>Ug(n,e,t)}}},$g=({metaTags:n,linkTags:e,scriptTags:t,encode:r})=>{const s=Fo(n,Lo.meta),i=Fo(e,Lo.link),o=Fo(t,Lo.script);return{priorityMethods:{toComponent:()=>[...ii("meta",s.priority),...ii("link",i.priority),...ii("script",o.priority)],toString:()=>`${et("meta",s.priority,r)} ${et("link",i.priority,r)} ${et("script",o.priority,r)}`},metaTags:s.default,linkTags:i.default,scriptTags:o.default}},zg=n=>{const{baseTag:e,bodyAttributes:t,encode:r=!0,htmlAttributes:s,noscriptTags:i,styleTags:o,title:c="",titleAttributes:l,prioritizeSeoTags:h}=n;let{linkTags:f,metaTags:m,scriptTags:E}=n,P={toComponent:()=>{},toString:()=>""};return h&&({priorityMethods:P,linkTags:f,metaTags:m,scriptTags:E}=$g(n)),{priority:P,base:et("base",e,r),bodyAttributes:et("bodyAttributes",t,r),htmlAttributes:et("htmlAttributes",s,r),link:et("link",f,r),meta:et("meta",m,r),noscript:et("noscript",i,r),script:et("script",E,r),style:et("style",o,r),title:et("title",{title:c,titleAttributes:l},r)}},la=zg,Gs=[],rd=!!(typeof window<"u"&&window.document&&window.document.createElement),ua=class{constructor(n,e){Pt(this,"instances",[]);Pt(this,"canUseDOM",rd);Pt(this,"context");Pt(this,"value",{setHelmet:n=>{this.context.helmet=n},helmetInstances:{get:()=>this.canUseDOM?Gs:this.instances,add:n=>{(this.canUseDOM?Gs:this.instances).push(n)},remove:n=>{const e=(this.canUseDOM?Gs:this.instances).indexOf(n);(this.canUseDOM?Gs:this.instances).splice(e,1)}}});this.context=n,this.canUseDOM=e||!1,e||(n.helmet=la({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},qg={},sd=kt.createContext(qg),Sn,id=(Sn=class extends Y.Component{constructor(t){super(t);Pt(this,"helmetData");this.helmetData=new ua(this.props.context||{},Sn.canUseDOM)}render(){return kt.createElement(sd.Provider,{value:this.helmetData.value},this.props.children)}},Pt(Sn,"canUseDOM",rd),Sn),Jn=(n,e)=>{const t=document.head||document.querySelector("head"),r=t.querySelectorAll(`${n}[${at}]`),s=[].slice.call(r),i=[];let o;return e&&e.length&&e.forEach(c=>{const l=document.createElement(n);for(const h in c)if(Object.prototype.hasOwnProperty.call(c,h))if(h==="innerHTML")l.innerHTML=c.innerHTML;else if(h==="cssText")l.styleSheet?l.styleSheet.cssText=c.cssText:l.appendChild(document.createTextNode(c.cssText));else{const f=h,m=typeof c[f]>"u"?"":c[f];l.setAttribute(h,m)}l.setAttribute(at,"true"),s.some((h,f)=>(o=f,l.isEqualNode(h)))?s.splice(o,1):i.push(l)}),s.forEach(c=>{var l;return(l=c.parentNode)==null?void 0:l.removeChild(c)}),i.forEach(c=>t.appendChild(c)),{oldTags:s,newTags:i}},ha=(n,e)=>{const t=document.getElementsByTagName(n)[0];if(!t)return;const r=t.getAttribute(at),s=r?r.split(","):[],i=[...s],o=Object.keys(e);for(const c of o){const l=e[c]||"";t.getAttribute(c)!==l&&t.setAttribute(c,l),s.indexOf(c)===-1&&s.push(c);const h=i.indexOf(c);h!==-1&&i.splice(h,1)}for(let c=i.length-1;c>=0;c-=1)t.removeAttribute(i[c]);s.length===i.length?t.removeAttribute(at):t.getAttribute(at)!==o.join(",")&&t.setAttribute(at,o.join(","))},Hg=(n,e)=>{typeof n<"u"&&document.title!==n&&(document.title=ed(n)),ha("title",e)},Gl=(n,e)=>{const{baseTag:t,bodyAttributes:r,htmlAttributes:s,linkTags:i,metaTags:o,noscriptTags:c,onChangeClientState:l,scriptTags:h,styleTags:f,title:m,titleAttributes:E}=n;ha("body",r),ha("html",s),Hg(m,E);const P={baseTag:Jn("base",t),linkTags:Jn("link",i),metaTags:Jn("meta",o),noscriptTags:Jn("noscript",c),scriptTags:Jn("script",h),styleTags:Jn("style",f)},I={},R={};Object.keys(P).forEach(C=>{const{newTags:D,oldTags:V}=P[C];D.length&&(I[C]=D),V.length&&(R[C]=P[C].oldTags)}),e&&e(),l(n,I,R)},Gr=null,Wg=n=>{Gr&&cancelAnimationFrame(Gr),n.defer?Gr=requestAnimationFrame(()=>{Gl(n,()=>{Gr=null})}):(Gl(n),Gr=null)},Gg=Wg,Kl=class extends Y.Component{constructor(){super(...arguments);Pt(this,"rendered",!1)}shouldComponentUpdate(e){return!Pg(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:t}=this.props.context;let r=null;const s=Lg(e.get().map(i=>{const o={...i.props};return delete o.context,o}));id.canUseDOM?Gg(s):la&&(r=la(s)),t(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},oa,PR=(oa=class extends Y.Component{shouldComponentUpdate(n){return!Ag(Wl(this.props,"helmetData"),Wl(n,"helmetData"))}mapNestedChildrenToProps(n,e){if(!e)return null;switch(n.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${n.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(n,e,t,r){return{...e,[n.type]:[...e[n.type]||[],{...t,...this.mapNestedChildrenToProps(n,r)}]}}mapObjectTypeChildren(n,e,t,r){switch(n.type){case"title":return{...e,[n.type]:r,titleAttributes:{...t}};case"body":return{...e,bodyAttributes:{...t}};case"html":return{...e,htmlAttributes:{...t}};default:return{...e,[n.type]:{...t}}}}mapArrayTypeChildrenToProps(n,e){let t={...e};return Object.keys(n).forEach(r=>{t={...t,[r]:n[r]}}),t}warnOnInvalidChildren(n,e){return ql(Hl.some(t=>n.type===t),typeof n.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Hl.join(", ")} are allowed. Helmet does not support rendering <${n.type}> elements. Refer to our API for more information.`),ql(!e||typeof e=="string"||Array.isArray(e)&&!e.some(t=>typeof t!="string"),`Helmet expects a string as a child of <${n.type}>. Did you forget to wrap your children in braces? ( <${n.type}>{\`\`}</${n.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(n,e){let t={};return kt.Children.forEach(n,r=>{if(!r||!r.props)return;const{children:s,...i}=r.props,o=Object.keys(i).reduce((l,h)=>(l[xg[h]||h]=i[h],l),{});let{type:c}=r;switch(typeof c=="symbol"?c=c.toString():this.warnOnInvalidChildren(r,s),c){case"Symbol(react.fragment)":e=this.mapChildrenToProps(s,e);break;case"link":case"meta":case"noscript":case"script":case"style":t=this.flattenArrayTypeChildren(r,t,o,s);break;default:e=this.mapObjectTypeChildren(r,e,o,s);break}}),this.mapArrayTypeChildrenToProps(t,e)}render(){const{children:n,...e}=this.props;let t={...e},{helmetData:r}=e;if(n&&(t=this.mapChildrenToProps(n,t)),r&&!(r instanceof ua)){const s=r;r=new ua(s.context,!0),delete t.helmetData}return r?kt.createElement(Kl,{...t,context:r.value}):kt.createElement(sd.Consumer,null,s=>kt.createElement(Kl,{...t,context:s}))}},Pt(oa,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),oa);function od(n,e){return function(){return n.apply(e,arguments)}}const{toString:Kg}=Object.prototype,{getPrototypeOf:Ga}=Object,{iterator:qi,toStringTag:ad}=Symbol,Hi=(n=>e=>{const t=Kg.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),dt=n=>(n=n.toLowerCase(),e=>Hi(e)===n),Wi=n=>e=>typeof e===n,{isArray:_r}=Array,ur=Wi("undefined");function Ts(n){return n!==null&&!ur(n)&&n.constructor!==null&&!ur(n.constructor)&&qe(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const cd=dt("ArrayBuffer");function Qg(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&cd(n.buffer),e}const Jg=Wi("string"),qe=Wi("function"),ld=Wi("number"),vs=n=>n!==null&&typeof n=="object",Yg=n=>n===!0||n===!1,oi=n=>{if(Hi(n)!=="object")return!1;const e=Ga(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(ad in n)&&!(qi in n)},Xg=n=>{if(!vs(n)||Ts(n))return!1;try{return Object.keys(n).length===0&&Object.getPrototypeOf(n)===Object.prototype}catch{return!1}},Zg=dt("Date"),ey=dt("File"),ty=dt("Blob"),ny=dt("FileList"),ry=n=>vs(n)&&qe(n.pipe),sy=n=>{let e;return n&&(typeof FormData=="function"&&n instanceof FormData||qe(n.append)&&((e=Hi(n))==="formdata"||e==="object"&&qe(n.toString)&&n.toString()==="[object FormData]"))},iy=dt("URLSearchParams"),[oy,ay,cy,ly]=["ReadableStream","Request","Response","Headers"].map(dt),uy=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Is(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let r,s;if(typeof n!="object"&&(n=[n]),_r(n))for(r=0,s=n.length;r<s;r++)e.call(null,n[r],r,n);else{if(Ts(n))return;const i=t?Object.getOwnPropertyNames(n):Object.keys(n),o=i.length;let c;for(r=0;r<o;r++)c=i[r],e.call(null,n[c],c,n)}}function ud(n,e){if(Ts(n))return null;e=e.toLowerCase();const t=Object.keys(n);let r=t.length,s;for(;r-- >0;)if(s=t[r],e===s.toLowerCase())return s;return null}const In=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,hd=n=>!ur(n)&&n!==In;function da(){const{caseless:n,skipUndefined:e}=hd(this)&&this||{},t={},r=(s,i)=>{const o=n&&ud(t,i)||i;oi(t[o])&&oi(s)?t[o]=da(t[o],s):oi(s)?t[o]=da({},s):_r(s)?t[o]=s.slice():(!e||!ur(s))&&(t[o]=s)};for(let s=0,i=arguments.length;s<i;s++)arguments[s]&&Is(arguments[s],r);return t}const hy=(n,e,t,{allOwnKeys:r}={})=>(Is(e,(s,i)=>{t&&qe(s)?n[i]=od(s,t):n[i]=s},{allOwnKeys:r}),n),dy=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),fy=(n,e,t,r)=>{n.prototype=Object.create(e.prototype,r),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},py=(n,e,t,r)=>{let s,i,o;const c={};if(e=e||{},n==null)return e;do{for(s=Object.getOwnPropertyNames(n),i=s.length;i-- >0;)o=s[i],(!r||r(o,n,e))&&!c[o]&&(e[o]=n[o],c[o]=!0);n=t!==!1&&Ga(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},my=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const r=n.indexOf(e,t);return r!==-1&&r===t},gy=n=>{if(!n)return null;if(_r(n))return n;let e=n.length;if(!ld(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},yy=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&Ga(Uint8Array)),_y=(n,e)=>{const r=(n&&n[qi]).call(n);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(n,i[0],i[1])}},wy=(n,e)=>{let t;const r=[];for(;(t=n.exec(e))!==null;)r.push(t);return r},Ey=dt("HTMLFormElement"),Ty=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,r,s){return r.toUpperCase()+s}),Ql=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),vy=dt("RegExp"),dd=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),r={};Is(t,(s,i)=>{let o;(o=e(s,i,n))!==!1&&(r[i]=o||s)}),Object.defineProperties(n,r)},Iy=n=>{dd(n,(e,t)=>{if(qe(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const r=n[t];if(qe(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},by=(n,e)=>{const t={},r=s=>{s.forEach(i=>{t[i]=!0})};return _r(n)?r(n):r(String(n).split(e)),t},Ay=()=>{},Sy=(n,e)=>n!=null&&Number.isFinite(n=+n)?n:e;function Ry(n){return!!(n&&qe(n.append)&&n[ad]==="FormData"&&n[qi])}const Cy=n=>{const e=new Array(10),t=(r,s)=>{if(vs(r)){if(e.indexOf(r)>=0)return;if(Ts(r))return r;if(!("toJSON"in r)){e[s]=r;const i=_r(r)?[]:{};return Is(r,(o,c)=>{const l=t(o,s+1);!ur(l)&&(i[c]=l)}),e[s]=void 0,i}}return r};return t(n,0)},Py=dt("AsyncFunction"),xy=n=>n&&(vs(n)||qe(n))&&qe(n.then)&&qe(n.catch),fd=((n,e)=>n?setImmediate:e?((t,r)=>(In.addEventListener("message",({source:s,data:i})=>{s===In&&i===t&&r.length&&r.shift()()},!1),s=>{r.push(s),In.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",qe(In.postMessage)),ky=typeof queueMicrotask<"u"?queueMicrotask.bind(In):typeof process<"u"&&process.nextTick||fd,Ny=n=>n!=null&&qe(n[qi]),x={isArray:_r,isArrayBuffer:cd,isBuffer:Ts,isFormData:sy,isArrayBufferView:Qg,isString:Jg,isNumber:ld,isBoolean:Yg,isObject:vs,isPlainObject:oi,isEmptyObject:Xg,isReadableStream:oy,isRequest:ay,isResponse:cy,isHeaders:ly,isUndefined:ur,isDate:Zg,isFile:ey,isBlob:ty,isRegExp:vy,isFunction:qe,isStream:ry,isURLSearchParams:iy,isTypedArray:yy,isFileList:ny,forEach:Is,merge:da,extend:hy,trim:uy,stripBOM:dy,inherits:fy,toFlatObject:py,kindOf:Hi,kindOfTest:dt,endsWith:my,toArray:gy,forEachEntry:_y,matchAll:wy,isHTMLForm:Ey,hasOwnProperty:Ql,hasOwnProp:Ql,reduceDescriptors:dd,freezeMethods:Iy,toObjectSet:by,toCamelCase:Ty,noop:Ay,toFiniteNumber:Sy,findKey:ud,global:In,isContextDefined:hd,isSpecCompliantForm:Ry,toJSONObject:Cy,isAsyncFn:Py,isThenable:xy,setImmediate:fd,asap:ky,isIterable:Ny};function Q(n,e,t,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}x.inherits(Q,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:x.toJSONObject(this.config),code:this.code,status:this.status}}});const pd=Q.prototype,md={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{md[n]={value:n}});Object.defineProperties(Q,md);Object.defineProperty(pd,"isAxiosError",{value:!0});Q.from=(n,e,t,r,s,i)=>{const o=Object.create(pd);x.toFlatObject(n,o,function(f){return f!==Error.prototype},h=>h!=="isAxiosError");const c=n&&n.message?n.message:"Error",l=e==null&&n?n.code:e;return Q.call(o,c,l,t,r,s),n&&o.cause==null&&Object.defineProperty(o,"cause",{value:n,configurable:!0}),o.name=n&&n.name||"Error",i&&Object.assign(o,i),o};const Oy=null;function fa(n){return x.isPlainObject(n)||x.isArray(n)}function gd(n){return x.endsWith(n,"[]")?n.slice(0,-2):n}function Jl(n,e,t){return n?n.concat(e).map(function(s,i){return s=gd(s),!t&&i?"["+s+"]":s}).join(t?".":""):e}function Dy(n){return x.isArray(n)&&!n.some(fa)}const Vy=x.toFlatObject(x,{},null,function(e){return/^is[A-Z]/.test(e)});function Gi(n,e,t){if(!x.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=x.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(R,C){return!x.isUndefined(C[R])});const r=t.metaTokens,s=t.visitor||f,i=t.dots,o=t.indexes,l=(t.Blob||typeof Blob<"u"&&Blob)&&x.isSpecCompliantForm(e);if(!x.isFunction(s))throw new TypeError("visitor must be a function");function h(I){if(I===null)return"";if(x.isDate(I))return I.toISOString();if(x.isBoolean(I))return I.toString();if(!l&&x.isBlob(I))throw new Q("Blob is not supported. Use a Buffer instead.");return x.isArrayBuffer(I)||x.isTypedArray(I)?l&&typeof Blob=="function"?new Blob([I]):Buffer.from(I):I}function f(I,R,C){let D=I;if(I&&!C&&typeof I=="object"){if(x.endsWith(R,"{}"))R=r?R:R.slice(0,-2),I=JSON.stringify(I);else if(x.isArray(I)&&Dy(I)||(x.isFileList(I)||x.endsWith(R,"[]"))&&(D=x.toArray(I)))return R=gd(R),D.forEach(function(M,K){!(x.isUndefined(M)||M===null)&&e.append(o===!0?Jl([R],K,i):o===null?R:R+"[]",h(M))}),!1}return fa(I)?!0:(e.append(Jl(C,R,i),h(I)),!1)}const m=[],E=Object.assign(Vy,{defaultVisitor:f,convertValue:h,isVisitable:fa});function P(I,R){if(!x.isUndefined(I)){if(m.indexOf(I)!==-1)throw Error("Circular reference detected in "+R.join("."));m.push(I),x.forEach(I,function(D,V){(!(x.isUndefined(D)||D===null)&&s.call(e,D,x.isString(V)?V.trim():V,R,E))===!0&&P(D,R?R.concat(V):[V])}),m.pop()}}if(!x.isObject(n))throw new TypeError("data must be an object");return P(n),e}function Yl(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Ka(n,e){this._pairs=[],n&&Gi(n,this,e)}const yd=Ka.prototype;yd.append=function(e,t){this._pairs.push([e,t])};yd.toString=function(e){const t=e?function(r){return e.call(this,r,Yl)}:Yl;return this._pairs.map(function(s){return t(s[0])+"="+t(s[1])},"").join("&")};function Ly(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function _d(n,e,t){if(!e)return n;const r=t&&t.encode||Ly;x.isFunction(t)&&(t={serialize:t});const s=t&&t.serialize;let i;if(s?i=s(e,t):i=x.isURLSearchParams(e)?e.toString():new Ka(e,t).toString(r),i){const o=n.indexOf("#");o!==-1&&(n=n.slice(0,o)),n+=(n.indexOf("?")===-1?"?":"&")+i}return n}class Xl{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){x.forEach(this.handlers,function(r){r!==null&&e(r)})}}const wd={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},My=typeof URLSearchParams<"u"?URLSearchParams:Ka,Fy=typeof FormData<"u"?FormData:null,jy=typeof Blob<"u"?Blob:null,Uy={isBrowser:!0,classes:{URLSearchParams:My,FormData:Fy,Blob:jy},protocols:["http","https","file","blob","url","data"]},Qa=typeof window<"u"&&typeof document<"u",pa=typeof navigator=="object"&&navigator||void 0,By=Qa&&(!pa||["ReactNative","NativeScript","NS"].indexOf(pa.product)<0),$y=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",zy=Qa&&window.location.href||"http://localhost",qy=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Qa,hasStandardBrowserEnv:By,hasStandardBrowserWebWorkerEnv:$y,navigator:pa,origin:zy},Symbol.toStringTag,{value:"Module"})),Me={...qy,...Uy};function Hy(n,e){return Gi(n,new Me.classes.URLSearchParams,{visitor:function(t,r,s,i){return Me.isNode&&x.isBuffer(t)?(this.append(r,t.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...e})}function Wy(n){return x.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Gy(n){const e={},t=Object.keys(n);let r;const s=t.length;let i;for(r=0;r<s;r++)i=t[r],e[i]=n[i];return e}function Ed(n){function e(t,r,s,i){let o=t[i++];if(o==="__proto__")return!0;const c=Number.isFinite(+o),l=i>=t.length;return o=!o&&x.isArray(s)?s.length:o,l?(x.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!c):((!s[o]||!x.isObject(s[o]))&&(s[o]=[]),e(t,r,s[o],i)&&x.isArray(s[o])&&(s[o]=Gy(s[o])),!c)}if(x.isFormData(n)&&x.isFunction(n.entries)){const t={};return x.forEachEntry(n,(r,s)=>{e(Wy(r),s,t,0)}),t}return null}function Ky(n,e,t){if(x.isString(n))try{return(e||JSON.parse)(n),x.trim(n)}catch(r){if(r.name!=="SyntaxError")throw r}return(t||JSON.stringify)(n)}const bs={transitional:wd,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const r=t.getContentType()||"",s=r.indexOf("application/json")>-1,i=x.isObject(e);if(i&&x.isHTMLForm(e)&&(e=new FormData(e)),x.isFormData(e))return s?JSON.stringify(Ed(e)):e;if(x.isArrayBuffer(e)||x.isBuffer(e)||x.isStream(e)||x.isFile(e)||x.isBlob(e)||x.isReadableStream(e))return e;if(x.isArrayBufferView(e))return e.buffer;if(x.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let c;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Hy(e,this.formSerializer).toString();if((c=x.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Gi(c?{"files[]":e}:e,l&&new l,this.formSerializer)}}return i||s?(t.setContentType("application/json",!1),Ky(e)):e}],transformResponse:[function(e){const t=this.transitional||bs.transitional,r=t&&t.forcedJSONParsing,s=this.responseType==="json";if(x.isResponse(e)||x.isReadableStream(e))return e;if(e&&x.isString(e)&&(r&&!this.responseType||s)){const o=!(t&&t.silentJSONParsing)&&s;try{return JSON.parse(e,this.parseReviver)}catch(c){if(o)throw c.name==="SyntaxError"?Q.from(c,Q.ERR_BAD_RESPONSE,this,null,this.response):c}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Me.classes.FormData,Blob:Me.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};x.forEach(["delete","get","head","post","put","patch"],n=>{bs.headers[n]={}});const Qy=x.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Jy=n=>{const e={};let t,r,s;return n&&n.split(`
`).forEach(function(o){s=o.indexOf(":"),t=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!t||e[t]&&Qy[t])&&(t==="set-cookie"?e[t]?e[t].push(r):e[t]=[r]:e[t]=e[t]?e[t]+", "+r:r)}),e},Zl=Symbol("internals");function Kr(n){return n&&String(n).trim().toLowerCase()}function ai(n){return n===!1||n==null?n:x.isArray(n)?n.map(ai):String(n)}function Yy(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=t.exec(n);)e[r[1]]=r[2];return e}const Xy=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function jo(n,e,t,r,s){if(x.isFunction(r))return r.call(this,e,t);if(s&&(e=t),!!x.isString(e)){if(x.isString(r))return e.indexOf(r)!==-1;if(x.isRegExp(r))return r.test(e)}}function Zy(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r)}function e_(n,e){const t=x.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(n,r+t,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}let He=class{constructor(e){e&&this.set(e)}set(e,t,r){const s=this;function i(c,l,h){const f=Kr(l);if(!f)throw new Error("header name must be a non-empty string");const m=x.findKey(s,f);(!m||s[m]===void 0||h===!0||h===void 0&&s[m]!==!1)&&(s[m||l]=ai(c))}const o=(c,l)=>x.forEach(c,(h,f)=>i(h,f,l));if(x.isPlainObject(e)||e instanceof this.constructor)o(e,t);else if(x.isString(e)&&(e=e.trim())&&!Xy(e))o(Jy(e),t);else if(x.isObject(e)&&x.isIterable(e)){let c={},l,h;for(const f of e){if(!x.isArray(f))throw TypeError("Object iterator must return a key-value pair");c[h=f[0]]=(l=c[h])?x.isArray(l)?[...l,f[1]]:[l,f[1]]:f[1]}o(c,t)}else e!=null&&i(t,e,r);return this}get(e,t){if(e=Kr(e),e){const r=x.findKey(this,e);if(r){const s=this[r];if(!t)return s;if(t===!0)return Yy(s);if(x.isFunction(t))return t.call(this,s,r);if(x.isRegExp(t))return t.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Kr(e),e){const r=x.findKey(this,e);return!!(r&&this[r]!==void 0&&(!t||jo(this,this[r],r,t)))}return!1}delete(e,t){const r=this;let s=!1;function i(o){if(o=Kr(o),o){const c=x.findKey(r,o);c&&(!t||jo(r,r[c],c,t))&&(delete r[c],s=!0)}}return x.isArray(e)?e.forEach(i):i(e),s}clear(e){const t=Object.keys(this);let r=t.length,s=!1;for(;r--;){const i=t[r];(!e||jo(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const t=this,r={};return x.forEach(this,(s,i)=>{const o=x.findKey(r,i);if(o){t[o]=ai(s),delete t[i];return}const c=e?Zy(i):String(i).trim();c!==i&&delete t[i],t[c]=ai(s),r[c]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return x.forEach(this,(r,s)=>{r!=null&&r!==!1&&(t[s]=e&&x.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Zl]=this[Zl]={accessors:{}}).accessors,s=this.prototype;function i(o){const c=Kr(o);r[c]||(e_(s,o),r[c]=!0)}return x.isArray(e)?e.forEach(i):i(e),this}};He.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);x.reduceDescriptors(He.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(r){this[t]=r}}});x.freezeMethods(He);function Uo(n,e){const t=this||bs,r=e||t,s=He.from(r.headers);let i=r.data;return x.forEach(n,function(c){i=c.call(t,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function Td(n){return!!(n&&n.__CANCEL__)}function wr(n,e,t){Q.call(this,n??"canceled",Q.ERR_CANCELED,e,t),this.name="CanceledError"}x.inherits(wr,Q,{__CANCEL__:!0});function vd(n,e,t){const r=t.config.validateStatus;!t.status||!r||r(t.status)?n(t):e(new Q("Request failed with status code "+t.status,[Q.ERR_BAD_REQUEST,Q.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function t_(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function n_(n,e){n=n||10;const t=new Array(n),r=new Array(n);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(l){const h=Date.now(),f=r[i];o||(o=h),t[s]=l,r[s]=h;let m=i,E=0;for(;m!==s;)E+=t[m++],m=m%n;if(s=(s+1)%n,s===i&&(i=(i+1)%n),h-o<e)return;const P=f&&h-f;return P?Math.round(E*1e3/P):void 0}}function r_(n,e){let t=0,r=1e3/e,s,i;const o=(h,f=Date.now())=>{t=f,s=null,i&&(clearTimeout(i),i=null),n(...h)};return[(...h)=>{const f=Date.now(),m=f-t;m>=r?o(h,f):(s=h,i||(i=setTimeout(()=>{i=null,o(s)},r-m)))},()=>s&&o(s)]}const Ei=(n,e,t=3)=>{let r=0;const s=n_(50,250);return r_(i=>{const o=i.loaded,c=i.lengthComputable?i.total:void 0,l=o-r,h=s(l),f=o<=c;r=o;const m={loaded:o,total:c,progress:c?o/c:void 0,bytes:l,rate:h||void 0,estimated:h&&c&&f?(c-o)/h:void 0,event:i,lengthComputable:c!=null,[e?"download":"upload"]:!0};n(m)},t)},eu=(n,e)=>{const t=n!=null;return[r=>e[0]({lengthComputable:t,total:n,loaded:r}),e[1]]},tu=n=>(...e)=>x.asap(()=>n(...e)),s_=Me.hasStandardBrowserEnv?((n,e)=>t=>(t=new URL(t,Me.origin),n.protocol===t.protocol&&n.host===t.host&&(e||n.port===t.port)))(new URL(Me.origin),Me.navigator&&/(msie|trident)/i.test(Me.navigator.userAgent)):()=>!0,i_=Me.hasStandardBrowserEnv?{write(n,e,t,r,s,i){const o=[n+"="+encodeURIComponent(e)];x.isNumber(t)&&o.push("expires="+new Date(t).toGMTString()),x.isString(r)&&o.push("path="+r),x.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(n){const e=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function o_(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function a_(n,e){return e?n.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):n}function Id(n,e,t){let r=!o_(e);return n&&(r||t==!1)?a_(n,e):e}const nu=n=>n instanceof He?{...n}:n;function Pn(n,e){e=e||{};const t={};function r(h,f,m,E){return x.isPlainObject(h)&&x.isPlainObject(f)?x.merge.call({caseless:E},h,f):x.isPlainObject(f)?x.merge({},f):x.isArray(f)?f.slice():f}function s(h,f,m,E){if(x.isUndefined(f)){if(!x.isUndefined(h))return r(void 0,h,m,E)}else return r(h,f,m,E)}function i(h,f){if(!x.isUndefined(f))return r(void 0,f)}function o(h,f){if(x.isUndefined(f)){if(!x.isUndefined(h))return r(void 0,h)}else return r(void 0,f)}function c(h,f,m){if(m in e)return r(h,f);if(m in n)return r(void 0,h)}const l={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:c,headers:(h,f,m)=>s(nu(h),nu(f),m,!0)};return x.forEach(Object.keys({...n,...e}),function(f){const m=l[f]||s,E=m(n[f],e[f],f);x.isUndefined(E)&&m!==c||(t[f]=E)}),t}const bd=n=>{const e=Pn({},n);let{data:t,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:c}=e;if(e.headers=o=He.from(o),e.url=_d(Id(e.baseURL,e.url,e.allowAbsoluteUrls),n.params,n.paramsSerializer),c&&o.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),x.isFormData(t)){if(Me.hasStandardBrowserEnv||Me.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(x.isFunction(t.getHeaders)){const l=t.getHeaders(),h=["content-type","content-length"];Object.entries(l).forEach(([f,m])=>{h.includes(f.toLowerCase())&&o.set(f,m)})}}if(Me.hasStandardBrowserEnv&&(r&&x.isFunction(r)&&(r=r(e)),r||r!==!1&&s_(e.url))){const l=s&&i&&i_.read(i);l&&o.set(s,l)}return e},c_=typeof XMLHttpRequest<"u",l_=c_&&function(n){return new Promise(function(t,r){const s=bd(n);let i=s.data;const o=He.from(s.headers).normalize();let{responseType:c,onUploadProgress:l,onDownloadProgress:h}=s,f,m,E,P,I;function R(){P&&P(),I&&I(),s.cancelToken&&s.cancelToken.unsubscribe(f),s.signal&&s.signal.removeEventListener("abort",f)}let C=new XMLHttpRequest;C.open(s.method.toUpperCase(),s.url,!0),C.timeout=s.timeout;function D(){if(!C)return;const M=He.from("getAllResponseHeaders"in C&&C.getAllResponseHeaders()),se={data:!c||c==="text"||c==="json"?C.responseText:C.response,status:C.status,statusText:C.statusText,headers:M,config:n,request:C};vd(function(T){t(T),R()},function(T){r(T),R()},se),C=null}"onloadend"in C?C.onloadend=D:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.indexOf("file:")===0)||setTimeout(D)},C.onabort=function(){C&&(r(new Q("Request aborted",Q.ECONNABORTED,n,C)),C=null)},C.onerror=function(K){const se=K&&K.message?K.message:"Network Error",ne=new Q(se,Q.ERR_NETWORK,n,C);ne.event=K||null,r(ne),C=null},C.ontimeout=function(){let K=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const se=s.transitional||wd;s.timeoutErrorMessage&&(K=s.timeoutErrorMessage),r(new Q(K,se.clarifyTimeoutError?Q.ETIMEDOUT:Q.ECONNABORTED,n,C)),C=null},i===void 0&&o.setContentType(null),"setRequestHeader"in C&&x.forEach(o.toJSON(),function(K,se){C.setRequestHeader(se,K)}),x.isUndefined(s.withCredentials)||(C.withCredentials=!!s.withCredentials),c&&c!=="json"&&(C.responseType=s.responseType),h&&([E,I]=Ei(h,!0),C.addEventListener("progress",E)),l&&C.upload&&([m,P]=Ei(l),C.upload.addEventListener("progress",m),C.upload.addEventListener("loadend",P)),(s.cancelToken||s.signal)&&(f=M=>{C&&(r(!M||M.type?new wr(null,n,C):M),C.abort(),C=null)},s.cancelToken&&s.cancelToken.subscribe(f),s.signal&&(s.signal.aborted?f():s.signal.addEventListener("abort",f)));const V=t_(s.url);if(V&&Me.protocols.indexOf(V)===-1){r(new Q("Unsupported protocol "+V+":",Q.ERR_BAD_REQUEST,n));return}C.send(i||null)})},u_=(n,e)=>{const{length:t}=n=n?n.filter(Boolean):[];if(e||t){let r=new AbortController,s;const i=function(h){if(!s){s=!0,c();const f=h instanceof Error?h:this.reason;r.abort(f instanceof Q?f:new wr(f instanceof Error?f.message:f))}};let o=e&&setTimeout(()=>{o=null,i(new Q(`timeout ${e} of ms exceeded`,Q.ETIMEDOUT))},e);const c=()=>{n&&(o&&clearTimeout(o),o=null,n.forEach(h=>{h.unsubscribe?h.unsubscribe(i):h.removeEventListener("abort",i)}),n=null)};n.forEach(h=>h.addEventListener("abort",i));const{signal:l}=r;return l.unsubscribe=()=>x.asap(c),l}},h_=function*(n,e){let t=n.byteLength;if(t<e){yield n;return}let r=0,s;for(;r<t;)s=r+e,yield n.slice(r,s),r=s},d_=async function*(n,e){for await(const t of f_(n))yield*h_(t,e)},f_=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const e=n.getReader();try{for(;;){const{done:t,value:r}=await e.read();if(t)break;yield r}}finally{await e.cancel()}},ru=(n,e,t,r)=>{const s=d_(n,e);let i=0,o,c=l=>{o||(o=!0,r&&r(l))};return new ReadableStream({async pull(l){try{const{done:h,value:f}=await s.next();if(h){c(),l.close();return}let m=f.byteLength;if(t){let E=i+=m;t(E)}l.enqueue(new Uint8Array(f))}catch(h){throw c(h),h}},cancel(l){return c(l),s.return()}},{highWaterMark:2})},su=64*1024,{isFunction:Ks}=x,p_=(({Request:n,Response:e})=>({Request:n,Response:e}))(x.global),{ReadableStream:iu,TextEncoder:ou}=x.global,au=(n,...e)=>{try{return!!n(...e)}catch{return!1}},m_=n=>{n=x.merge.call({skipUndefined:!0},p_,n);const{fetch:e,Request:t,Response:r}=n,s=e?Ks(e):typeof fetch=="function",i=Ks(t),o=Ks(r);if(!s)return!1;const c=s&&Ks(iu),l=s&&(typeof ou=="function"?(I=>R=>I.encode(R))(new ou):async I=>new Uint8Array(await new t(I).arrayBuffer())),h=i&&c&&au(()=>{let I=!1;const R=new t(Me.origin,{body:new iu,method:"POST",get duplex(){return I=!0,"half"}}).headers.has("Content-Type");return I&&!R}),f=o&&c&&au(()=>x.isReadableStream(new r("").body)),m={stream:f&&(I=>I.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(I=>{!m[I]&&(m[I]=(R,C)=>{let D=R&&R[I];if(D)return D.call(R);throw new Q(`Response type '${I}' is not supported`,Q.ERR_NOT_SUPPORT,C)})});const E=async I=>{if(I==null)return 0;if(x.isBlob(I))return I.size;if(x.isSpecCompliantForm(I))return(await new t(Me.origin,{method:"POST",body:I}).arrayBuffer()).byteLength;if(x.isArrayBufferView(I)||x.isArrayBuffer(I))return I.byteLength;if(x.isURLSearchParams(I)&&(I=I+""),x.isString(I))return(await l(I)).byteLength},P=async(I,R)=>{const C=x.toFiniteNumber(I.getContentLength());return C??E(R)};return async I=>{let{url:R,method:C,data:D,signal:V,cancelToken:M,timeout:K,onDownloadProgress:se,onUploadProgress:ne,responseType:T,headers:y,withCredentials:w="same-origin",fetchOptions:b}=bd(I),v=e||fetch;T=T?(T+"").toLowerCase():"text";let A=u_([V,M&&M.toAbortSignal()],K),_=null;const ae=A&&A.unsubscribe&&(()=>{A.unsubscribe()});let Ce;try{if(ne&&h&&C!=="get"&&C!=="head"&&(Ce=await P(y,D))!==0){let Be=new t(R,{method:"POST",body:D,duplex:"half"}),Ke;if(x.isFormData(D)&&(Ke=Be.headers.get("content-type"))&&y.setContentType(Ke),Be.body){const[pe,ue]=eu(Ce,Ei(tu(ne)));D=ru(Be.body,su,pe,ue)}}x.isString(w)||(w=w?"include":"omit");const fe=i&&"credentials"in t.prototype,Ze={...b,signal:A,method:C.toUpperCase(),headers:y.normalize().toJSON(),body:D,duplex:"half",credentials:fe?w:void 0};_=i&&new t(R,Ze);let B=await(i?v(_,b):v(R,Ze));const pt=f&&(T==="stream"||T==="response");if(f&&(se||pt&&ae)){const Be={};["status","statusText","headers"].forEach(it=>{Be[it]=B[it]});const Ke=x.toFiniteNumber(B.headers.get("content-length")),[pe,ue]=se&&eu(Ke,Ei(tu(se),!0))||[];B=new r(ru(B.body,su,pe,()=>{ue&&ue(),ae&&ae()}),Be)}T=T||"text";let $n=await m[x.findKey(m,T)||"text"](B,I);return!pt&&ae&&ae(),await new Promise((Be,Ke)=>{vd(Be,Ke,{data:$n,headers:He.from(B.headers),status:B.status,statusText:B.statusText,config:I,request:_})})}catch(fe){throw ae&&ae(),fe&&fe.name==="TypeError"&&/Load failed|fetch/i.test(fe.message)?Object.assign(new Q("Network Error",Q.ERR_NETWORK,I,_),{cause:fe.cause||fe}):Q.from(fe,fe&&fe.code,I,_)}}},g_=new Map,Ad=n=>{let e=n?n.env:{};const{fetch:t,Request:r,Response:s}=e,i=[r,s,t];let o=i.length,c=o,l,h,f=g_;for(;c--;)l=i[c],h=f.get(l),h===void 0&&f.set(l,h=c?new Map:m_(e)),f=h;return h};Ad();const ma={http:Oy,xhr:l_,fetch:{get:Ad}};x.forEach(ma,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const cu=n=>`- ${n}`,y_=n=>x.isFunction(n)||n===null||n===!1,Sd={getAdapter:(n,e)=>{n=x.isArray(n)?n:[n];const{length:t}=n;let r,s;const i={};for(let o=0;o<t;o++){r=n[o];let c;if(s=r,!y_(r)&&(s=ma[(c=String(r)).toLowerCase()],s===void 0))throw new Q(`Unknown adapter '${c}'`);if(s&&(x.isFunction(s)||(s=s.get(e))))break;i[c||"#"+o]=s}if(!s){const o=Object.entries(i).map(([l,h])=>`adapter ${l} `+(h===!1?"is not supported by the environment":"is not available in the build"));let c=t?o.length>1?`since :
`+o.map(cu).join(`
`):" "+cu(o[0]):"as no adapter specified";throw new Q("There is no suitable adapter to dispatch the request "+c,"ERR_NOT_SUPPORT")}return s},adapters:ma};function Bo(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new wr(null,n)}function lu(n){return Bo(n),n.headers=He.from(n.headers),n.data=Uo.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),Sd.getAdapter(n.adapter||bs.adapter,n)(n).then(function(r){return Bo(n),r.data=Uo.call(n,n.transformResponse,r),r.headers=He.from(r.headers),r},function(r){return Td(r)||(Bo(n),r&&r.response&&(r.response.data=Uo.call(n,n.transformResponse,r.response),r.response.headers=He.from(r.response.headers))),Promise.reject(r)})}const Rd="1.12.2",Ki={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{Ki[n]=function(r){return typeof r===n||"a"+(e<1?"n ":" ")+n}});const uu={};Ki.transitional=function(e,t,r){function s(i,o){return"[Axios v"+Rd+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,c)=>{if(e===!1)throw new Q(s(o," has been removed"+(t?" in "+t:"")),Q.ERR_DEPRECATED);return t&&!uu[o]&&(uu[o]=!0,console.warn(s(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(i,o,c):!0}};Ki.spelling=function(e){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function __(n,e,t){if(typeof n!="object")throw new Q("options must be an object",Q.ERR_BAD_OPTION_VALUE);const r=Object.keys(n);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const c=n[i],l=c===void 0||o(c,i,n);if(l!==!0)throw new Q("option "+i+" must be "+l,Q.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new Q("Unknown option "+i,Q.ERR_BAD_OPTION)}}const ci={assertOptions:__,validators:Ki},yt=ci.validators;let Rn=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Xl,response:new Xl}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=Pn(this.defaults,t);const{transitional:r,paramsSerializer:s,headers:i}=t;r!==void 0&&ci.assertOptions(r,{silentJSONParsing:yt.transitional(yt.boolean),forcedJSONParsing:yt.transitional(yt.boolean),clarifyTimeoutError:yt.transitional(yt.boolean)},!1),s!=null&&(x.isFunction(s)?t.paramsSerializer={serialize:s}:ci.assertOptions(s,{encode:yt.function,serialize:yt.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),ci.assertOptions(t,{baseUrl:yt.spelling("baseURL"),withXsrfToken:yt.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=i&&x.merge(i.common,i[t.method]);i&&x.forEach(["delete","get","head","post","put","patch","common"],I=>{delete i[I]}),t.headers=He.concat(o,i);const c=[];let l=!0;this.interceptors.request.forEach(function(R){typeof R.runWhen=="function"&&R.runWhen(t)===!1||(l=l&&R.synchronous,c.unshift(R.fulfilled,R.rejected))});const h=[];this.interceptors.response.forEach(function(R){h.push(R.fulfilled,R.rejected)});let f,m=0,E;if(!l){const I=[lu.bind(this),void 0];for(I.unshift(...c),I.push(...h),E=I.length,f=Promise.resolve(t);m<E;)f=f.then(I[m++],I[m++]);return f}E=c.length;let P=t;for(;m<E;){const I=c[m++],R=c[m++];try{P=I(P)}catch(C){R.call(this,C);break}}try{f=lu.call(this,P)}catch(I){return Promise.reject(I)}for(m=0,E=h.length;m<E;)f=f.then(h[m++],h[m++]);return f}getUri(e){e=Pn(this.defaults,e);const t=Id(e.baseURL,e.url,e.allowAbsoluteUrls);return _d(t,e.params,e.paramsSerializer)}};x.forEach(["delete","get","head","options"],function(e){Rn.prototype[e]=function(t,r){return this.request(Pn(r||{},{method:e,url:t,data:(r||{}).data}))}});x.forEach(["post","put","patch"],function(e){function t(r){return function(i,o,c){return this.request(Pn(c||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Rn.prototype[e]=t(),Rn.prototype[e+"Form"]=t(!0)});let w_=class Cd{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(i){t=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(c=>{r.subscribe(c),i=c}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,c){r.reason||(r.reason=new wr(i,o,c),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=r=>{e.abort(r)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new Cd(function(s){e=s}),cancel:e}}};function E_(n){return function(t){return n.apply(null,t)}}function T_(n){return x.isObject(n)&&n.isAxiosError===!0}const ga={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ga).forEach(([n,e])=>{ga[e]=n});function Pd(n){const e=new Rn(n),t=od(Rn.prototype.request,e);return x.extend(t,Rn.prototype,e,{allOwnKeys:!0}),x.extend(t,e,null,{allOwnKeys:!0}),t.create=function(s){return Pd(Pn(n,s))},t}const ye=Pd(bs);ye.Axios=Rn;ye.CanceledError=wr;ye.CancelToken=w_;ye.isCancel=Td;ye.VERSION=Rd;ye.toFormData=Gi;ye.AxiosError=Q;ye.Cancel=ye.CanceledError;ye.all=function(e){return Promise.all(e)};ye.spread=E_;ye.isAxiosError=T_;ye.mergeConfig=Pn;ye.AxiosHeaders=He;ye.formToJSON=n=>Ed(x.isHTMLForm(n)?new FormData(n):n);ye.getAdapter=Sd.getAdapter;ye.HttpStatusCode=ga;ye.default=ye;const{Axios:NR,AxiosError:OR,CanceledError:DR,isCancel:VR,CancelToken:LR,VERSION:MR,all:FR,Cancel:jR,isAxiosError:UR,spread:BR,toFormData:$R,AxiosHeaders:zR,HttpStatusCode:qR,formToJSON:HR,getAdapter:WR,mergeConfig:GR}=ye,v_=()=>{const n=ye.create({baseURL:"http://localhost:5000/api",timeout:1e4,headers:{"Content-Type":"application/json"}});return n.interceptors.request.use(async e=>{if((localStorage.getItem("authMethod")||"firebase")==="firebase")try{const{auth:r}=await Ge(async()=>{const{auth:i}=await Promise.resolve().then(()=>gS);return{auth:i}},void 0),s=r.currentUser;if(s){const i=await s.getIdToken();e.headers.Authorization=`Bearer ${i}`}}catch(r){console.error("Error getting Firebase token:",r)}else{const r=localStorage.getItem("accessToken");r&&(e.headers.Authorization=`Bearer ${r}`)}return e},e=>Promise.reject(e)),n.interceptors.response.use(e=>e,async e=>{var r;const t=e.config;if(((r=e.response)==null?void 0:r.status)===401&&!t._retry){t._retry=!0;try{const s=localStorage.getItem("refreshToken");if(s){const i=await ye.post("http://localhost:5000/api/auth/refresh",{refreshToken:s}),{accessToken:o}=i.data;return localStorage.setItem("accessToken",o),t.headers.Authorization=`Bearer ${o}`,n(t)}}catch{localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),window.location.href="/login"}}return Promise.reject(e)}),n},Qr=v_(),I_=()=>{};var hu={};/**
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
 */const xd=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},b_=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},kd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,f=i>>2,m=(i&3)<<4|c>>4;let E=(c&15)<<2|h>>6,P=h&63;l||(P=64,o||(E=64)),r.push(t[f],t[m],t[E],t[P])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(xd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):b_(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||m==null)throw new A_;const E=i<<2|c>>4;if(r.push(E),h!==64){const P=c<<4&240|h>>2;if(r.push(P),m!==64){const I=h<<6&192|m;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class A_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const S_=function(n){const e=xd(n);return kd.encodeByteArray(e,!0)},Ti=function(n){return S_(n).replace(/\./g,"")},Nd=function(n){try{return kd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function R_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const C_=()=>R_().__FIREBASE_DEFAULTS__,P_=()=>{if(typeof process>"u"||typeof hu>"u")return;const n=hu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},x_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Nd(n[1]);return e&&JSON.parse(e)},Qi=()=>{try{return I_()||C_()||P_()||x_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Od=n=>{var e,t;return(t=(e=Qi())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},k_=n=>{const e=Od(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Dd=()=>{var n;return(n=Qi())==null?void 0:n.config},Vd=n=>{var e;return(e=Qi())==null?void 0:e[`_${n}`]};/**
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
 */class N_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Er(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ld(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function O_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Ti(JSON.stringify(t)),Ti(JSON.stringify(o)),""].join(".")}const rs={};function D_(){const n={prod:[],emulator:[]};for(const e of Object.keys(rs))rs[e]?n.emulator.push(e):n.prod.push(e);return n}function V_(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let du=!1;function Md(n,e){if(typeof window>"u"||typeof document>"u"||!Er(window.location.host)||rs[n]===e||rs[n]||du)return;rs[n]=e;function t(E){return`__firebase__banner__${E}`}const r="__firebase__banner",i=D_().prod.length>0;function o(){const E=document.getElementById(r);E&&E.remove()}function c(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function l(E,P){E.setAttribute("width","24"),E.setAttribute("id",P),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function h(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{du=!0,o()},E}function f(E,P){E.setAttribute("id",P),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function m(){const E=V_(r),P=t("text"),I=document.getElementById(P)||document.createElement("span"),R=t("learnmore"),C=document.getElementById(R)||document.createElement("a"),D=t("preprendIcon"),V=document.getElementById(D)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const M=E.element;c(M),f(C,R);const K=h();l(V,D),M.append(V,I,C,K),document.body.appendChild(M)}i?(I.innerText="Preview backend disconnected.",V.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(V.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,I.innerText="Preview backend running in this workspace."),I.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function Fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function L_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Fe())}function M_(){var e;const n=(e=Qi())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function F_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Fd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function j_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function U_(){const n=Fe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function B_(){return!M_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function jd(){try{return typeof indexedDB=="object"}catch{return!1}}function Ud(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}function $_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const z_="FirebaseError";class ft extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=z_,Object.setPrototypeOf(this,ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ln.prototype.create)}}class Ln{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?q_(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new ft(s,c,r)}}function q_(n,e){return n.replace(H_,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const H_=/\{\$([^}]+)}/g;function W_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function on(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(fu(i)&&fu(o)){if(!on(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function fu(n){return n!==null&&typeof n=="object"}/**
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
 */function As(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Yr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Xr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function G_(n,e){const t=new K_(n,e);return t.subscribe.bind(t)}class K_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Q_(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=$o),s.error===void 0&&(s.error=$o),s.complete===void 0&&(s.complete=$o);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Q_(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function $o(){}/**
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
 */const J_=1e3,Y_=2,X_=4*60*60*1e3,Z_=.5;function pu(n,e=J_,t=Y_){const r=e*Math.pow(t,n),s=Math.round(Z_*r*(Math.random()-.5)*2);return Math.min(X_,r+s)}/**
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
 */function ke(n){return n&&n._delegate?n._delegate:n}class ut{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const vn="[DEFAULT]";/**
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
 */class ew{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new N_;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nw(e))try{this.getOrInitializeService({instanceIdentifier:vn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=vn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vn){return this.instances.has(e)}getOptions(e=vn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tw(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vn){return this.component?this.component.multipleInstances?e:vn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tw(n){return n===vn?void 0:n}function nw(n){return n.instantiationMode==="EAGER"}/**
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
 */class rw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ew(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Z||(Z={}));const sw={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},iw=Z.INFO,ow={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},aw=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=ow[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ji{constructor(e){this.name=e,this._logLevel=iw,this._logHandler=aw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const cw=(n,e)=>e.some(t=>n instanceof t);let mu,gu;function lw(){return mu||(mu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uw(){return gu||(gu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bd=new WeakMap,ya=new WeakMap,$d=new WeakMap,zo=new WeakMap,Ja=new WeakMap;function hw(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(tn(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Bd.set(t,n)}).catch(()=>{}),Ja.set(e,n),e}function dw(n){if(ya.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});ya.set(n,e)}let _a={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ya.get(n);if(e==="objectStoreNames")return n.objectStoreNames||$d.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return tn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function fw(n){_a=n(_a)}function pw(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(qo(this),e,...t);return $d.set(r,e.sort?e.sort():[e]),tn(r)}:uw().includes(n)?function(...e){return n.apply(qo(this),e),tn(Bd.get(this))}:function(...e){return tn(n.apply(qo(this),e))}}function mw(n){return typeof n=="function"?pw(n):(n instanceof IDBTransaction&&dw(n),cw(n,lw())?new Proxy(n,_a):n)}function tn(n){if(n instanceof IDBRequest)return hw(n);if(zo.has(n))return zo.get(n);const e=mw(n);return e!==n&&(zo.set(n,e),Ja.set(e,n)),e}const qo=n=>Ja.get(n);function zd(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),c=tn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(tn(o.result),l.oldVersion,l.newVersion,tn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const gw=["get","getKey","getAll","getAllKeys","count"],yw=["put","add","delete","clear"],Ho=new Map;function yu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ho.get(e))return Ho.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=yw.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||gw.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return Ho.set(e,i),i}fw(n=>({...n,get:(e,t,r)=>yu(e,t)||n.get(e,t,r),has:(e,t)=>!!yu(e,t)||n.has(e,t)}));/**
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
 */class _w{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ww(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function ww(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wa="@firebase/app",_u="0.14.3";/**
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
 */const Lt=new Ji("@firebase/app"),Ew="@firebase/app-compat",Tw="@firebase/analytics-compat",vw="@firebase/analytics",Iw="@firebase/app-check-compat",bw="@firebase/app-check",Aw="@firebase/auth",Sw="@firebase/auth-compat",Rw="@firebase/database",Cw="@firebase/data-connect",Pw="@firebase/database-compat",xw="@firebase/functions",kw="@firebase/functions-compat",Nw="@firebase/installations",Ow="@firebase/installations-compat",Dw="@firebase/messaging",Vw="@firebase/messaging-compat",Lw="@firebase/performance",Mw="@firebase/performance-compat",Fw="@firebase/remote-config",jw="@firebase/remote-config-compat",Uw="@firebase/storage",Bw="@firebase/storage-compat",$w="@firebase/firestore",zw="@firebase/ai",qw="@firebase/firestore-compat",Hw="firebase",Ww="12.3.0";/**
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
 */const Ea="[DEFAULT]",Gw={[wa]:"fire-core",[Ew]:"fire-core-compat",[vw]:"fire-analytics",[Tw]:"fire-analytics-compat",[bw]:"fire-app-check",[Iw]:"fire-app-check-compat",[Aw]:"fire-auth",[Sw]:"fire-auth-compat",[Rw]:"fire-rtdb",[Cw]:"fire-data-connect",[Pw]:"fire-rtdb-compat",[xw]:"fire-fn",[kw]:"fire-fn-compat",[Nw]:"fire-iid",[Ow]:"fire-iid-compat",[Dw]:"fire-fcm",[Vw]:"fire-fcm-compat",[Lw]:"fire-perf",[Mw]:"fire-perf-compat",[Fw]:"fire-rc",[jw]:"fire-rc-compat",[Uw]:"fire-gcs",[Bw]:"fire-gcs-compat",[$w]:"fire-fst",[qw]:"fire-fst-compat",[zw]:"fire-vertex","fire-js":"fire-js",[Hw]:"fire-js-all"};/**
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
 */const vi=new Map,Kw=new Map,Ta=new Map;function wu(n,e){try{n.container.addComponent(e)}catch(t){Lt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function At(n){const e=n.name;if(Ta.has(e))return Lt.debug(`There were multiple attempts to register component ${e}.`),!1;Ta.set(e,n);for(const t of vi.values())wu(t,n);for(const t of Kw.values())wu(t,n);return!0}function Mn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function tt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Qw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},nn=new Ln("app","Firebase",Qw);/**
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
 */class Jw{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ut("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nn.create("app-deleted",{appName:this._name})}}/**
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
 */const Tr=Ww;function qd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Ea,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw nn.create("bad-app-name",{appName:String(s)});if(t||(t=Dd()),!t)throw nn.create("no-options");const i=vi.get(s);if(i){if(on(t,i.options)&&on(r,i.config))return i;throw nn.create("duplicate-app",{appName:s})}const o=new rw(s);for(const l of Ta.values())o.addComponent(l);const c=new Jw(t,r,o);return vi.set(s,c),c}function Ya(n=Ea){const e=vi.get(n);if(!e&&n===Ea&&Dd())return qd();if(!e)throw nn.create("no-app",{appName:n});return e}function st(n,e,t){let r=Gw[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Lt.warn(o.join(" "));return}At(new ut(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Yw="firebase-heartbeat-database",Xw=1,hs="firebase-heartbeat-store";let Wo=null;function Hd(){return Wo||(Wo=zd(Yw,Xw,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(hs)}catch(t){console.warn(t)}}}}).catch(n=>{throw nn.create("idb-open",{originalErrorMessage:n.message})})),Wo}async function Zw(n){try{const t=(await Hd()).transaction(hs),r=await t.objectStore(hs).get(Wd(n));return await t.done,r}catch(e){if(e instanceof ft)Lt.warn(e.message);else{const t=nn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Lt.warn(t.message)}}}async function Eu(n,e){try{const r=(await Hd()).transaction(hs,"readwrite");await r.objectStore(hs).put(e,Wd(n)),await r.done}catch(t){if(t instanceof ft)Lt.warn(t.message);else{const r=nn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Lt.warn(r.message)}}}function Wd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const eE=1024,tE=30;class nE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new sE(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Tu();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>tE){const o=iE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Lt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Tu(),{heartbeatsToSend:r,unsentEntries:s}=rE(this._heartbeatsCache.heartbeats),i=Ti(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Lt.warn(t),""}}}function Tu(){return new Date().toISOString().substring(0,10)}function rE(n,e=eE){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),vu(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),vu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class sE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jd()?Ud().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Zw(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Eu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Eu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function vu(n){return Ti(JSON.stringify({version:2,heartbeats:n})).length}function iE(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function oE(n){At(new ut("platform-logger",e=>new _w(e),"PRIVATE")),At(new ut("heartbeat",e=>new nE(e),"PRIVATE")),st(wa,_u,n),st(wa,_u,"esm2020"),st("fire-js","")}oE("");function Gd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aE=Gd,Kd=new Ln("auth","Firebase",Gd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=new Ji("@firebase/auth");function cE(n,...e){Ii.logLevel<=Z.WARN&&Ii.warn(`Auth (${Tr}): ${n}`,...e)}function li(n,...e){Ii.logLevel<=Z.ERROR&&Ii.error(`Auth (${Tr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(n,...e){throw Xa(n,...e)}function wt(n,...e){return Xa(n,...e)}function Qd(n,e,t){const r={...aE(),[e]:t};return new Ln("auth","Firebase",r).create(e,{appName:n.name})}function Dt(n){return Qd(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xa(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Kd.create(n,...e)}function q(n,e,...t){if(!n)throw Xa(e,...t)}function Nt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw li(e),new Error(e)}function Mt(n,e){n||Nt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function lE(){return Iu()==="http:"||Iu()==="https:"}function Iu(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lE()||Fd()||"connection"in navigator)?navigator.onLine:!0}function hE(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,t){this.shortDelay=e,this.longDelay=t,Mt(t>e,"Short delay should be less than long delay!"),this.isMobile=L_()||j_()}get(){return uE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(n,e){Mt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],pE=new Ss(3e4,6e4);function Ut(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Ct(n,e,t,r,s={}){return Yd(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=As({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:l,...i};return F_()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Er(n.emulatorConfig.host)&&(h.credentials="include"),Jd.fetch()(await Xd(n,n.config.apiHost,t,c),h)})}async function Yd(n,e,t){n._canInitEmulator=!1;const r={...dE,...e};try{const s=new gE(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Qs(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qs(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Qs(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Qs(n,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Qd(n,f,h);ht(n,f)}}catch(s){if(s instanceof ft)throw s;ht(n,"network-request-failed",{message:String(s)})}}async function Rs(n,e,t,r,s={}){const i=await Ct(n,e,t,r,s);return"mfaPendingCredential"in i&&ht(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Xd(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?Za(n.config,s):`${n.config.apiScheme}://${s}`;return fE.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function mE(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(wt(this.auth,"network-request-failed")),pE.get())})}}function Qs(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=wt(n,e,r);return s.customData._tokenResponse=t,s}function bu(n){return n!==void 0&&n.enterprise!==void 0}class yE{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return mE(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function _E(n,e){return Ct(n,"GET","/v2/recaptchaConfig",Ut(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wE(n,e){return Ct(n,"POST","/v1/accounts:delete",e)}async function bi(n,e){return Ct(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function EE(n,e=!1){const t=ke(n),r=await t.getIdToken(e),s=ec(r);q(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ss(Go(s.auth_time)),issuedAtTime:ss(Go(s.iat)),expirationTime:ss(Go(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Go(n){return Number(n)*1e3}function ec(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return li("JWT malformed, contained fewer than 3 sections"),null;try{const s=Nd(t);return s?JSON.parse(s):(li("Failed to decode base64 JWT payload"),null)}catch(s){return li("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Au(n){const e=ec(n);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ft&&TE(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function TE({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ss(this.lastLoginAt),this.creationTime=ss(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ai(n){var m;const e=n.auth,t=await n.getIdToken(),r=await hr(n,bi(e,{idToken:t}));q(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?Zd(s.providerUserInfo):[],o=bE(n.providerData,i),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),h=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ia(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function IE(n){const e=ke(n);await Ai(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bE(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Zd(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AE(n,e){const t=await Yd(n,{},async()=>{const r=As({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await Xd(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&Er(n.emulatorConfig.host)&&(l.credentials="include"),Jd.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function SE(n,e){return Ct(n,"POST","/v2/accounts:revokeToken",Ut(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Au(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){q(e.length!==0,"internal-error");const t=Au(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await AE(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new or;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new or,this.toJSON())}_performRefresh(){return Nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(n,e){q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ct{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new vE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ia(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await hr(this,this.stsTokenManager.getToken(this.auth,e));return q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return EE(this,e)}reload(){return IE(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ct({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ai(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tt(this.auth.app))return Promise.reject(Dt(this.auth));const e=await this.getIdToken();return await hr(this,wE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,h=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:m,emailVerified:E,isAnonymous:P,providerData:I,stsTokenManager:R}=t;q(m&&R,e,"internal-error");const C=or.fromJSON(this.name,R);q(typeof m=="string",e,"internal-error"),Gt(r,e.name),Gt(s,e.name),q(typeof E=="boolean",e,"internal-error"),q(typeof P=="boolean",e,"internal-error"),Gt(i,e.name),Gt(o,e.name),Gt(c,e.name),Gt(l,e.name),Gt(h,e.name),Gt(f,e.name);const D=new ct({uid:m,auth:e,email:s,emailVerified:E,displayName:r,isAnonymous:P,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:C,createdAt:h,lastLoginAt:f});return I&&Array.isArray(I)&&(D.providerData=I.map(V=>({...V}))),l&&(D._redirectEventId=l),D}static async _fromIdTokenResponse(e,t,r=!1){const s=new or;s.updateFromServerResponse(t);const i=new ct({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ai(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Zd(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new or;c.updateFromIdToken(r);const l=new ct({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ia(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su=new Map;function Ot(n){Mt(n instanceof Function,"Expected a class definition");let e=Su.get(n);return e?(Mt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Su.set(n,e),e)}/**
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
 */class ef{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ef.type="NONE";const Ru=ef;/**
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
 */function ui(n,e,t){return`firebase:${n}:${e}:${t}`}class ar{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ui(this.userKey,s.apiKey,i),this.fullPersistenceKey=ui("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await bi(this.auth,{idToken:e}).catch(()=>{});return t?ct._fromGetAccountInfoResponse(this.auth,t,e):null}return ct._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ar(Ot(Ru),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Ot(Ru);const o=ui(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(o);if(f){let m;if(typeof f=="string"){const E=await bi(e,{idToken:f}).catch(()=>{});if(!E)break;m=await ct._fromGetAccountInfoResponse(e,E,f)}else m=ct._fromJSON(e,f);h!==i&&(c=m),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ar(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new ar(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(af(e))return"Blackberry";if(cf(e))return"Webos";if(nf(e))return"Safari";if((e.includes("chrome/")||rf(e))&&!e.includes("edge/"))return"Chrome";if(of(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tf(n=Fe()){return/firefox\//i.test(n)}function nf(n=Fe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rf(n=Fe()){return/crios\//i.test(n)}function sf(n=Fe()){return/iemobile/i.test(n)}function of(n=Fe()){return/android/i.test(n)}function af(n=Fe()){return/blackberry/i.test(n)}function cf(n=Fe()){return/webos/i.test(n)}function tc(n=Fe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function RE(n=Fe()){var e;return tc(n)&&!!((e=window.navigator)!=null&&e.standalone)}function CE(){return U_()&&document.documentMode===10}function lf(n=Fe()){return tc(n)||of(n)||cf(n)||af(n)||/windows phone/i.test(n)||sf(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(n,e=[]){let t;switch(n){case"Browser":t=Cu(Fe());break;case"Worker":t=`${Cu(Fe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Tr}/${r}`}/**
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
 */class PE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function xE(n,e={}){return Ct(n,"GET","/v2/passwordPolicy",Ut(n,e))}/**
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
 */const kE=6;class NE{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??kE,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pu(this),this.idTokenSubscription=new Pu(this),this.beforeStateQueue=new PE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ot(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await ar.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await bi(this,{idToken:e}),r=await ct._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(tt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ai(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tt(this.app))return Promise.reject(Dt(this));const t=e?ke(e):null;return t&&q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tt(this.app)?Promise.reject(Dt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tt(this.app)?Promise.reject(Dt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ot(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xE(this),t=new NE(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ln("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await SE(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ot(e)||this._popupRedirectResolver;q(t,this,"argument-error"),this.redirectPersistenceManager=await ar.create(this,[Ot(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(tt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&cE(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function fn(n){return ke(n)}class Pu{constructor(e){this.auth=e,this.observer=null,this.addObserver=G_(t=>this.observer=t)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function DE(n){Yi=n}function hf(n){return Yi.loadJS(n)}function VE(){return Yi.recaptchaEnterpriseScript}function LE(){return Yi.gapiScript}function ME(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class FE{constructor(){this.enterprise=new jE}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class jE{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const UE="recaptcha-enterprise",df="NO_RECAPTCHA";class BE{constructor(e){this.type=UE,this.auth=fn(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{_E(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new yE(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;bu(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(df)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new FE().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!t&&bu(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=VE();l.length!==0&&(l+=c),hf(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function xu(n,e,t,r=!1,s=!1){const i=new BE(n);let o;if(s)o=df;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Si(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await xu(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await xu(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(n,e){const t=Mn(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(on(i,e??{}))return s;ht(s,"already-initialized")}return t.initialize({options:e})}function zE(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ot);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function qE(n,e,t){const r=fn(n);q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=ff(e),{host:o,port:c}=HE(e),l=c===null?"":`:${c}`,h={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),q(on(h,r.config.emulator)&&on(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Er(o)?(Ld(`${i}//${o}${l}`),Md("Auth",!0)):WE()}function ff(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function HE(n){const e=ff(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ku(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ku(o)}}}function ku(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function WE(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Nt("not implemented")}_getIdTokenResponse(e){return Nt("not implemented")}_linkToIdToken(e,t){return Nt("not implemented")}_getReauthenticationResolver(e){return Nt("not implemented")}}async function GE(n,e){return Ct(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KE(n,e){return Rs(n,"POST","/v1/accounts:signInWithPassword",Ut(n,e))}async function pf(n,e){return Ct(n,"POST","/v1/accounts:sendOobCode",Ut(n,e))}async function QE(n,e){return pf(n,e)}async function JE(n,e){return pf(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YE(n,e){return Rs(n,"POST","/v1/accounts:signInWithEmailLink",Ut(n,e))}async function XE(n,e){return Rs(n,"POST","/v1/accounts:signInWithEmailLink",Ut(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends nc{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ds(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ds(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Si(e,t,"signInWithPassword",KE);case"emailLink":return YE(e,{email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Si(e,r,"signUpPassword",GE);case"emailLink":return XE(e,{idToken:t,email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cr(n,e){return Rs(n,"POST","/v1/accounts:signInWithIdp",Ut(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE="http://localhost";class xn extends nc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new xn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ht("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const o=new xn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return cr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,cr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,cr(e,t)}buildRequest(){const e={requestUri:ZE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=As(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tT(n){const e=Yr(Xr(n)).link,t=e?Yr(Xr(e)).deep_link_id:null,r=Yr(Xr(n)).deep_link_id;return(r?Yr(Xr(r)).link:null)||r||t||e||n}class rc{constructor(e){const t=Yr(Xr(e)),r=t.apiKey??null,s=t.oobCode??null,i=eT(t.mode??null);q(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=tT(e);try{return new rc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(){this.providerId=vr.PROVIDER_ID}static credential(e,t){return ds._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=rc.parseLink(t);return q(r,"argument-error"),ds._fromEmailAndCode(e,r.code,r.tenantId)}}vr.PROVIDER_ID="password";vr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Cs extends mf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Cs{constructor(){super("facebook.com")}static credential(e){return xn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jt.credential(e.oauthAccessToken)}catch{return null}}}Jt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends Cs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return xn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Yt.credential(t,r)}catch{return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com";Yt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends Cs{constructor(){super("github.com")}static credential(e){return xn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xt.credential(e.oauthAccessToken)}catch{return null}}}Xt.GITHUB_SIGN_IN_METHOD="github.com";Xt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Cs{constructor(){super("twitter.com")}static credential(e,t){return xn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Zt.credential(t,r)}catch{return null}}}Zt.TWITTER_SIGN_IN_METHOD="twitter.com";Zt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nT(n,e){return Rs(n,"POST","/v1/accounts:signUp",Ut(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await ct._fromIdTokenResponse(e,r,s),o=Nu(r);return new kn({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Nu(r);return new kn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Nu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends ft{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ri.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Ri(e,t,r,s)}}function gf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ri._fromErrorAndOperation(n,i,e,r):i})}async function rT(n,e,t=!1){const r=await hr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return kn._forOperation(n,"link",r)}/**
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
 */async function sT(n,e,t=!1){const{auth:r}=n;if(tt(r.app))return Promise.reject(Dt(r));const s="reauthenticate";try{const i=await hr(n,gf(r,s,e,n),t);q(i.idToken,r,"internal-error");const o=ec(i.idToken);q(o,r,"internal-error");const{sub:c}=o;return q(n.uid===c,r,"user-mismatch"),kn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ht(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yf(n,e,t=!1){if(tt(n.app))return Promise.reject(Dt(n));const r="signIn",s=await gf(n,r,e),i=await kn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function iT(n,e){return yf(fn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _f(n){const e=fn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function oT(n,e,t){const r=fn(n);await Si(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",JE)}async function aT(n,e,t){if(tt(n.app))return Promise.reject(Dt(n));const r=fn(n),o=await Si(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",nT).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&_f(n),l}),c=await kn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function cT(n,e,t){return tt(n.app)?Promise.reject(Dt(n)):iT(ke(n),vr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&_f(n),r})}async function lT(n,e){const t=ke(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:i}=await QE(t.auth,s);i!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uT(n,e){return Ct(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hT(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=ke(n),i={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await hr(r,uT(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function dT(n,e,t,r){return ke(n).onIdTokenChanged(e,t,r)}function fT(n,e,t){return ke(n).beforeAuthStateChanged(e,t)}function pT(n,e,t,r){return ke(n).onAuthStateChanged(e,t,r)}function mT(n){return ke(n).signOut()}const Ci="__sak";/**
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
 */class wf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ci,"1"),this.storage.removeItem(Ci),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT=1e3,yT=10;class Ef extends wf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=lf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);CE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,yT):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},gT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ef.type="LOCAL";const _T=Ef;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf extends wf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Tf.type="SESSION";const vf=Tf;/**
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
 */function wT(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Xi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Xi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(t.origin,i)),l=await wT(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class ET{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=sc("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const E=m;if(E.data.eventId===h)switch(E.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(E.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return window}function TT(n){Et().location.href=n}/**
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
 */function If(){return typeof Et().WorkerGlobalScope<"u"&&typeof Et().importScripts=="function"}async function vT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function IT(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function bT(){return If()?self:null}/**
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
 */const bf="firebaseLocalStorageDb",AT=1,Pi="firebaseLocalStorage",Af="fbase_key";class Ps{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Zi(n,e){return n.transaction([Pi],e?"readwrite":"readonly").objectStore(Pi)}function ST(){const n=indexedDB.deleteDatabase(bf);return new Ps(n).toPromise()}function ba(){const n=indexedDB.open(bf,AT);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Pi,{keyPath:Af})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Pi)?e(r):(r.close(),await ST(),e(await ba()))})})}async function Ou(n,e,t){const r=Zi(n,!0).put({[Af]:e,value:t});return new Ps(r).toPromise()}async function RT(n,e){const t=Zi(n,!1).get(e),r=await new Ps(t).toPromise();return r===void 0?null:r.value}function Du(n,e){const t=Zi(n,!0).delete(e);return new Ps(t).toPromise()}const CT=800,PT=3;class Sf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ba(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>PT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return If()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xi._getInstance(bT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await vT(),!this.activeServiceWorker)return;this.sender=new ET(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||IT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ba();return await Ou(e,Ci,"1"),await Du(e,Ci),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ou(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>RT(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Du(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Zi(s,!1).getAll();return new Ps(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),CT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sf.type="LOCAL";const xT=Sf;new Ss(3e4,6e4);/**
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
 */function kT(n,e){return e?Ot(e):(q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ic extends nc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return cr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return cr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return cr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function NT(n){return yf(n.auth,new ic(n),n.bypassAuthState)}function OT(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),sT(t,new ic(n),n.bypassAuthState)}async function DT(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),rT(t,new ic(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return NT;case"linkViaPopup":case"linkViaRedirect":return DT;case"reauthViaPopup":case"reauthViaRedirect":return OT;default:ht(this.auth,"internal-error")}}resolve(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT=new Ss(2e3,1e4);class rr extends Rf{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,rr.currentPopupAction&&rr.currentPopupAction.cancel(),rr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Mt(this.filter.length===1,"Popup operations only handle one event");const e=sc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,VT.get())};e()}}rr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT="pendingRedirect",hi=new Map;class MT extends Rf{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=hi.get(this.auth._key());if(!e){try{const r=await FT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}hi.set(this.auth._key(),e)}return this.bypassAuthState||hi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FT(n,e){const t=BT(e),r=UT(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function jT(n,e){hi.set(n._key(),e)}function UT(n){return Ot(n._redirectPersistence)}function BT(n){return ui(LT,n.config.apiKey,n.name)}async function $T(n,e,t=!1){if(tt(n.app))return Promise.reject(Dt(n));const r=fn(n),s=kT(r,e),o=await new MT(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=10*60*1e3;class qT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Cf(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(wt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vu(e))}saveEventToCache(e){this.cachedEventUids.add(Vu(e)),this.lastProcessedEventTime=Date.now()}}function Vu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Cf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HT(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WT(n,e={}){return Ct(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KT=/^https?/;async function QT(n){if(n.config.emulator)return;const{authorizedDomains:e}=await WT(n);for(const t of e)try{if(JT(t))return}catch{}ht(n,"unauthorized-domain")}function JT(n){const e=va(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!KT.test(t))return!1;if(GT.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const YT=new Ss(3e4,6e4);function Lu(){const n=Et().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function XT(n){return new Promise((e,t)=>{var s,i,o;function r(){Lu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lu(),t(wt(n,"network-request-failed"))},timeout:YT.get()})}if((i=(s=Et().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Et().gapi)!=null&&o.load)r();else{const c=ME("iframefcb");return Et()[c]=()=>{gapi.load?r():t(wt(n,"network-request-failed"))},hf(`${LE()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw di=null,e})}let di=null;function ZT(n){return di=di||XT(n),di}/**
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
 */const ev=new Ss(5e3,15e3),tv="__/auth/iframe",nv="emulator/auth/iframe",rv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iv(n){const e=n.config;q(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Za(e,nv):`https://${n.config.authDomain}/${tv}`,r={apiKey:e.apiKey,appName:n.name,v:Tr},s=sv.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${As(r).slice(1)}`}async function ov(n){const e=await ZT(n),t=Et().gapi;return q(t,n,"internal-error"),e.open({where:document.body,url:iv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=wt(n,"network-request-failed"),c=Et().setTimeout(()=>{i(o)},ev.get());function l(){Et().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const av={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cv=500,lv=600,uv="_blank",hv="http://localhost";class Mu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dv(n,e,t,r=cv,s=lv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...av,width:r.toString(),height:s.toString(),top:i,left:o},h=Fe().toLowerCase();t&&(c=rf(h)?uv:t),tf(h)&&(e=e||hv,l.scrollbars="yes");const f=Object.entries(l).reduce((E,[P,I])=>`${E}${P}=${I},`,"");if(RE(h)&&c!=="_self")return fv(e||"",c),new Mu(null);const m=window.open(e||"",c,f);q(m,n,"popup-blocked");try{m.focus()}catch{}return new Mu(m)}function fv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const pv="__/auth/handler",mv="emulator/auth/handler",gv=encodeURIComponent("fac");async function Fu(n,e,t,r,s,i){q(n.config.authDomain,n,"auth-domain-config-required"),q(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Tr,eventId:s};if(e instanceof mf){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",W_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Cs){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),h=l?`#${gv}=${encodeURIComponent(l)}`:"";return`${yv(n)}?${As(c).slice(1)}${h}`}function yv({config:n}){return n.emulator?Za(n,mv):`https://${n.authDomain}/${pv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko="webStorageSupport";class _v{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vf,this._completeRedirectFn=$T,this._overrideRedirectResult=jT}async _openPopup(e,t,r,s){var o;Mt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Fu(e,t,r,va(),s);return dv(e,i,sc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Fu(e,t,r,va(),s);return TT(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Mt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await ov(e),r=new qT(e);return t.register("authEvent",s=>(q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ko,{type:Ko},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Ko];i!==void 0&&t(!!i),ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=QT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return lf()||nf()||tc()}}const wv=_v;var ju="@firebase/auth",Uu="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vv(n){At(new ut("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uf(n)},h=new OE(r,s,i,l);return zE(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),At(new ut("auth-internal",e=>{const t=fn(e.getProvider("auth").getImmediate());return(r=>new Ev(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),st(ju,Uu,Tv(n)),st(ju,Uu,"esm2020")}/**
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
 */const Iv=5*60,bv=Vd("authIdTokenMaxAge")||Iv;let Bu=null;const Av=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>bv)return;const s=t==null?void 0:t.token;Bu!==s&&(Bu=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Sv(n=Ya()){const e=Mn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=$E(n,{popupRedirectResolver:wv,persistence:[xT,_T,vf]}),r=Vd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Av(i.toString());fT(t,o,()=>o(t.currentUser)),dT(t,c=>o(c))}}const s=Od("auth");return s&&qE(t,`http://${s}`),t}function Rv(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}DE({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=wt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Rv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vv("Browser");var $u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rn,Pf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function w(){}w.prototype=y.prototype,T.F=y.prototype,T.prototype=new w,T.prototype.constructor=T,T.D=function(b,v,A){for(var _=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)_[ae-2]=arguments[ae];return y.prototype[v].apply(b,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,y,w){w||(w=0);const b=Array(16);if(typeof y=="string")for(var v=0;v<16;++v)b[v]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(v=0;v<16;++v)b[v]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=T.g[0],w=T.g[1],v=T.g[2];let A=T.g[3],_;_=y+(A^w&(v^A))+b[0]+3614090360&4294967295,y=w+(_<<7&4294967295|_>>>25),_=A+(v^y&(w^v))+b[1]+3905402710&4294967295,A=y+(_<<12&4294967295|_>>>20),_=v+(w^A&(y^w))+b[2]+606105819&4294967295,v=A+(_<<17&4294967295|_>>>15),_=w+(y^v&(A^y))+b[3]+3250441966&4294967295,w=v+(_<<22&4294967295|_>>>10),_=y+(A^w&(v^A))+b[4]+4118548399&4294967295,y=w+(_<<7&4294967295|_>>>25),_=A+(v^y&(w^v))+b[5]+1200080426&4294967295,A=y+(_<<12&4294967295|_>>>20),_=v+(w^A&(y^w))+b[6]+2821735955&4294967295,v=A+(_<<17&4294967295|_>>>15),_=w+(y^v&(A^y))+b[7]+4249261313&4294967295,w=v+(_<<22&4294967295|_>>>10),_=y+(A^w&(v^A))+b[8]+1770035416&4294967295,y=w+(_<<7&4294967295|_>>>25),_=A+(v^y&(w^v))+b[9]+2336552879&4294967295,A=y+(_<<12&4294967295|_>>>20),_=v+(w^A&(y^w))+b[10]+4294925233&4294967295,v=A+(_<<17&4294967295|_>>>15),_=w+(y^v&(A^y))+b[11]+2304563134&4294967295,w=v+(_<<22&4294967295|_>>>10),_=y+(A^w&(v^A))+b[12]+1804603682&4294967295,y=w+(_<<7&4294967295|_>>>25),_=A+(v^y&(w^v))+b[13]+4254626195&4294967295,A=y+(_<<12&4294967295|_>>>20),_=v+(w^A&(y^w))+b[14]+2792965006&4294967295,v=A+(_<<17&4294967295|_>>>15),_=w+(y^v&(A^y))+b[15]+1236535329&4294967295,w=v+(_<<22&4294967295|_>>>10),_=y+(v^A&(w^v))+b[1]+4129170786&4294967295,y=w+(_<<5&4294967295|_>>>27),_=A+(w^v&(y^w))+b[6]+3225465664&4294967295,A=y+(_<<9&4294967295|_>>>23),_=v+(y^w&(A^y))+b[11]+643717713&4294967295,v=A+(_<<14&4294967295|_>>>18),_=w+(A^y&(v^A))+b[0]+3921069994&4294967295,w=v+(_<<20&4294967295|_>>>12),_=y+(v^A&(w^v))+b[5]+3593408605&4294967295,y=w+(_<<5&4294967295|_>>>27),_=A+(w^v&(y^w))+b[10]+38016083&4294967295,A=y+(_<<9&4294967295|_>>>23),_=v+(y^w&(A^y))+b[15]+3634488961&4294967295,v=A+(_<<14&4294967295|_>>>18),_=w+(A^y&(v^A))+b[4]+3889429448&4294967295,w=v+(_<<20&4294967295|_>>>12),_=y+(v^A&(w^v))+b[9]+568446438&4294967295,y=w+(_<<5&4294967295|_>>>27),_=A+(w^v&(y^w))+b[14]+3275163606&4294967295,A=y+(_<<9&4294967295|_>>>23),_=v+(y^w&(A^y))+b[3]+4107603335&4294967295,v=A+(_<<14&4294967295|_>>>18),_=w+(A^y&(v^A))+b[8]+1163531501&4294967295,w=v+(_<<20&4294967295|_>>>12),_=y+(v^A&(w^v))+b[13]+2850285829&4294967295,y=w+(_<<5&4294967295|_>>>27),_=A+(w^v&(y^w))+b[2]+4243563512&4294967295,A=y+(_<<9&4294967295|_>>>23),_=v+(y^w&(A^y))+b[7]+1735328473&4294967295,v=A+(_<<14&4294967295|_>>>18),_=w+(A^y&(v^A))+b[12]+2368359562&4294967295,w=v+(_<<20&4294967295|_>>>12),_=y+(w^v^A)+b[5]+4294588738&4294967295,y=w+(_<<4&4294967295|_>>>28),_=A+(y^w^v)+b[8]+2272392833&4294967295,A=y+(_<<11&4294967295|_>>>21),_=v+(A^y^w)+b[11]+1839030562&4294967295,v=A+(_<<16&4294967295|_>>>16),_=w+(v^A^y)+b[14]+4259657740&4294967295,w=v+(_<<23&4294967295|_>>>9),_=y+(w^v^A)+b[1]+2763975236&4294967295,y=w+(_<<4&4294967295|_>>>28),_=A+(y^w^v)+b[4]+1272893353&4294967295,A=y+(_<<11&4294967295|_>>>21),_=v+(A^y^w)+b[7]+4139469664&4294967295,v=A+(_<<16&4294967295|_>>>16),_=w+(v^A^y)+b[10]+3200236656&4294967295,w=v+(_<<23&4294967295|_>>>9),_=y+(w^v^A)+b[13]+681279174&4294967295,y=w+(_<<4&4294967295|_>>>28),_=A+(y^w^v)+b[0]+3936430074&4294967295,A=y+(_<<11&4294967295|_>>>21),_=v+(A^y^w)+b[3]+3572445317&4294967295,v=A+(_<<16&4294967295|_>>>16),_=w+(v^A^y)+b[6]+76029189&4294967295,w=v+(_<<23&4294967295|_>>>9),_=y+(w^v^A)+b[9]+3654602809&4294967295,y=w+(_<<4&4294967295|_>>>28),_=A+(y^w^v)+b[12]+3873151461&4294967295,A=y+(_<<11&4294967295|_>>>21),_=v+(A^y^w)+b[15]+530742520&4294967295,v=A+(_<<16&4294967295|_>>>16),_=w+(v^A^y)+b[2]+3299628645&4294967295,w=v+(_<<23&4294967295|_>>>9),_=y+(v^(w|~A))+b[0]+4096336452&4294967295,y=w+(_<<6&4294967295|_>>>26),_=A+(w^(y|~v))+b[7]+1126891415&4294967295,A=y+(_<<10&4294967295|_>>>22),_=v+(y^(A|~w))+b[14]+2878612391&4294967295,v=A+(_<<15&4294967295|_>>>17),_=w+(A^(v|~y))+b[5]+4237533241&4294967295,w=v+(_<<21&4294967295|_>>>11),_=y+(v^(w|~A))+b[12]+1700485571&4294967295,y=w+(_<<6&4294967295|_>>>26),_=A+(w^(y|~v))+b[3]+2399980690&4294967295,A=y+(_<<10&4294967295|_>>>22),_=v+(y^(A|~w))+b[10]+4293915773&4294967295,v=A+(_<<15&4294967295|_>>>17),_=w+(A^(v|~y))+b[1]+2240044497&4294967295,w=v+(_<<21&4294967295|_>>>11),_=y+(v^(w|~A))+b[8]+1873313359&4294967295,y=w+(_<<6&4294967295|_>>>26),_=A+(w^(y|~v))+b[15]+4264355552&4294967295,A=y+(_<<10&4294967295|_>>>22),_=v+(y^(A|~w))+b[6]+2734768916&4294967295,v=A+(_<<15&4294967295|_>>>17),_=w+(A^(v|~y))+b[13]+1309151649&4294967295,w=v+(_<<21&4294967295|_>>>11),_=y+(v^(w|~A))+b[4]+4149444226&4294967295,y=w+(_<<6&4294967295|_>>>26),_=A+(w^(y|~v))+b[11]+3174756917&4294967295,A=y+(_<<10&4294967295|_>>>22),_=v+(y^(A|~w))+b[2]+718787259&4294967295,v=A+(_<<15&4294967295|_>>>17),_=w+(A^(v|~y))+b[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(v+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+v&4294967295,T.g[3]=T.g[3]+A&4294967295}r.prototype.v=function(T,y){y===void 0&&(y=T.length);const w=y-this.blockSize,b=this.C;let v=this.h,A=0;for(;A<y;){if(v==0)for(;A<=w;)s(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<y;)if(b[v++]=T.charCodeAt(A++),v==this.blockSize){s(this,b),v=0;break}}else for(;A<y;)if(b[v++]=T[A++],v==this.blockSize){s(this,b),v=0;break}}this.h=v,this.o+=y},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;y=this.o*8;for(var w=T.length-8;w<T.length;++w)T[w]=y&255,y/=256;for(this.v(T),T=Array(16),y=0,w=0;w<4;++w)for(let b=0;b<32;b+=8)T[y++]=this.g[w]>>>b&255;return T};function i(T,y){var w=c;return Object.prototype.hasOwnProperty.call(w,T)?w[T]:w[T]=y(T)}function o(T,y){this.h=y;const w=[];let b=!0;for(let v=T.length-1;v>=0;v--){const A=T[v]|0;b&&A==y||(w[v]=A,b=!1)}this.g=w}var c={};function l(T){return-128<=T&&T<128?i(T,function(y){return new o([y|0],y<0?-1:0)}):new o([T|0],T<0?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return m;if(T<0)return C(h(-T));const y=[];let w=1;for(let b=0;T>=w;b++)y[b]=T/w|0,w*=4294967296;return new o(y,0)}function f(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return C(f(T.substring(1),y));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=h(Math.pow(y,8));let b=m;for(let A=0;A<T.length;A+=8){var v=Math.min(8,T.length-A);const _=parseInt(T.substring(A,A+v),y);v<8?(v=h(Math.pow(y,v)),b=b.j(v).add(h(_))):(b=b.j(w),b=b.add(h(_)))}return b}var m=l(0),E=l(1),P=l(16777216);n=o.prototype,n.m=function(){if(R(this))return-C(this).m();let T=0,y=1;for(let w=0;w<this.g.length;w++){const b=this.i(w);T+=(b>=0?b:4294967296+b)*y,y*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(I(this))return"0";if(R(this))return"-"+C(this).toString(T);const y=h(Math.pow(T,6));var w=this;let b="";for(;;){const v=K(w,y).g;w=D(w,v.j(y));let A=((w.g.length>0?w.g[0]:w.h)>>>0).toString(T);if(w=v,I(w))return A+b;for(;A.length<6;)A="0"+A;b=A+b}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function I(T){if(T.h!=0)return!1;for(let y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function R(T){return T.h==-1}n.l=function(T){return T=D(this,T),R(T)?-1:I(T)?0:1};function C(T){const y=T.g.length,w=[];for(let b=0;b<y;b++)w[b]=~T.g[b];return new o(w,~T.h).add(E)}n.abs=function(){return R(this)?C(this):this},n.add=function(T){const y=Math.max(this.g.length,T.g.length),w=[];let b=0;for(let v=0;v<=y;v++){let A=b+(this.i(v)&65535)+(T.i(v)&65535),_=(A>>>16)+(this.i(v)>>>16)+(T.i(v)>>>16);b=_>>>16,A&=65535,_&=65535,w[v]=_<<16|A}return new o(w,w[w.length-1]&-2147483648?-1:0)};function D(T,y){return T.add(C(y))}n.j=function(T){if(I(this)||I(T))return m;if(R(this))return R(T)?C(this).j(C(T)):C(C(this).j(T));if(R(T))return C(this.j(C(T)));if(this.l(P)<0&&T.l(P)<0)return h(this.m()*T.m());const y=this.g.length+T.g.length,w=[];for(var b=0;b<2*y;b++)w[b]=0;for(b=0;b<this.g.length;b++)for(let v=0;v<T.g.length;v++){const A=this.i(b)>>>16,_=this.i(b)&65535,ae=T.i(v)>>>16,Ce=T.i(v)&65535;w[2*b+2*v]+=_*Ce,V(w,2*b+2*v),w[2*b+2*v+1]+=A*Ce,V(w,2*b+2*v+1),w[2*b+2*v+1]+=_*ae,V(w,2*b+2*v+1),w[2*b+2*v+2]+=A*ae,V(w,2*b+2*v+2)}for(T=0;T<y;T++)w[T]=w[2*T+1]<<16|w[2*T];for(T=y;T<2*y;T++)w[T]=0;return new o(w,0)};function V(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function M(T,y){this.g=T,this.h=y}function K(T,y){if(I(y))throw Error("division by zero");if(I(T))return new M(m,m);if(R(T))return y=K(C(T),y),new M(C(y.g),C(y.h));if(R(y))return y=K(T,C(y)),new M(C(y.g),y.h);if(T.g.length>30){if(R(T)||R(y))throw Error("slowDivide_ only works with positive integers.");for(var w=E,b=y;b.l(T)<=0;)w=se(w),b=se(b);var v=ne(w,1),A=ne(b,1);for(b=ne(b,2),w=ne(w,2);!I(b);){var _=A.add(b);_.l(T)<=0&&(v=v.add(w),A=_),b=ne(b,1),w=ne(w,1)}return y=D(T,v.j(y)),new M(v,y)}for(v=m;T.l(y)>=0;){for(w=Math.max(1,Math.floor(T.m()/y.m())),b=Math.ceil(Math.log(w)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),A=h(w),_=A.j(y);R(_)||_.l(T)>0;)w-=b,A=h(w),_=A.j(y);I(A)&&(A=E),v=v.add(A),T=D(T,_)}return new M(v,T)}n.B=function(T){return K(this,T).h},n.and=function(T){const y=Math.max(this.g.length,T.g.length),w=[];for(let b=0;b<y;b++)w[b]=this.i(b)&T.i(b);return new o(w,this.h&T.h)},n.or=function(T){const y=Math.max(this.g.length,T.g.length),w=[];for(let b=0;b<y;b++)w[b]=this.i(b)|T.i(b);return new o(w,this.h|T.h)},n.xor=function(T){const y=Math.max(this.g.length,T.g.length),w=[];for(let b=0;b<y;b++)w[b]=this.i(b)^T.i(b);return new o(w,this.h^T.h)};function se(T){const y=T.g.length+1,w=[];for(let b=0;b<y;b++)w[b]=T.i(b)<<1|T.i(b-1)>>>31;return new o(w,T.h)}function ne(T,y){const w=y>>5;y%=32;const b=T.g.length-w,v=[];for(let A=0;A<b;A++)v[A]=y>0?T.i(A+w)>>>y|T.i(A+w+1)<<32-y:T.i(A+w);return new o(v,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Pf=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,rn=o}).apply(typeof $u<"u"?$u:typeof self<"u"?self:typeof window<"u"?window:{});var Js=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xf,Zr,kf,fi,Aa,Nf,Of,Df;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Js=="object"&&Js];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var S=a[p];if(!(S in d))break e;d=d[S]}a=a[a.length-1],p=d[a],u=u(p),u!=p&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(u){var d=[],p;for(p in u)Object.prototype.hasOwnProperty.call(u,p)&&d.push([p,u[p]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function l(a,u,d){return a.call.apply(a.bind,arguments)}function h(a,u,d){return h=l,h.apply(null,arguments)}function f(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function m(a,u){function d(){}d.prototype=u.prototype,a.Z=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(p,S,k){for(var L=Array(arguments.length-2),J=2;J<arguments.length;J++)L[J-2]=arguments[J];return u.prototype[S].apply(p,L)}}var E=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function P(a){const u=a.length;if(u>0){const d=Array(u);for(let p=0;p<u;p++)d[p]=a[p];return d}return[]}function I(a,u){for(let p=1;p<arguments.length;p++){const S=arguments[p];var d=typeof S;if(d=d!="object"?d:S?Array.isArray(S)?"array":d:"null",d=="array"||d=="object"&&typeof S.length=="number"){d=a.length||0;const k=S.length||0;a.length=d+k;for(let L=0;L<k;L++)a[d+L]=S[L]}else a.push(S)}}class R{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function C(a){o.setTimeout(()=>{throw a},0)}function D(){var a=T;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class V{constructor(){this.h=this.g=null}add(u,d){const p=M.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var M=new R(()=>new K,a=>a.reset());class K{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let se,ne=!1,T=new V,y=()=>{const a=Promise.resolve(void 0);se=()=>{a.then(w)}};function w(){for(var a;a=D();){try{a.h.call(a.g)}catch(d){C(d)}var u=M;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}ne=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,u),o.removeEventListener("test",d,u)}catch{}return a}();function _(a){return/^[\s\xa0]*$/.test(a)}function ae(a,u){v.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}m(ae,v),ae.prototype.init=function(a,u){const d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ae.Z.h.call(this)},ae.prototype.h=function(){ae.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ce="closure_listenable_"+(Math.random()*1e6|0),fe=0;function Ze(a,u,d,p,S){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=S,this.key=++fe,this.da=this.fa=!1}function B(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function pt(a,u,d){for(const p in a)u.call(d,a[p],p,a)}function $n(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function Be(a){const u={};for(const d in a)u[d]=a[d];return u}const Ke="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pe(a,u){let d,p;for(let S=1;S<arguments.length;S++){p=arguments[S];for(d in p)a[d]=p[d];for(let k=0;k<Ke.length;k++)d=Ke[k],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function ue(a){this.src=a,this.g={},this.h=0}ue.prototype.add=function(a,u,d,p,S){const k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);const L=zn(a,u,p,S);return L>-1?(u=a[L],d||(u.fa=!1)):(u=new Ze(u,this.src,k,!!p,S),u.fa=d,a.push(u)),u};function it(a,u){const d=u.type;if(d in a.g){var p=a.g[d],S=Array.prototype.indexOf.call(p,u,void 0),k;(k=S>=0)&&Array.prototype.splice.call(p,S,1),k&&(B(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function zn(a,u,d,p){for(let S=0;S<a.length;++S){const k=a[S];if(!k.da&&k.listener==u&&k.capture==!!d&&k.ha==p)return S}return-1}var me="closure_lm_"+(Math.random()*1e6|0),qn={};function pn(a,u,d,p,S){if(Array.isArray(u)){for(let k=0;k<u.length;k++)pn(a,u[k],d,p,S);return null}return d=Wc(d),a&&a[Ce]?a.J(u,d,c(p)?!!p.capture:!1,S):Hn(a,u,d,!1,p,S)}function Hn(a,u,d,p,S,k){if(!u)throw Error("Invalid event type");const L=c(S)?!!S.capture:!!S;let J=go(a);if(J||(a[me]=J=new ue(a)),d=J.add(u,d,p,L,k),d.proxy)return d;if(p=Pr(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)A||(S=L),S===void 0&&(S=!1),a.addEventListener(u.toString(),p,S);else if(a.attachEvent)a.attachEvent(Hc(u.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Pr(){function a(d){return u.call(a.src,a.listener,d)}const u=jm;return a}function mn(a,u,d,p,S){if(Array.isArray(u))for(var k=0;k<u.length;k++)mn(a,u[k],d,p,S);else p=c(p)?!!p.capture:!!p,d=Wc(d),a&&a[Ce]?(a=a.i,k=String(u).toString(),k in a.g&&(u=a.g[k],d=zn(u,d,p,S),d>-1&&(B(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete a.g[k],a.h--)))):a&&(a=go(a))&&(u=a.g[u.toString()],a=-1,u&&(a=zn(u,d,p,S)),(d=a>-1?u[a]:null)&&mo(d))}function mo(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Ce])it(u.i,a);else{var d=a.type,p=a.proxy;u.removeEventListener?u.removeEventListener(d,p,a.capture):u.detachEvent?u.detachEvent(Hc(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=go(u))?(it(d,a),d.h==0&&(d.src=null,u[me]=null)):B(a)}}}function Hc(a){return a in qn?qn[a]:qn[a]="on"+a}function jm(a,u){if(a.da)a=!0;else{u=new ae(u,this);const d=a.listener,p=a.ha||a.src;a.fa&&mo(a),a=d.call(p,u)}return a}function go(a){return a=a[me],a instanceof ue?a:null}var yo="__closure_events_fn_"+(Math.random()*1e9>>>0);function Wc(a){return typeof a=="function"?a:(a[yo]||(a[yo]=function(u){return a.handleEvent(u)}),a[yo])}function Oe(){b.call(this),this.i=new ue(this),this.M=this,this.G=null}m(Oe,b),Oe.prototype[Ce]=!0,Oe.prototype.removeEventListener=function(a,u,d,p){mn(this,a,u,d,p)};function je(a,u){var d,p=a.G;if(p)for(d=[];p;p=p.G)d.push(p);if(a=a.M,p=u.type||u,typeof u=="string")u=new v(u,a);else if(u instanceof v)u.target=u.target||a;else{var S=u;u=new v(p,a),pe(u,S)}S=!0;let k,L;if(d)for(L=d.length-1;L>=0;L--)k=u.g=d[L],S=Vs(k,p,!0,u)&&S;if(k=u.g=a,S=Vs(k,p,!0,u)&&S,S=Vs(k,p,!1,u)&&S,d)for(L=0;L<d.length;L++)k=u.g=d[L],S=Vs(k,p,!1,u)&&S}Oe.prototype.N=function(){if(Oe.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const d=a.g[u];for(let p=0;p<d.length;p++)B(d[p]);delete a.g[u],a.h--}}this.G=null},Oe.prototype.J=function(a,u,d,p){return this.i.add(String(a),u,!1,d,p)},Oe.prototype.K=function(a,u,d,p){return this.i.add(String(a),u,!0,d,p)};function Vs(a,u,d,p){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let S=!0;for(let k=0;k<u.length;++k){const L=u[k];if(L&&!L.da&&L.capture==d){const J=L.listener,Te=L.ha||L.src;L.fa&&it(a.i,L),S=J.call(Te,p)!==!1&&S}}return S&&!p.defaultPrevented}function Um(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function Gc(a){a.g=Um(()=>{a.g=null,a.i&&(a.i=!1,Gc(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Bm extends b{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Gc(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xr(a){b.call(this),this.h=a,this.g={}}m(xr,b);var Kc=[];function Qc(a){pt(a.g,function(u,d){this.g.hasOwnProperty(d)&&mo(u)},a),a.g={}}xr.prototype.N=function(){xr.Z.N.call(this),Qc(this)},xr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _o=o.JSON.stringify,$m=o.JSON.parse,zm=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Jc(){}function Yc(){}var kr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function wo(){v.call(this,"d")}m(wo,v);function Eo(){v.call(this,"c")}m(Eo,v);var gn={},Xc=null;function Ls(){return Xc=Xc||new Oe}gn.Ia="serverreachability";function Zc(a){v.call(this,gn.Ia,a)}m(Zc,v);function Nr(a){const u=Ls();je(u,new Zc(u))}gn.STAT_EVENT="statevent";function el(a,u){v.call(this,gn.STAT_EVENT,a),this.stat=u}m(el,v);function Ue(a){const u=Ls();je(u,new el(u,a))}gn.Ja="timingevent";function tl(a,u){v.call(this,gn.Ja,a),this.size=u}m(tl,v);function Or(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function Dr(){this.g=!0}Dr.prototype.ua=function(){this.g=!1};function qm(a,u,d,p,S,k){a.info(function(){if(a.g)if(k){var L="",J=k.split("&");for(let oe=0;oe<J.length;oe++){var Te=J[oe].split("=");if(Te.length>1){const Ae=Te[0];Te=Te[1];const gt=Ae.split("_");L=gt.length>=2&&gt[1]=="type"?L+(Ae+"="+Te+"&"):L+(Ae+"=redacted&")}}}else L=null;else L=k;return"XMLHTTP REQ ("+p+") [attempt "+S+"]: "+u+`
`+d+`
`+L})}function Hm(a,u,d,p,S,k,L){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+S+"]: "+u+`
`+d+`
`+k+" "+L})}function Wn(a,u,d,p){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Gm(a,d)+(p?" "+p:"")})}function Wm(a,u){a.info(function(){return"TIMEOUT: "+u})}Dr.prototype.info=function(){};function Gm(a,u){if(!a.g)return u;if(!u)return null;try{const k=JSON.parse(u);if(k){for(a=0;a<k.length;a++)if(Array.isArray(k[a])){var d=k[a];if(!(d.length<2)){var p=d[1];if(Array.isArray(p)&&!(p.length<1)){var S=p[0];if(S!="noop"&&S!="stop"&&S!="close")for(let L=1;L<p.length;L++)p[L]=""}}}}return _o(k)}catch{return u}}var Ms={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},nl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},rl;function To(){}m(To,Jc),To.prototype.g=function(){return new XMLHttpRequest},rl=new To;function Vr(a){return encodeURIComponent(String(a))}function Km(a){var u=1;a=a.split(":");const d=[];for(;u>0&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function Bt(a,u,d,p){this.j=a,this.i=u,this.l=d,this.S=p||1,this.V=new xr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new sl}function sl(){this.i=null,this.g="",this.h=!1}var il={},vo={};function Io(a,u,d){a.M=1,a.A=js(mt(u)),a.u=d,a.R=!0,ol(a,null)}function ol(a,u){a.F=Date.now(),Fs(a),a.B=mt(a.A);var d=a.B,p=a.S;Array.isArray(p)||(p=[String(p)]),wl(d.i,"t",p),a.C=0,d=a.j.L,a.h=new sl,a.g=Ml(a.j,d?u:null,!a.u),a.P>0&&(a.O=new Bm(h(a.Y,a,a.g),a.P)),u=a.V,d=a.g,p=a.ba;var S="readystatechange";Array.isArray(S)||(S&&(Kc[0]=S.toString()),S=Kc);for(let k=0;k<S.length;k++){const L=pn(d,S[k],p||u.handleEvent,!1,u.h||u);if(!L)break;u.g[L.key]=L}u=a.J?Be(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),Nr(),qm(a.i,a.v,a.B,a.l,a.S,a.u)}Bt.prototype.ba=function(a){a=a.target;const u=this.O;u&&qt(a)==3?u.j():this.Y(a)},Bt.prototype.Y=function(a){try{if(a==this.g)e:{const J=qt(this.g),Te=this.g.ya(),oe=this.g.ca();if(!(J<3)&&(J!=3||this.g&&(this.h.h||this.g.la()||Sl(this.g)))){this.K||J!=4||Te==7||(Te==8||oe<=0?Nr(3):Nr(2)),bo(this);var u=this.g.ca();this.X=u;var d=Qm(this);if(this.o=u==200,Hm(this.i,this.v,this.B,this.l,this.S,J,u),this.o){if(this.U&&!this.L){t:{if(this.g){var p,S=this.g;if((p=S.g?S.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(p)){var k=p;break t}}k=null}if(a=k)Wn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ao(this,a);else{this.o=!1,this.m=3,Ue(12),yn(this),Lr(this);break e}}if(this.R){a=!0;let Ae;for(;!this.K&&this.C<d.length;)if(Ae=Jm(this,d),Ae==vo){J==4&&(this.m=4,Ue(14),a=!1),Wn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ae==il){this.m=4,Ue(15),Wn(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Wn(this.i,this.l,Ae,null),Ao(this,Ae);if(al(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),J!=4||d.length!=0||this.h.h||(this.m=1,Ue(16),a=!1),this.o=this.o&&a,!a)Wn(this.i,this.l,d,"[Invalid Chunked Response]"),yn(this),Lr(this);else if(d.length>0&&!this.W){this.W=!0;var L=this.j;L.g==this&&L.aa&&!L.P&&(L.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Oo(L),L.P=!0,Ue(11))}}else Wn(this.i,this.l,d,null),Ao(this,d);J==4&&yn(this),this.o&&!this.K&&(J==4?Ol(this.j,this):(this.o=!1,Fs(this)))}else ug(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,Ue(12)):(this.m=0,Ue(13)),yn(this),Lr(this)}}}catch{}finally{}};function Qm(a){if(!al(a))return a.g.la();const u=Sl(a.g);if(u==="")return"";let d="";const p=u.length,S=qt(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return yn(a),Lr(a),"";a.h.i=new o.TextDecoder}for(let k=0;k<p;k++)a.h.h=!0,d+=a.h.i.decode(u[k],{stream:!(S&&k==p-1)});return u.length=0,a.h.g+=d,a.C=0,a.h.g}function al(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Jm(a,u){var d=a.C,p=u.indexOf(`
`,d);return p==-1?vo:(d=Number(u.substring(d,p)),isNaN(d)?il:(p+=1,p+d>u.length?vo:(u=u.slice(p,p+d),a.C=p+d,u)))}Bt.prototype.cancel=function(){this.K=!0,yn(this)};function Fs(a){a.T=Date.now()+a.H,cl(a,a.H)}function cl(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Or(h(a.aa,a),u)}function bo(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Bt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Wm(this.i,this.B),this.M!=2&&(Nr(),Ue(17)),yn(this),this.m=2,Lr(this)):cl(this,this.T-a)};function Lr(a){a.j.I==0||a.K||Ol(a.j,a)}function yn(a){bo(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,Qc(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function Ao(a,u){try{var d=a.j;if(d.I!=0&&(d.g==a||So(d.h,a))){if(!a.L&&So(d.h,a)&&d.I==3){try{var p=d.Ba.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var S=p;if(S[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)qs(d),$s(d);else break e;No(d),Ue(18)}}else d.xa=S[1],0<d.xa-d.K&&S[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Or(h(d.Va,d),6e3));hl(d.h)<=1&&d.ta&&(d.ta=void 0)}else wn(d,11)}else if((a.L||d.g==a)&&qs(d),!_(u))for(S=d.Ba.g.parse(u),u=0;u<S.length;u++){let oe=S[u];const Ae=oe[0];if(!(Ae<=d.K))if(d.K=Ae,oe=oe[1],d.I==2)if(oe[0]=="c"){d.M=oe[1],d.ba=oe[2];const gt=oe[3];gt!=null&&(d.ka=gt,d.j.info("VER="+d.ka));const En=oe[4];En!=null&&(d.za=En,d.j.info("SVER="+d.za));const Ht=oe[5];Ht!=null&&typeof Ht=="number"&&Ht>0&&(p=1.5*Ht,d.O=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Wt=a.g;if(Wt){const Ws=Wt.g?Wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ws){var k=p.h;k.g||Ws.indexOf("spdy")==-1&&Ws.indexOf("quic")==-1&&Ws.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Ro(k,k.h),k.h=null))}if(p.G){const Do=Wt.g?Wt.g.getResponseHeader("X-HTTP-Session-Id"):null;Do&&(p.wa=Do,ce(p.J,p.G,Do))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),p=d;var L=a;if(p.na=Ll(p,p.L?p.ba:null,p.W),L.L){dl(p.h,L);var J=L,Te=p.O;Te&&(J.H=Te),J.D&&(bo(J),Fs(J)),p.g=L}else kl(p);d.i.length>0&&zs(d)}else oe[0]!="stop"&&oe[0]!="close"||wn(d,7);else d.I==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?wn(d,7):ko(d):oe[0]!="noop"&&d.l&&d.l.qa(oe),d.A=0)}}Nr(4)}catch{}}var Ym=class{constructor(a,u){this.g=a,this.map=u}};function ll(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ul(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function hl(a){return a.h?1:a.g?a.g.size:0}function So(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Ro(a,u){a.g?a.g.add(u):a.h=u}function dl(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}ll.prototype.cancel=function(){if(this.i=fl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function fl(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.G);return u}return P(a.i)}var pl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xm(a,u){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const p=a[d].indexOf("=");let S,k=null;p>=0?(S=a[d].substring(0,p),k=a[d].substring(p+1)):S=a[d],u(S,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function $t(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof $t?(this.l=a.l,Mr(this,a.j),this.o=a.o,this.g=a.g,Fr(this,a.u),this.h=a.h,Co(this,El(a.i)),this.m=a.m):a&&(u=String(a).match(pl))?(this.l=!1,Mr(this,u[1]||"",!0),this.o=jr(u[2]||""),this.g=jr(u[3]||"",!0),Fr(this,u[4]),this.h=jr(u[5]||"",!0),Co(this,u[6]||"",!0),this.m=jr(u[7]||"")):(this.l=!1,this.i=new Br(null,this.l))}$t.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(Ur(u,ml,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Ur(u,ml,!0),"@"),a.push(Vr(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ur(d,d.charAt(0)=="/"?tg:eg,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ur(d,rg)),a.join("")},$t.prototype.resolve=function(a){const u=mt(this);let d=!!a.j;d?Mr(u,a.j):d=!!a.o,d?u.o=a.o:d=!!a.g,d?u.g=a.g:d=a.u!=null;var p=a.h;if(d)Fr(u,a.u);else if(d=!!a.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var S=u.h.lastIndexOf("/");S!=-1&&(p=u.h.slice(0,S+1)+p)}if(S=p,S==".."||S==".")p="";else if(S.indexOf("./")!=-1||S.indexOf("/.")!=-1){p=S.lastIndexOf("/",0)==0,S=S.split("/");const k=[];for(let L=0;L<S.length;){const J=S[L++];J=="."?p&&L==S.length&&k.push(""):J==".."?((k.length>1||k.length==1&&k[0]!="")&&k.pop(),p&&L==S.length&&k.push("")):(k.push(J),p=!0)}p=k.join("/")}else p=S}return d?u.h=p:d=a.i.toString()!=="",d?Co(u,El(a.i)):d=!!a.m,d&&(u.m=a.m),u};function mt(a){return new $t(a)}function Mr(a,u,d){a.j=d?jr(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Fr(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function Co(a,u,d){u instanceof Br?(a.i=u,sg(a.i,a.l)):(d||(u=Ur(u,ng)),a.i=new Br(u,a.l))}function ce(a,u,d){a.i.set(u,d)}function js(a){return ce(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function jr(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ur(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,Zm),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Zm(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ml=/[#\/\?@]/g,eg=/[#\?:]/g,tg=/[#\?]/g,ng=/[#\?@]/g,rg=/#/g;function Br(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function _n(a){a.g||(a.g=new Map,a.h=0,a.i&&Xm(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=Br.prototype,n.add=function(a,u){_n(this),this.i=null,a=Gn(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function gl(a,u){_n(a),u=Gn(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function yl(a,u){return _n(a),u=Gn(a,u),a.g.has(u)}n.forEach=function(a,u){_n(this),this.g.forEach(function(d,p){d.forEach(function(S){a.call(u,S,p,this)},this)},this)};function _l(a,u){_n(a);let d=[];if(typeof u=="string")yl(a,u)&&(d=d.concat(a.g.get(Gn(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)d=d.concat(a[u]);return d}n.set=function(a,u){return _n(this),this.i=null,a=Gn(this,a),yl(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=_l(this,a),a.length>0?String(a[0]):u):u};function wl(a,u,d){gl(a,u),d.length>0&&(a.i=null,a.g.set(Gn(a,u),P(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let p=0;p<u.length;p++){var d=u[p];const S=Vr(d);d=_l(this,d);for(let k=0;k<d.length;k++){let L=S;d[k]!==""&&(L+="="+Vr(d[k])),a.push(L)}}return this.i=a.join("&")};function El(a){const u=new Br;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function Gn(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function sg(a,u){u&&!a.j&&(_n(a),a.i=null,a.g.forEach(function(d,p){const S=p.toLowerCase();p!=S&&(gl(this,p),wl(this,S,d))},a)),a.j=u}function ig(a,u){const d=new Dr;if(o.Image){const p=new Image;p.onload=f(zt,d,"TestLoadImage: loaded",!0,u,p),p.onerror=f(zt,d,"TestLoadImage: error",!1,u,p),p.onabort=f(zt,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=f(zt,d,"TestLoadImage: timeout",!1,u,p),o.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else u(!1)}function og(a,u){const d=new Dr,p=new AbortController,S=setTimeout(()=>{p.abort(),zt(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:p.signal}).then(k=>{clearTimeout(S),k.ok?zt(d,"TestPingServer: ok",!0,u):zt(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),zt(d,"TestPingServer: error",!1,u)})}function zt(a,u,d,p,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),p(d)}catch{}}function ag(){this.g=new zm}function Po(a){this.i=a.Sb||null,this.h=a.ab||!1}m(Po,Jc),Po.prototype.g=function(){return new Us(this.i,this.h)};function Us(a,u){Oe.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Us,Oe),n=Us.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,zr(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,$r(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,zr(this)),this.g&&(this.readyState=3,zr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Tl(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Tl(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?$r(this):zr(this),this.readyState==3&&Tl(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,$r(this))},n.Na=function(a){this.g&&(this.response=a,$r(this))},n.ga=function(){this.g&&$r(this)};function $r(a){a.readyState=4,a.l=null,a.j=null,a.B=null,zr(a)}n.setRequestHeader=function(a,u){this.A.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function zr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Us.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function vl(a){let u="";return pt(a,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function xo(a,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=vl(d),typeof a=="string"?d!=null&&Vr(d):ce(a,u,d))}function ge(a){Oe.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(ge,Oe);var cg=/^https?$/i,lg=["POST","PUT"];n=ge.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():rl.g(),this.g.onreadystatechange=E(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(k){Il(this,k);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var S in p)d.set(S,p[S]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const k of p.keys())d.set(k,p.get(k));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(k=>k.toLowerCase()=="content-type"),S=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(lg,u,void 0)>=0)||p||S||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,L]of d)this.g.setRequestHeader(k,L);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(k){Il(this,k)}};function Il(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,bl(a),Bs(a)}function bl(a){a.A||(a.A=!0,je(a,"complete"),je(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,je(this,"complete"),je(this,"abort"),Bs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bs(this,!0)),ge.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Al(this):this.Xa())},n.Xa=function(){Al(this)};function Al(a){if(a.h&&typeof i<"u"){if(a.v&&qt(a)==4)setTimeout(a.Ca.bind(a),0);else if(je(a,"readystatechange"),qt(a)==4){a.h=!1;try{const k=a.ca();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=k===0){let L=String(a.D).match(pl)[1]||null;!L&&o.self&&o.self.location&&(L=o.self.location.protocol.slice(0,-1)),p=!cg.test(L?L.toLowerCase():"")}d=p}if(d)je(a,"complete"),je(a,"success");else{a.o=6;try{var S=qt(a)>2?a.g.statusText:""}catch{S=""}a.l=S+" ["+a.ca()+"]",bl(a)}}finally{Bs(a)}}}}function Bs(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,u||je(a,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function qt(a){return a.g?a.g.readyState:0}n.ca=function(){try{return qt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),$m(u)}};function Sl(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ug(a){const u={};a=(a.g&&qt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(_(a[p]))continue;var d=Km(a[p]);const S=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const k=u[S]||[];u[S]=k,k.push(d)}$n(u,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function qr(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Rl(a){this.za=0,this.i=[],this.j=new Dr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=qr("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=qr("baseRetryDelayMs",5e3,a),this.Za=qr("retryDelaySeedMs",1e4,a),this.Ta=qr("forwardChannelMaxRetries",2,a),this.va=qr("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new ll(a&&a.concurrentRequestLimit),this.Ba=new ag,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Rl.prototype,n.ka=8,n.I=1,n.connect=function(a,u,d,p){Ue(0),this.W=a,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.J=Ll(this,null,this.W),zs(this)};function ko(a){if(Cl(a),a.I==3){var u=a.V++,d=mt(a.J);if(ce(d,"SID",a.M),ce(d,"RID",u),ce(d,"TYPE","terminate"),Hr(a,d),u=new Bt(a,a.j,u),u.M=2,u.A=js(mt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=u.A,d=!0),d||(u.g=Ml(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Fs(u)}Vl(a)}function $s(a){a.g&&(Oo(a),a.g.cancel(),a.g=null)}function Cl(a){$s(a),a.v&&(o.clearTimeout(a.v),a.v=null),qs(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function zs(a){if(!ul(a.h)&&!a.m){a.m=!0;var u=a.Ea;se||y(),ne||(se(),ne=!0),T.add(u,a),a.D=0}}function hg(a,u){return hl(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Or(h(a.Ea,a,u),Dl(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const S=new Bt(this,this.j,a);let k=this.o;if(this.U&&(k?(k=Be(k),pe(k,this.U)):k=this.U),this.u!==null||this.R||(S.J=k,k=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=xl(this,S,u),d=mt(this.J),ce(d,"RID",a),ce(d,"CVER",22),this.G&&ce(d,"X-HTTP-Session-Id",this.G),Hr(this,d),k&&(this.R?u="headers="+Vr(vl(k))+"&"+u:this.u&&xo(d,this.u,k)),Ro(this.h,S),this.Ra&&ce(d,"TYPE","init"),this.S?(ce(d,"$req",u),ce(d,"SID","null"),S.U=!0,Io(S,d,null)):Io(S,d,u),this.I=2}}else this.I==3&&(a?Pl(this,a):this.i.length==0||ul(this.h)||Pl(this))};function Pl(a,u){var d;u?d=u.l:d=a.V++;const p=mt(a.J);ce(p,"SID",a.M),ce(p,"RID",d),ce(p,"AID",a.K),Hr(a,p),a.u&&a.o&&xo(p,a.u,a.o),d=new Bt(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),u&&(a.i=u.G.concat(a.i)),u=xl(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Ro(a.h,d),Io(d,p,u)}function Hr(a,u){a.H&&pt(a.H,function(d,p){ce(u,p,d)}),a.l&&pt({},function(d,p){ce(u,p,d)})}function xl(a,u,d){d=Math.min(a.i.length,d);const p=a.l?h(a.l.Ka,a.l,a):null;e:{var S=a.i;let J=-1;for(;;){const Te=["count="+d];J==-1?d>0?(J=S[0].g,Te.push("ofs="+J)):J=0:Te.push("ofs="+J);let oe=!0;for(let Ae=0;Ae<d;Ae++){var k=S[Ae].g;const gt=S[Ae].map;if(k-=J,k<0)J=Math.max(0,S[Ae].g-100),oe=!1;else try{k="req"+k+"_"||"";try{var L=gt instanceof Map?gt:Object.entries(gt);for(const[En,Ht]of L){let Wt=Ht;c(Ht)&&(Wt=_o(Ht)),Te.push(k+En+"="+encodeURIComponent(Wt))}}catch(En){throw Te.push(k+"type="+encodeURIComponent("_badmap")),En}}catch{p&&p(gt)}}if(oe){L=Te.join("&");break e}}L=void 0}return a=a.i.splice(0,d),u.G=a,L}function kl(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;se||y(),ne||(se(),ne=!0),T.add(u,a),a.A=0}}function No(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Or(h(a.Da,a),Dl(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,Nl(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Or(h(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ue(10),$s(this),Nl(this))};function Oo(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Nl(a){a.g=new Bt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=mt(a.na);ce(u,"RID","rpc"),ce(u,"SID",a.M),ce(u,"AID",a.K),ce(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&ce(u,"TO",a.ia),ce(u,"TYPE","xmlhttp"),Hr(a,u),a.u&&a.o&&xo(u,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=js(mt(u)),d.u=null,d.R=!0,ol(d,a)}n.Va=function(){this.C!=null&&(this.C=null,$s(this),No(this),Ue(19))};function qs(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Ol(a,u){var d=null;if(a.g==u){qs(a),Oo(a),a.g=null;var p=2}else if(So(a.h,u))d=u.G,dl(a.h,u),p=1;else return;if(a.I!=0){if(u.o)if(p==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var S=a.D;p=Ls(),je(p,new tl(p,d)),zs(a)}else kl(a);else if(S=u.m,S==3||S==0&&u.X>0||!(p==1&&hg(a,u)||p==2&&No(a)))switch(d&&d.length>0&&(u=a.h,u.i=u.i.concat(d)),S){case 1:wn(a,5);break;case 4:wn(a,10);break;case 3:wn(a,6);break;default:wn(a,2)}}}function Dl(a,u){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*u}function wn(a,u){if(a.j.info("Error code "+u),u==2){var d=h(a.bb,a),p=a.Ua;const S=!p;p=new $t(p||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Mr(p,"https"),js(p),S?ig(p.toString(),d):og(p.toString(),d)}else Ue(2);a.I=0,a.l&&a.l.pa(u),Vl(a),Cl(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Ue(2)):(this.j.info("Failed to ping google.com"),Ue(1))};function Vl(a){if(a.I=0,a.ja=[],a.l){const u=fl(a.h);(u.length!=0||a.i.length!=0)&&(I(a.ja,u),I(a.ja,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.oa()}}function Ll(a,u,d){var p=d instanceof $t?mt(d):new $t(d);if(p.g!="")u&&(p.g=u+"."+p.g),Fr(p,p.u);else{var S=o.location;p=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;const k=new $t(null);p&&Mr(k,p),u&&(k.g=u),S&&Fr(k,S),d&&(k.h=d),p=k}return d=a.G,u=a.wa,d&&u&&ce(p,d,u),ce(p,"VER",a.ka),Hr(a,p),p}function Ml(a,u,d){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new ge(new Po({ab:d})):new ge(a.ma),u.Fa(a.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fl(){}n=Fl.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Hs(){}Hs.prototype.g=function(a,u){return new Qe(a,u)};function Qe(a,u){Oe.call(this),this.g=new Rl(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!_(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!_(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Kn(this)}m(Qe,Oe),Qe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Qe.prototype.close=function(){ko(this.g)},Qe.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=_o(a),a=d);u.i.push(new Ym(u.Ya++,a)),u.I==3&&zs(u)},Qe.prototype.N=function(){this.g.l=null,delete this.j,ko(this.g),delete this.g,Qe.Z.N.call(this)};function jl(a){wo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}m(jl,wo);function Ul(){Eo.call(this),this.status=1}m(Ul,Eo);function Kn(a){this.g=a}m(Kn,Fl),Kn.prototype.ra=function(){je(this.g,"a")},Kn.prototype.qa=function(a){je(this.g,new jl(a))},Kn.prototype.pa=function(a){je(this.g,new Ul)},Kn.prototype.oa=function(){je(this.g,"b")},Hs.prototype.createWebChannel=Hs.prototype.g,Qe.prototype.send=Qe.prototype.o,Qe.prototype.open=Qe.prototype.m,Qe.prototype.close=Qe.prototype.close,Df=function(){return new Hs},Of=function(){return Ls()},Nf=gn,Aa={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ms.NO_ERROR=0,Ms.TIMEOUT=8,Ms.HTTP_ERROR=6,fi=Ms,nl.COMPLETE="complete",kf=nl,Yc.EventType=kr,kr.OPEN="a",kr.CLOSE="b",kr.ERROR="c",kr.MESSAGE="d",Oe.prototype.listen=Oe.prototype.J,Zr=Yc,ge.prototype.listenOnce=ge.prototype.K,ge.prototype.getLastError=ge.prototype.Ha,ge.prototype.getLastErrorCode=ge.prototype.ya,ge.prototype.getStatus=ge.prototype.ca,ge.prototype.getResponseJson=ge.prototype.La,ge.prototype.getResponseText=ge.prototype.la,ge.prototype.send=ge.prototype.ea,ge.prototype.setWithCredentials=ge.prototype.Fa,xf=ge}).apply(typeof Js<"u"?Js:typeof self<"u"?self:typeof window<"u"?window:{});const zu="@firebase/firestore",qu="4.9.2";/**
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
 */class Ve{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ve.UNAUTHENTICATED=new Ve(null),Ve.GOOGLE_CREDENTIALS=new Ve("google-credentials-uid"),Ve.FIRST_PARTY=new Ve("first-party-uid"),Ve.MOCK_USER=new Ve("mock-user");/**
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
 */let Ir="12.3.0";/**
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
 */const Nn=new Ji("@firebase/firestore");function Xn(){return Nn.logLevel}function F(n,...e){if(Nn.logLevel<=Z.DEBUG){const t=e.map(oc);Nn.debug(`Firestore (${Ir}): ${n}`,...t)}}function Ft(n,...e){if(Nn.logLevel<=Z.ERROR){const t=e.map(oc);Nn.error(`Firestore (${Ir}): ${n}`,...t)}}function dr(n,...e){if(Nn.logLevel<=Z.WARN){const t=e.map(oc);Nn.warn(`Firestore (${Ir}): ${n}`,...t)}}function oc(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function H(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Vf(n,r,t)}function Vf(n,e,t){let r=`FIRESTORE (${Ir}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Ft(r),new Error(r)}function ie(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Vf(e,s,r)}function G(n,e){return n}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends ft{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class sn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Lf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Cv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ve.UNAUTHENTICATED))}shutdown(){}}class Pv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class xv{constructor(e){this.t=e,this.currentUser=Ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ie(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new sn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new sn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new sn)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ie(typeof r.accessToken=="string",31837,{l:r}),new Lf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ie(e===null||typeof e=="string",2055,{h:e}),new Ve(e)}}class kv{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ve.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Nv{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new kv(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ve.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Hu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ov{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,tt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ie(this.o===void 0,3512);const r=i=>{i.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Hu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ie(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Hu(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class ac{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Dv(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ee(n,e){return n<e?-1:n>e?1:0}function Sa(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return Qo(s)===Qo(i)?ee(s,i):Qo(s)?1:-1}return ee(n.length,e.length)}const Vv=55296,Lv=57343;function Qo(n){const e=n.charCodeAt(0);return e>=Vv&&e<=Lv}function fr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const Wu="__name__";class _t{constructor(e,t,r){t===void 0?t=0:t>e.length&&H(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&H(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return _t.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof _t?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=_t.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ee(e.length,t.length)}static compareSegments(e,t){const r=_t.isNumericId(e),s=_t.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?_t.extractNumericId(e).compare(_t.extractNumericId(t)):Sa(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return rn.fromString(e.substring(4,e.length-2))}}class he extends _t{construct(e,t,r){return new he(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new he(t)}static emptyPath(){return new he([])}}const Mv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xe extends _t{construct(e,t,r){return new xe(e,t,r)}static isValidIdentifier(e){return Mv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Wu}static keyField(){return new xe([Wu])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new $(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new $(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new $(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new $(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xe(t)}static emptyPath(){return new xe([])}}/**
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
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(he.fromString(e))}static fromName(e){return new z(he.fromString(e).popFirst(5))}static empty(){return new z(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return he.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new he(e.slice()))}}/**
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
 */function Fv(n,e,t){if(!t)throw new $(O.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function jv(n,e,t,r){if(e===!0&&r===!0)throw new $(O.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Gu(n){if(!z.isDocumentKey(n))throw new $(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Mf(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function cc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":H(12329,{type:typeof n})}function fs(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new $(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=cc(n);throw new $(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Ee(n,e){const t={typeString:n};return e&&(t.value=e),t}function xs(n,e){if(!Mf(n))throw new $(O.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new $(O.INVALID_ARGUMENT,t);return!0}/**
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
 */const Ku=-62135596800,Qu=1e6;class le{static now(){return le.fromMillis(Date.now())}static fromDate(e){return le.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Qu);return new le(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new $(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new $(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ku)throw new $(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Qu}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:le._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(xs(e,le._jsonSchema))return new le(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ku;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}le._jsonSchemaVersion="firestore/timestamp/1.0",le._jsonSchema={type:Ee("string",le._jsonSchemaVersion),seconds:Ee("number"),nanoseconds:Ee("number")};/**
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
 */class W{static fromTimestamp(e){return new W(e)}static min(){return new W(new le(0,0))}static max(){return new W(new le(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ps=-1;function Uv(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=W.fromTimestamp(r===1e9?new le(t+1,0):new le(t,r));return new an(s,z.empty(),e)}function Bv(n){return new an(n.readTime,n.key,ps)}class an{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new an(W.min(),z.empty(),ps)}static max(){return new an(W.max(),z.empty(),ps)}}function $v(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=z.comparator(n.documentKey,e.documentKey),t!==0?t:ee(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function br(n){if(n.code!==O.FAILED_PRECONDITION||n.message!==zv)throw n;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&H(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,r)=>{t(e)})}static reject(e){return new N((t,r)=>{r(e)})}static waitFor(e){return new N((t,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&t()},l=>r(l))}),o=!0,i===s&&t()})}static or(e){let t=N.resolve(!1);for(const r of e)t=t.next(s=>s?N.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new N((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next(f=>{o[h]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,t){return new N((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Hv(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ar(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class eo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}eo.ce=-1;/**
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
 */const lc=-1;function to(n){return n==null}function xi(n){return n===0&&1/n==-1/0}function Wv(n){return typeof n=="number"&&Number.isInteger(n)&&!xi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ff="";function Gv(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Ju(e)),e=Kv(n.get(t),e);return Ju(e)}function Kv(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Ff:t+="";break;default:t+=i}}return t}function Ju(n){return n+Ff+""}/**
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
 */function Yu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Fn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function jf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class de{constructor(e,t){this.comparator=e,this.root=t||Pe.EMPTY}insert(e,t){return new de(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pe.BLACK,null,null))}remove(e){return new de(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ys(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ys(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ys(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ys(this.root,e,this.comparator,!0)}}class Ys{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pe{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Pe.RED,this.left=s??Pe.EMPTY,this.right=i??Pe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Pe(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Pe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Pe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw H(43730,{key:this.key,value:this.value});if(this.right.isRed())throw H(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw H(27949);return e+(this.isRed()?0:1)}}Pe.EMPTY=null,Pe.RED=!0,Pe.BLACK=!1;Pe.EMPTY=new class{constructor(){this.size=0}get key(){throw H(57766)}get value(){throw H(16141)}get color(){throw H(16727)}get left(){throw H(29726)}get right(){throw H(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Pe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class be{constructor(e){this.comparator=e,this.data=new de(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Xu(this.data.getIterator())}getIteratorFrom(e){return new Xu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof be)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new be(this.comparator);return t.data=e,t}}class Xu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.fields=e,e.sort(xe.comparator)}static empty(){return new lt([])}unionWith(e){let t=new be(xe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new lt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return fr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Uf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Uf("Invalid base64 string: "+i):i}}(e);return new Ne(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ne(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ne.EMPTY_BYTE_STRING=new Ne("");const Qv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function cn(n){if(ie(!!n,39018),typeof n=="string"){let e=0;const t=Qv.exec(n);if(ie(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:_e(n.seconds),nanos:_e(n.nanos)}}function _e(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ln(n){return typeof n=="string"?Ne.fromBase64String(n):Ne.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf="server_timestamp",$f="__type__",zf="__previous_value__",qf="__local_write_time__";function uc(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[$f])==null?void 0:r.stringValue)===Bf}function no(n){const e=n.mapValue.fields[zf];return uc(e)?no(e):e}function ms(n){const e=cn(n.mapValue.fields[qf].timestampValue);return new le(e.seconds,e.nanos)}/**
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
 */class Jv{constructor(e,t,r,s,i,o,c,l,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f}}const ki="(default)";class gs{constructor(e,t){this.projectId=e,this.database=t||ki}static empty(){return new gs("","")}get isDefaultDatabase(){return this.database===ki}isEqual(e){return e instanceof gs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf="__type__",Yv="__max__",Xs={mapValue:{}},Wf="__vector__",Ni="value";function un(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?uc(n)?4:Zv(n)?9007199254740991:Xv(n)?10:11:H(28295,{value:n})}function St(n,e){if(n===e)return!0;const t=un(n);if(t!==un(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ms(n).isEqual(ms(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=cn(s.timestampValue),c=cn(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return ln(s.bytesValue).isEqual(ln(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return _e(s.geoPointValue.latitude)===_e(i.geoPointValue.latitude)&&_e(s.geoPointValue.longitude)===_e(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return _e(s.integerValue)===_e(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=_e(s.doubleValue),c=_e(i.doubleValue);return o===c?xi(o)===xi(c):isNaN(o)&&isNaN(c)}return!1}(n,e);case 9:return fr(n.arrayValue.values||[],e.arrayValue.values||[],St);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Yu(o)!==Yu(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!St(o[l],c[l])))return!1;return!0}(n,e);default:return H(52216,{left:n})}}function ys(n,e){return(n.values||[]).find(t=>St(t,e))!==void 0}function pr(n,e){if(n===e)return 0;const t=un(n),r=un(e);if(t!==r)return ee(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ee(n.booleanValue,e.booleanValue);case 2:return function(i,o){const c=_e(i.integerValue||i.doubleValue),l=_e(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return Zu(n.timestampValue,e.timestampValue);case 4:return Zu(ms(n),ms(e));case 5:return Sa(n.stringValue,e.stringValue);case 6:return function(i,o){const c=ln(i),l=ln(o);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=ee(c[h],l[h]);if(f!==0)return f}return ee(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const c=ee(_e(i.latitude),_e(o.latitude));return c!==0?c:ee(_e(i.longitude),_e(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return eh(n.arrayValue,e.arrayValue);case 10:return function(i,o){var E,P,I,R;const c=i.fields||{},l=o.fields||{},h=(E=c[Ni])==null?void 0:E.arrayValue,f=(P=l[Ni])==null?void 0:P.arrayValue,m=ee(((I=h==null?void 0:h.values)==null?void 0:I.length)||0,((R=f==null?void 0:f.values)==null?void 0:R.length)||0);return m!==0?m:eh(h,f)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===Xs.mapValue&&o===Xs.mapValue)return 0;if(i===Xs.mapValue)return 1;if(o===Xs.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let m=0;m<l.length&&m<f.length;++m){const E=Sa(l[m],f[m]);if(E!==0)return E;const P=pr(c[l[m]],h[f[m]]);if(P!==0)return P}return ee(l.length,f.length)}(n.mapValue,e.mapValue);default:throw H(23264,{he:t})}}function Zu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ee(n,e);const t=cn(n),r=cn(e),s=ee(t.seconds,r.seconds);return s!==0?s:ee(t.nanos,r.nanos)}function eh(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=pr(t[s],r[s]);if(i)return i}return ee(t.length,r.length)}function mr(n){return Ra(n)}function Ra(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=cn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return ln(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return z.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Ra(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ra(t.fields[o])}`;return s+"}"}(n.mapValue):H(61005,{value:n})}function pi(n){switch(un(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=no(n);return e?16+pi(e):16;case 5:return 2*n.stringValue.length;case 6:return ln(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+pi(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Fn(r.fields,(i,o)=>{s+=i.length+pi(o)}),s}(n.mapValue);default:throw H(13486,{value:n})}}function Ca(n){return!!n&&"integerValue"in n}function hc(n){return!!n&&"arrayValue"in n}function th(n){return!!n&&"nullValue"in n}function nh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function mi(n){return!!n&&"mapValue"in n}function Xv(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Hf])==null?void 0:r.stringValue)===Wf}function is(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Fn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=is(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=is(n.arrayValue.values[t]);return e}return{...n}}function Zv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Yv}/**
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
 */class nt{constructor(e){this.value=e}static empty(){return new nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!mi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=is(t)}setAll(e){let t=xe.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}o?r[c.lastSegment()]=is(o):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());mi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return St(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];mi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Fn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new nt(is(this.value))}}function Gf(n){const e=[];return Fn(n.fields,(t,r)=>{const s=new xe([t]);if(mi(r)){const i=Gf(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new lt(e)}/**
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
 */class Le{constructor(e,t,r,s,i,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Le(e,0,W.min(),W.min(),W.min(),nt.empty(),0)}static newFoundDocument(e,t,r,s){return new Le(e,1,t,W.min(),r,s,0)}static newNoDocument(e,t){return new Le(e,2,t,W.min(),W.min(),nt.empty(),0)}static newUnknownDocument(e,t){return new Le(e,3,t,W.min(),W.min(),nt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Le&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Le(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Oi{constructor(e,t){this.position=e,this.inclusive=t}}function rh(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=z.comparator(z.fromName(o.referenceValue),t.key):r=pr(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function sh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!St(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Di{constructor(e,t="asc"){this.field=e,this.dir=t}}function eI(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Kf{}class Ie extends Kf{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new nI(e,t,r):t==="array-contains"?new iI(e,r):t==="in"?new oI(e,r):t==="not-in"?new aI(e,r):t==="array-contains-any"?new cI(e,r):new Ie(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new rI(e,r):new sI(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(pr(t,this.value)):t!==null&&un(this.value)===un(t)&&this.matchesComparison(pr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Rt extends Kf{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Rt(e,t)}matches(e){return Qf(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Qf(n){return n.op==="and"}function Jf(n){return tI(n)&&Qf(n)}function tI(n){for(const e of n.filters)if(e instanceof Rt)return!1;return!0}function Pa(n){if(n instanceof Ie)return n.field.canonicalString()+n.op.toString()+mr(n.value);if(Jf(n))return n.filters.map(e=>Pa(e)).join(",");{const e=n.filters.map(t=>Pa(t)).join(",");return`${n.op}(${e})`}}function Yf(n,e){return n instanceof Ie?function(r,s){return s instanceof Ie&&r.op===s.op&&r.field.isEqual(s.field)&&St(r.value,s.value)}(n,e):n instanceof Rt?function(r,s){return s instanceof Rt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&Yf(o,s.filters[c]),!0):!1}(n,e):void H(19439)}function Xf(n){return n instanceof Ie?function(t){return`${t.field.canonicalString()} ${t.op} ${mr(t.value)}`}(n):n instanceof Rt?function(t){return t.op.toString()+" {"+t.getFilters().map(Xf).join(" ,")+"}"}(n):"Filter"}class nI extends Ie{constructor(e,t,r){super(e,t,r),this.key=z.fromName(r.referenceValue)}matches(e){const t=z.comparator(e.key,this.key);return this.matchesComparison(t)}}class rI extends Ie{constructor(e,t){super(e,"in",t),this.keys=Zf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class sI extends Ie{constructor(e,t){super(e,"not-in",t),this.keys=Zf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Zf(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>z.fromName(r.referenceValue))}class iI extends Ie{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return hc(t)&&ys(t.arrayValue,this.value)}}class oI extends Ie{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ys(this.value.arrayValue,t)}}class aI extends Ie{constructor(e,t){super(e,"not-in",t)}matches(e){if(ys(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ys(this.value.arrayValue,t)}}class cI extends Ie{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!hc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ys(this.value.arrayValue,r))}}/**
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
 */class lI{constructor(e,t=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function ih(n,e=null,t=[],r=[],s=null,i=null,o=null){return new lI(n,e,t,r,s,i,o)}function dc(n){const e=G(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Pa(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),to(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>mr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>mr(r)).join(",")),e.Te=t}return e.Te}function fc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!eI(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Yf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!sh(n.startAt,e.startAt)&&sh(n.endAt,e.endAt)}function xa(n){return z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ro{constructor(e,t=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function uI(n,e,t,r,s,i,o,c){return new ro(n,e,t,r,s,i,o,c)}function pc(n){return new ro(n)}function oh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function hI(n){return n.collectionGroup!==null}function os(n){const e=G(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new be(xe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Di(i,r))}),t.has(xe.keyField().canonicalString())||e.Ie.push(new Di(xe.keyField(),r))}return e.Ie}function Tt(n){const e=G(n);return e.Ee||(e.Ee=dI(e,os(n))),e.Ee}function dI(n,e){if(n.limitType==="F")return ih(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Di(s.field,i)});const t=n.endAt?new Oi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Oi(n.startAt.position,n.startAt.inclusive):null;return ih(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ka(n,e,t){return new ro(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function so(n,e){return fc(Tt(n),Tt(e))&&n.limitType===e.limitType}function ep(n){return`${dc(Tt(n))}|lt:${n.limitType}`}function Zn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Xf(s)).join(", ")}]`),to(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>mr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>mr(s)).join(",")),`Target(${r})`}(Tt(n))}; limitType=${n.limitType})`}function io(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of os(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=rh(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,os(r),s)||r.endAt&&!function(o,c,l){const h=rh(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,os(r),s))}(n,e)}function fI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function tp(n){return(e,t)=>{let r=!1;for(const s of os(n)){const i=pI(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function pI(n,e,t){const r=n.field.isKeyField()?z.comparator(e.key,t.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?pr(l,h):H(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return H(19790,{direction:n.dir})}}/**
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
 */class jn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Fn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return jf(this.inner)}size(){return this.innerSize}}/**
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
 */const mI=new de(z.comparator);function jt(){return mI}const np=new de(z.comparator);function es(...n){let e=np;for(const t of n)e=e.insert(t.key,t);return e}function rp(n){let e=np;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function bn(){return as()}function sp(){return as()}function as(){return new jn(n=>n.toString(),(n,e)=>n.isEqual(e))}const gI=new de(z.comparator),yI=new be(z.comparator);function te(...n){let e=yI;for(const t of n)e=e.add(t);return e}const _I=new be(ee);function wI(){return _I}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xi(e)?"-0":e}}function ip(n){return{integerValue:""+n}}function EI(n,e){return Wv(e)?ip(e):mc(n,e)}/**
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
 */class oo{constructor(){this._=void 0}}function TI(n,e,t){return n instanceof Vi?function(s,i){const o={fields:{[$f]:{stringValue:Bf},[qf]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&uc(i)&&(i=no(i)),i&&(o.fields[zf]=i),{mapValue:o}}(t,e):n instanceof _s?ap(n,e):n instanceof ws?cp(n,e):function(s,i){const o=op(s,i),c=ah(o)+ah(s.Ae);return Ca(o)&&Ca(s.Ae)?ip(c):mc(s.serializer,c)}(n,e)}function vI(n,e,t){return n instanceof _s?ap(n,e):n instanceof ws?cp(n,e):t}function op(n,e){return n instanceof Li?function(r){return Ca(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Vi extends oo{}class _s extends oo{constructor(e){super(),this.elements=e}}function ap(n,e){const t=lp(e);for(const r of n.elements)t.some(s=>St(s,r))||t.push(r);return{arrayValue:{values:t}}}class ws extends oo{constructor(e){super(),this.elements=e}}function cp(n,e){let t=lp(e);for(const r of n.elements)t=t.filter(s=>!St(s,r));return{arrayValue:{values:t}}}class Li extends oo{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function ah(n){return _e(n.integerValue||n.doubleValue)}function lp(n){return hc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function II(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof _s&&s instanceof _s||r instanceof ws&&s instanceof ws?fr(r.elements,s.elements,St):r instanceof Li&&s instanceof Li?St(r.Ae,s.Ae):r instanceof Vi&&s instanceof Vi}(n.transform,e.transform)}class bI{constructor(e,t){this.version=e,this.transformResults=t}}class Vt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Vt}static exists(e){return new Vt(void 0,e)}static updateTime(e){return new Vt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function gi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ao{}function up(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new dp(n.key,Vt.none()):new ks(n.key,n.data,Vt.none());{const t=n.data,r=nt.empty();let s=new be(xe.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Un(n.key,r,new lt(s.toArray()),Vt.none())}}function AI(n,e,t){n instanceof ks?function(s,i,o){const c=s.value.clone(),l=lh(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Un?function(s,i,o){if(!gi(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=lh(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(hp(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function cs(n,e,t,r){return n instanceof ks?function(i,o,c,l){if(!gi(i.precondition,o))return c;const h=i.value.clone(),f=uh(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Un?function(i,o,c,l){if(!gi(i.precondition,o))return c;const h=uh(i.fieldTransforms,l,o),f=o.data;return f.setAll(hp(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(i,o,c){return gi(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function SI(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=op(r.transform,s||null);i!=null&&(t===null&&(t=nt.empty()),t.set(r.field,i))}return t||null}function ch(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&fr(r,s,(i,o)=>II(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ks extends ao{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Un extends ao{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function hp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function lh(n,e,t){const r=new Map;ie(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,vI(o,c,t[s]))}return r}function uh(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,TI(i,o,e))}return r}class dp extends ao{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class RI extends ao{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class CI{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&AI(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=cs(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=cs(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=sp();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=up(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),te())}isEqual(e){return this.batchId===e.batchId&&fr(this.mutations,e.mutations,(t,r)=>ch(t,r))&&fr(this.baseMutations,e.baseMutations,(t,r)=>ch(t,r))}}class gc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){ie(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return gI}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new gc(e,t,r,s)}}/**
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
 */class PI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class xI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var we,re;function kI(n){switch(n){case O.OK:return H(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return H(15467,{code:n})}}function fp(n){if(n===void 0)return Ft("GRPC error has no .code"),O.UNKNOWN;switch(n){case we.OK:return O.OK;case we.CANCELLED:return O.CANCELLED;case we.UNKNOWN:return O.UNKNOWN;case we.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case we.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case we.INTERNAL:return O.INTERNAL;case we.UNAVAILABLE:return O.UNAVAILABLE;case we.UNAUTHENTICATED:return O.UNAUTHENTICATED;case we.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case we.NOT_FOUND:return O.NOT_FOUND;case we.ALREADY_EXISTS:return O.ALREADY_EXISTS;case we.PERMISSION_DENIED:return O.PERMISSION_DENIED;case we.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case we.ABORTED:return O.ABORTED;case we.OUT_OF_RANGE:return O.OUT_OF_RANGE;case we.UNIMPLEMENTED:return O.UNIMPLEMENTED;case we.DATA_LOSS:return O.DATA_LOSS;default:return H(39323,{code:n})}}(re=we||(we={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function NI(){return new TextEncoder}/**
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
 */const OI=new rn([4294967295,4294967295],0);function hh(n){const e=NI().encode(n),t=new Pf;return t.update(e),new Uint8Array(t.digest())}function dh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new rn([t,r],0),new rn([s,i],0)]}class yc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ts(`Invalid padding: ${t}`);if(r<0)throw new ts(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ts(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ts(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=rn.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(rn.fromNumber(r)));return s.compare(OI)===1&&(s=new rn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=hh(e),[r,s]=dh(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new yc(i,s,t);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const t=hh(e),[r,s]=dh(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ts extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class co{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ns.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new co(W.min(),s,new de(ee),jt(),te())}}class Ns{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ns(r,t,te(),te(),te())}}/**
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
 */class yi{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class pp{constructor(e,t){this.targetId=e,this.Ce=t}}class mp{constructor(e,t,r=Ne.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class fh{constructor(){this.ve=0,this.Fe=ph(),this.Me=Ne.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=te(),t=te(),r=te();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:H(38017,{changeType:i})}}),new Ns(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=ph()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ie(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class DI{constructor(e){this.Ge=e,this.ze=new Map,this.je=jt(),this.Je=Zs(),this.He=Zs(),this.Ye=new de(ee)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:H(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(xa(i))if(r===0){const o=new z(i.path);this.et(t,o,Le.newNoDocument(o,W.min()))}else ie(r===1,20013,{expectedCount:r});else{const o=this._t(t);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=ln(r).toUint8Array()}catch(l){if(l instanceof Uf)return dr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new yc(o,s,i)}catch(l){return dr(l instanceof ts?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,o)=>{const c=this.ot(o);if(c){if(i.current&&xa(c.target)){const l=new z(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,Le.newNoDocument(l,e))}i.Be&&(t.set(o,i.ke()),i.qe())}});let r=te();this.He.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new co(e,t,this.Ye,this.je,r);return this.je=jt(),this.Je=Zs(),this.He=Zs(),this.Ye=new de(ee),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new fh,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new be(ee),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new be(ee),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||F("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new fh),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Zs(){return new de(z.comparator)}function ph(){return new de(z.comparator)}const VI={asc:"ASCENDING",desc:"DESCENDING"},LI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},MI={and:"AND",or:"OR"};class FI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Na(n,e){return n.useProto3Json||to(e)?e:{value:e}}function Mi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function jI(n,e){return Mi(n,e.toTimestamp())}function vt(n){return ie(!!n,49232),W.fromTimestamp(function(t){const r=cn(t);return new le(r.seconds,r.nanos)}(n))}function _c(n,e){return Oa(n,e).canonicalString()}function Oa(n,e){const t=function(s){return new he(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function yp(n){const e=he.fromString(n);return ie(vp(e),10190,{key:e.toString()}),e}function Da(n,e){return _c(n.databaseId,e.path)}function Jo(n,e){const t=yp(e);if(t.get(1)!==n.databaseId.projectId)throw new $(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new $(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new z(wp(t))}function _p(n,e){return _c(n.databaseId,e)}function UI(n){const e=yp(n);return e.length===4?he.emptyPath():wp(e)}function Va(n){return new he(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function wp(n){return ie(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function mh(n,e,t){return{name:Da(n,e),fields:t.value.mapValue.fields}}function BI(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:H(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(ie(f===void 0||typeof f=="string",58123),Ne.fromBase64String(f||"")):(ie(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ne.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?O.UNKNOWN:fp(h.code);return new $(f,h.message||"")}(o);t=new mp(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Jo(n,r.document.name),i=vt(r.document.updateTime),o=r.document.createTime?vt(r.document.createTime):W.min(),c=new nt({mapValue:{fields:r.document.fields}}),l=Le.newFoundDocument(s,i,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];t=new yi(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Jo(n,r.document),i=r.readTime?vt(r.readTime):W.min(),o=Le.newNoDocument(s,i),c=r.removedTargetIds||[];t=new yi([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Jo(n,r.document),i=r.removedTargetIds||[];t=new yi([],i,s,null)}else{if(!("filter"in e))return H(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new xI(s,i),c=r.targetId;t=new pp(c,o)}}return t}function $I(n,e){let t;if(e instanceof ks)t={update:mh(n,e.key,e.value)};else if(e instanceof dp)t={delete:Da(n,e.key)};else if(e instanceof Un)t={update:mh(n,e.key,e.data),updateMask:YI(e.fieldMask)};else{if(!(e instanceof RI))return H(16599,{Vt:e.type});t={verify:Da(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Vi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof _s)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ws)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Li)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw H(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:jI(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:H(27497)}(n,e.precondition)),t}function zI(n,e){return n&&n.length>0?(ie(e!==void 0,14353),n.map(t=>function(s,i){let o=s.updateTime?vt(s.updateTime):vt(i);return o.isEqual(W.min())&&(o=vt(i)),new bI(o,s.transformResults||[])}(t,e))):[]}function qI(n,e){return{documents:[_p(n,e.path)]}}function HI(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=_p(n,s);const i=function(h){if(h.length!==0)return Tp(Rt.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(E){return{field:er(E.field),direction:KI(E.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Na(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:t,parent:s}}function WI(n){let e=UI(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){ie(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(m){const E=Ep(m);return E instanceof Rt&&Jf(E)?E.getFilters():[E]}(t.where));let o=[];t.orderBy&&(o=function(m){return m.map(E=>function(I){return new Di(tr(I.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(E))}(t.orderBy));let c=null;t.limit&&(c=function(m){let E;return E=typeof m=="object"?m.value:m,to(E)?null:E}(t.limit));let l=null;t.startAt&&(l=function(m){const E=!!m.before,P=m.values||[];return new Oi(P,E)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const E=!m.before,P=m.values||[];return new Oi(P,E)}(t.endAt)),uI(e,s,o,i,c,"F",l,h)}function GI(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ep(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=tr(t.unaryFilter.field);return Ie.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=tr(t.unaryFilter.field);return Ie.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=tr(t.unaryFilter.field);return Ie.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=tr(t.unaryFilter.field);return Ie.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return H(61313);default:return H(60726)}}(n):n.fieldFilter!==void 0?function(t){return Ie.create(tr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return H(58110);default:return H(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Rt.create(t.compositeFilter.filters.map(r=>Ep(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return H(1026)}}(t.compositeFilter.op))}(n):H(30097,{filter:n})}function KI(n){return VI[n]}function QI(n){return LI[n]}function JI(n){return MI[n]}function er(n){return{fieldPath:n.canonicalString()}}function tr(n){return xe.fromServerFormat(n.fieldPath)}function Tp(n){return n instanceof Ie?function(t){if(t.op==="=="){if(nh(t.value))return{unaryFilter:{field:er(t.field),op:"IS_NAN"}};if(th(t.value))return{unaryFilter:{field:er(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(nh(t.value))return{unaryFilter:{field:er(t.field),op:"IS_NOT_NAN"}};if(th(t.value))return{unaryFilter:{field:er(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:er(t.field),op:QI(t.op),value:t.value}}}(n):n instanceof Rt?function(t){const r=t.getFilters().map(s=>Tp(s));return r.length===1?r[0]:{compositeFilter:{op:JI(t.op),filters:r}}}(n):H(54877,{filter:n})}function YI(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function vp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class en{constructor(e,t,r,s,i=W.min(),o=W.min(),c=Ne.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new en(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new en(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new en(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new en(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class XI{constructor(e){this.yt=e}}function ZI(n){const e=WI({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ka(e,e.limit,"L"):e}/**
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
 */class eb{constructor(){this.Cn=new tb}addToCollectionParentIndex(e,t){return this.Cn.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(an.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(an.min())}updateCollectionGroup(e,t,r){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class tb{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new be(he.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new be(he.comparator)).toArray()}}/**
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
 */const gh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ip=41943040;class ze{static withCacheSize(e){return new ze(e,ze.DEFAULT_COLLECTION_PERCENTILE,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ze.DEFAULT_COLLECTION_PERCENTILE=10,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ze.DEFAULT=new ze(Ip,ze.DEFAULT_COLLECTION_PERCENTILE,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ze.DISABLED=new ze(-1,0,0);/**
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
 */class gr{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new gr(0)}static cr(){return new gr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh="LruGarbageCollector",nb=1048576;function _h([n,e],[t,r]){const s=ee(n,t);return s===0?ee(e,r):s}class rb{constructor(e){this.Ir=e,this.buffer=new be(_h),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();_h(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class sb{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){F(yh,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ar(t)?F(yh,"Ignoring IndexedDB error during garbage collection: ",t):await br(t)}await this.Vr(3e5)})}}class ib{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return N.resolve(eo.ce);const r=new rb(t);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(F("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(gh)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(F("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),gh):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,i,o,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(F("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,c=Date.now(),this.removeTargets(e,r,t))).next(m=>(i=m,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),Xn()<=Z.DEBUG&&F("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${m} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function ob(n,e){return new ib(n,e)}/**
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
 */class ab{constructor(){this.changes=new jn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Le.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?N.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class cb{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class lb{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&cs(r.mutation,s,lt.empty(),le.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,t,r=te()){const s=bn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=es();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=bn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,te()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,r,s){let i=jt();const o=as(),c=function(){return as()}();return t.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Un)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),cs(f.mutation,h,f.mutation.getFieldMask(),le.now())):o.set(h.key,lt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>c.set(h,new cb(f,o.get(h)??null))),c))}recalculateAndSaveOverlays(e,t){const r=as();let s=new de((o,c)=>o-c),i=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let f=r.get(l)||lt.empty();f=c.applyToLocalView(h,f),r.set(l,f);const m=(s.get(c.batchId)||te()).add(l);s=s.insert(c.batchId,m)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,m=sp();f.forEach(E=>{if(!i.has(E)){const P=up(t.get(E),r.get(E));P!==null&&m.set(E,P),i=i.add(E)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return N.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(o){return z.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):hI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):N.resolve(bn());let c=ps,l=i;return o.next(h=>N.forEach(h,(f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),i.get(f)?N.resolve():this.remoteDocumentCache.getEntry(e,f).next(E=>{l=l.insert(f,E)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,te())).next(f=>({batchId:c,changes:rp(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new z(t)).next(r=>{let s=es();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=es();return this.indexManager.getCollectionParents(e,i).next(c=>N.forEach(c,l=>{const h=function(m,E){return new ro(E,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((m,E)=>{o=o.insert(m,E)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Le.newInvalidDocument(f)))});let c=es();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&cs(f.mutation,h,lt.empty(),le.now()),io(t,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return N.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:vt(s.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(s){return{name:s.name,query:ZI(s.bundledQuery),readTime:vt(s.readTime)}}(t)),N.resolve()}}/**
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
 */class hb{constructor(){this.overlays=new de(z.comparator),this.qr=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const r=bn();return N.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),N.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),N.resolve()}getOverlaysForCollection(e,t,r){const s=bn(),i=t.length+1,o=new z(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return N.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new de((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=bn(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=bn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return N.resolve(c)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new PI(t,r));let i=this.qr.get(t);i===void 0&&(i=te(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
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
 */class db{constructor(){this.sessionToken=Ne.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
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
 */class wc{constructor(){this.Qr=new be(Se.$r),this.Ur=new be(Se.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new Se(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Gr(new Se(e,t))}zr(e,t){e.forEach(r=>this.removeReference(r,t))}jr(e){const t=new z(new he([])),r=new Se(t,e),s=new Se(t,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new z(new he([])),r=new Se(t,e),s=new Se(t,e+1);let i=te();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Se(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Se{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return z.comparator(e.key,t.key)||ee(e.Yr,t.Yr)}static Kr(e,t){return ee(e.Yr,t.Yr)||z.comparator(e.key,t.key)}}/**
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
 */class fb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new be(Se.$r)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new CI(i,t,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new Se(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,t){return N.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),i=s<0?0:s;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?lc:this.tr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Se(t,0),s=new Se(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const c=this.Xr(o.Yr);i.push(c)}),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new be(ee);return t.forEach(s=>{const i=new Se(s,0),o=new Se(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],c=>{r=r.add(c.Yr)})}),N.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;z.isDocumentKey(i)||(i=i.child(""));const o=new Se(new z(i),0);let c=new be(ee);return this.Zr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Yr)),!0)},o),N.resolve(this.ti(c))}ti(e){const t=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ie(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return N.forEach(t.mutations,s=>{const i=new Se(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){const r=new Se(t,0),s=this.Zr.firstAfterOrEqual(r);return N.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class pb{constructor(e){this.ri=e,this.docs=function(){return new de(z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return N.resolve(r?r.document.mutableCopy():Le.newInvalidDocument(t))}getEntries(e,t){let r=jt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Le.newInvalidDocument(s))}),N.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=jt();const o=t.path,c=new z(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||$v(Bv(f),r)<=0||(s.has(f.key)||io(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,t,r,s){H(9500)}ii(e,t){return N.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new mb(this)}getSize(e){return N.resolve(this.size)}}class mb extends ab{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),N.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class gb{constructor(e){this.persistence=e,this.si=new jn(t=>dc(t),fc),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.oi=0,this._i=new wc,this.targetCount=0,this.ai=gr.ur()}forEachTarget(e,t){return this.si.forEach((r,s)=>t(s)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),N.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new gr(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.Pr(t),N.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.si.forEach((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),N.waitFor(i).next(()=>s)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return N.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),N.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),N.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return N.resolve(r)}containsKey(e,t){return N.resolve(this._i.containsKey(t))}}/**
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
 */class bp{constructor(e,t){this.ui={},this.overlays={},this.ci=new eo(0),this.li=!1,this.li=!0,this.hi=new db,this.referenceDelegate=e(this),this.Pi=new gb(this),this.indexManager=new eb,this.remoteDocumentCache=function(s){return new pb(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new XI(t),this.Ii=new ub(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new hb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new fb(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){F("MemoryPersistence","Starting transaction:",e);const s=new yb(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,t){return N.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class yb extends qv{constructor(e){super(),this.currentSequenceNumber=e}}class Ec{constructor(e){this.persistence=e,this.Ri=new wc,this.Vi=null}static mi(e){return new Ec(e)}get fi(){if(this.Vi)return this.Vi;throw H(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),N.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),N.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.fi,r=>{const s=z.fromPath(r);return this.gi(e,s).next(i=>{i||t.removeEntry(s,W.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return N.or([()=>N.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Fi{constructor(e,t){this.persistence=e,this.pi=new jn(r=>Gv(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=ob(this,t)}static mi(e,t){return new Fi(e,t)}Ei(){}di(e){return N.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}pr(e,t){return N.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?N.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,t).next(c=>{c||(r++,i.removeEntry(o,W.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),N.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),N.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),N.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=pi(e.data.value)),t}br(e,t,r){return N.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return N.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Tc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=te(),s=te();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Tc(e,t.fromCache,r,s)}}/**
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
 */class _b{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class wb{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return B_()?8:Hv(Fe())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ys(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new _b;return this.Ss(e,t,o).next(c=>{if(i.result=c,this.Vs)return this.bs(e,t,o,c.size)})}).next(()=>i.result)}bs(e,t,r,s){return r.documentReadCount<this.fs?(Xn()<=Z.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",Zn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),N.resolve()):(Xn()<=Z.DEBUG&&F("QueryEngine","Query:",Zn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Xn()<=Z.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",Zn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Tt(t))):N.resolve())}ys(e,t){if(oh(t))return N.resolve(null);let r=Tt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=ka(t,null,"F"),r=Tt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=te(...i);return this.ps.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.Ds(t,c);return this.Cs(t,h,o,l.readTime)?this.ys(e,ka(t,null,"F")):this.vs(e,h,t,l)}))})))}ws(e,t,r,s){return oh(t)||s.isEqual(W.min())?N.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(t,i);return this.Cs(t,o,r,s)?N.resolve(null):(Xn()<=Z.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Zn(t)),this.vs(e,o,t,Uv(s,ps)).next(c=>c))})}Ds(e,t){let r=new be(tp(e));return t.forEach((s,i)=>{io(e,i)&&(r=r.add(i))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return Xn()<=Z.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Zn(t)),this.ps.getDocumentsMatchingQuery(e,t,an.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc="LocalStore",Eb=3e8;class Tb{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new de(ee),this.xs=new jn(i=>dc(i),fc),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lb(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function vb(n,e,t,r){return new Tb(n,e,t,r)}async function Ap(n,e){const t=G(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=te();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(r,l).next(h=>({Ls:h,removedBatchIds:o,addedBatchIds:c}))})})}function Ib(n,e){const t=G(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const m=h.batch,E=m.keys();let P=N.resolve();return E.forEach(I=>{P=P.next(()=>f.getEntry(l,I)).next(R=>{const C=h.docVersions.get(I);ie(C!==null,48541),R.version.compareTo(C)<0&&(m.applyToRemoteDocument(R,h),R.isValidDocument()&&(R.setReadTime(h.commitVersion),f.addEntry(R)))})}),P.next(()=>c.mutationQueue.removeMutationBatch(l,m))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=te();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Sp(n){const e=G(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function bb(n,e){const t=G(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const c=[];e.targetChanges.forEach((f,m)=>{const E=s.get(m);if(!E)return;c.push(t.Pi.removeMatchingKeys(i,f.removedDocuments,m).next(()=>t.Pi.addMatchingKeys(i,f.addedDocuments,m)));let P=E.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?P=P.withResumeToken(Ne.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):f.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(f.resumeToken,r)),s=s.insert(m,P),function(R,C,D){return R.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=Eb?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(E,P,f)&&c.push(t.Pi.updateTargetData(i,P))});let l=jt(),h=te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(Ab(i,o,e.documentUpdates).next(f=>{l=f.ks,h=f.qs})),!r.isEqual(W.min())){const f=t.Pi.getLastRemoteSnapshotVersion(i).next(m=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return N.waitFor(c).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(t.Ms=s,i))}function Ab(n,e,t){let r=te(),s=te();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=jt();return t.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(W.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):F(vc,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{ks:o,qs:s}})}function Sb(n,e){const t=G(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=lc),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Rb(n,e){const t=G(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Pi.getTargetData(r,e).next(i=>i?(s=i,N.resolve(s)):t.Pi.allocateTargetId(r).next(o=>(s=new en(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r})}async function La(n,e,t){const r=G(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ar(o))throw o;F(vc,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function wh(n,e,t){const r=G(n);let s=W.min(),i=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const m=G(l),E=m.xs.get(f);return E!==void 0?N.resolve(m.Ms.get(E)):m.Pi.getTargetData(h,f)}(r,o,Tt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,t?s:W.min(),t?i:te())).next(c=>(Cb(r,fI(e),c),{documents:c,Qs:i})))}function Cb(n,e,t){let r=n.Os.get(e)||W.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Os.set(e,r)}class Eh{constructor(){this.activeTargetIds=wI()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Pb{constructor(){this.Mo=new Eh,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Eh,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class xb{Oo(e){}shutdown(){}}/**
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
 */const Th="ConnectivityMonitor";class vh{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){F(Th,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){F(Th,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ei=null;function Ma(){return ei===null?ei=function(){return 268435456+Math.round(2147483648*Math.random())}():ei++,"0x"+ei.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo="RestConnection",kb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Nb{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===ki?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,i){const o=Ma(),c=this.zo(e,t.toUriEncodedString());F(Yo,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:h}=new URL(c),f=Er(h);return this.Jo(e,c,l,r,f).then(m=>(F(Yo,`Received RPC '${e}' ${o}: `,m),m),m=>{throw dr(Yo,`RPC '${e}' ${o} failed with error: `,m,"url: ",c,"request:",r),m})}Ho(e,t,r,s,i,o){return this.Go(e,t,r,s,i)}jo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ir}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,t){const r=kb[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
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
 */class Ob{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const De="WebChannelConnection";class Db extends Nb{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const o=Ma();return new Promise((c,l)=>{const h=new xf;h.setWithCredentials(!0),h.listenOnce(kf.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case fi.NO_ERROR:const m=h.getResponseJson();F(De,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),c(m);break;case fi.TIMEOUT:F(De,`RPC '${e}' ${o} timed out`),l(new $(O.DEADLINE_EXCEEDED,"Request time out"));break;case fi.HTTP_ERROR:const E=h.getStatus();if(F(De,`RPC '${e}' ${o} failed with status:`,E,"response text:",h.getResponseText()),E>0){let P=h.getResponseJson();Array.isArray(P)&&(P=P[0]);const I=P==null?void 0:P.error;if(I&&I.status&&I.message){const R=function(D){const V=D.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(V)>=0?V:O.UNKNOWN}(I.status);l(new $(R,I.message))}else l(new $(O.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new $(O.UNAVAILABLE,"Connection failed."));break;default:H(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{F(De,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);F(De,`RPC '${e}' ${o} sending request:`,s),h.send(t,"POST",f,r,15)})}T_(e,t,r){const s=Ma(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Df(),c=Of(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const f=i.join("");F(De,`Creating RPC '${e}' stream ${s}: ${f}`,l);const m=o.createWebChannel(f,l);this.I_(m);let E=!1,P=!1;const I=new Ob({Yo:C=>{P?F(De,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(E||(F(De,`Opening RPC '${e}' stream ${s} transport.`),m.open(),E=!0),F(De,`RPC '${e}' stream ${s} sending:`,C),m.send(C))},Zo:()=>m.close()}),R=(C,D,V)=>{C.listen(D,M=>{try{V(M)}catch(K){setTimeout(()=>{throw K},0)}})};return R(m,Zr.EventType.OPEN,()=>{P||(F(De,`RPC '${e}' stream ${s} transport opened.`),I.o_())}),R(m,Zr.EventType.CLOSE,()=>{P||(P=!0,F(De,`RPC '${e}' stream ${s} transport closed`),I.a_(),this.E_(m))}),R(m,Zr.EventType.ERROR,C=>{P||(P=!0,dr(De,`RPC '${e}' stream ${s} transport errored. Name:`,C.name,"Message:",C.message),I.a_(new $(O.UNAVAILABLE,"The operation could not be completed")))}),R(m,Zr.EventType.MESSAGE,C=>{var D;if(!P){const V=C.data[0];ie(!!V,16349);const M=V,K=(M==null?void 0:M.error)||((D=M[0])==null?void 0:D.error);if(K){F(De,`RPC '${e}' stream ${s} received error:`,K);const se=K.status;let ne=function(w){const b=we[w];if(b!==void 0)return fp(b)}(se),T=K.message;ne===void 0&&(ne=O.INTERNAL,T="Unknown error status: "+se+" with message "+K.message),P=!0,I.a_(new $(ne,T)),m.close()}else F(De,`RPC '${e}' stream ${s} received:`,V),I.u_(V)}}),R(c,Nf.STAT_EVENT,C=>{C.stat===Aa.PROXY?F(De,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===Aa.NOPROXY&&F(De,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{I.__()},0),I}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function Xo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(n){return new FI(n,!0)}/**
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
 */class Rp{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&F("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Ih="PersistentStream";class Cp{constructor(e,t,r,s,i,o,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Rp(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===O.RESOURCE_EXHAUSTED?(Ft(t.toString()),Ft("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new $(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return F(Ih,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(F(Ih,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Vb extends Cp{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=BI(this.serializer,e),r=function(i){if(!("targetChange"in i))return W.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?W.min():o.readTime?vt(o.readTime):W.min()}(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=Va(this.serializer),t.addTarget=function(i,o){let c;const l=o.target;if(c=xa(l)?{documents:qI(i,l)}:{query:HI(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=gp(i,o.resumeToken);const h=Na(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(W.min())>0){c.readTime=Mi(i,o.snapshotVersion.toTimestamp());const h=Na(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=GI(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=Va(this.serializer),t.removeTarget=e,this.q_(t)}}class Lb extends Cp{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ie(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ie(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ie(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=zI(e.writeResults,e.commitTime),r=vt(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Va(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>$I(this.serializer,r))};this.q_(t)}}/**
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
 */class Mb{}class Fb extends Mb{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new $(O.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,Oa(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(O.UNKNOWN,i.toString())})}Ho(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Ho(e,Oa(t,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(O.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class jb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ft(t),this.aa=!1):F("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const On="RemoteStore";class Ub{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Bn(this)&&(F(On,"Restarting streams for network reachability change."),await async function(l){const h=G(l);h.Ea.add(4),await Os(h),h.Ra.set("Unknown"),h.Ea.delete(4),await uo(h)}(this))})}),this.Ra=new jb(r,s)}}async function uo(n){if(Bn(n))for(const e of n.da)await e(!0)}async function Os(n){for(const e of n.da)await e(!1)}function Pp(n,e){const t=G(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Sc(t)?Ac(t):Sr(t).O_()&&bc(t,e))}function Ic(n,e){const t=G(n),r=Sr(t);t.Ia.delete(e),r.O_()&&xp(t,e),t.Ia.size===0&&(r.O_()?r.L_():Bn(t)&&t.Ra.set("Unknown"))}function bc(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Sr(n).Y_(e)}function xp(n,e){n.Va.Ue(e),Sr(n).Z_(e)}function Ac(n){n.Va=new DI({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Sr(n).start(),n.Ra.ua()}function Sc(n){return Bn(n)&&!Sr(n).x_()&&n.Ia.size>0}function Bn(n){return G(n).Ea.size===0}function kp(n){n.Va=void 0}async function Bb(n){n.Ra.set("Online")}async function $b(n){n.Ia.forEach((e,t)=>{bc(n,e)})}async function zb(n,e){kp(n),Sc(n)?(n.Ra.ha(e),Ac(n)):n.Ra.set("Unknown")}async function qb(n,e,t){if(n.Ra.set("Online"),e instanceof mp&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))}(n,e)}catch(r){F(On,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ji(n,r)}else if(e instanceof yi?n.Va.Ze(e):e instanceof pp?n.Va.st(e):n.Va.tt(e),!t.isEqual(W.min()))try{const r=await Sp(n.localStore);t.compareTo(r)>=0&&await function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(Ne.EMPTY_BYTE_STRING,f.snapshotVersion)),xp(i,l);const m=new en(f.target,l,h,f.sequenceNumber);bc(i,m)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){F(On,"Failed to raise snapshot:",r),await ji(n,r)}}async function ji(n,e,t){if(!Ar(e))throw e;n.Ea.add(1),await Os(n),n.Ra.set("Offline"),t||(t=()=>Sp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{F(On,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await uo(n)})}function Np(n,e){return e().catch(t=>ji(n,t,e))}async function ho(n){const e=G(n),t=hn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:lc;for(;Hb(e);)try{const s=await Sb(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,Wb(e,s)}catch(s){await ji(e,s)}Op(e)&&Dp(e)}function Hb(n){return Bn(n)&&n.Ta.length<10}function Wb(n,e){n.Ta.push(e);const t=hn(n);t.O_()&&t.X_&&t.ea(e.mutations)}function Op(n){return Bn(n)&&!hn(n).x_()&&n.Ta.length>0}function Dp(n){hn(n).start()}async function Gb(n){hn(n).ra()}async function Kb(n){const e=hn(n);for(const t of n.Ta)e.ea(t.mutations)}async function Qb(n,e,t){const r=n.Ta.shift(),s=gc.from(r,e,t);await Np(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ho(n)}async function Jb(n,e){e&&hn(n).X_&&await async function(r,s){if(function(o){return kI(o)&&o!==O.ABORTED}(s.code)){const i=r.Ta.shift();hn(r).B_(),await Np(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ho(r)}}(n,e),Op(n)&&Dp(n)}async function bh(n,e){const t=G(n);t.asyncQueue.verifyOperationInProgress(),F(On,"RemoteStore received new credentials");const r=Bn(t);t.Ea.add(3),await Os(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await uo(t)}async function Yb(n,e){const t=G(n);e?(t.Ea.delete(2),await uo(t)):e||(t.Ea.add(2),await Os(t),t.Ra.set("Unknown"))}function Sr(n){return n.ma||(n.ma=function(t,r,s){const i=G(t);return i.sa(),new Vb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:Bb.bind(null,n),t_:$b.bind(null,n),r_:zb.bind(null,n),H_:qb.bind(null,n)}),n.da.push(async e=>{e?(n.ma.B_(),Sc(n)?Ac(n):n.Ra.set("Unknown")):(await n.ma.stop(),kp(n))})),n.ma}function hn(n){return n.fa||(n.fa=function(t,r,s){const i=G(t);return i.sa(),new Lb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Gb.bind(null,n),r_:Jb.bind(null,n),ta:Kb.bind(null,n),na:Qb.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await ho(n)):(await n.fa.stop(),n.Ta.length>0&&(F(On,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class Rc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new sn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,c=new Rc(e,t,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cc(n,e){if(Ft("AsyncQueue",`${e}: ${n}`),Ar(n))return new $(O.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class lr{static emptySet(e){return new lr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||z.comparator(t.key,r.key):(t,r)=>z.comparator(t.key,r.key),this.keyedMap=es(),this.sortedSet=new de(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof lr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new lr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Ah{constructor(){this.ga=new de(z.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):H(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class yr{constructor(e,t,r,s,i,o,c,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new yr(e,t,lr.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&so(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Xb{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class Zb{constructor(){this.queries=Sh(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=G(t),i=s.queries;s.queries=Sh(),i.forEach((o,c)=>{for(const l of c.Sa)l.onError(r)})})(this,new $(O.ABORTED,"Firestore shutting down"))}}function Sh(){return new jn(n=>ep(n),so)}async function e0(n,e){const t=G(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new Xb,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=Cc(o,`Initialization of query '${Zn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&Pc(t)}async function t0(n,e){const t=G(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function n0(n,e){const t=G(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&Pc(t)}function r0(n,e,t){const r=G(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function Pc(n){n.Ca.forEach(e=>{e.next()})}var Fa,Rh;(Rh=Fa||(Fa={})).Ma="default",Rh.Cache="cache";class s0{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new yr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=yr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Fa.Cache}}/**
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
 */class Vp{constructor(e){this.key=e}}class Lp{constructor(e){this.key=e}}class i0{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=te(),this.mutatedKeys=te(),this.eu=tp(e),this.tu=new lr(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new Ah,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const E=s.get(f),P=io(this.query,m)?m:null,I=!!E&&this.mutatedKeys.has(E.key),R=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let C=!1;E&&P?E.data.isEqual(P.data)?I!==R&&(r.track({type:3,doc:P}),C=!0):this.su(E,P)||(r.track({type:2,doc:P}),C=!0,(l&&this.eu(P,l)>0||h&&this.eu(P,h)<0)&&(c=!0)):!E&&P?(r.track({type:0,doc:P}),C=!0):E&&!P&&(r.track({type:1,doc:E}),C=!0,(l||h)&&(c=!0)),C&&(P?(o=o.add(P),i=R?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,m)=>function(P,I){const R=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H(20277,{Rt:C})}};return R(P)-R(I)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),s=s??!1;const c=t&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,h=l!==this.Za;return this.Za=l,o.length!==0||h?{snapshot:new yr(this.query,e.tu,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Ah,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=te(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const t=[];return e.forEach(r=>{this.Xa.has(r)||t.push(new Lp(r))}),this.Xa.forEach(r=>{e.has(r)||t.push(new Vp(r))}),t}cu(e){this.Ya=e.Qs,this.Xa=te();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return yr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const xc="SyncEngine";class o0{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class a0{constructor(e){this.key=e,this.hu=!1}}class c0{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new jn(c=>ep(c),so),this.Iu=new Map,this.Eu=new Set,this.du=new de(z.comparator),this.Au=new Map,this.Ru=new wc,this.Vu={},this.mu=new Map,this.fu=gr.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function l0(n,e,t=!0){const r=$p(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Mp(r,e,t,!0),s}async function u0(n,e){const t=$p(n);await Mp(t,e,!0,!1)}async function Mp(n,e,t,r){const s=await Rb(n.localStore,Tt(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await h0(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&Pp(n.remoteStore,s),c}async function h0(n,e,t,r,s){n.pu=(m,E,P)=>async function(R,C,D,V){let M=C.view.ru(D);M.Cs&&(M=await wh(R.localStore,C.query,!1).then(({documents:T})=>C.view.ru(T,M)));const K=V&&V.targetChanges.get(C.targetId),se=V&&V.targetMismatches.get(C.targetId)!=null,ne=C.view.applyChanges(M,R.isPrimaryClient,K,se);return Ph(R,C.targetId,ne.au),ne.snapshot}(n,m,E,P);const i=await wh(n.localStore,e,!0),o=new i0(e,i.Qs),c=o.ru(i.documents),l=Ns.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=o.applyChanges(c,n.isPrimaryClient,l);Ph(n,t,h.au);const f=new o0(e,t,o);return n.Tu.set(e,f),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function d0(n,e,t){const r=G(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!so(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await La(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Ic(r.remoteStore,s.targetId),ja(r,s.targetId)}).catch(br)):(ja(r,s.targetId),await La(r.localStore,s.targetId,!0))}async function f0(n,e){const t=G(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ic(t.remoteStore,r.targetId))}async function p0(n,e,t){const r=T0(n);try{const s=await function(o,c){const l=G(o),h=le.now(),f=c.reduce((P,I)=>P.add(I.key),te());let m,E;return l.persistence.runTransaction("Locally write mutations","readwrite",P=>{let I=jt(),R=te();return l.Ns.getEntries(P,f).next(C=>{I=C,I.forEach((D,V)=>{V.isValidDocument()||(R=R.add(D))})}).next(()=>l.localDocuments.getOverlayedDocuments(P,I)).next(C=>{m=C;const D=[];for(const V of c){const M=SI(V,m.get(V.key).overlayedDocument);M!=null&&D.push(new Un(V.key,M,Gf(M.value.mapValue),Vt.exists(!0)))}return l.mutationQueue.addMutationBatch(P,h,D,c)}).next(C=>{E=C;const D=C.applyToLocalDocumentSet(m,R);return l.documentOverlayCache.saveOverlays(P,C.batchId,D)})}).then(()=>({batchId:E.batchId,changes:rp(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.Vu[o.currentUser.toKey()];h||(h=new de(ee)),h=h.insert(c,l),o.Vu[o.currentUser.toKey()]=h}(r,s.batchId,t),await Ds(r,s.changes),await ho(r.remoteStore)}catch(s){const i=Cc(s,"Failed to persist write");t.reject(i)}}async function Fp(n,e){const t=G(n);try{const r=await bb(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Au.get(i);o&&(ie(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?ie(o.hu,14607):s.removedDocuments.size>0&&(ie(o.hu,42227),o.hu=!1))}),await Ds(t,r,e)}catch(r){await br(r)}}function Ch(n,e,t){const r=G(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=G(o);l.onlineState=c;let h=!1;l.queries.forEach((f,m)=>{for(const E of m.Sa)E.va(c)&&(h=!0)}),h&&Pc(l)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function m0(n,e,t){const r=G(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new de(z.comparator);o=o.insert(i,Le.newNoDocument(i,W.min()));const c=te().add(i),l=new co(W.min(),new Map,new de(ee),o,c);await Fp(r,l),r.du=r.du.remove(i),r.Au.delete(e),kc(r)}else await La(r.localStore,e,!1).then(()=>ja(r,e,t)).catch(br)}async function g0(n,e){const t=G(n),r=e.batch.batchId;try{const s=await Ib(t.localStore,e);Up(t,r,null),jp(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ds(t,s)}catch(s){await br(s)}}async function y0(n,e,t){const r=G(n);try{const s=await function(o,c){const l=G(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(m=>(ie(m!==null,37113),f=m.keys(),l.mutationQueue.removeMutationBatch(h,m))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);Up(r,e,t),jp(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ds(r,s)}catch(s){await br(s)}}function jp(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function Up(n,e,t){const r=G(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function ja(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach(r=>{n.Ru.containsKey(r)||Bp(n,r)})}function Bp(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Ic(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),kc(n))}function Ph(n,e,t){for(const r of t)r instanceof Vp?(n.Ru.addReference(r.key,e),_0(n,r)):r instanceof Lp?(F(xc,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||Bp(n,r.key)):H(19791,{wu:r})}function _0(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(F(xc,"New document in limbo: "+t),n.Eu.add(r),kc(n))}function kc(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new z(he.fromString(e)),r=n.fu.next();n.Au.set(r,new a0(t)),n.du=n.du.insert(t,r),Pp(n.remoteStore,new en(Tt(pc(t.path)),r,"TargetPurposeLimboResolution",eo.ce))}}async function Ds(n,e,t){const r=G(n),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((c,l)=>{o.push(r.pu(l,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,m?"current":"not-current")}if(h){s.push(h);const m=Tc.As(l.targetId,h);i.push(m)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(l,h){const f=G(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>N.forEach(h,E=>N.forEach(E.Es,P=>f.persistence.referenceDelegate.addReference(m,E.targetId,P)).next(()=>N.forEach(E.ds,P=>f.persistence.referenceDelegate.removeReference(m,E.targetId,P)))))}catch(m){if(!Ar(m))throw m;F(vc,"Failed to update sequence numbers: "+m)}for(const m of h){const E=m.targetId;if(!m.fromCache){const P=f.Ms.get(E),I=P.snapshotVersion,R=P.withLastLimboFreeSnapshotVersion(I);f.Ms=f.Ms.insert(E,R)}}}(r.localStore,i))}async function w0(n,e){const t=G(n);if(!t.currentUser.isEqual(e)){F(xc,"User change. New user:",e.toKey());const r=await Ap(t.localStore,e);t.currentUser=e,function(i,o){i.mu.forEach(c=>{c.forEach(l=>{l.reject(new $(O.CANCELLED,o))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ds(t,r.Ls)}}function E0(n,e){const t=G(n),r=t.Au.get(e);if(r&&r.hu)return te().add(r.key);{let s=te();const i=t.Iu.get(e);if(!i)return s;for(const o of i){const c=t.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function $p(n){const e=G(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Fp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=E0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=m0.bind(null,e),e.Pu.H_=n0.bind(null,e.eventManager),e.Pu.yu=r0.bind(null,e.eventManager),e}function T0(n){const e=G(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=g0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=y0.bind(null,e),e}class Ui{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=lo(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return vb(this.persistence,new wb,e.initialUser,this.serializer)}Cu(e){return new bp(Ec.mi,this.serializer)}Du(e){return new Pb}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ui.provider={build:()=>new Ui};class v0 extends Ui{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ie(this.persistence.referenceDelegate instanceof Fi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new sb(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?ze.withCacheSize(this.cacheSizeBytes):ze.DEFAULT;return new bp(r=>Fi.mi(r,t),this.serializer)}}class Ua{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ch(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=w0.bind(null,this.syncEngine),await Yb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Zb}()}createDatastore(e){const t=lo(e.databaseInfo.databaseId),r=function(i){return new Db(i)}(e.databaseInfo);return function(i,o,c,l){return new Fb(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,c){return new Ub(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Ch(this.syncEngine,t,0),function(){return vh.v()?new vh:new xb}())}createSyncEngine(e,t){return function(s,i,o,c,l,h,f){const m=new c0(s,i,o,c,l,h);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=G(s);F(On,"RemoteStore shutting down."),i.Ea.add(5),await Os(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Ua.provider={build:()=>new Ua};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class I0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ft("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const dn="FirestoreClient";class b0{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ve.UNAUTHENTICATED,this.clientId=ac.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{F(dn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(F(dn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Cc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Zo(n,e){n.asyncQueue.verifyOperationInProgress(),F(dn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ap(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function xh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await A0(n);F(dn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>bh(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>bh(e.remoteStore,s)),n._onlineComponents=e}async function A0(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){F(dn,"Using user provided OfflineComponentProvider");try{await Zo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===O.FAILED_PRECONDITION||s.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;dr("Error using user provided cache. Falling back to memory cache: "+t),await Zo(n,new Ui)}}else F(dn,"Using default OfflineComponentProvider"),await Zo(n,new v0(void 0));return n._offlineComponents}async function zp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(F(dn,"Using user provided OnlineComponentProvider"),await xh(n,n._uninitializedComponentsProvider._online)):(F(dn,"Using default OnlineComponentProvider"),await xh(n,new Ua))),n._onlineComponents}function S0(n){return zp(n).then(e=>e.syncEngine)}async function R0(n){const e=await zp(n),t=e.eventManager;return t.onListen=l0.bind(null,e.syncEngine),t.onUnlisten=d0.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=u0.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=f0.bind(null,e.syncEngine),t}function C0(n,e,t={}){const r=new sn;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new I0({next:E=>{f.Nu(),o.enqueueAndForget(()=>t0(i,m));const P=E.docs.has(c);!P&&E.fromCache?h.reject(new $(O.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&E.fromCache&&l&&l.source==="server"?h.reject(new $(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(E)},error:E=>h.reject(E)}),m=new s0(pc(c.path),f,{includeMetadataChanges:!0,qa:!0});return e0(i,m)}(await R0(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function qp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp="firestore.googleapis.com",Nh=!0;class Oh{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new $(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Hp,this.ssl=Nh}else this.host=e.host,this.ssl=e.ssl??Nh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Ip;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<nb)throw new $(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}jv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qp(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Nc{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Oh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Oh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Cv;switch(r.type){case"firstParty":return new Nv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=kh.get(t);r&&(F("ComponentProvider","Removing Datastore"),kh.delete(t),r.terminate())}(this),Promise.resolve()}}function P0(n,e,t,r={}){var h;n=fs(n,Nc);const s=Er(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(Ld(`https://${c}`),Md("Firestore",!0)),i.host!==Hp&&i.host!==c&&dr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!on(l,o)&&(n._setSettings(l),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=Ve.MOCK_USER;else{f=O_(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new $(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Ve(E)}n._authCredentials=new Pv(new Lf(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Oc(this.firestore,e,this._query)}}class Re{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Es(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Re(this.firestore,e,this._key)}toJSON(){return{type:Re._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(xs(t,Re._jsonSchema))return new Re(e,r||null,new z(he.fromString(t.referencePath)))}}Re._jsonSchemaVersion="firestore/documentReference/1.0",Re._jsonSchema={type:Ee("string",Re._jsonSchemaVersion),referencePath:Ee("string")};class Es extends Oc{constructor(e,t,r){super(e,t,pc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Re(this.firestore,null,new z(e))}withConverter(e){return new Es(this.firestore,e,this._path)}}function ea(n,e,...t){if(n=ke(n),arguments.length===1&&(e=ac.newId()),Fv("doc","path",e),n instanceof Nc){const r=he.fromString(e,...t);return Gu(r),new Re(n,null,new z(r))}{if(!(n instanceof Re||n instanceof Es))throw new $(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(he.fromString(e,...t));return Gu(r),new Re(n.firestore,n instanceof Es?n.converter:null,new z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh="AsyncQueue";class Vh{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Rp(this,"async_queue_retry"),this._c=()=>{const r=Xo();r&&F(Dh,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Xo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Xo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new sn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ar(e))throw e;F(Dh,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Ft("INTERNAL UNHANDLED ERROR: ",Lh(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Rc.createAndSchedule(this,e,t,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&H(47125,{Pc:Lh(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Lh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Dc extends Nc{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Vh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Vh(e),this._firestoreClient=void 0,await e}}}function x0(n,e){const t=typeof n=="object"?n:Ya(),r=typeof n=="string"?n:ki,s=Mn(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=k_("firestore");i&&P0(s,...i)}return s}function Wp(n){if(n._terminated)throw new $(O.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||k0(n),n._firestoreClient}function k0(n){var r,s,i;const e=n._freezeSettings(),t=function(c,l,h,f){return new Jv(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,qp(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new b0(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new rt(Ne.fromBase64String(e))}catch(t){throw new $(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new rt(Ne.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:rt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(xs(e,rt._jsonSchema))return rt.fromBase64String(e.bytes)}}rt._jsonSchemaVersion="firestore/bytes/1.0",rt._jsonSchema={type:Ee("string",rt._jsonSchemaVersion),bytes:Ee("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new $(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e){this._methodName=e}}/**
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
 */class It{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new $(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new $(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:It._jsonSchemaVersion}}static fromJSON(e){if(xs(e,It._jsonSchema))return new It(e.latitude,e.longitude)}}It._jsonSchemaVersion="firestore/geoPoint/1.0",It._jsonSchema={type:Ee("string",It._jsonSchemaVersion),latitude:Ee("number"),longitude:Ee("number")};/**
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
 */class bt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:bt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(xs(e,bt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new bt(e.vectorValues);throw new $(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}bt._jsonSchemaVersion="firestore/vectorValue/1.0",bt._jsonSchema={type:Ee("string",bt._jsonSchemaVersion),vectorValues:Ee("object")};/**
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
 */const N0=/^__.*__$/;class O0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Un(e,this.data,this.fieldMask,t,this.fieldTransforms):new ks(e,this.data,t,this.fieldTransforms)}}function Kp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H(40011,{Ac:n})}}class Lc{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Lc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Bi(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Kp(this.Ac)&&N0.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class D0{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||lo(e)}Cc(e,t,r,s=!1){return new Lc({Ac:e,methodName:t,Dc:r,path:xe.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function V0(n){const e=n._freezeSettings(),t=lo(n._databaseId);return new D0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function L0(n,e,t,r,s,i={}){const o=n.Cc(i.merge||i.mergeFields?2:0,e,t,s);Xp("Data must be an object, but it was:",o,r);const c=Jp(r,o);let l,h;if(i.merge)l=new lt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const E=M0(e,m,t);if(!o.contains(E))throw new $(O.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);j0(f,E)||f.push(E)}l=new lt(f),h=o.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,h=o.fieldTransforms;return new O0(new nt(c),l,h)}function Qp(n,e){if(Yp(n=ke(n)))return Xp("Unsupported field value:",e,n),Jp(n,e);if(n instanceof Gp)return function(r,s){if(!Kp(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Qp(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=ke(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return EI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=le.fromDate(r);return{timestampValue:Mi(s.serializer,i)}}if(r instanceof le){const i=new le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Mi(s.serializer,i)}}if(r instanceof It)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof rt)return{bytesValue:gp(s.serializer,r._byteString)};if(r instanceof Re){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:_c(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof bt)return function(o,c){return{mapValue:{fields:{[Hf]:{stringValue:Wf},[Ni]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw c.Sc("VectorValues must only contain numeric values.");return mc(c.serializer,h)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${cc(r)}`)}(n,e)}function Jp(n,e){const t={};return jf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fn(n,(r,s)=>{const i=Qp(s,e.mc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Yp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof le||n instanceof It||n instanceof rt||n instanceof Re||n instanceof Gp||n instanceof bt)}function Xp(n,e,t){if(!Yp(t)||!Mf(t)){const r=cc(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function M0(n,e,t){if((e=ke(e))instanceof Vc)return e._internalPath;if(typeof e=="string")return Zp(n,e);throw Bi("Field path arguments must be of type string or ",n,!1,void 0,t)}const F0=new RegExp("[~\\*/\\[\\]]");function Zp(n,e,t){if(e.search(F0)>=0)throw Bi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Vc(...e.split("."))._internalPath}catch{throw Bi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Bi(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new $(O.INVALID_ARGUMENT,c+n+l)}function j0(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new U0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(tm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class U0 extends em{data(){return super.data()}}function tm(n,e){return typeof e=="string"?Zp(n,e):e instanceof Vc?e._internalPath:e._delegate._internalPath}class B0{convertValue(e,t="none"){switch(un(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ln(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw H(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Fn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[Ni].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>_e(o.doubleValue));return new bt(t)}convertGeoPoint(e){return new It(_e(e.latitude),_e(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=no(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ms(e));default:return null}}convertTimestamp(e){const t=cn(e);return new le(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=he.fromString(e);ie(vp(r),9688,{name:e});const s=new gs(r.get(1),r.get(3)),i=new z(r.popFirst(5));return s.isEqual(t)||Ft(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class ns{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Cn extends em{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new _i(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(tm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Cn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Cn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Cn._jsonSchema={type:Ee("string",Cn._jsonSchemaVersion),bundleSource:Ee("string","DocumentSnapshot"),bundleName:Ee("string"),bundle:Ee("string")};class _i extends Cn{data(e={}){return super.data(e)}}class ls{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ns(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new _i(this._firestore,this._userDataWriter,r.key,r,new ns(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new $(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new _i(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ns(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new _i(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ns(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:z0(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ls._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ac.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function z0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q0(n){n=fs(n,Re);const e=fs(n.firestore,Dc);return C0(Wp(e),n._key).then(t=>G0(e,n,t))}ls._jsonSchemaVersion="firestore/querySnapshot/1.0",ls._jsonSchema={type:Ee("string",ls._jsonSchemaVersion),bundleSource:Ee("string","QuerySnapshot"),bundleName:Ee("string"),bundle:Ee("string")};class H0 extends B0{constructor(e){super(),this.firestore=e}convertBytes(e){return new rt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Re(this.firestore,null,t)}}function Mh(n,e,t){n=fs(n,Re);const r=fs(n.firestore,Dc),s=$0(n.converter,e,t);return W0(r,[L0(V0(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Vt.none())])}function W0(n,e){return function(r,s){const i=new sn;return r.asyncQueue.enqueueAndForget(async()=>p0(await S0(r),s,i)),i.promise}(Wp(n),e)}function G0(n,e,t){const r=t.docs.get(e._key),s=new H0(n);return new Cn(n,s,e._key,r,new ns(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){Ir=s})(Tr),At(new ut("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Dc(new xv(r.getProvider("auth-internal")),new Ov(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new $(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gs(h.options.projectId,f)}(o,s),o);return i={useFetchStreams:t,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),st(zu,qu,e),st(zu,qu,"esm2020")})();var K0="firebase",Q0="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */st(K0,Q0,"app");const nm="@firebase/installations",Mc="0.6.19";/**
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
 */const rm=1e4,sm=`w:${Mc}`,im="FIS_v2",J0="https://firebaseinstallations.googleapis.com/v1",Y0=60*60*1e3,X0="installations",Z0="Installations";/**
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
 */const eA={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Dn=new Ln(X0,Z0,eA);function om(n){return n instanceof ft&&n.code.includes("request-failed")}/**
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
 */function am({projectId:n}){return`${J0}/projects/${n}/installations`}function cm(n){return{token:n.token,requestStatus:2,expiresIn:nA(n.expiresIn),creationTime:Date.now()}}async function lm(n,e){const r=(await e.json()).error;return Dn.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function um({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function tA(n,{refreshToken:e}){const t=um(n);return t.append("Authorization",rA(e)),t}async function hm(n){const e=await n();return e.status>=500&&e.status<600?n():e}function nA(n){return Number(n.replace("s","000"))}function rA(n){return`${im} ${n}`}/**
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
 */async function sA({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=am(n),s=um(n),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const o={fid:t,authVersion:im,appId:n.appId,sdkVersion:sm},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await hm(()=>fetch(r,c));if(l.ok){const h=await l.json();return{fid:h.fid||t,registrationStatus:2,refreshToken:h.refreshToken,authToken:cm(h.authToken)}}else throw await lm("Create Installation",l)}/**
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
 */function dm(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function iA(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const oA=/^[cdef][\w-]{21}$/,Ba="";function aA(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=cA(n);return oA.test(t)?t:Ba}catch{return Ba}}function cA(n){return iA(n).substr(0,22)}/**
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
 */function fo(n){return`${n.appName}!${n.appId}`}/**
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
 */const fm=new Map;function pm(n,e){const t=fo(n);mm(t,e),lA(t,e)}function mm(n,e){const t=fm.get(n);if(t)for(const r of t)r(e)}function lA(n,e){const t=uA();t&&t.postMessage({key:n,fid:e}),hA()}let An=null;function uA(){return!An&&"BroadcastChannel"in self&&(An=new BroadcastChannel("[Firebase] FID Change"),An.onmessage=n=>{mm(n.data.key,n.data.fid)}),An}function hA(){fm.size===0&&An&&(An.close(),An=null)}/**
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
 */const dA="firebase-installations-database",fA=1,Vn="firebase-installations-store";let ta=null;function Fc(){return ta||(ta=zd(dA,fA,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Vn)}}})),ta}async function $i(n,e){const t=fo(n),s=(await Fc()).transaction(Vn,"readwrite"),i=s.objectStore(Vn),o=await i.get(t);return await i.put(e,t),await s.done,(!o||o.fid!==e.fid)&&pm(n,e.fid),e}async function gm(n){const e=fo(n),r=(await Fc()).transaction(Vn,"readwrite");await r.objectStore(Vn).delete(e),await r.done}async function po(n,e){const t=fo(n),s=(await Fc()).transaction(Vn,"readwrite"),i=s.objectStore(Vn),o=await i.get(t),c=e(o);return c===void 0?await i.delete(t):await i.put(c,t),await s.done,c&&(!o||o.fid!==c.fid)&&pm(n,c.fid),c}/**
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
 */async function jc(n){let e;const t=await po(n.appConfig,r=>{const s=pA(r),i=mA(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===Ba?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function pA(n){const e=n||{fid:aA(),registrationStatus:0};return ym(e)}function mA(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Dn.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=gA(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:yA(n)}:{installationEntry:e}}async function gA(n,e){try{const t=await sA(n,e);return $i(n.appConfig,t)}catch(t){throw om(t)&&t.customData.serverCode===409?await gm(n.appConfig):await $i(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function yA(n){let e=await Fh(n.appConfig);for(;e.registrationStatus===1;)await dm(100),e=await Fh(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await jc(n);return r||t}return e}function Fh(n){return po(n,e=>{if(!e)throw Dn.create("installation-not-found");return ym(e)})}function ym(n){return _A(n)?{fid:n.fid,registrationStatus:0}:n}function _A(n){return n.registrationStatus===1&&n.registrationTime+rm<Date.now()}/**
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
 */async function wA({appConfig:n,heartbeatServiceProvider:e},t){const r=EA(n,t),s=tA(n,t),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const o={installation:{sdkVersion:sm,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await hm(()=>fetch(r,c));if(l.ok){const h=await l.json();return cm(h)}else throw await lm("Generate Auth Token",l)}function EA(n,{fid:e}){return`${am(n)}/${e}/authTokens:generate`}/**
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
 */async function Uc(n,e=!1){let t;const r=await po(n.appConfig,i=>{if(!_m(i))throw Dn.create("not-registered");const o=i.authToken;if(!e&&IA(o))return i;if(o.requestStatus===1)return t=TA(n,e),i;{if(!navigator.onLine)throw Dn.create("app-offline");const c=AA(i);return t=vA(n,c),c}});return t?await t:r.authToken}async function TA(n,e){let t=await jh(n.appConfig);for(;t.authToken.requestStatus===1;)await dm(100),t=await jh(n.appConfig);const r=t.authToken;return r.requestStatus===0?Uc(n,e):r}function jh(n){return po(n,e=>{if(!_m(e))throw Dn.create("not-registered");const t=e.authToken;return SA(t)?{...e,authToken:{requestStatus:0}}:e})}async function vA(n,e){try{const t=await wA(n,e),r={...e,authToken:t};return await $i(n.appConfig,r),t}catch(t){if(om(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await gm(n.appConfig);else{const r={...e,authToken:{requestStatus:0}};await $i(n.appConfig,r)}throw t}}function _m(n){return n!==void 0&&n.registrationStatus===2}function IA(n){return n.requestStatus===2&&!bA(n)}function bA(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Y0}function AA(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function SA(n){return n.requestStatus===1&&n.requestTime+rm<Date.now()}/**
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
 */async function RA(n){const e=n,{installationEntry:t,registrationPromise:r}=await jc(e);return r?r.catch(console.error):Uc(e).catch(console.error),t.fid}/**
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
 */async function CA(n,e=!1){const t=n;return await PA(t),(await Uc(t,e)).token}async function PA(n){const{registrationPromise:e}=await jc(n);e&&await e}/**
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
 */function xA(n){if(!n||!n.options)throw na("App Configuration");if(!n.name)throw na("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw na(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function na(n){return Dn.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm="installations",kA="installations-internal",NA=n=>{const e=n.getProvider("app").getImmediate(),t=xA(e),r=Mn(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},OA=n=>{const e=n.getProvider("app").getImmediate(),t=Mn(e,wm).getImmediate();return{getId:()=>RA(t),getToken:s=>CA(t,s)}};function DA(){At(new ut(wm,NA,"PUBLIC")),At(new ut(kA,OA,"PRIVATE"))}DA();st(nm,Mc);st(nm,Mc,"esm2020");/**
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
 */const zi="analytics",VA="firebase_id",LA="origin",MA=60*1e3,FA="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Bc="https://www.googletagmanager.com/gtag/js";/**
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
 */const We=new Ji("@firebase/analytics");/**
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
 */const jA={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Xe=new Ln("analytics","Analytics",jA);/**
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
 */function UA(n){if(!n.startsWith(Bc)){const e=Xe.create("invalid-gtag-resource",{gtagURL:n});return We.warn(e.message),""}return n}function Em(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function BA(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function $A(n,e){const t=BA("firebase-js-sdk-policy",{createScriptURL:UA}),r=document.createElement("script"),s=`${Bc}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function zA(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function qA(n,e,t,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await Em(t)).find(h=>h.measurementId===s);l&&await e[l.appId]}}catch(c){We.error(c)}n("config",s,i)}async function HA(n,e,t,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const c=await Em(t);for(const l of o){const h=c.find(m=>m.measurementId===l),f=h&&e[h.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",r,s||{})}catch(i){We.error(i)}}function WA(n,e,t,r){async function s(i,...o){try{if(i==="event"){const[c,l]=o;await HA(n,e,t,c,l)}else if(i==="config"){const[c,l]=o;await qA(n,e,t,r,c,l)}else if(i==="consent"){const[c,l]=o;n("consent",c,l)}else if(i==="get"){const[c,l,h]=o;n("get",c,l,h)}else if(i==="set"){const[c]=o;n("set",c)}else n(i,...o)}catch(c){We.error(c)}}return s}function GA(n,e,t,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=WA(i,n,e,t),{gtagCore:i,wrappedGtag:window[s]}}function KA(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Bc)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA=30,JA=1e3;class YA{constructor(e={},t=JA){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Tm=new YA;function XA(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function ZA(n){var o;const{appId:e,apiKey:t}=n,r={method:"GET",headers:XA(t)},s=FA.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let c="";try{const l=await i.json();(o=l.error)!=null&&o.message&&(c=l.error.message)}catch{}throw Xe.create("config-fetch-failed",{httpStatus:i.status,responseMessage:c})}return i.json()}async function eS(n,e=Tm,t){const{appId:r,apiKey:s,measurementId:i}=n.options;if(!r)throw Xe.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Xe.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new rS;return setTimeout(async()=>{c.abort()},MA),vm({appId:r,apiKey:s,measurementId:i},o,c,e)}async function vm(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=Tm){var c;const{appId:i,measurementId:o}=n;try{await tS(r,e)}catch(l){if(o)return We.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:i,measurementId:o};throw l}try{const l=await ZA(n);return s.deleteThrottleMetadata(i),l}catch(l){const h=l;if(!nS(h)){if(s.deleteThrottleMetadata(i),o)return We.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:i,measurementId:o};throw l}const f=Number((c=h==null?void 0:h.customData)==null?void 0:c.httpStatus)===503?pu(t,s.intervalMillis,QA):pu(t,s.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:t+1};return s.setThrottleMetadata(i,m),We.debug(`Calling attemptFetch again in ${f} millis`),vm(n,m,r,s)}}function tS(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(i),r(Xe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function nS(n){if(!(n instanceof ft)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class rS{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function sS(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const i=await e,o={...r,send_to:i};n("event",t,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iS(){if(jd())try{await Ud()}catch(n){return We.warn(Xe.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return We.warn(Xe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function oS(n,e,t,r,s,i,o){const c=eS(n);c.then(E=>{t[E.measurementId]=E.appId,n.options.measurementId&&E.measurementId!==n.options.measurementId&&We.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${E.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(E=>We.error(E)),e.push(c);const l=iS().then(E=>{if(E)return r.getId()}),[h,f]=await Promise.all([c,l]);KA(i)||$A(i,h.measurementId),s("js",new Date);const m=(o==null?void 0:o.config)??{};return m[LA]="firebase",m.update=!0,f!=null&&(m[VA]=f),s("config",h.measurementId,m),h.measurementId}/**
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
 */class aS{constructor(e){this.app=e}_delete(){return delete us[this.app.options.appId],Promise.resolve()}}let us={},Uh=[];const Bh={};let ra="dataLayer",cS="gtag",$h,Im,zh=!1;function lS(){const n=[];if(Fd()&&n.push("This is a browser extension environment."),$_()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=Xe.create("invalid-analytics-context",{errorInfo:e});We.warn(t.message)}}function uS(n,e,t){lS();const r=n.options.appId;if(!r)throw Xe.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)We.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Xe.create("no-api-key");if(us[r]!=null)throw Xe.create("already-exists",{id:r});if(!zh){zA(ra);const{wrappedGtag:i,gtagCore:o}=GA(us,Uh,Bh,ra,cS);Im=i,$h=o,zh=!0}return us[r]=oS(n,Uh,Bh,e,$h,ra,t),new aS(n)}function hS(n=Ya()){n=ke(n);const e=Mn(n,zi);return e.isInitialized()?e.getImmediate():dS(n)}function dS(n,e={}){const t=Mn(n,zi);if(t.isInitialized()){const s=t.getImmediate();if(on(e,t.getOptions()))return s;throw Xe.create("already-initialized")}return t.initialize({options:e})}function fS(n,e,t,r){n=ke(n),sS(Im,us[n.app.options.appId],e,t,r).catch(s=>We.error(s))}const qh="@firebase/analytics",Hh="0.10.18";function pS(){At(new ut(zi,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return uS(r,s,t)},"PUBLIC")),At(new ut("analytics-internal",n,"PRIVATE")),st(qh,Hh),st(qh,Hh,"esm2020");function n(e){try{const t=e.getProvider(zi).getImmediate();return{logEvent:(r,s,i)=>fS(t,r,s,i)}}catch(t){throw Xe.create("interop-component-reg-failed",{reason:t})}}}pS();const mS={apiKey:"AIzaSyCUn6sq5qode0tO73tfDgXneg03_CobxjI",authDomain:"ride-share-56610.firebaseapp.com",projectId:"ride-share-56610",storageBucket:"ride-share-56610.firebasestorage.app",messagingSenderId:"1074725088115",appId:"1:1074725088115:web:9d53e6c7b24a497cf3b306",measurementId:"G-XN91B7PKY4"},$c=qd(mS),Qt=Sv($c),wi=x0($c);typeof window<"u"&&hS($c);const gS=Object.freeze(Object.defineProperty({__proto__:null,auth:Qt,db:wi},Symbol.toStringTag,{value:"Module"}));class ti{static async signIn(e,t){try{const s=(await cT(Qt,e,t)).user;return await this.getUserProfile(s.uid)}catch(r){throw new Error(this.getErrorMessage(r.code))}}static async register(e,t,r,s,i="renter",o){try{const l=(await aT(Qt,e,t)).user;await hT(l,{displayName:`${r} ${s}`}),await lT(l);const h={uid:l.uid,email:l.email,firstName:r,lastName:s,role:i,phone:o||"",isEmailVerified:!1,createdAt:new Date().toISOString()};return await Mh(ea(wi,"users",l.uid),h),h}catch(c){throw new Error(this.getErrorMessage(c.code))}}static async signOut(){try{await mT(Qt)}catch{throw new Error("Failed to sign out")}}static async getCurrentUser(){const e=Qt.currentUser;if(!e)return null;try{return await this.getUserProfile(e.uid)}catch(t){return console.error("Error getting current user:",t),null}}static async getUserProfile(e){try{const t=await q0(ea(wi,"users",e));if(!t.exists())throw new Error("User profile not found");return t.data()}catch{throw new Error("Failed to get user profile")}}static async updateUserProfile(e,t){try{await Mh(ea(wi,"users",e),t,{merge:!0})}catch{throw new Error("Failed to update user profile")}}static async resetPassword(e){try{await oT(Qt,e)}catch(t){throw new Error(this.getErrorMessage(t.code))}}static onAuthStateChanged(e){return pT(Qt,async t=>{if(t)try{const r=await this.getUserProfile(t.uid);e(r)}catch(r){console.error("Error getting user profile:",r),e(null)}else e(null)})}static async getIdToken(){const e=Qt.currentUser;if(!e)return null;try{return await e.getIdToken()}catch(t){return console.error("Error getting ID token:",t),null}}static getErrorMessage(e){return{"auth/user-not-found":"No user found with this email address.","auth/wrong-password":"Incorrect password.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password should be at least 6 characters.","auth/invalid-email":"Invalid email address.","auth/user-disabled":"This account has been disabled.","auth/too-many-requests":"Too many failed attempts. Please try again later.","auth/network-request-failed":"Network error. Please check your connection."}[e]||"An error occurred. Please try again."}}const bm=Y.createContext(void 0),yS=({children:n})=>{const[e,t]=Y.useState(null),[r,s]=Y.useState(!0),[i,o]=Y.useState(localStorage.getItem("authMethod")||"firebase");Y.useEffect(()=>{c()},[i]);const c=async()=>{s(!0);try{if(i==="firebase")return;{if(!localStorage.getItem("accessToken")){t(null);return}const V=await Qr.get("/auth/me");t(V.data.user),localStorage.setItem("userRole",V.data.user.role)}}catch{t(null),i==="express"&&(localStorage.removeItem("accessToken"),localStorage.removeItem("userRole"))}finally{s(!1)}};Y.useEffect(()=>{if(i==="firebase"){const D=ti.onAuthStateChanged(V=>{t(V?{uid:V.uid,email:V.email,firstName:V.firstName,lastName:V.lastName,role:V.role,phone:V.phone,isEmailVerified:V.isEmailVerified}:null),s(!1)});return()=>D()}},[i]);const C={user:e,login:async(D,V)=>{if(i==="firebase"){const M=await ti.signIn(D,V),K={uid:M.uid,email:M.email,firstName:M.firstName,lastName:M.lastName,role:M.role,phone:M.phone,isEmailVerified:M.isEmailVerified};t(K),localStorage.setItem("userRole",M.role)}else{const M=await Qr.post("/auth/login",{email:D,password:V});t(M.data.user),localStorage.setItem("accessToken",M.data.accessToken),localStorage.setItem("userRole",M.data.user.role)}},register:async D=>{if(i==="firebase"){const V=await ti.register(D.email,D.password,D.firstName,D.lastName,D.role,D.phone);t({uid:V.uid,email:V.email,firstName:V.firstName,lastName:V.lastName,role:V.role,phone:V.phone,isEmailVerified:V.isEmailVerified})}else{const V=await Qr.post("/auth/register",D);t(V.data.user),localStorage.setItem("accessToken",V.data.accessToken),localStorage.setItem("userRole",V.data.user.role)}},adminLogin:async(D,V)=>{try{const M=await Qr.post("/auth/admin-login",{email:D,password:V});t(M.data.user),localStorage.setItem("accessToken",M.data.accessToken),localStorage.setItem("userRole",M.data.user.role)}catch(M){throw console.error("Admin login error:",M),M}},logout:async()=>{i==="firebase"?await ti.signOut():(t(null),localStorage.removeItem("accessToken"),localStorage.removeItem("userRole"),Qr.post("/auth/logout"))},loading:r,isAdmin:()=>(e==null?void 0:e.role)==="admin",isHost:()=>(e==null?void 0:e.role)==="host",isRenter:()=>(e==null?void 0:e.role)==="renter",hasRole:D=>(e==null?void 0:e.role)===D,authMethod:i,setAuthMethod:D=>{o(D),localStorage.setItem("authMethod",D)}};return g.jsx(bm.Provider,{value:C,children:n})},Am=Y.createContext(void 0),_S=({children:n})=>{const[e,t]=Y.useState(!1);Y.useEffect(()=>{const i=localStorage.getItem("theme");t(i?i==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches)},[]),Y.useEffect(()=>{localStorage.setItem("theme",e?"dark":"light"),e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[e]);const s={isDark:e,toggleTheme:()=>{t(!e)}};return g.jsx(Am.Provider,{value:s,children:n})};function Sm(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var s=n.length;for(e=0;e<s;e++)n[e]&&(t=Sm(n[e]))&&(r&&(r+=" "),r+=t)}else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function wS(){for(var n,e,t=0,r="",s=arguments.length;t<s;t++)(n=arguments[t])&&(e=Sm(n))&&(r&&(r+=" "),r+=e);return r}const zc="-",ES=n=>{const e=vS(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:r}=n;return{getClassGroupId:o=>{const c=o.split(zc);return c[0]===""&&c.length!==1&&c.shift(),Rm(c,e)||TS(o)},getConflictingClassGroupIds:(o,c)=>{const l=t[o]||[];return c&&r[o]?[...l,...r[o]]:l}}},Rm=(n,e)=>{var o;if(n.length===0)return e.classGroupId;const t=n[0],r=e.nextPart.get(t),s=r?Rm(n.slice(1),r):void 0;if(s)return s;if(e.validators.length===0)return;const i=n.join(zc);return(o=e.validators.find(({validator:c})=>c(i)))==null?void 0:o.classGroupId},Wh=/^\[(.+)\]$/,TS=n=>{if(Wh.test(n)){const e=Wh.exec(n)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},vS=n=>{const{theme:e,classGroups:t}=n,r={nextPart:new Map,validators:[]};for(const s in t)$a(t[s],r,s,e);return r},$a=(n,e,t,r)=>{n.forEach(s=>{if(typeof s=="string"){const i=s===""?e:Gh(e,s);i.classGroupId=t;return}if(typeof s=="function"){if(IS(s)){$a(s(r),e,t,r);return}e.validators.push({validator:s,classGroupId:t});return}Object.entries(s).forEach(([i,o])=>{$a(o,Gh(e,i),t,r)})})},Gh=(n,e)=>{let t=n;return e.split(zc).forEach(r=>{t.nextPart.has(r)||t.nextPart.set(r,{nextPart:new Map,validators:[]}),t=t.nextPart.get(r)}),t},IS=n=>n.isThemeGetter,bS=n=>{if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,r=new Map;const s=(i,o)=>{t.set(i,o),e++,e>n&&(e=0,r=t,t=new Map)};return{get(i){let o=t.get(i);if(o!==void 0)return o;if((o=r.get(i))!==void 0)return s(i,o),o},set(i,o){t.has(i)?t.set(i,o):s(i,o)}}},za="!",qa=":",AS=qa.length,SS=n=>{const{prefix:e,experimentalParseClassName:t}=n;let r=s=>{const i=[];let o=0,c=0,l=0,h;for(let I=0;I<s.length;I++){let R=s[I];if(o===0&&c===0){if(R===qa){i.push(s.slice(l,I)),l=I+AS;continue}if(R==="/"){h=I;continue}}R==="["?o++:R==="]"?o--:R==="("?c++:R===")"&&c--}const f=i.length===0?s:s.substring(l),m=RS(f),E=m!==f,P=h&&h>l?h-l:void 0;return{modifiers:i,hasImportantModifier:E,baseClassName:m,maybePostfixModifierPosition:P}};if(e){const s=e+qa,i=r;r=o=>o.startsWith(s)?i(o.substring(s.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:o,maybePostfixModifierPosition:void 0}}if(t){const s=r;r=i=>t({className:i,parseClassName:s})}return r},RS=n=>n.endsWith(za)?n.substring(0,n.length-1):n.startsWith(za)?n.substring(1):n,CS=n=>{const e=Object.fromEntries(n.orderSensitiveModifiers.map(r=>[r,!0]));return r=>{if(r.length<=1)return r;const s=[];let i=[];return r.forEach(o=>{o[0]==="["||e[o]?(s.push(...i.sort(),o),i=[]):i.push(o)}),s.push(...i.sort()),s}},PS=n=>({cache:bS(n.cacheSize),parseClassName:SS(n),sortModifiers:CS(n),...ES(n)}),xS=/\s+/,kS=(n,e)=>{const{parseClassName:t,getClassGroupId:r,getConflictingClassGroupIds:s,sortModifiers:i}=e,o=[],c=n.trim().split(xS);let l="";for(let h=c.length-1;h>=0;h-=1){const f=c[h],{isExternal:m,modifiers:E,hasImportantModifier:P,baseClassName:I,maybePostfixModifierPosition:R}=t(f);if(m){l=f+(l.length>0?" "+l:l);continue}let C=!!R,D=r(C?I.substring(0,R):I);if(!D){if(!C){l=f+(l.length>0?" "+l:l);continue}if(D=r(I),!D){l=f+(l.length>0?" "+l:l);continue}C=!1}const V=i(E).join(":"),M=P?V+za:V,K=M+D;if(o.includes(K))continue;o.push(K);const se=s(D,C);for(let ne=0;ne<se.length;++ne){const T=se[ne];o.push(M+T)}l=f+(l.length>0?" "+l:l)}return l};function NS(){let n=0,e,t,r="";for(;n<arguments.length;)(e=arguments[n++])&&(t=Cm(e))&&(r&&(r+=" "),r+=t);return r}const Cm=n=>{if(typeof n=="string")return n;let e,t="";for(let r=0;r<n.length;r++)n[r]&&(e=Cm(n[r]))&&(t&&(t+=" "),t+=e);return t};function OS(n,...e){let t,r,s,i=o;function o(l){const h=e.reduce((f,m)=>m(f),n());return t=PS(h),r=t.cache.get,s=t.cache.set,i=c,c(l)}function c(l){const h=r(l);if(h)return h;const f=kS(l,t);return s(l,f),f}return function(){return i(NS.apply(null,arguments))}}const ve=n=>{const e=t=>t[n]||[];return e.isThemeGetter=!0,e},Pm=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,xm=/^\((?:(\w[\w-]*):)?(.+)\)$/i,DS=/^\d+\/\d+$/,VS=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,LS=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,MS=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,FS=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,jS=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Yn=n=>DS.test(n),X=n=>!!n&&!Number.isNaN(Number(n)),Kt=n=>!!n&&Number.isInteger(Number(n)),sa=n=>n.endsWith("%")&&X(n.slice(0,-1)),xt=n=>VS.test(n),US=()=>!0,BS=n=>LS.test(n)&&!MS.test(n),km=()=>!1,$S=n=>FS.test(n),zS=n=>jS.test(n),qS=n=>!j(n)&&!U(n),HS=n=>Rr(n,Dm,km),j=n=>Pm.test(n),Tn=n=>Rr(n,Vm,BS),ia=n=>Rr(n,JS,X),Kh=n=>Rr(n,Nm,km),WS=n=>Rr(n,Om,zS),ni=n=>Rr(n,Lm,$S),U=n=>xm.test(n),Jr=n=>Cr(n,Vm),GS=n=>Cr(n,YS),Qh=n=>Cr(n,Nm),KS=n=>Cr(n,Dm),QS=n=>Cr(n,Om),ri=n=>Cr(n,Lm,!0),Rr=(n,e,t)=>{const r=Pm.exec(n);return r?r[1]?e(r[1]):t(r[2]):!1},Cr=(n,e,t=!1)=>{const r=xm.exec(n);return r?r[1]?e(r[1]):t:!1},Nm=n=>n==="position"||n==="percentage",Om=n=>n==="image"||n==="url",Dm=n=>n==="length"||n==="size"||n==="bg-size",Vm=n=>n==="length",JS=n=>n==="number",YS=n=>n==="family-name",Lm=n=>n==="shadow",XS=()=>{const n=ve("color"),e=ve("font"),t=ve("text"),r=ve("font-weight"),s=ve("tracking"),i=ve("leading"),o=ve("breakpoint"),c=ve("container"),l=ve("spacing"),h=ve("radius"),f=ve("shadow"),m=ve("inset-shadow"),E=ve("text-shadow"),P=ve("drop-shadow"),I=ve("blur"),R=ve("perspective"),C=ve("aspect"),D=ve("ease"),V=ve("animate"),M=()=>["auto","avoid","all","avoid-page","page","left","right","column"],K=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],se=()=>[...K(),U,j],ne=()=>["auto","hidden","clip","visible","scroll"],T=()=>["auto","contain","none"],y=()=>[U,j,l],w=()=>[Yn,"full","auto",...y()],b=()=>[Kt,"none","subgrid",U,j],v=()=>["auto",{span:["full",Kt,U,j]},Kt,U,j],A=()=>[Kt,"auto",U,j],_=()=>["auto","min","max","fr",U,j],ae=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Ce=()=>["start","end","center","stretch","center-safe","end-safe"],fe=()=>["auto",...y()],Ze=()=>[Yn,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...y()],B=()=>[n,U,j],pt=()=>[...K(),Qh,Kh,{position:[U,j]}],$n=()=>["no-repeat",{repeat:["","x","y","space","round"]}],Be=()=>["auto","cover","contain",KS,HS,{size:[U,j]}],Ke=()=>[sa,Jr,Tn],pe=()=>["","none","full",h,U,j],ue=()=>["",X,Jr,Tn],it=()=>["solid","dashed","dotted","double"],zn=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],me=()=>[X,sa,Qh,Kh],qn=()=>["","none",I,U,j],pn=()=>["none",X,U,j],Hn=()=>["none",X,U,j],Pr=()=>[X,U,j],mn=()=>[Yn,"full",...y()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[xt],breakpoint:[xt],color:[US],container:[xt],"drop-shadow":[xt],ease:["in","out","in-out"],font:[qS],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[xt],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[xt],shadow:[xt],spacing:["px",X],text:[xt],"text-shadow":[xt],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Yn,j,U,C]}],container:["container"],columns:[{columns:[X,j,U,c]}],"break-after":[{"break-after":M()}],"break-before":[{"break-before":M()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:se()}],overflow:[{overflow:ne()}],"overflow-x":[{"overflow-x":ne()}],"overflow-y":[{"overflow-y":ne()}],overscroll:[{overscroll:T()}],"overscroll-x":[{"overscroll-x":T()}],"overscroll-y":[{"overscroll-y":T()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:w()}],"inset-x":[{"inset-x":w()}],"inset-y":[{"inset-y":w()}],start:[{start:w()}],end:[{end:w()}],top:[{top:w()}],right:[{right:w()}],bottom:[{bottom:w()}],left:[{left:w()}],visibility:["visible","invisible","collapse"],z:[{z:[Kt,"auto",U,j]}],basis:[{basis:[Yn,"full","auto",c,...y()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[X,Yn,"auto","initial","none",j]}],grow:[{grow:["",X,U,j]}],shrink:[{shrink:["",X,U,j]}],order:[{order:[Kt,"first","last","none",U,j]}],"grid-cols":[{"grid-cols":b()}],"col-start-end":[{col:v()}],"col-start":[{"col-start":A()}],"col-end":[{"col-end":A()}],"grid-rows":[{"grid-rows":b()}],"row-start-end":[{row:v()}],"row-start":[{"row-start":A()}],"row-end":[{"row-end":A()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":_()}],"auto-rows":[{"auto-rows":_()}],gap:[{gap:y()}],"gap-x":[{"gap-x":y()}],"gap-y":[{"gap-y":y()}],"justify-content":[{justify:[...ae(),"normal"]}],"justify-items":[{"justify-items":[...Ce(),"normal"]}],"justify-self":[{"justify-self":["auto",...Ce()]}],"align-content":[{content:["normal",...ae()]}],"align-items":[{items:[...Ce(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Ce(),{baseline:["","last"]}]}],"place-content":[{"place-content":ae()}],"place-items":[{"place-items":[...Ce(),"baseline"]}],"place-self":[{"place-self":["auto",...Ce()]}],p:[{p:y()}],px:[{px:y()}],py:[{py:y()}],ps:[{ps:y()}],pe:[{pe:y()}],pt:[{pt:y()}],pr:[{pr:y()}],pb:[{pb:y()}],pl:[{pl:y()}],m:[{m:fe()}],mx:[{mx:fe()}],my:[{my:fe()}],ms:[{ms:fe()}],me:[{me:fe()}],mt:[{mt:fe()}],mr:[{mr:fe()}],mb:[{mb:fe()}],ml:[{ml:fe()}],"space-x":[{"space-x":y()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":y()}],"space-y-reverse":["space-y-reverse"],size:[{size:Ze()}],w:[{w:[c,"screen",...Ze()]}],"min-w":[{"min-w":[c,"screen","none",...Ze()]}],"max-w":[{"max-w":[c,"screen","none","prose",{screen:[o]},...Ze()]}],h:[{h:["screen","lh",...Ze()]}],"min-h":[{"min-h":["screen","lh","none",...Ze()]}],"max-h":[{"max-h":["screen","lh",...Ze()]}],"font-size":[{text:["base",t,Jr,Tn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,U,ia]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",sa,j]}],"font-family":[{font:[GS,j,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[s,U,j]}],"line-clamp":[{"line-clamp":[X,"none",U,ia]}],leading:[{leading:[i,...y()]}],"list-image":[{"list-image":["none",U,j]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",U,j]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:B()}],"text-color":[{text:B()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...it(),"wavy"]}],"text-decoration-thickness":[{decoration:[X,"from-font","auto",U,Tn]}],"text-decoration-color":[{decoration:B()}],"underline-offset":[{"underline-offset":[X,"auto",U,j]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:y()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",U,j]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",U,j]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:pt()}],"bg-repeat":[{bg:$n()}],"bg-size":[{bg:Be()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Kt,U,j],radial:["",U,j],conic:[Kt,U,j]},QS,WS]}],"bg-color":[{bg:B()}],"gradient-from-pos":[{from:Ke()}],"gradient-via-pos":[{via:Ke()}],"gradient-to-pos":[{to:Ke()}],"gradient-from":[{from:B()}],"gradient-via":[{via:B()}],"gradient-to":[{to:B()}],rounded:[{rounded:pe()}],"rounded-s":[{"rounded-s":pe()}],"rounded-e":[{"rounded-e":pe()}],"rounded-t":[{"rounded-t":pe()}],"rounded-r":[{"rounded-r":pe()}],"rounded-b":[{"rounded-b":pe()}],"rounded-l":[{"rounded-l":pe()}],"rounded-ss":[{"rounded-ss":pe()}],"rounded-se":[{"rounded-se":pe()}],"rounded-ee":[{"rounded-ee":pe()}],"rounded-es":[{"rounded-es":pe()}],"rounded-tl":[{"rounded-tl":pe()}],"rounded-tr":[{"rounded-tr":pe()}],"rounded-br":[{"rounded-br":pe()}],"rounded-bl":[{"rounded-bl":pe()}],"border-w":[{border:ue()}],"border-w-x":[{"border-x":ue()}],"border-w-y":[{"border-y":ue()}],"border-w-s":[{"border-s":ue()}],"border-w-e":[{"border-e":ue()}],"border-w-t":[{"border-t":ue()}],"border-w-r":[{"border-r":ue()}],"border-w-b":[{"border-b":ue()}],"border-w-l":[{"border-l":ue()}],"divide-x":[{"divide-x":ue()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ue()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...it(),"hidden","none"]}],"divide-style":[{divide:[...it(),"hidden","none"]}],"border-color":[{border:B()}],"border-color-x":[{"border-x":B()}],"border-color-y":[{"border-y":B()}],"border-color-s":[{"border-s":B()}],"border-color-e":[{"border-e":B()}],"border-color-t":[{"border-t":B()}],"border-color-r":[{"border-r":B()}],"border-color-b":[{"border-b":B()}],"border-color-l":[{"border-l":B()}],"divide-color":[{divide:B()}],"outline-style":[{outline:[...it(),"none","hidden"]}],"outline-offset":[{"outline-offset":[X,U,j]}],"outline-w":[{outline:["",X,Jr,Tn]}],"outline-color":[{outline:B()}],shadow:[{shadow:["","none",f,ri,ni]}],"shadow-color":[{shadow:B()}],"inset-shadow":[{"inset-shadow":["none",m,ri,ni]}],"inset-shadow-color":[{"inset-shadow":B()}],"ring-w":[{ring:ue()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:B()}],"ring-offset-w":[{"ring-offset":[X,Tn]}],"ring-offset-color":[{"ring-offset":B()}],"inset-ring-w":[{"inset-ring":ue()}],"inset-ring-color":[{"inset-ring":B()}],"text-shadow":[{"text-shadow":["none",E,ri,ni]}],"text-shadow-color":[{"text-shadow":B()}],opacity:[{opacity:[X,U,j]}],"mix-blend":[{"mix-blend":[...zn(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":zn()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[X]}],"mask-image-linear-from-pos":[{"mask-linear-from":me()}],"mask-image-linear-to-pos":[{"mask-linear-to":me()}],"mask-image-linear-from-color":[{"mask-linear-from":B()}],"mask-image-linear-to-color":[{"mask-linear-to":B()}],"mask-image-t-from-pos":[{"mask-t-from":me()}],"mask-image-t-to-pos":[{"mask-t-to":me()}],"mask-image-t-from-color":[{"mask-t-from":B()}],"mask-image-t-to-color":[{"mask-t-to":B()}],"mask-image-r-from-pos":[{"mask-r-from":me()}],"mask-image-r-to-pos":[{"mask-r-to":me()}],"mask-image-r-from-color":[{"mask-r-from":B()}],"mask-image-r-to-color":[{"mask-r-to":B()}],"mask-image-b-from-pos":[{"mask-b-from":me()}],"mask-image-b-to-pos":[{"mask-b-to":me()}],"mask-image-b-from-color":[{"mask-b-from":B()}],"mask-image-b-to-color":[{"mask-b-to":B()}],"mask-image-l-from-pos":[{"mask-l-from":me()}],"mask-image-l-to-pos":[{"mask-l-to":me()}],"mask-image-l-from-color":[{"mask-l-from":B()}],"mask-image-l-to-color":[{"mask-l-to":B()}],"mask-image-x-from-pos":[{"mask-x-from":me()}],"mask-image-x-to-pos":[{"mask-x-to":me()}],"mask-image-x-from-color":[{"mask-x-from":B()}],"mask-image-x-to-color":[{"mask-x-to":B()}],"mask-image-y-from-pos":[{"mask-y-from":me()}],"mask-image-y-to-pos":[{"mask-y-to":me()}],"mask-image-y-from-color":[{"mask-y-from":B()}],"mask-image-y-to-color":[{"mask-y-to":B()}],"mask-image-radial":[{"mask-radial":[U,j]}],"mask-image-radial-from-pos":[{"mask-radial-from":me()}],"mask-image-radial-to-pos":[{"mask-radial-to":me()}],"mask-image-radial-from-color":[{"mask-radial-from":B()}],"mask-image-radial-to-color":[{"mask-radial-to":B()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":K()}],"mask-image-conic-pos":[{"mask-conic":[X]}],"mask-image-conic-from-pos":[{"mask-conic-from":me()}],"mask-image-conic-to-pos":[{"mask-conic-to":me()}],"mask-image-conic-from-color":[{"mask-conic-from":B()}],"mask-image-conic-to-color":[{"mask-conic-to":B()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:pt()}],"mask-repeat":[{mask:$n()}],"mask-size":[{mask:Be()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",U,j]}],filter:[{filter:["","none",U,j]}],blur:[{blur:qn()}],brightness:[{brightness:[X,U,j]}],contrast:[{contrast:[X,U,j]}],"drop-shadow":[{"drop-shadow":["","none",P,ri,ni]}],"drop-shadow-color":[{"drop-shadow":B()}],grayscale:[{grayscale:["",X,U,j]}],"hue-rotate":[{"hue-rotate":[X,U,j]}],invert:[{invert:["",X,U,j]}],saturate:[{saturate:[X,U,j]}],sepia:[{sepia:["",X,U,j]}],"backdrop-filter":[{"backdrop-filter":["","none",U,j]}],"backdrop-blur":[{"backdrop-blur":qn()}],"backdrop-brightness":[{"backdrop-brightness":[X,U,j]}],"backdrop-contrast":[{"backdrop-contrast":[X,U,j]}],"backdrop-grayscale":[{"backdrop-grayscale":["",X,U,j]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[X,U,j]}],"backdrop-invert":[{"backdrop-invert":["",X,U,j]}],"backdrop-opacity":[{"backdrop-opacity":[X,U,j]}],"backdrop-saturate":[{"backdrop-saturate":[X,U,j]}],"backdrop-sepia":[{"backdrop-sepia":["",X,U,j]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":y()}],"border-spacing-x":[{"border-spacing-x":y()}],"border-spacing-y":[{"border-spacing-y":y()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",U,j]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[X,"initial",U,j]}],ease:[{ease:["linear","initial",D,U,j]}],delay:[{delay:[X,U,j]}],animate:[{animate:["none",V,U,j]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[R,U,j]}],"perspective-origin":[{"perspective-origin":se()}],rotate:[{rotate:pn()}],"rotate-x":[{"rotate-x":pn()}],"rotate-y":[{"rotate-y":pn()}],"rotate-z":[{"rotate-z":pn()}],scale:[{scale:Hn()}],"scale-x":[{"scale-x":Hn()}],"scale-y":[{"scale-y":Hn()}],"scale-z":[{"scale-z":Hn()}],"scale-3d":["scale-3d"],skew:[{skew:Pr()}],"skew-x":[{"skew-x":Pr()}],"skew-y":[{"skew-y":Pr()}],transform:[{transform:[U,j,"","none","gpu","cpu"]}],"transform-origin":[{origin:se()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:mn()}],"translate-x":[{"translate-x":mn()}],"translate-y":[{"translate-y":mn()}],"translate-z":[{"translate-z":mn()}],"translate-none":["translate-none"],accent:[{accent:B()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:B()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",U,j]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":y()}],"scroll-mx":[{"scroll-mx":y()}],"scroll-my":[{"scroll-my":y()}],"scroll-ms":[{"scroll-ms":y()}],"scroll-me":[{"scroll-me":y()}],"scroll-mt":[{"scroll-mt":y()}],"scroll-mr":[{"scroll-mr":y()}],"scroll-mb":[{"scroll-mb":y()}],"scroll-ml":[{"scroll-ml":y()}],"scroll-p":[{"scroll-p":y()}],"scroll-px":[{"scroll-px":y()}],"scroll-py":[{"scroll-py":y()}],"scroll-ps":[{"scroll-ps":y()}],"scroll-pe":[{"scroll-pe":y()}],"scroll-pt":[{"scroll-pt":y()}],"scroll-pr":[{"scroll-pr":y()}],"scroll-pb":[{"scroll-pb":y()}],"scroll-pl":[{"scroll-pl":y()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",U,j]}],fill:[{fill:["none",...B()]}],"stroke-w":[{stroke:[X,Jr,Tn,ia]}],stroke:[{stroke:["none",...B()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},ZS=OS(XS);function nr(...n){return ZS(wS(n))}const eR=(n,e)=>{switch(e.type){case"ADD_TOAST":return{...n,toasts:[...n.toasts,e.payload]};case"REMOVE_TOAST":return{...n,toasts:n.toasts.filter(t=>t.id!==e.payload)};case"CLEAR_TOASTS":return{...n,toasts:[]};default:return n}},Mm=Y.createContext(void 0),qc=()=>{const n=Y.useContext(Mm);if(!n)throw new Error("useToast must be used within a ToastProvider");return n},tR=({children:n})=>{const[e,t]=Y.useReducer(eR,{toasts:[]}),r=o=>{const c=Math.random().toString(36).substr(2,9);t({type:"ADD_TOAST",payload:{...o,id:c}})},s=o=>{t({type:"REMOVE_TOAST",payload:o})},i=()=>{t({type:"CLEAR_TOASTS"})};return g.jsxs(Mm.Provider,{value:{toasts:e.toasts,addToast:r,removeToast:s,clearToasts:i},children:[n,g.jsx(nR,{})]})},nR=()=>{const{toasts:n}=qc();return Yh.createPortal(g.jsx("div",{className:"fixed top-4 right-4 z-50 space-y-2",children:n.map(e=>g.jsx(rR,{toast:e},e.id))}),document.body)},rR=({toast:n})=>{const{removeToast:e}=qc();Y.useEffect(()=>{if(n.duration!==0){const s=setTimeout(()=>{e(n.id)},n.duration||5e3);return()=>clearTimeout(s)}},[n.id,n.duration,e]);const t=()=>{switch(n.type){case"success":return g.jsx("svg",{className:"h-5 w-5 text-green-400",fill:"currentColor",viewBox:"0 0 20 20",children:g.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})});case"error":return g.jsx("svg",{className:"h-5 w-5 text-red-400",fill:"currentColor",viewBox:"0 0 20 20",children:g.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})});case"warning":return g.jsx("svg",{className:"h-5 w-5 text-yellow-400",fill:"currentColor",viewBox:"0 0 20 20",children:g.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})});case"info":return g.jsx("svg",{className:"h-5 w-5 text-blue-400",fill:"currentColor",viewBox:"0 0 20 20",children:g.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})})}},r=()=>{switch(n.type){case"success":return"bg-green-50 border-green-200 text-green-800";case"error":return"bg-red-50 border-red-200 text-red-800";case"warning":return"bg-yellow-50 border-yellow-200 text-yellow-800";case"info":return"bg-blue-50 border-blue-200 text-blue-800"}};return g.jsx("div",{className:nr("max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden border",r()),role:"alert","aria-live":"assertive",children:g.jsx("div",{className:"p-4",children:g.jsxs("div",{className:"flex items-start",children:[g.jsx("div",{className:"flex-shrink-0",children:t()}),g.jsxs("div",{className:"ml-3 w-0 flex-1",children:[g.jsx("p",{className:"text-sm font-medium",children:n.title}),n.message&&g.jsx("p",{className:"mt-1 text-sm opacity-90",children:n.message}),n.action&&g.jsx("div",{className:"mt-2",children:g.jsx("button",{onClick:n.action.onClick,className:"text-sm font-medium underline hover:no-underline",children:n.action.label})})]}),g.jsx("div",{className:"ml-4 flex-shrink-0 flex",children:g.jsxs("button",{onClick:()=>e(n.id),className:"rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[g.jsx("span",{className:"sr-only",children:"Close"}),g.jsx("svg",{className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:g.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})]})})})},QR=()=>{const{addToast:n}=qc();return{success:(e,t)=>n({type:"success",title:e,message:t}),error:(e,t)=>n({type:"error",title:e,message:t}),warning:(e,t)=>n({type:"warning",title:e,message:t}),info:(e,t)=>n({type:"info",title:e,message:t})}},Fm=()=>{const n=Y.useContext(bm);if(n===void 0)throw new Error("useAuth must be used within an AuthProvider");return n},sR=()=>{const n=Y.useContext(Am);if(n===void 0)throw new Error("useTheme must be used within a ThemeProvider");return n},iR=()=>{const[n,e]=Y.useState(!1),[t,r]=Y.useState([{id:"1",text:"Hi! I'm your RideShare SA assistant. How can I help you today?",isUser:!1,timestamp:new Date}]),[s,i]=Y.useState(""),[o,c]=Y.useState(!1),l=Y.useRef(null),h=()=>{var I;(I=l.current)==null||I.scrollIntoView({behavior:"smooth"})};Y.useEffect(()=>{h()},[t]);const f=I=>{const R=I.toLowerCase();return R.includes("hello")||R.includes("hi")||R.includes("hey")?"Hello! Welcome to RideShare SA! I'm here to help you with bookings, listings, and any questions you might have. What can I assist you with today?":R.includes("book")||R.includes("rent")||R.includes("reserve")?`Great! To book a vehicle:

1. Go to "Browse Rentals" in the menu
2. Search by location and dates
3. Filter by vehicle type and features
4. Click "Book Now" on your chosen vehicle
5. Complete the booking process

Need help with any of these steps?`:R.includes("list")||R.includes("host")||R.includes("earn")?`Perfect! To list your vehicle and start earning:

1. Click "List Your Vehicle" in the menu
2. Create a host account (if you haven't already)
3. Add vehicle details, photos, and description
4. Set your availability and pricing
5. Submit for approval

Our hosts typically earn R200-800 per day!`:R.includes("price")||R.includes("cost")||R.includes("expensive")?`Our pricing is competitive and varies by vehicle:

• Economy cars: R150-300/day
• SUVs: R300-500/day
• Luxury vehicles: R500+/day
• Bakkies: R200-400/day

All prices include basic insurance. You can see exact pricing when browsing vehicles!`:R.includes("safe")||R.includes("insurance")||R.includes("secure")?`Safety is our #1 priority!

✅ All vehicles are fully insured
✅ Hosts are verified and background checked
✅ 24/7 support team
✅ Secure payment processing
✅ Vehicle condition checks

You can read reviews and safety guidelines before booking.`:R.includes("pay")||R.includes("payment")||R.includes("eft")||R.includes("card")?`We accept multiple payment methods:

• Credit/Debit cards
• EFT transfers
• Payfast (South African)
• Bank transfers

Payment is 100% secure and processed when you confirm your booking. No hidden fees!`:R.includes("where")||R.includes("location")||R.includes("city")?`We operate across South Africa!

Major cities:
• Cape Town
• Johannesburg
• Durban
• Pretoria
• Port Elizabeth
• Bloemfontein

Use the location filter to find vehicles near you!`:R.includes("help")||R.includes("support")||R.includes("problem")?`I'm here to help!

For additional support:
• FAQ page: /faq
• Email: support@rideshare-sa.co.za
• Phone: +27 21 123 4567
• Live chat: Right here!

What specific issue can I help you with?`:R.includes("contact support")||R.includes("contact")?`Here's how to reach our support team:

• Email: support@rideshare-sa.co.za
• Phone: +27 21 123 4567
• Live chat: Available 24/7 (that's me!)
• FAQ: Visit /faq for common questions

Is there something specific I can help you with right now?`:`I understand you're asking about: "${I}"

I can help with:
• Booking vehicles
• Listing your car
• Pricing information
• Safety & insurance
• Payment methods
• Locations
• General support

What would you like to know more about?`},m=async I=>{const R=I||s.trim();if(!R)return;const C={id:Date.now().toString(),text:R,isUser:!0,timestamp:new Date};r(D=>[...D,C]),i(""),c(!0),setTimeout(()=>{const D={id:(Date.now()+1).toString(),text:f(R),isUser:!1,timestamp:new Date};r(V=>[...V,D]),c(!1)},1e3+Math.random()*1e3)},E=I=>{I.key==="Enter"&&!I.shiftKey&&(I.preventDefault(),m())},P=["How do I book a vehicle?","How do I list my car?","What are your prices?","Is it safe?","Contact support"];return g.jsxs(g.Fragment,{children:[g.jsx(Qn.button,{onClick:()=>e(!n),className:"fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300",whileHover:{scale:1.1},whileTap:{scale:.95},"aria-label":"Open chat",children:g.jsx(Bl,{mode:"wait",children:n?g.jsx(Qn.svg,{initial:{rotate:-90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:90,opacity:0},className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})},"close"):g.jsx(Qn.svg,{initial:{rotate:90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:-90,opacity:0},className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})},"chat")})}),g.jsx(Bl,{children:n&&g.jsxs(Qn.div,{initial:{opacity:0,y:20,scale:.8},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:20,scale:.8},transition:{duration:.3,type:"spring",damping:25,stiffness:500},className:"fixed bottom-24 right-6 w-80 h-96 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 flex flex-col",children:[g.jsxs("div",{className:"bg-blue-600 text-white p-4 rounded-t-xl flex items-center justify-between",children:[g.jsxs("div",{className:"flex items-center",children:[g.jsx("div",{className:"w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3",children:g.jsx("span",{className:"text-sm",children:"🤖"})}),g.jsxs("div",{children:[g.jsx("h3",{className:"font-semibold",children:"RideShare Assistant"}),g.jsx("p",{className:"text-xs text-blue-100",children:"Online now"})]})]}),g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsx("button",{onClick:()=>{r([{id:"1",text:"Hi! I'm your RideShare SA assistant. How can I help you today?",isUser:!1,timestamp:new Date}])},className:"text-white hover:text-blue-200 transition-colors p-1",title:"Start new conversation",children:g.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})})}),g.jsx("button",{onClick:()=>e(!1),className:"text-white hover:text-blue-200 transition-colors p-1",children:g.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]})]}),g.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:[t.map(I=>g.jsx(Qn.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:`flex ${I.isUser?"justify-end":"justify-start"}`,children:g.jsxs("div",{className:`max-w-xs px-4 py-2 rounded-lg ${I.isUser?"bg-blue-600 text-white":"bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"}`,children:[g.jsx("div",{className:"text-sm whitespace-pre-line",children:I.text}),g.jsx("p",{className:"text-xs opacity-70 mt-1",children:I.timestamp.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]})},I.id)),o&&g.jsx(Qn.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"flex justify-start",children:g.jsx("div",{className:"bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg",children:g.jsxs("div",{className:"flex items-center space-x-2",children:[g.jsxs("div",{className:"flex space-x-1",children:[g.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce"}),g.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"0.1s"}}),g.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"0.2s"}})]}),g.jsx("span",{className:"text-xs text-gray-500",children:"RideShare Assistant is typing..."})]})})}),g.jsx("div",{ref:l})]}),t.length===1&&g.jsxs("div",{className:"px-4 pb-2",children:[g.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mb-2",children:"Quick questions:"}),g.jsx("div",{className:"flex flex-wrap gap-2",children:P.map((I,R)=>g.jsx("button",{onClick:()=>m(I),className:"text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-1 rounded-full transition-colors",children:I},R))})]}),g.jsx("div",{className:"p-4 border-t border-gray-200 dark:border-gray-700",children:g.jsxs("div",{className:"flex space-x-2",children:[g.jsx("input",{type:"text",value:s,onChange:I=>i(I.target.value),onKeyPress:E,placeholder:"Type your message...",className:"flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white text-sm"}),g.jsx("button",{onClick:()=>m(),disabled:!s.trim()||o,className:"bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center",children:o?g.jsx("div",{className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"}):g.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 19l9 2-9-18-9 18 9-2zm0 0v-8"})})})]})})]})})]})},Ye=({name:n,size:e="md",className:t=""})=>{const r={sm:"w-4 h-4",md:"w-5 h-5",lg:"w-6 h-6"},s={Home:g.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})}),Search:g.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),Car:g.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7v8a2 2 0 002 2h4a2 2 0 002-2V7M8 7a2 2 0 00-2 2v6a2 2 0 002 2M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2m-6 0h6"})}),Info:g.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),Phone:g.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})}),User:g.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),Logout:g.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})}),Login:g.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"})}),Plus:g.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v16m8-8H4"})}),Menu:g.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})}),Sun:g.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}),Moon:g.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})};return g.jsx(g.Fragment,{children:s[n]||null})},ot=({children:n})=>{const{user:e,logout:t}=Fm(),{isDark:r,toggleTheme:s}=sR(),[i,o]=Y.useState(!1),c=Xh(),l=f=>c.pathname===f,h=[{name:"Home",path:"/",icon:"Home"},{name:"Browse",path:"/search",icon:"Search"},{name:"Host",path:"/dashboard/host",icon:"Car"},{name:"About",path:"/about",icon:"Info"},{name:"Contact",path:"/contact",icon:"Phone"}];return g.jsxs("div",{className:"min-h-screen",children:[g.jsx("header",{className:"fixed top-4 left-0 right-0 z-50 w-full px-4",children:g.jsxs("div",{className:"flex items-center max-w-6xl mx-auto",children:[g.jsx($e,{to:"/",className:"flex items-center hover:opacity-80 transition-all duration-300",children:g.jsx("img",{src:"/logo.png",alt:"RideShare SA Logo",className:"h-[40px] w-auto drop-shadow-lg"})}),g.jsx("nav",{className:"flex items-center absolute left-1/2 transform -translate-x-1/2",children:g.jsxs("div",{className:"bg-white/25 backdrop-blur-md border border-white/20 rounded-full shadow-xl px-4 py-2",children:[g.jsxs("div",{className:"flex items-center justify-center h-[40px] px-4",children:[g.jsx("div",{className:"hidden md:flex items-center space-x-1",children:h.map(f=>g.jsxs($e,{to:f.path,className:`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${l(f.path)?"glass-button-primary text-white":"glass-button text-white/80 hover:text-white"}`,children:[g.jsx(Ye,{name:f.icon,size:"sm"}),g.jsx("span",{children:f.name})]},f.path))}),g.jsxs("div",{className:"flex items-center space-x-1 ml-3",children:[g.jsx("button",{onClick:s,className:"glass-button p-1.5 text-white/80 hover:text-white transition-all duration-300",title:r?"Switch to light mode":"Switch to dark mode",children:g.jsx(Ye,{name:r?"Sun":"Moon",size:"sm"})}),e?g.jsxs("div",{className:"flex items-center space-x-1",children:[g.jsxs($e,{to:"/dashboard",className:`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${l("/dashboard")||c.pathname.startsWith("/dashboard")?"glass-button-primary text-white":"glass-button text-white/80 hover:text-white"}`,children:[g.jsx(Ye,{name:"User",size:"sm"}),g.jsx("span",{className:"hidden sm:block",children:"Dashboard"})]}),g.jsxs("button",{onClick:t,className:"glass-button flex items-center space-x-1 px-2.5 py-1.5 text-white/80 hover:text-white transition-all duration-300",children:[g.jsx(Ye,{name:"Logout",size:"sm"}),g.jsx("span",{className:"hidden sm:block",children:"Logout"})]})]}):g.jsxs("div",{className:"flex items-center space-x-1",children:[g.jsxs($e,{to:"/login",className:`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${l("/login")?"glass-button-primary text-white":"glass-button text-white/80 hover:text-white"}`,children:[g.jsx(Ye,{name:"Login",size:"sm"}),g.jsx("span",{className:"hidden sm:block",children:"Login"})]}),g.jsxs($e,{to:"/register",className:"btn-primary flex items-center space-x-1 px-3 py-1.5",children:[g.jsx(Ye,{name:"Plus",size:"sm"}),g.jsx("span",{className:"hidden sm:block",children:"Sign Up"})]})]}),g.jsx("button",{onClick:()=>o(!i),className:"md:hidden glass-button p-1.5 text-white/80 hover:text-white transition-all duration-300",children:g.jsx(Ye,{name:"Menu",size:"sm"})})]})]}),i&&g.jsx("div",{className:"md:hidden border-t border-white/20 mt-2 pt-4 pb-4",children:g.jsxs("div",{className:"space-y-2",children:[h.map(f=>g.jsxs($e,{to:f.path,onClick:()=>o(!1),className:`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${l(f.path)?"glass-button-primary text-white":"glass-button text-white/80 hover:text-white"}`,children:[g.jsx(Ye,{name:f.icon,size:"sm"}),g.jsx("span",{children:f.name})]},f.path)),e?g.jsxs(g.Fragment,{children:[g.jsxs($e,{to:"/dashboard",onClick:()=>o(!1),className:`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${l("/dashboard")||c.pathname.startsWith("/dashboard")?"glass-button-primary text-white":"glass-button text-white/80 hover:text-white"}`,children:[g.jsx(Ye,{name:"User",size:"sm"}),g.jsx("span",{children:"Dashboard"})]}),g.jsxs("button",{onClick:()=>{t(),o(!1)},className:"glass-button flex items-center space-x-3 w-full px-4 py-3 text-white/80 hover:text-white transition-all duration-300",children:[g.jsx(Ye,{name:"Logout",size:"sm"}),g.jsx("span",{children:"Logout"})]})]}):g.jsxs(g.Fragment,{children:[g.jsxs($e,{to:"/login",onClick:()=>o(!1),className:`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${l("/login")?"glass-button-primary text-white":"glass-button text-white/80 hover:text-white"}`,children:[g.jsx(Ye,{name:"Login",size:"sm"}),g.jsx("span",{children:"Login"})]}),g.jsxs($e,{to:"/register",onClick:()=>o(!1),className:"btn-primary flex items-center space-x-3 px-4 py-3",children:[g.jsx(Ye,{name:"Plus",size:"sm"}),g.jsx("span",{children:"Sign Up"})]})]})]})})]})})]})}),g.jsx("main",{className:"pt-16",children:n}),g.jsx("footer",{className:"bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-6",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[g.jsxs("div",{className:"md:col-span-1",children:[g.jsx("div",{className:"flex items-center mb-3",children:g.jsx("img",{src:"/logo.png",alt:"RideShare SA Logo",className:"h-8 w-auto"})}),g.jsx("p",{className:"text-gray-300 text-sm mb-3 max-w-md",children:"South Africa's premier peer-to-peer vehicle rental platform."}),g.jsxs("div",{className:"flex space-x-3",children:[g.jsx("a",{href:"#",className:"text-gray-400 hover:text-white transition-colors","aria-label":"Facebook",children:g.jsx("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})}),g.jsx("a",{href:"#",className:"text-gray-400 hover:text-white transition-colors","aria-label":"Twitter",children:g.jsx("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{d:"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"})})}),g.jsx("a",{href:"#",className:"text-gray-400 hover:text-white transition-colors","aria-label":"LinkedIn",children:g.jsx("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:g.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})})]})]}),g.jsxs("div",{children:[g.jsx("h4",{className:"text-sm font-semibold mb-3 text-white",children:"Quick Links"}),g.jsxs("ul",{className:"space-y-1",children:[g.jsx("li",{children:g.jsx($e,{to:"/",className:"text-gray-300 hover:text-white transition-colors text-xs",children:"Home"})}),g.jsx("li",{children:g.jsx($e,{to:"/search",className:"text-gray-300 hover:text-white transition-colors text-xs",children:"Browse Vehicles"})}),g.jsx("li",{children:g.jsx($e,{to:"/about",className:"text-gray-300 hover:text-white transition-colors text-xs",children:"About Us"})}),g.jsx("li",{children:g.jsx($e,{to:"/contact",className:"text-gray-300 hover:text-white transition-colors text-xs",children:"Contact"})})]})]}),g.jsxs("div",{children:[g.jsx("h4",{className:"text-sm font-semibold mb-3 text-white",children:"Support"}),g.jsxs("ul",{className:"space-y-1",children:[g.jsx("li",{children:g.jsx("a",{href:"#",className:"text-gray-300 hover:text-white transition-colors text-xs",children:"Help Center"})}),g.jsx("li",{children:g.jsx("a",{href:"#",className:"text-gray-300 hover:text-white transition-colors text-xs",children:"Safety Guidelines"})}),g.jsx("li",{children:g.jsx("a",{href:"#",className:"text-gray-300 hover:text-white transition-colors text-xs",children:"Terms of Service"})}),g.jsx("li",{children:g.jsx("a",{href:"#",className:"text-gray-300 hover:text-white transition-colors text-xs",children:"Privacy Policy"})}),g.jsx("li",{children:g.jsxs($e,{to:"/admin-login",className:"text-gray-300 hover:text-white transition-colors text-xs flex items-center space-x-1",title:"Admin Access",children:[g.jsx(Ye,{name:"User",size:"sm"}),g.jsx("span",{children:"Admin"})]})})]})]})]}),g.jsx("div",{className:"border-t border-gray-700 mt-4 pt-4",children:g.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[g.jsx("p",{className:"text-gray-400 text-xs mb-2 md:mb-0",children:"© 2024 RideShare SA. All rights reserved. | Cape Town, South Africa"}),g.jsxs("div",{className:"flex items-center space-x-3 text-xs text-gray-400",children:[g.jsx("span",{children:"Secure Payments"}),g.jsx("span",{children:"Insured Rentals"}),g.jsx("span",{children:"Trusted Platform"})]})]})})]})}),g.jsx(iR,{})]})},oR=({children:n,requiredRole:e,allowedRoles:t})=>{const{user:r,loading:s}=Fm(),i=Xh();return s?g.jsx("div",{className:"min-h-screen flex items-center justify-center",children:g.jsx("div",{className:"animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"})}):r?e&&r.role!==e?g.jsx(Vo,{to:"/unauthorized",replace:!0}):t&&!t.includes(r.role)?g.jsx(Vo,{to:"/unauthorized",replace:!0}):g.jsx(g.Fragment,{children:n}):g.jsx(Vo,{to:"/login",state:{from:i},replace:!0})},Jh={sm:"h-4 w-4",md:"h-8 w-8",lg:"h-12 w-12"},aR=({size:n="md",variant:e="spinner",className:t,text:r})=>{const s=()=>g.jsxs("svg",{className:nr("animate-spin",Jh[n],t),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[g.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),g.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),i=()=>g.jsx("div",{className:nr("flex space-x-1",t),children:[0,1,2].map(h=>g.jsx("div",{className:nr("rounded-full bg-current animate-pulse",n==="sm"?"h-2 w-2":n==="md"?"h-3 w-3":"h-4 w-4"),style:{animationDelay:`${h*.2}s`,animationDuration:"1s"}},h))}),o=()=>g.jsx("div",{className:nr("rounded-full bg-current animate-pulse",Jh[n],t)}),c=()=>g.jsxs("div",{className:nr("animate-pulse",t),children:[g.jsx("div",{className:"h-4 bg-gray-200 rounded w-3/4 mb-2"}),g.jsx("div",{className:"h-4 bg-gray-200 rounded w-1/2"})]}),l=()=>{switch(e){case"dots":return i();case"pulse":return o();case"skeleton":return c();default:return s()}};return g.jsxs("div",{className:"flex flex-col items-center justify-center space-y-2",children:[l(),r&&g.jsx("p",{className:"text-sm text-gray-500 animate-pulse",children:r})]})},cR=({text:n="Loading..."})=>g.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm",children:g.jsxs("div",{className:"text-center",children:[g.jsx(aR,{size:"lg"}),g.jsx("p",{className:"mt-4 text-lg text-gray-600",children:n})]})}),lR=Y.lazy(()=>Ge(()=>import("./Home-BM9O-ksp.js"),__vite__mapDeps([0,1,2,3,4,5]))),uR=Y.lazy(()=>Ge(()=>import("./Search-D43p0orm.js"),__vite__mapDeps([6,1,2,3,4,7,8,5]))),hR=Y.lazy(()=>Ge(()=>import("./VehicleDetail-WsZc0pPV.js"),__vite__mapDeps([9,1,2,3,5]))),dR=Y.lazy(()=>Ge(()=>import("./About-Dh3BWznb.js"),__vite__mapDeps([10,1,2,3,5]))),fR=Y.lazy(()=>Ge(()=>import("./Contact-Dwd3A_vj.js"),__vite__mapDeps([11,1,2,3]))),pR=Y.lazy(()=>Ge(()=>import("./Dashboard-Ioh0mv2D.js"),__vite__mapDeps([12,1,2,3,7,5]))),mR=Y.lazy(()=>Ge(()=>import("./Login-BU9OSm9o.js"),__vite__mapDeps([13,1,2,3,14,7,8,5]))),gR=Y.lazy(()=>Ge(()=>import("./Register-CI0CDeOu.js"),__vite__mapDeps([15,1,2,3,14,7,8,5]))),yR=Y.lazy(()=>Ge(()=>import("./AdminLogin-6RWdLecp.js"),__vite__mapDeps([16,1,2,3,4,5]))),_R=Y.lazy(()=>Ge(()=>import("./FAQ-C71gCbx_.js"),__vite__mapDeps([17,1,2]))),wR=Y.lazy(()=>Ge(()=>import("./SetupAdmin-D2iqKMue.js"),__vite__mapDeps([18,1,2,3,5]))),ER=Y.lazy(()=>Ge(()=>import("./Unauthorized-ChESoKZR.js"),__vite__mapDeps([19,1,2,3]))),TR=Y.lazy(()=>Ge(()=>import("./NotFound-B9JScyaF.js"),__vite__mapDeps([20,1,2,3]))),vR=new pg({defaultOptions:{queries:{staleTime:5*60*1e3,gcTime:10*60*1e3,retry:3,refetchOnWindowFocus:!1}}});function IR(){return g.jsx(id,{children:g.jsx(mg,{client:vR,children:g.jsx(tR,{children:g.jsx(gg,{children:g.jsx(yS,{children:g.jsx(_S,{children:g.jsx("div",{className:"App",children:g.jsx(Y.Suspense,{fallback:g.jsx(cR,{text:"Loading RideShare SA..."}),children:g.jsxs(yg,{children:[g.jsx(Je,{path:"/",element:g.jsx(ot,{children:g.jsx(lR,{})})}),g.jsx(Je,{path:"/search",element:g.jsx(ot,{children:g.jsx(uR,{})})}),g.jsx(Je,{path:"/vehicle/:id",element:g.jsx(ot,{children:g.jsx(hR,{})})}),g.jsx(Je,{path:"/about",element:g.jsx(ot,{children:g.jsx(dR,{})})}),g.jsx(Je,{path:"/contact",element:g.jsx(ot,{children:g.jsx(fR,{})})}),g.jsx(Je,{path:"/faq",element:g.jsx(ot,{children:g.jsx(_R,{})})}),g.jsx(Je,{path:"/dashboard/*",element:g.jsx(oR,{children:g.jsx(ot,{children:g.jsx(pR,{})})})}),g.jsx(Je,{path:"/login",element:g.jsx(ot,{children:g.jsx(mR,{})})}),g.jsx(Je,{path:"/register",element:g.jsx(ot,{children:g.jsx(gR,{})})}),g.jsx(Je,{path:"/admin-login",element:g.jsx(yR,{})}),g.jsx(Je,{path:"/setup-admin",element:g.jsx(wR,{})}),g.jsx(Je,{path:"/unauthorized",element:g.jsx(ot,{children:g.jsx(ER,{})})}),g.jsx(Je,{path:"*",element:g.jsx(ot,{children:g.jsx(TR,{})})})]})})})})})})})})})}aa.createRoot(document.getElementById("root")).render(g.jsx(kt.StrictMode,{children:g.jsx(IR,{})}));export{PR as H,Ye as I,Qr as a,ye as b,wS as c,nr as d,Qt as e,aT as f,hT as g,mT as h,QR as i,Mh as j,ea as k,wi as l,pT as o,cT as s,Fm as u};
