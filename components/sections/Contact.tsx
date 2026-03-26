"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { personalInfo } from "@/data/personalInfo";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`);
  };

  const inputClass =
    "w-full border-b border-neutral-200 dark:border-neutral-800 bg-transparent py-3 text-neutral-900 dark:text-white placeholder-neutral-300 dark:placeholder-neutral-700 focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-colors text-sm";

  return (
    <section id="contact" className="relative py-24 md:py-36 border-t border-neutral-100 dark:border-neutral-900 overflow-hidden">
      <div className="section-num">08</div>
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-5">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 mb-3">
                Contact
              </p>
              <h2 className="font-display text-4xl font-black text-neutral-900 dark:text-white md:text-5xl leading-tight mb-8">
                Let&apos;s
                <br />
                <span className="italic font-normal">talk.</span>
              </h2>

              <div className="space-y-4 text-sm text-neutral-500 dark:text-neutral-400">
                <p>
                  Open to senior PM and Product Lead roles in GovTech, AI/ML, or enterprise SaaS — globally mobile or remote.
                </p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="block font-semibold text-neutral-900 dark:text-white hover:underline underline-offset-4"
                >
                  {personalInfo.email} ↗
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-semibold text-neutral-900 dark:text-white hover:underline underline-offset-4"
                >
                  linkedin.com/in/plabonshekh ↗
                </a>
              </div>

              <a
                href={personalInfo.resumeUrl}
                download
                className="mt-8 inline-flex items-center gap-2 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 px-6 py-3 rounded-full text-sm font-semibold transition-all"
              >
                Download Resume
              </a>
            </AnimatedSection>
          </div>

          {/* Right — form */}
          <AnimatedSection className="lg:col-span-7" delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your Name"
                  className={inputClass}
                />
              </div>
              <div>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Your Email"
                  className={inputClass}
                />
              </div>
              <div>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Your Message"
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-8 py-3.5 rounded-full text-sm font-semibold hover:opacity-80 transition-opacity"
              >
                Send Message →
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
