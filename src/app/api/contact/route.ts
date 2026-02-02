import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    // 1) Read + validate env at runtime (prevents build-time crash)
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable.");
      return NextResponse.json(
        { error: "Server misconfigured: missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    // 2) Parse request body
    const { name, email, message } = await req.json();

    // 3) Basic validation
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return NextResponse.json(
        { error: "Missing or invalid fields: name, email, message" },
        { status: 400 }
      );
    }

    // Optional: simple email format check
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!emailOk) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // 4) Create Resend client only when needed
    const resend = new Resend(apiKey);

    // 5) Send email
    const result = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["rubens.wdg@gmail.com"],
      subject: `New contact from ${name.trim()}`,
      replyTo: email.trim(),
      text: message.trim(),
    });

    // Resend returns an object that may include error details
    if ((result as any)?.error) {
      console.error("Resend error:", (result as any).error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
