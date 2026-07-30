"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { SocialIcon } from "@/components/portfolio/social-icon";
import { navItems, siteConfig } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-30 border-b border-zinc-200/60 bg-zinc-50/80 backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-950/80"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="#about"
          className="group flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-xs font-semibold text-white shadow-sm shadow-indigo-600/30 transition group-hover:bg-indigo-500">
            HR
          </span>
          <span className="hidden text-sm font-medium tracking-tight text-zinc-900 dark:text-zinc-50 sm:inline">
            {siteConfig.shortName}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-2xl border border-zinc-200/80 bg-white/70 p-1 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/60">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    "rounded-xl px-3.5 py-2 text-sm font-medium text-zinc-600 transition",
                    "hover:bg-zinc-100 hover:text-zinc-900",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                    "dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                  )}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "rounded-xl"
            )}
          >
            <SocialIcon id="github" className="h-4 w-4" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
