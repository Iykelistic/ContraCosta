"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IMAGES } from "@/lib/assets";

const FINISHED_PROJECTS = [
  {
    title: "Client-ready interiors",
    text: "Finished spaces prepared with the polish and comfort clients expect at handover.",
    image: IMAGES.finishing1,
  },
  {
    title: "Refined material choices",
    text: "Surfaces, textures, and fixtures selected to feel premium and last beyond first impressions.",
    image: IMAGES.vintage,
  },
  {
    title: "Detail-led execution",
    text: "Every visible edge, joint, and finish is treated as part of the final client experience.",
    image: IMAGES.tap,
    imageHeightClass: "h-72 sm:h-80 lg:h-96",
  },
  {
    title: "Functional elegance",
    text: "Layouts are shaped for daily use while preserving a clean, elevated visual language.",
    image: IMAGES.finishing4,
  },
  {
    title: "Coordinated finishing",
    text: "Design, furnishing, and installation come together so each room feels complete.",
    image: IMAGES.finishing5,
  },
  {
    title: "Lasting presentation",
    text: "Completed projects are delivered with the durability and presentation clients can rely on.",
    image: IMAGES.finishing6,
  },
];

const cardHover =
  "transition-all duration-300 ease-out hover:-translate-y-2 hover:border-brand-green/40 hover:shadow-2xl motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-md";

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
      className="scroll-mt-4 border-t border-neutral-200 bg-white px-4 py-14 sm:px-6 md:px-8 md:py-20"
      aria-labelledby="insights-heading"
    >
      <div className="mx-auto max-w-7xl rounded-[28px] bg-white px-5 py-10 shadow-xl sm:px-8 sm:py-12 md:px-12 md:py-14">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-green md:text-base">
            Why choose us
          </p>
          <h2
            id="insights-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-neutral-800 md:text-3xl lg:text-4xl"
          >
            Finished projects, delivered with care
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600 md:text-base">
            From refined interiors to final handover, our work is shaped around
            polished details, durable materials, and spaces clients are proud to
            use.
          </p>
        </div>

        <ul className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {FINISHED_PROJECTS.map((project, i) => (
            <li
              key={project.title}
              className={`group flex min-h-[420px] flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-md motion-reduce:opacity-100 ${cardHover} ${
                inView ? "animate-insights-card" : "opacity-0"
              }`}
              style={{
                animationDelay: inView ? `${80 + i * 100}ms` : "0ms",
              }}
            >
              <div
                className={`relative w-full shrink-0 overflow-hidden ${project.imageHeightClass ?? "h-64 sm:h-72 lg:h-80"}`}
              >
                <Image
                  src={project.image}
                  alt=""
                  fill
                  unoptimized
                  className={imageHover}
                  sizes="(min-width: 1024px) 30vw, 50vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-base font-semibold text-neutral-900 transition-colors duration-300 group-hover:text-neutral-700">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                  {project.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
