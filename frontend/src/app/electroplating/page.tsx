import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import FAQ from "@/components/FAQ";

const faqItems = [
  {
    question: "What is electroplating?",
    answer: "Electroplating is a surface finishing process that deposits a thin metal coating onto an object to enhance its appearance, durability, and performance."
  },
  {
    question: "Which metal finishes do you offer?",
    answer: "We offer a variety of finishes, including chrome, gold, and silver decorative or functional metal coatings based on project requirements."
  },
  {
    question: "Can 3D printed parts be electroplated?",
    answer: "Yes, properly prepared 3D printed parts can be electroplated to achieve a premium metallic appearance and improved surface properties."
  },
  {
    question: "What are the benefits of electroplating?",
    answer: "Electroplating improves surface finish, corrosion resistance, wear resistance, conductivity, and overall product aesthetics."
  },
  {
    question: "Which industries use electroplating services?",
    answer: "Electroplating is widely used in automotive, electronics, aerospace, consumer products, jewelry, and industrial manufacturing applications."
  },
  {
    question: "Can electroplating be used for decorative and functional applications?",
    answer: "Yes, electroplating is suitable for both decorative finishes and performance-enhancing industrial applications."
  },
  {
    question: "Do you provide custom finishing solutions?",
    answer: "Yes, we offer customized electroplating and finishing solutions tailored to specific project requirements."
  },
  {
    question: "How can I get a quote for electroplating services?",
    answer: "Simply share your part details, dimensions, quantity, and finishing requirements, and our team will provide a customized quotation."
  }
];

export const metadata: Metadata = {
  title: "Electroplating | VEKTOR3D SYSTEMS",
  description:
    "Precision electroplating services for sculptures, figurines, display models, and custom components.",
};

const finishOptions = [
  { title: "Blue Chrome Plating", desc: "Premium decorative finish" },
  { title: "Silver Plating", desc: "Clean reflective surface" },
  { title: "Chrome Plating", desc: "High-gloss industrial look" },
];

const applications = ["Sculptures", "Figurines", "Display Models", "Product Components"];

const processSteps = ["Surface Preparation", "Base Coating", "Electroplating", "Polishing", "Quality Check"];

export default function ElectroplatingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 overflow-hidden relative selection:bg-cyan-500/30">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-cyan-600/10 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 px-6 z-10 border-b border-white/5">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-semibold tracking-wide uppercase shadow-[0_0_15px_rgba(6,182,212,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              Surface Finishing
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.18)]">
                ELECTROPLATING
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-slate-300 max-w-2xl">
                Precision coating solutions for sculptures, figurines, and custom components.
              </p>
            </div>

            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl">
              We provide precision electroplating services that enhance the aesthetics, durability, and surface quality of your creations.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/contact-us"
                className="relative inline-flex h-14 overflow-hidden rounded-xl p-[1px] focus:outline-none group"
              >
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#60a5fa_50%,#06b6d4_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-8 py-1 text-base font-bold text-white backdrop-blur-3xl transition-all group-hover:bg-slate-900 shadow-[0_0_25px_rgba(6,182,212,0.2)]">
                  Discuss Your Surface Finishing Project
                </span>
              </Link>

              <Link
                href="/get-quote"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-1 text-base font-bold text-white transition-all hover:bg-white/10 hover:border-white/20"
              >
                Request Custom Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative w-full aspect-square lg:aspect-[4/3] rounded-[24px] bg-black/40 backdrop-blur-xl border border-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.12)] flex items-center justify-center p-3 group hover:border-cyan-400/50 transition-colors duration-500 mt-10 lg:mt-0 overflow-hidden">
            <div className="absolute inset-0 bg-cyan-500/20 blur-[80px] rounded-full scale-75 group-hover:bg-cyan-400/30 transition-all duration-700" />
            <div className="relative z-10 w-full h-full rounded-[20px] bg-slate-900/85 border border-white/5 overflow-hidden shadow-inner p-4 md:p-6 flex flex-col">
              <div className="flex-1 min-h-0 rounded-[18px] overflow-hidden bg-slate-950/70 border border-white/10 flex items-center justify-center">
                <img
                  src="/electroplating.png"
                  alt="Electroplated reflective finish"
                  className="w-full h-full object-contain object-center p-2 md:p-4 transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 mix-blend-screen" />
              </div>
              <div className="mt-4 flex items-center justify-between gap-4 px-1">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/80">High-end close-up</p>
                  <p className="mt-2 text-lg md:text-xl font-semibold text-white">Blue chrome reflective surface</p>
                </div>
                <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200 backdrop-blur-md whitespace-nowrap">
                  Dark premium look
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 z-10 bg-slate-900/20 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Short Intro</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full mx-auto" />
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium pt-4">
            We provide precision electroplating services that enhance the aesthetics, durability, and surface quality of your creations.
          </p>
        </div>
      </section>

      <section className="relative py-24 z-10 border-b border-white/5">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Finish Options</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {finishOptions.map((item) => (
              <div key={item.title} className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-2 shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                  <Sparkles className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 z-10 bg-slate-900/20 border-y border-white/5">
        <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">Applications</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full" />
            </div>

            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              Electroplating is well suited for decorative and functional surface finishing across artistic and product-driven work.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {applications.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-300 text-base font-medium p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors group">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-square lg:aspect-[4/3] rounded-[24px] bg-slate-900/50 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(6,182,212,0.1)] flex items-center justify-center p-2 group hover:border-cyan-500/40 transition-all duration-700 hover:-translate-y-2 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-blue-400/10 blur-[50px] rounded-full scale-75 group-hover:scale-100 transition-all duration-700 opacity-60" />
            <div className="w-full h-full rounded-[20px] bg-slate-900/80 border border-white/5 relative overflow-hidden shadow-inner">
              <img
                src="/electroplating2.png"
                alt="Electroplating surface detail"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 mix-blend-screen" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-4">
                <span className="text-xs uppercase tracking-[0.3em] text-slate-200/80">Reflective finish showcase</span>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-100 backdrop-blur-md">Metallic detailing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 z-10 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Process</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full mx-auto" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative max-w-6xl mx-auto">
            <div className="hidden md:block absolute top-8 left-[10%] w-[80%] h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

            {processSteps.map((step, index) => (
              <div key={step} className="relative z-10 flex flex-col items-center gap-4 w-full md:w-auto group">
                <div className="w-16 h-16 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-xl font-bold text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.05)] group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] group-hover:-translate-y-1 transition-all duration-300">
                  {index + 1}
                </div>
                <span className="font-bold text-slate-300 text-center whitespace-nowrap group-hover:text-cyan-300 transition-colors">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28 z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900/20" />
        <div className="container mx-auto max-w-4xl px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Discuss Your Surface Finishing Project
          </h2>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
            Request a custom quote for electroplating on sculptures, figurines, display models, and custom components.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-quote" className="relative inline-flex h-14 overflow-hidden rounded-xl p-[1px] focus:outline-none group">
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#60a5fa_50%,#06b6d4_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-10 py-1 text-lg font-bold text-white backdrop-blur-3xl transition-all group-hover:bg-slate-900 shadow-[0_0_25px_rgba(6,182,212,0.2)]">
                Request Custom Quote
              </span>
            </Link>
            <Link href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-10 py-1 text-lg font-bold text-white transition-all hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Discuss Your Surface Finishing Project
            </Link>
          </div>
        </div>
      </section>

      <FAQ title="Frequently Asked Questions Electroplating" items={faqItems} />
    </div>
  );
}
