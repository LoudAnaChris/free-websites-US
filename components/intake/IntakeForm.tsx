"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Save, AlertCircle } from "lucide-react";
import {
  INTAKE_INITIAL,
  INTAKE_STORAGE_KEY,
  PERSONALITY_OPTIONS,
  OFFERING_OPTIONS,
  TOOL_OPTIONS,
  FORM_FIELD_OPTIONS,
  STEPS,
  type IntakeFormState,
} from "@/lib/intake-types";
import {
  Field,
  TextInput,
  TextArea,
  RadioGroup,
  CheckboxGroup,
  SectionHeading,
} from "./IntakeFields";

export function IntakeForm() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<IntakeFormState>(INTAKE_INITIAL);
  const [hydrated, setHydrated] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [savedAt, setSavedAt] = useState<string | null>(null);

  // Load draft from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(INTAKE_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setForm({ ...INTAKE_INITIAL, ...parsed.form });
        if (typeof parsed.step === "number") setStep(parsed.step);
      }
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  // Save draft to localStorage on every change
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(
        INTAKE_STORAGE_KEY,
        JSON.stringify({ form, step, savedAt: new Date().toISOString() })
      );
      setSavedAt(new Date().toLocaleTimeString("en-AU"));
    } catch {
      // ignore
    }
  }, [form, step, hydrated]);

  // Scroll to top on step change
  useEffect(() => {
    if (hydrated) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step, hydrated]);

  function update<K extends keyof IntakeFormState>(
    key: K,
    value: IntakeFormState[K]
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleArray(key: keyof IntakeFormState, value: string) {
    setForm((prev) => {
      const current = prev[key] as string[];
      const next = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [key]: next };
    });
  }

  async function submit() {
    setSubmitting(true);
    setError(null);
    try {
      const r = await fetch("/api/intake", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!r.ok) {
        const t = await r.text();
        throw new Error(t || "Submission failed");
      }
      const data = await r.json();
      // Clear localStorage
      localStorage.removeItem(INTAKE_STORAGE_KEY);
      router.push(
        `/intake/thanks?ref=${encodeURIComponent(data.ref || "submitted")}`
      );
    } catch (e) {
      setError(
        "We couldn't submit your intake. Please try again or email chris@loudachris.com.au directly."
      );
      setSubmitting(false);
    }
  }

  if (!hydrated) {
    return (
      <div className="container-x py-20 text-center">
        <p style={{ color: "var(--color-ink-3)" }}>Loading your draft...</p>
      </div>
    );
  }

  const progress = ((step + 1) / STEPS.length) * 100;
  const isLast = step === STEPS.length - 1;

  return (
    <div className="container-x max-w-3xl py-10">
      {/* Progress + draft save */}
      <div className="mb-8 sticky top-[80px] z-10 -mx-2 px-2 py-3" style={{ background: "white", borderBottom: "1px solid var(--hair)" }}>
        <div className="flex items-center justify-between gap-4 mb-2">
          <div
            className="text-xs"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-ink-3)",
              letterSpacing: "0.08em",
            }}
          >
            STEP {step + 1} OF {STEPS.length} · {STEPS[step].label.toUpperCase()}
          </div>
          {savedAt && (
            <div
              className="text-xs inline-flex items-center gap-1"
              style={{ color: "var(--color-ink-3)" }}
            >
              <Save size={11} /> Saved {savedAt}
            </div>
          )}
        </div>
        <div className="h-1 rounded-full" style={{ background: "var(--hair)" }}>
          <div
            className="h-1 rounded-full transition-all"
            style={{
              width: `${progress}%`,
              background: "var(--color-rose)",
            }}
          />
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (isLast) submit();
          else setStep((s) => s + 1);
        }}
      >
        {/* Honeypot */}
        <label
          style={{
            position: "absolute",
            left: "-9999px",
            opacity: 0,
            height: 0,
            width: 0,
            overflow: "hidden",
          }}
        >
          Leave blank
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.company_url}
            onChange={(e) => update("company_url", e.target.value)}
          />
        </label>

        {/* Step 0: Business basics */}
        {step === 0 && (
          <>
            <SectionHeading
              number={1}
              title="About your business"
              intro="The boring-but-essential basics. We use these for the footer, the legal pages, and to confirm your eligibility."
            />
            <Field label="Business name (the trading name)">
              <TextInput
                value={form.businessName}
                onChange={(v) => update("businessName", v)}
                placeholder="e.g. Adelaide's Bathroom Network"
                required
              />
            </Field>
            <Field label="Legal entity name (if different)">
              <TextInput
                value={form.legalEntity}
                onChange={(v) => update("legalEntity", v)}
                placeholder="e.g. ABN Bathrooms Pty Ltd"
              />
            </Field>
            <Field label="ABN">
              <TextInput
                value={form.abn}
                onChange={(v) => update("abn", v)}
                placeholder="11 digits"
              />
            </Field>
            <Field label="How long have you been in business?">
              <TextInput
                value={form.yearsInBusiness}
                onChange={(v) => update("yearsInBusiness", v)}
                placeholder="e.g. 7 years"
              />
            </Field>
            <Field label="How many staff (including you)?">
              <TextInput
                value={form.staffCount}
                onChange={(v) => update("staffCount", v)}
                placeholder="e.g. 4"
              />
            </Field>
            <Field label="Where is your business based? (suburb and state)">
              <TextInput
                value={form.basedAt}
                onChange={(v) => update("basedAt", v)}
                placeholder="e.g. Wayville, SA"
              />
            </Field>
          </>
        )}

        {/* Step 1: What you do */}
        {step === 1 && (
          <>
            <SectionHeading
              number={2}
              title="What you do"
              intro="Service areas drive the suburb pages we build. The 'what you do' paragraph drives your homepage hero."
            />
            <Field
              label="What suburbs, regions, or cities do you service?"
              helper="List the main ones, comma-separated."
            >
              <TextArea
                value={form.serviceAreas}
                onChange={(v) => update("serviceAreas", v)}
                placeholder="e.g. Adelaide CBD, Norwood, Glenelg, Prospect, Stirling..."
                rows={3}
              />
            </Field>
            <Field
              label="Briefly, in your own words, what does your business do?"
              helper="Two or three sentences. Plain English. Pretend you're explaining it to a neighbour at a barbecue."
            >
              <TextArea
                value={form.whatYouDo}
                onChange={(v) => update("whatYouDo", v)}
                rows={4}
              />
            </Field>
          </>
        )}

        {/* Step 2: Branding */}
        {step === 2 && (
          <>
            <SectionHeading
              number={3}
              title="Branding"
              intro="If you have an existing brand, we'll match it. If not, we'll choose what works for your industry."
            />
            <Field label="Do you have an existing logo?">
              <RadioGroup
                name="logoStatus"
                value={form.logoStatus}
                onChange={(v) => update("logoStatus", v)}
                options={[
                  {
                    value: "yes-attached",
                    label: "Yes, I'll send it via email (PNG or SVG preferred)",
                  },
                  {
                    value: "yes-redesign",
                    label: "Yes, but it's old or poor quality and I'd like a new one",
                  },
                  {
                    value: "no",
                    label: "No, I don't have one. Please create something simple.",
                  },
                ]}
              />
            </Field>
            <Field label="Brand colours">
              <RadioGroup
                name="brandColoursType"
                value={form.brandColoursType}
                onChange={(v) => update("brandColoursType", v)}
                options={[
                  { value: "specific", label: "I have specific brand colours" },
                  { value: "rough", label: "I have a rough idea (e.g. blue and white)" },
                  {
                    value: "you-decide",
                    label: "You decide. Choose colours that work for my industry.",
                  },
                ]}
              />
            </Field>
            {(form.brandColoursType === "specific" ||
              form.brandColoursType === "rough") && (
              <Field label="What are they?">
                <TextInput
                  value={form.brandColoursValue}
                  onChange={(v) => update("brandColoursValue", v)}
                  placeholder="e.g. dark navy #122933 and brilliant rose #E357AB"
                />
              </Field>
            )}
            <Field label="Brand fonts">
              <RadioGroup
                name="brandFontsType"
                value={form.brandFontsType}
                onChange={(v) => update("brandFontsType", v)}
                options={[
                  { value: "specific", label: "I have specific fonts I want used" },
                  { value: "you-decide", label: "You decide" },
                ]}
              />
            </Field>
            {form.brandFontsType === "specific" && (
              <Field label="Which fonts?">
                <TextInput
                  value={form.brandFontsValue}
                  onChange={(v) => update("brandFontsValue", v)}
                  placeholder="e.g. Filson Soft for headings, Inter for body"
                />
              </Field>
            )}
            <Field label="Brand personality (tick all that apply)">
              <CheckboxGroup
                values={form.brandPersonality}
                onToggle={(v) => toggleArray("brandPersonality", v)}
                options={PERSONALITY_OPTIONS}
                columns={2}
              />
            </Field>
            <Field label="Tagline or slogan">
              <RadioGroup
                name="taglineType"
                value={form.taglineType}
                onChange={(v) => update("taglineType", v)}
                options={[
                  { value: "have", label: "I have one" },
                  { value: "create", label: "I don't, please create one" },
                  { value: "none", label: "No tagline needed" },
                ]}
              />
            </Field>
            {form.taglineType === "have" && (
              <Field label="What is it?">
                <TextInput
                  value={form.taglineValue}
                  onChange={(v) => update("taglineValue", v)}
                  placeholder="Your tagline"
                />
              </Field>
            )}
            <Field
              label="Three websites you like the look of (optional)"
              helper="Paste up to 3 URLs, one per line."
            >
              <TextArea
                value={form.websitesILike}
                onChange={(v) => update("websitesILike", v)}
                rows={3}
              />
            </Field>
            <Field
              label="Three websites you don't like (optional)"
              helper="Up to 3 URLs and a one-line reason each."
            >
              <TextArea
                value={form.websitesIDontLike}
                onChange={(v) => update("websitesIDontLike", v)}
                rows={3}
              />
            </Field>
          </>
        )}

        {/* Step 3: Services */}
        {step === 3 && (
          <>
            <SectionHeading
              number={4}
              title="Your services"
              intro="The most important section for SEO. Each service you list usually becomes its own page that ranks for that service in your city."
            />
            <Field label="What is your main service? (the one that pays the bills)">
              <TextInput
                value={form.mainService}
                onChange={(v) => update("mainService", v)}
                placeholder="e.g. Bathroom renovations"
                required
              />
            </Field>
            <Field
              label="List your other services"
              helper="Up to 7 more. One per line."
            >
              <TextArea
                value={form.otherServices}
                onChange={(v) => update("otherServices", v)}
                rows={6}
                placeholder="e.g. Ensuite renovations\nKitchen renovations\nTile and grout repair"
              />
            </Field>
            <Field
              label='Service descriptions (one or two sentences each)'
              helper={`If you'd rather we write these from scratch, just type "You write them" and we will, based on what's standard in your industry.`}
            >
              <TextArea
                value={form.serviceDescriptions}
                onChange={(v) => update("serviceDescriptions", v)}
                rows={8}
                placeholder="Service 1: ..."
              />
            </Field>
            <Field label="Are any of your services time-sensitive or emergency?">
              <RadioGroup
                name="emergencyHas"
                value={form.emergencyHas}
                onChange={(v) => update("emergencyHas", v)}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                ]}
              />
            </Field>
            {form.emergencyHas === "yes" && (
              <Field label="Which ones?">
                <TextInput
                  value={form.emergencyWhich}
                  onChange={(v) => update("emergencyWhich", v)}
                  placeholder="e.g. emergency plumbing, after-hours leak repair"
                />
              </Field>
            )}
            <Field label="Do you offer any of these? (tick all that apply)">
              <CheckboxGroup
                values={form.offerings}
                onToggle={(v) => toggleArray("offerings", v)}
                options={OFFERING_OPTIONS}
                columns={2}
              />
            </Field>
            {form.offerings.includes("Warranty") && (
              <Field label="Warranty length">
                <TextInput
                  value={form.warrantyLength}
                  onChange={(v) => update("warrantyLength", v)}
                  placeholder="e.g. 7 years"
                />
              </Field>
            )}
          </>
        )}

        {/* Step 4: Edge / USPs */}
        {step === 4 && (
          <>
            <SectionHeading
              number={5}
              title="Your edge"
              intro={`What makes you different. If you're not sure, write "You decide" and we'll write the USPs based on what works for businesses like yours.`}
            />
            <Field label="Why do customers choose you over a competitor? (top 3)">
              <TextInput
                value={form.whyChoose1}
                onChange={(v) => update("whyChoose1", v)}
                placeholder="Reason 1"
              />
            </Field>
            <Field label="">
              <TextInput
                value={form.whyChoose2}
                onChange={(v) => update("whyChoose2", v)}
                placeholder="Reason 2"
              />
            </Field>
            <Field label="">
              <TextInput
                value={form.whyChoose3}
                onChange={(v) => update("whyChoose3", v)}
                placeholder="Reason 3"
              />
            </Field>
            <Field label="What do you do better than your competitors?">
              <TextArea
                value={form.betterThanCompetitors}
                onChange={(v) => update("betterThanCompetitors", v)}
                rows={3}
              />
            </Field>
            <Field
              label="Awards, qualifications, or certifications worth mentioning"
              helper="We'll only display what you tell us is accurate."
            >
              <TextArea
                value={form.awards}
                onChange={(v) => update("awards", v)}
                rows={3}
              />
            </Field>
            <Field label="How many years of combined industry experience do you and your team have?">
              <TextInput
                value={form.yearsExperience}
                onChange={(v) => update("yearsExperience", v)}
                placeholder="e.g. 30+ years combined"
              />
            </Field>
            <Field
              label="Licences or registrations with official bodies"
              helper="State trade license, professional certification, association membership. We'll only display these if you confirm they're current."
            >
              <TextArea
                value={form.licences}
                onChange={(v) => update("licences", v)}
                rows={3}
              />
            </Field>
            <Field label="Public liability insurance">
              <TextInput
                value={form.publicLiability}
                onChange={(v) => update("publicLiability", v)}
                placeholder="e.g. $20,000,000"
              />
            </Field>
            <Field label="Professional indemnity insurance">
              <TextInput
                value={form.professionalIndemnity}
                onChange={(v) => update("professionalIndemnity", v)}
                placeholder="e.g. $1,000,000"
              />
            </Field>
            <Field label="Workers compensation cover">
              <RadioGroup
                name="workersComp"
                value={form.workersComp}
                onChange={(v) => update("workersComp", v)}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                  { value: "na", label: "Not applicable (sole trader)" },
                ]}
              />
            </Field>
          </>
        )}

        {/* Step 5: Customers */}
        {step === 5 && (
          <>
            <SectionHeading
              number={6}
              title="Your customers"
              intro="The clearer you are about who you serve and what they want, the better we can write copy that converts."
            />
            <Field
              label="Who is your ideal customer?"
              helper={`Describe in your own words. E.g. "Homeowners aged 35-65 with a problem they need fixed today" or "Small business owners with under 50 staff looking to switch accountants."`}
            >
              <TextArea
                value={form.idealCustomer}
                onChange={(v) => update("idealCustomer", v)}
                rows={3}
              />
            </Field>
            <Field label="What problem are they trying to solve when they find you on Google?">
              <TextArea
                value={form.customerProblem}
                onChange={(v) => update("customerProblem", v)}
                rows={3}
              />
            </Field>
            <Field
              label="Top 5 questions customers commonly ask before booking"
              helper={`If you can't think of 5, write "You decide" and we'll write the FAQ section using the most common questions in your industry.`}
            >
              <TextInput
                value={form.topQuestion1}
                onChange={(v) => update("topQuestion1", v)}
                placeholder="Question 1"
              />
            </Field>
            <Field label="">
              <TextInput
                value={form.topQuestion2}
                onChange={(v) => update("topQuestion2", v)}
                placeholder="Question 2"
              />
            </Field>
            <Field label="">
              <TextInput
                value={form.topQuestion3}
                onChange={(v) => update("topQuestion3", v)}
                placeholder="Question 3"
              />
            </Field>
            <Field label="">
              <TextInput
                value={form.topQuestion4}
                onChange={(v) => update("topQuestion4", v)}
                placeholder="Question 4"
              />
            </Field>
            <Field label="">
              <TextInput
                value={form.topQuestion5}
                onChange={(v) => update("topQuestion5", v)}
                placeholder="Question 5"
              />
            </Field>
            <Field
              label="What objections do customers raise that stop them from booking?"
              helper={`E.g. "It costs too much", "I don't trust online businesses", "I'm worried about timing".`}
            >
              <TextArea
                value={form.objections}
                onChange={(v) => update("objections", v)}
                rows={3}
              />
            </Field>
          </>
        )}

        {/* Step 6: Reviews and proof */}
        {step === 6 && (
          <>
            <SectionHeading
              number={7}
              title="Reviews and proof"
              intro="Trust signals matter more than design. We need everything you can give us."
            />
            <Field label="Do you have a Google Business Profile?">
              <RadioGroup
                name="gbpStatus"
                value={form.gbpStatus}
                onChange={(v) => update("gbpStatus", v)}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "wants", label: "No, but I want one created" },
                  { value: "no", label: "No, and I don't want one" },
                ]}
              />
            </Field>
            {form.gbpStatus === "yes" && (
              <Field label="Google Business Profile URL">
                <TextInput
                  value={form.gbpUrl}
                  onChange={(v) => update("gbpUrl", v)}
                  placeholder="https://g.page/..."
                />
              </Field>
            )}
            <Field
              label="How many Google reviews do you currently have?"
              helper="Number, and average star rating."
            >
              <TextInput
                value={form.reviewCount}
                onChange={(v) => update("reviewCount", v)}
                placeholder="e.g. 47 reviews, 4.9 stars"
              />
            </Field>
            <Field
              label="Best three customer testimonials"
              helper="Paste them in. First name and suburb only — no full names."
            >
              <TextArea
                value={form.testimonial1}
                onChange={(v) => update("testimonial1", v)}
                rows={3}
                placeholder="Testimonial 1 (with first name + suburb)"
              />
            </Field>
            <Field label="">
              <TextArea
                value={form.testimonial2}
                onChange={(v) => update("testimonial2", v)}
                rows={3}
                placeholder="Testimonial 2"
              />
            </Field>
            <Field label="">
              <TextArea
                value={form.testimonial3}
                onChange={(v) => update("testimonial3", v)}
                rows={3}
                placeholder="Testimonial 3"
              />
            </Field>
            <Field
              label="Notable past clients or projects worth showcasing"
              helper="Up to 5. We'll only display what you confirm we can."
            >
              <TextArea
                value={form.pastClients}
                onChange={(v) => update("pastClients", v)}
                rows={3}
              />
            </Field>
            <Field label="Photos">
              <RadioGroup
                name="photos"
                value={form.photos}
                onChange={(v) => update("photos", v)}
                options={[
                  {
                    value: "professional",
                    label: "I have professional photos. I'll share them via email or Drive.",
                  },
                  {
                    value: "phone",
                    label: "I have phone photos. I'll send them.",
                  },
                  {
                    value: "none",
                    label: "I have nothing. Please use industry-appropriate stock photography.",
                  },
                ]}
              />
            </Field>
            <p
              className="text-sm italic mt-2"
              style={{ color: "var(--color-ink-3)" }}
            >
              If sharing photos, please include: headshot of you (the owner),
              team photo if applicable, photos of your work, vehicles, premises,
              and before-and-after shots if relevant.
            </p>
          </>
        )}

        {/* Step 7: Keywords and search */}
        {step === 7 && (
          <>
            <SectionHeading
              number={8}
              title="Keywords and search"
              intro="What you think customers Google. We'll cross-check with our keyword research."
            />
            <Field
              label="What do you think customers type into Google to find a business like yours?"
              helper={`Up to 10 phrases. E.g. "emergency plumber Adelaide", "wedding photographer Sydney". If you're not sure, write "You decide" and we'll do keyword research and pick the best ones.`}
            >
              <TextArea
                value={form.keywords}
                onChange={(v) => update("keywords", v)}
                rows={6}
              />
            </Field>
            <Field
              label="Competitors who rank well that you'd like to outrank"
              helper="Up to 3 with their URLs."
            >
              <TextArea
                value={form.competitors}
                onChange={(v) => update("competitors", v)}
                rows={4}
              />
            </Field>
            <Field
              label="Service-area suburbs you specifically want to target on Google"
              helper="Top 5 to 10 suburbs."
            >
              <TextArea
                value={form.targetSuburbs}
                onChange={(v) => update("targetSuburbs", v)}
                rows={3}
              />
            </Field>
          </>
        )}

        {/* Step 8: Contact details */}
        {step === 8 && (
          <>
            <SectionHeading
              number={9}
              title="Contact details for the site"
              intro="Goes in the header, footer, and on the contact page. Public information only."
            />
            <Field label="Business phone (the main one customers call)">
              <TextInput
                value={form.phone}
                onChange={(v) => update("phone", v)}
                type="tel"
                autoComplete="tel"
              />
            </Field>
            <Field label="Business email (the main inbox)">
              <TextInput
                value={form.email}
                onChange={(v) => update("email", v)}
                type="email"
                autoComplete="email"
              />
            </Field>
            <Field label="Trading hours">
              <TextArea
                value={form.hours}
                onChange={(v) => update("hours", v)}
                rows={3}
                placeholder="e.g. Mon-Fri 7am-5pm, Sat 8am-12pm"
              />
            </Field>
            <Field label="Display physical address publicly?">
              <RadioGroup
                name="displayAddress"
                value={form.displayAddress}
                onChange={(v) => update("displayAddress", v)}
                options={[
                  { value: "yes", label: "Yes, display" },
                  { value: "no", label: "No, do not display" },
                ]}
              />
            </Field>
            {form.displayAddress === "yes" && (
              <Field label="Address to display">
                <TextInput
                  value={form.publicAddress}
                  onChange={(v) => update("publicAddress", v)}
                  placeholder="Street, suburb, postcode"
                />
              </Field>
            )}
            <Field
              label="Service area description"
              helper={`E.g. "Adelaide metro and surrounds within 30km of the CBD"`}
            >
              <TextInput
                value={form.serviceAreaDescription}
                onChange={(v) => update("serviceAreaDescription", v)}
              />
            </Field>
            <Field label="Facebook">
              <TextInput
                value={form.facebook}
                onChange={(v) => update("facebook", v)}
                placeholder="Profile URL"
              />
            </Field>
            <Field label="Instagram">
              <TextInput
                value={form.instagram}
                onChange={(v) => update("instagram", v)}
                placeholder="Profile URL"
              />
            </Field>
            <Field label="LinkedIn">
              <TextInput
                value={form.linkedin}
                onChange={(v) => update("linkedin", v)}
                placeholder="Profile URL"
              />
            </Field>
            <Field label="TikTok">
              <TextInput
                value={form.tiktok}
                onChange={(v) => update("tiktok", v)}
                placeholder="Profile URL"
              />
            </Field>
            <Field label="YouTube">
              <TextInput
                value={form.youtube}
                onChange={(v) => update("youtube", v)}
                placeholder="Channel URL"
              />
            </Field>
            <Field label="Other social">
              <TextInput
                value={form.otherSocial}
                onChange={(v) => update("otherSocial", v)}
                placeholder="Platform and URL"
              />
            </Field>
          </>
        )}

        {/* Step 9: Domain & tracking */}
        {step === 9 && (
          <>
            <SectionHeading
              number={10}
              title="Domain, hosting and tracking"
              intro="Where the site lives + the tools we'll connect to it."
            />
            <Field label="Do you already have a domain name?">
              <RadioGroup
                name="domainStatus"
                value={form.domainStatus}
                onChange={(v) => update("domainStatus", v)}
                options={[
                  { value: "existing", label: "Yes, I have one" },
                  { value: "register", label: "No, please register one for me" },
                  { value: "new", label: "I want to register a new domain even though I have an old one" },
                ]}
              />
            </Field>
            {(form.domainStatus === "existing" || form.domainStatus === "new") && (
              <>
                <Field label="Existing domain">
                  <TextInput
                    value={form.existingDomain}
                    onChange={(v) => update("existingDomain", v)}
                    placeholder="yourdomain.com.au"
                  />
                </Field>
                <Field
                  label="Who is the domain registered with?"
                  helper="E.g. GoDaddy, Crazy Domains, Cloudflare, VentraIP"
                >
                  <TextInput
                    value={form.registrar}
                    onChange={(v) => update("registrar", v)}
                  />
                </Field>
              </>
            )}
            <Field label="If you have an existing website, what's the URL?">
              <TextInput
                value={form.existingWebsite}
                onChange={(v) => update("existingWebsite", v)}
                placeholder="https://..."
              />
            </Field>
            <Field label="Do you want any pages or content from the existing site carried over?">
              <RadioGroup
                name="carryOverType"
                value={form.carryOverType}
                onChange={(v) => update("carryOverType", v)}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No, start fresh" },
                  { value: "you-decide", label: "You decide. Carry over what's worth keeping." },
                ]}
              />
            </Field>
            {form.carryOverType === "yes" && (
              <Field label="Which pages?">
                <TextArea
                  value={form.carryOverPages}
                  onChange={(v) => update("carryOverPages", v)}
                  rows={3}
                />
              </Field>
            )}
            <Field label="Which of these do you currently use? (tick all that apply)">
              <CheckboxGroup
                values={form.toolsUsed}
                onToggle={(v) => toggleArray("toolsUsed", v)}
                options={TOOL_OPTIONS}
                columns={1}
              />
            </Field>
            {form.toolsUsed.includes("Google Analytics") && (
              <Field label="Google Analytics account email">
                <TextInput
                  value={form.gaEmail}
                  onChange={(v) => update("gaEmail", v)}
                  type="email"
                />
              </Field>
            )}
            {form.toolsUsed.includes("Google Search Console") && (
              <Field label="Google Search Console account email">
                <TextInput
                  value={form.gscEmail}
                  onChange={(v) => update("gscEmail", v)}
                  type="email"
                />
              </Field>
            )}
            {form.toolsUsed.includes("Google Business Profile") && (
              <Field label="Google Business Profile account email">
                <TextInput
                  value={form.gbpEmail}
                  onChange={(v) => update("gbpEmail", v)}
                  type="email"
                />
              </Field>
            )}
            <Field label="Are you currently running Google Ads or Meta Ads?">
              <RadioGroup
                name="adsRunning"
                value={form.adsRunning}
                onChange={(v) => update("adsRunning", v)}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                ]}
              />
            </Field>
            {form.adsRunning === "yes" && (
              <Field label="Details (platform, agency, monthly spend)">
                <TextArea
                  value={form.adsDetails}
                  onChange={(v) => update("adsDetails", v)}
                  rows={2}
                />
              </Field>
            )}
            <Field label="Contact form, quote form, or both?">
              <RadioGroup
                name="formType"
                value={form.formType}
                onChange={(v) => update("formType", v)}
                options={[
                  { value: "contact", label: "Just a contact form" },
                  { value: "quote", label: "Just a quote request form" },
                  { value: "both", label: "Both" },
                  { value: "you-decide", label: "You decide what's best for my industry" },
                ]}
              />
            </Field>
            <Field label="What information do you want collected on the form?">
              <CheckboxGroup
                values={form.formFields}
                onToggle={(v) => toggleArray("formFields", v)}
                options={FORM_FIELD_OPTIONS}
                columns={2}
              />
            </Field>
          </>
        )}

        {/* Step 10: Plan + final notes + signature */}
        {step === 10 && (
          <>
            <SectionHeading
              number={11}
              title="Plan, final notes and signature"
              intro="Last step. Once you submit, the 5-day build clock starts."
            />
            <Field label="Which plan have you chosen?">
              <RadioGroup
                name="plan"
                value={form.plan}
                onChange={(v) => update("plan", v)}
                options={[
                  { value: "247-12", label: "$247/month for 12 months — Best Value" },
                  { value: "397-6", label: "$397/month for 6 months — Try Before You Commit" },
                  { value: "497-none", label: "$497/month, no minimum term — Maximum Flexibility" },
                ]}
              />
            </Field>
            <Field label="Preferred billing method">
              <RadioGroup
                name="billing"
                value={form.billing}
                onChange={(v) => update("billing", v)}
                options={[
                  { value: "direct-debit", label: "Direct debit" },
                  { value: "credit-card", label: "Credit card" },
                ]}
              />
            </Field>
            <Field
              label="Anything important about your business, customers, or industry we should know?"
              helper="Free text. Anything that doesn't fit in the questions above."
            >
              <TextArea
                value={form.importantNotes}
                onChange={(v) => update("importantNotes", v)}
                rows={4}
              />
            </Field>
            <Field
              label="Words, phrases, claims, or topics we should NOT use on your website"
              helper="E.g. specific competitor names, regulated phrases, anything you're not licensed to say."
            >
              <TextArea
                value={form.forbiddenWords}
                onChange={(v) => update("forbiddenWords", v)}
                rows={3}
              />
            </Field>
            <Field
              label="Compliance, regulatory, or industry rules we should be aware of"
              helper="E.g. state bar advertising rules, state medical board rules, FTC endorsement guidelines, industry advertising codes."
            >
              <TextArea
                value={form.complianceRules}
                onChange={(v) => update("complianceRules", v)}
                rows={3}
              />
            </Field>

            <div
              className="mt-8 p-6 rounded-[14px]"
              style={{
                background: "var(--rose-soft)",
                border: "1px solid var(--rose-line)",
              }}
            >
              <h3
                style={{
                  fontSize: 18,
                  marginBottom: 12,
                  color: "var(--color-rose)",
                }}
              >
                Confirmation
              </h3>
              <p
                className="text-sm mb-4"
                style={{ color: "var(--color-ink-2)" }}
              >
                By submitting, you confirm:
              </p>
              <div className="space-y-3">
                {[
                  ["confirmAccurate", "The business details and credentials above are accurate."],
                  ["confirmRights", "I have the right to use any logos, images, or content I have provided or will provide."],
                  ["confirmFeedback", "I will respond to feedback during the build within 2 business days."],
                  ["confirmClock", "I understand the 5-working-day build clock starts the moment this form is received complete."],
                  ["confirmAgreement", "I have read and agreed to the Free SEO Website Agreement sent separately."],
                ].map(([k, label]) => (
                  <label
                    key={k}
                    className="flex items-start gap-3 cursor-pointer text-[14.5px]"
                    style={{ color: "var(--color-ink)", lineHeight: 1.5 }}
                  >
                    <input
                      type="checkbox"
                      checked={
                        form[k as keyof IntakeFormState] as boolean
                      }
                      onChange={(e) =>
                        update(
                          k as keyof IntakeFormState,
                          e.target.checked as never
                        )
                      }
                      className="mt-1"
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <Field label="Your name">
                <TextInput
                  value={form.signedName}
                  onChange={(v) => update("signedName", v)}
                  placeholder="Full name"
                  required
                />
              </Field>
              <Field
                label="Your email"
                helper="We'll send the build-clock confirmation here."
              >
                <TextInput
                  value={form.signedEmail}
                  onChange={(v) => update("signedEmail", v)}
                  type="email"
                  required
                />
              </Field>
              <Field label="Date">
                <TextInput
                  value={form.signedDate}
                  onChange={(v) => update("signedDate", v)}
                  type="date"
                  required
                />
              </Field>
            </div>
          </>
        )}

        {error && (
          <div
            className="mt-6 p-4 rounded-lg text-sm flex items-start gap-3"
            style={{
              background: "rgba(220,38,38,0.06)",
              color: "#b91c1c",
              border: "1px solid rgba(220,38,38,0.2)",
            }}
          >
            <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <div className="mt-10 flex items-center justify-between gap-3 flex-wrap pb-10">
          {step > 0 ? (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="btn btn-ghost"
              disabled={submitting}
            >
              <ArrowLeft size={15} strokeWidth={2.5} /> Back
            </button>
          ) : (
            <span />
          )}
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            disabled={submitting}
          >
            {submitting
              ? "Submitting..."
              : isLast
              ? "Submit intake — start build clock"
              : "Continue"}{" "}
            {!submitting && <ArrowRight size={16} strokeWidth={2.5} />}
          </button>
        </div>
      </form>
    </div>
  );
}
