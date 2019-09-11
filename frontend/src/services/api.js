import axios from 'axios';

const api = axios.create({
    baseURL: "https://omnistackgabriela-backend.herokuapp.com"
});

export default api;