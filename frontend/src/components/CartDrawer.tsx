"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, ShoppingCart, Tag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartDrawer() {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  // Prevent background scrolling when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2
    }).format(price);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-[101] flex h-full w-full max-w-[400px] flex-col bg-background border-l border-border shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border p-6 bg-secondary/30">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                Cart <span className="text-sm font-normal text-slate-700 dark:text-slate-300">({cartCount} items)</span>
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="rounded-full p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:bg-slate-900 hover:text-foreground transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
              {cartItems.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-slate-700 dark:text-slate-300 space-y-4">
                  <ShoppingCart className="h-16 w-16 opacity-20" />
                  <p className="text-lg">Your cart is empty</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 px-6 py-2 rounded-full border border-border hover:bg-slate-100 dark:bg-slate-900 transition-colors text-foreground"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 border-b border-border pb-6 last:border-0 last:pb-0">
                      {/* Image */}
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded border border-border bg-white p-2">
                        <Image src={item.image} alt={item.name} fill className="object-contain" />
                      </div>

                      {/* Details */}
                      <div className="flex flex-1 flex-col">
                        <div className="flex justify-between items-start gap-2">
                          <h3 className="font-medium text-foreground text-sm line-clamp-2">{item.name}</h3>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-slate-700 dark:text-slate-300 hover:text-red-500 transition-colors shrink-0"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <div className="mt-1 text-xs text-slate-700 dark:text-slate-300">
                          Color: black
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                          {/* Quantity Controls */}
                          <div className="flex items-center border border-border/80 rounded bg-background">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-2 py-1 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:bg-slate-900 hover:text-foreground transition-colors"
                            >
                              -
                            </button>
                            <span className="w-8 border-x border-border/80 text-center text-sm font-medium text-foreground py-1">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-2 py-1 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:bg-slate-900 hover:text-foreground transition-colors"
                            >
                              +
                            </button>
                          </div>
                          
                          {/* Price */}
                          <div className="text-sm font-medium text-foreground">
                            {formatPrice((typeof item.price === 'number' ? item.price : parseFloat(String(item.price).replace(/[^0-9.-]+/g, "")) || 0) * item.quantity)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Promo Code Link */}
                  <div className="pt-2">
                    <button className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
                      <Tag className="w-4 h-4" /> Enter a promo code
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-border bg-background p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-foreground">Estimated total</span>
                  <span className="text-xl font-medium text-foreground">{formatPrice(cartTotal)}</span>
                </div>
                
                <Link
                  href="/cart"
                  onClick={() => setIsCartOpen(false)}
                  className="flex w-full items-center justify-center rounded bg-[#7a8a6b] px-6 py-4 text-sm font-medium tracking-wide text-foreground transition-colors hover:bg-[#6b795d] shadow-sm"
                >
                  View Cart
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
