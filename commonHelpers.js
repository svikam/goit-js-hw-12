import{a as u,i as l,S as f}from"./assets/vendor-c493984e.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(s){if(s.ep)return;s.ep=!0;const t=e(s);fetch(s.href,t)}})();let d=1;async function m(o){const a="https://pixabay.com/api/",e={key:"44056187-241b6d2c7b447ed7c2385a3f0",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:d};try{return(await u.get(a,{params:e})).data.hits}catch(r){return console.log("catch",r),[]}}const i=document.querySelector(".gallery");function g(o){const a=o.map(e=>`<li class="gallery-item">
        <a href="${e.largeImageURL}" class="image-card">
            <div class="container">
                <img
                    src="${e.webformatURL}" 
                    alt="${e.tags}"
                />
            </div>
            <div class="description">
                <p class="info">
                    <span class="label">Likes:</span>
                    <span class="value">${e.likes}</span>
                </p>
                <p class="info">
                    <span class="label">Views:</span>
                    <span class="value">${e.views}</span>
                </p>
                <p class="info">
                    <span class="label">Comments:</span>
                    <span class="value">${e.comments}</span>
                </p>
                <p class="info">
                    <span class="label">Downloads:</span>
                    <span class="value">${e.downloads}</span>
                </p> 
            </div>
        </a>
    </li>`).join("");i.innerHTML=a}const c=document.querySelector(".form"),h=document.querySelector(".form-input"),p=document.querySelector(".loader");document.querySelector(".load-more-btn visually-hidden");c.addEventListener("submit",y);function y(o){o.preventDefault();const a=h.value.trim();if(!a){l.show({message:"Please enter data",backgroundColor:"#ffa000",messageSize:"16px",messageColor:"#fafafb",messageLineHeight:"150%",position:"topRight"});return}i.innerHTML="",b(),m(a).then(e=>{e.length===0?l.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageSize:"16px",messageColor:"#fafafb",messageLineHeight:"150%",position:"topRight"}):(g(e),new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh())}).catch(e=>{console.log("catch",e)}).finally(()=>{L(),c.reset()})}function b(){p.style.display="block"}function L(){p.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
