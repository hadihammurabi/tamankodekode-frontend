import Vue from 'vue'
import Vuex from 'vuex'

import user from '../services/api/user'

Vue.use(Vuex)

const mutations = {
  token (state, token) {
    if (token === null){
      localStorage.removeItem('token')
      localStorage.removeItem('refreshToken')
    } else {
      state.token = token.token
      localStorage.setItem('token', state.token.token)
      localStorage.setItem('refreshToken', state.token.refreshToken)
    }
  },
  afterLogin (state, afterLogin) {
    state.afterLogin = afterLogin
  },
  page (state, name) {
    state.page = name
  },
  clear (state) {
    state = {
      token: '',
      afterLogin: '',
      page: 'home',
      user: {}
    }
  }
}

const getters = {
  token (state) {
    const store = localStorage.getItem('token')
    return store ? store : state.token
  },
  afterLogin (state) {
    return state.afterLogin
  },
  page (state) {
    return state.page
  },
  async user (state) {
    try {
      const userdata = await user.whois()
      return userdata
    } catch (e) {
      return {}
    }
  }
}

const store = new Vuex.Store({
  state: {
    token: '',
    afterLogin: '',
    page: 'home',
    user: {}
  },
  mutations,
  getters
})

export default store
