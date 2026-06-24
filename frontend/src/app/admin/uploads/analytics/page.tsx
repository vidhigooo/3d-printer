"use client";
// 📁 Place this at: frontend/src/app/admin/analytics/page.tsx
//    (create the `analytics` folder inside `src/app/admin/`)

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Users, Eye, Upload, TrendingUp, TrendingDown } from "lucide-react";

interface DayData {
  date: string;
  pageViews: number;
  uniqueVisitors: number;
  uploads: number;
}

interface Summary {
  totalPageViews: number;
  totalUniqueVisitors: number;
  totalUploads: number;
}

// ── Sparkline mini chart ──────────────────────────────────────────────
function Sparkline({ data, color }: { data: number[]; color: string }) {
  if (!data.length) return null;
  const max = Math.max(...data, 1);
  const w = 80, h = 28;
  const points = data
    .map((v, i) => `${(i / (data.length - 1)) * w},${h - (v / max) * h}`)
    .join(" ");
  return (
    <svg width={w} height={h}>
      <polyline points={points} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Stat card (matches your existing dark slate theme) ────────────────
function StatCard({
  label, value, icon: Icon, color, sparkData, trend,
}: {
  label: string; value: number; icon: any; color: string; sparkData: number[]; trend: number | null;
}) {
  const isDown = trend !== null && trend < 0;
  return (
    <div className="bg-card/60 border border-slate-700/50 rounded-2xl p-5 flex flex-col gap-3 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">{label}</span>
        <Icon className="w-4 h-4" style={{ color }} />
      </div>
      <div className="flex items-end justify-between">
        <div>
          <div className="text-3xl font-extrabold text-foreground">{value.toLocaleString()}</div>
          {trend !== null && (
            <div className={`flex items-center gap-1 text-xs font-semibold mt-1 ${isDown ? "text-red-400" : "text-emerald-400"}`}>
              {isDown ? <TrendingDown className="w-3 h-3" /> : <TrendingUp className="w-3 h-3" />}
              {Math.abs(trend)}% vs prev period
            </div>
          )}
        </div>
        <Sparkline data={sparkData} color={color} />
      </div>
    </div>
  );
}

// ── Main dashboard ────────────────────────────────────────────────────
export default function AnalyticsDashboard() {
  const [daily, setDaily] = useState<DayData[]>([]);
  const [summary, setSummary] = useState<Summary | null>(null);
  const [range, setRange] = useState(30);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/analytics?days=${range}`)
      .then((r) => r.json())
      .then((d) => { setDaily(d.daily); setSummary(d.summary); setLoading(false); })
      .catch(() => setLoading(false));
  }, [range]);

  // % change: compare recent half vs older half
  const pct = (key: keyof DayData) => {
    if (!daily.length) return null;
    const half = Math.floor(daily.length / 2);
    const recent = daily.slice(half).reduce((a, d) => a + (d[key] as number), 0);
    const prev = daily.slice(0, half).reduce((a, d) => a + (d[key] as number), 0);
    if (prev === 0) return null;
    return Math.round(((recent - prev) / prev) * 100);
  };

  const maxVisitors = Math.max(...daily.map((d) => d.uniqueVisitors), 1);

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-20 px-6 selection:bg-cyan-500/30">
      {/* Background gradients — same as your admin/uploads page */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950 z-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <Link href="/admin/uploads" className="inline-flex items-center text-slate-700 dark:text-slate-300 hover:text-cyan-400 transition-colors mb-4 text-sm font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Quote Dashboard
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-2">
              Site{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Analytics
              </span>
            </h1>
            <p className="text-lg text-slate-700 dark:text-slate-300">Visitor traffic and engagement for the last {range} days.</p>
          </div>

          {/* Range toggle */}
          <div className="flex gap-2">
            {[7, 30, 90].map((d) => (
              <button
                key={d}
                onClick={() => setRange(d)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                  range === d
                    ? "bg-cyan-500 border-cyan-500 text-slate-950"
                    : "border-slate-600 text-slate-700 dark:text-slate-300 hover:border-cyan-500 hover:text-cyan-400"
                }`}
              >
                {d}d
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="text-center text-slate-500 py-20 text-lg">Loading analytics…</div>
        ) : (
          <>
            {/* Stat cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <StatCard
                label="Unique Visitors"
                value={summary?.totalUniqueVisitors ?? 0}
                icon={Users}
                color="#22d3ee"
                sparkData={daily.map((d) => d.uniqueVisitors)}
                trend={pct("uniqueVisitors")}
              />
              <StatCard
                label="Page Views"
                value={summary?.totalPageViews ?? 0}
                icon={Eye}
                color="#818cf8"
                sparkData={daily.map((d) => d.pageViews)}
                trend={pct("pageViews")}
              />
              <StatCard
                label="Quote Requests"
                value={summary?.totalUploads ?? 0}
                icon={Upload}
                color="#34d399"
                sparkData={daily.map((d) => d.uploads)}
                trend={pct("uploads")}
              />
            </div>

            {/* Daily visitors bar chart */}
            <div className="bg-card/60 border border-slate-700/50 rounded-2xl p-6 mb-6 backdrop-blur-sm">
              <h3 className="text-base font-semibold text-foreground mb-5">Daily Unique Visitors</h3>
              <div className="flex items-end gap-1" style={{ height: 120 }}>
                {daily.map((day) => {
                  const barH = Math.max(3, (day.uniqueVisitors / maxVisitors) * 112);
                  return (
                    <div key={day.date} className="group flex flex-col items-center flex-1 min-w-0 relative">
                      {/* Tooltip */}
                      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-slate-100 dark:bg-slate-900 text-cyan-400 text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                        {day.date}<br />{day.uniqueVisitors} visitors
                      </div>
                      <div
                        className="w-full rounded-t bg-cyan-500/70 group-hover:bg-cyan-400 transition-colors"
                        style={{ height: barH }}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-between mt-3 text-xs text-slate-500">
                <span>{daily[0]?.date}</span>
                <span>{daily[daily.length - 1]?.date}</span>
              </div>
            </div>

            {/* Recent days table */}
            <div className="bg-card/60 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-base font-semibold text-foreground mb-5">Recent Activity</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      {["Date", "Unique Visitors", "Page Views", "Quote Requests"].map((h) => (
                        <th key={h} className="text-left py-3 px-4 text-slate-700 dark:text-slate-300 font-semibold">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[...daily].reverse().slice(0, 14).map((day, i) => (
                      <tr key={day.date} className={i % 2 === 0 ? "bg-slate-100 dark:bg-slate-900/30" : ""}>
                        <td className="py-3 px-4 text-slate-700 dark:text-slate-300">{day.date}</td>
                        <td className="py-3 px-4 font-bold text-cyan-400">{day.uniqueVisitors}</td>
                        <td className="py-3 px-4 text-slate-700 dark:text-slate-300">{day.pageViews}</td>
                        <td className="py-3 px-4 text-slate-700 dark:text-slate-300">{day.uploads}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
