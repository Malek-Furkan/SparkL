"use strict";(self.webpackChunkmovieo=self.webpackChunkmovieo||[]).push([[216],{232:(e,a,t)=>{t.d(a,{A:()=>c});var l=t(178),s=t.n(l),r=(t(43),t(3)),i=t(475),d=t(579);const c=e=>{var a;let{data:t,trending:l,index:c,media_type:n}=e;const o=(0,r.d4)((e=>e.movieoData.imageURL)),h=null!==(a=t.media_type)&&void 0!==a?a:n;return(0,d.jsxs)(i.N_,{to:"/"+h+"/"+t.id,className:"w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden block rounded relative hover:scale-105 transition-all",children:[(0,d.jsx)("img",{src:null!==t&&void 0!==t&&t.poster_path?o+t.poster_path:"/path-to-placeholder.jpg",alt:(null===t||void 0===t?void 0:t.title)||(null===t||void 0===t?void 0:t.name)||"No Title Available"}),(0,d.jsx)("div",{className:"trend absolute top-4",children:l&&(0,d.jsxs)("div",{className:"py-1 px-4 backdrop-blur-3xl rounded-r-full bg-black/60 overflow-hidden",children:["#",c,"Trending"]})}),(0,d.jsxs)("div",{className:"absolute bottom-0 h-16 backdrop-blur-3xl w-full bg-black/50 p-2",children:[(0,d.jsx)("h2",{className:"text-ellipsis line-clamp-1 text-lg font-semibold whiteText",children:t.title||t.name}),(0,d.jsxs)("div",{className:"text-sm text-neutral-400 flex justify-between items-center",children:[(0,d.jsx)("p",{className:"whiteText",children:t.release_date?s()(t.release_date).format("MMMM Do YYYY"):"No Release Date"}),(0,d.jsxs)("p",{className:"px-1 bg-black rounded-full text-xs text-white whiteText",children:["Rating: ",t.vote_average?Number(t.vote_average).toFixed(1):"N/A"]})]})]})]})}},835:(e,a,t)=>{t.r(a),t.d(a,{default:()=>c});var l=t(43),s=t(216),r=t(213),i=t(232),d=t(579);const c=()=>{const e=(0,s.zy)(),a=(0,s.Zp)(),[t,c]=(0,l.useState)([]),[n,o]=(0,l.useState)(!1),[h,x]=(0,l.useState)(null),[u,p]=(0,l.useState)(new URLSearchParams(e.search).get("q")||""),m=(0,l.useCallback)((async()=>{if(u){o(!0),x(null);try{const e=await r.A.get("/search/multi",{params:{query:u,page:1}});c(e.data.results)}catch(h){x("Error fetching search data."),console.error("Error fetching search data:",h)}finally{o(!1)}}}),[u]);(0,l.useEffect)((()=>{m()}),[m]);return(0,d.jsxs)("div",{className:"py-16",children:[(0,d.jsx)("div",{className:"lg:hidden mx-1 my-2 sticky top-[70px] z-30",children:(0,d.jsx)("input",{type:"text",placeholder:"Search here...",value:u,onChange:e=>{const t=e.target.value;p(t),a(`/search?q=${t}`)},className:"px-4 py-1 bg-white text-lg w-full rounded-full text-neutral-900"})}),(0,d.jsxs)("div",{className:"container mx-auto",children:[(0,d.jsx)("h3",{className:"capitalize text-lg lg:text-xl font-semibold my-3",children:"Search Results"}),n&&(0,d.jsx)("p",{children:"Loading..."}),h&&(0,d.jsx)("p",{className:"text-red-500",children:h}),(0,d.jsx)("div",{className:"grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start",children:t.map((e=>(0,d.jsx)(i.A,{data:e,media_type:e.media_type},e.id+"search")))})]})]})}}}]);
//# sourceMappingURL=216.e8a65b57.chunk.js.map