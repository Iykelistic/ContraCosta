"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { IMAGES } from "@/lib/assets";

const AUTO_MS = 6000;

const ABOUT_IMAGES = [
  IMAGES.olivia,
  IMAGES.siteTruck1,
  IMAGES.siteTruck,
  IMAGES.siteWorkers,
];

export default function AboutSection() {
  const [slide, setSlide] = useState(0);

  const n = ABOUT_IMAGES.length;

  const go = useCallback(
    (dir) => {
      setSlide((i) => (i + dir + n) % n);
    },
    [n],
  );

  useEffect(() => {
    const id = window.setInterval(() => {
      setSlide((i) => (i + 1) % n);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [slide, n]);

  const imageSrc = ABOUT_IMAGES[slide];

  return (
    <section
      id="about"
      className="scroll-mt-4 overflow-x-clip bg-white px-4 pb-12 pt-2 font-sans dark:bg-zinc-950 sm:px-6 md:px-8 md:pb-16"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl min-w-0">
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl dark:bg-zinc-900 sm:rounded-[28px]">
          <div className="grid min-w-0 gap-8 p-5 sm:gap-10 sm:p-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12 md:p-12 lg:p-14">
            <div className="flex min-w-0 max-w-full flex-col justify-center">
              <p className="mb-3 max-w-full wrap-break-word font-serif text-sm font-medium uppercase tracking-[0.2em] text-neutral-600 dark:text-neutral-400">
                About Contra Costa
              </p>
              <h2
                id="about-heading"
                className="mb-4 max-w-full text-xl font-bold leading-snug tracking-tight text-neutral-800 wrap-anywhere dark:text-neutral-100 sm:text-2xl md:text-3xl md:leading-tight"
              >
                Engineering and construction you can plan around
              </h2>
              <div
                id="about-story"
                className="mb-8 max-w-full space-y-3.5 text-sm leading-relaxed text-neutral-600 wrap-anywhere dark:text-neutral-400 sm:text-base md:max-w-xl"
              >
                <p>
                  Contra-Costa Resources is a multidisciplinary construction,
                  interior design, procurement, and project support company
                  committed to delivering functional, refined, and high-quality
                  spaces and services.
                </p>
                <p>
                  Founded in 2016, the company operates at the intersection of
                  design, execution, sourcing, and technical support, offering
                  tailored solutions for residential, commercial, hospitality,
                  and corporate projects. Our approach combines creativity,
                  structure, technical expertise, and practical project
                  management to ensure every project is delivered with precision
                  and purpose.
                </p>
                <p>
                  At Contra-Costa Resources, we understand that every space tells
                  a story. This is why we focus not only on aesthetics, but also
                  on functionality, durability, and the overall experience of
                  the end user.
                </p>
              </div>
              <div>
                <a
                  href="#about-story"
                  className="group relative inline-flex h-32 w-32 items-center justify-center rounded-full border-2 border-brand-green bg-white text-center transition hover:border-brand-dark hover:bg-brand-light/40 md:h-36 md:w-36"
                >
                  <span className="px-4 font-serif text-xs font-medium uppercase leading-snug tracking-[0.18em] text-black md:text-sm">
                    About
                    <br />
                    us
                  </span>
                </a>
              </div>
            </div>

            <div className="relative w-full min-w-0 max-w-full">
              <div className="relative aspect-4/3 w-full min-h-100 overflow-hidden rounded-2xl sm:min-h-120 md:aspect-auto md:min-h-140 lg:min-h-160">
                <Image
                  key={imageSrc}
                  src={imageSrc}
                  alt=""
                  fill
                  unoptimized
                  className="object-cover object-[center_22%] brightness-[0.96] saturate-[0.9]"
                  sizes="(min-width: 1024px) 42vw, (min-width: 768px) 45vw, 100vw"
                />
              </div>

              <button
                type="button"
                onClick={() => go(-1)}
                className="hero-control-btn absolute left-2 top-1/2 z-10 h-11 w-11 -translate-y-1/2 sm:left-3"
                aria-label="Previous slide"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M15 18l-6-6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="hero-control-btn absolute right-2 top-1/2 z-10 h-11 w-11 -translate-y-1/2 sm:right-3"
                aria-label="Next slide"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M9 18l6-6-6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div
                className="absolute bottom-3 left-3 right-14 z-10 flex flex-wrap items-center gap-1.5 sm:left-4 sm:right-16"
                role="tablist"
                aria-label="About gallery slides"
              >
                {ABOUT_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === slide}
                    aria-label={`Image ${i + 1} of ${n}`}
                    onClick={() => setSlide(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === slide
                        ? "w-6 bg-brand-green"
                        : "w-2 bg-neutral-300 hover:bg-brand-green/70 dark:bg-zinc-600 dark:hover:bg-brand-green"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
