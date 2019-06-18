import {Component, Input, OnInit} from '@angular/core';
import {StrategyContent} from '../../services/query.interface';
import {Data} from '../../../../share/services/daotranslate.service';

@Component({
  selector: 'li-onglet-page',
  templateUrl: './ongletPage.component.html',
  styleUrls: ['./ongletPage.component.scss']
})
export class OngletPageComponent {

  private ongletActive = 0;
  private _strategyWhatTheyDoContent: Data[];

  @Input()
  set strategyWhatTheyDoContent(value: Data[]) {
    if (value) {
      this._strategyWhatTheyDoContent = value;
      this._strategyWhatTheyDoContent.sort((itemA, itemB) => itemA.order - itemB.order);
    }
  }

  constructor() {
  }

  get articles(): Data[] {
    if (this._strategyWhatTheyDoContent && this._strategyWhatTheyDoContent.length > 0) {
      return this._strategyWhatTheyDoContent.filter(content => content.onglet === this.ongletActive + 1 && content.order !== 0);
    }
  }

  changeOnglet(value) {
    this.ongletActive = value;
  }

  get titleOnglets(): Data[] {
    if (this._strategyWhatTheyDoContent && this._strategyWhatTheyDoContent.length > 0) {
      return this._strategyWhatTheyDoContent.filter(content => content.order === 0);
    }
  }

}
