export interface SentimentMetric {
  id: string;
  asset: string;
  symbol: string;
  score: number; // 0 to 1
  volume: string;
  trend: 'bullish' | 'bearish' | 'neutral';
  change24h: number;
}

export interface FeedItem {
  id: string;
  source: string;
  headline: string;
  sentiment: number;
  time: string;
  impact: 'high' | 'medium' | 'low';
}

export interface ChartPoint {
  time: string;
  sentiment: number;
  price: number;
  volatility: number;
}
