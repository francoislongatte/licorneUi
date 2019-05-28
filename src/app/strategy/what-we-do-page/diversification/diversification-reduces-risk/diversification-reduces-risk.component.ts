import {Component, Input} from '@angular/core';
import {ContentConfigsContent} from '../../../share/services/query.interface';

@Component({
  selector: '[li-diversification-reduces-risk]',
  templateUrl: './diversification-reduces-risk.component.html'
})
export class DiversificationReducesRiskComponent {

  @Input() article: ContentConfigsContent;

  constructor() { }

}
