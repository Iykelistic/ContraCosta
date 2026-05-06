"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const AUTO_MS = 6000;

const ABOUT_IMAGES = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&h=1000&fit=crop&q=85",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&h=1000&fit=crop&q=85",
  "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=1400&h=1000&fit=crop&q=85",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=1000&fit=crop&q=85",
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
      className="scroll-mt-4 overflow-x-clip bg-brand-green px-4 pb-12 pt-2 font-sans dark:bg-[#4d5c2e] sm:px-6 md:px-8 md:pb-16"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl min-w-0">
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl dark:bg-zinc-900 sm:rounded-[28px]">
          <div className="grid min-w-0 gap-8 p-5 sm:gap-10 sm:p-8 md:grid-cols-2 md:gap-12 md:p-12 lg:p-14">
            <div className="flex min-w-0 max-w-full flex-col justify-center">
              <p className="mb-3 max-w-full wrap-break-word font-serif text-sm font-medium uppercase tracking-[0.2em] text-neutral-600 dark:text-neutral-400 md:text-base">
                About Contra Costa
              </p>
              <h2
                id="about-heading"
                className="mb-5 max-w-full text-xl font-bold leading-snug tracking-tight text-neutral-800 wrap-anywhere dark:text-neutral-100 sm:text-2xl md:text-3xl md:leading-tight lg:text-4xl"
              >
                Engineering and construction you can plan around
              </h2>
              <p
                id="about-story"
                className="mb-8 max-w-full text-base leading-relaxed text-neutral-600 wrap-anywhere dark:text-neutral-400 md:max-w-xl md:text-lg"
              >
                We partner with owners, architects, and public agencies to
                deliver structures that balance schedule, budget, and long-term
                performance. From early estimating through closeout, our teams
                emphasize clear communication, rigorous safety, and workmanship
                that holds up to real-world use, so the places we build stay
                dependable for decades.
              </p>
              <div>
                <a
                  href="#about-story"
                  className="group relative inline-flex h-32 w-32 items-center justify-center rounded-full border-2 border-neutral-800 text-center transition hover:border-brand-green hover:text-brand-green dark:border-neutral-200 dark:hover:border-brand-green md:h-36 md:w-36"
                >
                  <span className="px-4 font-serif text-xs font-medium uppercase leading-snug tracking-[0.18em] text-neutral-800 dark:text-neutral-100 md:text-sm">
                    About
                    <br />
                    us
                  </span>
                </a>
              </div>
            </div>

            <div className="relative w-full min-w-0 max-w-full">
              <div className="relative aspect-4/3 w-full min-h-75 overflow-hidden rounded-2xl sm:min-h-90 md:aspect-5/4 md:min-h-100 lg:min-h-120">
                <Image
                  key={imageSrc}
                  src={imageSrc}
                  alt=""
                  fill
                  className="object-cover brightness-[0.96] saturate-[0.9]"
                  sizes="(min-width: 1024px) 42vw, (min-width: 768px) 45vw, 100vw"
                />
              </div>

              <button
                type="button"
                onClick={() => go(-1)}
                className="absolute left-2 top-1/2 z-10 flex h-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 px-2.5 text-neutral-900 shadow-md backdrop-blur-sm transition hover:bg-white/90 sm:left-3 dark:bg-zinc-800/80 dark:text-white dark:hover:bg-zinc-800"
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
                className="absolute right-2 top-1/2 z-10 flex h-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 px-2.5 text-neutral-900 shadow-md backdrop-blur-sm transition hover:bg-white/90 sm:right-3 dark:bg-zinc-800/80 dark:text-white dark:hover:bg-zinc-800"
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
                        ? "w-6 bg-neutral-800 dark:bg-white"
                        : "w-2 bg-neutral-400/80 hover:bg-neutral-600 dark:bg-white/40 dark:hover:bg-white/70"
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
