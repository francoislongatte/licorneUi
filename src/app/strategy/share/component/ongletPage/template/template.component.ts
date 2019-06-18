import {Component, Input, OnInit} from '@angular/core';
import {StrategyContent} from '../../../services/query.interface';
import {Data} from '../../../../../share/services/daotranslate.service';

@Component({
  selector: 'li-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {

  @Input()
  set articlesData(value: Data[]) {
    if (value) {
      this.articles = value.filter(article => article.order !== null);
      this.articleCenter = value.filter(article => article.order === null);
    }
  }

  private _articles: Data[];
  private _articleCenter: Data[];

  constructor() {
  }

  set articles(value: Data[]) {
    this._articles = value;
  }

  get articles(): Data[] {
    return this._articles;
  }

  get articleCenter(): Data[] {
    return this._articleCenter;
  }

  set articleCenter(value: Data[]) {
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
