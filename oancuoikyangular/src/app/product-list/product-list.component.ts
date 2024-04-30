import { Component, Input } from '@angular/core';
import { Products } from '../products';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @Input() productlist: Products[] = [];

  showRating(even :any){
    alert(`${even}`)
  }

  formProduct = new FormGroup({
    productId: new FormControl<number>(1),
    productName: new FormControl<string>(''),
    productCode: new FormControl<string>(''),
    releaseDate: new FormControl<string>(''),
    price: new FormControl<number>(0),
    description: new FormControl<string>(''),
    starRating: new FormControl<number>(5),
    imageUrl: new FormControl<string>('')
  })

  file: string = '';
  IsAdd: number = 1;
  IsUpdate: number = 0;
  constructor(private prod: ProductService) {
    this.productlist= prod.getProduct()
  }

  onChange(event: any){
    let str = event.target.files[0].name
    this.file = '../assets/imagenhan/' + str

  }

  Add(){
    this.formProduct.controls.productId.setValue(this.prod.AutoId());
    this.prod.AddProduct(this.formProduct.value, this.file)
  }
  id: any;
  Update(){
    this.prod.UpdateProduct(this.id, this.formProduct.value, this.file)
  }

  Edit(index: number){
    this.id = index;
    this.formProduct.controls.productName.setValue(this.prod.EditProduct(index).productName);
    this.formProduct.controls.productCode.setValue(this.prod.EditProduct(index).productCode);
    this.formProduct.controls.releaseDate.setValue(this.prod.EditProduct(index).releaseDate);
    this.formProduct.controls.description.setValue(this.prod.EditProduct(index).description);
    this.formProduct.controls.price.setValue(this.prod.EditProduct(index).price);
    this.file = this.prod.EditProduct(index).imageUrl
  }

  Delete(index: number){
    if (confirm('You want to delete?')) {
      this.prod.DeleteProduct(index);
      
    }
  }


}
