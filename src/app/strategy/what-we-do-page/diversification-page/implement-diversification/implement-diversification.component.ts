import {Component, Input} from '@angular/core';
import {ContentConfigsContent} from '../../../share/services/query.interface';
import {Data} from '../../../../share/services/daotranslate.service';

@Component({
  selector: '[li-implement-diversification]',
  templateUrl: './implement-diversification.component.html'
})
export class ImplementDiversificationComponent {

  @Input() article: Data;

  constructor() { }

}
