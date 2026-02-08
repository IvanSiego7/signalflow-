import React from 'react';
import { Shield, Zap, Lock, CheckCircle2 } from 'lucide-react';
import WaveformChart from './WaveformChart';
import SentimentGauge from './SentimentGauge';
import LiveFeed from './LiveFeed';
import { MOCK_METRICS } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center px-4 md:px-6 z-10 overflow-hidden">
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Conversion Form & Value Prop */}
        <div className="lg:col-span-5 flex flex-col pt-4">
            {/* Live Status Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/20 w-fit mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]"></span>
                </span>
                <span className="text-[#00F0FF] text-xs font-mono font-bold tracking-wide uppercase">System Operational • v2.5</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold font-heading text-white leading-[1.1] mb-6">
                Trade the <span className="text-[#00F0FF]">Signal</span>. <br/>
                Ignore the Noise.
            </h1>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-md">
                Get institutional-grade sentiment analysis, fine-grained emotion detection, and real-time social signals delivered in milliseconds.
            </p>

            {/* Conversion Form */}
            <div className="w-full max-w-md bg-white/5 p-2 rounded-2xl border border-white/10 mb-6 backdrop-blur-sm relative group hover:border-white/20 transition-colors">
              <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email..." 
                  className="flex-1 bg-transparent border-none text-white placeholder-gray-500 focus:ring-0 px-4 py-3 outline-none"
                />
                <button type="submit" className="px-6 py-3 rounded-xl bg-[#00F0FF] text-[#0B0E11] font-bold font-heading whitespace-nowrap hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all">
                  Start Free Analysis
                </button>
              </form>
            </div>
            
            {/* Trust Signals */}
            <div className="flex flex-col gap-3">
                <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">Trusted Security & Compliance</p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400">
                    <span className="flex items-center gap-2 hover:text-[#00F0FF] transition-colors cursor-default">
                        <Shield size={14} className="text-[#00FFA7]" /> SOC2 Compliant
                    </span>
                    <span className="flex items-center gap-2 hover:text-[#00F0FF] transition-colors cursor-default">
                        <Lock size={14} className="text-[#00FFA7]" /> 256-bit Encryption
                    </span>
                    <span className="flex items-center gap-2 hover:text-[#00F0FF] transition-colors cursor-default">
                        <Zap size={14} className="text-[#00FFA7]" /> &lt; 20ms Latency
                    </span>
                </div>
            </div>
        </div>

        {/* Right Column: Dashboard Preview (Visual) */}
        <div className="lg:col-span-7 relative">
            {/* "Window" Frame for the dashboard look */}
            <div className="relative rounded-xl bg-[#15191E] border border-white/10 shadow-2xl shadow-[#00F0FF]/10 overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                {/* Window Controls */}
                <div className="h-10 bg-[#0B0E11] border-b border-white/5 flex items-center px-4 justify-between">
                  <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                  </div>
                  <div className="text-xs font-mono text-gray-600">dashboard.signalflow.ai</div>
                  <div className="w-10"></div>
                </div>
                
                {/* Content */}
                <div className="p-4 grid gap-4 bg-[#0B0E11]/50">
                    {/* Top Chart Area */}
                    <div className="h-[280px] rounded-lg border border-white/5 bg-[#0B0E11]/50 overflow-hidden relative">
                        <div className="absolute top-4 left-4 z-10">
                          <h4 className="text-white text-sm font-bold flex items-center gap-2">
                             BTC/USD Sentiment <span className="text-[#00FFA7] text-[10px] bg-[#00FFA7]/10 px-1.5 py-0.5 rounded">LIVE</span>
                          </h4>
                        </div>
                        <WaveformChart />
                    </div>
                    
                    {/* Bottom Split */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="h-[200px]">
                           <LiveFeed /> 
                        </div>
                        <div className="grid grid-cols-2 gap-2 h-[200px]">
                             {MOCK_METRICS.slice(0, 2).map((metric) => (
                                <SentimentGauge key={metric.id} score={metric.score} label={metric.symbol} />
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Glass reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-20 pointer-events-none" />
            </div>
            
            {/* Glow behind */}
            <div className="absolute -inset-10 bg-[#00F0FF]/20 blur-[100px] -z-10 rounded-full opacity-40 pointer-events-none" />
            
            {/* Floating Badge */}
            <div className="absolute -right-4 top-10 bg-[#00F0FF] text-black p-3 rounded-lg shadow-lg shadow-[#00F0FF]/40 hidden md:flex items-center gap-3 animate-bounce duration-[3000ms]">
                <CheckCircle2 size={20} />
                <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase">Signal Accuracy</span>
                    <span className="text-sm font-mono font-bold">98.4%</span>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
