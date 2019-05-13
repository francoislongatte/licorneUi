import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InstitutionnalsOfferComponent} from './institutionnals-offer.component';

const routes: Routes = [
  {
    path: '',
    component: InstitutionnalsOfferComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstitutionnalsOfferRoutingModule {
}
