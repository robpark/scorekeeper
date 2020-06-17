import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import { Auth0Plugin } from './auth';
import { domain, clientId } from '../auth_config.json';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(appState && appState.targetUrl ? appState.targetUrl : window.location.pathname);
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
