"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

const stats = [
  { value: "8+", label: "Years of experience" },
  { value: "1M+", label: "Users impacted" },
  { value: "94%", label: "AI matching accuracy" },
  { value: "47+", label: "Enterprise offices" },
];

export function ImpactStrip() {
  return (
    <section className="relative border-y border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
      <div className="section-num">02</div>
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.08} className="text-center">
              <p className="font-display text-5xl font-black text-neutral-900 dark:text-white md:text-6xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                {stat.label}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
