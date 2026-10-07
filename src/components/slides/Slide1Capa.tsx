import React from 'react';
import { slidesData } from '../../data';

export function Slide1Capa() {
  const data = slidesData.slide1;

  return (
    <div className="p-6 sm:p-10 md:p-12 bg-zinc-900 text-white rounded-3xl relative overflow-hidden border border-emerald-500/20 shadow-2xl">
      
      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[130px] pointer-events-none -ml-20 -mb-20"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      {/* Slide Top: Brand Lockup */}
      <div className="relative z-10 flex items-center justify-between pb-8 border-b border-zinc-800 mb-8 sm:mb-10">
        <div>
          <span className="font-extrabold text-2xl tracking-tight text-white block">GREEN AÇAÍ</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-4xl space-y-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
          {data.headline}
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-2xl">
          {data.subheadline}
        </p>
      </div>

    </div>
  );
}
