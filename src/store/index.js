import Vue from "vue";
import Vuex from "vuex";
import { cards } from "@/__mocks__/cards";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    turnedCards: [],
    cards,
  },

  getters: {
    CARDS(state) {
      return state.cards;
    },

    TURNED_CARDS(state) {
      return state.turnedCards;
    },

    TURNED_CARDS_LIMIT(state) {
      return state.turnedCards.length === 2;
    },
  },

  mutations: {
    SET_TURNED_CARDS(state, payload) {
      state.turnedCards.push(payload);
    },

    RESET_TURNED_CARDS(state) {
      state.turnedCards = [];
      state.cards.map((item) => (item.flip = false));
    },
  },

  actions: {
    SET_FLIP_CARD({ state, commit }, payload) {
      const card = state.cards.find((item) => item.id === payload.id);

      card.flip = true;
      commit("SET_TURNED_CARDS", payload);
    },
  },
});
