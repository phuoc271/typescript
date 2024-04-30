import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  @Output() outputRating: EventEmitter<string> = new EventEmitter<string>();
  starWidth: number;

  constructor() {
    this.rating = 0;
    this.starWidth = (this.rating * 90) / 5;
  }

  ngOnChanges(): void {
    this.starWidth = (this.rating * 90) / 5;
    console.log(this.starWidth);
  }

  viewRating() {
    this.outputRating.emit(`Đánh giá của sản phẩm là ${this.rating}`);
  }
}
