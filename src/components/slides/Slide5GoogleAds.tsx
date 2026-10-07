import React, { useState } from 'react';
import { 
  TrendingUp, 
  BarChart3, 
  Layers, 
  CheckCircle2, 
  DollarSign,
  PackageCheck
} from 'lucide-react';
import { slidesData, cardapioSalesData } from '../../data';

export function Slide5GoogleAds() {
  const data = slidesData.slide4;
  const [activeTab, setActiveTab] = useState<'arquitetura' | 'dados-saipos'>('arquitetura');
  const [categoryFilter, setCategoryFilter] = useState<string>('todos');

  const filteredRawItems = cardapioSalesData.rawTopItems.filter(item => {
    if (categoryFilter === 'todos') return true;
    return item.category === categoryFilter;
  });

  return (
    <div className="p-6 sm:p-10 md:p-12 bg-zinc-900 text-white rounded-3xl relative overflow-hidden border border-purple-500/20 shadow-2xl">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
          {data.title}
        </h2>
        <p className="text-sm sm:text-base text-zinc-300 max-w-3xl leading-relaxed">
          {data.subtitle}
        </p>
      </div>

      {/* KPI Summary Banner from Sales Report */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-zinc-950/90 p-4 sm:p-5 rounded-2xl border border-zinc-800 flex items-center gap-3.5">
          <div className="p-3 rounded-xl bg-purple-500/15 text-purple-400 border border-purple-500/30">
            <PackageCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-zinc-400 block font-medium">Volume Total de Itens</span>
            <strong className="text-xl sm:text-2xl font-black text-white font-mono">
              {cardapioSalesData.totalVolume.toLocaleString('pt-BR')} itens
            </strong>
          </div>
        </div>

        <div className="bg-zinc-950/90 p-4 sm:p-5 rounded-2xl border border-zinc-800 flex items-center gap-3.5">
          <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            <DollarSign className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-zinc-400 block font-medium">Faturamento Analisado</span>
            <strong className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">
              R$ {cardapioSalesData.totalRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </strong>
          </div>
        </div>

        <div className="bg-zinc-950/90 p-4 sm:p-5 rounded-2xl border border-zinc-800 flex items-center gap-3.5">
          <div className="p-3 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-zinc-400 block font-medium">Concentração de Vendas</span>
            <strong className="text-xl sm:text-2xl font-black text-amber-400">
              80%+ em 6 Campeões
            </strong>
          </div>
        </div>
      </div>

      {/* Interactive Tabs: Nova Arquitetura vs Dados Saipos */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-1.5 bg-zinc-950 p-1.5 rounded-2xl border border-zinc-800 text-xs font-bold shadow-inner">
          <button
            onClick={() => setActiveTab('arquitetura')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'arquitetura'
                ? 'bg-purple-600 text-white shadow-md font-extrabold'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>✨ Nova Estrutura Enxuta (Recomendada)</span>
          </button>

          <button
            onClick={() => setActiveTab('dados-saipos')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'dados-saipos'
                ? 'bg-purple-600 text-white shadow-md font-extrabold'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>📊 Relatório Real de Saída (Saipos)</span>
          </button>
        </div>

        {activeTab === 'dados-saipos' && (
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-zinc-400 font-medium hidden sm:inline">Filtrar:</span>
            {['todos', 'acai', 'pastel', 'casadinho', 'combo'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer capitalize ${
                  categoryFilter === cat
                    ? 'bg-emerald-500 text-zinc-950 font-extrabold'
                    : 'bg-zinc-800 text-zinc-400 hover:text-white'
                }`}
              >
                {cat === 'acai' ? 'Açaí' : cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Tab 1: Nova Arquitetura Enxuta */}
      {activeTab === 'arquitetura' && (
        <div className="mb-8 animate-in fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cardapioSalesData.consolidatedArchitecture.map((item, idx) => (
              <div
                key={idx}
                className="bg-zinc-950/80 p-5 rounded-2xl border border-zinc-800 hover:border-purple-500/40 transition-all flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-base font-bold text-white">
                      {item.title}
                    </h4>
                    <span className="text-xs font-mono font-bold text-emerald-400 shrink-0">
                      R$ {item.revenueGenerated.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Dados Reais da Saipos */}
      {activeTab === 'dados-saipos' && (
        <div className="space-y-4 mb-8 animate-in fade-in">
          <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-950/80">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-zinc-900 border-b border-zinc-800 text-zinc-400 font-bold uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-4 text-white">#</th>
                  <th className="py-3 px-4 text-white">Item (Relatório Saipos)</th>
                  <th className="py-3 px-4 text-white font-mono text-center">Quantidade</th>
                  <th className="py-3 px-4 text-white font-mono text-right">Faturamento</th>
                  <th className="py-3 px-4 text-white font-mono text-right">% Vendas</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60">
                {filteredRawItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-zinc-900/60 transition-colors">
                    <td className="py-2.5 px-4 text-zinc-500 font-mono text-[11px]">{idx + 1}</td>
                    <td className="py-2.5 px-4 font-semibold text-zinc-200">{item.name}</td>
                    <td className="py-2.5 px-4 font-mono text-center text-white">{item.qty} un</td>
                    <td className="py-2.5 px-4 font-mono text-right text-emerald-400 font-bold">
                      R$ {item.revenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </td>
                    <td className="py-2.5 px-4 font-mono text-right text-zinc-300">
                      {item.share.toFixed(2)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 4 Execution Directives */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white">
          As 4 Regras Práticas para a Nova Versão do Cardápio:
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {data.improvements.map((imp, idx) => (
            <div 
              key={idx}
              className="bg-zinc-950/80 p-5 rounded-2xl border border-zinc-800 space-y-2 hover:border-purple-500/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                <div className="w-7 h-7 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center justify-center font-bold text-xs shrink-0">
                  0{idx + 1}
                </div>
                <h4 className="text-sm font-bold text-white">
                  {imp.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {imp.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
