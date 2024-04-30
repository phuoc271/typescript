<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">Kulineran</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/foods">Foods</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <router-link class="nav-link" to="/cart">
                Cart
                <b-icon-bag></b-icon-bag>
                <span class="badge badge-success ml-2">{{ updateCart ? updateCart.length : quantity.length}}</span>
            </router-link> 
        </li>
      </ul>
    </div>
  </div>
</nav></template>

<script>
import axios from "axios";
export default {
    name: 'NavBar',
    data(){
      return{
        quantity:[]
      }
    },
    props:['updateCart'],
    methods: {
      setQuantity(data){
        this.quantity = data
      }
    },
    mounted() {
    axios
      .get("http://localhost:3000/cart")
      .then((response) => {
      // handle success
      this.setQuantity(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  },
}
</script>

<style>

</style>