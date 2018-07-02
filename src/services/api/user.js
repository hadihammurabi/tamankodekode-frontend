import api from './axios'

let user = {}

user.auth = async (email, password) => {
  let data = await api.post('/auth', {
    email,
    password
  })
  return data
}

user.signup = async (email, password) => {
  let data = await api.post('/user', {
    email,
    password,
    role_id: 2
  })
  return data
}

user.whois = async (token) => {
  return (await api.get('/user', {
    headers: {
      "Authorization": `Bearer ${token}`,
    }
  })).data
}

user.verify = async (token) => {
  return (await api.post('/user/verify', {}, {
    headers: {
      "Authorization": `Bearer ${token}`,
    }
  })).data
}

export default user
