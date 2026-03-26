import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  overline?: string;
  heading: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  overline,
  heading,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={cn("space-y-3", isCenter && "text-center", className)}>
      {overline && (
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          {overline}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold text-slate-900 md:text-4xl">
        {heading}
      </h2>
      {subtitle && (
        <p className={cn("max-w-2xl text-lg text-slate-500", isCenter && "mx-auto")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
