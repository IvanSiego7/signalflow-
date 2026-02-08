import React from 'react';
import { ArrowRight, BarChart2, Zap, Shield } from 'lucide-react';
import WaveformChart from './WaveformChart';
import SentimentGauge from './SentimentGauge';
import LiveFeed from './LiveFeed';
import { MOCK_METRICS } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen pt-24 pb-12 flex flex-col justify-center px-4 md:px-6 z-10">
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-5 flex flex-col justify-center pt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/20 w-fit mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]"></span>
                </span>
                <span className="text-[#00F0FF] text-xs font-mono font-bold tracking-wide uppercase">AI Engine v2.5 Online</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-white leading-tight mb-6">
                Trade the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#00FFA7]">Signal</span>.
                <br />
                Ignore the <span className="text-gray-600">Noise</span>.
            </h1>

            <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
                High-speed, AI-driven sentiment analysis from global news and social feeds, delivered in milliseconds. Fine-grained emotion detection to spot trends before they happen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="group relative px-8 py-4 rounded-xl bg-[#00F0FF] text-[#0B0E11] font-bold font-heading text-lg overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(0,240,255,0.4)]">
                    <span className="relative z-10 flex items-center gap-2">
                        Start Analyzing <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
                <button className="px-8 py-4 rounded-xl border border-white/10 hover:border-white/30 text-white font-medium transition-all backdrop-blur-sm bg-white/5">
                    View Live Demo
                </button>
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                {[
                    { icon: Zap, label: "Latency", value: "< 20ms" },
                    { icon: BarChart2, label: "Accuracy", value: "94.2%" },
                    { icon: Shield, label: "Coverage", value: "24/7 Global" }
                ].map((f, i) => (
                    <div key={i} className="flex flex-col">
                        <div className="flex items-center gap-2 text-gray-500 mb-1">
                            <f.icon size={14} />
                            <span className="text-xs uppercase font-bold tracking-wider">{f.label}</span>
                        </div>
                        <span className="text-xl font-mono text-white font-bold">{f.value}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Right Column: Dynamic Visualizations */}
        <div className="lg:col-span-7 flex flex-col gap-6 relative">
            
            {/* Top Row: Waveform Card */}
            <div className="relative rounded-3xl bg-[#0B0E11]/80 backdrop-blur-xl border border-white/10 p-1 shadow-2xl shadow-black/50 overflow-hidden group">
                {/* Header for Chart */}
                <div className="absolute top-6 left-6 z-20 flex justify-between items-start w-[calc(100%-48px)]">
                    <div>
                        <h3 className="text-white font-heading font-bold text-xl">Market Sentiment Pulse</h3>
                        <p className="text-gray-400 text-xs mt-1">Global aggregation • Weighted Average</p>
                    </div>
                    <div className="flex gap-2">
                        {['1H', '4H', '1D', '1W'].map((t, i) => (
                            <button key={t} className={`text-xs px-3 py-1 rounded-lg font-mono transition-colors ${i === 0 ? 'bg-[#00F0FF]/20 text-[#00F0FF]' : 'text-gray-500 hover:text-white'}`}>
                                {t}
                            </button>
                        ))}
                    </div>
                </div>

                {/* The Chart */}
                <div className="pt-16 pb-4 px-4 bg-gradient-to-b from-transparent to-[#00F0FF]/5">
                     <WaveformChart />
                </div>
                
                {/* Glow behind chart */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00F0FF]/5 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Bottom Row: Feed & Gauges */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[320px]">
                
                {/* Feed */}
                <LiveFeed />

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 p-5 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-between">
                        <div>
                            <div className="text-gray-400 text-xs uppercase tracking-wider font-bold mb-1">Global Fear & Greed</div>
                            <div className="text-3xl font-mono text-[#00FFA7] font-bold">Greed <span className="text-lg opacity-70">74</span></div>
                        </div>
                        <div className="h-2 w-24 bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-[#FF4D4D] via-[#00F0FF] to-[#00FFA7] w-[74%]" />
                        </div>
                    </div>

                    {MOCK_METRICS.slice(0, 2).map((metric) => (
                        <SentimentGauge key={metric.id} score={metric.score} label={metric.symbol} />
                    ))}
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
