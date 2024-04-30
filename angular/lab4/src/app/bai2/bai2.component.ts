import { Component } from '@angular/core';
import { Articles } from './articles';

@Component({
  selector: 'app-bai2',
  templateUrl: './bai2.component.html',
  styleUrls: ['./bai2.component.css']
})
export class Bai2Component {
  articles: Articles[] = [
    {
      "title": "Taya Bánh Mì đen",
      "url": "https://tadiha.com/abc-bakery-mot-trong-10-thuong-hieu-banh-kem-noi-tieng-tai-tp-hcm-d28960.htm",
      "image": {
        "large": "./assets/images/bakery-23.jpg",
        "small": "./assets/images/bakery-23.jpg"
      }
    },
    { "title": "Bánh mì nướng", "url": "https://tadiha.com/abc-bakery-mot-trong-10-thuong-hieu-banh-kem-noi-tieng-tai-tp-hcm-d28960.htm", "image": { "large": "./assets/images/bakery-22.jpg", "small": "./assets/images/bakery-22.jpg" } },
    { "title": "Hạnh Nhân nướng", "url": "https://tadiha.com/abc-bakery-mot-trong-10-thuong-hieu-banh-kem-noi-tieng-tai-tp-hcm-d28960.htm", "image": { "large": "./assets/images/bakery-24.jpg", "small": "./assets/images/bakery-24.jpg" } },
    { "title": "Bready cuộn nhân dừa", "url": "https://tadiha.com/abc-bakery-mot-trong-10-thuong-hieu-banh-kem-noi-tieng-tai-tp-hcm-d28960.htm", "image": { "large": "./assets/images/bakery-25.jpg", "small": "./assets/images/bakery-25.jpg" } },
    { "title": "Muffin cam hạnh nhân", "url": "https://tadiha.com/abc-bakery-mot-trong-10-thuong-hieu-banh-kem-noi-tieng-tai-tp-hcm-d28960.htm", "image": { "large": "./assets/images/bakery-26.jpg", "small": "./assets/images/bakery-26.jpg" } },
    { "title": "Đan mạch ca dé", "url": "https://tadiha.com/abc-bakery-mot-trong-10-thuong-hieu-banh-kem-noi-tieng-tai-tp-hcm-d28960.htm", "image": { "large": "./assets/images/bakery-27.jpg", "small": "./assets/images/bakery-27.jpg" } },
    { "title": "Baguette ngũ hạt dài", "url": "https://tadiha.com/abc-bakery-mot-trong-10-thuong-hieu-banh-kem-noi-tieng-tai-tp-hcm-d28960.htm", "image": { "large": "./assets/images/bakery-28.jpg", "small": "./assets/images/bakery-28.jpg" } }
  ]
  layout: string = 'grid'//list
}
