// 📁 frontend/src/app/admin/uploads/page.tsx
// Replace your existing file with this one entirely.

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AdminQuoteTable, { Quote } from "@/components/AdminQuoteTable";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

// Map Supabase snake_case columns → your existing Quote interface (camelCase)
function mapQuote(row: any): Quote {
  return {
    id: row.id,
    fullName: row.full_name,
    companyName: row.company_name,
    email: row.email,
    phone: row.phone,
    projectName: row.project_name,
    process: row.process,
    material: row.material,
    quantity: row.quantity,
    expectedQuantity: row.expected_quantity,
    budgetRange: row.budget_range,
    deadline: row.deadline,
    message: row.message,
    uploadedFile: row.uploaded_file,       // this is now a Cloudinary URL
    status: row.status,
    quoteAmount: row.quote_amount,
    createdAt: row.created_at,
  };
}

export default async function AdminUploadsPage() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { data, error } = await supabase
    .from("quotes")
    .select("*")
    .order("created_at", { ascending: false });

  const quotes: Quote[] = error ? [] : (data || []).map(mapQuote);

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-20 px-6 selection:bg-cyan-500/30">
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950 z-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <Link href="/" className="inline-flex items-center text-slate-700 dark:text-slate-300 hover:text-cyan-400 transition-colors mb-4 text-sm font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-2">
              Quote <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Dashboard</span>
            </h1>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              Manage incoming CAD uploads and manufacturing requests.
            </p>
          </div>
        </div>

        <AdminQuoteTable initialQuotes={quotes} />
      </div>
    </div>
  );
}
