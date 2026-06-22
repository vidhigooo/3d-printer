"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Minus, Plus, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { technoPolymers } from "@/data/technoPolymersData";
import { useCart } from "@/context/CartContext";

export default function TechnoPolymersDetailsPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('technical-specification');

  // Fallback to first model if exact slug not found
  const product = technoPolymers.find((m) => m.slug === params.slug) || technoPolymers[0];

  // Prepare images array
  const images = [product.image, ...(product.extraImages || [])];

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
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link> / <Link href="/product/techno-polymers-filaments" className="hover:text-cyan-400 transition-colors">Techno Polymers & Filaments</Link> / <span className="text-slate-200">{product.name}</span>
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
                  <div className="relative h-full w-full p-2 bg-white rounded-xl">
                    <Image src={img} alt={`${product.name} thumbnail ${i + 1}`} fill className="object-contain p-2 rounded-xl" />
                  </div>
                </button>
              ))}
            </div>

            {/* Main Active Image */}
            <div className="glass relative flex flex-1 aspect-[4/3] md:aspect-auto md:min-h-[500px] w-full items-start justify-center overflow-hidden rounded-[32px] border border-white/10 bg-white shadow-2xl pt-8">
              <div className="relative z-10 h-[80%] w-full p-8">
                <Image src={images[activeImage]} alt={product.name} fill className="object-contain object-top p-8" />
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
              <span className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest ${product.outOfStock ? 'bg-red-500/10 text-red-400 ring-1 ring-red-500/30' : 'bg-green-500/10 text-green-400 ring-1 ring-green-500/30'}`}>
                {product.outOfStock ? "Out of Stock" : "In Stock"}
              </span>
            </div>

            <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
              {product.name}
            </h1>

            <div className="mb-8 flex flex-col gap-2">
              <span className="text-4xl font-bold tracking-tight text-cyan-400">
                {product.price}
              </span>
            </div>

            <div className="mb-10 space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              {/* Quantity and Cart */}
              <div className="flex flex-col gap-6 sm:flex-row sm:items-end">
                <div>
                  <div className="inline-flex h-14 items-center rounded-2xl border border-white/10 bg-white/5">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="flex h-full w-14 items-center justify-center text-slate-400 transition-colors hover:text-white"
                      disabled={product.outOfStock}
                    >
                      <Minus className="h-5 w-5" />
                    </button>
                    <span className="w-12 text-center text-lg font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="flex h-full w-14 items-center justify-center text-slate-400 transition-colors hover:text-white"
                      disabled={product.outOfStock}
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <button 
                  className={`flex h-14 flex-1 items-center justify-center gap-3 rounded-2xl px-8 text-base font-bold tracking-wide shadow-lg transition-all ${
                    product.outOfStock 
                    ? "bg-slate-800 text-slate-500 cursor-not-allowed" 
                    : "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] active:scale-[0.98]"
                  }`}
                  disabled={product.outOfStock}
                 onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: quantity || 1 })}>
<ShoppingCart className="h-5 w-5 fill-current" />
{product.outOfStock ? "OUT OF STOCK" : "ADD TO CART"}
</button>
              </div>
            </div>

            {/* Description below Add to Cart */}
            <div className="prose prose-invert max-w-none text-slate-400">
              <h2 className="text-2xl font-bold text-white mb-6">
                {product.name}
              </h2>
              <div className="space-y-6 text-base leading-relaxed whitespace-pre-wrap">
                {product.description}
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
            {["TECHNICAL SPECIFICATION"].map((tab) => {
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
