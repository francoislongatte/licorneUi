import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StrategyComponent} from './strategy.component';
import {StrategyMainComponent} from './strategy-main/strategy-main.component';
import {WhatTheyDoPageComponent} from './what-they-do-page/what-they-do-page.component';
import {WhatWeDoPageComponent} from './what-we-do-page/what-we-do-page.component';
import {ArticlesMainComponent} from './what-we-do-page/articles-main/articles-main.component';
import {HeartOfStrategyPageComponent} from './what-we-do-page/heart-of-strategy-page/heart-of-strategy-page.component';
import {DiversificationPageComponent} from './what-we-do-page/diversification-page/diversification-page.component';

const routes: Routes = [
  {
    path: '',
    component: StrategyComponent,
    children: [
      {
        path: '',
        component: StrategyMainComponent
      },
      {
        path: 'what-they-do',
        component: WhatTheyDoPageComponent
      },
      {
        path: 'what-we-do',
        component: WhatWeDoPageComponent,
        children: [
          {
            path: '',
            component: ArticlesMainComponent
          }, {
            path: 'heart-of-strategy',
            component: HeartOfStrategyPageComponent
          },
          {
            path: 'diversification',
            component: DiversificationPageComponent
          }
        ]
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StrategyRoutingModule {
}
