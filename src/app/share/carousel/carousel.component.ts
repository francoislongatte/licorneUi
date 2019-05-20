import {AfterViewInit, Component, HostListener, OnDestroy, Renderer2, ViewEncapsulation} from '@angular/core';
import * as Flickity from 'flickity/js/index.js';

@Component({
  selector: 'li-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CarouselComponent implements AfterViewInit, OnDestroy {
  constructor(private renderer: Renderer2) { }

  onResize: any;

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

  previous() {
    this.flkty.previous();
  }

  next() {
    this.flkty.next();
  }

  ngOnDestroy(): void {
    this.onResize();
    this.flkty.destroy();
  }

  ngAfterViewInit(): void {
    this.onResize = this.renderer.listen('window', 'resize', event => {
      if (this.flkty !== {}) {
        (this.flkty as any).resize();
      }
    });
    this.flkty = new Flickity( '.main-carousel', this.option);
  }

}
