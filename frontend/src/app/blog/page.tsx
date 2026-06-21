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

        {/* Featured Post */}
        {blogPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link href={`/blog/${blogPosts[0].slug}`} className="group relative glass flex flex-col md:flex-row overflow-hidden rounded-[32px] border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,229,255,0.2)]">
              {/* Image Section */}
              <div className="relative w-full md:w-1/2 lg:w-3/5 aspect-video md:aspect-auto overflow-hidden bg-black/20">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute top-6 left-6 z-10">
                  <span className="inline-block rounded-full bg-primary/90 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-primary-foreground shadow-lg">
                    Featured
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col justify-center w-full md:w-1/2 lg:w-2/5 p-8 md:p-12 lg:p-16">
                <div className="mb-4 text-sm font-medium text-cyan-400">
                  {blogPosts[0].date}
                </div>
                <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight group-hover:text-cyan-300 transition-colors">
                  {blogPosts[0].title}
                </h2>
                <div className="mt-8 flex items-center gap-3 font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <span>Read Full Article</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 group-hover:bg-cyan-500/20 group-hover:-rotate-45 transition-all duration-300">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
          {blogPosts.slice(1).map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group glass flex flex-col rounded-[24px] overflow-hidden border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_-10px_rgba(0,229,255,0.15)]"
            >
              <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/20">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block rounded-full bg-background/80 backdrop-blur-md px-3 py-1 text-xs font-semibold text-foreground border border-white/10 shadow-lg">
                      {post.date}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col flex-1 p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-foreground leading-snug line-clamp-3 group-hover:text-cyan-300 transition-colors">
                    {post.title}
                  </h3>
                  
                  <div className="mt-auto pt-8 flex items-center justify-between border-t border-white/5">
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-cyan-300 transition-colors">
                      Read Article
                    </span>
                    <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-foreground group-hover:bg-cyan-500 group-hover:text-cyan-950 group-hover:-rotate-45 transition-all duration-300">
                      <ArrowRight className="w-5 h-5" />
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
