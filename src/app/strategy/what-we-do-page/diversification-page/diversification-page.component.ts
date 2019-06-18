import { Component, OnInit } from '@angular/core';
import {ContentConfigsContent, StrategyContent} from '../../share/services/query.interface';
import {QueryGQL} from '../../share/services/query.service';
import {Data} from '../../../share/services/daotranslate.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'li-diversification-page',
  templateUrl: './diversification-page.component.html',
  styleUrls: ['./diversification-page.component.scss']
})
export class DiversificationPageComponent implements OnInit {

  contents: {
    header?: Data;
    title?: Data;
    article1?: Data;
    article2?: Data;
    article3?: Data;
  } = {};

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((results: { data: Data[] }) => {
      results.data.forEach((value: StrategyContent) => {
        if (value.id_position === 'header') {
          this.contents.header = value;
        }
        if (value.id_position === 'diversification') {
          this.contents.title = value;
        }
        if (value.id_position === 'diversification-maximizes-performance') {
          this.contents.article1 = value;
        }
        if (value.id_position === 'diversification-reduces-risk') {
          this.contents.article2 = value;
        }
        if (value.id_position === 'implement-diversification') {
          this.contents.article3 = value;
        }
      });
    });

  }


  isArticles(): boolean {
    return !!(
      this.contents.article1 ||
      this.contents.article2 ||
      this.contents.article3
    );
  }

}
