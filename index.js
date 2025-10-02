import{a as L,S as v,i as n}from"./assets/vendor-BNibzuFn.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const b="52500093-745b03fff18f695149292f5ed";async function u(o,t=1){return(await L.get("https://pixabay.com/api/",{params:{key:b,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),d=document.querySelector(".load-btn"),B=new v(".gallery-item a",{captions:!0,captionsData:"alt",captionDelay:250});function h(o){const t=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:r,views:a,comments:g,downloads:y})=>`
  <li class='gallery-item'>
  <a class='gallery-link' href='${i}'>
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
      <p>${g}</p>
    </div>
    <div class='info-item'>
      <h3>Downloads</h3>
      <p>${y}</p>
    </div>
  </div>
</li>
  `).join("");f.insertAdjacentHTML("beforeend",t),B.refresh()}function S(){f.innerHTML=""}function w(){m.classList.remove("hidden")}function q(){m.classList.add("hidden")}function P(){d.classList.remove("hidden")}function $(){d.classList.add("hidden")}const p=document.querySelector(".form");let c=1,l="";p.addEventListener("submit",M);d.addEventListener("click",O);function M(o){if(o.preventDefault(),l=o.target.elements["search-text"].value.trim(),c=1,!l.length){n.error({position:"topRight",progressBar:!1,timeout:3e3,message:"Sorry, you need to put key for search!"});return}S(),w(),u(l,c).then(t=>{t.hits.length||n.error({position:"topRight",progressBar:!1,timeout:3e3,message:"Sorry, there are no images matching your search query. Please try again!"}),h(t.hits),P()}).catch(t=>{n.error({position:"topRight",progressBar:!1,timeout:3e3,message:`${t.message}`})}).finally(()=>{q()}),p.reset()}async function O(){c+=1;try{const o=await u(l,c);h(o.hits);const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"});const e=Math.ceil(o.totalHits/15);c>=e&&($(),n.info({position:"topRight",progressBar:!1,timeout:3e3,message:"We're sorry, but you've reached the end of search results"}))}catch(o){n.error({position:"topRight",progressBar:!1,timeout:3e3,message:`${o.message}`})}}
//# sourceMappingURL=index.js.map
