import Vue from "vue";
import Vuex from "vuex";
import { cards } from "@/__mocks__/cards";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    turnedCards: [],
    cards,
    attempts: 0,
    hits: 0,
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

    IS_PAIR(state) {
      return state.turnedCards[0].idPar === state.turnedCards[1].idPar;
    },

    ATTEMPTS(state) {
      return state.attempts;
    },

    HITS_PERCENTAGE(state) {
      if (!state.hits) return 0;

      return Math.trunc((state.hits / state.attempts) * 100);
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

    INCREMENT_ATTEMPTS(state) {
      state.attempts += 1;
    },

    INCREMENT_HITS(state) {
      state.hits += 1;
    },
  },

  actions: {
    SET_FLIP_CARD({ state, commit }, payload) {
      const card = state.cards.find((item) => item.id === payload.id);

      card.flip = true;
      commit("SET_TURNED_CARDS", payload);
    },

    MARK_PAIRS({ state, commit }) {
      state.cards.map((card) => {
        if (card.foundPair) return;

        if (state.turnedCards.some((item) => item.id === card.id)) {
          card.foundPair = true;
        }
      });

      commit("RESET_TURNED_CARDS");

      setTimeout(() => {
        commit("INCREMENT_HITS");
      }, 900);
    },
  },
});
