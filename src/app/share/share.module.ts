import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressCirclesComponent } from './progress-circles/progress-circles.component';
import { CollapseComponent } from './collapse/collapse.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';

@NgModule({
  declarations: [
    ProgressCirclesComponent,
    CollapseComponent,
    CarouselComponent,
    LoadingScreenComponent
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
