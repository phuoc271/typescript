import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab9';
  products = [
    {
      image: "1.png",
      name: "Leaf Rake 1",
      code: "GDN-0011",
      date: "2016-03-19",
      price: 8.9,
      description: "Leaf rake with 48-inch wooden handle.",
      rating: [true, true, true, true, false],
    },
    {
      image: "2.png",
      name: "Garden Cart 2",
      code: "GDN-0023",
      date: "2016-03-18",
      price: 32.99,
      description: "15 gallon capacity rolling garden cart",
      rating: [true, true, true, true, true],
    },
    {
      image: "3.png",
      name: "Hammer 5",
      code: "TBX-0048",
      date: "2016-05-21",
      price: 8.99,
      description: "Curved claw steel hammer",
      rating: [true, true, true, false, false],
    },
    {
      image: "4.png",
      name: "Saw 8",
      code: "TBX-0022",
      date: "2016-05-15",
      price: 11.55,
      description: "15-inch steel blade hand saw",
      rating: [true, true, false, false, false],
    },
    {
      image: "5.png",
      name: "Video Game Controller 10",
      code: "GMG-0042",
      date: "2015-10-15",
      price: 35.95,
      description: "Standard two-button video game controller",
      rating: [true, true, true, true, false],
    },
    {
      image: "6.jpg",
      name: "Maxbook 11",
      code: "GMG-0042",
      date: "2023-10-15",
      price: 999.99,
      description: "The ultimate laptop for developers",
      rating: [true, true, true, true, true],
    },
  ];

  addNew() {
    // Code để thêm sản phẩm mới
  }
  edit() {

  }
  delete() {

  }
}
