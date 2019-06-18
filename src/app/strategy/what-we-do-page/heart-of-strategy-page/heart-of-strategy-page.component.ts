import {Component, OnInit} from '@angular/core';
import {StrategyContent} from '../../share/services/query.interface';
import {Data} from '../../../share/services/daotranslate.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'li-heart-of-strategy-page',
  templateUrl: './heart-of-strategy-page.component.html',
  styleUrls: ['./heart-of-strategy-page.component.scss']
})
export class HeartOfStrategyPageComponent implements OnInit {

  contents: {
    header?: StrategyContent;
    title?: StrategyContent;
    article1?: StrategyContent;
    article2?: StrategyContent;
    article3?: StrategyContent;
    article4?: StrategyContent;
    graph?: StrategyContent[];
  } = {};

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log(this.route);
    this.route.data.subscribe((results: { data: Data[] }) => {
      results.data.forEach((value: StrategyContent) => {
        console.log('data', value);
        if (value.id_position === 'header') {
          this.contents.header = value;
        }
        if (value.id_position === 'heartOfStrategy') {
          this.contents.title = value;
        }
        if (value.id_position === 'markets-efficient') {
          this.contents.article1 = value;
        }
        if (value.id_position === 'influence-human-behavior') {
          this.contents.article2 = value;
        }
        if (value.id_position === 'reflection-behavioral-flaws') {
          this.contents.article3 = value;
        }
        if (value.id_position === 'trends-universal-timeless-phenomenon') {
          this.contents.article4 = value;
        }
        if (value.id_position.startsWith('graph')) {
          this.contents.graph.push(value);
        }
      });
      console.log('CONTENT', this.contents);
    });
  }

  isArticles(): boolean {
    return !!(
      this.contents.article1 ||
      this.contents.article2 ||
      this.contents.article3 ||
      this.contents.article4
    );
  }
}
