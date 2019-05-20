import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'li-wealth-manager-offer',
  templateUrl: './wealth-manager-offer.component.html',
  styleUrls: ['./wealth-manager-offer.component.scss']
})
export class WealthManagerOfferComponent implements OnInit, AfterViewInit, OnDestroy {

  private fragment: string;
  private fragmentSubscribe: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.fragmentSubscribe = this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  ngAfterViewInit(): void {
    try {
      if (this.fragment) {
        document.querySelector('#' + this.fragment).scrollIntoView({behavior: 'smooth'});
      }
    } catch (e) { }
  }

  ngOnDestroy(): void {
    this.fragmentSubscribe.unsubscribe();
  }

}
