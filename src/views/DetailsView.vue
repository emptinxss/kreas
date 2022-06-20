<template>
  <NavigationBar class="hide-logo" />
  <DetailsProduct v-for="product in load" :key="product" :product="product" />
</template>

<script setup>
import DetailsProduct from "@/components/DetailsProduct.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import store from "@/store";
import { computed, defineProps } from "vue";

defineProps({
  name: String,
});

const load = computed(() => {
  return store.getters.loadDetails;
});
</script>

<style>
.hide-logo .hide-brand {
  display: none;
}
</style>
