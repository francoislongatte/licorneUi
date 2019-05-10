import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ShareModule} from './share/share.module';
import {CoreModule} from './core/core.module';
import {HomepageComponent} from './homepage/homepage.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WhyUsComponent} from './homepage/why-us/why-us.component';
import {AdvantageComponent} from './homepage/advantage/advantage.component';
import {HeaderComponent} from './homepage/header/header.component';
import {LatestNewsComponent} from './homepage/latest-news/latest-news.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    BrowserAnimationsModule,
    AppRoutingModule,
    ShareModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
