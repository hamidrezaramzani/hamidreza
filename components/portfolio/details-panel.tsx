"use client";

import { Briefcase, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SectionLabel } from "@/components/ui/section-label";
import { experiences, skills } from "@/data/portfolio";

export function DetailsPanel() {
  const experience = experiences[0];

  return (
    <motion.aside
      id="experience"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
      className="flex h-full flex-col rounded-3xl border border-zinc-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/50 sm:p-7 md:col-span-2 lg:col-span-1"
      aria-label="Experience and skills"
    >
      <div className="mb-5 flex items-center gap-2">
        <Briefcase className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
        <SectionLabel>Experience</SectionLabel>
      </div>

      <div className="relative border-l border-indigo-200 pl-4 dark:border-indigo-500/30">
        <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-indigo-500 ring-4 ring-indigo-500/15" />
        <p className="text-[11px] text-zinc-500">
          {experience.startDate} — {experience.endDate}
        </p>
        <h2 className="mt-1.5 text-base font-semibold text-zinc-900 dark:text-zinc-50">
          {experience.position}
        </h2>
        <p className="mt-0.5 text-sm text-indigo-600 dark:text-indigo-400">
          {experience.company}
        </p>
        <ul className="mt-4 space-y-2.5">
          {experience.workHighlights.map((item) => (
            <li
              key={item.id}
              className="text-[13px] leading-relaxed text-zinc-600 dark:text-zinc-400"
            >
              {item.description}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto border-t border-zinc-200/80 pt-5 dark:border-zinc-800">
        <div className="mb-4 flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
          <SectionLabel>Skills</SectionLabel>
        </div>
        <div className="space-y-3.5">
          {skills.map((group) => (
            <div key={group.category}>
              <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-500">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.aside>
  );
}
