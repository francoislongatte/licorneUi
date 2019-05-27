import {Component, Input, ViewEncapsulation} from '@angular/core';
import {ContentConfigsContent} from '../../../share/services/query.interface';

@Component({
  selector: '[li-influence-human-behavior]',
  templateUrl: './influence-human-behavior.component.html',
  styleUrls: ['./influence-human-behavior.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InfluenceHumanBehaviorComponent {

  @Input() article: ContentConfigsContent;

  constructor() { }

}
