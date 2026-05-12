import type { Metadata } from "next";
import Link from "next/link";
import { UploadCloud, MessageSquare, Printer, Droplet, Flame, Layers3, Sparkles, CheckCircle2, ChevronRight, Settings, Hammer, Box, Gem, Cpu, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "3D Printing Service | VEKTOR3D SYSTEMS",
  description: "Advanced 3D Printing Solutions for Prototyping & Production using SLA, DLP, FDM, SLS, and MJF.",
};

const technologies = [
  {
    id: "sla",
    name: "SLA (Stereolithography)",
    shortName: "SLA",
    icon: Sparkles,
    image: "/sla.png",
    features: [
      "Ultra high detail printing",
      "Smooth surface finish",
      "Best for prototypes & visual models"
    ]
  },
  {
    id: "dlp",
    name: "DLP (Digital Light Processing)",
    shortName: "DLP",
    icon: Droplet,
    image: "/dla.png",
    features: [
      "Fast resin printing",
      "High accuracy",
      "Jewellery, dental & mini parts"
    ]
  },
  {
    id: "fdm",
    name: "FDM (Fused Deposition Modeling)",
    shortName: "FDM",
    icon: Printer,
    image: "/fdm.png",
    features: [
      "Strong functional parts",
      "Cost-effective",
      "Engineering prototypes"
    ]
  },
  {
    id: "sls",
    name: "SLS (Selective Laser Sintering)",
    shortName: "SLS",
    icon: Flame,
    image: "/sls.png",
    features: [
      "No support required",
      "Strong nylon parts",
      "Complex geometries"
    ]
  },
  {
    id: "mjf",
    name: "MJF (Multi Jet Fusion)",
    shortName: "MJF",
    icon: Layers3,
    image: "/mjf.png",
    features: [
      "Production-grade strength",
      "Durable end-use parts",
      "Industrial applications"
    ]
  }
];

const materials = [
  {
    title: "FDM Materials",
    desc: "Versatile thermoplastics engineered for rapid prototyping, durable functional parts, and flexible manufacturing applications.",
    icon: Layers3,
    accent: "from-cyan-500 to-blue-500",
    glow: "group-hover:shadow-[0_0_30px_rgba(0,229,255,0.15)] hover:border-cyan-500/30",
    chips: [
      { name: "PLA", tag: "Prototyping" },
      { name: "ABS", tag: "Impact Resistant" },
      { name: "PETG", tag: "Durable" },
      { name: "TPU", tag: "Flexible" }
    ],
    metrics: [
      { label: "Strength", value: 75, color: "bg-cyan-400" },
      { label: "Flexibility", value: 60, color: "bg-blue-400" },
      { label: "Heat Resistance", value: 65, color: "bg-indigo-400" }
    ]
  },
  {
    title: "Resin Materials (SLA / DLP)",
    desc: "High-detail photopolymer materials designed for precision surfaces, intricate geometries, and premium visual finishes.",
    icon: Droplet,
    accent: "from-purple-500 to-pink-500",
    glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-500/30",
    chips: [
      { name: "Standard Resin", tag: "Visuals" },
      { name: "Tough Resin", tag: "Durable" },
      { name: "Flexible Resin", tag: "Pliable" },
      { name: "Transparent Resin", tag: "Clear" }
    ],
    metrics: [
      { label: "Surface Finish", value: 95, color: "bg-purple-400" },
      { label: "Precision", value: 90, color: "bg-pink-400" },
      { label: "Detail Level", value: 95, color: "bg-fuchsia-400" }
    ]
  },
  {
    title: "Industrial Materials (SLS / MJF)",
    desc: "Advanced engineering-grade polymers optimized for high-strength industrial applications and production-ready manufacturing.",
    icon: Cpu,
    accent: "from-emerald-500 to-teal-500",
    glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:border-emerald-500/30",
    chips: [
      { name: "Nylon PA12", tag: "Versatile" },
      { name: "Glass-filled Nylon", tag: "Rigid" },
      { name: "Engineering Polymers", tag: "Advanced" }
    ],
    metrics: [
      { label: "Durability", value: 95, color: "bg-emerald-400" },
      { label: "Stiffness", value: 85, color: "bg-teal-400" },
      { label: "Production Suitability", value: 90, color: "bg-green-400" }
    ]
  }
];

const whatWePrint = [
  {
    title: "Industrial Prototypes",
    desc: "Functional prototype development for rapid testing, validation, and product iteration before mass production.",
    image: "/industrial_prototypes.png",
    icon: Settings,
    tags: ["Rapid Prototyping", "Functional Testing", "Engineering Grade"]
  },
  {
    title: "Mechanical Parts",
    desc: "Durable high-precision components designed for engineering, automation, and machine applications.",
    image: "/mechanical.png",
    icon: Cpu,
    tags: ["High Strength", "Precision Manufacturing", "Industrial Components"]
  },
  {
    title: "Product Design Models",
    desc: "High-quality visual and functional models for product design validation and presentation workflows.",
    image: "/product.png",
    icon: Box,
    tags: ["Product Visualization", "Design Validation", "Presentation Models"]
  },
  {
    title: "Engineering Fixtures",
    desc: "Custom manufacturing fixtures and tooling solutions optimized for assembly and production efficiency.",
    image: "/engineering_fixtures.png",
    icon: Hammer,
    tags: ["Manufacturing Tools", "Assembly Support", "Production Optimization"]
  },
  {
    title: "Custom Parts",
    desc: "Tailor-made additive manufacturing solutions engineered to meet unique industrial and client-specific requirements.",
    image: "/custom.png",
    icon: Gem,
    tags: ["Custom Geometry", "Tailor-Made", "Advanced Manufacturing"]
  }
];

const creations = [
  {
    title: "Project A",
    subtitle: "SLA Prototype Model",
    desc: "High-detail resin prototype with smooth surface finish used for product design validation.",
    tags: "SLA • Standard Resin • Visual Prototype",
    image: "/crs1.png",
    accent: "from-cyan-500 to-blue-500"
  },
  {
    title: "Project B",
    subtitle: "DLP Miniature Model",
    desc: "Fast-produced high-precision miniature part used for fine detailing applications.",
    tags: "DLP • Resin • High-Detail Model",
    image: "/crd1.png",
    accent: "from-purple-500 to-pink-500"
  },
  {
    title: "Project C",
    subtitle: "FDM Functional Part",
    desc: "Strong and durable engineering component used for mechanical testing.",
    tags: "FDM • ABS • Functional Prototype",
    image: "/crf2.png",
    accent: "from-orange-500 to-red-500"
  },
  {
    title: "Project D",
    subtitle: "SLS Nylon Component",
    desc: "Complex geometry industrial part with high strength and no support requirement.",
    tags: "SLS • Nylon PA12 • End-use Part",
    image: "/crsl.png",
    accent: "from-emerald-500 to-teal-500"
  },
  {
    title: "Project E",
    subtitle: "MJF Production Part",
    desc: "Production-grade durable component designed for real-world industrial use.",
    tags: "MJF • Nylon • Final Product Part",
    image: "/crmj.png",
    accent: "from-blue-500 to-indigo-500"
  }
];

export default function ThreeDPrintingServicePage() {
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
        <div className="container mx-auto max-w-5xl text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold tracking-wide uppercase shadow-[0_0_15px_rgba(0,229,255,0.1)] mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            SLA | DLP | FDM | SLS | MJF
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] mb-8">
            Advanced 3D Printing Solutions for Prototyping & Production
          </h1>

          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base font-medium text-slate-300 mb-10">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-cyan-400" /> Fast Turnaround</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-purple-400" /> Industrial Quality</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-cyan-400" /> Custom Manufacturing</div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact-us" className="relative inline-flex h-14 overflow-hidden rounded-xl p-[1px] focus:outline-none group">
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#a855f7_50%,#06b6d4_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-8 py-1 text-base font-bold text-white backdrop-blur-3xl transition-all group-hover:bg-slate-900 shadow-[0_0_25px_rgba(0,229,255,0.2)]">
                Get Quote
              </span>
            </Link>
            
            <Link href="#upload" className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-1 text-base font-bold text-white transition-all hover:bg-white/10 hover:border-white/20">
              <UploadCloud className="w-5 h-5" /> Upload Design
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SHORT INTRO */}
      <section className="relative py-20 z-10 bg-slate-900/20 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium">
            We provide high-precision 3D printing solutions for industrial prototyping, functional parts, and product development using advanced technologies like SLA, DLP, FDM, SLS, and MJF.
          </p>
        </div>
      </section>

      {/* 3. TECHNOLOGIES */}
      <section className="relative py-24 z-10 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight drop-shadow-md">
              Technologies We Offer
            </h2>
          </div>

          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
            <div className="tech-marquee-track flex w-max gap-6 pb-8 pt-4">
              {[...technologies, ...technologies].map((tech, idx) => (
                <div key={`${tech.id}-${idx}`} className="w-[320px] md:w-[400px] flex-shrink-0 rounded-3xl bg-slate-900/60 backdrop-blur-md border border-white/5 overflow-hidden shadow-xl group hover:-translate-y-2 transition-all duration-300">
                  <div className="relative w-full h-48 overflow-hidden bg-slate-950">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent z-10 pointer-events-none" />
                    <img src={tech.image} alt={tech.name} className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute bottom-4 left-6 z-20 w-12 h-12 rounded-xl bg-cyan-500/10 backdrop-blur-md flex items-center justify-center border border-cyan-500/30 group-hover:bg-cyan-500/30 transition-colors shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                      <tech.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>
                  <div className="p-8 pt-6">
                    <h3 className="text-2xl font-bold text-white mb-4">{tech.name}</h3>
                    <ul className="space-y-3">
                      {tech.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 text-slate-300">
                          <ChevronRight className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <style dangerouslySetInnerHTML={{ __html: `
            .tech-marquee-track {
              animation: techMarquee 35s linear infinite;
            }
            .tech-marquee-track:hover {
              animation-play-state: paused;
            }
            @keyframes techMarquee {
              from { transform: translateX(0); }
              to { transform: translateX(calc(-50% - 0.75rem)); }
            }
          `}} />
        </div>
      </section>

      {/* 4. MATERIALS WE WORK WITH */}
      <section className="relative py-32 z-10 overflow-hidden bg-slate-950">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cyan-900/10 blur-[120px] rounded-full opacity-50" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-24 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[150px] bg-cyan-500/20 blur-[80px] rounded-full pointer-events-none" />
            <div className="inline-flex items-center justify-center mb-6 relative">
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-cyan-500" />
              <div className="mx-4 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(0,229,255,1)]" />
              <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-cyan-500" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg mb-6 relative">
              Materials We Work With
            </h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed relative">
              Engineered additive manufacturing materials optimized for prototyping, functional parts, and industrial-grade applications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {materials.map((cat, i) => (
              <div key={i} className={`group relative p-6 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col ${cat.glow}`}>
                {/* Ambient glow sweep on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="flex items-start justify-between mb-6 relative">
                  <div className={`w-14 h-14 rounded-2xl bg-slate-950 flex items-center justify-center border border-white/10 shadow-lg relative overflow-hidden group-hover:border-white/20 transition-colors duration-300`}>
                    <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${cat.accent}`} />
                    <cat.icon className="w-7 h-7 text-white relative z-10" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{cat.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 min-h-[60px]">
                  {cat.desc}
                </p>

                {/* Material Chips */}
                <div className="mb-8 flex-1">
                  <div className="flex flex-wrap gap-2">
                    {cat.chips.map((chip, idx) => (
                      <div key={idx} className="group/chip relative px-4 py-2 rounded-xl bg-slate-950 border border-white/5 hover:border-white/20 transition-all duration-300 cursor-default overflow-hidden flex flex-col min-w-[120px]">
                        <span className="text-sm font-bold text-slate-200 group-hover/chip:text-white transition-colors z-10 relative">{chip.name}</span>
                        <span className="text-[10px] uppercase tracking-wider text-slate-500 group-hover/chip:text-cyan-400 font-semibold mt-0.5 z-10 relative">{chip.tag}</span>
                        <div className={`absolute inset-0 opacity-0 group-hover/chip:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${cat.accent}`} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="pt-6 border-t border-white/5 space-y-4 relative z-10">
                  {cat.metrics.map((metric, idx) => (
                    <div key={idx} className="w-full">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{metric.label}</span>
                        <span className="text-xs font-bold text-white">{metric.value}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${metric.color} opacity-70 group-hover:opacity-100 transition-all duration-1000 ease-out origin-left scale-x-0 group-hover:scale-x-100`} style={{ width: `${metric.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHAT WE PRINT */}
      <section className="relative py-32 z-10 overflow-hidden">
        {/* Background glow and effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-600/10 blur-[150px] opacity-50 rounded-full" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] opacity-50 rounded-full" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-cyan-500" />
              <div className="mx-4 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,229,255,0.8)]" />
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-cyan-500" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] mb-6">
              What We Print
            </h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Advanced additive manufacturing solutions for industrial, engineering, and product development applications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {whatWePrint.map((item, i) => (
              <div key={i} className="group relative rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/5 hover:border-cyan-500/30 overflow-hidden shadow-2xl hover:shadow-[0_20px_40px_-15px_rgba(0,229,255,0.2)] hover:-translate-y-2 transition-all duration-500 flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)]">
                <div className="relative w-full h-52 overflow-hidden bg-slate-950">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-10" />
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                  
                  {/* Glowing Icon Overlay */}
                  <div className="absolute bottom-6 left-6 z-20 w-14 h-14 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all duration-500">
                    <item.icon className="w-7 h-7 text-cyan-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                <div className="p-6 pt-5 flex-1 flex flex-col relative z-20 bg-slate-900/80">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-8 flex-1">
                    {item.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 text-xs font-semibold text-cyan-300 bg-cyan-950/30 border border-cyan-500/20 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between group/btn cursor-pointer">
                    <span className="text-sm font-bold text-white group-hover/btn:text-cyan-400 transition-colors">
                      Learn More
                    </span>
                    <ArrowRight className="w-5 h-5 text-slate-500 group-hover/btn:text-cyan-400 group-hover/btn:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. UPLOAD DESIGN */}
      <section id="upload" className="relative py-24 z-10 bg-cyan-950/20 border-y border-cyan-500/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1631427962232-803d4f30c64f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5 mix-blend-screen pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Got a design? <span className="text-cyan-400">We’ll turn it into reality.</span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg text-slate-300 mb-10">
            <div className="flex items-center gap-2"><UploadCloud className="w-5 h-5" /> Upload STL / OBJ files</div>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-600" />
            <div className="flex items-center gap-2"><Clock className="w-5 h-5" /> Get quote within 24 hours</div>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-600" />
            <div className="flex items-center gap-2"><MessageSquare className="w-5 h-5" /> WhatsApp support available</div>
          </div>

          <Link href="/contact-us" className="inline-flex h-16 items-center justify-center gap-3 rounded-xl bg-cyan-500 px-10 text-lg font-bold text-slate-950 transition-all hover:bg-cyan-400 shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:shadow-[0_0_40px_rgba(0,229,255,0.5)] hover:-translate-y-1">
            <UploadCloud className="w-6 h-6" /> Upload Design / Get Quote
          </Link>
        </div>
      </section>

      {/* 7. OUR CREATIONS */}
      <section className="relative py-24 z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight drop-shadow-md">
              Our Creations
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {creations.map((creation, i) => (
              <div key={i} className="rounded-3xl bg-slate-900/60 backdrop-blur-md border border-white/5 overflow-hidden shadow-xl group hover:-translate-y-2 transition-all duration-300 flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)]">
                <div className="relative w-full h-56 overflow-hidden bg-slate-950">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10 pointer-events-none" />
                  <img src={creation.image} alt={creation.subtitle} className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 flex-1 flex flex-col items-center text-center relative bg-slate-900/80">
                  <div className={`w-12 h-1 mb-5 rounded-full bg-gradient-to-r ${creation.accent}`} />
                  <h3 className="text-2xl font-bold text-white mb-1">{creation.title}</h3>
                  <h4 className="text-cyan-400 font-medium mb-4">{creation.subtitle}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-1">
                    {creation.desc}
                  </p>
                  <div className="pt-4 border-t border-white/10 w-full flex justify-center">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                      {creation.tags}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="relative py-24 z-10 bg-slate-900/60 border-t border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-12">
            From Concept to Real Functional Product — <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">We Print It All</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/contact-us" className="relative inline-flex h-16 overflow-hidden rounded-xl p-[1px] focus:outline-none group">
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#a855f7_50%,#06b6d4_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-10 text-lg font-bold text-white backdrop-blur-3xl transition-all group-hover:bg-slate-900 shadow-[0_0_25px_rgba(0,229,255,0.2)]">
                Get Instant Quote
              </span>
            </Link>
            
            <a href="https://wa.me/919082020416" target="_blank" rel="noreferrer" className="inline-flex h-16 items-center justify-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-10 text-lg font-bold text-green-400 transition-all hover:bg-green-500/20 hover:border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
              <MessageSquare className="w-6 h-6" /> Contact Us / WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
