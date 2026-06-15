"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ArrowLeft, Gauge } from "lucide-react";
import { dlpProducts, type DLPProduct } from "@/data/dlpProducts";

export default function DlpGallery() {
  const [selectedProduct, setSelectedProduct] = useState<DLPProduct | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {dlpProducts.map((printer) => (
          <article
            key={printer.id}
            onClick={() => setSelectedProduct(printer)}
            className="group cursor-pointer overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-[0_0_40px_-10px_rgba(0,229,255,0.22)]"
          >
            <div className="relative aspect-[4/3] flex items-center justify-center overflow-hidden bg-white/5 p-8">
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
                <h3 className="text-2xl font-bold tracking-tight text-white">{printer.name}</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300/90">
                  Resin printer showcase
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {mounted && selectedProduct && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-slate-950/90 backdrop-blur-md">
          <div className="relative flex flex-col w-full max-w-7xl h-[95vh] md:h-auto md:max-h-[90vh] overflow-hidden rounded-[32px] border border-white/10 bg-slate-900 shadow-2xl">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-6 py-5">
              <button
                onClick={() => setSelectedProduct(null)}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 hover:border-cyan-500/30"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Printers
              </button>
              <h2 className="hidden md:block text-xl font-extrabold text-white truncate px-4">{selectedProduct.name}</h2>
              <button
                onClick={() => setSelectedProduct(null)}
                className="rounded-full border border-white/10 bg-white/5 p-2.5 text-white transition-colors hover:bg-white/10 hover:text-red-400 hover:border-red-400/30"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.5fr]">
                
                {/* Left Column: Image (Sticky on Desktop) */}
                <div className="flex flex-col items-center justify-center rounded-3xl bg-white/5 p-8 lg:sticky lg:top-0 h-fit border border-white/5 shadow-inner">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    width={800}
                    height={800}
                    className="w-full max-h-[500px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                  />
                </div>
                
                {/* Right Column: Details */}
                <div className="space-y-8 pb-10">
                  <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-sm">
                    {selectedProduct.name}
                  </h1>
                  
                  <div className="prose prose-invert max-w-none text-base md:text-lg leading-relaxed text-slate-300 whitespace-pre-wrap">
                    {selectedProduct.description}
                  </div>
                  
                  {selectedProduct.specs && (
                    <div className="mt-12 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 md:p-8 shadow-lg">
                      <h3 className="mb-8 text-2xl font-bold text-white flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          <Gauge className="h-5 w-5" />
                        </div>
                        Technical Specifications
                      </h3>
                      <div className="grid grid-cols-1 gap-0 divide-y divide-white/5">
                        {Object.entries(selectedProduct.specs).map(([key, value]) => (
                          <div key={key} className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr] gap-2 md:gap-6 py-4 first:pt-0 last:pb-0 text-base">
                            <span className="font-semibold text-cyan-300/90 md:text-right md:pr-4">{key}</span>
                            <span className="text-slate-200 font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
            
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
