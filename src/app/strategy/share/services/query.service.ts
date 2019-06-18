import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ApolloQueryResult} from 'apollo-client';
import * as query from './query.constante';
import {StrategiesContent} from './query.interface';
import {TranslateService} from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})

export class QueryGQL {

  language: string;

  constructor(
    private apollo: Apollo,
    private translate: TranslateService) {
  }

  request(queryRequest) {
    return this.apollo
      .watchQuery({query: queryRequest})
      .valueChanges
      .pipe(map((result: ApolloQueryResult<StrategiesContent>) => result.data));
  }

  get $strategyPage(): Observable<StrategiesContent> {
    return this.request(query['GET_STRATEGY_PAGE_' + this.translate.currentLang.toUpperCase()]);
  }

  get $whatTheyDoPage(): Observable<StrategiesContent> {
    return this.request(query['GET_WHAT_THEY_DO_PAGE_' + this.translate.currentLang.toUpperCase()]);
  }

  get $whatWeDoPage(): Observable<StrategiesContent> {
    return this.request(query['GET_WHAT_WE_DO_PAGE_' + this.translate.currentLang.toUpperCase()]);
  }

  get $heartOfStrategyPage(): Observable<StrategiesContent> {
    return this.request(query['GET_WHAT_WE_DO_HEART_OF_STRATEGY_PAGE_' + this.translate.currentLang.toUpperCase()]);
  }

  get $DiversificationPage(): Observable<StrategiesContent> {
    return this.request(query['GET_DIVERSIFICATION_STRATEGY_PAGE_' + this.translate.currentLang.toUpperCase()]);
  }

}
