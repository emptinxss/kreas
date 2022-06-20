<template>
  <div class="text-start" v-if="product">
    <router-link
      class="text-decoration-none"
      @click="$emit('detail-product', product)"
      :to="{
        name: 'details',
        params: {
          name: product.name,
        },
      }"
    >
      <div class="product-card">
        <img :src="product.image" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title fw-bold card-title">{{ product.name }}</h5>

          <h5 class="fs-6 card-price">{{ product.price.toFixed(2) }} €</h5>
        </div>
      </div>
    </router-link>
  </div>
  <!-- loading -->
  <div class="spinner-border" role="status" v-else>
    <span class="visually-hidden">Loading...</span>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style>
.card-price {
  color: #9eb23b;
}
.card-title {
  color: #2c3e50;
}
.product-card {
  background: #fcf9c6;
  border: 0px solid;
  border-radius: 4px;
}
</style>
