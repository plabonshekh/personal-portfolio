"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { personalInfo } from "@/data/personalInfo";

const links = [
  {
    label: "Email",
    value: "plabon.shekh7@gmail.com",
    href: `mailto:${personalInfo.email}`,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/plabonshekh",
    href: personalInfo.linkedin,
    external: true,
  },
  {
    label: "Resume",
    value: "Download PDF →",
    href: personalInfo.resumeUrl,
    external: false,
    download: "Plabon_Shekh_Product_Manager",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative bg-neutral-950 overflow-hidden">
      <div className="section-num-dark">08</div>
      {/* Top border */}
      <div className="h-px bg-neutral-800" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        {/* Section label */}
        <AnimatedSection className="pt-16 mb-20">
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-neutral-600">(08)</span>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-500">
              Contact
            </p>
            <div className="flex-1 h-px bg-neutral-800" />
          </div>
        </AnimatedSection>

        {/* Main headline */}
        <AnimatedSection delay={0.05}>
          <h2 className="font-display text-6xl font-black text-white md:text-8xl lg:text-[9rem] leading-none tracking-tight mb-4">
            Let&apos;s build
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.08}>
          <h2 className="font-display text-6xl font-black md:text-8xl lg:text-[9rem] leading-none tracking-tight mb-16">
            <span className="italic font-normal text-neutral-500">something real.</span>
          </h2>
        </AnimatedSection>

        {/* Domains */}
        <AnimatedSection delay={0.12} className="mb-20">
          <p className="text-xs font-mono text-neutral-600 tracking-widest">
            GovTech · AI/ML · Enterprise SaaS · Remote or Global
          </p>
        </AnimatedSection>

        {/* Divider */}
        <div className="h-px bg-neutral-800 mb-0" />

        {/* Contact links — full-width rows */}
        {links.map((link, i) => (
          <AnimatedSection key={link.label} delay={0.05 * i}>
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              download={link.download || undefined}
              className="group flex items-center justify-between py-7 border-b border-neutral-800 hover:pl-4 transition-all duration-300"
            >
              <span className="text-xs font-mono text-neutral-600 uppercase tracking-widest w-24 shrink-0">
                {link.label}
              </span>
              <span className="flex-1 text-lg md:text-2xl font-semibold text-neutral-300 group-hover:text-white transition-colors">
                {link.value}
              </span>
              <span className="text-neutral-700 group-hover:text-white group-hover:translate-x-1 transition-all text-xl">
                ↗
              </span>
            </a>
          </AnimatedSection>
        ))}

        {/* Bottom spacer */}
        <div className="pb-24" />
      </div>
    </section>
  );
}
