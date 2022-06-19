<template>
  <NavigationBar class="hide-logo-cart" />
  <h1>Cart</h1>
  <div class="cart">
    <CartProducts
      v-for="product in products"
      :key="product.name"
      :product="product"
    />
    <CartPayment v-if="products.length" />

    <div v-if="!products.length">
      <p>Your cart is empty.</p>
    </div>
  </div>
</template>

<script>
import CartProducts from "../components/CartProducts.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import store from "@/store";
import { computed } from "@vue/runtime-core";
import swal from "sweetalert";
import CartPayment from "@/components/CartPayment.vue";

export default {
  components: { CartProducts, NavigationBar, CartPayment },

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
.buy-button {
  width: 100%;
}

.total {
  justify-content: space-between;
}

@media screen and (min-width: 580px) {
  .custom {
    display: flex;
    justify-content: end;
  }
  .buy-button {
    width: 180px;
  }
  .total {
    justify-content: end;
  }
}
</style>
