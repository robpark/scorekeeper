<template>
  <v-container class="rankings">
    <h1>Pro Tennis Top 10s</h1>
    <v-row>
      <v-col v-for="ranking in getTop10s" :key="ranking.id">
        <LeagueTop10 :ranking="ranking" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import LeagueTop10 from "../components/LeagueTop10";

export default {
  name: 'Ranking',
  components: { LeagueTop10 },
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

