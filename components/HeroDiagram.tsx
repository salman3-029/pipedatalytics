import React from 'react';

export const HeroDiagram: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg h-64 md:h-80 mx-auto select-none perspective-1000">
      {/* Ambient Glow - kept non-interactive */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex items-center justify-between h-full relative z-10">
        
        {/* Left Zone: Chaos (Unstructured Data) */}
        <div className="w-1/3 h-full relative group cursor-crosshair">
            <div className="absolute top-0 left-0 w-full text-center text-[10px] font-mono text-slate-500 uppercase tracking-widest opacity-0 md:opacity-50 transition-opacity group-hover:text-cyan-400">Ingest</div>
            
            {/* Animated Scattered Particles */}
            {[...Array(6)].map((_, i) => (
                <div 
                    key={`dot-${i}`}
                    className="absolute rounded-full bg-slate-600 animate-pulse shadow-[0_0_5px_rgba(71,85,105,0.5)] transition-colors duration-300 group-hover:bg-cyan-400 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.6)]"
                    style={{
                        width: Math.random() * 6 + 4 + 'px',
                        height: Math.random() * 6 + 4 + 'px',
                        top: Math.random() * 60 + 20 + '%',
                        left: Math.random() * 60 + 10 + '%',
                        animationDelay: Math.random() * 2 + 's',
                        animationDuration: Math.random() * 2 + 2 + 's',
                    }}
                />
            ))}
            {/* Animated Shapes */}
            {[...Array(3)].map((_, i) => (
                <div 
                    key={`sq-${i}`}
                    className="absolute border border-slate-600/50 bg-slate-800/30 backdrop-blur-sm animate-bounce transition-colors duration-300 group-hover:border-cyan-500/50 group-hover:bg-cyan-900/30"
                    style={{
                        width: '12px',
                        height: '12px',
                        top: Math.random() * 50 + 25 + '%',
                        left: Math.random() * 50 + 20 + '%',
                        animationDuration: Math.random() * 3 + 3 + 's',
                    }}
                />
            ))}
        </div>

        {/* Middle Zone: The Pipeline (Funnel) */}
        <div className="w-1/3 flex flex-col items-center justify-center relative group">
             {/* Flow Line */}
             <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent group-hover:via-cyan-400 transition-all duration-500"></div>
             
             {/* Data Packets Moving */}
             <div className="absolute w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_cyan] animate-[ping_2s_linear_infinite]" />
             <div className="absolute w-1 h-1 bg-white rounded-full mix-blend-overlay" />
             
             {/* Funnel SVG */}
             <div className="relative z-10 p-3 rounded-full bg-slate-900 border border-slate-700 shadow-xl shadow-cyan-900/20 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] group-hover:border-cyan-500/50 group-hover:scale-110">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-500 transform rotate-[-90deg]">
                   <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>
             </div>
        </div>

        {/* Right Zone: Order (Structured Warehouse) */}
        <div className="w-1/3 flex flex-col items-center justify-center relative">
            <div className="absolute top-0 left-0 w-full text-center text-[10px] font-mono text-cyan-500 uppercase tracking-widest opacity-0 md:opacity-100 transition-opacity">Value</div>
            
             {/* Isometric-ish Grid */}
             <div className="grid grid-cols-2 gap-2 p-3 bg-slate-800/40 rounded-xl border border-cyan-500/30 backdrop-blur-md shadow-2xl transform rotate-y-12 rotate-z-2 hover:rotate-y-0 hover:rotate-z-0 transition-all duration-500 ease-out cursor-pointer hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:border-violet-500/50 hover:bg-slate-800/60">
                {[...Array(4)].map((_, i) => (
                    <div 
                        key={i} 
                        className="w-10 h-10 rounded bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border border-cyan-500/30 relative overflow-hidden group/cell"
                    >
                        <div className="absolute inset-0 bg-cyan-400/20 opacity-0 group-hover/cell:opacity-100 transition-opacity duration-300"></div>
                    </div>
                ))}
             </div>
             
             {/* Connecting Lines */}
             <div className="absolute -bottom-8 flex gap-2">
                <div className="w-1 h-4 bg-gradient-to-b from-cyan-500/50 to-transparent rounded-full"></div>
                <div className="w-1 h-6 bg-gradient-to-b from-violet-500/50 to-transparent rounded-full"></div>
             </div>
        </div>

      </div>
    </div>
  );
};