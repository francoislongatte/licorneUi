import { Component, OnInit } from '@angular/core';
import {ContentConfigsContent, StrategyContent} from '../../share/services/query.interface';
import {QueryGQL} from '../../share/services/query.service';

@Component({
  selector: 'li-heart-of-strategy-page',
  templateUrl: './heart-of-strategy-page.component.html',
  styleUrls: ['./heart-of-strategy-page.component.scss']
})
export class HeartOfStrategyPageComponent implements OnInit {

  contents: {
    header?: ContentConfigsContent;
    title?: ContentConfigsContent;
    articles?: ContentConfigsContent[];
    graph?: ContentConfigsContent[];
  } = {};

  constructor(private queryGraphql: QueryGQL) { }

  ngOnInit() {
    this.queryGraphql.$heartOfStrategyPage
      .subscribe((results: ContentConfigsContent[]) => {
        const header = results
          .find(result => result.id_text === 'header');
        const title = results
          .find(result => result.id_text === 'heartOfStrategy');
        this.contents.articles = results
          .filter(result => result.position === 'strategyHeartOfStrategy-article');
        this.contents.graph = results
          .filter(result => result.position === 'strategyHeartOfStrategy-graph');
        this.contents.header = header ? header : null;
        this.contents.title = title ? title : null;
        console.log(this.contents.graph);
      });
  }

  getArticle(name: string) {
    return this.contents.articles.find(article => article.id_text === name);
  }

}
