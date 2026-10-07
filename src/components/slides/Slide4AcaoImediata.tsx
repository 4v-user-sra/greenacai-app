import React from 'react';
import { MessageSquareX, AlertTriangle, CheckCircle2, ShoppingCart } from 'lucide-react';
import { slidesData } from '../../data';

export function Slide4AcaoImediata() {
  const data = slidesData.slide3; // Slide 3 in slidesData is WhatsApp pause & channel pivot

  return (
    <div className="p-6 sm:p-10 md:p-12 bg-zinc-900 text-white rounded-3xl relative overflow-hidden border border-red-500/20 shadow-2xl">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-red-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Slide Header */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
          {data.title}
        </h2>
        <p className="text-sm sm:text-base text-zinc-300 max-w-3xl leading-relaxed">
          {data.subtitle}
        </p>
      </div>

      {/* Channel Pivot Comparison Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left: WhatsApp Campaign */}
        <div className="bg-zinc-950/80 p-6 rounded-3xl border border-red-500/30 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 rounded-2xl bg-red-500/20 text-red-400 border border-red-500/30">
                <MessageSquareX className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Campanha de WhatsApp (Mensagens)</h3>
                <span className="text-[11px] text-zinc-400">Atendimento por Bot/Robô</span>
              </div>
            </div>
          </div>

          <ul className="space-y-3 text-xs text-zinc-300">
            <li className="flex items-start gap-2 bg-zinc-900/60 p-3 rounded-xl border border-zinc-800">
              <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span><strong>Consumo Ineficiente de Verba:</strong> Apenas 1 conversa iniciada sem nenhuma conversão em pedido.</span>
            </li>

            <li className="flex items-start gap-2 bg-zinc-900/60 p-3 rounded-xl border border-zinc-800">
              <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span><strong>Atrito no Food Service:</strong> O cliente de açaí quer rapidez. Ficar trocando mensagens aumenta o abandono.</span>
            </li>

            <li className="flex items-start gap-2 bg-zinc-900/60 p-3 rounded-xl border border-zinc-800">
              <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span><strong>Complexidade Operacional:</strong> Exige atendimento em tempo real altamente capacitado na loja física.</span>
            </li>
          </ul>

          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-2xl text-[11px] text-red-300 font-medium">
            ⛔ <strong>Resultado da Decisão:</strong> Interrupção imediata da queima de saldo para proteger o orçamento.
          </div>
        </div>

        {/* Right: Cardápio Digital Direct */}
        <div className="bg-zinc-950/80 p-6 rounded-3xl border border-emerald-500/40 space-y-4 shadow-xl ring-1 ring-emerald-500/20">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Delivery pelo Site Direct (Cypos/Saipos)</h3>
                <span className="text-[11px] text-zinc-400">Tráfego Pago Direto para Venda</span>
              </div>
            </div>
          </div>

          <ul className="space-y-3 text-xs text-zinc-300">
            <li className="flex items-start gap-2 bg-zinc-900/60 p-3 rounded-xl border border-zinc-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Zero Atrito na Compra:</strong> O usuário escolhe o tamanho do açaí, seleciona adicionais e paga direto no cartão ou Pix.</span>
            </li>

            <li className="flex items-start gap-2 bg-zinc-900/60 p-3 rounded-xl border border-zinc-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Margem Preservada:</strong> Sem as altas comissões de até 20%+ do iFood e sem custo com atendente de WhatsApp.</span>
            </li>

            <li className="flex items-start gap-2 bg-zinc-900/60 p-3 rounded-xl border border-zinc-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Histórico Comprovado:</strong> Agosto teve o recorde de pedidos do delivery direct exatamente ao focar neste canal.</span>
            </li>
          </ul>

          <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-[11px] text-emerald-300 font-medium">
            ✅ <strong>Próximo Passo:</strong> Toda a verba de Meta Ads (100%) está direcionada para o cardápio digital otimizado.
          </div>
        </div>

      </div>

    </div>
  );
}
