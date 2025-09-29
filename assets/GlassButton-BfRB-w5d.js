import{j as e}from"./query-CSyQ0w5Y.js";const c=({label:i,error:t,icon:r,variant:s="default",className:a="",...d})=>{const o=()=>{switch(s){case"search":return"bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 focus:border-white/40 dark:focus:border-white/20";case"password":return"bg-white/8 dark:bg-white/4 backdrop-blur-md border border-white/15 dark:border-white/8 focus:border-white/30 dark:focus:border-white/15";default:return"bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 focus:border-white/40 dark:focus:border-white/20"}};return e.jsxs("div",{className:"space-y-2",children:[i&&e.jsx("label",{className:"block text-sm font-medium text-white dark:text-white",children:i}),e.jsxs("div",{className:"relative",children:[r&&e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:e.jsx("span",{className:"text-white/60 dark:text-white/40",children:r})}),e.jsx("input",{className:`
            w-full px-4 py-3 rounded-xl text-white placeholder-white/50 dark:placeholder-white/40
            focus:outline-none focus:ring-2 focus:ring-white/20 dark:focus:ring-white/10
            transition-all duration-300 ease-in-out
            ${r?"pl-10":""}
            ${o()}
            ${t?"border-red-400 dark:border-red-500":""}
            ${a}
          `,...d})]}),t&&e.jsx("p",{className:"text-red-400 dark:text-red-500 text-sm",children:t})]})},u=({variant:i="primary",size:t="md",icon:r,loading:s=!1,gradient:a=!1,className:d="",children:o,disabled:h,...n})=>{const b=()=>{switch(i){case"primary":return a?"bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 text-white border border-white/30":"bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/20 text-white border border-white/30";case"secondary":return"bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 text-white border border-white/20";case"outline":return"bg-transparent hover:bg-white/10 dark:hover:bg-white/5 text-white border border-white/30 hover:border-white/50";case"ghost":return"bg-transparent hover:bg-white/10 dark:hover:bg-white/5 text-white border-none";default:return"bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/20 text-white border border-white/30"}},l=()=>{switch(t){case"sm":return"px-3 py-2 text-sm";case"md":return"px-4 py-3 text-base";case"lg":return"px-6 py-4 text-lg";default:return"px-4 py-3 text-base"}};return e.jsxs("button",{className:`
        inline-flex items-center justify-center rounded-xl font-medium
        backdrop-blur-md transition-all duration-300 ease-in-out
        hover:scale-105 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-white/20 dark:focus:ring-white/10
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        ${b()}
        ${l()}
        ${d}
      `,disabled:h||s,...n,children:[s?e.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-white mr-2"}):r?e.jsx("span",{className:"mr-2",children:r}):null,o]})};export{c as G,u as a};
