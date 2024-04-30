<template>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
  <div>
    <h1>Bài 1</h1>
    <div class="bar">
      <button type="button" @click="changeView('list')" :class="{ 'active': selected === 'list' }">Danh sách</button>
      <button type="button" @click="changeView('grid')" :class="{ 'active': selected === 'grid' }">Lưới</button>
      <input type="text" v-model="searchString" name="banh" class="form-control" placeholder="Enter your search terms" />
    </div>
    <div v-if="selected === 'grid'" class="grid">
      <div  v-for="item in filterName" :key="item.title">
        <img :src="item.image" width="100px" height="100px"/>
      </div>
    </div>
    <div v-else-if="selected === 'list'" class="list">
      <div>
        <ul>
      <li v-for="item in filterName" :key="item.title">
        <a :href="item.url">
          <img :src="item.image" width="100px" height="100px"/>
        </a>
        <span>{{ item.title }}</span>
        <hr>
      </li>
    </ul>
      </div>
    </div>
  </div>
  <h1>Bài 2</h1>
  <div>
      <label style="float: none;" for="">From </label>
      <input v-model="from" type="number" min="0" width="100px" @change="sortBy2">
      <label style="float: none;" for=""> To </label>
      <input v-model="to" type="number" min="0" width="100px" @change="sortBy2">
    </div>
  <div class="row">
    <div class="col-lg-4"></div>
    <div class="col-lg-4">
      <div>
    <table border="2">
      <!-- Bắt đầu vòng lặp for -->
      <tr v-for="item in sanpham" :key="item.id" :style="{ display: item.displayStyle }">
        <td>
          <div class="form-check">
            <input style="padding: 3px;" type="checkbox" class="form-check-input" :class="{ active: item.active }" @click="changeActive(item)">
            <br>
          </div>
        </td>
        <td>{{ item.hanghoa }}</td>
        <td>{{ item.dongia }}</td>
        <td><input type="number" v-model="item.soluong" :placeholder="item.soluong" /> </td>
        <td>{{ Tinh(item) }}</td>
      </tr>
      <!-- Kết thúc vòng lặp for -->
      <tr>
        <td colspan="4">Tổng tiền: </td>
        <td>{{ Total() }}</td>
      </tr>
    </table>
  </div>
    </div>
    <div class="col-lg-4"></div>
  </div>
  <div>
    <h1>Bài 3</h1>
      <div class="row ">
        <div class="col-lg-4"></div>
        <div class="col-lg-4">
          <table border="2">
      <h3>Tính diện tích hình chữ nhật</h3>
      <label for="">Chiều dài</label> <br>
      <input class="form-control" type="number" v-model="dai"> <br>
      <label for="">Chiều rộng</label> <br>
      <input class="form-control" type="number"  v-model="rong"> <br>
      <label for="">Chiều cao</label> <br>
      <input class="form-control" type="number" v-model="cao"> <br>
      <label for="">Thể tích</label> <br>
      <input class="form-control" type="number" disabled :placeholder=" Thetich() "> <br>
      <label for="">Chu vi</label> <br>
      <input class="form-control" type="number" disabled  :placeholder="Chuvi()"> <br>
      <label for="">Diện tích</label> <br>
      <input class="form-control" type="number" disabled  :placeholder="Dientich()"> <br>
    </table>
        </div>
        <div class="col-lg-4"></div>
      </div>
      
  </div>
  <div>
    <h1>Bài 4</h1>
    <div class="row">
      <div class="col-lg-4"></div>
      <div class="col-lg-4">
        <table border="2">
          <div class="bar2">
            <h3 style="background-color: aqua;">Form nhập sản phẩm</h3>
          </div>
          <div class="form-group">
            <label for="">Tên sản phẩm</label>
            <input style="background-color: lightsalmon;" type="text" name="" id="tensp" class="form-control" placeholder="" aria-describedby="helpId">
            <small></small> <br>
          
            <label for="">Số lượng</label>
            <input type="text" style="background-color: lightgreen;" name="" id="soluong" class="form-control" placeholder="" aria-describedby="helpId">
            <small></small> <br>
            <label for="">Nhà sản xuất</label>
            <select  class="form-control" id="nsx" style="background-color: lightgray;">
              <option value="" selected></option>
              <option value="Kim Đồng">Kim Đồng</option>
              <option value="Nhã nam">Nhã Nam</option>
              <option value="Nguyễn Nhật Ánh">Nguyễn Nhật Ánh</option>
            </select>
            <small></small> <br>
            <label for="">Tình trạng</label> <br>
            <div class="form-check">
              <label class="form-check-label"> 
                <input type="radio" class="form-check-input" name="tinhtrang" id="tt1" value="checkedValue">
                <b>Hàng cũ</b>
                <input type="radio" class="form-check-input" name="tinhtrang" id="tt2" value="checkedValue" style="margin-left: 20px;" checked>
                <b style="margin-left: 35px;">Hàng mới</b>
              </label>
              <small></small> <br>
            </div> <br>
            <label for="">Màu sắc</label> <br>
            <div class="form-check">
              <label class="form-check-label"> 
                <input type="checkbox" class="form-check-input" name="mau" id="mau1" value="checkedValue">
                <b>Đỏ</b>
                <input type="checkbox"  class="form-check-input" name="mau" id="mau2" value="checkedValue" style="margin-left: 10px;">
                <b style="margin-left: 30px;">Đen</b>
                <input type="checkbox" class="form-check-input" name="mau" id="mau3" value="checkedValue" style="margin-left: 10px;" checked>
                <b style="margin-left: 30px;" >Trắng</b>
              </label> <br>
              <small></small> <br>
            </div>
            <button type="button" class="btn btn-primary" @click="Kiemtra()">Nhập sản phẩm</button>
          </div>
        </table>
      </div>
      <div class="col-lg-4t₫n"></div>
    </div>
  </div>
  <div>
    <h1>Bài 5,6</h1>
    <div class="row">
      <div class="col-lg-4"></div>
      <div class="col-lg-4">
        
        <div class="form-group" >
          <label for="">Họ và tên</label>
          <input type="text" v-model="editingItem.name" name="" id="tensv" class="form-control" placeholder="" aria-describedby="helpId">          <small></small> <br> 
          <label for="">Ngày sinh</label>
          <input type="date" v-model="editingItem.ngaysinh" name="" id="ngaysinh" class="form-control" placeholder="" aria-describedby="helpId">
          <small></small> <br>
          <label for="">Điểm</label>
          <input type="number" v-model="editingItem.diem" name="" id="diem" class="form-control" placeholder="" aria-describedby="helpId">
          <small></small> <br>
          <button type="button" @click="Kiemtra() , Them()" >Thêm</button>
          <button type="button" @click="Kiemtra() ,suavitri()">Sửa</button>
          <button @click="xoaTheoId(editingItem.id)">Xóa</button>
          <button type="button" @click="huy()">Hủy</button>
          <button type="button" @click="moi()">Mới</button>
        </div> <br>
        <table style="border-bottom: 2px solid; border-top: 2px solid;">
          <tr>
            <th>Họ và tên</th>
            <th>Ngày sinh</th>
            <th>Điểm</th>
            <th>Xếp loại</th>
            <th></th>
          </tr>
          <tr v-for="(item, index) in truong" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ formattedDate(item.ngaysinh) }}</td>
            <td>{{ item.diem }}</td>
            <td>{{ item.xeploai }}</td>
            <td><button type="button" @click="editStudent(item)">Sửa</button></td>
          </tr>
        </table>
      </div>
      <div class="col-lg-4"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articles_array: [],
      articles: [
      { title: "Taya Bánh Mì đen", image: require("@/assets/images/bakery-23.jpg") },
    { title: "Bánh mì nướng",image: require("@/assets/images/bakery-22.jpg") },
    { title: "Hạnh Nhân nướng",image: require("@/assets/images/bakery-24.jpg") },
    { title: "Bready cuộn nhân dừa",image: require("@/assets/images/bakery-25.jpg") },
    { title: "Muffin cam hạnh nhân",image: require("@/assets/images/bakery-26.jpg") },
    { title: "Đan mạch ca dé",image: require("@/assets/images/bakery-27.jpg") },
    { title: "Baguette ngũ hạt dài",image: require("@/assets/images/bakery-28.jpg") }
      ],
      searchString: "",
      from: "",
      to: "",
      dai: "",
      rong: "",
      cao: "",
      editedIndex: -1,
      sanpham: [
        { id: 1, hanghoa: 'iPhone9', dongia: 700, soluong: 0, active: false, displayStyle: 'table-row' },
        { id: 2, hanghoa: 'Samsung', dongia: 400, soluong: 0, active: false, displayStyle: 'table-row' },
    { id: 3, hanghoa: 'Nokia', dongia: 100, soluong: 0, active: false, displayStyle: 'table-row' },
    { id: 4, hanghoa: 'Sony Xperia', dongia: 450, soluong: 0, active: false, displayStyle: 'table-row' },
    { id: 5, hanghoa: 'Motorola', dongia: 180, soluong: 0, active: false, displayStyle: 'table-row' },
    { id: 6, hanghoa: 'Oppo', dongia: 600, soluong: 0, active: false, displayStyle: 'table-row' },
    { id: 7, hanghoa: 'bPhone', dongia: 90, soluong: 0, active: false, displayStyle: 'table-row' }
      ],
      truong: [
  { id: 1, name: 'Nguyễn Hoài Phước', ngaysinh: '01/27/2004', diem: 9, xeploai: 'Giỏi/Xuất sắc' },
  { id: 2, name: 'Nguyễn Hoàng Vy', ngaysinh: '01/01/2004', diem: 9, xeploai: "Giỏi/Xuất sắc" }
],
hinh:[
      "bakery-22.jpg", "bakery-23.jpg", "bakery-24.jpg", "bakery-25.jpg", "bakery-26.jpg", "bakery-27.jpg", "bakery-28.jpg"
      ],
      selected: "list",
    services:[
    { name: 'Chocolate freeze', gia: 69, active: false },
    { name: 'Phindi Hạnh Nhân', gia: 50, active: false },
    { name: 'Cà Phê Sữa', gia: 40, active: false },
    { name: 'Trà Sen Vàng', gia: 40, active: false }],
      editingItem: { name: '', ngaysinh: '', diem: '' },
      gia: 0
    };
  },
  computed: {
    filterName() {
      let articlesArray = [...this.articles];
      let str = this.searchString.toLowerCase().trim();
      
      if (!str) {
        return articlesArray;
      }

      return articlesArray.filter(item =>
        item.title.toLowerCase().includes(str)
      );
    }
  },
  methods: {
    changeActive(item) {
            item.active = !item.active;
        },
        changeView(view) {
      this.selected = view;
    },
    list(style) {
            this.selected = style;
        },
    Total() {
      let sum = 0;
      this.sanpham.forEach(item => {
        if (item.active && item.displayStyle === 'table-row') {
          sum += item.dongia * item.soluong;
        }
      });
      return sum;
    },
    Tinh(item) {
      let sum = 0;
      if (item.active) {
        sum = item.dongia * item.soluong;
      }
      return sum;
    },
    ShowAll() {
      this.sanpham.forEach(item => {
        item.displayStyle = 'table-row';
      });
    },
    sortBy2() {
      this.ShowAll();
      let from = parseInt(this.from);
      let to = parseInt(this.to);
      this.sanpham.forEach(item => {
        if (item.dongia < from || item.dongia > to) {
          item.displayStyle = 'none';
        }
      });
      this.Total();
    },
    Thetich() {
      
      let dai = parseInt(this.dai);
      let rong = parseInt(this.rong);
      let cao = parseInt(this.cao);
      if (dai >0 && rong >0 && cao >0){
      let tt= 0;
      tt= dai * rong * cao;
      return tt ;}
      else if (dai <=0 || rong <=0 || cao <=0){
        let tt= '';
      tt= 'Không phải là hình chữ nhật';
      return tt ;
      }
    },
    Dientich() {
      let dai = parseInt(this.dai);
      let rong = parseInt(this.rong);
      if (dai >0 && rong >0 ){
      let dt= 0;
      dt= dai * rong ;
      return dt ;
      }
      else if(dai <=0 || rong <=0){
      let dt= '';
      dt= 'Không phải là hình chữ nhật' ;
      return dt ; 
      }
    },
    Chuvi() {
      let dai = parseInt(this.dai);
      let rong = parseInt(this.rong);
      if (dai >0 && rong >0 ){
      let cv= 0;
      cv= (dai + rong) *2 ;
      return cv ;
      }
      else if (dai <=0 || rong <=0)
      {
      var cv= '';
      cv= 'Không phải là hình chữ nhật';
      return cv ;
      }
    },

    Kiemtra() {
      var sm = document.querySelectorAll("small");
      var tensp = document.getElementById("tensp");
        if (tensp.value.length == 0) {
            sm[0].style.display = "block";
            sm[0].innerText = "* Vui lòng nhập Tên sản phẩm"
        }
        else if (!isNaN(tensp.value)) {
            sm[0].style.display = "block";
            sm[0].innerText = "* Vui lòng nhập chữ"
        }
        else if (tensp.value.length <2|| tensp.value.length >30) {
            sm[0].style.display = "block";
            sm[0].innerText = "* Vui lòng Tên sản phẩm từ 2 đến 30 ký tự"
        }
        else if (tensp.value.length >=2|| tensp.value.length <=30) {
            sm[0].style.display = "none";
        }
        var sl = document.getElementById("soluong");
        if (sl.value.length == 0) {
            sm[1].style.display = "block";
            sm[1].innerText = "* Vui lòng nhập Số lượng"
        }
        else if (isNaN(sl.value)) {
            sm[1].style.display = "block";
            sm[1].innerText = "* Vui lòng nhập số"
        }
        else if (sl.value <= 0) {
          sm[1].style.display = "block";
            sm[1].innerText = "* Vui lòng nhập Số lượng lớn hơn 0"
        }
        else if (sl.value.length > 0) {
            sm[1].style.display = "none";
        }
        var nsx = document.getElementById("nsx");
        if (nsx.value.length == 0) {
            sm[2].style.display = "block";
            sm[2].innerText = "* Vui lòng chọn Nhà sản xuất"
        }
        else if (nsx.value.length > 0) {
            sm[2].style.display = "none";
        }
        var tt1 = document.getElementById("tt1");
        var tt2 = document.getElementById("tt2");
        if (!tt1.checked && !tt2.checked) {
            sm[3].style.display = "block";
            sm[3].innerText = "* Vui lòng chọn tình trạng"
        }
        else if (tt1.checked || tt2.checked) {
            sm[3].style.display = "none";
        }
        var mau1 = document.getElementById("mau1");
        var mau2 = document.getElementById("mau2");
        var mau3 = document.getElementById("mau3");
        if (!mau1.checked && !mau2.checked && !mau3.checked) {
            sm[4].style.display = "block";
            sm[4].innerText = "* Vui lòng chọn màu"
        }
        else if (mau1.checked || mau2.checked || mau3.checked) {
            sm[4].style.display = "none";
        }
        var ho = document.getElementById("tensv");
        if (ho.value.length == 0) {
            sm[5].style.display = "block";
            sm[5].innerText = "* Vui lòng nhập họ và tên"
        }
        else if (!isNaN(ho.value)) {
            sm[5].style.display = "block";
            sm[5].innerText = "* Vui lòng nhập chữ"
        }
        else if (ho.value.length >0) {
            sm[5].style.display = "none";
        }
        var ns = document.getElementById("ngaysinh");
        if (ns.value.length == 0) {
            sm[6].style.display = "block";
            sm[6].innerText = "* Vui lòng nhập ngày sinh"
        }
        else if (ns.value.length >0) {
            sm[6].style.display = "none";
        }
        var diem = document.getElementById("diem");
        if (diem.value.length == 0) {
            sm[7].style.display = "block";
            sm[7].innerText = "* Vui lòng nhập điểm"
        }
        else if (isNaN(diem.value)) {
            sm[7].style.display = "block";
            sm[7].innerText = "* Vui lòng nhập số"
        }
        else if (diem.value >10) {
          sm[7].style.display = "block";
          sm[7].innerText = "* Vui lòng nhập điểm từ 0 đến 10"
        }
        else if (diem.value.length >0) {
            sm[7].style.display = "none";
        }
    },
    Them() {
      var sm = document.querySelectorAll("small");
      if (sm[7].style.display == "none" && sm[6].style.display == "none" && sm[5].style.display == "none") {
      this.truong.push({
        name: this.editingItem.name,
        ngaysinh: this.editingItem.ngaysinh,
        diem: this.editingItem.diem,
        xeploai: this.xeploai(this.editingItem.diem)
      });}
    },
    formattedDate(dateString) {
      if (dateString) {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      }
      return '';
    },
    editStudent(item, index) {
  this.editingItem = { ...item };
  if (item.ngaysinh) {
    const date = new Date(item.ngaysinh);
    date.setDate(date.getDate() + 1);
    this.editingItem.ngaysinh = date.toISOString().split('T')[0];
  } else {
    this.editingItem.ngaysinh = '';
  }
  this.editedIndex = index; // Lưu chỉ mục của hàng đang chỉnh sửa
  this.editingItem.name = item.name;
  this.editingItem.diem = item.diem;
  this.editingItem.xeploai = item.xeploai;
},
xoaTheoId(itemId) {
  if (confirm('Bạn có chắc muốn xóa không ?')) {
    const index = this.truong.findIndex(item => item.id === itemId);
    if (index !== -1) {
      this.truong.splice(index, 1);
    }
  }
},
suavitri() {
  var sm = document.querySelectorAll("small");
  const index = this.truong.findIndex(student => student.id === this.editingItem.id);
  if (sm[7].style.display == "none" && sm[6].style.display == "none" && sm[5].style.display == "none"){
  if (index !== -1) {
    this.truong[index] = { ...this.editingItem };
    this.truong[index].xeploai = this.xeploai(this.editingItem.diem); 
  }
  this.editingItem = { id: '', name: '', ngaysinh: '', diem: '', xeploai: '' }; 
}
},
    moi() {
    this.editingItem.ngaysinh = '';
    this.editingItem.name = ''; 
    this.editingItem.diem = '';
    },
    xeploai(diem) {
      var xl= '';
      if (diem < 5) {
        xl = 'Yếu/Kém';
      }
      else if(diem >=5 && this.editingItem.diem <=8) {
        xl = 'Trung bình/Khá'; 
      } 
      else if(diem > 8) {
        xl = 'Giỏi/Xuất sắc';
      }
      return xl;
    }
  }
};

</script>
<style>
button.active {
  background-color: red; /* Đổi màu nền khi nút được chọn */
  color: white; /* Đổi màu chữ khi nút được chọn */
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
.bar {
    background-color: #5c9bb7;
    background-image: -webkit-linear-gradient(top, #5c9bb7, #5392ad);
    background-image: -moz-linear-gradient(top, #5c9bb7, #5392ad);
    background-image: linear-gradient(top, #5c9bb7, #5392ad);
    box-shadow: 01px 1px#ccc;
    border-radius: 2px;
    width: 450px;
    padding: 10px;
    margin: 45px auto 25px;
    position: relative;
    text-align: right;
    line-height: 1;
}
ul {
list-style: none;
}
hr {
  width: 300px;
}
label {
  float: left;
}
small {
  color: red;
  float: left;
}
button {
float: left;
margin-right: 10px !important;
}
th, td {
    padding: 10px;
  }
</style>