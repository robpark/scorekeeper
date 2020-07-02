<template>
  <v-container class="rankings">
    <h1>Pro Tennis Top 10s</h1>
    <v-row>
      <v-col v-for="ranking in getTop10s" :key="ranking.id">
        <ul>
          <li>
            {{ ranking.name }}
            <ul>
              <li v-for="playerRanking in ranking.player_rankings" :key="playerRanking.id">
                {{ playerRanking.rank }}. {{ playerRanking.player.name }}
              </li>
            </ul>
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Ranking',
  computed: {
    ...mapGetters(['getTop10s'])
  },
  methods: {
    ...mapActions(['setRankings'])
  },
  created() {
    this.setRankings();
  }
};
</script>

<style scoped></style>
