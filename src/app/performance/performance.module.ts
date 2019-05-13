import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerformanceComponent } from './performance.component';
import { PerformanceRoutingModule } from './performance-routing.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [PerformanceComponent, HeaderComponent],
  imports: [
    CommonModule,
    PerformanceRoutingModule
  ]
})
export class PerformanceModule { }
