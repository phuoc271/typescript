import { Component } from '@angular/core';

@Component({
  selector: 'app-bai1',
  templateUrl: './bai1.component.html',
  styleUrls: ['./bai1.component.css']
})
export class Bai1Component {
  products: any[] =[
    { id: 1, title: 'Macbook Pro', price: 25000000, qty: 1, image: './assets/images/1.jpg'},
    { id: 2, title: 'Asus ROG Gaming', price: 17000000, qty: 1, image: './assets/images/2.jpg'},
    { id: 3, title: 'Amazon Kindle', price: 15000000, qty: 1, image: './assets/images/3.jpg'},
    { id: 4, title: 'Another Product', price: 18000000, qty: 1, image: './assets/images/4.jpg'},
  ]
  cartItems: any[] =[]
  
  addToCart(item: any) {
    // Add the item or increase qty
    let itemInCart=this.cartItems.filter(d => d.id === item.id);
    let isItemInCart = itemInCart.length >  0;
    if(isItemInCart===false) {
      this.cartItems.push({id: item.id, title: item.title,price: item.price, qtys: item.qty, image: item.image})
    } 
    else{
      itemInCart[0].qtys += item.qty;
    }
    item.qty=1;
    console.log(this.cartItems)
    console.log(this.products)
  }
  removeItem(index: number){
  this.cartItems.splice(index,1);
  }
  totalItems() {
    var sum = 0
    this.cartItems.forEach(function (item) 
    { sum += item.qtys; 
    })
    return sum;
  }
  Total() {
    var sum = 0
    this.cartItems.forEach(function (item) 
    { sum += item.qtys * item.price; 
      console.log(sum);
    })
    return sum;
  }
}
