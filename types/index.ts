export interface Metric {
  label: string;
  value: string;
  context: string;
}

export interface CaseStudySection {
  heading: string;
  body: string;
  type: "text" | "image" | "callout";
  imageUrl?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  company: string;
  timeline: string;
  role: string;
  coverImage: string;
  accentColor: string;
  tags: string[];
  metrics: Metric[];
  sections: CaseStudySection[];
  featured: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
  logo?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  linkedin: string;
  twitter?: string;
  resumeUrl: string;
  avatarUrl: string;
}
