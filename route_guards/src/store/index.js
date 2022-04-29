import { createStore } from 'vuex'

export default createStore({
  state: {
    authenticated: false,
  },
  mutations: {
    setAuthentication(state, status) {
      state.authenticated = status;
    }
  },
  actions: {
  },
  modules: {
  }
})
