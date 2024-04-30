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
            <h2>Login Admin</h2>
          </div>
          <div class="user--info">
            <div class="search--box">
              <i class="fa-solid fa-search"></i>
              <input type="text" placeholder="Search">
            </div>
          </div>
        </div>
        <div class="card--container">
            <form class="form card" @submit.prevent="login">
                <div class="card_header">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path fill="currentColor" d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"></path>
                    </svg>
                    <h1 class="form_heading">Sign in</h1>
                </div>
                <div class="field">
                    <label for="username">Adminname</label>
                    <input class="input" v-model="adminname" name="username" type="text" placeholder="Adminname" id="username">
                </div>
                <div class="field">
                    <label for="password">Password</label>
                    <input class="input" v-model="password" name="user_password" type="password" placeholder="Password" id="password">
                </div>
                <div class="field">
                    <button type="submit" class="button">Login</button>
                </div>
            </form>
            <div v-if="loginError" class="alert alert-danger text-center mt-3">{{ loginError }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';


  export default {
    name: 'DashBoard',
    data() {
      return {
        adminname: '',
        password: '',
        loginError: ''
      };
    },
    methods: {
        login() {
        // Gửi yêu cầu GET để lấy dữ liệu admin từ db.json
        axios.get('http://localhost:3000/admin')
        .then(response => {
          // Kiểm tra thông tin đăng nhập
          const admin = response.data.find(admin => admin.adminname === this.adminname && admin.password === this.password);
          if (admin) {
            // Đăng nhập thành công
            alert('Login Successflly');
            // Thực hiện các hành động tiếp theo, ví dụ: chuyển hướng đến trang quản trị
            this.$router.push('/admin')
          } else {
            // Đăng nhập thất bại
            this.loginError = 'Admin name or password is invalid!';
          }
        })
        .catch(error => {
          console.error('Error occur when login:', error);
          this.loginError = 'Something went wrong!';
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
  
  .card {
  width: 190px;
  height: 254px;
  background: #F4F6FB;
  border: 1px solid white;
  box-shadow: 10px 10px 64px 0px rgba(180, 180, 207, 0.75);
  -webkit-box-shadow: 10px 10px 64px 0px rgba(186, 186, 202, 0.75);
  -moz-box-shadow: 10px 10px 64px 0px rgba(208, 208, 231, 0.75);
}

.form {
  padding: 25px;
  margin: auto;
}

.card_header {
  display: flex;
  align-items: center;
}

.card svg {
  color: #7878bd;
  margin-bottom: 20px;
  margin-right: 5px;
}

.form_heading {
  padding-bottom: 20px;
  font-size: 21px;
  color: #7878bd;
}

.field {
  padding-bottom: 10px;
}

.input {
  border-radius: 5px;
  background-color: #e9e9f7;
  padding: 5px;
  width: 100%;
  color: #7a7ab3;
  border: 1px solid #dadaf7
}

.input:focus-visible {
  outline: 1px solid #aeaed6;
}

.input::placeholder {
  color: #bcbcdf;
}

label {
  color: #B2BAC8;
  font-size: 14px;
  display: block;
  padding-bottom: 4px;
}

button {
  background-color: #7878bd;
  margin-top: 10px;
  font-size: 14px;
  padding: 7px 12px;
  height: auto;
  font-weight: 500;
  color: white;
  border: none;
}

button:hover {
  background-color: #5f5f9c;
}
  
  </style>
  