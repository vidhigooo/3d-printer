"use client";

import { motion } from "framer-motion";
import { UploadCloud, Calculator, Truck } from "lucide-react";

const steps = [
  {
    icon: <UploadCloud className="w-6 h-6" />,
    number: "01",
    title: "Upload Your Design",
    description: "Securely upload your STL, OBJ, or STEP files. Our engine automatically analyzes geometry and printability."
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    number: "02",
    title: "Get Instant Quote",
    description: "Select materials, finishes, and quantities. Get real-time pricing and estimated lead times instantly."
  },
  {
    icon: <Truck className="w-6 h-6" />,
    number: "03",
    title: "We Print & Deliver",
    description: "Your parts are manufactured in our state-of-the-art facility and shipped directly to your door."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 bg-muted/20 border-y border-border/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03] opacity-[0.08] bg-[radial-gradient(#00E5FF_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
          >
            Streamlined <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Workflow</span>
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-balance">
            From digital file to physical part in three simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Number Background */}
                <div className="absolute -top-8 -left-4 text-8xl font-black text-foreground/[0.03] select-none pointer-events-none group-hover:text-primary/[0.05] transition-colors duration-500">
                  {step.number}
                </div>

                {/* Icon Circle */}
                <div className="w-[90px] h-[90px] rounded-full bg-card border border-primary/20 flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(0,229,255,0.2)] transition-all duration-500 shadow-sm">
                  <div className="text-primary group-hover:text-foreground transition-colors duration-300">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm px-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
