<template>
    <div class="nav">
    <a href="/">Home</a>
    <a href="/login">login</a>
    <a href="/sign-up">sign up</a>
    <a v-on:click="logout" href="">logout</a>
    <a style="float: right !important;">Welcome, {{ userName }}</a>
    </div>
    
</template>
<script>
export default {
    name: 'header',
    methods: {
        logout()
        {
            localStorage.clear();
            this.$router.push({name: 'Login'})
        }
    },
    data() {
    return {
      userName: '' 
    };
  },
  created() {
    
    const userInfo = JSON.parse(localStorage.getItem('user-info')); 
    if (userInfo) {
      this.userName = userInfo.name; 
    }
  }
}
</script>
<style>
.nav{
    background-color: #333;  
    overflow: hidden;
    
    
}
.nav a {
    color: white;
    text-decoration: none;
    padding: 17px;
    float: left;
    
}
.nav a:hover{
    background: #ddd;
    color: #333;
}
</style>