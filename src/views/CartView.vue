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
      <div
        class="pe-4 ps-4 fw-bold mb-0 cart-total mt-4 fs-3 align-items-end d-flex flex-row justify-content-between"
      >
        Total:
        <div>
          <div v-if="cartTotalQuantity > 2" class="">
            <span class="fw-light text-decoration-line-through fs-6">
              {{ cartTotal }} €
            </span>
            <span
              class="fw-light fs-6 bg-danger rounded p-1 ms-2 fw-bold text-light"
              >-10%</span
            >
          </div>
          {{ cartTotalDiscount }} €
        </div>
      </div>

      <div class="fs-3 pe-4 ps-4">
        <button
          class="btn btn-warning mt-3 w-100"
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
    cartTotalDiscount() {
      return store.getters.cartTotalDiscount.toFixed(2); // prendiamo il cart dallo store
    },
    cartTotal() {
      return store.getters.cartTotal.toFixed(2); // prendiamo il cart dallo store
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
    const cartTotalQuantity = computed(() => {
      return store.getters.cartTotalQuantity;
    });
    const removeCart = () => {
      store.commit("removeCart"); //bisogna usare il commit per accedere ad una mutation dello store
    };

    return { products, removeCart, cartTotalQuantity };
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
