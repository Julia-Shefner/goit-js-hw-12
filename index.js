import{a as v,S as b,i as n}from"./assets/vendor-BNibzuFn.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const w="52500093-745b03fff18f695149292f5ed";async function f(o,t=1){return(await v.get("https://pixabay.com/api/",{params:{key:w,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const m=document.querySelector(".gallery"),h=document.querySelector(".loader"),u=document.querySelector(".load-btn"),B=new b(".gallery-item a",{captions:!0,captionsData:"alt",captionDelay:250});function p(o){const t=o.map(({webformatURL:s,largeImageURL:c,tags:e,likes:r,views:a,comments:y,downloads:L})=>`
  <li class='gallery-item'>
  <a class='gallery-link' href='${c}'>
    <img class='gallery-image' src='${s}' alt='${e}'/>
  </a>
  <div class='gallery-info'>
    <div class='info-item'>
      <h3>Likes</h3>
      <p>${r}</p>
    </div>
    <div class='info-item'>
      <h3>Views</h3>
      <p>${a}</p>
    </div>
    <div class='info-item'>
      <h3>Comments</h3>
      <p>${y}</p>
    </div>
    <div class='info-item'>
      <h3>Downloads</h3>
      <p>${L}</p>
    </div>
  </div>
</li>
  `).join("");m.insertAdjacentHTML("beforeend",t),B.refresh()}function S(){m.innerHTML=""}function q(){h.classList.remove("hidden")}function $(){h.classList.add("hidden")}function M(){u.classList.remove("hidden")}function P(){u.classList.add("hidden")}const g=document.querySelector(".form");let i=1,l="";const O=15;let d=0;g.addEventListener("submit",R);u.addEventListener("click",x);async function R(o){if(o.preventDefault(),l=o.target.elements["search-text"].value.trim(),i=1,!l.length){n.error({position:"topRight",progressBar:!1,timeout:3e3,message:"Sorry, you need to put key for search!"});return}S(),q();try{const t=await f(l,i);if(!t.hits.length){n.error({position:"topRight",progressBar:!1,timeout:3e3,message:"Sorry, there are no images matching your search query. Please try again!"});return}p(t.hits),d=Math.ceil(t.totalHits/O),i<d&&M()}catch(t){n.error({position:"topRight",progressBar:!1,timeout:3e3,message:`${t.message}`})}finally{$()}g.reset()}async function x(){i+=1;try{const o=await f(l,i);p(o.hits);const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"}),i>=d&&(P(),n.info({position:"topRight",progressBar:!1,timeout:3e3,message:"We're sorry, but you've reached the end of search results"}))}catch(o){n.error({position:"topRight",progressBar:!1,timeout:3e3,message:`${o.message}`})}}
//# sourceMappingURL=index.js.map
