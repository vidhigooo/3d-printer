"use client";

import React from "react";
import { ArrowLeft, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogData";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const router = useRouter();

  // Find the blog post based on slug
  const post = blogPosts.find((p) => p.slug === params.slug);

  // If post not found, we could show a 404 or redirect, but for simplicity we fallback or show a message
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-36">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Post not found</h1>
          <button onClick={() => router.back()} className="text-primary hover:underline">
            Go back
          </button>
        </div>
      </div>
    );
  }


  return (
    <div className="relative min-h-screen overflow-hidden pt-36 pb-24 bg-background selection:bg-primary/30">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute top-[-10%] right-[-10%] h-[50%] w-[50%] rounded-full bg-primary/10 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-[20%] left-[-10%] h-[40%] w-[30%] rounded-full bg-secondary/10 blur-[150px]" />

      <div className="container relative mx-auto px-6 max-w-4xl">
        {/* Back Button */}
        <button
          onClick={() => router.push('/blog')}
          className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary mb-8"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          All Posts
        </button>

        <article className="glass relative flex flex-col rounded-[32px] overflow-hidden border border-white/10 bg-white/[0.02] shadow-2xl p-6 md:p-10 lg:p-12">
          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-4 mb-6 text-sm font-medium text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary">
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                June 17, 2024
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight mb-8">
              {post.title}
            </h1>

            {/* Author / Share */}
            <div className="flex items-center justify-between border-y border-white/10 py-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                  <span className="font-bold text-primary">V</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Vektor3D Systems</p>
                  <p className="text-xs text-muted-foreground">Author</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-muted-foreground hidden sm:inline-block mr-2">Share</span>
              </div>
            </div>
          </header>



          {/* Content */}
          <div 
            className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed prose-headings:text-foreground prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-p:mb-6 prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Footer Tags / Action */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-foreground">#3DPrinting</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-foreground">#Innovation</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-foreground">#Vektor3D</span>
            </div>
            
            <Link 
              href="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors"
            >
              Contact Us for Projects
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
