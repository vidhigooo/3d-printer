"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Zap, Minus, Plus, ShoppingCart, ShieldCheck, Box } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Image from "next/image";
import { mockModels, anycubicFolderModels, waxModels, formatPrice } from "@/data/printerData";
import { useCart } from "@/context/CartContext";
export default function ProductDetailsPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const allModels = [...mockModels, ...anycubicFolderModels, ...waxModels];

  // Fallback to first model if exact slug not found
  const product = allModels.find((m) => m.slug === params.slug) || allModels[0];

  return (
    <div className="relative min-h-screen overflow-hidden pt-8 pb-24 selection:bg-primary/30">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute -top-[20%] -left-[10%] h-[70%] w-[50%] rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-[40%] -right-[10%] h-[50%] w-[40%] rounded-full bg-secondary/10 blur-[150px]" />

      <div className="container relative mx-auto px-6 max-w-7xl">
        <button
          onClick={() => router.back()}
          className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Go Back
        </button>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left Column: Media Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Main Active Image */}
            <div className="glass relative flex p-12 aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-[32px] border border-border bg-gradient-to-b from-white/5 to-transparent shadow-2xl">
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10 h-full w-full">
                <Image src={product.image} alt={product.name} fill className="object-contain drop-shadow-2xl" />
              </div>
            </div>

          </motion.div>

          {/* Right Column: Key Details & Add to Cart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/30">
                <Zap className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">In Stock</span>
            </div>

            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              {product.name}
            </h1>

            <div className="mb-8 flex flex-wrap items-baseline gap-4">
              <span className="text-4xl font-bold tracking-tight text-primary">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-2xl font-medium text-slate-700 dark:text-slate-300 line-through decoration-muted-foreground/50">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <div className="mb-10 space-y-8 rounded-3xl border border-border bg-slate-100 dark:bg-slate-900/50 p-8 backdrop-blur-md">
              {/* Variations / Attributes */}
              <div>
                <h4 className="mb-3 text-sm font-semibold text-foreground">Color: <span className="font-normal text-slate-700 dark:text-slate-300">Black</span></h4>
                <div className="flex gap-4">
                  <button className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-black ring-4 ring-primary/20 transition-all hover:scale-110">
                    <div className="h-full w-full rounded-full border-2 border-background" />
                  </button>
                </div>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {/* Quantity and Cart */}
              <div className="flex flex-col gap-6 sm:flex-row sm:items-end">
                <div>
                  <h4 className="mb-3 text-sm font-semibold text-foreground">Quantity</h4>
                  <div className="inline-flex h-14 items-center rounded-2xl border border-border bg-slate-100 dark:bg-slate-900/50">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="flex h-full w-14 items-center justify-center text-slate-700 dark:text-slate-300 transition-colors hover:text-foreground"
                    >
                      <Minus className="h-5 w-5" />
                    </button>
                    <span className="w-12 text-center text-lg font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="flex h-full w-14 items-center justify-center text-slate-700 dark:text-slate-300 transition-colors hover:text-foreground"
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <button 
                  onClick={() => addToCart({ id: product.id.toString(), name: product.name, price: `₹${product.price}`, image: product.image, quantity })}
                  className="flex h-14 flex-1 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-primary to-secondary px-8 text-base font-bold tracking-wide text-primary-foreground shadow-lg transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] active:scale-[0.98]"
                >
                  <ShoppingCart className="h-5 w-5 fill-current" />
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Quick Benefits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 rounded-xl border border-border/50 bg-slate-100 dark:bg-slate-900/50 p-4 text-sm font-medium text-slate-700 dark:text-slate-300">
                <ShieldCheck className="h-5 w-5 text-primary" />
                1 Year Warranty
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-border/50 bg-slate-100 dark:bg-slate-900/50 p-4 text-sm font-medium text-slate-700 dark:text-slate-300">
                <Zap className="h-5 w-5 text-primary" />
                Fast Shipping
              </div>
            </div>
            {/* Product Details Section Moved Here */}
            <div className="mt-12 rounded-[32px] border border-border bg-slate-100 dark:bg-slate-900/50 p-8 backdrop-blur-md md:p-10">
              <h2 className="mb-6 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                PRODUCT DETAILS
              </h2>
              <div className="prose prose-invert max-w-none text-slate-700 dark:text-slate-300 prose-h3:text-foreground prose-h4:text-foreground">
                <p className="mb-6 text-base leading-relaxed">
                  {product.description || "Experience hassle-free 3D printing with the Bambu Lab P1S 3D Printer. Setup is a breeze, taking just 15 minutes, and its well-polished hardware and software ensure smooth operation. The enclosed body supports high-temperature filament printing, while the AMS enables stunning 16-color prints. With up to 20,000 mm/s² acceleration, enjoy rapid printing without sacrificing quality. Plus, monitor your prints remotely with the built-in camera and enjoy seamless multi-color capability with the AMS combo."}
                </p>

                <ul className="mb-0 space-y-3 text-sm leading-relaxed marker:text-primary list-disc pl-5">
                  {product.features ? product.features.map((feature, i) => (
                    <li key={i} className="pl-2">{feature}</li>
                  )) : (
                    <>
                      <li className="pl-2">Set up your Bambu Lab P1S in just 15 minutes, hassle-free.</li>
                      <li className="pl-2">Enjoy smooth operation with meticulously designed hardware and software.</li>
                      <li className="pl-2">Supports high-temperature filament printing.</li>
                      <li className="pl-2">Enables stunning 16-color prints for vibrant and intricate designs.</li>
                      <li className="pl-2">20,000 mm/s² acceleration.</li>
                      <li className="pl-2">Rapid printing without compromising quality.</li>
                      <li className="pl-2">Seamlessly print with up to 16 colors using the AMS combo.</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
