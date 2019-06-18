import {Component, Input} from '@angular/core';
import {Data} from '../../../../share/services/daotranslate.service';

@Component({
  selector: '[li-instrument-of-strategy]',
  templateUrl: './instrument-of-strategy.component.html',
  styleUrls: ['./instrument-of-strategy.component.scss']
})
export class InstrumentOfStrategyComponent {

  @Input() article: Data;

  constructor() { }

}
