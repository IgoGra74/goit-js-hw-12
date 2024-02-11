import{S as b,i as l,a as C}from"./assets/vendor-527658dd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const a={formSearch:document.querySelector(".form-inline"),galleryContainer:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".button"),firstGalleryItem:document.querySelector(".gallery-item")};let c="igor",d=1,u=15,g=0;a.formSearch.addEventListener("submit",P);const m=new b(".gallery a",{});async function P(r){if(r.preventDefault(),c=r.target.elements.query.value.trim(),!c){l.warning({title:"Caution",titleColor:"#FFFFFF",message:"Please enter text to search",position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#4169E1",iconUrl:null});return}a.galleryContainer.innerHTML="",y(),d=1;try{const e=await p(c);g=e.totalHits,Array.isArray(e.hits)&&e.hits.length>0?(h(e.hits),m.refresh()):l.warning({titleColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again.",messageSize:"16px",position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#EF4040",iconUrl:null})}catch(e){console.error("Error fetching data:",e),l.error({title:"Error",titleColor:"#FFFFFF",message:"An error occurred while fetching data. Please try again.",position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#FF6347",iconUrl:null})}finally{r.target.reset(),L(),F()}}async function p(r){const e="https://pixabay.com",s="/api/",n="42099926-52a1046a87902a6e56a7e135a",t=`${e}${s}`,o={params:{key:n,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:d,per_page:u}};try{return(await C.get(t,o)).data}catch(i){throw l.error({title:"Error",titleColor:"#FFFFFF",message:"An error occurred while fetching data. Please try again.",position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#FF6347",iconUrl:null}),console.error("Error fetching data:",i),i}}a.btnLoadMore.addEventListener("click",f);a.btnLoadMore.addEventListener("click",f);async function f(){y(),d+=1;const r=await p(c);h(r.hits),F(),L(),m.refresh();const e=M();window.scrollBy({top:e*2,behavior:"smooth"})}function S({webformatURL:r,largeImageURL:e,tags:s,likes:n,views:t,comments:o,downloads:i}){return`<li class="gallery-item">
            <a class="gallery-link" href="${e}">
              <img
                class="gallery-image"
                src="${r}"
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
                  <span>${t}</span>
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
          </li>`}function v(r){return r.map(S).join("")}function h(r){const e=v(r);a.galleryContainer.insertAdjacentHTML("beforeend",e)}function F(){Math.ceil(g/u)<=d?E():w()}function y(){a.loader.classList.remove("hidden")}function w(){a.btnLoadMore.classList.remove("hidden")}function E(){a.btnLoadMore.classList.add("hidden")}function L(){a.loader.classList.add("hidden")}function M(){if(a.firstGalleryItem){const{height:r}=a.firstGalleryItem.getBoundingClientRect();return r}return 0}
//# sourceMappingURL=commonHelpers.js.map
