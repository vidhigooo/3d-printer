"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart, Info, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import { resinProducts } from "@/data/resinData";
import { useCart } from "@/context/CartContext";

export default function Resin3DPrintingPage() {
  const router = useRouter();
  const { addToCart } = useCart();

  return (
    <div className="relative min-h-screen overflow-hidden pt-8 pb-24 selection:bg-primary/30">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute -top-[30%] -left-[10%] h-[70%] w-[50%] rounded-full bg-primary/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-[30%] -right-[10%] h-[60%] w-[40%] rounded-full bg-secondary/15 blur-[150px]" />

      <div className="container relative mx-auto px-6">
        {/* Header Section */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center justify-center gap-2"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/30">
              <Zap className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Our Collection</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            3D Printing{" "}
            <span className="bg-gradient-to-br from-primary via-primary to-secondary bg-clip-text text-transparent">
              Resin
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-slate-700 dark:text-slate-300"
          >
            Explore our premium selection of 3D printing resins, tailored for precision, durability, and a wide variety of advanced applications.
          </motion.p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {resinProducts.map((product, idx) => (
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
                onClick={() => router.push(`/product/3d-printing-resin/${product.slug}`)}
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
                  onClick={() => router.push(`/product/3d-printing-resin/${product.slug}`)}
                >
                  <h3 className="line-clamp-2 text-lg font-bold text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="mt-2 text-xl font-semibold text-primary">{product.price}</p>
                </div>
                
                <button
                  onClick={() => {
                    if (!product.outOfStock) {
                       addToCart({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 });
                    }
                  }}
                  className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all duration-300 ${
                    product.outOfStock
                      ? "cursor-not-allowed bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300"
                      : "bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]"
                  }`}
                  disabled={product.outOfStock}
                >
                  <ShoppingCart className="h-4 w-4" />
                  {product.outOfStock ? "Out of Stock" : "Add to Cart"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
