import {Component, Input, OnInit} from '@angular/core';
import {StrategyContent} from '../../share/services/query.service';
import {FormBuilder, FormGroup} from '@angular/forms';

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
    console.log('onglet', value);
    if (value) {
      this._strategyWhatTheyDoContent = value;
    }
  }

  constructor() {}

  get articles(): StrategyContent[] {
    if (this._strategyWhatTheyDoContent && this._strategyWhatTheyDoContent.length > 0) {
      return this._strategyWhatTheyDoContent.filter( content => content.order === this.ongletActive + 1);
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
