import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Data} from '../../../../share/services/daotranslate.service';

@Component({
  selector: '[li-heart-of-strategy]',
  templateUrl: './heart-of-strategy.component.html',
  styleUrls: ['./heart-of-strategy.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeartOfStrategyComponent {

  @Input() article: Data;

  constructor() { }

}
