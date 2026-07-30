import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "outline" | "soft";
};

export function Badge({
  className,
  variant = "soft",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg px-2 py-0.5 text-[11px] font-medium tracking-wide",
        variant === "default" &&
          "bg-indigo-600 text-white dark:bg-indigo-500",
        variant === "outline" &&
          "border border-zinc-200 text-zinc-700 dark:border-zinc-700 dark:text-zinc-300",
        variant === "soft" &&
          "bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-600/10 dark:bg-indigo-500/10 dark:text-indigo-300 dark:ring-indigo-400/20",
        className
      )}
      {...props}
    />
  );
}
