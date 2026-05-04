import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  // TODO: save to DB or send email here
  console.log("New contact message:", { name, email, subject, message });

  return NextResponse.json({ success: true });
}
