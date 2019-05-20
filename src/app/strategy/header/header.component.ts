import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {StrategyContent} from '../../share/services/query.service';

@Component({
  selector: 'li-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  private _strategyHeaderContent: StrategyContent;

  @Input()
  set strategyHeaderContent(value: StrategyContent) {
    if (value) {
      this._strategyHeaderContent = value;
    }
  }

  constructor() {
  }

  get text() {
    if (this._strategyHeaderContent && this._strategyHeaderContent.Text_en) {
      return this._strategyHeaderContent.Text_en;
    }
  }

  get title() {
    if (this._strategyHeaderContent && this._strategyHeaderContent.Title_en) {
      return this._strategyHeaderContent.Title_en;
    }
  }

}
