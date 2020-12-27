//专门请求mock的axios封装
import axios from 'axios'

const mockAjax = axios.create({
    baseURL: '/mock' ,
    timeout:10000
})

//请求拦截器
mockAjax.interceptors.request.use((config) => {
    return config
})
mockAjax.interceptors.response.use(
    response => response.data,
    error =>Promise.reject(error)
)


//默认暴露
export  default   mockAjax