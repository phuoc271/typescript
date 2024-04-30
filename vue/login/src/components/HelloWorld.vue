<template>
  <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue Project</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
        integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
  <section id="header"> 
        <a href="#">Logo</a>
        <div>
            <ul id="nav">
                <li class="nav-item">
                    <a class="active" href="" >Home</a>
                </li>
                <li class="nav-item">
                    <a href="" class="nav-link">Sign up</a>
                </li>
                <li class="nav-item">
                    <a href="" class="nav-link">Sign in</a>
                </li>
                <li class="nav-item">
                    <a href="" class="nav-link">Log Out</a>
                </li>
                <li>
                    <a href="" class="nav-link"><i style="font-size: 20px;" class="far fa-shopping-bag"></i></a>
                </li>
            </ul>
        </div>
    </section>
    
    <section id="hero">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupons & up to 70% off!</p>
        <button>Shop Now</button>
    </section>
    
    <section id="feature" class="section-p1">
        <div class="fe-box">
            <img src="./img/f1.png" alt="">
            <h6>Free Shipping</h6>
        </div>
        <div class="fe-box">
            <img src="./img/f2.png" alt="">
            <h6>Online Order</h6>
        </div>
        <div class="fe-box">
            <img src="./img/f3.png" alt="">
            <h6>Save Money</h6>
        </div>
        <div class="fe-box">
            <img src="./img/f4.png" alt="">
            <h6>Promotions</h6>
        </div>
        <div class="fe-box">
            <img src="./img/f5.png" alt="">
            <h6>Happy Sell</h6>
        </div>
        <div class="fe-box">
            <img src="./img/f6.png" alt="">
            <h6>F24/7 Support</h6>
        </div>
    </section>
    <div class="form-container">
        <p class="title">Welcome back</p>
        <form class="form">
          <input type="email" class="input" placeholder="Email">
          <input type="password" class="input" placeholder="Password">
          <p class="page-link">
            <span class="page-link-label">Forgot Password?</span>
          </p>
          <button class="form-btn">Log in</button>
        </form>
        <p class="sign-up-label">
          Don't have an account?<span class="sign-up-link">Sign up</span>
        </p>
        <div class="buttons-container">
          <div class="apple-login-button">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" class="apple-icon" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"></path>
            </svg>
            <span>Log in with Apple</span>
          </div>
          <div class="google-login-button">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" x="0px" y="0px" class="google-icon" viewBox="0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
      c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
      c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
      C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
      c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
      c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
            <span>Log in with Google</span>
          </div>
        </div>
      </div>
<footer class="section-p1">
    <div class="col">
        <img class="logo" src="Content/imagetourdien/logo.png" alt="">
        <h4>Contact</h4>
        <p><strong>Address:</strong> 276/91/21 Thong Nhat street, ward 16, district Go Vap, Ho Chi Minh city</p>
        <p><strong>Phone:</strong> 0938032029 / (+84)938032029</p>
        <p><strong>Hours:</strong> 8:00 - 22:00.Mon - Sat</p>
        <div class="follow">
            <h4>Follow Us</h4>
            <div class="icon">
                <i class="fab fa-facebook-f" aria-hidden="true"></i>
                <i class="fab fa-twitter" aria-hidden="true"></i>
                <i class="fab fa-pinterest-p" aria-hidden="true"></i>
                <i class="fab fa-instagram" aria-hidden="true"></i>
            </div>
        </div>
    </div>
    <div class="col">
        <h4>About</h4>
        <a href="#">About Us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Contact Us</a>
    </div>
    <div class="col">
        <h4>My Account</h4>
        <a href="#">Sign in</a>
        <a href="#">View cart</a>
        <a href="#">Sign up</a>
        <a href="#">Track my order</a>
        <a href="#">Help</a>
    </div>
    <div class="col install">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <div class="row">
            <img src="Content/img/pay/app.jpg" alt="">
            <img src="Content/img/pay/play.jpg" alt="">
        </div>
        <p>Secured Payment Gateways</p>
        <img src="Content/img/pay/pay.png" alt="">
    </div>
</footer>
    <script src="./main.js"></script>
</template>

<script>
export default {
  name: "BAI1",
  data() {
    return {
      indexIMG: 0,
      sanphamloai: [],
      giohang: [],
      loai: 1,
      indexSP: 0,
      isModal: false,
      isModalVisible: false,
      tongSoLuongMua: 0,
      sanpham: [
        {
          danhgia: 4,
          loai: 1,
          ten: "Nhẫn Bạc S925 Stone Lotus Helios Silver Original",
          hinhanh: [
            "assets/imagenhan/1.png",
            "assets/imagenhan/1-2.png",
            
          ],
          gia: 795000,
          mota: "Câu chuyện từ nhà thiết kế: Mạnh mẽ, gai góc nhưng ẩn sâu trong đó vẫn là sự mềm mại và uyển chuyển. Thiết kế band ring kết hợp với đá CZ đen giúp toàn bộ chế tác mang cảm giác nhẹ nhàng hơn so với những người anh em đi trước.Nhưng vẫn giữ được vẻ sắc sảo vốn có của thiết kế Lotusgot!",
          giamgia: true,
          soluong: 3,
        },
        {
          danhgia: 5,
          loai: 1,
          ten: "Nhẫn Bạc S925 Lotus Loop Helios Silver Original",
          hinhanh: [
            "assets/imagenhan/2.png",
            "assets/imagenhan/2-2.png",
          ],
          gia: 995000,
          mota: "Câu chuyện từ nhà thiết kế: Lotus Loop sở hữu dải họa tiết Lotus chạm nổi trên bề mặt đen sần, tăng độ tương phản và tạo chiều sâu ấn tượng.Thoạt nhìn, tưởng chừng các đóa hoa nối tiếp nhau để hoàn thiện một vòng khép kín.Nhưng chúng lại tạo ra những vòng lặp không hồi kết, bởi hình tròn vốn chẳng có điểm bắt đầu hay dừng lại.Tượng trưng cho vòng tuần hoàn của cuộc sống, cũng như sự vô tận của vũ trụ này.",
          giamgia: false,
          soluong: 4,
        },
        {
          danhgia: 5,
          loai: 1,
          ten: "Nhẫn Bạc S925 Clytze Old Detail Stone Helios Silver Original",
          hinhanh: [
            "assets/imagenhan/3.png",
            "assets/imagenhan/3-2.png",
          ],
          gia: 985000,
          mota: "Câu chuyện từ nhà thiết kế: Chiếc nhẫn Old Detail Stone lấy cảm hứng từ truyền thuyết về loài hoa hướng dương.Dựa trên nét đặc trưng của kiến trúc Gothic, chế tác được hoàn thiện với đường cut-out sắc khỏe, tạo nên dải hoa văn Sunflower độc đáo.Cái tên Old Detail Stone gợi lên một vẻ đẹp có chút cổ điển nhưng mãi trường tồn, cũng giống như chính tình yêu đôi lứa vậy.",
          giamgia: false,
          soluong: 4,
        },
        {
          danhgia: 4,
          loai: 2,
          ten: "Dây chuyền nam, nữ Helios Laurel Gem Stone DCN227",
          hinhanh: [
            "assets/imagenhan/28.png",
            "assets/imagenhan/28-2.png"
          ],
          gia: 206000,
          mota: "Câu chuyện từ nhà thiết kế: Một khối quặng thô ráp, qua bàn tay tỉ mỉ mà nên hình viên ngọc.Một hạt mầm tí hon, qua bàn tay vun trồng mà vươn cao từng ngày.Được thiết kế dựa trên hình ảnh cành cây ôm trọn viên ngọc, dây chuyền Laurel Gen Stone mang ý niệm về sự kiên trì, bền bỉ của con người.Thành quả có được hôm nay tương xứng với cả hành trình dài trong quá khứ.Mọi công sức đều không uổng phí nếu ta luôn cố gắng không ngừng.",
          giamgia: true,
          soluong: 4,
        },
        {
          danhgia: 5,
          loai: 2,
          ten: "Dây chuyền nam, nữ Helios Triquetra DCN181 15 Pro Max 256GB | Chính hãng VN/A",
          hinhanh: [
            "assets/imagenhan/29.png",
            "assets/imagenhan/29-2.png"
            
          ],
          gia: 206000,
          mota: "Câu chuyện từ nhà thiết kế: Triquetra là là một trong những biểu tượng druid cổ đại, xuất hiện trong rất nhiều nền văn hóa trên thế giới. Vì thế, Triquetra ẩn chứa rất nhiều ý nghĩa khác nhau, với điểm chung là sự duy trì, thống nhất và kết nối giữa 3 khía cạnh. Chẳng hạn như linh hồn, thể xác, tâm trí; quá khứ, hiện tại và tương lai; Chúa Cha, Chúa Con, Chúa Thánh Thần (Chúa ba ngôi); cha, mẹ và con; thiếu nữ, mẹ và bà lão; quyền lực, trí tuệ, tình yêu; sáng tạo, bảo tồn và hủy diệt; đấng sáng tạo, kẻ phá hủy và người duy trì; suy nghĩ, cảm giác và cảm xúc,...",
          giamgia: false,
          soluong: 4,
        },
        {
          danhgia: 5,
          loai: 2,
          ten: "Mặt Dây Chuyền Bạc S925 SMILE Helios Silver Original DCBN013",
          hinhanh: [
            "assets/imagenhan/30.png",
            "assets/imagenhan/30-2.png"
            
          ],
          gia: 495000,
          mota: "Câu chuyện từ nhà thiết kế: Như chính tên gọi, Smile chỉ đơn giản là biểu tượng cảm xúc mặt cười quen thuộc với chúng ta.Tinh thần phá cách của Helios thể hiện qua việc phủ kín Smile với những viên đá CZ.Tạo nên một chế tác chất ngầu theo tinh thần Iced Out của thời trang đường phố.",
          giamgia: true,
          soluong: 3,
        },
      ],
    };
  },
  computed: {
    tongSoluong() {
      return this.giohang.reduce((sum, item) => sum + item.soluongmua, 0);
    },
    tongTien() {
      return this.giohang.reduce((sum, item) => sum + item.soluongmua*item.gia, 0);
    }
  },
  mounted() {
    this.sanPhamLoai();
    this.sanPhamThem();
  },
  methods: {
    formatCurrency(value) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(value);
    },
    srcAnh(src) {
      return require(`@/${src}`);
    },
    anhChinh(index) {
      this.indexIMG = index;
    },
    sanPhamLoai(loai) {
      this.indexIMG = 0;
      this.indexSP = 0;
      this.sanphamloai = [];
      this.loai = loai !== undefined ? loai : this.loai;
      this.sanpham.forEach((item) => {
        if (item.loai == this.loai) {
          this.sanphamloai.push(item);
        }
      });
    },
    sanPhamThem(index) {
      this.indexIMG = 0;
      this.indexSP = 0;
      this.indexSP = index != null ? index : this.indexSP;
    },
    openModal() {
    this.isModalVisible = true;
  },
  closeModal() {
    this.isModalVisible = false;
  },
    soLuongMua() {
      this.giohang.forEach(item => {
        this.tongSoLuongMua+=item.soluongmua
      });
    },
    muaHang(item) {
      const daMua = this.giohang.find((itemf) => itemf.ten === item.ten);
      const newItem = { ...item, soluongmua: 1 };
      newItem.gia = item.giamgia ? item.gia - item.gia * 0.2 : item.gia;
      if (daMua) {
        daMua.soluongmua++;
      } else {
        this.giohang.push(newItem);
      }
      item.soluong = item.soluong - 1;
      // this.soLuongMua;
    },
    xoa1SP(item, index) {
        item.soluongmua--;
        this.sanphamloai.forEach((sp) => {
          if (sp.ten == item.ten) {
            sp.soluong++;
          }
        });
      if (item.soluongmua <= 0) {
        this.giohang.splice(index, 1);
      }
      // this.soLuongMua;
    },
    xoaHet() {
      this.giohang = [];
    },
  },
};
</script>

<style>
       .form-container {
  margin: auto;
  width: 350px;
  height: 500px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px 30px;
}

.title {
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  margin: 10px 0 30px 0;
  font-size: 28px;
  font-weight: 800;
}

.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 15px;
}

.input {
  border-radius: 20px;
  border: 1px solid #c0c0c0;
  outline: 0 !important;
  box-sizing: border-box;
  padding: 12px 15px;
}

.page-link {
  text-decoration: underline;
  margin: 0;
  text-align: end;
  color: #747474;
  text-decoration-color: #747474;
}

.page-link-label {
  cursor: pointer;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 9px;
  font-weight: 700;
}

.page-link-label:hover {
  color: #000;
}

.form-btn {
  padding: 10px 15px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  border-radius: 20px;
  border: 0 !important;
  outline: 0 !important;
  background: teal;
  color: white;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.form-btn:active {
  box-shadow: none;
}

.sign-up-label {
  margin: 0;
  font-size: 10px;
  color: #747474;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.sign-up-link {
  margin-left: 1px;
  font-size: 11px;
  text-decoration: underline;
  text-decoration-color: teal;
  color: teal;
  cursor: pointer;
  font-weight: 800;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.buttons-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 20px;
  gap: 15px;
}

.apple-login-button,
    .google-login-button {
  border-radius: 20px;
  box-sizing: border-box;
  padding: 10px 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
        rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 11px;
  gap: 5px;
}

.apple-login-button {
  background-color: #000;
  color: #fff;
  border: 2px solid #000;
}

.google-login-button {
  border: 2px solid #747474;
}

.apple-icon,
    .google-icon {
  font-size: 18px;
  margin-bottom: 1px;
}
      .section-p1 {
        padding: 40px 80px;
      }
      .section-m1 {
        margin: 40px 0;
      }
      
      footer {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
      }
      footer .col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 20px;
      }
      footer .logo {
          margin-bottom: 30px;
      }
      footer h4 {
          font-size: 14px;
          padding-bottom: 20px;
      }
      footer p {
          font-size: 12px;
          margin: 0 0 8px 0;
      }
      footer a {
          font-size: 13px;
          text-decoration: none;
          color: #222;
          margin-bottom: 10px;
      }
      footer .follow {
          margin-top: 20px;
      }
      footer .follow i{
          color: #465b52;
          padding-right: 4px;
          cursor: pointer;
      }
      footer .install .row img {
          border: 1px solid #088178;
          margin: 0 8px 10px 8px;
          border-radius: 6px;
      }
      footer .install img {
          margin: 10px 0 15px 0;
      }
      footer .follow .icon {
          font-size: 16px;
      }
      footer .follow i:hover,
      footer a:hover{
          color: #088178;
      }
      footer .copyright {
          width: 100%;
          text-align: center;
      }
    </style>