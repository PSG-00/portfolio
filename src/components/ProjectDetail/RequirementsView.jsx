import React from 'react';
import { ClipboardList, CheckCircle2 } from 'lucide-react';

export default function RequirementsView({ requirements }) {
  if (!requirements || requirements.length === 0) return null;

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border-rose-200 dark:border-rose-800';
      case 'Medium':
        return 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800';
      default:
        return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700';
    }
  };

  return (
    <section id="spec-requirements" className="scroll-mt-24 pt-6">
      <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 shadow-sm">
        {/* 섹션 헤더 */}
        <div className="flex items-center justify-between pb-5 border-b border-slate-200/70 dark:border-slate-800 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center">
              <ClipboardList size={20} />
            </div>
            <div>
              <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                Specification
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                요구사항 정의서 (SRS)
              </h3>
            </div>
          </div>
          <span className="text-xs font-mono text-slate-400">Total {requirements.length} Items</span>
        </div>

        {/* 데스크톱 테이블 뷰 */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                <th className="py-3.5 px-3">ID</th>
                <th className="py-3.5 px-3">분류</th>
                <th className="py-3.5 px-3">요구사항명</th>
                <th className="py-3.5 px-4">상세 구현 내용</th>
                <th className="py-3.5 px-3 text-center">우선순위</th>
                <th className="py-3.5 px-3 text-center">상태</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {requirements.map((req) => (
                <tr key={req.id} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-3 font-mono font-bold text-xs text-sky-600 dark:text-sky-400 whitespace-nowrap">
                    {req.id}
                  </td>
                  <td className="py-4 px-3 whitespace-nowrap">
                    <span className="px-2 py-0.5 rounded text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {req.category}
                    </span>
                  </td>
                  <td className="py-4 px-3 font-semibold text-slate-900 dark:text-white whitespace-nowrap">
                    {req.name}
                  </td>
                  <td className="py-4 px-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed min-w-[280px]">
                    {req.description}
                  </td>
                  <td className="py-4 px-3 text-center whitespace-nowrap">
                    <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold border ${getPriorityBadge(req.priority)}`}>
                      {req.priority}
                    </span>
                  </td>
                  <td className="py-4 px-3 text-center whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 size={14} />
                      <span>{req.status}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 모바일 카드 뷰 */}
        <div className="md:hidden space-y-3">
          {requirements.map((req) => (
            <div
              key={req.id}
              className="p-4 rounded-2xl bg-slate-50/90 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-800 space-y-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-xs text-sky-600 dark:text-sky-400">
                    {req.id}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-200/80 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                    {req.category}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${getPriorityBadge(req.priority)}`}>
                    {req.priority}
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                    {req.status}
                  </span>
                </div>
              </div>

              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                {req.name}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {req.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
