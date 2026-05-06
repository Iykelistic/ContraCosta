"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const PROJECT_VIDEOS = [
  { src: "/Oak.mp4", title: "Oak", caption: "Exterior and landscape work" },
  { src: "/Interior.mp4", title: "Interior", caption: "Interior fit-out and finishes" },
];

function BadgeCard({ tone = "green", title, subtitle, children }) {
  const toneClass =
    tone === "olive"
      ? "bg-[#b4c53e] text-neutral-900"
      : "bg-[#87b46b] text-white";

  return (
    <article
      className={`w-[148px] rounded-xl p-3 shadow-lg backdrop-blur-sm sm:w-[165px] sm:p-4 ${toneClass}`}
      aria-label={title}
    >
      <div className="mb-3">{children}</div>
      <p className="text-xs font-semibold leading-snug sm:text-sm">{title}</p>
      <p className="mt-1 text-[11px] leading-snug opacity-95 sm:text-xs">{subtitle}</p>
    </article>
  );
}

function ProjectVideoCarousel() {
  const [index, setIndex] = useState(0);
  const videoRef = useRef(null);
  const n = PROJECT_VIDEOS.length;

  const go = useCallback((dir) => {
    setIndex((i) => (i + dir + n) % n);
  }, [n]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.pause();
    try {
      el.currentTime = 0;
    } catch {
      /* ignore */
    }
  }, [index]);

  const current = PROJECT_VIDEOS[index];

  return (
    <div className="mx-auto mt-10 max-w-7xl md:mt-14">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/90">On site</p>
        <h3 className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
          Project walkthroughs
        </h3>
        <p className="mx-auto mt-2 max-w-xl text-sm text-white/85 md:text-base">
          Short clips from recent work—use controls to play, pause, and sound.
        </p>
      </div>

      <div className="relative mt-8 w-full overflow-hidden rounded-[20px] border border-white/20 bg-black shadow-xl sm:rounded-[24px]">
        <div className="relative aspect-video w-full">
          <video
            key={current.src}
            ref={videoRef}
            className="h-full w-full object-contain"
            controls
            playsInline
            preload="metadata"
            aria-label={`Video: ${current.title}`}
          >
            <source src={current.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-white/15 bg-black/55 px-3 py-3 backdrop-blur-sm sm:px-4">
          <div className="min-w-0 flex-1 pl-1">
            <p className="truncate text-sm font-semibold text-white">{current.title}</p>
            <p className="truncate text-xs text-white/75">{current.caption}</p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
              aria-label="Previous video"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="flex gap-1.5 px-1" role="tablist" aria-label="Choose project video">
              {PROJECT_VIDEOS.map((v, i) => (
                <button
                  key={v.src}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show ${v.title} video`}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-white" : "w-2.5 bg-white/40 hover:bg-white/65"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
              aria-label="Next video"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M9 18l6-6-6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShowcaseSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-4 bg-brand-green px-4 pb-12 font-sans dark:bg-[#4d5c2e] sm:px-6 md:px-8 md:pb-16"
      aria-labelledby="showcase-heading"
    >
      <h2 id="showcase-heading" className="sr-only">
        Team and project capabilities
      </h2>
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[24px] shadow-lg sm:rounded-[28px]">
        <div className="relative min-h-[430px] sm:min-h-[520px] lg:min-h-[620px]">
          <Image
            src="/ContraCosta3.jpeg"
            alt="Contra Costa site team"
            fill
            className="object-cover object-center brightness-[0.96] saturate-[0.9]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/22" aria-hidden />
          <div className="absolute right-3 top-3 flex flex-wrap justify-end gap-2 sm:right-5 sm:top-5 sm:gap-3 md:right-6 md:top-6">
            <BadgeCard
              tone="green"
              title="Specializing in Industrial, Residential and Commercial Developments"
              subtitle="Integrated project delivery"
            >
              <svg width="46" height="36" viewBox="0 0 46 36" fill="none" aria-hidden>
                <path
                  d="M2 31h42M8 31V14l15-9 15 9v17M17 31V20h12v11"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </BadgeCard>

            <BadgeCard
              tone="olive"
              title="Premium Real Estate Developer"
              subtitle="Built for long-term value"
            >
              <svg width="42" height="36" viewBox="0 0 42 36" fill="none" aria-hidden>
                <path
                  d="M6 32V10l7-4v26M18 32V6l7-4v30M30 32V14l6-3v21"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M3 32h36" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </BadgeCard>
          </div>
        </div>
      </div>

      <ProjectVideoCarousel />
    </section>
  );
}
