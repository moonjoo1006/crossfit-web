import axios from "axios";

const client = axios.create({
    baseURL: `/api`,
    timeout: 30000,
    withCredentials: false
})

export function getApi(url) {
    return api(url);
}

export default function api(url, config = {}){
    return client({url, ...config})
        .then(res => {
            const {status, data, config} = res;
            const {data: request = "" } = config;
            console.log(`##response:${config.method}:${config.url}`, status, request, data);
            return data;
        }).catch(e => {
            const {message, response} = e;
            console.log(`##error:${message}`, response);
            const {status, data} = response
            return Promise.reject({status, data});
        });
}