<template>
  <div>
    <div
      class="pe-4 ps-4 fw-bold mb-0 cart-total mt-4 fs-3 align-items-end d-flex flex-row total"
    >
      Total:
      <div>
        <div v-if="cartTotalQuantity > 3" class="">
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

    <div class="fs-3 pe-4 ps-4 custom">
      <button
        class="btn btn-warning mt-3 buy-button"
        @click="
          modal();
          removeCart();
        "
      >
        BUY
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import store from "@/store";
import swal from "sweetalert";

export default {
  computed: {
    cartTotal() {
      return store.getters.cartTotal.toFixed(2); // prendiamo il cart dallo store
    },
    cartTotalDiscount() {
      return store.getters.cartTotalDiscount.toFixed(2); // prendiamo il cart dallo store
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
    const cartTotalQuantity = computed(() => {
      return store.getters.cartTotalQuantity;
    });
    const removeCart = () => {
      store.commit("removeCart"); //bisogna usare il commit per accedere ad una mutation dello store
    };
    return {
      cartTotalQuantity,
      removeCart,
    };
  },
};
</script>

<style></style>
