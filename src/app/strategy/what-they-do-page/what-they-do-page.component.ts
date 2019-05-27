import { Component, OnInit } from '@angular/core';
import {ContentConfigsContent, StrategyContent} from '../share/services/query.interface';
import {QueryGQL} from '../share/services/query.service';


@Component({
  selector: 'li-what-they-do-page',
  templateUrl: './what-they-do-page.component.html',
  styleUrls: ['./what-they-do-page.component.scss']
})
export class WhatTheyDoPageComponent implements OnInit {

  contents: {
    header?: StrategyContent[];
    title?: StrategyContent[];
    onglet?: StrategyContent[];
  } = {};

  constructor(
    private queryGraphql: QueryGQL
  ) { }

  ngOnInit() {
    this.queryGraphql.$whatTheyDoPage
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
      });
  }

}
