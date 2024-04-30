<template>
    <div class="payment">

        <!-- Nội dung của trang thanh toán -->
        <form>
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
                    <td colspan="2"><input v-model="userName" type="text"></td>
                </tr>
                <tr>
                    <td colspan="2">Địa chỉ nhận hàng : </td>
                    <td colspan="2"><input v-model="diachi" type="text"></td>
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
            <button @click="updatepay()">Cập nhật</button>
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
                    <tr>
                        <td colspan="6" align="right">
                            <strong>TỔNG HOÁ ĐƠN:</strong>
                        </td>
                        <td align="right">
                            <strong>{{ totalAll }}đ</strong>
                        </td>
                    </tr>
                    


                </tbody>
            </table>

            <!-- Nút chọn phương thức thanh toán -->
            <div>
                <!-- Checkbox chọn phương thức thanh toán -->
                <div class="form-check">
                    <input class="form-check-input" type="radio" id="cashRadio" v-model="paymentMethod" value="cash"
                        checked>
                    <label class="form-check-label" for="cashRadio">
                        Thanh toán bằng tiền mặt
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" id="bankingRadio" v-model="paymentMethod"
                        value="banking">
                    <label class="form-check-label" for="bankingRadio">
                        Thanh toán bằng banking
                    </label>
                </div>

                <!-- Nút xác nhận -->
                <input type="button" @click="confirmPayment" onclick="alert('Xác nhận đơn hàng thành công!')"
                    value="Xác nhận">
            </div>
            <br>

            <!-- Hiển thị ảnh QR khi thanh toán bằng banking -->
            <div v-if="paymentMethod === 'banking'">
                <!-- Hiển thị ảnh QR code -->
                <img style="height: 200px; width: 200px; align-content: end;"
                    src="../assets/images/qrcode.jpg"
                    alt="QR Code">
            </div>
            <br>
            <!-- Nút trở lại mua hàng -->
            <button type="button" class="btn btn-success" @click="goBack">TRỞ LẠI MUA HÀNG</button>
        </form>
    </div>


</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            userName: '',
            sdt: '',
            paymentMethod: 'cash', // Mặc định chọn thanh toán bằng tiền mặt
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
                    password: userInfo.newPassword // Nếu không cần cập nhật mật khẩu, bạn có thể xóa dòng này
                });
                console.log(result.data);
                alert("Thông tin người dùng đã được cập nhật thành công!");
                userInfo.phone = this.sdt;
                userInfo.address = this.diachi;
                userInfo.name = this.userName;
                this.$router.push('/payment');
                // Cập nhật dữ liệu trong localStorage nếu cần
                
                
            } catch (error) {
                console.error("Lỗi khi cập nhật thông tin người dùng:", error);
                alert("Đã xảy ra lỗi khi cập nhật thông tin người dùng. Vui lòng thử lại sau!");
            }
        },
        
        // Phương thức xác nhận thanh toán
        confirmPayment() {
            // Hiển thị modal xác nhận mua hàng thành công
            this.showSuccessModal = true;
            this.$router.push('/');
        },
        
        goBack() {
            // Xử lý khi người dùng nhấn nút "TRỞ LẠI MUA HÀNG"
            // Ví dụ: Chuyển hướng người dùng đến trang mua hàng
            this.$router.push('/');
        }
    },
    created() {
        // Lấy thông tin người dùng từ local storage
        const userInfo = JSON.parse(localStorage.getItem('user-info'));
        if (userInfo) {

            this.userName = userInfo.name;
            this.sdt = userInfo.phone;
            this.diachi = userInfo.address;
            this.checkemail = userInfo.email;
            this.shd = userInfo.id;

        }
    },
    computed: {
        totalAll() {
            return this.cart.reduce(function (items, data) {
                return items + (data.products.price * data.quantity);
            }, 0);
        },
    },
};
</script>
