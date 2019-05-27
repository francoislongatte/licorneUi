import {Component, Input, OnInit} from '@angular/core';
import {StrategyContent} from '../../../services/query.interface';

@Component({
  selector: 'li-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {

  @Input()
  set articlesData(value: StrategyContent[]) {
    if (value) {
      this.articles = value.filter(article => article.order !== null);
      this.articleCenter = value.filter(article => article.order === null);
    }
  }

  private _articles: StrategyContent[];
  private _articleCenter: StrategyContent[];

  constructor() {
  }

  set articles(value: StrategyContent[]) {
    this._articles = value;
  }

  get articles(): StrategyContent[] {
    return this._articles;
  }

  get articleCenter(): StrategyContent[] {
    return this._articleCenter;
  }

  set articleCenter(value: StrategyContent[]) {
    this._articleCenter = value;
  }

  get articlesLengthForTwoColumn(): number {
    if (this.articles && this.articles.length > 0) {
      if (this.articles.length % 2 === 0) {
        return this.articles.length / 2;
      } else {
        return (this.articles.length + 1) / 2;
      }
    }
  }
}
