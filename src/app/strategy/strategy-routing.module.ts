import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StrategyComponent} from './strategy.component';
import {StrategyMainComponent} from './strategy-main/strategy-main.component';
import {WhatTheyDoPageComponent} from './what-they-do-page/what-they-do-page.component';
import {WhatWeDoPageComponent} from './what-we-do-page/what-we-do-page.component';
import {ArticlesMainComponent} from './what-we-do-page/articles-main/articles-main.component';
import {HeartOfStrategyPageComponent} from './what-we-do-page/heart-of-strategy-page/heart-of-strategy-page.component';
import {DiversificationPageComponent} from './what-we-do-page/diversification-page/diversification-page.component';
import {StrategyMainResolve} from './strategy-main/strategy-main.resolve';
import {WhatWeDoPageResolve} from './what-we-do-page/articles-main/what-we-do-page.resolve';
import {HeartOfStrategyPageResolve} from './what-we-do-page/heart-of-strategy-page/heart-of-strategy-page.resolve';
import {WhatTheyDoPageResolve} from './what-they-do-page/what-they-do-page.resolve';
import {DiversificationPageResolve} from './what-we-do-page/diversification-page/diversification-page.resolve';

const routes: Routes = [
  {
    path: '',
    component: StrategyComponent,
    children: [
      {
        path: '',
        component: StrategyMainComponent,
        resolve: {
          data: StrategyMainResolve
        },
        runGuardsAndResolvers: 'always'
      },
      {
        path: 'what-they-do',
        component: WhatTheyDoPageComponent,
        resolve: {
          data : WhatTheyDoPageResolve
        }
      },
      {
        path: 'what-we-do',
        component: WhatWeDoPageComponent,
        resolve: {
          data : WhatWeDoPageResolve
        },
        runGuardsAndResolvers: 'always',
        children: [
          {
            path: '',
            component: ArticlesMainComponent
          },
          {
            path: 'heart-of-strategy',
            component: HeartOfStrategyPageComponent,
            resolve: {
              data : HeartOfStrategyPageResolve
            },
            runGuardsAndResolvers: 'always'
          },
          {
            path: 'diversification',
            component: DiversificationPageComponent,
            resolve: {
              data : DiversificationPageResolve
            }
          }
        ]
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [
    StrategyMainResolve,
    WhatWeDoPageResolve,
    HeartOfStrategyPageResolve,
    WhatTheyDoPageResolve,
    DiversificationPageResolve
  ],
  exports: [RouterModule]
})
export class StrategyRoutingModule {
}
