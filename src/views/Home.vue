<template>
  <div class="home">
    <img
      alt="Scorekeeper"
      src="../assets/tennis-ball.png"
      height="100"
      width="100"
    />
    <h1>Scorekeeper</h1>
    <hr />
    <PlayerProfile ranking="4">
      <template v-slot:player>
        <h3>Roger Federer</h3>
      </template>
      <template v-slot:home>
        <h3>Switzerland</h3>
      </template>
      <template v-slot:default>
        Recently had knee surgery
      </template>
    </PlayerProfile>
  </div>
</template>

<script>
// @ is an alias to /src
import PlayerProfile from "../components/PlayerProfile";

export default {
  name: "Home",
  components: {
    PlayerProfile
  },
  created() {
    console.log(this.$store);
  }
};
</script>
