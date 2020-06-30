<template>
  <v-app>
    <Header :login="login" :logout="logout" />
    <v-spacer></v-spacer>
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from './components/Footer';
import Header from './components/Header';

export default {
  name: 'App',
  components: { Header, Footer },
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout({ returnTo: 'http://localhost:8080' });
    }
  }
};
</script>
