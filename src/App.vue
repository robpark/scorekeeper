<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/profile">Profiles</router-link>
      |
      <router-link to="/match">Matches</router-link>
      |
      <router-link to="/ranking">Rankings</router-link>
      |
      <span v-if="$auth.isAuthenticated">
        <router-link to="/scorer">Scorer</router-link>
        |
      </span>
      <router-link to="/about">About</router-link>
      <div v-if="!$auth.isAuthenticated && !$auth.loading" class="nav-item">
        <button id="qsLoginBtn" class="btn btn-primary btn-margin" @click.prevent="login">
          Login
        </button>
      </div>
      <div v-else class="nav-item">
        <button id="qsLogoutBtn" class="btn btn-primary btn-margin" @click.prevent="logout">
          Logout
        </button>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout({ returnTo: 'http://localhost:8080' });
      // this.$router.push({ path: '/' });
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
