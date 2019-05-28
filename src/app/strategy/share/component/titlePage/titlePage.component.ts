import {Component, Input, ViewEncapsulation} from '@angular/core';
import {StrategyContent} from '../../services/query.interface';


@Component({
  selector: 'li-title-page',
  templateUrl: './titlePage.component.html',
  styleUrls: ['./titlePage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TitlePageComponent {

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

  get Texte() {
    if (this._strategyWhatTheyDoContent && this._strategyWhatTheyDoContent.length > 0) {
      return this._strategyWhatTheyDoContent[0].Text_en;
    }
  }

}
