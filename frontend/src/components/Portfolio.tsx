/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const portfolioItems = [
  {
    title: "Industrial Gear Assembly",
    category: "Engineering",
    image: "/industrial_part.png",
    colSpan: "md:col-span-2",
  },
  {
    title: "Precision Dental Aligner",
    category: "Medical",
    image: "/dental_model.png",
    colSpan: "md:col-span-1",
  },
  {
    title: "Generative Art Sculpture",
    category: "Creative",
    image: "/creative_figure.png",
    colSpan: "md:col-span-3",
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
            >
              Featured <span className="text-primary">Work</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              Explore our gallery of complex geometries, functional prototypes, and end-use production parts.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <button className="px-6 py-3 rounded-full border border-border text-foreground font-medium hover:bg-muted transition-colors flex items-center gap-2">
              View All Projects
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl bg-muted ${item.colSpan} aspect-[4/3] md:aspect-auto md:min-h-[400px] cursor-pointer`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              
              <img 
                src={item.image} 
                alt={item.title} 
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 z-30 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-primary text-xs font-bold tracking-wider uppercase mb-2 block drop-shadow-md">
                  {item.category}
                </span>
                <h3 className="text-2xl font-bold text-white flex items-center justify-between drop-shadow-md">
                  {item.title}
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-4 group-hover:translate-x-0">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
