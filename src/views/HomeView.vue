<template>
  <NavigationBar class="hide-arr" />
  <div class="bg-danger" v-if="error">{{ error }}</div>
  <div class="container-lg">
    <div class="row row-cols-2 row-cols-md-3 ms-1 me-1 mb-2 g-4">
      <ProductList
        v-for="product in items"
        :key="product"
        :product="product"
        @detail-product="detailProduct($event)"
      />
    </div>
  </div>
</template>

<script>
import getProducts from "@/services/Request";
import ProductList from "@/components/ProductList.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import store from "@/store";

export default {
  name: "HomeView",
  components: { ProductList, NavigationBar },

  setup() {
    const { items, error, loadProducts } = getProducts();
    loadProducts();

    const detailProduct = (product) => {
      store.commit("saveProduct", product);
    };
    return { items, error, detailProduct };
  },
};
</script>

<style>
.hide-arr .hide-arrow {
  display: none;
}
</style>
