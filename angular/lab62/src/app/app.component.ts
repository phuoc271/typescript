import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'lab62';
  ImgV: any[] =['1.jpg', '2.jpg', '3.jpg', '4.jpg']
  Content: string='Là dòng sản phẩm có thiết kế mỏng nhẹ, sang trọng và tinh tế cùng với đó là giá thành phải chăng nên MacBook Air đã thu hút được đông đảo người dùng yêu thích và lựa chọn. Một trong những phiên bản mới nhất mà khách hàng không thể bỏ qua khi đến với CellphoneS đó là MacBook Air M1. Dưới đây là chi tiết về thiết kế, cấu hình của máy.'
  products: any[] =[
    { img: '1.jpg', name: 'Apple MacBook Air M1 256GB 2020 I I Chính hãng Apple Việt Nam ', price: 26500, rating: 3, inStock: 5, color: 'Đen', onSale: true, quality: 0},
    { img: '5.jpg', name: 'Apple MacBook Air 13 256GB 2020 I I Chính hãng Apple Việt Nam ', price: 29500, rating: 4, inStock: 3, color: 'Xanh', onSale: false, quality: 0},
    { img: '6.jpg', name: 'Apple MacBook Air 13 512GB 2020 I I Chính hãng Apple Việt Nam ', price: 30500, rating: 5, inStock: 0, color: 'Cam', onSale: true, quality: 0}]
    selectedVariant: number=0
    cart: any[] =[
      { img: '1.jpg', name: 'Apple MacBook Air M1 256GB 2020 I I Chính hãng Apple Việt Nam ', price: 26500, quality: 0}
    ]
    imgs: string='1.jpg'
    title1() {

    }
    changeImg(item : any) {

    }
    ChangeImage(){}
    starRating() {

    }
    price() {

    }
    inSale() {

    }
    priceOnSal() {

    }
    inStock() {}
    addCart(selectedVariant : any) {
      selectedVariant='';
      return selectedVariant;;
    }
    totalItems() {}
    Total() {}
    Remove(i :any) {}
    DeleteAll() {}
}
