import React from 'react';
import { MOCK_FEED, COLORS } from '../constants';
import { Zap, TrendingUp, TrendingDown, ArrowRight } from 'lucide-react';

const LiveFeed: React.FC = () => {
  return (
    <div className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 h-full overflow-hidden">
        <div className="flex items-center justify-between mb-6">
            <h3 className="flex items-center gap-2 text-lg font-bold font-heading text-white">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                LIVE SIGNAL FEED
            </h3>
            <span className="text-xs font-mono text-[#00F0FF] bg-[#00F0FF]/10 px-2 py-1 rounded">
                updates: 12ms
            </span>
        </div>

        <div className="space-y-4">
            {MOCK_FEED.map((item) => (
                <div 
                    key={item.id} 
                    className="group p-4 rounded-xl bg-[#15191E]/80 border-l-2 hover:bg-[#1A1F26] transition-all duration-300 cursor-pointer"
                    style={{ borderColor: item.sentiment > 0.6 ? COLORS.bullish : item.sentiment < 0.4 ? COLORS.bearish : COLORS.primary }}
                >
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-[10px] uppercase tracking-wider text-gray-500 font-mono">
                            {item.source}
                        </span>
                        <span className="text-[10px] font-mono text-gray-400">
                            {item.time}
                        </span>
                    </div>
                    
                    <h4 className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors mb-3 leading-snug">
                        {item.headline}
                    </h4>
                    
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            {item.sentiment > 0.5 ? (
                                <TrendingUp size={14} color={COLORS.bullish} />
                            ) : (
                                <TrendingDown size={14} color={COLORS.bearish} />
                            )}
                            <span 
                                className="font-mono text-xs font-bold"
                                style={{ color: item.sentiment > 0.6 ? COLORS.bullish : item.sentiment < 0.4 ? COLORS.bearish : COLORS.primary }}
                            >
                                SCORE: {item.sentiment.toFixed(2)}
                            </span>
                        </div>
                        <ArrowRight size={14} className="text-gray-600 group-hover:text-[#00F0FF] transform group-hover:translate-x-1 transition-all" />
                    </div>
                </div>
            ))}
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0B0E11] to-transparent pointer-events-none" />
    </div>
  );
};

export default LiveFeed;
