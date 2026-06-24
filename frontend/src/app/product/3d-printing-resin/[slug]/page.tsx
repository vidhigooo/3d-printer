"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Minus, Plus, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { resinProducts } from "@/data/resinData";
import { useCart } from "@/context/CartContext";

export default function ResinProductDetailsPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');

  // Fallback to first model if exact slug not found
  const product = resinProducts.find((m) => m.slug === params.slug) || resinProducts[0];

  // Prepare images array
  const images = [product.image, ...(product.extraImages || [])];

  // Prepare product overview bullet points
  const overviewPoints = product.description.split('\n').filter(p => p.trim().length > 0);

  return (
    <div className="relative min-h-screen overflow-hidden pt-8 pb-24 selection:bg-primary/30">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute -top-[20%] -left-[10%] h-[70%] w-[50%] rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-[40%] -right-[10%] h-[50%] w-[40%] rounded-full bg-secondary/10 blur-[150px]" />

      <div className="container relative mx-auto px-6 max-w-7xl">
        {/* Breadcrumb / Back button */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <button
            onClick={() => router.back()}
            className="group inline-flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors hover:text-primary w-fit"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Go Back
          </button>
          <div className="text-sm text-slate-700 dark:text-slate-300 hidden md:block">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link> / Products / <Link href="/product/3d-printing-resin" className="hover:text-primary transition-colors">3D Printing Resin</Link> / <span className="text-foreground">{product.name}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Media Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col-reverse md:flex-row gap-6"
          >
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible custom-scrollbar pb-2 md:pb-0 shrink-0">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`glass relative flex h-20 w-20 md:h-24 md:w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl border transition-all duration-300 ${activeImage === i ? "border-primary shadow-[0_0_20px_rgba(0,229,255,0.2)] bg-slate-100 dark:bg-slate-900" : "border-border bg-slate-100 dark:bg-slate-900/50 hover:bg-slate-100 dark:bg-slate-900 hover:border-white/30"
                    }`}
                >
                  <div className="relative h-full w-full p-2">
                    <Image src={img} alt={`${product.name} thumbnail ${i + 1}`} fill className="object-contain drop-shadow-xl p-2" />
                  </div>
                </button>
              ))}
            </div>

            {/* Main Active Image */}
            <div className="glass relative flex flex-1 aspect-[4/3] md:aspect-auto md:min-h-[500px] w-full items-start justify-center overflow-hidden rounded-[32px] border border-border bg-gradient-to-b from-white/5 to-transparent shadow-2xl pt-8">
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10 h-[80%] w-full p-8">
                <Image src={images[activeImage]} alt={product.name} fill className="object-contain object-top drop-shadow-2xl p-8" />
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
              <span className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest ${product.outOfStock ? 'bg-red-500/10 text-red-500 ring-1 ring-red-500/30' : 'bg-green-500/10 text-green-500 ring-1 ring-green-500/30'}`}>
                {product.outOfStock ? "Out of Stock" : "In Stock"}
              </span>
            </div>

            <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-tight">
              {product.name}
            </h1>

            <div className="mb-8 flex flex-col gap-2">
              <span className="text-4xl font-bold tracking-tight text-primary">
                {product.price} <span className="text-lg font-normal text-slate-700 dark:text-slate-300">Incl. of all taxes</span>
              </span>
            </div>

            <div className="mb-10 space-y-8 rounded-3xl border border-border bg-slate-100 dark:bg-slate-900/50 p-8 backdrop-blur-md">
              {/* Product Overview */}
              <div>
                <h3 className="mb-4 text-xl font-bold text-foreground">Product Overview</h3>
                <ul className="space-y-3">
                  {overviewPoints.slice(0, 3).map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="leading-relaxed">{point.replace(/•\s*/g, '')}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {/* Quantity and Cart */}
              <div className="flex flex-col gap-6 sm:flex-row sm:items-end">
                <div>
                  <div className="inline-flex h-14 items-center rounded-2xl border border-border bg-slate-100 dark:bg-slate-900/50">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="flex h-full w-14 items-center justify-center text-slate-700 dark:text-slate-300 transition-colors hover:text-foreground"
                      disabled={product.outOfStock}
                    >
                      <Minus className="h-5 w-5" />
                    </button>
                    <span className="w-12 text-center text-lg font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="flex h-full w-14 items-center justify-center text-slate-700 dark:text-slate-300 transition-colors hover:text-foreground"
                      disabled={product.outOfStock}
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <button 
                  className={`flex h-14 flex-1 items-center justify-center gap-3 rounded-2xl px-8 text-base font-bold tracking-wide shadow-lg transition-all ${
                    product.outOfStock 
                    ? "bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 cursor-not-allowed" 
                    : "bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] active:scale-[0.98]"
                  }`}
                  disabled={product.outOfStock}
                 onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: quantity || 1 })}>
<ShoppingCart className="h-5 w-5 fill-current" />
{product.outOfStock ? "OUT OF STOCK" : "ADD TO CART"}
</button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tabs Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-24"
        >
          {/* Tab Headers */}
          <div className="flex border-b border-border overflow-x-auto custom-scrollbar">
            {["DESCRIPTION"].map((tab) => {
              const tabId = tab.toLowerCase().replace(/ /g, '-').replace(/'/g, '');
              return (
                <button
                  key={tabId}
                  onClick={() => setActiveTab(tabId)}
                  className={`px-8 py-4 text-sm font-semibold tracking-wider transition-colors whitespace-nowrap ${
                    activeTab === tabId
                      ? "border-b-2 border-primary text-primary"
                      : "text-slate-700 dark:text-slate-300 hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="mt-10 min-h-[300px] glass rounded-[32px] border border-border bg-slate-100 dark:bg-slate-900/50 p-10 backdrop-blur-md md:p-14">
            {activeTab === 'description' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="prose prose-invert max-w-none text-slate-700 dark:text-slate-300"
              >
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {product.name} Details
                </h2>
                <div className="space-y-6 text-base leading-relaxed">
                  {overviewPoints.map((point, i) => (
                    <p key={i}>{point}</p>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
