import React from 'react';
import { Heart, MapPin } from 'lucide-react';
import { slidesData } from '../../data';

export function Slide7Repescagem() {
  const data = slidesData.slide6; // Slide 6 in slidesData has Lago & Community pillars

  return (
    <div className="p-6 sm:p-10 md:p-12 bg-zinc-900 text-white rounded-3xl relative overflow-hidden border border-emerald-500/20 shadow-2xl">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
          {data.title}
        </h2>
        <p className="text-sm sm:text-base text-zinc-300 max-w-3xl leading-relaxed">
          {data.subtitle}
        </p>
      </div>

      {/* Main Grid: Igapo Image + 3 Activation Pillars */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left: Generated Photo of Igapo Runners / Community */}
        <div className="lg:col-span-5 relative">
          <div className="rounded-3xl overflow-hidden border border-emerald-500/30 shadow-2xl group">
            <img 
              src="/src/assets/images/lago_igapo_runners_1790942121284.jpg" 
              alt="Corredores e comunidade no Lago Igapó Londrina"
              className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>

            <div className="absolute bottom-4 left-4 right-4 p-4 bg-zinc-900/90 backdrop-blur-md rounded-2xl border border-white/10 text-xs">
              <div className="flex items-center justify-between font-bold text-emerald-400 mb-1">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> Point Lago Igapó
                </span>
              </div>
              <p className="text-zinc-300 text-[11px]">
                A localização privilegiada da loja em contêiner em frente ao lago é o principal ativo de marca da Green Açaí em Londrina.
              </p>
            </div>
          </div>
        </div>

        {/* Right: 3 Pillars */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Pillar 1: Lago Igapo Corredores */}
          <div className="bg-zinc-950/80 p-5 rounded-2xl border border-zinc-800 space-y-2 hover:border-emerald-500/40 transition-all">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-xs shrink-0">
                01
              </div>
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                Ações de Degustação no "Corre de Terça"
              </h4>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed pl-10">
              Barraquinhas com mini-copos de degustação na frente da loja nos dias de corrida. Atração imediata da galera fitness para conhecer o Açaí Zero Açúcar e o Shake Proteico.
            </p>
          </div>

          {/* Pillar 2: Público Infantil 4 a 12 anos */}
          <div className="bg-zinc-950/80 p-5 rounded-2xl border border-zinc-800 space-y-2 hover:border-purple-500/40 transition-all">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center justify-center font-bold text-xs shrink-0">
                02
              </div>
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                Público Infantil (4 a 12 anos) como Promotores da Marca
              </h4>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed pl-10">
              Conforme ressaltado na reunião, a criança é o cliente mais fiel da marca e não vem sozinha — traz pais, avós e tios (multiplicando a receita em 3x a 4x). Atendimento carinhoso, brindes e fotos kids.
            </p>
          </div>

          {/* Pillar 3: Expansão B2B e Arenas Beach Tennis */}
          <div className="bg-zinc-950/80 p-5 rounded-2xl border border-zinc-800 space-y-2 hover:border-amber-500/40 transition-all">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold text-xs shrink-0">
                03
              </div>
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                Quiosques Modulares em Arenas de Beach Tennis (B2B/Franquias)
              </h4>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed pl-10">
              Presença de quiosque modular dentro de arenas de esportes de raquete. Modelo B2B/Franquia de alta rentabilidade e sinergia perfeita com o açaí e torneios.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
