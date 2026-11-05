import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/'
const API_KEY = '58393440-33caa61bebfe5f460528244dd';

export function getImagesByQuery(query) {
    return axios.get(BASE_URL, {
        params: {
            key: API_KEY,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
        }
    })
}

