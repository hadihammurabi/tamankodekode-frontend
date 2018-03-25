import api from './axios'

let kategori = {}

kategori.getAll = async (payload) => {
  let data = (await api.get('/kategori',payload)).data.data
  return data
}

export default kategori
