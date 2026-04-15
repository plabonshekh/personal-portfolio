"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-36 border-t border-neutral-100 dark:border-neutral-900 overflow-hidden">
      <div className="section-num">05</div>
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <AnimatedSection className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 mb-3">
            Experience
          </p>
          <h2 className="font-display text-4xl font-black text-neutral-900 dark:text-white md:text-5xl">
            Where I&apos;ve worked
          </h2>
        </AnimatedSection>

        <div className="divide-y divide-neutral-100 dark:divide-neutral-900">
          {experience.map((item, i) => (
            <AnimatedSection
              key={`${item.company}-${item.role}`}
              delay={i * 0.06}
              className="py-10"
            >
              <div className="flex flex-col gap-6 md:flex-row">
                {/* Left — company & period */}
                <div className="md:w-64 shrink-0">
                  <p className="font-semibold text-neutral-900 dark:text-white">{item.company}</p>
                  <p className="text-sm text-neutral-400 dark:text-neutral-500 mt-1">{item.period}</p>
                  <p className="text-xs text-neutral-300 dark:text-neutral-700 mt-0.5">{item.location}</p>
                </div>

                {/* Right — role & details */}
                <div className="flex-1">
                  <p className="text-lg font-display font-bold text-neutral-900 dark:text-white mb-4">
                    {item.role}
                  </p>
                  <ul className="space-y-2 mb-5">
                    {item.description.map((point, j) => (
                      <li key={j} className="flex gap-3 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 px-2.5 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
