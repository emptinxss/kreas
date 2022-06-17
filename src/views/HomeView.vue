<template>
  <NavigationBar class="hide-arr" />
  <div class="bg-danger" v-if="error">{{ error }}</div>
  <div class="row row-cols-2 ms-1 me-1 g-4">
    <ProductList
      v-for="product in items"
      :key="product.name"
      :product="product"
      @detail-product="detailProduct($event)"
    />
  </div>
</template>

<script>
import getProducts from "@/services/Request";
import ProductList from "@/components/ProductList.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import { useStore } from "vuex"; // aggiungiamo lo useStore da vuex
import { ref } from "@vue/reactivity";

export default {
  name: "HomeView",
  components: { ProductList, NavigationBar },

  setup() {
    const store = useStore();
    const product = ref(null);

    const { items, error, loadProducts } = getProducts();
    loadProducts();

    function detailProduct(product) {
      this.product = product;
      console.log(this.product);
      store.commit("save", product);
    }
    return { items, error, detailProduct, product };
  },
};
</script>

<style>
.hide-arr .hide-arrow {
  display: none;
}
</style>
