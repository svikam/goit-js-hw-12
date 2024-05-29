'use strict';
export const gallery = document.querySelector(".gallery");

export function renderImages(images) {
    const imageMarkup = images.map(image => `<li class="gallery-item">
        <a href="${image.largeImageURL}" class="image-card">
            <div class="container">
                <img
                    src="${image.webformatURL}" 
                    alt="${image.tags}"
                />
            </div>
            <div class="description">
                <p class="info">
                    <span class="label">Likes:</span>
                    <span class="value">${image.likes}</span>
                </p>
                <p class="info">
                    <span class="label">Views:</span>
                    <span class="value">${image.views}</span>
                </p>
                <p class="info">
                    <span class="label">Comments:</span>
                    <span class="value">${image.comments}</span>
                </p>
                <p class="info">
                    <span class="label">Downloads:</span>
                    <span class="value">${image.downloads}</span>
                </p> 
            </div>
        </a>
    </li>`)
        .join("");
    gallery.innerHTML = imageMarkup;
}
