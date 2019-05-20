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
import {LoadingScreenInterceptor} from './loading.interceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';
import {APOLLO_OPTIONS, ApolloModule} from 'apollo-angular';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {MarkdownModule} from 'ngx-markdown';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    WhyUsComponent,
    AdvantageComponent,
    HeaderComponent,
    LatestNewsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    BrowserAnimationsModule,
    AppRoutingModule,
    ShareModule,
    CoreModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    MarkdownModule.forRoot()
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'http://localhost:1337/graphql'
          })
        };
      },
      deps: [HttpLink]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingScreenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
