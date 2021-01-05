import Axios from 'axios';
import qs from 'querystring';
const axios = Axios.create();
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.interceptors.request.use((config) => {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
});
axios.interceptors.response.use(
    (response) => {
        let data = response.data;
        response.data = data.data;
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export default axios;