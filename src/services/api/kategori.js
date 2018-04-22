import api from './axios'

let kategori = {}

kategori.getAll = async (payload = {}) => {
  payload.headers = {
    "Authorization": `Bearer ${localStorage.getItem('token')}`,
  }
  let data = (await api.get('/kategori', payload)).data.data
  return data
}

export default kategori
