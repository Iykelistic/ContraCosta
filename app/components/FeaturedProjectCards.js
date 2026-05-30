"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { memo, useCallback, useEffect, useMemo } from "react";
import { prefetchVideo } from "@/lib/prefetchVideo";
import { FEATURED_PROJECTS } from "@/lib/projects";

const FeaturedProjectCard = memo(function FeaturedProjectCard({
  project,
  index,
  onPrefetch,
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      prefetch
      onMouseEnter={() => onPrefetch(project)}
      onFocus={() => onPrefetch(project)}
      onPointerDown={() => onPrefetch(project)}
      className="featured-project-card group flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-brand-green/30 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-brand-green/40 sm:p-7"
    >
      <span className="text-xs font-semibold tabular-nums text-brand-dark/70 dark:text-brand-accent/80">
        {String(index + 1).padStart(2, "0")}
      </span>
        <h4 className="mt-3 text-lg font-bold leading-snug tracking-tight text-neutral-900 transition group-hover:text-brand-dark dark:text-white dark:group-hover:text-brand-accent sm:text-xl">
          {project.title}
        </h4>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-base">
        {project.caption}
      </p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-dark transition group-hover:gap-2.5 dark:text-brand-accent">
        View project
        <span aria-hidden>→</span>
      </span>
    </Link>
  );
});

export default function FeaturedProjectCards() {
  const router = useRouter();

  const projects = useMemo(() => FEATURED_PROJECTS, []);

  useEffect(() => {
    const id = window.setTimeout(() => {
      projects.forEach((project) => {
        router.prefetch(`/projects/${project.slug}`);
        prefetchVideo(project.video);
      });
    }, 400);

    return () => window.clearTimeout(id);
  }, [projects, router]);

  const handlePrefetch = useCallback(
    (project) => {
      router.prefetch(`/projects/${project.slug}`);
      prefetchVideo(project.video);
    },
    [router],
  );

  return (
    <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {projects.map((project, index) => (
        <FeaturedProjectCard
          key={project.slug}
          project={project}
          index={index}
          onPrefetch={handlePrefetch}
        />
      ))}
    </div>
  );
}
