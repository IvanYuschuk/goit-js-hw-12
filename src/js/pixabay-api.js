

import axios from 'axios';





export function getImagesByQuery(query) {
    const baseURL = "https://pixabay.com/api/";

    return axios.get(baseURL, {
        params: {
            key: "53364117-23ce706026567dc1d7b8b2eb2",
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
        },
        timeout: 3000,
    }).then(response => {
        return response.data; 
    });
}



