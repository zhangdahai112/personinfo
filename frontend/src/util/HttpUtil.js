import axios from 'axios'

// 创建axios实例
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // api的base_url
    timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
    // 在发送请求之前做某事，比如说 设置token
    // config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');
    return config
}, error => {
    // 请求错误处理
    Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
    response => {
        /**
        * 根据后端的状态码进行操作
        * 这只是一个例子，你也可以根据你的需求进行操作
        */
        const res = response.data
        if (!res.success) {
            return Promise.reject('error')
        } else {
            return res
        }
    },
    error => {
        return Promise.reject(error)
    }
)

export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        service.get(url, {
            params: params
        }).then(response => {
            resolve(response)
        }).catch(err => {
            reject(err)
        })
    })
}

export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        service.post(url, data)
            .then(response => {
                resolve(response)
            }, err => {
                reject(err)
            })
    })
}