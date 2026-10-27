import React from 'react';
import { DollarSign, CheckCircle2, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

export function Slide6KommoCRM() {
  return (
    <div className="p-6 sm:p-10 md:p-12 bg-zinc-900 text-white rounded-3xl relative overflow-hidden border border-emerald-500/20 shadow-2xl">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -mr-20 -mt-20"></div>

      {/* Header */}
      <div className="relative z-10 mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full mb-3">
          <DollarSign className="w-3.5 h-3.5" />
          <span>ESTRATÉGIA DE MÍDIA • NOVO CRIATIVO VALIDADO</span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-2">
          Criativos Novos com Preço Estampado
        </h2>
        <p className="text-sm sm:text-base text-zinc-300 max-w-3xl leading-relaxed">
          Clareza imediata de valor e apelo visual do copo de açaí para qualificar o clique antes da entrada no cardápio digital.
        </p>
      </div>

      {/* Main Creative Showcase Card */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-950/80 p-6 sm:p-10 rounded-3xl border border-zinc-800">
        
        {/* Left Column: Strategic Rationale */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30 inline-block">
              Alinhamento de Anúncio
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Anúncio Direto com Valor Explicito & Desejo Imediato
            </h3>
          </div>

          <p className="text-sm text-zinc-300 leading-relaxed">
            O consumidor de delivery decide com base em dois fatores principais: <strong>impulso visual</strong> e <strong>clareza de custo</strong>. Criativos sem preço estampavam dúvidas e geravam cliques de curiosos que abandonavam o carrinho. A nova linha traz o copo com os acompanhamentos e o valor visível (R$ 22,90), garantindo que todo clique seja de um lead pré-qualificado e pronto para comprar.
          </p>

          <div className="space-y-3 pt-2 text-xs">
            <div className="flex items-center gap-2.5 text-zinc-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span><strong>Preço Visível:</strong> Filtra o clique e reduz o custo por pedido realizado.</span>
            </div>
            <div className="flex items-center gap-2.5 text-zinc-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span><strong>Apetite Appeal Real:</strong> Foto em alta resolução com camadas de acompanhamentos.</span>
            </div>
            <div className="flex items-center gap-2.5 text-zinc-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span><strong>Chamada Direta:</strong> Link apontando direto para a seleção do copo no cardápio digital.</span>
            </div>
          </div>

          <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-xs text-zinc-300 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>
              <strong>Status de Veiculação:</strong> Criativo aprovado, pronto para subir nas campanhas da Manu assim que os ajustes de cardápio forem finalizados pelo Kaiky.
            </span>
          </div>
        </div>

        {/* Right Column: Full Vertical Creative Display */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl bg-zinc-900 max-w-xs sm:max-w-sm w-full group transition-all duration-300 hover:border-emerald-400/60">
            <img 
              src="https://i.imgur.com/Bne2KuZ.jpeg" 
              alt="Criativo com preço estampado Green Açaí R$ 22,90"
              className="w-full h-auto object-contain rounded-2xl shadow-inner"
            />
          </div>
        </div>

      </div>

    </div>
  );
}
