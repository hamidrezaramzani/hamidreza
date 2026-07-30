"use client";

import { SiteHeader } from "@/components/portfolio/site-header";
import { IntroPanel } from "@/components/portfolio/intro-panel";
import { CenterVisual } from "@/components/portfolio/center-visual";
import { DetailsPanel } from "@/components/portfolio/details-panel";
import { ProjectsStrip } from "@/components/portfolio/projects-strip";
import { ContactBar } from "@/components/portfolio/contact-bar";

export function PortfolioShell() {
  return (
    <div className="relative min-h-dvh">
      <BackgroundAtmosphere />
      <SiteHeader />

      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:gap-20 lg:px-8 lg:pb-24 xl:gap-24">
        <section
          className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          aria-label="Hero"
        >
          <IntroPanel />
          <CenterVisual />
          <DetailsPanel />
        </section>

        <ProjectsStrip />
        <ContactBar />
      </main>
    </div>
  );
}

function BackgroundAtmosphere() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-950" />
      <div className="absolute left-1/2 top-[-10%] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.14),transparent_65%)] dark:bg-[radial-gradient(circle,rgba(99,102,241,0.18),transparent_65%)]" />
      <div className="absolute bottom-[-20%] right-[-10%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.08),transparent_70%)] dark:bg-[radial-gradient(circle,rgba(129,140,248,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(148_163_184/0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgb(148_163_184/0.08)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] dark:bg-[linear-gradient(to_right,rgb(63_63_70/0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgb(63_63_70/0.35)_1px,transparent_1px)]" />
      <div className="noise absolute inset-0 opacity-[0.035] dark:opacity-[0.05]" />
    </div>
  );
}
