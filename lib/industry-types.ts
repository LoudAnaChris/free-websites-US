export type IndustryCategory =
  | "trades"
  | "professional"
  | "home-services"
  | "lifestyle"
  | "hospitality"
  | "specialty";

export type IndustryFAQ = { q: string; a: string };

export type IndustryWhatYouGet = {
  icon: string;
  title: string;
  body: string;
};

export type Industry = {
  slug: string;
  name: string;
  pluralLowercase: string;
  category: IndustryCategory;

  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    subtitle: string;
    bullets: string[];
  };

  // StoryBrand: external problem → internal problem
  problem?: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
  };

  answerBox: {
    question: string;
    paragraphs: string[];
  };

  whatYouGet: IndustryWhatYouGet[];

  // StoryBrand: success picture (what life looks like after the build)
  success?: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
  };

  caseStudyVideoId?: string;
  caseStudySlug?: string;

  complianceNote?: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
  };

  faq: IndustryFAQ[];

  sisterIndustries?: string[];
  parentIndustry?: string;

  topCities?: string[];

  meta: {
    title: string;
    description: string;
  };
};

export type LocationFAQ = { q: string; a: string };

export type Location = {
  slug: string;
  city: string;
  state: string;

  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    subtitle: string;
    bullets: string[];
  };

  answerBox: {
    question: string;
    paragraphs: string[];
  };

  cityNotes: string[];

  topIndustries: string[];

  faq: LocationFAQ[];

  meta: {
    title: string;
    description: string;
  };
};
