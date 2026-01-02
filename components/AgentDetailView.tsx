import React, { useEffect } from 'react';
import { ArrowLeft, Sparkles, ShieldCheck, Activity, Cpu, Link2, Rocket, Bot } from 'lucide-react';
import { Agent } from '../types.ts';
import { Button } from './Button.tsx';
import { TechIcon } from './TechIcons.tsx';

interface AgentDetailViewProps {
  agent: Agent;
  onBack: () => void;
}

export const AgentDetailView: React.FC<AgentDetailViewProps> = ({ agent, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 pt-28 pb-20 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-violet-900/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-5%] right-[-10%] w-[45%] h-[45%] bg-cyan-900/15 rounded-full blur-[140px]" />
        <div className="absolute inset-x-0 top-[30%] h-[40%] bg-gradient-to-b from-slate-900/40 via-slate-950/60 to-slate-950" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-200 transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to AI Agents
        </button>

        <div className="grid lg:grid-cols-2 gap-10 items-start mb-14">
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-950/40 border border-violet-800/60 text-violet-300 text-xs font-mono uppercase tracking-widest">
              {agent.tag}
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">{agent.title}</h1>
              {agent.subtitle && <p className="text-lg text-slate-400">{agent.subtitle}</p>}
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">{agent.longDescription || agent.description}</p>

            {agent.outcomes && (
              <div className="glass-card p-6 rounded-2xl border border-slate-800/70">
                <h3 className="text-white font-semibold flex items-center gap-2 mb-3">
                  <Sparkles className="text-cyan-400" size={18} /> Outcomes
                </h3>
                <ul className="space-y-2 text-slate-300">
                  {agent.outcomes.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="glass-card rounded-2xl overflow-hidden border border-slate-800/70">
              {agent.image ? (
                <div className="relative aspect-[4/3]">
                  <img
                    src={agent.image}
                    alt={agent.title}
                    className="w-full h-full object-cover opacity-80"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900/30 to-transparent" />
                </div>
              ) : (
                <div className="aspect-[4/3] bg-slate-900 flex items-center justify-center text-slate-500">Visual</div>
              )}
              <div className="p-6 border-t border-slate-800/70">
                <div className="grid sm:grid-cols-2 gap-4">
                  {agent.capabilities?.slice(0, 2).map((cap, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Cpu className="text-cyan-400 mt-1" size={18} />
                      <p className="text-sm text-slate-300 leading-relaxed">{cap}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {agent.queryExample && (
              <div className="glass-card p-6 rounded-2xl border border-slate-800/70 bg-gradient-to-br from-slate-950 to-slate-900">
                <h3 className="text-white font-semibold flex items-center gap-2 mb-3">
                  <Activity className="text-emerald-400" size={18} /> See it in action
                </h3>
                <p className="text-sm text-slate-400 mb-3">From question to SQL in milliseconds.</p>
                <div className="text-xs font-mono bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3 overflow-auto">
                  <div className="text-cyan-300">You ask: "{agent.queryExample.question}"</div>
                  <div className="text-emerald-300">NL2SQL generates:</div>
                  <pre className="text-left text-orange-200 whitespace-pre-wrap leading-relaxed">{agent.queryExample.sql}</pre>
                  {agent.queryExample.latency && (
                    <div className="text-emerald-400">{agent.queryExample.latency}</div>
                  )}
                </div>
              </div>
            )}

            {agent.impacts && (
              <div className="glass-card p-6 rounded-2xl border border-cyan-900/60 bg-slate-900/60">
                <h3 className="text-white font-semibold flex items-center gap-2 mb-4">
                  <Rocket className="text-cyan-400" size={18} /> Business impact
                </h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {agent.impacts.map((impact, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/70">
                      <div className="text-cyan-300 text-sm font-mono uppercase tracking-widest mb-1">{impact.label}</div>
                      <div className="text-2xl font-bold text-white mb-1">{impact.value}</div>
                      {impact.description && <p className="text-xs text-slate-400">{impact.description}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {agent.capabilities && (
              <div className="glass-card p-6 rounded-2xl border border-slate-800/70">
                <h3 className="text-white font-semibold flex items-center gap-2 mb-4">
                  <Activity className="text-violet-400" size={18} /> Key capabilities
                </h3>
                <div className="space-y-2 text-slate-300">
                  {agent.capabilities.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="w-2 h-2 rounded-full bg-violet-400 mt-2" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {(agent.safeguards || agent.stack) && (
              <div className="glass-card p-6 rounded-2xl border border-slate-800/70 space-y-4">
                {agent.safeguards && (
                  <div>
                    <h4 className="text-white font-semibold flex items-center gap-2 mb-3">
                      <ShieldCheck className="text-emerald-400" size={18} /> Safety & controls
                    </h4>
                    <ul className="space-y-2 text-slate-300">
                      {agent.safeguards.map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {agent.stack && (
                  <div>
                    <h4 className="text-white font-semibold flex items-center gap-2 mb-3">
                      <Link2 className="text-cyan-400" size={18} /> Stack highlights
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {agent.stack.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/80 border border-slate-800/70 text-slate-200 text-sm"
                        >
                          <TechIcon name={tech} className="w-4 h-4" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {agent.businessBenefits && (
              <div className="glass-card p-6 rounded-2xl border border-slate-800/70">
                <h3 className="text-white font-semibold flex items-center gap-2 mb-3">
                  <Bot className="text-cyan-300" size={18} /> Business benefits
                </h3>
                <ul className="space-y-2 text-slate-300">
                  {agent.businessBenefits.map((benefit, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="w-2 h-2 rounded-full bg-cyan-300 mt-2" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <Button size="lg" onClick={onBack}>
            Back to AI Agents
          </Button>
        </div>
      </div>
    </div>
  );
};
