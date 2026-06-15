import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Cpu, Factory, Gauge, Layers3, Ruler, ShieldCheck, TimerReset, Truck, Box } from "lucide-react";
import FAQ from "@/components/FAQ";

const faqItems = [
	{
		question: "Which industrial 3D printer is right for my application?",
		answer: "The ideal printer depends on your build volume, material requirements, production goals, and application needs. Our experts can help you select the most suitable solution."
	},
	{
		question: "What materials can these industrial FDM printers print?",
		answer: "These printers support a wide range of materials including PLA, PETG, ABS, ASA, TPU, Nylon, Carbon Fiber, and other engineering-grade filaments."
	},
	{
		question: "What industries use industrial FDM 3D printers?",
		answer: "Industrial FDM printers are widely used in manufacturing, automotive, aerospace, product development, architecture, education, and research applications."
	},
	{
		question: "Are these printers suitable for large-scale production?",
		answer: "Yes, their large build volumes and reliable performance make them ideal for prototypes, tooling, functional parts, and low-volume production."
	},
	{
		question: "Do you provide installation and operator training?",
		answer: "Yes, we provide complete installation, machine setup, operator training, and technical support to ensure smooth operation."
	},
	{
		question: "What after-sales support do you offer?",
		answer: "We provide technical assistance, maintenance support, spare parts, and troubleshooting support whenever required."
	},
	{
		question: "Can I schedule a live demonstration before purchasing?",
		answer: "Yes, demonstrations can be arranged to help you evaluate print quality, speed, and machine capabilities."
	},
	{
		question: "Do you deliver and support customers across India?",
		answer: "Yes, we supply industrial 3D printers and provide support services for customers throughout India."
	}
];

export const metadata: Metadata = {
	title: "Industrial FDM 3D Printer Series | VEKTOR3D SYSTEMS",
	description:
		"High-performance large format FDM solutions for prototyping, tooling, product development, and large-scale manufacturing applications.",
};

const lineup = [
	{
		name: "V3D Protomake 1200",
		subtitle: "Large Format Industrial FDM Printer",
		image: "/protomake.png",
		summary:
			"Built for manufacturing large prototypes, molds, fixtures, and functional industrial components.",
		highlights: [
			"Large Build Volume",
			"High-Speed Printing",
			"Industrial-Grade Reliability",
			"Precision Engineering",
		],
	},
	{
		name: "V3D Vertex 1000",
		subtitle: "Professional Industrial FDM Solution",
		image: "/v3d_vertex.png",
		summary:
			"Designed for continuous production, engineering applications, and demanding industrial workflows.",
		highlights: [
			"Stable Printing Performance",
			"Advanced Motion System",
			"Multi-Material Compatibility",
			"Industrial Workflow Efficiency",
		],
	},
	{
		name: "Elegoo OrangeStorm Giga",
		subtitle: "Ultra-Large Format FDM Printer",
		image: "/elgoo_orange.png",
		summary:
			"Ideal for oversized models, rapid prototyping, and large-scale manufacturing projects.",
		highlights: [
			"Massive Build Capacity",
			"High-Speed Production",
			"User-Friendly Operation",
			"Reliable Large-Part Printing",
		],
	},
];

const features = [
	{
		title: "Large Build Volume",
		description:
			"Print large components in a single build, reducing assembly time and improving efficiency.",
		icon: Box,
	},
	{
		title: "High-Speed Production",
		description:
			"Accelerate product development and manufacturing with optimized printing performance.",
		icon: Gauge,
	},
	{
		title: "Engineering Material Support",
		description:
			"Compatible with a wide range of engineering-grade thermoplastics for industrial applications.",
		icon: Layers3,
	},
	{
		title: "Reliable Industrial Operation",
		description:
			"Designed for continuous performance and consistent results in demanding production environments.",
		icon: ShieldCheck,
	},
];

const specs = [
	{
		label: "Build Volume",
		values: ["1200 x 1200 x 1200 mm", "1000 x 1000 x 1000 mm", "800 x 800 x 1000 mm"],
	},
	{
		label: "Layer Height",
		values: ["0.1 - 0.4 mm", "0.1 - 0.4 mm", "0.1 - 0.4 mm"],
	},
	{
		label: "Nozzle Diameter",
		values: ["0.4 / 0.6 / 0.8 / 1.0 mm", "0.4 / 0.6 / 0.8 / 1.0 mm", "0.4 / 0.6 / 0.8 / 1.2 mm"],
	},
	{
		label: "Printing Speed",
		values: ["Up to 300 mm/s", "Up to 300 mm/s", "Up to 350 mm/s"],
	},
	{
		label: "Extruder Type",
		values: ["Direct Drive Industrial Extruder", "Direct Drive Industrial Extruder", "High-Flow Direct Drive Extruder"],
	},
	{
		label: "Material Support",
		values: ["PLA, ABS, PETG, PA, PC, CF blends", "PLA, ABS, PETG, PA, PC, CF blends", "PLA, ABS, PETG, TPU, ASA, engineering polymers"],
	},
	{
		label: "Machine Dimensions",
		values: ["Approx. 1800 x 1600 x 1900 mm", "Approx. 1600 x 1500 x 1750 mm", "Approx. 1450 x 1300 x 1700 mm"],
	},
	{
		label: "Machine Weight",
		values: ["Approx. 850 kg", "Approx. 720 kg", "Approx. 680 kg"],
	},
];

const applications = [
	{
		title: "Automotive",
		description: "Functional prototypes, jigs, fixtures, and manufacturing aids.",
		icon: Factory,
	},
	{
		title: "Aerospace",
		description: "Lightweight components and engineering validation models.",
		icon: Truck,
	},
	{
		title: "Product Development",
		description: "Rapid prototyping for faster design iterations.",
		icon: Cpu,
	},
	{
		title: "Tooling & Fixtures",
		description: "Custom tools and production-ready fixtures.",
		icon: Ruler,
	},
	{
		title: "Manufacturing",
		description: "Large-format parts and low-volume production.",
		icon: TimerReset,
	},
	{
		title: "Education & Research",
		description: "Advanced engineering and innovation projects.",
		icon: Layers3,
	},
];

function SectionHeading({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
	return (
		<div className="mx-auto max-w-3xl text-center">
			{eyebrow && (
				<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
					<span className="h-2 w-2 rounded-full bg-cyan-400" />
					{eyebrow}
				</div>
			)}
			<h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">{title}</h2>
			{text && <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">{text}</p>}
		</div>
	);
}

export default function IndustrialFdmPrinterPage() {
	return (
		<div className="min-h-screen overflow-hidden bg-slate-950 text-slate-200 selection:bg-cyan-500/30">
			<div className="fixed inset-0 pointer-events-none z-0">
				<div className="absolute left-[-10%] top-[-8%] h-[540px] w-[540px] rounded-full bg-cyan-600/10 blur-[160px]" />
				<div className="absolute right-[-12%] top-[12%] h-[520px] w-[520px] rounded-full bg-blue-600/10 blur-[170px]" />
				<div className="absolute bottom-[-12%] left-[18%] h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[160px]" />
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,#000_70%,transparent_100%)]" />
			</div>

			<main className="relative z-10">
				<section className="relative border-b border-white/5 px-6 pb-20 pt-36 md:pb-28 md:pt-44">
					<div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
						<div className="space-y-8">
							<div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
								Industrial FDM Series
							</div>

							<div className="space-y-6">
								<h1 className="max-w-3xl text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.18)] md:text-6xl lg:text-7xl">
									Industrial FDM 3D Printer Series
								</h1>
								<p className="max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
									High-performance large format FDM solutions. Engineered for industrial prototyping, tooling, product development, and large-scale manufacturing applications.
								</p>
							</div>

							<div className="flex flex-wrap gap-4">
								<Link
									href="/get-quote"
									className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-sky-500 px-8 text-base font-bold text-white shadow-[0_0_25px_rgba(0,229,255,0.2)] transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]"
								>
									Get Quote
									<ArrowRight className="h-5 w-5" />
								</Link>
								<Link
									href="#specs"
									className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 text-base font-bold text-white transition-all hover:border-cyan-500/30 hover:bg-white/10"
								>
									Download Brochure
								</Link>
							</div>
						</div>

						<div className="relative flex items-center justify-center">
							<div className="absolute inset-0 rounded-[32px] bg-gradient-to-tr from-cyan-500/20 via-transparent to-blue-500/20 blur-[70px]" />
							<div className="relative w-full max-w-2xl overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(0,229,255,0.14)]">
								<Image
									src="/industrial_fdm.png"
									alt="Industrial FDM printer"
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
						<SectionHeading
							title="Explore Our FDM Printer Range"
							text="Discover industrial-grade FDM printers designed to deliver reliability, precision, and large-format production capabilities."
						/>

						<div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
							{lineup.map((printer) => (
								<article
									key={printer.name}
									className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-[0_0_40px_-10px_rgba(0,229,255,0.22)]"
								>
									<div className="relative aspect-[4/3] overflow-hidden bg-slate-900/70">
										<Image
											src={printer.image}
											alt={printer.name}
											width={900}
											height={675}
											className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
										<div className="absolute left-4 top-4 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-md">
											Industrial FDM
										</div>
									</div>

									<div className="space-y-5 p-7">
										<div>
											<h3 className="text-2xl font-bold tracking-tight text-white">{printer.name}</h3>
											<p className="mt-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300/90">{printer.subtitle}</p>
										</div>

										<p className="text-sm leading-relaxed text-slate-400">{printer.summary}</p>

										<div>
											<h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">Key Highlights</h4>
											<ul className="grid grid-cols-1 gap-3 text-sm text-slate-300">
												{printer.highlights.map((item) => (
													<li key={item} className="flex items-start gap-3">
														<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
														<span>{item}</span>
													</li>
												))}
											</ul>
										</div>

										<Link
											href="/get-quote"
											className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-white transition-all hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-200"
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
							title="Built for Industrial Manufacturing"
							text="Large-format FDM systems engineered for consistent production and demanding engineering workflows."
						/>

						<div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
							{features.map((feature) => (
								<article
									key={feature.title}
									className="rounded-[24px] border border-white/10 bg-slate-900/60 p-6 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-slate-900"
								>
									<div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">
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
							title="Technical Specifications"
							text="Compare the specifications of our industrial FDM printer lineup."
						/>

						<div className="mt-16 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-2xl">
							<div className="grid grid-cols-1 lg:grid-cols-[1.2fr_repeat(3,minmax(0,1fr))]">
								<div className="border-b border-white/10 bg-slate-900/80 px-6 py-5 font-bold text-white lg:border-r lg:border-b-0">
									Specifications
								</div>
								{lineup.map((printer) => (
									<div
										key={printer.name}
										className="border-b border-white/10 px-6 py-5 font-bold text-cyan-300 lg:border-b-0 lg:border-r last:border-r-0"
									>
										{printer.name}
									</div>
								))}

								{specs.map((spec) => (
									<>
										<div key={spec.label} className="border-b border-white/10 bg-slate-900/40 px-6 py-5 font-semibold text-white lg:border-r">
											{spec.label}
										</div>
										{spec.values.map((value, index) => (
											<div
												key={`${spec.label}-${index}`}
												className="border-b border-white/10 px-6 py-5 text-sm text-slate-300 lg:border-r last:border-r-0"
											>
												{value}
											</div>
										))}
									</>
								))}
							</div>
						</div>
					</div>
				</section>

				<section className="border-b border-white/5 bg-white/[0.02] px-6 py-24">
					<div className="container mx-auto max-w-7xl">
						<SectionHeading
							title="Watch the Printer in Action"
							text="See how our industrial FDM printers deliver strength, speed, and precision for manufacturing applications."
						/>

						<div className="mt-16 overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/70 shadow-[0_0_60px_rgba(0,229,255,0.12)]">
							<video
								src="/fdm_video.mp4"
								autoPlay
								muted
								loop
								playsInline
								className="h-full w-full object-cover"
							/>
						</div>
					</div>
				</section>

				<section className="border-b border-white/5 px-6 py-24">
					<div className="container mx-auto max-w-7xl">
						<SectionHeading title="Industrial Applications" />

						<div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
							{applications.map((item) => (
								<article
									key={item.title}
									className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30"
								>
									<div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">
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
						<div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-white/[0.04] to-blue-500/10 px-6 py-14 shadow-2xl md:px-12 md:py-16">
							<h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
								Ready to Scale Your Manufacturing with Industrial FDM 3D Printing?
							</h2>
							<p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-400 md:text-lg">
								Explore large-format FDM solutions designed for prototyping, tooling, and production applications.
							</p>
							<p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-400 md:text-lg">
								Get expert guidance on selecting the right industrial 3D printer for your business.
							</p>

							<div className="mt-10 flex flex-wrap items-center justify-center gap-4">
								<Link
									href="/contact-us"
									className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-sky-500 px-8 text-base font-bold text-white shadow-[0_0_25px_rgba(0,229,255,0.2)] transition-all hover:scale-[1.02]"
								>
									Request a Quote
								</Link>
								<Link
									href="/contact-us"
									className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 text-base font-bold text-white transition-all hover:border-cyan-500/30 hover:bg-white/10"
								>
									Contact Our Team
								</Link>
							</div>
						</div>
					</div>
				</section>
				
				<FAQ title="Frequently Asked Questions Industrial FDM Printers" items={faqItems} />
			</main>
		</div>
	);
}
