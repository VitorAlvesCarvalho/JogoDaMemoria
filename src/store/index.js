import Vue from "vue";
import Vuex from "vuex";
import { cards } from "@/__mocks__/cards";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},

  getters: {
    CARDS() {
      return cards;
    },
  },

  mutations: {},

  actions: {},

  modules: {},
});
