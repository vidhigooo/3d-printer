// analytics/route.ts
// 📁 Place this at: frontend/src/app/api/analytics/route.ts
//    (create the `analytics` folder inside `src/app/api/`)
//
// Handles:
//   POST /api/analytics/track  ← called by middleware on every page visit
//   GET  /api/analytics        ← called by the dashboard to display stats

import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// Analytics data lives in the same `storage/` folder as your quotes.json
const STORAGE_DIR = path.join(process.cwd(), "storage");
const ANALYTICS_FILE = path.join(STORAGE_DIR, "analytics.json");

interface DayData {
  pageViews: number;
  uniqueVisitors: string[]; // store IPs to deduplicate
  uploads: number;
}

interface AnalyticsStore {
  days: Record<string, DayData>;
}

function getTodayKey(): string {
  return new Date().toISOString().split("T")[0]; // "2026-06-21"
}

async function readStore(): Promise<AnalyticsStore> {
  try {
    const raw = await fs.readFile(ANALYTICS_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return { days: {} };
  }
}

async function writeStore(data: AnalyticsStore): Promise<void> {
  await fs.mkdir(STORAGE_DIR, { recursive: true });
  await fs.writeFile(ANALYTICS_FILE, JSON.stringify(data, null, 2));
}

// ── POST /api/analytics/track ── (called by middleware)
export async function POST(req: NextRequest) {
  try {
    const { ip, path: visitPath } = await req.json();
    const today = getTodayKey();
    const store = await readStore();

    if (!store.days[today]) {
      store.days[today] = { pageViews: 0, uniqueVisitors: [], uploads: 0 };
    }

    store.days[today].pageViews += 1;

    if (ip && !store.days[today].uniqueVisitors.includes(ip)) {
      store.days[today].uniqueVisitors.push(ip);
    }

    // Count uploads separately if the path is the upload route
    if (visitPath === "/get-quote" || visitPath?.startsWith("/api/upload")) {
      store.days[today].uploads += 1;
    }

    await writeStore(store);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

// ── GET /api/analytics?days=30 ── (called by dashboard page)
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const daysToShow = parseInt(url.searchParams.get("days") || "30");

  const store = await readStore();
  const result = [];

  for (let i = daysToShow - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = d.toISOString().split("T")[0];
    const day = store.days[key] || { pageViews: 0, uniqueVisitors: [], uploads: 0 };

    result.push({
      date: key,
      pageViews: day.pageViews,
      uniqueVisitors: day.uniqueVisitors.length,
      uploads: day.uploads,
    });
  }

  const summary = result.reduce(
    (acc, day) => ({
      totalPageViews: acc.totalPageViews + day.pageViews,
      totalUniqueVisitors: acc.totalUniqueVisitors + day.uniqueVisitors,
      totalUploads: acc.totalUploads + day.uploads,
    }),
    { totalPageViews: 0, totalUniqueVisitors: 0, totalUploads: 0 }
  );

  return NextResponse.json({ summary, daily: result });
}