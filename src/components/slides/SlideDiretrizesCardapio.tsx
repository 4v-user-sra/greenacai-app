import React from 'react';
import { 
  Sparkles, 
  Trash2, 
  Layers, 
  ArrowUpCircle, 
  Camera, 
  FileText, 
  CheckCircle2, 
  MessageSquare
} from 'lucide-react';
import { cardapioOptimizationGuidelines } from '../../data';

export function SlideDiretrizesCardapio() {
  const getIcon = (num: string) => {
    switch (num) {
      case '01': return <Trash2 className="w-5 h-5 text-red-400" />;
      case '02': return <Layers className="w-5 h-5 text-purple-400" />;
      case '03': return <ArrowUpCircle className="w-5 h-5 text-emerald-400" />;
      case '04': return <Camera className="w-5 h-5 text-amber-400" />;
      case '05': return <FileText className="w-5 h-5 text-blue-400" />;
      default: return <Sparkles className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <div className="p-6 sm:p-10 md:p-12 bg-zinc-900 text-white rounded-3xl relative overflow-hidden border border-emerald-500/20 shadow-2xl">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none -ml-20 -mb-20"></div>

      {/* Header */}
      <div className="relative z-10 mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold px-3 py-1 rounded-full mb-3">
          <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
          <span>DIRETRIZES OPERACIONAIS • ALINHAMENTO COM KAIKY, FELIPE & STAKEHOLDERS</span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-2">
          Otimização Operacional do Cardápio Digital
        </h2>
        <p className="text-sm sm:text-base text-zinc-300 max-w-3xl leading-relaxed">
          Tudo o que foi alinhado no grupo para transformar o cardápio da Saipos em uma máquina de conversão rápida no celular, sem atritos e sem paralisia de escolha.
        </p>
      </div>

      {/* Guidelines Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        {cardapioOptimizationGuidelines.map((item, idx) => (
          <div 
            key={idx}
            className="bg-zinc-950/80 p-6 rounded-2xl border border-zinc-800 hover:border-emerald-500/30 transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 font-mono">
                  PASSO {item.number}
                </span>
                <div className="p-2 bg-zinc-900 rounded-xl border border-zinc-800">
                  {getIcon(item.number)}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-0.5">
                  {item.tag}
                </span>
                <h3 className="text-base font-bold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 font-medium mt-0.5">
                  {item.subtitle}
                </p>
              </div>

              {/* Problem vs Solution */}
              <div className="space-y-2 pt-2 text-xs">
                <div className="bg-red-500/10 border border-red-500/20 p-2.5 rounded-xl text-zinc-300">
                  <span className="text-red-400 font-bold block text-[11px] mb-0.5">Como está hoje:</span>
                  <span className="text-[11px] leading-relaxed text-zinc-300">{item.problem}</span>
                </div>

                <div className="bg-emerald-500/10 border border-emerald-500/20 p-2.5 rounded-xl text-zinc-300">
                  <span className="text-emerald-400 font-bold block text-[11px] mb-0.5">Direcionamento Alinhado:</span>
                  <span className="text-[11px] leading-relaxed text-zinc-200">{item.solution}</span>
                </div>
              </div>
            </div>

            {/* Action item footer */}
            <div className="pt-3 border-t border-zinc-900 flex items-center gap-2 text-[11px] text-zinc-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{item.action}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
