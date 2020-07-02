<template>
  <v-card>
    <v-card-title>{{ ranking.name }}</v-card-title>
    <v-card-text>
      <ol>
        <li v-for="playerRanking in ranking.player_rankings" :key="playerRanking.id">
          {{ playerRanking.player.name }}
        </li>
      </ol>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'LeagueTop10',
  props: {
    ranking: {}
  }
};
</script>
