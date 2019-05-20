import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhoAreWeComponent } from './who-are-we.component';
import { HeaderComponent } from './header/header.component';
import { OurTeamComponent } from './our-team/our-team.component';
import {WhoAreWeRoutingModule} from './who-are-we-routing.module';

@NgModule({
  declarations: [
    WhoAreWeComponent,
    HeaderComponent,
    OurTeamComponent
  ],
  imports: [
    CommonModule,
    WhoAreWeRoutingModule
  ]
})
export class WhoAreWeModule { }
