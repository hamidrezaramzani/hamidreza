"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/section-label";

export function CenterVisual() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
      className="flex h-full flex-col rounded-3xl border border-zinc-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/50 sm:p-7"
      aria-label="Profile visual"
    >
      <SectionLabel className="mb-5">Profile</SectionLabel>

      <div className="flex min-h-0 flex-1 flex-col items-center justify-between gap-5">
        <div className="relative aspect-square w-full max-w-[13.5rem] overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-50 shadow-lg shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/40">
          <Image
            src={isDark ? "/hamidreza-dark.png" : "/hamidreza-light.png"}
            alt="Hamidreza Ramzani"
            fill
            priority
            sizes="216px"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-900/20 via-transparent to-transparent dark:from-black/40" />
        </div>

        <div className="w-full overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-50/80 font-mono text-[11px] dark:border-zinc-800 dark:bg-zinc-900/60 sm:text-xs">
          <div className="flex items-center gap-1.5 border-b border-zinc-200/80 px-3.5 py-2.5 dark:border-zinc-800">
            <span className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <span className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <span className="h-2 w-2 rounded-full bg-indigo-400/80" />
            <span className="ml-2 text-[10px] text-zinc-400">developer.ts</span>
          </div>
          <div className="space-y-2 px-3.5 py-3.5 leading-relaxed text-zinc-600 dark:text-zinc-400">
            <p>
              <span className="text-indigo-500 dark:text-indigo-400">const</span>{" "}
              <span className="text-zinc-800 dark:text-zinc-200">developer</span>{" "}
              = {"{"}
            </p>
            <p className="pl-3">
              <span className="text-indigo-600 dark:text-indigo-300">name</span>
              :{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                &quot;Hamidreza&quot;
              </span>
              ,
            </p>
            <p className="pl-3">
              <span className="text-indigo-600 dark:text-indigo-300">role</span>
              :{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                &quot;Frontend Developer&quot;
              </span>
              ,
            </p>
            <p className="pl-3">
              <span className="text-indigo-600 dark:text-indigo-300">stack</span>
              : [{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                &quot;React&quot;
              </span>
              ,{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                &quot;Next.js&quot;
              </span>{" "}
              ],
            </p>
            <p>{"}"}</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
