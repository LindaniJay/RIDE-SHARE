import{j as h}from"./query-CSyQ0w5Y.js";const w=({children:e,className:d="",variant:a="card",blur:r="md",opacity:t=.1,shadow:b=!0})=>{const o=`
    ${(()=>{switch(a){case"card":return"bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10";case"modal":return"bg-white/15 dark:bg-white/8 backdrop-blur-lg border border-white/30 dark:border-white/15";case"nav":return"bg-white/5 dark:bg-white/3 backdrop-blur-sm border-b border-white/10 dark:border-white/5";case"form":return"bg-white/8 dark:bg-white/4 backdrop-blur-md border border-white/15 dark:border-white/8";case"sidebar":return"bg-white/6 dark:bg-white/3 backdrop-blur-md border-r border-white/10 dark:border-white/5";default:return"bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10"}})()}
    ${b?"shadow-xl shadow-black/10 dark:shadow-black/20":""}
    transition-all duration-300 ease-in-out
    hover:bg-white/15 dark:hover:bg-white/8
    hover:shadow-2xl hover:shadow-black/15 dark:hover:shadow-black/25
  `;return h.jsx("div",{className:`${o} ${d}`,style:{backdropFilter:`blur(${r==="sm"?"4px":r==="md"?"8px":r==="lg"?"12px":"16px"})`,backgroundColor:`rgba(255, 255, 255, ${t})`},children:e})};export{w as G};
