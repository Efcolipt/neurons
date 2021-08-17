import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showModalNeurons: false,
    tags: [],
    neurons: [],
    sortTags: [],
  },
  mutations: {
    setShowModalNeurons(state, val) {
      state.showModalNeurons = val;
    },
    setTags(state, tags) {
      state.tags = [...new Set([...state.tags, ...tags])];
    },
    setNeurons(state, neurons) {
      state.neurons = neurons;
    },
    setNeuron(state, neuron) {
      state.neurons.push(neuron);
    },
    AddSortTags(state, tag) {
      state.sortTags = [...new Set([...state.sortTags, tag])];
    },
    RemoveSortTags(state, tag) {
      state.sortTags = state.sortTags.filter(
        (el) => !(el.localeCompare(tag) === 0)
      );
    },
  },
  actions: {
    AddNeuron({ commit }, neuron) {
      neuron.id = Date.now();
      neuron.tags = [...new Set(neuron.tags.split(","))].filter(Boolean);

      commit("setNeuron", neuron);
      commit("setTags", neuron.tags);
    },
    DeleteNeuron({ state, commit }, id) {
      const neurons = state.neurons.filter((el) => el.id !== id);
      commit("setNeurons", neurons);
    },
  },
  getters: {
    SortByTags: (state) => {
      if (!(state.sortTags.length > 0)) return state.neurons;
      return state.neurons.filter((el) => {
        for (let i = 0; el.tags.length > i; i++) {
          if (state.sortTags.includes(el.tags[i])) return true;
        }

        return false;
      });
    },
  },
});
