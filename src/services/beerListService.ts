import axios from 'axios';

export default {
    getBeer: (id:string) => {
        return axios({
            method: 'get',
            url: 'https://api.punkapi.com/v2/beers/' + id
        });
    },
    getBeers: () => {
        return axios({
            method: 'get',
            url: 'https://api.punkapi.com/v2/beers?per_page=80'
        });
    },
}