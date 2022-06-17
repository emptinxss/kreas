<template>
  <nav class="navbar d-flex justify-content-between me-3 ms-3 mt-3">
    <a href="/" class="navbar-brand font hide-brand">KREAS</a>
    <router-link to="/">
      <font-awesome-icon icon="arrow-left-long" class="pb-2 hide-arrow" />
    </router-link>
    <div>
      <button class="btn position-relative hide-cart">
        <router-link to="/cart">
          <font-awesome-icon icon="cart-shopping" class="cart-color" />
          <span
            v-if="product.length"
            class="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger"
          >
            {{ product.length }}
          </span>
        </router-link>
      </button>
      <!-- <font-awesome-icon icon="magnifying-glass" /> -->
    </div>
  </nav>
</template>

<script>
import store from "@/store";
import { computed } from "@vue/runtime-core";
export default {
  setup() {
    /* const product = store.state.cart; */

    const product = computed(() => {
      return store.getters.cartItems;
    });
    return {
      product,
    };
  },
};
</script>

<style scoped>
.font {
  font-family: "Blanka", sans-serif;
  font-size: 2rem;
  color: #9eb23b;
}
.cart-color {
  color: #9eb23b;
}
</style>
