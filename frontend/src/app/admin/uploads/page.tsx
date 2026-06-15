import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AdminQuoteTable, { Quote } from "@/components/AdminQuoteTable";

export const dynamic = "force-dynamic";

export default async function AdminUploadsPage() {
  const storageDir = path.join(process.cwd(), "storage");
  const quotesFile = path.join(storageDir, "quotes.json");

  let quotes: Quote[] = [];

  try {
    const data = await fs.readFile(quotesFile, "utf-8");
    quotes = JSON.parse(data);
  } catch {
    console.log("No quotes database found or error reading it");
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 pt-32 pb-20 px-6 selection:bg-cyan-500/30">
      
      {/* Background gradients */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950 z-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <Link href="/" className="inline-flex items-center text-slate-400 hover:text-cyan-400 transition-colors mb-4 text-sm font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2">
              Quote <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Dashboard</span>
            </h1>
            <p className="text-lg text-slate-400">
              Manage incoming CAD uploads and manufacturing requests.
            </p>
          </div>
        </div>

        <AdminQuoteTable initialQuotes={quotes} />
        
      </div>
    </div>
  );
}
