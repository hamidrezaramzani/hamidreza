"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/section-label";
import { SocialIcon } from "@/components/portfolio/social-icon";
import { contacts } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function ContactBar() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.32, ease: "easeOut" }}
      className="rounded-3xl border border-zinc-200/80 bg-white/70 px-6 py-8 shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/50 sm:px-8 sm:py-10"
      aria-labelledby="contact-heading"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-md space-y-3">
          <SectionLabel>Contact</SectionLabel>
          <h2
            id="contact-heading"
            className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl"
          >
            Let&apos;s build something thoughtful
          </h2>
        </div>

        <ul
          className="grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-2"
          aria-label="Contact methods"
        >
          {contacts.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                target={item.id === "email" ? undefined : "_blank"}
                rel={item.id === "email" ? undefined : "noopener noreferrer"}
                className={cn(
                  "inline-flex w-full items-center gap-3 rounded-2xl border border-zinc-200/80 bg-zinc-50/80 px-4 py-3.5 text-sm font-medium text-zinc-700 transition",
                  "hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                  "dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-300",
                  "dark:hover:border-indigo-500/30 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-300"
                )}
              >
                <SocialIcon id={item.id} className="h-4 w-4 shrink-0" />
                <span className="truncate">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
