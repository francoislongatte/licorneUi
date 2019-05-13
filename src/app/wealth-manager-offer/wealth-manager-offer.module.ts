import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WealthManagerOfferComponent } from './wealth-manager-offer.component';
import {WealthManagerOfferRoutingModule} from './wealth-manager-offer-routing.module';
import { HeaderComponent } from './header/header.component';
import { SituationComponent } from './situation/situation.component';
import { SolutionsComponent } from './solutions/solutions.component';

@NgModule({
  declarations: [WealthManagerOfferComponent, HeaderComponent, SituationComponent, SolutionsComponent],
  imports: [
    CommonModule,
    WealthManagerOfferRoutingModule
  ]
})
export class WealthManagerOfferModule { }
