import axios, {AxiosInstance} from "axios";

const myAxios : AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api'
});
myAxios.defaults.headers.common['Access-Control-Allow-Origin'] = "*";

// Request interceptor
myAxios.interceptors.request.use(function(config) {
    console.log("Sending axios request:", config);
    return config;
}, function(error) {
    return Promise.reject(error);
});

// Response interceptor
myAxios.interceptors.response.use(function(response) {
    console.log("Receiving axios response:", response);
    return response;
}, function(error) {
    return Promise.reject(error);
});



export default myAxios;