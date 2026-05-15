import type { Metadata } from "next";
import { Wrench, Settings, Droplets, CheckCircle2, ShieldCheck, Activity, Zap, Search, PhoneCall, ArrowRight, HardDrive, Cpu, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "3D Printer Repair & Maintenance | VEKTOR3D SYSTEMS",
  description: "Reliable repair, calibration, and performance optimization for FDM, SLA, DLP & industrial 3D printers.",
};

export default function ThreeDPrinterRepairPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 overflow-hidden relative selection:bg-cyan-500/30">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-shimmer { animation: shimmer 2.5s infinite; }
      `}} />

      {/* Global Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-cyan-600/10 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[150px]" />
        <div className="absolute top-[40%] left-[30%] h-[400px] w-[400px] rounded-full bg-blue-600/5 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 px-6 z-10 border-b border-white/5">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Hero Content */}
          <div className="space-y-8 relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              3D Printer Repair & Maintenance Services
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl">
              Reliable repair, calibration, and performance optimization for FDM, SLA, DLP & industrial 3D printers.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <button className="relative inline-flex h-14 overflow-hidden rounded-xl p-[1px] focus:outline-none group">
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#a855f7_50%,#06b6d4_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-8 py-1 text-base font-bold text-white backdrop-blur-3xl transition-all group-hover:bg-slate-900 shadow-[0_0_25px_rgba(0,229,255,0.2)]">
                  Book Service
                </span>
              </button>
              
              <button className="inline-flex h-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-1 text-base font-bold text-white transition-all hover:bg-white/10 hover:border-white/20">
                Get Diagnosis
              </button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative w-full aspect-[4/3] lg:aspect-square max-h-[550px] rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-white/10 shadow-[0_0_60px_rgba(0,229,255,0.15)] flex items-center justify-center p-2 group hover:border-cyan-500/40 transition-all duration-700 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-[80px] rounded-full scale-75 group-hover:scale-100 transition-all duration-700 opacity-50" />
            
            <div className="absolute inset-0 overflow-hidden rounded-3xl z-20 pointer-events-none">
              <div className="absolute -inset-full top-0 z-20 block h-full w-1/2 -skew-x-12 transform bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:animate-shimmer" />
            </div>

            <img 
              src="/hero_repair.png" 
              alt="Technician working on 3D printer" 
              className="w-full h-full object-cover rounded-[20px] relative z-10 brightness-110 contrast-125 saturate-110 shadow-inner"
            />
            
            {/* Corner glowing accents */}
            <div className="absolute -top-[1px] -left-[1px] w-12 h-12 border-t-2 border-l-2 border-cyan-400 rounded-tl-[24px] z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(0,229,255,0.5)]" />
            <div className="absolute -bottom-[1px] -right-[1px] w-12 h-12 border-b-2 border-r-2 border-purple-400 rounded-br-[24px] z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
          </div>

        </div>
      </section>

      {/* Trust Strip */}
      <section className="relative py-8 z-10 border-b border-white/5 bg-white/[0.02]">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {['Fast Diagnosis', 'On-site / Off-site Support', 'Precision Calibration', 'All Major Printer Types Supported'].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm md:text-base font-semibold text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="relative py-24 z-10 border-b border-white/5">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Service Overview
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
              </div>
              <div className="space-y-6">
                {[
                  { title: "Hardware Repair", desc: "Nozzle, bed, motor, wiring issues", icon: Wrench },
                  { title: "Calibration & Tuning", desc: "Print accuracy & alignment", icon: Settings },
                  { title: "Maintenance Service", desc: "Cleaning, lubrication, upkeep", icon: Droplets },
                  { title: "Print Quality Fix", desc: "Layer issues, adhesion, errors", icon: Activity },
                ].map((s, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-colors group">
                    <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20 group-hover:border-cyan-500/50 transition-colors">
                      <s.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">{s.title}</h3>
                      <p className="text-slate-400 text-sm">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-[4/3] rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,229,255,0.1)] flex items-center justify-center p-2 group hover:border-purple-500/40 transition-all duration-700 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 blur-[40px] rounded-full scale-75 group-hover:scale-100 transition-all duration-700 opacity-50" />
              <div className="absolute inset-0 overflow-hidden rounded-3xl z-20 pointer-events-none">
                <div className="absolute -inset-full top-0 z-20 block h-full w-1/2 -skew-x-12 transform bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:animate-shimmer" />
              </div>
              <img src="/printer repair.png" alt="Service Overview" className="w-full h-full object-cover rounded-[20px] relative z-10 brightness-110 contrast-125 saturate-110 shadow-inner" />
              <div className="absolute -top-[1px] -left-[1px] w-8 h-8 border-t-2 border-l-2 border-cyan-400 rounded-tl-[24px] z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(0,229,255,0.5)]" />
              <div className="absolute -bottom-[1px] -right-[1px] w-8 h-8 border-b-2 border-r-2 border-purple-400 rounded-br-[24px] z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
            </div>
          </div>
        </div>
      </section>

      {/* Printer Types Supported */}
      <section className="relative py-24 z-10 border-b border-white/5 bg-white/[0.01]">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,229,255,0.1)] flex items-center justify-center p-2 group hover:border-cyan-500/40 transition-all duration-700 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 blur-[40px] rounded-full scale-75 group-hover:scale-100 transition-all duration-700 opacity-50" />
              <div className="absolute inset-0 overflow-hidden rounded-3xl z-20 pointer-events-none">
                <div className="absolute -inset-full top-0 z-20 block h-full w-1/2 -skew-x-12 transform bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:animate-shimmer" />
              </div>
              <img src="/printermanufacturing.png" alt="Printer Types" className="w-full h-full object-cover rounded-[20px] relative z-10 brightness-110 contrast-125 saturate-110 shadow-inner" />
              <div className="absolute -top-[1px] -left-[1px] w-8 h-8 border-t-2 border-l-2 border-cyan-400 rounded-tl-[24px] z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(0,229,255,0.5)]" />
              <div className="absolute -bottom-[1px] -right-[1px] w-8 h-8 border-b-2 border-r-2 border-purple-400 rounded-br-[24px] z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
            </div>

            <div className="order-1 lg:order-2 space-y-10">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Printer Types Supported
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "FDM 3D Printers", icon: HardDrive },
                  { title: "SLA Resin Printers", icon: Droplets },
                  { title: "DLP Printers", icon: Zap },
                  { title: "Industrial 3D Printers", icon: Cpu },
                ].map((type, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.05] transition-all group">
                    <type.icon className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-slate-200 group-hover:text-purple-300 transition-colors">{type.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-24 z-10 border-b border-white/5">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Repair Process
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto" />
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative max-w-5xl mx-auto">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-8 left-[10%] w-[80%] h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            
            {[
              "Diagnosis",
              "Issue Identification",
              "Repair / Calibration",
              "Testing",
              "Final Print Check"
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center gap-4 w-full md:w-auto group">
                <div className="w-16 h-16 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-xl font-bold text-cyan-400 shadow-[0_0_20px_rgba(0,229,255,0.05)] group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] group-hover:-translate-y-1 transition-all duration-300">
                  {i + 1}
                </div>
                <span className="font-bold text-slate-300 text-center whitespace-nowrap group-hover:text-cyan-300 transition-colors">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-24 z-10 border-b border-white/5 bg-white/[0.01]">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Why Choose Us
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Experienced", desc: "Experienced technical handling", icon: ShieldCheck },
              { title: "Precision", desc: "Precision-focused repair approach", icon: Search },
              { title: "Speed", desc: "Minimal downtime", icon: Zap },
              { title: "Quality", desc: "Quality testing before delivery", icon: CheckCircle2 },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 text-center flex flex-col items-center gap-5 hover:-translate-y-2 transition-transform duration-500 hover:border-white/10 group shadow-xl">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                  <item.icon className="w-8 h-8 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* After Sales Support */}
      <section className="relative py-24 z-10 border-b border-white/5">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  After Sales Support
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
              </div>
              <p className="text-slate-400 text-lg leading-relaxed">
                We provide dedicated post-repair support to ensure your 3D printer continues to perform reliably after service.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-cyan-400 font-bold mb-4 uppercase tracking-wider text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> What's Included
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {['Post-repair technical guidance', 'Basic troubleshooting assistance', 'Usage & maintenance tips', 'Performance check guidance (if needed)'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300 text-sm bg-white/[0.02] p-3 rounded-lg border border-white/5">
                        <ArrowRight className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-cyan-400 font-bold mb-3 uppercase tracking-wider text-sm flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" /> Why It Matters
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/5">
                    Ensures stable performance after repair and reduces future issues through proper care.
                  </p>
                </div>

                <div>
                  <h3 className="text-cyan-400 font-bold mb-4 uppercase tracking-wider text-sm flex items-center gap-2">
                    <PhoneCall className="w-4 h-4" /> Support Options
                  </h3>
                  <ul className="flex flex-wrap gap-3">
                    {['Remote support (call/message)', 'On-site support (if required)', 'Maintenance consultations'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-300 text-sm font-semibold bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-full">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button className="mt-4 inline-flex h-12 items-center justify-center rounded-xl bg-cyan-600 px-8 font-bold text-white transition-all hover:bg-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                Contact Support <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </div>
            
            <div className="relative aspect-[4/3] rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,229,255,0.1)] flex items-center justify-center p-2 group hover:border-cyan-500/40 transition-all duration-700 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 blur-[40px] rounded-full scale-75 group-hover:scale-100 transition-all duration-700 opacity-50" />
              <div className="absolute inset-0 overflow-hidden rounded-3xl z-20 pointer-events-none">
                <div className="absolute -inset-full top-0 z-20 block h-full w-1/2 -skew-x-12 transform bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:animate-shimmer" />
              </div>
              <img src="/tankrepair.png" alt="After Sales Support" className="w-full h-full object-cover rounded-[20px] relative z-10 brightness-110 contrast-125 saturate-110 shadow-inner" />
              <div className="absolute -top-[1px] -left-[1px] w-8 h-8 border-t-2 border-l-2 border-cyan-400 rounded-tl-[24px] z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(0,229,255,0.5)]" />
              <div className="absolute -bottom-[1px] -right-[1px] w-8 h-8 border-b-2 border-r-2 border-purple-400 rounded-br-[24px] z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900/20" />
        <div className="container mx-auto max-w-4xl px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            GET YOUR 3D PRINTER BACK TO PEAK PERFORMANCE
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="relative inline-flex h-14 overflow-hidden rounded-xl p-[1px] focus:outline-none group">
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#a855f7_50%,#06b6d4_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-10 py-1 text-lg font-bold text-white backdrop-blur-3xl transition-all group-hover:bg-slate-900 shadow-[0_0_25px_rgba(0,229,255,0.2)]">
                Book Repair Service
              </span>
            </button>
            <button className="inline-flex h-14 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-10 py-1 text-lg font-bold text-white transition-all hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Request Quote
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
