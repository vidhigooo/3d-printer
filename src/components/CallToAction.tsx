"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, FileUp } from "lucide-react";

export default function CallToAction() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section id="contact" ref={ref} className="relative py-40 overflow-hidden bg-background">
      {/* Dynamic Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 opacity-40 dark:opacity-40 opacity-10"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background z-10" />
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-background to-background" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto bg-card/50 backdrop-blur-xl border border-primary/20 rounded-3xl p-12 md:p-16 shadow-[0_0_50px_rgba(0,229,255,0.1)] relative overflow-hidden group"
        >
          {/* Animated Glow on Hover */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 -z-10" />

          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Ready to <span className="text-primary">Manufacture?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 text-balance font-light">
            Upload your CAD file today for an instant quote, automated DFM analysis, and rapid turnaround times.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/80 transition-colors duration-300 shadow-[0_0_20px_rgba(0,229,255,0.3)] flex items-center justify-center gap-2 text-lg">
              <FileUp className="w-5 h-5" />
              Upload CAD File
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-muted border border-border text-foreground font-medium hover:bg-muted/80 transition-colors duration-300 backdrop-blur-md flex items-center justify-center gap-2 text-lg">
              Contact Sales
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          <p className="mt-8 text-sm text-muted-foreground">
            Supports STL, STEP, IGES, and OBJ files up to 100MB.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
