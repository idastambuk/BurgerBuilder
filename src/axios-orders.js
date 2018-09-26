import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-51f52.firebaseio.com/'
});

export default instance;
