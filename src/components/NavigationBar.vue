<template>
  <nav class="navbar nav">
    <a href="/" class="navbar-brand font hide-brand">KREAS</a>
    <router-link to="/">
      <font-awesome-icon
        icon="arrow-left-long"
        class="pb-2 hide-arrow arrow-color navbar-brand"
      />
    </router-link>
    <div>
      <router-link to="/cart">
        <button class="btn position-relative hide-cart">
          <font-awesome-icon icon="cart-shopping" class="cart-color" />
          <span
            v-if="product.length"
            class="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-warning"
          >
            {{ quantity }}
          </span>
        </button>
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import store from "@/store";
import { computed } from "@vue/runtime-core";

const product = computed(() => {
  return store.getters.cartItems;
});
const quantity = computed(() => {
  return store.getters.cartTotalQuantity;
});
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  margin: 1rem 1rem 0 1rem;
  height: 75px;
}
.font {
  font-family: "Anurati", sans-serif;
  font-size: 2rem;
  color: #2c3e50;
}
.cart-color {
  color: #2c3e50;
}
.arrow-color {
  color: #2c3e50;
}
</style>
