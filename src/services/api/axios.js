import axios from 'axios'

const api = axios.create({
  //baseURL: 'http://localhost:3000/',
  //baseURL: 'http://192.168.100.28:3000/',
  baseURL: 'http://192.3.130.45:3333/',
  timeout: 3000
})

export default api
