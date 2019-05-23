
export interface StrategyResponse {
  contentconfigs: ContentConfigsContent[];
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
  order: number;
  onglet: number;
  Schema_en: Schema;
  image: { url: string; };
}
