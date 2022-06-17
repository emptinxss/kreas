<template>
  <nav class="navbar d-flex justify-content-between me-3 ms-3 mt-3 h">
    <a href="/" class="navbar-brand font hide-brand">KREAS</a>
    <router-link to="/">
      <font-awesome-icon
        icon="arrow-left-long"
        class="pb-2 hide-arrow arrow-color navbar-brand"
      />
    </router-link>
    <div>
      <button class="btn position-relative hide-cart">
        <router-link to="/cart">
          <font-awesome-icon icon="cart-shopping" class="cart-color" />
          <span
            v-if="product.length"
            class="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-warning"
          >
            {{ quantity }}
          </span>
        </router-link>
      </button>
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
    const quantity = computed(() => {
      return store.getters.cartTotalQuantity;
    });
    console.log(quantity.value);
    return {
      product,
      quantity,
    };
  },
};
</script>

<style scoped>
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
.h {
  height: 75px;
}
</style>
