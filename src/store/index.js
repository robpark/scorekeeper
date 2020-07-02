import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rankings: [],
    top10s: [
      {
        name: 'WTA',
        player_rankings: []
      },
      {
        name: 'ATP',
        player_rankings: []
      }
    ]
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
      let top10s = state.top10s;
      if (top10s[0].player_rankings.length === 10) {
        return top10s;
      }
      if (state.rankings.length === 2) {
        top10s[0].name = state.rankings[0].name;
        top10s[0].player_rankings = state.rankings[0].player_rankings.slice(0, 10);
        top10s[1].name = state.rankings[1].name;
        top10s[1].player_rankings = state.rankings[1].player_rankings.slice(0, 10);
      }
      return top10s;
    }
  },
  modules: {}
});
