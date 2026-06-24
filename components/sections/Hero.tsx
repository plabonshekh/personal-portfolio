"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { personalInfo } from "@/data/personalInfo";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="flex flex-col justify-center">
          {/* Overline */}
          <p
            style={{ animation: "fadeInUp 0.4s ease-out 0.1s both" }}
            className="mb-8 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500"
          >
            Engineer → Product Manager · GovTech · AI · SaaS
          </p>

          {/* Main headline */}
          <h1
            style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}
            className="font-display text-5xl font-black leading-[1.05] tracking-tight text-neutral-900 dark:text-white md:text-6xl lg:text-7xl mb-8"
          >
            I build digital
            <br />
            products that
            <br />
            <span className="italic font-normal">operate at scale.</span>
          </h1>

          {/* Divider */}
          <div
            style={{ animation: "expandX 0.5s ease-out 0.5s both" }}
            className="origin-left h-px w-24 bg-neutral-300 dark:bg-neutral-700 mb-8"
          />

          {/* Bio */}
          <p
            style={{ animation: "fadeInUp 0.5s ease-out 0.4s both" }}
            className="max-w-xl text-lg leading-relaxed text-neutral-500 dark:text-neutral-400 mb-10"
          >
            I started as a software engineer. Eight years later, I lead products that
            millions depend on — across AI SaaS, GovTech, and B2B platforms.
            Engineering instinct plus product thinking: I read the diff, prototype
            the idea, and still close the sprint.
          </p>

          {/* CTAs */}
          <div
            style={{ animation: "fadeInUp 0.4s ease-out 0.5s both" }}
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
          </div>
        </div>

        {/* Profile photo */}
        <div
          style={{ animation: "scaleIn 0.7s ease-out 0.4s both" }}
          className="hidden lg:flex justify-center"
        >
          <div className="relative w-72 xl:w-80 aspect-[3/4] overflow-hidden border border-neutral-200 dark:border-neutral-800">
            <Image
              src="/images/plabon.jpeg"
              alt="Plabon Shekh — Senior Product Manager"
              fill
              className="object-cover object-center grayscale"
              priority
            />
          </div>
        </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{ animation: "fadeIn 0.4s ease-out 1.2s both" }}
        className="absolute bottom-10 left-6 md:left-12 flex items-center gap-3 text-xs tracking-widest uppercase text-neutral-300 dark:text-neutral-700"
      >
        <div className="h-px w-6 bg-neutral-300 dark:bg-neutral-700" />
        Scroll
      </div>
    </section>
  );
}
