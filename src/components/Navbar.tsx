"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X, Hexagon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "glass py-4 shadow-lg shadow-primary/5 border-b border-border/50 bg-background/40" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Hexagon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />
          <span className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
            Vektor3d
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center space-x-12">
          {["Services", "How It Works", "Portfolio", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Action Button & Theme */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-medium text-sm inline-block shadow-[0_0_15px_rgba(0,229,255,0.15)] hover:shadow-[0_0_25px_rgba(0,229,255,0.4)]"
          >
            Get Instant Quote
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4 text-foreground">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full glass border-b border-border/50 py-4 flex flex-col items-center space-y-4 bg-background/95 backdrop-blur-xl"
        >
          {["Services", "How It Works", "Portfolio", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-base font-medium text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            href="#contact"
            className="mt-4 px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm shadow-[0_0_15px_rgba(0,229,255,0.3)]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Instant Quote
          </Link>
        </motion.div>
      )}
    </header>
  );
}
