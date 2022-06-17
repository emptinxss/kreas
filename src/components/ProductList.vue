<template>
  <div class="text-start" v-if="product">
    <router-link
      class="link"
      @click="$emit('detail-product', product)"
      :to="{
        name: 'details',
        params: {
          name: product.name,
        },
      }"
    >
      <div class="col">
        <div class="carda">
          <img :src="product.image" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title fw-bold card-title">{{ product.name }}</h5>

            <h5 class="fs-6 card-price">{{ product.price.toFixed(2) }} €</h5>
          </div>
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
  mounted() {
    console.log("LISTA CARICATA");
  },
};
</script>

<style>
.link {
  text-decoration: none;
}
.card-price {
  color: #c7d36f;
}
.card-title {
  color: #9eb23b;
}
.carda {
  background: #fcf9c6;
  border: 0px solid;
  border-radius: 4px;
}
</style>
