import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-36 border-t border-neutral-100 dark:border-neutral-900 overflow-hidden">
      <div className="section-num">04</div>
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Left label column */}
          <div className="lg:col-span-4">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 mb-3">
                About
              </p>
              <h2 className="font-display text-4xl font-black text-neutral-900 dark:text-white md:text-5xl leading-tight">
                The PM
                <br />
                behind the
                <br />
                <span className="italic font-normal">metrics.</span>
              </h2>
            </AnimatedSection>
          </div>

          {/* Right content column */}
          <AnimatedSection className="lg:col-span-8" delay={0.1}>
            <div className="space-y-6 text-lg leading-relaxed text-neutral-500 dark:text-neutral-400 max-w-2xl">
              <p>
                I&apos;m a Product &amp; Technology Leader who has spent 8+ years at the
                intersection of complex systems and human needs. I&apos;ve shipped national
                infrastructure used by millions, built AI platforms from zero, and
                turned struggling SaaS products into growth engines.
              </p>
              <p>
                My career spans <strong className="text-neutral-900 dark:text-white">GovTech</strong> (Bangladesh&apos;s national digital systems),{" "}
                <strong className="text-neutral-900 dark:text-white">AI/ML platforms</strong>,{" "}
                <strong className="text-neutral-900 dark:text-white">B2B SaaS marketplaces</strong>, and
                social impact products — giving me an unusually broad lens on what
                makes products work at scale.
              </p>
              <p>
                BSc in Computer Science, University of Dhaka. BBA in Entrepreneurship,
                Daffodil International University. BASIS National ICT Award winner.
                ICT Division Entrepreneur of the Year, 2019.
              </p>
            </div>

            <blockquote className="mt-10 border-l-2 border-neutral-900 dark:border-white pl-6">
              <p className="text-neutral-900 dark:text-white text-lg font-medium italic leading-relaxed">
                &ldquo;The best products aren&apos;t built by shipping features —
                they&apos;re built by deeply understanding the problem until
                the right solution becomes obvious.&rdquo;
              </p>
            </blockquote>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
