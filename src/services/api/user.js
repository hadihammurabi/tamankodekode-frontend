import api from './axios'

let user = {}

user.auth = async (username, password) => {
  let data = await api.post('/user', {
    act: "auth",
    data: {
      username,
      password
    }
  })
  return data
}

user.signup = async (username, password) => {
  let data = await api.post('/user', {
    username,
    password
  })
  return data
}

export default user
