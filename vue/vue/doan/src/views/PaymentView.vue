<template>
    <div class="payment">
        <!-- Nội dung của trang thanh toán -->
        <form action="" method="post">
            <table class="table table-bordered" border="0">
                <tr>
                    <td colspan="4">
                        <h2 style="color: red;">HÓA ĐƠN</h2>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">Số Hóa đơn:</td>
                    <td colspan="2">{{ shd }}</td>
                </tr>
                <tr>
                    <td colspan="2">Tên người nhận : </td>
                    <td colspan="2"><input v-model="userName" type="text" ></td>
                </tr>
                <tr>
                    <td colspan="2">Địa chỉ nhận hàng : </td>
                    <td colspan="2"><input v-model="diachi" type="text" ></td>
                </tr>
                <tr>
                    <td colspan="2">Số điện thoại:</td>
                    <td colspan="2"><input v-model="sdt" type="text"></td>
                </tr>
                <tr>
                    <td colspan="2">Email:</td>
                    <td colspan="2">{{ checkemail }}</td>
                </tr>
            </table>
            <button @click="updatepay">Cập nhật</button>
            <table class="table table-bordered">
                <thead>
                    <tr class="table-success">
                        <th>STT</th>
                        <th>Name</th>
                        <th>Note</th>
                        <th>Đơn giá</th>
                        <th>Số lượng</th>
                        <th>Tổng tiền</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in cart" :key="item.id">
                        <td>#{{ index + 1 }}</td>
                        <td>{{ item.products.name }}</td>
                        <td>{{ item.note }}</td>
                        <td>{{ item.products.price }}đ</td>
                        <td>{{ item.quantity }}</td>
                        <td>{{ item.products.price * item.quantity }}đ</td>
                    </tr>
                </tbody>
            </table>
            <div id="accept">
                <button @click="accept">XÁC NHẬN</button>
            </div>
        </form>
        <button type="button" class="btn btn-success" @click="goBack">TRỞ LẠI MUA HÀNG</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            userName: '',
            sdt: '',
        }
    },
    props: ['cart'],
    methods: {
        async updatepay() {
            try {
                // Lấy thông tin người dùng từ localStorage
                let userInfo = JSON.parse(localStorage.getItem('user-info'));
                let result = await axios.put(`http://localhost:3000/user/${userInfo.id}`, {
                    email: userInfo.email,
                    name: this.userName,
                    address: this.diachi,
                    phone: this.sdt,
                    password: userInfo.password // Nếu không cần cập nhật mật khẩu, bạn có thể xóa dòng này
                });
                console.log(result.data);
                alert("Thông tin người dùng đã được cập nhật thành công!");
                userInfo.phone = this.sdt;
                userInfo.address = this.diachi;
                userInfo.name = this.userName;
                localStorage.setItem('user-info', JSON.stringify(userInfo));
                // Cập nhật dữ liệu trong localStorage nếu cần
                // userInfo.phone = this.sdt;
                // localStorage.setItem('user-info', JSON.stringify(userInfo));
            } catch (error) {
                console.error("Lỗi khi cập nhật thông tin người dùng:", error);
                alert("Đã xảy ra lỗi khi cập nhật thông tin người dùng. Vui lòng thử lại sau!");
            }
        },
        accept() {
            // Xử lý khi người dùng xác nhận đơn hàng
        },
        goBack() {
            // Xử lý khi người dùng nhấn nút "TRỞ LẠI MUA HÀNG"
            // Ví dụ: Chuyển hướng người dùng đến trang mua hàng
            this.$router.push('/');
        }
    },
    created() {
        const userInfo = JSON.parse(localStorage.getItem('user-info'));
        if (userInfo) {
            
            this.userName = userInfo.name;
            this.sdt = userInfo.phone;
            this.diachi = userInfo.address;
            this.checkemail = userInfo.email;
            this.shd = userInfo.id;
            
        }
    }
};
</script>
