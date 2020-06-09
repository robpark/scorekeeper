import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    players: ["Djokovic", "Federer", "Nadal"],
    matches: [
      {
        players: ["Federer", "Nadal"],
        result: [2, 1],
        sets: [
          {
            result: [6, 3],
            games: [
              [
                [0, 15],
                [15, 15],
                [30, 15],
                [40, 15]
              ]
            ]
          },
          {
            result: [3, 6],
            games: []
          },
          {
            result: [7, 6],
            games: []
          }
        ]
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    matches: state => state.matches,
    players: state => state.players
  },
  modules: {}
});
