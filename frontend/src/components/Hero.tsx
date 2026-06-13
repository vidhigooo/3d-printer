/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-background">
      <div className="min-h-screen w-full flex items-center justify-center overflow-hidden py-24 md:py-0">

        {/* Dynamic Background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-500/10 via-background to-background pointer-events-none"
        />

        <div className="container mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-between relative z-20">

          {/* Foreground Text (Left Side) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2 flex flex-col justify-center pt-8 md:pt-0"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex w-max py-1.5 px-4 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300 text-sm font-medium tracking-wider mb-8 shadow-[0_0_15px_rgba(14,165,233,0.18)] backdrop-blur-md"
            >
              NEXT-GEN MANUFACTURING
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-4 md:mb-6 leading-[1.1] tracking-tight drop-shadow-xl"
            >
              Precision <br className="hidden sm:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">3D Printing</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 text-balance font-light max-w-lg"
            >
              From rapid prototypes to end-use production — delivering fast, accurate, and reliable additive manufacturing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Link
                href="#quote"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.35)] flex items-center justify-center gap-2"
              >
                Get Instant Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#portfolio"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-muted border border-border text-foreground font-medium hover:bg-accent transition-all duration-300 flex items-center justify-center backdrop-blur-md"
              >
                View Portfolio
              </Link>
            </motion.div>
          </motion.div>

          {/* Printer Video (Right Side) */}
          <motion.div
            initial={{ opacity: 0, x: 24, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full md:w-1/2 flex items-center justify-center relative mt-12 md:mt-20 lg:mt-24"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl aspect-square rounded-3xl overflow-hidden border border-border shadow-2xl glass"
            >
              {/* Fake 3D glow behind printer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-500 to-cyan-500 opacity-20 blur-[100px] scale-150 z-0" />
              <video
                src="/logo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover relative z-10 scale-105"
              />
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
