<template>
  <div class="m-1">
    <img :src="product.image" style="max-width: 18rem" />
    <h3 class="fs-1 fw-bold pt-3">{{ product.name }}</h3>
    <p class="description p-2">{{ product.description }}</p>
    <h3 c>{{ product.price.toFixed(2) }}€</h3>

    <div>
      <button
        class="btn btn btn-warning mt-3 add-to-cart"
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

<script setup>
import store from "@/store";
import swal from "sweetalert";
import { defineProps } from "vue";

const props = defineProps({
  product: Object,
});

const addToCart = () => {
  store.commit("addQuantity", props.product);
};
const modal = () => {
  swal({
    text: "Added to cart!",
    buttons: false,
    timer: 1000,
    icon: "info",
    className: "modal-add-to-cart",
  });
};
</script>

<style>
.description {
  text-align: start;
}
.add-to-cart {
  width: 50%;
}
.modal-add-to-cart {
  max-width: 70%;
  max-height: 30%;
}

@media screen and (min-width: 580px) {
  .description {
    text-align: center;
  }
  .add-to-cart {
    width: 288px;
  }
}
</style>
