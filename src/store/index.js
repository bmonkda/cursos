import { createStore } from 'vuex'

export default createStore({
  state: {
    auth: null
  },
  getters: {
  },
  mutations: {
    setAuth (state, auth) {
      state.auth = auth
    }
  },
  actions: {
  },
  modules: {
  }
})
