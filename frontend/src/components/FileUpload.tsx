"use client";

import React, { useCallback, useState } from "react";
import { UploadCloud, File, X, AlertCircle } from "lucide-react";

interface FileUploadProps {
  onFileSelect: (file: File | null) => void;
  error?: string | null;
}

const ALLOWED_EXTENSIONS = [".stl", ".step", ".stp", ".obj", ".iges", ".igs", ".zip", ".rar"];
const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

export default function FileUpload({ onFileSelect, error: externalError }: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [internalError, setInternalError] = useState<string | null>(null);

  const validateFile = (file: File): string | null => {
    if (file.size > MAX_FILE_SIZE) {
      return "File size must be less than 50MB.";
    }
    const extension = "." + file.name.split(".").pop()?.toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(extension)) {
      return `Invalid format. Allowed: ${ALLOWED_EXTENSIONS.join(", ")}`;
    }
    return null;
  };

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const file = files[0];
    
    const validationError = validateFile(file);
    if (validationError) {
      setInternalError(validationError);
      setSelectedFile(null);
      onFileSelect(null);
      return;
    }

    setInternalError(null);
    setSelectedFile(file);
    onFileSelect(file);
  };

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    handleFiles(e.target.files);
  };

  const removeFile = () => {
    setSelectedFile(null);
    setInternalError(null);
    onFileSelect(null);
  };

  const error = internalError || externalError;

  return (
    <div className="w-full">
      {!selectedFile ? (
        <div
          className={`relative border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center transition-all duration-300 ${
            dragActive
              ? "border-cyan-500 bg-cyan-500/10"
              : error
              ? "border-red-500/50 bg-red-500/5"
              : "border-white/20 bg-card/50 hover:border-cyan-500/50 hover:bg-card/80"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleChange}
            accept={ALLOWED_EXTENSIONS.join(",")}
          />
          <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4 border border-cyan-500/20">
            <UploadCloud className="w-8 h-8 text-cyan-400" />
          </div>
          <p className="text-lg font-semibold text-foreground mb-1 text-center">
            Drag & Drop your CAD file here
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300 text-center mb-4">
            or click to browse from your device
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500">
            <span className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded-md border border-border/50">Max: 50MB</span>
            <span className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded-md border border-border/50">
              {ALLOWED_EXTENSIONS.join(", ")}
            </span>
          </div>
        </div>
      ) : (
        <div className="border border-border bg-card/60 rounded-2xl p-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
              <File className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground truncate">
                {selectedFile.name}
              </p>
              <p className="text-xs text-slate-700 dark:text-slate-300">
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={removeFile}
            className="w-8 h-8 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center hover:bg-red-500/20 transition-colors shrink-0"
            title="Remove file"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {error && (
        <div className="mt-3 flex items-start gap-2 text-red-400 bg-red-500/10 px-4 py-3 rounded-xl border border-red-500/20 text-sm">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
