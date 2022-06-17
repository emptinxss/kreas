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
    this.$store.commit("updateCartFromLocalStorage"); //carichiamo i dati dal localstorage
  },
};
</script>

<style>
@font-face {
  font-family: "Blanka";
  src: url("./assets/fonts/Blanka-Regular.otf");
}
html body {
  background: #e0deca;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
