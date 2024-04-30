<template>
    <div>
      <NavBar />
      <img class="logo" style="width: 200px;" src="../assets/images/logo.png" alt="">
      <h2>Đổi mật khẩu</h2>
      <div class="regisiter">
        <input type="password" v-model="oldPassword" placeholder="Mật khẩu cũ">
        <input type="password" v-model="newPassword" placeholder="Mật khẩu mới">
        <input type="password" v-model="confirmPassword" placeholder="Xác nhận mật khẩu mới">
        <button @click="updatePassword">Đổi mật khẩu</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import NavBar from "@/components/NavBar.vue";
  export default {
    name: 'reset',
    components: {
    NavBar,
  },
    data() {
      return {
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
        currentUser: null
      };
    },
    created() {
      const userInfo = JSON.parse(localStorage.getItem('user-info'));
      if (userInfo) {
        this.currentUser = userInfo; // Gán thông tin người dùng đầy đủ từ localStorage vào biến currentUser
      } else {
        alert("Vui lòng đăng nhập để thực hiện thay đổi mật khẩu.");
      }
    },
    methods: {
  async updatePassword() {
    try {
      // Lấy thông tin người dùng từ localStorage
      let userInfo = JSON.parse(localStorage.getItem('user-info'));
      if (!userInfo) {
        alert("Vui lòng đăng nhập để thực hiện thay đổi mật khẩu.");
        return;
      }

      // Kiểm tra mật khẩu mới và xác nhận mật khẩu
      if (this.newPassword !== this.confirmPassword) {
        alert("Mật khẩu mới không khớp. Vui lòng thử lại!");
        return;
      }

      // Kiểm tra mật khẩu cũ
      if (this.oldPassword !== userInfo.password) {
        alert("Mật khẩu cũ không khớp. Vui lòng thử lại!");
        return;
      }

      // Gửi yêu cầu PUT để cập nhật mật khẩu mới
      let result = await axios.put(`http://localhost:3000/user/${userInfo.id}`, {
        email: userInfo.email,
        name: userInfo.name,
        address: userInfo.address,
        phone: userInfo.phone,
        password: this.newPassword
      });

      console.log(result.data);
      alert("Mật khẩu đã được cập nhật thành công!");

      // Cập nhật mật khẩu mới trong localStorage
      userInfo.password = this.newPassword;
      localStorage.setItem('user-info', JSON.stringify(userInfo));

      // Làm sạch dữ liệu sau khi cập nhật thành công
      this.oldPassword = '';
      this.newPassword = '';
      this.confirmPassword = '';
    } catch (error) {
      console.error("Lỗi khi cập nhật mật khẩu:", error);
      alert("Đã xảy ra lỗi khi cập nhật mật khẩu. Vui lòng thử lại sau!");
    }
  }
}

  };
  </script>
  