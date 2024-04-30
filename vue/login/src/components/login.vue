<template>
     <div>
        <img class="logo" src="../assets/imagenhan/logo.png" alt="">
    <h1>Login</h1>
    <div class="regisiter">
        <input type="text" v-model="email" placeholder="Email">
        <input type="text" v-model="password" placeholder="Password">
        <button v-on:click ="login">Login</button>
        <p>
            <router-link to="/sign-up">Sign up</router-link>
        </p>
    </div>
     </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'login',
    data() 
    {
        return {
            email: '',
            password: '',
        }
    },
    methods:{
    
        async login()
        {
            let result = await axios.get(
                `http://localhost:3000/user?email=${this.email}&password=${this.password}`
            )

            if (result.status == 200 && result.data.length>0)
            {
                // alert("sign up done");
                localStorage.setItem("user-info", JSON.stringify(result.data[0]));
                this.$router.push({name: 'Home'})
            }
        console.warn(result)
    }
    
    }
}
</script>