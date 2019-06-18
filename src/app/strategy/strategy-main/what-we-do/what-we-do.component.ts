import {Component, Input, ViewEncapsulation} from '@angular/core';
import {StrategyContent} from '../../share/services/query.interface';
import {Data} from '../../../share/services/daotranslate.service';

@Component({
  selector: 'li-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WhatWeDoComponent {

  pieChart = {
    colorScheme: {
      domain: ['#6271D2']
    },
    result: [
      {
        name: 'Backtesting',
        series: [
          {
            value: 180,
            name: 'Mar'
          },
          {
            value: 260,
            name: 'May'
          },
          {
            value: 200,
            name: 'Jul'
          },
          {
            value: 40,
            name: 'Sep'
          },
          {
            value: 300,
            name: 'Nov'
          },
          {
            value: 240,
            name: 'Jan'
          }
        ]
      },
    ],
    xAxis: true,
    yAxis: true,
    showXAxisLabel: false,
    showYAxisLabel: false,
    xAxisLabel: 'test1',
    yAxisLabel: 'test2'
  };

  private _strategyWhatTheyDoContent: Data;

  @Input()
  set strategyWhatTheyDoContent(value: Data) {
    console.log(value);
    if (value) {
      this._strategyWhatTheyDoContent = value;
    }
  }

  constructor() {
  }

  get text() {
    if (this._strategyWhatTheyDoContent) {
      return this._strategyWhatTheyDoContent.Text;
    }
  }

  get title() {
    if (this._strategyWhatTheyDoContent) {
      return this._strategyWhatTheyDoContent.Title;
    }
  }

}
