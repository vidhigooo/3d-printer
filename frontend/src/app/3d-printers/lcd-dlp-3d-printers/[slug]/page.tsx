"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Zap, Minus, Plus, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { dlpProducts } from "@/data/dlpProducts";
import { useCart } from "@/context/CartContext";

export default function DLPLCDProductDetailsPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');

  // Fallback to first model if exact slug not found
  const product = dlpProducts.find((m) => m.id === params.slug) || dlpProducts[0];

  // Prepare images array
  const images = [product.image, ...(product.extraImages || [])];

  // Prepare product overview bullet points
  const overviewPoints = product.description.split('\n').filter(p => p.trim().length > 0);
  
  const outOfStock = false;
  const price = product.price || "Contact for Price";

  return (
    <div className="relative min-h-screen overflow-hidden pt-36 pb-24 selection:bg-cyan-500/30 text-slate-200 bg-slate-950">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute -top-[20%] -left-[10%] h-[70%] w-[50%] rounded-full bg-cyan-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-[40%] -right-[10%] h-[50%] w-[40%] rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="container relative mx-auto px-6 max-w-7xl z-10">
        {/* Breadcrumb / Back button */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <button
            onClick={() => router.back()}
            className="group inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400 w-fit"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Go Back
          </button>
          <div className="text-sm text-slate-400 hidden md:block">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link> / <Link href="/3d-printers" className="hover:text-cyan-400 transition-colors">3D Printers</Link> / <Link href="/3d-printers/lcd-dlp-3d-printers" className="hover:text-cyan-400 transition-colors">LCD/DLP 3D Printers</Link> / <span className="text-slate-200">{product.name}</span>
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
                  className={`glass relative flex h-20 w-20 md:h-24 md:w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl border transition-all duration-300 ${activeImage === i ? "border-cyan-500 shadow-[0_0_20px_rgba(0,229,255,0.2)] bg-white/10" : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30"
                    }`}
                >
                  <div className="relative h-full w-full p-2">
                    <Image src={img} alt={`${product.name} thumbnail ${i + 1}`} fill className="object-contain drop-shadow-xl p-2" />
                  </div>
                </button>
              ))}
            </div>

            {/* Main Active Image */}
            <div className="glass relative flex flex-1 aspect-[4/3] md:aspect-auto md:min-h-[500px] w-full items-start justify-center overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-white/5 to-transparent shadow-2xl pt-8">
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
              <span className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest ${outOfStock ? 'bg-red-500/10 text-red-400 ring-1 ring-red-500/30' : 'bg-green-500/10 text-green-400 ring-1 ring-green-500/30'}`}>
                {outOfStock ? "Out of Stock" : "In Stock"}
              </span>
            </div>

            <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
              {product.name}
            </h1>

            <div className="mb-8 flex flex-col gap-2">
              <span className="text-4xl font-bold tracking-tight text-cyan-400">
                {price}
              </span>
            </div>

            <div className="mb-10 space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              {/* Product Overview */}
              <div>
                <h3 className="mb-4 text-xl font-bold text-white">Product Overview</h3>
                <ul className="space-y-3">
                  {overviewPoints.slice(0, 3).map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                      <span className="leading-relaxed">{point.replace(/•\s*/g, '')}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {/* Quantity and Cart */}
              <div className="flex flex-col gap-6 sm:flex-row sm:items-end">
                <div>
                  <div className="inline-flex h-14 items-center rounded-2xl border border-white/10 bg-white/5">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="flex h-full w-14 items-center justify-center text-slate-400 transition-colors hover:text-white"
                      disabled={outOfStock}
                    >
                      <Minus className="h-5 w-5" />
                    </button>
                    <span className="w-12 text-center text-lg font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="flex h-full w-14 items-center justify-center text-slate-400 transition-colors hover:text-white"
                      disabled={outOfStock}
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <button 
                  className={`flex h-14 flex-1 items-center justify-center gap-3 rounded-2xl px-8 text-base font-bold tracking-wide shadow-lg transition-all ${
                    outOfStock 
                    ? "bg-slate-800 text-slate-500 cursor-not-allowed" 
                    : "bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] active:scale-[0.98]"
                  }`}
                  disabled={outOfStock}
                  onClick={() => addToCart({ id: product.id, name: product.name, price: product.price || "", image: product.image, quantity: quantity || 1 })}>
<ShoppingCart className="h-5 w-5 fill-current" />
{outOfStock ? "OUT OF STOCK" : "ADD TO CART"}
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
          <div className="flex border-b border-white/10 overflow-x-auto custom-scrollbar">
            {["DESCRIPTION", "TECHNICAL SPECIFICATION"].map((tab) => {
              const tabId = tab.toLowerCase().replace(/ /g, '-').replace(/'/g, '');
              return (
                <button
                  key={tabId}
                  onClick={() => setActiveTab(tabId)}
                  className={`px-8 py-4 text-sm font-semibold tracking-wider transition-colors whitespace-nowrap ${
                    activeTab === tabId
                      ? "border-b-2 border-cyan-500 text-cyan-400"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="mt-10 min-h-[300px] glass rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-md md:p-14">
            {activeTab === 'description' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="prose prose-invert max-w-none text-slate-400"
              >
                <h2 className="text-2xl font-bold text-white mb-6">
                  Meet the {product.name}
                </h2>
                <div className="space-y-6 text-base leading-relaxed whitespace-pre-wrap">
                  {product.description}
                </div>
              </motion.div>
            )}

            {activeTab === 'technical-specification' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="prose prose-invert max-w-none text-slate-400"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Technical Specifications</h2>
                {product.specs ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="border-b border-white/5 pb-4">
                        <span className="font-semibold text-white block mb-1">{key}</span>
                        <span>{value}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>Detailed technical specifications are not available for this product.</p>
                )}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
