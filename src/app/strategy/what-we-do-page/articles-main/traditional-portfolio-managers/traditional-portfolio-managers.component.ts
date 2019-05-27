import {Component, Input, ViewEncapsulation} from '@angular/core';
import {ContentConfigsContent} from '../../../share/services/query.interface';

@Component({
  selector: '[li-traditional-portfolio-managers]',
  templateUrl: './traditional-portfolio-managers.component.html',
  styleUrls: ['./traditional-portfolio-managers.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TraditionalPortfolioManagersComponent {

  @Input() article: ContentConfigsContent;

  constructor() { }

}
