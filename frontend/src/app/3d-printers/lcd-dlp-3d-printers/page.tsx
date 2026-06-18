"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart, Info, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import { dlpProducts } from "@/data/dlpProducts";

export default function LCDDLPPrinters() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen overflow-hidden pt-36 pb-24 selection:bg-cyan-500/30">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute -top-[30%] -left-[10%] h-[70%] w-[50%] rounded-full bg-cyan-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-[30%] -right-[10%] h-[60%] w-[40%] rounded-full bg-blue-500/15 blur-[150px]" />

      <div className="container relative mx-auto px-6">
        {/* Header Section */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center justify-center gap-2"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-500 ring-1 ring-cyan-500/30">
              <Zap className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold uppercase tracking-widest text-cyan-500">Our Collection</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            LCD / DLP{" "}
            <span className="bg-gradient-to-br from-cyan-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              3D Printers
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
          >
            Discover our extensive range of high-quality LCD and DLP 3D printers. Perfect for miniatures, dental workflows, and high-resolution prototyping.
          </motion.p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {dlpProducts.map((product, idx) => {
            const outOfStock = false;
            const price = product.price || "Contact for Price";
            
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group glass relative flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_-5px_rgba(0,229,255,0.2)]"
              >
                {/* Image Container - Clickable to open page */}
                <div 
                  className="relative flex h-56 w-full cursor-pointer items-center justify-center bg-white p-6 transition-colors"
                  onClick={() => router.push(`/3d-printers/lcd-dlp-3d-printers/${product.id}`)}
                >
                  <div className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/10 text-black opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
                    <Info className="h-4 w-4" />
                  </div>
                  <div className="relative h-full w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content Container */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div 
                    className="cursor-pointer"
                    onClick={() => router.push(`/3d-printers/lcd-dlp-3d-printers/${product.id}`)}
                  >
                    <h3 className="line-clamp-2 text-lg font-bold text-foreground group-hover:text-cyan-400 transition-colors">{product.name}</h3>
                    <p className="mt-2 text-xl font-semibold text-cyan-400">{price}</p>
                  </div>
                  
                  <button
                    onClick={() => {
                      if (!outOfStock) {
                        router.push(`/3d-printers/lcd-dlp-3d-printers/${product.id}`);
                      }
                    }}
                    className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all duration-300 ${
                      outOfStock
                        ? "cursor-not-allowed bg-muted text-muted-foreground"
                        : "bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]"
                    }`}
                    disabled={outOfStock}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    {outOfStock ? "Out of Stock" : "Add to Cart"}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
