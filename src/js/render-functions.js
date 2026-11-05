import SimpleLightbox from "simplelightbox";
let gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});

export function createGallery(images) {
    const list = document.querySelector('.gallery');
    const markup = images.map((image) =>

    `<li class = "gallery-item">
        <a class = "gallery-link" href = "${image.largeImageURL}">
            <img
            class = "gallery-image"
            src = "${image.webformatURL}"
            data-source = "${image.largeImageURL}"
            alt = "${image.tags}"
            />        
        </a>
         <ul class = "gallery-textcontainer">
           <li class = "gallery-text"><p>Likes</p><p class = "quantity">${image.likes}</p></li>
           <li class = "gallery-text"><p>Views</p><p class = "quantity">${image.views}</p></li>
           <li class = "gallery-text"><p>Comments</p><p class = "quantity">${image.comments}</p></li>
           <li class = "gallery-text"><p>Downloads</p><p class = "quantity">${image.downloads}</p></li>
         </ul>
    </li>`).join('');

    list.insertAdjacentHTML('beforeend', markup);
    
    gallery.refresh(); 
}

export function clearGallery(){
    const list = document.querySelector('.gallery');
    if (list) {
        list.innerHTML = '';
    }
}

export function showLoader() {
    const containerLoader = document.querySelector(".container-loader span");
    if (containerLoader && !containerLoader.classList.contains("loader")) {
        containerLoader.classList.add("loader");
    };
    
}

export function hideLoader() {
    const containerLoader = document.querySelector(".container-loader span");
    if (containerLoader && containerLoader.classList.contains("loader")) {
        containerLoader.classList.remove("loader");
    };
}