import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Cpu, Layers3, Settings2, ShieldCheck, Sparkles, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Industrial SLA Printer Series | VEKTOR3D SYSTEMS",
  description:
    "Industrial SLA printers designed for speed, stability, and large-format production.",
};

const printerLineup = [
  {
    name: "Mars Pro 600 Compact",
    subtitle: "Industrial SLA Printer",
    image: "/mars_600.png",
    bullets: ["Compact footprint for controlled production floors", "Stable resin handling for repeatable output", "Fast setup for daily production cycles", "Precision-built for consistent part quality"],
  },
  {
    name: "Mars Pro 850 Large",
    subtitle: "Format High-Speed SLA Printer",
    image: "/mars_850.png",
    bullets: ["Large build capacity for bigger components", "High-speed workflow for production scaling", "Optimized for demanding commercial batches", "Balanced throughput with sharp detail retention"],
  },
  {
    name: "Mars Pro 1600",
    subtitle: "Large-Scale Industrial SLA Solution",
    image: "/mars_1600.png",
    bullets: ["Large-scale SLA output for enterprise needs", "Engineered for long-run industrial performance", "Supports high-volume production environments", "Built for dependable accuracy at scale"],
  },
];

const features = [
  {
    title: "Grade 00 Marble Platform",
    icon: Sparkles,
    description: "A rigid foundation that helps maintain stability and reduce vibration during precision printing cycles.",
  },
  {
    title: "Intelligent Vario Spot Module",
    icon: Cpu,
    description: "Adaptive spot control designed to enhance precision, consistency, and print clarity across applications.",
  },
  {
    title: "Wide Material Options",
    icon: Layers3,
    description: "Compatible with a broad resin range for functional prototypes, visual models, and production parts.",
  },
  {
    title: "Smart & Simplified Operation",
    icon: Settings2,
    description: "Streamlined controls and workflow support for faster setup, monitoring, and repeatable operation.",
  },
];

const specs = [
  ["Build Volume", "Compact to extra-large SLA configurations"],
  ["Layer Precision", "High-detail resin output for fine surfaces"],
  ["Print Speed", "Optimized for industrial throughput"],
  ["Platform Stability", "Marble platform with vibration control"],
  ["Material Range", "Standard, tough, engineering, and specialty resins"],
  ["Operation", "Smart controls with simplified production workflow"],
];

const quotePoints = [
  "High-precision industrial SLA printers",
  "Fast production with stable repeatability",
  "Large-format solutions for demanding workstreams",
];

function SectionHeading({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
          <span className="h-2 w-2 rounded-full bg-sky-400" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">{title}</h2>
      {text && <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">{text}</p>}
    </div>
  );
}

export default function Sla3dPrinterPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-slate-200 selection:bg-sky-500/30">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute left-[-10%] top-[-10%] h-[520px] w-[520px] rounded-full bg-sky-600/10 blur-[160px]" />
        <div className="absolute right-[-10%] top-[12%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[170px]" />
        <div className="absolute bottom-[-10%] left-[20%] h-[420px] w-[420px] rounded-full bg-cyan-600/10 blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,#000_70%,transparent_100%)]" />
      </div>

      <main className="relative z-10">
        <section className="relative border-b border-white/5 px-6 pb-20 pt-36 md:pb-28 md:pt-44">
          <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Industrial SLA Series
              </div>
              <div className="space-y-6">
                <h1 className="max-w-3xl text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.18)] md:text-6xl lg:text-7xl">
                  Industrial SLA Printer Series
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
                  High-precision industrial SLA printers designed for speed, stability, and large-format production.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-transparent bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 px-8 text-base font-bold text-white shadow-[0_0_25px_rgba(14,165,233,0.2)] transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(14,165,233,0.3)]"
                >
                  Get Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="flex flex-wrap gap-3 text-sm text-slate-300">
                {quotePoints.map((point) => (
                  <div key={point} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    <CheckCircle2 className="h-4 w-4 text-sky-400" />
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-tr from-sky-500/20 via-transparent to-blue-500/20 blur-[70px]" />
              <div className="relative w-full max-w-2xl overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(0,229,255,0.14)]">
                <Image
                  src="/industrial_sla.png"
                  alt="Industrial SLA printer"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/5 px-6 py-24">
          <div className="container mx-auto max-w-7xl">
            <SectionHeading title="Explore Our SLA Printer Range" />
            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {printerLineup.map((printer) => (
                <article
                  key={printer.name}
                  className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-sky-500/30 hover:shadow-[0_0_40px_-10px_rgba(14,165,233,0.22)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-900/70">
                    <Image
                      src={printer.image}
                      width={900}
                      height={675}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      alt={printer.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                    <div className="absolute left-4 top-4 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-md">
                      SLA Printer
                    </div>
                  </div>
                  <div className="space-y-5 p-7">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-white">{printer.name}</h3>
                      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300/90">{printer.subtitle}</p>
                    </div>

                    <ul className="space-y-3 text-sm text-slate-300">
                      {printer.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact-us"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-white transition-all hover:border-sky-500/30 hover:bg-sky-500/10 hover:text-sky-200"
                    >
                      Get Quote
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/5 bg-white/[0.02] px-6 py-24">
          <div className="container mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Advanced Features"
              title="Engineered for Precision & Performance"
            />
            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-[24px] border border-white/10 bg-slate-900/60 p-6 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-sky-500/30 hover:bg-slate-900"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-500/20 bg-sky-500/10 text-sky-300">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/5 px-6 py-24">
          <div className="container mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Technical Specs"
              title="Compare Technical Specifications"
            />
            <div className="mt-16 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {specs.map(([label, value], index) => (
                  <div
                    key={label}
                    className={`flex items-center justify-between gap-4 border-b border-white/10 px-6 py-5 ${index % 2 === 0 ? "md:border-r" : ""} ${index === specs.length - 1 ? "border-b-0" : ""}`}
                  >
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="h-5 w-5 text-cyan-400" />
                      <span className="font-semibold text-white">{label}</span>
                    </div>
                    <span className="max-w-[55%] text-right text-sm text-slate-400">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/5 px-6 py-24 bg-white/[0.02]">
          <div className="container mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Video"
              title="Watch the Machine in Action"
              text="See how our industrial SLA printers deliver precision, speed, and reliability."
            />
            <div className="mt-16 overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/70 shadow-[0_0_60px_rgba(0,229,255,0.12)]">
              <video
                src="/sla.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="container mx-auto max-w-5xl text-center">
            <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-white/[0.04] to-fuchsia-500/10 px-6 py-14 shadow-2xl md:px-12 md:py-16">
              <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
                Looking for the Right SLA Printer?
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-400 md:text-lg">
                Connect with our experts for pricing, technical consultation, and machine selection guidance.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 px-8 text-base font-bold text-white shadow-[0_0_25px_rgba(14,165,233,0.2)] transition-all hover:scale-[1.02]"
                >
                  Request Quote
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 text-base font-bold text-white transition-all hover:border-sky-500/30 hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
