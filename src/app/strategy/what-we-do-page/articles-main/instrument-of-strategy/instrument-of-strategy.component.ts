import {Component, Input} from '@angular/core';
import {ContentConfigsContent} from '../../../share/services/query.interface';

@Component({
  selector: '[li-instrument-of-strategy]',
  templateUrl: './instrument-of-strategy.component.html',
  styleUrls: ['./instrument-of-strategy.component.scss']
})
export class InstrumentOfStrategyComponent {

  @Input() article: ContentConfigsContent;

  constructor() { }

}
