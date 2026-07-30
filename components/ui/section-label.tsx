import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: ReactNode;
  className?: string;
};

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "text-[11px] font-medium uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400",
        className
      )}
    >
      {children}
    </p>
  );
}
