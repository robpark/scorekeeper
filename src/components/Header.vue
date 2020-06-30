<template>
  <v-app-bar app color="light-green" dark shrink-on-scroll prominent>
    <v-toolbar-title>Scorekeeper</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text rounded to="/">Home</v-btn>
    <v-btn text rounded v-if="$auth.isAuthenticated" to="/ranking">Rankings</v-btn>
    <v-btn text rounded v-if="$auth.isAuthenticated" to="/scorer">Scorer</v-btn>
    <v-btn text rounded to="/about">About</v-btn>
    <v-btn text rounded v-if="!$auth.isAuthenticated && !$auth.loading" @click.prevent="login">
      Login
    </v-btn>
    <v-btn text rounded v-else @click.prevent="logout">Logout</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
  props: {
    login: {},
    logout: {}
  }
};
</script>
