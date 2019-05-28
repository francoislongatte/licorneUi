import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StrategyComponent} from './strategy.component';
import {StrategyRoutingModule} from './strategy-routing.module';
import {WhatTheyDoComponent} from './strategy-main/what-they-do/what-they-do.component';
import {HeaderPageComponent} from './share/component/headerPage/headerPage.component';
import {WhatWeDoComponent} from './strategy-main/what-we-do/what-we-do.component';
import {ShareModule} from '../share/share.module';
import {MarkdownModule} from 'ngx-markdown';
import {StrategyMainComponent} from './strategy-main/strategy-main.component';
import {QueryGQL} from './share/services/query.service';
import {WhatTheyDoPageComponent} from './what-they-do-page/what-they-do-page.component';
import {TitlePageComponent} from './share/component/titlePage/titlePage.component';
import {OngletPageComponent} from './share/component/ongletPage/ongletPage.component';
import {TemplateComponent} from './share/component/ongletPage/template/template.component';
import {WhatWeDoPageComponent} from './what-we-do-page/what-we-do-page.component';
import {ArticlesMainComponent} from './what-we-do-page/articles-main/articles-main.component';
import {MoneyRiskManagementComponent} from './what-we-do-page/articles-main/money-risk-management/money-risk-management.component';
import {HeartOfStrategyPageComponent} from './what-we-do-page/heart-of-strategy-page/heart-of-strategy-page.component';
import {InstrumentOfStrategyComponent} from './what-we-do-page/articles-main/instrument-of-strategy/instrument-of-strategy.component';
import {HeartOfStrategyComponent} from './what-we-do-page/articles-main/heart-of-strategy/heart-of-strategy.component';
import {ManagementTacticsComponent} from './what-we-do-page/articles-main/management-tactics/management-tactics.component';
import {InvestmentUniverseComponent} from './what-we-do-page/articles-main/investment-universe/investment-universe.component';
import {TraditionalPortfolioManagersComponent} from './what-we-do-page/articles-main/traditional-portfolio-managers/traditional-portfolio-managers.component';
import { MarketsEfficientComponent } from './what-we-do-page/heart-of-strategy-page/markets-efficient/markets-efficient.component';
import { InfluenceHumanBehaviorComponent } from './what-we-do-page/heart-of-strategy-page/influence-human-behavior/influence-human-behavior.component';
import { ReflectionBehavioralFlawsComponent } from './what-we-do-page/heart-of-strategy-page/reflection-behavioral-flaws/reflection-behavioral-flaws.component';
import { TrendsUniversalTimelessPhenomenonComponent } from './what-we-do-page/heart-of-strategy-page/trends-universal-timeless-phenomenon/trends-universal-timeless-phenomenon.component';
import { SquareGraphComponent } from './what-we-do-page/heart-of-strategy-page/square-graph/square-graph.component';
import { DiversificationPageComponent } from './what-we-do-page/diversification-page/diversification-page.component';
import { DiversificationMaximizesPerformanceComponent } from './what-we-do-page/diversification-page/diversification-maximizes-performance/diversification-maximizes-performance.component';
import { ImplementDiversificationComponent } from './what-we-do-page/diversification-page/implement-diversification/implement-diversification.component';
import { DiversificationReducesRiskComponent } from './what-we-do-page/diversification-page/diversification-reduces-risk/diversification-reduces-risk.component';
import { InstrumentOfStrategyPageComponent } from './what-we-do-page/instrument-of-strategy-page/instrument-of-strategy-page.component';
import { MoneyRiskManagementPageComponent } from './what-we-do-page/money-risk-management-page/money-risk-management-page.component';

@NgModule({
  declarations: [
    StrategyComponent,
    WhatTheyDoComponent,
    HeaderPageComponent,
    WhatWeDoComponent,
    StrategyMainComponent,
    WhatTheyDoPageComponent,
    TitlePageComponent,
    OngletPageComponent,
    TemplateComponent,
    WhatWeDoPageComponent,
    TraditionalPortfolioManagersComponent,
    HeartOfStrategyComponent,
    InvestmentUniverseComponent,
    ManagementTacticsComponent,
    InstrumentOfStrategyComponent,
    MoneyRiskManagementComponent,
    ArticlesMainComponent,
    HeartOfStrategyPageComponent,
    MarketsEfficientComponent,
    InfluenceHumanBehaviorComponent,
    ReflectionBehavioralFlawsComponent,
    TrendsUniversalTimelessPhenomenonComponent,
    SquareGraphComponent,
    DiversificationPageComponent,
    DiversificationMaximizesPerformanceComponent,
    ImplementDiversificationComponent,
    DiversificationReducesRiskComponent,
    InstrumentOfStrategyPageComponent,
    MoneyRiskManagementPageComponent
  ],
  imports: [
    CommonModule,
    StrategyRoutingModule,
    ShareModule,
    MarkdownModule.forChild()
  ],
  providers: [
    QueryGQL
  ],
  exports: [
    HeaderPageComponent,
    TitlePageComponent
  ]
})
export class StrategyModule {
}
