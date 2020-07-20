<template>
  <div id="app">
    <navbar-nav />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarNav from '@/components/NavbarNav.vue';

export default {
  name: 'Home',
  components: {
    NavbarNav,
  },
};
</script>
