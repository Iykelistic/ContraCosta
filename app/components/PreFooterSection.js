"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const STATS = [
  {
    value: "15+",
    label: "Years delivering complex builds",
    image: "/ContraCosta1.jpeg",
  },
  {
    value: "120+",
    label: "Projects delivered across sectors",
    image: "/ContraCosta2.jpeg",
  },
  {
    value: "98%",
    label: "On-time handover (rolling 3 years)",
    image: "/ContraCosta4.jpeg",
  },
  {
    value: "24/7",
    label: "Critical response for active sites",
    image: "/ContraCosta5.jpeg",
  },
];

const PILLARS = [
  {
    title: "Preconstruction clarity",
    text: "Early budgets, schedules, and risk logs so owners can decide with confidence.",
    image: "/ContraCosta2.jpeg",
  },
  {
    title: "Field discipline",
    text: "Daily safety walks, trade coordination, and clean documentation at turnover.",
    image: "/ContraCosta3.jpeg",
  },
  {
    title: "Long-term thinking",
    text: "Materials and details chosen for durability—not just the ribbon cutting.",
    image: "/ContraCosta1.jpeg",
  },
];

const cardHover =
  "transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:border-white/50 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-md";

const imageHover =
  "object-cover transition-transform duration-500 ease-out group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100";

export default function PreFooterSection() {
  const rootRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={rootRef}
      id="insights"
      className="scroll-mt-4 border-t border-white/15 bg-brand-green px-4 py-14 dark:border-white/10 dark:bg-[#4d5c2e] sm:px-6 md:px-8 md:py-20"
      aria-labelledby="insights-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-lg font-bold uppercase tracking-[0.18em] text-white sm:text-xl md:text-2xl">
            Why choose us
          </p>
          <h2
            id="insights-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[2.5rem]"
          >
            Built for owners who want fewer surprises
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/90 md:text-base">
            A single accountable partner from early estimates through warranty—transparent reporting,
            predictable milestones, and crews who treat your site like their own.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <li
              key={s.label}
              className={`group flex min-h-[300px] flex-col overflow-hidden rounded-2xl border border-white/25 bg-white/95 shadow-md backdrop-blur-sm dark:bg-white/10 dark:shadow-lg motion-reduce:opacity-100 ${cardHover} ${
                inView ? "animate-insights-card" : "opacity-0"
              }`}
              style={{
                animationDelay: inView ? `${80 + i * 100}ms` : "0ms",
              }}
            >
              <div className="relative h-36 w-full shrink-0 overflow-hidden sm:h-40">
                <Image
                  src={s.image}
                  alt=""
                  fill
                  className={imageHover}
                  sizes="(min-width: 1024px) 22vw, 50vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-3xl font-bold tabular-nums text-brand-green md:text-4xl">
                  {s.value}
                </p>
                <p className="mt-3 text-sm font-medium leading-snug text-neutral-800 dark:text-white/95">
                  {s.label}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <ul className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
          {PILLARS.map((p, i) => (
            <li
              key={p.title}
              className={`group flex min-h-[320px] flex-col overflow-hidden rounded-2xl border border-white/25 bg-white/95 dark:bg-white/10 motion-reduce:opacity-100 ${cardHover} ${
                inView ? "animate-insights-card" : "opacity-0"
              }`}
              style={{
                animationDelay: inView ? `${80 + (STATS.length + i) * 100}ms` : "0ms",
              }}
            >
              <div className="relative h-40 w-full shrink-0 overflow-hidden sm:h-44">
                <Image
                  src={p.image}
                  alt=""
                  fill
                  className={imageHover}
                  sizes="(min-width: 768px) 30vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-base font-semibold text-neutral-900 transition-colors duration-300 group-hover:text-neutral-700 dark:text-white dark:group-hover:text-white">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-white/85">
                  {p.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
