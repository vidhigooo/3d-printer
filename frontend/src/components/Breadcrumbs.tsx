"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs() {
  const pathname = usePathname();

  if (!pathname || pathname === "/") {
    return null;
  }

  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  return (
    <div className="w-full bg-background border-b border-border/50 py-3">
      <div className="container mx-auto px-6">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-800 dark:text-slate-300">
            <li>
              <Link href="/" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
            </li>
            
            {pathSegments.map((segment, index) => {
              const href = "/" + pathSegments.slice(0, index + 1).join("/");
              const isLast = index === pathSegments.length - 1;
              const formattedSegment = segment
                .replace(/-/g, " ")
                .replace(/\b\w/g, (char) => char.toUpperCase());

              return (
                <li key={href} className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                  {isLast ? (
                    <span className="font-medium text-black dark:text-white" aria-current="page">
                      {formattedSegment}
                    </span>
                  ) : (
                    <Link href={href} className="hover:text-primary transition-colors">
                      {formattedSegment}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}
