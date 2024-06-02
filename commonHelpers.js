import{a as L,S as v,i as l}from"./assets/vendor-c493984e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();async function p(s,o){const a="https://pixabay.com/api/",n={key:"44056187-241b6d2c7b447ed7c2385a3f0",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o};try{return(await L.get(a,{params:n})).data.hits}catch(e){return console.log("catch",e),[]}}const f=document.querySelector(".gallery");function u(s){const o=s.map(a=>`<li class="gallery-item">
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
    </li>`).join("");f.insertAdjacentHTML("beforeend",o)}const m=document.querySelector(".form");m.addEventListener("submit",S);const w=document.querySelector(".form-input"),g=document.querySelector(".loader"),r=document.querySelector(".load-more-btn");r.addEventListener("click",q);const h=new v(".gallery a",{captionsData:"alt",captionDelay:250});let d=1,i="";function S(s){if(s.preventDefault(),i=w.value.trim(),!i){l.show({message:"Please enter data",backgroundColor:"#ffa000",messageSize:"16px",messageColor:"#fafafb",messageLineHeight:"150%",position:"topRight"});return}f.innerHTML="",y(),p(i,d).then(o=>{o.length===0?l.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageSize:"16px",messageColor:"#fafafb",messageLineHeight:"150%",position:"topRight"}):(u(o),h.refresh(),o.length<15?l.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#ef4040",messageSize:"16px",messageColor:"#fafafb",messageLineHeight:"150%",position:"topRight"}):r.classList.replace("load-more-hidden","load-more"))}).catch(o=>{console.log("catch",o)}).finally(()=>{b(),m.reset()})}async function q(){d+=1,y();try{const s=await p(i,d);u(s),console.log(s),h.refresh(),C(),s.length<15?(l.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#ef4040",messageSize:"16px",messageColor:"#fafafb",messageLineHeight:"150%",position:"topRight"}),r.classList.replace("load-more","load-more-hidden")):r.classList.replace("load-more-hidden","load-more")}catch(s){alert(s.message)}finally{b()}}function y(){g.style.display="block",r.classList.replace("load-more","load-more-hidden")}function b(){g.style.display="none"}function C(){const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
