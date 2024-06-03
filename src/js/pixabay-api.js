'use strict';
import axios from 'axios';

export async function searchImage(query, page) {
    const baseUrl = "https://pixabay.com/api/";
    const params = {
        key: "44056187-241b6d2c7b447ed7c2385a3f0",
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: 15,
        page: page
    };

    try {
        const response = await axios.get(baseUrl, { params });
        return response.data;
        // return {
        //     images: response.data.hits,
        //     totalHits: response.data.totalHits,
        // };
    } catch (error) {
        console.log("catch", error);
        return [];
    }
}

// export function searchImage(query) {
//     const baseUrl = "https://pixabay.com/api/";
//     const params = new URLSearchParams({
//         key: "44056187-241b6d2c7b447ed7c2385a3f0",
//         q: query,
//         image_type: "photo",
//         orientation: "horizontal",
//         safesearch: true,
//     });
//     const url = `${baseUrl}?${params}`;
//     return fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.statusText)
//             }
//             return response.json();
//         })
//         .then(data => data.hits)
//         .catch(error => {
//             console.log("catch", error);
//             return [];
//         });
// }