export type IntakeFormState = {
  // Section 1 - About your business
  businessName: string;
  legalEntity: string;
  abn: string;
  yearsInBusiness: string;
  staffCount: string;
  basedAt: string;
  serviceAreas: string;
  whatYouDo: string;

  // Section 2 - Branding
  logoStatus: "yes-attached" | "yes-redesign" | "no" | "";
  brandColoursType: "specific" | "rough" | "you-decide" | "";
  brandColoursValue: string;
  brandFontsType: "specific" | "you-decide" | "";
  brandFontsValue: string;
  brandPersonality: string[]; // multi-select
  taglineType: "have" | "create" | "none" | "";
  taglineValue: string;
  websitesILike: string;
  websitesIDontLike: string;

  // Section 3 - Services
  mainService: string;
  otherServices: string; // newline-separated
  serviceDescriptions: string; // newline-separated, can be "You write them"
  emergencyHas: "yes" | "no" | "";
  emergencyWhich: string;
  offerings: string[]; // multi-select
  warrantyLength: string;

  // Section 4 - Edge
  whyChoose1: string;
  whyChoose2: string;
  whyChoose3: string;
  betterThanCompetitors: string;
  awards: string;
  yearsExperience: string;
  licenses: string;
  publicLiability: string;
  professionalIndemnity: string;
  workersComp: "yes" | "no" | "na" | "";

  // Section 5 - Customers
  idealCustomer: string;
  customerProblem: string;
  topQuestion1: string;
  topQuestion2: string;
  topQuestion3: string;
  topQuestion4: string;
  topQuestion5: string;
  objections: string;

  // Section 6 - Reviews
  gbpStatus: "yes" | "wants" | "no" | "";
  gbpUrl: string;
  reviewCount: string;
  testimonial1: string;
  testimonial2: string;
  testimonial3: string;
  pastClients: string;
  photos: "professional" | "phone" | "none" | "";

  // Section 7 - Keywords
  keywords: string;
  competitors: string;
  targetSuburbs: string;

  // Section 8 - Contact
  phone: string;
  email: string;
  hours: string;
  displayAddress: "yes" | "no" | "";
  publicAddress: string;
  serviceAreaDescription: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  tiktok: string;
  youtube: string;
  otherSocial: string;

  // Section 9 - Domain
  domainStatus: "existing" | "register" | "new" | "";
  existingDomain: string;
  registrar: string;
  existingWebsite: string;
  carryOverType: "yes" | "no" | "you-decide" | "";
  carryOverPages: string;

  // Section 10 - Tracking
  toolsUsed: string[]; // multi-select
  gaEmail: string;
  gscEmail: string;
  gbpEmail: string;
  adsRunning: "yes" | "no" | "";
  adsDetails: string;
  formType: "contact" | "quote" | "both" | "you-decide" | "";
  formFields: string[]; // multi-select

  // Section 11 - Plan
  plan: "247-12" | "397-6" | "497-none" | "";
  billing: "direct-debit" | "credit-card" | "";

  // Section 12 - Anything else
  importantNotes: string;
  forbiddenWords: string;
  complianceRules: string;

  // Confirmation
  confirmAccurate: boolean;
  confirmRights: boolean;
  confirmFeedback: boolean;
  confirmClock: boolean;
  confirmAgreement: boolean;
  signedName: string;
  signedEmail: string;
  signedDate: string;

  // Honeypot
  company_url: string;
};

export const INTAKE_INITIAL: IntakeFormState = {
  businessName: "",
  legalEntity: "",
  abn: "",
  yearsInBusiness: "",
  staffCount: "",
  basedAt: "",
  serviceAreas: "",
  whatYouDo: "",
  logoStatus: "",
  brandColoursType: "",
  brandColoursValue: "",
  brandFontsType: "",
  brandFontsValue: "",
  brandPersonality: [],
  taglineType: "",
  taglineValue: "",
  websitesILike: "",
  websitesIDontLike: "",
  mainService: "",
  otherServices: "",
  serviceDescriptions: "",
  emergencyHas: "",
  emergencyWhich: "",
  offerings: [],
  warrantyLength: "",
  whyChoose1: "",
  whyChoose2: "",
  whyChoose3: "",
  betterThanCompetitors: "",
  awards: "",
  yearsExperience: "",
  licenses: "",
  publicLiability: "",
  professionalIndemnity: "",
  workersComp: "",
  idealCustomer: "",
  customerProblem: "",
  topQuestion1: "",
  topQuestion2: "",
  topQuestion3: "",
  topQuestion4: "",
  topQuestion5: "",
  objections: "",
  gbpStatus: "",
  gbpUrl: "",
  reviewCount: "",
  testimonial1: "",
  testimonial2: "",
  testimonial3: "",
  pastClients: "",
  photos: "",
  keywords: "",
  competitors: "",
  targetSuburbs: "",
  phone: "",
  email: "",
  hours: "",
  displayAddress: "",
  publicAddress: "",
  serviceAreaDescription: "",
  facebook: "",
  instagram: "",
  linkedin: "",
  tiktok: "",
  youtube: "",
  otherSocial: "",
  domainStatus: "",
  existingDomain: "",
  registrar: "",
  existingWebsite: "",
  carryOverType: "",
  carryOverPages: "",
  toolsUsed: [],
  gaEmail: "",
  gscEmail: "",
  gbpEmail: "",
  adsRunning: "",
  adsDetails: "",
  formType: "",
  formFields: [],
  plan: "",
  billing: "",
  importantNotes: "",
  forbiddenWords: "",
  complianceRules: "",
  confirmAccurate: false,
  confirmRights: false,
  confirmFeedback: false,
  confirmClock: false,
  confirmAgreement: false,
  signedName: "",
  signedEmail: "",
  signedDate: "",
  company_url: "",
};

export const INTAKE_STORAGE_KEY = "free_websites_intake_v1";

export const PERSONALITY_OPTIONS = [
  "Reliable and professional",
  "Friendly and approachable",
  "Premium and high-end",
  "Local and community-focused",
  "Fast and efficient",
  "Modern and tech-forward",
  "Traditional and trustworthy",
  "You decide based on my industry",
];

export const OFFERING_OPTIONS = [
  "Free quotes",
  "Same-day service",
  "After-hours availability",
  "Fixed-price guarantees",
  "Money-back guarantees",
  "Warranty",
  "Senior or pensioner discount",
  "Online booking",
];

export const TOOL_OPTIONS = [
  "Google Analytics",
  "Google Search Console",
  "Google Business Profile",
  "Meta Business Suite",
  "None",
];

export const FORM_FIELD_OPTIONS = [
  "Name",
  "Phone",
  "Email",
  "Suburb or postcode",
  "Service required (dropdown)",
  "Preferred date or time",
  "Message or details",
  "You decide",
];

export const STEPS = [
  { key: "business-basics", label: "Business basics" },
  { key: "what-you-do", label: "What you do" },
  { key: "branding", label: "Branding" },
  { key: "services", label: "Services" },
  { key: "your-edge", label: "Your edge" },
  { key: "your-customers", label: "Your customers" },
  { key: "reviews-proof", label: "Reviews & proof" },
  { key: "keywords", label: "Keywords & search" },
  { key: "contact-details", label: "Contact details" },
  { key: "domain-tracking", label: "Domain & tracking" },
  { key: "plan-confirm", label: "Plan & confirmation" },
] as const;
