export const state = () => ({
  attribution: {},
});

export default {
  namespaced: true,

  state,
  mutations: {
    UPDATE_ATTRIBUTION ({state}, data) {
      console.log(state)
      state.attribution[data.key] = data.value
    }
  },

  actions: {
    updateAttribution: ({ commit }) => {
      for (let [key, value] of Object.entries(localStorage)) {
        commit("UPDATE_ATTRIBUTION", { key, value })
      }
    }
  },

  getters: {}
}
