import {Component, Input} from '@angular/core';
import {StrategyContent} from '../../../share/services/query.service';

@Component({
  selector: 'li-template-default',
  templateUrl: './template-default.component.html',
  styleUrls: ['./template-default.component.scss']
})
export class TemplateDefaultComponent {

  @Input() articles: StrategyContent[];

  constructor() { }

}
