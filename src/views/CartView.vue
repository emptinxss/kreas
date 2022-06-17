<template>
  <NavigationBar class="hide-logo-cart" />
  <h1>Cart</h1>
  <div class="cart">
    <CartProducts
      v-for="product in products"
      :key="product.name"
      :product="product"
    />
    <div v-if="products.length">
      <div>
        <p class="fw-bold mb-0 mt-4 cart-total fs-3">
          Total : {{ cartTotal }} €
        </p>
      </div>
      <div class="fs-3">
        <button
          class="btn btn-primary mt-3 w-75"
          @click="
            modal();
            removeCart();
          "
        >
          BUY
        </button>
      </div>
    </div>
    <div v-if="products.length === 0">
      <p>Your cart is empty</p>
    </div>
  </div>
</template>

<script>
import CartProducts from "../components/CartProducts.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import store from "@/store";
import { computed } from "@vue/runtime-core";
import swal from "sweetalert";

export default {
  components: { CartProducts, NavigationBar },

  /* computed: {
    products() {
      return this.$store.getters.cartItems; // prendiamo il cart dallo store
    },} */
  computed: {
    cartTotal() {
      return this.$store.getters.cartTotal.toFixed(2); // prendiamo il cart dallo store
    },
  },
  methods: {
    modal() {
      swal({
        title: "Done!",
        text: "Thank you for your purchase.",
        icon: "success",
        buttons: false,
        timer: 2000,
        className: "modal-buy",
      });
    },
  },
  setup() {
    /* const product = store.state.cart; */

    const products = computed(() => {
      return store.getters.cartItems;
    });
    const removeCart = () => {
      store.commit("removeCart"); //bisogna usare il commit per accedere ad una mutation dello store
    };

    return { products, removeCart };
  },
};
</script>

<style>
.modal-buy {
  max-width: 70%;
}

.hide-logo-cart .hide-cart {
  display: none;
}
.hide-logo-cart .hide-brand {
  display: none;
}
</style>
