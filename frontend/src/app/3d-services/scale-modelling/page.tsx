import type { Metadata } from "next";
import Link from "next/link";
import { 
  MessageSquare, 
  CheckCircle2, 
  Building2, 
  Factory, 
  MonitorPlay, 
  GraduationCap,
  FileJson,
  Settings,
  Printer,
  Wand2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Scale Modelling Services | Architectural & Industrial Models | Vektor3D",
  description: "Professional scale modelling services for architecture, engineering, industrial projects, and product demonstrations. High-precision 3D printed scale models by Vektor3D.",
};

const whyChoose = [
  "High Accuracy & Fine Details",
  "Faster Production Compared to Traditional Methods",
  "Custom Scales & Sizes",
  "Complex Geometries Made Easy",
  "Professional Presentation Quality"
];

const applications = [
  {
    title: "Architectural Models",
    desc: "Showcase residential, commercial, and urban development projects with realistic physical models.",
    icon: Building2,
    image: "/scale-models/architectural.jpg"
  },
  {
    title: "Industrial Models",
    desc: "Visualize factories, plants, machinery layouts, and engineering concepts.",
    icon: Factory,
    image: "/scale-models/industrial.png"
  },
  {
    title: "Product Demonstration Models",
    desc: "Present product designs and prototypes in a compact, easy-to-understand format.",
    icon: MonitorPlay,
    image: "/scale-models/product.png"
  },
  {
    title: "Educational & Exhibition Models",
    desc: "Create engaging models for museums, exhibitions, research institutes, and educational institutions.",
    icon: GraduationCap,
    image: "/scale-models/educational.png"
  }
];

const steps = [
  { id: 1, title: "Share Your CAD Design or Concept", icon: FileJson },
  { id: 2, title: "Model Preparation & Scaling", icon: Settings },
  { id: 3, title: "High-Precision 3D Printing", icon: Printer },
  { id: 4, title: "Post-Processing & Finishing", icon: Wand2 },
  { id: 5, title: "Delivery of Ready-to-Display Model", icon: CheckCircle2 }
];

const benefits = [
  "Enhanced Project Visualization",
  "Improved Client Presentations",
  "Better Design Communication",
  "Faster Decision Making",
  "Reduced Development Costs"
];

export default function ScaleModellingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative selection:bg-cyan-500/30">
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-cyan-600/10 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative pt-6 pb-16 md:pt-8 md:pb-20 px-6 z-10 border-b border-border/50">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8 relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold tracking-wide uppercase shadow-[0_0_15px_rgba(0,229,255,0.1)] mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Scale Modelling
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              Precision Scale Models for Architecture, Engineering & Industrial Projects
            </h1>
            
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-xl">
              At Vektor3D Systems LLP, we create professional scale models using advanced 3D printing technologies for architectural presentations.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/get-quote" className="relative inline-flex h-14 overflow-hidden rounded-xl p-[1px] focus:outline-none group">
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#a855f7_50%,#06b6d4_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-background px-8 py-1 text-base font-bold text-foreground backdrop-blur-3xl transition-all group-hover:bg-card shadow-[0_0_25px_rgba(0,229,255,0.2)]">
                  Get a Quote
                </span>
              </Link>
            </div>
          </div>

          <div className="relative w-full aspect-square lg:aspect-[4/3] rounded-[24px] bg-black/40 backdrop-blur-xl border border-cyan-500/20 shadow-[0_0_50px_rgba(0,229,255,0.1)] flex items-center justify-center p-2 group hover:border-cyan-400/50 transition-colors duration-500 mt-10 lg:mt-0">
            <div className="absolute inset-0 bg-cyan-500/20 blur-[80px] rounded-full scale-75 group-hover:bg-cyan-400/30 transition-all duration-700" />
            
            <img 
              src="/scale-model.png" 
              alt="Architecture Scale Model" 
              className="w-full h-full object-cover rounded-[20px] relative z-10"
            />
          </div>

        </div>
      </section>

      {/* 2. WHY CHOOSE SCALE MODELLING */}
      <section className="relative py-20 z-10 bg-card/40 border-b border-border/50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight drop-shadow-md">
              Why Choose Scale Modelling?
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {whyChoose.map((reason, idx) => (
              <div key={idx} className="flex items-center gap-3 px-6 py-4 bg-card/80 border border-cyan-500/20 rounded-2xl shadow-lg hover:border-cyan-500/50 hover:-translate-y-1 transition-all">
                <CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0" />
                <span className="text-foreground font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. APPLICATIONS */}
      <section className="relative py-24 z-10 overflow-hidden border-b border-border/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight drop-shadow-md">
              Applications
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, idx) => (
              <div key={idx} className="group relative rounded-3xl bg-card/60 backdrop-blur-xl border border-border/50 overflow-hidden shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col">
                <div className="relative w-full h-48 overflow-hidden bg-background">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent z-10" />
                  <img src={app.image} alt={app.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute bottom-4 left-4 z-20 w-12 h-12 rounded-xl bg-cyan-500/20 backdrop-blur-md border border-cyan-500/30 flex items-center justify-center">
                    <app.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <div className="p-6 pt-4 flex-1 flex flex-col bg-card/80">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-cyan-400 transition-colors">{app.title}</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                    {app.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR PROCESS */}
      <section className="relative py-32 z-10 overflow-hidden bg-card/40 border-b border-border/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight drop-shadow-md">
              Our Process
            </h2>
          </div>

          <div className="relative flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-4">
            {/* Glowing Connector Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-16 right-16 h-[2px] bg-slate-100 dark:bg-slate-900 z-0">
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
            </div>

            {/* Glowing Connector Line (Mobile) */}
            <div className="lg:hidden absolute top-0 bottom-0 left-[48px] w-[2px] bg-slate-100 dark:bg-slate-900 z-0">
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-50" />
            </div>

            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="relative z-10 flex flex-row lg:flex-col items-center lg:text-center gap-6 group w-full lg:flex-1">
                  <div className="relative flex items-center justify-center w-24 h-24 shrink-0 rounded-2xl bg-card border border-slate-700 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_25px_rgba(0,229,255,0.2)] transition-all duration-300 backdrop-blur-md">
                    <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-600 flex items-center justify-center text-xs font-bold text-cyan-400 group-hover:bg-cyan-950 group-hover:border-cyan-500 transition-colors shadow-lg">
                      0{step.id}
                    </span>
                    <Icon className="w-10 h-10 text-slate-700 dark:text-slate-300 group-hover:text-cyan-400 transition-colors" strokeWidth={1.5} />
                  </div>
                  
                  <div className="flex-1 lg:flex-none">
                    <h3 className="text-xl lg:text-lg font-bold text-foreground mb-2 group-hover:text-foreground transition-colors">{step.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. BENEFITS */}
      <section className="relative py-24 z-10 bg-background">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight drop-shadow-md">
              Benefits
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="px-6 py-3 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-300 font-semibold tracking-wide shadow-lg hover:bg-cyan-900/50 hover:border-cyan-500/50 transition-all">
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section id="upload" className="relative py-24 z-10 bg-cyan-950/20 overflow-hidden border-t border-cyan-500/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1631427962232-803d4f30c64f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5 mix-blend-screen pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
            Need a Custom Scale Model?
          </h2>
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
            Transform your designs into detailed physical models with Vektor3D&apos;s advanced 3D printing solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/get-quote" className="relative inline-flex h-14 overflow-hidden rounded-xl p-[1px] focus:outline-none group">
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#a855f7_50%,#06b6d4_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-background px-8 text-base font-bold text-foreground backdrop-blur-3xl transition-all group-hover:bg-card shadow-[0_0_25px_rgba(0,229,255,0.2)]">
                Get a Quote
              </span>
            </Link>
            
            <a href="https://api.whatsapp.com/send?phone=919082020416" target="_blank" rel="noreferrer" className="inline-flex h-14 items-center justify-center rounded-xl border border-white/20 bg-slate-100 dark:bg-slate-900/50 px-8 text-base font-bold text-foreground transition-all hover:bg-slate-100 dark:bg-slate-900 hover:border-white/40">
              <MessageSquare className="w-5 h-5 mr-2" /> Contact Our Team
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
