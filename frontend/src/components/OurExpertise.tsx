"use client";

import React, { useState, useEffect, useCallback } from 'react';
import ServiceCard from '@/components/ServiceCard';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    title: "3D Printing Service",
    href: "/3d-services/3d-printing-service",
    customVisual: <video src="/3d_printer.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover pointer-events-none" />
  },
  {
    title: "3D Scanning Service",
    href: "/3d-services/3d-scanning-service",
    customVisual: <video src="/scanner.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover pointer-events-none" />
  },
  {
    title: "3D Sculpting / Modelling",
    href: "/3d-services/3d-modelling-service",
    customVisual: <video src="/modelling.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover pointer-events-none" />
  },
  {
    title: "Vacuum Casting",
    href: "/3d-services/vacuum-casting",
    customVisual: <video src="/vaccum.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover pointer-events-none" />
  },
  {
    title: "3D Printer Repair",
    href: "/3d-services/3d-printer-repair",
    customVisual: <video src="/repair.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover pointer-events-none" />
  },
  {
    title: "Scale Modelling",
    customVisual: <video src="/scale.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover pointer-events-none" />
  },
  {
    title: "Shilp Studio",
    href: "/shilp-studio",
    customVisual: <video src="/shilp.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover pointer-events-none" />
  },
  {
    title: "Electroplating",
    href: "/electroplating",
    icon: <Sparkles className="w-24 h-24 text-blue-500" />,
    customVisual: (
      <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900 border border-white/10 shadow-inner">
        <video
          src="/electroplating.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover pointer-events-none scale-110"
        />
      </div>
    )
  },
  {
    title: "Velvet Coating",
    href: "/velvet-coating",
    customVisual: <video src="/velvet.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover pointer-events-none" />
  }
];

export default function OurExpertise() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(services.length / itemsPerPage);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  const chunks = [];
  for (let i = 0; i < services.length; i += itemsPerPage) {
    chunks.push(services.slice(i, i + itemsPerPage));
  }

  return (
    <section className="py-32 px-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white mb-4 tracking-tight">
            Our <span className="text-blue-600 dark:text-blue-500">Expertise</span>
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            From rapid prototyping to specialized repairs, we offer end-to-end solutions for all your 3D needs.
          </p>
        </div>

        {/* Slider Container */}
        <div 
          className="relative group overflow-hidden px-4 md:px-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {chunks.map((chunk, pageIndex) => (
              <div key={pageIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 place-items-center">
                  {chunk.map((service, idx) => (
                    <ServiceCard
                      key={service.title}
                      title={service.title}
                      href={service.href}
                      delay={0.1 * (idx + 1)}
                      icon={service.icon}
                      customVisual={service.customVisual}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 shadow-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all opacity-0 group-hover:opacity-100 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 shadow-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all opacity-0 group-hover:opacity-100 z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Pagination Indicators */}
          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === idx 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
