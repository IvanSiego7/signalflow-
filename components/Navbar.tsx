import React from 'react';
import { Activity } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[#0B0E11]/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#00F0FF]/10 flex items-center justify-center border border-[#00F0FF]/30">
            <Activity className="text-[#00F0FF]" size={20} />
          </div>
          <span className="text-xl font-bold font-heading tracking-tight text-white">
            Signal<span className="text-[#00F0FF]">Flow</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Features', 'Market Data', 'Pricing', 'API'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00F0FF] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center text-sm font-medium text-gray-400 hover:text-white">
                Log In
            </button>
            <button className="px-5 py-2 rounded-lg bg-[#00F0FF] hover:bg-[#00d0df] text-black font-bold text-sm transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                Get Started
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
