<template>
    <div class="admin-dashboard">
      <div class="sidebar">
        <div class="logo"></div>
          <ul class="menu">
            <li :class="{ active: activeTab === 'dashboard' }">
              <router-link to="/admin">
                <i class="fas fa-tachometer-alt"></i>
                <span>Dashboard</span>
              </router-link>
            </li>
            <li :class="{ active: activeTab === 'profile' }">
              <router-link to="/AddAdmin">
                <i class="fas fa-user"></i>
                <span>Add Admin</span>
              </router-link>
            </li>
            <li :class="{ active: activeTab === 'statistics' }">
              <router-link to="/AddProduct">
                <i class="fas fa-chart-bar"></i>
                <span>Add Product</span>
              </router-link>
            </li>
            <li :class="{ active: activeTab === 'careers' }">
              <router-link to="/AdminLogin">
                <i class="fas fa-briefcase"></i>
                <span>Login</span>
              </router-link>
            </li>
            <!-- <li :class="{ active: activeTab === 'settings' }">
              <a href="#" @click.prevent="changeTab('settings')">
                <i class="fas fa-cog"></i>
                <span>Settings</span>
              </a>
            </li> -->
            <li class="logout" :class="{ active: activeTab === 'logout' }">
              <router-link to="/AdminLogin">
                  <i class="fas fa-sign-out-alt"></i>
                  <span>Log Out</span>
              </router-link>
            </li>
          </ul>
      </div>
      <div class="main--content">
        <div class="header--wrapper">
          <div class="header--title">
            <span>Primary</span>
            <h2>Add Product</h2>
          </div>
          <div class="user--info">
            <div class="search--box">
              <i class="fa-solid fa-search"></i>
              <input type="text" placeholder="Search">
            </div>
          </div>
        </div>
        <div class="card--container">
          <form class="product-form" @submit.prevent="addProduct">
              <div class="product-box">
                  <label>Product ID: </label>
                  <input type="text" v-model="newProduct.id" class="product-form" id="productCode" placeholder="Product ID...">
              </div>
              <div class="product-box">
                  <label>Product:</label>
                  <input type="text" v-model="newProduct.name" class="product-form" id="productName" placeholder="Product...">
              </div>
              <div class="product-box">
                  <label>Image:</label>
                      <input type="text" v-model="newProduct.img" class="product-form" id="productImageURL" placeholder="Image URL...">
              </div>
              <div class="product-box">
                  <label>Price:</label>
                  <input type="text" v-model="newProduct.price" class="product-form" id="productName" placeholder="Product...">
              </div>
              <div class="product-box">
                  <label>Status:</label>
                  <input type="text" v-model="newProduct.status" class="product-form" id="productDescription" placeholder="Ready...">
              </div>
              <button type="submit" class="product-button">Add Product</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import axios from 'axios';
  export default {
    name: 'AddProduct',
    data() {
      return {
        newProduct: {
        id: "",
        name: "",
        image: "",
        price: 0,
        status: "",
        },
      addSuccess: false,
      addError: ''
      };
    },
    methods: {
    addProduct() {
      // Gửi yêu cầu POST để thêm admin mới
      axios.post('http://localhost:3000/products', this.newProduct)
        .then(() => {
          // Reset form và hiển thị thông báo thành công
          this.newProduct.id="";
          this.newProduct.name="";
          this.newProduct.price= 0;
          this.newProduct.status="";
          this.newProduct.img="";
          this.addSuccess = true;
          this.addError = '';
        })
        .catch(error => {
          console.error('Error in Adding Product:', error);
          this.addSuccess = false;
          this.addError = 'Error 404!.';
        });
    }
  }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600display=swap");
  .admin-dashboard {
    display: flex;
  }
  .header--title {
      color: rgba(113, 99, 186, 255);
  }
  .sidebar {
    position: sticky;
    top: 0;
    left: 0;
    bottom: 0;
    width: 50px;
    height: 100vh;
    padding: 0 1.7rem;
    color: #fff;
    overflow: hidden;
    transition: width 0.5s linear;
    background: rgba(113, 99, 186, 255);
  }
  
  .sidebar:hover {
    width: 170px;
  }
  
  .logo {
    height: 80px;
    padding: 16px;
  }
  
  .menu {
    position: relative;
    list-style: none;
    padding: 0;
  }
  
  .menu li {
    padding: 1rem;
    margin: 8px 0;
    border-radius: 8px;
    transition: background 0.5s ease-in-out;
  }
  
  .menu li:hover,
  .active {
    background: #e0e0e058;
  }
  
  .menu a {
    color: #fff;
    font-size: 14px;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  
  .menu a span {
    overflow: hidden;
  }
  
  .menu a i {
    font-size: 1.2rem;
  }
  
  .logout {
    padding: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  
  .main--content {
    flex: 1; /* Main content sẽ mở rộng đến phần còn lại của không gian */
    background: #ebe9e9;
    padding: 1rem;
  }
  
  .header--wrapper img {
    width: 50px;
    height: 50px;
    cursor: pointer;
    border-radius: 50%;
  }
  
  .header--wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: #fff;
    border-radius: 10px;
    padding: 10px 2rem;
    margin-bottom: 1rem;
  }
  
  .user--info {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .search--box {
    background: rgb(237, 237, 237);
    border-radius: 15px;
    color: rgba(113, 99, 186, 255);
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 4px 12px;
  }
  
  .search--box input {
    background: transparent;
    padding: 10px;
  }
  
  .search--box i {
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.5s ease-out;
  }
  
  .search--box i:hover {
    transform: scale(1.1);
  }
  
  .card--container {
    background: #fff;
    padding: 2rem;
    border-radius: 10px;
  }
  
  .card--wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .main--title {
    color: rgba(113, 99, 186, 255);
    padding-bottom: 10px;
    font-size: 15px;
  }
  
  .payment--card {
    background: rgb(229, 223, 223);
    border-radius: 10px;
    padding: 1.2rem;
    width: 290px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.5s ease-in-out;
  }
  
  .payment--card:hover {
    transform: translateY(-5px);
  }
  
  .card--header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .amount {
    display: flex;
    flex-direction: column;
  }
  
  .title {
    font-size: 12px;
    font-weight: 200;
  }
  
  .amount--value {
    font-size: 24px;
    font-family: "Courier New", Courier, monospace;
    font-weight: 600;
  }
  
  .icon {
    color: #fff;
    padding: 1rem;
    height: 60px;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 1.5rem;
  }
  
  .card--detail {
    font-size: 18px;
    color: #777;
    font-family: "Courier New", Courier, monospace;
    letter-spacing: 2px;
  }
  
  .light-red {
    background: rgb(251, 233, 233);
  }
  
  .light-purple {
    background: rgb(254, 226, 254);
  }
  
  .light-green {
    background: rgb(235, 254, 235);
  }
  
  .light-blue {
    background: rgb(236, 236, 254);
  }
  
  .dark-red {
    background: red;
  }
  
  .dark-purple {
    background: purple;
  }
  
  .dark-green {
    background: green;
  }
  
  .dark-blue {
    background: blue;
  }
  
  .product-form {
    display: flex;
    flex-direction: column;
    border-radius: 4px;
  }
  .product-box {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  label {
    flex: 1;
    font-weight: 600;
    margin-right: 10px;
  }
  input {
    flex: 2;
    padding: 5px;
    border: 1px solid #ccc;
  }
  .product-button {
    padding: 12px;
    background: rgba(113, 99, 186, 255);
    color: #fff;
    font-weight: bold;
    border-radius: 4px;
    outline: none;
    
  }
  </style>
  