import React, { useState, useEffect } from 'react';
import { slidesList } from '../data';
import { Lightbulb, ArrowUpRight, Sparkles, Sliders, Presentation, CheckCircle2 } from 'lucide-react';

interface PresentationHeaderProps {
  onOpenNotes: () => void;
}

export function PresentationHeader({ onOpenNotes }: PresentationHeaderProps) {
  const [activeSection, setActiveSection] = useState<string>('capa');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = slidesList.map(s => s.slug);
      const scrollPos = window.scrollY + 250;

      for (const slug of sections) {
        const el = document.getElementById(slug);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(slug);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (slug: string) => {
    const el = document.getElementById(slug);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#09090B]/95 backdrop-blur-md shadow-2xl py-3 border-b border-emerald-500/20' 
        : 'bg-[#09090B] py-4 border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Presentation Tag */}
        <div 
          onClick={() => scrollToSection('capa')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-purple-600 flex items-center justify-center font-black text-xl text-white shadow-lg border border-emerald-400/30 group-hover:scale-105 transition-transform">
            G
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                GREEN AÇAÍ
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30">
                LAGO IGAPÓ • LONDRINA
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 font-medium hidden md:block">
              Alinhamento de Balizamento Comercial • V4 Company
            </p>
          </div>
        </div>

        {/* Vertical Section Anchors */}
        <nav className="hidden xl:flex items-center gap-1 bg-zinc-900/80 p-1.5 rounded-full border border-zinc-800 backdrop-blur-sm text-xs font-semibold text-zinc-400">
          {slidesList.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollToSection(s.slug)}
              className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                activeSection === s.slug
                  ? 'bg-emerald-500 text-zinc-950 font-bold shadow-md shadow-emerald-500/20'
                  : 'hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              {s.tag}
            </button>
          ))}
        </nav>

        {/* Action Buttons: Pitch Notes & Quick Jump */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenNotes}
            className="flex items-center gap-1.5 bg-purple-500/15 hover:bg-purple-500/25 text-purple-300 border border-purple-500/30 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-sm"
            title="Dicas de Pitch para Reunião com Taka e Viviane"
          >
            <Lightbulb className="w-3.5 h-3.5 text-purple-400" />
            <span className="hidden sm:inline">Dicas de Pitch</span>
          </button>

          <button
            onClick={() => scrollToSection('proximos-passos')}
            className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-bold px-4 py-1.5 rounded-xl transition-all shadow-md shadow-emerald-500/20 flex items-center gap-1 cursor-pointer"
          >
            <span>Próximos Passos</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </header>
  );
}
