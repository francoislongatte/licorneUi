import {Component, Input} from '@angular/core';
import {ContentConfigsContent} from '../../../share/services/query.interface';
import {Data} from '../../../../share/services/daotranslate.service';

@Component({
  selector: '[li-management-tactics]',
  templateUrl: './management-tactics.component.html',
  styleUrls: ['./management-tactics.component.scss']
})
export class ManagementTacticsComponent {

  @Input() article: Data;

  constructor() { }

}
