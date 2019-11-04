export default {
  state: {
    list: []
  },
  mutations: {
    SET_LIST (state, payload) {
      state.list = payload || []
    }
  },
  actions: {
    getListAct ({ commit }, payload) {
      commit('SET_LIST', payload)
    }
  }
}
