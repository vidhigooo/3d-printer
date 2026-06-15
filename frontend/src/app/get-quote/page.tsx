import type { Metadata } from "next";
import { Layers, Zap, Hexagon, HardDrive, Factory, Cpu, Hammer } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Upload CAD Design & Get Quote | VEKTOR3D SYSTEMS",
  description: "Upload your CAD files and receive a manufacturing quotation for rapid prototyping, production parts, 3D printing, scanning, casting, and finishing services.",
};

const services = [
  { name: "Industrial FDM Printing", icon: Factory },
  { name: "SLA Printing", icon: DropletIcon }, // Using Droplet logic visually
  { name: "LCD/DLP Printing", icon: Zap },
  { name: "Vacuum Casting", icon: Layers },
  { name: "3D Scanning", icon: Hexagon },
  { name: "Electroplating", icon: Cpu },
  { name: "Product Development", icon: Hammer },
];

function DropletIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  );
}

export default function GetQuotePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 overflow-hidden relative selection:bg-cyan-500/30">
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-cyan-600/10 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="absolute top-[40%] left-[30%] h-[400px] w-[400px] rounded-full bg-purple-600/5 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Header Section */}
      <section className="relative pt-36 pb-12 px-6 z-10">
        <div className="container mx-auto max-w-5xl text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold tracking-wide uppercase shadow-[0_0_15px_rgba(0,229,255,0.1)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Instant Quotation System
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            Upload CAD Design & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Get Quote</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
            Upload your CAD files and receive a manufacturing quotation for rapid prototyping, production parts, 3D printing, scanning, casting, and finishing services.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-6">
            {services.map((service, i) => (
              <div key={i} className="flex items-center gap-2 bg-slate-900/50 border border-white/5 rounded-full px-4 py-2 text-sm text-slate-300 backdrop-blur-md">
                <service.icon className="w-4 h-4 text-cyan-400" />
                {service.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative pb-32 px-6 z-10">
        <div className="container mx-auto max-w-4xl">
          <QuoteForm />
        </div>
      </section>

    </div>
  );
}
