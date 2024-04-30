import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab4';
  services: any[] =[
    {name: 'Chocolate freeze',price: 69,active: true}, 
    {name: 'Phindi Hạnh Nhân',price: 50,active: false}, 
    {name: 'Cà Phê Sữa',price: 40,active: false}, 
    {name: 'Trà Sen Vàng',price: 40,active: false}
  ]
  changeActive(item: any) {
    item.active = !item.active
    console.log(this.services)
  }
  Total() {
    var sum=0;
    this.services.forEach(function(item) {
      if(item.active == true) 
      sum += item.price;
    })
    return sum;
  }
}
