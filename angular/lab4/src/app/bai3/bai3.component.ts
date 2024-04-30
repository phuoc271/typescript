import { Component } from '@angular/core';
import { Articles3 } from './articles3';

@Component({
  selector: 'app-bai3',
  templateUrl: './bai3.component.html',
  styleUrls: ['./bai3.component.css']
})
export class Bai3Component {
  articles_array: any[] = []
  // The data model. These items would normally be requested via AJAX,
  // but are hardcoded here for simplicity.
  articles: Articles3[] = [
    { "title": "Taya Bánh Mì đen", "url": "http://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables/", "image": "./assets/images/bakery-23.jpg" },
    { "title": "Bánh mì nướng", "url": "http://tutorialzine.com/2016/02/freebie-4-great-looking-pricing-tables/", "image": "./assets/images/bakery-22.jpg" },
    { "title": "Hạnh Nhân nướng", "url": "http://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/", "image": "./assets/images/bakery-24.jpg" },
    { "title": "Bready cuộn nhân dừa", "url": "http://tutorialzine.com/2016/02/quick-tip-easiest-way-to-make-responsive-headers/", "image": "./assets/images/bakery-25.jpg" },
    { "title": "Muffin cam hạnh nhân", "url": "http://tutorialzine.com/2016/01/learn-sql-in-20-minutes/", "image": "./assets/images/bakery-26.jpg" },
    { "title": "Đan mạch ca dé", "url": "http://tutorialzine.com/2015/12/creating-your-first-desktop-app-with-html-js-and-electron/", "image": "./assets/images/bakery-27.jpg" },
    { "title": "Baguette ngũ hạt dài", "url": "http://tutorialzine.com/2015/12/creating-your-first-desktop-app-with-html-js-and-electron/", "image": "./assets/images/bakery-28.jpg" }
  ]
  searchString: string = ""
  filterName() {
    this.articles_array = this.articles;
    var str = this.searchString;
    if (!str) {
      return this.articles_array;
    }
    str = str.trim().toLowerCase();
    this.articles_array = this.articles_array.filter(function (item) {
      if (item.title.toLowerCase().indexOf(str) !== -1) {
        return item;
      }
    }
    )
    return this.articles_array;
  }
}
