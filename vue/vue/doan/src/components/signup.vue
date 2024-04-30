<template>
    <div>
        <NavBar />
        <img class="logo" style="width: 200px;" src="../assets/images/logo.png" alt="">
    <h1>sign up</h1>
    <div class="regisiter">
        <input type="text" id="name" v-model="name" placeholder="Name">
        <small></small>
        <input type="text" id="email" v-model="email" placeholder="Email">
        <small></small>
        <input type="text" id="password" v-model="password" placeholder="Password">
        <small></small>
        <input type="text" id="password2" v-model="password2" placeholder="Enter Password">
        <small></small>
        <input type="text" id="address" v-model="address" placeholder="Addresss">
        <small></small>
        <input type="text" id="phone" v-model="phone" placeholder="Phone number">
        <small></small>
        <button v-on:click="kiemtra" type="">Sign up</button>
    </div>
    <p>
        <router-link class="thea" to="/login">Login</router-link>
    </p>
    </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import axios from 'axios'
export default{
    name: 'signup',
    components: {
    NavBar,
  },
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
                phone: this.phone
            });
            console.warn(result);
            if (result.status == 201)
            {
                // alert("sign up done");
                localStorage.setItem("user-info", JSON.stringify(result.data));
                this.$router.push({name: 'home'})
            }
        },
                
        kiemtra ()
        {
        var sm = document.querySelectorAll("small");
        var ten = document.getElementById("name");
        if (ten.value.length == 0) {
            sm[0].style.display = "block";
            sm[0].innerText = "* Vui lòng nhập tên"
        }
        else if (!isNaN(ten.value)) {
            sm[0].style.display = "block";
            sm[0].innerText = "* Vui lòng nhập chữ"
        }
        else if (ten.value.length > 0) {
            sm[0].style.display = "none";
        }
        var email = document.getElementById("email");
        if (email.value.length == 0) {
            sm[1].style.display = "block";
            sm[1].innerText = "* Vui lòng nhập email"
        }
        else if (email.value.indexOf("@") < 1) {
            sm[1].style.display = "block";
            sm[1].innerText = "* Vui lòng nhập email có dấu @"
        }
        else if (email.value.indexOf(".com") < 1) {
            sm[1].style.display = "block";
            sm[1].innerText = "* Vui lòng nhập email có chữ .com"
        }
        else if (email.value.length > 0 ) {
            sm[1].style.display = "none";
        }
        var password = document.getElementById("password");
        if (password.value.length == 0) {
            sm[2].style.display = "block";
            sm[2].innerText = "* Vui lòng nhập mật khẩu";
        } else if (password.value.length < 8) {
            sm[2].style.display = "block";
            sm[2].innerText = "* Mật khẩu phải chứa ít nhất 8 ký tự";
        } else if (password.value.search(/\d/) == -1) {
            sm[2].style.display = "block";
            sm[2].innerText = "* Mật khẩu phải chứa ít nhất một chữ số";
        } else {
            sm[2].style.display = "none";
        }
        var confirm_password = document.getElementById("password2");
        if (confirm_password.value.length == 0) {
            sm[3].style.display = "block";
            sm[3].innerText = "* Vui lòng nhập lại mật khẩu";
        } else if (confirm_password.value !== password.value) {
            sm[3].style.display = "block";
            sm[3].innerText = "* Mật khẩu nhập lại không khớp";
        } else {
            sm[3].style.display = "none";
        }
        var address = document.getElementById("address");
        if (address.value.length == 0) {
            sm[4].style.display = "block";
            sm[4].innerText = "* Vui lòng nhập địa chỉ";
        } else {
            sm[4].style.display = "none";
        }
        var sdt = document.getElementById("phone");
        if (sdt.value.length == 0) {
            sm[5].style.display = "block";
            sm[5].innerText = "* Vui lòng nhập số điện thoại"
        }
        else if (isNaN(sdt.value)) {
            sm[5].style.display = "block";
            sm[5].innerText = "* Vui lòng nhập số"
        }
        else if (sdt.value.length >= 1 && sdt.value.length < 10) {
            sm[5].style.display = "block";
            sm[5].innerText = "* Số điện thoại phải từ 10 đến 11 chữ số"
        }
        else if (sdt.value.length >= 10 && sdt.value.length < 12) {
            sm[5].style.display = "none";
        }
        else if (sdt.value.length >= 12) {
            sm[5].style.display = "block";
            sm[5].innerText = "* Số điện thoại không quá 11 chữ số"
        }
        this.hienthi();
        },
        hienthi() {
            var sm = document.querySelectorAll("small");
            var allHidden = true;
            for (var i = 0; i < sm.length; i++) {
                if (sm[i].style.display !== "none") {
                    allHidden = false;
                    break;
                }
            }
            if (allHidden) {
                alert('Đăng ký thành công');
                this.signup();
            } else {
                alert('Đăng ký không thành công');
            }
        }

    },
    
}
</script>

<style>

</style>