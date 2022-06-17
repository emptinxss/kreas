<template>
  <div class="m-1">
    <img :src="product.image" style="max-width: 18rem" />
    <h3 class="fs-1 fw-bold pt-3">{{ product.name }}</h3>
    <p class="description text-start p-2">{{ product.description }}</p>
    <h3 c>{{ product.price.toFixed(2) }}€</h3>

    <div class="button-container">
      <button
        class="btn btn-warning mt-3 w-75"
        @click="
          addToCart();
          modal();
        "
      >
        Add to cart
      </button>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";

export default {
  props: ["product"],

  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.product); //bisogna usare il commit per accedere ad una mutation dello store
    },

    modal() {
      swal({
        text: "Added to cart!",
        buttons: false,
        timer: 1000,
        icon: "info",
        className: "modal-add-to-cart",
      });
    },
  },
  computed: {
    product_total() {
      return this.$store.getters.productQuantity(this.product); //va nello store  nel getter
    },
  },
};
</script>

<style>
.modal-add-to-cart {
  max-width: 70%;
  max-height: 30%;
}
.btn-colora {
  background-color: #57be6c;
}
</style>
