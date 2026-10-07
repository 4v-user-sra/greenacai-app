import React from 'react';
import { Slide1Capa } from './components/slides/Slide1Capa';
import { Slide3Diagnostico } from './components/slides/Slide3Diagnostico';
import { Slide4AcaoImediata } from './components/slides/Slide4AcaoImediata';
import { Slide5GoogleAds as SlideOtimizacaoCardapio } from './components/slides/Slide5GoogleAds';
import { Slide6KommoCRM as SlideCriativosContingencia } from './components/slides/Slide6KommoCRM';
import { Slide7Repescagem as SlideLagoEAtivacao } from './components/slides/Slide7Repescagem';
import { Slide8ProximosPassos } from './components/slides/Slide8ProximosPassos';

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090B] text-zinc-100 font-sans selection:bg-emerald-500 selection:text-zinc-950 antialiased bg-radial-gradient">
      
      {/* Main Vertical Presentation Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
        
        {/* Seção 1: Capa Executiva */}
        <section id="capa">
          <Slide1Capa />
        </section>

        {/* Seção 2: Diagnóstico & Rebalizamento de Metas */}
        <section id="diagnostico">
          <Slide3Diagnostico />
        </section>

        {/* Seção 3: Decisão Imediata - Pausa do WhatsApp */}
        <section id="acao-imediata">
          <Slide4AcaoImediata />
        </section>

        {/* Seção 4: Otimização do Cardápio Digital (Saipos) */}
        <section id="cardapio-digital">
          <SlideOtimizacaoCardapio />
        </section>

        {/* Seção 5: Criativos com Preço & Contingência de Dias Frios */}
        <section id="criativos-contingencia">
          <SlideCriativosContingencia />
        </section>

        {/* Seção 6: Ativação no Lago Igapó, Público Infantil e Arenas */}
        <section id="ativacao-lago">
          <SlideLagoEAtivacao />
        </section>

        {/* Seção 7: Planilha de Próximos Passos & Balizamento */}
        <section id="proximos-passos">
          <Slide8ProximosPassos />
        </section>

      </main>

    </div>
  );
}
