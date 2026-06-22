import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Sparkles, Droplets, PaintBucket, Layers, Shield, Focus } from "lucide-react";

export const metadata: Metadata = {
  title: "Velvet Coating | VEKTOR3D SYSTEMS",
  description:
    "Velvet Coating is a premium surface finishing solution that gives 3D printed parts, prototypes, and product models a smooth, soft-touch, and elegant matte finish.",
};

const benefits = [
  { title: "Premium Soft-Touch", desc: "Luxurious tactile experience", icon: Droplets },
  { title: "Uniform Texture", desc: "Smooth and consistent surface", icon: Layers },
  { title: "Visual Appeal", desc: "Enhanced, high-end aesthetics", icon: Sparkles },
  { title: "Scratch Resistance", desc: "Improved durability and protection", icon: Shield },
  { title: "Matte Appearance", desc: "Professional and elegant finish", icon: Focus },
  { title: "Custom Colors", desc: "Match any design requirement", icon: PaintBucket },
];

const applications = [
  "Product Prototypes",
  "Consumer Products",
  "Automotive Components",
  "Electronics Enclosures",
  "Display & Exhibition Models",
  "Luxury Packaging Samples",
  "Custom Gifts & Personalized Products",
  "Toys, Collectibles & Action Figures"
];

const processSteps = [
  "Surface Preparation",
  "Priming",
  "Velvet Coating",
  "Curing",
  "Quality Check & Delivery"
];

const showcaseImages = Array.from({ length: 6 }, (_, i) => `/velvet/${i + 3}.png`);

export default function VelvetCoatingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 overflow-hidden relative selection:bg-cyan-500/30">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-cyan-600/10 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Hero Section */}
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
                VELVET COATING
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-slate-300 max-w-2xl">
                Premium soft-touch finish for 3D printed parts, prototypes, and product models.
              </p>
            </div>

            <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl">
              Velvet Coating is a premium surface finishing solution that enhances the overall appearance of components, creating a high-end, production-ready look and feel with a smooth, elegant matte finish.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/get-quote"
                className="relative inline-flex h-14 overflow-hidden rounded-xl p-[1px] focus:outline-none group"
              >
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#60a5fa_50%,#06b6d4_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-8 py-1 text-base font-bold text-white backdrop-blur-3xl transition-all group-hover:bg-slate-900 shadow-[0_0_25px_rgba(6,182,212,0.2)]">
                  Get Quote
                </span>
              </Link>
            </div>
          </div>

          <div className="relative w-full aspect-square lg:aspect-[4/3] rounded-[24px] bg-black/40 backdrop-blur-xl border border-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.12)] flex items-center justify-center p-3 group hover:border-cyan-400/50 transition-colors duration-500 mt-10 lg:mt-0 overflow-hidden">
            <div className="absolute inset-0 bg-cyan-500/20 blur-[80px] rounded-full scale-75 group-hover:bg-cyan-400/30 transition-all duration-700" />
            <div className="relative z-10 w-full h-full rounded-[20px] bg-slate-900/85 border border-white/5 overflow-hidden shadow-inner p-4 md:p-6 flex flex-col">
              <div className="flex-1 min-h-0 rounded-[18px] overflow-hidden bg-slate-950/70 border border-white/10 flex items-center justify-center">
                <Image
                  src="/velvet/1.png"
                  alt="Velvet coating finish"
                  width={800}
                  height={800}
                  className="w-full h-full object-contain object-center p-2 md:p-4 transition-transform duration-700 group-hover:scale-[1.02]"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 mix-blend-screen" />
              </div>
              <div className="mt-4 flex items-center justify-between gap-4 px-1">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/80">Premium Finish</p>
                  <p className="mt-2 text-lg md:text-xl font-semibold text-white">Soft-Touch Velvet</p>
                </div>
                <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200 backdrop-blur-md whitespace-nowrap">
                  Matte Appearance
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="relative py-24 z-10 bg-slate-900/20 border-b border-white/5">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Key Benefits</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-400 rounded-full mx-auto" />
            <p className="text-lg text-slate-400 max-w-2xl mx-auto pt-4">
              Our velvet coating process provides numerous advantages for high-end prototypes and end-use products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-2 shadow-xl">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="relative py-24 z-10 border-b border-white/5">
        <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">Ideal Applications</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-400 rounded-full" />
            </div>

            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              Velvet coating is perfect for a wide variety of industries where surface feel and aesthetics are paramount.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {applications.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300 text-sm font-medium p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors group">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 group-hover:scale-110 transition-transform mt-0.5" />
                  <span className="group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-square lg:aspect-[4/3] rounded-[24px] bg-slate-900/50 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(6,182,212,0.1)] flex items-center justify-center p-2 group hover:border-cyan-500/40 transition-all duration-700 hover:-translate-y-2 overflow-hidden order-1 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-400/10 blur-[50px] rounded-full scale-75 group-hover:scale-100 transition-all duration-700 opacity-60" />
            <div className="w-full h-full rounded-[20px] bg-slate-900/80 border border-white/5 relative overflow-hidden shadow-inner flex items-center justify-center p-6">
              <Image
                src="/velvet/2.png"
                alt="Velvet coating application"
                width={800}
                height={800}
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-purple-500/5 mix-blend-screen pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Gallery */}
      <section className="relative py-24 z-10 bg-slate-900/20 border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 mb-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Our Showcase</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-400 rounded-full mx-auto" />
          </div>
        </div>

        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] w-full">
          <div className="velvet-track flex w-max gap-6 px-3">
            {[...showcaseImages, ...showcaseImages].map((src, index) => (
              <div key={index} className="group relative w-72 md:w-80 h-72 md:h-80 shrink-0 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-cyan-500/30 transition-all duration-500 flex items-center justify-center p-6 shadow-xl">
                <Image
                  src={src}
                  alt={`Velvet Showcase ${index + 1}`}
                  fill
                  className="object-contain p-6 transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          .velvet-track {
            animation: velvetMarquee 40s linear infinite;
          }
          .velvet-track:hover {
            animation-play-state: paused;
          }
          @keyframes velvetMarquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}} />
      </section>

      {/* Process Section */}
      <section className="relative py-24 z-10 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Workflow</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-400 rounded-full mx-auto" />
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

      {/* CTA Section */}
      <section className="relative py-28 z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900/20" />
        <div className="container mx-auto max-w-4xl px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Ready to Give Your Products a Premium Finish?
          </h2>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
            Give your prototypes and products a premium soft-touch finish with our Velvet Coating Services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/get-quote" className="relative inline-flex h-14 overflow-hidden rounded-xl p-[1px] focus:outline-none group">
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#60a5fa_50%,#06b6d4_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-10 py-1 text-lg font-bold text-white backdrop-blur-3xl transition-all group-hover:bg-slate-900 shadow-[0_0_25px_rgba(6,182,212,0.2)]">
                Get Quote
              </span>
            </Link>
            <Link href="/contact-us" className="inline-flex h-14 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-10 py-1 text-lg font-bold text-white transition-all hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
