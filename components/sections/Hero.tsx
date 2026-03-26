"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { personalInfo } from "@/data/personalInfo";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      <div className="section-num">01</div>
      <div className="relative z-10 mx-auto max-w-6xl px-6 w-full">
        <div className="max-w-4xl">
          {/* Overline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-8 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500"
          >
            Senior Product Manager · GovTech · AI · SaaS
          </motion.p>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-5xl font-black leading-[1.05] tracking-tight text-neutral-900 dark:text-white md:text-7xl lg:text-8xl mb-8"
          >
            I build digital
            <br />
            products that
            <br />
            <span className="italic font-normal">operate at scale.</span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            className="origin-left h-px w-24 bg-neutral-300 dark:bg-neutral-700 mb-8"
          />

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-xl text-lg leading-relaxed text-neutral-500 dark:text-neutral-400 mb-10"
          >
            8+ years leading AI platforms, GovTech systems, and enterprise SaaS —
            from 0→1 launches to 1M+ user deployments at Penta Global, ArchiConnect,
            and beyond.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="#work"
              className="inline-flex items-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-7 py-3.5 rounded-full text-sm font-semibold hover:opacity-80 transition-opacity"
            >
              View My Work
              <ArrowDown size={14} />
            </Link>
            <Link
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center gap-2 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            >
              Download Resume
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-6 md:left-12 flex items-center gap-3 text-xs tracking-widest uppercase text-neutral-300 dark:text-neutral-700"
      >
        <div className="h-px w-6 bg-neutral-300 dark:bg-neutral-700" />
        Scroll
      </motion.div>
    </section>
  );
}
