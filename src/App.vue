<template>
  <router-view v-slot="{ Component }">
    <keep-alive include="HomeView">
      <component :is="Component" :key="$route.fullPath"></component>
    </keep-alive>
  </router-view>
</template>

<script>
export default {
  mounted() {
    this.$store.commit("updateCartFromLocalStorage");
  },
};
</script>

<style>
@import "./assets/css/global.css";

#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
