import React from 'react';
import { 
  TrendingUp, 
  TrendingDown,
  MousePointerClick, 
  Users, 
  DollarSign, 
  Eye, 
  Sparkles, 
  CheckCircle2, 
  Radio,
  ArrowDownRight,
  ArrowUpRight,
  ShieldAlert,
  Compass
} from 'lucide-react';
import { trafficComparisonData } from '../../data';

export function SlidePerformanceTrafego() {
  const { 
    previousPeriod, 
    newPeriod, 
    activeBrandingCampaign, 
    kpiComparison, 
    financialConclusion 
  } = trafficComparisonData;

  return (
    <div className="p-6 sm:p-10 md:p-12 bg-zinc-900 text-white rounded-3xl relative overflow-hidden border border-emerald-500/20 shadow-2xl">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none -ml-20 -mb-20"></div>

      {/* Header */}
      <div className="relative z-10 mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full mb-3">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>ANÁLISE COMPARATIVA DE MÍDIA • ANTES VS DEPOIS DAS IMPLEMENTAÇÕES V4</span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-2">
          Evolução dos Indicadores de Campanha
        </h2>
        <p className="text-sm sm:text-base text-zinc-300 max-w-3xl leading-relaxed">
          Comparação direta entre o período anterior (01/10 a 14/10) e a nova fase após as implementações técnicas (15/10 a 27/10), destacando a forte melhora no custo por clique e o foco atual em experiência.
        </p>
      </div>

      {/* 4 Core Comparative Metric Badges (KPI Highlights) */}
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
        
        {/* KPI 1: CPC */}
        <div className="bg-zinc-950/90 p-4 sm:p-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 space-y-1">
          <div className="flex items-center justify-between text-zinc-400 text-xs font-medium">
            <span>Custo por Clique (CPC)</span>
            <span className="text-[10px] font-black text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full flex items-center">
              <ArrowDownRight className="w-3 h-3" /> -66%
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">R$ 0,52</span>
            <span className="text-xs text-zinc-500 line-through font-mono">R$ 1,53</span>
          </div>
          <div className="text-[11px] text-emerald-300 font-semibold">
            Redução drástica no custo de clique
          </div>
        </div>

        {/* KPI 2: CTR */}
        <div className="bg-zinc-950/90 p-4 sm:p-5 rounded-2xl border border-purple-500/30 bg-purple-500/5 space-y-1">
          <div className="flex items-center justify-between text-zinc-400 text-xs font-medium">
            <span>Taxa de Cliques (CTR)</span>
            <span className="text-[10px] font-black text-purple-300 bg-purple-500/20 px-2 py-0.5 rounded-full flex items-center">
              <ArrowUpRight className="w-3 h-3" /> +173%
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-xl sm:text-2xl font-black text-purple-300 font-mono">1,71%</span>
            <span className="text-xs text-zinc-500 line-through font-mono">0,63%</span>
          </div>
          <div className="text-[11px] text-purple-300 font-semibold">
            Anúncio quase 3x mais atrativo
          </div>
        </div>

        {/* KPI 3: Volume de Cliques */}
        <div className="bg-zinc-950/90 p-4 sm:p-5 rounded-2xl border border-zinc-800 space-y-1">
          <div className="flex items-center justify-between text-zinc-400 text-xs font-medium">
            <span>Cliques Gerados</span>
            <span className="text-[10px] font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full flex items-center">
              <ArrowUpRight className="w-3 h-3" /> +118%
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-xl sm:text-2xl font-black text-white font-mono">491</span>
            <span className="text-xs text-zinc-500 font-mono">vs 225</span>
          </div>
          <div className="text-[11px] text-zinc-400">
            Mais do que o dobro de tráfego
          </div>
        </div>

        {/* KPI 4: Visitas no Cardápio */}
        <div className="bg-zinc-950/90 p-4 sm:p-5 rounded-2xl border border-zinc-800 space-y-1">
          <div className="flex items-center justify-between text-zinc-400 text-xs font-medium">
            <span>Visitas ao Cardápio</span>
            <span className="text-[10px] font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full flex items-center">
              <ArrowUpRight className="w-3 h-3" /> +133%
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-xl sm:text-2xl font-black text-white font-mono">404</span>
            <span className="text-xs text-zinc-500 font-mono">vs 173</span>
          </div>
          <div className="text-[11px] text-zinc-400">
            404 acessos diretos à página
          </div>
        </div>

      </div>

      {/* Side-by-Side Detailed Period Comparison */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        
        {/* Column 1: Período Anterior */}
        <div className="bg-zinc-950/80 p-6 rounded-3xl border border-zinc-800 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700 font-bold">
                {previousPeriod.period}
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-zinc-700 text-zinc-400">
                {previousPeriod.status}
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-zinc-200">
                {previousPeriod.label}
              </h3>
              <p className="text-xs text-zinc-500 font-mono mt-0.5">
                {previousPeriod.campaignName}
              </p>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed">
              {previousPeriod.summary}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-zinc-800/80 text-xs">
              <div className="bg-zinc-900/60 p-2.5 rounded-xl border border-zinc-800">
                <span className="text-[10px] text-zinc-500 block">Gasto Total</span>
                <strong className="text-white font-mono text-xs">R$ {previousPeriod.spent.toFixed(2).replace('.', ',')}</strong>
              </div>
              <div className="bg-zinc-900/60 p-2.5 rounded-xl border border-zinc-800">
                <span className="text-[10px] text-zinc-500 block">Cliques</span>
                <strong className="text-white font-mono text-xs">{previousPeriod.clicks}</strong>
              </div>
              <div className="bg-zinc-900/60 p-2.5 rounded-xl border border-zinc-800">
                <span className="text-[10px] text-zinc-500 block">CPC Médio</span>
                <strong className="text-red-400 font-mono text-xs">R$ {previousPeriod.cpc.toFixed(2).replace('.', ',')}</strong>
              </div>
              <div className="bg-zinc-900/60 p-2.5 rounded-xl border border-zinc-800">
                <span className="text-[10px] text-zinc-500 block">CTR</span>
                <strong className="text-zinc-300 font-mono text-xs">{previousPeriod.ctr}%</strong>
              </div>
            </div>
          </div>

          <div className="p-3 bg-zinc-900 rounded-2xl border border-zinc-800 text-[11px] text-zinc-400 flex items-center justify-between">
            <span>Retorno de Vendas:</span>
            <strong className="text-zinc-300 font-mono">R$ 121,00 (2 pedidos / ROAS 0,35x)</strong>
          </div>
        </div>

        {/* Column 2: Período Atual (Implementações V4) */}
        <div className="bg-gradient-to-br from-emerald-950/20 via-zinc-950 to-purple-950/20 p-6 rounded-3xl border border-emerald-500/40 shadow-xl space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
                {newPeriod.period}
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-500/30 text-amber-400 bg-amber-500/10">
                {newPeriod.status}
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                {newPeriod.label}
                <Sparkles className="w-4 h-4 text-emerald-400" />
              </h3>
              <p className="text-xs text-emerald-400/80 font-mono mt-0.5">
                {newPeriod.campaignName}
              </p>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed">
              {newPeriod.summary}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-emerald-500/20 text-xs">
              <div className="bg-zinc-900/80 p-2.5 rounded-xl border border-emerald-500/20">
                <span className="text-[10px] text-zinc-400 block">Gasto Total</span>
                <strong className="text-white font-mono text-xs">R$ {newPeriod.spent.toFixed(2).replace('.', ',')}</strong>
              </div>
              <div className="bg-zinc-900/80 p-2.5 rounded-xl border border-emerald-500/20">
                <span className="text-[10px] text-zinc-400 block">Cliques</span>
                <strong className="text-emerald-400 font-mono text-xs">{newPeriod.clicks} (+118%)</strong>
              </div>
              <div className="bg-zinc-900/80 p-2.5 rounded-xl border border-emerald-500/20">
                <span className="text-[10px] text-zinc-400 block">CPC Médio</span>
                <strong className="text-emerald-400 font-mono text-xs">R$ {newPeriod.cpc.toFixed(2).replace('.', ',')} (-66%)</strong>
              </div>
              <div className="bg-zinc-900/80 p-2.5 rounded-xl border border-emerald-500/20">
                <span className="text-[10px] text-zinc-400 block">CTR</span>
                <strong className="text-purple-300 font-mono text-xs">{newPeriod.ctr}% (+173%)</strong>
              </div>
            </div>
          </div>

          <div className="p-3 bg-amber-500/10 rounded-2xl border border-amber-500/30 text-[11px] text-amber-200 flex items-center justify-between">
            <span>Visitas ao Cardápio Digital:</span>
            <strong className="text-white font-mono font-bold">404 acessos (vs 173 anteriores)</strong>
          </div>
        </div>

      </div>

      {/* Active Campaign Box: Experiência & Presença de Marca */}
      <div className="relative z-10 bg-gradient-to-r from-emerald-950/40 via-zinc-950 to-zinc-950 border border-emerald-500/40 p-5 sm:p-6 rounded-3xl mb-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 bg-emerald-500/20 text-emerald-400 rounded-xl border border-emerald-500/30">
              <Radio className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/30">
                  Campanha Ativa Agora
                </span>
                <span className="text-xs text-zinc-400 font-mono">
                  {activeBrandingCampaign.budget}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                {activeBrandingCampaign.campaignName} • Foco em Experiência de Marca
              </h3>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-xl">
            {activeBrandingCampaign.reach.toLocaleString('pt-BR')} pessoas alcançadas
          </span>
        </div>

        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
          {activeBrandingCampaign.rationale}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
          <div className="bg-zinc-900/80 p-3 rounded-2xl border border-zinc-800">
            <span className="text-[11px] text-zinc-400 block">Investimento no Período</span>
            <strong className="text-white font-mono text-sm">R$ {activeBrandingCampaign.spent.toFixed(2).replace('.', ',')}</strong>
          </div>
          <div className="bg-zinc-900/80 p-3 rounded-2xl border border-zinc-800">
            <span className="text-[11px] text-zinc-400 block">Pessoas Alcançadas em Londrina</span>
            <strong className="text-emerald-400 font-mono text-sm">{activeBrandingCampaign.reach.toLocaleString('pt-BR')} pessoas</strong>
          </div>
          <div className="bg-zinc-900/80 p-3 rounded-2xl border border-zinc-800">
            <span className="text-[11px] text-zinc-400 block">Custo por Mil Pessoas (CPM)</span>
            <strong className="text-purple-300 font-mono text-sm">R$ {activeBrandingCampaign.cpm.toFixed(2).replace('.', ',')}</strong>
          </div>
        </div>
      </div>

      {/* Financial Reality & Negative Return Banner */}
      <div className="relative z-10 bg-gradient-to-r from-red-950/40 via-zinc-950 to-zinc-950 border border-red-500/30 p-5 sm:p-6 rounded-3xl space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-red-500/20 text-red-400 rounded-xl border border-red-500/30">
              <TrendingDown className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-red-400 bg-red-500/10 px-2.5 py-0.5 rounded border border-red-500/20">
                Transparência com os Números
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
                Retorno Financeiro Negativo vs Evolução dos Indicadores
              </h3>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-red-400 bg-red-500/10 border border-red-500/30 px-3 py-1.5 rounded-xl">
            Retorno Ainda Abaixo do Ideal
          </span>
        </div>

        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
          {financialConclusion.takeaway}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
          <div className="bg-zinc-900/80 p-3.5 rounded-2xl border border-zinc-800">
            <span className="text-[11px] text-zinc-400 block font-medium">Investido nos Períodos</span>
            <strong className="text-base font-mono text-white">R$ {financialConclusion.totalSpentPeriods.toFixed(2).replace('.', ',')}</strong>
          </div>
          <div className="bg-zinc-900/80 p-3.5 rounded-2xl border border-red-500/20">
            <span className="text-[11px] text-red-300 block font-medium">Retorno Direto Rastreado</span>
            <strong className="text-base font-mono text-red-400">R$ {financialConclusion.totalRevenueTracked.toFixed(2).replace('.', ',')}</strong>
          </div>
          <div className="bg-zinc-900/80 p-3.5 rounded-2xl border border-emerald-500/30 bg-emerald-500/5">
            <span className="text-[11px] text-emerald-300 block font-medium">Próximo Passo Decisivo</span>
            <strong className="text-base text-emerald-400 font-bold">Otimizar o Cardápio</strong>
          </div>
        </div>
      </div>

    </div>
  );
}
