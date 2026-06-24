"use client";

import React, { useState } from "react";
import { Send, Loader2, CheckCircle, Mail, MessageCircle } from "lucide-react";
import FileUpload from "./FileUpload";
import { createClient } from "@supabase/supabase-js";

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

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

let supabase: ReturnType<typeof createClient> | null = null;
if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

// ── Upload file directly to Supabase Storage ──────────────────────────
async function uploadToSupabase(file: File): Promise<string> {
  if (!supabase) {
    throw new Error("Supabase is not configured. Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY.");
  }
  const fileExt = file.name.split('.').pop();
  const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
  const filePath = `uploads/${fileName}`;

  const { data, error } = await supabase.storage
    .from('cad_files')
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false
    });

  if (error) {
    throw new Error(error.message || "Supabase upload failed");
  }

  const { data: publicUrlData } = supabase.storage
    .from('cad_files')
    .getPublicUrl(filePath);

  return publicUrlData.publicUrl;
}

export default function QuoteForm() {
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState("");
  const [successQuoteId, setSuccessQuoteId] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<{
    formData: Record<string, string>;
    fileUrl: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Capture form data synchronously BEFORE any async operations
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    setLoading(true);
    setError(null);
    setFileError(null);

    try {
      let fileUrl = "";
      
      // Step 1: Upload file directly to Supabase IF a file is provided
      if (file) {
        setLoadingStep("Uploading CAD file...");
        fileUrl = await uploadToSupabase(file);
      }

      // Step 2: Send form data + Supabase URL to our API
      setLoadingStep("Submitting quote request...");
      if (fileUrl) {
        formData.append("uploadedFileUrl", fileUrl);
        formData.append("uploadedFileName", file!.name);
      }

      // Save form data for sharing
      const formDataObj: Record<string, string> = {};
      formData.forEach((value, key) => {
        formDataObj[key] = value.toString();
      });

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || data.error || "Failed to submit quote request.");
      }

      setSubmittedData({ formData: formDataObj, fileUrl });
      setSuccessQuoteId(data.quoteId);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
      setLoadingStep("");
    }
  };

  if (successQuoteId && submittedData) {
    const { formData, fileUrl } = submittedData;
    
    // Generate Share Text
    const shareText = `*New Quote Request: ${successQuoteId}*\n
*Customer Information:*
Name: ${formData.fullName}
Company: ${formData.companyName || 'N/A'}
Email: ${formData.email}
Phone: ${formData.phone || 'N/A'}

*Project Information:*
Project Name: ${formData.projectName}
Process: ${formData.process}
Material: ${formData.material || 'N/A'}
Quantity: ${formData.quantity}
Expected Prod. Qty: ${formData.expectedQuantity || 'N/A'}
Deadline: ${formData.deadline || 'N/A'}
Budget Range: ${formData.budgetRange || 'N/A'}
Message: ${formData.message || 'N/A'}

*File Link:*
${fileUrl || 'No file uploaded'}`;

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    const mailtoUrl = `mailto:vektor3dsocial@gmail.com?subject=${encodeURIComponent(`New Quote Request: ${successQuoteId}`)}&body=${encodeURIComponent(shareText)}`;

    return (
      <div className="bg-card/60 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-10 text-center shadow-[0_0_50px_rgba(0,229,255,0.1)]">
        <div className="w-20 h-20 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-cyan-400" />
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-4">Request Submitted Successfully!</h2>
        <p className="text-slate-700 dark:text-slate-300 text-lg mb-6">
          Your quote reference ID is <span className="font-mono text-cyan-300 font-bold">{successQuoteId}</span>.
        </p>
        
        <div className="bg-background/50 rounded-xl p-6 inline-block border border-border/50 max-w-lg mx-auto w-full space-y-4">
          <p className="text-sm font-medium text-slate-300 mb-4">Please share your request details with us via WhatsApp or Email to proceed faster:</p>
          
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full py-3 px-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors">
            <MessageCircle className="w-5 h-5 mr-2" /> Share via WhatsApp
          </a>
          
          <a href={mailtoUrl} className="flex items-center justify-center w-full py-3 px-4 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl transition-colors">
            <Mail className="w-5 h-5 mr-2" /> Share via Gmail
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-3xl p-6 md:p-10 shadow-2xl">
      <form onSubmit={handleSubmit} className="space-y-8">

        {/* Customer Information */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-6 border-b border-border pb-3 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm">1</span>
            Customer Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name *</label>
              <input required type="text" id="fullName" name="fullName" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label htmlFor="companyName" className="text-sm font-medium text-slate-700 dark:text-slate-300">Company Name</label>
              <input type="text" id="companyName" name="companyName" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" placeholder="Your Company Ltd" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address *</label>
              <input required type="email" id="email" name="email" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" placeholder="john@company.com" />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone Number</label>
              <input type="tel" id="phone" name="phone" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" placeholder="+91 98765 43210" />
            </div>
          </div>
        </div>

        {/* Project Information */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-6 border-b border-border pb-3 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm">2</span>
            Project Information
          </h3>
          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="projectName" className="text-sm font-medium text-slate-700 dark:text-slate-300">Project Name *</label>
              <input required type="text" id="projectName" name="projectName" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" placeholder="E.g., Drone Frame Prototype" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="process" className="text-sm font-medium text-slate-700 dark:text-slate-300">Manufacturing Process *</label>
                <select required id="process" name="process" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all appearance-none">
                  {PROCESSES.map((proc) => (
                    <option key={proc} value={proc === "Select a Process" ? "" : proc}>{proc}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="material" className="text-sm font-medium text-slate-700 dark:text-slate-300">Material Preference</label>
                <select id="material" name="material" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all appearance-none">
                  {MATERIALS.map((mat) => (
                    <option key={mat} value={mat}>{mat}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label htmlFor="quantity" className="text-sm font-medium text-slate-700 dark:text-slate-300">Current Quantity *</label>
                <input required type="number" min="1" id="quantity" name="quantity" defaultValue="1" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" />
              </div>
              <div className="space-y-2">
                <label htmlFor="expectedQuantity" className="text-sm font-medium text-slate-700 dark:text-slate-300">Expected Prod. Qty</label>
                <input type="text" id="expectedQuantity" name="expectedQuantity" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" placeholder="e.g., 500/month" />
              </div>
              <div className="space-y-2">
                <label htmlFor="deadline" className="text-sm font-medium text-slate-700 dark:text-slate-300">Project Deadline</label>
                <input type="date" id="deadline" name="deadline" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all [color-scheme:dark]" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="budgetRange" className="text-sm font-medium text-slate-700 dark:text-slate-300">Budget Range</label>
              <input type="text" id="budgetRange" name="budgetRange" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" placeholder="e.g., ₹5,000 - ₹10,000" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Additional Details / Message</label>
              <textarea id="message" name="message" rows={4} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-y" placeholder="Any specific tolerances, finishing requirements, or special instructions?"></textarea>
            </div>
          </div>
        </div>

        {/* File Upload */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-6 border-b border-border pb-3 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm">3</span>
            Upload CAD File <span className="text-sm font-normal text-slate-700 dark:text-slate-300 ml-2">(Optional)</span>
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
          <span className="inline-flex h-full w-full items-center justify-center rounded-xl bg-background px-8 py-1 text-lg font-bold text-foreground backdrop-blur-3xl transition-all group-hover:bg-card shadow-[0_0_25px_rgba(0,229,255,0.2)]">
            {loading ? (
              <><Loader2 className="w-6 h-6 mr-3 animate-spin" /> {loadingStep}</>
            ) : (
              <><Send className="w-6 h-6 mr-3" /> Submit Quote Request</>
            )}
          </span>
        </button>

      </form>
    </div>
  );
}
