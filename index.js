import{a as c,S as d,i as u}from"./assets/vendor-zR4lveQc.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/",f="58393440-33caa61bebfe5f460528244dd";function m(t){return c.get(p,{params:{key:f,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})}function y(t){const a=document.querySelector(".gallery"),l=t.map(e=>`<li class = "gallery-item">
        <a class = "gallery-link" href = "${e.original}">
            <img
            class = "gallery-image"
            src = "${e.preview}"
            data-source = "${e.original}"
            alt = "${e.description}"
            />        
        </a>
         <ul class = "gallery-textcontainer">
           <li class = "gallery-text"><p>Likes</p><p class = "quantity">${e.likes}</p></li>
           <li class = "gallery-text"><p>Views</p><p class = "quantity">${e.views}</p></li>
           <li class = "gallery-text"><p>Comments</p><p class = "quantity">${e.comments}</p></li>
           <li class = "gallery-text"><p>Downloads</p><p class = "quantity">${e.downloads}</p></li>
         </ul>
    </li>`).join("");a.insertAdjacentHTML("beforeend",l),new d(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}function g(){const t=document.querySelector(".gallery");t.innerHTML=""}function h(){const t=document.querySelector(".container-loader span");t.classList.contains("loader")||t.classList.add("loader")}function L(){const t=document.querySelector(".container-loader span");t.classList.contains("loader")&&t.classList.remove("loader")}const i=document.querySelector(".form");i.addEventListener("submit",t=>{t.preventDefault(),g();const l=new FormData(i).get("search-text").trim();h(),l?m(l).then(s=>{const e=s.data.hits;if(e.length>0){let r=[];for(const o of e){const n={preview:o.webformatURL,original:o.largeImageURL,description:o.description,tags:o.tags,likes:o.likes,views:o.views,comments:o.comments,downloads:o.downloads};r.push(n)}y(r)}else u.error({id:"error",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",transitionIn:"fadeInDown"});L()}).catch(s=>console.log(s)):alert("Fill please all fields")});
//# sourceMappingURL=index.js.map
