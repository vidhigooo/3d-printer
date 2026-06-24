import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Eye, Printer, Zap, Stethoscope, Beaker, HeadphonesIcon, Settings2, ShieldCheck, Gem, Users, Award, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | VEKTOR3D SYSTEMS",
  description: "Learn more about Vektor3D Systems LLP, a trusted provider of advanced 3D printing, additive manufacturing, and digital production solutions.",
};

const whatWeOffer = [
  { title: "Industrial & Professional 3D Printers", icon: Printer },
  { title: "Rapid Prototyping Solutions", icon: Zap },
  { title: "Jewelry & Dental Manufacturing Systems", icon: Gem },
  { title: "High-Performance Printing Materials", icon: Beaker },
  { title: "Technical Consultation & After-Sales Support", icon: HeadphonesIcon },
  { title: "End-to-End Additive Manufacturing Solutions", icon: Settings2 },
];

const whyChooseUs = [
  { title: "Industry Expertise", icon: Briefcase },
  { title: "Trusted Global Technology Partners", icon: Users },
  { title: "Reliable Products & Solutions", icon: ShieldCheck },
  { title: "Dedicated Customer Support", icon: HeadphonesIcon },
  { title: "Commitment to Innovation & Quality", icon: Award },
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground selection:bg-cyan-500/30">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute left-[-10%] top-[-10%] h-[520px] w-[520px] rounded-full bg-cyan-600/10 blur-[160px]" />
        <div className="absolute right-[-10%] top-[12%] h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[170px]" />
        <div className="absolute bottom-[-10%] left-[20%] h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,#000_70%,transparent_100%)]" />
      </div>

      <main className="relative z-10 pt-8 pb-24 px-6 md:pt-16">
        <div className="container mx-auto max-w-5xl text-center mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300 mb-6">
            About Us
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground drop-shadow-[0_0_15px_rgba(255,255,255,0.18)] md:text-5xl lg:text-6xl mb-8">
            Welcome to Vektor3D Systems LLP
          </h1>
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 md:text-xl mb-6 max-w-4xl mx-auto">
            A trusted provider of advanced 3D printing, additive manufacturing, and digital production solutions.
          </p>
          <div className="space-y-6 text-base md:text-lg text-slate-700 dark:text-slate-300 max-w-4xl mx-auto text-left leading-relaxed">
            <p>
              At Vektor3D Systems LLP, we are committed to helping businesses transform ideas into reality through innovative manufacturing technologies. We offer a comprehensive range of professional 3D printers, materials, and workflow solutions designed to support industries such as engineering, product design, jewelry manufacturing, dental production, education, and industrial prototyping.
            </p>
            <p>
              Our team focuses on delivering reliable technology, expert guidance, and dedicated support to help customers improve efficiency, reduce development time, and achieve exceptional results. Whether you are creating prototypes, producing functional parts, or manufacturing precision models, Vektor3D Systems LLP provides the tools and expertise needed for success.
            </p>
          </div>
        </div>

        <div className="container mx-auto max-w-6xl mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-[24px] border border-border bg-card/60 p-8 shadow-xl transition-all duration-500 hover:border-cyan-500/30 hover:bg-card hover:shadow-[0_0_40px_-10px_rgba(0,229,255,0.2)]">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                To empower innovation by providing advanced 3D printing technologies and solutions that enable businesses to design, develop, and manufacture with confidence.
              </p>
            </div>
            
            <div className="rounded-[24px] border border-border bg-card/60 p-8 shadow-xl transition-all duration-500 hover:border-purple-500/30 hover:bg-card hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.2)]">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10 text-purple-400">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                To be a leading partner in digital manufacturing, helping organizations embrace the future of production through innovation, quality, and customer-focused service.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-6xl mb-24 border-t border-border/50 pt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">What We Offer</h2>
            <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeOffer.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl border border-border/50 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group">
                <div className="mb-4 text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 transition-transform">
                  <item.icon className="h-10 w-10" />
                </div>
                <h4 className="text-lg font-semibold text-foreground group-hover:text-foreground transition-colors">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto max-w-6xl mb-24 border-t border-border/50 pt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">Why Choose Vektor3D Systems LLP?</h2>
            <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-border/50 hover:border-border/80 transition-all group">
                <div className="mb-4 p-4 rounded-full bg-card border border-border text-slate-700 dark:text-slate-300 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-colors shadow-lg">
                  <item.icon className="h-6 w-6" />
                </div>
                <h4 className="text-sm md:text-base font-semibold text-foreground">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto max-w-4xl text-center">
          <div className="rounded-[32px] border border-border bg-gradient-to-br from-cyan-500/10 via-white/[0.04] to-purple-500/10 px-8 py-16 shadow-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl leading-snug">
              Vektor3D Systems LLP – Advancing Manufacturing Through Innovation, Precision, and 3D Printing Excellence.
            </h2>
            
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 px-8 text-base font-bold text-foreground shadow-[0_0_25px_rgba(0,229,255,0.2)] transition-all hover:scale-[1.02]"
              >
                Connect With Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
