import React from 'react';
import { 
  TrendingUp, 
  TrendingDown,
  MousePointerClick, 
  Users, 
  DollarSign, 
  ShoppingCart, 
  Eye, 
  ShieldCheck
} from 'lucide-react';
import { trafficPerformanceData } from '../../data';

export function SlidePerformanceTrafego() {
  const { period, summary, campaigns, funnelAnalysis } = trafficPerformanceData;

  return (
    <div className="p-6 sm:p-10 md:p-12 bg-zinc-900 text-white rounded-3xl relative overflow-hidden border border-emerald-500/20 shadow-2xl">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none -ml-20 -mb-20"></div>

      {/* Header */}
      <div className="relative z-10 mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full mb-3">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>PERÍODO CONSOLIDADO: {period} (META ADS)</span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-2">
          Performance de Mídia & Funil do Cardápio
        </h2>
        <p className="text-sm sm:text-base text-zinc-300 max-w-3xl leading-relaxed">
          Análise dos indicadores de tráfego, custo por clique, volume de acessos ao cardápio digital e o diagnóstico de conversão das campanhas.
        </p>
      </div>

      {/* Metric Cards Top Row */}
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
        
        {/* Card 1: Investimento Total */}
        <div className="bg-zinc-950/80 p-4 sm:p-5 rounded-2xl border border-zinc-800 space-y-1">
          <div className="flex items-center justify-between text-zinc-400 text-xs font-medium">
            <span>Investimento Total</span>
            <DollarSign className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-white font-mono">
            R$ {summary.totalSpent.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </div>
          <div className="text-[11px] text-zinc-400">
            Período de 01/09 a 27/10
          </div>
        </div>

        {/* Card 2: Alcance & Impressões */}
        <div className="bg-zinc-950/80 p-4 sm:p-5 rounded-2xl border border-zinc-800 space-y-1">
          <div className="flex items-center justify-between text-zinc-400 text-xs font-medium">
            <span>Alcance Único</span>
            <Users className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-white font-mono">
            {summary.totalReach.toLocaleString('pt-BR')} <span className="text-xs text-zinc-400 font-normal">pessoas</span>
          </div>
          <div className="text-[11px] text-zinc-400">
            {summary.totalImpressions.toLocaleString('pt-BR')} impressões em Londrina
          </div>
        </div>

        {/* Card 3: Cliques & CPC */}
        <div className="bg-zinc-950/80 p-4 sm:p-5 rounded-2xl border border-zinc-800 space-y-1">
          <div className="flex items-center justify-between text-zinc-400 text-xs font-medium">
            <span>Cliques nos Anúncios</span>
            <MousePointerClick className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">
            {summary.totalClicks.toLocaleString('pt-BR')} <span className="text-xs text-zinc-400 font-normal">cliques</span>
          </div>
          <div className="text-[11px] text-emerald-300 font-semibold">
            CPC de R$ 0,52 na campanha da Manu (CTR 1,71%)
          </div>
        </div>

        {/* Card 4: Visitas no Cardápio Digital */}
        <div className="bg-zinc-950/80 p-4 sm:p-5 rounded-2xl border border-emerald-500/30 space-y-1 bg-emerald-500/5">
          <div className="flex items-center justify-between text-emerald-300 text-xs font-bold">
            <span>Visitas ao Cardápio</span>
            <Eye className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-white font-mono">
            {summary.landingPageViews.toLocaleString('pt-BR')} <span className="text-xs text-zinc-300 font-normal">aberturas</span>
          </div>
          <div className="text-[11px] text-zinc-300">
            {summary.addToCart} adições ao carrinho
          </div>
        </div>

      </div>

      {/* Negative Return Transparency Callout Banner */}
      <div className="relative z-10 bg-gradient-to-r from-red-950/40 via-zinc-950 to-red-950/30 border border-red-500/30 p-5 sm:p-6 rounded-3xl mb-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-red-500/20 text-red-400 rounded-xl border border-red-500/30">
              <TrendingDown className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-red-400 bg-red-500/10 px-2.5 py-0.5 rounded border border-red-500/20">
                Transparência com os Números
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                Retorno Negativo: Mais de R$ 1.200 investidos e nem a metade retornou
              </h3>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-red-400 bg-red-500/10 border border-red-500/30 px-3 py-1.5 rounded-xl">
            ROAS 0,46x (Déficit de -R$ 660,75)
          </span>
        </div>

        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
          No período consolidado (01/09 a 27/10), foram investidos <strong>R$ 1.227,95</strong> nas campanhas da Meta Ads e o faturamento direto rastreado pelo pixel foi de apenas <strong>R$ 567,20</strong> — ou seja, <strong>nem metade do valor investido retornou em vendas</strong>. Esse retorno negativo comprova que continuar injetando verba antes de arrumar a casa é queimar dinheiro. A pausa na campanha de conversão foi uma medida técnica indispensável para estancar perdas enquanto o cardápio é reestruturado.
        </p>

        {/* 3 Comparative Financial Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="bg-zinc-900/80 p-3.5 rounded-2xl border border-zinc-800">
            <span className="text-[11px] text-zinc-400 block font-medium">Total Investido</span>
            <strong className="text-base sm:text-lg font-mono text-white">R$ 1.227,95</strong>
          </div>
          <div className="bg-zinc-900/80 p-3.5 rounded-2xl border border-red-500/20">
            <span className="text-[11px] text-red-300 block font-medium">Retorno Rastreado em Vendas</span>
            <strong className="text-base sm:text-lg font-mono text-red-400">R$ 567,20</strong>
          </div>
          <div className="bg-zinc-900/80 p-3.5 rounded-2xl border border-red-500/30 bg-red-500/5">
            <span className="text-[11px] text-red-300 block font-medium">Saldo Líquido / Desempenho</span>
            <strong className="text-base sm:text-lg font-mono text-red-400">-R$ 660,75 (0,46x)</strong>
          </div>
        </div>
      </div>

      {/* Visual Funnel Section */}
      <div className="relative z-10 bg-zinc-950/80 p-6 sm:p-7 rounded-3xl border border-zinc-800 mb-8 space-y-5">
        <div className="pb-3 border-b border-zinc-800">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-emerald-400" />
            O Funil de Conversão: Do Anúncio à Finalização do Pedido
          </h3>
        </div>

        {/* Step by step flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {funnelAnalysis.map((item, idx) => (
            <div 
              key={idx}
              className={`p-4 rounded-2xl border flex flex-col justify-between space-y-2 ${
                item.status === 'Excelente' 
                  ? 'bg-zinc-900/80 border-emerald-500/30' 
                  : item.status === 'Gargalo'
                    ? 'bg-amber-500/10 border-amber-500/40'
                    : 'bg-zinc-900 border-zinc-800'
              }`}
            >
              <div>
                <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                  item.status === 'Excelente'
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : item.status === 'Gargalo'
                      ? 'bg-amber-500/20 text-amber-300 font-extrabold'
                      : 'bg-zinc-800 text-zinc-400'
                }`}>
                  {item.status}
                </span>
                <h4 className="text-xs font-bold text-white mt-2">
                  {item.step}
                </h4>
                <div className="text-base font-black text-white font-mono mt-0.5">
                  {item.volume}
                </div>
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Campaigns Table Breakdown */}
      <div className="relative z-10 space-y-3">
        <h3 className="text-sm font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          Detalhamento das Campanhas Veiculadas no Período
        </h3>

        <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-950/80">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-zinc-900 border-b border-zinc-800 text-zinc-400 font-bold uppercase tracking-wider text-[11px]">
                <th className="py-3 px-4 font-extrabold text-white">Campanha</th>
                <th className="py-3 px-4 font-extrabold text-white">Objetivo</th>
                <th className="py-3 px-4 font-extrabold text-white">Gasto</th>
                <th className="py-3 px-4 font-extrabold text-white">Cliques / CPC</th>
                <th className="py-3 px-4 font-extrabold text-white">Acessos Cardápio</th>
                <th className="py-3 px-4 font-extrabold text-white text-right">Status Atual</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              {campaigns.slice(0, 2).map((c, idx) => (
                <tr key={idx} className="hover:bg-zinc-900/50 transition-colors">
                  <td className="py-3.5 px-4 space-y-1">
                    <div className="font-bold text-white">
                      {c.name}
                    </div>
                    <div className="text-[11px] text-zinc-400 max-w-md">
                      {c.highlight}
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-zinc-300 whitespace-nowrap">
                    {c.objective}
                  </td>
                  <td className="py-3.5 px-4 text-white font-mono font-bold whitespace-nowrap">
                    R$ {c.spent.toFixed(2).replace('.', ',')}
                  </td>
                  <td className="py-3.5 px-4 text-zinc-300 font-mono whitespace-nowrap">
                    {c.clicks} cliques {c.cpc ? `(${c.cpc})` : ''}
                  </td>
                  <td className="py-3.5 px-4 text-emerald-400 font-mono font-bold whitespace-nowrap">
                    {c.landingPageViews ? `${c.landingPageViews} visitas` : '-'}
                  </td>
                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${c.statusColor}`}>
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
