<template>
  <div class="food-detail">
    <NavBar />
    <div class="container">
      <!-- breadcrumb -->
      <div class="row mt-5">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/foods" class="text-dark">Foods</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Food Order
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-5">
          <img :src="'/assets/images/' + product.img" class="img-fluid shadow">
        </div>
        <div class="col-md-6">
          <h2><strong>{{ product.name }}</strong></h2>
          <hr>
          <h4>Price: <strong>{{ product.price }}</strong></h4>
          <hr>
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="quantity">Quantity</label>
              <input type="number" class="form-control" v-model="cart.quantity">
            </div>
            <div class="form-group">
              <label for="note">Note</label>
              <textarea v-model="cart.note" class="form-control" placeholder="Ví dụ: ít cay, cay nhiều, không cay ..."></textarea>
            </div>
            <button type="submit" class="btn btn-success" @click="addToCart"><b-icon-cart></b-icon-cart>Add to Cart</button>
          </form>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import axios from "axios";

export default {
  name: "FoodDetail",
  components: {
    NavBar,
  },
  data() {
    return {
      product: {},
      cart: {}
    }
  },
  methods: {
    setProducts(data){
      this.product = data
    },
    addToCart(){
      if(this.cart.quantity){
        this.cart.products= this.product;
      axios
      .post("http://localhost:3000/cart", this.cart)
      .then(()=>{
        this.$router.push({path: "/cart"})
        // this.$toast.success('Saved successfully.', {
        //   type: "success",
        //   position: "top-right",
        //   duration: 3000,
        //   dismissible: true
        // })
        alert("Saved successfully.")
      })
      .catch((error) => console.log(error))
      }else{
        // this.$toast.error('Quantity cannot be left blank', {
        //   type: "error",
        //   position: "top-right",
        //   duration: 3000,
        //   dismissible: true
        // })
        alert("Quý khách vui lòng không để trống số lượng!")
      }
    }
  },
  mounted() {
    axios
        .get("http://localhost:3000/products/"+this.$route.params.id)
        .then((response) => this.setProducts(response.data))
        .catch((error) => console.log(error));
  },
};
</script>

<style></style>
