<template>
      <Header />
  <router-view />
  <!-- <signup /> -->
</template>

<script>
import signup from './components/signup.vue'
import Header from './components/header.vue'

export default {
  name: 'App',
  components: {
    signup,
    Header
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
  margin-top: 60px;
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
    width: 320px;
    height: 40px;
    background-color: grey;
}
</style>
