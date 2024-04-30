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
                    <td colspan="2">Ngày lập:</td>
                </tr>
                <tr>
                    <td colspan="2">Họ và tên:</td>
                    <td colspan="2"></td>
                </tr>
                <tr>
                    <td colspan="2">Địa chỉ:</td>
                    <td colspan="2"></td>
                </tr>
                <tr>
                    <td colspan="2">Số điện thoại:</td>
                    <td colspan="2"></td>
                </tr>
            </table>
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
                <!-- `greet` là tên của phương thức bạn muốn gọi -->
                <button v-on:click="accept">XÁC NHẬN</button>
            </div>
        </form>
        <button type="button" class="btn btn-success" on-click="/">TRỞ LẠI MUA HÀNG</button>
    </div>
</template>

<script>
export default {
    props: ['cart']

};

</script>
