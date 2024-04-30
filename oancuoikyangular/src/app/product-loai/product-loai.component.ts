import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Products } from '../products';

@Component({
  selector: 'app-product-loai',
  templateUrl: './product-loai.component.html',
  styleUrls: ['./product-loai.component.css']
})
export class ProductLoaiComponent implements OnInit{
  @Input() productHome: Products[] = [];
  productloai: Products[]=[] ;//| undefined;
  constructor(private router: ActivatedRoute, private prod: ProductService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let loai = Number(this.router.snapshot.params['loai']);
    this.productloai = this.prod.getProductloai(loai);
    
  }
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
        if (this.cart[i].id == item.id) {
          flag = true;
        }
      }
    }
    if (flag == false) {
      this.cart.push(item);
    }
    else {
      for (var i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id == item.id) {
          this.cart[i].incart++;
        }
      }
    }
  }
  
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
