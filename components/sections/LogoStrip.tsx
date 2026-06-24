"use client";

const keywords = [
  "GovTech",
  "AI / ML",
  "B2B SaaS",
  "Marketplace",
  "0 → 1",
  "CDR Analytics",
  "User Research",
  "Go-to-Market",
  "Product Strategy",
  "Agile",
  "Enterprise SaaS",
  "LLM Tooling",
  "Data Pipelines",
  "Social Impact",
];

export function LogoStrip() {
  const items = [...keywords, ...keywords];

  return (
    <div className="border-y border-neutral-100 dark:border-neutral-900 py-5 overflow-hidden">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "ticker 22s linear infinite" }}
      >
        {items.map((kw, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 text-xs font-bold uppercase tracking-[0.25em] text-neutral-800 dark:text-neutral-300 px-6"
          >
            {kw}
            <span className="text-neutral-400 dark:text-neutral-600">—</span>
          </span>
        ))}
      </div>
    </div>
  );
}
