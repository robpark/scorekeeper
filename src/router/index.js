import Vue from 'vue';
import VueRouter from 'vue-router';
import { authGuard } from '../auth';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  },
  {
    path: '/match',
    name: 'Match',
    component: () => import(/* webpackChunkName: "match" */ '../views/Match.vue')
  },
  {
    path: '/ranking',
    name: 'Ranking',
    component: () => import(/* webpackChunkName: "ranking" */ '../views/Ranking.vue')
  },
  {
    path: '/scorer',
    name: 'Scorer',
    component: () => import(/* webpackChunkName: "scorer" */ '../views/Scorer.vue'),
    beforeEnter: authGuard
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: 'about' */ '../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
