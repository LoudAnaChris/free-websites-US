import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const data = await request.formData();

    // Honeypot - silent success
    if (data.get("company_url")) {
      return NextResponse.json({ ok: true });
    }

    const fields = {
      industry: String(data.get("industry") || ""),
      staff: String(data.get("staff") || ""),
      city: String(data.get("city") || ""),
      goal: String(data.get("goal") || ""),
      plan: String(data.get("plan") || ""),
      business: String(data.get("business") || ""),
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      notes: String(data.get("notes") || ""),
      source: String(data.get("source") || "qualifier"),
    };

    if (!fields.name || !fields.email || !fields.business) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_EMAIL || process.env.RESEND_TO || "chris@loudachris.com.au";
    const from =
      process.env.FROM_EMAIL ||
      process.env.RESEND_FROM ||
      "Free SEO Websites <freewebsitesUK@loudachriswebsites.com.au>";

    if (!apiKey) {
      console.error("RESEND_API_KEY not configured");
      return new NextResponse("Email not configured", { status: 500 });
    }

    const resend = new Resend(apiKey);

    const subject = `New qualifier: ${fields.business} (${fields.city})`;

    const text = `
New Free Websites US application

Business: ${fields.business}
Contact: ${fields.name} <${fields.email}>
Phone: ${fields.phone || "(not given)"}
City: ${fields.city}

Industry: ${fields.industry}
Staff: ${fields.staff}
Goal: ${fields.goal}
Plan: ${fields.plan}

Notes:
${fields.notes || "(none)"}

Source: ${fields.source}
Submitted: ${new Date().toISOString()}
    `.trim();

    const html = `
<div style="font-family: -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
  <h2 style="color: #122933; margin-bottom: 8px;">New Free Websites US application</h2>
  <p style="color: #6b7a82; margin-top: 0; font-size: 13px;">${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} ET</p>

  <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
    <tr><td style="padding: 8px 0; color: #6b7a82; width: 120px;">Business</td><td style="padding: 8px 0; color: #122933; font-weight: 600;">${escapeHtml(fields.business)}</td></tr>
    <tr><td style="padding: 8px 0; color: #6b7a82;">Name</td><td style="padding: 8px 0; color: #122933;">${escapeHtml(fields.name)}</td></tr>
    <tr><td style="padding: 8px 0; color: #6b7a82;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(fields.email)}" style="color: #E357AB;">${escapeHtml(fields.email)}</a></td></tr>
    <tr><td style="padding: 8px 0; color: #6b7a82;">Phone</td><td style="padding: 8px 0; color: #122933;">${escapeHtml(fields.phone || "(not given)")}</td></tr>
    <tr><td style="padding: 8px 0; color: #6b7a82;">City</td><td style="padding: 8px 0; color: #122933;">${escapeHtml(fields.city)}</td></tr>
  </table>

  <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />

  <table style="width: 100%; border-collapse: collapse;">
    <tr><td style="padding: 8px 0; color: #6b7a82; width: 120px;">Industry</td><td style="padding: 8px 0; color: #122933;">${escapeHtml(fields.industry)}</td></tr>
    <tr><td style="padding: 8px 0; color: #6b7a82;">Staff</td><td style="padding: 8px 0; color: #122933;">${escapeHtml(fields.staff)}</td></tr>
    <tr><td style="padding: 8px 0; color: #6b7a82;">Goal</td><td style="padding: 8px 0; color: #122933;">${escapeHtml(fields.goal)}</td></tr>
    <tr><td style="padding: 8px 0; color: #6b7a82;">Plan</td><td style="padding: 8px 0; color: #122933;">${escapeHtml(fields.plan)}</td></tr>
  </table>

  ${
    fields.notes
      ? `<hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" /><h3 style="color: #122933; margin-bottom: 8px;">Notes</h3><p style="color: #3a4d57; line-height: 1.6;">${escapeHtml(fields.notes).replace(/\n/g, "<br>")}</p>`
      : ""
  }

  <p style="margin-top: 32px; color: #6b7a82; font-size: 12px;">Source: ${escapeHtml(fields.source)} · Reply directly to email the applicant.</p>
</div>
    `.trim();

    console.log("[lead] Sending", {
      from,
      to,
      subject,
      business: fields.business,
      email: fields.email,
    });

    const { data: sendResult, error } = await resend.emails.send({
      from,
      to,
      subject,
      text,
      html,
      replyTo: fields.email,
    });

    if (error) {
      console.error("[lead] Resend error:", JSON.stringify(error));
      return new NextResponse("Email failed", { status: 500 });
    }

    console.log("[lead] Resend accepted, id:", sendResult?.id);
    return NextResponse.json({ ok: true, id: sendResult?.id });
  } catch (err) {
    console.error("[lead] Server error:", err);
    return new NextResponse("Server error", { status: 500 });
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
