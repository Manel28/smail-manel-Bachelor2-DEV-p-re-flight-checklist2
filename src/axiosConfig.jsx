import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://greenvelvet.alwaysdata.net/pfc/',
    headers: {
        'Content-Type': 'application/json',
        'token': '7e84912c9213e2ac7b5536f9ad65c386a9e56bc9', // Remplacez par votre token
    },
});

export default instance;
