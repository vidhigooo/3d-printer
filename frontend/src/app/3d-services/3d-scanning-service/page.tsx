import type { Metadata } from "next";
import Link from "next/link";
import { 
  Target, 
  Layers, 
  FileJson, 
  Settings, 
  CheckCircle2, 
  ScanLine, 
  Wand2, 
  FileCheck,
  MessageSquare,
  ChevronRight,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "3D Scanning Service | VEKTOR3D SYSTEMS",
  description: "Precision 3D Scanning for Accurate Digital Capture. High accuracy, clean mesh data, and CAD-ready files.",
};

const deliverables = [
  {
    title: "High Accuracy",
    desc: "Sub-millimeter precision capturing every minute detail of your physical parts.",
    icon: Target,
    glow: "group-hover:shadow-[0_0_30px_rgba(0,229,255,0.15)] hover:border-cyan-500/30",
    accent: "from-cyan-500 to-blue-500",
  },
  {
    title: "Clean Mesh Data",
    desc: "Optimized, watertight polygon meshes ready for immediate downstream use.",
    icon: Layers,
    glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-500/30",
    accent: "from-purple-500 to-pink-500",
  },
  {
    title: "CAD Ready Files",
    desc: "Parametric models exported in standard formats like STEP, IGES, and Parasolid.",
    icon: FileJson,
    glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:border-emerald-500/30",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    title: "Manufacturing Ready Output",
    desc: "Actionable data formatted for direct integration into your production workflow.",
    icon: Settings,
    glow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] hover:border-orange-500/30",
    accent: "from-orange-500 to-amber-500",
  }
];

const processSteps = [
  {
    id: 1,
    title: "Scan",
    desc: "High-resolution optical or laser capture of the physical object.",
    icon: ScanLine,
  },
  {
    id: 2,
    title: "Data Cleanup",
    desc: "Processing raw point clouds into clean, optimized mesh surfaces.",
    icon: Wand2,
  },
  {
    id: 3,
    title: "File Delivery",
    desc: "Exporting to your required CAD format for immediate use.",
    icon: FileCheck,
  }
];

const applications = [
  "Reverse engineering",
  "Legacy documentation",
  "Product development",
  "Dimensional verification",
  "Archival & replication"
];

export default function ThreeDScanningServicePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative selection:bg-cyan-500/30">
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-cyan-600/10 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative pt-8 pb-20 md:pt-16 md:pb-28 px-6 z-10 border-b border-border/50">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8 relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold tracking-wide uppercase shadow-[0_0_15px_rgba(0,229,255,0.1)] mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Professional 3D Scanning
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              Precision 3D Scanning for Accurate Digital Capture
            </h1>
            
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-xl">
              Transform physical objects into precise digital models. We provide high-resolution 3D scanning services to accelerate your design, inspection, and reverse engineering workflows.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact-us" className="relative inline-flex h-14 overflow-hidden rounded-xl p-[1px] focus:outline-none group">
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#a855f7_50%,#06b6d4_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-background px-8 py-1 text-base font-bold text-foreground backdrop-blur-3xl transition-all group-hover:bg-card shadow-[0_0_25px_rgba(0,229,255,0.2)]">
                  Discuss Project
                </span>
              </Link>
            </div>
          </div>

          <div className="relative w-full aspect-square lg:aspect-[4/3] rounded-[24px] bg-black/40 backdrop-blur-xl border border-cyan-500/20 shadow-[0_0_50px_rgba(0,229,255,0.1)] flex items-center justify-center p-2 group hover:border-cyan-400/50 transition-colors duration-500 mt-10 lg:mt-0">
            <div className="absolute inset-0 bg-cyan-500/20 blur-[80px] rounded-full scale-75 group-hover:bg-cyan-400/30 transition-all duration-700" />
            
            <img 
              src="/scanning.png" 
              alt="3D Scanner working on component" 
              className="w-full h-full object-cover rounded-[20px] relative z-10"
            />
          </div>

        </div>
      </section>

      {/* 2. WHAT WE DELIVER */}
      <section className="relative py-32 z-10 overflow-hidden bg-background">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] mb-6">
              What We Deliver
            </h2>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We provide industry-leading digital assets, ensuring your scanned data is perfectly prepared for its intended application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliverables.map((item, i) => (
              <div key={i} className={`group relative p-8 rounded-3xl bg-card/60 backdrop-blur-xl border border-border/50 overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center ${item.glow}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className={`w-20 h-20 mb-8 rounded-2xl bg-background flex items-center justify-center border border-border shadow-lg relative overflow-hidden group-hover:border-border/80 transition-colors duration-300`}>
                  <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${item.accent}`} />
                  <item.icon className="w-10 h-10 text-foreground relative z-10" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed flex-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. APPLICATIONS */}
      <section className="relative py-24 z-10 border-y border-border/50 bg-card/20">
        <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative w-full aspect-[4/3] rounded-[24px] overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 pointer-events-none" />
            <img 
              src="/reverse.png" 
              alt="CAD Comparison and Applications" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 z-20 w-14 h-14 rounded-2xl bg-card/80 backdrop-blur-md border border-border flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              <Settings className="w-7 h-7 text-cyan-400" />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Versatile Applications
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Our 3D scanning services empower diverse industries by bridging the gap between physical objects and digital environments.
            </p>
            
            <ul className="space-y-4">
              {applications.map((app, idx) => (
                <li key={idx} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-colors shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-lg font-medium text-foreground group-hover:text-foreground transition-colors">{app}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* 4. PROCESS SECTION */}
      <section className="relative py-32 z-10 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight drop-shadow-md">
              Our Process
            </h2>
            <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              A streamlined, three-step workflow from physical capture to digital delivery.
            </p>
          </div>

          <div className="relative flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4">
            {/* Glowing Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-24 right-24 h-[2px] bg-slate-100 dark:bg-slate-900 z-0">
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
            </div>

            {/* Glowing Connector Line (Mobile) */}
            <div className="md:hidden absolute top-0 bottom-0 left-1/2 w-[2px] bg-slate-100 dark:bg-slate-900 z-0 -translate-x-1/2">
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-50" />
            </div>

            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="relative z-10 flex flex-col items-center text-center gap-6 group w-full md:w-1/3">
                  <div className="relative flex items-center justify-center w-24 h-24 rounded-2xl bg-card border border-slate-700 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_25px_rgba(0,229,255,0.2)] transition-all duration-300 backdrop-blur-md">
                    <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-600 flex items-center justify-center text-xs font-bold text-cyan-400 group-hover:bg-cyan-950 group-hover:border-cyan-500 transition-colors shadow-lg">
                      0{step.id}
                    </span>
                    <Icon className="w-10 h-10 text-slate-700 dark:text-slate-300 group-hover:text-cyan-400 transition-colors" strokeWidth={1.5} />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-foreground transition-colors">{step.title}</h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed max-w-[250px] mx-auto">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="relative py-24 z-10 bg-card/60 border-t border-border/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight mb-12">
            Ready to Digitize <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Your Components?</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/contact-us" className="relative inline-flex h-16 overflow-hidden rounded-xl p-[1px] focus:outline-none group">
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#a855f7_50%,#06b6d4_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-background px-10 text-lg font-bold text-foreground backdrop-blur-3xl transition-all group-hover:bg-card shadow-[0_0_25px_rgba(0,229,255,0.2)]">
                Discuss Project
              </span>
            </Link>
            
            <a href="https://wa.me/919082020416" target="_blank" rel="noreferrer" className="inline-flex h-16 items-center justify-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-10 text-lg font-bold text-green-400 transition-all hover:bg-green-500/20 hover:border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
              <MessageSquare className="w-6 h-6" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
