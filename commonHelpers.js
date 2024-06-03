import{a as v,S as w,i}from"./assets/vendor-c493984e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const p of t.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();async function f(s,o){const a="https://pixabay.com/api/",l={key:"44056187-241b6d2c7b447ed7c2385a3f0",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o};try{return(await v.get(a,{params:l})).data}catch(e){return console.log("catch",e),[]}}const u=document.querySelector(".gallery");function m(s){const o=s.map(a=>`<li class="gallery-item">
        <a href="${a.largeImageURL}" class="image-card">
            <div class="container">
                <img
                    src="${a.webformatURL}" 
                    alt="${a.tags}"
                />
            </div>
            <div class="description">
                <p class="info">
                    <span class="label">Likes:</span>
                    <span class="value">${a.likes}</span>
                </p>
                <p class="info">
                    <span class="label">Views:</span>
                    <span class="value">${a.views}</span>
                </p>
                <p class="info">
                    <span class="label">Comments:</span>
                    <span class="value">${a.comments}</span>
                </p>
                <p class="info">
                    <span class="label">Downloads:</span>
                    <span class="value">${a.downloads}</span>
                </p> 
            </div>
        </a>
    </li>`).join("");u.insertAdjacentHTML("beforeend",o)}const g=document.querySelector(".form");g.addEventListener("submit",q);const S=document.querySelector(".form-input"),h=document.querySelector(".loader"),n=document.querySelector(".load-more-btn");n.addEventListener("click",C);const y=new w(".gallery a",{captionsData:"alt",captionDelay:250});let c=1,d="",r=0;async function q(s){if(s.preventDefault(),d=S.value.trim(),!d){i.show({message:"Please enter data",backgroundColor:"#ffa000",messageSize:"16px",messageColor:"#fafafb",messageLineHeight:"150%",position:"topRight"});return}u.innerHTML="";try{b();const o=await f(d,c);r=o.totalHits,r===0?i.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageSize:"16px",messageColor:"#fafafb",messageLineHeight:"150%",position:"topRight"}):(m(o.hits),y.refresh(),r<15?i.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#ef4040",messageSize:"16px",messageColor:"#fafafb",messageLineHeight:"150%",position:"topRight"}):n.classList.replace("load-more-hidden","load-more"))}catch(o){console.log("catch",o)}finally{L(),g.reset()}}async function C(){c+=1,b();try{const s=await f(d,c);m(s.hits),r=s.totalHits,y.refresh(),H(),r<=c*15?(i.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#ef4040",messageSize:"16px",messageColor:"#fafafb",messageLineHeight:"150%",position:"topRight"}),n.classList.replace("load-more","load-more-hidden")):n.classList.replace("load-more-hidden","load-more")}catch(s){alert(s.message)}finally{L()}}function b(){h.style.display="block",n.classList.replace("load-more","load-more-hidden")}function L(){h.style.display="none"}function H(){const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
