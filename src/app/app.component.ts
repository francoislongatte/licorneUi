import {Component} from '@angular/core';
import {animate, query, style, transition, trigger} from '@angular/animations';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute, Router, RoutesRecognized} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  /*animations: [
    trigger('fadeAnimation', [
      // The '* => *' will trigger the animation to change between any two states
      transition('* => *', [
        // The query function has three params.
        // First is the event, so this will apply on entering or when the element is added to the DOM.
        // Second is a list of styles or animations to apply.
        // Third we add a config object with optional set to true, this is to signal
        // angular that the animation may not apply as it may or may not be in the DOM.
        query(
          ':enter',
          [style({opacity: 0})],
          {optional: true}
        ),
        query(
          ':leave',
          // here we apply a style and use the animate function to apply the style over 0.3 seconds
          [style({opacity: 1}), animate('0.3s', style({opacity: 0}))],
          {optional: true}
        ),
        query(
          ':enter',
          [style({opacity: 0}), animate('0.3s', style({opacity: 1}))],
          {optional: true}
        )
      ])
    ])
  ]*/
})
export class AppComponent {
  title = 'licorne Website';
  constructor(
    private translate: TranslateService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.translate.setDefaultLang('en');
    this.router.events.subscribe(val => {
      if (val instanceof RoutesRecognized) {
        if (val && val.state && val.state.root && val.state.root.firstChild) {
          console.log('1', val.state.root.firstChild.url[0].path, this.translate.currentLang);
          if ( this.translate.currentLang !== val.state.root.firstChild.url[0].path ) {
            this.translate.use(val.state.root.firstChild.url[0].path);
          };
        } else if (this.translate.getBrowserLang() === 'en' || this.translate.getBrowserLang() === 'fr' ) {
          console.log('2', this.translate.getBrowserLang());
          this.translate.use('fr');
          this.router.navigate(['./fr']);
        } else {
          console.log('3', 'fr');
          this.translate.use('fr');
          this.router.navigate(['fr']);
        }
      }
    });
  }
}
