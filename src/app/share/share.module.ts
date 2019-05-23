import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressCirclesComponent } from './progress-circles/progress-circles.component';
import { CollapseComponent } from './collapse/collapse.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    ProgressCirclesComponent,
    CollapseComponent,
    CarouselComponent,
    LoadingScreenComponent,
    LineChartComponent
  ],
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  exports: [
    ProgressCirclesComponent,
    CollapseComponent,
    CarouselComponent,
    LoadingScreenComponent,
    LineChartComponent
  ]
})
export class ShareModule { }
