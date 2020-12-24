import axios from 'axios'
import NProgrses from 'nprogress'
import 'nprogress/nprogress.css'

const service=axios.create({
    // baseURL: 'http://39.99.186.36/api',//基础路径
    baseURL:'/api',
    timeout:20000
})


//创建请求拦截器
service.interceptors.request.use((config) => {
        NProgrses.start()
    return config
})

//创建响应拦截器
service.interceptors.response.use(
    response => {
        NProgrses.done()
        return response.data
    },
    error => {
        NProgrses.done()
        alert(error.message || '未知的请求错误')
        return  Promise.reject(error)
    }
)

//暴露service函数
export default service