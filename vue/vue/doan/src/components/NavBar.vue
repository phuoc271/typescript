<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link
        class="nav-link"
        to="/"
        style="font-size: 30px; color: #00628f"
        >Domino's Pizza</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
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
          <li class="nav-item"></li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">
              Cart
              <b-icon-bag></b-icon-bag>
              <span class="badge badge-success ml-2">{{
                updateCart ? updateCart.length : quantity.length
              }}</span>
            </router-link>
          </li>
        </ul>
        <div v-if="userName.length > 0">
          <li class="nav-item" style="text-align: right">
            <div class="dropdown">
              <option
                style="color: #009966; font-size: 16px; margin-top: 13px"
                selected
                disabled
              >
                Wellcome {{ userName }}
              </option>
              <div class="dropdown-content">
              <router-link to="/reset" class="nav-link"><option>
                  Update Password
                </option></router-link>
              
                <a v-on:click="logout" class="nav-link"
                  ><option>Logout</option></a>
              </div>
            </div>
          </li>
        </div>
        <div v-if="userName.length <= 0">
          <li class="nav-item" style="text-align: right">
            <div class="dropdown">
              <router-link to="/login"
                ><option
                  style="color: #009966; font-size: 16px; margin-top: 13px"
                  selected
                >
                  Login
                </option></router-link>
              <div class="dropdown-content">
                <router-link to="sign-up" class="nav-link"
                  ><option>Sign up</option></router-link
                >
              </div>
            </div>
          </li>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
export default {
  name: "NavBar",
  data() {
    return {
      userName: "",
      quantity: [],
    };
  },
  props: ["updateCart"],
  methods: {
    setQuantity(data) {
      this.quantity = data;
    },
    
    logout() {
      localStorage.clear();
      this.$router.push({ name: "login" });
    },
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
  created() {
    const userInfo = JSON.parse(localStorage.getItem("user-info"));
    if (userInfo) {
      this.userName = userInfo.name;
    }
  },
};
</script>

<style>
.dropdown {
  position: relative;
  display: inline-block;
}

select {
  color: #009966;
  font-size: 15px;
  margin-top: 15px;
  padding: 5px;
  cursor: pointer;
}

/* Tùy chỉnh kiểu dáng của dropdown content */
.dropdown-content {
  display: none;
  position: absolute;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  text-align: left;
  color: #009966;
}

.dropdown-content a {
  color: #009966;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
}

.dropdown-content a:hover {
  background-color: lightgray;
}

.dropdown:hover .dropdown-content {
  display: block;
}
::marker {
  color: white !important;
}
</style>
