import type { Metadata } from "next";
import Link from "next/link";
import { PenTool, Lightbulb, Sparkles, Layers, ImageIcon, Paintbrush, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Shilp Studio | Sculptural Design & Surface Finish",
  description: "We transform concepts into refined sculptural forms through design development, detailing, and surface finishing.",
};

export default function ShilpStudioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative selection:bg-purple-500/30">
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-orange-600/10 blur-[150px]" />
        <div className="absolute top-[40%] left-[30%] h-[400px] w-[400px] rounded-full bg-cyan-600/5 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Hero / Intro Section */}
      <section className="relative pt-8 pb-20 md:pt-16 md:pb-28 px-6 z-10 border-b border-border/50">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-semibold tracking-wide uppercase">
              <Sparkles className="w-4 h-4" /> Sculptural Design
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              SHILP STUDIO
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300">
              Sculptural Design & Surface Finish
            </h2>
            
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-xl">
              We transform concepts into refined sculptural forms through design development, detailing, and surface finishing to achieve a clean and presentation-ready result.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <Link href="/contact-us" className="relative inline-flex h-14 overflow-hidden rounded-xl p-[1px] focus:outline-none group">
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a855f7_0%,#f97316_50%,#a855f7_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-background px-8 py-1 text-base font-bold text-foreground backdrop-blur-3xl transition-all group-hover:bg-card shadow-[0_0_25px_rgba(168,85,247,0.2)]">
                  Discuss Your Project
                </span>
              </Link>
              
              <Link href="/get-quote" className="inline-flex h-14 items-center justify-center rounded-xl border border-border bg-slate-100 dark:bg-slate-900/50 px-8 py-1 text-base font-bold text-foreground transition-all hover:bg-slate-100 dark:bg-slate-900 hover:border-border/80">
                Get Quote
              </Link>
            </div>
          </div>

          {/* Hero Visual Collage */}
          <div className="relative w-full aspect-[4/3] lg:aspect-square max-h-[600px] rounded-3xl bg-card/50 backdrop-blur-xl border border-border shadow-[0_0_60px_rgba(168,85,247,0.15)] flex items-center justify-center p-4 group hover:border-purple-500/40 transition-all duration-700 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-orange-500/20 blur-[80px] rounded-full scale-75 group-hover:scale-100 transition-all duration-700 opacity-50" />
            
            <div className="w-full h-full relative z-10 rounded-[20px] bg-slate-100 dark:bg-slate-900/80 border border-border/50 overflow-hidden shadow-inner">
              <img src="/shilp1.png" alt="Shilp Studio Sculptural Design" className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-105" />
            </div>

            <div className="absolute -top-[1px] -left-[1px] w-12 h-12 border-t-2 border-l-2 border-purple-400 rounded-tl-[24px] z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
            <div className="absolute -bottom-[1px] -right-[1px] w-12 h-12 border-b-2 border-r-2 border-orange-400 rounded-br-[24px] z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
          </div>

        </div>
      </section>

      {/* About Shilp Studio */}
      <section className="relative py-24 z-10 border-b border-border/50 bg-white/[0.01]">
        <div className="container mx-auto max-w-4xl px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            About Shilp Studio
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full mx-auto" />
          <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed pt-4">
            Shilp Studio specializes in sculptural development and finishing, focusing on detailed craftsmanship and refined surface quality for murti and artistic forms.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="relative py-24 z-10 border-b border-border/50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
              What We Offer
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Concept Development", icon: Lightbulb, desc: "Transforming raw ideas into actionable structural designs." },
              { title: "Digital Sculpting", icon: PenTool, desc: "High-precision 3D modeling and sculptural detailing." },
              { title: "Form Refinement", icon: Layers, desc: "Polishing and perfecting the physical dimensions and shapes." },
              { title: "Surface Finishing", icon: Sparkles, desc: "Achieving presentation-ready textures and flawless surfaces." },
            ].map((service, i) => (
              <div key={i} className="p-8 rounded-3xl bg-card/50 border border-border/50 flex flex-col items-center text-center gap-5 hover:-translate-y-2 transition-transform duration-500 hover:border-purple-500/30 group shadow-xl">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                  <service.icon className="w-8 h-8 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="relative py-24 z-10 border-b border-border/50 bg-white/[0.01]">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                  Applications
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full" />
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                Our sculptural and finishing expertise brings a vast array of artistic concepts to life.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Murti / Sculptures",
                  "Decorative Installations",
                  "Display Pieces",
                  "Art Objects",
                  "Figurines",
                  "Custom Sculptural Concepts"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 text-base font-medium p-4 rounded-xl bg-white/[0.02] border border-border/50 hover:bg-white/[0.05] transition-colors group">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:text-foreground transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative aspect-square lg:aspect-[4/3] rounded-3xl bg-card/50 backdrop-blur-xl border border-border shadow-[0_0_30px_rgba(168,85,247,0.1)] flex items-center justify-center p-2 group hover:border-purple-500/40 transition-all duration-700 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-orange-500/10 blur-[40px] rounded-full scale-75 group-hover:scale-100 transition-all duration-700 opacity-50" />
              <div className="w-full h-full rounded-[20px] bg-slate-100 dark:bg-slate-900/80 border border-border/50 relative overflow-hidden shadow-inner">
                <img src="/shilp2.png" alt="Sculpture Application Showcase" className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Our Creations */}
      <section className="relative py-24 z-10 border-b border-border/50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Our Creations
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full mx-auto" />
            <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto pt-4 text-lg">
              Explore our sculptural craftsmanship and finished murti work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              "High-quality murti photographs",
              "Close-up detailing shots",
              "Finished surface textures",
              "Display-ready sculptures"
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-white/[0.03] border border-border/50 hover:border-purple-500/30 transition-colors">
                <Paintbrush className="w-6 h-6 text-purple-400" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{item}</span>
              </div>
            ))}
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "/shilp3.png",
              "/shilp4.png",
              "/shilp5.png"
            ].map((src, i) => (
              <div key={i} className="aspect-[3/4] rounded-2xl bg-card border border-border/50 overflow-hidden relative group shadow-lg">
                <img src={src} alt={`Shilp Gallery ${i + 1}`} className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-24 z-10 border-b border-border/50 bg-white/[0.01]">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
              Process
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full mx-auto" />
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative max-w-5xl mx-auto">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-8 left-[10%] w-[80%] h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
            
            {[
              "Concept",
              "Digital Sculpt",
              "Refinement",
              "Surface Finishing",
              "Final Murti"
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center gap-4 w-full md:w-auto group">
                <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center text-xl font-bold text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.05)] group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] group-hover:-translate-y-1 transition-all duration-300">
                  {i + 1}
                </div>
                <span className="font-bold text-slate-700 dark:text-slate-300 text-center whitespace-nowrap group-hover:text-purple-300 transition-colors">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/20" />
        <div className="container mx-auto max-w-4xl px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8 tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Transform Concepts into Sculptural Form
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/contact-us" className="relative inline-flex h-14 overflow-hidden rounded-xl p-[1px] focus:outline-none group">
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a855f7_0%,#f97316_50%,#a855f7_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-background px-10 py-1 text-lg font-bold text-foreground backdrop-blur-3xl transition-all group-hover:bg-card shadow-[0_0_25px_rgba(168,85,247,0.2)]">
                Discuss Your Project
              </span>
            </Link>
            <Link href="/get-quote" className="inline-flex h-14 items-center justify-center rounded-xl border border-white/20 bg-slate-100 dark:bg-slate-900/50 px-10 py-1 text-lg font-bold text-foreground transition-all hover:bg-slate-100 dark:bg-slate-900 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Get Quote
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
