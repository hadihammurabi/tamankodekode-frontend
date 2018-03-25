import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const mutations = {
  token (state, token) {
    if (token === null){
      localStorage.removeItem('token')
    } else {
      state.token = token
      localStorage.setItem('token', state.token)
    }
  },
  afterLogin (state, afterLogin) {
    state.afterLogin = afterLogin
  }
}

const getters = {
  token (state) {
    const store = localStorage.getItem('token')
    return store ? store : state.token
  },
  afterLogin (state) {
    return state.afterLogin
  }
}

const store = new Vuex.Store({
  state: {
    token: '',
    afterLogin: ''
  },
  mutations,
  getters
})

export default store
