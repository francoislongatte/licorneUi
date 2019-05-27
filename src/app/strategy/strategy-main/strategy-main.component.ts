import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContentConfigsContent, StrategyContent} from '../share/services/query.interface';
import {QueryGQL} from '../share/services/query.service';

@Component({
  selector: 'li-strategy-main',
  templateUrl: './strategy-main.component.html'
})
export class StrategyMainComponent implements OnInit, AfterViewInit, OnDestroy {
  /*private fragment: string;
  private fragmentSubscribe: Subscription;*/

  contents: {
    header?: StrategyContent[];
    whatTheyDo?: StrategyContent[];
    whatWeDo?: StrategyContent[];
  } = {};

  constructor(
    private route: ActivatedRoute,
    private queryGraphql: QueryGQL) {
  }

  ngOnInit() {
    /*this.fragmentSubscribe = this.route.fragment.subscribe(fragment => {
      this.fragment = fragment;
    });*/
    this.queryGraphql.$strategyPage
      .subscribe((results: ContentConfigsContent[]) => {
        console.log(results);
        const header = results
          .find(result => result.id_text === 'header');
        const whatTheyDo = results
          .find(result => result.id_text === 'whatTheyDo');
        const whatWeDo = results
          .find(result => result.id_text === 'whatWeDo');
        this.contents.header = header ? header.contents : null;
        this.contents.whatTheyDo = whatTheyDo ? whatTheyDo.contents : null;
        this.contents.whatWeDo = whatWeDo ? whatWeDo.contents : null;
        console.log(this.contents);
      });

  }

  ngAfterViewInit(): void {

   /* if (this.fragment) {
      document.querySelector('#' + this.fragment).scrollIntoView({behavior: 'smooth'});
    }
*/
  }

  ngOnDestroy(): void {
    /*this.fragmentSubscribe.unsubscribe();*/
  }


}
