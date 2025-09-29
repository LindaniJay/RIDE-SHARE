const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-CRCYFL0z.js","assets/query-CSyQ0w5Y.js","assets/vendor-CBH9K-97.js","assets/router-BWB2dKYR.js","assets/SEO-BICskOVr.js","assets/ui-qr7cu0yN.js","assets/Search-msaeISHe.js","assets/client-D54EQjl1.js","assets/index-ngrFHoWO.js","assets/Glassmorphism-B6x2MkMT.js","assets/GlassButton-BfRB-w5d.js","assets/VehicleDetail-Dpe2Bf_q.js","assets/About-C-hRmis6.js","assets/Contact-DrxhPKWy.js","assets/Dashboard-DnVwaBc4.js","assets/Login-CuWoZNBH.js","assets/GlassForm-H9qvmeAC.js","assets/Register-CAo4f7BI.js","assets/AdminLogin-B6wIB_TL.js","assets/FAQ-CF86RBZ6.js","assets/SetupAdmin-D9t7ZU65.js","assets/Unauthorized-ChESoKZR.js","assets/NotFound-B9JScyaF.js"])))=>i.map(i=>d[i]);
var Fp=Object.defineProperty;var $p=(n,e,t)=>e in n?Fp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Me=(n,e,t)=>$p(n,typeof e!="symbol"?e+"":e,t);import{j as f,Q as Bp,a as zp}from"./query-CSyQ0w5Y.js";import{b as Yu,g as la,r as H,a as vt}from"./vendor-CBH9K-97.js";import{u as Ju,L as je,N as io,B as qp,R as Hp,a as Be}from"./router-BWB2dKYR.js";import{m as He,A as nl}from"./ui-qr7cu0yN.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var ko={},rl=Yu;ko.createRoot=rl.createRoot,ko.hydrateRoot=rl.hydrateRoot;const Wp="modulepreload",Gp=function(n){return"/RIDE-SHARE/"+n},sl={},qe=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(t.map(u=>{if(u=Gp(u),u in sl)return;sl[u]=!0;const h=u.endsWith(".css"),m=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${m}`))return;const y=document.createElement("link");if(y.rel=h?"stylesheet":Wp,h||(y.as="script"),y.crossOrigin="",y.href=u,c&&y.setAttribute("nonce",c),document.head.appendChild(y),h)return new Promise((T,S)=>{y.addEventListener("load",T),y.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return s.then(a=>{for(const c of a||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};var Kp=typeof Element<"u",Qp=typeof Map=="function",Yp=typeof Set=="function",Jp=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function js(n,e){if(n===e)return!0;if(n&&e&&typeof n=="object"&&typeof e=="object"){if(n.constructor!==e.constructor)return!1;var t,r,s;if(Array.isArray(n)){if(t=n.length,t!=e.length)return!1;for(r=t;r--!==0;)if(!js(n[r],e[r]))return!1;return!0}var i;if(Qp&&n instanceof Map&&e instanceof Map){if(n.size!==e.size)return!1;for(i=n.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;for(i=n.entries();!(r=i.next()).done;)if(!js(r.value[1],e.get(r.value[0])))return!1;return!0}if(Yp&&n instanceof Set&&e instanceof Set){if(n.size!==e.size)return!1;for(i=n.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(Jp&&ArrayBuffer.isView(n)&&ArrayBuffer.isView(e)){if(t=n.length,t!=e.length)return!1;for(r=t;r--!==0;)if(n[r]!==e[r])return!1;return!0}if(n.constructor===RegExp)return n.source===e.source&&n.flags===e.flags;if(n.valueOf!==Object.prototype.valueOf&&typeof n.valueOf=="function"&&typeof e.valueOf=="function")return n.valueOf()===e.valueOf();if(n.toString!==Object.prototype.toString&&typeof n.toString=="function"&&typeof e.toString=="function")return n.toString()===e.toString();if(s=Object.keys(n),t=s.length,t!==Object.keys(e).length)return!1;for(r=t;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,s[r]))return!1;if(Kp&&n instanceof Element)return!1;for(r=t;r--!==0;)if(!((s[r]==="_owner"||s[r]==="__v"||s[r]==="__o")&&n.$$typeof)&&!js(n[s[r]],e[s[r]]))return!1;return!0}return n!==n&&e!==e}var Xp=function(e,t){try{return js(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const Zp=la(Xp);var em=function(n,e,t,r,s,i,a,c){if(!n){var u;if(e===void 0)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var h=[t,r,s,i,a,c],m=0;u=new Error(e.replace(/%s/g,function(){return h[m++]})),u.name="Invariant Violation"}throw u.framesToPop=1,u}},tm=em;const il=la(tm);var nm=function(e,t,r,s){var i=r?r.call(s,e,t):void 0;if(i!==void 0)return!!i;if(e===t)return!0;if(typeof e!="object"||!e||typeof t!="object"||!t)return!1;var a=Object.keys(e),c=Object.keys(t);if(a.length!==c.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),h=0;h<a.length;h++){var m=a[h];if(!u(m))return!1;var y=e[m],T=t[m];if(i=r?r.call(s,y,T,m):void 0,i===!1||i===void 0&&y!==T)return!1}return!0};const rm=la(nm);var Xu=(n=>(n.BASE="base",n.BODY="body",n.HEAD="head",n.HTML="html",n.LINK="link",n.META="meta",n.NOSCRIPT="noscript",n.SCRIPT="script",n.STYLE="style",n.TITLE="title",n.FRAGMENT="Symbol(react.fragment)",n))(Xu||{}),oo={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},ol=Object.values(Xu),ua={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},sm=Object.entries(ua).reduce((n,[e,t])=>(n[t]=e,n),{}),Ze="data-rh",Wn={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Gn=(n,e)=>{for(let t=n.length-1;t>=0;t-=1){const r=n[t];if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}return null},im=n=>{let e=Gn(n,"title");const t=Gn(n,Wn.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),t&&e)return t.replace(/%s/g,()=>e);const r=Gn(n,Wn.DEFAULT_TITLE);return e||r||void 0},om=n=>Gn(n,Wn.ON_CHANGE_CLIENT_STATE)||(()=>{}),ao=(n,e)=>e.filter(t=>typeof t[n]<"u").map(t=>t[n]).reduce((t,r)=>({...t,...r}),{}),am=(n,e)=>e.filter(t=>typeof t.base<"u").map(t=>t.base).reverse().reduce((t,r)=>{if(!t.length){const s=Object.keys(r);for(let i=0;i<s.length;i+=1){const c=s[i].toLowerCase();if(n.indexOf(c)!==-1&&r[c])return t.concat(r)}}return t},[]),cm=n=>console&&typeof console.warn=="function"&&console.warn(n),Nr=(n,e,t)=>{const r={};return t.filter(s=>Array.isArray(s[n])?!0:(typeof s[n]<"u"&&cm(`Helmet: ${n} should be of type "Array". Instead found type "${typeof s[n]}"`),!1)).map(s=>s[n]).reverse().reduce((s,i)=>{const a={};i.filter(u=>{let h;const m=Object.keys(u);for(let T=0;T<m.length;T+=1){const S=m[T],x=S.toLowerCase();e.indexOf(x)!==-1&&!(h==="rel"&&u[h].toLowerCase()==="canonical")&&!(x==="rel"&&u[x].toLowerCase()==="stylesheet")&&(h=x),e.indexOf(S)!==-1&&(S==="innerHTML"||S==="cssText"||S==="itemprop")&&(h=S)}if(!h||!u[h])return!1;const y=u[h].toLowerCase();return r[h]||(r[h]={}),a[h]||(a[h]={}),r[h][y]?!1:(a[h][y]=!0,!0)}).reverse().forEach(u=>s.push(u));const c=Object.keys(a);for(let u=0;u<c.length;u+=1){const h=c[u],m={...r[h],...a[h]};r[h]=m}return s},[]).reverse()},lm=(n,e)=>{if(Array.isArray(n)&&n.length){for(let t=0;t<n.length;t+=1)if(n[t][e])return!0}return!1},um=n=>({baseTag:am(["href"],n),bodyAttributes:ao("bodyAttributes",n),defer:Gn(n,Wn.DEFER),encode:Gn(n,Wn.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:ao("htmlAttributes",n),linkTags:Nr("link",["rel","href"],n),metaTags:Nr("meta",["name","charset","http-equiv","property","itemprop"],n),noscriptTags:Nr("noscript",["innerHTML"],n),onChangeClientState:om(n),scriptTags:Nr("script",["src","innerHTML"],n),styleTags:Nr("style",["cssText"],n),title:im(n),titleAttributes:ao("titleAttributes",n),prioritizeSeoTags:lm(n,Wn.PRIORITIZE_SEO_TAGS)}),Zu=n=>Array.isArray(n)?n.join(""):n,hm=(n,e)=>{const t=Object.keys(n);for(let r=0;r<t.length;r+=1)if(e[t[r]]&&e[t[r]].includes(n[t[r]]))return!0;return!1},co=(n,e)=>Array.isArray(n)?n.reduce((t,r)=>(hm(r,e)?t.priority.push(r):t.default.push(r),t),{priority:[],default:[]}):{default:n,priority:[]},al=(n,e)=>({...n,[e]:void 0}),dm=["noscript","script","style"],Co=(n,e=!0)=>e===!1?String(n):String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),eh=n=>Object.keys(n).reduce((e,t)=>{const r=typeof n[t]<"u"?`${t}="${n[t]}"`:`${t}`;return e?`${e} ${r}`:r},""),fm=(n,e,t,r)=>{const s=eh(t),i=Zu(e);return s?`<${n} ${Ze}="true" ${s}>${Co(i,r)}</${n}>`:`<${n} ${Ze}="true">${Co(i,r)}</${n}>`},pm=(n,e,t=!0)=>e.reduce((r,s)=>{const i=s,a=Object.keys(i).filter(h=>!(h==="innerHTML"||h==="cssText")).reduce((h,m)=>{const y=typeof i[m]>"u"?m:`${m}="${Co(i[m],t)}"`;return h?`${h} ${y}`:y},""),c=i.innerHTML||i.cssText||"",u=dm.indexOf(n)===-1;return`${r}<${n} ${Ze}="true" ${a}${u?"/>":`>${c}</${n}>`}`},""),th=(n,e={})=>Object.keys(n).reduce((t,r)=>{const s=ua[r];return t[s||r]=n[r],t},e),mm=(n,e,t)=>{const r={key:e,[Ze]:!0},s=th(t,r);return[vt.createElement("title",s,e)]},Us=(n,e)=>e.map((t,r)=>{const s={key:r,[Ze]:!0};return Object.keys(t).forEach(i=>{const c=ua[i]||i;if(c==="innerHTML"||c==="cssText"){const u=t.innerHTML||t.cssText;s.dangerouslySetInnerHTML={__html:u}}else s[c]=t[i]}),vt.createElement(n,s)}),We=(n,e,t=!0)=>{switch(n){case"title":return{toComponent:()=>mm(n,e.title,e.titleAttributes),toString:()=>fm(n,e.title,e.titleAttributes,t)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>th(e),toString:()=>eh(e)};default:return{toComponent:()=>Us(n,e),toString:()=>pm(n,e,t)}}},gm=({metaTags:n,linkTags:e,scriptTags:t,encode:r})=>{const s=co(n,oo.meta),i=co(e,oo.link),a=co(t,oo.script);return{priorityMethods:{toComponent:()=>[...Us("meta",s.priority),...Us("link",i.priority),...Us("script",a.priority)],toString:()=>`${We("meta",s.priority,r)} ${We("link",i.priority,r)} ${We("script",a.priority,r)}`},metaTags:s.default,linkTags:i.default,scriptTags:a.default}},ym=n=>{const{baseTag:e,bodyAttributes:t,encode:r=!0,htmlAttributes:s,noscriptTags:i,styleTags:a,title:c="",titleAttributes:u,prioritizeSeoTags:h}=n;let{linkTags:m,metaTags:y,scriptTags:T}=n,S={toComponent:()=>{},toString:()=>""};return h&&({priorityMethods:S,linkTags:m,metaTags:y,scriptTags:T}=gm(n)),{priority:S,base:We("base",e,r),bodyAttributes:We("bodyAttributes",t,r),htmlAttributes:We("htmlAttributes",s,r),link:We("link",m,r),meta:We("meta",y,r),noscript:We("noscript",i,r),script:We("script",T,r),style:We("style",a,r),title:We("title",{title:c,titleAttributes:u},r)}},Po=ym,xs=[],nh=!!(typeof window<"u"&&window.document&&window.document.createElement),No=class{constructor(n,e){Me(this,"instances",[]);Me(this,"canUseDOM",nh);Me(this,"context");Me(this,"value",{setHelmet:n=>{this.context.helmet=n},helmetInstances:{get:()=>this.canUseDOM?xs:this.instances,add:n=>{(this.canUseDOM?xs:this.instances).push(n)},remove:n=>{const e=(this.canUseDOM?xs:this.instances).indexOf(n);(this.canUseDOM?xs:this.instances).splice(e,1)}}});this.context=n,this.canUseDOM=e||!1,e||(n.helmet=Po({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},_m={},rh=vt.createContext(_m),yn,sh=(yn=class extends H.Component{constructor(t){super(t);Me(this,"helmetData");this.helmetData=new No(this.props.context||{},yn.canUseDOM)}render(){return vt.createElement(rh.Provider,{value:this.helmetData.value},this.props.children)}},Me(yn,"canUseDOM",nh),yn),jn=(n,e)=>{const t=document.head||document.querySelector("head"),r=t.querySelectorAll(`${n}[${Ze}]`),s=[].slice.call(r),i=[];let a;return e&&e.length&&e.forEach(c=>{const u=document.createElement(n);for(const h in c)if(Object.prototype.hasOwnProperty.call(c,h))if(h==="innerHTML")u.innerHTML=c.innerHTML;else if(h==="cssText")u.styleSheet?u.styleSheet.cssText=c.cssText:u.appendChild(document.createTextNode(c.cssText));else{const m=h,y=typeof c[m]>"u"?"":c[m];u.setAttribute(h,y)}u.setAttribute(Ze,"true"),s.some((h,m)=>(a=m,u.isEqualNode(h)))?s.splice(a,1):i.push(u)}),s.forEach(c=>{var u;return(u=c.parentNode)==null?void 0:u.removeChild(c)}),i.forEach(c=>t.appendChild(c)),{oldTags:s,newTags:i}},Vo=(n,e)=>{const t=document.getElementsByTagName(n)[0];if(!t)return;const r=t.getAttribute(Ze),s=r?r.split(","):[],i=[...s],a=Object.keys(e);for(const c of a){const u=e[c]||"";t.getAttribute(c)!==u&&t.setAttribute(c,u),s.indexOf(c)===-1&&s.push(c);const h=i.indexOf(c);h!==-1&&i.splice(h,1)}for(let c=i.length-1;c>=0;c-=1)t.removeAttribute(i[c]);s.length===i.length?t.removeAttribute(Ze):t.getAttribute(Ze)!==a.join(",")&&t.setAttribute(Ze,a.join(","))},wm=(n,e)=>{typeof n<"u"&&document.title!==n&&(document.title=Zu(n)),Vo("title",e)},cl=(n,e)=>{const{baseTag:t,bodyAttributes:r,htmlAttributes:s,linkTags:i,metaTags:a,noscriptTags:c,onChangeClientState:u,scriptTags:h,styleTags:m,title:y,titleAttributes:T}=n;Vo("body",r),Vo("html",s),wm(y,T);const S={baseTag:jn("base",t),linkTags:jn("link",i),metaTags:jn("meta",a),noscriptTags:jn("noscript",c),scriptTags:jn("script",h),styleTags:jn("style",m)},x={},P={};Object.keys(S).forEach(k=>{const{newTags:O,oldTags:F}=S[k];O.length&&(x[k]=O),F.length&&(P[k]=S[k].oldTags)}),e&&e(),u(n,x,P)},Vr=null,vm=n=>{Vr&&cancelAnimationFrame(Vr),n.defer?Vr=requestAnimationFrame(()=>{cl(n,()=>{Vr=null})}):(cl(n),Vr=null)},Tm=vm,ll=class extends H.Component{constructor(){super(...arguments);Me(this,"rendered",!1)}shouldComponentUpdate(e){return!rm(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:t}=this.props.context;let r=null;const s=um(e.get().map(i=>{const a={...i.props};return delete a.context,a}));sh.canUseDOM?Tm(s):Po&&(r=Po(s)),t(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},xo,Db=(xo=class extends H.Component{shouldComponentUpdate(n){return!Zp(al(this.props,"helmetData"),al(n,"helmetData"))}mapNestedChildrenToProps(n,e){if(!e)return null;switch(n.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${n.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(n,e,t,r){return{...e,[n.type]:[...e[n.type]||[],{...t,...this.mapNestedChildrenToProps(n,r)}]}}mapObjectTypeChildren(n,e,t,r){switch(n.type){case"title":return{...e,[n.type]:r,titleAttributes:{...t}};case"body":return{...e,bodyAttributes:{...t}};case"html":return{...e,htmlAttributes:{...t}};default:return{...e,[n.type]:{...t}}}}mapArrayTypeChildrenToProps(n,e){let t={...e};return Object.keys(n).forEach(r=>{t={...t,[r]:n[r]}}),t}warnOnInvalidChildren(n,e){return il(ol.some(t=>n.type===t),typeof n.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${ol.join(", ")} are allowed. Helmet does not support rendering <${n.type}> elements. Refer to our API for more information.`),il(!e||typeof e=="string"||Array.isArray(e)&&!e.some(t=>typeof t!="string"),`Helmet expects a string as a child of <${n.type}>. Did you forget to wrap your children in braces? ( <${n.type}>{\`\`}</${n.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(n,e){let t={};return vt.Children.forEach(n,r=>{if(!r||!r.props)return;const{children:s,...i}=r.props,a=Object.keys(i).reduce((u,h)=>(u[sm[h]||h]=i[h],u),{});let{type:c}=r;switch(typeof c=="symbol"?c=c.toString():this.warnOnInvalidChildren(r,s),c){case"Symbol(react.fragment)":e=this.mapChildrenToProps(s,e);break;case"link":case"meta":case"noscript":case"script":case"style":t=this.flattenArrayTypeChildren(r,t,a,s);break;default:e=this.mapObjectTypeChildren(r,e,a,s);break}}),this.mapArrayTypeChildrenToProps(t,e)}render(){const{children:n,...e}=this.props;let t={...e},{helmetData:r}=e;if(n&&(t=this.mapChildrenToProps(n,t)),r&&!(r instanceof No)){const s=r;r=new No(s.context,!0),delete t.helmetData}return r?vt.createElement(ll,{...t,context:r.value}):vt.createElement(rh.Consumer,null,s=>vt.createElement(ll,{...t,context:s}))}},Me(xo,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),xo);const pn=class pn{constructor(){Me(this,"errorLog",[])}static getInstance(){return pn.instance||(pn.instance=new pn),pn.instance}handleError(e,t){let r;return e instanceof Error?r={code:this.getErrorCode(e),message:e.message,details:{stack:e.stack,context:t,timestamp:new Date().toISOString()}}:typeof e=="string"?r={code:"UNKNOWN_ERROR",message:e,details:{context:t,timestamp:new Date().toISOString()}}:r={code:"UNKNOWN_ERROR",message:"An unknown error occurred",details:{context:t,timestamp:new Date().toISOString()}},this.logError(r),r}getErrorCode(e){return e.message.includes("fetch")?"NETWORK_ERROR":e.message.includes("timeout")?"TIMEOUT_ERROR":e.message.includes("unauthorized")?"AUTH_ERROR":e.message.includes("forbidden")?"PERMISSION_ERROR":e.message.includes("validation")||e.message.includes("required")?"VALIDATION_ERROR":"UNKNOWN_ERROR"}logError(e){this.errorLog.push(e),this.sendToLoggingService(e)}sendToLoggingService(e){console.log("Sending error to logging service:",e)}getErrorLog(){return[...this.errorLog]}clearErrorLog(){this.errorLog=[]}};Me(pn,"instance");let Do=pn;const Em=Do.getInstance(),Im=n=>n.code==="NETWORK_ERROR"||n.code==="TIMEOUT_ERROR",bm=n=>n.code==="AUTH_ERROR"||n.code==="PERMISSION_ERROR";class Am{constructor(e="http://localhost:5000/api"){Me(this,"baseURL");Me(this,"defaultTimeout",1e4);Me(this,"defaultRetries",3);this.baseURL=e}async request(e,t={}){const{timeout:r=this.defaultTimeout,retries:s=this.defaultRetries,...i}=t,a=`${this.baseURL}${e}`,c=new AbortController,u=setTimeout(()=>c.abort(),r),h={"Content-Type":"application/json",Accept:"application/json"},m=localStorage.getItem("authToken");m&&(h.Authorization=`Bearer ${m}`);const y={...i,headers:{...h,...i.headers},signal:c.signal};let T=null;for(let S=0;S<=s;S++)try{const x=await fetch(a,y);if(clearTimeout(u),!x.ok){const k=await x.json().catch(()=>({}));throw new Error(k.message||`HTTP ${x.status}: ${x.statusText}`)}return{success:!0,data:await x.json()}}catch(x){if(T=Em.handleError(x,`API Request: ${e}`),bm(T)||(x==null?void 0:x.status)<500||Im(T)&&S>=s)break;S<s&&await this.delay(Math.pow(2,S)*1e3)}return clearTimeout(u),{success:!1,data:null,message:(T==null?void 0:T.message)||"Request failed",errors:[(T==null?void 0:T.message)||"Unknown error"]}}delay(e){return new Promise(t=>setTimeout(t,e))}async get(e,t){return this.request(e,{...t,method:"GET"})}async post(e,t,r){return this.request(e,{...r,method:"POST",body:t?JSON.stringify(t):void 0})}async put(e,t,r){return this.request(e,{...r,method:"PUT",body:t?JSON.stringify(t):void 0})}async patch(e,t,r){return this.request(e,{...r,method:"PATCH",body:t?JSON.stringify(t):void 0})}async delete(e,t){return this.request(e,{...t,method:"DELETE"})}async uploadFile(e,t,r,s){const i=new FormData;i.append("file",t),r&&Object.entries(r).forEach(([u,h])=>{i.append(u,h)});const a=localStorage.getItem("authToken"),c={};return a&&(c.Authorization=`Bearer ${a}`),this.request(e,{...s,method:"POST",body:i,headers:{...c,...s==null?void 0:s.headers}})}async getPaginated(e,t,r){const s=new URLSearchParams;t&&Object.entries(t).forEach(([c,u])=>{u!=null&&s.append(c,u.toString())});const i=s.toString(),a=i?`${e}?${i}`:e;return this.get(a,r)}async healthCheck(){try{return(await this.get("/health")).success}catch{return!1}}}const Rm=new Am,Sm=()=>{};var ul={};/**
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
 */const ih=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},xm=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},oh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,h=u?n[s+2]:0,m=i>>2,y=(i&3)<<4|c>>4;let T=(c&15)<<2|h>>6,S=h&63;u||(S=64,a||(T=64)),r.push(t[m],t[y],t[T],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ih(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):xm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const y=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||y==null)throw new km;const T=i<<2|c>>4;if(r.push(T),h!==64){const S=c<<4&240|h>>2;if(r.push(S),y!==64){const x=h<<6&192|y;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class km extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cm=function(n){const e=ih(n);return oh.encodeByteArray(e,!0)},Js=function(n){return Cm(n).replace(/\./g,"")},ah=function(n){try{return oh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Pm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Nm=()=>Pm().__FIREBASE_DEFAULTS__,Vm=()=>{if(typeof process>"u"||typeof ul>"u")return;const n=ul.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Dm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ah(n[1]);return e&&JSON.parse(e)},vi=()=>{try{return Sm()||Nm()||Vm()||Dm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ch=n=>{var e,t;return(t=(e=vi())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Om=n=>{const e=ch(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},lh=()=>{var n;return(n=vi())==null?void 0:n.config},uh=n=>{var e;return(e=vi())==null?void 0:e[`_${n}`]};/**
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
 */class Lm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function ir(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function hh(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Mm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Js(JSON.stringify(t)),Js(JSON.stringify(a)),""].join(".")}const $r={};function jm(){const n={prod:[],emulator:[]};for(const e of Object.keys($r))$r[e]?n.emulator.push(e):n.prod.push(e);return n}function Um(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let hl=!1;function dh(n,e){if(typeof window>"u"||typeof document>"u"||!ir(window.location.host)||$r[n]===e||$r[n]||hl)return;$r[n]=e;function t(T){return`__firebase__banner__${T}`}const r="__firebase__banner",i=jm().prod.length>0;function a(){const T=document.getElementById(r);T&&T.remove()}function c(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function u(T,S){T.setAttribute("width","24"),T.setAttribute("id",S),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function h(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{hl=!0,a()},T}function m(T,S){T.setAttribute("id",S),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function y(){const T=Um(r),S=t("text"),x=document.getElementById(S)||document.createElement("span"),P=t("learnmore"),k=document.getElementById(P)||document.createElement("a"),O=t("preprendIcon"),F=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const D=T.element;c(D),m(k,P);const K=h();u(F,O),D.append(F,x,k,K),document.body.appendChild(D)}i?(x.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
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
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function $m(){var e;const n=(e=vi())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Bm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function zm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qm(){const n=Ve();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Hm(){return!$m()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ph(){try{return typeof indexedDB=="object"}catch{return!1}}function mh(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}function Wm(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Gm="FirebaseError";class st extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Gm,Object.setPrototypeOf(this,st.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,An.prototype.create)}}class An{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Km(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new st(s,c,r)}}function Km(n,e){return n.replace(Qm,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Qm=/\{\$([^}]+)}/g;function Ym(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Qt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(dl(i)&&dl(a)){if(!Qt(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function dl(n){return n!==null&&typeof n=="object"}/**
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
 */function is(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Or(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Lr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Jm(n,e){const t=new Xm(n,e);return t.subscribe.bind(t)}class Xm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Zm(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=lo),s.error===void 0&&(s.error=lo),s.complete===void 0&&(s.complete=lo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function lo(){}/**
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
 */const eg=1e3,tg=2,ng=4*60*60*1e3,rg=.5;function fl(n,e=eg,t=tg){const r=e*Math.pow(t,n),s=Math.round(rg*r*(Math.random()-.5)*2);return Math.min(ng,r+s)}/**
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
 */function Re(n){return n&&n._delegate?n._delegate:n}class nt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class sg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Lm;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(og(e))try{this.getOrInitializeService({instanceIdentifier:fn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=fn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fn){return this.instances.has(e)}getOptions(e=fn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ig(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=fn){return this.component?this.component.multipleInstances?e:fn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ig(n){return n===fn?void 0:n}function og(n){return n.instantiationMode==="EAGER"}/**
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
 */class ag{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new sg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(J||(J={}));const cg={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},lg=J.INFO,ug={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},hg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=ug[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ti{constructor(e){this.name=e,this._logLevel=lg,this._logHandler=hg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const dg=(n,e)=>e.some(t=>n instanceof t);let pl,ml;function fg(){return pl||(pl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pg(){return ml||(ml=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gh=new WeakMap,Oo=new WeakMap,yh=new WeakMap,uo=new WeakMap,ha=new WeakMap;function mg(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Ht(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&gh.set(t,n)}).catch(()=>{}),ha.set(e,n),e}function gg(n){if(Oo.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Oo.set(n,e)}let Lo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Oo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||yh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ht(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function yg(n){Lo=n(Lo)}function _g(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ho(this),e,...t);return yh.set(r,e.sort?e.sort():[e]),Ht(r)}:pg().includes(n)?function(...e){return n.apply(ho(this),e),Ht(gh.get(this))}:function(...e){return Ht(n.apply(ho(this),e))}}function wg(n){return typeof n=="function"?_g(n):(n instanceof IDBTransaction&&gg(n),dg(n,fg())?new Proxy(n,Lo):n)}function Ht(n){if(n instanceof IDBRequest)return mg(n);if(uo.has(n))return uo.get(n);const e=wg(n);return e!==n&&(uo.set(n,e),ha.set(e,n)),e}const ho=n=>ha.get(n);function _h(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=Ht(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Ht(a.result),u.oldVersion,u.newVersion,Ht(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const vg=["get","getKey","getAll","getAllKeys","count"],Tg=["put","add","delete","clear"],fo=new Map;function gl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(fo.get(e))return fo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Tg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||vg.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&u.done]))[0]};return fo.set(e,i),i}yg(n=>({...n,get:(e,t,r)=>gl(e,t)||n.get(e,t,r),has:(e,t)=>!!gl(e,t)||n.has(e,t)}));/**
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
 */class Eg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ig(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Ig(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mo="@firebase/app",yl="0.14.3";/**
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
 */const At=new Ti("@firebase/app"),bg="@firebase/app-compat",Ag="@firebase/analytics-compat",Rg="@firebase/analytics",Sg="@firebase/app-check-compat",xg="@firebase/app-check",kg="@firebase/auth",Cg="@firebase/auth-compat",Pg="@firebase/database",Ng="@firebase/data-connect",Vg="@firebase/database-compat",Dg="@firebase/functions",Og="@firebase/functions-compat",Lg="@firebase/installations",Mg="@firebase/installations-compat",jg="@firebase/messaging",Ug="@firebase/messaging-compat",Fg="@firebase/performance",$g="@firebase/performance-compat",Bg="@firebase/remote-config",zg="@firebase/remote-config-compat",qg="@firebase/storage",Hg="@firebase/storage-compat",Wg="@firebase/firestore",Gg="@firebase/ai",Kg="@firebase/firestore-compat",Qg="firebase",Yg="12.3.0";/**
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
 */const jo="[DEFAULT]",Jg={[Mo]:"fire-core",[bg]:"fire-core-compat",[Rg]:"fire-analytics",[Ag]:"fire-analytics-compat",[xg]:"fire-app-check",[Sg]:"fire-app-check-compat",[kg]:"fire-auth",[Cg]:"fire-auth-compat",[Pg]:"fire-rtdb",[Ng]:"fire-data-connect",[Vg]:"fire-rtdb-compat",[Dg]:"fire-fn",[Og]:"fire-fn-compat",[Lg]:"fire-iid",[Mg]:"fire-iid-compat",[jg]:"fire-fcm",[Ug]:"fire-fcm-compat",[Fg]:"fire-perf",[$g]:"fire-perf-compat",[Bg]:"fire-rc",[zg]:"fire-rc-compat",[qg]:"fire-gcs",[Hg]:"fire-gcs-compat",[Wg]:"fire-fst",[Kg]:"fire-fst-compat",[Gg]:"fire-vertex","fire-js":"fire-js",[Qg]:"fire-js-all"};/**
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
 */const Xs=new Map,Xg=new Map,Uo=new Map;function _l(n,e){try{n.container.addComponent(e)}catch(t){At.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function pt(n){const e=n.name;if(Uo.has(e))return At.debug(`There were multiple attempts to register component ${e}.`),!1;Uo.set(e,n);for(const t of Xs.values())_l(t,n);for(const t of Xg.values())_l(t,n);return!0}function Rn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ge(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Zg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wt=new An("app","Firebase",Zg);/**
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
 */class ey{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wt.create("app-deleted",{appName:this._name})}}/**
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
 */const or=Yg;function wh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:jo,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Wt.create("bad-app-name",{appName:String(s)});if(t||(t=lh()),!t)throw Wt.create("no-options");const i=Xs.get(s);if(i){if(Qt(t,i.options)&&Qt(r,i.config))return i;throw Wt.create("duplicate-app",{appName:s})}const a=new ag(s);for(const u of Uo.values())a.addComponent(u);const c=new ey(t,r,a);return Xs.set(s,c),c}function da(n=jo){const e=Xs.get(n);if(!e&&n===jo&&lh())return wh();if(!e)throw Wt.create("no-app",{appName:n});return e}function Ye(n,e,t){let r=Jg[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),At.warn(a.join(" "));return}pt(new nt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const ty="firebase-heartbeat-database",ny=1,Qr="firebase-heartbeat-store";let po=null;function vh(){return po||(po=_h(ty,ny,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Qr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Wt.create("idb-open",{originalErrorMessage:n.message})})),po}async function ry(n){try{const t=(await vh()).transaction(Qr),r=await t.objectStore(Qr).get(Th(n));return await t.done,r}catch(e){if(e instanceof st)At.warn(e.message);else{const t=Wt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});At.warn(t.message)}}}async function wl(n,e){try{const r=(await vh()).transaction(Qr,"readwrite");await r.objectStore(Qr).put(e,Th(n)),await r.done}catch(t){if(t instanceof st)At.warn(t.message);else{const r=Wt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});At.warn(r.message)}}}function Th(n){return`${n.name}!${n.options.appId}`}/**
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
 */const sy=1024,iy=30;class oy{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new cy(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=vl();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>iy){const a=ly(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){At.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=vl(),{heartbeatsToSend:r,unsentEntries:s}=ay(this._heartbeatsCache.heartbeats),i=Js(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return At.warn(t),""}}}function vl(){return new Date().toISOString().substring(0,10)}function ay(n,e=sy){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Tl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Tl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class cy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ph()?mh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ry(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return wl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return wl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Tl(n){return Js(JSON.stringify({version:2,heartbeats:n})).length}function ly(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function uy(n){pt(new nt("platform-logger",e=>new Eg(e),"PRIVATE")),pt(new nt("heartbeat",e=>new oy(e),"PRIVATE")),Ye(Mo,yl,n),Ye(Mo,yl,"esm2020"),Ye("fire-js","")}uy("");function Eh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hy=Eh,Ih=new An("auth","Firebase",Eh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=new Ti("@firebase/auth");function dy(n,...e){Zs.logLevel<=J.WARN&&Zs.warn(`Auth (${or}): ${n}`,...e)}function Fs(n,...e){Zs.logLevel<=J.ERROR&&Zs.error(`Auth (${or}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(n,...e){throw fa(n,...e)}function ct(n,...e){return fa(n,...e)}function bh(n,e,t){const r={...hy(),[e]:t};return new An("auth","Firebase",r).create(e,{appName:n.name})}function It(n){return bh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fa(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ih.create(n,...e)}function z(n,e,...t){if(!n)throw fa(e,...t)}function Tt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Fs(e),new Error(e)}function Rt(n,e){n||Tt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function fy(){return El()==="http:"||El()==="https:"}function El(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fy()||fh()||"connection"in navigator)?navigator.onLine:!0}function my(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,t){this.shortDelay=e,this.longDelay=t,Rt(t>e,"Short delay should be less than long delay!"),this.isMobile=Fm()||zm()}get(){return py()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(n,e){Rt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],_y=new os(3e4,6e4);function kt(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function yt(n,e,t,r,s={}){return Rh(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=is({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:u,...i};return Bm()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&ir(n.emulatorConfig.host)&&(h.credentials="include"),Ah.fetch()(await Sh(n,n.config.apiHost,t,c),h)})}async function Rh(n,e,t){n._canInitEmulator=!1;const r={...gy,...e};try{const s=new vy(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ks(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ks(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw ks(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw ks(n,"user-disabled",a);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw bh(n,m,h);rt(n,m)}}catch(s){if(s instanceof st)throw s;rt(n,"network-request-failed",{message:String(s)})}}async function as(n,e,t,r,s={}){const i=await yt(n,e,t,r,s);return"mfaPendingCredential"in i&&rt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Sh(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?pa(n.config,s):`${n.config.apiScheme}://${s}`;return yy.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function wy(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ct(this.auth,"network-request-failed")),_y.get())})}}function ks(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=ct(n,e,r);return s.customData._tokenResponse=t,s}function Il(n){return n!==void 0&&n.enterprise!==void 0}class Ty{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return wy(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Ey(n,e){return yt(n,"GET","/v2/recaptchaConfig",kt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iy(n,e){return yt(n,"POST","/v1/accounts:delete",e)}async function ei(n,e){return yt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function by(n,e=!1){const t=Re(n),r=await t.getIdToken(e),s=ma(r);z(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Br(mo(s.auth_time)),issuedAtTime:Br(mo(s.iat)),expirationTime:Br(mo(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function mo(n){return Number(n)*1e3}function ma(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Fs("JWT malformed, contained fewer than 3 sections"),null;try{const s=ah(t);return s?JSON.parse(s):(Fs("Failed to decode base64 JWT payload"),null)}catch(s){return Fs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function bl(n){const e=ma(n);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof st&&Ay(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Ay({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Br(this.lastLoginAt),this.creationTime=Br(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ti(n){var y;const e=n.auth,t=await n.getIdToken(),r=await Xn(n,ei(e,{idToken:t}));z(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(y=s.providerUserInfo)!=null&&y.length?xh(s.providerUserInfo):[],a=xy(n.providerData,i),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new $o(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,m)}async function Sy(n){const e=Re(n);await ti(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xy(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function xh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ky(n,e){const t=await Rh(n,{},async()=>{const r=is({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Sh(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&ir(n.emulatorConfig.host)&&(u.credentials="include"),Ah.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Cy(n,e){return yt(n,"POST","/v2/accounts:revokeToken",kt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){z(e.length!==0,"internal-error");const t=bl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await ky(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Kn;return r&&(z(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(z(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(z(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kn,this.toJSON())}_performRefresh(){return Tt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(n,e){z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class et{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Ry(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new $o(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Xn(this,this.stsTokenManager.getToken(this.auth,e));return z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return by(this,e)}reload(){return Sy(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new et({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ti(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ge(this.auth.app))return Promise.reject(It(this.auth));const e=await this.getIdToken();return await Xn(this,Iy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,u=t._redirectEventId??void 0,h=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:y,emailVerified:T,isAnonymous:S,providerData:x,stsTokenManager:P}=t;z(y&&P,e,"internal-error");const k=Kn.fromJSON(this.name,P);z(typeof y=="string",e,"internal-error"),Mt(r,e.name),Mt(s,e.name),z(typeof T=="boolean",e,"internal-error"),z(typeof S=="boolean",e,"internal-error"),Mt(i,e.name),Mt(a,e.name),Mt(c,e.name),Mt(u,e.name),Mt(h,e.name),Mt(m,e.name);const O=new et({uid:y,auth:e,email:s,emailVerified:T,displayName:r,isAnonymous:S,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:k,createdAt:h,lastLoginAt:m});return x&&Array.isArray(x)&&(O.providerData=x.map(F=>({...F}))),u&&(O._redirectEventId=u),O}static async _fromIdTokenResponse(e,t,r=!1){const s=new Kn;s.updateFromServerResponse(t);const i=new et({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ti(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];z(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?xh(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Kn;c.updateFromIdToken(r);const u=new et({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new $o(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=new Map;function Et(n){Rt(n instanceof Function,"Expected a class definition");let e=Al.get(n);return e?(Rt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Al.set(n,e),e)}/**
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
 */class kh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}kh.type="NONE";const Rl=kh;/**
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
 */function $s(n,e,t){return`firebase:${n}:${e}:${t}`}class Qn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=$s(this.userKey,s.apiKey,i),this.fullPersistenceKey=$s("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ei(this.auth,{idToken:e}).catch(()=>{});return t?et._fromGetAccountInfoResponse(this.auth,t,e):null}return et._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Qn(Et(Rl),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Et(Rl);const a=$s(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const m=await h._get(a);if(m){let y;if(typeof m=="string"){const T=await ei(e,{idToken:m}).catch(()=>{});if(!T)break;y=await et._fromGetAccountInfoResponse(e,T,m)}else y=et._fromJSON(e,m);h!==i&&(c=y),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Qn(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Qn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ch(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Oh(e))return"Blackberry";if(Lh(e))return"Webos";if(Ph(e))return"Safari";if((e.includes("chrome/")||Nh(e))&&!e.includes("edge/"))return"Chrome";if(Dh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ch(n=Ve()){return/firefox\//i.test(n)}function Ph(n=Ve()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Nh(n=Ve()){return/crios\//i.test(n)}function Vh(n=Ve()){return/iemobile/i.test(n)}function Dh(n=Ve()){return/android/i.test(n)}function Oh(n=Ve()){return/blackberry/i.test(n)}function Lh(n=Ve()){return/webos/i.test(n)}function ga(n=Ve()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Py(n=Ve()){var e;return ga(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Ny(){return qm()&&document.documentMode===10}function Mh(n=Ve()){return ga(n)||Dh(n)||Lh(n)||Oh(n)||/windows phone/i.test(n)||Vh(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(n,e=[]){let t;switch(n){case"Browser":t=Sl(Ve());break;case"Worker":t=`${Sl(Ve())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${or}/${r}`}/**
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
 */class Vy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Dy(n,e={}){return yt(n,"GET","/v2/passwordPolicy",kt(n,e))}/**
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
 */const Oy=6;class Ly{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Oy,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xl(this),this.idTokenSubscription=new xl(this),this.beforeStateQueue=new Vy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ih,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Et(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Qn.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ei(this,{idToken:e}),r=await et._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ge(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ti(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=my()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ge(this.app))return Promise.reject(It(this));const t=e?Re(e):null;return t&&z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ge(this.app)?Promise.reject(It(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ge(this.app)?Promise.reject(It(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Et(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Dy(this),t=new Ly(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new An("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Cy(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Et(e)||this._popupRedirectResolver;z(t,this,"argument-error"),this.redirectPersistenceManager=await Qn.create(this,[Et(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Ge(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&dy(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function nn(n){return Re(n)}class xl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jm(t=>this.observer=t)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ei={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jy(n){Ei=n}function Uh(n){return Ei.loadJS(n)}function Uy(){return Ei.recaptchaEnterpriseScript}function Fy(){return Ei.gapiScript}function $y(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class By{constructor(){this.enterprise=new zy}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class zy{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const qy="recaptcha-enterprise",Fh="NO_RECAPTCHA";class Hy{constructor(e){this.type=qy,this.auth=nn(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{Ey(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new Ty(u);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(u=>{c(u)})})}function s(i,a,c){const u=window.grecaptcha;Il(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(Fh)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new By().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&Il(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Uy();u.length!==0&&(u+=c),Uh(u).then(()=>{s(c,i,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}}async function kl(n,e,t,r=!1,s=!1){const i=new Hy(n);let a;if(s)a=Fh;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function ni(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await kl(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await kl(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wy(n,e){const t=Rn(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Qt(i,e??{}))return s;rt(s,"already-initialized")}return t.initialize({options:e})}function Gy(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Et);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ky(n,e,t){const r=nn(n);z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=$h(e),{host:a,port:c}=Qy(e),u=c===null?"":`:${c}`,h={url:`${i}//${a}${u}/`},m=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),z(Qt(h,r.config.emulator)&&Qt(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,ir(a)?(hh(`${i}//${a}${u}`),dh("Auth",!0)):Yy()}function $h(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Qy(n){const e=$h(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Cl(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Cl(a)}}}function Cl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Yy(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Tt("not implemented")}_getIdTokenResponse(e){return Tt("not implemented")}_linkToIdToken(e,t){return Tt("not implemented")}_getReauthenticationResolver(e){return Tt("not implemented")}}async function Jy(n,e){return yt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xy(n,e){return as(n,"POST","/v1/accounts:signInWithPassword",kt(n,e))}async function Bh(n,e){return yt(n,"POST","/v1/accounts:sendOobCode",kt(n,e))}async function Zy(n,e){return Bh(n,e)}async function e_(n,e){return Bh(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t_(n,e){return as(n,"POST","/v1/accounts:signInWithEmailLink",kt(n,e))}async function n_(n,e){return as(n,"POST","/v1/accounts:signInWithEmailLink",kt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends ya{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Yr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Yr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ni(e,t,"signInWithPassword",Xy);case"emailLink":return t_(e,{email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ni(e,r,"signUpPassword",Jy);case"emailLink":return n_(e,{idToken:t,email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yn(n,e){return as(n,"POST","/v1/accounts:signInWithIdp",kt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_="http://localhost";class wn extends ya{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new wn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):rt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new wn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Yn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Yn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Yn(e,t)}buildRequest(){const e={requestUri:r_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=is(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function i_(n){const e=Or(Lr(n)).link,t=e?Or(Lr(e)).deep_link_id:null,r=Or(Lr(n)).deep_link_id;return(r?Or(Lr(r)).link:null)||r||t||e||n}class _a{constructor(e){const t=Or(Lr(e)),r=t.apiKey??null,s=t.oobCode??null,i=s_(t.mode??null);z(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=i_(e);try{return new _a(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this.providerId=ar.PROVIDER_ID}static credential(e,t){return Yr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=_a.parseLink(t);return z(r,"argument-error"),Yr._fromEmailAndCode(e,r.code,r.tenantId)}}ar.PROVIDER_ID="password";ar.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ar.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class cs extends zh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends cs{constructor(){super("facebook.com")}static credential(e){return wn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ft.credential(e.oauthAccessToken)}catch{return null}}}Ft.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ft.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends cs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return wn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return $t.credential(t,r)}catch{return null}}}$t.GOOGLE_SIGN_IN_METHOD="google.com";$t.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends cs{constructor(){super("github.com")}static credential(e){return wn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bt.credential(e.oauthAccessToken)}catch{return null}}}Bt.GITHUB_SIGN_IN_METHOD="github.com";Bt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends cs{constructor(){super("twitter.com")}static credential(e,t){return wn._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return zt.credential(t,r)}catch{return null}}}zt.TWITTER_SIGN_IN_METHOD="twitter.com";zt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o_(n,e){return as(n,"POST","/v1/accounts:signUp",kt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await et._fromIdTokenResponse(e,r,s),a=Pl(r);return new vn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Pl(r);return new vn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Pl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends st{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ri.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ri(e,t,r,s)}}function qh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ri._fromErrorAndOperation(n,i,e,r):i})}async function a_(n,e,t=!1){const r=await Xn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return vn._forOperation(n,"link",r)}/**
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
 */async function c_(n,e,t=!1){const{auth:r}=n;if(Ge(r.app))return Promise.reject(It(r));const s="reauthenticate";try{const i=await Xn(n,qh(r,s,e,n),t);z(i.idToken,r,"internal-error");const a=ma(i.idToken);z(a,r,"internal-error");const{sub:c}=a;return z(n.uid===c,r,"user-mismatch"),vn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&rt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hh(n,e,t=!1){if(Ge(n.app))return Promise.reject(It(n));const r="signIn",s=await qh(n,r,e),i=await vn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function l_(n,e){return Hh(nn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wh(n){const e=nn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function u_(n,e,t){const r=nn(n);await ni(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",e_)}async function h_(n,e,t){if(Ge(n.app))return Promise.reject(It(n));const r=nn(n),a=await ni(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",o_).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Wh(n),u}),c=await vn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function d_(n,e,t){return Ge(n.app)?Promise.reject(It(n)):l_(Re(n),ar.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Wh(n),r})}async function f_(n,e){const t=Re(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:i}=await Zy(t.auth,s);i!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p_(n,e){return yt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m_(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Re(n),i={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await Xn(r,p_(r.auth,i));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function g_(n,e,t,r){return Re(n).onIdTokenChanged(e,t,r)}function y_(n,e,t){return Re(n).beforeAuthStateChanged(e,t)}function __(n,e,t,r){return Re(n).onAuthStateChanged(e,t,r)}function w_(n){return Re(n).signOut()}const si="__sak";/**
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
 */class Gh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(si,"1"),this.storage.removeItem(si),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_=1e3,T_=10;class Kh extends Gh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Mh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Ny()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,T_):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},v_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Kh.type="LOCAL";const E_=Kh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh extends Gh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Qh.type="SESSION";const Yh=Qh;/**
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
 */function I_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ii{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Ii(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),u=await I_(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ii.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class b_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const h=wa("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(y){const T=y;if(T.data.eventId===h)switch(T.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(T.data.response);break;default:clearTimeout(m),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return window}function A_(n){lt().location.href=n}/**
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
 */function Jh(){return typeof lt().WorkerGlobalScope<"u"&&typeof lt().importScripts=="function"}async function R_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function S_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function x_(){return Jh()?self:null}/**
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
 */const Xh="firebaseLocalStorageDb",k_=1,ii="firebaseLocalStorage",Zh="fbase_key";class ls{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function bi(n,e){return n.transaction([ii],e?"readwrite":"readonly").objectStore(ii)}function C_(){const n=indexedDB.deleteDatabase(Xh);return new ls(n).toPromise()}function Bo(){const n=indexedDB.open(Xh,k_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ii,{keyPath:Zh})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ii)?e(r):(r.close(),await C_(),e(await Bo()))})})}async function Nl(n,e,t){const r=bi(n,!0).put({[Zh]:e,value:t});return new ls(r).toPromise()}async function P_(n,e){const t=bi(n,!1).get(e),r=await new ls(t).toPromise();return r===void 0?null:r.value}function Vl(n,e){const t=bi(n,!0).delete(e);return new ls(t).toPromise()}const N_=800,V_=3;class ed{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>V_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ii._getInstance(x_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await R_(),!this.activeServiceWorker)return;this.sender=new b_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||S_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bo();return await Nl(e,si,"1"),await Vl(e,si),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Nl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>P_(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Vl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=bi(s,!1).getAll();return new ls(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),N_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ed.type="LOCAL";const D_=ed;new os(3e4,6e4);/**
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
 */function O_(n,e){return e?Et(e):(z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class va extends ya{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Yn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Yn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function L_(n){return Hh(n.auth,new va(n),n.bypassAuthState)}function M_(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),c_(t,new va(n),n.bypassAuthState)}async function j_(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),a_(t,new va(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return L_;case"linkViaPopup":case"linkViaRedirect":return j_;case"reauthViaPopup":case"reauthViaRedirect":return M_;default:rt(this.auth,"internal-error")}}resolve(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=new os(2e3,1e4);class Hn extends td{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Hn.currentPopupAction&&Hn.currentPopupAction.cancel(),Hn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Rt(this.filter.length===1,"Popup operations only handle one event");const e=wa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,U_.get())};e()}}Hn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_="pendingRedirect",Bs=new Map;class $_ extends td{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Bs.get(this.auth._key());if(!e){try{const r=await B_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Bs.set(this.auth._key(),e)}return this.bypassAuthState||Bs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function B_(n,e){const t=H_(e),r=q_(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function z_(n,e){Bs.set(n._key(),e)}function q_(n){return Et(n._redirectPersistence)}function H_(n){return $s(F_,n.config.apiKey,n.name)}async function W_(n,e,t=!1){if(Ge(n.app))return Promise.reject(It(n));const r=nn(n),s=O_(r,e),a=await new $_(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_=10*60*1e3;class K_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Q_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!nd(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(ct(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=G_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dl(e))}saveEventToCache(e){this.cachedEventUids.add(Dl(e)),this.lastProcessedEventTime=Date.now()}}function Dl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function nd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Q_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nd(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y_(n,e={}){return yt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,X_=/^https?/;async function Z_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Y_(n);for(const t of e)try{if(ew(t))return}catch{}rt(n,"unauthorized-domain")}function ew(n){const e=Fo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!X_.test(t))return!1;if(J_.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const tw=new os(3e4,6e4);function Ol(){const n=lt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function nw(n){return new Promise((e,t)=>{var s,i,a;function r(){Ol(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ol(),t(ct(n,"network-request-failed"))},timeout:tw.get()})}if((i=(s=lt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=lt().gapi)!=null&&a.load)r();else{const c=$y("iframefcb");return lt()[c]=()=>{gapi.load?r():t(ct(n,"network-request-failed"))},Uh(`${Fy()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw zs=null,e})}let zs=null;function rw(n){return zs=zs||nw(n),zs}/**
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
 */const sw=new os(5e3,15e3),iw="__/auth/iframe",ow="emulator/auth/iframe",aw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lw(n){const e=n.config;z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?pa(e,ow):`https://${n.config.authDomain}/${iw}`,r={apiKey:e.apiKey,appName:n.name,v:or},s=cw.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${is(r).slice(1)}`}async function uw(n){const e=await rw(n),t=lt().gapi;return z(t,n,"internal-error"),e.open({where:document.body,url:lw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=ct(n,"network-request-failed"),c=lt().setTimeout(()=>{i(a)},sw.get());function u(){lt().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const hw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dw=500,fw=600,pw="_blank",mw="http://localhost";class Ll{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gw(n,e,t,r=dw,s=fw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u={...hw,width:r.toString(),height:s.toString(),top:i,left:a},h=Ve().toLowerCase();t&&(c=Nh(h)?pw:t),Ch(h)&&(e=e||mw,u.scrollbars="yes");const m=Object.entries(u).reduce((T,[S,x])=>`${T}${S}=${x},`,"");if(Py(h)&&c!=="_self")return yw(e||"",c),new Ll(null);const y=window.open(e||"",c,m);z(y,n,"popup-blocked");try{y.focus()}catch{}return new Ll(y)}function yw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const _w="__/auth/handler",ww="emulator/auth/handler",vw=encodeURIComponent("fac");async function Ml(n,e,t,r,s,i){z(n.config.authDomain,n,"auth-domain-config-required"),z(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:or,eventId:s};if(e instanceof zh){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Ym(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,y]of Object.entries({}))a[m]=y}if(e instanceof cs){const m=e.getScopes().filter(y=>y!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const u=await n._getAppCheckToken(),h=u?`#${vw}=${encodeURIComponent(u)}`:"";return`${Tw(n)}?${is(c).slice(1)}${h}`}function Tw({config:n}){return n.emulator?pa(n,ww):`https://${n.authDomain}/${_w}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go="webStorageSupport";class Ew{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yh,this._completeRedirectFn=W_,this._overrideRedirectResult=z_}async _openPopup(e,t,r,s){var a;Rt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await Ml(e,t,r,Fo(),s);return gw(e,i,wa())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Ml(e,t,r,Fo(),s);return A_(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Rt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await uw(e),r=new K_(e);return t.register("authEvent",s=>(z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(go,{type:go},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[go];i!==void 0&&t(!!i),rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Z_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Mh()||Ph()||ga()}}const Iw=Ew;var jl="@firebase/auth",Ul="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Rw(n){pt(new nt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;z(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jh(n)},h=new My(r,s,i,u);return Gy(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),pt(new nt("auth-internal",e=>{const t=nn(e.getProvider("auth").getImmediate());return(r=>new bw(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ye(jl,Ul,Aw(n)),Ye(jl,Ul,"esm2020")}/**
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
 */const Sw=5*60,xw=uh("authIdTokenMaxAge")||Sw;let Fl=null;const kw=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>xw)return;const s=t==null?void 0:t.token;Fl!==s&&(Fl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Cw(n=da()){const e=Rn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Wy(n,{popupRedirectResolver:Iw,persistence:[D_,E_,Yh]}),r=uh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=kw(i.toString());y_(t,a,()=>a(t.currentUser)),g_(t,c=>a(c))}}const s=ch("auth");return s&&Ky(t,`http://${s}`),t}function Pw(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}jy({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=ct("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Pw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Rw("Browser");var $l=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gt,rd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,g){function _(){}_.prototype=g.prototype,v.F=g.prototype,v.prototype=new _,v.prototype.constructor=v,v.D=function(I,E,b){for(var w=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)w[_e-2]=arguments[_e];return g.prototype[E].apply(I,w)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,g,_){_||(_=0);const I=Array(16);if(typeof g=="string")for(var E=0;E<16;++E)I[E]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(E=0;E<16;++E)I[E]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=v.g[0],_=v.g[1],E=v.g[2];let b=v.g[3],w;w=g+(b^_&(E^b))+I[0]+3614090360&4294967295,g=_+(w<<7&4294967295|w>>>25),w=b+(E^g&(_^E))+I[1]+3905402710&4294967295,b=g+(w<<12&4294967295|w>>>20),w=E+(_^b&(g^_))+I[2]+606105819&4294967295,E=b+(w<<17&4294967295|w>>>15),w=_+(g^E&(b^g))+I[3]+3250441966&4294967295,_=E+(w<<22&4294967295|w>>>10),w=g+(b^_&(E^b))+I[4]+4118548399&4294967295,g=_+(w<<7&4294967295|w>>>25),w=b+(E^g&(_^E))+I[5]+1200080426&4294967295,b=g+(w<<12&4294967295|w>>>20),w=E+(_^b&(g^_))+I[6]+2821735955&4294967295,E=b+(w<<17&4294967295|w>>>15),w=_+(g^E&(b^g))+I[7]+4249261313&4294967295,_=E+(w<<22&4294967295|w>>>10),w=g+(b^_&(E^b))+I[8]+1770035416&4294967295,g=_+(w<<7&4294967295|w>>>25),w=b+(E^g&(_^E))+I[9]+2336552879&4294967295,b=g+(w<<12&4294967295|w>>>20),w=E+(_^b&(g^_))+I[10]+4294925233&4294967295,E=b+(w<<17&4294967295|w>>>15),w=_+(g^E&(b^g))+I[11]+2304563134&4294967295,_=E+(w<<22&4294967295|w>>>10),w=g+(b^_&(E^b))+I[12]+1804603682&4294967295,g=_+(w<<7&4294967295|w>>>25),w=b+(E^g&(_^E))+I[13]+4254626195&4294967295,b=g+(w<<12&4294967295|w>>>20),w=E+(_^b&(g^_))+I[14]+2792965006&4294967295,E=b+(w<<17&4294967295|w>>>15),w=_+(g^E&(b^g))+I[15]+1236535329&4294967295,_=E+(w<<22&4294967295|w>>>10),w=g+(E^b&(_^E))+I[1]+4129170786&4294967295,g=_+(w<<5&4294967295|w>>>27),w=b+(_^E&(g^_))+I[6]+3225465664&4294967295,b=g+(w<<9&4294967295|w>>>23),w=E+(g^_&(b^g))+I[11]+643717713&4294967295,E=b+(w<<14&4294967295|w>>>18),w=_+(b^g&(E^b))+I[0]+3921069994&4294967295,_=E+(w<<20&4294967295|w>>>12),w=g+(E^b&(_^E))+I[5]+3593408605&4294967295,g=_+(w<<5&4294967295|w>>>27),w=b+(_^E&(g^_))+I[10]+38016083&4294967295,b=g+(w<<9&4294967295|w>>>23),w=E+(g^_&(b^g))+I[15]+3634488961&4294967295,E=b+(w<<14&4294967295|w>>>18),w=_+(b^g&(E^b))+I[4]+3889429448&4294967295,_=E+(w<<20&4294967295|w>>>12),w=g+(E^b&(_^E))+I[9]+568446438&4294967295,g=_+(w<<5&4294967295|w>>>27),w=b+(_^E&(g^_))+I[14]+3275163606&4294967295,b=g+(w<<9&4294967295|w>>>23),w=E+(g^_&(b^g))+I[3]+4107603335&4294967295,E=b+(w<<14&4294967295|w>>>18),w=_+(b^g&(E^b))+I[8]+1163531501&4294967295,_=E+(w<<20&4294967295|w>>>12),w=g+(E^b&(_^E))+I[13]+2850285829&4294967295,g=_+(w<<5&4294967295|w>>>27),w=b+(_^E&(g^_))+I[2]+4243563512&4294967295,b=g+(w<<9&4294967295|w>>>23),w=E+(g^_&(b^g))+I[7]+1735328473&4294967295,E=b+(w<<14&4294967295|w>>>18),w=_+(b^g&(E^b))+I[12]+2368359562&4294967295,_=E+(w<<20&4294967295|w>>>12),w=g+(_^E^b)+I[5]+4294588738&4294967295,g=_+(w<<4&4294967295|w>>>28),w=b+(g^_^E)+I[8]+2272392833&4294967295,b=g+(w<<11&4294967295|w>>>21),w=E+(b^g^_)+I[11]+1839030562&4294967295,E=b+(w<<16&4294967295|w>>>16),w=_+(E^b^g)+I[14]+4259657740&4294967295,_=E+(w<<23&4294967295|w>>>9),w=g+(_^E^b)+I[1]+2763975236&4294967295,g=_+(w<<4&4294967295|w>>>28),w=b+(g^_^E)+I[4]+1272893353&4294967295,b=g+(w<<11&4294967295|w>>>21),w=E+(b^g^_)+I[7]+4139469664&4294967295,E=b+(w<<16&4294967295|w>>>16),w=_+(E^b^g)+I[10]+3200236656&4294967295,_=E+(w<<23&4294967295|w>>>9),w=g+(_^E^b)+I[13]+681279174&4294967295,g=_+(w<<4&4294967295|w>>>28),w=b+(g^_^E)+I[0]+3936430074&4294967295,b=g+(w<<11&4294967295|w>>>21),w=E+(b^g^_)+I[3]+3572445317&4294967295,E=b+(w<<16&4294967295|w>>>16),w=_+(E^b^g)+I[6]+76029189&4294967295,_=E+(w<<23&4294967295|w>>>9),w=g+(_^E^b)+I[9]+3654602809&4294967295,g=_+(w<<4&4294967295|w>>>28),w=b+(g^_^E)+I[12]+3873151461&4294967295,b=g+(w<<11&4294967295|w>>>21),w=E+(b^g^_)+I[15]+530742520&4294967295,E=b+(w<<16&4294967295|w>>>16),w=_+(E^b^g)+I[2]+3299628645&4294967295,_=E+(w<<23&4294967295|w>>>9),w=g+(E^(_|~b))+I[0]+4096336452&4294967295,g=_+(w<<6&4294967295|w>>>26),w=b+(_^(g|~E))+I[7]+1126891415&4294967295,b=g+(w<<10&4294967295|w>>>22),w=E+(g^(b|~_))+I[14]+2878612391&4294967295,E=b+(w<<15&4294967295|w>>>17),w=_+(b^(E|~g))+I[5]+4237533241&4294967295,_=E+(w<<21&4294967295|w>>>11),w=g+(E^(_|~b))+I[12]+1700485571&4294967295,g=_+(w<<6&4294967295|w>>>26),w=b+(_^(g|~E))+I[3]+2399980690&4294967295,b=g+(w<<10&4294967295|w>>>22),w=E+(g^(b|~_))+I[10]+4293915773&4294967295,E=b+(w<<15&4294967295|w>>>17),w=_+(b^(E|~g))+I[1]+2240044497&4294967295,_=E+(w<<21&4294967295|w>>>11),w=g+(E^(_|~b))+I[8]+1873313359&4294967295,g=_+(w<<6&4294967295|w>>>26),w=b+(_^(g|~E))+I[15]+4264355552&4294967295,b=g+(w<<10&4294967295|w>>>22),w=E+(g^(b|~_))+I[6]+2734768916&4294967295,E=b+(w<<15&4294967295|w>>>17),w=_+(b^(E|~g))+I[13]+1309151649&4294967295,_=E+(w<<21&4294967295|w>>>11),w=g+(E^(_|~b))+I[4]+4149444226&4294967295,g=_+(w<<6&4294967295|w>>>26),w=b+(_^(g|~E))+I[11]+3174756917&4294967295,b=g+(w<<10&4294967295|w>>>22),w=E+(g^(b|~_))+I[2]+718787259&4294967295,E=b+(w<<15&4294967295|w>>>17),w=_+(b^(E|~g))+I[9]+3951481745&4294967295,v.g[0]=v.g[0]+g&4294967295,v.g[1]=v.g[1]+(E+(w<<21&4294967295|w>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+b&4294967295}r.prototype.v=function(v,g){g===void 0&&(g=v.length);const _=g-this.blockSize,I=this.C;let E=this.h,b=0;for(;b<g;){if(E==0)for(;b<=_;)s(this,v,b),b+=this.blockSize;if(typeof v=="string"){for(;b<g;)if(I[E++]=v.charCodeAt(b++),E==this.blockSize){s(this,I),E=0;break}}else for(;b<g;)if(I[E++]=v[b++],E==this.blockSize){s(this,I),E=0;break}}this.h=E,this.o+=g},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var g=1;g<v.length-8;++g)v[g]=0;g=this.o*8;for(var _=v.length-8;_<v.length;++_)v[_]=g&255,g/=256;for(this.v(v),v=Array(16),g=0,_=0;_<4;++_)for(let I=0;I<32;I+=8)v[g++]=this.g[_]>>>I&255;return v};function i(v,g){var _=c;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=g(v)}function a(v,g){this.h=g;const _=[];let I=!0;for(let E=v.length-1;E>=0;E--){const b=v[E]|0;I&&b==g||(_[E]=b,I=!1)}this.g=_}var c={};function u(v){return-128<=v&&v<128?i(v,function(g){return new a([g|0],g<0?-1:0)}):new a([v|0],v<0?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return y;if(v<0)return k(h(-v));const g=[];let _=1;for(let I=0;v>=_;I++)g[I]=v/_|0,_*=4294967296;return new a(g,0)}function m(v,g){if(v.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(v.charAt(0)=="-")return k(m(v.substring(1),g));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=h(Math.pow(g,8));let I=y;for(let b=0;b<v.length;b+=8){var E=Math.min(8,v.length-b);const w=parseInt(v.substring(b,b+E),g);E<8?(E=h(Math.pow(g,E)),I=I.j(E).add(h(w))):(I=I.j(_),I=I.add(h(w)))}return I}var y=u(0),T=u(1),S=u(16777216);n=a.prototype,n.m=function(){if(P(this))return-k(this).m();let v=0,g=1;for(let _=0;_<this.g.length;_++){const I=this.i(_);v+=(I>=0?I:4294967296+I)*g,g*=4294967296}return v},n.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(x(this))return"0";if(P(this))return"-"+k(this).toString(v);const g=h(Math.pow(v,6));var _=this;let I="";for(;;){const E=K(_,g).g;_=O(_,E.j(g));let b=((_.g.length>0?_.g[0]:_.h)>>>0).toString(v);if(_=E,x(_))return b+I;for(;b.length<6;)b="0"+b;I=b+I}},n.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function x(v){if(v.h!=0)return!1;for(let g=0;g<v.g.length;g++)if(v.g[g]!=0)return!1;return!0}function P(v){return v.h==-1}n.l=function(v){return v=O(this,v),P(v)?-1:x(v)?0:1};function k(v){const g=v.g.length,_=[];for(let I=0;I<g;I++)_[I]=~v.g[I];return new a(_,~v.h).add(T)}n.abs=function(){return P(this)?k(this):this},n.add=function(v){const g=Math.max(this.g.length,v.g.length),_=[];let I=0;for(let E=0;E<=g;E++){let b=I+(this.i(E)&65535)+(v.i(E)&65535),w=(b>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);I=w>>>16,b&=65535,w&=65535,_[E]=w<<16|b}return new a(_,_[_.length-1]&-2147483648?-1:0)};function O(v,g){return v.add(k(g))}n.j=function(v){if(x(this)||x(v))return y;if(P(this))return P(v)?k(this).j(k(v)):k(k(this).j(v));if(P(v))return k(this.j(k(v)));if(this.l(S)<0&&v.l(S)<0)return h(this.m()*v.m());const g=this.g.length+v.g.length,_=[];for(var I=0;I<2*g;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(let E=0;E<v.g.length;E++){const b=this.i(I)>>>16,w=this.i(I)&65535,_e=v.i(E)>>>16,Le=v.i(E)&65535;_[2*I+2*E]+=w*Le,F(_,2*I+2*E),_[2*I+2*E+1]+=b*Le,F(_,2*I+2*E+1),_[2*I+2*E+1]+=w*_e,F(_,2*I+2*E+1),_[2*I+2*E+2]+=b*_e,F(_,2*I+2*E+2)}for(v=0;v<g;v++)_[v]=_[2*v+1]<<16|_[2*v];for(v=g;v<2*g;v++)_[v]=0;return new a(_,0)};function F(v,g){for(;(v[g]&65535)!=v[g];)v[g+1]+=v[g]>>>16,v[g]&=65535,g++}function D(v,g){this.g=v,this.h=g}function K(v,g){if(x(g))throw Error("division by zero");if(x(v))return new D(y,y);if(P(v))return g=K(k(v),g),new D(k(g.g),k(g.h));if(P(g))return g=K(v,k(g)),new D(k(g.g),g.h);if(v.g.length>30){if(P(v)||P(g))throw Error("slowDivide_ only works with positive integers.");for(var _=T,I=g;I.l(v)<=0;)_=se(_),I=se(I);var E=te(_,1),b=te(I,1);for(I=te(I,2),_=te(_,2);!x(I);){var w=b.add(I);w.l(v)<=0&&(E=E.add(_),b=w),I=te(I,1),_=te(_,1)}return g=O(v,E.j(g)),new D(E,g)}for(E=y;v.l(g)>=0;){for(_=Math.max(1,Math.floor(v.m()/g.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),b=h(_),w=b.j(g);P(w)||w.l(v)>0;)_-=I,b=h(_),w=b.j(g);x(b)&&(b=T),E=E.add(b),v=O(v,w)}return new D(E,v)}n.B=function(v){return K(this,v).h},n.and=function(v){const g=Math.max(this.g.length,v.g.length),_=[];for(let I=0;I<g;I++)_[I]=this.i(I)&v.i(I);return new a(_,this.h&v.h)},n.or=function(v){const g=Math.max(this.g.length,v.g.length),_=[];for(let I=0;I<g;I++)_[I]=this.i(I)|v.i(I);return new a(_,this.h|v.h)},n.xor=function(v){const g=Math.max(this.g.length,v.g.length),_=[];for(let I=0;I<g;I++)_[I]=this.i(I)^v.i(I);return new a(_,this.h^v.h)};function se(v){const g=v.g.length+1,_=[];for(let I=0;I<g;I++)_[I]=v.i(I)<<1|v.i(I-1)>>>31;return new a(_,v.h)}function te(v,g){const _=g>>5;g%=32;const I=v.g.length-_,E=[];for(let b=0;b<I;b++)E[b]=g>0?v.i(b+_)>>>g|v.i(b+_+1)<<32-g:v.i(b+_);return new a(E,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,rd=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=m,Gt=a}).apply(typeof $l<"u"?$l:typeof self<"u"?self:typeof window<"u"?window:{});var Cs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sd,Mr,id,qs,zo,od,ad,cd;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cs=="object"&&Cs];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var A=o[p];if(!(A in d))break e;d=d[A]}o=o[o.length-1],p=d[o],l=l(p),l!=p&&l!=null&&e(d,o,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(l){var d=[],p;for(p in l)Object.prototype.hasOwnProperty.call(l,p)&&d.push([p,l[p]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function u(o,l,d){return o.call.apply(o.bind,arguments)}function h(o,l,d){return h=u,h.apply(null,arguments)}function m(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function y(o,l){function d(){}d.prototype=l.prototype,o.Z=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(p,A,R){for(var V=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)V[Q-2]=arguments[Q];return l.prototype[A].apply(p,V)}}var T=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function S(o){const l=o.length;if(l>0){const d=Array(l);for(let p=0;p<l;p++)d[p]=o[p];return d}return[]}function x(o,l){for(let p=1;p<arguments.length;p++){const A=arguments[p];var d=typeof A;if(d=d!="object"?d:A?Array.isArray(A)?"array":d:"null",d=="array"||d=="object"&&typeof A.length=="number"){d=o.length||0;const R=A.length||0;o.length=d+R;for(let V=0;V<R;V++)o[d+V]=A[V]}else o.push(A)}}class P{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function k(o){a.setTimeout(()=>{throw o},0)}function O(){var o=v;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class F{constructor(){this.h=this.g=null}add(l,d){const p=D.get();p.set(l,d),this.h?this.h.next=p:this.g=p,this.h=p}}var D=new P(()=>new K,o=>o.reset());class K{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let se,te=!1,v=new F,g=()=>{const o=Promise.resolve(void 0);se=()=>{o.then(_)}};function _(){for(var o;o=O();){try{o.h.call(o.g)}catch(d){k(d)}var l=D;l.j(o),l.h<100&&(l.h++,o.next=l.g,l.g=o)}te=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var b=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};a.addEventListener("test",d,l),a.removeEventListener("test",d,l)}catch{}return o}();function w(o){return/^[\s\xa0]*$/.test(o)}function _e(o,l){E.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,l)}y(_e,E),_e.prototype.init=function(o,l){const d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget,l||(d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement)),this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&_e.Z.h.call(this)},_e.prototype.h=function(){_e.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Le="closure_listenable_"+(Math.random()*1e6|0),Je=0;function _t(o,l,d,p,A){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!p,this.ha=A,this.key=++Je,this.da=this.fa=!1}function $(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function rn(o,l,d){for(const p in o)l.call(d,o[p],p,o)}function ms(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function pr(o){const l={};for(const d in o)l[d]=o[d];return l}const Pn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function we(o,l){let d,p;for(let A=1;A<arguments.length;A++){p=arguments[A];for(d in p)o[d]=p[d];for(let R=0;R<Pn.length;R++)d=Pn[R],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function ve(o){this.src=o,this.g={},this.h=0}ve.prototype.add=function(o,l,d,p,A){const R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);const V=Nn(o,l,p,A);return V>-1?(l=o[V],d||(l.fa=!1)):(l=new _t(l,this.src,R,!!p,A),l.fa=d,o.push(l)),l};function Ct(o,l){const d=l.type;if(d in o.g){var p=o.g[d],A=Array.prototype.indexOf.call(p,l,void 0),R;(R=A>=0)&&Array.prototype.splice.call(p,A,1),R&&($(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Nn(o,l,d,p){for(let A=0;A<o.length;++A){const R=o[A];if(!R.da&&R.listener==l&&R.capture==!!d&&R.ha==p)return A}return-1}var le="closure_lm_"+(Math.random()*1e6|0),Vn={};function sn(o,l,d,p,A){if(Array.isArray(l)){for(let R=0;R<l.length;R++)sn(o,l[R],d,p,A);return null}return d=ac(d),o&&o[Le]?o.J(l,d,c(p)?!!p.capture:!1,A):Dn(o,l,d,!1,p,A)}function Dn(o,l,d,p,A,R){if(!l)throw Error("Invalid event type");const V=c(A)?!!A.capture:!!A;let Q=Fi(o);if(Q||(o[le]=Q=new ve(o)),d=Q.add(l,d,p,V,R),d.proxy)return d;if(p=mr(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)b||(A=V),A===void 0&&(A=!1),o.addEventListener(l.toString(),p,A);else if(o.attachEvent)o.attachEvent(oc(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function mr(){function o(d){return l.call(o.src,o.listener,d)}const l=fp;return o}function on(o,l,d,p,A){if(Array.isArray(l))for(var R=0;R<l.length;R++)on(o,l[R],d,p,A);else p=c(p)?!!p.capture:!!p,d=ac(d),o&&o[Le]?(o=o.i,R=String(l).toString(),R in o.g&&(l=o.g[R],d=Nn(l,d,p,A),d>-1&&($(l[d]),Array.prototype.splice.call(l,d,1),l.length==0&&(delete o.g[R],o.h--)))):o&&(o=Fi(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Nn(l,d,p,A)),(d=o>-1?l[o]:null)&&Ui(d))}function Ui(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Le])Ct(l.i,o);else{var d=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(d,p,o.capture):l.detachEvent?l.detachEvent(oc(d),p):l.addListener&&l.removeListener&&l.removeListener(p),(d=Fi(l))?(Ct(d,o),d.h==0&&(d.src=null,l[le]=null)):$(o)}}}function oc(o){return o in Vn?Vn[o]:Vn[o]="on"+o}function fp(o,l){if(o.da)o=!0;else{l=new _e(l,this);const d=o.listener,p=o.ha||o.src;o.fa&&Ui(o),o=d.call(p,l)}return o}function Fi(o){return o=o[le],o instanceof ve?o:null}var $i="__closure_events_fn_"+(Math.random()*1e9>>>0);function ac(o){return typeof o=="function"?o:(o[$i]||(o[$i]=function(l){return o.handleEvent(l)}),o[$i])}function xe(){I.call(this),this.i=new ve(this),this.M=this,this.G=null}y(xe,I),xe.prototype[Le]=!0,xe.prototype.removeEventListener=function(o,l,d,p){on(this,o,l,d,p)};function De(o,l){var d,p=o.G;if(p)for(d=[];p;p=p.G)d.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new E(l,o);else if(l instanceof E)l.target=l.target||o;else{var A=l;l=new E(p,o),we(l,A)}A=!0;let R,V;if(d)for(V=d.length-1;V>=0;V--)R=l.g=d[V],A=gs(R,p,!0,l)&&A;if(R=l.g=o,A=gs(R,p,!0,l)&&A,A=gs(R,p,!1,l)&&A,d)for(V=0;V<d.length;V++)R=l.g=d[V],A=gs(R,p,!1,l)&&A}xe.prototype.N=function(){if(xe.Z.N.call(this),this.i){var o=this.i;for(const l in o.g){const d=o.g[l];for(let p=0;p<d.length;p++)$(d[p]);delete o.g[l],o.h--}}this.G=null},xe.prototype.J=function(o,l,d,p){return this.i.add(String(o),l,!1,d,p)},xe.prototype.K=function(o,l,d,p){return this.i.add(String(o),l,!0,d,p)};function gs(o,l,d,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();let A=!0;for(let R=0;R<l.length;++R){const V=l[R];if(V&&!V.da&&V.capture==d){const Q=V.listener,pe=V.ha||V.src;V.fa&&Ct(o.i,V),A=Q.call(pe,p)!==!1&&A}}return A&&!p.defaultPrevented}function pp(o,l){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(o,l||0)}function cc(o){o.g=pp(()=>{o.g=null,o.i&&(o.i=!1,cc(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class mp extends I{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:cc(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gr(o){I.call(this),this.h=o,this.g={}}y(gr,I);var lc=[];function uc(o){rn(o.g,function(l,d){this.g.hasOwnProperty(d)&&Ui(l)},o),o.g={}}gr.prototype.N=function(){gr.Z.N.call(this),uc(this)},gr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Bi=a.JSON.stringify,gp=a.JSON.parse,yp=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function hc(){}function dc(){}var yr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function zi(){E.call(this,"d")}y(zi,E);function qi(){E.call(this,"c")}y(qi,E);var an={},fc=null;function ys(){return fc=fc||new xe}an.Ia="serverreachability";function pc(o){E.call(this,an.Ia,o)}y(pc,E);function _r(o){const l=ys();De(l,new pc(l))}an.STAT_EVENT="statevent";function mc(o,l){E.call(this,an.STAT_EVENT,o),this.stat=l}y(mc,E);function Oe(o){const l=ys();De(l,new mc(l,o))}an.Ja="timingevent";function gc(o,l){E.call(this,an.Ja,o),this.size=l}y(gc,E);function wr(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},l)}function vr(){this.g=!0}vr.prototype.ua=function(){this.g=!1};function _p(o,l,d,p,A,R){o.info(function(){if(o.g)if(R){var V="",Q=R.split("&");for(let re=0;re<Q.length;re++){var pe=Q[re].split("=");if(pe.length>1){const Te=pe[0];pe=pe[1];const ot=Te.split("_");V=ot.length>=2&&ot[1]=="type"?V+(Te+"="+pe+"&"):V+(Te+"=redacted&")}}}else V=null;else V=R;return"XMLHTTP REQ ("+p+") [attempt "+A+"]: "+l+`
`+d+`
`+V})}function wp(o,l,d,p,A,R,V){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+A+"]: "+l+`
`+d+`
`+R+" "+V})}function On(o,l,d,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Tp(o,d)+(p?" "+p:"")})}function vp(o,l){o.info(function(){return"TIMEOUT: "+l})}vr.prototype.info=function(){};function Tp(o,l){if(!o.g)return l;if(!l)return null;try{const R=JSON.parse(l);if(R){for(o=0;o<R.length;o++)if(Array.isArray(R[o])){var d=R[o];if(!(d.length<2)){var p=d[1];if(Array.isArray(p)&&!(p.length<1)){var A=p[0];if(A!="noop"&&A!="stop"&&A!="close")for(let V=1;V<p.length;V++)p[V]=""}}}}return Bi(R)}catch{return l}}var _s={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},yc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},_c;function Hi(){}y(Hi,hc),Hi.prototype.g=function(){return new XMLHttpRequest},_c=new Hi;function Tr(o){return encodeURIComponent(String(o))}function Ep(o){var l=1;o=o.split(":");const d=[];for(;l>0&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function Pt(o,l,d,p){this.j=o,this.i=l,this.l=d,this.S=p||1,this.V=new gr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new wc}function wc(){this.i=null,this.g="",this.h=!1}var vc={},Wi={};function Gi(o,l,d){o.M=1,o.A=vs(it(l)),o.u=d,o.R=!0,Tc(o,null)}function Tc(o,l){o.F=Date.now(),ws(o),o.B=it(o.A);var d=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),Dc(d.i,"t",p),o.C=0,d=o.j.L,o.h=new wc,o.g=Xc(o.j,d?l:null,!o.u),o.P>0&&(o.O=new mp(h(o.Y,o,o.g),o.P)),l=o.V,d=o.g,p=o.ba;var A="readystatechange";Array.isArray(A)||(A&&(lc[0]=A.toString()),A=lc);for(let R=0;R<A.length;R++){const V=sn(d,A[R],p||l.handleEvent,!1,l.h||l);if(!V)break;l.g[V.key]=V}l=o.J?pr(o.J):{},o.u?(o.v||(o.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,l)):(o.v="GET",o.g.ea(o.B,o.v,null,l)),_r(),_p(o.i,o.v,o.B,o.l,o.S,o.u)}Pt.prototype.ba=function(o){o=o.target;const l=this.O;l&&Dt(o)==3?l.j():this.Y(o)},Pt.prototype.Y=function(o){try{if(o==this.g)e:{const Q=Dt(this.g),pe=this.g.ya(),re=this.g.ca();if(!(Q<3)&&(Q!=3||this.g&&(this.h.h||this.g.la()||$c(this.g)))){this.K||Q!=4||pe==7||(pe==8||re<=0?_r(3):_r(2)),Ki(this);var l=this.g.ca();this.X=l;var d=Ip(this);if(this.o=l==200,wp(this.i,this.v,this.B,this.l,this.S,Q,l),this.o){if(this.U&&!this.L){t:{if(this.g){var p,A=this.g;if((p=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(p)){var R=p;break t}}R=null}if(o=R)On(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Qi(this,o);else{this.o=!1,this.m=3,Oe(12),cn(this),Er(this);break e}}if(this.R){o=!0;let Te;for(;!this.K&&this.C<d.length;)if(Te=bp(this,d),Te==Wi){Q==4&&(this.m=4,Oe(14),o=!1),On(this.i,this.l,null,"[Incomplete Response]");break}else if(Te==vc){this.m=4,Oe(15),On(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else On(this.i,this.l,Te,null),Qi(this,Te);if(Ec(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Q!=4||d.length!=0||this.h.h||(this.m=1,Oe(16),o=!1),this.o=this.o&&o,!o)On(this.i,this.l,d,"[Invalid Chunked Response]"),cn(this),Er(this);else if(d.length>0&&!this.W){this.W=!0;var V=this.j;V.g==this&&V.aa&&!V.P&&(V.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),ro(V),V.P=!0,Oe(11))}}else On(this.i,this.l,d,null),Qi(this,d);Q==4&&cn(this),this.o&&!this.K&&(Q==4?Kc(this.j,this):(this.o=!1,ws(this)))}else jp(this.g),l==400&&d.indexOf("Unknown SID")>0?(this.m=3,Oe(12)):(this.m=0,Oe(13)),cn(this),Er(this)}}}catch{}finally{}};function Ip(o){if(!Ec(o))return o.g.la();const l=$c(o.g);if(l==="")return"";let d="";const p=l.length,A=Dt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return cn(o),Er(o),"";o.h.i=new a.TextDecoder}for(let R=0;R<p;R++)o.h.h=!0,d+=o.h.i.decode(l[R],{stream:!(A&&R==p-1)});return l.length=0,o.h.g+=d,o.C=0,o.h.g}function Ec(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function bp(o,l){var d=o.C,p=l.indexOf(`
`,d);return p==-1?Wi:(d=Number(l.substring(d,p)),isNaN(d)?vc:(p+=1,p+d>l.length?Wi:(l=l.slice(p,p+d),o.C=p+d,l)))}Pt.prototype.cancel=function(){this.K=!0,cn(this)};function ws(o){o.T=Date.now()+o.H,Ic(o,o.H)}function Ic(o,l){if(o.D!=null)throw Error("WatchDog timer not null");o.D=wr(h(o.aa,o),l)}function Ki(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Pt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(vp(this.i,this.B),this.M!=2&&(_r(),Oe(17)),cn(this),this.m=2,Er(this)):Ic(this,this.T-o)};function Er(o){o.j.I==0||o.K||Kc(o.j,o)}function cn(o){Ki(o);var l=o.O;l&&typeof l.dispose=="function"&&l.dispose(),o.O=null,uc(o.V),o.g&&(l=o.g,o.g=null,l.abort(),l.dispose())}function Qi(o,l){try{var d=o.j;if(d.I!=0&&(d.g==o||Yi(d.h,o))){if(!o.L&&Yi(d.h,o)&&d.I==3){try{var p=d.Ba.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var A=p;if(A[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)As(d),Is(d);else break e;no(d),Oe(18)}}else d.xa=A[1],0<d.xa-d.K&&A[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=wr(h(d.Va,d),6e3));Rc(d.h)<=1&&d.ta&&(d.ta=void 0)}else un(d,11)}else if((o.L||d.g==o)&&As(d),!w(l))for(A=d.Ba.g.parse(l),l=0;l<A.length;l++){let re=A[l];const Te=re[0];if(!(Te<=d.K))if(d.K=Te,re=re[1],d.I==2)if(re[0]=="c"){d.M=re[1],d.ba=re[2];const ot=re[3];ot!=null&&(d.ka=ot,d.j.info("VER="+d.ka));const hn=re[4];hn!=null&&(d.za=hn,d.j.info("SVER="+d.za));const Ot=re[5];Ot!=null&&typeof Ot=="number"&&Ot>0&&(p=1.5*Ot,d.O=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Lt=o.g;if(Lt){const Ss=Lt.g?Lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ss){var R=p.h;R.g||Ss.indexOf("spdy")==-1&&Ss.indexOf("quic")==-1&&Ss.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Ji(R,R.h),R.h=null))}if(p.G){const so=Lt.g?Lt.g.getResponseHeader("X-HTTP-Session-Id"):null;so&&(p.wa=so,ie(p.J,p.G,so))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),p=d;var V=o;if(p.na=Jc(p,p.L?p.ba:null,p.W),V.L){Sc(p.h,V);var Q=V,pe=p.O;pe&&(Q.H=pe),Q.D&&(Ki(Q),ws(Q)),p.g=V}else Wc(p);d.i.length>0&&bs(d)}else re[0]!="stop"&&re[0]!="close"||un(d,7);else d.I==3&&(re[0]=="stop"||re[0]=="close"?re[0]=="stop"?un(d,7):to(d):re[0]!="noop"&&d.l&&d.l.qa(re),d.A=0)}}_r(4)}catch{}}var Ap=class{constructor(o,l){this.g=o,this.map=l}};function bc(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ac(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Rc(o){return o.h?1:o.g?o.g.size:0}function Yi(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Ji(o,l){o.g?o.g.add(l):o.h=l}function Sc(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}bc.prototype.cancel=function(){if(this.i=xc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function xc(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.G);return l}return S(o.i)}var kc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rp(o,l){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const p=o[d].indexOf("=");let A,R=null;p>=0?(A=o[d].substring(0,p),R=o[d].substring(p+1)):A=o[d],l(A,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Nt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;o instanceof Nt?(this.l=o.l,Ir(this,o.j),this.o=o.o,this.g=o.g,br(this,o.u),this.h=o.h,Xi(this,Oc(o.i)),this.m=o.m):o&&(l=String(o).match(kc))?(this.l=!1,Ir(this,l[1]||"",!0),this.o=Ar(l[2]||""),this.g=Ar(l[3]||"",!0),br(this,l[4]),this.h=Ar(l[5]||"",!0),Xi(this,l[6]||"",!0),this.m=Ar(l[7]||"")):(this.l=!1,this.i=new Sr(null,this.l))}Nt.prototype.toString=function(){const o=[];var l=this.j;l&&o.push(Rr(l,Cc,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Rr(l,Cc,!0),"@"),o.push(Tr(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Rr(d,d.charAt(0)=="/"?kp:xp,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Rr(d,Pp)),o.join("")},Nt.prototype.resolve=function(o){const l=it(this);let d=!!o.j;d?Ir(l,o.j):d=!!o.o,d?l.o=o.o:d=!!o.g,d?l.g=o.g:d=o.u!=null;var p=o.h;if(d)br(l,o.u);else if(d=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var A=l.h.lastIndexOf("/");A!=-1&&(p=l.h.slice(0,A+1)+p)}if(A=p,A==".."||A==".")p="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){p=A.lastIndexOf("/",0)==0,A=A.split("/");const R=[];for(let V=0;V<A.length;){const Q=A[V++];Q=="."?p&&V==A.length&&R.push(""):Q==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),p&&V==A.length&&R.push("")):(R.push(Q),p=!0)}p=R.join("/")}else p=A}return d?l.h=p:d=o.i.toString()!=="",d?Xi(l,Oc(o.i)):d=!!o.m,d&&(l.m=o.m),l};function it(o){return new Nt(o)}function Ir(o,l,d){o.j=d?Ar(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function br(o,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);o.u=l}else o.u=null}function Xi(o,l,d){l instanceof Sr?(o.i=l,Np(o.i,o.l)):(d||(l=Rr(l,Cp)),o.i=new Sr(l,o.l))}function ie(o,l,d){o.i.set(l,d)}function vs(o){return ie(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Ar(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Rr(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,Sp),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Sp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Cc=/[#\/\?@]/g,xp=/[#\?:]/g,kp=/[#\?]/g,Cp=/[#\?@]/g,Pp=/#/g;function Sr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function ln(o){o.g||(o.g=new Map,o.h=0,o.i&&Rp(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=Sr.prototype,n.add=function(o,l){ln(this),this.i=null,o=Ln(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function Pc(o,l){ln(o),l=Ln(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Nc(o,l){return ln(o),l=Ln(o,l),o.g.has(l)}n.forEach=function(o,l){ln(this),this.g.forEach(function(d,p){d.forEach(function(A){o.call(l,A,p,this)},this)},this)};function Vc(o,l){ln(o);let d=[];if(typeof l=="string")Nc(o,l)&&(d=d.concat(o.g.get(Ln(o,l))));else for(o=Array.from(o.g.values()),l=0;l<o.length;l++)d=d.concat(o[l]);return d}n.set=function(o,l){return ln(this),this.i=null,o=Ln(this,o),Nc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=Vc(this,o),o.length>0?String(o[0]):l):l};function Dc(o,l,d){Pc(o,l),d.length>0&&(o.i=null,o.g.set(Ln(o,l),S(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(let p=0;p<l.length;p++){var d=l[p];const A=Tr(d);d=Vc(this,d);for(let R=0;R<d.length;R++){let V=A;d[R]!==""&&(V+="="+Tr(d[R])),o.push(V)}}return this.i=o.join("&")};function Oc(o){const l=new Sr;return l.i=o.i,o.g&&(l.g=new Map(o.g),l.h=o.h),l}function Ln(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Np(o,l){l&&!o.j&&(ln(o),o.i=null,o.g.forEach(function(d,p){const A=p.toLowerCase();p!=A&&(Pc(this,p),Dc(this,A,d))},o)),o.j=l}function Vp(o,l){const d=new vr;if(a.Image){const p=new Image;p.onload=m(Vt,d,"TestLoadImage: loaded",!0,l,p),p.onerror=m(Vt,d,"TestLoadImage: error",!1,l,p),p.onabort=m(Vt,d,"TestLoadImage: abort",!1,l,p),p.ontimeout=m(Vt,d,"TestLoadImage: timeout",!1,l,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function Dp(o,l){const d=new vr,p=new AbortController,A=setTimeout(()=>{p.abort(),Vt(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(R=>{clearTimeout(A),R.ok?Vt(d,"TestPingServer: ok",!0,l):Vt(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),Vt(d,"TestPingServer: error",!1,l)})}function Vt(o,l,d,p,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),p(d)}catch{}}function Op(){this.g=new yp}function Zi(o){this.i=o.Sb||null,this.h=o.ab||!1}y(Zi,hc),Zi.prototype.g=function(){return new Ts(this.i,this.h)};function Ts(o,l){xe.call(this),this.H=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}y(Ts,xe),n=Ts.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=l,this.readyState=1,kr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(l.body=o),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,xr(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,kr(this)),this.g&&(this.readyState=3,kr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Lc(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Lc(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?xr(this):kr(this),this.readyState==3&&Lc(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,xr(this))},n.Na=function(o){this.g&&(this.response=o,xr(this))},n.ga=function(){this.g&&xr(this)};function xr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,kr(o)}n.setRequestHeader=function(o,l){this.A.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function kr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ts.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Mc(o){let l="";return rn(o,function(d,p){l+=p,l+=":",l+=d,l+=`\r
`}),l}function eo(o,l,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Mc(d),typeof o=="string"?d!=null&&Tr(d):ie(o,l,d))}function ue(o){xe.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}y(ue,xe);var Lp=/^https?$/i,Mp=["POST","PUT"];n=ue.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,l,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():_c.g(),this.g.onreadystatechange=T(h(this.Ca,this));try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(R){jc(this,R);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var A in p)d.set(A,p[A]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const R of p.keys())d.set(R,p.get(R));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(R=>R.toLowerCase()=="content-type"),A=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Mp,l,void 0)>=0)||p||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,V]of d)this.g.setRequestHeader(R,V);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(R){jc(this,R)}};function jc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.o=5,Uc(o),Es(o)}function Uc(o){o.A||(o.A=!0,De(o,"complete"),De(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,De(this,"complete"),De(this,"abort"),Es(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Es(this,!0)),ue.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Fc(this):this.Xa())},n.Xa=function(){Fc(this)};function Fc(o){if(o.h&&typeof i<"u"){if(o.v&&Dt(o)==4)setTimeout(o.Ca.bind(o),0);else if(De(o,"readystatechange"),Dt(o)==4){o.h=!1;try{const R=o.ca();e:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var p;if(p=R===0){let V=String(o.D).match(kc)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),p=!Lp.test(V?V.toLowerCase():"")}d=p}if(d)De(o,"complete"),De(o,"success");else{o.o=6;try{var A=Dt(o)>2?o.g.statusText:""}catch{A=""}o.l=A+" ["+o.ca()+"]",Uc(o)}}finally{Es(o)}}}}function Es(o,l){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,l||De(o,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Dt(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Dt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),gp(l)}};function $c(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function jp(o){const l={};o=(o.g&&Dt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(w(o[p]))continue;var d=Ep(o[p]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const R=l[A]||[];l[A]=R,R.push(d)}ms(l,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Cr(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function Bc(o){this.za=0,this.i=[],this.j=new vr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Cr("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Cr("baseRetryDelayMs",5e3,o),this.Za=Cr("retryDelaySeedMs",1e4,o),this.Ta=Cr("forwardChannelMaxRetries",2,o),this.va=Cr("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new bc(o&&o.concurrentRequestLimit),this.Ba=new Op,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Bc.prototype,n.ka=8,n.I=1,n.connect=function(o,l,d,p){Oe(0),this.W=o,this.H=l||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.J=Jc(this,null,this.W),bs(this)};function to(o){if(zc(o),o.I==3){var l=o.V++,d=it(o.J);if(ie(d,"SID",o.M),ie(d,"RID",l),ie(d,"TYPE","terminate"),Pr(o,d),l=new Pt(o,o.j,l),l.M=2,l.A=vs(it(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!d&&a.Image&&(new Image().src=l.A,d=!0),d||(l.g=Xc(l.j,null),l.g.ea(l.A)),l.F=Date.now(),ws(l)}Yc(o)}function Is(o){o.g&&(ro(o),o.g.cancel(),o.g=null)}function zc(o){Is(o),o.v&&(a.clearTimeout(o.v),o.v=null),As(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function bs(o){if(!Ac(o.h)&&!o.m){o.m=!0;var l=o.Ea;se||g(),te||(se(),te=!0),v.add(l,o),o.D=0}}function Up(o,l){return Rc(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=l.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=wr(h(o.Ea,o,l),Qc(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const A=new Pt(this,this.j,o);let R=this.o;if(this.U&&(R?(R=pr(R),we(R,this.U)):R=this.U),this.u!==null||this.R||(A.J=R,R=null),this.S)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,l>4096){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=Hc(this,A,l),d=it(this.J),ie(d,"RID",o),ie(d,"CVER",22),this.G&&ie(d,"X-HTTP-Session-Id",this.G),Pr(this,d),R&&(this.R?l="headers="+Tr(Mc(R))+"&"+l:this.u&&eo(d,this.u,R)),Ji(this.h,A),this.Ra&&ie(d,"TYPE","init"),this.S?(ie(d,"$req",l),ie(d,"SID","null"),A.U=!0,Gi(A,d,null)):Gi(A,d,l),this.I=2}}else this.I==3&&(o?qc(this,o):this.i.length==0||Ac(this.h)||qc(this))};function qc(o,l){var d;l?d=l.l:d=o.V++;const p=it(o.J);ie(p,"SID",o.M),ie(p,"RID",d),ie(p,"AID",o.K),Pr(o,p),o.u&&o.o&&eo(p,o.u,o.o),d=new Pt(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),l&&(o.i=l.G.concat(o.i)),l=Hc(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Ji(o.h,d),Gi(d,p,l)}function Pr(o,l){o.H&&rn(o.H,function(d,p){ie(l,p,d)}),o.l&&rn({},function(d,p){ie(l,p,d)})}function Hc(o,l,d){d=Math.min(o.i.length,d);const p=o.l?h(o.l.Ka,o.l,o):null;e:{var A=o.i;let Q=-1;for(;;){const pe=["count="+d];Q==-1?d>0?(Q=A[0].g,pe.push("ofs="+Q)):Q=0:pe.push("ofs="+Q);let re=!0;for(let Te=0;Te<d;Te++){var R=A[Te].g;const ot=A[Te].map;if(R-=Q,R<0)Q=Math.max(0,A[Te].g-100),re=!1;else try{R="req"+R+"_"||"";try{var V=ot instanceof Map?ot:Object.entries(ot);for(const[hn,Ot]of V){let Lt=Ot;c(Ot)&&(Lt=Bi(Ot)),pe.push(R+hn+"="+encodeURIComponent(Lt))}}catch(hn){throw pe.push(R+"type="+encodeURIComponent("_badmap")),hn}}catch{p&&p(ot)}}if(re){V=pe.join("&");break e}}V=void 0}return o=o.i.splice(0,d),l.G=o,V}function Wc(o){if(!o.g&&!o.v){o.Y=1;var l=o.Da;se||g(),te||(se(),te=!0),v.add(l,o),o.A=0}}function no(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=wr(h(o.Da,o),Qc(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Gc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=wr(h(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Oe(10),Is(this),Gc(this))};function ro(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Gc(o){o.g=new Pt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var l=it(o.na);ie(l,"RID","rpc"),ie(l,"SID",o.M),ie(l,"AID",o.K),ie(l,"CI",o.F?"0":"1"),!o.F&&o.ia&&ie(l,"TO",o.ia),ie(l,"TYPE","xmlhttp"),Pr(o,l),o.u&&o.o&&eo(l,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=vs(it(l)),d.u=null,d.R=!0,Tc(d,o)}n.Va=function(){this.C!=null&&(this.C=null,Is(this),no(this),Oe(19))};function As(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Kc(o,l){var d=null;if(o.g==l){As(o),ro(o),o.g=null;var p=2}else if(Yi(o.h,l))d=l.G,Sc(o.h,l),p=1;else return;if(o.I!=0){if(l.o)if(p==1){d=l.u?l.u.length:0,l=Date.now()-l.F;var A=o.D;p=ys(),De(p,new gc(p,d)),bs(o)}else Wc(o);else if(A=l.m,A==3||A==0&&l.X>0||!(p==1&&Up(o,l)||p==2&&no(o)))switch(d&&d.length>0&&(l=o.h,l.i=l.i.concat(d)),A){case 1:un(o,5);break;case 4:un(o,10);break;case 3:un(o,6);break;default:un(o,2)}}}function Qc(o,l){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*l}function un(o,l){if(o.j.info("Error code "+l),l==2){var d=h(o.bb,o),p=o.Ua;const A=!p;p=new Nt(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ir(p,"https"),vs(p),A?Vp(p.toString(),d):Dp(p.toString(),d)}else Oe(2);o.I=0,o.l&&o.l.pa(l),Yc(o),zc(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Oe(2)):(this.j.info("Failed to ping google.com"),Oe(1))};function Yc(o){if(o.I=0,o.ja=[],o.l){const l=xc(o.h);(l.length!=0||o.i.length!=0)&&(x(o.ja,l),x(o.ja,o.i),o.h.i.length=0,S(o.i),o.i.length=0),o.l.oa()}}function Jc(o,l,d){var p=d instanceof Nt?it(d):new Nt(d);if(p.g!="")l&&(p.g=l+"."+p.g),br(p,p.u);else{var A=a.location;p=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;const R=new Nt(null);p&&Ir(R,p),l&&(R.g=l),A&&br(R,A),d&&(R.h=d),p=R}return d=o.G,l=o.wa,d&&l&&ie(p,d,l),ie(p,"VER",o.ka),Pr(o,p),p}function Xc(o,l,d){if(l&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Aa&&!o.ma?new ue(new Zi({ab:d})):new ue(o.ma),l.Fa(o.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zc(){}n=Zc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Rs(){}Rs.prototype.g=function(o,l){return new $e(o,l)};function $e(o,l){xe.call(this),this.g=new Bc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(o?o["X-WebChannel-Client-Profile"]=l.sa:o={"X-WebChannel-Client-Profile":l.sa}),this.g.U=o,(o=l&&l.Qb)&&!w(o)&&(this.g.u=o),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!w(l)&&(this.g.G=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Mn(this)}y($e,xe),$e.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},$e.prototype.close=function(){to(this.g)},$e.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=Bi(o),o=d);l.i.push(new Ap(l.Ya++,o)),l.I==3&&bs(l)},$e.prototype.N=function(){this.g.l=null,delete this.j,to(this.g),delete this.g,$e.Z.N.call(this)};function el(o){zi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const d in l){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}y(el,zi);function tl(){qi.call(this),this.status=1}y(tl,qi);function Mn(o){this.g=o}y(Mn,Zc),Mn.prototype.ra=function(){De(this.g,"a")},Mn.prototype.qa=function(o){De(this.g,new el(o))},Mn.prototype.pa=function(o){De(this.g,new tl)},Mn.prototype.oa=function(){De(this.g,"b")},Rs.prototype.createWebChannel=Rs.prototype.g,$e.prototype.send=$e.prototype.o,$e.prototype.open=$e.prototype.m,$e.prototype.close=$e.prototype.close,cd=function(){return new Rs},ad=function(){return ys()},od=an,zo={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},_s.NO_ERROR=0,_s.TIMEOUT=8,_s.HTTP_ERROR=6,qs=_s,yc.COMPLETE="complete",id=yc,dc.EventType=yr,yr.OPEN="a",yr.CLOSE="b",yr.ERROR="c",yr.MESSAGE="d",xe.prototype.listen=xe.prototype.J,Mr=dc,ue.prototype.listenOnce=ue.prototype.K,ue.prototype.getLastError=ue.prototype.Ha,ue.prototype.getLastErrorCode=ue.prototype.ya,ue.prototype.getStatus=ue.prototype.ca,ue.prototype.getResponseJson=ue.prototype.La,ue.prototype.getResponseText=ue.prototype.la,ue.prototype.send=ue.prototype.ea,ue.prototype.setWithCredentials=ue.prototype.Fa,sd=ue}).apply(typeof Cs<"u"?Cs:typeof self<"u"?self:typeof window<"u"?window:{});const Bl="@firebase/firestore",zl="4.9.2";/**
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
 */let cr="12.3.0";/**
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
 */const Tn=new Ti("@firebase/firestore");function Fn(){return Tn.logLevel}function L(n,...e){if(Tn.logLevel<=J.DEBUG){const t=e.map(Ta);Tn.debug(`Firestore (${cr}): ${n}`,...t)}}function St(n,...e){if(Tn.logLevel<=J.ERROR){const t=e.map(Ta);Tn.error(`Firestore (${cr}): ${n}`,...t)}}function Zn(n,...e){if(Tn.logLevel<=J.WARN){const t=e.map(Ta);Tn.warn(`Firestore (${cr}): ${n}`,...t)}}function Ta(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function q(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,ld(n,r,t)}function ld(n,e,t){let r=`FIRESTORE (${cr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw St(r),new Error(r)}function ne(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||ld(e,s,r)}function G(n,e){return n}/**
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends st{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ud{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Nw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Pe.UNAUTHENTICATED))}shutdown(){}}class Vw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Dw{constructor(e){this.t=e,this.currentUser=Pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ne(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Kt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Kt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Kt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ne(typeof r.accessToken=="string",31837,{l:r}),new ud(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ne(e===null||typeof e=="string",2055,{h:e}),new Pe(e)}}class Ow{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Pe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Lw{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Ow(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Pe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ql{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Mw{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ge(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ne(this.o===void 0,3512);const r=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ql(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ne(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ql(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Ea{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=jw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function X(n,e){return n<e?-1:n>e?1:0}function qo(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return yo(s)===yo(i)?X(s,i):yo(s)?1:-1}return X(n.length,e.length)}const Uw=55296,Fw=57343;function yo(n){const e=n.charCodeAt(0);return e>=Uw&&e<=Fw}function er(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const Hl="__name__";class at{constructor(e,t,r){t===void 0?t=0:t>e.length&&q(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&q(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return at.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof at?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=at.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return X(e.length,t.length)}static compareSegments(e,t){const r=at.isNumericId(e),s=at.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?at.extractNumericId(e).compare(at.extractNumericId(t)):qo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Gt.fromString(e.substring(4,e.length-2))}}class ae extends at{construct(e,t,r){return new ae(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ae(t)}static emptyPath(){return new ae([])}}const $w=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ae extends at{construct(e,t,r){return new Ae(e,t,r)}static isValidIdentifier(e){return $w.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Hl}static keyField(){return new Ae([Hl])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new U(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new U(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new U(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new U(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ae(t)}static emptyPath(){return new Ae([])}}/**
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
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(ae.fromString(e))}static fromName(e){return new B(ae.fromString(e).popFirst(5))}static empty(){return new B(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ae.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new ae(e.slice()))}}/**
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
 */function Bw(n,e,t){if(!t)throw new U(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function zw(n,e,t,r){if(e===!0&&r===!0)throw new U(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Wl(n){if(!B.isDocumentKey(n))throw new U(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function hd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ia(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":q(12329,{type:typeof n})}function Jr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new U(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ia(n);throw new U(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function fe(n,e){const t={typeString:n};return e&&(t.value=e),t}function us(n,e){if(!hd(n))throw new U(N.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new U(N.INVALID_ARGUMENT,t);return!0}/**
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
 */const Gl=-62135596800,Kl=1e6;class oe{static now(){return oe.fromMillis(Date.now())}static fromDate(e){return oe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Kl);return new oe(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new U(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new U(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Gl)throw new U(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Kl}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:oe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(us(e,oe._jsonSchema))return new oe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Gl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}oe._jsonSchemaVersion="firestore/timestamp/1.0",oe._jsonSchema={type:fe("string",oe._jsonSchemaVersion),seconds:fe("number"),nanoseconds:fe("number")};/**
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
 */const Xr=-1;function qw(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=W.fromTimestamp(r===1e9?new oe(t+1,0):new oe(t,r));return new Yt(s,B.empty(),e)}function Hw(n){return new Yt(n.readTime,n.key,Xr)}class Yt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Yt(W.min(),B.empty(),Xr)}static max(){return new Yt(W.max(),B.empty(),Xr)}}function Ww(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(n.documentKey,e.documentKey),t!==0?t:X(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Kw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function lr(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==Gw)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):C.reject(t)}static resolve(e){return new C((t,r)=>{t(e)})}static reject(e){return new C((t,r)=>{r(e)})}static waitFor(e){return new C((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=C.resolve(!1);for(const r of e)t=t.next(s=>s?C.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new C((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const h=u;t(e[h]).next(m=>{a[h]=m,++c,c===i&&r(a)},m=>s(m))}})}static doWhile(e,t){return new C((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Qw(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ur(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ai{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ai.ce=-1;/**
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
 */const ba=-1;function Ri(n){return n==null}function oi(n){return n===0&&1/n==-1/0}function Yw(n){return typeof n=="number"&&Number.isInteger(n)&&!oi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const dd="";function Jw(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Ql(e)),e=Xw(n.get(t),e);return Ql(e)}function Xw(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case dd:t+="";break;default:t+=i}}return t}function Ql(n){return n+dd+""}/**
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
 */function Yl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Sn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function fd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ce{constructor(e,t){this.comparator=e,this.root=t||be.EMPTY}insert(e,t){return new ce(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,be.BLACK,null,null))}remove(e){return new ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,be.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ps(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ps(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ps(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ps(this.root,e,this.comparator,!0)}}class Ps{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class be{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??be.RED,this.left=s??be.EMPTY,this.right=i??be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new be(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return be.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw q(27949);return e+(this.isRed()?0:1)}}be.EMPTY=null,be.RED=!0,be.BLACK=!1;be.EMPTY=new class{constructor(){this.size=0}get key(){throw q(57766)}get value(){throw q(16141)}get color(){throw q(16727)}get left(){throw q(29726)}get right(){throw q(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new be(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ye{constructor(e){this.comparator=e,this.data=new ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Jl(this.data.getIterator())}getIteratorFrom(e){return new Jl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ye)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ye(this.comparator);return t.data=e,t}}class Jl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.fields=e,e.sort(Ae.comparator)}static empty(){return new tt([])}unionWith(e){let t=new ye(Ae.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new tt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return er(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class pd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new pd("Invalid base64 string: "+i):i}}(e);return new Se(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Se(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Se.EMPTY_BYTE_STRING=new Se("");const Zw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jt(n){if(ne(!!n,39018),typeof n=="string"){let e=0;const t=Zw.exec(n);if(ne(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:he(n.seconds),nanos:he(n.nanos)}}function he(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Xt(n){return typeof n=="string"?Se.fromBase64String(n):Se.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md="server_timestamp",gd="__type__",yd="__previous_value__",_d="__local_write_time__";function Aa(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[gd])==null?void 0:r.stringValue)===md}function Si(n){const e=n.mapValue.fields[yd];return Aa(e)?Si(e):e}function Zr(n){const e=Jt(n.mapValue.fields[_d].timestampValue);return new oe(e.seconds,e.nanos)}/**
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
 */class e0{constructor(e,t,r,s,i,a,c,u,h,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=m}}const ai="(default)";class es{constructor(e,t){this.projectId=e,this.database=t||ai}static empty(){return new es("","")}get isDefaultDatabase(){return this.database===ai}isEqual(e){return e instanceof es&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd="__type__",t0="__max__",Ns={mapValue:{}},vd="__vector__",ci="value";function Zt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Aa(n)?4:r0(n)?9007199254740991:n0(n)?10:11:q(28295,{value:n})}function mt(n,e){if(n===e)return!0;const t=Zt(n);if(t!==Zt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Zr(n).isEqual(Zr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Jt(s.timestampValue),c=Jt(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Xt(s.bytesValue).isEqual(Xt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return he(s.geoPointValue.latitude)===he(i.geoPointValue.latitude)&&he(s.geoPointValue.longitude)===he(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return he(s.integerValue)===he(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=he(s.doubleValue),c=he(i.doubleValue);return a===c?oi(a)===oi(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return er(n.arrayValue.values||[],e.arrayValue.values||[],mt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Yl(a)!==Yl(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!mt(a[u],c[u])))return!1;return!0}(n,e);default:return q(52216,{left:n})}}function ts(n,e){return(n.values||[]).find(t=>mt(t,e))!==void 0}function tr(n,e){if(n===e)return 0;const t=Zt(n),r=Zt(e);if(t!==r)return X(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return X(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=he(i.integerValue||i.doubleValue),u=he(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return Xl(n.timestampValue,e.timestampValue);case 4:return Xl(Zr(n),Zr(e));case 5:return qo(n.stringValue,e.stringValue);case 6:return function(i,a){const c=Xt(i),u=Xt(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),u=a.split("/");for(let h=0;h<c.length&&h<u.length;h++){const m=X(c[h],u[h]);if(m!==0)return m}return X(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=X(he(i.latitude),he(a.latitude));return c!==0?c:X(he(i.longitude),he(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Zl(n.arrayValue,e.arrayValue);case 10:return function(i,a){var T,S,x,P;const c=i.fields||{},u=a.fields||{},h=(T=c[ci])==null?void 0:T.arrayValue,m=(S=u[ci])==null?void 0:S.arrayValue,y=X(((x=h==null?void 0:h.values)==null?void 0:x.length)||0,((P=m==null?void 0:m.values)==null?void 0:P.length)||0);return y!==0?y:Zl(h,m)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Ns.mapValue&&a===Ns.mapValue)return 0;if(i===Ns.mapValue)return 1;if(a===Ns.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),h=a.fields||{},m=Object.keys(h);u.sort(),m.sort();for(let y=0;y<u.length&&y<m.length;++y){const T=qo(u[y],m[y]);if(T!==0)return T;const S=tr(c[u[y]],h[m[y]]);if(S!==0)return S}return X(u.length,m.length)}(n.mapValue,e.mapValue);default:throw q(23264,{he:t})}}function Xl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return X(n,e);const t=Jt(n),r=Jt(e),s=X(t.seconds,r.seconds);return s!==0?s:X(t.nanos,r.nanos)}function Zl(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=tr(t[s],r[s]);if(i)return i}return X(t.length,r.length)}function nr(n){return Ho(n)}function Ho(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Jt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Xt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return B.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Ho(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Ho(t.fields[a])}`;return s+"}"}(n.mapValue):q(61005,{value:n})}function Hs(n){switch(Zt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Si(n);return e?16+Hs(e):16;case 5:return 2*n.stringValue.length;case 6:return Xt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Hs(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Sn(r.fields,(i,a)=>{s+=i.length+Hs(a)}),s}(n.mapValue);default:throw q(13486,{value:n})}}function Wo(n){return!!n&&"integerValue"in n}function Ra(n){return!!n&&"arrayValue"in n}function eu(n){return!!n&&"nullValue"in n}function tu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ws(n){return!!n&&"mapValue"in n}function n0(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[wd])==null?void 0:r.stringValue)===vd}function zr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Sn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=zr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=zr(n.arrayValue.values[t]);return e}return{...n}}function r0(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===t0}/**
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
 */class Ke{constructor(e){this.value=e}static empty(){return new Ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ws(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=zr(t)}setAll(e){let t=Ae.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=zr(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Ws(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return mt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ws(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Sn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ke(zr(this.value))}}function Td(n){const e=[];return Sn(n.fields,(t,r)=>{const s=new Ae([t]);if(Ws(r)){const i=Td(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new tt(e)}/**
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
 */class Ne{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ne(e,0,W.min(),W.min(),W.min(),Ke.empty(),0)}static newFoundDocument(e,t,r,s){return new Ne(e,1,t,W.min(),r,s,0)}static newNoDocument(e,t){return new Ne(e,2,t,W.min(),W.min(),Ke.empty(),0)}static newUnknownDocument(e,t){return new Ne(e,3,t,W.min(),W.min(),Ke.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ne&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ne(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class li{constructor(e,t){this.position=e,this.inclusive=t}}function nu(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=B.comparator(B.fromName(a.referenceValue),t.key):r=tr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ru(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!mt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ui{constructor(e,t="asc"){this.field=e,this.dir=t}}function s0(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Ed{}class ge extends Ed{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new o0(e,t,r):t==="array-contains"?new l0(e,r):t==="in"?new u0(e,r):t==="not-in"?new h0(e,r):t==="array-contains-any"?new d0(e,r):new ge(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new a0(e,r):new c0(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(tr(t,this.value)):t!==null&&Zt(this.value)===Zt(t)&&this.matchesComparison(tr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gt extends Ed{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new gt(e,t)}matches(e){return Id(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Id(n){return n.op==="and"}function bd(n){return i0(n)&&Id(n)}function i0(n){for(const e of n.filters)if(e instanceof gt)return!1;return!0}function Go(n){if(n instanceof ge)return n.field.canonicalString()+n.op.toString()+nr(n.value);if(bd(n))return n.filters.map(e=>Go(e)).join(",");{const e=n.filters.map(t=>Go(t)).join(",");return`${n.op}(${e})`}}function Ad(n,e){return n instanceof ge?function(r,s){return s instanceof ge&&r.op===s.op&&r.field.isEqual(s.field)&&mt(r.value,s.value)}(n,e):n instanceof gt?function(r,s){return s instanceof gt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Ad(a,s.filters[c]),!0):!1}(n,e):void q(19439)}function Rd(n){return n instanceof ge?function(t){return`${t.field.canonicalString()} ${t.op} ${nr(t.value)}`}(n):n instanceof gt?function(t){return t.op.toString()+" {"+t.getFilters().map(Rd).join(" ,")+"}"}(n):"Filter"}class o0 extends ge{constructor(e,t,r){super(e,t,r),this.key=B.fromName(r.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class a0 extends ge{constructor(e,t){super(e,"in",t),this.keys=Sd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class c0 extends ge{constructor(e,t){super(e,"not-in",t),this.keys=Sd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Sd(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>B.fromName(r.referenceValue))}class l0 extends ge{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ra(t)&&ts(t.arrayValue,this.value)}}class u0 extends ge{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ts(this.value.arrayValue,t)}}class h0 extends ge{constructor(e,t){super(e,"not-in",t)}matches(e){if(ts(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ts(this.value.arrayValue,t)}}class d0 extends ge{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ra(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ts(this.value.arrayValue,r))}}/**
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
 */class f0{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function su(n,e=null,t=[],r=[],s=null,i=null,a=null){return new f0(n,e,t,r,s,i,a)}function Sa(n){const e=G(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Go(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ri(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>nr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>nr(r)).join(",")),e.Te=t}return e.Te}function xa(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!s0(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Ad(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ru(n.startAt,e.startAt)&&ru(n.endAt,e.endAt)}function Ko(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class xi{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function p0(n,e,t,r,s,i,a,c){return new xi(n,e,t,r,s,i,a,c)}function ka(n){return new xi(n)}function iu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function m0(n){return n.collectionGroup!==null}function qr(n){const e=G(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ye(Ae.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new ui(i,r))}),t.has(Ae.keyField().canonicalString())||e.Ie.push(new ui(Ae.keyField(),r))}return e.Ie}function ut(n){const e=G(n);return e.Ee||(e.Ee=g0(e,qr(n))),e.Ee}function g0(n,e){if(n.limitType==="F")return su(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ui(s.field,i)});const t=n.endAt?new li(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new li(n.startAt.position,n.startAt.inclusive):null;return su(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Qo(n,e,t){return new xi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ki(n,e){return xa(ut(n),ut(e))&&n.limitType===e.limitType}function xd(n){return`${Sa(ut(n))}|lt:${n.limitType}`}function $n(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Rd(s)).join(", ")}]`),Ri(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>nr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>nr(s)).join(",")),`Target(${r})`}(ut(n))}; limitType=${n.limitType})`}function Ci(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):B.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of qr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,u){const h=nu(a,c,u);return a.inclusive?h<=0:h<0}(r.startAt,qr(r),s)||r.endAt&&!function(a,c,u){const h=nu(a,c,u);return a.inclusive?h>=0:h>0}(r.endAt,qr(r),s))}(n,e)}function y0(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function kd(n){return(e,t)=>{let r=!1;for(const s of qr(n)){const i=_0(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function _0(n,e,t){const r=n.field.isKeyField()?B.comparator(e.key,t.key):function(i,a,c){const u=a.data.field(i),h=c.data.field(i);return u!==null&&h!==null?tr(u,h):q(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return q(19790,{direction:n.dir})}}/**
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
 */class xn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Sn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return fd(this.inner)}size(){return this.innerSize}}/**
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
 */const w0=new ce(B.comparator);function xt(){return w0}const Cd=new ce(B.comparator);function jr(...n){let e=Cd;for(const t of n)e=e.insert(t.key,t);return e}function Pd(n){let e=Cd;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function mn(){return Hr()}function Nd(){return Hr()}function Hr(){return new xn(n=>n.toString(),(n,e)=>n.isEqual(e))}const v0=new ce(B.comparator),T0=new ye(B.comparator);function Z(...n){let e=T0;for(const t of n)e=e.add(t);return e}const E0=new ye(X);function I0(){return E0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oi(e)?"-0":e}}function Vd(n){return{integerValue:""+n}}function b0(n,e){return Yw(e)?Vd(e):Ca(n,e)}/**
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
 */class Pi{constructor(){this._=void 0}}function A0(n,e,t){return n instanceof hi?function(s,i){const a={fields:{[gd]:{stringValue:md},[_d]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Aa(i)&&(i=Si(i)),i&&(a.fields[yd]=i),{mapValue:a}}(t,e):n instanceof ns?Od(n,e):n instanceof rs?Ld(n,e):function(s,i){const a=Dd(s,i),c=ou(a)+ou(s.Ae);return Wo(a)&&Wo(s.Ae)?Vd(c):Ca(s.serializer,c)}(n,e)}function R0(n,e,t){return n instanceof ns?Od(n,e):n instanceof rs?Ld(n,e):t}function Dd(n,e){return n instanceof di?function(r){return Wo(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class hi extends Pi{}class ns extends Pi{constructor(e){super(),this.elements=e}}function Od(n,e){const t=Md(e);for(const r of n.elements)t.some(s=>mt(s,r))||t.push(r);return{arrayValue:{values:t}}}class rs extends Pi{constructor(e){super(),this.elements=e}}function Ld(n,e){let t=Md(e);for(const r of n.elements)t=t.filter(s=>!mt(s,r));return{arrayValue:{values:t}}}class di extends Pi{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function ou(n){return he(n.integerValue||n.doubleValue)}function Md(n){return Ra(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function S0(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof ns&&s instanceof ns||r instanceof rs&&s instanceof rs?er(r.elements,s.elements,mt):r instanceof di&&s instanceof di?mt(r.Ae,s.Ae):r instanceof hi&&s instanceof hi}(n.transform,e.transform)}class x0{constructor(e,t){this.version=e,this.transformResults=t}}class bt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new bt}static exists(e){return new bt(void 0,e)}static updateTime(e){return new bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Gs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ni{}function jd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Fd(n.key,bt.none()):new hs(n.key,n.data,bt.none());{const t=n.data,r=Ke.empty();let s=new ye(Ae.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new kn(n.key,r,new tt(s.toArray()),bt.none())}}function k0(n,e,t){n instanceof hs?function(s,i,a){const c=s.value.clone(),u=cu(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof kn?function(s,i,a){if(!Gs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=cu(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Ud(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Wr(n,e,t,r){return n instanceof hs?function(i,a,c,u){if(!Gs(i.precondition,a))return c;const h=i.value.clone(),m=lu(i.fieldTransforms,u,a);return h.setAll(m),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof kn?function(i,a,c,u){if(!Gs(i.precondition,a))return c;const h=lu(i.fieldTransforms,u,a),m=a.data;return m.setAll(Ud(i)),m.setAll(h),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(y=>y.field))}(n,e,t,r):function(i,a,c){return Gs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function C0(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Dd(r.transform,s||null);i!=null&&(t===null&&(t=Ke.empty()),t.set(r.field,i))}return t||null}function au(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&er(r,s,(i,a)=>S0(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class hs extends Ni{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class kn extends Ni{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ud(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function cu(n,e,t){const r=new Map;ne(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,R0(a,c,t[s]))}return r}function lu(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,A0(i,a,e))}return r}class Fd extends Ni{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class P0 extends Ni{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class N0{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&k0(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Wr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Wr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Nd();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=jd(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Z())}isEqual(e){return this.batchId===e.batchId&&er(this.mutations,e.mutations,(t,r)=>au(t,r))&&er(this.baseMutations,e.baseMutations,(t,r)=>au(t,r))}}class Pa{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){ne(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return v0}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Pa(e,t,r,s)}}/**
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
 */class V0{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class D0{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var de,ee;function O0(n){switch(n){case N.OK:return q(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return q(15467,{code:n})}}function $d(n){if(n===void 0)return St("GRPC error has no .code"),N.UNKNOWN;switch(n){case de.OK:return N.OK;case de.CANCELLED:return N.CANCELLED;case de.UNKNOWN:return N.UNKNOWN;case de.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case de.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case de.INTERNAL:return N.INTERNAL;case de.UNAVAILABLE:return N.UNAVAILABLE;case de.UNAUTHENTICATED:return N.UNAUTHENTICATED;case de.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case de.NOT_FOUND:return N.NOT_FOUND;case de.ALREADY_EXISTS:return N.ALREADY_EXISTS;case de.PERMISSION_DENIED:return N.PERMISSION_DENIED;case de.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case de.ABORTED:return N.ABORTED;case de.OUT_OF_RANGE:return N.OUT_OF_RANGE;case de.UNIMPLEMENTED:return N.UNIMPLEMENTED;case de.DATA_LOSS:return N.DATA_LOSS;default:return q(39323,{code:n})}}(ee=de||(de={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function L0(){return new TextEncoder}/**
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
 */const M0=new Gt([4294967295,4294967295],0);function uu(n){const e=L0().encode(n),t=new rd;return t.update(e),new Uint8Array(t.digest())}function hu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Gt([t,r],0),new Gt([s,i],0)]}class Na{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ur(`Invalid padding: ${t}`);if(r<0)throw new Ur(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ur(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ur(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Gt.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(Gt.fromNumber(r)));return s.compare(M0)===1&&(s=new Gt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=uu(e),[r,s]=hu(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Na(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.ge===0)return;const t=uu(e),[r,s]=hu(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ur extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Vi{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ds.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Vi(W.min(),s,new ce(X),xt(),Z())}}class ds{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ds(r,t,Z(),Z(),Z())}}/**
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
 */class Ks{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class Bd{constructor(e,t){this.targetId=e,this.Ce=t}}class zd{constructor(e,t,r=Se.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class du{constructor(){this.ve=0,this.Fe=fu(),this.Me=Se.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Z(),t=Z(),r=Z();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:q(38017,{changeType:i})}}),new ds(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=fu()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ne(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class j0{constructor(e){this.Ge=e,this.ze=new Map,this.je=xt(),this.Je=Vs(),this.He=Vs(),this.Ye=new ce(X)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:q(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Ko(i))if(r===0){const a=new B(i.path);this.et(t,a,Ne.newNoDocument(a,W.min()))}else ne(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const c=this.ut(e),u=c?this.ct(c,e,a):1;if(u!==0){this.it(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Xt(r).toUint8Array()}catch(u){if(u instanceof pd)return Zn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Na(a,s,i)}catch(u){return Zn(u instanceof Ur?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const c=this.ot(a);if(c){if(i.current&&Ko(c.target)){const u=new B(c.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,Ne.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.qe())}});let r=Z();this.He.forEach((i,a)=>{let c=!0;a.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new Vi(e,t,this.Ye,this.je,r);return this.je=xt(),this.Je=Vs(),this.He=Vs(),this.Ye=new ce(X),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new du,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new ye(X),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new ye(X),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||L("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new du),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Vs(){return new ce(B.comparator)}function fu(){return new ce(B.comparator)}const U0={asc:"ASCENDING",desc:"DESCENDING"},F0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$0={and:"AND",or:"OR"};class B0{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Yo(n,e){return n.useProto3Json||Ri(e)?e:{value:e}}function fi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function z0(n,e){return fi(n,e.toTimestamp())}function ht(n){return ne(!!n,49232),W.fromTimestamp(function(t){const r=Jt(t);return new oe(r.seconds,r.nanos)}(n))}function Va(n,e){return Jo(n,e).canonicalString()}function Jo(n,e){const t=function(s){return new ae(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Hd(n){const e=ae.fromString(n);return ne(Yd(e),10190,{key:e.toString()}),e}function Xo(n,e){return Va(n.databaseId,e.path)}function _o(n,e){const t=Hd(e);if(t.get(1)!==n.databaseId.projectId)throw new U(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new U(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new B(Gd(t))}function Wd(n,e){return Va(n.databaseId,e)}function q0(n){const e=Hd(n);return e.length===4?ae.emptyPath():Gd(e)}function Zo(n){return new ae(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Gd(n){return ne(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function pu(n,e,t){return{name:Xo(n,e),fields:t.value.mapValue.fields}}function H0(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:q(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,m){return h.useProto3Json?(ne(m===void 0||typeof m=="string",58123),Se.fromBase64String(m||"")):(ne(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),Se.fromUint8Array(m||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const m=h.code===void 0?N.UNKNOWN:$d(h.code);return new U(m,h.message||"")}(a);t=new zd(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=_o(n,r.document.name),i=ht(r.document.updateTime),a=r.document.createTime?ht(r.document.createTime):W.min(),c=new Ke({mapValue:{fields:r.document.fields}}),u=Ne.newFoundDocument(s,i,a,c),h=r.targetIds||[],m=r.removedTargetIds||[];t=new Ks(h,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=_o(n,r.document),i=r.readTime?ht(r.readTime):W.min(),a=Ne.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Ks([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=_o(n,r.document),i=r.removedTargetIds||[];t=new Ks([],i,s,null)}else{if(!("filter"in e))return q(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new D0(s,i),c=r.targetId;t=new Bd(c,a)}}return t}function W0(n,e){let t;if(e instanceof hs)t={update:pu(n,e.key,e.value)};else if(e instanceof Fd)t={delete:Xo(n,e.key)};else if(e instanceof kn)t={update:pu(n,e.key,e.data),updateMask:tv(e.fieldMask)};else{if(!(e instanceof P0))return q(16599,{Vt:e.type});t={verify:Xo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof hi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ns)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof rs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof di)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw q(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:z0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:q(27497)}(n,e.precondition)),t}function G0(n,e){return n&&n.length>0?(ne(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?ht(s.updateTime):ht(i);return a.isEqual(W.min())&&(a=ht(i)),new x0(a,s.transformResults||[])}(t,e))):[]}function K0(n,e){return{documents:[Wd(n,e.path)]}}function Q0(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Wd(n,s);const i=function(h){if(h.length!==0)return Qd(gt.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(m=>function(T){return{field:Bn(T.field),direction:X0(T.dir)}}(m))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Yo(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:t,parent:s}}function Y0(n){let e=q0(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){ne(r===1,65062);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=function(y){const T=Kd(y);return T instanceof gt&&bd(T)?T.getFilters():[T]}(t.where));let a=[];t.orderBy&&(a=function(y){return y.map(T=>function(x){return new ui(zn(x.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(T))}(t.orderBy));let c=null;t.limit&&(c=function(y){let T;return T=typeof y=="object"?y.value:y,Ri(T)?null:T}(t.limit));let u=null;t.startAt&&(u=function(y){const T=!!y.before,S=y.values||[];return new li(S,T)}(t.startAt));let h=null;return t.endAt&&(h=function(y){const T=!y.before,S=y.values||[];return new li(S,T)}(t.endAt)),p0(e,s,a,i,c,"F",u,h)}function J0(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Kd(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=zn(t.unaryFilter.field);return ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=zn(t.unaryFilter.field);return ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=zn(t.unaryFilter.field);return ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=zn(t.unaryFilter.field);return ge.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return q(61313);default:return q(60726)}}(n):n.fieldFilter!==void 0?function(t){return ge.create(zn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return q(58110);default:return q(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return gt.create(t.compositeFilter.filters.map(r=>Kd(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return q(1026)}}(t.compositeFilter.op))}(n):q(30097,{filter:n})}function X0(n){return U0[n]}function Z0(n){return F0[n]}function ev(n){return $0[n]}function Bn(n){return{fieldPath:n.canonicalString()}}function zn(n){return Ae.fromServerFormat(n.fieldPath)}function Qd(n){return n instanceof ge?function(t){if(t.op==="=="){if(tu(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NAN"}};if(eu(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(tu(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NOT_NAN"}};if(eu(t.value))return{unaryFilter:{field:Bn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bn(t.field),op:Z0(t.op),value:t.value}}}(n):n instanceof gt?function(t){const r=t.getFilters().map(s=>Qd(s));return r.length===1?r[0]:{compositeFilter:{op:ev(t.op),filters:r}}}(n):q(54877,{filter:n})}function tv(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Yd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class nv{constructor(e){this.yt=e}}function rv(n){const e=Y0({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Qo(e,e.limit,"L"):e}/**
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
 */class sv{constructor(){this.Cn=new iv}addToCollectionParentIndex(e,t){return this.Cn.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(Yt.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(Yt.min())}updateCollectionGroup(e,t,r){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class iv{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ye(ae.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ye(ae.comparator)).toArray()}}/**
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
 */const mu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Jd=41943040;class Ue{static withCacheSize(e){return new Ue(e,Ue.DEFAULT_COLLECTION_PERCENTILE,Ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ue.DEFAULT_COLLECTION_PERCENTILE=10,Ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ue.DEFAULT=new Ue(Jd,Ue.DEFAULT_COLLECTION_PERCENTILE,Ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ue.DISABLED=new Ue(-1,0,0);/**
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
 */class rr{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new rr(0)}static cr(){return new rr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu="LruGarbageCollector",ov=1048576;function yu([n,e],[t,r]){const s=X(n,t);return s===0?X(e,r):s}class av{constructor(e){this.Ir=e,this.buffer=new ye(yu),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();yu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class cv{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){L(gu,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ur(t)?L(gu,"Ignoring IndexedDB error during garbage collection: ",t):await lr(t)}await this.Vr(3e5)})}}class lv{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return C.resolve(Ai.ce);const r=new av(t);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(mu)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),mu):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,i,a,c,u,h;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(y=>(y>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),s=this.params.maximumSequenceNumbersToCollect):s=y,a=Date.now(),this.nthSequenceNumber(e,s))).next(y=>(r=y,c=Date.now(),this.removeTargets(e,r,t))).next(y=>(i=y,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(y=>(h=Date.now(),Fn()<=J.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${y} documents in `+(h-u)+`ms
Total Duration: ${h-m}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:y})))}}function uv(n,e){return new lv(n,e)}/**
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
 */class hv{constructor(){this.changes=new xn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ne.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?C.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class dv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class fv{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Wr(r.mutation,s,tt.empty(),oe.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Z()){const s=mn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=jr();return i.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=mn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Z()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=xt();const a=Hr(),c=function(){return Hr()}();return t.forEach((u,h)=>{const m=r.get(h.key);s.has(h.key)&&(m===void 0||m.mutation instanceof kn)?i=i.insert(h.key,h):m!==void 0?(a.set(h.key,m.mutation.getFieldMask()),Wr(m.mutation,h,m.mutation.getFieldMask(),oe.now())):a.set(h.key,tt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,m)=>a.set(h,m)),t.forEach((h,m)=>c.set(h,new dv(m,a.get(h)??null))),c))}recalculateAndSaveOverlays(e,t){const r=Hr();let s=new ce((a,c)=>a-c),i=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let m=r.get(u)||tt.empty();m=c.applyToLocalView(h,m),r.set(u,m);const y=(s.get(c.batchId)||Z()).add(u);s=s.insert(c.batchId,y)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,m=u.value,y=Nd();m.forEach(T=>{if(!i.has(T)){const S=jd(t.get(T),r.get(T));S!==null&&y.set(T,S),i=i.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,y))}return C.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return B.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):m0(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):C.resolve(mn());let c=Xr,u=i;return a.next(h=>C.forEach(h,(m,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),i.get(m)?C.resolve():this.remoteDocumentCache.getEntry(e,m).next(T=>{u=u.insert(m,T)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,Z())).next(m=>({batchId:c,changes:Pd(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next(r=>{let s=jr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=jr();return this.indexManager.getCollectionParents(e,i).next(c=>C.forEach(c,u=>{const h=function(y,T){return new xi(T,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(m=>{m.forEach((y,T)=>{a=a.insert(y,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,h)=>{const m=h.getKey();a.get(m)===null&&(a=a.insert(m,Ne.newInvalidDocument(m)))});let c=jr();return a.forEach((u,h)=>{const m=i.get(u);m!==void 0&&Wr(m.mutation,h,tt.empty(),oe.now()),Ci(t,h)&&(c=c.insert(u,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return C.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:ht(s.createTime)}}(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(s){return{name:s.name,query:rv(s.bundledQuery),readTime:ht(s.readTime)}}(t)),C.resolve()}}/**
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
 */class mv{constructor(){this.overlays=new ce(B.comparator),this.qr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const r=mn();return C.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),C.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),C.resolve()}getOverlaysForCollection(e,t,r){const s=mn(),i=t.length+1,a=new B(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return C.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ce((h,m)=>h-m);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let m=i.get(h.largestBatchId);m===null&&(m=mn(),i=i.insert(h.largestBatchId,m)),m.set(h.getKey(),h)}}const c=mn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,m)=>c.set(h,m)),!(c.size()>=s)););return C.resolve(c)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new V0(t,r));let i=this.qr.get(t);i===void 0&&(i=Z(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
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
 */class gv{constructor(){this.sessionToken=Se.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
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
 */class Da{constructor(){this.Qr=new ye(Ee.$r),this.Ur=new ye(Ee.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new Ee(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Gr(new Ee(e,t))}zr(e,t){e.forEach(r=>this.removeReference(r,t))}jr(e){const t=new B(new ae([])),r=new Ee(t,e),s=new Ee(t,e+1),i=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),i.push(a.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new B(new ae([])),r=new Ee(t,e),s=new Ee(t,e+1);let i=Z();return this.Ur.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Ee(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ee{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return B.comparator(e.key,t.key)||X(e.Yr,t.Yr)}static Kr(e,t){return X(e.Yr,t.Yr)||B.comparator(e.key,t.key)}}/**
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
 */class yv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new ye(Ee.$r)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new N0(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Zr=this.Zr.add(new Ee(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return C.resolve(a)}lookupMutationBatch(e,t){return C.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),i=s<0?0:s;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?ba:this.tr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ee(t,0),s=new Ee(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],a=>{const c=this.Xr(a.Yr);i.push(c)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ye(X);return t.forEach(s=>{const i=new Ee(s,0),a=new Ee(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],c=>{r=r.add(c.Yr)})}),C.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;B.isDocumentKey(i)||(i=i.child(""));const a=new Ee(new B(i),0);let c=new ye(X);return this.Zr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(u.Yr)),!0)},a),C.resolve(this.ti(c))}ti(e){const t=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ne(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return C.forEach(t.mutations,s=>{const i=new Ee(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){const r=new Ee(t,0),s=this.Zr.firstAfterOrEqual(r);return C.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class _v{constructor(e){this.ri=e,this.docs=function(){return new ce(B.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return C.resolve(r?r.document.mutableCopy():Ne.newInvalidDocument(t))}getEntries(e,t){let r=xt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ne.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=xt();const a=t.path,c=new B(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:m}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Ww(Hw(m),r)<=0||(s.has(m.key)||Ci(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(e,t,r,s){q(9500)}ii(e,t){return C.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new wv(this)}getSize(e){return C.resolve(this.size)}}class wv extends hv{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),C.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class vv{constructor(e){this.persistence=e,this.si=new xn(t=>Sa(t),xa),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.oi=0,this._i=new Da,this.targetCount=0,this.ai=rr.ur()}forEachTarget(e,t){return this.si.forEach((r,s)=>t(s)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),C.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new rr(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.Pr(t),C.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.si.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),C.waitFor(i).next(()=>s)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return C.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),C.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return C.resolve(r)}containsKey(e,t){return C.resolve(this._i.containsKey(t))}}/**
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
 */class Xd{constructor(e,t){this.ui={},this.overlays={},this.ci=new Ai(0),this.li=!1,this.li=!0,this.hi=new gv,this.referenceDelegate=e(this),this.Pi=new vv(this),this.indexManager=new sv,this.remoteDocumentCache=function(s){return new _v(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new nv(t),this.Ii=new pv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new mv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new yv(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){L("MemoryPersistence","Starting transaction:",e);const s=new Tv(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,t){return C.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class Tv extends Kw{constructor(e){super(),this.currentSequenceNumber=e}}class Oa{constructor(e){this.persistence=e,this.Ri=new Da,this.Vi=null}static mi(e){return new Oa(e)}get fi(){if(this.Vi)return this.Vi;throw q(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),C.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),C.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.fi,r=>{const s=B.fromPath(r);return this.gi(e,s).next(i=>{i||t.removeEntry(s,W.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return C.or([()=>C.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class pi{constructor(e,t){this.persistence=e,this.pi=new xn(r=>Jw(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=uv(this,t)}static mi(e,t){return new pi(e,t)}Ei(){}di(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}pr(e,t){return C.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?C.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,a=>this.br(e,a,t).next(c=>{c||(r++,i.removeEntry(a,W.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),C.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),C.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Hs(e.data.value)),t}br(e,t,r){return C.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return C.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class La{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=Z(),s=Z();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new La(e,t.fromCache,r,s)}}/**
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
 */class Ev{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Iv{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Hm()?8:Qw(Ve())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ys(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ws(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Ev;return this.Ss(e,t,a).next(c=>{if(i.result=c,this.Vs)return this.bs(e,t,a,c.size)})}).next(()=>i.result)}bs(e,t,r,s){return r.documentReadCount<this.fs?(Fn()<=J.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",$n(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),C.resolve()):(Fn()<=J.DEBUG&&L("QueryEngine","Query:",$n(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Fn()<=J.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",$n(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ut(t))):C.resolve())}ys(e,t){if(iu(t))return C.resolve(null);let r=ut(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Qo(t,null,"F"),r=ut(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=Z(...i);return this.ps.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ds(t,c);return this.Cs(t,h,a,u.readTime)?this.ys(e,Qo(t,null,"F")):this.vs(e,h,t,u)}))})))}ws(e,t,r,s){return iu(t)||s.isEqual(W.min())?C.resolve(null):this.ps.getDocuments(e,r).next(i=>{const a=this.Ds(t,i);return this.Cs(t,a,r,s)?C.resolve(null):(Fn()<=J.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),$n(t)),this.vs(e,a,t,qw(s,Xr)).next(c=>c))})}Ds(e,t){let r=new ye(kd(e));return t.forEach((s,i)=>{Ci(e,i)&&(r=r.add(i))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return Fn()<=J.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",$n(t)),this.ps.getDocumentsMatchingQuery(e,t,Yt.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma="LocalStore",bv=3e8;class Av{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new ce(X),this.xs=new xn(i=>Sa(i),xa),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fv(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function Rv(n,e,t,r){return new Av(n,e,t,r)}async function Zd(n,e){const t=G(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let u=Z();for(const h of s){a.push(h.batchId);for(const m of h.mutations)u=u.add(m.key)}for(const h of i){c.push(h.batchId);for(const m of h.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(r,u).next(h=>({Ls:h,removedBatchIds:a,addedBatchIds:c}))})})}function Sv(n,e){const t=G(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return function(c,u,h,m){const y=h.batch,T=y.keys();let S=C.resolve();return T.forEach(x=>{S=S.next(()=>m.getEntry(u,x)).next(P=>{const k=h.docVersions.get(x);ne(k!==null,48541),P.version.compareTo(k)<0&&(y.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),m.addEntry(P)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(u,y))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=Z();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function ef(n){const e=G(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function xv(n,e){const t=G(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const c=[];e.targetChanges.forEach((m,y)=>{const T=s.get(y);if(!T)return;c.push(t.Pi.removeMatchingKeys(i,m.removedDocuments,y).next(()=>t.Pi.addMatchingKeys(i,m.addedDocuments,y)));let S=T.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(y)!==null?S=S.withResumeToken(Se.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,r)),s=s.insert(y,S),function(P,k,O){return P.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=bv?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(T,S,m)&&c.push(t.Pi.updateTargetData(i,S))});let u=xt(),h=Z();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))}),c.push(kv(i,a,e.documentUpdates).next(m=>{u=m.ks,h=m.qs})),!r.isEqual(W.min())){const m=t.Pi.getLastRemoteSnapshotVersion(i).next(y=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(m)}return C.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(t.Ms=s,i))}function kv(n,e,t){let r=Z(),s=Z();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=xt();return t.forEach((c,u)=>{const h=i.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(W.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):L(Ma,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{ks:a,qs:s}})}function Cv(n,e){const t=G(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ba),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Pv(n,e){const t=G(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Pi.getTargetData(r,e).next(i=>i?(s=i,C.resolve(s)):t.Pi.allocateTargetId(r).next(a=>(s=new qt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r})}async function ea(n,e,t){const r=G(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ur(a))throw a;L(Ma,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function _u(n,e,t){const r=G(n);let s=W.min(),i=Z();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,m){const y=G(u),T=y.xs.get(m);return T!==void 0?C.resolve(y.Ms.get(T)):y.Pi.getTargetData(h,m)}(r,a,ut(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,c.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:W.min(),t?i:Z())).next(c=>(Nv(r,y0(e),c),{documents:c,Qs:i})))}function Nv(n,e,t){let r=n.Os.get(e)||W.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Os.set(e,r)}class wu{constructor(){this.activeTargetIds=I0()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Vv{constructor(){this.Mo=new wu,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new wu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Dv{Oo(e){}shutdown(){}}/**
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
 */const vu="ConnectivityMonitor";class Tu{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){L(vu,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){L(vu,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ds=null;function ta(){return Ds===null?Ds=function(){return 268435456+Math.round(2147483648*Math.random())}():Ds++,"0x"+Ds.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo="RestConnection",Ov={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Lv{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===ai?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,i){const a=ta(),c=this.zo(e,t.toUriEncodedString());L(wo,`Sending RPC '${e}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:h}=new URL(c),m=ir(h);return this.Jo(e,c,u,r,m).then(y=>(L(wo,`Received RPC '${e}' ${a}: `,y),y),y=>{throw Zn(wo,`RPC '${e}' ${a} failed with error: `,y,"url: ",c,"request:",r),y})}Ho(e,t,r,s,i,a){return this.Go(e,t,r,s,i)}jo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+cr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,t){const r=Ov[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
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
 */class Mv{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const ke="WebChannelConnection";class jv extends Lv{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const a=ta();return new Promise((c,u)=>{const h=new sd;h.setWithCredentials(!0),h.listenOnce(id.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case qs.NO_ERROR:const y=h.getResponseJson();L(ke,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(y)),c(y);break;case qs.TIMEOUT:L(ke,`RPC '${e}' ${a} timed out`),u(new U(N.DEADLINE_EXCEEDED,"Request time out"));break;case qs.HTTP_ERROR:const T=h.getStatus();if(L(ke,`RPC '${e}' ${a} failed with status:`,T,"response text:",h.getResponseText()),T>0){let S=h.getResponseJson();Array.isArray(S)&&(S=S[0]);const x=S==null?void 0:S.error;if(x&&x.status&&x.message){const P=function(O){const F=O.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(F)>=0?F:N.UNKNOWN}(x.status);u(new U(P,x.message))}else u(new U(N.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new U(N.UNAVAILABLE,"Connection failed."));break;default:q(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{L(ke,`RPC '${e}' ${a} completed.`)}});const m=JSON.stringify(s);L(ke,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",m,r,15)})}T_(e,t,r){const s=ta(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=cd(),c=ad(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const m=i.join("");L(ke,`Creating RPC '${e}' stream ${s}: ${m}`,u);const y=a.createWebChannel(m,u);this.I_(y);let T=!1,S=!1;const x=new Mv({Yo:k=>{S?L(ke,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(T||(L(ke,`Opening RPC '${e}' stream ${s} transport.`),y.open(),T=!0),L(ke,`RPC '${e}' stream ${s} sending:`,k),y.send(k))},Zo:()=>y.close()}),P=(k,O,F)=>{k.listen(O,D=>{try{F(D)}catch(K){setTimeout(()=>{throw K},0)}})};return P(y,Mr.EventType.OPEN,()=>{S||(L(ke,`RPC '${e}' stream ${s} transport opened.`),x.o_())}),P(y,Mr.EventType.CLOSE,()=>{S||(S=!0,L(ke,`RPC '${e}' stream ${s} transport closed`),x.a_(),this.E_(y))}),P(y,Mr.EventType.ERROR,k=>{S||(S=!0,Zn(ke,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),x.a_(new U(N.UNAVAILABLE,"The operation could not be completed")))}),P(y,Mr.EventType.MESSAGE,k=>{var O;if(!S){const F=k.data[0];ne(!!F,16349);const D=F,K=(D==null?void 0:D.error)||((O=D[0])==null?void 0:O.error);if(K){L(ke,`RPC '${e}' stream ${s} received error:`,K);const se=K.status;let te=function(_){const I=de[_];if(I!==void 0)return $d(I)}(se),v=K.message;te===void 0&&(te=N.INTERNAL,v="Unknown error status: "+se+" with message "+K.message),S=!0,x.a_(new U(te,v)),y.close()}else L(ke,`RPC '${e}' stream ${s} received:`,F),x.u_(F)}}),P(c,od.STAT_EVENT,k=>{k.stat===zo.PROXY?L(ke,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===zo.NOPROXY&&L(ke,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{x.__()},0),x}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function vo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(n){return new B0(n,!0)}/**
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
 */class tf{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Eu="PersistentStream";class nf{constructor(e,t,r,s,i,a,c,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new tf(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(St(t.toString()),St("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new U(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return L(Eu,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(L(Eu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Uv extends nf{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=H0(this.serializer,e),r=function(i){if(!("targetChange"in i))return W.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?W.min():a.readTime?ht(a.readTime):W.min()}(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=Zo(this.serializer),t.addTarget=function(i,a){let c;const u=a.target;if(c=Ko(u)?{documents:K0(i,u)}:{query:Q0(i,u).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=qd(i,a.resumeToken);const h=Yo(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(W.min())>0){c.readTime=fi(i,a.snapshotVersion.toTimestamp());const h=Yo(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=J0(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=Zo(this.serializer),t.removeTarget=e,this.q_(t)}}class Fv extends nf{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ne(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ne(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ne(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=G0(e.writeResults,e.commitTime),r=ht(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Zo(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>W0(this.serializer,r))};this.q_(t)}}/**
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
 */class $v{}class Bv extends $v{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new U(N.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Go(e,Jo(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(N.UNKNOWN,i.toString())})}Ho(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Ho(e,Jo(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new U(N.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class zv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(St(t),this.aa=!1):L("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const En="RemoteStore";class qv{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{Cn(this)&&(L(En,"Restarting streams for network reachability change."),await async function(u){const h=G(u);h.Ea.add(4),await fs(h),h.Ra.set("Unknown"),h.Ea.delete(4),await Oi(h)}(this))})}),this.Ra=new zv(r,s)}}async function Oi(n){if(Cn(n))for(const e of n.da)await e(!0)}async function fs(n){for(const e of n.da)await e(!1)}function rf(n,e){const t=G(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),$a(t)?Fa(t):hr(t).O_()&&Ua(t,e))}function ja(n,e){const t=G(n),r=hr(t);t.Ia.delete(e),r.O_()&&sf(t,e),t.Ia.size===0&&(r.O_()?r.L_():Cn(t)&&t.Ra.set("Unknown"))}function Ua(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}hr(n).Y_(e)}function sf(n,e){n.Va.Ue(e),hr(n).Z_(e)}function Fa(n){n.Va=new j0({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),hr(n).start(),n.Ra.ua()}function $a(n){return Cn(n)&&!hr(n).x_()&&n.Ia.size>0}function Cn(n){return G(n).Ea.size===0}function of(n){n.Va=void 0}async function Hv(n){n.Ra.set("Online")}async function Wv(n){n.Ia.forEach((e,t)=>{Ua(n,e)})}async function Gv(n,e){of(n),$a(n)?(n.Ra.ha(e),Fa(n)):n.Ra.set("Unknown")}async function Kv(n,e,t){if(n.Ra.set("Online"),e instanceof zd&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.Va.removeTarget(c))}(n,e)}catch(r){L(En,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await mi(n,r)}else if(e instanceof Ks?n.Va.Ze(e):e instanceof Bd?n.Va.st(e):n.Va.tt(e),!t.isEqual(W.min()))try{const r=await ef(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Va.Tt(a);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const m=i.Ia.get(h);m&&i.Ia.set(h,m.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,h)=>{const m=i.Ia.get(u);if(!m)return;i.Ia.set(u,m.withResumeToken(Se.EMPTY_BYTE_STRING,m.snapshotVersion)),sf(i,u);const y=new qt(m.target,u,h,m.sequenceNumber);Ua(i,y)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){L(En,"Failed to raise snapshot:",r),await mi(n,r)}}async function mi(n,e,t){if(!ur(e))throw e;n.Ea.add(1),await fs(n),n.Ra.set("Offline"),t||(t=()=>ef(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{L(En,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Oi(n)})}function af(n,e){return e().catch(t=>mi(n,t,e))}async function Li(n){const e=G(n),t=en(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ba;for(;Qv(e);)try{const s=await Cv(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,Yv(e,s)}catch(s){await mi(e,s)}cf(e)&&lf(e)}function Qv(n){return Cn(n)&&n.Ta.length<10}function Yv(n,e){n.Ta.push(e);const t=en(n);t.O_()&&t.X_&&t.ea(e.mutations)}function cf(n){return Cn(n)&&!en(n).x_()&&n.Ta.length>0}function lf(n){en(n).start()}async function Jv(n){en(n).ra()}async function Xv(n){const e=en(n);for(const t of n.Ta)e.ea(t.mutations)}async function Zv(n,e,t){const r=n.Ta.shift(),s=Pa.from(r,e,t);await af(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Li(n)}async function eT(n,e){e&&en(n).X_&&await async function(r,s){if(function(a){return O0(a)&&a!==N.ABORTED}(s.code)){const i=r.Ta.shift();en(r).B_(),await af(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Li(r)}}(n,e),cf(n)&&lf(n)}async function Iu(n,e){const t=G(n);t.asyncQueue.verifyOperationInProgress(),L(En,"RemoteStore received new credentials");const r=Cn(t);t.Ea.add(3),await fs(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Oi(t)}async function tT(n,e){const t=G(n);e?(t.Ea.delete(2),await Oi(t)):e||(t.Ea.add(2),await fs(t),t.Ra.set("Unknown"))}function hr(n){return n.ma||(n.ma=function(t,r,s){const i=G(t);return i.sa(),new Uv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:Hv.bind(null,n),t_:Wv.bind(null,n),r_:Gv.bind(null,n),H_:Kv.bind(null,n)}),n.da.push(async e=>{e?(n.ma.B_(),$a(n)?Fa(n):n.Ra.set("Unknown")):(await n.ma.stop(),of(n))})),n.ma}function en(n){return n.fa||(n.fa=function(t,r,s){const i=G(t);return i.sa(),new Fv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Jv.bind(null,n),r_:eT.bind(null,n),ta:Xv.bind(null,n),na:Zv.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await Li(n)):(await n.fa.stop(),n.Ta.length>0&&(L(En,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class Ba{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new Ba(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function za(n,e){if(St("AsyncQueue",`${e}: ${n}`),ur(n))return new U(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Jn{static emptySet(e){return new Jn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||B.comparator(t.key,r.key):(t,r)=>B.comparator(t.key,r.key),this.keyedMap=jr(),this.sortedSet=new ce(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Jn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Jn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class bu{constructor(){this.ga=new ce(B.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):q(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class sr{constructor(e,t,r,s,i,a,c,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new sr(e,t,Jn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ki(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class nT{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class rT{constructor(){this.queries=Au(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=G(t),i=s.queries;s.queries=Au(),i.forEach((a,c)=>{for(const u of c.Sa)u.onError(r)})})(this,new U(N.ABORTED,"Firestore shutting down"))}}function Au(){return new xn(n=>xd(n),ki)}async function sT(n,e){const t=G(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new nT,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=za(a,`Initialization of query '${$n(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&qa(t)}async function iT(n,e){const t=G(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function oT(n,e){const t=G(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.Sa)c.Fa(s)&&(r=!0);a.wa=s}}r&&qa(t)}function aT(n,e,t){const r=G(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function qa(n){n.Ca.forEach(e=>{e.next()})}var na,Ru;(Ru=na||(na={})).Ma="default",Ru.Cache="cache";class cT{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new sr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=sr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==na.Cache}}/**
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
 */class uf{constructor(e){this.key=e}}class hf{constructor(e){this.key=e}}class lT{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Z(),this.mutatedKeys=Z(),this.eu=kd(e),this.tu=new Jn(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new bu,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,y)=>{const T=s.get(m),S=Ci(this.query,y)?y:null,x=!!T&&this.mutatedKeys.has(T.key),P=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let k=!1;T&&S?T.data.isEqual(S.data)?x!==P&&(r.track({type:3,doc:S}),k=!0):this.su(T,S)||(r.track({type:2,doc:S}),k=!0,(u&&this.eu(S,u)>0||h&&this.eu(S,h)<0)&&(c=!0)):!T&&S?(r.track({type:0,doc:S}),k=!0):T&&!S&&(r.track({type:1,doc:T}),k=!0,(u||h)&&(c=!0)),k&&(S?(a=a.add(S),i=P?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}return{tu:a,iu:r,Cs:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((m,y)=>function(S,x){const P=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q(20277,{Rt:k})}};return P(S)-P(x)}(m.type,y.type)||this.eu(m.doc,y.doc)),this.ou(r),s=s??!1;const c=t&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,h=u!==this.Za;return this.Za=u,a.length!==0||h?{snapshot:new sr(this.query,e.tu,i,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new bu,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Z(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const t=[];return e.forEach(r=>{this.Xa.has(r)||t.push(new hf(r))}),this.Xa.forEach(r=>{e.has(r)||t.push(new uf(r))}),t}cu(e){this.Ya=e.Qs,this.Xa=Z();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return sr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ha="SyncEngine";class uT{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class hT{constructor(e){this.key=e,this.hu=!1}}class dT{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new xn(c=>xd(c),ki),this.Iu=new Map,this.Eu=new Set,this.du=new ce(B.comparator),this.Au=new Map,this.Ru=new Da,this.Vu={},this.mu=new Map,this.fu=rr.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function fT(n,e,t=!0){const r=yf(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await df(r,e,t,!0),s}async function pT(n,e){const t=yf(n);await df(t,e,!0,!1)}async function df(n,e,t,r){const s=await Pv(n.localStore,ut(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await mT(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&rf(n.remoteStore,s),c}async function mT(n,e,t,r,s){n.pu=(y,T,S)=>async function(P,k,O,F){let D=k.view.ru(O);D.Cs&&(D=await _u(P.localStore,k.query,!1).then(({documents:v})=>k.view.ru(v,D)));const K=F&&F.targetChanges.get(k.targetId),se=F&&F.targetMismatches.get(k.targetId)!=null,te=k.view.applyChanges(D,P.isPrimaryClient,K,se);return xu(P,k.targetId,te.au),te.snapshot}(n,y,T,S);const i=await _u(n.localStore,e,!0),a=new lT(e,i.Qs),c=a.ru(i.documents),u=ds.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,u);xu(n,t,h.au);const m=new uT(e,t,a);return n.Tu.set(e,m),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function gT(n,e,t){const r=G(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(a=>!ki(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ea(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&ja(r.remoteStore,s.targetId),ra(r,s.targetId)}).catch(lr)):(ra(r,s.targetId),await ea(r.localStore,s.targetId,!0))}async function yT(n,e){const t=G(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ja(t.remoteStore,r.targetId))}async function _T(n,e,t){const r=AT(n);try{const s=await function(a,c){const u=G(a),h=oe.now(),m=c.reduce((S,x)=>S.add(x.key),Z());let y,T;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let x=xt(),P=Z();return u.Ns.getEntries(S,m).next(k=>{x=k,x.forEach((O,F)=>{F.isValidDocument()||(P=P.add(O))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,x)).next(k=>{y=k;const O=[];for(const F of c){const D=C0(F,y.get(F.key).overlayedDocument);D!=null&&O.push(new kn(F.key,D,Td(D.value.mapValue),bt.exists(!0)))}return u.mutationQueue.addMutationBatch(S,h,O,c)}).next(k=>{T=k;const O=k.applyToLocalDocumentSet(y,P);return u.documentOverlayCache.saveOverlays(S,k.batchId,O)})}).then(()=>({batchId:T.batchId,changes:Pd(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,u){let h=a.Vu[a.currentUser.toKey()];h||(h=new ce(X)),h=h.insert(c,u),a.Vu[a.currentUser.toKey()]=h}(r,s.batchId,t),await ps(r,s.changes),await Li(r.remoteStore)}catch(s){const i=za(s,"Failed to persist write");t.reject(i)}}async function ff(n,e){const t=G(n);try{const r=await xv(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Au.get(i);a&&(ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?ne(a.hu,14607):s.removedDocuments.size>0&&(ne(a.hu,42227),a.hu=!1))}),await ps(t,r,e)}catch(r){await lr(r)}}function Su(n,e,t){const r=G(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const u=G(a);u.onlineState=c;let h=!1;u.queries.forEach((m,y)=>{for(const T of y.Sa)T.va(c)&&(h=!0)}),h&&qa(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wT(n,e,t){const r=G(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new ce(B.comparator);a=a.insert(i,Ne.newNoDocument(i,W.min()));const c=Z().add(i),u=new Vi(W.min(),new Map,new ce(X),a,c);await ff(r,u),r.du=r.du.remove(i),r.Au.delete(e),Wa(r)}else await ea(r.localStore,e,!1).then(()=>ra(r,e,t)).catch(lr)}async function vT(n,e){const t=G(n),r=e.batch.batchId;try{const s=await Sv(t.localStore,e);mf(t,r,null),pf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ps(t,s)}catch(s){await lr(s)}}async function TT(n,e,t){const r=G(n);try{const s=await function(a,c){const u=G(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let m;return u.mutationQueue.lookupMutationBatch(h,c).next(y=>(ne(y!==null,37113),m=y.keys(),u.mutationQueue.removeMutationBatch(h,y))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,m,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,m)).next(()=>u.localDocuments.getDocuments(h,m))})}(r.localStore,e);mf(r,e,t),pf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ps(r,s)}catch(s){await lr(s)}}function pf(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function mf(n,e,t){const r=G(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function ra(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach(r=>{n.Ru.containsKey(r)||gf(n,r)})}function gf(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(ja(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Wa(n))}function xu(n,e,t){for(const r of t)r instanceof uf?(n.Ru.addReference(r.key,e),ET(n,r)):r instanceof hf?(L(Ha,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||gf(n,r.key)):q(19791,{wu:r})}function ET(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(L(Ha,"New document in limbo: "+t),n.Eu.add(r),Wa(n))}function Wa(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new B(ae.fromString(e)),r=n.fu.next();n.Au.set(r,new hT(t)),n.du=n.du.insert(t,r),rf(n.remoteStore,new qt(ut(ka(t.path)),r,"TargetPurposeLimboResolution",Ai.ce))}}async function ps(n,e,t){const r=G(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((c,u)=>{a.push(r.pu(u,e,t).then(h=>{var m;if((h||t)&&r.isPrimaryClient){const y=h?!h.fromCache:(m=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:m.current;r.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(h){s.push(h);const y=La.As(u.targetId,h);i.push(y)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(u,h){const m=G(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>C.forEach(h,T=>C.forEach(T.Es,S=>m.persistence.referenceDelegate.addReference(y,T.targetId,S)).next(()=>C.forEach(T.ds,S=>m.persistence.referenceDelegate.removeReference(y,T.targetId,S)))))}catch(y){if(!ur(y))throw y;L(Ma,"Failed to update sequence numbers: "+y)}for(const y of h){const T=y.targetId;if(!y.fromCache){const S=m.Ms.get(T),x=S.snapshotVersion,P=S.withLastLimboFreeSnapshotVersion(x);m.Ms=m.Ms.insert(T,P)}}}(r.localStore,i))}async function IT(n,e){const t=G(n);if(!t.currentUser.isEqual(e)){L(Ha,"User change. New user:",e.toKey());const r=await Zd(t.localStore,e);t.currentUser=e,function(i,a){i.mu.forEach(c=>{c.forEach(u=>{u.reject(new U(N.CANCELLED,a))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ps(t,r.Ls)}}function bT(n,e){const t=G(n),r=t.Au.get(e);if(r&&r.hu)return Z().add(r.key);{let s=Z();const i=t.Iu.get(e);if(!i)return s;for(const a of i){const c=t.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function yf(n){const e=G(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ff.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wT.bind(null,e),e.Pu.H_=oT.bind(null,e.eventManager),e.Pu.yu=aT.bind(null,e.eventManager),e}function AT(n){const e=G(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=TT.bind(null,e),e}class gi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Di(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Rv(this.persistence,new Iv,e.initialUser,this.serializer)}Cu(e){return new Xd(Oa.mi,this.serializer)}Du(e){return new Vv}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}gi.provider={build:()=>new gi};class RT extends gi{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ne(this.persistence.referenceDelegate instanceof pi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new cv(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ue.withCacheSize(this.cacheSizeBytes):Ue.DEFAULT;return new Xd(r=>pi.mi(r,t),this.serializer)}}class sa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Su(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=IT.bind(null,this.syncEngine),await tT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new rT}()}createDatastore(e){const t=Di(e.databaseInfo.databaseId),r=function(i){return new jv(i)}(e.databaseInfo);return function(i,a,c,u){return new Bv(i,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new qv(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Su(this.syncEngine,t,0),function(){return Tu.v()?new Tu:new Dv}())}createSyncEngine(e,t){return function(s,i,a,c,u,h,m){const y=new dT(s,i,a,c,u,h);return m&&(y.gu=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=G(s);L(En,"RemoteStore shutting down."),i.Ea.add(5),await fs(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}sa.provider={build:()=>new sa};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ST{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):St("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const tn="FirestoreClient";class xT{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Pe.UNAUTHENTICATED,this.clientId=Ea.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{L(tn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(L(tn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=za(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function To(n,e){n.asyncQueue.verifyOperationInProgress(),L(tn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Zd(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function ku(n,e){n.asyncQueue.verifyOperationInProgress();const t=await kT(n);L(tn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Iu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Iu(e.remoteStore,s)),n._onlineComponents=e}async function kT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L(tn,"Using user provided OfflineComponentProvider");try{await To(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Zn("Error using user provided cache. Falling back to memory cache: "+t),await To(n,new gi)}}else L(tn,"Using default OfflineComponentProvider"),await To(n,new RT(void 0));return n._offlineComponents}async function _f(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L(tn,"Using user provided OnlineComponentProvider"),await ku(n,n._uninitializedComponentsProvider._online)):(L(tn,"Using default OnlineComponentProvider"),await ku(n,new sa))),n._onlineComponents}function CT(n){return _f(n).then(e=>e.syncEngine)}async function PT(n){const e=await _f(n),t=e.eventManager;return t.onListen=fT.bind(null,e.syncEngine),t.onUnlisten=gT.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=pT.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=yT.bind(null,e.syncEngine),t}function NT(n,e,t={}){const r=new Kt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,h){const m=new ST({next:T=>{m.Nu(),a.enqueueAndForget(()=>iT(i,y));const S=T.docs.has(c);!S&&T.fromCache?h.reject(new U(N.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&T.fromCache&&u&&u.source==="server"?h.reject(new U(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(T)},error:T=>h.reject(T)}),y=new cT(ka(c.path),m,{includeMetadataChanges:!0,qa:!0});return sT(i,y)}(await PT(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function wf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf="firestore.googleapis.com",Pu=!0;class Nu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new U(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=vf,this.ssl=Pu}else this.host=e.host,this.ssl=e.ssl??Pu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Jd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ov)throw new U(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}zw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wf(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new U(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new U(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new U(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ga{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new U(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Nw;switch(r.type){case"firstParty":return new Lw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Cu.get(t);r&&(L("ComponentProvider","Removing Datastore"),Cu.delete(t),r.terminate())}(this),Promise.resolve()}}function VT(n,e,t,r={}){var h;n=Jr(n,Ga);const s=ir(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(hh(`https://${c}`),dh("Firestore",!0)),i.host!==vf&&i.host!==c&&Zn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:c,ssl:s,emulatorOptions:r};if(!Qt(u,a)&&(n._setSettings(u),r.mockUserToken)){let m,y;if(typeof r.mockUserToken=="string")m=r.mockUserToken,y=Pe.MOCK_USER;else{m=Mm(r.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new U(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new Pe(T)}n._authCredentials=new Vw(new ud(m,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ka(this.firestore,e,this._query)}}class Ie{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ss(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ie(this.firestore,e,this._key)}toJSON(){return{type:Ie._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(us(t,Ie._jsonSchema))return new Ie(e,r||null,new B(ae.fromString(t.referencePath)))}}Ie._jsonSchemaVersion="firestore/documentReference/1.0",Ie._jsonSchema={type:fe("string",Ie._jsonSchemaVersion),referencePath:fe("string")};class ss extends Ka{constructor(e,t,r){super(e,t,ka(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ie(this.firestore,null,new B(e))}withConverter(e){return new ss(this.firestore,e,this._path)}}function Eo(n,e,...t){if(n=Re(n),arguments.length===1&&(e=Ea.newId()),Bw("doc","path",e),n instanceof Ga){const r=ae.fromString(e,...t);return Wl(r),new Ie(n,null,new B(r))}{if(!(n instanceof Ie||n instanceof ss))throw new U(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ae.fromString(e,...t));return Wl(r),new Ie(n.firestore,n instanceof ss?n.converter:null,new B(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu="AsyncQueue";class Du{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new tf(this,"async_queue_retry"),this._c=()=>{const r=vo();r&&L(Vu,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=vo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=vo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Kt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ur(e))throw e;L(Vu,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,St("INTERNAL UNHANDLED ERROR: ",Ou(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Ba.createAndSchedule(this,e,t,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&q(47125,{Pc:Ou(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Ou(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Qa extends Ga{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Du,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Du(e),this._firestoreClient=void 0,await e}}}function DT(n,e){const t=typeof n=="object"?n:da(),r=typeof n=="string"?n:ai,s=Rn(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Om("firestore");i&&VT(s,...i)}return s}function Tf(n){if(n._terminated)throw new U(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||OT(n),n._firestoreClient}function OT(n){var r,s,i;const e=n._freezeSettings(),t=function(c,u,h,m){return new e0(c,u,h,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,wf(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)}(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new xT(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qe(Se.fromBase64String(e))}catch(t){throw new U(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Qe(Se.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Qe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(us(e,Qe._jsonSchema))return Qe.fromBase64String(e.bytes)}}Qe._jsonSchemaVersion="firestore/bytes/1.0",Qe._jsonSchema={type:fe("string",Qe._jsonSchemaVersion),bytes:fe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new U(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e){this._methodName=e}}/**
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
 */class dt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new U(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new U(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:dt._jsonSchemaVersion}}static fromJSON(e){if(us(e,dt._jsonSchema))return new dt(e.latitude,e.longitude)}}dt._jsonSchemaVersion="firestore/geoPoint/1.0",dt._jsonSchema={type:fe("string",dt._jsonSchemaVersion),latitude:fe("number"),longitude:fe("number")};/**
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
 */class ft{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ft._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(us(e,ft._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new ft(e.vectorValues);throw new U(N.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ft._jsonSchemaVersion="firestore/vectorValue/1.0",ft._jsonSchema={type:fe("string",ft._jsonSchemaVersion),vectorValues:fe("object")};/**
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
 */const LT=/^__.*__$/;class MT{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new kn(e,this.data,this.fieldMask,t,this.fieldTransforms):new hs(e,this.data,t,this.fieldTransforms)}}function If(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q(40011,{Ac:n})}}class Ja{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ja({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return yi(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(If(this.Ac)&&LT.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class jT{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Di(e)}Cc(e,t,r,s=!1){return new Ja({Ac:e,methodName:t,Dc:r,path:Ae.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function UT(n){const e=n._freezeSettings(),t=Di(n._databaseId);return new jT(n._databaseId,!!e.ignoreUndefinedProperties,t)}function FT(n,e,t,r,s,i={}){const a=n.Cc(i.merge||i.mergeFields?2:0,e,t,s);Sf("Data must be an object, but it was:",a,r);const c=Af(r,a);let u,h;if(i.merge)u=new tt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const y of i.mergeFields){const T=$T(e,y,t);if(!a.contains(T))throw new U(N.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);zT(m,T)||m.push(T)}u=new tt(m),h=a.fieldTransforms.filter(y=>u.covers(y.field))}else u=null,h=a.fieldTransforms;return new MT(new Ke(c),u,h)}function bf(n,e){if(Rf(n=Re(n)))return Sf("Unsupported field value:",e,n),Af(n,e);if(n instanceof Ef)return function(r,s){if(!If(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let u=bf(c,s.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Re(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return b0(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=oe.fromDate(r);return{timestampValue:fi(s.serializer,i)}}if(r instanceof oe){const i=new oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:fi(s.serializer,i)}}if(r instanceof dt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qe)return{bytesValue:qd(s.serializer,r._byteString)};if(r instanceof Ie){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Va(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ft)return function(a,c){return{mapValue:{fields:{[wd]:{stringValue:vd},[ci]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.Sc("VectorValues must only contain numeric values.");return Ca(c.serializer,h)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Ia(r)}`)}(n,e)}function Af(n,e){const t={};return fd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Sn(n,(r,s)=>{const i=bf(s,e.mc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Rf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof oe||n instanceof dt||n instanceof Qe||n instanceof Ie||n instanceof Ef||n instanceof ft)}function Sf(n,e,t){if(!Rf(t)||!hd(t)){const r=Ia(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function $T(n,e,t){if((e=Re(e))instanceof Ya)return e._internalPath;if(typeof e=="string")return xf(n,e);throw yi("Field path arguments must be of type string or ",n,!1,void 0,t)}const BT=new RegExp("[~\\*/\\[\\]]");function xf(n,e,t){if(e.search(BT)>=0)throw yi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ya(...e.split("."))._internalPath}catch{throw yi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function yi(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new U(N.INVALID_ARGUMENT,c+n+u)}function zT(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ie(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Cf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class qT extends kf{data(){return super.data()}}function Cf(n,e){return typeof e=="string"?xf(n,e):e instanceof Ya?e._internalPath:e._delegate._internalPath}class HT{convertValue(e,t="none"){switch(Zt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return he(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Xt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw q(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Sn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[ci].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>he(a.doubleValue));return new ft(t)}convertGeoPoint(e){return new dt(he(e.latitude),he(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Si(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Zr(e));default:return null}}convertTimestamp(e){const t=Jt(e);return new oe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ae.fromString(e);ne(Yd(r),9688,{name:e});const s=new es(r.get(1),r.get(3)),i=new B(r.popFirst(5));return s.isEqual(t)||St(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WT(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Fr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _n extends kf{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Qs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Cf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new U(N.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=_n._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}_n._jsonSchemaVersion="firestore/documentSnapshot/1.0",_n._jsonSchema={type:fe("string",_n._jsonSchemaVersion),bundleSource:fe("string","DocumentSnapshot"),bundleName:fe("string"),bundle:fe("string")};class Qs extends _n{data(e={}){return super.data(e)}}class Gr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Fr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Qs(this._firestore,this._userDataWriter,r.key,r,new Fr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new U(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const u=new Qs(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Fr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new Qs(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Fr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,m=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:GT(c.type),doc:u,oldIndex:h,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new U(N.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Gr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ea.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function GT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(n){n=Jr(n,Ie);const e=Jr(n.firestore,Qa);return NT(Tf(e),n._key).then(t=>JT(e,n,t))}Gr._jsonSchemaVersion="firestore/querySnapshot/1.0",Gr._jsonSchema={type:fe("string",Gr._jsonSchemaVersion),bundleSource:fe("string","QuerySnapshot"),bundleName:fe("string"),bundle:fe("string")};class QT extends HT{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ie(this.firestore,null,t)}}function Lu(n,e,t){n=Jr(n,Ie);const r=Jr(n.firestore,Qa),s=WT(n.converter,e,t);return YT(r,[FT(UT(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,bt.none())])}function YT(n,e){return function(r,s){const i=new Kt;return r.asyncQueue.enqueueAndForget(async()=>_T(await CT(r),s,i)),i.promise}(Tf(n),e)}function JT(n,e,t){const r=t.docs.get(e._key),s=new QT(n);return new _n(n,s,e._key,r,new Fr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){cr=s})(or),pt(new nt("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Qa(new Dw(r.getProvider("auth-internal")),new Mw(a,r.getProvider("app-check-internal")),function(h,m){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new U(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new es(h.options.projectId,m)}(a,s),a);return i={useFetchStreams:t,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Ye(Bl,zl,e),Ye(Bl,zl,"esm2020")})();var XT="firebase",ZT="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ye(XT,ZT,"app");const Pf="@firebase/installations",Xa="0.6.19";/**
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
 */const Nf=1e4,Vf=`w:${Xa}`,Df="FIS_v2",eE="https://firebaseinstallations.googleapis.com/v1",tE=60*60*1e3,nE="installations",rE="Installations";/**
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
 */const sE={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},In=new An(nE,rE,sE);function Of(n){return n instanceof st&&n.code.includes("request-failed")}/**
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
 */function Lf({projectId:n}){return`${eE}/projects/${n}/installations`}function Mf(n){return{token:n.token,requestStatus:2,expiresIn:oE(n.expiresIn),creationTime:Date.now()}}async function jf(n,e){const r=(await e.json()).error;return In.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Uf({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function iE(n,{refreshToken:e}){const t=Uf(n);return t.append("Authorization",aE(e)),t}async function Ff(n){const e=await n();return e.status>=500&&e.status<600?n():e}function oE(n){return Number(n.replace("s","000"))}function aE(n){return`${Df} ${n}`}/**
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
 */async function cE({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Lf(n),s=Uf(n),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={fid:t,authVersion:Df,appId:n.appId,sdkVersion:Vf},c={method:"POST",headers:s,body:JSON.stringify(a)},u=await Ff(()=>fetch(r,c));if(u.ok){const h=await u.json();return{fid:h.fid||t,registrationStatus:2,refreshToken:h.refreshToken,authToken:Mf(h.authToken)}}else throw await jf("Create Installation",u)}/**
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
 */function $f(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function lE(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const uE=/^[cdef][\w-]{21}$/,ia="";function hE(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=dE(n);return uE.test(t)?t:ia}catch{return ia}}function dE(n){return lE(n).substr(0,22)}/**
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
 */function Mi(n){return`${n.appName}!${n.appId}`}/**
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
 */const Bf=new Map;function zf(n,e){const t=Mi(n);qf(t,e),fE(t,e)}function qf(n,e){const t=Bf.get(n);if(t)for(const r of t)r(e)}function fE(n,e){const t=pE();t&&t.postMessage({key:n,fid:e}),mE()}let gn=null;function pE(){return!gn&&"BroadcastChannel"in self&&(gn=new BroadcastChannel("[Firebase] FID Change"),gn.onmessage=n=>{qf(n.data.key,n.data.fid)}),gn}function mE(){Bf.size===0&&gn&&(gn.close(),gn=null)}/**
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
 */const gE="firebase-installations-database",yE=1,bn="firebase-installations-store";let Io=null;function Za(){return Io||(Io=_h(gE,yE,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(bn)}}})),Io}async function _i(n,e){const t=Mi(n),s=(await Za()).transaction(bn,"readwrite"),i=s.objectStore(bn),a=await i.get(t);return await i.put(e,t),await s.done,(!a||a.fid!==e.fid)&&zf(n,e.fid),e}async function Hf(n){const e=Mi(n),r=(await Za()).transaction(bn,"readwrite");await r.objectStore(bn).delete(e),await r.done}async function ji(n,e){const t=Mi(n),s=(await Za()).transaction(bn,"readwrite"),i=s.objectStore(bn),a=await i.get(t),c=e(a);return c===void 0?await i.delete(t):await i.put(c,t),await s.done,c&&(!a||a.fid!==c.fid)&&zf(n,c.fid),c}/**
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
 */async function ec(n){let e;const t=await ji(n.appConfig,r=>{const s=_E(r),i=wE(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===ia?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function _E(n){const e=n||{fid:hE(),registrationStatus:0};return Wf(e)}function wE(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(In.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=vE(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:TE(n)}:{installationEntry:e}}async function vE(n,e){try{const t=await cE(n,e);return _i(n.appConfig,t)}catch(t){throw Of(t)&&t.customData.serverCode===409?await Hf(n.appConfig):await _i(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function TE(n){let e=await Mu(n.appConfig);for(;e.registrationStatus===1;)await $f(100),e=await Mu(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await ec(n);return r||t}return e}function Mu(n){return ji(n,e=>{if(!e)throw In.create("installation-not-found");return Wf(e)})}function Wf(n){return EE(n)?{fid:n.fid,registrationStatus:0}:n}function EE(n){return n.registrationStatus===1&&n.registrationTime+Nf<Date.now()}/**
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
 */async function IE({appConfig:n,heartbeatServiceProvider:e},t){const r=bE(n,t),s=iE(n,t),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={installation:{sdkVersion:Vf,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(a)},u=await Ff(()=>fetch(r,c));if(u.ok){const h=await u.json();return Mf(h)}else throw await jf("Generate Auth Token",u)}function bE(n,{fid:e}){return`${Lf(n)}/${e}/authTokens:generate`}/**
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
 */async function tc(n,e=!1){let t;const r=await ji(n.appConfig,i=>{if(!Gf(i))throw In.create("not-registered");const a=i.authToken;if(!e&&SE(a))return i;if(a.requestStatus===1)return t=AE(n,e),i;{if(!navigator.onLine)throw In.create("app-offline");const c=kE(i);return t=RE(n,c),c}});return t?await t:r.authToken}async function AE(n,e){let t=await ju(n.appConfig);for(;t.authToken.requestStatus===1;)await $f(100),t=await ju(n.appConfig);const r=t.authToken;return r.requestStatus===0?tc(n,e):r}function ju(n){return ji(n,e=>{if(!Gf(e))throw In.create("not-registered");const t=e.authToken;return CE(t)?{...e,authToken:{requestStatus:0}}:e})}async function RE(n,e){try{const t=await IE(n,e),r={...e,authToken:t};return await _i(n.appConfig,r),t}catch(t){if(Of(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Hf(n.appConfig);else{const r={...e,authToken:{requestStatus:0}};await _i(n.appConfig,r)}throw t}}function Gf(n){return n!==void 0&&n.registrationStatus===2}function SE(n){return n.requestStatus===2&&!xE(n)}function xE(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+tE}function kE(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function CE(n){return n.requestStatus===1&&n.requestTime+Nf<Date.now()}/**
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
 */async function PE(n){const e=n,{installationEntry:t,registrationPromise:r}=await ec(e);return r?r.catch(console.error):tc(e).catch(console.error),t.fid}/**
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
 */async function NE(n,e=!1){const t=n;return await VE(t),(await tc(t,e)).token}async function VE(n){const{registrationPromise:e}=await ec(n);e&&await e}/**
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
 */function DE(n){if(!n||!n.options)throw bo("App Configuration");if(!n.name)throw bo("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw bo(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function bo(n){return In.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf="installations",OE="installations-internal",LE=n=>{const e=n.getProvider("app").getImmediate(),t=DE(e),r=Rn(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},ME=n=>{const e=n.getProvider("app").getImmediate(),t=Rn(e,Kf).getImmediate();return{getId:()=>PE(t),getToken:s=>NE(t,s)}};function jE(){pt(new nt(Kf,LE,"PUBLIC")),pt(new nt(OE,ME,"PRIVATE"))}jE();Ye(Pf,Xa);Ye(Pf,Xa,"esm2020");/**
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
 */const wi="analytics",UE="firebase_id",FE="origin",$E=60*1e3,BE="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",nc="https://www.googletagmanager.com/gtag/js";/**
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
 */const Fe=new Ti("@firebase/analytics");/**
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
 */const zE={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ze=new An("analytics","Analytics",zE);/**
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
 */function qE(n){if(!n.startsWith(nc)){const e=ze.create("invalid-gtag-resource",{gtagURL:n});return Fe.warn(e.message),""}return n}function Qf(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function HE(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function WE(n,e){const t=HE("firebase-js-sdk-policy",{createScriptURL:qE}),r=document.createElement("script"),s=`${nc}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function GE(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function KE(n,e,t,r,s,i){const a=r[s];try{if(a)await e[a];else{const u=(await Qf(t)).find(h=>h.measurementId===s);u&&await e[u.appId]}}catch(c){Fe.error(c)}n("config",s,i)}async function QE(n,e,t,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const c=await Qf(t);for(const u of a){const h=c.find(y=>y.measurementId===u),m=h&&e[h.appId];if(m)i.push(m);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",r,s||{})}catch(i){Fe.error(i)}}function YE(n,e,t,r){async function s(i,...a){try{if(i==="event"){const[c,u]=a;await QE(n,e,t,c,u)}else if(i==="config"){const[c,u]=a;await KE(n,e,t,r,c,u)}else if(i==="consent"){const[c,u]=a;n("consent",c,u)}else if(i==="get"){const[c,u,h]=a;n("get",c,u,h)}else if(i==="set"){const[c]=a;n("set",c)}else n(i,...a)}catch(c){Fe.error(c)}}return s}function JE(n,e,t,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=YE(i,n,e,t),{gtagCore:i,wrappedGtag:window[s]}}function XE(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(nc)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE=30,eI=1e3;class tI{constructor(e={},t=eI){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Yf=new tI;function nI(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function rI(n){var a;const{appId:e,apiKey:t}=n,r={method:"GET",headers:nI(t)},s=BE.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let c="";try{const u=await i.json();(a=u.error)!=null&&a.message&&(c=u.error.message)}catch{}throw ze.create("config-fetch-failed",{httpStatus:i.status,responseMessage:c})}return i.json()}async function sI(n,e=Yf,t){const{appId:r,apiKey:s,measurementId:i}=n.options;if(!r)throw ze.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw ze.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new aI;return setTimeout(async()=>{c.abort()},$E),Jf({appId:r,apiKey:s,measurementId:i},a,c,e)}async function Jf(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=Yf){var c;const{appId:i,measurementId:a}=n;try{await iI(r,e)}catch(u){if(a)return Fe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:i,measurementId:a};throw u}try{const u=await rI(n);return s.deleteThrottleMetadata(i),u}catch(u){const h=u;if(!oI(h)){if(s.deleteThrottleMetadata(i),a)return Fe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:i,measurementId:a};throw u}const m=Number((c=h==null?void 0:h.customData)==null?void 0:c.httpStatus)===503?fl(t,s.intervalMillis,ZE):fl(t,s.intervalMillis),y={throttleEndTimeMillis:Date.now()+m,backoffCount:t+1};return s.setThrottleMetadata(i,y),Fe.debug(`Calling attemptFetch again in ${m} millis`),Jf(n,y,r,s)}}function iI(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(i),r(ze.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function oI(n){if(!(n instanceof st)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class aI{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function cI(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const i=await e,a={...r,send_to:i};n("event",t,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lI(){if(ph())try{await mh()}catch(n){return Fe.warn(ze.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Fe.warn(ze.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function uI(n,e,t,r,s,i,a){const c=sI(n);c.then(T=>{t[T.measurementId]=T.appId,n.options.measurementId&&T.measurementId!==n.options.measurementId&&Fe.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${T.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(T=>Fe.error(T)),e.push(c);const u=lI().then(T=>{if(T)return r.getId()}),[h,m]=await Promise.all([c,u]);XE(i)||WE(i,h.measurementId),s("js",new Date);const y=(a==null?void 0:a.config)??{};return y[FE]="firebase",y.update=!0,m!=null&&(y[UE]=m),s("config",h.measurementId,y),h.measurementId}/**
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
 */class hI{constructor(e){this.app=e}_delete(){return delete Kr[this.app.options.appId],Promise.resolve()}}let Kr={},Uu=[];const Fu={};let Ao="dataLayer",dI="gtag",$u,Xf,Bu=!1;function fI(){const n=[];if(fh()&&n.push("This is a browser extension environment."),Wm()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=ze.create("invalid-analytics-context",{errorInfo:e});Fe.warn(t.message)}}function pI(n,e,t){fI();const r=n.options.appId;if(!r)throw ze.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Fe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ze.create("no-api-key");if(Kr[r]!=null)throw ze.create("already-exists",{id:r});if(!Bu){GE(Ao);const{wrappedGtag:i,gtagCore:a}=JE(Kr,Uu,Fu,Ao,dI);Xf=i,$u=a,Bu=!0}return Kr[r]=uI(n,Uu,Fu,e,$u,Ao,t),new hI(n)}function mI(n=da()){n=Re(n);const e=Rn(n,wi);return e.isInitialized()?e.getImmediate():gI(n)}function gI(n,e={}){const t=Rn(n,wi);if(t.isInitialized()){const s=t.getImmediate();if(Qt(e,t.getOptions()))return s;throw ze.create("already-initialized")}return t.initialize({options:e})}function yI(n,e,t,r){n=Re(n),cI(Xf,Kr[n.app.options.appId],e,t,r).catch(s=>Fe.error(s))}const zu="@firebase/analytics",qu="0.10.18";function _I(){pt(new nt(wi,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return pI(r,s,t)},"PUBLIC")),pt(new nt("analytics-internal",n,"PRIVATE")),Ye(zu,qu),Ye(zu,qu,"esm2020");function n(e){try{const t=e.getProvider(wi).getImmediate();return{logEvent:(r,s,i)=>yI(t,r,s,i)}}catch(t){throw ze.create("interop-component-reg-failed",{reason:t})}}}_I();const wI={apiKey:"AIzaSyCUn6sq5qode0tO73tfDgXneg03_CobxjI",authDomain:"ride-share-56610.firebaseapp.com",projectId:"ride-share-56610",storageBucket:"ride-share-56610.appspot.com",messagingSenderId:"1074725088115",appId:"1:1074725088115:web:9d53e6c7b24a497cf3b306",measurementId:"G-XN91B7PKY4"},rc=wh(wI),Ut=Cw(rc),Ys=DT(rc);typeof window<"u"&&mI(rc);const Lb=Object.freeze(Object.defineProperty({__proto__:null,auth:Ut,db:Ys},Symbol.toStringTag,{value:"Module"}));class Os{static async signIn(e,t){try{const s=(await d_(Ut,e,t)).user;return await this.getUserProfile(s.uid)}catch(r){throw new Error(this.getErrorMessage(r.code))}}static async register(e,t,r,s,i="renter",a){try{const u=(await h_(Ut,e,t)).user;await m_(u,{displayName:`${r} ${s}`}),await f_(u);const h={uid:u.uid,email:u.email,firstName:r,lastName:s,role:i,phone:a||"",isEmailVerified:!1,createdAt:new Date().toISOString()};return await Lu(Eo(Ys,"users",u.uid),h),h}catch(c){throw new Error(this.getErrorMessage(c.code))}}static async signOut(){try{await w_(Ut)}catch{throw new Error("Failed to sign out")}}static async getCurrentUser(){const e=Ut.currentUser;if(!e)return null;try{return await this.getUserProfile(e.uid)}catch(t){return console.error("Error getting current user:",t),null}}static async getUserProfile(e){try{const t=await KT(Eo(Ys,"users",e));if(!t.exists())throw new Error("User profile not found");return t.data()}catch{throw new Error("Failed to get user profile")}}static async updateUserProfile(e,t){try{await Lu(Eo(Ys,"users",e),t,{merge:!0})}catch{throw new Error("Failed to update user profile")}}static async resetPassword(e){try{await u_(Ut,e)}catch(t){throw new Error(this.getErrorMessage(t.code))}}static onAuthStateChanged(e){return __(Ut,async t=>{if(t)try{const r=await this.getUserProfile(t.uid);e(r)}catch(r){console.error("Error getting user profile:",r),e(null)}else e(null)})}static async getIdToken(){const e=Ut.currentUser;if(!e)return null;try{return await e.getIdToken()}catch(t){return console.error("Error getting ID token:",t),null}}static getErrorMessage(e){return{"auth/user-not-found":"No user found with this email address.","auth/wrong-password":"Incorrect password.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password should be at least 6 characters.","auth/invalid-email":"Invalid email address.","auth/user-disabled":"This account has been disabled.","auth/too-many-requests":"Too many failed attempts. Please try again later.","auth/network-request-failed":"Network error. Please check your connection."}[e]||"An error occurred. Please try again."}}const Zf=H.createContext(void 0),vI=({children:n})=>{const[e,t]=H.useState(null),[r,s]=H.useState(!0);H.useEffect(()=>{i()},[]);const i=async()=>{s(!0);try{return}catch{t(null)}finally{s(!1)}};H.useEffect(()=>{const P=Os.onAuthStateChanged(k=>{t(k?{uid:k.uid,email:k.email,firstName:k.firstName,lastName:k.lastName,role:k.role,phone:k.phone,isEmailVerified:k.isEmailVerified}:null),s(!1)});return()=>P()},[]);const x={user:e,login:async(P,k)=>{const O=await Os.signIn(P,k),F={uid:O.uid,email:O.email,firstName:O.firstName,lastName:O.lastName,role:O.role,phone:O.phone,isEmailVerified:O.isEmailVerified};t(F),localStorage.setItem("userRole",O.role)},register:async P=>{const k=await Os.register(P.email,P.password,P.firstName,P.lastName,P.role,P.phone);t({uid:k.uid,email:k.email,firstName:k.firstName,lastName:k.lastName,role:k.role,phone:k.phone,isEmailVerified:k.isEmailVerified})},adminLogin:async(P,k)=>{try{const O=await Rm.post("/auth/admin-login",{email:P,password:k});if(O.success){const F=O.data;t(F.user),localStorage.setItem("accessToken",F.accessToken),localStorage.setItem("userRole",F.user.role)}else throw new Error("Admin login failed")}catch(O){throw console.error("Admin login error:",O),O}},logout:async()=>{await Os.signOut()},loading:r,isAdmin:()=>(e==null?void 0:e.role)==="admin",isHost:()=>(e==null?void 0:e.role)==="host",isRenter:()=>(e==null?void 0:e.role)==="renter",hasRole:P=>(e==null?void 0:e.role)===P};return f.jsx(Zf.Provider,{value:x,children:n})},TI=H.createContext(void 0),EI=({children:n})=>{const[e,t]=H.useState(!1);H.useEffect(()=>{const i=localStorage.getItem("theme");t(i?i==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches)},[]),H.useEffect(()=>{localStorage.setItem("theme",e?"dark":"light"),e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[e]);const s={isDark:e,toggleTheme:()=>{t(!e)}};return f.jsx(TI.Provider,{value:s,children:n})};function ep(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var s=n.length;for(e=0;e<s;e++)n[e]&&(t=ep(n[e]))&&(r&&(r+=" "),r+=t)}else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function II(){for(var n,e,t=0,r="",s=arguments.length;t<s;t++)(n=arguments[t])&&(e=ep(n))&&(r&&(r+=" "),r+=e);return r}const sc="-",bI=n=>{const e=RI(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:r}=n;return{getClassGroupId:a=>{const c=a.split(sc);return c[0]===""&&c.length!==1&&c.shift(),tp(c,e)||AI(a)},getConflictingClassGroupIds:(a,c)=>{const u=t[a]||[];return c&&r[a]?[...u,...r[a]]:u}}},tp=(n,e)=>{var a;if(n.length===0)return e.classGroupId;const t=n[0],r=e.nextPart.get(t),s=r?tp(n.slice(1),r):void 0;if(s)return s;if(e.validators.length===0)return;const i=n.join(sc);return(a=e.validators.find(({validator:c})=>c(i)))==null?void 0:a.classGroupId},Hu=/^\[(.+)\]$/,AI=n=>{if(Hu.test(n)){const e=Hu.exec(n)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},RI=n=>{const{theme:e,classGroups:t}=n,r={nextPart:new Map,validators:[]};for(const s in t)oa(t[s],r,s,e);return r},oa=(n,e,t,r)=>{n.forEach(s=>{if(typeof s=="string"){const i=s===""?e:Wu(e,s);i.classGroupId=t;return}if(typeof s=="function"){if(SI(s)){oa(s(r),e,t,r);return}e.validators.push({validator:s,classGroupId:t});return}Object.entries(s).forEach(([i,a])=>{oa(a,Wu(e,i),t,r)})})},Wu=(n,e)=>{let t=n;return e.split(sc).forEach(r=>{t.nextPart.has(r)||t.nextPart.set(r,{nextPart:new Map,validators:[]}),t=t.nextPart.get(r)}),t},SI=n=>n.isThemeGetter,xI=n=>{if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,r=new Map;const s=(i,a)=>{t.set(i,a),e++,e>n&&(e=0,r=t,t=new Map)};return{get(i){let a=t.get(i);if(a!==void 0)return a;if((a=r.get(i))!==void 0)return s(i,a),a},set(i,a){t.has(i)?t.set(i,a):s(i,a)}}},aa="!",ca=":",kI=ca.length,CI=n=>{const{prefix:e,experimentalParseClassName:t}=n;let r=s=>{const i=[];let a=0,c=0,u=0,h;for(let x=0;x<s.length;x++){let P=s[x];if(a===0&&c===0){if(P===ca){i.push(s.slice(u,x)),u=x+kI;continue}if(P==="/"){h=x;continue}}P==="["?a++:P==="]"?a--:P==="("?c++:P===")"&&c--}const m=i.length===0?s:s.substring(u),y=PI(m),T=y!==m,S=h&&h>u?h-u:void 0;return{modifiers:i,hasImportantModifier:T,baseClassName:y,maybePostfixModifierPosition:S}};if(e){const s=e+ca,i=r;r=a=>a.startsWith(s)?i(a.substring(s.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:a,maybePostfixModifierPosition:void 0}}if(t){const s=r;r=i=>t({className:i,parseClassName:s})}return r},PI=n=>n.endsWith(aa)?n.substring(0,n.length-1):n.startsWith(aa)?n.substring(1):n,NI=n=>{const e=Object.fromEntries(n.orderSensitiveModifiers.map(r=>[r,!0]));return r=>{if(r.length<=1)return r;const s=[];let i=[];return r.forEach(a=>{a[0]==="["||e[a]?(s.push(...i.sort(),a),i=[]):i.push(a)}),s.push(...i.sort()),s}},VI=n=>({cache:xI(n.cacheSize),parseClassName:CI(n),sortModifiers:NI(n),...bI(n)}),DI=/\s+/,OI=(n,e)=>{const{parseClassName:t,getClassGroupId:r,getConflictingClassGroupIds:s,sortModifiers:i}=e,a=[],c=n.trim().split(DI);let u="";for(let h=c.length-1;h>=0;h-=1){const m=c[h],{isExternal:y,modifiers:T,hasImportantModifier:S,baseClassName:x,maybePostfixModifierPosition:P}=t(m);if(y){u=m+(u.length>0?" "+u:u);continue}let k=!!P,O=r(k?x.substring(0,P):x);if(!O){if(!k){u=m+(u.length>0?" "+u:u);continue}if(O=r(x),!O){u=m+(u.length>0?" "+u:u);continue}k=!1}const F=i(T).join(":"),D=S?F+aa:F,K=D+O;if(a.includes(K))continue;a.push(K);const se=s(O,k);for(let te=0;te<se.length;++te){const v=se[te];a.push(D+v)}u=m+(u.length>0?" "+u:u)}return u};function LI(){let n=0,e,t,r="";for(;n<arguments.length;)(e=arguments[n++])&&(t=np(e))&&(r&&(r+=" "),r+=t);return r}const np=n=>{if(typeof n=="string")return n;let e,t="";for(let r=0;r<n.length;r++)n[r]&&(e=np(n[r]))&&(t&&(t+=" "),t+=e);return t};function MI(n,...e){let t,r,s,i=a;function a(u){const h=e.reduce((m,y)=>y(m),n());return t=VI(h),r=t.cache.get,s=t.cache.set,i=c,c(u)}function c(u){const h=r(u);if(h)return h;const m=OI(u,t);return s(u,m),m}return function(){return i(LI.apply(null,arguments))}}const me=n=>{const e=t=>t[n]||[];return e.isThemeGetter=!0,e},rp=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,sp=/^\((?:(\w[\w-]*):)?(.+)\)$/i,jI=/^\d+\/\d+$/,UI=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,FI=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,$I=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,BI=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,zI=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Un=n=>jI.test(n),Y=n=>!!n&&!Number.isNaN(Number(n)),jt=n=>!!n&&Number.isInteger(Number(n)),Ro=n=>n.endsWith("%")&&Y(n.slice(0,-1)),wt=n=>UI.test(n),qI=()=>!0,HI=n=>FI.test(n)&&!$I.test(n),ip=()=>!1,WI=n=>BI.test(n),GI=n=>zI.test(n),KI=n=>!M(n)&&!j(n),QI=n=>dr(n,cp,ip),M=n=>rp.test(n),dn=n=>dr(n,lp,HI),So=n=>dr(n,eb,Y),Gu=n=>dr(n,op,ip),YI=n=>dr(n,ap,GI),Ls=n=>dr(n,up,WI),j=n=>sp.test(n),Dr=n=>fr(n,lp),JI=n=>fr(n,tb),Ku=n=>fr(n,op),XI=n=>fr(n,cp),ZI=n=>fr(n,ap),Ms=n=>fr(n,up,!0),dr=(n,e,t)=>{const r=rp.exec(n);return r?r[1]?e(r[1]):t(r[2]):!1},fr=(n,e,t=!1)=>{const r=sp.exec(n);return r?r[1]?e(r[1]):t:!1},op=n=>n==="position"||n==="percentage",ap=n=>n==="image"||n==="url",cp=n=>n==="length"||n==="size"||n==="bg-size",lp=n=>n==="length",eb=n=>n==="number",tb=n=>n==="family-name",up=n=>n==="shadow",nb=()=>{const n=me("color"),e=me("font"),t=me("text"),r=me("font-weight"),s=me("tracking"),i=me("leading"),a=me("breakpoint"),c=me("container"),u=me("spacing"),h=me("radius"),m=me("shadow"),y=me("inset-shadow"),T=me("text-shadow"),S=me("drop-shadow"),x=me("blur"),P=me("perspective"),k=me("aspect"),O=me("ease"),F=me("animate"),D=()=>["auto","avoid","all","avoid-page","page","left","right","column"],K=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],se=()=>[...K(),j,M],te=()=>["auto","hidden","clip","visible","scroll"],v=()=>["auto","contain","none"],g=()=>[j,M,u],_=()=>[Un,"full","auto",...g()],I=()=>[jt,"none","subgrid",j,M],E=()=>["auto",{span:["full",jt,j,M]},jt,j,M],b=()=>[jt,"auto",j,M],w=()=>["auto","min","max","fr",j,M],_e=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Le=()=>["start","end","center","stretch","center-safe","end-safe"],Je=()=>["auto",...g()],_t=()=>[Un,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...g()],$=()=>[n,j,M],rn=()=>[...K(),Ku,Gu,{position:[j,M]}],ms=()=>["no-repeat",{repeat:["","x","y","space","round"]}],pr=()=>["auto","cover","contain",XI,QI,{size:[j,M]}],Pn=()=>[Ro,Dr,dn],we=()=>["","none","full",h,j,M],ve=()=>["",Y,Dr,dn],Ct=()=>["solid","dashed","dotted","double"],Nn=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],le=()=>[Y,Ro,Ku,Gu],Vn=()=>["","none",x,j,M],sn=()=>["none",Y,j,M],Dn=()=>["none",Y,j,M],mr=()=>[Y,j,M],on=()=>[Un,"full",...g()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[wt],breakpoint:[wt],color:[qI],container:[wt],"drop-shadow":[wt],ease:["in","out","in-out"],font:[KI],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[wt],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[wt],shadow:[wt],spacing:["px",Y],text:[wt],"text-shadow":[wt],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Un,M,j,k]}],container:["container"],columns:[{columns:[Y,M,j,c]}],"break-after":[{"break-after":D()}],"break-before":[{"break-before":D()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:se()}],overflow:[{overflow:te()}],"overflow-x":[{"overflow-x":te()}],"overflow-y":[{"overflow-y":te()}],overscroll:[{overscroll:v()}],"overscroll-x":[{"overscroll-x":v()}],"overscroll-y":[{"overscroll-y":v()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:_()}],"inset-x":[{"inset-x":_()}],"inset-y":[{"inset-y":_()}],start:[{start:_()}],end:[{end:_()}],top:[{top:_()}],right:[{right:_()}],bottom:[{bottom:_()}],left:[{left:_()}],visibility:["visible","invisible","collapse"],z:[{z:[jt,"auto",j,M]}],basis:[{basis:[Un,"full","auto",c,...g()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Y,Un,"auto","initial","none",M]}],grow:[{grow:["",Y,j,M]}],shrink:[{shrink:["",Y,j,M]}],order:[{order:[jt,"first","last","none",j,M]}],"grid-cols":[{"grid-cols":I()}],"col-start-end":[{col:E()}],"col-start":[{"col-start":b()}],"col-end":[{"col-end":b()}],"grid-rows":[{"grid-rows":I()}],"row-start-end":[{row:E()}],"row-start":[{"row-start":b()}],"row-end":[{"row-end":b()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":w()}],"auto-rows":[{"auto-rows":w()}],gap:[{gap:g()}],"gap-x":[{"gap-x":g()}],"gap-y":[{"gap-y":g()}],"justify-content":[{justify:[..._e(),"normal"]}],"justify-items":[{"justify-items":[...Le(),"normal"]}],"justify-self":[{"justify-self":["auto",...Le()]}],"align-content":[{content:["normal",..._e()]}],"align-items":[{items:[...Le(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Le(),{baseline:["","last"]}]}],"place-content":[{"place-content":_e()}],"place-items":[{"place-items":[...Le(),"baseline"]}],"place-self":[{"place-self":["auto",...Le()]}],p:[{p:g()}],px:[{px:g()}],py:[{py:g()}],ps:[{ps:g()}],pe:[{pe:g()}],pt:[{pt:g()}],pr:[{pr:g()}],pb:[{pb:g()}],pl:[{pl:g()}],m:[{m:Je()}],mx:[{mx:Je()}],my:[{my:Je()}],ms:[{ms:Je()}],me:[{me:Je()}],mt:[{mt:Je()}],mr:[{mr:Je()}],mb:[{mb:Je()}],ml:[{ml:Je()}],"space-x":[{"space-x":g()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":g()}],"space-y-reverse":["space-y-reverse"],size:[{size:_t()}],w:[{w:[c,"screen",..._t()]}],"min-w":[{"min-w":[c,"screen","none",..._t()]}],"max-w":[{"max-w":[c,"screen","none","prose",{screen:[a]},..._t()]}],h:[{h:["screen","lh",..._t()]}],"min-h":[{"min-h":["screen","lh","none",..._t()]}],"max-h":[{"max-h":["screen","lh",..._t()]}],"font-size":[{text:["base",t,Dr,dn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,j,So]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Ro,M]}],"font-family":[{font:[JI,M,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[s,j,M]}],"line-clamp":[{"line-clamp":[Y,"none",j,So]}],leading:[{leading:[i,...g()]}],"list-image":[{"list-image":["none",j,M]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",j,M]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:$()}],"text-color":[{text:$()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Ct(),"wavy"]}],"text-decoration-thickness":[{decoration:[Y,"from-font","auto",j,dn]}],"text-decoration-color":[{decoration:$()}],"underline-offset":[{"underline-offset":[Y,"auto",j,M]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:g()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",j,M]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",j,M]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:rn()}],"bg-repeat":[{bg:ms()}],"bg-size":[{bg:pr()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},jt,j,M],radial:["",j,M],conic:[jt,j,M]},ZI,YI]}],"bg-color":[{bg:$()}],"gradient-from-pos":[{from:Pn()}],"gradient-via-pos":[{via:Pn()}],"gradient-to-pos":[{to:Pn()}],"gradient-from":[{from:$()}],"gradient-via":[{via:$()}],"gradient-to":[{to:$()}],rounded:[{rounded:we()}],"rounded-s":[{"rounded-s":we()}],"rounded-e":[{"rounded-e":we()}],"rounded-t":[{"rounded-t":we()}],"rounded-r":[{"rounded-r":we()}],"rounded-b":[{"rounded-b":we()}],"rounded-l":[{"rounded-l":we()}],"rounded-ss":[{"rounded-ss":we()}],"rounded-se":[{"rounded-se":we()}],"rounded-ee":[{"rounded-ee":we()}],"rounded-es":[{"rounded-es":we()}],"rounded-tl":[{"rounded-tl":we()}],"rounded-tr":[{"rounded-tr":we()}],"rounded-br":[{"rounded-br":we()}],"rounded-bl":[{"rounded-bl":we()}],"border-w":[{border:ve()}],"border-w-x":[{"border-x":ve()}],"border-w-y":[{"border-y":ve()}],"border-w-s":[{"border-s":ve()}],"border-w-e":[{"border-e":ve()}],"border-w-t":[{"border-t":ve()}],"border-w-r":[{"border-r":ve()}],"border-w-b":[{"border-b":ve()}],"border-w-l":[{"border-l":ve()}],"divide-x":[{"divide-x":ve()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ve()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Ct(),"hidden","none"]}],"divide-style":[{divide:[...Ct(),"hidden","none"]}],"border-color":[{border:$()}],"border-color-x":[{"border-x":$()}],"border-color-y":[{"border-y":$()}],"border-color-s":[{"border-s":$()}],"border-color-e":[{"border-e":$()}],"border-color-t":[{"border-t":$()}],"border-color-r":[{"border-r":$()}],"border-color-b":[{"border-b":$()}],"border-color-l":[{"border-l":$()}],"divide-color":[{divide:$()}],"outline-style":[{outline:[...Ct(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Y,j,M]}],"outline-w":[{outline:["",Y,Dr,dn]}],"outline-color":[{outline:$()}],shadow:[{shadow:["","none",m,Ms,Ls]}],"shadow-color":[{shadow:$()}],"inset-shadow":[{"inset-shadow":["none",y,Ms,Ls]}],"inset-shadow-color":[{"inset-shadow":$()}],"ring-w":[{ring:ve()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:$()}],"ring-offset-w":[{"ring-offset":[Y,dn]}],"ring-offset-color":[{"ring-offset":$()}],"inset-ring-w":[{"inset-ring":ve()}],"inset-ring-color":[{"inset-ring":$()}],"text-shadow":[{"text-shadow":["none",T,Ms,Ls]}],"text-shadow-color":[{"text-shadow":$()}],opacity:[{opacity:[Y,j,M]}],"mix-blend":[{"mix-blend":[...Nn(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Nn()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Y]}],"mask-image-linear-from-pos":[{"mask-linear-from":le()}],"mask-image-linear-to-pos":[{"mask-linear-to":le()}],"mask-image-linear-from-color":[{"mask-linear-from":$()}],"mask-image-linear-to-color":[{"mask-linear-to":$()}],"mask-image-t-from-pos":[{"mask-t-from":le()}],"mask-image-t-to-pos":[{"mask-t-to":le()}],"mask-image-t-from-color":[{"mask-t-from":$()}],"mask-image-t-to-color":[{"mask-t-to":$()}],"mask-image-r-from-pos":[{"mask-r-from":le()}],"mask-image-r-to-pos":[{"mask-r-to":le()}],"mask-image-r-from-color":[{"mask-r-from":$()}],"mask-image-r-to-color":[{"mask-r-to":$()}],"mask-image-b-from-pos":[{"mask-b-from":le()}],"mask-image-b-to-pos":[{"mask-b-to":le()}],"mask-image-b-from-color":[{"mask-b-from":$()}],"mask-image-b-to-color":[{"mask-b-to":$()}],"mask-image-l-from-pos":[{"mask-l-from":le()}],"mask-image-l-to-pos":[{"mask-l-to":le()}],"mask-image-l-from-color":[{"mask-l-from":$()}],"mask-image-l-to-color":[{"mask-l-to":$()}],"mask-image-x-from-pos":[{"mask-x-from":le()}],"mask-image-x-to-pos":[{"mask-x-to":le()}],"mask-image-x-from-color":[{"mask-x-from":$()}],"mask-image-x-to-color":[{"mask-x-to":$()}],"mask-image-y-from-pos":[{"mask-y-from":le()}],"mask-image-y-to-pos":[{"mask-y-to":le()}],"mask-image-y-from-color":[{"mask-y-from":$()}],"mask-image-y-to-color":[{"mask-y-to":$()}],"mask-image-radial":[{"mask-radial":[j,M]}],"mask-image-radial-from-pos":[{"mask-radial-from":le()}],"mask-image-radial-to-pos":[{"mask-radial-to":le()}],"mask-image-radial-from-color":[{"mask-radial-from":$()}],"mask-image-radial-to-color":[{"mask-radial-to":$()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":K()}],"mask-image-conic-pos":[{"mask-conic":[Y]}],"mask-image-conic-from-pos":[{"mask-conic-from":le()}],"mask-image-conic-to-pos":[{"mask-conic-to":le()}],"mask-image-conic-from-color":[{"mask-conic-from":$()}],"mask-image-conic-to-color":[{"mask-conic-to":$()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:rn()}],"mask-repeat":[{mask:ms()}],"mask-size":[{mask:pr()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",j,M]}],filter:[{filter:["","none",j,M]}],blur:[{blur:Vn()}],brightness:[{brightness:[Y,j,M]}],contrast:[{contrast:[Y,j,M]}],"drop-shadow":[{"drop-shadow":["","none",S,Ms,Ls]}],"drop-shadow-color":[{"drop-shadow":$()}],grayscale:[{grayscale:["",Y,j,M]}],"hue-rotate":[{"hue-rotate":[Y,j,M]}],invert:[{invert:["",Y,j,M]}],saturate:[{saturate:[Y,j,M]}],sepia:[{sepia:["",Y,j,M]}],"backdrop-filter":[{"backdrop-filter":["","none",j,M]}],"backdrop-blur":[{"backdrop-blur":Vn()}],"backdrop-brightness":[{"backdrop-brightness":[Y,j,M]}],"backdrop-contrast":[{"backdrop-contrast":[Y,j,M]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Y,j,M]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Y,j,M]}],"backdrop-invert":[{"backdrop-invert":["",Y,j,M]}],"backdrop-opacity":[{"backdrop-opacity":[Y,j,M]}],"backdrop-saturate":[{"backdrop-saturate":[Y,j,M]}],"backdrop-sepia":[{"backdrop-sepia":["",Y,j,M]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":g()}],"border-spacing-x":[{"border-spacing-x":g()}],"border-spacing-y":[{"border-spacing-y":g()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",j,M]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Y,"initial",j,M]}],ease:[{ease:["linear","initial",O,j,M]}],delay:[{delay:[Y,j,M]}],animate:[{animate:["none",F,j,M]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[P,j,M]}],"perspective-origin":[{"perspective-origin":se()}],rotate:[{rotate:sn()}],"rotate-x":[{"rotate-x":sn()}],"rotate-y":[{"rotate-y":sn()}],"rotate-z":[{"rotate-z":sn()}],scale:[{scale:Dn()}],"scale-x":[{"scale-x":Dn()}],"scale-y":[{"scale-y":Dn()}],"scale-z":[{"scale-z":Dn()}],"scale-3d":["scale-3d"],skew:[{skew:mr()}],"skew-x":[{"skew-x":mr()}],"skew-y":[{"skew-y":mr()}],transform:[{transform:[j,M,"","none","gpu","cpu"]}],"transform-origin":[{origin:se()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:on()}],"translate-x":[{"translate-x":on()}],"translate-y":[{"translate-y":on()}],"translate-z":[{"translate-z":on()}],"translate-none":["translate-none"],accent:[{accent:$()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:$()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",j,M]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":g()}],"scroll-mx":[{"scroll-mx":g()}],"scroll-my":[{"scroll-my":g()}],"scroll-ms":[{"scroll-ms":g()}],"scroll-me":[{"scroll-me":g()}],"scroll-mt":[{"scroll-mt":g()}],"scroll-mr":[{"scroll-mr":g()}],"scroll-mb":[{"scroll-mb":g()}],"scroll-ml":[{"scroll-ml":g()}],"scroll-p":[{"scroll-p":g()}],"scroll-px":[{"scroll-px":g()}],"scroll-py":[{"scroll-py":g()}],"scroll-ps":[{"scroll-ps":g()}],"scroll-pe":[{"scroll-pe":g()}],"scroll-pt":[{"scroll-pt":g()}],"scroll-pr":[{"scroll-pr":g()}],"scroll-pb":[{"scroll-pb":g()}],"scroll-pl":[{"scroll-pl":g()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",j,M]}],fill:[{fill:["none",...$()]}],"stroke-w":[{stroke:[Y,Dr,dn,So]}],stroke:[{stroke:["none",...$()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},rb=MI(nb);function qn(...n){return rb(II(n))}const sb=(n,e)=>{switch(e.type){case"ADD_TOAST":return{...n,toasts:[...n.toasts,e.payload]};case"REMOVE_TOAST":return{...n,toasts:n.toasts.filter(t=>t.id!==e.payload)};case"CLEAR_TOASTS":return{...n,toasts:[]};default:return n}},hp=H.createContext(void 0),ic=()=>{const n=H.useContext(hp);if(!n)throw new Error("useToast must be used within a ToastProvider");return n},ib=({children:n})=>{const[e,t]=H.useReducer(sb,{toasts:[]}),r=a=>{const c=Math.random().toString(36).substr(2,9);t({type:"ADD_TOAST",payload:{...a,id:c}})},s=a=>{t({type:"REMOVE_TOAST",payload:a})},i=()=>{t({type:"CLEAR_TOASTS"})};return f.jsxs(hp.Provider,{value:{toasts:e.toasts,addToast:r,removeToast:s,clearToasts:i},children:[n,f.jsx(ob,{})]})},ob=()=>{const{toasts:n}=ic();return Yu.createPortal(f.jsx("div",{className:"fixed top-4 right-4 z-50 space-y-2",children:n.map(e=>f.jsx(ab,{toast:e},e.id))}),document.body)},ab=({toast:n})=>{const{removeToast:e}=ic();H.useEffect(()=>{if(n.duration!==0){const s=setTimeout(()=>{e(n.id)},n.duration||5e3);return()=>clearTimeout(s)}},[n.id,n.duration,e]);const t=()=>{switch(n.type){case"success":return f.jsx("svg",{className:"h-5 w-5 text-green-400",fill:"currentColor",viewBox:"0 0 20 20",children:f.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})});case"error":return f.jsx("svg",{className:"h-5 w-5 text-red-400",fill:"currentColor",viewBox:"0 0 20 20",children:f.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})});case"warning":return f.jsx("svg",{className:"h-5 w-5 text-yellow-400",fill:"currentColor",viewBox:"0 0 20 20",children:f.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})});case"info":return f.jsx("svg",{className:"h-5 w-5 text-blue-400",fill:"currentColor",viewBox:"0 0 20 20",children:f.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})})}},r=()=>{switch(n.type){case"success":return"bg-green-50 border-green-200 text-green-800";case"error":return"bg-red-50 border-red-200 text-red-800";case"warning":return"bg-yellow-50 border-yellow-200 text-yellow-800";case"info":return"bg-blue-50 border-blue-200 text-blue-800"}};return f.jsx("div",{className:qn("max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden border",r()),role:"alert","aria-live":"assertive",children:f.jsx("div",{className:"p-4",children:f.jsxs("div",{className:"flex items-start",children:[f.jsx("div",{className:"flex-shrink-0",children:t()}),f.jsxs("div",{className:"ml-3 w-0 flex-1",children:[f.jsx("p",{className:"text-sm font-medium",children:n.title}),n.message&&f.jsx("p",{className:"mt-1 text-sm opacity-90",children:n.message}),n.action&&f.jsx("div",{className:"mt-2",children:f.jsx("button",{onClick:n.action.onClick,className:"text-sm font-medium underline hover:no-underline",children:n.action.label})})]}),f.jsx("div",{className:"ml-4 flex-shrink-0 flex",children:f.jsxs("button",{onClick:()=>e(n.id),className:"rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[f.jsx("span",{className:"sr-only",children:"Close"}),f.jsx("svg",{className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:f.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})]})})})},Mb=()=>{const{addToast:n}=ic();return{success:(e,t)=>n({type:"success",title:e,message:t}),error:(e,t)=>n({type:"error",title:e,message:t}),warning:(e,t)=>n({type:"warning",title:e,message:t}),info:(e,t)=>n({type:"info",title:e,message:t})}},dp=()=>{const n=H.useContext(Zf);if(n===void 0)throw new Error("useAuth must be used within an AuthProvider");return n},Ce=({name:n,size:e="md",className:t=""})=>{const r={sm:"w-4 h-4",md:"w-5 h-5",lg:"w-6 h-6"},s={Home:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})}),Search:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),Car:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7v8a2 2 0 002 2h4a2 2 0 002-2V7M8 7a2 2 0 00-2 2v6a2 2 0 002 2M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2m-6 0h6"})}),Info:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),Phone:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})}),User:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),Logout:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})}),Login:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"})}),Plus:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v16m8-8H4"})}),Menu:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})}),Sun:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}),Moon:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})}),CheckCircle:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),XCircle:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),AlertTriangle:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z"})}),Clock:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),FileText:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),CreditCard:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"})}),DollarSign:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"})}),MapPin:f.jsxs("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]}),Star:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"currentColor",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"})}),Mail:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),Lock:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),Shield:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})}),BarChart:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})}),TrendingUp:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"})}),Upload:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})}),Download:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),Edit:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})}),Trash:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})}),Heart:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"currentColor",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})}),Calendar:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})}),Clipboard:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})}),Users:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"})}),Gift:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"})}),Calculator:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"})}),Bell:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 17h5l-5 5v-5zM4.828 7l2.586 2.586a2 2 0 002.828 0L12.828 7H4.828zM4 12h16M4 16h16M4 20h16"})}),Scale:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l-2.83 2.83M6 7l2.83 2.83m6.17-2.83l-3 9m3-9l3 1m-3-1l-2.83 2.83M18 7l2.83 2.83M18 7l-3 9m3-9l3 1m-3-1l-2.83 2.83"})}),Settings:f.jsxs("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),Play:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"currentColor",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z"})}),Pause:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"currentColor",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),Zap:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),Eye:f.jsxs("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}),Motorcycle:f.jsx("svg",{className:`${r[e]} ${t}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"})})};return f.jsx(f.Fragment,{children:s[n]||null})},cb=()=>{const[n,e]=H.useState(!1),[t,r]=H.useState([{id:"1",text:"Hi! I'm your RideShare SA assistant. How can I help you today?",isUser:!1,timestamp:new Date,type:"text"}]),[s,i]=H.useState(""),[a,c]=H.useState(!1),[u,h]=H.useState({conversationHistory:[],userPreferences:{}}),m=H.useRef(null),y=[{keywords:["hello","hi","hey","good morning","good afternoon","good evening"],synonyms:["greetings","salutations","howdy"],response:"Hello! Welcome to RideShare SA! I'm here to help you with bookings, listings, and any questions you might have. What can I assist you with today?",followUp:["How do I book a vehicle?","How do I list my car?","What are your prices?"],priority:1},{keywords:["book","rent","reserve","hire","rental"],synonyms:["reservation","booking","renting","hiring"],response:`Great! To book a vehicle:

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

What specific issue can I help you with?`,followUp:["How do I contact support?","What are your hours?","Can you escalate my issue?"],priority:4}],T=()=>{var D;(D=m.current)==null||D.scrollIntoView({behavior:"smooth"})};H.useEffect(()=>{T()},[t]);const S=H.useCallback(D=>{const K=D.toLowerCase(),se=K.split(/\s+/);let te=null,v=0;for(const g of y){let _=0;for(const I of g.keywords)K.includes(I)&&(_+=2);for(const I of g.synonyms)K.includes(I)&&(_+=1.5);for(const I of se)for(const E of g.keywords)(E.includes(I)||I.includes(E))&&(_+=.5);_*=1+g.priority*.1,_>v&&(v=_,te=g)}return v>1?te:null},[]),x=H.useCallback(D=>{const K=S(D);return K?(h(v=>({...v,lastIntent:K.keywords[0],conversationHistory:[...v.conversationHistory.slice(-4),D]})),{response:K.response,followUp:K.followUp}):u.conversationHistory.slice(-3).some(v=>v.toLowerCase().includes("book")||v.toLowerCase().includes("rent"))?{response:`I see you're interested in booking!

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

What would you like to know more about?`,followUp:["How do I book a vehicle?","How do I list my car?","What are your prices?","Is it safe?"]}},[S,u.conversationHistory]),P=async D=>{const K=D||s.trim();if(!K)return;const se={id:Date.now().toString(),text:K,isUser:!0,timestamp:new Date,type:"text"};r(v=>[...v,se]),i(""),c(!0);const te=800+Math.random()*1200;setTimeout(()=>{const v=x(K),g={id:(Date.now()+1).toString(),text:v.response,isUser:!1,timestamp:new Date,type:"text"};r(_=>[..._,g]),c(!1)},te)},k=D=>{D.key==="Enter"&&!D.shiftKey&&(D.preventDefault(),P())},O=[{text:"How do I book a vehicle?",icon:"Car"},{text:"How do I list my car?",icon:"DollarSign"},{text:"What are your prices?",icon:"DollarSign"},{text:"Is it safe?",icon:"Shield"},{text:"Contact support",icon:"Phone"}],F=D=>{P(D)};return f.jsxs(f.Fragment,{children:[f.jsx(He.button,{onClick:()=>e(!n),className:"fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-full shadow-2xl z-50 transition-all duration-300 hover:shadow-blue-500/25",whileHover:{scale:1.1,rotate:5},whileTap:{scale:.95},"aria-label":"Open chat",children:f.jsxs("div",{className:"relative",children:[f.jsx(nl,{mode:"wait",children:n?f.jsx(He.svg,{initial:{rotate:-90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:90,opacity:0},className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})},"close"):f.jsx(He.svg,{initial:{rotate:90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:-90,opacity:0},className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})},"chat")}),!n&&f.jsx(He.div,{initial:{scale:0},animate:{scale:1},className:"absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"})]})}),f.jsx(nl,{children:n&&f.jsxs(He.div,{initial:{opacity:0,y:20,scale:.8},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:20,scale:.8},transition:{duration:.3,type:"spring",damping:25,stiffness:500},className:"fixed bottom-24 right-6 w-96 h-[500px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 flex flex-col backdrop-blur-sm bg-white/95 dark:bg-gray-900/95",children:[f.jsxs("div",{className:"bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl flex items-center justify-between",children:[f.jsxs("div",{className:"flex items-center",children:[f.jsx("div",{className:"w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3 backdrop-blur-sm",children:f.jsx("span",{className:"text-lg",children:"🤖"})}),f.jsxs("div",{children:[f.jsx("h3",{className:"font-bold text-lg",children:"RideShare Assistant"}),f.jsxs("div",{className:"flex items-center",children:[f.jsx("div",{className:"w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"}),f.jsx("p",{className:"text-sm text-blue-100",children:"Online now"})]})]})]}),f.jsxs("div",{className:"flex items-center space-x-2",children:[f.jsx(He.button,{onClick:()=>{r([{id:"1",text:"Hi! I'm your RideShare SA assistant. How can I help you today?",isUser:!1,timestamp:new Date,type:"text"}]),h({conversationHistory:[],userPreferences:{}})},className:"text-white hover:text-blue-200 transition-colors p-2 rounded-lg hover:bg-white/10",title:"Start new conversation",whileHover:{scale:1.1},whileTap:{scale:.9},children:f.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})})}),f.jsx(He.button,{onClick:()=>e(!1),className:"text-white hover:text-blue-200 transition-colors p-2 rounded-lg hover:bg-white/10",whileHover:{scale:1.1},whileTap:{scale:.9},children:f.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]})]}),f.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-800",children:[t.map(D=>f.jsx(He.div,{initial:{opacity:0,y:10,scale:.95},animate:{opacity:1,y:0,scale:1},transition:{duration:.2},className:`flex ${D.isUser?"justify-end":"justify-start"}`,children:f.jsxs("div",{className:`flex items-end space-x-2 ${D.isUser?"flex-row-reverse space-x-reverse":""}`,children:[!D.isUser&&f.jsx("div",{className:"w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold",children:"🤖"}),f.jsxs("div",{className:`max-w-xs px-4 py-3 rounded-2xl shadow-sm ${D.isUser?"bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-md":"bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 rounded-bl-md"}`,children:[f.jsx("div",{className:"text-sm whitespace-pre-line leading-relaxed",children:D.text}),f.jsx("p",{className:`text-xs mt-2 ${D.isUser?"text-blue-100":"text-gray-500 dark:text-gray-400"}`,children:D.timestamp.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]}),D.isUser&&f.jsx("div",{className:"w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold",children:f.jsx(Ce,{name:"User",size:"sm"})})]})},D.id)),a&&f.jsx(He.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:"flex justify-start",children:f.jsxs("div",{className:"flex items-end space-x-2",children:[f.jsx("div",{className:"w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold",children:"🤖"}),f.jsx("div",{className:"bg-white dark:bg-gray-700 px-4 py-3 rounded-2xl rounded-bl-md border border-gray-200 dark:border-gray-600 shadow-sm",children:f.jsxs("div",{className:"flex items-center space-x-2",children:[f.jsxs("div",{className:"flex space-x-1",children:[f.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full animate-bounce"}),f.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full animate-bounce",style:{animationDelay:"0.1s"}}),f.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full animate-bounce",style:{animationDelay:"0.2s"}})]}),f.jsx("span",{className:"text-xs text-gray-500 dark:text-gray-400",children:"RideShare Assistant is typing..."})]})})]})}),f.jsx("div",{ref:m})]}),t.length===1&&f.jsxs("div",{className:"px-4 pb-2 bg-gray-50 dark:bg-gray-800",children:[f.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mb-3 font-medium",children:"Quick questions:"}),f.jsx("div",{className:"flex flex-wrap gap-2",children:O.map((D,K)=>f.jsxs(He.button,{onClick:()=>F(D.text),className:"text-xs bg-white dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600 px-3 py-2 rounded-full transition-all duration-200 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-gray-500 flex items-center space-x-1 shadow-sm hover:shadow-md",whileHover:{scale:1.05},whileTap:{scale:.95},children:[f.jsx(Ce,{name:D.icon,size:"sm"}),f.jsx("span",{children:D.text})]},K))})]}),f.jsx("div",{className:"p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900",children:f.jsxs("div",{className:"flex space-x-3",children:[f.jsxs("div",{className:"flex-1 relative",children:[f.jsx("input",{type:"text",value:s,onChange:D=>i(D.target.value),onKeyPress:k,placeholder:"Type your message...",className:"w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white text-sm placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 shadow-sm focus:shadow-md"}),s&&f.jsx(He.div,{initial:{scale:0},animate:{scale:1},className:"absolute right-3 top-1/2 transform -translate-y-1/2",children:f.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"})})]}),f.jsx(He.button,{onClick:()=>P(),disabled:!s.trim()||a,className:"bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed text-white px-4 py-3 rounded-2xl transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl disabled:shadow-none",whileHover:{scale:s.trim()&&!a?1.05:1},whileTap:{scale:s.trim()&&!a?.95:1},children:a?f.jsx("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"}):f.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 19l9 2-9-18-9 18 9-2zm0 0v-8"})})})]})})]})})]})},lb=({userId:n,className:e=""})=>{const[t,r]=H.useState([]),[s,i]=H.useState(!1),[a,c]=H.useState(0);H.useEffect(()=>{u();const x=setInterval(u,3e4);return()=>clearInterval(x)},[n]);const u=async()=>{try{const x=localStorage.getItem("authToken"),P=await fetch(`/api/notifications/${n}`,{headers:{Authorization:`Bearer ${x}`,"Content-Type":"application/json"}});if(P.ok){const k=await P.json();r(k.notifications||[]),c(k.unreadCount||0)}}catch(x){console.error("Error fetching notifications:",x),r([{id:"1",type:"approval",title:"Account Approved!",message:"Your account has been verified and approved. You can now make bookings on RideShare SA.",timestamp:new Date(Date.now()-1e3*60*30),read:!1,actionUrl:"/dashboard",actionText:"Go to Dashboard"},{id:"2",type:"rejection",title:"Document Rejected",message:"Your driver's license was rejected. Please upload a clearer photo and resubmit.",timestamp:new Date(Date.now()-1e3*60*60*2),read:!1,actionUrl:"/dashboard/documents",actionText:"Resubmit Documents"},{id:"3",type:"approval",title:"Vehicle Listing Approved",message:"Your 2020 Toyota Corolla listing has been approved and is now live on the marketplace.",timestamp:new Date(Date.now()-1e3*60*60*24),read:!0,actionUrl:"/dashboard/host",actionText:"View Listing"}]),c(2)}},h=async x=>{try{const P=localStorage.getItem("authToken");await fetch(`/api/notifications/${x}/read`,{method:"POST",headers:{Authorization:`Bearer ${P}`,"Content-Type":"application/json"}}),r(k=>k.map(O=>O.id===x?{...O,read:!0}:O)),c(k=>Math.max(0,k-1))}catch(P){console.error("Error marking notification as read:",P)}},m=async()=>{try{const x=localStorage.getItem("authToken");await fetch(`/api/notifications/${n}/read-all`,{method:"POST",headers:{Authorization:`Bearer ${x}`,"Content-Type":"application/json"}}),r(P=>P.map(k=>({...k,read:!0}))),c(0)}catch(x){console.error("Error marking all notifications as read:",x)}},y=x=>{switch(x){case"approval":return"CheckCircle";case"rejection":return"XCircle";case"info":return"Info";default:return"Bell"}},T=x=>{switch(x){case"approval":return"text-green-400";case"rejection":return"text-red-400";case"info":return"text-blue-400";default:return"text-white"}},S=x=>{const k=new Date().getTime()-x.getTime(),O=Math.floor(k/(1e3*60)),F=Math.floor(k/(1e3*60*60)),D=Math.floor(k/(1e3*60*60*24));return O<60?`${O}m ago`:F<24?`${F}h ago`:`${D}d ago`};return f.jsxs("div",{className:`relative ${e}`,children:[f.jsxs("button",{onClick:()=>i(!s),className:"relative p-2 glass-button hover:bg-white/20 transition-all duration-300",title:"Notifications",children:[f.jsx("svg",{className:"w-5 h-5 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 00-15 0v5h5l-5 5-5-5h5v-5a7.5 7.5 0 0115 0v5z"})}),a>0&&f.jsx("span",{className:"absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center",children:a>9?"9+":a})]}),s&&f.jsxs("div",{className:"absolute right-0 top-full mt-2 w-80 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl z-50",children:[f.jsx("div",{className:"p-4 border-b border-white/20",children:f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("h3",{className:"text-lg font-semibold text-white",children:"Notifications"}),a>0&&f.jsx("button",{onClick:m,className:"text-xs text-blue-400 hover:text-blue-300 transition-colors",children:"Mark all as read"})]})}),f.jsx("div",{className:"max-h-96 overflow-y-auto",children:t.length===0?f.jsxs("div",{className:"p-4 text-center text-white/70",children:[f.jsx("div",{className:"mb-2",children:f.jsx(Ce,{name:"Bell",size:"lg",className:"text-white/50 mx-auto"})}),f.jsx("p",{children:"No notifications yet"})]}):t.map(x=>f.jsx("div",{className:`p-4 border-b border-white/10 hover:bg-white/5 transition-colors ${x.read?"":"bg-white/5"}`,onClick:()=>{x.read||h(x.id),x.actionUrl&&(window.location.href=x.actionUrl)},children:f.jsxs("div",{className:"flex items-start space-x-3",children:[f.jsx(Ce,{name:y(x.type),size:"lg"}),f.jsxs("div",{className:"flex-1 min-w-0",children:[f.jsxs("div",{className:"flex items-center justify-between mb-1",children:[f.jsx("h4",{className:`text-sm font-medium ${T(x.type)}`,children:x.title}),f.jsxs("div",{className:"flex items-center space-x-2",children:[f.jsx("span",{className:"text-xs text-white/60",children:S(x.timestamp)}),!x.read&&f.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full"})]})]}),f.jsx("p",{className:"text-sm text-white/80 mb-2",children:x.message}),x.actionText&&f.jsxs("button",{className:"text-xs text-blue-400 hover:text-blue-300 transition-colors",children:[x.actionText," →"]})]})]})},x.id))}),t.length>0&&f.jsx("div",{className:"p-4 border-t border-white/20",children:f.jsx("button",{className:"w-full text-center text-sm text-white/70 hover:text-white transition-colors",children:"View all notifications"})})]})]})},Xe=({children:n})=>{const{user:e,logout:t}=dp(),[r,s]=H.useState(!1),i=Ju(),a=u=>i.pathname===u,c=[{name:"Home",path:"/",icon:"Home"},{name:"Browse",path:"/search",icon:"Search"},{name:"Host",path:"/dashboard/host",icon:"Car"},{name:"About",path:"/about",icon:"Info"},{name:"Contact",path:"/contact",icon:"Phone"}];return f.jsxs("div",{className:"min-h-screen",children:[f.jsx("header",{className:"fixed top-4 left-0 right-0 z-50 w-full px-4",children:f.jsxs("div",{className:"flex items-center max-w-6xl mx-auto h-16",children:[f.jsx(je,{to:"/",className:"flex items-center hover:opacity-80 transition-all duration-300 h-full",children:f.jsx("div",{className:"flex items-center bg-gray-700 rounded-full h-full px-8 shadow-lg",children:f.jsx("img",{src:"/logo.png",alt:"RideShare SA Logo",className:"h-8 w-auto"})})}),f.jsx("nav",{className:"flex items-center absolute left-1/2 transform -translate-x-1/2",children:f.jsxs("div",{className:"bg-white/25 backdrop-blur-md border border-white/20 rounded-full shadow-xl px-4 py-2",children:[f.jsxs("div",{className:"flex items-center justify-center h-[40px] px-4",children:[f.jsx("div",{className:"hidden md:flex items-center space-x-1",children:c.map(u=>f.jsxs(je,{to:u.path,className:`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${a(u.path)?"glass-button-primary text-white":"glass-button text-white/80 hover:text-white"}`,children:[f.jsx(Ce,{name:u.icon,size:"sm"}),f.jsx("span",{children:u.name})]},u.path))}),f.jsxs("div",{className:"flex items-center space-x-1 ml-3",children:[e&&e.id&&f.jsx(lb,{userId:e.id.toString()}),e?f.jsxs("div",{className:"flex items-center space-x-1",children:[f.jsxs(je,{to:"/dashboard",className:`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${a("/dashboard")||i.pathname.startsWith("/dashboard")?"glass-button-primary text-white":"glass-button text-white/80 hover:text-white"}`,children:[f.jsx(Ce,{name:"User",size:"sm"}),f.jsx("span",{className:"hidden sm:block",children:"Dashboard"})]}),f.jsxs("button",{onClick:t,className:"glass-button flex items-center space-x-1 px-2.5 py-1.5 text-white/80 hover:text-white transition-all duration-300",children:[f.jsx(Ce,{name:"Logout",size:"sm"}),f.jsx("span",{className:"hidden sm:block",children:"Logout"})]})]}):f.jsxs("div",{className:"flex items-center space-x-1",children:[f.jsxs(je,{to:"/login",className:`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${a("/login")?"glass-button-primary text-white":"glass-button text-white/80 hover:text-white"}`,children:[f.jsx(Ce,{name:"Login",size:"sm"}),f.jsx("span",{className:"hidden sm:block",children:"Login"})]}),f.jsxs(je,{to:"/register",className:"btn-primary flex items-center space-x-1 px-3 py-1.5",children:[f.jsx(Ce,{name:"Plus",size:"sm"}),f.jsx("span",{className:"hidden sm:block",children:"Sign Up"})]})]}),f.jsx("button",{onClick:()=>s(!r),className:"md:hidden glass-button p-1.5 text-white/80 hover:text-white transition-all duration-300",children:f.jsx(Ce,{name:"Menu",size:"sm"})})]})]}),r&&f.jsx("div",{className:"md:hidden absolute top-full left-0 right-0 mt-2 bg-white/25 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl px-4 py-4 min-w-max",children:f.jsxs("div",{className:"space-y-2",children:[c.map(u=>f.jsxs(je,{to:u.path,onClick:()=>s(!1),className:`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${a(u.path)?"glass-button-primary text-white":"glass-button text-white/80 hover:text-white"}`,children:[f.jsx(Ce,{name:u.icon,size:"sm"}),f.jsx("span",{children:u.name})]},u.path)),e?f.jsxs(f.Fragment,{children:[f.jsxs(je,{to:"/dashboard",onClick:()=>s(!1),className:`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${a("/dashboard")||i.pathname.startsWith("/dashboard")?"glass-button-primary text-white":"glass-button text-white/80 hover:text-white"}`,children:[f.jsx(Ce,{name:"User",size:"sm"}),f.jsx("span",{children:"Dashboard"})]}),f.jsxs("button",{onClick:()=>{t(),s(!1)},className:"glass-button flex items-center space-x-3 w-full px-4 py-3 text-white/80 hover:text-white transition-all duration-300 whitespace-nowrap",children:[f.jsx(Ce,{name:"Logout",size:"sm"}),f.jsx("span",{children:"Logout"})]})]}):f.jsxs(f.Fragment,{children:[f.jsxs(je,{to:"/login",onClick:()=>s(!1),className:`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${a("/login")?"glass-button-primary text-white":"glass-button text-white/80 hover:text-white"}`,children:[f.jsx(Ce,{name:"Login",size:"sm"}),f.jsx("span",{children:"Login"})]}),f.jsxs(je,{to:"/register",onClick:()=>s(!1),className:"btn-primary flex items-center space-x-3 px-4 py-3 whitespace-nowrap",children:[f.jsx(Ce,{name:"Plus",size:"sm"}),f.jsx("span",{children:"Sign Up"})]})]})]})})]})})]})}),f.jsx("main",{className:"pt-20",children:n}),f.jsx("footer",{className:"bg-black/50 backdrop-blur-sm border-t border-white/10 py-4",children:f.jsx("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:f.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0",children:[f.jsxs("div",{className:"flex items-center space-x-4",children:[f.jsx("div",{className:"logo-footer",children:f.jsx("img",{src:"/logo.png",alt:"RideShare SA Logo",className:"h-8 w-auto"})}),f.jsx("p",{className:"text-gray-400 text-xs",children:"© 2024 RideShare SA. Cape Town, South Africa"})]}),f.jsxs("div",{className:"flex items-center space-x-6",children:[f.jsx(je,{to:"/",className:"text-gray-400 hover:text-white transition-colors text-xs",children:"Home"}),f.jsx(je,{to:"/search",className:"text-gray-400 hover:text-white transition-colors text-xs",children:"Browse"}),f.jsx(je,{to:"/about",className:"text-gray-400 hover:text-white transition-colors text-xs",children:"About"}),f.jsx(je,{to:"/contact",className:"text-gray-400 hover:text-white transition-colors text-xs",children:"Contact"})]}),f.jsxs("div",{className:"flex items-center space-x-4",children:[f.jsx("a",{href:"#",className:"text-gray-400 hover:text-white transition-colors","aria-label":"Facebook",children:f.jsx("svg",{className:"h-4 w-4",fill:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})}),f.jsx("a",{href:"#",className:"text-gray-400 hover:text-white transition-colors","aria-label":"Twitter",children:f.jsx("svg",{className:"h-4 w-4",fill:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{d:"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"})})}),f.jsx("a",{href:"#",className:"text-gray-400 hover:text-white transition-colors","aria-label":"LinkedIn",children:f.jsx("svg",{className:"h-4 w-4",fill:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),f.jsxs(je,{to:"/admin-login",className:"text-gray-400 hover:text-white transition-colors text-xs flex items-center space-x-1",title:"Admin Access",children:[f.jsx(Ce,{name:"User",size:"sm"}),f.jsx("span",{children:"Admin"})]})]})]})})}),f.jsx(cb,{})]})},ub=({children:n,requiredRole:e,allowedRoles:t})=>{const{user:r,loading:s}=dp(),i=Ju();return s?f.jsx("div",{className:"min-h-screen flex items-center justify-center",children:f.jsx("div",{className:"animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"})}):r?e&&r.role!==e?f.jsx(io,{to:"/unauthorized",replace:!0}):t&&!t.includes(r.role)?f.jsx(io,{to:"/unauthorized",replace:!0}):f.jsx(f.Fragment,{children:n}):f.jsx(io,{to:"/login",state:{from:i},replace:!0})},Qu={sm:"h-4 w-4",md:"h-8 w-8",lg:"h-12 w-12"},hb=({size:n="md",variant:e="spinner",className:t,text:r})=>{const s=()=>f.jsxs("svg",{className:qn("animate-spin",Qu[n],t),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[f.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),f.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),i=()=>f.jsx("div",{className:qn("flex space-x-1",t),children:[0,1,2].map(h=>f.jsx("div",{className:qn("rounded-full bg-current animate-pulse",n==="sm"?"h-2 w-2":n==="md"?"h-3 w-3":"h-4 w-4"),style:{animationDelay:`${h*.2}s`,animationDuration:"1s"}},h))}),a=()=>f.jsx("div",{className:qn("rounded-full bg-current animate-pulse",Qu[n],t)}),c=()=>f.jsxs("div",{className:qn("animate-pulse",t),children:[f.jsx("div",{className:"h-4 bg-gray-200 rounded w-3/4 mb-2"}),f.jsx("div",{className:"h-4 bg-gray-200 rounded w-1/2"})]}),u=()=>{switch(e){case"dots":return i();case"pulse":return a();case"skeleton":return c();default:return s()}};return f.jsxs("div",{className:"flex flex-col items-center justify-center space-y-2",children:[u(),r&&f.jsx("p",{className:"text-sm text-gray-500 animate-pulse",children:r})]})},db=({text:n="Loading..."})=>f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm",children:f.jsxs("div",{className:"text-center",children:[f.jsx(hb,{size:"lg"}),f.jsx("p",{className:"mt-4 text-lg text-gray-600",children:n})]})});class fb extends H.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error("ErrorBoundary caught an error:",e,t),console.log("Error reported to monitoring service")}render(){return this.state.hasError?this.props.fallback||f.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:f.jsxs("div",{className:"text-center p-8",children:[f.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Oops! Something went wrong"}),f.jsx("p",{className:"text-gray-600 mb-6",children:"We're sorry, but something unexpected happened. Please try refreshing the page."}),f.jsx("button",{onClick:()=>window.location.reload(),className:"bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors",children:"Refresh Page"})]})}):this.props.children}}const pb=H.lazy(()=>qe(()=>import("./Home-CRCYFL0z.js"),__vite__mapDeps([0,1,2,3,4,5]))),mb=H.lazy(()=>qe(()=>import("./Search-msaeISHe.js"),__vite__mapDeps([6,1,2,3,7,8,4,9,10,5]))),gb=H.lazy(()=>qe(()=>import("./VehicleDetail-Dpe2Bf_q.js"),__vite__mapDeps([11,1,2,8,3,5]))),yb=H.lazy(()=>qe(()=>import("./About-C-hRmis6.js"),__vite__mapDeps([12,1,2,3,7,8,5]))),_b=H.lazy(()=>qe(()=>import("./Contact-DrxhPKWy.js"),__vite__mapDeps([13,1,2,3,5]))),wb=H.lazy(()=>qe(()=>import("./Dashboard-DnVwaBc4.js"),__vite__mapDeps([14,1,2,3,9,5]))),vb=H.lazy(()=>qe(()=>import("./Login-CuWoZNBH.js"),__vite__mapDeps([15,1,2,3,16,9,10,5]))),Tb=H.lazy(()=>qe(()=>import("./Register-CAo4f7BI.js"),__vite__mapDeps([17,1,2,3,16,9,10,5]))),Eb=H.lazy(()=>qe(()=>import("./AdminLogin-B6wIB_TL.js"),__vite__mapDeps([18,1,2,3,4,5]))),Ib=H.lazy(()=>qe(()=>import("./FAQ-CF86RBZ6.js"),__vite__mapDeps([19,1,2,3,5]))),bb=H.lazy(()=>qe(()=>import("./SetupAdmin-D9t7ZU65.js"),__vite__mapDeps([20,1,2,3,5]))),Ab=H.lazy(()=>qe(()=>import("./Unauthorized-ChESoKZR.js"),__vite__mapDeps([21,1,2,3]))),Rb=H.lazy(()=>qe(()=>import("./NotFound-B9JScyaF.js"),__vite__mapDeps([22,1,2,3]))),Sb=new Bp({defaultOptions:{queries:{staleTime:5*60*1e3,gcTime:10*60*1e3,retry:3,refetchOnWindowFocus:!1}}});function xb(){return H.useEffect(()=>{const n=t=>{if(t.message&&t.message.includes("message channel closed"))return t.preventDefault(),console.warn("Suppressed message channel error (likely from browser extension):",t.message),!1},e=t=>{if(t.reason&&t.reason.message&&t.reason.message.includes("message channel closed"))return t.preventDefault(),console.warn("Suppressed message channel promise rejection (likely from browser extension):",t.reason.message),!1};return window.addEventListener("error",n),window.addEventListener("unhandledrejection",e),()=>{window.removeEventListener("error",n),window.removeEventListener("unhandledrejection",e)}},[]),f.jsx(sh,{children:f.jsx(zp,{client:Sb,children:f.jsx(ib,{children:f.jsx(fb,{children:f.jsx(qp,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:f.jsx(vI,{children:f.jsx(EI,{children:f.jsx("div",{className:"App",children:f.jsx(H.Suspense,{fallback:f.jsx(db,{text:"Loading RideShare SA..."}),children:f.jsxs(Hp,{children:[f.jsx(Be,{path:"/",element:f.jsx(Xe,{children:f.jsx(pb,{})})}),f.jsx(Be,{path:"/search",element:f.jsx(Xe,{children:f.jsx(mb,{})})}),f.jsx(Be,{path:"/vehicle/:id",element:f.jsx(Xe,{children:f.jsx(gb,{})})}),f.jsx(Be,{path:"/about",element:f.jsx(Xe,{children:f.jsx(yb,{})})}),f.jsx(Be,{path:"/contact",element:f.jsx(Xe,{children:f.jsx(_b,{})})}),f.jsx(Be,{path:"/faq",element:f.jsx(Xe,{children:f.jsx(Ib,{})})}),f.jsx(Be,{path:"/dashboard/*",element:f.jsx(ub,{children:f.jsx(Xe,{children:f.jsx(wb,{})})})}),f.jsx(Be,{path:"/login",element:f.jsx(Xe,{children:f.jsx(vb,{})})}),f.jsx(Be,{path:"/register",element:f.jsx(Xe,{children:f.jsx(Tb,{})})}),f.jsx(Be,{path:"/admin-login",element:f.jsx(Eb,{})}),f.jsx(Be,{path:"/setup-admin",element:f.jsx(bb,{})}),f.jsx(Be,{path:"/unauthorized",element:f.jsx(Xe,{children:f.jsx(Ab,{})})}),f.jsx(Be,{path:"*",element:f.jsx(Xe,{children:f.jsx(Rb,{})})})]})})})})})})})})})})}ko.createRoot(document.getElementById("root")).render(f.jsx(vt.StrictMode,{children:f.jsx(xb,{})}));export{Db as H,Ce as I,qe as _,Rm as a,II as b,qn as c,Ut as d,h_ as e,m_ as f,w_ as g,Mb as h,Lu as i,Eo as j,Ys as k,Lb as l,__ as o,d_ as s,dp as u};
