import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowRight, CheckCircle2, ChevronRight, Github, Linkedin, Mail, Network } from 'lucide-react';
import { Button } from './components/Button';
import { SectionHeading } from './components/SectionHeading';
import { NAV_LINKS, PROJECTS, SERVICES, TECH_STACK } from './constants';
import { Service, Project } from './types';
import { ParticleBackground } from './components/ParticleBackground';
import { HeroDiagram } from './components/HeroDiagram';
import { TechIcon } from './components/TechIcons';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100; // Account for fixed header height + padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans relative overflow-x-hidden">
      
      {/* Background Gradients - Updated to Cyan/Violet for Pipedatalytics */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-violet-900/10 rounded-full blur-[100px]" />
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Logo Icon - "PD" Monogram feel */}
            <div className="w-9 h-9 bg-gradient-to-br from-cyan-500 to-violet-500 rounded-lg flex items-center justify-center text-slate-900 shadow-lg shadow-cyan-500/20">
              <span className="font-bold font-mono text-lg tracking-tighter">PD</span>
            </div>
            <span className="text-xl font-bold tracking-wider text-white">PIPEDATALYTICS</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleSmoothScroll(e, link.href.substring(1))}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button size="sm" onClick={(e) => handleSmoothScroll(e, 'contact')}>Book Technical Discovery</Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-4 shadow-2xl">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-slate-300 py-2 border-b border-slate-800"
                onClick={(e) => handleSmoothScroll(e, link.href.substring(1))}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full mt-4" onClick={(e) => handleSmoothScroll(e, 'contact')}>Book Discovery</Button>
          </div>
        )}
      </nav>

      {/* Hero Section - Redesigned with Split Layout */}
      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden min-h-[90vh] flex items-center">
        {/* Particle Background Layer */}
        <div className="absolute inset-0 z-0">
          <ParticleBackground />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
            
            {/* Left Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-800/50 text-cyan-400 text-xs font-mono mb-8 animate-fade-in-up backdrop-blur-sm mx-auto md:mx-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                SYSTEMS ONLINE // READY TO SCALE
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight glow-text drop-shadow-2xl">
                Modern Data Infrastructure. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Engineered for Scale.</span>
              </h1>
              
              <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
                We architect and deploy high-performance Data Platforms using <span className="text-slate-200 font-medium">Airflow, dbt, Kubernetes,</span> and <span className="text-slate-200 font-medium">Microsoft Fabric</span>. 
                Stop struggling with slow queries and broken pipelines.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <Button size="lg" onClick={(e) => handleSmoothScroll(e, 'portfolio')}>
                  View Architecture
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="secondary" size="lg" onClick={(e) => handleSmoothScroll(e, 'stack')}>
                  Our Tech Stack
                </Button>
              </div>
            </div>

            {/* Right Content: Architectural Diagram */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end perspective-1000">
               <HeroDiagram />
            </div>

          </div>
        </div>
      </section>

      {/* Trust Bar (Tech Stack) */}
      <section id="stack" className="py-14 border-y border-slate-800 bg-slate-900/50 backdrop-blur-sm z-10">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm font-mono text-slate-500 mb-10 uppercase tracking-widest">Technologies We Master</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 items-center">
            {TECH_STACK.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center gap-3 group cursor-default transition-all duration-300 hover:-translate-y-1">
                 {/* SVG Icon Container */}
                 <div className="text-slate-500 group-hover:text-cyan-400 transition-colors duration-300 drop-shadow-lg group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
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
          <SectionHeading 
            title="Capabilities" 
            subtitle="We don't just write SQL. We build resilient engines that turn raw data into executive assets."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="glass-card p-8 rounded-xl hover:bg-slate-800/80 transition-all duration-300 group border-t-2 border-transparent hover:border-cyan-500/50">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300 ring-1 ring-slate-700 group-hover:ring-cyan-500/50">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-slate-900 relative z-10">
        <div className="absolute inset-0 bg-slate-950/50 skew-y-3 transform origin-top-left -z-10 h-full w-full" />
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Technical Case Studies" 
            subtitle="Real world deployments. Zero fluff. Measurable ROI."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <div key={project.id} className="glass-card rounded-xl overflow-hidden flex flex-col group hover:shadow-2xl hover:shadow-cyan-900/20 transition-all duration-300">
                <div className="p-1 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 opacity-50"></div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono font-semibold text-violet-400 uppercase tracking-wider bg-violet-950/30 px-2 py-1 rounded border border-violet-900">
                      {project.industry || 'Enterprise'}
                    </span>
                    <ChevronRight className="text-slate-600 group-hover:text-cyan-400 transition-colors" size={20} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-100">{project.title}</h3>
                  
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

      {/* Footer / Contact CTA */}
      <footer id="contact" className="bg-slate-950 pt-20 pb-10 border-t border-slate-800 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-2">Ready to modernize?</h2>
              <p className="text-slate-400">Stop bleeding budget on broken pipelines.</p>
            </div>
            <div className="flex gap-4">
               <Button size="lg" className="w-full md:w-auto">
                 <Mail className="mr-2 h-4 w-4" />
                 Book Technical Discovery
               </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-12 border-t border-slate-800 pt-10 mb-10">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-violet-500 rounded flex items-center justify-center text-slate-900 shadow-md">
                   <span className="font-bold font-mono text-xs tracking-tighter">PD</span>
                </div>
                <span className="text-lg font-bold text-white tracking-wider">PIPEDATALYTICS</span>
              </div>
              <p className="text-slate-500 text-sm max-w-sm">
                Elite Data Engineering for scale-ups and enterprise. 
                We turn spaghetti code into orchestrated, observable, and scalable data platforms.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Connect</h4>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm flex items-center gap-2">
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm flex items-center gap-2">
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>

             <div>
              <h4 className="text-white font-bold mb-4">Locations</h4>
              <p className="text-slate-400 text-sm">San Francisco, CA</p>
              <p className="text-slate-400 text-sm">Austin, TX</p>
              <p className="text-slate-400 text-sm">Remote Worldwide</p>
            </div>
          </div>

          <div className="text-center text-slate-600 text-xs border-t border-slate-900 pt-8">
            &copy; {new Date().getFullYear()} Pipedatalytics. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;