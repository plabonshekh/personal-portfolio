"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section className="relative py-24 md:py-36 border-t border-neutral-100 dark:border-neutral-900 bg-neutral-50 dark:bg-neutral-900/50 overflow-hidden">
      <div className="section-num">06</div>
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <AnimatedSection className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 mb-3">
            Skills
          </p>
          <h2 className="font-display text-4xl font-black text-neutral-900 dark:text-white md:text-5xl">
            What I bring
            <br />
            <span className="italic font-normal">to the table</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-0 divide-y divide-neutral-200 dark:divide-neutral-800 md:grid-cols-2 md:divide-y-0 md:gap-10">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="py-8 md:py-0"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-4">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full px-3.5 py-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
