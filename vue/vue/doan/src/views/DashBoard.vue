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
              <router-link to="/">
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
            <h2>Dashboard</h2>
          </div>
          <div class="user--info">
            <div class="search--box">
              <i class="fa-solid fa-search"></i>
              <input type="text" placeholder="Search">
            </div>
          </div>
        </div>
      <div class="tabular--wrapper">
        <div class="tabular--header">
          <h3 class="main--title">
            Finance Data
          </h3>
          <router-link to="/AddProduct">
            <button class="tabular--button">Add Product</button>
          </router-link>
        </div>
        <div class="table--container">
          <table>
            <thead>
              <tr>
                  <th>Number</th>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(data, index) in products" :key="index">
                <td>{{ data.id }}</td>
                <td><img :src="data.img" style="width: 100px; height: 100px;" alt=""></td>
                <td>{{ data.name }}</td>
                <td>{{ data.price }}</td>
                <td>{{ data.status }}</td>
                <td>
                  <button>Edit</button>
                  <button class="delete" @click="deleteProduct(data.id)" type="delete"><span class="fa fa-trash"></span>Delete</button>
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
  import services from "../services";
  import axios from 'axios';
  const BASE_URL = 'http://localhost:3000';
  export default {
    name: 'DashBoard',
    data() {
      return {
        products: [],
      };
    },
    methods: {
    formatNumber(price) {
      if (!price) return "";
      return price.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      });
    },
    // Phương thức để lấy dữ liệu từ API khi thành phần được tạo
    async getAllProduct() {
      try {
        // Gửi yêu cầu GET đến API để lấy dữ liệu sản phẩm
        this.products = await services.getAllProducts("products"); // Thay 'items' bằng tên tương ứng với mảng trong db.json
        // Giữ lại 8 phần tử cuối cùng 
        // this.products = this.products.slice(-8);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
      console.log(this.products);
    },

    async deleteProduct(productId) {
        try {
            const response = await axios.delete(`${BASE_URL}/products/${productId}`);
            this.getAllProduct();
            return response.data;
            
        } catch (error) {
            console.error(`Error deleting product with ID ${productId}:`, error);
            throw error;
        }
    },
    
  },
  mounted() {
    this.getAllProduct(); // Gọi phương thức getAllProduct() khi component được tạo
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
  
  .tabular--header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  .tabular--button {
    padding: 12px;
    background: rgba(113, 99, 186, 255);
    color: #fff;
    font-weight: bold;
  }
  
  .tabular--wrapper {
    background: #fff;
    margin-top: 1rem;
    border-radius: 10px;
    padding: 2rem;
  }
  
  .table--container {
    width: 100%;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  thead {
    background: rgba(113, 99, 186, 255);
    color: #fff;
  }
  
  th {
    padding: 15px;
    text-align: left;
  }
  
  tbody {
    background: #f2f2f2;
  }
  
  td {
    padding: 15px;
    font-size: 14px;
    color: #333;
  }
  
  tr:nth-child(even) {
    background: #fff;
  }
  
  tfoot {
    background-color: rgba(113, 99, 186, 255);
    font-weight: bold;
    color: #fff;
  }
  
  tfoot td {
      padding: 15px;
      color: #fff;
  }
  .table--container button {
      color: green;
      background: none;
      cursor: pointer;
  }
  </style>
  