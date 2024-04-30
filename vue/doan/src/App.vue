<template>
  <div id="app">
    <router-view/>
    <AppFooter />
  </div>
</template>
<script>
import AppFooter from "@/components/AppFooter.vue"
  export default {
    comments: {
      AppFooter
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo {
    width: 100px;
}
.regisiter input,.login input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid black;
}
.regisiter button,.login button {
  background-color: #009966; 
  color: white; 
  width: 300px;
}
.thea {
  color: #009966; 
  margin-right: -230px;
}
small {
    margin-top: -15px;
    color: red;
}
</style>