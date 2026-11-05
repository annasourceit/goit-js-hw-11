import{a as d,S as u,i}from"./assets/vendor-zR4lveQc.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const f="https://pixabay.com/api/",p="58393440-33caa61bebfe5f460528244dd";function m(t){return d.get(f,{params:{key:p,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data)}let y=new u(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function g(t){const s=document.querySelector(".gallery"),n=t.map(r=>`<li class = "gallery-item">
        <a class = "gallery-link" href = "${r.largeImageURL}">
            <img
            class = "gallery-image"
            src = "${r.webformatURL}"
            data-source = "${r.largeImageURL}"
            alt = "${r.tags}"
            />        
        </a>
         <ul class = "gallery-textcontainer">
           <li class = "gallery-text"><p>Likes</p><p class = "quantity">${r.likes}</p></li>
           <li class = "gallery-text"><p>Views</p><p class = "quantity">${r.views}</p></li>
           <li class = "gallery-text"><p>Comments</p><p class = "quantity">${r.comments}</p></li>
           <li class = "gallery-text"><p>Downloads</p><p class = "quantity">${r.downloads}</p></li>
         </ul>
    </li>`).join("");s.insertAdjacentHTML("beforeend",n),y.refresh()}function h(){const t=document.querySelector(".gallery");t&&(t.innerHTML="")}function L(){const t=document.querySelector(".container-loader span");t&&!t.classList.contains("loader")&&t.classList.add("loader")}function w(){const t=document.querySelector(".container-loader span");t&&t.classList.contains("loader")&&t.classList.remove("loader")}const l=document.querySelector(".form");l.addEventListener("submit",t=>{t.preventDefault(),h();const n=new FormData(l).get("search-text").trim();n?(L(),m(n).then(r=>{const e=r.hits;if(e.length>0){let o=[];for(const a of e){const c={webformatURL:a.webformatURL,largeImageURL:a.largeImageURL,tags:a.tags,likes:a.likes,views:a.views,comments:a.comments,downloads:a.downloads};o.push(c)}g(o)}else i.error({id:"error",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",transitionIn:"fadeInDown"})}).catch(r=>{i.error({id:"error",title:"Error",message:r,position:"topRight",transitionIn:"fadeInDown"})}).finally(()=>{w()})):i.error({id:"error",title:"Error",message:"Fill please all fields",position:"topRight",transitionIn:"fadeInDown"})});
//# sourceMappingURL=index.js.map
