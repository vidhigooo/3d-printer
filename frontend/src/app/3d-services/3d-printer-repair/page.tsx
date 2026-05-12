import type { Metadata } from "next";
import { Wrench, Settings, Droplets, CheckCircle2, Clock, Hammer, MapPin, Star, UserCircle2, ShieldCheck, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "3D Printer Repair & Maintenance | VEKTOR3D SYSTEMS",
  description: "Fast, reliable, and expert repair solutions for FDM, SLA, DLP, LCD, and industrial 3D printers.",
};

export default function ThreeDPrinterRepairPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 overflow-hidden relative selection:bg-cyan-500/30">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-shimmer { animation: shimmer 2.5s infinite; }
        
        .timeline-line {
          position: absolute;
          top: 24px;
          left: 50%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, rgba(6,182,212,0.1) 0%, rgba(6,182,212,0.5) 50%, rgba(168,85,247,0.1) 100%);
          z-index: 0;
        }
        @media (max-width: 1024px) {
          .timeline-line { display: none; }
        }
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
              3D Printer Repair & Maintenance
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl">
              Fast, reliable, and expert repair solutions for FDM, SLA, DLP, LCD, and industrial 3D printers.
            </p>
            
            <div className="grid grid-cols-2 gap-4 max-w-md pt-2">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400" /> On-site Support
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
                <Clock className="w-4 h-4 text-purple-400" /> 48hr Turnaround
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
                <Settings className="w-4 h-4 text-cyan-400" /> Industrial Expertise
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
                <ShieldCheck className="w-4 h-4 text-purple-400" /> Certified Techs
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <button className="relative inline-flex h-14 overflow-hidden rounded-xl p-[1px] focus:outline-none group">
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#a855f7_50%,#06b6d4_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-8 py-1 text-base font-bold text-white backdrop-blur-3xl transition-all group-hover:bg-slate-900 shadow-[0_0_25px_rgba(0,229,255,0.2)]">
                  Book Repair
                </span>
              </button>
              
              <button className="inline-flex h-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-1 text-base font-bold text-white transition-all hover:bg-white/10 hover:border-white/20">
                Get Free Diagnosis
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
              alt="Industrial 3D Printer Repair" 
              className="w-full h-full object-cover rounded-[20px] relative z-10 brightness-110 contrast-125 saturate-110 shadow-inner"
            />
            
            {/* Corner glowing accents */}
            <div className="absolute -top-[1px] -left-[1px] w-12 h-12 border-t-2 border-l-2 border-cyan-400 rounded-tl-[24px] z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(0,229,255,0.5)]" />
            <div className="absolute -bottom-[1px] -right-[1px] w-12 h-12 border-b-2 border-r-2 border-purple-400 rounded-br-[24px] z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
          </div>

        </div>
      </section>

      {/* Services Grid Section */}
      <section className="relative py-24 z-10">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight drop-shadow-md">
              Our Premium Services
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Specialized hardware and software solutions tailored to keep your industrial manufacturing running flawlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="group relative rounded-3xl bg-slate-900/60 backdrop-blur-md border border-white/5 p-0 hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-pointer flex flex-col shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />

              <div className="relative w-full aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-900/95 z-10 pointer-events-none" />
                <img src="/printermanufacturing.png" alt="FDM & LCD Manufacturing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute bottom-4 left-6 z-20 w-12 h-12 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all duration-300">
                  <Settings className="w-6 h-6 text-cyan-400" strokeWidth={1.5} />
                </div>
              </div>

              <div className="relative z-20 p-8 pt-4 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-50 transition-colors">FDM & LCD Printer Manufacturing</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">
                  Custom-built high-performance FDM and LCD 3D printing systems engineered for industrial and commercial applications.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-md">Industrial Grade</span>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-md">High Precision</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors mt-auto">
                  Request Build <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative rounded-3xl bg-slate-900/60 backdrop-blur-md border border-white/5 p-0 hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-pointer flex flex-col shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />

              <div className="relative w-full aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-900/95 z-10 pointer-events-none" />
                <img src="/printer repair.png" alt="3D Printer Repair" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute bottom-4 left-6 z-20 w-12 h-12 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300">
                  <Wrench className="w-6 h-6 text-purple-400" strokeWidth={1.5} />
                </div>
              </div>

              <div className="relative z-20 p-8 pt-4 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-50 transition-colors">3D Printer Repair & Maintenance</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">
                  Professional diagnostics, calibration, hardware replacement, firmware troubleshooting, and complete maintenance solutions.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-purple-300 bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 rounded-md">Fast Diagnosis</span>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-purple-300 bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 rounded-md">Expert Techs</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-purple-400 group-hover:text-purple-300 transition-colors mt-auto">
                  Schedule Repair <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative rounded-3xl bg-slate-900/60 backdrop-blur-md border border-white/5 p-0 hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-pointer flex flex-col shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />

              <div className="relative w-full aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-900/95 z-10 pointer-events-none" />
                <img src="/tankrepair.png" alt="Resin Tank Repair" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute bottom-4 left-6 z-20 w-12 h-12 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all duration-300">
                  <Droplets className="w-6 h-6 text-cyan-400" strokeWidth={1.5} />
                </div>
              </div>

              <div className="relative z-20 p-8 pt-4 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-50 transition-colors">SLA/DLP/LCD Resin Tank Repair</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">
                  Precision resin tank servicing, FEP replacement, leak prevention, and optical calibration for flawless resin printing.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-md">Resin Expertise</span>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-md">Optical Calibration</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors mt-auto">
                  View Details <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>





    </div>
  );
}
