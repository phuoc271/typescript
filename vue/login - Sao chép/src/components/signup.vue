<template>
    <img class="logo" src="../assets/imagenhan/logo.png" alt="">
    <h1>sign up</h1>
    <div class="regisiter">
        <input type="text" v-model="name" placeholder="Name">
        <input type="text" v-model="email" placeholder="Email">
        <input type="text" v-model="password" placeholder="Password">
        <button v-on:click="signup" type="">Sign up</button>
    </div>
</template>
<script>
import axios from 'axios'
export default{
    name: 'signup',
    data()
    {
        return {
            name:'',
            email: '',
            password: '',
        }
    },
    methods:{
        async signup()
        {
            let result = await axios.post("http://localhost:3000/user",{
                email: this.email,
                password: this.password,
                name: this.name
            });
            console.warn(result);
            if (result.status == 201)
            {
                alert("sign up done");
                
            }
        }
    }
}
</script>

<style>
.logo {
    width: 100px;
}
.regisiter input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid black;
}
.regisiter button {
    width: 320px;
    height: 40px;
    background-color: grey;
}
</style>