import api from './axios'

let kategori = {}

kategori.get = async (payload) => {
  let data = (await api.get('/tutorial',payload)).data
  console.log(data)
  return data
}

export default kategori
