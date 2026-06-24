"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

const stats = [
  { value: "8+",    keyword: "Years",     description: "of product leadership experience" },
  { value: "170M+", keyword: "Citizens",  description: "reached across national platforms" },
  { value: "94%",   keyword: "Accuracy",  description: "AI matching precision on Voxcruit" },
  { value: "500",   keyword: "Clients",   description: "acquired from zero in 6 months" },
  { value: "$200K", keyword: "Saved",     description: "annual operating cost reduction" },
  { value: "60%",   keyword: "Growth",    description: "platform engagement increase" },
  { value: "1M+",   keyword: "Downloads", description: "mobile app installs in 30 days" },
  { value: "35%",   keyword: "Retention", description: "increase driven through experimentation" },
];

export function ImpactStrip() {
  return (
    <section className="relative bg-neutral-950 overflow-hidden">
      <div className="section-num-dark">01</div>
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-36">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono text-neutral-600">(01)</span>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-500">
            Impact in Numbers
          </p>
          <div className="flex-1 h-px bg-neutral-800" />
        </div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-14 md:grid-cols-4">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.keyword} delay={i * 0.08}>
              <p className="font-display text-5xl font-black text-white md:text-6xl tabular-nums">
                {stat.value}
              </p>
              <p className="mt-3 text-sm font-semibold text-neutral-300 uppercase tracking-widest">
                {stat.keyword}
              </p>
              <p className="mt-1 text-xs text-neutral-600 leading-snug max-w-[180px]">
                {stat.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
