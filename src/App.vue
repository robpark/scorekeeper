<template>
  <v-app>
    <v-app-bar app color="light-green" dark shrink-on-scroll prominent>
      <v-toolbar-title>Scorekeeper</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text rounded to="/">Home</v-btn>
      <v-btn text rounded to="/ranking">Rankings</v-btn>
      <v-btn text rounded v-if="$auth.isAuthenticated" to="/scorer">Scorer</v-btn>
      <v-btn text rounded to="/about">About</v-btn>
      <v-btn text rounded v-if="!$auth.isAuthenticated && !$auth.loading" @click.prevent="login">
        Login
      </v-btn>
      <v-btn text rounded v-else @click.prevent="logout">Logout</v-btn>
    </v-app-bar>
    <v-spacer></v-spacer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout({ returnTo: 'http://localhost:8080' });
      // this.$router.push({ path: '/' });
    }
  },

  data: () => ({
    //
  })
};
</script>
