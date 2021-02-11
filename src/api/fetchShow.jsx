import axios from 'axios';

export function fetchShow() {
    return axios.get('https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes')
    .then(data => {
        console.log(data)
        return data;
    })
    .catch(error => {
        return error
    })
}