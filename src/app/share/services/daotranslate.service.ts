import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Schema, StrategyContent} from '../../strategy/share/services/query.interface';

export interface Data {
  Title?: string;
  Subtitle?: string;
  Text?: string;
  List?: JSON;
  order?: number;
  onglet?: number;
  Schema?: Schema;
  image?: { url: string; };
  id_position?: string;
}


@Injectable({
  providedIn: 'root'
})
export class DAOTranslateService {

  constructor(private translate: TranslateService) {
  }

  dataStrategyFormatted(data: StrategyContent[]): Data[] {
    console.log('DATA', data);
    return data.map(strategyData => {

      return {
        Title: strategyData['Title_' + this.translate.currentLang],
        Subtitle: strategyData['Subtitle_' + this.translate.currentLang],
        Text: strategyData['Text_' + this.translate.currentLang],
        List: strategyData['List_' + this.translate.currentLang],
        Schema: strategyData['Schema_' + this.translate.currentLang],
        order: strategyData.order,
        onglet: strategyData.onglet,
        id_position: strategyData.id_position,
        image: strategyData.image
      };
    });
  }
}
