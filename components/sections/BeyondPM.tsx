"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

const items = [
  {
    num: "01",
    title: "Co-Founding & Entrepreneurship",
    body: "Started as the founding engineer at Rokkhi — built the backend and mobile frontend from scratch, then scaled into product and team leadership. Grew platform engagement 60%, held NPS 60+, and cut operating costs by $200K through data-driven process improvements.",
  },
  {
    num: "02",
    title: "Cross-functional Leadership",
    body: "Ran 3 simultaneous product tracks across 6 cross-functional teams of 25 people at ArchiConnect — all delivered on time and under budget. At Penta Global, directed ERP rollout for the Anti-Corruption Commission of Bangladesh across 47 distributed offices, from requirements through go-live.",
  },
  {
    num: "03",
    title: "National-Scale Governance",
    body: "Took ownership of Bangladesh's national digital infrastructure — the Election Management System (1M+ downloads in 30 days, zero downtime under peak load) and BDRIS National Digital ID. Operating at government scale demands a different kind of product discipline.",
  },
  {
    num: "04",
    title: "Social Impact & Field Research",
    body: "Solo-built the Gorjon app end-to-end — designed the database, architected the backend, and shipped the mobile frontend. Conducted user research across 10 slum communities and translated findings directly into product decisions. No intermediary, no handoff.",
  },
  {
    num: "05",
    title: "PM Mentorship",
    body: "Mentored 5 junior product managers — working through roadmap thinking, stakeholder communication, prioritisation frameworks, and the hard stuff no course teaches. Good PMs make other PMs better. That's the multiplier.",
  },
  {
    num: "06",
    title: "Business Consultancy",
    body: "Advised two online businesses on strategy, marketing, and startup culture — a food and bakery brand and a fashion label specialising in inclusive sizing. Helped them build business plans, define growth levers, and think like operators, not just sellers.",
  },
];

const stats = [
  { value: "25",  label: "People led\nacross teams" },
  { value: "5",   label: "Junior PMs\nmentored" },
  { value: "100+", label: "Stakeholder\ninterviews run" },
  { value: "10+", label: "Communities\nfield-researched" },
  { value: "3",   label: "Startups\nfounded or advised" },
  { value: "8+",  label: "Years across\nengineering & product" },
];

export function BeyondPM() {
  return (
    <section id="beyond" className="relative py-24 md:py-36 overflow-hidden">
      <div className="section-num">04</div>
      <div className="relative z-10 mx-auto max-w-6xl px-6">

        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-neutral-400 dark:text-neutral-600">(04)</span>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
              Beyond Product Management
            </p>
            <div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800" />
          </div>
        </AnimatedSection>

        <AnimatedSection className="mb-6" delay={0.05}>
          <h2 className="font-display text-4xl font-black text-neutral-900 dark:text-white md:text-5xl lg:text-6xl leading-tight max-w-3xl">
            I don&apos;t just ship products.
            <br />
            I build the <span className="italic font-normal">teams, systems,</span>
            <br />
            and companies behind them.
          </h2>
        </AnimatedSection>

        <AnimatedSection className="mb-16" delay={0.1}>
          <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-2xl text-lg">
            From co-founding a startup and raising venture capital, to governing
            national digital infrastructure and doing field research in urban slums —
            my work has never fit neatly inside a job description.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {items.map((item, i) => (
            <AnimatedSection key={item.num} delay={i * 0.07}>
              <div className="border-t border-neutral-100 dark:border-neutral-900 py-8 md:pr-16">
                <div className="flex gap-5">
                  <span className="text-xs font-mono text-neutral-300 dark:text-neutral-700 mt-1 shrink-0 tabular-nums">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="font-bold text-neutral-900 dark:text-white text-lg mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="border-t border-neutral-100 dark:border-neutral-900 pt-12 flex flex-wrap gap-x-14 gap-y-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-black text-neutral-900 dark:text-white tabular-nums">
                  {stat.value}
                </p>
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mt-1.5 leading-snug whitespace-pre-line">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
