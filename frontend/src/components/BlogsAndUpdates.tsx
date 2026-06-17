"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { blogPosts } from "@/data/blogData";

export default function BlogsAndUpdates() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute top-[20%] right-0 h-[50%] w-[40%] rounded-full bg-primary/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[10%] left-[-10%] h-[40%] w-[30%] rounded-full bg-secondary/5 blur-[100px]" />

      <div className="container mx-auto px-6 relative max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary ring-1 ring-primary/30">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Discover</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-foreground tracking-tight"
            >
              Blogs and{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Updates
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              href="/blog" 
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              View All Post
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mx-auto">
          {blogPosts.slice(0, 3).map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass flex flex-col rounded-[20px] overflow-hidden border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,229,255,0.15)] max-w-[380px] mx-auto w-full"
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
                
                <div className="flex flex-col flex-1 p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-foreground leading-snug line-clamp-3 group-hover:text-primary transition-colors">
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
    </section>
  );
}
