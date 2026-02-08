import React from 'react';
import { Check, Info } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$0',
      desc: 'Essential sentiment signals for casual traders.',
      features: ['Real-time Feed (1m delay)', 'Top 10 Assets', 'Basic Sentiment Score', 'Daily Email Alerts'],
      button: 'Start Free'
    },
    {
      name: 'Pro',
      price: '$49',
      popular: true,
      desc: 'Real-time precision for active day traders.',
      features: ['Zero-latency Feed (<20ms)', 'All 500+ Assets', 'Advanced Fear/Greed Models', 'API Access (1k calls/day)', 'Whale Wallet Tracking'],
      button: 'Start Pro Trial'
    },
    {
      name: 'Institutional',
      price: '$199',
      desc: 'Full data firehose for funds and algos.',
      features: ['Dedicated WebSocket', 'Unlimited API', 'Raw Sentiment Data', '24/7 Priority Support', 'Custom Signal Webhooks'],
      button: 'Contact Sales'
    }
  ];

  return (
    <div id="pricing" className="py-24 relative z-10 bg-[#0B0E11]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00F0FF]/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">Transparent Pricing</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Pay for the signal, not the noise. No hidden fees. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative p-8 rounded-3xl border transition-all duration-300 group ${
                plan.popular 
                  ? 'bg-[#15191E] border-[#00F0FF] shadow-[0_0_40px_rgba(0,240,255,0.1)] scale-105 z-10' 
                  : 'bg-[#0B0E11]/50 border-white/10 hover:border-white/20 hover:bg-white/5'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#00F0FF] text-black text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#00F0FF]/20">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-500">/mo</span>
              </div>
              <p className="text-gray-400 text-sm mb-8 h-10">{plan.desc}</p>
              
              <div className="w-full h-px bg-white/10 mb-8" />
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check size={16} className="text-[#00F0FF] mt-0.5 shrink-0" />
                    <span className="leading-tight">{feat}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold font-heading transition-all ${
                plan.popular 
                  ? 'bg-[#00F0FF] text-black hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:-translate-y-1' 
                  : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
              }`}>
                {plan.button}
              </button>
              
              {plan.popular && (
                 <div className="mt-4 text-center">
                    <span className="text-xs text-gray-500 flex items-center justify-center gap-1">
                        <Info size={12} /> 14-day money-back guarantee
                    </span>
                 </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
