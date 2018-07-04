import api from './axios'

let tutorial = {}

tutorial.get = async (kategori) => {
  let data = (await api.get(`/tutorial?kategori=${kategori}`)).data
  return data
}

export default tutorial
