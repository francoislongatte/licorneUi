import {Injectable} from '@angular/core';
import gql from 'graphql-tag';
import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ApolloQueryResult} from 'apollo-client';
import {GET_STRATEGY_PAGE, GET_WHAT_THEY_DO_PAGE} from './query.constante';

export interface StrategyResponse {
  contentconfigs: ContentConfigsContent[];
}

export interface ContentConfigsContent {
  position: string;
  type: string;
  id_text: string;
  contents: StrategyContent[];
}

export interface StrategyContent {
  Title_en: string;
  Title_fr: string;
  Subtitle_en: string;
  Subtitle_fr: string;
  Text_en: string;
  Text_fr: string;
  order: number;
  onglet: number;
}


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

}
