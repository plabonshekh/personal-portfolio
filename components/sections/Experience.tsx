"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-36 overflow-hidden">
      <div className="section-num">02</div>
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-neutral-400 dark:text-neutral-600">(02)</span>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
              Selected Work
            </p>
            <div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800" />
          </div>
        </AnimatedSection>

        <div>
          {experience.map((item, i) => (
            <AnimatedSection key={`${item.company}-${item.role}`} delay={i * 0.06}>
              <div className="h-px w-full bg-neutral-100 dark:bg-neutral-900" />
              <div className="py-12">
                <div className="flex gap-6 md:gap-10">
                  <span className="text-sm font-mono text-neutral-300 dark:text-neutral-700 w-6 shrink-0 mt-1.5 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-5">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white leading-tight">
                          {item.role}
                        </h3>
                        <p className="italic text-neutral-400 dark:text-neutral-500 mt-1 text-base">
                          {item.company}
                        </p>
                      </div>
                      <span className="text-sm text-neutral-400 dark:text-neutral-500 shrink-0 md:mt-1.5 tabular-nums">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-2xl">
                      {item.description[0]}
                    </p>

                    {item.metrics && item.metrics.length > 0 && (
                      <div className="mt-8 flex flex-wrap gap-10">
                        {item.metrics.map((metric) => (
                          <div key={metric.label}>
                            <p className="text-3xl font-bold text-neutral-900 dark:text-white tabular-nums">
                              {metric.value}
                            </p>
                            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mt-1.5 max-w-[130px] leading-snug">
                              {metric.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
          <div className="h-px w-full bg-neutral-100 dark:bg-neutral-900" />
        </div>
      </div>
    </section>
  );
}
