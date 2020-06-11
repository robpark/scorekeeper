<template>
  <div class="scorer">
    <div class="new-match">
      <button @click="newMatch()">New Match ?</button>
    </div>
    <div v-if="newMatchClicked">
      Select players
    </div>
    <div class="padding" />
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
      <table v-for="(game, idx) in match['sets'][0]['games']" :key="idx">
        <tr>
          <td class="game-count">{{ match['sets'][0]['result'][0] }} |</td>
          <td class="point" v-for="(gamePoints, idx) in game" :key="idx">
            <span v-for="(point, idx) in gamePoints" :key="idx">
              <span v-if="idx % 2 === 0">{{ point }}</span>
            </span>
          </td>
          <transition name="bounce">
            <td v-if="show">
              40
            </td>
          </transition>
          <td class="action">
            <button v-on:click="show = !show">wins point</button>
          </td>
        </tr>
        <tr>
          <td class="game-count">{{ match['sets'][0]['result'][1] }} |</td>
          <td class="point" v-for="(gamePoints, idx) in game" :key="idx">
            <span v-for="(point, idx) in gamePoints" :key="idx">
              <span v-if="idx % 2 === 1">{{ point }}</span>
            </span>
          </td>
          <transition name="bounce">
            <td v-if="show">
              40
            </td>
          </transition>
          <td class="action">
            <button v-on:click="show = !show">wins point</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'scorer',
  data() {
    return {
      players: ['Federer', 'Nadal'],
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
      },
      show: false,
      newMatchClicked: false
    };
  },
  methods: {
    newMatch() {
      this.newMatchClicked = true;
    }
  }
};
</script>

<style scoped>
.padding {
  margin: 50px;
}

.scorer {
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

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
