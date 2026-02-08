import { ChartPoint, FeedItem, SentimentMetric } from './types';

export const COLORS = {
  primary: '#00F0FF', // Cyber Cyan
  bullish: '#00FFA7', // Mint Green
  bearish: '#FF4D4D', // Soft Red
  background: '#0B0E11', // Rich Charcoal
  text: '#F0F2F5',    // Off-white
  surface: '#15191E',
};

export const MOCK_METRICS: SentimentMetric[] = [
  { id: '1', asset: 'Bitcoin', symbol: 'BTC', score: 0.85, volume: '$42B', trend: 'bullish', change24h: 4.2 },
  { id: '2', asset: 'Ethereum', symbol: 'ETH', score: 0.62, volume: '$18B', trend: 'bullish', change24h: 1.8 },
  { id: '3', asset: 'Solana', symbol: 'SOL', score: 0.92, volume: '$5B', trend: 'bullish', change24h: 8.5 },
  { id: '4', asset: 'Cardano', symbol: 'ADA', score: 0.45, volume: '$800M', trend: 'neutral', change24h: -0.5 },
  { id: '5', asset: 'XRP', symbol: 'XRP', score: 0.25, volume: '$1.2B', trend: 'bearish', change24h: -3.2 },
];

export const MOCK_FEED: FeedItem[] = [
  { id: '1', source: 'Bloomberg Crypto', headline: 'Institutional inflow hits record highs in Q3', sentiment: 0.9, time: '2m ago', impact: 'high' },
  { id: '2', source: 'CoinDesk', headline: 'Regulatory talks stall in EU parliament', sentiment: 0.3, time: '15m ago', impact: 'medium' },
  { id: '3', source: 'Whale Alert', headline: '5,000 BTC transferred to unknown wallet', sentiment: 0.5, time: '32m ago', impact: 'low' },
  { id: '4', source: 'Social Sentiment AI', headline: 'Retail mentions of "Altseason" up 400%', sentiment: 0.88, time: '45m ago', impact: 'high' },
];

export const MOCK_CHART_DATA: ChartPoint[] = Array.from({ length: 50 }, (_, i) => ({
  time: `${i}m`,
  sentiment: 50 + Math.sin(i * 0.2) * 30 + Math.random() * 10,
  price: 40000 + i * 100 + Math.sin(i * 0.1) * 500,
  volatility: Math.random() * 100
}));
