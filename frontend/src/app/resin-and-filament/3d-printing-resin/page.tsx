"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart, Info, Zap } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Elegoo Standard Resin-All Colors",
    image: "/resin/1.png",
    price: "₹1,699.00",
    outOfStock: false,
    description: "Elegoo Standard Photopolymer Resin is a high-quality 3D printing material designed for LCD and DLP 3D printers. Engineered to deliver exceptional detail and smooth surface finishes, this resin is ideal for both beginners and professionals looking for reliable and consistent printing results.\n\nWith its low shrinkage and high stability, it ensures accurate prints with fine details, making it perfect for models, prototypes, and creative projects. The resin offers excellent fluidity, allowing faster curing times and improved printing efficiency.\n\nKey Features:\nHigh Precision & Detail: Produces sharp, intricate designs with smooth surfaces\nLow Shrinkage: Ensures dimensional accuracy and reduces deformation\nFast Curing: Optimized for quick layer curing and efficient printing\nStrong & Durable: Offers a good balance of hardness and toughness\nWide Compatibility: Suitable for most LCD/DLP 3D printers\nLow Odor Formula: More user-friendly compared to standard resins\n\nApplications:\nMiniatures and figurines\nIndustrial parts and prototypes\nJewelry design\nDIY and creative projects\n\nSpecifications:\nMaterial Type: Photopolymer Resin\nPrinting Technology: LCD / DLP\nViscosity: Low\nAvailable Colors: Multiple options (Grey, Black, White, Transparent, etc.)\n\nElegoo Standard Resin is the perfect choice for achieving professional-quality 3D prints with ease, combining performance, reliability, and affordability.",
    extraImages: ["/resin/1_1.png", "/resin/1_2.png", "/resin/1_3.png"]
  },
  {
    id: 2,
    name: "10K Orange Red Jewelry Mold DLP 3D Printing Resin 1 kg",
    image: "/resin/2.png",
    price: "₹6,300.00",
    outOfStock: false,
    description: "Features and Benefits:\n\nEco-Friendly Packaging: Championing Sustainability Embrace environmentally conscious 3D printing with our eco-friendly bottle packaging, reducing plastic consumption while maintaining superior quality.\n\nUpgraded Performance Formula: Elevating Your Prints Our upgraded formula guarantees high printing accuracy, toughness, and exceptional adhesion, delivering prints of unparalleled detail and quality 3D Resin Prints which also has the best 3D Resin Reviews Globally.\n\nUnrivalled Accuracy and Toughness: Durable Masterpieces Experience prints that combine intricate detail with impact resistance and High Precession 3D Resin and resulting in robust and enduring creations.\n\nLow Odor Printing: Enjoyable 3D Printing Sessions Bid farewell to strong odors during printing – our advanced formulation ensures a pleasant and hassle-free printing experience.\n\nExtended Expiration Date: Vektor3D 10K Standard Plus Resin Minimize Waste Say goodbye to short shelf lives; our top-quality 3D Printing resin offers an extended expiration date of up to 24 months, reducing waste.\n\nCompatibility with LCD,SLA and DLP Printers: Versatility Guaranteed Whether you use an LCD ,SLA or DLP 3D printer, JamgHe 10k Standard Plus Resin ensures exceptional results every time.\n\nEnhanced Toughness and Durability: Prints That Last With 15% elongation at break, our resin provides double the toughness of standard resins, guaranteeing durability.\n\nLow Viscosity : Low Viscosity is one main character of excellent resin, it will help you to print less failure, VEKTOR3D 10K standard Resin is low Viscosity resin and will assist you to print more successfully with less worried.",
    extraImages: ["/resin/2_!.png"]
  },
  {
    id: 3,
    name: "Anycubic Resin - all color",
    image: "/resin/3.png",
    price: "₹1,860.00",
    outOfStock: false,
    description: "Professional LCD molding resin. Optimize the formation of LCD low light source and printing efficiency is higher than the market compatible DLP / LCD / SLA resin. The resin is only designed for the LCD model of the resin, not recommended DLP or SLA machine.\n\nHigh-speed solidify. This resin ensures the strength of molded parts and not excessive shrinkage, but also improve print speed, shorten the curing time and enhance the printing efficiency of LCD machines as much as possible.\n\nStrong adhesion of the model and easy to detach after forming. Not only high success rate of printing and precision, but also to minimize resin release force and adhesion, so that the model attached to the forming platform can easily shovel and low viscosity makes it easier to clean the machine and model.\n\nThe material is rigid and tough. Strong material in the shovel model can easily lead to the model fragmentation, but too flexible material will be prone to the details of the print tensile deformation or fracture, which will affect the molding accuracy and aesthetics.\n\nModel's performance is stable. The resin is stable under different climatic conditions and is also easy to store, overcoming the shortcomings of other resins easily damp softening and environmental corrosion",
    extraImages: ["/resin/3_1.png", "/resin/3_2.png"]
  },
  {
    id: 4,
    name: "Ceramic Resin for 3D Printer",
    image: "/resin/4.png",
    price: "₹40,000.00",
    outOfStock: false,
    description: "We provide below ceramic resins:\n1. Zirconia Ceramic Resin\n2. Silica Ceramic Resins"
  },
  {
    id: 5,
    name: "Dental Model Resin Skin Color 500 ml",
    image: "/resin/5.png",
    price: "₹3,700.00",
    outOfStock: false,
    description: "Skin Color is the perfect & highly recommended colour for dental model preparation for your 3D prints. The solid skin appearance allows you to 3D print models or parts with a detailed smooth finish that will be skin in colour when cured.\n\nOur Rapid product range is designed for low powered LED DLP type printers such as the Anycubic Photon, Phrozen Shuffle and the Wanhao Duplicator 7. The cure speed is up to 4 X faster than our standard resin.\n\nSkin is the perfect & highly recommended colour for photographing your 3D prints. The solid skin appearance allows you to 3D print models or parts with a detailed smooth finish that will be skin in colour when cured."
  },
  {
    id: 6,
    name: "Castable Resin for Jewelry 3D Printing",
    image: "/resin/6.png",
    price: "₹12,000.00",
    outOfStock: false,
    description: "Premium castable resin designed specifically for jewelry 3D printing and investment casting. Leaves minimal ash residue and ensures exceptional detail reproduction for rings, pendants, and intricate jewelry pieces."
  }
];

export default function Resin3DPrintingPage() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  return (
    <div className="relative min-h-screen overflow-hidden pt-36 pb-24 selection:bg-primary/30">
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
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
          >
            Explore our premium selection of 3D printing resins, tailored for precision, durability, and a wide variety of advanced applications.
          </motion.p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group glass relative flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_-5px_rgba(0,229,255,0.2)]"
            >
              {/* Image Container - Clickable to open modal */}
              <div 
                className="relative flex h-56 w-full cursor-pointer items-center justify-center bg-white p-6 transition-colors"
                onClick={() => setSelectedProduct(product)}
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

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                  {product.name}
                </h3>
                
                <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/5">
                  <span className="text-xl font-semibold text-primary">{product.price}</span>
                  <button
                    className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
                      product.outOfStock
                        ? "cursor-not-allowed bg-white/5 text-muted-foreground"
                        : "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_15px_rgba(0,229,255,0.5)] hover:scale-110"
                    }`}
                    disabled={product.outOfStock}
                    title={product.outOfStock ? "Out of stock" : "Add to cart"}
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Details Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-background shadow-2xl md:flex-row"
            >
              {/* Modal Image */}
              <div className="flex items-center justify-center bg-white p-8 md:w-1/2">
                <div className="relative h-64 w-full md:h-full min-h-[300px]">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Modal Content */}
              <div className="relative flex flex-col p-6 md:w-1/2 md:p-10">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="pr-8">
                  <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl leading-tight">{selectedProduct.name}</h2>
                  <p className="mb-6 text-2xl font-semibold text-primary">{selectedProduct.price}</p>
                </div>
                
                <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar">
                  <div className="space-y-4 text-sm leading-relaxed text-muted-foreground break-words">
                    {selectedProduct.description.split('\n').map((paragraph, i) => (
                      paragraph.trim() ? <p key={i}>{paragraph}</p> : <br key={i} />
                    ))}
                  </div>
                  
                  {/* Extra Images */}
                  {selectedProduct.extraImages && (
                    <div className="mt-8 flex flex-col gap-6">
                      {selectedProduct.extraImages.map((img, i) => (
                        <div key={i} className="relative w-full overflow-hidden rounded-xl bg-white/5 border border-white/10 shadow-lg">
                          <Image 
                            src={img} 
                            alt={`${selectedProduct.name} detail ${i + 1}`} 
                            width={800} 
                            height={400} 
                            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <button
                    className={`flex w-full items-center justify-center gap-2 rounded-xl py-4 text-sm font-semibold transition-all duration-300 ${
                      selectedProduct.outOfStock
                        ? "cursor-not-allowed bg-muted text-muted-foreground"
                        : "bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]"
                    }`}
                    disabled={selectedProduct.outOfStock}
                  >
                    <ShoppingCart className="h-5 w-5" />
                    {selectedProduct.outOfStock ? "Out of Stock" : "Add to Cart"}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
