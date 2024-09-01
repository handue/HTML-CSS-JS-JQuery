import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// axios는 항상 프로미스 형태 비동기임. 그래서 실패했을때도 promise로 반환하는거야. 그냥 템플릿이라 생각해 사용법이 이거야.
// all request(post,get,delete,put ..etc)
api.interceptors.request.use(
    // success
    (config) =>{
        const token = localStorage.getItem('token');
        if(token){
            config.headers['x-auth-token'] = token;
        }
        return config;
    },

    (error) => Promise.reject(error)
);


export default api;

