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

const getAllNotes = () => {
    return instance.get('/notes').then((res) => {
        return res.data
    })
}
const addNotes = (payload) => {
    return instance.post('/notes', payload).then((res) => {
        return res.data
    })
}
const getAllNotesArchive = () => {
    return instance.get('/notes/archived').then((res) => {
        return res.data
    })
}
const getSingleNotes = (id) => {
    return instance.get(`/notes/${id}`).then((res) => {
        return res.data
    })
}
const archiveNotes = (id) => {
    return instance.post(`/notes/${id}/archive`).then((res) => {
        return res.data
    })
}
const unarchiveNotes = (id) => {
    return instance.post(`/notes/${id}/unarchive`).then((res) => {
        return res.data
    })
}
const deleteNotes = (id) => {
    return instance.delete(`/notes/${id}`).then((res) => {
        return res.data
    })
}

export {
    addNotes,
    getAllNotes,
    getAllNotesArchive,
    getSingleNotes,
    archiveNotes,
    unarchiveNotes,
    deleteNotes,
}