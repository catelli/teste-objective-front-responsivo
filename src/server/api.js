import axios from 'axios';

const apiEndpoint = axios.create({
    baseURL: 'https://gateway.marvel.com/v1'
});

export default apiEndpoint