import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Data} from '../../../../share/services/daotranslate.service';

@Component({
  selector: '[li-diversification-maximizes-performance]',
  templateUrl: './diversification-maximizes-performance.component.html',
  styleUrls: ['./diversification-maximizes-performance.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DiversificationMaximizesPerformanceComponent implements OnInit {

  @Input() article: Data;

  constructor() { }

  ngOnInit() {
  }

}
