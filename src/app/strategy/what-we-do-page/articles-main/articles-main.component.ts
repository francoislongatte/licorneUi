import { Component, OnInit } from '@angular/core';
import {ContentConfigsContent, StrategyContent} from '../../share/services/query.interface';
import {QueryGQL} from '../../share/services/query.service';

@Component({
  selector: 'li-articles-main',
  templateUrl: './articles-main.component.html',
  styleUrls: ['./articles-main.component.scss']
})
export class ArticlesMainComponent implements OnInit {

  contents: {
    header?: StrategyContent[];
    title?: StrategyContent[];
    articles?: ContentConfigsContent[];
  } = {};

  constructor(private queryGraphql: QueryGQL) { }

  ngOnInit() {
    this.queryGraphql.$whatWeDoPage
      .subscribe((results: ContentConfigsContent[]) => {
        const header = results
          .find(result => result.id_text === 'header');
        const title = results
          .find(result => result.id_text === 'whatWeDo');
        this.contents.articles = results
          .filter(result => result.position === 'strategyWhatTheyDoPage-article');
        this.contents.header = header ? header.contents : null;
        this.contents.title = title ? title.contents : null;
      });
  }

  getArticle(name: string) {
    return this.contents.articles.find(article => article.id_text === name);
  }

}
