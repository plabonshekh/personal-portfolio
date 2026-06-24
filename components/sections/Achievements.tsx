"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { achievements } from "@/data/achievements";

const typeLabel = {
  champion: "Champion",
  "runner-up": "Runner-up",
  award: "Award",
  grant: "Grant",
};

export function Achievements() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div className="section-num">05</div>
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-neutral-400 dark:text-neutral-600">(05)</span>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
              Recognition
            </p>
            <div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.05}>
              <div className="group border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 hover:border-neutral-900 dark:hover:border-white transition-colors h-full">
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-300 dark:text-neutral-700 mb-4">
                  {typeLabel[item.type]}
                </p>
                <p className="font-display font-bold text-neutral-900 dark:text-white text-base leading-snug mb-2">
                  {item.title}
                </p>
                <p className="text-xs text-neutral-400 dark:text-neutral-500">{item.issuer}</p>
                <p className="text-xs text-neutral-300 dark:text-neutral-700 mt-0.5">{item.year}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
