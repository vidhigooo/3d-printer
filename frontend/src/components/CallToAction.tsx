"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, FileUp, Loader2, CheckCircle, AlertCircle } from "lucide-react";

export default function CallToAction() {
  const ref = useRef(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.size > 100 * 1024 * 1024) {
      setStatus("error");
      setMessage("File exceeds 100MB limit.");
      return;
    }

    setStatus("uploading");
    setMessage("Uploading file...");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Upload failed");
      }

      setStatus("success");
      setMessage("File uploaded successfully!");
      
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
        if (fileInputRef.current) fileInputRef.current.value = "";
      }, 5000);
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred during upload";
      console.error(err);
      setStatus("error");
      setMessage(errorMessage);
      
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
        if (fileInputRef.current) fileInputRef.current.value = "";
      }, 5000);
    }
  };

  return (
    <section id="contact" ref={ref} className="relative py-40 overflow-hidden bg-background">
      {/* Dynamic Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 opacity-40 dark:opacity-40 opacity-10"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background z-10" />
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-background to-background" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto bg-card/50 backdrop-blur-xl border border-primary/20 rounded-3xl p-12 md:p-16 shadow-[0_0_50px_rgba(0,229,255,0.1)] relative overflow-hidden group"
        >
          {/* Animated Glow on Hover */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 -z-10" />

          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Ready to <span className="text-primary">Manufacture?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 text-balance font-light">
            Upload your CAD file today for an instant quote, automated DFM analysis, and rapid turnaround times.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept=".stl,.step,.stp,.iges,.igs,.obj" 
              onChange={handleFileChange} 
            />
            <button 
              onClick={handleUploadClick}
              disabled={status === "uploading"}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/80 transition-colors duration-300 shadow-[0_0_20px_rgba(0,229,255,0.3)] flex items-center justify-center gap-2 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "uploading" ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : status === "success" ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <FileUp className="w-5 h-5" />
              )}
              {status === "uploading" ? "Uploading..." : "Upload CAD File"}
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-muted border border-border text-foreground font-medium hover:bg-muted/80 transition-colors duration-300 backdrop-blur-md flex items-center justify-center gap-2 text-lg">
              Contact Sales
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          {message && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-6 text-sm font-medium p-3 rounded-xl inline-block ${
                status === 'error' ? 'text-red-500 bg-red-500/10' : 
                status === 'success' ? 'text-green-500 bg-green-500/10' : 
                'text-primary bg-primary/10'
              }`}
            >
              {status === 'error' && <AlertCircle className="w-4 h-4 inline-block mr-2 -mt-0.5" />}
              {status === 'success' && <CheckCircle className="w-4 h-4 inline-block mr-2 -mt-0.5" />}
              {message}
            </motion.div>
          )}

          <p className="mt-8 text-sm text-muted-foreground">
            Supports STL, STEP, IGES, and OBJ files up to 100MB.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
