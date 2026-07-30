"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-label";
import { about, contacts, siteConfig } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { SocialIcon } from "@/components/portfolio/social-icon";

const socials = contacts.filter((c) => c.id !== "email");

export function IntroPanel() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
      className="flex h-full flex-col rounded-3xl border border-zinc-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/50 sm:p-7"
      aria-labelledby="intro-heading"
    >
      <div className="space-y-4">
        <SectionLabel>About</SectionLabel>
        <h1
          id="intro-heading"
          className="text-balance text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl"
        >
          {about.fullName}
        </h1>
        <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
          {about.headline}
        </p>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {about.extendedDescription}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2.5">
        <a href="#projects" className={cn(buttonVariants({ size: "default" }))}>
          View projects
          <ArrowUpRight className="h-4 w-4" />
        </a>
        <a
          href={contacts[0].link}
          className={cn(buttonVariants({ variant: "outline", size: "default" }))}
        >
          <Mail className="h-4 w-4" />
          Contact
        </a>
      </div>

      <ul className="mt-5 flex flex-wrap items-center gap-1.5" aria-label="Social links">
        {socials.map((item) => (
          <li key={item.id}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.title}
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "rounded-xl text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
              )}
            >
              <SocialIcon id={item.id} className="h-4 w-4" />
            </a>
          </li>
        ))}
      </ul>

      <dl className="mt-auto grid grid-cols-3 gap-3 border-t border-zinc-200/80 pt-5 dark:border-zinc-800">
        {about.highlights.map((item) => (
          <div key={item.label}>
            <dt className="text-[10px] uppercase tracking-[0.14em] text-zinc-500">
              {item.label}
            </dt>
            <dd className="mt-1 text-xs font-medium text-zinc-800 dark:text-zinc-200">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>

      <p className="sr-only">{siteConfig.description}</p>
    </motion.section>
  );
}
