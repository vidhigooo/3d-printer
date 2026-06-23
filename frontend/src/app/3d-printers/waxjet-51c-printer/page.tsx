import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Cpu, Layers3, Settings2, ShieldCheck, Sparkles, Zap } from "lucide-react";
import FAQ from "@/components/FAQ";

const faqItems = [
  {
    question: "What makes the WaxJet WJ51C ideal for jewelry manufacturing?",
    answer: "It produces highly detailed wax patterns with exceptional accuracy (15 μm layer thickness) and a smooth surface finish, perfect for investment casting."
  },
  {
    question: "What printing technology does the WJ51C use?",
    answer: "It is powered by advanced MultiJet Printing (MJP) technology, which enables high-resolution (2900 × 2900 × 1700 DPI) wax 3D printing."
  },
  {
    question: "What materials does it use?",
    answer: "It uses FFWJ1200 Red Wax as the high-performance model material and FFMS3200 White Wax as a specialized support material."
  },
  {
    question: "How large is the build volume?",
    answer: "The build volume is 235 × 138 × 100 mm, allowing for multiple patterns to be printed efficiently in small batches."
  }
];

export const metadata: Metadata = {
  title: "Flashforge WJ51C - Desktop MJP Wax 3D Printer | VEKTOR3D SYSTEMS",
  description: "High-Precision Wax Printing for Jewelry Manufacturing. Compact Design. Precision Performance.",
};

const materials = [
  {
    name: "FFWJ1200 Red Wax",
    subtitle: "High-Performance Model Material",
    image: "/waxjet-51c/red-wax.webp",
    bullets: [
      "Produces detailed, casting-ready wax patterns",
      "Excellent surface quality",
      "High dimensional accuracy"
    ],
  },
  {
    name: "FFMS3200 White Wax",
    subtitle: "Specialized Support Material",
    image: "/waxjet-51c/white-wax.webp",
    bullets: [
      "Enables complex geometries and intricate details",
      "Easy support removal process",
      "Leaves smooth surfaces"
    ],
  }
];

const features = [
  {
    title: "15 μm Layer Thickness",
    icon: Sparkles,
    description: "Exceptional detail retention for intricate jewelry designs and precision casting.",
  },
  {
    title: "±0.04 mm Dimensional Accuracy",
    icon: ShieldCheck,
    description: "Highly accurate dimensional tolerances for perfectly fitting assemblies.",
  },
  {
    title: "2900×2900×1700 DPI",
    icon: Zap,
    description: "High resolution printing that captures the finest micro-features flawlessly.",
  },
  {
    title: "Compact & Efficient",
    icon: Settings2,
    description: "Desktop footprint with efficient wax management and reliable production capability.",
  },
];

const specs = [
  ["Printing Technology", "MultiJet Printing (MJP)"],
  ["Model Material", "FFWJ1200 Red Wax"],
  ["Support Material", "FFMS3200 White Wax"],
  ["Build Volume", "235 × 138 × 100 mm"],
  ["Print Resolution", "2900 × 2900 × 1700 DPI"],
  ["Layer Thickness", "15 μm"],
  ["Dimensional Accuracy", "±0.04 mm / 20 mm"],
  ["Print Speed", "Up to 7 mm/hr"],
  ["Material Utilization", "≥57%"],
  ["File Formats", "STL, SLC"],
  ["Display", "13-inch HD Touchscreen"],
  ["Machine Dimensions", "865 × 510 × 654 mm"],
];

const quotePoints = [
  "Jewelry Manufacturing",
  "Investment Casting",
  "Rapid Prototyping",
  "Small Batch & Custom Production"
];

const applications = [
  {
    title: "Ring Wax Model",
    image: "/waxjet-51c/ring.jpeg"
  },
  {
    title: "Investment Casting",
    image: "/waxjet-51c/investment.jpeg"
  },
  {
    title: "Rapid Prototyping",
    image: "/waxjet-51c/rapid.jpeg"
  },
  {
    title: "Small Batch Production",
    image: "/waxjet-51c/small-batch.jpeg"
  }
];

function SectionHeading({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
          <span className="h-2 w-2 rounded-full bg-sky-400" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">{title}</h2>
      {text && <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">{text}</p>}
    </div>
  );
}

export default function Waxjet51cPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-slate-200 selection:bg-sky-500/30">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute left-[-10%] top-[-10%] h-[520px] w-[520px] rounded-full bg-sky-600/10 blur-[160px]" />
        <div className="absolute right-[-10%] top-[12%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[170px]" />
        <div className="absolute bottom-[-10%] left-[20%] h-[420px] w-[420px] rounded-full bg-cyan-600/10 blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,#000_70%,transparent_100%)]" />
      </div>

      <main className="relative z-10">
        <section className="relative border-b border-white/5 px-6 pb-20 pt-36 md:pb-28 md:pt-44">
          <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Wax 3D Printer
              </div>
              <div className="space-y-6">
                <h1 className="max-w-3xl text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.18)] md:text-6xl lg:text-7xl">
                  Flashforge WJ51C
                </h1>
                <h2 className="text-2xl font-semibold text-cyan-300">Desktop MJP Wax 3D Printer</h2>
                <p className="max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
                  High-Precision Wax Printing for Jewelry Manufacturing. Compact Design. Precision Performance.
                </p>
                <p className="max-w-2xl text-base leading-relaxed text-slate-400">
                  The WaxJet WJ51C is a desktop wax 3D printer engineered for jewelry manufacturing and investment casting applications. Powered by advanced MultiJet Printing technology, it produces highly detailed wax patterns with exceptional accuracy and smooth surface finish.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/get-quote"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-transparent bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 px-8 text-base font-bold text-white shadow-[0_0_25px_rgba(14,165,233,0.2)] transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(14,165,233,0.3)]"
                >
                  Get Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="flex flex-wrap gap-3 text-sm text-slate-300">
                {quotePoints.map((point) => (
                  <div key={point} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    <CheckCircle2 className="h-4 w-4 text-sky-400" />
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-tr from-sky-500/20 via-transparent to-blue-500/20 blur-[70px]" />
              <div className="relative w-full max-w-2xl overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(0,229,255,0.14)] p-8">
                <Image
                  src="/waxjet-51c/hero.jpeg"
                  alt="Flashforge WJ51C Wax 3D Printer"
                  width={800}
                  height={600}
                  className="h-full w-full object-contain hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/5 px-6 py-24 bg-white/[0.02]">
          <div className="container mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Applications"
              title="Produce high-quality wax patterns"
              text="Efficiently output short-run manufacturing and custom orders."
            />
            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {applications.map((app) => (
                <div key={app.title} className="group overflow-hidden rounded-[24px] border border-white/10 bg-slate-900/60 transition-all duration-500 hover:-translate-y-2 hover:border-sky-500/30 hover:shadow-[0_0_40px_-10px_rgba(14,165,233,0.22)]">
                  <div className="relative aspect-square">
                    <Image
                      src={app.image}
                      alt={app.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="text-lg font-bold text-white">{app.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/5 bg-slate-950 px-6 py-24">
          <div className="container mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Key Features"
              title="Engineered for Precision"
            />
            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-[24px] border border-white/10 bg-slate-900/60 p-6 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-sky-500/30 hover:bg-slate-900"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-500/20 bg-sky-500/10 text-sky-300">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/5 px-6 py-24 bg-white/[0.02]">
          <div className="container mx-auto max-w-7xl">
            <SectionHeading title="Explore Material Options" eyebrow="Materials" />
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              {materials.map((material) => (
                <article
                  key={material.name}
                  className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-sky-500/30 hover:shadow-[0_0_40px_-10px_rgba(14,165,233,0.22)] flex flex-col md:flex-row items-center"
                >
                  <div className="relative w-full md:w-2/5 aspect-square bg-slate-900/70 p-6 flex items-center justify-center">
                    <Image
                      src={material.image}
                      width={400}
                      height={400}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                      alt={material.name}
                    />
                  </div>
                  <div className="space-y-4 p-7 w-full md:w-3/5">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-white">{material.name}</h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/90">{material.subtitle}</p>
                    </div>

                    <ul className="space-y-2 text-sm text-slate-300">
                      {material.bullets.map((bullet) => (
                         <li key={bullet} className="flex items-start gap-3">
                           <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                           <span>{bullet}</span>
                         </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/5 px-6 py-24">
          <div className="container mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Technical Specs"
              title="Compare Technical Specifications"
            />
            <div className="mt-16 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {specs.map(([label, value], index) => (
                  <div
                    key={label}
                    className={`flex items-center justify-between gap-4 border-b border-white/10 px-6 py-5 ${index % 2 === 0 ? "md:border-r" : ""} ${index >= specs.length - 2 ? "border-b-0" : ""}`}
                  >
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="h-5 w-5 text-cyan-400" />
                      <span className="font-semibold text-white">{label}</span>
                    </div>
                    <span className="max-w-[55%] text-right text-sm text-slate-400">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="container mx-auto max-w-5xl text-center">
            <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-white/[0.04] to-fuchsia-500/10 px-6 py-14 shadow-2xl md:px-12 md:py-16">
              <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
                Ready to Elevate Your Jewelry Production?
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-400 md:text-lg">
                Experience precision wax printing with the WaxJet WJ51C and bring exceptional accuracy to your casting workflow.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/get-quote"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 px-8 text-base font-bold text-white shadow-[0_0_25px_rgba(14,165,233,0.2)] transition-all hover:scale-[1.02]"
                >
                  Request Quote
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 text-base font-bold text-white transition-all hover:border-sky-500/30 hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQ title="Frequently Asked Questions Wax Printers" items={faqItems} />
      </main>
    </div>
  );
}
