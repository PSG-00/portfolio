import React from 'react';
import { Award, TrendingUp, CheckCircle } from 'lucide-react';

export default function ResultImpactView({ actNumber, category, result }) {
  if (!result) return null;

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 shadow-sm print:border print:border-slate-300 print:shadow-none print:p-6 mb-8">
      {/* 1. 상단 헤더 영역 */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-5 border-b border-slate-200/70 dark:border-slate-800 print:border-slate-300">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
          <span>{actNumber}</span>
          <span className="text-slate-300 dark:text-slate-700">|</span>
          <span>RESULT & IMPACT</span>
        </div>
        <div className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 print:bg-slate-100">
          {category}
        </div>
      </div>

      {/* 2. 중단 시각 자료: K6 벤치마크 2분할 비교 또는 풀 와이드 비주얼 */}
      <div className="mt-6">
        {result.benchmarkImages?.length > 0 ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-black text-sky-600 dark:text-sky-400 uppercase tracking-widest mb-3">
              <TrendingUp size={15} />
              <span>K6 LOAD TEST REAL-BENCHMARK (실측 결과 증빙)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {result.benchmarkImages.map((img, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-950 p-2 shadow-md group"
                >
                  <div className="px-3 py-2 flex items-center justify-between text-xs font-mono text-slate-300 border-b border-slate-800/80">
                    <span className="font-bold text-sky-400">{img.title}</span>
                    <span className="text-[11px] text-slate-400">{img.desc}</span>
                  </div>
                  <div className="relative overflow-hidden rounded-xl mt-1">
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          result.image && (
            <div className="rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 max-h-80 shadow-md">
              <img
                src={result.image}
                alt={result.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          )
        )}
      </div>

      {/* 3. 하단 2분할 레이아웃: 요약 서술 & 굵직한 메트릭 카드 스택 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-center pt-6 border-t border-slate-200/70 dark:border-slate-800 print:border-slate-300">
        {/* 좌측 총평 서술 */}
        <div className="lg:col-span-6 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-600 dark:text-sky-400 uppercase">
            <Award size={16} />
            <span>Outcomes & Architecture Evaluation</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            {result.title}
          </h4>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {result.summary}
          </p>
        </div>

        {/* 우측 핵심 메트릭 카드 스택 (레퍼런스 3 스타일) */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {result.metrics?.map((metric, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border-2 border-slate-900 dark:border-slate-200 shadow-[4px_4px_0px_0px_rgba(2,132,199,1)] hover:shadow-[6px_6px_0px_0px_rgba(2,132,199,1)] transition-all flex flex-col justify-between print:shadow-none print:border-slate-400"
            >
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                  {metric.label}
                </span>
                <p className="text-[11px] text-slate-400 dark:text-slate-500 leading-tight">
                  {metric.desc}
                </p>
              </div>
              <div className="mt-3 text-right">
                <span className="text-2xl sm:text-3xl font-black font-mono text-sky-600 dark:text-sky-400 tracking-tight">
                  {metric.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
