import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab2';
  N: any | 0
  KTNT(n: number) {
    if (n < 2)
      return 0
    for (let i = 2; i < n; i++) {
      if (n % i == 0)
        return 0;
    }
    return 1;
  }
  lietke() {
    var str = ''
    var n = parseInt(this.N);
    for (let i = 1; i < n; i++) {
      if (this.KTNT(i) == 1) { str += i + ',' }
    }
    return str;
  }
  Array: any=[]
  Add(item: string) {
    this.Array.push(item)
    console.log(this.Array)
}
}

