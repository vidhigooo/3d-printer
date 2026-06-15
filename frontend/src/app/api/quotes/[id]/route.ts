import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const quoteId = params.id;
    if (!quoteId) {
      return NextResponse.json({ success: false, message: "Quote ID is required" }, { status: 400 });
    }

    const body = await request.json();
    const { status, quoteAmount } = body;

    const storageDir = path.join(process.cwd(), "storage");
    const quotesFile = path.join(storageDir, "quotes.json");

    let existingQuotes = [];
    try {
      const data = await fs.readFile(quotesFile, "utf-8");
      existingQuotes = JSON.parse(data);
    } catch {
      return NextResponse.json({ success: false, message: "Database not found" }, { status: 404 });
    }

    const quoteIndex = existingQuotes.findIndex((q: any) => q.id === quoteId);
    if (quoteIndex === -1) {
      return NextResponse.json({ success: false, message: "Quote not found" }, { status: 404 });
    }

    // Update fields if provided
    if (status !== undefined) {
      existingQuotes[quoteIndex].status = status;
    }
    if (quoteAmount !== undefined) {
      existingQuotes[quoteIndex].quoteAmount = quoteAmount;
    }

    // Save
    await fs.writeFile(quotesFile, JSON.stringify(existingQuotes, null, 2));

    return NextResponse.json({ success: true, message: "Quote updated successfully" });

  } catch (error: any) {
    console.error("Quote update error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "An error occurred during update" },
      { status: 500 }
    );
  }
}
