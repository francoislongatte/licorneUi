import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Data} from '../../../share/services/daotranslate.service';

@Component({
  selector: 'li-what-they-do',
  templateUrl: './what-they-do.component.html',
  styleUrls: ['./what-they-do.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WhatTheyDoComponent {
  private _strategyWhatTheyDoContent: Data;

  @Input()
  set strategyWhatTheyDoContent(value: Data) {
    if (value) {
      this._strategyWhatTheyDoContent = value;
    }
  }

  constructor() {
  }

  get text() {
    if (this._strategyWhatTheyDoContent) {
      return this._strategyWhatTheyDoContent.Text;
    }
  }

  get title() {
    if (this._strategyWhatTheyDoContent) {
      return this._strategyWhatTheyDoContent.Title;
    }
  }

}
