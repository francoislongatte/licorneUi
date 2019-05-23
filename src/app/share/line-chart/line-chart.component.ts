import {Component, Input, OnInit} from '@angular/core';
import {Schema} from '../../strategy/share/services/query.interface';

@Component({
  selector: 'li-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  @Input()
  set data(data: Schema) {
    this.options = data;
  }

  options: Schema;

  constructor() {
  }

  ngOnInit() {
  }

}
