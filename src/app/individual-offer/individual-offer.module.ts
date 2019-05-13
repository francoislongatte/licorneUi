import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IndividualOfferComponent} from './individual-offer.component';
import { HeaderComponent } from './header/header.component';
import {IndividualOfferRoutingModule} from './individual-offer-routing.module';

@NgModule({
  declarations: [IndividualOfferComponent, HeaderComponent],
  imports: [
    CommonModule,
    IndividualOfferRoutingModule
  ]
})
export class IndividualOfferModule { }
