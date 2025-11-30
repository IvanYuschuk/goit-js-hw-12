import{a as L,S as b,i as d}from"./assets/vendor-DvfmeZXB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();async function p(e,t){const n="https://pixabay.com/api/";return console.log(n),(await L.get(n,{params:{key:"53364117-23ce706026567dc1d7b8b2eb2",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data}let i;function f(e){const t=document.querySelector("ul.gallery"),n=e.map(r=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${r.largeImageURL}">
                <img
                    class="gallery-image"
                    src="${r.webformatURL}"
                    data-source="${r.largeImageURL}"
                    alt="${r.tags}"
                />
            </a>
            <ul class="image-info">
                <li class="image-info-item">
                    <p class="info-p">Likes</p>
                    <span class="info-span">${r.likes}</span>
                </li>
                <li class="image-info-item">
                    <p class="info-p">Views</p>
                    <span class="info-span">${r.views}</span>
                </li>
                <li class="image-info-item">
                    <p class="info-p">Comments</p>
                    <span class="info-span">${r.comments}</span>
                </li>
                <li class="image-info-item">
                    <p class="info-p">Downloads</p>
                    <span class="info-span">${r.downloads}</span>
                </li>
            </ul>
        </li>`).join("");t.insertAdjacentHTML("beforeend",n),i?i.refresh():i=new b(".gallery a",{captionsData:"alt",captionDelay:250})}function q(){const e=document.querySelector(".gallery");e&&(e.innerHTML="")}function m(){const e=document.querySelector(".js-loader");e.classList.add("loader"),console.log(e)}function y(){document.querySelector(".js-loader").classList.remove("loader")}function g(){const e=document.querySelector(".load-button");e.style="display: block"}function h(){const e=document.querySelector(".load-button");e.style="display: none"}let a=1,c;const u=document.querySelector(".form");u.addEventListener("submit",e=>{a=1,e.preventDefault(),h(),q(),document.querySelector("input").value.trim()!==""&&(c=document.querySelector("input").value.trim(),m(),p(c,a).then(t=>{if(t.hits.length===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}f(t.hits),g()}).catch(t=>{console.error(t)}).finally(()=>{y(),u.reset()}))});const S=document.querySelector(".load-button");S.addEventListener("click",e=>{e.preventDefault(),a+=1,h(),m(),p(c,a).then(t=>{if(t.hits.length===0){d.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}f(t.hits),g()}).catch(t=>{console.error(t)}).finally(()=>{y()})});
//# sourceMappingURL=index.js.map
