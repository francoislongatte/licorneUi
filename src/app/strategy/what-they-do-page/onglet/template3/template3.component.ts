import {Component, Input} from '@angular/core';
import {StrategyContent} from '../../../share/services/query.service';

@Component({
  selector: 'li-template3',
  templateUrl: './template3.component.html',
  styleUrls: ['./template3.component.scss']
})
export class Template3Component {

  @Input() articles: StrategyContent[];

  constructor() { }
}
