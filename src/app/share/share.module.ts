import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressCirclesComponent } from './progress-circles/progress-circles.component';
import { CollapseComponent } from './collapse/collapse.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    ProgressCirclesComponent,
    CollapseComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    ProgressCirclesComponent,
    CollapseComponent,
    CarouselComponent
  ]
})
export class ShareModule { }
