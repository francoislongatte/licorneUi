import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'li-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WhatWeDoComponent implements OnInit {

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

  constructor() {
  }

  ngOnInit() {


  }

}
