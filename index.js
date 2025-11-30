import{a as c,S as u,i as f}from"./assets/vendor-Cq7ZUixy.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function p(t){return c.get("https://pixabay.com/api/",{params:{key:"53364117-23ce706026567dc1d7b8b2eb2",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0},timeout:3e3}).then(s=>s.data)}let i;function m(t){const a=document.querySelector("ul.gallery"),s=t.map(r=>`
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
        </li>`).join("");a.insertAdjacentHTML("beforeend",s),i?i.refresh():i=new u(".gallery a",{captionsData:"alt",captionDelay:250})}function d(){const t=document.querySelector(".gallery");t&&(t.innerHTML="")}function y(){const t=document.querySelector(".js-loader");t.classList.add("loader"),console.log(t)}function g(){document.querySelector(".js-loader").classList.remove("loader")}const l=document.querySelector(".form");l.addEventListener("submit",t=>{if(t.preventDefault(),d(),document.querySelector("input").value.trim()==="")return;const a=document.querySelector("input").value.trim();y(),p(a).then(s=>{if(s.hits.length===0){f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(s.hits)}).catch(s=>{console.error(s)}).finally(()=>{g(),l.reset()})});
//# sourceMappingURL=index.js.map
