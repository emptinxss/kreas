<template>
  <NavigationBar class="hide-logo" />
  <DetailsProduct
    v-for="product in load"
    :key="product.name"
    :product="product"
  />
</template>

<script>
import DetailsProduct from "@/components/DetailsProduct.vue";
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  components: { DetailsProduct, NavigationBar },
  props: ["name"],
  setup() {
    const load = JSON.parse(localStorage.getItem("selectedProducts"));

    return { load };
  },
};
</script>

<style>
.hide-logo .hide-brand {
  display: none;
}
</style>
