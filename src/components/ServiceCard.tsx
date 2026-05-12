"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

interface ServiceCardProps {
  title: string;
  icon?: React.ReactNode;
  delay?: number;
  customVisual?: React.ReactNode;
}

export default function ServiceCard({ title, icon, delay = 0, customVisual }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center gap-6"
    >
      {/* Aspect Square ensures a perfect circle */}
      <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-white dark:bg-zinc-900 border-4 border-zinc-100 dark:border-zinc-800 shadow-2xl flex items-center justify-center relative overflow-hidden transition-transform duration-300 hover:scale-105">
        {customVisual ? customVisual : (
          <div className="text-zinc-700 dark:text-zinc-300">
            {icon}
          </div>
        )}
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-blue-800 dark:text-blue-400 text-center tracking-wide">
        {title}
      </h3>

      <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors text-sm font-semibold text-zinc-700 dark:text-zinc-200 shadow-md">
        Learn More
        <ArrowRight size={16} />
      </button>
    </motion.div>
  );
}
