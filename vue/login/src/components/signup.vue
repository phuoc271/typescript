<template>
    <img class="logo" src="../assets/imagenhan/logo.png" alt="">
    <h1>sign up</h1>
    <div class="regisiter">
        <input type="text" v-model="name" placeholder="Name">
        <input type="text" v-model="email" placeholder="Email">
        <input type="text" v-model="password" placeholder="Password">
        <input type="text" v-model="address" placeholder="Địa chỉ">
        <input type="text" v-model="phone" placeholder="Số điện thoại">
        <button v-on:click="signup" type="">Sign up</button>
    </div>
    <p>
        <router-link to="/login">Login</router-link>
    </p>
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
            address: '',
            phone: ''
        }
    },
    methods:{
        async signup()
        {
            let result = await axios.post("http://localhost:3000/user",{
                email: this.email,
                password: this.password,
                name: this.name,
                address: this.address,
                phne: this.phone
            });
            console.warn(result);
            if (result.status == 201)
            {
                // alert("sign up done");
                localStorage.setItem("user-info", JSON.stringify(result.data));
                this.$router.push({name: 'Home'})
            }
        }
    },
    // mounted()
    // {
    //     let user = localStorage.getItem("user-info");
    //     if (!user)
    //     {
    //         this.$router.push({name: 'Home'})
    //     }
    // }
}
</script>

<style>

</style>