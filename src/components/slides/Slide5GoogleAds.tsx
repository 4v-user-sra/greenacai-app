import React, { useState } from 'react';
import { 
  TrendingUp, 
  BarChart3, 
  Layers, 
  DollarSign,
  PackageCheck,
  AlertTriangle,
  FileSpreadsheet,
  CheckCircle2
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
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none -mr-20 -mt-20"></div>

      {/* Header */}
      <div className="relative z-10 mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold px-3 py-1 rounded-full mb-3">
          <FileSpreadsheet className="w-3.5 h-3.5 text-purple-400" />
          <span>RELATÓRIO OFICIAL DO SISTEMA SAIPOS • {cardapioSalesData.period}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-2">
          {data.title}
        </h2>
        <p className="text-sm sm:text-base text-zinc-300 max-w-3xl leading-relaxed">
          Dados extraídos do relatório consolidado da loja: <strong>{cardapioSalesData.totalVolume.toLocaleString('pt-BR')} itens vendidos</strong> e <strong>R$ {cardapioSalesData.totalRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} faturados</strong> (Entrega, Retirada, Salão e Ficha).
        </p>
      </div>

      {/* KPI Summary Banner from POS Report */}
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
        
        {/* Card 1: Volume */}
        <div className="bg-zinc-950/90 p-4 sm:p-5 rounded-2xl border border-zinc-800 space-y-1">
          <div className="flex items-center justify-between text-zinc-400 text-xs font-medium">
            <span>Volume Total</span>
            <PackageCheck className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-white font-mono">
            {cardapioSalesData.totalVolume.toLocaleString('pt-BR')} <span className="text-xs text-zinc-400 font-normal">itens</span>
          </div>
          <div className="text-[11px] text-zinc-400">
            Período: 01/09 a 31/10
          </div>
        </div>

        {/* Card 2: Faturamento Total */}
        <div className="bg-zinc-950/90 p-4 sm:p-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 space-y-1">
          <div className="flex items-center justify-between text-emerald-300 text-xs font-bold">
            <span>Faturamento Bruto</span>
            <DollarSign className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">
            R$ {cardapioSalesData.totalRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </div>
          <div className="text-[11px] text-zinc-300">
            {cardapioSalesData.channels}
          </div>
        </div>

        {/* Card 3: Gargalo no Sistema */}
        <div className="bg-zinc-950/90 p-4 sm:p-5 rounded-2xl border border-amber-500/30 bg-amber-500/5 space-y-1">
          <div className="flex items-center justify-between text-amber-300 text-xs font-bold">
            <span>Gargalo de Cadastro</span>
            <AlertTriangle className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-amber-300 font-mono">
            314 <span className="text-xs text-zinc-300 font-normal">produtos</span>
          </div>
          <div className="text-[11px] text-amber-300">
            Espalhados em 63 categorias
          </div>
        </div>

        {/* Card 4: Concentração de Vendas */}
        <div className="bg-zinc-950/90 p-4 sm:p-5 rounded-2xl border border-purple-500/30 space-y-1">
          <div className="flex items-center justify-between text-purple-300 text-xs font-bold">
            <span>Concentração Real</span>
            <TrendingUp className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-white font-mono">
            R$ 220k+
          </div>
          <div className="text-[11px] text-zinc-400">
            Faturados só nos 6 campeões
          </div>
        </div>

      </div>

      {/* Insight Banner: 314 Produtos x Dispersão */}
      <div className="relative z-10 bg-purple-950/30 border border-purple-500/30 p-4 sm:p-5 rounded-2xl mb-8 flex items-start gap-3 text-xs text-zinc-300 leading-relaxed">
        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <strong className="text-purple-200 block text-sm mb-0.5">
            Diagnóstico Comprovado pelo Relatório:
          </strong>
          O sistema acusa <strong>314 produtos cadastrados</strong> e <strong>63 categorias</strong>. Há produtos duplicados concorrendo entre si (como <em>"Açaí Grande"</em> de 568 un vs <em>"AÇAÍ G (550ml)"</em> de 594 un, ou <em>"Açaí Médio"</em> de 339 un vs <em>"AÇAÍ M (330ml)"</em> de 1.186 un). Juntos, os copos de Açaí somaram <strong>3.616 unidades e R$ 110.299,00</strong>, e o Casadinho somou <strong>1.573 unidades e R$ 44.621,00</strong>. A reestruturação consolida essa dispersão em um cardápio limpo e rápido para converter no mobile.
        </div>
      </div>

      {/* Interactive Tabs: Nova Arquitetura vs Dados Saipos */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-6">
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
            <span>📊 Relatório Real de Saída (26 Itens da Imagem)</span>
          </button>
        </div>

        {activeTab === 'dados-saipos' && (
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-zinc-400 font-medium hidden sm:inline">Filtrar:</span>
            {[
              { id: 'todos', label: 'Todos' },
              { id: 'acai', label: 'Açaí' },
              { id: 'casadinho', label: 'Casadinho' },
              { id: 'pastel', label: 'Pastel' },
              { id: 'bebida', label: 'Bebidas' },
              { id: 'combo', label: 'Combo' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                  categoryFilter === cat.id
                    ? 'bg-emerald-500 text-zinc-950 font-extrabold shadow'
                    : 'bg-zinc-800 text-zinc-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Tab 1: Nova Arquitetura Enxuta */}
      {activeTab === 'arquitetura' && (
        <div className="relative z-10 mb-8 animate-in fade-in">
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

                  <div className="text-[11px] text-purple-300 font-mono font-semibold">
                    {item.totalSales.toLocaleString('pt-BR')} unidades vendidas
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-900 text-[11px] text-zinc-400 leading-relaxed">
                  <strong className="text-emerald-400 block mb-0.5">Benefício Direto:</strong>
                  {item.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Dados Reais da Imagem do Relatório */}
      {activeTab === 'dados-saipos' && (
        <div className="relative z-10 space-y-4 mb-8 animate-in fade-in">
          <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-950/80">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-zinc-900 border-b border-zinc-800 text-zinc-400 font-bold uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-4 text-white">#</th>
                  <th className="py-3 px-4 text-white">Item (Relatório Saipos 01/09 a 31/10)</th>
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
                    <td className="py-2.5 px-4 font-mono text-center text-white">{item.qty.toLocaleString('pt-BR')} un</td>
                    <td className="py-2.5 px-4 font-mono text-right text-emerald-400 font-bold">
                      R$ {item.revenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </td>
                    <td className="py-2.5 px-4 font-mono text-right text-zinc-300">
                      {item.share.toFixed(3).replace('.', ',')}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
}
