"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronDown, Check, Zap, X, Minus, Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Simulated mock data inspired by the user's screenshots
const mockModels = [
  {
    id: 1,
    name: "Bambu Lab P1S 3D Printer",
    slug: "bambu-lab-p1s-3d-printer",
    price: 45500,
    originalPrice: 53000,
    badge: "",
    image: "/Bamboo_lab_ps1.png",
    inStock: true,
  },
  {
    id: 2,
    name: "Anycubic Kobra 2 Pro 3D Printer",
    slug: "anycubic-kobra-2-pro-3d-printer",
    price: 24500,
    badge: "",
    image: "/anycubic_kobra.png",
    inStock: true,
  },
  {
    id: 3,
    name: "Elegoo Centauri Carbon 3D Printer",
    slug: "elegoo-centauri-carbon-3d-printer",
    price: 45500,
    badge: "New",
    image: "/elegoo_centauri_carbon.png",
    inStock: true,
  },
  {
    id: 4,
    name: "FLASH FORGE AD5X HIGH SPEED MULTI COLOUR 3D PRINTER",
    slug: "flash-forge-ad5x-high-speed-multi-colour-3d-printer",
    price: 36500,
    badge: "",
    image: "/flash_forge.png",
    inStock: true,
  },
  {
    id: 5,
    name: "Creality CR 10 S5 3D Printer",
    slug: "creality-cr-10-s5-3d-printer",
    price: 70500,
    originalPrice: 72000,
    badge: "With Premium Tech Support",
    image: "/creality_cr_10s5.png",
    inStock: false,
  },
  {
    id: 6,
    name: "Creality CR-10 V2 3D Printer",
    slug: "creality-cr-10-v2-3d-printer",
    price: 58500,
    originalPrice: 60000,
    badge: "With Premium Tech Support",
    image: "/creality_cr10v2.png",
    inStock: true,
  },
  {
    id: 7,
    name: "Original Creality CR-10S Pro V2 3D Printer with BL Touch",
    slug: "original-creality-cr-10s-pro-v2-3d-printer-with-bl-touch",
    price: 66800,
    originalPrice: 68000,
    badge: "With Premium Tech Support",
    image: "/og_creality.png",
    inStock: true,
  },
  {
    id: 8,
    name: "Ender-3 V2 3D Printer with silent board high performance",
    slug: "ender-3-v2-3d-printer-with-silent-board-high-performance",
    price: 24500,
    originalPrice: 26000,
    badge: "With Premium Tech Support",
    image: "/ender_3v2.png",
    inStock: true,
  },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(price);
};

export default function BrandModelsPage({ params }: { params: { brand: string } }) {
  const [selectedModel, setSelectedModel] = useState<any | null>(null);
  const [quantity, setQuantity] = useState(1);

  // Decode the brand name for display
  const brandName = useMemo(() => {
    return params.brand
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }, [params.brand]);

  const handleQuickView = (model: any) => {
    setSelectedModel(model);
    setQuantity(1); // reset quantity
    // Disable body scroll when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedModel(null);
    document.body.style.overflow = "";
  };

  return (
    <div className="relative min-h-screen overflow-hidden pt-36 pb-24 selection:bg-primary/30">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute -top-[20%] -left-[10%] h-[70%] w-[50%] rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-[40%] -right-[10%] h-[50%] w-[40%] rounded-full bg-secondary/10 blur-[150px]" />

      <div className="container relative mx-auto px-6 max-w-5xl">
        {/* Navigation and Header */}
        <div className="mb-12">
          <Link
            href="/3d-printers"
            className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Brands
          </Link>

          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4 flex items-center gap-2"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/30">
                  <Zap className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold uppercase tracking-widest text-primary">Models</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl"
              >
                {brandName} <span className="text-muted-foreground font-light">3D Printers</span>
              </motion.h1>
            </div>

            {/* Sort Dropdown Simulator */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative min-w-[200px]"
            >
              <div className="glass flex cursor-pointer items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:bg-white/10">
                <span>Sort by: Recommended</span>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {mockModels.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass relative flex flex-col overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent shadow-2xl transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_40px_-10px_rgba(0,229,255,0.15)]"
            >
              {/* Card Image Area */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-white/5 p-8 transition-colors group-hover:bg-white/10">
                {/* Badges */}
                {model.badge && (
                  <div className="absolute top-4 left-4 z-10 rounded-md bg-secondary/80 px-3 py-1.5 text-xs font-semibold tracking-wide text-secondary-foreground backdrop-blur-md">
                    {model.badge}
                  </div>
                )}

                {/* Quick View Overlay (Visible on Hover) */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-end bg-black/60 p-8 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <button
                    onClick={() => handleQuickView(model)}
                    className="flex translate-y-4 items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-bold tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/20 group-hover:translate-y-0"
                  >
                    Quick View
                  </button>
                </div>

                {/* Product Image */}
                <div className="relative h-full w-full rounded-xl bg-white/5 transition-colors duration-500 group-hover:bg-white/10">
                  <Image src={model.image} alt={model.name} fill className="object-contain p-6 transition-transform duration-700 group-hover:scale-110 drop-shadow-2xl" />
                </div>
              </div>

              {/* Card Content Area */}
              <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                <div>
                  <h3 className="mb-4 text-xl font-bold leading-tight text-foreground md:text-2xl">
                    {model.name}
                  </h3>

                  <div className="mb-6 flex flex-wrap items-baseline gap-3">
                    <span className="text-2xl font-bold tracking-tight text-primary">
                      {formatPrice(model.price)}
                    </span>
                    {model.originalPrice && (
                      <span className="text-lg font-medium text-muted-foreground line-through decoration-muted-foreground/50">
                        {formatPrice(model.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-auto pt-4">
                  {model.inStock ? (
                    <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-4 text-sm font-bold tracking-wide text-primary-foreground shadow-lg transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] active:scale-[0.98]">
                      Add to Cart
                    </button>
                  ) : (
                    <button
                      disabled
                      className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-muted/30 px-6 py-4 text-sm font-bold tracking-wide text-muted-foreground border border-white/5"
                    >
                      Out of Stock
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedModel && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="glass relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-y-auto rounded-3xl border border-white/10 bg-background/90 shadow-2xl md:flex-row md:overflow-hidden"
            >
              <button
                onClick={closeModal}
                className="absolute right-4 top-4 z-20 rounded-full bg-white/10 p-2 text-muted-foreground backdrop-blur-md transition-colors hover:bg-white/20 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Image Area */}
              <div className="relative flex aspect-square w-full flex-col items-center justify-center bg-white/5 p-8 md:w-1/2 md:p-12 md:aspect-auto">
                <div className="relative h-full w-full rounded-xl bg-white/5">
                  <Image src={selectedModel.image} alt={selectedModel.name} fill className="object-contain p-8 drop-shadow-2xl" />
                </div>
                {/* Carousel Dots */}
                <div className="mt-6 flex justify-center gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 w-2 rounded-full ${i === 0 ? "bg-primary" : "bg-white/20"}`}
                    />
                  ))}
                </div>
              </div>

              {/* Modal Content Area */}
              <div className="flex w-full flex-col p-8 md:w-1/2 md:overflow-y-auto md:p-12">
                <h2 className="mb-2 text-2xl font-bold leading-tight text-foreground md:text-3xl">
                  {selectedModel.name}
                </h2>

                <div className="mb-6 flex flex-wrap items-baseline gap-3">
                  <span className="text-3xl font-bold tracking-tight text-primary">
                    {formatPrice(selectedModel.price)}
                  </span>
                  {selectedModel.originalPrice && (
                    <span className="text-xl font-medium text-muted-foreground line-through decoration-muted-foreground/50">
                      {formatPrice(selectedModel.originalPrice)}
                    </span>
                  )}
                </div>

                <div className="mb-8 space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">SKU:</span>
                    <span className="font-mono text-sm text-foreground">V3D-{selectedModel.slug.substring(0, 6).toUpperCase()}</span>
                  </div>

                  <div>
                    <h4 className="mb-3 text-sm font-semibold text-foreground">Color: <span className="font-normal text-muted-foreground">Black</span>*</h4>
                    <div className="flex gap-3">
                      <button className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-black ring-2 ring-primary/20 transition-all hover:scale-110">
                        {/* inner border to separate black background from black circle */}
                        <div className="h-full w-full rounded-full border-2 border-background" />
                      </button>
                      <button className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-transparent bg-neutral-600 transition-all hover:scale-110 hover:border-white/50" />
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-3 text-sm font-semibold text-foreground">Quantity *</h4>
                    <div className="inline-flex items-center rounded-xl border border-white/10 bg-white/5">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-4 py-3 text-muted-foreground transition-colors hover:text-white"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center text-sm font-semibold">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-4 py-3 text-muted-foreground transition-colors hover:text-white"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-auto flex flex-col gap-4">
                  {selectedModel.inStock ? (
                    <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-4 text-sm font-bold tracking-wide text-primary-foreground shadow-lg transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] active:scale-[0.98]">
                      Add to Cart
                    </button>
                  ) : (
                    <button
                      disabled
                      className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-muted/30 px-6 py-4 text-sm font-bold tracking-wide text-muted-foreground border border-white/5"
                    >
                      Out of Stock
                    </button>
                  )}

                  <Link
                    href={`/product-page/${selectedModel.slug}`}
                    onClick={() => document.body.style.overflow = ""} // make sure to restore scrolling
                    className="mt-2 inline-block self-start text-sm font-medium text-muted-foreground underline decoration-muted-foreground/30 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary/50"
                  >
                    View More Details
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
