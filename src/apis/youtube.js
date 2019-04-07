import axios from 'axios';

const KEY = 'AIzaSyD0gZEsYUqetDDjuNyrQOqQ7fQqrOMIxSI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});