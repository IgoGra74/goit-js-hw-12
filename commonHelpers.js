import{S as u,i as n,a as p}from"./assets/vendor-527658dd.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const g=document.querySelector(".form-inline"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");g.addEventListener("submit",d);const m=new u(".gallery a",{});async function d(t){t.preventDefault();const o=t.target.elements.query.value.trim();if(!o){n.warning({title:"Caution",titleColor:"#FFFFFF",message:"Please enter text to search",position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#4169E1",iconUrl:null});return}c.innerHTML="",l.style.display="block";try{const a=await F(o);Array.isArray(a.hits)&&a.hits.length>0&&a.total>0?(h(a.hits),m.refresh()):n.warning({titleColor:"#FFFFFF",message:"Sorry, there are no images matching your search query. Please try again.",messageSize:"16px",position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#EF4040",iconUrl:null})}catch(a){console.error("Error fetching data:",a),n.error({title:"Error",titleColor:"#FFFFFF",message:"An error occurred while fetching data. Please try again.",position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#FF6347",iconUrl:null})}finally{t.target.reset(),l.style.display="none"}}async function F(t){const o="https://pixabay.com",a="/api/",s=`?key=42099926-52a1046a87902a6e56a7e135a&q=${t}&image_type=photo&orientation=horizontal&safesearch=true `,e=o+a+s;try{return(await p.get(e)).data}catch(r){throw n.error({title:"Error",titleColor:"#FFFFFF",message:"An error occurred while fetching data. Please try again.",position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#FF6347",iconUrl:null}),console.error("Error fetching data:",r),r}}function y({webformatURL:t,largeImageURL:o,tags:a,likes:s,views:e,comments:r,downloads:i}){return` <li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img
              class="gallery-image"
              src="${t}"
              alt="${a}"
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
                <span>${e}</span>
              </div>
            </li>
            <li>
              <div class="data-item">
                <span class="image-property">Comments</span>
                <span>${r}</span>
              </div>
            </li>
            <li">
              <div class="data-item">
                <span class="image-property">Downloads</span>
                <span>${i}</span>
              </div>
            </li>
          </ul>
        </li>`}function f(t){return t.map(y).join("")}function h(t){const o=f(t);c.innerHTML=o}
//# sourceMappingURL=commonHelpers.js.map
