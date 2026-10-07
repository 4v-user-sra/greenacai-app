import React, { useState } from 'react';
import { ThermometerSnowflake, Video, DollarSign } from 'lucide-react';
import { slidesData } from '../../data';

export function Slide6KommoCRM() {
  const data = slidesData.slide5; // Slide 5 in slidesData has creative strategies
  const [activeTab, setActiveTab] = useState<'preco' | 'frio' | 'video'>('preco');

  return (
    <div className="p-6 sm:p-10 md:p-12 bg-zinc-900 text-white rounded-3xl relative overflow-hidden border border-emerald-500/20 shadow-2xl">
      
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
          {data.title}
        </h2>
        <p className="text-sm sm:text-base text-zinc-300 max-w-3xl leading-relaxed">
          {data.subtitle}
        </p>
      </div>

      {/* Interactive Category Selector Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveTab('preco')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer border ${
            activeTab === 'preco'
              ? 'bg-emerald-500 text-zinc-950 border-emerald-400 shadow-lg shadow-emerald-500/20 font-extrabold'
              : 'bg-zinc-950 text-zinc-300 border-zinc-800 hover:bg-zinc-800'
          }`}
        >
          <DollarSign className="w-4 h-4" />
          <span>Criativos com Preço Estampado</span>
        </button>

        <button
          onClick={() => setActiveTab('frio')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer border ${
            activeTab === 'frio'
              ? 'bg-amber-500 text-zinc-950 border-amber-400 shadow-lg shadow-amber-500/20 font-extrabold'
              : 'bg-zinc-950 text-zinc-300 border-zinc-800 hover:bg-zinc-800'
          }`}
        >
          <ThermometerSnowflake className="w-4 h-4" />
          <span>Contingência de Dias Frios / Chuva</span>
        </button>

        <button
          onClick={() => setActiveTab('video')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer border ${
            activeTab === 'video'
              ? 'bg-purple-500 text-zinc-950 border-purple-400 shadow-lg shadow-purple-500/20 font-extrabold'
              : 'bg-zinc-950 text-zinc-300 border-zinc-800 hover:bg-zinc-800'
          }`}
        >
          <Video className="w-4 h-4" />
          <span>Vídeos com Taka & Social Media</span>
        </button>
      </div>

      {/* Active Tab Showcase Area */}
      {activeTab === 'preco' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-950/80 p-6 sm:p-8 rounded-3xl border border-zinc-800 animate-in fade-in">
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              Anúncios Diretos com Preço & Copo em Destaque
            </h3>

            <p className="text-sm text-zinc-300 leading-relaxed">
              O consumidor de delivery decide por impulso visual e clareza de custo. A nova linha traz o copo de açaí com valor exato, acompanhamentos selecionados e chamado direto para o cardápio sem intermediários.
            </p>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl bg-zinc-900 max-w-xs sm:max-w-sm w-full">
              <img 
                src="https://i.imgur.com/Bne2KuZ.jpeg" 
                alt="Criativo de anúncio de açaí com preço estampado"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      )}

      {activeTab === 'frio' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-950/80 p-6 sm:p-8 rounded-3xl border border-zinc-800 animate-in fade-in">
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              Anúncios de Contingência de Frio & Chuva (Pastéis Quentes)
            </h3>

            <p className="text-sm text-zinc-300 leading-relaxed">
              Em Londrina, dias frios e chuvosos costumam derrubar o consumo de açaí gelado. Para não paralisar o faturamento da loja, ativamos campanhas automáticas de contingência focadas nos produtos quentes da casa: pastéis crocantes fritos na hora e salgados.
            </p>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl bg-zinc-900 max-w-xs sm:max-w-sm w-full">
              <img 
                src="https://i.imgur.com/X7mmqB1.png" 
                alt="Criativo de pastel para contingência de frio"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      )}

      {activeTab === 'video' && (
        <div className="bg-zinc-950/80 p-6 rounded-3xl border border-zinc-800 space-y-6 animate-in fade-in">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-zinc-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/30 block w-fit mb-2">
                Conexão com a Marca & Rosto do Projeto
              </span>
              <h3 className="text-xl font-bold text-white">
                Roteiros de Vídeo com Taka (Garoto Propaganda) & Social Media
              </h3>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            O Taka possui um carisma natural incrível diante da câmera. Com a contratação do novo profissional de social media da loja, montamos uma esteira contínua de gravação de reels e anúncios estilo 'review de produto' e bastidores da fábrica.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 space-y-1.5">
              <strong className="text-purple-300 font-bold block">1. Vídeo "Bastidores da Fábrica"</strong>
              <p className="text-zinc-400 text-[11px] leading-relaxed">
                Taka mostrando a escolha das frutas frescas e o processo de batimento do açaí sem açúcar adicionado.
              </p>
            </div>

            <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 space-y-1.5">
              <strong className="text-purple-300 font-bold block">2. Vídeo "Review em Família"</strong>
              <p className="text-zinc-400 text-[11px] leading-relaxed">
                Mostrando os potes e copos servidos na mesa ao ar livre de frente para o Lago Igapó.
              </p>
            </div>

            <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 space-y-1.5">
              <strong className="text-purple-300 font-bold block">3. Vídeo "Desafio Açaí Zero"</strong>
              <p className="text-zinc-400 text-[11px] leading-relaxed">
                Apresentação do Açaí Zero Açúcar para a galera fitness e corredores do lago.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
