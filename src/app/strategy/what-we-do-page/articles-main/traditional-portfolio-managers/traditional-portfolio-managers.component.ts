import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Data} from '../../../../share/services/daotranslate.service';

@Component({
  selector: '[li-traditional-portfolio-managers]',
  templateUrl: './traditional-portfolio-managers.component.html',
  styleUrls: ['./traditional-portfolio-managers.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TraditionalPortfolioManagersComponent {

  @Input() article: Data;

  constructor() { }

}
