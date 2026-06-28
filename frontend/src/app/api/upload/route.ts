// 📁 src/app/api/upload/route.ts
// File is now simpler — Cloudinary upload already done by the browser
// This route only saves the quote metadata to Supabase

import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER || "vidhigond87@gmail.com",
    pass: process.env.GMAIL_APP_PASSWORD || "vryazqcjdzsmowuo",
  },
});

const getSupabase = () => {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("Missing Supabase credentials in environment variables.");
  }
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL.trim(),
    process.env.SUPABASE_SERVICE_ROLE_KEY.trim()
  );
};

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

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
    const uploadedFileUrl = formData.get("uploadedFileUrl")?.toString() || "";
    const uploadedFileName = formData.get("uploadedFileName")?.toString() || "";

    if (!fullName || !email || !projectName || !processName || !quantity) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }

    const dateStr = new Date().toISOString().split("T")[0].replace(/-/g, "");
    const randomSuffix = Math.floor(Math.random() * 1000).toString().padStart(3, "0");
    const quoteId = `QT-${dateStr}-${randomSuffix}`;

    const supabase = getSupabase();
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
      uploaded_file: uploadedFileUrl,
      uploaded_file_name: uploadedFileName,
      status: "Pending",
      quote_amount: "",
      created_at: new Date().toISOString(),
    });

    if (dbError) {
      console.error("Supabase error:", dbError);
      return NextResponse.json({ success: false, message: "Failed to save quote" }, { status: 500 });
    }

    try {
      const mailOptions: any = {
        from: '"Vektor3D Quotes" <vidhigond87@gmail.com>',
        to: "vektor3dsocial@gmail.com",
        subject: `New Quote Request: ${quoteId}`,
        html: `
          <h2>New Quote Request: ${quoteId}</h2>
          <h3>Customer Information:</h3>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Company:</strong> ${companyName || 'N/A'}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>

          <h3>Project Information:</h3>
          <p><strong>Project Name:</strong> ${projectName}</p>
          <p><strong>Process:</strong> ${processName}</p>
          <p><strong>Material:</strong> ${material || 'N/A'}</p>
          <p><strong>Quantity:</strong> ${quantity}</p>
          <p><strong>Expected Prod. Qty:</strong> ${expectedQuantity || 'N/A'}</p>
          <p><strong>Deadline:</strong> ${deadline || 'N/A'}</p>
          <p><strong>Budget Range:</strong> ${budgetRange || 'N/A'}</p>
          <p><strong>Message:</strong> ${message || 'N/A'}</p>

          <h3>File Link:</h3>
          <p>${uploadedFileUrl ? `<a href="${uploadedFileUrl}">${uploadedFileUrl}</a>` : 'No file uploaded'}</p>
        `,
      };

      if (uploadedFileUrl) {
        mailOptions.attachments = [
          {
            filename: uploadedFileName || "uploaded_cad_file",
            path: uploadedFileUrl
          }
        ];
      }

      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully:", info.messageId);
    } catch (emailError) {
      console.error("Failed to execute email send:", emailError);
    }

    return NextResponse.json({ success: true, quoteId });

  } catch (error: any) {
    console.error("Upload error:", error);
    return NextResponse.json({ success: false, message: error.message || "Upload failed" }, { status: 500 });
  }
}