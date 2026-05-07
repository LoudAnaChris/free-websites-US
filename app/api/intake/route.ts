import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function fmt(s: string | undefined | null) {
  return s && s.trim() ? escapeHtml(s) : "<em>(not provided)</em>";
}

function row(label: string, value: string | undefined | null) {
  return `<tr><td style="padding:6px 12px 6px 0;color:#6b7a82;width:200px;vertical-align:top;">${label}</td><td style="padding:6px 0;color:#122933;">${fmt(value)}</td></tr>`;
}

function buildIntakeReference() {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const rand = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `INT-${yyyy}${mm}${dd}-${rand}`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.company_url) {
      return NextResponse.json({ ok: true });
    }

    if (!body.businessName || !body.signedEmail || !body.signedName) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_EMAIL || process.env.RESEND_TO || "chris@loudachris.com.au";
    const from =
      process.env.FROM_EMAIL ||
      process.env.RESEND_FROM ||
      "Free SEO Websites <freewebsitesUK@loudachriswebsites.com.au>";

    if (!apiKey) {
      console.error("[intake] RESEND_API_KEY not configured");
      return new NextResponse("Email not configured", { status: 500 });
    }

    const resend = new Resend(apiKey);
    const ref = buildIntakeReference();
    const submittedAt = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
    });

    // ============================================================
    // EMAIL 1: Structured intake to Chris
    // ============================================================

    const subject = `[${ref}] Intake: ${body.businessName} (build clock starts now)`;

    const html = `
<div style="font-family:-apple-system,sans-serif;max-width:780px;margin:0 auto;padding:24px;color:#122933;">
  <div style="background:#122933;color:#fff;padding:24px;border-radius:14px 14px 0 0;">
    <div style="font-size:11px;letter-spacing:0.16em;color:#8C87C9;text-transform:uppercase;">${ref}</div>
    <h1 style="margin:8px 0 4px;font-size:22px;color:#fff;">New intake submitted</h1>
    <div style="font-size:13px;opacity:0.85;">${submittedAt} ACST &middot; 5-day build clock starts now</div>
  </div>

  <div style="background:#fff;border:1px solid #e5e7eb;border-top:none;padding:24px;border-radius:0 0 14px 14px;">
    <h2 style="font-size:16px;color:#E357AB;text-transform:uppercase;letter-spacing:0.12em;margin:0 0 12px;">1. About the business</h2>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      ${row("Business name", body.businessName)}
      ${row("Legal entity", body.legalEntity)}
      ${row("ABN", body.abn)}
      ${row("Years in business", body.yearsInBusiness)}
      ${row("Staff", body.staffCount)}
      ${row("Based at", body.basedAt)}
      ${row("Service areas", body.serviceAreas)}
      ${row("What they do", body.whatYouDo)}
    </table>

    <h2 style="font-size:16px;color:#E357AB;text-transform:uppercase;letter-spacing:0.12em;margin:24px 0 12px;">2. Branding</h2>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      ${row("Logo status", body.logoStatus)}
      ${row("Brand colours", body.brandColoursType + (body.brandColoursValue ? ` — ${body.brandColoursValue}` : ""))}
      ${row("Brand fonts", body.brandFontsType + (body.brandFontsValue ? ` — ${body.brandFontsValue}` : ""))}
      ${row("Brand personality", (body.brandPersonality || []).join(", "))}
      ${row("Tagline", body.taglineType + (body.taglineValue ? ` — ${body.taglineValue}` : ""))}
      ${row("Websites they like", body.websitesILike)}
      ${row("Websites they don't like", body.websitesIDontLike)}
    </table>

    <h2 style="font-size:16px;color:#E357AB;text-transform:uppercase;letter-spacing:0.12em;margin:24px 0 12px;">3. Services</h2>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      ${row("Main service", body.mainService)}
      ${row("Other services", body.otherServices)}
      ${row("Service descriptions", body.serviceDescriptions)}
      ${row("Emergency services", body.emergencyHas + (body.emergencyWhich ? ` — ${body.emergencyWhich}` : ""))}
      ${row("Offerings", (body.offerings || []).join(", "))}
      ${row("Warranty length", body.warrantyLength)}
    </table>

    <h2 style="font-size:16px;color:#E357AB;text-transform:uppercase;letter-spacing:0.12em;margin:24px 0 12px;">4. Edge / USPs</h2>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      ${row("Why customers choose them (1)", body.whyChoose1)}
      ${row("Why customers choose them (2)", body.whyChoose2)}
      ${row("Why customers choose them (3)", body.whyChoose3)}
      ${row("Better than competitors", body.betterThanCompetitors)}
      ${row("Awards / qualifications", body.awards)}
      ${row("Years experience", body.yearsExperience)}
      ${row("Licences", body.licences)}
      ${row("Public liability", body.publicLiability)}
      ${row("Professional indemnity", body.professionalIndemnity)}
      ${row("Workers comp", body.workersComp)}
    </table>

    <h2 style="font-size:16px;color:#E357AB;text-transform:uppercase;letter-spacing:0.12em;margin:24px 0 12px;">5. Customers</h2>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      ${row("Ideal customer", body.idealCustomer)}
      ${row("Customer problem", body.customerProblem)}
      ${row("Top question 1", body.topQuestion1)}
      ${row("Top question 2", body.topQuestion2)}
      ${row("Top question 3", body.topQuestion3)}
      ${row("Top question 4", body.topQuestion4)}
      ${row("Top question 5", body.topQuestion5)}
      ${row("Objections", body.objections)}
    </table>

    <h2 style="font-size:16px;color:#E357AB;text-transform:uppercase;letter-spacing:0.12em;margin:24px 0 12px;">6. Reviews & proof</h2>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      ${row("Google Business Profile", body.gbpStatus + (body.gbpUrl ? ` — ${body.gbpUrl}` : ""))}
      ${row("Review count", body.reviewCount)}
      ${row("Testimonial 1", body.testimonial1)}
      ${row("Testimonial 2", body.testimonial2)}
      ${row("Testimonial 3", body.testimonial3)}
      ${row("Past clients", body.pastClients)}
      ${row("Photos", body.photos)}
    </table>

    <h2 style="font-size:16px;color:#E357AB;text-transform:uppercase;letter-spacing:0.12em;margin:24px 0 12px;">7. Keywords & search</h2>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      ${row("Keywords", body.keywords)}
      ${row("Competitors to outrank", body.competitors)}
      ${row("Target suburbs", body.targetSuburbs)}
    </table>

    <h2 style="font-size:16px;color:#E357AB;text-transform:uppercase;letter-spacing:0.12em;margin:24px 0 12px;">8. Contact details</h2>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      ${row("Phone", body.phone)}
      ${row("Email", body.email)}
      ${row("Hours", body.hours)}
      ${row("Display address", body.displayAddress + (body.publicAddress ? ` — ${body.publicAddress}` : ""))}
      ${row("Service area description", body.serviceAreaDescription)}
      ${row("Facebook", body.facebook)}
      ${row("Instagram", body.instagram)}
      ${row("LinkedIn", body.linkedin)}
      ${row("TikTok", body.tiktok)}
      ${row("YouTube", body.youtube)}
      ${row("Other social", body.otherSocial)}
    </table>

    <h2 style="font-size:16px;color:#E357AB;text-transform:uppercase;letter-spacing:0.12em;margin:24px 0 12px;">9. Domain & hosting</h2>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      ${row("Domain status", body.domainStatus)}
      ${row("Existing domain", body.existingDomain)}
      ${row("Registrar", body.registrar)}
      ${row("Existing website", body.existingWebsite)}
      ${row("Carry over", body.carryOverType + (body.carryOverPages ? ` — ${body.carryOverPages}` : ""))}
    </table>

    <h2 style="font-size:16px;color:#E357AB;text-transform:uppercase;letter-spacing:0.12em;margin:24px 0 12px;">10. Tracking & forms</h2>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      ${row("Tools used", (body.toolsUsed || []).join(", "))}
      ${row("GA email", body.gaEmail)}
      ${row("GSC email", body.gscEmail)}
      ${row("GBP email", body.gbpEmail)}
      ${row("Ads running", body.adsRunning + (body.adsDetails ? ` — ${body.adsDetails}` : ""))}
      ${row("Form type", body.formType)}
      ${row("Form fields", (body.formFields || []).join(", "))}
    </table>

    <h2 style="font-size:16px;color:#E357AB;text-transform:uppercase;letter-spacing:0.12em;margin:24px 0 12px;">11. Plan & commitments</h2>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      ${row("Plan", body.plan)}
      ${row("Billing method", body.billing)}
    </table>

    <h2 style="font-size:16px;color:#E357AB;text-transform:uppercase;letter-spacing:0.12em;margin:24px 0 12px;">12. Anything else</h2>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      ${row("Important notes", body.importantNotes)}
      ${row("Forbidden words / claims", body.forbiddenWords)}
      ${row("Compliance rules", body.complianceRules)}
    </table>

    <h2 style="font-size:16px;color:#E357AB;text-transform:uppercase;letter-spacing:0.12em;margin:24px 0 12px;">Signed</h2>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      ${row("Name", body.signedName)}
      ${row("Email", body.signedEmail)}
      ${row("Date", body.signedDate)}
      ${row("Confirmed accurate", body.confirmAccurate ? "✓ Yes" : "✗ No")}
      ${row("Confirmed image rights", body.confirmRights ? "✓ Yes" : "✗ No")}
      ${row("Confirmed feedback turnaround", body.confirmFeedback ? "✓ Yes" : "✗ No")}
      ${row("Confirmed build clock", body.confirmClock ? "✓ Yes" : "✗ No")}
      ${row("Confirmed agreement", body.confirmAgreement ? "✓ Yes" : "✗ No")}
    </table>

    <div style="background:#f5f5f5;padding:16px;border-radius:10px;margin-top:24px;font-size:12px;color:#6b7a82;">
      <strong>Reference:</strong> ${ref}<br>
      <strong>Submitted:</strong> ${submittedAt} ACST<br>
      <strong>5-day SLA expires:</strong> ${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleString("en-AU", { timeZone: "Australia/Adelaide", dateStyle: "full" })}<br>
      <strong>Reply directly</strong> to email the applicant (replyTo: ${escapeHtml(body.signedEmail)}).
    </div>
  </div>
</div>
    `.trim();

    const text = `[${ref}] Intake submitted: ${body.businessName}\nSubmitted: ${submittedAt} ACST\n5-day clock starts now.\n\nApplicant: ${body.signedName} <${body.signedEmail}>\nPhone: ${body.phone || "(not provided)"}\nPlan: ${body.plan}\n\nFull details in the HTML version of this email.\nReply to this email to respond directly to the applicant.`;

    const { error: err1 } = await resend.emails.send({
      from,
      to,
      subject,
      text,
      html,
      replyTo: body.signedEmail,
    });

    if (err1) {
      console.error("[intake] Resend error to Chris:", JSON.stringify(err1));
      return new NextResponse("Email failed", { status: 500 });
    }

    // ============================================================
    // EMAIL 2: Confirmation to applicant — build clock has started
    // ============================================================

    const applicantHtml = `
<div style="font-family:-apple-system,sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#122933;">
  <div style="background:#E357AB;color:#fff;padding:24px;border-radius:14px 14px 0 0;text-align:center;">
    <div style="font-size:11px;letter-spacing:0.16em;text-transform:uppercase;opacity:0.95;">Build clock started</div>
    <h1 style="margin:8px 0 0;font-size:24px;color:#fff;">Your 5-day build is underway.</h1>
  </div>

  <div style="background:#fff;border:1px solid #e5e7eb;border-top:none;padding:28px;border-radius:0 0 14px 14px;">
    <p style="font-size:16px;line-height:1.6;margin:0 0 16px;">Hi ${escapeHtml(body.signedName.split(" ")[0] || "there")},</p>
    <p style="font-size:16px;line-height:1.6;margin:0 0 16px;">Your intake form for <strong>${escapeHtml(body.businessName)}</strong> is in. Your 5-working-day build clock started just now.</p>

    <div style="background:#f5f5f5;padding:18px;border-radius:10px;margin:20px 0;font-size:14px;line-height:1.6;">
      <strong>Reference:</strong> ${ref}<br>
      <strong>Submitted:</strong> ${submittedAt} ACST<br>
      <strong>Plan:</strong> ${escapeHtml(body.plan || "(to confirm)")}
    </div>

    <h2 style="font-size:16px;margin:24px 0 12px;color:#122933;">What happens next</h2>
    <ol style="font-size:15px;line-height:1.7;padding-left:20px;color:#3a4d57;">
      <li>By end of next business day, Chris confirms receipt and the exact start date of the 5-day clock.</li>
      <li>Days 2-3: You receive a Loom video walkthrough of your first preview.</li>
      <li>Days 3-4: You give written feedback (one round, up to 5 changes).</li>
      <li>Day 5: Final review, launch, and tracking confirmed.</li>
      <li>Your first invoice is issued only after the site is live and tracking is verified.</li>
    </ol>

    <p style="font-size:15px;line-height:1.6;margin:24px 0 8px;">Any questions, just reply to this email.</p>
    <p style="font-size:15px;line-height:1.6;margin:0;color:#6b7a82;">— Chris Lourenco<br>Loudachris Digital Marketing<br>ABN 73 630 143 190</p>
  </div>
</div>
    `.trim();

    const applicantText = `Hi ${body.signedName.split(" ")[0] || "there"},\n\nYour intake form for ${body.businessName} is in. Your 5-working-day build clock started just now.\n\nReference: ${ref}\nSubmitted: ${submittedAt} ACST\nPlan: ${body.plan || "(to confirm)"}\n\nWhat happens next:\n1. By end of next business day, Chris confirms receipt and the exact start date of the 5-day clock.\n2. Days 2-3: You receive a Loom video walkthrough of your first preview.\n3. Days 3-4: You give written feedback (one round, up to 5 changes).\n4. Day 5: Final review, launch, and tracking confirmed.\n5. Your first invoice is issued only after the site is live and tracking is verified.\n\nAny questions, just reply to this email.\n\n— Chris Lourenco\nLoudachris Digital Marketing\nABN 73 630 143 190`;

    const { error: err2 } = await resend.emails.send({
      from,
      to: body.signedEmail,
      subject: `[${ref}] Build clock started for ${body.businessName}`,
      text: applicantText,
      html: applicantHtml,
      replyTo: to,
    });

    if (err2) {
      // Chris's email already sent — log but still succeed to applicant
      console.error("[intake] Resend error to applicant:", JSON.stringify(err2));
    }

    return NextResponse.json({ ok: true, ref });
  } catch (err) {
    console.error("[intake] route error:", err);
    return new NextResponse("Server error", { status: 500 });
  }
}
