<template>
    <div>
        <NavBar />
        <img class="logo" style="width: 200px;" src="../assets/images/logo.png" alt="">
        <h1>Login</h1>
        <div class="regisiter">
            <input type="text" id="email" v-model="email" placeholder="Email">
            <small id="emailError"></small>
            <input type="text" id="password" v-model="password" placeholder="Password">
            <small id="passwordError"></small>
            <br>
            <button v-on:click="kiemtra">Login</button>
            <p>
                <router-link class="thea" to="/sign-up">Sign up</router-link>
            </p>
        </div>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import axios from 'axios'

export default {
    name: 'login',
    components: {
        NavBar,
    },
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        kiemtra() {
            var sm = document.querySelectorAll("small");
            var email = document.getElementById("email");
            if (email.value.length == 0) {
                sm[0].style.display = "block";
                sm[0].innerText = "* Vui lòng nhập email";
                return;
            } else {
                sm[0].style.display = "none";
            }
            var password = document.getElementById("password");
            if (password.value.length == 0) {
                sm[1].style.display = "block";
                sm[1].innerText = "* Vui lòng nhập password";
                return;
            } else {
                sm[1].style.display = "none";
            }
            this.attemptLogin();
        },
        async attemptLogin() {
            try {
                const result = await axios.get(
`http://localhost:3000/user?email=${this.email}&password=${this.password}`
                );
                if (result.status === 200 && result.data.length > 0) {
                    localStorage.setItem("user-info", JSON.stringify(result.data[0]));
                    this.$router.push({ name: 'home' });
                } else {
                    alert("Email hoặc mật khẩu không chính xác.");
                }
            } catch (error) {
                console.error("Đã xảy ra lỗi khi đăng nhập:", error);
                alert("Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại sau.");
            }
        }
    }
}
</script>
