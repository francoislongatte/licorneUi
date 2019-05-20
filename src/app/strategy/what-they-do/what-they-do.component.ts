import {Component, Input, ViewEncapsulation} from '@angular/core';
import {StrategyContent} from '../../share/services/query.service';

@Component({
  selector: 'li-what-they-do',
  templateUrl: './what-they-do.component.html',
  styleUrls: ['./what-they-do.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WhatTheyDoComponent{
  private _strategyWhatTheyDoContent: StrategyContent;

  @Input()
  set strategyWhatTheyDoContent(value: StrategyContent) {
    if (value) {
      this._strategyWhatTheyDoContent = value;
    }
  }

  constructor() {
  }

  get text() {
    if (this._strategyWhatTheyDoContent && this._strategyWhatTheyDoContent.Text_en) {
      return this._strategyWhatTheyDoContent.Text_en;
    }
  }

  get title() {
    if (this._strategyWhatTheyDoContent && this._strategyWhatTheyDoContent.Title_en) {
      return this._strategyWhatTheyDoContent.Title_en;
    }
  }

}
