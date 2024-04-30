import { Component } from '@angular/core';

@Component({
  selector: 'app-bai5',
  templateUrl: './bai5.component.html',
})
export class Bai5Component {
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
  SumRows=() =>{
    var str='',
     sum 
     for(let i=0; i<this.Array.length; i++) {
      sum=0
      for(let j=0; j<this.Array[i].length; j++) {
        sum+=this.Array[i][j]
      }
      str+=sum+" "
    }
    return str
}
  SumCols = (r: number, c: number) => {
    var str = '',
      sum
    for (let i = 0; i < c; i++) {
      sum = 0
      for (let j = 0; j < r; j++) {
        sum += this.Array[j][i]
      }
      str += sum + " "
    }
    //console.log(str)
    return str
  }
}