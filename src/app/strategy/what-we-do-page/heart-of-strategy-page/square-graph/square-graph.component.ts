import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ContentConfigsContent} from '../../../share/services/query.interface';

@Component({
  selector: '[li-square-graph]',
  templateUrl: './square-graph.component.html',
  styleUrls: ['./square-graph.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SquareGraphComponent implements OnInit {

  @Input() article: ContentConfigsContent;

  constructor() {
  }

  ngOnInit() {
    console.log(this.article);
  }

}
