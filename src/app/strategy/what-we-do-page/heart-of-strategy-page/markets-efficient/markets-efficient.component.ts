import {Component, Input, ViewEncapsulation} from '@angular/core';
import {ContentConfigsContent} from '../../../share/services/query.interface';

@Component({
  selector: '[li-markets-efficient]',
  templateUrl: './markets-efficient.component.html',
  styleUrls: ['./markets-efficient.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MarketsEfficientComponent {

  @Input() article: ContentConfigsContent;

  constructor() {}
}


