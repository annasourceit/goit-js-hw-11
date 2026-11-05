import{a as d,S as u,i as l}from"./assets/vendor-zR4lveQc.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const f="https://pixabay.com/api/",p="58393440-33caa61bebfe5f460528244dd";function m(t){return d.get(f,{params:{key:p,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(a=>a.data)}function y(t){const a=document.querySelector(".gallery"),n=t.map(e=>`<li class = "gallery-item">
        <a class = "gallery-link" href = "${e.largeImageURL}">
            <img
            class = "gallery-image"
            src = "${e.webformatURL}"
            data-source = "${e.largeImageURL}"
            alt = "${e.tags}"
            />        
        </a>
         <ul class = "gallery-textcontainer">
           <li class = "gallery-text"><p>Likes</p><p class = "quantity">${e.likes}</p></li>
           <li class = "gallery-text"><p>Views</p><p class = "quantity">${e.views}</p></li>
           <li class = "gallery-text"><p>Comments</p><p class = "quantity">${e.comments}</p></li>
           <li class = "gallery-text"><p>Downloads</p><p class = "quantity">${e.downloads}</p></li>
         </ul>
    </li>`).join("");a.insertAdjacentHTML("beforeend",n),new u(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}function g(){const t=document.querySelector(".gallery");t.innerHTML=""}function h(){const t=document.querySelector(".container-loader span");t.classList.contains("loader")||t.classList.add("loader")}function L(){const t=document.querySelector(".container-loader span");t.classList.contains("loader")&&t.classList.remove("loader")}const i=document.querySelector(".form");i.addEventListener("submit",t=>{t.preventDefault(),g();const n=new FormData(i).get("search-text").trim();n?(h(),m(n).then(s=>{const e=s.hits;if(e.length>0){let r=[];for(const o of e){const c={webformatURL:o.webformatURL,largeImageURL:o.largeImageURL,tags:o.tags,likes:o.likes,views:o.views,comments:o.comments,downloads:o.downloads};r.push(c)}y(r)}else l.error({id:"error",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",transitionIn:"fadeInDown"})}).catch(s=>{l.error({id:"error",title:"Error",message:s,position:"topRight",transitionIn:"fadeInDown"})}).finally(()=>{L()})):l.error({id:"error",title:"Error",message:"Fill please all fields",position:"topRight",transitionIn:"fadeInDown"})});
//# sourceMappingURL=index.js.map
