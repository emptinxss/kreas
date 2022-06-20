<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <div class="col">
        <div class="d-flex flex-row cart-items align-items-center p-2 mt-4">
          <div class="mr-1">
            <img class="rounded" :src="product.image" width="70" />
          </div>
          <div
            class="d-flex flex-column align-items-center product-details ms-md-4 me-md-4"
          >
            <span class="fw-bold">{{ product.name }}</span>
            <div class="d-flex flex-row">
              <div class="d-flex flex-row align-items-center">
                <font-awesome-icon
                  icon="minus"
                  class="pe-3"
                  @click="removeQuantity"
                />
                <h5 class="text-grey mt-1 mr-1 ml-1">{{ product.quantity }}</h5>
                <font-awesome-icon
                  icon="plus"
                  class="ps-3"
                  @click="addQuantity"
                />
              </div>
            </div>
          </div>

          <div class="me-md-5">
            <h5 class="mb-0">{{ itemCost.toFixed(2) }} €</h5>
          </div>
          <div class="d-flex align-items-center">
            <font-awesome-icon
              icon="trash-can"
              class="text-danger"
              @click="deleteFromCart"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import store from "@/store";
import { defineProps } from "vue";
import { computed } from "@vue/runtime-core";

const props = defineProps({
  product: Object,
});

const itemCost = computed(() => {
  return props.product.price * props.product.quantity;
});

const addQuantity = () => {
  store.commit("addQuantity", props.product);
};
const removeQuantity = () => {
  store.commit("removeQuantity", props.product);
};
const deleteFromCart = () => {
  store.commit("deleteFromCart", props.product);
};
</script>

<style>
.product-details {
  width: 7rem;
}

.cart-items {
  justify-content: space-between;
}
@media screen and (min-width: 767px) {
  .cart-items {
    justify-content: center;
  }
  .product-details {
    width: 356px;
  }
}
</style>
