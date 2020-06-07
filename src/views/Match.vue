<template>
  <div class="match">
    <div class="players">
      <span v-for="(player, idx) in players" :key="idx">
        {{ player }} <span v-if="idx === 0">-</span>
      </span>
    </div>
    <div class="sets">
      <span v-for="(set, idx) in match.result" :key="idx">
        {{ set }} <span v-if="idx === 0">-</span>
      </span>
    </div>
    <div class="game">
      <table>
        <tr v-for="(game, idx) in match['sets'][0]['games']" :key="idx">
          <td class="game-count">{{ match["sets"][0]["result"][0] }} |</td>
          <td class="point" v-for="(gamePoints, idx) in game" :key="idx">
            <span v-for="(point, idx) in gamePoints" :key="idx">
              <span v-if="idx % 2 === 0">{{ point }}</span>
            </span>
          </td>
          <td class="action">
            <button>wins point</button>
          </td>
        </tr>
        <tr v-for="(game, idx) in match['sets'][0]['games']" :key="idx">
          <td class="game-count">{{ match["sets"][0]["result"][1] }} |</td>
          <td class="point" v-for="(gamePoints, idx) in game" :key="idx">
            <span v-for="(point, idx) in gamePoints" :key="idx">
              <span v-if="idx % 2 === 1">{{ point }}</span>
            </span>
          </td>
          <td class="action">
            <button>wins point</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Match",
  data() {
    return {
      players: ["Federer", "Nadal"],
      match: {
        result: [0, 0],
        sets: [
          {
            result: [1, 2],
            games: [
              [
                [0, 15],
                [15, 15],
                [30, 15]
              ]
            ]
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
.match {
  border: 1px solid darkgreen;
}

.players {
  font-size: x-large;
  background-color: darkgreen;
  color: white;
}

.game {
  margin-left: 20px;
}
</style>
