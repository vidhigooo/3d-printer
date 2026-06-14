import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Droplets, ShieldCheck, Gauge } from "lucide-react";

import { mockModels, anycubicFolderModels, type PrinterModel } from "@/data/printerData";

export const metadata: Metadata = {
	title: "LCD / DLP 3D Printers | VEKTOR3D SYSTEMS",
	description: "Explore our LCD and DLP 3D printer lineup, including the full Elegoo-focused model gallery.",
};

const elegooModels: PrinterModel[] = [
	mockModels.find((model) => model.name.startsWith("Elegoo"))!,
	...anycubicFolderModels.filter((model) => model.name.startsWith("Elegoo")),
];

const highlights = [
	{
		title: "Ultra-fine detail",
		description: "LCD / DLP curing captures sharp edges, smooth surfaces, and precise miniature features.",
		icon: Sparkles,
	},
	{
		title: "Fast layer exposure",
		description: "Resin workflow optimized for rapid turnaround on dental, jewelry, and design models.",
		icon: Droplets,
	},
	{
		title: "Stable repeatability",
		description: "Consistent vat curing and platform control help maintain dependable production output.",
		icon: ShieldCheck,
	},
	{
		title: "Production-friendly",
		description: "Built for short-run manufacturing, prototyping, and high-resolution fit checks.",
		icon: Gauge,
	},
];

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
	return (
		<div className="mx-auto max-w-3xl text-center">
			<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
				<span className="h-2 w-2 rounded-full bg-cyan-400" />
				{eyebrow}
			</div>
			<h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">{title}</h2>
			{text ? <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">{text}</p> : null}
		</div>
	);
}

export default function LCDDlpPrintersPage() {
	return (
		<div className="min-h-screen overflow-hidden bg-slate-950 text-slate-200 selection:bg-cyan-500/30">
			<div className="fixed inset-0 pointer-events-none z-0">
				<div className="absolute left-[-10%] top-[-8%] h-[540px] w-[540px] rounded-full bg-cyan-600/10 blur-[160px]" />
				<div className="absolute right-[-12%] top-[12%] h-[520px] w-[520px] rounded-full bg-blue-600/10 blur-[170px]" />
				<div className="absolute bottom-[-12%] left-[18%] h-[420px] w-[420px] rounded-full bg-purple-600/10 blur-[160px]" />
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,#000_70%,transparent_100%)]" />
			</div>

			<main className="relative z-10">
				<section className="relative border-b border-white/5 px-6 pb-20 pt-36 md:pb-28 md:pt-44">
					<div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
						<div className="space-y-8">
							<div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
								LCD / DLP Series
							</div>

							<div className="space-y-6">
								<h1 className="max-w-3xl text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.18)] md:text-6xl lg:text-7xl">
									LCD / DLP 3D Printer Lineup
								</h1>
								<p className="max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
									Precision resin printing for miniature detail, dental workflows, product design, and short-run production. This page brings together the full Elegoo-focused gallery already used across the 3D printer catalog.
								</p>
							</div>

							<div className="flex flex-wrap gap-4">
								<Link
									href="/contact-us"
									className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-sky-500 px-8 text-base font-bold text-white shadow-[0_0_25px_rgba(0,229,255,0.2)] transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]"
								>
									Get Quote
									<ArrowRight className="h-5 w-5" />
								</Link>
								<Link
									href="#models"
									className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 text-base font-bold text-white transition-all hover:border-cyan-500/30 hover:bg-white/10"
								>
									Explore Models
								</Link>
							</div>
						</div>

						<div className="relative flex items-center justify-center">
							<div className="absolute inset-0 rounded-[32px] bg-gradient-to-tr from-cyan-500/20 via-transparent to-blue-500/20 blur-[70px]" />
							<div className="relative w-full max-w-2xl overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(0,229,255,0.14)]">
								<Image
									src="/lcd.png"
									alt="Elegoo printer lineup"
									width={1200}
									height={900}
									className="h-full w-full object-cover"
									priority
								/>
							</div>
						</div>
					</div>
				</section>

				<section className="border-b border-white/5 bg-white/[0.02] px-6 py-24">
					<div className="container mx-auto max-w-7xl">
						<SectionHeading
							eyebrow="Why LCD / DLP"
							title="Built for high-detail resin printing"
							text="LCD and DLP systems are the right fit when surface finish, accuracy, and compact feature fidelity matter more than raw part size."
						/>

						<div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
							{highlights.map((item) => {
								const Icon = item.icon;
								return (
									<article
										key={item.title}
										className="rounded-[24px] border border-white/10 bg-slate-900/60 p-6 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-slate-900"
									>
										<div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300 ring-1 ring-cyan-500/20">
											<Icon className="h-5 w-5" />
										</div>
										<h3 className="text-xl font-bold tracking-tight text-white">{item.title}</h3>
										<p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
									</article>
								);
							})}
						</div>
					</div>
				</section>

				<section id="models" className="border-b border-white/5 px-6 py-24">
					<div className="container mx-auto max-w-7xl">
						<SectionHeading
							eyebrow="Elegoo Gallery"
							title="All LCD / DLP printer images in one place"
							text="These are the Elegoo-focused printer visuals already used in the 3D printer catalog, now collected into a dedicated LCD / DLP page."
						/>

						<div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
							{elegooModels.map((printer) => (
								<article
									key={printer.slug}
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
											LCD / DLP
										</div>
									</div>

									<div className="space-y-5 p-7">
										<div>
											<h3 className="text-2xl font-bold tracking-tight text-white">{printer.name}</h3>
											<p className="mt-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300/90">
												Resin printer showcase
											</p>
										</div>

										<div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
											<span>{printer.inStock ? "In stock" : "Out of stock"}</span>
											<span className="font-semibold text-white">{printer.badge || "Featured model"}</span>
										</div>

										<Link
											href="/contact-us"
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

				<section className="px-6 py-24">
					<div className="container mx-auto max-w-7xl">
						<div className="grid grid-cols-1 gap-10 rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-white/[0.03] to-blue-500/10 p-8 md:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
							<div className="space-y-6">
								<div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
									Ready to specify a machine?
								</div>
								<h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
									Need help choosing the right resin printer for your workflow?
								</h2>
								<p className="max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
									We can help match LCD and DLP systems to your application, whether you need dental models, miniatures, precision prototypes, or production runs.
								</p>
							</div>

							<div className="flex flex-col gap-3">
								{[
									"Dental and jewelry applications",
									"Miniature and detail-rich models",
									"Rapid prototyping with smooth finishes",
								].map((item) => (
									<div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-4 text-sm text-slate-300">
										<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
										<span>{item}</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
