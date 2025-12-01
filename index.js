import{a as b,S as q,i as f}from"./assets/vendor-DvfmeZXB.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();async function m(e,r){const a="https://pixabay.com/api/";return console.log(a),(await b.get(a,{params:{key:"53364117-23ce706026567dc1d7b8b2eb2",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})).data}let c;function y(e){const r=document.querySelector("ul.gallery"),a=e.map(o=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${o.largeImageURL}">
                <img
                    class="gallery-image"
                    src="${o.webformatURL}"
                    data-source="${o.largeImageURL}"
                    alt="${o.tags}"
                />
            </a>
            <ul class="image-info">
                <li class="image-info-item">
                    <p class="info-p">Likes</p>
                    <span class="info-span">${o.likes}</span>
                </li>
                <li class="image-info-item">
                    <p class="info-p">Views</p>
                    <span class="info-span">${o.views}</span>
                </li>
                <li class="image-info-item">
                    <p class="info-p">Comments</p>
                    <span class="info-span">${o.comments}</span>
                </li>
                <li class="image-info-item">
                    <p class="info-p">Downloads</p>
                    <span class="info-span">${o.downloads}</span>
                </li>
            </ul>
        </li>`).join("");r.insertAdjacentHTML("beforeend",a),c?c.refresh():c=new q(".gallery a",{captionsData:"alt",captionDelay:250})}function S(){const e=document.querySelector(".gallery");e&&(e.innerHTML="")}function g(){const e=document.querySelector(".js-loader");e.classList.add("loader"),console.log(e)}function h(){document.querySelector(".js-loader").classList.remove("loader")}function L(){const e=document.querySelector(".load-button");e.style="display: block"}function u(){const e=document.querySelector(".load-button");e.style="display: none"}let l=1,d,n;const p=document.querySelector(".form");p.addEventListener("submit",async e=>{if(l=1,e.preventDefault(),u(),S(),document.querySelector("input").value.trim()!==""){if(d=document.querySelector("input").value.trim(),g(),n=await m(d,l),n.hits.length===0){f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(n.hits),L(),h(),p.reset()}});const w=document.querySelector(".load-button");w.addEventListener("click",async e=>{e.preventDefault(),l+=1,u(),g(),n=await m(d,l),y(n.hits),L(),n.hits.length<15&&(f.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),u()),h();const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})});
//# sourceMappingURL=index.js.map
