<template>
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
</template>

<script>
export default {
  name: 'LeagueTop10',
  props: {
    ranking: {}
  }
};
</script>
