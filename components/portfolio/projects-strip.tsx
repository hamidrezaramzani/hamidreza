"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SectionLabel } from "@/components/ui/section-label";
import { SocialIcon } from "@/components/portfolio/social-icon";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function ProjectsStrip() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.22, ease: "easeOut" }}
      aria-labelledby="projects-heading"
    >
      <div className="mb-8 flex items-end justify-between gap-3">
        <div>
          <SectionLabel>Selected work</SectionLabel>
          <h2
            id="projects-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl"
          >
            Projects
          </h2>
        </div>
        <p className="hidden text-sm text-zinc-500 sm:block">
          {projects.length} featured
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.28 + index * 0.06 }}
            className={cn(
              "group flex flex-col overflow-hidden rounded-3xl border border-zinc-200/80 bg-white/80 shadow-sm",
              "transition duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-indigo-500/5",
              "dark:border-zinc-800 dark:bg-zinc-950/60 dark:hover:shadow-black/30"
            )}
          >
            <div
              className={cn(
                "relative h-28 overflow-hidden border-b border-zinc-100 bg-gradient-to-br dark:border-zinc-800/80",
                project.accent
              )}
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(148_163_184/0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgb(148_163_184/0.08)_1px,transparent_1px)] bg-[size:16px_16px]" />
              <div className="absolute bottom-4 left-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-sm font-semibold text-indigo-700 shadow-sm dark:bg-zinc-900/90 dark:text-indigo-300">
                  {project.title
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  {project.startDate} — {project.endDate}
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-4 p-6">
              <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-1">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="px-2.5 py-1 text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-3 pt-1">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                  >
                    <SocialIcon id="github" className="h-3.5 w-3.5" />
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium text-indigo-600 transition hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:text-indigo-400 dark:hover:bg-indigo-500/10"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
