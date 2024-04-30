import { Component } from '@angular/core';
import { Products } from '../products';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: Products[] = [];
  filterProductList: Products[] = [];
  searching = '';
  constructor(private prod: ProductService){
    this.products = prod.getProduct();
    this.filterProductList = this.products
  }

  filterResults(){
    console.log(this.searching);
    if (!this.searching) {
      this.filterProductList = this.products
    }
      this.filterProductList = this.products.filter(
        list => list?.productName.toLowerCase().includes(this.searching.toLowerCase())
      )
    
  }
}
