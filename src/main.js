'use strict';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { searchImage } from "./js/pixabay-api.js"
import { gallery, renderImages } from "./js/render-functions.js"

const form = document.querySelector(".form");
const formInput = document.querySelector(".form-input");
const loader = document.querySelector(".loader");

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const query = formInput.value.trim(); //те, що ввидиться в інпут користувачем...інакше event.target.elements.query.value.trim()
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
    showLoader();
    searchImage(query)
        .then(images => {
            if (images.length === 0) {
                iziToast.show({

                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    backgroundColor: '#ef4040',
                    messageSize: '16px',
                    messageColor: '#fafafb',
                    messageLineHeight: '150%',
                    position: 'topRight',
                });
            } else {
                renderImages(images);
                const lightbox = new SimpleLightbox('.gallery a', {
                    captionsData: 'alt',
                    captionDelay: 250,
                });
                lightbox.refresh();
            }
        })
        .catch(error => {
            console.log("catch", error);
        })
        .finally(() => {
            hideLoader();
            form.reset();
        });
}

function showLoader() {
    loader.style.display = 'block';
}

function hideLoader() {
    loader.style.display = 'none';
}






