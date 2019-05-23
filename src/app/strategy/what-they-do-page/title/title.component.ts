import {Component, Input, OnInit} from '@angular/core';
import {StrategyContent} from '../../share/services/query.interface';


@Component({
  selector: 'li-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

  private _strategyWhatTheyDoContent: StrategyContent[];

  @Input()
  set strategyWhatTheyDoContent(value: StrategyContent[]) {
    if (value) {
      this._strategyWhatTheyDoContent = value;
    }
  }

  constructor() {}

  get title() {
    if (this._strategyWhatTheyDoContent && this._strategyWhatTheyDoContent.length > 0) {
      return this._strategyWhatTheyDoContent[0].Title_en;
    }
  }

}
