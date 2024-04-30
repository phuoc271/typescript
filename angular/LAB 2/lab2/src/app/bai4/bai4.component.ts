import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-bai4',
  templateUrl: './bai4.component.html',
})
export class Bai4Component {
  N: any 
  @Input() Array2: any[] = []
  str: any = ''
  NT(){ 
    var n = parseInt(this.N)
    this.str = '';
                for(var i=0;i<n;i++) {
                    this.Array2[i] =Math.floor((Math.random() *n) +1);
                    
                }this.str += this.Array2 + ' ,';
                
                this.str.prototype.slice(0,-1);
}

}
