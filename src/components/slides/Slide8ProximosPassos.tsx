import React from 'react';
import { User, Clock } from 'lucide-react';
import { slidesData } from '../../data';

export function Slide8ProximosPassos() {
  const data = slidesData.slide7; // Slide 7 in slidesData has tasks list
  const tasks = data.tasks;

  return (
    <div className="p-6 sm:p-10 md:p-12 bg-zinc-900 text-white rounded-3xl relative overflow-hidden border border-emerald-500/20 shadow-2xl">
      
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
          {data.title}
        </h2>
        <p className="text-sm sm:text-base text-zinc-300 max-w-3xl leading-relaxed">
          {data.subtitle}
        </p>
      </div>

      {/* Spreadsheet Table */}
      <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-950/80">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-zinc-900 border-b border-zinc-800 text-zinc-400 font-bold uppercase tracking-wider text-[11px]">
              <th className="py-3.5 px-4 font-extrabold text-white">O que (Ação / Entrega)</th>
              <th className="py-3.5 px-4 font-extrabold text-white">Quem (Responsável)</th>
              <th className="py-3.5 px-4 font-extrabold text-white">Quando (Prazo)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/60">
            {tasks.map((item) => (
              <tr 
                key={item.id}
                className="hover:bg-zinc-900/60 transition-colors group"
              >
                <td className="py-4 px-4 font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {item.task}
                </td>

                <td className="py-4 px-4 whitespace-nowrap text-zinc-300">
                  <div className="flex items-center gap-1.5 font-semibold">
                    <User className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{item.owner}</span>
                  </div>
                </td>

                <td className="py-4 px-4 whitespace-nowrap text-zinc-300">
                  <div className="flex items-center gap-1.5 font-mono">
                    <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{item.deadline}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
