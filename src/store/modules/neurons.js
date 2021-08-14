export default {
  state: () => ({
    data: {},
  }),
  mutations: {
    setData(state, data) {
      state.data = data;
    },
  },
  actions: {},
  getters: {},
  namespaced: true,
};
