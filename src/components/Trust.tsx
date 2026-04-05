"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Users, Clock, Award } from "lucide-react";

function Counter({ from = 0, to, duration = 2, decimals = 0, suffix = "" }: { from?: number, to: number, duration?: number, decimals?: number, suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let start = from;
      const end = to;
      let startTime: number | null = null;
      
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        // Easing out cubic
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        
        setCount(start + (end - start) * easeProgress);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [inView, from, to, duration]);

  return (
    <span ref={ref} className="font-bold tabular-nums">
      {count.toFixed(decimals)}{suffix}
    </span>
  );
}

const stats = [
  {
    icon: <Star className="w-6 h-6 text-yellow-400" />,
    value: 4.9,
    decimals: 1,
    suffix: "/5",
    label: "Client Rating",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    value: 500,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    value: 24,
    suffix: "h",
    label: "Average Turnaround",
  },
  {
    icon: <Award className="w-6 h-6 text-primary" />,
    value: 99.8,
    decimals: 1,
    suffix: "%",
    label: "Tolerance Accuracy",
  }
];

export default function Trust() {
  return (
    <section className="py-24 bg-card border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-border">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="mb-4 p-3 rounded-full bg-muted border border-border">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl text-card-foreground mb-2 tracking-tight">
                <Counter to={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
              </div>
              <div className="text-muted-foreground font-medium text-sm md:text-base uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
