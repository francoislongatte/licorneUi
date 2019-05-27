import {Component, Input} from '@angular/core';
import {Schema} from '../../strategy/share/services/query.interface';

@Component({
  selector: 'li-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {

  @Input() options: Schema;

  constructor() {
  }

}
