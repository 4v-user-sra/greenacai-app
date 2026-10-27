import React from 'react';
import { speakerNotesGuide, slidesList } from '../data';
import { X, Lightbulb, UserCheck, ShieldAlert, CheckCircle2, HeartHandshake } from 'lucide-react';

interface SpeakerNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: number;
}

export function SpeakerNotesModal({ isOpen, onClose, currentSlide }: SpeakerNotesModalProps) {
  if (!isOpen) return null;

  const currentTip = speakerNotesGuide.find(g => g.slide === currentSlide) || speakerNotesGuide[0];
  const currentSlideInfo = slidesList.find(s => s.id === currentSlide) || slidesList[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-zinc-900 text-white w-full max-w-2xl rounded-3xl border border-emerald-500/30 shadow-2xl p-6 sm:p-8 relative overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-72 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Guia de Pitch & Dicas de Ouro • Reunião com Taka e Viviane
              </h3>
              <p className="text-xs text-zinc-400">
                Diretrizes de alinhamento com base nos dados reais do WhatsApp e Meta Ads
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Current Slide Highlight */}
        {currentTip && (
          <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-2xl mb-6">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4" />
                Dica de Pitch: {currentSlideInfo?.title}
              </span>
              <span className="text-[10px] bg-emerald-500 text-zinc-950 px-2.5 py-0.5 rounded-full font-extrabold">
                Em Foco
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-medium">
              {currentTip.tip}
            </p>
          </div>
        )}

        {/* 4 Golden Rules for Taka & Viviane */}
        <div className="space-y-3 mb-6">
          <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">
            4 Mandamentos de Ouro com os Stakeholders:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-zinc-950/60 p-3.5 rounded-2xl border border-zinc-800 space-y-1">
              <strong className="text-emerald-400 block font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 1. O Tráfego Funciona
              </strong>
              <p className="text-zinc-400 text-[11px] leading-relaxed">
                Mostre que o tráfego atrai pessoas com CPC de R$ 0,52 e 840 visitas ao site. O gargalo está na conversão dentro do cardápio digital.
              </p>
            </div>

            <div className="bg-zinc-950/60 p-3.5 rounded-2xl border border-zinc-800 space-y-1">
              <strong className="text-emerald-400 block font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 2. Cardápio Limpo & Campeões
              </strong>
              <p className="text-zinc-400 text-[11px] leading-relaxed">
                Reforce os dados da Saipos: 90%+ das vendas vêm de 4 itens. Menos opções = compra mais rápida no celular.
              </p>
            </div>

            <div className="bg-zinc-950/60 p-3.5 rounded-2xl border border-zinc-800 space-y-1">
              <strong className="text-emerald-400 block font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 3. Fotos Reais sem IA
              </strong>
              <p className="text-zinc-400 text-[11px] leading-relaxed">
                Acolha o feedback da Viviane: fotos reais dos produtos tiradas pelo Felipe Campezoni, com apetite appeal autêntico.
              </p>
            </div>

            <div className="bg-zinc-950/60 p-3.5 rounded-2xl border border-zinc-800 space-y-1">
              <strong className="text-emerald-400 block font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 4. Parceria de Execução
              </strong>
              <p className="text-zinc-400 text-[11px] leading-relaxed">
                Kaiky ajustando a plataforma Saipos/Cypos, Felipe nas fotos e V4 na tração das campanhas e reuniões quinzenais.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-zinc-800 flex justify-end">
          <button
            onClick={onClose}
            className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow cursor-pointer"
          >
            Entendido, Voltar à Apresentação
          </button>
        </div>

      </div>
    </div>
  );
}
