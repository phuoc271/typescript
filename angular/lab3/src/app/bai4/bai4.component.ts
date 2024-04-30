import { Component } from '@angular/core';

@Component({
  selector: 'app-bai4',
  templateUrl: './bai4.component.html',
})
export class Bai4Component {
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
  SumCols=(r: number, c: number) =>{
    var str='', 
  sum
  for(let i=0; i<c; i++) {
    sum=0 
    for (let j=0; j< r; j++) {
      sum+=this.Array[j][i]
    }
    str +=sum+" "}
    //console.log(str)
    return str
  }
}

