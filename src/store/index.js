import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import homeModule from "./modules/home.store";

export default new Vuex.Store({
  state: {
    title: "hello"
  },
  getters: {},
  modules: {
    homeModule
  },
  mutations: {},
  actions: {}
});
