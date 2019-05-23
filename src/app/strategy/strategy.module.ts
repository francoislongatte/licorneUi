import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StrategyComponent} from './strategy.component';
import {StrategyRoutingModule} from './strategy-routing.module';
import {WhatTheyDoComponent} from './strategy-main/what-they-do/what-they-do.component';
import {HeaderComponent} from './share/component/header/header.component';
import {WhatWeDoComponent} from './strategy-main/what-we-do/what-we-do.component';
import {ShareModule} from '../share/share.module';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {MarkdownModule} from 'ngx-markdown';
import { StrategyMainComponent } from './strategy-main/strategy-main.component';
import {QueryGQL} from './share/services/query.service';
import { WhatTheyDoPageComponent } from './what-they-do-page/what-they-do-page.component';
import { TitleComponent } from './what-they-do-page/title/title.component';
import { OngletComponent } from './what-they-do-page/onglet/onglet.component';
import { TemplateComponent } from './what-they-do-page/onglet/template/template.component';

@NgModule({
  declarations: [
    StrategyComponent,
    WhatTheyDoComponent,
    HeaderComponent,
    WhatWeDoComponent,
    StrategyMainComponent,
    WhatTheyDoPageComponent,
    TitleComponent,
    OngletComponent,
    TemplateComponent,
  ],
  imports: [
    CommonModule,
    StrategyRoutingModule,
    ShareModule,
    MarkdownModule.forChild()
  ],
  providers: [
    QueryGQL
  ]
})
export class StrategyModule {
}
