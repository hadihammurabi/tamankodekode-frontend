import api from './axios'

let kategori = {}

kategori.getAll = async (payload = {}) => {
  payload.headers = {
    authorization: `Bearer ${localStorage.getItem('token')}`,
  }
  let data = (await api.get('/kategori', payload)).data
  return data
}

export default kategori
