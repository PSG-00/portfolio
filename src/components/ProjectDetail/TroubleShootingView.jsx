import React from 'react';
import { Wrench, AlertCircle, HelpCircle, CheckCircle, TrendingUp } from 'lucide-react';

export default function TroubleShootingView({ troubleshooting }) {
  if (!troubleshooting || troubleshooting.length === 0) return null;

  return (
    <section id="spec-troubleshooting" className="scroll-mt-24 pt-6">
      <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 shadow-sm">
        {/* 섹션 헤더 */}
        <div className="flex items-center justify-between pb-5 border-b border-slate-200/70 dark:border-slate-800 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center">
              <Wrench size={20} />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">
                Engineering Challenges
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                트러블슈팅 & 기술적 문제 해결
              </h3>
            </div>
          </div>
          <span className="text-xs font-mono text-slate-400">Total {troubleshooting.length} Cases</span>
        </div>

        {/* 트러블슈팅 카드 목록 */}
        <div className="space-y-6">
          {troubleshooting.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-50/90 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-800 space-y-4"
            >
              {/* 타이틀 */}
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300">
                  CASE {String(index + 1).padStart(2, '0')}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h4>
              </div>

              {/* 4단계 구조화 그리드 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                {/* 1. 문제 현상 */}
                <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60">
                  <div className="flex items-center gap-1.5 text-rose-600 dark:text-rose-400 font-bold mb-1.5">
                    <AlertCircle size={15} />
                    <span>문제 상황 (Issue)</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                    {item.problem}
                  </p>
                </div>

                {/* 2. 근본 원인 */}
                <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60">
                  <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-bold mb-1.5">
                    <HelpCircle size={15} />
                    <span>원인 분석 (Cause)</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                    {item.cause}
                  </p>
                </div>

                {/* 3. 해결 방법 */}
                <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60">
                  <div className="flex items-center gap-1.5 text-sky-600 dark:text-sky-400 font-bold mb-1.5">
                    <CheckCircle size={15} />
                    <span>해결 방안 (Solution)</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                    {item.solution}
                  </p>
                </div>

                {/* 4. 최종 성과 */}
                <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/70 dark:border-emerald-800/60">
                  <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-300 font-bold mb-1.5">
                    <TrendingUp size={15} />
                    <span>정량적 개선 결과 (Outcome)</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-200 font-semibold leading-relaxed text-xs">
                    {item.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
