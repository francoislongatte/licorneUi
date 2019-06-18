import {Component, Input, ViewEncapsulation} from '@angular/core';
import {StrategyContent} from '../../services/query.interface';
import {Data} from '../../../../share/services/daotranslate.service';


@Component({
  selector: 'li-title-page',
  templateUrl: './titlePage.component.html',
  styleUrls: ['./titlePage.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TitlePageComponent {

  private _strategyWhatTheyDoContent: Data;

  @Input()
  set strategyWhatTheyDoContent(value: Data) {
    if (value) {
      this._strategyWhatTheyDoContent = value;
    }
  }

  constructor() {}

  get title() {
    if (this._strategyWhatTheyDoContent ) {
      return this._strategyWhatTheyDoContent.Title;
    }
  }

  get Texte() {
    if (this._strategyWhatTheyDoContent) {
      return this._strategyWhatTheyDoContent.Text;
    }
  }

}
