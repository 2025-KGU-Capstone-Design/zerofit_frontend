import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: false,
})

http.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token')

        if (token) {
            config.headers = config.headers ?? {}
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default http
