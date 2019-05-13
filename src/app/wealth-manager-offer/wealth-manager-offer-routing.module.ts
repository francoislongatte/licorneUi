import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WealthManagerOfferComponent} from './wealth-manager-offer.component';

const routes: Routes = [
  {
    path: '',
    component: WealthManagerOfferComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WealthManagerOfferRoutingModule {
}
