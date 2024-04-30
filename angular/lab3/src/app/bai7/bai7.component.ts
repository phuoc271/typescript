import { Directive, ElementRef, Input } from '@angular/core'
import { Component } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-bai7',
  templateUrl: './bai7.component.html',
})
export class Bai7Component {
  show = true
  img: string | undefined
  today = new Date();
  student: Student[] = [
    { fullname: 'Phước', birthday: this.today, gender: 'nam', mark: 9, pic: './assets/img/hinh.jpg' },
    { fullname: 'Vy', birthday: this.today, gender: 'nu', mark: 8, pic: './assets/img/hinh2.jpg' }

  ]
  ViewPic(index: number) {
    this.img = this.student[index].pic
  }
}
@Directive({
  selector: '[ngShow]',
})
export class NgShowDirective {
  constructor(private ngEl: ElementRef) {}

  @Input()
  set ngShow(condition: boolean) {
    this.show(condition)
  }

  private show(value: boolean): void {
    this.ngEl.nativeElement.style.display = value ? '' : 'none'
  }
  
}