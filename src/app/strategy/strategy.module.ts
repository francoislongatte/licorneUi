import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrategyComponent } from './strategy.component';
import { StrategyRoutingModule } from './strategy-routing.module';
import { WhatTheyDoComponent } from './what-they-do/what-they-do.component';
import { HeaderComponent } from './header/header.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';

@NgModule({
  declarations: [StrategyComponent, WhatTheyDoComponent, HeaderComponent, WhatWeDoComponent],
  imports: [
    CommonModule,
    StrategyRoutingModule
  ]
})
export class StrategyModule { }
