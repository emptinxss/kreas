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
        <div class="card">
          <img :src="product.image" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ product.name }}</h5>

            <h5 class="fs-6">{{ product.price.toFixed(2) }} €</h5>
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
  color: black;
}
</style>
