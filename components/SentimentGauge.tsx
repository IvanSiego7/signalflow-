import React from 'react';
import { COLORS } from '../constants';

interface SentimentGaugeProps {
  score: number; // 0 to 1
  label: string;
}

const SentimentGauge: React.FC<SentimentGaugeProps> = ({ score, label }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score * circumference);
  
  const getColor = (s: number) => {
    if (s > 0.6) return COLORS.bullish;
    if (s < 0.4) return COLORS.bearish;
    return COLORS.primary;
  };

  const color = getColor(score);

  return (
    <div className="relative flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-colors group">
      <div className="relative w-24 h-24">
        {/* Background Circle */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="currentColor"
            strokeWidth="6"
            fill="transparent"
            className="text-white/10"
          />
          {/* Progress Circle */}
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke={color}
            strokeWidth="6"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out shadow-[0_0_10px_currentColor]"
            style={{ filter: `drop-shadow(0 0 4px ${color})` }}
          />
        </svg>
        
        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-mono text-xl font-bold tracking-tighter text-white">
            {(score * 100).toFixed(0)}
          </span>
        </div>
      </div>
      
      <span className="mt-3 text-xs uppercase tracking-widest text-gray-400 font-medium">
        {label}
      </span>
      
      {/* Glow effect on hover */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
        style={{ background: `radial-gradient(circle at center, ${color}, transparent 70%)` }}
      />
    </div>
  );
};

export default SentimentGauge;
