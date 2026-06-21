// 📁 frontend/src/app/api/upload/route.ts
// Replace your existing file with this one entirely.
//
// Uses:
//   Cloudinary  → stores the CAD file
//   Supabase    → stores the quote metadata

import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { v2 as cloudinary } from "cloudinary";

// ── Cloudinary config (set these in Vercel environment variables) ──
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

// ── Supabase client ──
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // use service role key (server-side only)
);

const ALLOWED_EXTENSIONS = [".stl", ".step", ".stp", ".obj", ".iges", ".igs", ".zip", ".rar"];
const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Extract form fields
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

    // Validations
    if (!file) {
      return NextResponse.json({ success: false, message: "No file uploaded" }, { status: 400 });
    }
    if (!fullName || !email || !projectName || !processName || !quantity) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ success: false, message: "File exceeds 50MB limit" }, { status: 400 });
    }

    const extension = "." + file.name.split(".").pop()?.toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(extension)) {
      return NextResponse.json(
        { success: false, message: `Invalid file format. Allowed: ${ALLOWED_EXTENSIONS.join(", ")}` },
        { status: 400 }
      );
    }

    // Generate quote ID
    const dateStr = new Date().toISOString().split("T")[0].replace(/-/g, "");
    const randomSuffix = Math.floor(Math.random() * 1000).toString().padStart(3, "0");
    const quoteId = `QT-${dateStr}-${randomSuffix}`;

    // ── Upload file to Cloudinary ──
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const cloudinaryResult = await new Promise<any>((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder: "vektor3d-quotes",           // folder name in your Cloudinary account
          public_id: `${quoteId}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`,
          resource_type: "raw",                // required for non-image files like STL/STEP
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(buffer);
    });

    // ── Save quote to Supabase ──
    const { error: dbError } = await supabase.from("quotes").insert({
      id: quoteId,
      full_name: fullName,
      company_name: companyName,
      email,
      phone,
      project_name: projectName,
      process: processName,
      material,
      quantity,
      expected_quantity: expectedQuantity,
      budget_range: budgetRange,
      deadline,
      message,
      uploaded_file: cloudinaryResult.secure_url,  // store the Cloudinary URL
      uploaded_file_name: file.name,
      status: "Pending",
      quote_amount: "",
      created_at: new Date().toISOString(),
    });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return NextResponse.json({ success: false, message: "Failed to save quote" }, { status: 500 });
    }

    return NextResponse.json({ success: true, quoteId });

  } catch (error: any) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "An error occurred during upload" },
      { status: 500 }
    );
  }
}