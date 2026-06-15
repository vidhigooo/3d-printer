"use client";

import React, { useState } from "react";
import { Send, Loader2, CheckCircle } from "lucide-react";
import FileUpload from "./FileUpload";

const PROCESSES = [
  "Select a Process",
  "FDM 3D Printing",
  "Industrial FDM Printing",
  "SLA Printing",
  "LCD/DLP Printing",
  "Vacuum Casting",
  "3D Scanning",
  "Electroplating",
  "Product Development",
];

const MATERIALS = [
  "Not Sure / Recommend Me",
  "PLA",
  "ABS / ASA",
  "PETG",
  "Nylon (PA12)",
  "TPU (Flexible)",
  "Standard Resin",
  "Tough/Engineering Resin",
  "Castable Resin",
  "Polyurethane (Vacuum Casting)",
];

export default function QuoteForm() {
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [successQuoteId, setSuccessQuoteId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      setFileError("Please upload a CAD file to proceed.");
      return;
    }

    setLoading(true);
    setError(null);
    setFileError(null);

    const formData = new FormData(e.currentTarget);
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || data.error || "Failed to submit quote request.");
      }

      setSuccessQuoteId(data.quoteId);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  if (successQuoteId) {
    return (
      <div className="bg-slate-900/60 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-10 text-center shadow-[0_0_50px_rgba(0,229,255,0.1)]">
        <div className="w-20 h-20 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-cyan-400" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Request Submitted Successfully!</h2>
        <p className="text-slate-400 text-lg mb-6">
          Thank you for your request. Our team will review your files and get back to you with a quotation shortly.
        </p>
        <div className="bg-slate-950/50 rounded-xl p-4 inline-block border border-white/5">
          <p className="text-sm text-slate-500 mb-1">Your Quote Reference ID</p>
          <p className="text-xl font-mono text-cyan-300 tracking-wider font-bold">{successQuoteId}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-6 md:p-10 shadow-2xl">
      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* Customer Information */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-3 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm">1</span>
            Customer Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-sm font-medium text-slate-300">Full Name *</label>
              <input required type="text" id="fullName" name="fullName" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label htmlFor="companyName" className="text-sm font-medium text-slate-300">Company Name</label>
              <input type="text" id="companyName" name="companyName" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" placeholder="Your Company Ltd" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Address *</label>
              <input required type="email" id="email" name="email" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" placeholder="john@company.com" />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-slate-300">Phone Number</label>
              <input type="tel" id="phone" name="phone" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" placeholder="+1 (555) 000-0000" />
            </div>
          </div>
        </div>

        {/* Project Information */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-3 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm">2</span>
            Project Information
          </h3>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="projectName" className="text-sm font-medium text-slate-300">Project Name *</label>
              <input required type="text" id="projectName" name="projectName" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" placeholder="E.g., Drone Frame Prototype" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="process" className="text-sm font-medium text-slate-300">Manufacturing Process *</label>
                <select required id="process" name="process" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all appearance-none">
                  {PROCESSES.map((proc) => (
                    <option key={proc} value={proc === "Select a Process" ? "" : proc}>{proc}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="material" className="text-sm font-medium text-slate-300">Material Preference</label>
                <select id="material" name="material" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all appearance-none">
                  {MATERIALS.map((mat) => (
                    <option key={mat} value={mat}>{mat}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label htmlFor="quantity" className="text-sm font-medium text-slate-300">Current Quantity *</label>
                <input required type="number" min="1" id="quantity" name="quantity" defaultValue="1" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" />
              </div>
              <div className="space-y-2">
                <label htmlFor="expectedQuantity" className="text-sm font-medium text-slate-300">Expected Prod. Qty</label>
                <input type="text" id="expectedQuantity" name="expectedQuantity" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" placeholder="e.g., 500/month" />
              </div>
              <div className="space-y-2">
                <label htmlFor="deadline" className="text-sm font-medium text-slate-300">Project Deadline</label>
                <input type="date" id="deadline" name="deadline" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all [color-scheme:dark]" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="budgetRange" className="text-sm font-medium text-slate-300">Budget Range</label>
              <input type="text" id="budgetRange" name="budgetRange" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" placeholder="e.g., $500 - $1000" />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-300">Additional Details / Message</label>
              <textarea id="message" name="message" rows={4} className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-y" placeholder="Any specific tolerances, finishing requirements, or special instructions?"></textarea>
            </div>
          </div>
        </div>

        {/* File Upload */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-3 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm">3</span>
            Upload CAD File *
          </h3>
          <FileUpload onFileSelect={(f) => { setFile(f); setFileError(null); }} error={fileError} />
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-6 py-4 rounded-xl text-sm font-medium">
            {error}
          </div>
        )}

        <button 
          type="submit" 
          disabled={loading}
          className="w-full relative inline-flex h-16 overflow-hidden rounded-xl p-[1px] focus:outline-none group disabled:opacity-70 disabled:cursor-not-allowed mt-4"
        >
          <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#3b82f6_50%,#06b6d4_100%)]" />
          <span className="inline-flex h-full w-full items-center justify-center rounded-xl bg-slate-950 px-8 py-1 text-lg font-bold text-white backdrop-blur-3xl transition-all group-hover:bg-slate-900 shadow-[0_0_25px_rgba(0,229,255,0.2)]">
            {loading ? (
              <><Loader2 className="w-6 h-6 mr-3 animate-spin" /> Submitting Request...</>
            ) : (
              <><Send className="w-6 h-6 mr-3" /> Submit Quote Request</>
            )}
          </span>
        </button>

      </form>
    </div>
  );
}
