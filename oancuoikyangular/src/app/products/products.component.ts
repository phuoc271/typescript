import { Component, Input } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  @Input() productHome: Products[] = [];
  
  cart: any[] = []
  searching: string = ''
  tongtien: number = 0
  addCart(item: any) {
    var flag = false;
    if (this.cart.length == 0) {
      flag = false;
    }
    else {
      for (var i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id == item.productId) {
          flag = true;
        }
      }
    }
    if (flag == false) {
      this.cart.push(item);
    }
    else {
      for (var i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id == item.productId) {
          this.cart[i].incart++;
        }
      }
    }
  }
  // filterName() {
  //   if (this.searching == null) {
  //     return this.Products;
  //   }
  //   else {
  //     if (this.searching) {
  //       //có{console.log(this.searching);
  //       console.log(this.searching.toUpperCase().split(' '));
  //       return this.products.filter((item) => {
  //         return (this.searching).toUpperCase().split(' ').every(v =>
  //           item.productName.toUpperCase().includes(v));
  //       })
  //     }
  //     else {
  //       return this.products;
  //     }
  //   }

  // }
  itemcount() {
    var sum = 0
    this.cart.forEach(function (item) {
      sum += item.incart;
    })
    return sum;
  }
  increment(item: any) {
    item.incart++;
    return item.incart;
  }
  Delete(index: number) {
  this.cart.splice(index, 1);
  }
  decrement(item: any) {
    item.incart--;
    return item.incart;
  }
  DeleteAll() {
    this.cart = [];
  }
  sumTotal() {
    var sum = 0
    this.cart.forEach(function (item) {
      sum += item.incart * item.price;
    })
    return sum;
  }
}
