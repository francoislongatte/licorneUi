import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Data} from '../../../../share/services/daotranslate.service';

@Component({
  selector: '[li-markets-efficient]',
  templateUrl: './markets-efficient.component.html',
  styleUrls: ['./markets-efficient.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MarketsEfficientComponent {

  @Input() article: Data;

  constructor() {}
}


