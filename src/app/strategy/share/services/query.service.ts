import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ApolloQueryResult} from 'apollo-client';
import {
  GET_DIVERSIFICATION_STRATEGY_PAGE,
  GET_STRATEGY_PAGE,
  GET_WHAT_THEY_DO_PAGE,
  GET_WHAT_WE_DO_HEART_OF_STRATEGY_PAGE,
  GET_WHAT_WE_DO_PAGE
} from './query.constante';
import {ContentConfigsContent, StrategyResponse} from './query.interface';


@Injectable({
  providedIn: 'root'
})

export class QueryGQL {
  constructor(private apollo: Apollo) {
  }

  request(queryRequest) {
    return this.apollo
      .watchQuery({query: queryRequest})
      .valueChanges
      .pipe(map((result: ApolloQueryResult<StrategyResponse>) => result.data.contentconfigs));
  }

  get $strategyPage(): Observable<ContentConfigsContent[]> {
    return this.request(GET_STRATEGY_PAGE);
  }

  get $whatTheyDoPage(): Observable<ContentConfigsContent[]> {
    return this.request(GET_WHAT_THEY_DO_PAGE);
  }

  get $whatWeDoPage(): Observable<ContentConfigsContent[]> {
    return this.request(GET_WHAT_WE_DO_PAGE);
  }

  get $heartOfStrategyPage(): Observable<ContentConfigsContent[]> {
    return this.request(GET_WHAT_WE_DO_HEART_OF_STRATEGY_PAGE);
  }

  get $DiversificationPage(): Observable<ContentConfigsContent[]> {
    return this.request(GET_DIVERSIFICATION_STRATEGY_PAGE);
  }

}
