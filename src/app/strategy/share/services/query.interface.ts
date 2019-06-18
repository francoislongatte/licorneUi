
export interface StrategyResponse {
  data: ContentConfigsContent;
}

export interface StrategiesContent {
  strategies: StrategyContent[];
}

export interface ContentConfigsContent {
  position: string;
  type: string;
  id_text: string;
  contents: StrategyContent[];
}

export interface Schema {
  color: string;
  colorBox: string;
  chart: string;
  content: lineChart;
}

export interface lineChart {
  timeline: boolean;
  colorScheme: { domain: string[] };
  showLegend: boolean;
  data: any[];
  gradient: boolean;
  showYAxisLabel: boolean;
  showXAxisLabel: boolean;
  yAxisLabel: string;
  xAxisLabel: string;
  showXAxis: boolean;
  showYAxis: boolean;
}

export interface StrategyContent {
  Title_en: string;
  Title_fr: string;
  Subtitle_en: string;
  Subtitle_fr: string;
  Text_en: string;
  Text_fr: string;
  Schema_en: Schema;
  Schema_fr: Schema;
  List_fr: JSON;
  List_en: JSON;
  image: { url: string; };
  id_position: string;
  order: number;
  onglet: number;
}
