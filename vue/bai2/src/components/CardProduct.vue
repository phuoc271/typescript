<template>
  <div class="card shadow card-product">
    <img :src="'/assets/images/' + product.img" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">
       Price: {{ product.price }}
      </p>
      <router-link class="btn btn-success" :to="'/foods/'+product.id"><b-icon-cart></b-icon-cart> View Detail</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
};
</script>

<style></style>
