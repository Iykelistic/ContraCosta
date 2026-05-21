"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { memo, useCallback, useMemo } from "react";
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
      className={`featured-project-card group flex min-h-70 flex-col justify-between rounded-[28px] border border-neutral-200 bg-neutral-50 p-6 shadow-md dark:border-zinc-700 dark:bg-zinc-800/60 sm:p-8 ${project.cardOffset}`}
    >
      <span className="font-serif text-sm font-medium text-brand-green transition duration-300 group-hover:tracking-wider dark:text-[#b4c53e]">
        {index + 1}.
      </span>
      <div className="mt-4 flex flex-1 flex-col justify-center">
        <h4 className="font-serif text-lg font-semibold uppercase tracking-[0.08em] text-neutral-900 transition duration-300 group-hover:text-brand-green dark:text-white dark:group-hover:text-[#b4c53e] sm:text-xl">
          {project.title}
        </h4>
        <p className="mt-4 text-sm leading-relaxed text-neutral-600 transition duration-300 group-hover:text-neutral-800 dark:text-neutral-300 dark:group-hover:text-neutral-100 md:text-base">
          {project.caption}
        </p>
      </div>
      <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500 transition duration-300 group-hover:translate-x-1 group-hover:text-brand-green dark:text-neutral-400 dark:group-hover:text-[#b4c53e]">
        View project →
      </span>
    </Link>
  );
});

export default function FeaturedProjectCards() {
  const router = useRouter();

  const projects = useMemo(() => FEATURED_PROJECTS, []);

  const handlePrefetch = useCallback(
    (project) => {
      router.prefetch(`/projects/${project.slug}`);
      prefetchVideo(project.video);
    },
    [router],
  );

  return (
    <div className="mt-10 grid grid-cols-1 items-start gap-8 sm:mt-12 md:grid-cols-3 md:gap-6 lg:gap-8">
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
