"use client";

import { motion } from "framer-motion";
import { Zap, Clock, DollarSign, Wrench, Users, Palette } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: "High Precision 3D Printing",
    description: "We use advanced technology to deliver highly accurate and detailed prints."
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Fast Turnaround Time",
    description: "On a tight deadline? We ensure quick delivery without compromising quality."
  },
  {
    icon: <DollarSign className="w-5 h-5" />,
    title: "Affordable Pricing",
    description: "Get top-quality results at competitive prices — ideal for startups, students, and businesses."
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    title: "Custom Solutions",
    description: "Every project is unique, and we provide fully customized 3D printing and prototyping solutions."
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Expert Support",
    description: "From design to final product, our team guides you at every step."
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: "Wide Range of Materials",
    description: "We offer multiple material options like PLA, ABS, Resin, and more based on your project needs."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Vektor 3D</span>?
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl">
                Because precision, reliability, and deep expertise matter. We deliver exceptional 3D printing solutions backed by advanced technology and dedicated support.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.slice(4).map((f, i) => (
                <div key={i} className="p-6 rounded-xl bg-primary/10 border border-primary/30 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)] hover:border-primary/60 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                      {f.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-card-foreground">{f.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground max-w-xs">{f.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {features.slice(0, 4).map((f, i) => (
              <div key={i} className="p-6 rounded-xl bg-primary/10 border border-primary/30 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)] hover:border-primary/60 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-card-foreground">{f.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground max-w-xs">{f.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
