import React from 'react';

const GridBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Deep Background */}
      <div className="absolute inset-0 bg-[#0B0E11]" />
      
      {/* Radial Glow at top center */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#00F0FF] opacity-[0.08] blur-[120px] rounded-full" />

      {/* Perspective Grid Floor */}
      <div 
        className="absolute bottom-0 w-[200vw] h-[60vh] left-[-50vw] origin-bottom"
        style={{
          transform: 'perspective(1000px) rotateX(60deg) translateY(100px)',
          backgroundSize: '60px 60px',
          backgroundImage: `
            linear-gradient(to right, rgba(0, 240, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 240, 255, 0.1) 1px, transparent 1px)
          `,
          maskImage: 'linear-gradient(to top, black 40%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 40%, transparent 100%)'
        }}
      />
      
      {/* Scanline Effect Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[1] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />
    </div>
  );
};

export default GridBackground;
