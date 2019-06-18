import {Component, Input} from '@angular/core';
import {Data} from '../../../../share/services/daotranslate.service';

@Component({
  selector: '[li-investment-universe]',
  templateUrl: './investment-universe.component.html',
  styleUrls: ['./investment-universe.component.scss']
})
export class InvestmentUniverseComponent {

  @Input() article: Data;

  constructor() { }
}
