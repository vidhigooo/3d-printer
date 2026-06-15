import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const ALLOWED_EXTENSIONS = [".stl", ".step", ".stp", ".obj", ".iges", ".igs", ".zip", ".rar"];
const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

// --- Email Hook Placeholders ---
async function sendAdminNotification(quoteData: any) {
  // TODO: Integrate email provider here (Resend, SendGrid, Nodemailer, SMTP)
  // console.log("Sending admin notification email for quote:", quoteData.id);
}

async function sendCustomerConfirmation(quoteData: any) {
  // TODO: Integrate email provider here (Resend, SendGrid, Nodemailer, SMTP)
  // console.log("Sending customer confirmation email to:", quoteData.email);
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Extract metadata
    const fullName = formData.get("fullName")?.toString() || "";
    const companyName = formData.get("companyName")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const projectName = formData.get("projectName")?.toString() || "";
    const processName = formData.get("process")?.toString() || "";
    const material = formData.get("material")?.toString() || "";
    const quantity = formData.get("quantity")?.toString() || "";
    const expectedQuantity = formData.get("expectedQuantity")?.toString() || "";
    const deadline = formData.get("deadline")?.toString() || "";
    const budgetRange = formData.get("budgetRange")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ success: false, message: "No file uploaded" }, { status: 400 });
    }

    if (!fullName || !email || !projectName || !processName || !quantity) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }

    // Validate size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ success: false, message: "File exceeds 50MB limit" }, { status: 400 });
    }

    // Validate extension
    const originalFilename = file.name;
    const extension = "." + originalFilename.split(".").pop()?.toLowerCase();
    
    if (!ALLOWED_EXTENSIONS.includes(extension)) {
      return NextResponse.json(
        { success: false, message: `Invalid file format. Allowed: ${ALLOWED_EXTENSIONS.join(", ")}` },
        { status: 400 }
      );
    }

    // Storage Paths
    const storageDir = path.join(process.cwd(), "storage");
    const uploadsDir = path.join(storageDir, "uploads");
    const quotesFile = path.join(storageDir, "quotes.json");

    // Ensure directories exist
    await fs.mkdir(uploadsDir, { recursive: true });

    // Generate unique filename and ID
    const timestamp = Date.now();
    const dateStr = new Date().toISOString().split("T")[0].replace(/-/g, ""); // YYYYMMDD
    const randomSuffix = Math.floor(Math.random() * 1000).toString().padStart(3, "0");
    const quoteId = `QT-${dateStr}-${randomSuffix}`;
    const uniqueFilename = `${quoteId}-${originalFilename.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
    const filePath = path.join(uploadsDir, uniqueFilename);

    // Write file
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    await fs.writeFile(filePath, buffer);

    // Read existing quotes
    let existingQuotes = [];
    try {
      const data = await fs.readFile(quotesFile, "utf-8");
      existingQuotes = JSON.parse(data);
    } catch {
      // File doesn't exist or is invalid, start empty
      existingQuotes = [];
    }

    // Construct quote data
    const newQuote = {
      id: quoteId,
      fullName,
      companyName,
      email,
      phone,
      projectName,
      process: processName,
      material,
      quantity,
      expectedQuantity,
      budgetRange,
      deadline,
      message,
      uploadedFile: uniqueFilename,
      status: "Pending",
      quoteAmount: "",
      createdAt: new Date().toISOString(),
    };

    existingQuotes.push(newQuote);

    // Save metadata
    await fs.writeFile(quotesFile, JSON.stringify(existingQuotes, null, 2));

    // Fire Email Hooks (Async, don't await so we don't block response)
    sendAdminNotification(newQuote).catch(console.error);
    sendCustomerConfirmation(newQuote).catch(console.error);

    return NextResponse.json({
      success: true,
      quoteId: quoteId,
    });
  } catch (error: any) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "An error occurred during upload" },
      { status: 500 }
    );
  }
}
