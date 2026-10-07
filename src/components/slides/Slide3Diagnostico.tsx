import React, { useState } from 'react';
import { Calculator, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { slidesData } from '../../data';

export function Slide3Diagnostico() {
  const data = slidesData.slide2; // slide2 in slidesData has diagnostic & budget math
  
  // Interactive Simulator State
  const [selectedBudget, setSelectedBudget] = useState<number>(1000);
  const [ticketAvg, setTicketAvg] = useState<number>(55);
  const [estimatedCPA, setEstimatedCPA] = useState<number>(10);

  // Calculations
  const taxRate = 0.12; // 12% tax
  const netMedia = selectedBudget * (1 - taxRate);
  const estimatedOrders = Math.floor(netMedia / estimatedCPA);
  const projectedRevenue = estimatedOrders * ticketAvg;

  return (
    <div className="p-6 sm:p-10 md:p-12 bg-zinc-900 text-white rounded-3xl relative overflow-hidden border border-amber-500/20 shadow-2xl">
      
      {/* Ambience */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none"></div>

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
          {data.title}
        </h2>
        <p className="text-sm sm:text-base text-zinc-300 max-w-3xl leading-relaxed">
          {data.subtitle}
        </p>
      </div>

      {/* The Reality Grid: R$ 1.000 Initial Math vs Realistic Scale */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Card: Initial Expectation Breakdown */}
        <div className="lg:col-span-5 bg-zinc-950/80 p-6 rounded-3xl border border-zinc-800 space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" /> Diagnóstico de Venda Anterior
            </h3>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between items-center bg-zinc-900/60 p-3 rounded-xl border border-zinc-800">
              <span className="text-zinc-400">Verba Mensal Bruta (Meta Ads):</span>
              <strong className="text-white font-mono text-sm">R$ 1.000,00</strong>
            </div>

            <div className="flex justify-between items-center bg-zinc-900/60 p-3 rounded-xl border border-zinc-800">
              <span className="text-zinc-400">Imposto Retido na Fonte (12%):</span>
              <span className="text-red-400 font-mono">- R$ 120,00</span>
            </div>

            <div className="flex justify-between items-center bg-zinc-900/60 p-3 rounded-xl border border-emerald-500/30">
              <span className="text-zinc-300 font-medium">Verba Líquida em Anúncios:</span>
              <strong className="text-emerald-400 font-mono text-sm">R$ 880,00</strong>
            </div>

            <div className="p-3.5 bg-amber-500/10 border border-amber-500/30 rounded-xl space-y-1.5 text-zinc-300">
              <p className="font-bold text-amber-300 text-xs">
                O Desafio da Meta de R$ 10.000:
              </p>
              <p className="text-[11px] leading-relaxed text-zinc-300">
                Para faturar R$ 10.000 com Ticket Médio de R$ 50,00, a loja precisa de <strong>200 vendas/mês</strong>. Dividindo os R$ 880 por 200 pedidos, o Custo por Aquisição (CPA) precisaria ser de <strong>R$ 4,40 por pedido</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Right Card: Interactive Media Scaling Simulator */}
        <div className="lg:col-span-7 bg-zinc-950/80 p-6 sm:p-7 rounded-3xl border border-emerald-500/30 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-zinc-800">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Calculator className="w-5 h-5 text-emerald-400" />
                Simulador de Escala Gradual de Mídia
              </h3>
              <p className="text-xs text-zinc-400">
                Ajuste os valores para visualizar projeções realistas de pedidos e receita
              </p>
            </div>
          </div>

          {/* Preset Budget Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
              1. Selecione o Degrau de Investimento Mensal Bruto:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[1000, 2000, 3500, 5000].map((b) => (
                <button
                  key={b}
                  onClick={() => setSelectedBudget(b)}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                    selectedBudget === b
                      ? 'bg-emerald-500 text-zinc-950 border-emerald-400 shadow-md shadow-emerald-500/20 font-extrabold'
                      : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:bg-zinc-800'
                  }`}
                >
                  R$ {b.toLocaleString('pt-BR')}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Sliders for Ticket & CPA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-zinc-900/70 p-3.5 rounded-2xl border border-zinc-800 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-400">Ticket Médio Estimado:</span>
                <strong className="text-emerald-400 font-mono">R$ {ticketAvg},00</strong>
              </div>
              <input 
                type="range" 
                min="40" 
                max="80" 
                value={ticketAvg} 
                onChange={(e) => setTicketAvg(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
              <span className="text-[10px] text-zinc-500 block">Variando de R$ 40 (avulso) a R$ 80 (combos)</span>
            </div>

            <div className="bg-zinc-900/70 p-3.5 rounded-2xl border border-zinc-800 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-400">CPA Estimado p/ Pedido:</span>
                <strong className="text-amber-400 font-mono">R$ {estimatedCPA.toFixed(2).replace('.', ',')}</strong>
              </div>
              <input 
                type="range" 
                min="8" 
                max="12" 
                step="0.5"
                value={estimatedCPA} 
                onChange={(e) => setEstimatedCPA(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <span className="text-[10px] text-zinc-500 block">Com cardápio otimizado: R$ 8,00 a R$ 12,00</span>
            </div>
          </div>

          {/* Simulator Output Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 text-center">
              <span className="text-[11px] text-zinc-400 block mb-1">Verba Anúncios Líquida</span>
              <span className="text-base font-black text-white font-mono">
                R$ {netMedia.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </span>
            </div>

            <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 text-center">
              <span className="text-[11px] text-zinc-400 block mb-1">Pedidos Estimados</span>
              <span className="text-xl font-black text-emerald-400 font-mono">
                {estimatedOrders} vendas
              </span>
            </div>

            <div className="bg-emerald-500/10 p-4 rounded-2xl border border-emerald-500/30 text-center">
              <span className="text-[11px] text-emerald-300 block mb-1">Faturamento Estimado</span>
              <span className="text-xl font-black text-emerald-400 font-mono">
                R$ {projectedRevenue.toLocaleString('pt-BR')}
              </span>
            </div>
          </div>

          {/* Recommendation Note */}
          <div className="p-3 bg-zinc-900/90 rounded-2xl border border-zinc-800 text-xs text-zinc-300 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong>Estratégia Recomendada:</strong> Manter R$ 1.000 no 1º mês focando na otimização do cardápio e criativos. Após validar o CPA em R$ 8-12, escalar para R$ 2.500 no 2º mês.
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}
