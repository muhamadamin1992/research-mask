import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/cleave',
    name: 'Cleave',
    component: () => import(/* webpackChunkName: "cleave" */ '../views/Cleave.vue'),
  },
  {
    path: '/money',
    name: 'Money',
    component: () => import(/* webpackChunkName: "money" */ '../views/Money.vue'),
  },
  {
    path: '/vue-currency-input',
    name: 'VueCurrencyInput',
    component: () => import(/* webpackChunkName: "vue-currency-input" */ '../views/VueCurrencyInput.vue'),
  },
  {
    path: '/vanilla-masker',
    name: 'VanillaMasker',
    component: () => import(/* webpackChunkName: "vanilla-masker" */ '../views/VanillaMasker.vue'),
  },
  {
    path: '/v-mask',
    name: 'VMask',
    component: () => import(/* webpackChunkName: "v-mask" */ '../views/VMask.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
