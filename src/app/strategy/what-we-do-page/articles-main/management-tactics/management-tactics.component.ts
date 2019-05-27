import {Component, Input} from '@angular/core';
import {ContentConfigsContent} from '../../../share/services/query.interface';

@Component({
  selector: '[li-management-tactics]',
  templateUrl: './management-tactics.component.html',
  styleUrls: ['./management-tactics.component.scss']
})
export class ManagementTacticsComponent {

  @Input() article: ContentConfigsContent;

  constructor() { }

}
