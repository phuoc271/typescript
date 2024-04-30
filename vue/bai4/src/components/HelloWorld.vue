<template>
  <div>
    <div class="row">
    <div class="col-4 text-center">
      <div>
        <img :src="require(`@/assets/image/${imgs}`)" style="width: 100%; height: 400px;" @click="changeImg(img)">
      </div>
      <div class="row" style="margin-top: 10px;">
        <div class="col-3" v-for="(img, index) in hinh" :key="index">
          <a href="#">
            <img :src="require(`@/assets/image/${img}`)" style="width: 70%" @click="changeImg(img)">
          </a>
        </div>
      </div>
    </div>
    <div class="col-5">
      <h1>{{ title1() }}</h1>
      <span>
        <i class="fas fa-star" v-for="k in starRating()" :key="k"></i>
      </span>
      <div class="text-justify">{{ Content }}</div>
      <h3>GIÁ BÁN : </h3>
      <strong v-if="!inSale()">Giá khuyến mãi: </strong>
      <strong v-else>Giá khuyến mãi đã hết !</strong>
      <h5>Số sản phẩm còn trong kho : {{ inStock() }}</h5>
      <button class="btn btn-primary" @click="addCart(selectedVariant)" :disabled="inStock() === 0">Mua liền!</button>
      <br><br>
      <a href="#" v-for="(item, index) in products" :key="index" @click="selectedVariant=index; ChangeImage()">
        <img :src="require('@/assets/image/' + item.imgs)" style="width: 20%; margin: 20px;">
      </a>
    </div>
    <div class="col-3">
      <div style="border: 1px solid black; margin-top: 10px; padding: 10px;">
        <a href="#" style="float: left;">
          <i class="fas fa-shopping-cart" style="font-size: 50px;"></i>
        </a>
        <div class="text-center">{{ itemcount() }}<br>Tổng tiền :  <br>
          <button class="btn btn-primary" style="margin-top: 10px;" data-toggle="modal" data-target="#modelId" @click="showcart()">View Cart</button>
        </div>
      </div>
      <div style="border: 1px solid black; margin-top: 10px; padding: 10px;" class="text-center">
        <div class="card" style="width: 100%;">
          <div class="card-header">Chủng loại</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item bg-primary">Điện thoại di động</li>
            <li class="list-group-item bg-secondary">Máy tính xách tay</li>
            <li class="list-group-item bg-success">Máy tính để bàn</li>
            <li class="list-group-item bg-danger">Quạt</li>
            <li class="list-group-item bg-info">Máy lạnh</li>
            <li class="list-group-item bg-dark">Khác</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <!-- <div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <table style="width: 100%;" class="text-center table" >
          <tr>
            <th>HÌNH</th>
            <th>SẢN PHẨM</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Tiền</th>
            <th></th>
          </tr>
          <tr v-for="(item, index) in cart" :key="index">
            <td><img :src="item.image" style="height: 100px; width: 100px;"></td>
            <td class="align-middle">{{ item.name }}</td>
            <td class="align-middle">{{ item.price | currency('VND') }}</td>
            <td class="align-middle">
              <button class="btn btn-primary" @click="increment(item)">+</button>
              {{ item.incart }}
              <button class="btn btn-primary" :disabled="item.incart <= 1" @click="decrement(item)">-</button>
            </td>
            <td class="align-middle">{{ (item.price * item.incart) | currency('VND') }}</td>
            <td class="align-middle">
              <button class="btn btn-danger" @click="Delete(index)">Remove</button>
            </td>
          </tr>
          <tr>
            <th colspan="3">Tổng tiền</th>
            <th>{{ itemcount() }}</th>
            <th>{{ sumTotal() | currency('VND') }}</th>
            <th>
              <button class="btn btn-danger" @click="DeleteAll()">Xóa hết</button>
            </th>
          </tr>
        </table>
        <template >
          <div class="btn btn-danger"> Mời bạn chọn mua !</div>
        </template>
      </div>
    </div>
  </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'lab6',
      hinh: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
      Content: 'Là dòng sản phẩm có thiết kế mỏng nhẹ, sang trọng và tinh tế cùng với đó là giá thành phải chăng nên MacBook Air đã thu hút được đông đảo người dùng yêu thích và lựa chọn. Một trong những phiên bản mới nhất mà khách hàng không thể bỏ qua khi đến với CellphoneS đó là MacBook Air M1. Dưới đây là chi tiết về thiết kế, cấu hình của máy.',
      products: [],
      selectedVariant: 0,
      cart: [],
      imgs: '1.jpg'
    };
  },
  methods: {
    title1() {
      // Implement your logic here
    },
    changeImg(img) {
      this.imgs = img;
    },
    starRating() {
      return Array(); // Implement your logic here
    },
    price() {
      return 0; // Implement your logic here
    },
    inSale() {
      return false; // Implement your logic here
    },
    priceOnSale() {
      // Implement your logic here
    },
    inStock() {
      return 0; // Implement your logic here
    },
    addCart(selectedVariant) {
      selectedVariant = '';
      return selectedVariant;
      
    },
    showcart()
    {
      console.log('selectedVariant');
    },
    itemcount() {
      return this.cart.reduce((sum, item) => sum + item.incart, 0);
    },
    increment(item) {
      item.incart++;
    },
    decrement(item) {
      if (item.incart > 1) {
        item.incart--;
      }
    },
    Delete(index) {
      this.cart.splice(index, 1);
    },
    DeleteAll() {
      this.cart = [];
    },
    sumTotal() {
      return this.cart.reduce((sum, item) => sum + (item.incart * item.price), 0);
    }
  }
};
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css');
</style>
