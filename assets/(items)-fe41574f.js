import{n as a,k as c,g as d,i as u,t as m,o as f,b as o,O as g}from"./entry-client-80f95fb5.js";import{a as x,g as s,b as v}from"./utils-de294324.js";const w=m('<div p="5 xl:10" class="box mx-auto flex flex-col-reverse xl:grid xl:grid-cols-[1fr_auto]"><div id="newsContent"></div></div>',4);function p(r){return a(()=>{const e=document.getElementById("newsContent")?.querySelectorAll("img");e&&e.forEach((l,i)=>{i!=0&&l.setAttribute("loading","lazy")});const n=()=>s("newsContent");window.addEventListener("scroll",n),f(()=>window.removeEventListener("scroll",n))}),c(()=>{setTimeout(()=>{x(),s("newsContent"),v()},50)}),(()=>{const t=d(w),e=t.firstChild;return u(e,()=>r.children),t})()}function E(){return o(p,{get children(){return o(g,{})}})}export{E as default};