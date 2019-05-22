import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {StrategyComponent} from './strategy.component';
import {StrategyMainComponent} from './strategy-main/strategy-main.component';
import {WhatTheyDoPageComponent} from './what-they-do-page/what-they-do-page.component';

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
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StrategyRoutingModule {
}
