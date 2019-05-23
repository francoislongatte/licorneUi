import {Component, Input, OnInit} from '@angular/core';
import {StrategyContent} from '../../share/services/query.interface';

@Component({
  selector: 'li-onglet',
  templateUrl: './onglet.component.html',
  styleUrls: ['./onglet.component.scss']
})
export class OngletComponent {

  private ongletActive = 0;
  private _strategyWhatTheyDoContent: StrategyContent[];

  @Input()
  set strategyWhatTheyDoContent(value: StrategyContent[]) {
    if (value) {
      this._strategyWhatTheyDoContent = value;
      this._strategyWhatTheyDoContent.sort((itemA, itemB) => itemA.order - itemB.order);
    }
  }

  constructor() {
  }

  get articles(): StrategyContent[] {
    if (this._strategyWhatTheyDoContent && this._strategyWhatTheyDoContent.length > 0) {
      return this._strategyWhatTheyDoContent.filter(content => content.onglet === this.ongletActive + 1 && content.order !== 0);
    }
  }

  changeOnglet(value) {
    this.ongletActive = value;
  }

  get titleOnglets(): StrategyContent[] {
    if (this._strategyWhatTheyDoContent && this._strategyWhatTheyDoContent.length > 0) {
      return this._strategyWhatTheyDoContent.filter(content => content.order === 0);
    }
  }

}
