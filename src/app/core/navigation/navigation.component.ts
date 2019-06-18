import {Component, ElementRef, HostListener, OnDestroy, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('fadeOpacity', [
      state('true', style({opacity: '1'})),
      state('false', style({opacity: '0'})),
      transition('false <=> true', animate('200ms ease'))
    ]),
    trigger('fadeDisplay', [
      state('true', style({display: 'block'})),
      state('false', style({display: 'none'})),
      transition('false => true', animate('0ms ease')),
      transition('true => false', animate('0ms 200ms ease'))
    ])
  ]
})
export class NavigationComponent implements OnInit, OnDestroy {
  private routeSubscribe: Subscription;
  private languageSubscribe: Subscription;
  private menuLanguageSubscribe: Subscription;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.menuState = false;
    }
  }

  menuState = false;
  menuLanguage: FormGroup;

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private translate: TranslateService,
    private eRef: ElementRef) {

    this.menuLanguage = new FormGroup({
        lang: new FormControl('fr')
      }
    );

    this.languageSubscribe = this.translate.onLangChange.subscribe(value => {
      this.menuLanguage.get('lang').setValue(value.lang.toString(), {emitEvent: false});
    });

    this.menuLanguageSubscribe = this.menuLanguage.get('lang').valueChanges.subscribe(value => {
      const newUrl = this.route.url.replace(this.translate.currentLang, value);
      this.translate.use(value);
      this.route.navigateByUrl(newUrl);
    });

    this.routeSubscribe = this.route.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.menuState = false;
      }
    });
  }

  ngOnInit() {}

  get stateToString(): string {
    return this.menuState.toString();
  }

  toggleMenu() {
    this.menuState = !this.menuState;
  }

  navigateAnchor(url: string) {
    const splitNavigate = url.split('#');
    const splitUrl = this.route.url.split('#');

    this.route.navigate(['./' + this.translate.currentLang + '/' + splitNavigate[0]], {fragment: splitNavigate[1]});

    if (splitNavigate[0] === splitUrl[0]) {
      if (splitNavigate[1]) {
        document.querySelector('#' + splitNavigate[1]).scrollIntoView({behavior: 'smooth'});
      }
    }
  }

  ngOnDestroy(): void {
    this.routeSubscribe.unsubscribe();
    this.languageSubscribe.unsubscribe();
    this.menuLanguageSubscribe.unsubscribe();
  }

}
