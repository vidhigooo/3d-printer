"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Tag, FileText, Lock } from "lucide-react";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2
    }).format(price);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    let message = "Hello! I would like to order the following items:\n\n";
    cartItems.forEach((item) => {
      message += `${item.quantity}x ${item.name} (${item.price})\n`;
    });
    message += `\nTotal: ${formatPrice(cartTotal)}\n\nPlease confirm my order.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918369305601?text=${encodedMessage}`, "_blank");
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background pt-8 pb-24">
        <h1 className="text-3xl font-bold mb-6 text-foreground">Your cart is empty</h1>
        <Link href="/" className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-8 pb-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Cart Items */}
          <div className="lg:col-span-2">
            <h1 className="text-2xl font-semibold text-foreground mb-6 pb-4 border-b border-border/50">My cart</h1>
            
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 py-6 border-b border-border/50">
                  <div className="relative h-24 w-24 shrink-0 bg-white border border-border/50 rounded-md p-2">
                    <Image src={item.image} alt={item.name} fill className="object-contain" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-medium text-foreground truncate">{item.name}</h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">{item.price}</p>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">Color: black</p> {/* Hardcoded as per reference image if needed, or omit */}
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center border border-border/80 rounded">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1 hover:bg-slate-100 dark:bg-slate-900 text-foreground transition-colors"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 border-x border-border/80 min-w-[2.5rem] text-center text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 hover:bg-slate-100 dark:bg-slate-900 text-foreground transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <div className="font-medium text-foreground w-24 text-right">
                      {formatPrice((typeof item.price === 'number' ? item.price : parseFloat(String(item.price).replace(/[^0-9.-]+/g, "")) || 0) * item.quantity)}
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-slate-700 dark:text-slate-300 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              <button className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
                <Tag className="w-4 h-4" /> Enter a promo code
              </button>
              <button className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
                <FileText className="w-4 h-4" /> Add a note
              </button>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold text-foreground mb-6 pb-4 border-b border-border/50">Order summary</h2>
            
            <div className="space-y-4 text-sm mb-6 border-b border-border/50 pb-6">
              <div className="flex justify-between items-center">
                <span className="text-foreground">Subtotal</span>
                <span className="text-foreground">{formatPrice(cartTotal)}</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-foreground">Delivery</span>
                <div className="text-right">
                  <span className="text-foreground block">FREE</span>
                  <a href="#" className="text-slate-700 dark:text-slate-300 hover:text-foreground underline decoration-1 underline-offset-2 transition-colors mt-1 inline-block">Maharashtra, India</a>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <span className="text-lg text-foreground">Total</span>
              <span className="text-lg font-medium text-foreground">{formatPrice(cartTotal)}</span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-[#7a8a6b] hover:bg-[#6b795d] text-foreground py-4 rounded font-medium transition-colors shadow-sm mb-4"
            >
              Checkout
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-700 dark:text-slate-300">
              <Lock className="w-3 h-3" /> Secure Checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
