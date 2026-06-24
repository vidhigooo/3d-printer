"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Printer = {
  name: string;
  series: string;
  highlight: string;
  details: string;
  image: string;
};

const printers: Printer[] = [
  {
    name: "Smart SLA",
    series: "Series 300H and 400H",
    highlight: "Small Budget, Small Build",
    details: "Automatic, Powerful, Small and Affordable",
    image: "/smart_sla.png",
  },
  {
    name: "Mars PRO SLA",
    series: "Series 600, 850 and 1600",
    highlight: "Large Format, Suitable for Dental and Engineering",
    details: "Efficient, High Performance, Reliable and Durable",
    image: "/smart_pro_sla.png",
  },
];

export default function OurPrinters() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePrinter = printers[activeIndex];

  const showPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? printers.length - 1 : prev - 1));
  };

  const showNext = () => {
    setActiveIndex((prev) => (prev === printers.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-card-foreground mb-8 underline underline-offset-8 decoration-2">
            Our Printers
          </h2>

          <article
            className="overflow-hidden rounded-2xl border border-primary/20 bg-card/90 shadow-[0_0_28px_rgba(0,229,255,0.08)]"
            onMouseEnter={() => setActiveIndex(1)}
            onMouseLeave={() => setActiveIndex(0)}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-[290px] md:h-[410px] bg-[#f4f4f5]">
                <Image
                  src={activePrinter.image}
                  alt={activePrinter.name}
                  fill
                  className="object-contain p-5 md:p-8 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              <div className="px-6 py-7 md:px-8 md:py-9 text-foreground flex flex-col bg-gradient-to-br from-[#0f1f38] via-[#163254] to-[#1a4470]">
                <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  {activePrinter.name}
                </h3>
                <p className="text-xl md:text-2xl font-medium text-foreground/95 mb-3">
                  {activePrinter.series}
                </p>
                <p className="text-base md:text-lg uppercase tracking-[0.09em] font-semibold mb-4 text-cyan-100/95">
                  {activePrinter.highlight}
                </p>
                <p className="text-xl md:text-2xl text-foreground/95 mb-7 max-w-[24ch] leading-relaxed">
                  {activePrinter.details}
                </p>

                <div className="flex items-center justify-between mt-auto gap-3">
                  <Link
                    href="/3d-printers/sla-3d-printer"
                    className="inline-flex items-center justify-center rounded-md bg-cyan-400 text-slate-950 px-4 py-2 text-sm font-semibold transition-colors hover:bg-cyan-300"
                  >
                    Learn More
                  </Link>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={showPrevious}
                      aria-label="Show previous printer"
                      className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-white/30 text-foreground hover:bg-slate-100 dark:bg-slate-900 transition-colors"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={showNext}
                      aria-label="Show next printer"
                      className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-white/30 text-foreground hover:bg-slate-100 dark:bg-slate-900 transition-colors"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 py-4 bg-card border-t border-border/70">
              {printers.map((printer, idx) => (
                <button
                  key={printer.name}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeIndex === idx ? "w-7 bg-primary" : "w-2.5 bg-slate-100 dark:bg-slate-900-foreground/40 hover:bg-slate-100 dark:bg-slate-900-foreground/70"
                  }`}
                  aria-label={`Show ${printer.name}`}
                />
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}