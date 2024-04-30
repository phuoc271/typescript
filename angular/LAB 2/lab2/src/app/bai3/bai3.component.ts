import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-bai3',
  template: `
  <div class="row">
  <div class="col-md-6 offset-md-3">
  <div class="card">
  <div class="card-header text-center text-primary">
  <h4>Nhập Xuất mảng 1 chiều</h4>
  </div>
  <div class="card-body">
  <div class="form-group">
  <label for="">Nhập N</label>
  <input type="text"name=""#newItem id=""class="form-control"placeholder=""aria-describedby="helpId">
  </div>
  <p *ngFor="let arr of Array1">{{arr}}</p>
  </div>
  <div class="card-footer text-danger">
  <button type="button"class="btn btn-primary"(click)="Add(newItem.value)">Add</button> 
  </div>
  </div>
  </div>
  </div>
  `,
  styles: []
})
export class Bai3Component {
  @Output() newItem = new EventEmitter<string>()
  @Input() Array1: any[] = []
  Add(value: string) {
    this.newItem.emit(value)
  }

}
