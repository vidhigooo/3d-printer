"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "3D Printers", href: "/3d-printers" },
    { name: "Products", href: "/products" },
    { name: "3D Services", href: "/3d-services" },
    { name: "Shilp studio", href: "/shilp studio" },
    { name: "Industries", href: "/industries" },
    { name: "Contact Us", href: "/contact-us" },
  ];

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
        <Link href="/" className="flex items-center group translate-y-1">
          <Image
            src="/logo.png"
            alt="Vektor3d"
            width={250}
            height={250}
            className="h-24 xl:h-28 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-1 justify-center space-x-4 xl:space-x-8 translate-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[13px] xl:text-sm font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Contact Info & Search */}
        <div className="hidden lg:flex flex-col items-end gap-2 xl:gap-3 flex-shrink-0 ml-4 translate-y-1">
          {/* Top row: Numbers */}
          <div className="text-[12px] xl:text-[13px] font-medium text-muted-foreground whitespace-nowrap">
            <span>3D Printing: +91-9082020416 | +91-8655211644</span>
            <span className="mx-2 text-border/50">|</span>
            <span>3D Printer: +91-8369305601</span>
          </div>
          
          {/* Bottom row: Search & Theme */}
          <div className="flex items-center gap-4 xl:gap-6">
            <div className="flex items-center gap-2 border-b border-border/50 pb-1">
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-24 xl:w-36 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
              <button className="p-1 hover:opacity-80 rounded text-foreground transition-colors bg-[#f0ece1] dark:bg-primary/20">
                <Search className="w-4 h-4" />
              </button>
            </div>
            <ThemeToggle />
          </div>
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
          className="md:hidden absolute top-full left-0 w-full border-b border-border/50 py-4 pb-8 flex flex-col items-center space-y-4 bg-background shadow-2xl"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base font-medium text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex flex-col items-center mt-4 w-full p-4 border-t border-border/50 text-xs text-center space-y-1">
            <span className="text-foreground">3D Printing: +91-9082020416 | +91-8655211644</span>
            <span className="text-muted-foreground">3D Printer: +91-8369305601</span>
          </div>
          
          <div className="flex items-center border border-border/50 rounded-md overflow-hidden bg-background/50 mt-4 w-11/12 max-w-sm">
            <input 
              type="text" 
              placeholder="Search..." 
              className="flex-1 px-3 py-2 text-sm bg-transparent outline-none"
            />
            <button className="px-4 py-2 bg-[#f0ece1] dark:bg-secondary/30 hover:opacity-80 text-foreground transition-colors">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
