// 📁 frontend/src/app/api/quotes/[id]/route.ts
// Replace your existing file with this one entirely.

import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    if (!id) {
      return NextResponse.json({ success: false, message: "Quote ID is required" }, { status: 400 });
    }

    const body = await request.json();
    const { status, quoteAmount } = body;

    const updates: any = {};
    if (status !== undefined) updates.status = status;
    if (quoteAmount !== undefined) updates.quote_amount = quoteAmount;

    const { error } = await supabase
      .from("quotes")
      .update(updates)
      .eq("id", id);

    if (error) {
      return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Quote updated successfully" });

  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "An error occurred" },
      { status: 500 }
    );
  }
}