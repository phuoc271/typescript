import { Component } from '@angular/core';
import { SanPham } from './san-pham';

@Component({
  selector: 'app-bai4',
  templateUrl: './bai4.component.html',
  styleUrls: ['./bai4.component.css']
})
export class Bai4Component {
  sanpham: SanPham[] = [
    { id: 1, hanghoa: 'iPhone9', dongia: 700, soluong: 0, active: false },
    { id: 2, hanghoa: 'Samsung', dongia: 400, soluong: 0, active: false },
    { id: 3, hanghoa: 'Nokia', dongia: 100, soluong: 0, active: false },
    { id: 4, hanghoa: 'Sony Xperia', dongia: 450, soluong: 0, active: false },
    { id: 5, hanghoa: 'Motorola', dongia: 180, soluong: 0, active: false },
    { id: 6, hanghoa: 'Oppo', dongia: 600, soluong: 0, active: false },
    { id: 7, hanghoa: 'bPhone', dongia: 90, soluong: 0, active: false }
  ]
  changeActive(item: any) {
    item.active = !item.active
    console.log(this.sanpham)
  }
  sl: number = 0
  Total() {
    var sum = 0;
    var tr = document.querySelectorAll("tr");
    this.sanpham.forEach(function (item) {
      
      if (item.active == true && tr[item.id].style.display == "table-row"){
        sum += (item.dongia * item.soluong);
      }
    })
    return sum;
  } 

  Tinh(item: any) {
    var sum = 0;
      if (item.active == true)
        sum = (item.dongia * item.soluong);
    return sum;
  } 
  gia: number = 0
  ShowAll() {
    var tr = document.querySelectorAll("tr");
    this.sanpham.forEach(function (item) {
        tr[item.id].style.display = "table-row";
    })
  }
  sortBy() {
    var tr = document.querySelectorAll("tr");
    this.ShowAll();
    this.Total();
    console.log(this.gia);
    if(this.gia==199){
        this.sanpham.forEach(function (item) {
          if(item.dongia >200) {
            tr[item.id].style.display = "none";
          }
        })
        this.Total();
        
      }
      else if(this.gia==499){
        this.sanpham.forEach(function (item) {
          if(item.dongia >=500 || item.dongia <=200) {
            tr[item.id].style.display = "none";
          }
        })
      }
      else if(this.gia==1){
        this.sanpham.forEach(function (item) {
          if(item.dongia <= 500) {
            tr[item.id].style.display = "none";
          }
        })
      }
    }
  }

