import{i as l,S as p}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function f(a){const o="https://pixabay.com/api/",s=new URLSearchParams({key:"44056187-241b6d2c7b447ed7c2385a3f0",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}),r=`${o}?${s}`;return fetch(r).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).then(e=>e.hits).catch(e=>(console.log("catch",e),[]))}const i=document.querySelector(".gallery");function d(a){const o=a.map(s=>`<li class="gallery-item">
        <a href="${s.largeImageURL}" class="image-card">
            <div class="container">
                <img
                    src="${s.webformatURL}" 
                    alt="${s.tags}"
                />
            </div>
            <div class="description">
                <p class="info">
                    <span class="label">Likes:</span>
                    <span class="value">${s.likes}</span>
                </p>
                <p class="info">
                    <span class="label">Views:</span>
                    <span class="value">${s.views}</span>
                </p>
                <p class="info">
                    <span class="label">Comments:</span>
                    <span class="value">${s.comments}</span>
                </p>
                <p class="info">
                    <span class="label">Downloads:</span>
                    <span class="value">${s.downloads}</span>
                </p> 
            </div>
        </a>
    </li>`).join("");i.innerHTML=o}const c=document.querySelector(".form"),m=document.querySelector(".form-input"),u=document.querySelector(".loader");c.addEventListener("submit",h);function h(a){a.preventDefault();const o=m.value.trim();if(!o){l.show({message:"Please enter data",backgroundColor:"#ffa000",messageSize:"16px",messageColor:"#fafafb",messageLineHeight:"150%",position:"topRight"});return}i.innerHTML="",g(),f(o).then(s=>{s.length===0?l.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageSize:"16px",messageColor:"#fafafb",messageLineHeight:"150%",position:"topRight"}):(d(s),new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh())}).catch(s=>{console.log("catch",s)}).finally(()=>{y(),c.reset()})}function g(){u.style.display="block"}function y(){u.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
