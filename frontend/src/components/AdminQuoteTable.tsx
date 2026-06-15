"use client";

import React, { useState } from "react";
import { Download, CheckCircle, Search, Clock, DollarSign, FileCode } from "lucide-react";

export interface Quote {
  id: string;
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  projectName: string;
  process: string;
  material: string;
  quantity: string;
  expectedQuantity: string;
  budgetRange: string;
  deadline: string;
  message: string;
  uploadedFile: string;
  status: string;
  quoteAmount: string;
  createdAt: string;
}

interface AdminQuoteTableProps {
  initialQuotes: Quote[];
}

export default function AdminQuoteTable({ initialQuotes }: AdminQuoteTableProps) {
  const [quotes, setQuotes] = useState<Quote[]>(initialQuotes);
  const [search, setSearch] = useState("");
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  // Sorting newest first
  const sortedQuotes = [...quotes].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  // Filtering
  const filteredQuotes = sortedQuotes.filter((q) => 
    q.id.toLowerCase().includes(search.toLowerCase()) || 
    q.fullName.toLowerCase().includes(search.toLowerCase()) ||
    q.companyName.toLowerCase().includes(search.toLowerCase())
  );

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    setUpdatingId(id);
    try {
      const res = await fetch(`/api/quotes/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setQuotes(quotes.map(q => q.id === id ? { ...q, status: newStatus } : q));
      }
    } catch (error) {
      console.error("Failed to update status", error);
    } finally {
      setUpdatingId(null);
    }
  };

  const handleUpdateAmount = async (id: string, amount: string) => {
    try {
      const res = await fetch(`/api/quotes/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quoteAmount: amount }),
      });
      if (res.ok) {
        setQuotes(quotes.map(q => q.id === id ? { ...q, quoteAmount: amount } : q));
      }
    } catch (error) {
      console.error("Failed to update amount", error);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-slate-900/40 p-4 rounded-2xl border border-white/10">
        <div className="relative w-full md:w-96">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by ID, Name or Company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-950 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-white focus:outline-none focus:border-cyan-500/50 transition-all"
          />
        </div>
        <div className="text-sm text-slate-400">
          Total Requests: <span className="text-cyan-400 font-bold">{filteredQuotes.length}</span>
        </div>
      </div>

      {/* Table */}
      <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-950/50 text-slate-300 text-sm border-b border-white/10">
                <th className="p-4 font-semibold">Quote ID</th>
                <th className="p-4 font-semibold">Customer Details</th>
                <th className="p-4 font-semibold">Project Specs</th>
                <th className="p-4 font-semibold">CAD File</th>
                <th className="p-4 font-semibold">Quote Amount</th>
                <th className="p-4 font-semibold">Status / Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredQuotes.map((quote) => (
                <tr key={quote.id} className="hover:bg-white/[0.02] transition-colors">
                  
                  <td className="p-4 align-top">
                    <div className="font-mono text-cyan-400 text-sm font-semibold mb-1">{quote.id}</div>
                    <div className="text-xs text-slate-500 flex items-center gap-1" suppressHydrationWarning>
                      <Clock className="w-3 h-3" />
                      {new Date(quote.createdAt).toLocaleDateString()}
                    </div>
                  </td>
                  
                  <td className="p-4 align-top max-w-[200px]">
                    <div className="font-semibold text-white truncate" title={quote.fullName}>{quote.fullName}</div>
                    {quote.companyName && <div className="text-xs text-slate-400 truncate mt-0.5" title={quote.companyName}>{quote.companyName}</div>}
                    <div className="text-xs text-slate-500 mt-1 truncate" title={quote.email}>{quote.email}</div>
                    {quote.phone && <div className="text-xs text-slate-500 truncate" title={quote.phone}>{quote.phone}</div>}
                  </td>
                  
                  <td className="p-4 align-top max-w-[250px]">
                    <div className="text-sm text-white font-medium mb-1 truncate" title={quote.projectName}>{quote.projectName}</div>
                    <div className="text-xs text-slate-400">
                      <span className="text-slate-500">Proc:</span> {quote.process}
                    </div>
                    <div className="text-xs text-slate-400">
                      <span className="text-slate-500">Mat:</span> {quote.material || "N/A"}
                    </div>
                    <div className="text-xs text-slate-400">
                      <span className="text-slate-500">Qty:</span> {quote.quantity} 
                      {quote.expectedQuantity && ` (Exp: ${quote.expectedQuantity})`}
                    </div>
                  </td>
                  
                  <td className="p-4 align-top">
                    <a 
                      href={`/api/download/${quote.id}`}
                      className="inline-flex items-center gap-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 px-3 py-1.5 rounded-lg text-sm transition-colors border border-cyan-500/20"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </a>
                    <div className="text-[10px] text-slate-500 mt-2 truncate w-32" title={quote.uploadedFile}>
                      {quote.uploadedFile.split('-').slice(3).join('-') || quote.uploadedFile}
                    </div>
                  </td>
                  
                  <td className="p-4 align-top">
                    <div className="relative">
                      <DollarSign className="w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input 
                        type="text" 
                        defaultValue={quote.quoteAmount}
                        onBlur={(e) => {
                          if (e.target.value !== quote.quoteAmount) {
                            handleUpdateAmount(quote.id, e.target.value);
                          }
                        }}
                        placeholder="0.00"
                        className="w-28 bg-slate-950 border border-white/10 rounded-lg pl-7 pr-3 py-1.5 text-sm text-white focus:outline-none focus:border-cyan-500/50"
                      />
                    </div>
                  </td>
                  
                  <td className="p-4 align-top">
                    <div className="flex flex-col gap-2">
                      <span className={`inline-flex items-center justify-center px-2 py-1 rounded text-xs font-semibold w-fit ${
                        quote.status === "Completed" ? "bg-green-500/20 text-green-400 border border-green-500/20" : "bg-orange-500/20 text-orange-400 border border-orange-500/20"
                      }`}>
                        {quote.status}
                      </span>
                      
                      {quote.status !== "Completed" && (
                        <button 
                          onClick={() => handleUpdateStatus(quote.id, "Completed")}
                          disabled={updatingId === quote.id}
                          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-green-400 transition-colors mt-1"
                        >
                          <CheckCircle className="w-3.5 h-3.5" />
                          Mark Completed
                        </button>
                      )}
                    </div>
                  </td>
                  
                </tr>
              ))}

              {filteredQuotes.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-slate-500">
                    <div className="flex flex-col items-center justify-center">
                      <FileCode className="w-12 h-12 mb-3 opacity-20" />
                      No quotes found matching your criteria.
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
