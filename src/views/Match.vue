<template>
  <div class="match">
    <div class="players">
      <span v-for="(player, idx) in matchPlayers" :key="idx">
        {{ player }} <span v-if="idx === 0">-</span>
      </span>
    </div>
    <div class="sets">
      <span v-for="(set, idx) in this.matches[0]['result']" :key="idx">
        {{ set }} <span v-if="idx === 0">-</span>
      </span>
      <div v-for="(setScore, idx) in this.matches[0]['sets']" :key="'score' + idx">
        Set {{ idx + 1 }}: {{ setScore['result'] }} <br />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Match',
  computed: {
    ...mapGetters(['matches']),
    matchPlayers() {
      return this.matches[0].players;
    }
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
