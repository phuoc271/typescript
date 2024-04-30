<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
  <h1>Bài 1</h1>
  <body>
    <div class="container">
    <div class="row">
        <div class="col-md-4 offset-md-4">
          <div class="card">
            <div class="card-header">
              <h3 class="so">Thông tin sinh viên</h3>
            </div>
          <img :src="require('../assets/bai1.png')" alt="">
            <div class="card-body">
              <p>Họ và tên: {{fullname}}</p>
              <p>Ngày sinh: {{date}}</p>
              <p>Phái: {{sex}}</p>
              <p>Điểm: {{point}}</p>
            </div>
          </div>
        </div>
    </div>
  </div> 
  </body>
  <h1>Bài 2</h1>
  <body>
      <table class="table" border="3">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Code</th>
            <th>Available</th>
            <th>Price</th>
            <th>5 start rating</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in vatlieu" :key="index" :src="item.img">
            <td><img :src="require(`../assets/${item.img}`)" alt="" height="50px" width="50px"></td>
            <td scope="row">{{ index+1 }}</td>
            <td>{{item.ten}}</td>
            <td>{{item.ma}}</td>
            <td>{{item.price }}</td>
            <td>{{item.star }}</td>
            <td>{{ item.id }}</td>
            <td>{{ item.diem }}</td>
          </tr>
        </tbody>
      </table>
  </body>
  <h1>Bài 4</h1>
<body>
  <div class="form">
        <h1>Menu</h1>
        <ul><!--Lặp qua mảng services, chỉ định một trình xử lý nhấp chuột và đặt hoặcloại bỏ lớp css "active" -->
            <li v-for="(item,index) in services" :key="index" :class="{ 'active': item.active }" @click="changeActive(item)">
                {{item.name}}
                <span>{{item.gia}}</span>
            </li>
        </ul>
        <div class="total"><!--Tính lại total khi chọn services. Format lại currency. -->
            Total:<span>{{Total()}}</span>
        </div>
    </div>
</body>
<!-- <h1>Bai 3</h1>
<body style="text-align: center;">
  <form>
            <div>
                <div class="bar">
                    <button type="button" @click="list('list');">Dọc</button>
                    <button type="button" @click="list('grid');">Hàng</button>
                </div>

                <div :class="selected == 'grid' ? 'grid' : 'list'">
                    <div v-for="img in hinh" :key="img.id">
                        <img :src="require(`@/assets/images/${img}`)" style="width: 150px; height: 150px;" alt="100%">
                        
</div>
                </div>
            </div>
            
        </form>
</body> -->
<div>
    <h1>Bài 3</h1>
    <div class="bar">
      <button type="button" @click="list('list')">Danh sách</button>
      <button type="button" @click="list('grid')">Lưới</button>
      
    </div>
    <div v-if="selected === 'grid'" class="grid">
      <div v-for="(img, index) in hinh" :key="index">
        <img :src="require(`@/assets/images/${img}`)" style="width: 150px; height: 150px;" alt="100%">
      </div>
    </div>
    <div v-else-if="selected === 'list'" class="list">
      <div v-for="(service, index) in services" :key="index">
        <img :src="require(`@/assets/images/${hinh[index]}`)" style="width: 150px; height: 150px;" alt="100%">
        <span>{{ service.name }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      fullname:'Hoài Phước',
      date:'6/8/2004',
      sex:'Nam',
      point:'5',
      vatlieu: [
      {   img:"1.png",
          ten:"Xẻng",
          ma:"Xúc đất",
          avaiL:"GDN-0011",
          price:"Math 8,2022",
          star:"Tốt",
          id:12.21,
          diem:7.0,
      },
      {   img:"2.png",
          ten:"Gạch",
          ma:"Đắp nhà",
          avaiL:"GDN-0021",
          price:"Math 8,2000",
          star:"tốt",
          id:2.11,diem:5.9,
      },
      {   img:"3.png",
          ten:"Mũ",
          ma:"Bảo vệ đầu",
          avaiL:"GTW-0011",
          price:"Agu 1,1982",
          star:"Tốt",
          id:9.21,diem:5.8,
      },
      {   img:"4.png",
          ten:"Tua vít",
          ma:"Vặn ốc",  
          avaiL:"GDN-3211",
          price:"Math 10,1083",
          star:"Tốt",
          id:32.21,diem:4.3,
      },
      {   img:"5.png",
          ten:"Bay lát Gạch",
          ma:"Chà xi măng",
          avaiL:"WQS-9201",
          price:"OCT 7,1122",
          star:"Khá",
          id:13.19,
          diem:3.0,
      }
      ],
      hinh:[
      "bakery-22.jpg", "bakery-23.jpg", "bakery-24.jpg", "bakery-25.jpg", "bakery-26.jpg", "bakery-27.jpg", "bakery-28.jpg"
      ],
            selected: "",
    services:[
    { name: 'Chocolate freeze', gia: 69, active: false },
    { name: 'Phindi Hạnh Nhân', gia: 50, active: false },
    { name: 'Cà Phê Sữa', gia: 40, active: false },
    { name: 'Trà Sen Vàng', gia: 40, active: false }]
    }
  },
  methods: {
        changeActive(item) {
            item.active = !item.active;
        },
        Total() {
            let sum = 0;
            this.services.forEach(function (item) {
                if (item.active == true) {
                    sum += item.gia;
                }
            })
            return sum
        },
        list(style) {
            this.selected = style;
        },
    }
}
</script>
<style>
.bar {
    background-color: #5c9bb7;
    background-image: -webkit-linear-gradient(top, #5c9bb7, #5392ad);
    background-image: -moz-linear-gradient(top, #5c9bb7, #5392ad);
    background-image: linear-gradient(top, #5c9bb7, #5392ad);
    box-shadow: 01px 1px#ccc;
    border-radius: 2px;
    width: 580px;
    padding: 10px;
    margin: 45px auto 25px;
    position: relative;
    text-align: right;
    line-height: 1;
}
.so{
  color: rgb(91, 113, 113);
}
.card-body{
  font-size: 20px;
}
* {
    margin: 0;
    padding: 0;
}

body {
    font: 15px/1.3 'Open Sans', sans-serif;
    color: #5e5b64;
    text-align: center;
}

a,
a:visited {
    outline: none;
    color: #389dc1;
}

a:hover {
    text-decoration: none;
}

section,
footer,
header,
aside,
nav {
    display: block;
}

/*-------------------------
    The order form
    --------------------------*/
.form {
    background-color: #61a1bc;
    border-radius: 2px;
    box-shadow: 0 1px 1px #ccc;
    width: 400px;
    padding: 35px 60px;
    margin: 50px auto;
}

.form h1 {
    color: #fff;
    font-size: 64px;
font-family: 'Cookie', cursive;
    font-weight: normal;
    line-height: 1;
    text-shadow: 0 3px 0 rgba(0, 0, 0, 0.1);
}

.form ul {
    list-style: none;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    margin: 20px 0 15px;
}

.form ul li {
    padding: 20px 30px;
    background-color: #e35885;
    margin-bottom: 8px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    cursor: pointer;
}

.form ul li span {
    float: right;

}

.form ul li.active {
    background-color: #1e2ad0;
}

div.total {
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    padding: 15px 30px;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    color: #fff;
}

div.total span {
    float: right;
}
.list{
  display: flex;
  flex-direction: column;
}
.grid{
  display: grid;
  column-gap: 50px;
  grid-template-columns: auto auto;
  justify-content: center;
}  
</style>