import {Component, OnInit} from '@angular/core';
import {StrategyContent} from '../../share/services/query.interface';
import {Data} from '../../../share/services/daotranslate.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'li-articles-main',
  templateUrl: './articles-main.component.html',
  styleUrls: ['./articles-main.component.scss']
})
export class ArticlesMainComponent implements OnInit {

  contents: {
    header?: StrategyContent;
    title?: StrategyContent;
    article1?: StrategyContent;
    article2?: StrategyContent;
    article3?: StrategyContent;
    article4?: StrategyContent;
    article5?: StrategyContent;
    article6?: StrategyContent;
  } = {};

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.data.subscribe((results: { data: Data[] }) => {
      console.log('resultezefzef', results);
      results.data.forEach((value: StrategyContent) => {
        if (value.id_position === 'header') {
          console.log(value)
          this.contents.header = value;
        }
        if (value.id_position === 'whatWeDo') {
          this.contents.title = value;
        }
        if (value.id_position === 'traditional-portfolio-managers') {
          this.contents.article1 = value;
        }
        if (value.id_position === 'heart-of-strategy') {
          this.contents.article2 = value;
        }
        if (value.id_position === 'investment-universe') {
          this.contents.article3 = value;
        }
        if (value.id_position === 'management-tactics') {
          this.contents.article4 = value;
        }
        if (value.id_position === 'instrument-of-strategy') {
          this.contents.article5 = value;
        }
        if (value.id_position === 'money-risk-management') {
          this.contents.article6 = value;
        }
      });
    });
  }

  isArticles(): boolean {
    return !!(
      this.contents.article1 ||
      this.contents.article2 ||
      this.contents.article3 ||
      this.contents.article4 ||
      this.contents.article5 ||
      this.contents.article6
    );
  }
}
