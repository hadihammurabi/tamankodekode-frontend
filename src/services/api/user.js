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

user.whois = async () => {
  const user = (await api.get('/user', {
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
    }
  })).data
  return user
}

user.verify = async () => {
  return (await api.post('/user/verify', {}, {
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
    }
  })).data
}

export default user
