"use client";

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
            <span
              key={name}
              style={{ animation: `fadeIn 0.3s ease-out ${i * 0.06}s both` }}
              className="text-sm font-semibold uppercase tracking-widest text-neutral-300 dark:text-neutral-700"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
