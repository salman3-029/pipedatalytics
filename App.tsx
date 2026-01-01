import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, CheckCircle2, ChevronRight, Cpu } from 'lucide-react';
import { Button } from './components/Button.tsx';
import { SectionHeading } from './components/SectionHeading.tsx';
import { NAV_LINKS, PROJECTS, SERVICES, TECH_STACK, AGENTS } from './constants.tsx';
import { Project } from './types.ts';
import { ParticleBackground } from './components/ParticleBackground.tsx';
import { HeroDiagram } from './components/HeroDiagram.tsx';
import { TechIcon } from './components/TechIcons.tsx';
import { CaseStudyView } from './components/CaseStudyView.tsx';
import { Logo } from './components/Logo.tsx';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'case-study'>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const handleOpenCaseStudy = (project: Project) => {
    setSelectedProject(project);
    setCurrentView('case-study');
    window.scrollTo(0, 0);
  };

  const CALENDLY_URL = "https://calendly.com/YOUR_USERNAME";

  if (currentView === 'case-study' && selectedProject) {
    return (
      <>
        <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 py-3">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <button className="hover:opacity-80 transition-opacity" onClick={() => setCurrentView('home')}>
              <Logo />
            </button>
            <Button size="sm" onClick={() => window.open(CALENDLY_URL, '_blank')}>Book Technical Discovery</Button>
          </div>
        </nav>
        <CaseStudyView project={selectedProject} onBack={() => setCurrentView('home')} />
        <footer className="bg-slate-950 py-10 border-t border-slate-900 text-center">
          <p className="text-slate-600 text-xs tracking-widest uppercase">&copy; {new Date().getFullYear()} PIPEDATALYTICS // SYSTEMS_STABLE</p>
        </footer>
      </>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-violet-900/10 rounded-full blur-[100px]" />
      </div>

      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <button className="hover:opacity-80 transition-opacity" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
            <Logo />
          </button>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} onClick={(e) => handleSmoothScroll(e, link.href.substring(1))} className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
                {link.name}
              </a>
            ))}
            <Button size="sm" onClick={() => window.open(CALENDLY_URL, '_blank')}>Book Technical Discovery</Button>
          </div>
          <button className="md:hidden text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <ParticleBackground />
        </div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-800/50 text-cyan-400 text-xs font-mono mb-8 backdrop-blur-sm mx-auto md:mx-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                PIPEDATALYTICS x MEKA AI // DEPLOYED
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight glow-text drop-shadow-2xl">
                The Backbone of Intelligence: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D1FF] to-[#4ADE80]">Sovereign AI Agents.</span>
              </h1>
              <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
                We architect high-performance Data Platforms and deploy autonomous AI Agents (Voice, Support, Legal). From raw data to 24/7 intelligent workers, we have you covered.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <Button size="lg" onClick={() => window.open(CALENDLY_URL, '_blank')}>
                  Book Technical Discovery
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="secondary" size="lg" onClick={(e) => handleSmoothScroll(e, 'agents')}>
                  View AI Agents
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
               <HeroDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Bar */}
      <section id="stack" className="py-14 border-y border-slate-800 bg-slate-900/50 backdrop-blur-sm z-10">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm font-mono text-slate-500 mb-10 uppercase tracking-widest">Core Tech Expertise</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 items-center">
            {TECH_STACK.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center gap-3 group">
                 <div className="text-slate-500 group-hover:text-cyan-400 transition-colors duration-300">
                    <TechIcon name={tech.name} className="w-10 h-10 md:w-12 md:h-12" />
                 </div>
                 <span className="text-xs font-semibold text-slate-600 group-hover:text-cyan-200 transition-colors">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <SectionHeading title="System Capabilities" subtitle="Engineering excellence at every layer of the data lifecycle." />
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="glass-card p-8 rounded-xl border-t-2 border-transparent hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section id="agents" className="py-24 bg-slate-900/80 border-y border-slate-800 relative z-10">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Intelligent AI Agents" 
            subtitle="Autonomous specialized droids that execute complex operations 24/7 without human oversight." 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AGENTS.map((agent, idx) => (
              <div 
                key={idx} 
                className="glass-card p-6 rounded-xl border border-transparent hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300 group flex flex-col"
              >
                <div className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center text-white mb-6 group-hover:bg-violet-900/30 group-hover:text-violet-400 transition-colors">
                  <agent.icon size={20} />
                </div>
                <div className="mb-2">
                  <span className="text-[10px] font-mono font-bold text-violet-400 uppercase tracking-tighter px-2 py-0.5 rounded bg-violet-950/40 border border-violet-800/50">
                    {agent.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-violet-200">{agent.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{agent.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-slate-900 relative z-10">
        <div className="container mx-auto px-6">
          <SectionHeading title="Technical Case Studies" subtitle="Scalable deployments delivering measurable engineering ROI." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <div key={project.id} onClick={() => handleOpenCaseStudy(project)} className="glass-card rounded-xl overflow-hidden flex flex-col group cursor-pointer hover:scale-[1.02] transition-all duration-300">
                {project.image && (
                  <div className="relative aspect-video overflow-hidden bg-slate-800">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono font-semibold text-violet-400 uppercase tracking-wider bg-violet-950/30 px-2 py-1 rounded border border-violet-900">
                      {project.industry}
                    </span>
                    <ChevronRight className="text-slate-600 group-hover:text-cyan-400 transition-transform group-hover:translate-x-1" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech) => (
                      <span key={tech} className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-1 rounded border border-slate-700/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-4 border-t border-slate-800">
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="text-emerald-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-300">{project.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-slate-950 pt-20 pb-10 border-t border-slate-800 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 text-center md:text-left">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Build for the future.</h2>
              <p className="text-slate-400">Scale your data engineering and AI capacity with Pipedatalytics.</p>
            </div>
            <Button size="lg" onClick={() => window.open(CALENDLY_URL, '_blank')}>Book Technical Discovery</Button>
          </div>
          <div className="grid md:grid-cols-4 gap-12 border-t border-slate-800 pt-10 mb-10">
            <div className="col-span-1 md:col-span-2">
              <Logo className="mb-6" />
              <p className="text-slate-500 text-sm max-w-sm">Elite engineering partners for mission-critical data systems and autonomous AI.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">LinkedIn</a>
                <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">GitHub</a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Headquarters</h4>
              <p className="text-slate-400 text-sm">San Francisco / Austin / Remote</p>
            </div>
          </div>
          <div className="text-center text-slate-600 text-xs pt-8">&copy; {new Date().getFullYear()} Pipedatalytics. SYSTEMS_STABLE.</div>
        </div>
      </footer>
    </div>
  );
};

export default App;
