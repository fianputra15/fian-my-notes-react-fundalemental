import axios from 'axios'
const BASE_URL = ' https://notes-api.dicoding.dev/v1'


const instance = axios.create(
    {
        baseURL: BASE_URL,
    }
)

instance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('t')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    }, error => Promise.reject(error)
)

const login = (payload) => {
    return instance.post('/login', payload).then((res) => {
        return res.data
    })
}
const register = (payload) => {
    return instance.post('/register', payload).then((res) => {
        return res.data
    })
}
const getUserLogged = () => {
    return instance.get('/users/me').then((res) =>
        res.data
    )
}


export {
    getUserLogged,
    login,
    register
}
