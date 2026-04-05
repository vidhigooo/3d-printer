"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cuboid, Cpu, PenTool, Rotate3d, Stethoscope } from "lucide-react";

const services = [
  {
    icon: <Cuboid className="w-8 h-8" />,
    title: "Industrial 3D Printing",
    description: "High-performance parts with engineering-grade materials for extreme environments.",
    speed: 0.8
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Rapid Prototyping",
    description: "Accelerate your product development cycle with lightning-fast prototype iteration.",
    speed: 1.2
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "CAD Design",
    description: "Expert mechanical and product design services to bring your concepts to life.",
    speed: 0.9
  },
  {
    icon: <Rotate3d className="w-8 h-8" />,
    title: "Reverse Engineering",
    description: "3D scanning and reconstruction of existing parts for manufacturing or modification.",
    speed: 1.1
  },
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: "Dental Models",
    description: "High-accuracy, biocompatible resin printing for the dental and medical industry.",
    speed: 1.0
  }
];

function ServiceCard({ service, index, scrollYProgress }: { service: any, index: number, scrollYProgress: any }) {
  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * service.speed]);
  return (
    <motion.div
      style={{ y }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card border border-border p-8 rounded-2xl hover:shadow-[0_0_30px_rgba(0,229,255,0.1)] transition-all duration-500 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all duration-500">
        {service.icon}
      </div>
      <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed text-sm">
        {service.description}
      </p>
    </motion.div>
  );
}

export default function Services() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section id="services" className="py-32 relative z-10 bg-background" ref={containerRef}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
          >
            Precision <span className="text-primary">Capabilities</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Equipped with state-of-the-art SLA, SLS, and FDM technology to meet the rigorous demands of modern engineering.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} scrollYProgress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}
