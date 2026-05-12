import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import { FileCode, Calendar, HardDrive, Download, ArrowLeft } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminUploadsPage() {
  const uploadsDir = path.join(process.cwd(), "public", "uploads");
  let files: { name: string; size: number; date: Date; url: string }[] = [];

  try {
    const fileNames = await fs.readdir(uploadsDir);
    
    // Get file stats
    const fileStats = await Promise.all(
      fileNames.map(async (name) => {
        const filePath = path.join(uploadsDir, name);
        const stats = await fs.stat(filePath);
        return {
          name,
          size: stats.size,
          date: stats.birthtime,
          url: `/uploads/${name}`, // public URL
        };
      })
    );
    
    // Sort by date (newest first)
    files = fileStats.sort((a, b) => b.date.getTime() - a.date.getTime());
  } catch {
    // Directory might not exist yet
    console.log("No uploads directory found or error reading it");
  }

  const formatSize = (bytes: number) => {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-32 pb-20 px-6">
      {/* Background gradients */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background z-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -z-10" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Upload <span className="text-primary">Dashboard</span>
          </h1>
          <p className="text-xl text-muted-foreground font-light">
            Manage your customer&apos;s 3D CAD files.
          </p>
        </div>

        {files.length === 0 ? (
          <div className="bg-card/30 backdrop-blur-xl border border-primary/10 rounded-3xl p-16 text-center shadow-[0_0_50px_rgba(0,229,255,0.05)]">
            <FileCode className="w-16 h-16 mx-auto text-muted-foreground mb-6 opacity-50" />
            <h3 className="text-2xl font-semibold mb-2">No files uploaded yet</h3>
            <p className="text-muted-foreground">When users upload CAD files, they will appear here.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {files.map((file) => (
              <div 
                key={file.name}
                className="bg-card/40 backdrop-blur-lg border border-primary/20 hover:border-primary/50 transition-colors duration-300 rounded-2xl p-6 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    <FileCode className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground line-clamp-1 mb-1">
                      {file.name.split('-').slice(1).join('-') || file.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <HardDrive className="w-4 h-4 mr-1.5" />
                        {formatSize(file.size)}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1.5" />
                        {file.date.toLocaleDateString()} {file.date.toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                </div>

                <a 
                  href={file.url} 
                  download={file.name.split('-').slice(1).join('-')}
                  className="w-full md:w-auto px-6 py-3 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
