import React from 'react';
import { Slide1Capa } from './components/slides/Slide1Capa';
import { SlidePerformanceTrafego } from './components/slides/SlidePerformanceTrafego';
import { Slide5GoogleAds as SlideCardapioCampeoes } from './components/slides/Slide5GoogleAds';
import { SlideDiretrizesCardapio } from './components/slides/SlideDiretrizesCardapio';
import { Slide6KommoCRM as SlideCriativosPreco } from './components/slides/Slide6KommoCRM';
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

        {/* Seção 2: Performance Real de Tráfego & Funil do Cardápio (01/09 a 27/10) */}
        <section id="performance-trafego">
          <SlidePerformanceTrafego />
        </section>

        {/* Seção 3: Otimização com Base nos Produtos Campeões de Venda (Saipos) */}
        <section id="cardapio-campeoes">
          <SlideCardapioCampeoes />
        </section>

        {/* Seção 4: Diretrizes Operacionais de Otimização do Cardápio Digital (Alinhamento WhatsApp) */}
        <section id="diretrizes-cardapio">
          <SlideDiretrizesCardapio />
        </section>

        {/* Seção 5: Criativos Novos com Preço Estampado */}
        <section id="criativos-novos">
          <SlideCriativosPreco />
        </section>

        {/* Seção 6: Planilha de Próximos Passos & Balizamento Alinhado */}
        <section id="proximos-passos">
          <Slide8ProximosPassos />
        </section>

      </main>

    </div>
  );
}
