import{a as L,i as l,S as C}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();function g(e){const t=w(e);a.galleryContainer.insertAdjacentHTML("beforeend",t)}function b({webformatURL:e,largeImageURL:t,tags:s,likes:n,views:r,comments:o,downloads:i}){return`<li class="gallery-item">
            <a class="gallery-link" href="${t}">
              <img
                class="gallery-image"
                src="${e}"
                alt="${s}"
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
                  <span>${r}</span>
                </div>
              </li>
              <li>
                <div class="data-item">
                  <span class="image-property">Comments</span>
                  <span>${o}</span>
                </div>
              </li>
              <li>
                <div class="data-item">
                  <span class="image-property">Downloads</span>
                  <span>${i}</span>
              </div>
              </li>
            </ul>
          </li>`}function w(e){return e.map(b).join("")}async function u(e){const t="https://pixabay.com",s="/api/",n="42099926-52a1046a87902a6e56a7e135a",r=`${t}${s}`,o={params:{key:n,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:d,per_page:p}};try{return(await L.get(r,o)).data}catch(i){throw l.error({title:"Error",titleColor:"#FFFFFF",message:"An error occurred while fetching data. Please try again.",position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#FF6347",iconUrl:null}),console.error("Error fetching data:",i),i}}const a={formSearch:document.querySelector(".form-inline"),galleryContainer:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".button"),firstGalleryItem:document.querySelector(".gallery-item")};let c="igor",m=0,p=15,d=1;a.formSearch.addEventListener("submit",S);const F=new C(".gallery a",{});async function S(e){if(e.preventDefault(),c=e.target.elements.query.value.trim(),!c){l.warning({title:"Caution",titleColor:"#FFFFFF",message:"Please enter text to search",position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#4169E1",iconUrl:null});return}a.galleryContainer.innerHTML="",h(),d=1;try{const t=await u(c);m=t.totalHits,Array.isArray(t.hits)&&t.hits.length>0?(g(t.hits),F.refresh()):l.warning({titleColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again.",messageSize:"16px",position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#EF4040",iconUrl:null})}catch(t){console.error("Error fetching data:",t),l.error({title:"Error",titleColor:"#FFFFFF",message:"An error occurred while fetching data. Please try again.",position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#FF6347",iconUrl:null})}finally{e.target.reset(),y(),f()}}a.btnLoadMore.addEventListener("click",P);async function P(){h(),d+=1;try{const e=await u(c);g(e.hits),F.refresh()}catch{throw console.error("Error fetching data:",error),error}finally{f(),y();const e=M();window.scrollBy({top:e*2,behavior:"smooth"})}}function f(){Math.ceil(m/p)<=d?(E(),l.warning({titleColor:"#FFFFFF",message:"We're sorry, but you've reached the end of search results.",messageSize:"16px",position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#EF4040",iconUrl:null})):v()}function h(){a.loader.classList.remove("hidden")}function v(){a.btnLoadMore.classList.remove("hidden")}function E(){a.btnLoadMore.classList.add("hidden")}function y(){a.loader.classList.add("hidden")}function M(){if(a.firstGalleryItem){const{height:e}=a.firstGalleryItem.getBoundingClientRect();return e}return 0}
//# sourceMappingURL=commonHelpers.js.map
