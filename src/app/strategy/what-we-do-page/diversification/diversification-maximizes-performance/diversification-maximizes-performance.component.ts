import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ContentConfigsContent} from '../../../share/services/query.interface';

@Component({
  selector: '[li-diversification-maximizes-performance]',
  templateUrl: './diversification-maximizes-performance.component.html',
  styleUrls: ['./diversification-maximizes-performance.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DiversificationMaximizesPerformanceComponent implements OnInit {

  @Input() article: ContentConfigsContent;

  constructor() { }

  ngOnInit() {
  }

}
