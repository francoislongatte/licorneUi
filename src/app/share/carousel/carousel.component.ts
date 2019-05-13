import {Component, HostListener, OnInit, ViewEncapsulation} from '@angular/core';
import * as Flickity from 'flickity/js/index.js';

@Component({
  selector: 'li-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CarouselComponent implements OnInit {
  constructor() { }

  option = {
    wrapAround: false,
    autoPlay: false,
    contain: true,
    cellAlign: 'center'
  };

  children = [
    {title: 'Child 1'},
    {title: 'Child 2'},
    {title: 'Child 3'},
    {title: 'Child 4'},
    {title: 'Child 5'}
  ];

  flkty: Flickity = {};
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (this.flkty !== {}) {
      (this.flkty as any).resize();
    }
  }

  ngOnInit() {
    setInterval(() => {
      this.flkty = new Flickity( '.main-carousel', this.option);
    });
  }

  previous() {
    this.flkty.previous();
  }

  next() {
    this.flkty.next();
  }

}
