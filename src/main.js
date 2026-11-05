import iziToast from "izitoast";
import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery } from "./js/render-functions.js";
import { clearGallery } from "./js/render-functions.js";
import { showLoader } from "./js/render-functions.js";
import { hideLoader } from "./js/render-functions.js";

const form = document.querySelector(".form");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    clearGallery();
    const formData = new FormData(form);
    const query = formData.get('search-text').trim();
    if (query) {
        showLoader();
        getImagesByQuery(query)
        .then(response => {           
            const datas = response.hits;           
            if (datas.length > 0) { 
                let arrImages = [];
                for (const data of datas) {
                    const image = {
                        webformatURL: data.webformatURL,
                        largeImageURL:  data.largeImageURL, 
                        tags: data.tags,
                        likes: data.likes,
                        views: data.views,
                        comments: data.comments,           
                        downloads: data.downloads,
                    }
                    arrImages.push(image);
                }
                createGallery(arrImages);
            
            } else {
                iziToast.error({
                    id: 'error',
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                    transitionIn: 'fadeInDown'
                });
            }
        })
        .catch(error => {
            iziToast.error({
                id: 'error',
                title: 'Error',
                message: error,
                position: 'topRight',
                transitionIn: 'fadeInDown'
            });
        })
        .finally(() => {
            hideLoader()
        });
    } else {
        iziToast.error({
            id: 'error',
            title: 'Error',
            message: 'Fill please all fields',
            position: 'topRight',
            transitionIn: 'fadeInDown'
        });
    }
})

