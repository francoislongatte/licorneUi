import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Data} from '../../../../share/services/daotranslate.service';

@Component({
  selector: '[li-reflection-behavioral-flaws]',
  templateUrl: './reflection-behavioral-flaws.component.html',
  styleUrls: ['./reflection-behavioral-flaws.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReflectionBehavioralFlawsComponent {

  @Input() article: Data;

  constructor() { }

}
