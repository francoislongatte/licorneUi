import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'li-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {

  customOptions: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };

  slidesStore = [{title : 'oui', id: 1}, {title: 'non', id: 2},{title : 'oui', id: 1}, {title: 'non', id: 2},{title : 'oui', id: 1}, {title: 'non', id: 2},{title : 'oui', id: 1}, {title: 'non', id: 2}];


  constructor() { }

  ngOnInit() {}

}
