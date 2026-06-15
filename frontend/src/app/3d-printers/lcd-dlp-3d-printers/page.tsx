import type { Metadata } from "next";
import Image from "next/image";
import { Sparkles, Droplets, ShieldCheck, Gauge } from "lucide-react";

import DlpGallery from "@/components/DlpGallery";

export const metadata: Metadata = {
	title: "LCD / DLP 3D Printers | VEKTOR3D SYSTEMS",
	description: "Explore our LCD and DLP 3D printer lineup, including the full Elegoo-focused model gallery.",
};

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

						<div className="mt-16">
							<DlpGallery />
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
