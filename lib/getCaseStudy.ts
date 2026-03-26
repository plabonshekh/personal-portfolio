import { caseStudies } from "@/data/caseStudies";
import { CaseStudy } from "@/types";

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
