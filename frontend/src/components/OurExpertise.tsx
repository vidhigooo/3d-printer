"use client";

import React from 'react';
import ServiceCard from '@/components/ServiceCard';

export default function OurExpertise() {
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

        {/* 3-Column Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 place-items-center">
          
          <ServiceCard
            title="3D Printing Service"
            href="/3d-services/3d-printing-service"
            delay={0.1}
            customVisual={
              <video 
                src="/3d_printer.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover pointer-events-none"
              />
            }
          />
          
          <ServiceCard
            title="3D Scanning Service"
            href="/3d-services/3d-scanning-service"
            delay={0.2}
            customVisual={
              <video 
                src="/scanner.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover pointer-events-none"
              />
            }
          />
          
          <ServiceCard
            title="3D Printer Repair"
            href="/3d-services/3d-printer-repair"
            delay={0.3}
            customVisual={
              <video 
                src="/repair.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover pointer-events-none"
              />
            }
          />
          
          <ServiceCard
            title="3D Sculpting / Modelling"
            href="/3d-services/3d-modelling-service"
            delay={0.4}
            customVisual={
              <video 
                src="/modelling.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover pointer-events-none"
              />
            }
          />

          <ServiceCard
            title="Scale Modelling"
            delay={0.5}
            customVisual={
              <video 
                src="/scale.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover pointer-events-none"
              />
            }
          />

          <ServiceCard
            title="Vacuum Casting"
            href="/3d-services/vacuum-casting"
            delay={0.6}
            customVisual={
              <video 
                src="/vaccum.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover pointer-events-none"
              />
            }
          />
        </div>
      </div>
    </section>
  );
}
