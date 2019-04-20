import axios from 'axios'
import router from './router'

axios.defaults.baseURL = 'http://api.link97.com:8083';

// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (sessionStorage.token) {
            config.headers.Authorization = sessionStorage.token
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });


// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回 401 清除token信息并跳转到登录页面
                    sessionStorage.removeItem('userInfo')
                    sessionStorage.removeItem('token')
                    router.push({ path: '/login' })
                    break;
            }
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    });

export default axios