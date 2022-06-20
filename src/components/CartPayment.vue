<template>
  <div>
    <div class="total fs-3 fw-bold d-flex align-items-end">
      Total:
      <div>
        <div v-if="cartTotalQuantity > 3">
          <span class="fw-light text-decoration-line-through fs-6">
            {{ cartTotalPrice }} €
          </span>
          <span
            class="fw-light fs-6 bg-danger rounded p-1 ms-2 fw-bold text-light"
            >-10%</span
          >
        </div>
        <div class="text-end">{{ cartTotalDiscount }} €</div>
      </div>
    </div>

    <div class="fs-3 pe-4 ps-4 buy-btn">
      <button
        class="btn btn-warning mt-3 buy-button"
        @click="
          modal();
          removeAllCart();
        "
      >
        BUY
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "@vue/runtime-core";
import store from "@/store";
import swal from "sweetalert";

const cartTotalPrice = computed(() => {
  return store.getters.cartTotalPrice.toFixed(2);
});
const cartTotalDiscount = computed(() => {
  return store.getters.cartTotalDiscount.toFixed(2);
});

const modal = () => {
  swal({
    title: "Done!",
    text: "Thank you for your purchase.",
    icon: "success",
    buttons: false,
    timer: 2000,
    className: "modal-buy",
  });
};

const cartTotalQuantity = computed(() => {
  return store.getters.cartTotalQuantity;
});
const removeAllCart = () => {
  store.commit("removeAllCart");
};
</script>

<style>
.total {
  justify-content: space-between;
  padding: 0 1.5rem;
  margin-top: 1.5rem;
}

.buy-button {
  width: 100%;
}
.modal-buy {
  max-width: 85%;
}

@media screen and (min-width: 580px) {
  .total {
    justify-content: end;
  }
  .buy-btn {
    display: flex;
    justify-content: end;
  }
  .buy-button {
    width: 180px;
  }
}
</style>
