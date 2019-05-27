import {Component, Input, ViewEncapsulation} from '@angular/core';
import {ContentConfigsContent} from '../../../share/services/query.interface';

@Component({
  selector: '[li-trends-universal-timeless-phenomenon]',
  templateUrl: './trends-universal-timeless-phenomenon.component.html',
  styleUrls: ['./trends-universal-timeless-phenomenon.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TrendsUniversalTimelessPhenomenonComponent {

  @Input() article: ContentConfigsContent;

  constructor() {
  }

}

