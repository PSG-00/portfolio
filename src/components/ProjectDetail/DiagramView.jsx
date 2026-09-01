import React from 'react';
import { GitGraph, ArrowRight, ArrowDown, Cpu, Layers } from 'lucide-react';

export default function DiagramView({ diagram }) {
  if (!diagram) return null;

  return (
    <section id="spec-diagram" className="scroll-mt-24 pt-6">
      <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 shadow-sm">
        {/* 섹션 헤더 */}
        <div className="flex items-center justify-between pb-5 border-b border-slate-200/70 dark:border-slate-800 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <GitGraph size={20} />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                System Architecture
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                기능 다이어그램 & 데이터 파이프라인
              </h3>
            </div>
          </div>
          <span className="text-xs font-mono text-slate-400">{diagram.steps.length} Steps Pipeline</span>
        </div>

        <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-6 flex items-center gap-2">
          <Layers size={16} className="text-indigo-500" />
          <span>{diagram.title}</span>
        </p>

        {/* 파이프라인 스텝 카드 리스트 */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 relative">
          {diagram.steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="relative flex flex-col justify-between p-5 rounded-2xl bg-slate-50/90 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all hover:-translate-y-1 shadow-sm">
                <div>
                  {/* 스텝 번호 뱃지 */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-mono font-black text-xs flex items-center justify-center shadow-sm shadow-indigo-500/30">
                      {step.step}
                    </span>
                    <span className="text-[11px] font-mono font-semibold text-slate-400">
                      Phase {step.step}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* 하단 기술 스택 태그 */}
                <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800">
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
                    <Cpu size={12} />
                    <span className="font-mono">{step.tech}</span>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
