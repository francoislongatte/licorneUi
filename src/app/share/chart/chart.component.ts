import {Component, Input} from '@angular/core';
import {Schema} from '../../strategy/share/services/query.interface';

@Component({
  selector: 'li-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {

  @Input() options: Schema;

  constructor() {
  }

}
