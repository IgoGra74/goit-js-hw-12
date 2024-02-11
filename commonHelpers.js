import{S as L,i as l,a as C}from"./assets/vendor-527658dd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const a={formSearch:document.querySelector(".form-inline"),galleryContainer:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".button"),firstGalleryItem:document.querySelector(".gallery-item")};let c="igor",d=1,g=15,u=0;a.formSearch.addEventListener("submit",b);const m=new L(".gallery a",{});async function b(r){if(r.preventDefault(),c=r.target.elements.query.value.trim(),!c){l.warning({title:"Caution",titleColor:"#FFFFFF",message:"Please enter text to search",position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#4169E1",iconUrl:null});return}a.galleryContainer.innerHTML="",h(),d=1;try{const e=await p(c);u=e.totalHits,Array.isArray(e.hits)&&e.hits.length>0?(F(e.hits),m.refresh()):l.warning({titleColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again.",messageSize:"16px",position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#EF4040",iconUrl:null})}catch(e){console.error("Error fetching data:",e),l.error({title:"Error",titleColor:"#FFFFFF",message:"An error occurred while fetching data. Please try again.",position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#FF6347",iconUrl:null})}finally{r.target.reset(),y(),f()}}async function p(r){const e="https://pixabay.com",n="/api/",s="42099926-52a1046a87902a6e56a7e135a",t=`${e}${n}`,o={params:{key:s,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:d,per_page:g}};try{return(await C.get(t,o)).data}catch(i){throw l.error({title:"Error",titleColor:"#FFFFFF",message:"An error occurred while fetching data. Please try again.",position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#FF6347",iconUrl:null}),console.error("Error fetching data:",i),i}}a.btnLoadMore.addEventListener("click",S);async function S(){h(),d+=1;const r=await p(c);F(r.hits),f(),y(),m.refresh();const e=M();window.scrollBy({top:e*2,behavior:"smooth"})}function w({webformatURL:r,largeImageURL:e,tags:n,likes:s,views:t,comments:o,downloads:i}){return`<li class="gallery-item">
            <a class="gallery-link" href="${e}">
              <img
                class="gallery-image"
                src="${r}"
                alt="${n}"
              />
            </a>
            <ul class="data-image">
              <li>
                <div class="data-item">
                  <span class="image-property">Likes</span>
                  <span>${s}</span>
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
          </li>`}function P(r){return r.map(w).join("")}function F(r){const e=P(r);a.galleryContainer.insertAdjacentHTML("beforeend",e)}function f(){Math.ceil(u/g)<=d?(E(),l.warning({titleColor:"#FFFFFF",message:"We're sorry, but you've reached the end of search results.",messageSize:"16px",position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#EF4040",iconUrl:null})):v()}function h(){a.loader.classList.remove("hidden")}function v(){a.btnLoadMore.classList.remove("hidden")}function E(){a.btnLoadMore.classList.add("hidden")}function y(){a.loader.classList.add("hidden")}function M(){if(a.firstGalleryItem){const{height:r}=a.firstGalleryItem.getBoundingClientRect();return r}return 0}
//# sourceMappingURL=commonHelpers.js.map
