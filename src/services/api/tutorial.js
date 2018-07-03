import api from './axios'

let tutorial = {}

tutorial.get = async (kategori) => {
  let data = (await api.get(`/tutorial?kategori=${kategori}`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })).data
  return data
}

export default tutorial
