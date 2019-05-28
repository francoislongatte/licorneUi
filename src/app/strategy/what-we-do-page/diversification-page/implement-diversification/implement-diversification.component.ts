import {Component, Input} from '@angular/core';
import {ContentConfigsContent} from '../../../share/services/query.interface';

@Component({
  selector: '[li-implement-diversification]',
  templateUrl: './implement-diversification.component.html'
})
export class ImplementDiversificationComponent {

  @Input() article: ContentConfigsContent;

  constructor() { }

}
