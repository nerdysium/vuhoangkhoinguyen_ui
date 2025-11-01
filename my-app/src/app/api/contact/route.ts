import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export interface EmailPayload {
  name: string;
  email: string;
  message: string;
}

const apiKey = process.env.NEXT_RESEND_API_KEY || "";

export async function POST(request: NextRequest) {
  if (!apiKey) {
    return NextResponse.json({ error: "Missing API key" }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    const payload: EmailPayload = await request.json();

    const response = await resend.emails.send({
      from: process.env.NEXT_RESEND_FROM_EMAIL || "",
      to: process.env.NEXT_RESEND_TO_EMAIL || "",
      subject: "New Contact Us Submission",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px;">
          <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Contact Submission</h2>
          <p style="margin: 10px 0;"><strong style="color: #555;">Name:</strong> ${
            payload.name
          }</p>
          <p style="margin: 10px 0;"><strong style="color: #555;">Email:</strong> ${
            payload.email
          }</p>
          <p style="margin: 10px 0;"><strong style="color: #555;">Message:</strong> ${
            payload.message
          }</p>
          <footer style="margin-top: 20px; color: #888; font-size: 12px; text-align: center;">
            Sent via Contact Form | ${new Date().toLocaleString()}
          </footer>
        </div>
      `,
    });

    return NextResponse.json({ success: true, response }, { status: 200 });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
