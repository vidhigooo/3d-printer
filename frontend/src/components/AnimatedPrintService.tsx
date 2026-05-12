"use client";

import { motion } from "framer-motion";
import { PenTool } from "lucide-react";
import { useEffect, useState } from "react";

export default function AnimatedPrintService() {
  const text = "3D Printer";
  const [key, setKey] = useState(0);

  // Restart animation every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-zinc-900/50 rounded-full border border-zinc-800 overflow-hidden group shadow-xl">
      {/* Subtle glow on hover */}
      <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative flex flex-col items-center justify-center w-3/4">
        {/* The Extruder / Pen */}
        <motion.div
          key={`pen-${key}`}
          initial={{ x: "-50%", y: -10 }}
          animate={{ x: "50%", y: 0 }}
          transition={{ duration: 2.5, ease: "linear" }}
          className="absolute top-4 z-10 text-blue-400 rotate-180"
        >
          <PenTool size={32} className="drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
          {/* Filament string */}
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-1 bg-blue-400 mx-auto -mt-1 rounded-full opacity-80"
          />
        </motion.div>

        {/* The Text being written */}
        <div className="mt-16 font-mono text-xl font-bold tracking-widest text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
          <motion.div
            key={`text-${key}`}
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 2.5, ease: "linear" }}
          >
            {text}
          </motion.div>
        </div>
        
        {/* Helper decorative lines / printing bed */}
        <div className="absolute bottom-6 w-full h-[1px] bg-zinc-700/50">
          <motion.div 
            key={`bed-${key}`}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "linear" }}
            className="h-full bg-blue-500/50"
          />
        </div>
      </div>
    </div>
  );
}
