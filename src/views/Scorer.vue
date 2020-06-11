<template>
  <div class="scorer">
    <div class="new-match">
      <button @click="newMatch()">New Match ?</button>
    </div>
    <div v-if="newMatchClicked">
      Select players
      <span v-for="(player, idx) in players" :key="idx">
        <input type="checkbox" :id="idx" :name="idx" :value="idx" :ref="`player${idx}`" />
        <label :for="idx">{{ player }}</label>
      </span>
      <button @click="play()">Let's play</button>
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
import { mapGetters } from 'vuex';

export default {
  name: 'Scorer',
  data() {
    return {
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
  computed: {
    ...mapGetters(['newMatchData', 'players'])
  },
  methods: {
    newMatch() {
      this.newMatchClicked = true;
    },
    play() {
      let selected = [
        this.$refs['player0'][0].checked,
        this.$refs['player1'][0].checked,
        this.$refs['player2'][0].checked
      ];
      let playing = [];
      for (let i = 0; i < this.players.length; i++) {
        if (selected[i]) playing.push(this.players[i]);
      }
      console.log(selected);
      console.log(playing);
      this.$store.dispatch('addNewMatchPlayers', playing);
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
