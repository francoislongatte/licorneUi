import {Observable} from 'rxjs';
import {Resolve} from '@angular/router';
import {Injectable} from '@angular/core';

import {first} from 'rxjs/operators';
import {QueryGQL} from '../share/services/query.service';
import {DAOTranslateService, Data} from '../../share/services/daotranslate.service';

@Injectable()
export class WhatTheyDoPageResolve implements Resolve<any> {
  constructor(
    private queryGraphql: QueryGQL,
    private dao: DAOTranslateService
  ) {
  }

  resolve(): Observable<Data[]> | Promise<Data[]> {
    return new Promise((resolve, reject) => {
      this.queryGraphql
        .$whatTheyDoPage
        .pipe(first())
        .subscribe(value => {
          resolve(this.dao.dataStrategyFormatted(value.strategies));
        }, error => {
          reject('Error - GraphQl Server Request');
        });
    });
  }
}

