'use strict';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { searchImage } from "./js/pixabay-api.js"
import { gallery, renderImages } from "./js/render-functions.js"

const form = document.querySelector(".form");
form.addEventListener("submit", handleSubmit);

const formInput = document.querySelector(".form-input");
const loader = document.querySelector(".loader");

const loadMoreBtn = document.querySelector(".load-more-btn");
loadMoreBtn.addEventListener("click", loadMore);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

let page = 1;
let query = "";
let totalHits = 0;

async function handleSubmit(event) {
    event.preventDefault();
    query = formInput.value.trim(); //те, що ввидиться в інпут користувачем...інакше event.target.elements.query.value.trim()
    if (!query) {
        iziToast.show({
            message: 'Please enter data',
            backgroundColor: '#ffa000',
            messageSize: '16px',
            messageColor: '#fafafb',
            messageLineHeight: '150%',
            position: 'topRight',
        });
        return;
    }
    gallery.innerHTML = "";
    try {
        showLoader();
        const data = await searchImage(query, page);
        totalHits = data.totalHits;
        if (totalHits === 0) {
            iziToast.show({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                backgroundColor: '#ef4040',
                messageSize: '16px',
                messageColor: '#fafafb',
                messageLineHeight: '150%',
                position: 'topRight',
            });
        } else {
            renderImages(data.hits);
            lightbox.refresh();
            if (totalHits <= 15 ) {
                iziToast.show({
                message: "We're sorry, but you've reached the end of search results.",
                backgroundColor: '#ef4040',
                messageSize: '16px',
                messageColor: '#fafafb',
                messageLineHeight: '150%',
                position: 'topRight',
                });
            } else {
                loadMoreBtn.classList.replace("load-more-hidden", "load-more");
            }
        }
    } catch (error) {
        console.log("catch", error);
    } finally {
        hideLoader();
        form.reset();
    }
}

async function loadMore() {
    page += 1;
    showLoader();
    // loadMoreBtn.disabled = true;
    try {
        const data = await searchImage(query, page);
        renderImages(data.hits);
        totalHits = data.totalHits;
        lightbox.refresh();
        scrollToGallery();
        if (totalHits <= page * 15) {
            iziToast.show({
                message: "We're sorry, but you've reached the end of search results.",
                backgroundColor: '#ef4040',
                messageSize: '16px',
                messageColor: '#fafafb',
                messageLineHeight: '150%',
                position: 'topRight',
            });
            loadMoreBtn.classList.replace("load-more", "load-more-hidden");
        } else {
            loadMoreBtn.classList.replace("load-more-hidden", "load-more");
        }
    } catch (error) {
        alert(error.message);
    }
    finally {
        hideLoader();
        // loadMoreBtn.disabled = false;
    }
}

function showLoader() {
    loader.style.display = 'block';
    loadMoreBtn.classList.replace("load-more", "load-more-hidden");

}

function hideLoader() {
    loader.style.display = 'none';
}

function scrollToGallery() {
    const galleryItemHeight = document.querySelector(".gallery-item").getBoundingClientRect().height;
    window.scrollBy({
        top: galleryItemHeight * 2,
        behavior: "smooth",
    });
}





