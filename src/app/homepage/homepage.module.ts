import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import {WhyUsComponent} from './why-us/why-us.component';
import {AdvantageComponent} from './advantage/advantage.component';
import {HeaderComponent} from './header/header.component';
import {LatestNewsComponent} from './latest-news/latest-news.component';
import {HomepageRoutingModule} from './homepage-routing.module';
import {ShareModule} from '../share/share.module';

@NgModule({
  declarations: [
    HomepageComponent,
    WhyUsComponent,
    AdvantageComponent,
    HeaderComponent,
    LatestNewsComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    ShareModule
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
