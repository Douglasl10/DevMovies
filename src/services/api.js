import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "baea5006af323c84f53bedd725e6310f",
        language: "pt-BR",
        page: 1,
    }
});

export default api;