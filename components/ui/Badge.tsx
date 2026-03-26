import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "teal" | "slate" | "amber";
  className?: string;
}

const variantMap = {
  teal: "bg-cyan-50 text-cyan-700 border border-cyan-200",
  slate: "bg-slate-100 text-slate-600 border border-slate-200",
  amber: "bg-amber-50 text-amber-700 border border-amber-200",
};

export function Badge({ children, variant = "slate", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variantMap[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
