import React from 'react';
import { Database, KeyRound, Link2, Table } from 'lucide-react';

export default function ErdView({ erd }) {
  if (!erd) return null;

  return (
    <section id="spec-erd" className="scroll-mt-24 pt-6">
      <div className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 shadow-sm">
        {/* 섹션 헤더 */}
        <div className="flex items-center justify-between pb-5 border-b border-slate-200/70 dark:border-slate-800 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Database size={20} />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Database Schema
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                데이터베이스 설계 (ERD)
              </h3>
            </div>
          </div>
          <span className="text-xs font-mono text-slate-400">Total {erd.tables.length} Tables</span>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6">
          {erd.description}
        </p>

        {/* 테이블 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {erd.tables.map((table, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-50/90 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-800 overflow-hidden shadow-sm"
            >
              {/* 테이블 헤더 */}
              <div className="px-4 py-3 bg-slate-100 dark:bg-slate-800/90 border-b border-slate-200/70 dark:border-slate-700/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Table size={15} className="text-emerald-500" />
                  <span className="font-mono font-bold text-sm text-slate-900 dark:text-white">
                    {table.name}
                  </span>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {table.desc}
                </span>
              </div>

              {/* 컬럼 목록 */}
              <div className="p-3 overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-200/50 dark:border-slate-700/40 text-slate-400 font-mono">
                      <th className="pb-1.5 px-2">Key</th>
                      <th className="pb-1.5 px-2">Column</th>
                      <th className="pb-1.5 px-2">Type</th>
                      <th className="pb-1.5 px-2">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-mono">
                    {table.columns.map((col, cIdx) => (
                      <tr key={cIdx} className="hover:bg-slate-100/50 dark:hover:bg-slate-800/60">
                        <td className="py-2 px-2 whitespace-nowrap">
                          {col.key === 'PK' && (
                            <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                              <KeyRound size={10} /> PK
                            </span>
                          )}
                          {col.key === 'FK' && (
                            <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-bold bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300">
                              <Link2 size={10} /> FK
                            </span>
                          )}
                        </td>
                        <td className="py-2 px-2 font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap">
                          {col.name}
                        </td>
                        <td className="py-2 px-2 text-indigo-600 dark:text-indigo-400 whitespace-nowrap">
                          {col.type}
                        </td>
                        <td className="py-2 px-2 font-sans text-slate-600 dark:text-slate-400 text-[11px]">
                          {col.desc}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 테이블 관계도 (Relations) 요약 */}
        {erd.relations && erd.relations.length > 0 && (
          <div className="mt-6 p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/70 dark:border-emerald-800/40">
            <h4 className="text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Link2 size={14} />
              <span>테이블 관계도 (Entity Relations)</span>
            </h4>
            <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300 font-mono">
              {erd.relations.map((rel, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>{rel}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
