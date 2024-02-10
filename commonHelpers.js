import{S as h,i as l,a as y}from"./assets/vendor-527658dd.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const s={formSearch:document.querySelector(".form-inline"),galleryContainer:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".button")};let c=1,d=15,u=0;s.formSearch.addEventListener("submit",b);const L=new h(".gallery a",{});async function b(t){t.preventDefault();const a=t.target.elements.query.value.trim();if(!a){l.warning({title:"Caution",titleColor:"#FFFFFF",message:"Please enter text to search",position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#4169E1",iconUrl:null});return}s.galleryContainer.innerHTML="",F();try{const o=await g(a);u=o.totalHits,Array.isArray(o.hits)&&o.hits.length>0&&o.total>0?(p(o.hits),L.refresh()):l.warning({titleColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again.",messageSize:"16px",position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#EF4040",iconUrl:null})}catch(o){console.error("Error fetching data:",o),l.error({title:"Error",titleColor:"#FFFFFF",message:"An error occurred while fetching data. Please try again.",position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#FF6347",iconUrl:null})}finally{t.target.reset(),m(),f()}}async function g(t){const a="https://pixabay.com",o="/api",n="42099926-52a1046a87902a6e56a7e135a",e=`${a}${o}`,r={params:{key:n,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:c,per_page:d}};try{return(await y.get(e,r)).data}catch(i){throw l.error({title:"Error",titleColor:"#FFFFFF",message:"An error occurred while fetching data. Please try again.",position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#FF6347",iconUrl:null}),console.error("Error fetching data:",i),i}}s.btnLoadMore.addEventListener("click",C);async function C(){c+=1,F();const t=await g(query);p(t.hits),m(),f()}function P({webformatURL:t,largeImageURL:a,tags:o,likes:n,views:e,comments:r,downloads:i}){return` <li class="gallery-item">
          <a class="gallery-link" href="${a}">
            <img
              class="gallery-image"
              src="${t}"
              alt="${o}"
            />
          </a>
          <ul class="data-image">
            <li>
              <div class="data-item">
                <span class="image-property">Likes</span>
                <span>${n}</span>
              </div>
            </li>
            <li>
              <div class="data-item">
                <span class="image-property">Views</span>
                <span>${e}</span>
              </div>
            </li>
            <li>
              <div class="data-item">
                <span class="image-property">Comments</span>
                <span>${r}</span>
              </div>
            </li>
            <li>
              <div class="data-item">
                <span class="image-property">Downloads</span>
                <span>${i}</span>
             </div>
</li>
          </ul>
        </li>`}function S(t){return t.map(P).join("")}function p(t){const a=S(t);s.galleryContainer.insertAdjacentHTML("beforeend",a)}function m(){Math.ceil(u/d)<=c?s.btnLoadMore.classList.add("hidden"):s.btnLoadMore.classList.remove("hidden")}function F(){s.loader.classList.remove("hidden"),s.btnLoadMore.classList.add("hidden")}function f(){s.loader.classList.add("hidden"),s.btnLoadMore.classList.remove("hidden")}
//# sourceMappingURL=commonHelpers.js.map
