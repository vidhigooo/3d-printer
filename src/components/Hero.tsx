/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Text Animations
  const textOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const textY = useTransform(smoothProgress, [0, 0.2], ["0%", "-50%"]);

  // Printer Image Animations (stays pinned, pushes forward in 3D space)
  const printerScale = useTransform(smoothProgress, [0, 0.4, 0.8, 1], [1, 1.2, 1.4, 1.6]);
  const printerY = useTransform(smoothProgress, [0, 0.8, 1], ["0%", "5%", "40%"]);
  const printerX = useTransform(smoothProgress, [0, 1], ["0%", "-10%"]); 
  const printerRotate = useTransform(smoothProgress, [0, 1], [0, 25]); // Add rotation
  const printerOpacity = useTransform(smoothProgress, [0.8, 1], [1, 0]);

  const bgOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0.2]);

  return (
    <section ref={containerRef} className="h-[300vh] relative bg-background">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Dynamic Background */}
        <motion.div 
          style={{ opacity: bgOpacity }}
          className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none"
        />

        <div className="container mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-between relative z-20">
          
          {/* Foreground Text (Left Side) */}
          <motion.div 
            style={{ opacity: textOpacity, y: textY }}
            className="w-full md:w-1/2 flex flex-col justify-center pt-20 md:pt-0"
          >
            <motion.span 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="inline-flex w-max py-1.5 px-4 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wider mb-8 shadow-[0_0_15px_rgba(0,229,255,0.15)] backdrop-blur-md"
            >
              NEXT-GEN MANUFACTURING
            </motion.span>
            <motion.h1 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.7, delay: 0.3 }}
               className="text-5xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight drop-shadow-xl"
            >
              Precision <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">3D Printing</span>
            </motion.h1>
            <motion.p 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.7, delay: 0.4 }}
               className="text-lg md:text-xl text-muted-foreground mb-10 text-balance font-light max-w-lg"
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
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,229,255,0.4)] flex items-center justify-center gap-2"
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

          {/* Parallax Printer Image (Right Side) */}
          <motion.div
            style={{ 
              scale: printerScale,
              y: printerY,
              x: printerX,
              opacity: printerOpacity
            }}
            className="w-full md:w-1/2 flex items-center justify-center relative mt-12 md:mt-0"
          >
            <motion.div 
               initial={{ opacity: 0, scale: 0.9, x: 30 }}
               animate={{ opacity: 1, scale: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
               className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl aspect-square rounded-3xl overflow-hidden border border-border shadow-2xl glass"
            >
              {/* Fake 3D glow behind printer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-20 blur-[100px] scale-150 z-0" />
              <img 
                src="/hero_printer_3d.png" 
                alt="Advanced 3D Printing System" 
                className="w-full h-full object-cover relative z-10 scale-105"
              />
            </motion.div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity: textOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">Scroll to Explore</span>
          <div className="w-[2px] h-12 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full" />
        </motion.div>
        
      </div>
    </section>
  );
}
