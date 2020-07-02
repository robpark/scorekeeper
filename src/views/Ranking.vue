<template>
  <div class="rankings">
    <h1>Rankings</h1>
    <ul>
      <li v-for="ranking in getTop10s" :key="ranking.id">
        {{ ranking.name }}
        <ul>
          <li v-for="playerRanking in ranking.player_rankings" :key="playerRanking.id">
            {{ playerRanking.rank }}. {{ playerRanking.player.name }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
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
