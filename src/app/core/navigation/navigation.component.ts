import {Component, OnInit} from '@angular/core';
import {animate, group, query, stagger, state, style, transition, trigger} from '@angular/animations';
import {NavigationEnd, Router} from '@angular/router';

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
export class NavigationComponent implements OnInit {

  menuState = false;

  constructor(private route: Router) {
    route.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.menuState = false;
      }
    });
  }

  ngOnInit() {
  }

  get stateToString(): string {
    return this.menuState.toString();
  }

  toggleMenu() {
    this.menuState = !this.menuState;
  }

}
