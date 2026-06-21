// middleware.ts
// 📁 Place this at: frontend/src/middleware.ts
// (same level as the `app` folder, inside `src/`)
//
// This runs on EVERY page visit and records it to your analytics store.

import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Only track real page visits — skip API routes, static files, images
  const isPage =
    !pathname.startsWith("/api/") &&
    !pathname.startsWith("/_next/") &&
    !pathname.startsWith("/favicon") &&
    !pathname.match(/\.(png|jpg|jpeg|svg|ico|webp|css|js|woff|woff2)$/);

  if (isPage) {
    // Fire-and-forget: call our own analytics API route
    const trackUrl = new URL("/api/analytics/track", req.url);
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    // Use fetch with keepalive so it doesn't block the response
    fetch(trackUrl.toString(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ip, path: pathname }),
    }).catch(() => {}); // Never crash on analytics failure
  }

  return NextResponse.next();
}

export const config = {
  // Match all routes except Next.js internals
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};