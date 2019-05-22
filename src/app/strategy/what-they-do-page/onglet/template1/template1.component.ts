import {Component, Input} from '@angular/core';
import {StrategyContent} from '../../../share/services/query.service';

@Component({
  selector: 'li-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.scss']
})
export class Template1Component {

  @Input() articles: StrategyContent[];

  constructor() { }
}
