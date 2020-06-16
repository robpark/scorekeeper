<template>
  <div class="home">
    <img alt="Scorekeeper" src="../assets/tennis-ball.png" height="100" width="100" />
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
    <hr />
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.username }}: {{ user.email }}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import PlayerProfile from '../components/PlayerProfile';

export default {
  name: 'Home',
  data() {
    return {
      users: []
    };
  },
  components: {
    PlayerProfile
  },
  created() {
    this.$axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
      this.users = response.data;
    });
    console.log(this.$store);
  }
};
</script>
