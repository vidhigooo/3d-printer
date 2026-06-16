"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

interface CategoryCardProps {
  name: string;
  image: string;
  description: string;
  href: string;
  delay: number;
}

const CategoryCard = ({ name, image, description, href, delay }: CategoryCardProps) => {
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
      <Link href={href} className="block h-full w-full">
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="glass relative flex h-[450px] flex-col items-center justify-center rounded-[20px] bg-gradient-to-b from-white/[0.08] to-transparent p-6 shadow-2xl transition-shadow duration-500 hover:shadow-[0_0_40px_-10px_rgba(0,229,255,0.3)]"
        >
          <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div
            className="relative z-10 flex h-full w-full flex-col items-center justify-between gap-6"
            style={{ transform: "translateZ(60px)" }}
          >
            <div className="flex flex-1 w-full items-center justify-center rounded-2xl bg-white/5 p-4 shadow-inner ring-1 ring-white/10 transition-colors duration-500 group-hover:bg-white/10">
              <div className="relative h-full w-full min-h-[300px]">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            <div className="flex w-full flex-col items-center pb-2 text-center">
              <h3 className="text-2xl font-bold tracking-tight text-foreground">{name}</h3>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default function ThreeDPrinters() {
  const categories = [
    {
      name: "DIY 3D Printers",
      image: "/diy.png",
      description: "Accessible, reliable, and moddable 3D printing platforms for every creator.",
      href: "/3d-printers/diy-3d-printers",
    },
    {
      name: "Industrial FDM 3D Printers",
      image: "/elgoo_orange.png",
      description: "Robust and high-performance FDM systems for industrial manufacturing.",
      href: "/3d-printers/industrial-fdm-3d-printers",
    },
    {
      name: "SLA 3D Printer",
      image: "/mars_600.png",
      description: "High-precision stereolithography printers for intricate details and smooth surfaces.",
      href: "/3d-printers/sla-3d-printer",
    },
    {
      name: "LCD / DLP 3D Printers",
      image: "/1.png",
      description: "Ultra-fast and precise resin printing technologies for jewelry and dental applications.",
      href: "/3d-printers/lcd-dlp-3d-printers",
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
            Select a{" "}
            <span className="bg-gradient-to-br from-primary via-primary to-secondary bg-clip-text text-transparent">
              Category
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
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {categories.map((category, index) => (
              <div key={category.name}>
                <CategoryCard
                  name={category.name}
                  image={category.image}
                  description={category.description}
                  href={category.href}
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
