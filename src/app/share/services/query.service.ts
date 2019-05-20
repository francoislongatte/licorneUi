import {Injectable} from '@angular/core';
import gql from 'graphql-tag';
import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ApolloQueryResult} from 'apollo-client';

export interface StrategyResponse {
  contents: StrategyContent[];
}

export interface StrategyContent {
  Title_en: string;
  Title_fr: string;
  Text_en: string;
  Text_fr: string;
  contentconfig: {
    position
  };
}

export const GET_STRATEGY = gql`{
    contents(where : { contentconfig: { page : strategy, position: strategyHeaderArticle } }) {
      Title_en
      Text_en
      contentconfig {
        position
      }
    }
  }`;

@Injectable({
  providedIn: 'root'
})
export class QueryGQL {
  constructor(private apollo: Apollo) {
  }

  get $strategyContents(): Observable<StrategyContent[]> {
    return this.apollo
      .watchQuery({query: GET_STRATEGY})
      .valueChanges
      .pipe(map((result: ApolloQueryResult<StrategyResponse>) => result.data.contents));
  }

}
