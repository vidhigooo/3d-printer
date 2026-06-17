import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Box, Gauge, Layers3, ShieldCheck, Factory, Cpu, Ruler, TimerReset } from "lucide-react";

export const metadata: Metadata = {
  title: "Techno Polymers & Filaments | Premium 3D Printing Materials",
  description: "Discover our extensive range of high-quality 3D printer filaments. Perfect for hobbyists, engineers, and large-scale manufacturing.",
};

const lineup = [
  {
    name: "Elegoo PLA PLUS",
    subtitle: "High-Quality Multi-color Filament",
    image: "/resin/p1.png",
    price: "₹1,249.00",
    summary:
      "Engineered for reliable, everyday 3D printing with excellent bed adhesion, minimal warping, and a smooth surface finish.",
    highlights: [
      "Multiple Vibrant Colors",
      "Excellent Bed Adhesion",
      "Minimal Warping",
      "Smooth Surface Finish",
    ],
  },
  {
    name: "Vektor3D PETG Premium",
    subtitle: "Durable & Strong (White)",
    image: "/resin/p2_1.png",
    price: "₹850.00",
    summary:
      "Offers a great balance of strength, flexibility, and heat resistance. Ideal for mechanical parts and functional prototypes.",
    highlights: [
      "Vacuum Packed",
      "High Heat Resistance",
      "Excellent Flexibility",
      "Non-Toxic Material",
    ],
  },
  {
    name: "Vektor3D ABS Premium",
    subtitle: "Industrial-grade Strength (White)",
    image: "/resin/p2_1.png",
    price: "₹850.00",
    summary:
      "Widely used for end-use parts, automotive components, and objects requiring high durability and temperature resistance.",
    highlights: [
      "High Impact Resistance",
      "Industrial Grade",
      "Vacuum Packed",
      "High Temperature Resistance",
    ],
  },
  {
    name: "Vektor3D PLA Premium Plus",
    subtitle: "Precision & Detail (White)",
    image: "/resin/p2_1.png",
    price: "₹850.00",
    summary:
      "Unparalleled ease of use with zero warping. Perfect choice for conceptual models, educational projects, and high-detail miniatures.",
    highlights: [
      "Zero Warping",
      "High-Detail Printing",
      "Easy to Print",
      "Vacuum Packed",
    ],
  },
];

const features = [
  {
    title: "Premium Quality Control",
    description:
      "Manufactured with strict tolerances to ensure consistent diameter and reliable printing performance.",
    icon: Box,
  },
  {
    title: "Zero Warping",
    description:
      "Engineered materials that stick to the bed flawlessly, reducing failed prints and wasted time.",
    icon: ShieldCheck,
  },
  {
    title: "Industrial Grade Strength",
    description:
      "Tough, durable materials suitable for functional prototypes, end-use parts, and mechanical applications.",
    icon: Layers3,
  },
  {
    title: "Vibrant Color Options",
    description:
      "A wide spectrum of consistent, bold colors to bring your creative and industrial projects to life.",
    icon: Gauge,
  },
];

const specs = [
  {
    label: "Material",
    values: ["PLA PLUS", "PETG", "ABS", "PLA Premium Plus"],
  },
  {
    label: "Melting Temp",
    values: ["190 - 220°C", "200 - 220°C", "220 - 240°C", "200 - 220°C"],
  },
  {
    label: "Bed Temperature",
    values: ["40 - 60°C", "70 - 90°C", "90 - 110°C", "40 - 60°C"],
  },
  {
    label: "Filament Diameter",
    values: ["1.75 mm", "1.75 mm", "1.75 mm", "1.75 mm"],
  },
  {
    label: "Vacuum Packed",
    values: ["Yes", "Yes", "Yes", "Yes"],
  },
  {
    label: "Best For",
    values: ["Everyday Prints", "Functional Prototypes", "Mechanical Parts", "High Detail Models"],
  },
];

const applications = [
  {
    title: "Functional Prototypes",
    description: "Testing parts for fit, form, and function before mass production.",
    icon: Factory,
  },
  {
    title: "End-Use Parts",
    description: "Manufacturing custom tools, jigs, and small batch production components.",
    icon: Cpu,
  },
  {
    title: "Conceptual Models",
    description: "Creating highly detailed architectural or product design models.",
    icon: Ruler,
  },
];

function SectionHeading({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">
          <span className="h-2 w-2 rounded-full bg-purple-400" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">{title}</h2>
      {text && <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">{text}</p>}
    </div>
  );
}

export default function TechnoPolymersFilamentsPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-slate-200 selection:bg-purple-500/30">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute left-[-10%] top-[-8%] h-[540px] w-[540px] rounded-full bg-purple-600/10 blur-[160px]" />
        <div className="absolute right-[-12%] top-[12%] h-[520px] w-[520px] rounded-full bg-indigo-600/10 blur-[170px]" />
        <div className="absolute bottom-[-12%] left-[18%] h-[420px] w-[420px] rounded-full bg-fuchsia-600/10 blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,#000_70%,transparent_100%)]" />
      </div>

      <main className="relative z-10">
        <section className="relative border-b border-white/5 px-6 pb-20 pt-36 md:pb-28 md:pt-44">
          <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
                Premium Materials
              </div>

              <div className="space-y-6">
                <h1 className="max-w-3xl text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.18)] md:text-6xl lg:text-7xl">
                  Techno Polymers & Filaments
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
                  Discover our extensive range of high-quality 3D printer filaments. Perfect for hobbyists, engineers, and large-scale manufacturing with exceptional precision and strength.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#collection"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 px-8 text-base font-bold text-white shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                >
                  Explore Collection
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 text-base font-bold text-white transition-all hover:border-purple-500/30 hover:bg-white/10"
                >
                  Contact Sales
                </Link>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-tr from-purple-500/20 via-transparent to-indigo-500/20 blur-[70px]" />
              <div className="relative w-full max-w-2xl overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(168,85,247,0.14)]">
                <Image
                  src="/resin/polymer.png"
                  alt="Techno Polymers and Filaments"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="collection" className="border-b border-white/5 px-6 py-24">
          <div className="container mx-auto max-w-7xl">
            <SectionHeading
              title="Explore Our Filament Range"
              text="From standard PLA to industrial-grade ABS, we have the right material for your next big project."
            />

            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-4 sm:grid-cols-2">
              {lineup.map((printer) => (
                <article
                  key={printer.name}
                  className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.22)] flex flex-col"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-white flex items-center justify-center">
                    <Image
                      src={printer.image}
                      alt={printer.name}
                      width={600}
                      height={450}
                      className="h-full w-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
                    <div className="absolute left-4 top-4 rounded-full border border-purple-500/20 bg-blue/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-lg">
                      {printer.price}
                    </div>
                  </div>

                  <div className="space-y-5 p-7 flex-1 flex flex-col">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-white line-clamp-2">{printer.name}</h3>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-purple-400">{printer.subtitle}</p>
                    </div>

                    <p className="text-sm leading-relaxed text-slate-400 flex-1">{printer.summary}</p>

                    <div>
                      <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">Key Highlights</h4>
                      <ul className="grid grid-cols-1 gap-2 text-xs text-slate-300">
                        {printer.highlights.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-purple-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-purple-500/30 bg-purple-500/10 px-5 py-3 text-sm font-bold text-white transition-all hover:bg-purple-500 hover:text-white"
                    >
                      Add to Cart
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/5 bg-white/[0.02] px-6 py-24">
          <div className="container mx-auto max-w-7xl">
            <SectionHeading
              title="Why Choose Our Filaments?"
              text="Engineered for consistency, precision, and flawless performance on any FDM 3D printer."
            />

            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-[24px] border border-white/10 bg-slate-900/60 p-6 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-slate-900"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10 text-purple-300">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="specs" className="border-b border-white/5 px-6 py-24">
          <div className="container mx-auto max-w-7xl">
            <SectionHeading
              title="Material Specifications"
              text="Compare the specifications to find the perfect filament for your next print."
            />

            <div className="mt-16 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_repeat(4,minmax(0,1fr))] overflow-x-auto">
                <div className="border-b border-white/10 bg-slate-900/80 px-6 py-5 font-bold text-white lg:border-r lg:border-b-0 min-w-[200px]">
                  Specifications
                </div>
                {lineup.map((printer) => (
                  <div
                    key={printer.name}
                    className="border-b border-white/10 px-6 py-5 font-bold text-purple-300 lg:border-b-0 lg:border-r last:border-r-0 min-w-[150px]"
                  >
                    {printer.name}
                  </div>
                ))}

                {specs.map((spec) => (
                  <React.Fragment key={spec.label}>
                    <div className="border-b border-white/10 bg-slate-900/40 px-6 py-5 font-semibold text-white lg:border-r min-w-[200px]">
                      {spec.label}
                    </div>
                    {spec.values.map((value, index) => (
                      <div
                        key={`${spec.label}-${index}`}
                        className="border-b border-white/10 px-6 py-5 text-sm text-slate-300 lg:border-r last:border-r-0 min-w-[150px]"
                      >
                        {value}
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/5 bg-white/[0.02] px-6 py-24">
          <div className="container mx-auto max-w-7xl">
            <SectionHeading title="Ideal Applications" text="See what our polymers are best used for." />

            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
              {applications.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10 text-purple-300">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="container mx-auto max-w-5xl text-center">
            <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-purple-500/10 via-white/[0.04] to-indigo-500/10 px-6 py-14 shadow-2xl md:px-12 md:py-16">
              <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
                Need Bulk Filament Orders?
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-400 md:text-lg">
                We supply high-quality printing materials to educational institutions, manufacturing plants, and 3D printing farms.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 px-8 text-base font-bold text-white shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-all hover:scale-[1.02]"
                >
                  Contact for Bulk Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>
        
       
      </main>
    </div>
  );
}
