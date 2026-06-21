import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const ALLOWED_EXTENSIONS = [".stl", ".step", ".stp", ".obj", ".iges", ".igs", ".zip", ".rar", ".pdf", ".png", ".jpg", ".jpeg"];
const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Extract metadata
    const firstName = formData.get("firstName")?.toString() || "";
    const lastName = formData.get("lastName")?.toString() || "";
    const fullName = `${firstName} ${lastName}`.trim();
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const location = formData.get("location")?.toString() || "";
    const service = formData.get("service")?.toString() || "Contact Inquiry";
    const message = formData.get("message")?.toString() || "";

    const file = formData.get("file") as File | null;

    if (!fullName || !email) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }

    // Storage Paths
    const storageDir = path.join(process.cwd(), "storage");
    const uploadsDir = path.join(storageDir, "uploads");
    const quotesFile = path.join(storageDir, "quotes.json");

    await fs.mkdir(uploadsDir, { recursive: true });

    // Generate unique ID
    const dateStr = new Date().toISOString().split("T")[0].replace(/-/g, ""); // YYYYMMDD
    const randomSuffix = Math.floor(Math.random() * 1000).toString().padStart(3, "0");
    const inquiryId = `INQ-${dateStr}-${randomSuffix}`;
    let uniqueFilename = "No File";

    if (file && file.size > 0) {
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json({ success: false, message: "File exceeds 50MB limit" }, { status: 400 });
      }
      const originalFilename = file.name;
      const extension = "." + originalFilename.split(".").pop()?.toLowerCase();
      if (!ALLOWED_EXTENSIONS.includes(extension)) {
        return NextResponse.json(
          { success: false, message: `Invalid file format. Allowed: ${ALLOWED_EXTENSIONS.join(", ")}` },
          { status: 400 }
        );
      }
      uniqueFilename = `${inquiryId}-${originalFilename.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
      const filePath = path.join(uploadsDir, uniqueFilename);
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      await fs.writeFile(filePath, buffer);
    }

    // Read existing quotes
    let existingQuotes = [];
    try {
      const fileData = await fs.readFile(quotesFile, "utf-8");
      existingQuotes = JSON.parse(fileData);
    } catch {
      existingQuotes = [];
    }

    // Construct quote data
    const newQuote = {
      id: inquiryId,
      fullName,
      companyName: location, // repurposing companyName for location
      email,
      phone,
      projectName: "Contact Form Inquiry",
      process: service,
      material: "N/A",
      quantity: "N/A",
      expectedQuantity: "",
      budgetRange: "",
      deadline: "",
      message,
      uploadedFile: uniqueFilename,
      status: "Pending",
      quoteAmount: "",
      createdAt: new Date().toISOString(),
    };

    existingQuotes.push(newQuote);

    // Save metadata
    await fs.writeFile(quotesFile, JSON.stringify(existingQuotes, null, 2));

    return NextResponse.json({
      success: true,
      inquiryId: inquiryId,
    });
  } catch (error: any) {
    console.error("Inquiry error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "An error occurred" },
      { status: 500 }
    );
  }
}
