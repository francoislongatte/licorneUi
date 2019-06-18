import { Component, OnInit } from '@angular/core';
import {ContentConfigsContent, StrategyContent} from '../share/services/query.interface';
import {QueryGQL} from '../share/services/query.service';
import {Data} from '../../share/services/daotranslate.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'li-what-they-do-page',
  templateUrl: './what-they-do-page.component.html',
  styleUrls: ['./what-they-do-page.component.scss']
})
export class WhatTheyDoPageComponent implements OnInit {

  contents: {
    header?: StrategyContent;
    title?: StrategyContent;
    onglet?: StrategyContent[];
  } = {};

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe((results: { data: Data[] }) => {
      this.contents.onglet = [];
      results.data.forEach((value: StrategyContent) => {
        if (value.id_position === 'header') {
          this.contents.header = value;
        }
        if (value.id_position === 'whatWeDo') {
          this.contents.title = value;
        }
        if (value.id_position === 'onglet') {
          this.contents.onglet.push(value);
        }
      });
    });
    /*this.queryGraphql.$whatTheyDoPage
      .subscribe((results: ContentConfigsContent[]) => {
        const header = results
          .find(result => result.id_text === 'header');
        const title = results
          .find(result => result.id_text === 'whatTheyDo');
        const onglet = results
          .find(result => result.id_text === 'onglet');
        this.contents.header = header ? header.contents : null;
        this.contents.title = title ? title.contents : null;
        this.contents.onglet = onglet ? onglet.contents : null;
      });*/
  }

}
