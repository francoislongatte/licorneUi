import {Component, Input} from '@angular/core';
import {ContentConfigsContent} from '../../../share/services/query.interface';

@Component({
  selector: '[li-investment-universe]',
  templateUrl: './investment-universe.component.html',
  styleUrls: ['./investment-universe.component.scss']
})
export class InvestmentUniverseComponent {

  @Input() article: ContentConfigsContent;

  constructor() { }
}
