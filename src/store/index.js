import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    players: ['Djokovic', 'Federer', 'Nadal'],
    matches: [
      {
        players: ['Federer', 'Nadal'],
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
    ],
    newMatch: {
      players: ['Player 1', 'Player 2'],
      result: [0, 0],
      sets: [
        {
          result: [0, 0],
          games: [[0, 0]]
        }
      ]
    },
    rankings: []
  },
  mutations: {
    newMatchPlayers: (state, value) => (state.newMatch.players = value),
    setRankings: (state, payload) => (state.rankings = payload.rankings)
  },
  actions: {
    addNewMatchPlayers: ({ commit }, value) => commit('newMatchPlayers', value),
    setRankings({ commit }) {
      const url = 'https://o74cc4ab99.execute-api.us-east-2.amazonaws.com/tennis-rankings-test';
      const config = {
        headers: { 'content-type': 'application/json' }
      };

      Vue.prototype.$axios
        .get(url, config)
        .then(response => {
          commit('setRankings', response.data);
        })
        .catch(function(error) {
          console.log(error.config);
        });
    }
  },
  getters: {
    matches: state => state.matches,
    players: state => state.players,
    newMatchData: state => state.newMatch,
    getRankings: state => state.rankings,
    getTop10s: state => {
      let top10s = state.rankings;
      top10s[0].player_rankings = state.rankings[0].player_rankings.slice(0, 10);
      top10s[1].player_rankings = state.rankings[1].player_rankings.slice(0, 10);
      return top10s;
    }
  },
  modules: {}
});
