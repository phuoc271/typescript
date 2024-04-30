import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
ChangeImage() {
throw new Error('Method not implemented.');
}
priceOnSale(): string|number|null|undefined {
throw new Error('Method not implemented.');
}
  title = 'lab6';
  ImgV: any[] =['1.jpg', '2.jpg', '3.jpg', '4.jpg']
  Content: string='Là dòng sản phẩm có thiết kế mỏng nhẹ, sang trọng và tinh tế cùng với đó là giá thành phải chăng nên MacBook Air đã thu hút được đông đảo người dùng yêu thích và lựa chọn. Một trong những phiên bản mới nhất mà khách hàng không thể bỏ qua khi đến với CellphoneS đó là MacBook Air M1. Dưới đây là chi tiết về thiết kế, cấu hình của máy.'
  products: any[] =[]
    selectedVariant: number=0
    cart: any[] =[]
    imgs: string='1.jpg'
    title1() {

    }
    changeImg(item : any) {

    }
    starRating() {
      return Array()
    }
    price() {
      return 0;
    }
    inSale() {
      return false;
    }
    priceOnSal() {

    }
    inStock() {
      return 0;
    }
    addCart(selectedVariant : any) {
      selectedVariant='';
      return selectedVariant;;
    }
    totalItems() {}
    Total() {
      return 0;
    }
    Remove(i :any) {}
    DeleteAll() {}
}
