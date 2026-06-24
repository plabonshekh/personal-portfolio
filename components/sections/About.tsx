"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function About() {
  return (
    <section id="about" className="relative bg-neutral-950 py-24 md:py-36 overflow-hidden">
      <div className="section-num-dark">07</div>
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-neutral-600">(07)</span>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-500">
              About
            </p>
            <div className="flex-1 h-px bg-neutral-800" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-4">
            <AnimatedSection>
              <h2 className="font-display text-4xl font-black text-white md:text-5xl leading-tight">
                Engineer
                <br />
                turned
                <br />
                <span className="italic font-normal">Product Lead.</span>
              </h2>

              <div className="mt-8 relative w-48 aspect-[3/4] overflow-hidden border border-neutral-800">
                <Image
                  src="/images/plabon.jpeg"
                  alt="Plabon Shekh"
                  fill
                  className="object-cover object-top grayscale"
                />
              </div>
            </AnimatedSection>
          </div>

          {/* Right */}
          <AnimatedSection className="lg:col-span-8" delay={0.1}>
            <div className="space-y-6 text-lg leading-relaxed text-neutral-400 max-w-2xl">
              <p>
                I started as a software engineer. I wrote code, debugged systems, and
                learned how products actually get built — from the inside. That instinct
                never left. It just became the lens through which I do product.
              </p>
              <p>
                Eight years in, that foundation is the edge. I talk to engineers in their
                language, catch architectural risk before it becomes a product problem,
                and prototype ideas with{" "}
                <strong className="text-white">LLM tooling</strong> before handing them
                off. It&apos;s why I move faster than most PMs — and ship things that
                actually hold together under load.
              </p>
              <p>
                That path led me through{" "}
                <strong className="text-white">national-scale GovTech</strong> (Bangladesh&apos;s Election System, BDRIS),{" "}
                <strong className="text-white">AI/ML platforms</strong> (Voxcruit, CDR Analytics),{" "}
                <strong className="text-white">B2B SaaS marketplaces</strong>, and a
                co-founded startup — each one a different kind of hard.
              </p>
              <p>
                BSc Computer Science, University of Dhaka. BBA Entrepreneurship,
                Daffodil International University. BASIS National ICT Award.
                ICT Division Entrepreneur of the Year, 2019.
              </p>
              <p className="text-base text-neutral-500">
                <span className="text-neutral-400 uppercase tracking-widest text-xs font-semibold">Certifications —</span>{" "}
                Digital Product Management · Product Management Career Program · Google Data Analytics · Agile Methodology for Startups · Python Essentials for Data Science · AI Generalist
              </p>
            </div>

            <blockquote className="mt-10 border-l-2 border-neutral-700 pl-6">
              <p className="text-neutral-300 text-lg font-medium italic leading-relaxed">
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
