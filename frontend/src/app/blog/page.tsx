"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { blogPosts } from "@/data/blogData";

export default function BlogPage() {
  return (
    <div className="relative min-h-screen overflow-hidden pt-36 pb-24 bg-background selection:bg-primary/30">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute top-[10%] right-[-5%] h-[50%] w-[40%] rounded-full bg-primary/10 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-[10%] left-[-10%] h-[40%] w-[30%] rounded-full bg-secondary/10 blur-[150px]" />

      <div className="container mx-auto px-6 relative max-w-7xl">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center justify-center gap-2"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/30">
              <BookOpen className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Discover</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-5xl font-extrabold tracking-tight text-foreground md:text-6xl"
          >
            Blogs and{" "}
            <span className="bg-gradient-to-br from-primary via-primary to-secondary bg-clip-text text-transparent">
              Updates
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            Stay updated with the latest news, industry trends, and insights from the world of 3D printing.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group glass flex flex-col rounded-[24px] overflow-hidden border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,229,255,0.15)] max-w-[400px] mx-auto w-full"
            >
              <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/20">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block rounded-full bg-background/90 backdrop-blur-md px-3 py-1 text-xs font-semibold text-foreground border border-white/10 shadow-lg">
                      {post.date}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col flex-1 p-6 md:p-8">
                  <h3 className="text-xl font-bold text-foreground leading-snug line-clamp-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/5">
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      Read Article
                    </span>
                    <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
