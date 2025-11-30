import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";




import { getImagesByQuery } from "./js/pixabay-api.js";
import { clearGallery, showLoader, hideLoader, createGallery, showLoadButton, hideLoadButton } from "./js/render-functions.js";

let page = 1;
let query;
const form = document.querySelector(".form");
form.addEventListener('submit', (e) => {
    page = 1;
    e.preventDefault();
    hideLoadButton();
    clearGallery();
    if (document.querySelector("input").value.trim() === "") {
        return;
    }
    query = document.querySelector("input").value.trim();
    showLoader();
    getImagesByQuery(query, page).then(data => {
        if (data.hits.length === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            });
            return; 
        }

        createGallery(data.hits);
        showLoadButton();
    })
    .catch((error) => { 
        console.error(error);
    })
    .finally(() => {
        hideLoader();
        form.reset();
    });
})

const loadButton = document.querySelector(".load-button");
loadButton.addEventListener("click", (e) => {
    e.preventDefault();
    page += 1;
    hideLoadButton();
    showLoader();
    getImagesByQuery(query, page).then(data => {
        if (data.hits.length === 0) {
            iziToast.error({
                message: "We're sorry, but you've reached the end of search results.",
                position: 'topRight',
            });
            return;
        }
        createGallery(data.hits);
        showLoadButton();
    })
    .catch((error) => { 
        console.error(error);
    })
    .finally(() => {
        hideLoader();
    });
});








