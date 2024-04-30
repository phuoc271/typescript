<template>
    <div>
      <NavBar />
      <img class="logo" style="width: 200px;" src="../assets/images/logo.png" alt="">
      <form @submit.prevent="handleSubmit">
        <h1>Forgot Password</h1>
        <div class="register">
          <input type="email" v-model="email" placeholder="Email">
          <small id="emailError"></small>
          <br>
          <button type="submit">Send</button>
          <p>
            <router-link class="thea2" to="/login">Login</router-link>
          </p>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import NavBar from "@/components/NavBar.vue";
  import axios from "axios";
  
  export default {
    name: 'ForgotPassword',
    data() {
      return {
        email: ''
      }
    },
    components: {
      NavBar,
    },
    methods: {
      async handleSubmit() {
        try {
          const response = await axios.post("http://localhost:3000/user", {
            email: this.email
          });
  
          console.log(response);
          alert("Mật khẩu mới đã được gửi đến email của bạn. Vui lòng kiểm tra hộp thư đến.");
        } catch (error) {
          console.error("Error:", error);
          alert("Đã có lỗi xảy ra. Vui lòng thử lại sau.");
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .thea {
    padding: auto;
  }
  </style>
  