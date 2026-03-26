import { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "launching-voxcruit-ai-platform",
    title: "Launching Voxcruit: AI-Powered Recruitment Platform",
    tagline: "Built a 0→1 AI recruitment platform achieving 94% matching accuracy and 2.5x backend performance improvement",
    company: "Penta Global Ltd.",
    timeline: "2023 – 2024",
    role: "Senior Product Manager (Lead)",
    coverImage: "/images/case-studies/voxcruit.jpg",
    accentColor: "#7C3AED",
    tags: ["AI/ML", "0→1", "GovTech", "SaaS"],
    metrics: [
      { label: "AI Matching Accuracy", value: "94%", context: "at platform launch" },
      { label: "Backend Performance", value: "2.5x", context: "improvement post-launch" },
      { label: "Release Cycle Time", value: "-20%", context: "via Agile governance" },
    ],
    sections: [
      {
        heading: "The Challenge",
        body: "Penta Global needed to build Voxcruit — an AI-powered recruitment platform — from zero. The challenge was defining an entirely new product in a competitive market while simultaneously managing a portfolio of national-scale platforms. There was no prior product, no established user base, and no validated AI pipeline.",
        type: "text",
      },
      {
        heading: "Discovery & Strategy",
        body: "I led the discovery phase — conducting competitive analysis, user interviews with HR teams, and technical scoping with the AI/ML engineers. The key insight: existing tools had high recall but poor precision. We needed to flip this by focusing on matching quality over volume. I wrote the foundational PRD and defined north-star metrics around matching accuracy and time-to-shortlist.",
        type: "text",
      },
      {
        heading: "Building 0→1",
        body: "Working across engineering, data science, and UX, I drove the full product lifecycle from concept through MVP to launch. I implemented sprint frameworks, KPI retrospectives, and a phased rollout plan. The AI pipeline was iteratively refined based on real recruiter feedback, improving matching accuracy from ~70% in early testing to 94% at launch.",
        type: "text",
      },
      {
        heading: "Results & Impact",
        body: "Voxcruit launched with 94% AI matching accuracy — a benchmark that exceeded initial targets. The engineering team achieved a 2.5x backend performance improvement through architectural decisions I advocated for during sprint reviews. The product is now a key commercial offering in Penta Global's AI portfolio.",
        type: "text",
      },
    ],
    featured: true,
  },
  {
    slug: "archiconnect-revenue-growth",
    title: "Driving 80% MoM Revenue Growth at ArchiConnect",
    tagline: "Optimized a B2B SaaS marketplace's funnel and monetization, delivering 80% MoM revenue growth for 3 consecutive months",
    company: "ArchiConnect",
    timeline: "May 2022 – June 2023",
    role: "Senior Product Manager",
    coverImage: "/images/case-studies/archiconnect.jpg",
    accentColor: "#06B6D4",
    tags: ["B2B SaaS", "Growth", "Marketplace", "Funnel Optimization"],
    metrics: [
      { label: "MoM Revenue Growth", value: "80%", context: "for 3 consecutive months" },
      { label: "Retention Improvement", value: "+35%", context: "via experimentation" },
      { label: "Conversion Rate", value: "+30%", context: "through usability testing" },
    ],
    sections: [
      {
        heading: "The Situation",
        body: "ArchiConnect was a B2B SaaS marketplace with strong supply but struggling on the demand side — conversion rates were low, retention was flat, and revenue growth had plateaued. I joined as Senior PM to own the strategy and turn the numbers around.",
        type: "text",
      },
      {
        heading: "Research & Diagnosis",
        body: "I conducted 50+ structured customer interviews and ran deep funnel analysis to identify where and why users were dropping off. The core issues: a friction-heavy onboarding flow, misaligned pricing tiers, and a discovery experience that didn't surface relevant suppliers fast enough. I synthesized this into a prioritized experimentation roadmap.",
        type: "text",
      },
      {
        heading: "What We Changed",
        body: "I led a cross-functional team of 18 (Engineering, UX, QA, Marketing) through a series of high-impact experiments: streamlined onboarding, revised pricing & packaging, improved supplier discovery algorithms, and A/B tested key conversion points. Every change was tied to a hypothesis, measured rigorously, and iterated on quickly.",
        type: "text",
      },
      {
        heading: "Results",
        body: "Revenue grew 80% month-over-month for three consecutive months. Retention improved by 35% and conversion by 30%. These results were driven entirely by analytics-led product decisions — no new features added for the sake of it, just systematic removal of friction and better alignment between product and user intent.",
        type: "text",
      },
    ],
    featured: false,
  },
  {
    slug: "election-management-system",
    title: "Election Management System: 1M+ Downloads in 30 Days",
    tagline: "Led the product lifecycle of Bangladesh's national Election Management System — zero downtime under peak load, 1M+ mobile downloads in 30 days",
    company: "Penta Global Ltd.",
    timeline: "2023 – 2024",
    role: "Senior Product Manager (Lead)",
    coverImage: "/images/case-studies/election.jpg",
    accentColor: "#F59E0B",
    tags: ["GovTech", "Mobile", "National Scale", "High Availability"],
    metrics: [
      { label: "Mobile Downloads", value: "1M+", context: "within 30 days of launch" },
      { label: "Peak Load Downtime", value: "0", context: "zero downtime during national cycle" },
      { label: "Manual Reporting", value: "-25%", context: "across 47 integrated offices" },
    ],
    sections: [
      {
        heading: "The Scale of the Challenge",
        body: "Managing a national election system is one of the highest-stakes product challenges imaginable — zero tolerance for downtime, millions of concurrent users, and a hard deadline tied to a national calendar. I owned the full product lifecycle of Bangladesh's Election Management System across web and mobile.",
        type: "text",
      },
      {
        heading: "Planning for Peak",
        body: "I worked closely with engineering to define load-testing benchmarks, failover strategies, and a phased rollout plan. On the product side, I drove a simplified UX designed for diverse literacy levels — from first-time smartphone users to election officials. Every feature was tested against real-world constraints before deployment.",
        type: "text",
      },
      {
        heading: "Go-to-Market & Rollout",
        body: "I coordinated GTM across public-sector stakeholders, compliance teams, and engineering. The rollout involved phased deployment, real-time monitoring, and a rapid-response escalation process I defined. During the national election cycle, the system handled peak load with zero downtime.",
        type: "text",
      },
      {
        heading: "Outcome",
        body: "The mobile app achieved 1M+ downloads within 30 days of launch — an unprecedented scale for a government app in Bangladesh. The system ran with zero downtime under the heaviest traffic load, and the ERP integration reduced manual reporting across 47 offices by 25%. The project became a reference case for GovTech product delivery in the region.",
        type: "text",
      },
    ],
    featured: false,
  },
];
