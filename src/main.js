import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";




import { getImagesByQuery } from "./js/pixabay-api.js";
import { clearGallery, showLoader, hideLoader, createGallery } from "./js/render-functions.js";

const form = document.querySelector(".form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearGallery();
    if (document.querySelector("input").value.trim() === "") {
        return;
    }
    const query = document.querySelector("input").value.trim();
    showLoader();
    getImagesByQuery(query).then(data => {
        if (data.hits.length === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            });
            return; 
        }

        createGallery(data.hits);
    })
    .catch((error) => { 
        console.error(error);
    })
    .finally(() => {
        hideLoader();
        form.reset();
    });

})








