import axios, { AxiosPromise } from 'axios';

const BASE_URL:string = 'https://api.punkapi.com/v2/beers';

export default {
    getBeer: (id:string):AxiosPromise<any> => {
        return axios({
            method: 'get',
            url: `${ BASE_URL }/${ id }`
        });
    },
    getBeers: ():AxiosPromise<any> => {
        return axios({
            method: 'get',
            url: `${ BASE_URL }?per_page=80`
        });
    },
}