import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const mutations = {
  token (state, token) {
    if (token === null){
      localStorage.removeItem('token')
    } else {
      state.token = token
      localStorage.setItem('token', state.token.token)
      localStorage.setItem('refreshToken', state.token.refreshToken)
    }
  },
  afterLogin (state, afterLogin) {
    state.afterLogin = afterLogin
  },
  page (state, name) {
    state.page = name
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
  }
}

const store = new Vuex.Store({
  state: {
    token: '',
    afterLogin: '',
    page: 'home'
  },
  mutations,
  getters
})

export default store
