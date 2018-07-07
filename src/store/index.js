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
  kategori (state, kategori) {
    state.kategori = kategori
  },
  page (state, page) {
    state.page = page
  },
  clear (state) {
    state = {
      token: '',
      afterLogin: '',
      page: 'home',
      user: {},
      kategori: {}
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
  async user (state) {
    try {
      const userdata = await user.whois()
      return userdata
    } catch (e) {
      return {}
    }
  },
  kategori (state) {
    return state.kategori
  },
  page (state) {
    return state.page
  }
}

const store = new Vuex.Store({
  state: {
    token: '',
    afterLogin: '',
    page: 'home',
    user: {},
    kategori: {}
  },
  mutations,
  getters
})

export default store
