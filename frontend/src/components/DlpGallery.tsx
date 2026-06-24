"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { dlpProducts } from "@/data/dlpProducts";

export default function DlpGallery() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {dlpProducts.map((printer) => (
        <article
          key={printer.id}
          onClick={() => router.push(`/3d-printers/lcd-dlp-3d-printers/${printer.id}`)}
          className="group cursor-pointer overflow-hidden rounded-[28px] border border-border bg-white/[0.04] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-[0_0_40px_-10px_rgba(0,229,255,0.22)]"
        >
          <div className="relative aspect-[4/3] flex items-center justify-center overflow-hidden bg-slate-100 dark:bg-slate-900/50 p-8">
            <Image
              src={printer.image}
              alt={printer.name}
              width={900}
              height={675}
              className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute left-4 top-4 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-md">
              LCD / DLP
            </div>
          </div>

          <div className="space-y-5 p-7">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-foreground">{printer.name}</h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300/90">
                Resin printer showcase
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
