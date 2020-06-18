<template>
  <div class="rankings">
    <h1>Rankings</h1>
    <ul>
      <li v-for="ranking in rankings" :key="ranking.id">{{ ranking.name }}
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
export default {
  name: 'Ranking',
  data() {
    return {
      rankings: []
    };
  },
  created() {
    // const url = `http://api.sportradar.us/tennis-t2/en/players/rankings.json?api_key=${apiKey}`;
    const url = 'https://o74cc4ab99.execute-api.us-east-2.amazonaws.com/tennis-rankings-test';
    const config = {
      headers: { 'content-type': 'application/json' }
    };

    this.$axios.get(url, config).then(response => {
      let data = response.data;
      console.log(data);
      // debugger;
      this.rankings = data.rankings;
    });
  }
};
</script>

<style scoped></style>
