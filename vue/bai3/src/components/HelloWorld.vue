<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
    <div class="container">
      <div class="row">
        <template v-if="sanphamloai.length > 0">
          <div class="col-md-4 xs-4 phan1">
            <img class="hinhchinh"
              :src="require(`@/${sanphamloai[indexSP].hinhanh[indexIMG]}`)"
              alt="" 
            />
            <div class="row mt-5">
              <template
                v-for="(image, index) in sanphamloai[indexSP].hinhanh"
                :key="index"
              >
                <div class="col-md-3">
                  <a href="" @click.prevent="anhChinh(index)"
                    ><img class="anhchon" :src="srcAnh(image)" alt=""
                  /></a>
                </div>
                <p>{{ image.id }}</p>
              </template>
            </div>
          </div>
          <div class="col-md-5 xs-5 pl-5 pr-5 text-left phan2">
            <h3>{{ sanphamloai[indexSP].ten }}</h3>
            <template v-for="star in sanphamloai[indexSP].danhgia" :key="star">
              <i class="fas fa-star"></i>
            </template>
            
            <p>{{ sanphamloai[indexSP].mota }}</p>
            <h3>GIÁ BÁN: {{ formatCurrency(sanphamloai[indexSP].gia) }}</h3>
            <b v-if="sanphamloai[indexSP].giamgia"
              >Giá khuyến mãi
              {{
                formatCurrency(
                  sanphamloai[indexSP].gia - sanphamloai[indexSP].gia * 0.2
                )
              }}</b
            >
            <b v-else>Đã hết khuyến mãi</b>
            <p>Sản phẩm còn trong kho {{ sanphamloai[indexSP].soluong }}</p>
            <button
            style="background-color: #ffb31f; color: white;border-color: white;"
              type="button"
              class="btn btn-primary"
              :disabled="sanphamloai[indexSP].soluong <= 0 ? true : false"
              @click="muaHang(sanphamloai[indexSP])"
            >
              Mua liền
            </button>
            <br />
            <div class="row mt-3">
              <template v-for="(prod, index) in sanphamloai" :key="index">
                <div class="col-md-4">
                  <a href="" @click.prevent="sanPhamThem(index)">
                    <img
                    class="spmoi"
                      :src="require(`@/${prod.hinhanh[0]}`)"
                      alt=""
                  /></a>
                </div>
              </template>
            </div>
          </div>
        </template>

        <div class="col-md-3">
          
          <div style="border: 1px solid">
            <p style="color: #ffb31f;">{{ tongSoluong }} :sản phẩm</p>
            <p>Tổng tiền: {{formatCurrency(tongTien)}}</p>
            <button
            style="background-color: black;color: #ffb31f;border-color: white;"
  type="button"
  class="btn btn-primary"
  data-toggle="modal"
  data-target=".bd-example-modal-xl"
  @click="openModal()"
>
  view cart
</button>
          </div>
          <div>
            <div class="card mt-5 border">
              <div class="card-header" style="color: black;">Loại</div>
              <div class="card-body">
                <button
                style="background-color: grey; border-color: grey;"
                  type="button"
                  class="btn btn-primary container-fluid"
                  @click.prevent="sanPhamLoai(2)"
                >
                  Dây Chuyền Bạc
                </button>
                <button
                style="background-color: white;color: black; border-color: white;"
                  type="button"
                  class="btn btn-info container-fluid"
                  @click="sanPhamLoai(1)"
                >
                  Nhẫn Bạc
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- modal -->
      <div class="box" v-if="isModalVisible">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <!-- Modal Body -->
            <div class="modal-body">
              <table class="table text-center" style="width: 100%">
                <tr>
                  <th>HÌNH</th>
                  <th>SẢN PHẨM</th>
                  <th>Đơn giá</th>
                  <th>Số lượng</th>
                  <th>Tiền</th>
                  <th><button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeModal()" style="background: none;color: white;margin-right: -90px;margin-top: -10px;border: 0;">X</button></th>
                </tr>
                <tr v-for="(item, index) in giohang" :key="index">
                  <td>
                    <img
                    class="anhgio"
                      :src="require(`@/${item.hinhanh[0]}`)"
                      alt=""
                    />
                  </td>
                  <td>
                    <p>{{ item.ten }}</p>
                  </td>
                  <td>{{ formatCurrency(item.gia) }}</td>
                  <td>{{ item.soluongmua }}</td>
                  <td>{{ formatCurrency(item.gia * item.soluongmua) }}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-danger"
                      @click="xoa1SP(item, index)"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <th></th>
                  <th>Tổng tiền</th>
                  <th>{{ tongSoluong }}</th>
                  <th>{{ formatCurrency(tongTien) }}</th>
                  <th><button type="button" class="btn btn-danger" @click="xoaHet()">Xóa hết</button></th>
                </tr>
              </table>
            </div>

            <!-- Modal Footer -->
            <div class="modal-footer">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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

<style scoped>
.box {
  position: fixed;
  top : 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.fa-star:before {
  color: darkorange;
} 
img.hinhchinh {
  width: 100%;
}
img.anhchon {
  width: 140%; 
  padding: 5px;
}
img.spmoi {
  width: 120%;
}
img.anhgio{
  width: 70%;
}
*{
  background-color: black;
  color: white;
}
@media all and (max-width: 500px) {
   body {
      background: #e7e7e7;
   }
img.hinhchinh {
width: 100%;
}
img.anhchon {
  width: 40%; 
  padding: 5px;
}
img.spmoi {
  width: 20%;
}
.box {
  position: fixed;
  top : 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}




  }
</style>
