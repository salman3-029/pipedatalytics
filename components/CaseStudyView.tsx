
import React, { useEffect } from 'react';
import { ArrowLeft, Database, Activity, Layout } from 'lucide-react';
import { Project } from '../types.ts';
import { Button } from './Button.tsx';
import { TechIcon } from './TechIcons.tsx';

interface CaseStudyViewProps {
  project: Project;
  onBack: () => void;
}

export const CaseStudyView: React.FC<CaseStudyViewProps> = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 pt-28 pb-20 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-cyan-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-violet-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Infrastructure Portfolio
        </button>

        <div className="mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-violet-950/30 border border-violet-800/50 text-violet-400 text-xs font-mono mb-4">
            {project.industry} // CASE_STUDY_{project.id.toUpperCase()}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            {project.title}
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            {project.result}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {project.metrics?.map((metric, i) => (
            <div key={i} className="glass-card p-8 rounded-2xl border-l-4 border-cyan-500">
              <div className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-2">{metric.label}</div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">
                {metric.value}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="glass-card aspect-video rounded-2xl flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" />
              <div className="relative z-10 flex flex-col items-center gap-4 text-center p-8">
                <Layout className="w-16 h-16 text-cyan-500 animate-pulse" />
                <h3 className="text-xl font-bold text-white">System Architecture Overview</h3>
                <p className="text-sm text-slate-400 max-w-sm">Interactive visualization of the {project.stack.join(' + ')} data pipeline.</p>
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Database className="text-cyan-500" /> The Challenge
              </h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                {project.challenge || "The client faced scalability bottlenecks and fragmented reporting cycles."}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Activity className="text-violet-500" /> The Solution
              </h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                {project.solution || "We implemented a code-first data stack with automated validation and CI/CD."}
              </p>
            </section>
          </div>

          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl sticky top-32">
              <h3 className="text-white font-bold mb-6 text-lg uppercase tracking-wider font-mono">Tech Stack</h3>
              <div className="space-y-4">
                {project.stack.map((tech) => (
                  <div key={tech} className="flex items-center gap-4 group">
                    <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 group-hover:border-cyan-500/50 transition-colors">
                      <TechIcon name={tech} className="w-6 h-6" />
                    </div>
                    <span className="text-slate-200 font-medium group-hover:text-cyan-400 transition-colors">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
