import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#0B0E11] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-gray-500 text-sm">
          © 2024 SignalFlow Analytics. Trade responsibly.
        </div>
        <div className="flex gap-6">
          {['Privacy', 'Terms', 'API Docs', 'Status'].map((link) => (
            <a key={link} href="#" className="text-gray-500 hover:text-[#00F0FF] text-sm transition-colors">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
