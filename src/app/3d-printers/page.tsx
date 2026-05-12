"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

interface BrandCardProps {
  brand: string;
  image: string;
  description: string;
  delay: number;
}

const BrandCard = ({ brand, image, description, delay }: BrandCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] }}
      style={{ perspective: 1200 }}
      className="group relative h-full w-full"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="glass relative flex h-full flex-col items-center justify-center rounded-[20px] bg-gradient-to-b from-white/[0.08] to-transparent p-8 shadow-2xl transition-shadow duration-500 hover:shadow-[0_0_40px_-10px_rgba(0,229,255,0.3)]"
      >
        <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div
          className="relative z-10 flex h-full flex-col items-center justify-between gap-8"
          style={{ transform: "translateZ(60px)" }}
        >
          <div className="flex h-32 w-full items-center justify-center rounded-2xl bg-white/5 p-6 shadow-inner ring-1 ring-white/10 transition-colors duration-500 group-hover:bg-white/10">
            <div className="relative h-full w-full">
              <Image
                src={image}
                alt={brand}
                fill
                className="object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          <div className="flex w-full flex-col items-center gap-3 text-center">
            <h3 className="text-2xl font-bold tracking-tight text-foreground">{brand}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>

            <Link
              href={`/3d-printers/${brand.toLowerCase().replace(/\s+/g, "-")}`}
              className="mt-4 flex translate-y-2 items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-2.5 text-sm font-semibold text-primary-foreground opacity-0 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] group-hover:translate-y-0 group-hover:opacity-100"
            >
              View Models
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function ThreeDPrinters() {
  const brands = [
    {
      name: "Creality",
      image: "/creality.png",
      description: "Accessible, reliable, and moddable 3D printing platforms for every creator.",
    },
    {
      name: "Anycubic",
      image: "/anycubic.png",
      description: "Pioneering high-speed precision and powerful resin printing technologies.",
    },
    {
      name: "Vektor3D Systems",
      image: "/logo.png",
      description: "Our proprietary industrial-grade systems for robust manufacturing.",
    },
    {
      name: "Phrozen",
      image: "/phrozen.png",
      description: "Unmatched 8K resin detail perfect for exquisite miniatures and dental models.",
    },
    {
      name: "Elegoo",
      image: "/elegoo.png",
      description: "Smart, large-format features combined with exceptional build quality.",
    },
    {
      name: "Bambu Lab",
      image: "/bambulab.png",
      description: "Accessible, reliable, and moddable 3D printing platforms for every creator.",
    },
    {
      name: "FlashForge",
      image: "/flashforge.png",
      description: "Accessible, reliable, and moddable 3D printing platforms for every creator.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden pt-36 pb-24 selection:bg-primary/30">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute -top-[30%] -left-[10%] h-[70%] w-[50%] rounded-full bg-primary/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-[30%] -right-[10%] h-[60%] w-[40%] rounded-full bg-secondary/15 blur-[150px]" />

      <div className="container relative mx-auto px-6">
        {/* Header Section */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center justify-center gap-2"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/30">
              <Zap className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Hardware Fleet</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-5xl font-extrabold tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            Select Your{" "}
            <span className="bg-gradient-to-br from-primary via-primary to-secondary bg-clip-text text-transparent">
              Brand
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            Explore our curated selection of industry-leading 3D printers, tailored to meet the demands of rapid prototyping and industrial production.
          </motion.p>
        </div>

        {/* Grid Layout */}
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand, index) => (
              <div
                key={brand.name}
                className={index === 6 ? "lg:col-start-2" : ""}
              >
                <BrandCard
                  brand={brand.name}
                  image={brand.image}
                  description={brand.description}
                  delay={0.3 + index * 0.1}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
