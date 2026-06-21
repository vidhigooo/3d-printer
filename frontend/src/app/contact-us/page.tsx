"use client";

import React, { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Upload, Send, MessageCircle, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const FacebookIcon = ({ size = 24 }: { size?: number | string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    location: "",
    service: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setResponseMsg("");

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    if (file) {
      data.append("file", file);
    }

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        body: data,
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Submission failed");
      }
      setStatus("success");
      setResponseMsg("Your inquiry has been submitted successfully!");
      setFormData({
        firstName: "", lastName: "", phone: "", email: "", location: "", service: "", message: ""
      });
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err: any) {
      setStatus("error");
      setResponseMsg(err.message || "An error occurred during submission.");
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-16 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <p className="text-primary font-semibold tracking-wider uppercase">Contact Us</p>
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
            Let's Discuss Your Next 3D Project
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you need prototyping, scanning, modelling, or technical support, our team is ready to help with reliable manufacturing solutions.
          </p>
          <p className="text-sm font-medium text-white/50">Team Vektor3DS</p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass p-8 rounded-2xl flex flex-col items-center text-center space-y-6">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-2">
              <Phone size={24} />
            </div>
            <h2 className="text-2xl font-bold">PHONE</h2>
            
            <div className="space-y-4 w-full">
              <div>
                <p className="text-muted-foreground mb-1">Printing Support</p>
                <p className="text-lg font-medium">+91-9082020416</p>
              </div>
              <div className="h-px w-full bg-border/50" />
              <div>
                <p className="text-muted-foreground mb-1">Printer Support</p>
                <p className="text-lg font-medium">+91-8369305601</p>
              </div>
              <div className="h-px w-full bg-border/50" />
              <div>
                <p className="text-muted-foreground mb-1">Repair Support</p>
                <p className="text-lg font-medium">+91-8655211644</p>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-2xl flex flex-col items-center text-center space-y-6">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mb-2">
              <Mail size={24} />
            </div>
            <h2 className="text-2xl font-bold">EMAIL</h2>
            
            <div className="space-y-4 w-full">
              <div>
                <p className="text-muted-foreground mb-1">Printing Support</p>
                <p className="text-lg font-medium">sales@vektor3ds.com</p>
                <p className="text-lg font-medium">sales1@vektor3ds.com</p>
              </div>
              <div className="h-px w-full bg-border/50" />
              <div>
                <p className="text-muted-foreground mb-1">Printer Support</p>
                <p className="text-lg font-medium">sales2@vektor3ds.com</p>
              </div>
              <div className="h-px w-full bg-border/50" />
              <div>
                <p className="text-muted-foreground mb-1">Repair Support</p>
                <p className="text-lg font-medium">sales3@vektor3ds.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <a href="#" className="glass p-6 rounded-2xl flex items-center justify-center gap-4 hover:bg-white/5 transition-colors group">
            <div className="w-12 h-12 rounded-full bg-[#1877F2]/20 flex items-center justify-center text-[#1877F2] group-hover:scale-110 transition-transform">
              <FacebookIcon size={24} />
            </div>
            <span className="text-xl font-bold">Follow Us</span>
          </a>
          <a href="#" className="glass p-6 rounded-2xl flex items-center justify-center gap-4 hover:bg-white/5 transition-colors group">
            <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
              <MessageCircle size={24} />
            </div>
            <span className="text-xl font-bold">Chat Now</span>
          </a>
        </div>

        {/* Form and Address Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mt-16">
          {/* Inquiry Form */}
          <div className="glass p-8 md:p-10 rounded-3xl">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold mb-2">SEND YOUR INQUIRY</h2>
              <p className="text-muted-foreground">Tell us about your project & requirement.</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name *</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name *</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" required />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" required />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Location</label>
                  <input type="text" name="location" value={formData.location} onChange={handleInputChange} className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium flex-1">Services Required</label>
                  <select name="service" value={formData.service} onChange={handleInputChange} className="w-full bg-background/50 border border-border text-foreground rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none">
                    <option value="" disabled>Select a service</option>
                    <option value="3d-printing">3D Printing</option>
                    <option value="3d-designing">3D Designing</option>
                    <option value="3d-printer-repair">3D Printer Repair</option>
                    <option value="3d-scanning">3D Scanning</option>
                    <option value="scale-model">Scale Model</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4} className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"></textarea>
              </div>

              <div className="flex flex-col items-center justify-center gap-2">
                <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
                <button type="button" onClick={() => fileInputRef.current?.click()} className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-white/5 hover:bg-white/10 transition-colors font-medium">
                  <Upload size={18} />
                  {file ? file.name : "Upload File"}
                </button>
              </div>

              {responseMsg && (
                <div className={`p-4 rounded-xl text-sm font-medium flex items-center ${
                  status === "error" ? "bg-red-500/10 text-red-500" : "bg-green-500/10 text-green-500"
                }`}>
                  {status === "error" ? <AlertCircle className="w-5 h-5 mr-2" /> : <CheckCircle className="w-5 h-5 mr-2" />}
                  {responseMsg}
                </div>
              )}

              <button type="submit" disabled={status === "submitting"} className="w-full bg-primary text-primary-foreground font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(0,229,255,0.3)] disabled:opacity-70 disabled:cursor-not-allowed">
                {status === "submitting" ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
                {status === "submitting" ? "Submitting..." : "Submit Inquiry"}
              </button>
            </form>
          </div>

          {/* Address and Map */}
          <div className="space-y-8 h-full flex flex-col">
            <div className="glass p-8 rounded-3xl text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6">
                <MapPin size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-6">ADDRESS</h2>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Vektor3D Systems LLP</h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Shop no MG15,<br />
                Gala number 3 & 4, Shell colony road,<br />
                Opp. Kamraj Hall, Sai baba nagar,<br />
                Chembur, Mumbai - 400071
              </p>
            </div>

            <div className="glass rounded-3xl overflow-hidden flex-1 min-h-[400px] border border-border">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4363065609455!2d72.88373737520448!3d19.0445353817112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8abb35fbb91%3A0xc3f128e4eb72a96a!2sChembur%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709214300000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
