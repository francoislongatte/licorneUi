import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StrategyContent} from '../share/services/query.interface';
import {Data} from '../../share/services/daotranslate.service';

@Component({
  selector: 'li-strategy-main',
  templateUrl: './strategy-main.component.html'
})
export class StrategyMainComponent implements OnInit {
  contents: {
    header?: StrategyContent;
    whatTheyDo?: StrategyContent;
    whatWeDo?: StrategyContent;
  } = {};

  constructor(
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe( (results: { data: Data[] }) => {
      results.data.forEach((value: StrategyContent) => {
        if (value.id_position === 'header') {
          this.contents.header = value;
        }
        if (value.id_position === 'whatTheyDo') {
          this.contents.whatTheyDo = value;
        }
        if (value.id_position === 'whatWeDo') {
          this.contents.whatWeDo = value;
        }
      });
    });
  }
}
