import api from './axios'

let kategori = {}

kategori.get = async (payload = {}) => {
  payload.headers = {
    "Authorization": `Bearer ${localStorage.getItem('token')}`,
  }
  let data = (await api.get('/tutorial',payload)).data
  return data
}

export default kategori
