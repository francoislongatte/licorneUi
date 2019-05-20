import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {QueryGQL, StrategyContent} from '../share/services/query.service';

@Component({
  selector: 'li-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.scss']
})
export class StrategyComponent implements OnInit, AfterViewInit, OnDestroy {
  private fragment: string;
  private fragmentSubscribe: Subscription;

  contents: {
    header?: StrategyContent;
    whatTheyDo?: StrategyContent;
    whatWeDo?: StrategyContent;
  } = {};

  constructor(
    private route: ActivatedRoute,
    private queryGraphql: QueryGQL) {
  }

  ngOnInit() {
    this.fragmentSubscribe = this.route.fragment.subscribe(fragment => {
      this.fragment = fragment;
    });
    this.queryGraphql.$strategyContents
      .subscribe((results: StrategyContent[]) => {
        this.contents.header = results
          .find(result => result.contentconfig.position === 'strategy-header-article');
        this.contents.whatTheyDo = results
          .find(result => result.contentconfig.position === 'strategy-what-they-do-article');
        this.contents.whatWeDo = results
          .find(result => result.contentconfig.position === 'strategy-what-we-do-article');
        console.log(this.contents);
      });

  }

  ngAfterViewInit(): void {

      if (this.fragment) {
        document.querySelector('#' + this.fragment).scrollIntoView({behavior: 'smooth'});
      }

  }

  ngOnDestroy(): void {
    this.fragmentSubscribe.unsubscribe();
  }


}
