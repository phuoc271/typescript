<template>
  <div class="cart">
    <NavBar :updateCart="cart" />
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
              <li class="breadcrumb-item active" aria-current="page">Cart</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <h2>Cart <strong></strong></h2>
        <div class="table mt-3">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Note</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Total Amount</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(cart, index) in cart" :key="cart.id">
                <th scope="row">{{ index + 1 }}</th>
                <td>
                  <img :src="'/assets/images/' + cart.products.img" class="img-fluid shadow" width="250" />
                </td>
                <td>
                  <strong>{{ cart.products.name }}</strong>
                </td>
                <td>{{ cart.note ? cart.note : "-" }}</td>
                <td>
                  <button type="button" class="btn btn-primary" @click="decreaseQuantity(index)">-</button>
                  {{ cart.quantity }}
                  <button type="button" class="btn btn-primary" @click="increaseQuantity(index)">+</button>
                </td>
                <td>{{ cart.products.price }}</td>
                <td>
                  <strong>{{ cart.products.price * cart.quantity }}</strong>
                </td>
                <td align="center" class="text-danger">
                  <b-icon-trash @click="deleteCart(cart.id)"></b-icon-trash>
                </td>
              </tr>

              <tr>
                <td colspan="6" align="right">
                  <strong>Total All:</strong>
                </td>
                <td align="right">
                  <strong>{{ totalAll }}</strong>
                </td>
                <td>
                  <router-link :to="{ name: 'PaymentView', params: { cart: cart } }">
                    <button type="button" class="btn btn-success" @click="processPayment">THANH TOÁN</button>
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import axios from "axios";

export default {
  name: "CartView",
  components: {
    NavBar,
  },
  data() {
    return {
      cart: [],
    };
  },
  props:{
    products: Object,
    quantity: Number,
  },
  methods: {
      ////cart (gio hang)
    setCart(data) {
      this.cart = data;
    },
    deleteCart(id) {
      axios
        .delete("http://localhost:3000/cart/" + id)
        .then(() => {
          alert("Removed from cart");
          //update data cart
          axios
            .get("http://localhost:3000/cart")
            .then((response) => this.setCart(response.data))
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    },
    decreaseQuantity(index) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity--;
      }
    },
    increaseQuantity(index) {
      if (this.cart[index].quantity < 20) {
        this.cart[index].quantity++;
      }
    },
    //////////////////////////////////////////////

    //////////nut thanh toan
    async processPayment() {
      // Gửi yêu cầu tạo đơn hàng đến server của bạn
      const order = await axios.post('http://localhost:3000/orders', { cart: this.cart });

      // Kiểm tra xem yêu cầu đã thành công hay không
      if (order.data && order.data.id) {
        // Kiểm tra xem đang ở trên trang "/payment" hay không
        if (this.$route.path !== '/payment') {
          // Nếu không, chuyển hướng người dùng đến trang thanh toán của bạn
          this.$router.push('/payment');
        }
      } else {
        // Xử lý lỗi khi tạo đơn hàng
        alert('Có lỗi xảy ra khi tạo đơn hàng!');
      }
    }

    /////////////////////////////////////////////////////
  },
  mounted() {
    axios
      .get("http://localhost:3000/cart")
      .then((response) => this.setCart(response.data))
      .catch((error) => console.log(error));
  },
  computed: {
    totalAll() {
      return this.cart.reduce(function (items, data) {
        return items + data.products.price * data.quantity;
      }, 0);
    },
  },
};
</script>
<style>
</style>