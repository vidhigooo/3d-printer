import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const quoteId = params.id;
    if (!quoteId) {
      return new NextResponse("Quote ID is required", { status: 400 });
    }

    const storageDir = path.join(process.cwd(), "storage");
    const quotesFile = path.join(storageDir, "quotes.json");

    // Read quotes metadata to find the file name
    let existingQuotes = [];
    try {
      const data = await fs.readFile(quotesFile, "utf-8");
      existingQuotes = JSON.parse(data);
    } catch {
      return new NextResponse("Database not found", { status: 404 });
    }

    const quote = existingQuotes.find((q: any) => q.id === quoteId);
    
    if (!quote || !quote.uploadedFile) {
      return new NextResponse("Quote or file not found", { status: 404 });
    }

    const filePath = path.join(storageDir, "uploads", quote.uploadedFile);

    try {
      await fs.access(filePath);
    } catch {
      return new NextResponse("File does not exist on disk", { status: 404 });
    }

    // Read the file as buffer
    const fileBuffer = await fs.readFile(filePath);

    // Provide generic octet-stream to force download
    // Ensure filename is extracted correctly, remove the QT-prefix
    const originalName = quote.uploadedFile.split('-').slice(3).join('-') || quote.uploadedFile;

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Disposition": `attachment; filename="${originalName}"`,
        "Content-Type": "application/octet-stream",
        "Content-Length": fileBuffer.length.toString(),
      },
    });

  } catch (error) {
    console.error("Download API error:", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
