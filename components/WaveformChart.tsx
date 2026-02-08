import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { COLORS, MOCK_CHART_DATA } from '../constants';

const WaveformChart: React.FC = () => {
  return (
    <div className="w-full h-[400px] relative z-10">
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#00F0FF]" />
      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#00F0FF]" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#00F0FF]" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#00F0FF]" />

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={MOCK_CHART_DATA} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorSentiment" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={COLORS.primary} stopOpacity={0.6}/>
              <stop offset="95%" stopColor={COLORS.primary} stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={COLORS.bullish} stopOpacity={0.2}/>
              <stop offset="95%" stopColor={COLORS.bullish} stopOpacity={0}/>
            </linearGradient>
          </defs>
          
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="rgba(255,255,255,0.05)" 
            vertical={false} 
          />
          
          <XAxis 
            dataKey="time" 
            tick={{ fill: '#6B7280', fontSize: 10, fontFamily: 'JetBrains Mono' }} 
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            tick={{ fill: '#6B7280', fontSize: 10, fontFamily: 'JetBrains Mono' }} 
            axisLine={false}
            tickLine={false}
          />
          
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(11, 14, 17, 0.9)', 
              borderColor: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '8px',
              boxShadow: '0 0 20px rgba(0, 240, 255, 0.2)'
            }}
            itemStyle={{ fontFamily: 'JetBrains Mono', fontSize: '12px' }}
            labelStyle={{ color: COLORS.text, marginBottom: '8px', fontFamily: 'Plus Jakarta Sans' }}
          />

          <Area 
            type="monotone" 
            dataKey="sentiment" 
            stroke={COLORS.primary} 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorSentiment)" 
            animationDuration={2000}
          />
          <Area 
            type="monotone" 
            dataKey="volatility" 
            stroke={COLORS.bullish} 
            strokeWidth={1}
            strokeDasharray="4 4"
            fill="url(#colorPrice)" 
            fillOpacity={0.3}
            animationDuration={2500}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WaveformChart;
