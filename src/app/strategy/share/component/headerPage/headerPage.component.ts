import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {StrategyContent} from '../../services/query.interface';
import {Data} from '../../../../share/services/daotranslate.service';

@Component({
  selector: 'li-header-page',
  templateUrl: './headerPage.component.html',
  styleUrls: ['./headerPage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderPageComponent {
  private _strategyHeaderContent: Data;

  @Input()
  set strategyHeaderContent(value: Data) {
    if (value) {
      this._strategyHeaderContent = value;
    }
  }

  constructor() {
  }

  get text() {
    if (this._strategyHeaderContent) {
      return this._strategyHeaderContent.Text;
    }
  }

  get title() {
    if (this._strategyHeaderContent) {
      return this._strategyHeaderContent.Title;
    }
  }

  get subtitle() {
    if (this._strategyHeaderContent) {
      return this._strategyHeaderContent.Subtitle;
    }
  }

}
