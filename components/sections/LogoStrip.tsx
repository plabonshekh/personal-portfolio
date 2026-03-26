"use client";

import { motion } from "framer-motion";

const companies = [
  "Penta Global Ltd.",
  "ArchiConnect",
  "Rokkhi IT Solutions",
  "Plan International",
  "UNICEF Bangladesh",
];

export function LogoStrip() {
  return (
    <section className="border-y border-neutral-100 dark:border-neutral-900 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {companies.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="text-sm font-semibold uppercase tracking-widest text-neutral-300 dark:text-neutral-700"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
