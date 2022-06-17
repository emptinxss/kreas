<template>
  <!--   <div class="cart-item-card">
    <div class="header">
      <h3>{{ product.name }}</h3>
      <h4>In Cart: {{ product.quantity }}</h4>
      <h4>Total Cost: {{ itemCost.toFixed(2) }}</h4>
    </div>
    <p>{{ description }}</p>
  </div> -->
  <div class="container">
    <div class="d-flex justify-content-center row">
      <div class="col">
        <div
          class="d-flex flex-row justify-content-between align-items-center p-2 bg-warning mt-4 rounded"
        >
          <div class="mr-1">
            <img class="rounded" :src="product.image" width="70" />
          </div>
          <div class="d-flex flex-column align-items-center product-details">
            <span class="fw-bold">{{ product.name }}</span>
            <div class="d-flex flex-row">
              <div class="d-flex flex-row align-items-center qty">
                <font-awesome-icon
                  icon="minus"
                  class="pe-3"
                  @click="removeFromCart"
                />
                <h5 class="text-grey mt-1 mr-1 ml-1">{{ product.quantity }}</h5>
                <font-awesome-icon
                  icon="plus"
                  class="ps-3"
                  @click="addToCart"
                />
              </div>
            </div>
          </div>

          <div>
            <h5 class="text-grey">{{ itemCost.toFixed(2) }} €</h5>
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

<script>
export default {
  props: ["product"],
  computed: {
    itemCost() {
      return this.product.price * this.product.quantity;
    },
    description() {
      return this.product.description.substring(0, 120);
    },
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.product); //bisogna usare il commit per accedere ad una mutation dello store
    },
    removeFromCart() {
      this.$store.commit("removeFromCart", this.product); //bisogna usare il commit per accedere ad una mutation dello store
    },
    deleteFromCart() {
      this.$store.commit("deleteFromCart", this.product); //bisogna usare il commit per accedere ad una mutation dello store
    },
  },
};
</script>

<style>
.cart-item-card {
  margin: 5%;
  background: white;
  box-shadow: 0 0 5px gray;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
}

.header {
  display: flex;
  justify-content: space-around;
}
.product-details {
  width: 7rem;
}
.col {
  height: auto;
}
</style>
