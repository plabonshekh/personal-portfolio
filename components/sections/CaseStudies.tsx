"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { caseStudies } from "@/data/caseStudies";

export function CaseStudies() {
  return (
    <section id="work" className="relative py-24 md:py-36 overflow-hidden">
      <div className="section-num">03</div>
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section header */}
        <AnimatedSection className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 mb-3">
              Case Studies
            </p>
            <h2 className="font-display text-4xl font-black text-neutral-900 dark:text-white md:text-5xl">
              Impact Delivered
            </h2>
          </div>
          <p className="text-sm text-neutral-400 dark:text-neutral-500 max-w-xs">
            Real product problems. Real outcomes.
          </p>
        </AnimatedSection>

        {/* Editorial list */}
        <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
          {caseStudies.map((cs, i) => (
            <AnimatedSection key={cs.slug} delay={i * 0.08}>
              <Link
                href={`/case-studies/${cs.slug}`}
                className="group flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between hover:pl-2 transition-all duration-200"
              >
                {/* Index number + title */}
                <div className="flex items-start gap-6 md:gap-8 flex-1">
                  <span className="font-body text-xs font-semibold text-neutral-300 dark:text-neutral-700 mt-1.5 tabular-nums shrink-0">
                    0{i + 1}
                  </span>
                  <div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wide">
                        {cs.company}
                      </span>
                      <span className="text-neutral-200 dark:text-neutral-700">·</span>
                      {cs.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-white group-hover:underline underline-offset-4 md:text-3xl">
                      {cs.title}
                    </h3>
                    <p className="mt-2 text-neutral-500 dark:text-neutral-400 text-sm max-w-lg leading-relaxed">
                      {cs.tagline}
                    </p>
                  </div>
                </div>

                {/* Right — metric + arrow */}
                <div className="flex items-center gap-8 md:flex-col md:items-end md:gap-2 shrink-0 pl-14 md:pl-0">
                  <div className="md:text-right">
                    <p className="font-display text-2xl font-black text-neutral-900 dark:text-white">
                      {cs.metrics[0].value}
                    </p>
                    <p className="text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-wide">
                      {cs.metrics[0].label}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-neutral-300 dark:text-neutral-700 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
