import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'fontend'
  },
  mutations: {
    SET_NAME (state, payload) {
      state.name = payload
    }
  },
  actions: {
    getNameAct ({ commit }, payload) {
      commit('SET_NAME', payload)
    }
  },
  modules: {

  }
})
