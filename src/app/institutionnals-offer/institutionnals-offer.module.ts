import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitutionnalsOfferComponent } from './institutionnals-offer.component';
import {InstitutionnalsOfferRoutingModule} from './institutionnals-offer-routing.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [InstitutionnalsOfferComponent, HeaderComponent],
  imports: [
    CommonModule,
    InstitutionnalsOfferRoutingModule
  ]
})
export class InstitutionnalsOfferModule { }
