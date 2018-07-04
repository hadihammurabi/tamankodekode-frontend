import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/',
  //baseURL: 'http://192.168.100.28:3000/',
  //baseURL: 'http://35.231.229.161:3000/',
  timeout: 3000
})

export default api
