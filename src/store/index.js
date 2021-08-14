import Vue from "vue";
import Vuex from "vuex";
import neurons from "@/store/modules/neurons";
import tags from "@/store/modules/tags";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showModalNeuronsCRUD: false,
    showModalTagsCRUD: false,
  },
  mutations: {
    setShowModalNeuronsCRUD(state, val) {
      state.showModalNeuronsCRUD = val;
    },
    setShowModalTagsCRUD(state, val) {
      state.showModalTagsCRUD = val;
    },
  },
  modules: {
    tags,
    neurons,
  },
});
