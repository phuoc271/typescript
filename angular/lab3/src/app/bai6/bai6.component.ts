import { Component } from '@angular/core';

@Component({
  selector: 'app-bai6',
  templateUrl: './bai6.component.html',
})
export class Bai6Component {
  R: number = 0
  C: number = 0
  Array: any[] = [];
  addToArray(r: number, c: number) {
    this.Array = []
    for (let i = 0; i < r; i++) {
      this.Array[i] = [];
      for (let j = 0; j < c; j++) {
        this.Array[i][j] = Math.floor((Math.random() * 20) + 1)
      }
    }
    console.log(this.Array)
  }
  Cheochinh(r: number, c: number) {
    var sum=0
    //console.log('hi')
    for(let i=0; i<r; i++) {
      for(let j=0; j<c; j++) {
        if(i==j)sum+=this.Array[i][j]
      }}
      //console.log(str)
      return sum
    }
}
