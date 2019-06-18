import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Data} from '../../../../share/services/daotranslate.service';

@Component({
  selector: '[li-influence-human-behavior]',
  templateUrl: './influence-human-behavior.component.html',
  styleUrls: ['./influence-human-behavior.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InfluenceHumanBehaviorComponent {

  @Input() article: Data;

  constructor() { }

}
