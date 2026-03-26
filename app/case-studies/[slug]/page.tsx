import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { getCaseStudy } from "@/lib/getCaseStudy";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const cs = getCaseStudy(params.slug);
  if (!cs) return { title: "Not Found" };
  return {
    title: `${cs.title} — Plabon Shekh`,
    description: cs.tagline,
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const cs = getCaseStudy(params.slug);
  if (!cs) notFound();

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 pt-24 pb-32">
      <div className="mx-auto max-w-3xl px-6">
        {/* Back */}
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-neutral-400 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
          Back to work
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {cs.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-600 border border-neutral-200 dark:border-neutral-800 rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="font-display text-4xl font-black text-neutral-900 dark:text-white leading-tight mb-5 md:text-5xl">
          {cs.title}
        </h1>
        <p className="text-xl text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8">
          {cs.tagline}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap gap-6 text-sm text-neutral-400 dark:text-neutral-600 mb-14 pb-14 border-b border-neutral-100 dark:border-neutral-900">
          <span>{cs.company}</span>
          <span>·</span>
          <span>{cs.role}</span>
          <span>·</span>
          <span>{cs.timeline}</span>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-6 mb-14">
          {cs.metrics.map((m) => (
            <div key={m.label}>
              <p className="font-display text-3xl font-black text-neutral-900 dark:text-white">{m.value}</p>
              <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mt-1">{m.label}</p>
              <p className="text-xs text-neutral-300 dark:text-neutral-700 mt-0.5">{m.context}</p>
            </div>
          ))}
        </div>

        <hr className="border-neutral-100 dark:border-neutral-900 mb-14" />

        {/* Body */}
        <div className="space-y-12">
          {cs.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-xl font-bold text-neutral-900 dark:text-white mb-4">
                {section.heading}
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed text-lg">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-10 border-t border-neutral-100 dark:border-neutral-900">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-white transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            Back to all case studies
          </Link>
        </div>
      </div>
    </div>
  );
}
