import {Component, Input} from '@angular/core';
import {StrategyContent} from '../../../share/services/query.service';

@Component({
  selector: 'li-template2',
  templateUrl: './template2.component.html',
  styleUrls: ['./template2.component.scss']
})
export class Template2Component {

  @Input() articles: StrategyContent[];

  constructor() { }

}
