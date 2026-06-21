"use client";

import React from "react";
import { ArrowLeft, Calendar, Share2, Link as LinkIcon, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogData";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const router = useRouter();

  // Find the blog post based on slug
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-36 bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-foreground">Post not found</h1>
          <button onClick={() => router.back()} className="text-cyan-400 hover:underline">
            Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-background selection:bg-cyan-500/30">
      {/* Background Ambience */}
      <div className="pointer-events-none fixed top-[-10%] right-[-10%] h-[50%] w-[50%] rounded-full bg-cyan-900/20 blur-[150px] z-0" />
      <div className="pointer-events-none fixed bottom-[20%] left-[-10%] h-[40%] w-[30%] rounded-full bg-blue-900/20 blur-[150px] z-0" />

      {/* Full-Bleed Hero Section */}
      <div className="relative w-full h-[60vh] min-h-[500px] max-h-[800px] z-10">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        {/* Gradients to fade into background */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />

        <div className="absolute inset-0 flex items-end pb-16">
          <div className="container mx-auto px-6 max-w-6xl">
            <button
              onClick={() => router.push('/blog')}
              className="group inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400 mb-8"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              All Posts
            </button>

            <div className="flex items-center gap-4 mb-6 text-sm font-medium">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 ring-1 ring-cyan-500/30">
                {post.date}
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Calendar className="w-4 h-4" />
                {/* Fallback mock date since real date string might be "Latest Update" */}
                June 17, 2024
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-4xl drop-shadow-lg">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="container relative mx-auto px-6 max-w-6xl z-10 pb-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Sticky Sidebar */}
          <aside className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-32 glass rounded-[24px] border border-white/5 bg-white/[0.02] p-8">
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/10">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                  <span className="font-bold text-xl text-cyan-400">V</span>
                </div>
                <div>
                  <p className="text-base font-bold text-foreground">Vektor3D</p>
                  <p className="text-sm text-muted-foreground">Author</p>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Share Article</p>
                <div className="flex gap-3">
                  <button className="h-10 w-10 rounded-full bg-white/5 hover:bg-cyan-500 hover:text-cyan-950 flex items-center justify-center text-muted-foreground transition-all duration-300 hover:scale-110">
                    <LinkIcon className="w-4 h-4" />
                  </button>
                  <button className="h-10 w-10 rounded-full bg-white/5 hover:bg-cyan-500 hover:text-cyan-950 flex items-center justify-center text-muted-foreground transition-all duration-300 hover:scale-110">
                    <Mail className="w-4 h-4" />
                  </button>
                  <button className="h-10 w-10 rounded-full bg-white/5 hover:bg-cyan-500 hover:text-cyan-950 flex items-center justify-center text-muted-foreground transition-all duration-300 hover:scale-110">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Tags</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-white/5 hover:bg-white/10 cursor-pointer transition-colors border border-white/10 rounded-lg text-xs font-medium text-slate-300">#3DPrinting</span>
                  <span className="px-3 py-1.5 bg-white/5 hover:bg-white/10 cursor-pointer transition-colors border border-white/10 rounded-lg text-xs font-medium text-slate-300">#Innovation</span>
                  <span className="px-3 py-1.5 bg-white/5 hover:bg-white/10 cursor-pointer transition-colors border border-white/10 rounded-lg text-xs font-medium text-slate-300">#Vektor3D</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <article className="lg:w-3/4">
            <div className="glass rounded-[32px] border border-white/5 bg-white/[0.02] shadow-2xl p-6 md:p-12 lg:p-16">
              
              {/* Mobile Author Info (Visible only on small screens) */}
              <div className="flex lg:hidden items-center justify-between border-b border-white/10 pb-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
                    <span className="font-bold text-cyan-400">V</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Vektor3D</p>
                    <p className="text-xs text-muted-foreground">Author</p>
                  </div>
                </div>
                <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              {/* Formatted Content */}
              <div 
                className="prose prose-invert prose-lg max-w-none text-slate-300 leading-relaxed 
                  prose-headings:text-white prose-h2:text-3xl prose-h2:font-extrabold prose-h2:mt-14 prose-h2:mb-6 
                  prose-p:mb-6 prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline
                  prose-img:rounded-2xl prose-img:border prose-img:border-white/10 prose-img:shadow-xl
                  prose-blockquote:border-l-cyan-500 prose-blockquote:bg-cyan-500/5 prose-blockquote:px-6 prose-blockquote:py-2 prose-blockquote:rounded-r-xl prose-blockquote:text-slate-200 prose-blockquote:font-medium prose-blockquote:italic
                  prose-strong:text-white prose-strong:font-bold
                  prose-td:border-white/10 prose-th:border-white/10 prose-th:bg-white/5 prose-th:text-white"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Call to Action Footer */}
              <div className="mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent rounded-2xl p-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Ready to start printing?</h3>
                  <p className="text-slate-400 text-sm">Reach out to our experts for a customized solution.</p>
                </div>
                <Link 
                  href="/contact-us"
                  className="whitespace-nowrap inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-cyan-950 font-bold rounded-xl hover:bg-cyan-400 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]"
                >
                  Contact Us Today
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
