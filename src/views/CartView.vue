<template>
  <NavigationBar class="hide-logo-cart" />
  <h1>Cart</h1>
  <div class="cart">
    <CartProducts
      v-for="product in products"
      :key="product.name"
      :product="product"
    />
  </div>
  <CartPayment v-if="products.length" />

  <div v-if="!products.length">
    <p>Your cart is empty.</p>
  </div>
</template>

<script setup>
import { computed } from "@vue/runtime-core";
import NavigationBar from "@/components/NavigationBar.vue";
import CartProducts from "../components/CartProducts.vue";
import CartPayment from "@/components/CartPayment.vue";
import store from "@/store";

const products = computed(() => {
  return store.getters.cartItems;
});
</script>

<style>
.hide-logo-cart .hide-cart {
  display: none;
}
.hide-logo-cart .hide-brand {
  display: none;
}
</style>
