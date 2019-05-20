import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'strategy',
    loadChildren: './strategy/strategy.module#StrategyModule'
  },
  {
    path: 'performance',
    loadChildren: './performance/performance.module#PerformanceModule'
  },
  {
    path: 'institutionnals-offer',
    loadChildren: './institutionnals-offer/institutionnals-offer.module#InstitutionnalsOfferModule'
  },
  {
    path: 'individual-offer',
    loadChildren: './individual-offer/individual-offer.module#IndividualOfferModule'
  },
  {
    path: 'wealth-manager-offer',
    loadChildren: './wealth-manager-offer/wealth-manager-offer.module#WealthManagerOfferModule'
  },
  {
    path: 'Who-are-we',
    loadChildren: './who-are-we/who-are-we.module#WhoAreWeModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
