import { Component, OnInit } from '@angular/core';
import {ContentConfigsContent, StrategyContent} from '../../share/services/query.interface';
import {QueryGQL} from '../../share/services/query.service';

@Component({
  selector: 'li-diversification-page',
  templateUrl: './diversification-page.component.html',
  styleUrls: ['./diversification-page.component.scss']
})
export class DiversificationPageComponent implements OnInit {

  contents: {
    header?: StrategyContent[];
    title?: StrategyContent[];
    articles?: ContentConfigsContent[];
  } = {};

  constructor(private queryGraphql: QueryGQL) { }

  ngOnInit() {
    this.queryGraphql.$DiversificationPage
      .subscribe((results: ContentConfigsContent[]) => {
        const header = results
          .find(result => result.id_text === 'header');
        const title = results
          .find(result => result.id_text === 'diversification');
        this.contents.articles = results
          .filter(result => result.position === 'strategyDiversification-article');
        this.contents.header = header ? header.contents : null;
        this.contents.title = title ? title.contents : null;
        console.log(this.contents.articles);
      });
  }

  getArticle(name: string) {
    return this.contents.articles.find(article => article.id_text === name);
  }

}
