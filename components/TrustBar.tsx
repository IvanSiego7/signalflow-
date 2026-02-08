import React from 'react';

const TrustBar: React.FC = () => {
  return (
    <div className="border-y border-white/5 bg-[#0B0E11]/50 backdrop-blur-sm py-10 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-mono text-gray-500 mb-8 uppercase tracking-widest">Trusted by 10,000+ Quant Traders & Funds</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-500 hover:opacity-100">
           {['BINANCE', 'COINBASE', 'KRAKEN', 'GEMINI', 'BYBIT'].map((name) => (
             <span key={name} className="text-xl md:text-2xl font-bold font-heading text-white cursor-default select-none">
               {name}
             </span>
           ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
