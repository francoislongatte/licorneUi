import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndividualOfferComponent} from './individual-offer.component';


const routes: Routes = [
  {
    path: '',
    component: IndividualOfferComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndividualOfferRoutingModule {
}
