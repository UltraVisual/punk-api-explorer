import axios, { AxiosPromise } from 'axios';

const BASE_URL:string = 'https://api.punkapi.com/v2/beers';
const buildGetRequest = (url:string) => ({ method: 'get', url });

export default {
    getBeer: (id:string):AxiosPromise<any> => {
        return axios(
            buildGetRequest(`${ BASE_URL }/${ id }`)
        );
    },
    getBeers: ():AxiosPromise<any> => {
        return axios(
            buildGetRequest(`${ BASE_URL }?per_page=80`)
        );
    },
}