import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab1';
  name: string = 'Trường CD CNTT';
  nambd: number = 2021;
  namht: number = 2023;
  isReadonly = false
  a: any = 0
  b: any = 0
  c: any = 0
  a3: any = 0
  b3: any = 0
  c3: any = 0
  a4: any = 0
  b4: any = 0
  c4: any = 0
  a5: any = 0
  b5: any = 0
  a6: any = 0
  b6: any = 0
  c6: any = 0
  Readonly() {
    this.isReadonly = !this.isReadonly
  }
  sum() {
    return parseInt(this.a) + parseInt(this.b)
  }
  sum1(a1: any, b1: any) {
    return parseInt(a1) + parseInt(b1)
  }
  tru(a1: any, b1: any) {
    return parseInt(a1) - parseInt(b1)
  }
  tich(a1: any, b1: any) {
    return parseInt(a1) * parseInt(b1)
  }
  thuong(a1: any, b1: any) {
    return parseInt(a1) / parseInt(b1)
  }
  max(a2: any, b2: any) {
    if (a2 > b2) {
      return a2
    } else {
      return b2
    }
  }

  isMax() {
    var max = parseInt(this.a3);
    if (parseInt(this.b3) > max) {
      var max = parseInt(this.b3);
    }
    if (parseInt(this.c3) > max) {
      var max = parseInt(this.c3);
      console.log('c = ' + this.c3);
    }
    return max;
  }
  tangdan(a4: any, b4: any, c4: any) {
    var a = parseInt(a4)
    var b = parseInt(b4)
    var c = parseInt(c4)
    var max = parseInt(a4)
    if (a > b) {
      var temp = a; a = b; b = temp
    }
    if (a > c) {
      var temp = a; a = c; c = temp
    }
    if (b > c) {
      var temp = b; b = c; c = temp
    }
    return a + ' ' + b + ' ' + c
  }

  ptb1(a5: any, b5: any) {
    var a = parseInt(a5)
    var b = parseInt(b5)
    var kq = ''
    var kq2 = 0
    console.log(a)
    if (a == 0) {
      if (b == 0) {
        kq = 'Phương trình bậc 1 vô số nghiệm'
        return kq
      }
      else {
        kq = 'Phương trình bậc 1 vô nghiệm'
        return kq
      }
    } else {
      kq2 = -b / a
      return kq2
    }
  }
  ptb2() {
    var a = parseInt(this.a6)
    var b = parseInt(this.b6)
    var c = parseInt(this.c6)
    var delta = Math.pow(b, 2) - 4 * a * c
    console.log(delta)
    if (delta < 0) {
      return 'Phương trình vô nghiệm';
    }
    if (delta > 0) {
      var x1 = (-b + Math.sqrt(delta)) / (2 * a)
      var x2 = (-b - Math.sqrt(delta)) / (2 * a)
      return 'Phương trình có 2 nghiệm phân biệt x1 =' + x1 + 'x2 =' + x2
    }
    else {
      var x0 = (-b / (2 * a))
      return 'Phương trình có nghiệm kép x1 =' + x0
    }
  }


  // chon: any
  // a11: any
  // b11: any
  // c11: any
  // x: any
  // kq: any
  // kq2: any
  // PTB1_11() {
  //   let a = parseInt(this.a11);
  //   let b = parseInt(this.b11);
  //   let c = parseInt(this.c11);
  //   if (a == 0) {
  //     if (b == 0) {
  //       this.x = 'Phương trình vô số nghiệm'
  //     } else {
  //       this.x = 'Phương trình vô nghiệm'
  //     }
  //   } else {
  //     this.x = -b / a;
  //   }
  // }
  // PTB2_11() {
  //   let a = parseInt(this.a11);
  //   let b = parseInt(this.b11);
  //   let c = parseInt(this.c11);
  //   let delta = b * b - 4 * a * c;
  //   if (a == 0) {
  //     this.kq = this.kq2 = "Nhập a lớn hơn 0"
  //   } else {
  //     if (delta < 0) {
  //       this.kq = this.kq2 = 'Phương trình vô nghiệm'
  //     } else if (delta == 0) {
  //       this.kq = this.kq2 = -b / (2 * a);
  //     } else {
  //       delta = Math.sqrt(delta);
  //       this.kq = (-b + delta) / (2 * a);
  //       this.kq2 = (-b - delta) / (2 * a);
  //     }
  //   }
  // }
  chon: any
  a7: any = 0
  b7: any = 0
  c7: any = 0
  kq: any
  x1: any
  x2: any
  ptb1n() {
    var a = parseInt(this.a7)
    var b = parseInt(this.b7)
    console.log(a)
    if (a == 0) {
      if (b == 0) {
        this.kq = 'Phương trình bậc 1 vô số nghiệm'

      }
      else {
        this.kq = 'Phương trình bậc 1 vô nghiệm'
      }
    } else {
      this.kq = -b / a
    }
  }
  ptb2n() {
    var a = parseInt(this.a7)
    var b = parseInt(this.b7)
    var c = parseInt(this.c7)
    var delta = Math.pow(b, 2) - 4 * a * c
    console.log(delta)
    if (delta < 0) {
      this.x1 = 'Phương trình vô nghiệm';
    }
    if (delta > 0) {
      this.x1 = 'Phương trình có 2 nghiệm phân biệt là:' + (-b + Math.sqrt(delta)) / (2 * a)
      this.x2 = (-b - Math.sqrt(delta)) / (2 * a)
    }
    else {
      this.x1 = 'Phương trình có nghiệm kép là: ' + (-b / (2 * a))
    }
  }

}



// export class Bai1Component {
//   isReadonly = true;
//   isDisable = true;
//   toggleReadonly() {
//     this.isReadonly = !this.isReadonly;
//   }
//   toggleDisabled() {
//     this.isDisable = !this.isDisable
//   }
//   myClick() {
//     alert('Hello ITC')
//   }
// }
