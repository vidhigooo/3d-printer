import type { Metadata } from "next";
import Link from "next/link";
import { 
  Layers, 
  Cpu, 
  Box, 
  Sparkles, 
  Copy, 
  Droplet, 
  PenTool, 
  ClipboardCheck, 
  CheckCircle2, 
  MessageSquare,
  Settings,
  Car
} from "lucide-react";
import FAQ from "@/components/FAQ";

const faqItems = [
  {
    question: "What is Vacuum Casting?",
    answer: "Vacuum casting is a manufacturing process used to produce high-quality plastic parts using silicone molds, making it ideal for prototypes and low-volume production."
  },
  {
    question: "What materials can be used in vacuum casting?",
    answer: "Vacuum casting supports a variety of polyurethane materials that can simulate ABS, PP, rubber, and other engineering plastics."
  },
  {
    question: "How many parts can be produced from a single mold?",
    answer: "A silicone mold can typically produce multiple high-quality parts, depending on the design complexity and material used."
  },
  {
    question: "Is vacuum casting suitable for functional prototypes?",
    answer: "Yes, vacuum casting is widely used for functional testing, design validation, market samples, and pre-production parts."
  },
  {
    question: "What are the advantages of vacuum casting over injection molding?",
    answer: "Vacuum casting offers lower tooling costs, faster lead times, and greater flexibility for low-volume production runs."
  },
  {
    question: "What industries use vacuum casting services?",
    answer: "Vacuum casting is commonly used in automotive, consumer products, medical devices, electronics, and product development industries."
  },
  {
    question: "Do you provide finishing and painting services?",
    answer: "Yes, we offer sanding, painting, texture matching, color matching, and other post-processing services."
  },
  {
    question: "How can I get a quote for vacuum casting services?",
    answer: "Simply share your 3D model, quantity requirements, material preferences, and project details, and our team will provide a customized quotation."
  }
];

export const metadata: Metadata = {
  title: "Vacuum Casting Service | VEKTOR3D SYSTEMS",
  description: "High-quality vacuum cast parts for prototyping, product testing, and small-batch manufacturing.",
};

const offers = [
  {
    title: "Silicone Mold Casting",
    desc: "High-detail mold replication solutions.",
    icon: Layers,
    glow: "group-hover:shadow-[0_0_30px_rgba(0,229,255,0.15)] hover:border-cyan-500/30",
    accent: "from-cyan-500 to-blue-500",
  },
  {
    title: "Functional Prototype Parts",
    desc: "Production-like prototype manufacturing.",
    icon: Cpu,
    glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-500/30",
    accent: "from-purple-500 to-pink-500",
  },
  {
    title: "Low-Volume Production",
    desc: "Small batch manufacturing support.",
    icon: Box,
    glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:border-emerald-500/30",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    title: "Surface Finish Options",
    desc: "Smooth and premium quality finishes.",
    icon: Sparkles,
    glow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] hover:border-orange-500/30",
    accent: "from-orange-500 to-amber-500",
  },
  {
    title: "Custom Part Replication",
    desc: "Accurate reproduction of master models.",
    icon: Copy,
    glow: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] hover:border-pink-500/30",
    accent: "from-pink-500 to-rose-500",
  }
];

const processSteps = [
  {
    id: 1,
    title: "Master Model",
    desc: "High-precision master preparation.",
    icon: PenTool,
  },
  {
    id: 2,
    title: "Silicone Mold",
    desc: "Creating the detailed silicone mold.",
    icon: Layers,
  },
  {
    id: 3,
    title: "Vacuum Casting",
    desc: "Resin casting under vacuum.",
    icon: Droplet,
  },
  {
    id: 4,
    title: "Final Finish",
    desc: "Demolding and surface treatment.",
    icon: Sparkles,
  }
];

const applications = [
  { title: "Product Prototypes", icon: Box },
  { title: "Consumer Product Testing", icon: ClipboardCheck },
  { title: "Engineering Models", icon: Settings },
  { title: "Automotive Components", icon: Car },
  { title: "Display and Presentation Parts", icon: Sparkles }
];

export default function VacuumCastingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 overflow-hidden relative selection:bg-cyan-500/30">
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-cyan-600/10 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 px-6 z-10 border-b border-white/5">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8 relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold tracking-wide uppercase shadow-[0_0_15px_rgba(0,229,255,0.1)] mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Low-Volume Manufacturing
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              Vacuum Casting for Low-Volume Production
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl">
              We deliver high-quality vacuum cast parts for prototyping, product testing, and small-batch manufacturing with excellent surface finish and consistency.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact-us" className="relative inline-flex h-14 overflow-hidden rounded-xl p-[1px] focus:outline-none group">
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#a855f7_50%,#06b6d4_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-8 py-1 text-base font-bold text-white backdrop-blur-3xl transition-all group-hover:bg-slate-900 shadow-[0_0_25px_rgba(0,229,255,0.2)]">
                  Get Quote
                </span>
              </Link>
              
              <Link href="/contact-us" className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-1 text-base font-bold text-white transition-all hover:bg-white/10 hover:border-white/20">
                Discuss Project
              </Link>
            </div>
          </div>

          <div className="relative w-full aspect-square lg:aspect-[4/3] rounded-[24px] bg-black/40 backdrop-blur-xl border border-cyan-500/20 shadow-[0_0_50px_rgba(0,229,255,0.1)] flex items-center justify-center p-2 group hover:border-cyan-400/50 transition-colors duration-500 mt-10 lg:mt-0">
            <div className="absolute inset-0 bg-cyan-500/20 blur-[80px] rounded-full scale-75 group-hover:bg-cyan-400/30 transition-all duration-700" />
            <img 
              src="/product.png" 
              alt="Finished cast components" 
              className="w-full h-full object-cover rounded-[20px] relative z-10"
            />
          </div>

        </div>
      </section>

      {/* 2. SHORT INTRO */}
      <section className="relative py-20 z-10 bg-slate-900/20 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium">
            Vacuum casting is ideal for producing accurate and cost-effective parts in low quantities while maintaining production-like quality and finish.
          </p>
        </div>
      </section>

      {/* 3. WHAT WE OFFER */}
      <section className="relative py-32 z-10 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cyan-900/10 blur-[120px] rounded-full opacity-50" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-cyan-500" />
              <div className="mx-4 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,229,255,0.8)]" />
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-cyan-500" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] mb-6">
              What We Offer
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {offers.map((item, i) => (
              <div key={i} className={`group relative p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] ${item.glow}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className={`w-16 h-16 mb-6 rounded-2xl bg-slate-950 flex items-center justify-center border border-white/10 shadow-lg relative overflow-hidden group-hover:border-white/20 transition-colors duration-300`}>
                  <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${item.accent}`} />
                  <item.icon className="w-8 h-8 text-white relative z-10" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MATERIAL OPTIONS */}
      <section className="relative py-24 z-10 border-y border-white/5 bg-slate-900/20">
        <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
                Material & Finish Options
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                Choose from a wide variety of polyurethanes that mimic the mechanical properties of production plastics.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4 border-b border-cyan-500/20 pb-2">PU / Resin Materials</h3>
                <ul className="space-y-3">
                  {["Standard PU Resin", "ABS-like Resin", "Rubber-like Flexible Resin", "Transparent Casting Resin"].map((mat, idx) => (
                    <li key={idx} className="flex items-center gap-3 group">
                      <div className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      </div>
                      <span className="text-base text-slate-300 group-hover:text-white transition-colors">{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-4 border-b border-purple-500/20 pb-2">Finish Options</h3>
                <ul className="space-y-3">
                  {["Matte Finish", "Gloss Finish", "Painted Surface", "Texture Matching"].map((fin, idx) => (
                    <li key={idx} className="flex items-center gap-3 group">
                      <div className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                      </div>
                      <span className="text-base text-slate-300 group-hover:text-white transition-colors">{fin}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden group border border-white/5 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 pointer-events-none" />
            <img 
              src="/sla.png" 
              alt="Resin samples and finish options" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

        </div>
      </section>

      {/* 5. APPLICATIONS */}
      <section className="relative py-24 z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight drop-shadow-md">
              Applications
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {applications.map((app, i) => (
              <div key={i} className="group flex items-center gap-4 bg-slate-900/50 backdrop-blur-md border border-white/5 px-6 py-4 rounded-2xl hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-slate-800/50 transition-all duration-300 w-full sm:w-[calc(50%-1rem)] lg:w-auto min-w-[240px]">
                <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center border border-white/5 group-hover:border-cyan-500/20 shadow-inner group-hover:bg-cyan-950/30 transition-all">
                  <app.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="font-semibold text-slate-200 group-hover:text-white transition-colors">{app.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROCESS SECTION */}
      <section className="relative py-32 z-10 overflow-hidden bg-black/30 border-y border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight drop-shadow-md">
              Our Process
            </h2>
          </div>

          <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-4">
            {/* Glowing Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-16 right-16 h-[2px] bg-slate-800 z-0">
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
            </div>

            {/* Glowing Connector Line (Mobile) */}
            <div className="md:hidden absolute top-0 bottom-0 left-12 w-[2px] bg-slate-800 z-0">
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-50" />
            </div>

            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="relative z-10 flex flex-row md:flex-col items-center text-left md:text-center gap-6 group w-full md:w-1/4">
                  <div className="relative flex items-center justify-center w-24 h-24 rounded-2xl bg-slate-900 border border-slate-700 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_25px_rgba(0,229,255,0.2)] transition-all duration-300 backdrop-blur-md shrink-0">
                    <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center text-xs font-bold text-cyan-400 group-hover:bg-cyan-950 group-hover:border-cyan-500 transition-colors shadow-lg">
                      0{step.id}
                    </span>
                    <Icon className="w-10 h-10 text-slate-400 group-hover:text-cyan-400 transition-colors" strokeWidth={1.5} />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-white transition-colors">{step.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed max-w-[200px] mx-auto">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="relative py-24 z-10 bg-slate-900/60 border-t border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-12">
            Production-Like Parts Without <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Mass Manufacturing Costs</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/contact-us" className="relative inline-flex h-16 overflow-hidden rounded-xl p-[1px] focus:outline-none group">
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#a855f7_50%,#06b6d4_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-10 text-lg font-bold text-white backdrop-blur-3xl transition-all group-hover:bg-slate-900 shadow-[0_0_25px_rgba(0,229,255,0.2)]">
                Get Instant Quote
              </span>
            </Link>
            
            <Link href="/contact-us" className="inline-flex h-16 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-10 text-lg font-bold text-white transition-all hover:bg-white/10 hover:border-white/20">
              <MessageSquare className="w-6 h-6" /> Discuss Your Project
            </Link>
          </div>
        </div>
      </section>

      <FAQ title="Frequently Asked Questions Vacuum Casting" items={faqItems} />
    </div>
  );
}
