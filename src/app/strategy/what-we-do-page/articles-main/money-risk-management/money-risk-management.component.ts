import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Data} from '../../../../share/services/daotranslate.service';

@Component({
  selector: '[li-money-risk-management]',
  templateUrl: './money-risk-management.component.html',
  styleUrls: ['./money-risk-management.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MoneyRiskManagementComponent {

  @Input() article: Data
  ;

  constructor() { }

}
