<template>
  <div class="con-type-example">
    <vs-navbar class="nabarx">
      <div slot="title">
        <vs-navbar-title>
          Mask
        </vs-navbar-title>
      </div>

      <vs-navbar-item index="0">
        <router-link to="/">Home</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="4">
        <router-link to="/vanilla-masker">VanillaMasker</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <router-link to="/money">V-Money</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="5">
        <router-link to="/v-mask">VMask</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="3">
        <router-link to="/vue-currency-input">VueCurrencyInput</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <router-link to="/cleave">cleave.js</router-link>
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>
<style lang="scss">
.con-type-example {
  .vs-navbar {
    margin: 10px 0 30px;
  }
}
</style>
<script>
export default {
  name: 'NavbarNav',
};
</script>
