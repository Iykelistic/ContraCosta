"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { IMAGES, VIDEOS } from "@/lib/assets";
import { prefetchVideo } from "@/lib/prefetchVideo";
import { SERVICES } from "@/lib/services";
import {
  HERO_CAROUSEL_SHELL_CLASS,
  HERO_MEDIA_LAYER_CLASS,
  HERO_VIEWPORT_COLUMN_CLASS,
  MEDIA_COVER_CLASS,
} from "@/lib/media";
import ThemeToggle from "./ThemeToggle";

const CAROUSEL_SLIDES = [
  {
    type: "image",
    image: IMAGES.c2,
    title: "Design-forward projects, grounded in execution",
    subtitle: "Smart planning, strong coordination, and reliable site delivery.",
  },
  {
    type: "image",
    image: IMAGES.olivia,
    title: "Infrastructure that supports everyday life",
    subtitle: "Durable builds created for long-term public and private use.",
    mediaClass: "object-[center_18%]",
    hideOnMobile: true,
  },
  {
    type: "image",
    image: IMAGES.c4,
    title: "Modern construction with measurable quality",
    subtitle: "Every phase is tracked for safety, timeline, and workmanship.",
  },
  {
    type: "image",
    image: IMAGES.c5,
    title: "Trusted teams for ambitious developments",
    subtitle: "We turn complex briefs into high-performing finished spaces.",
  },
  {
    type: "video",
    video: VIDEOS.construction,
    title: "Construction progress with precision",
    subtitle: "Site work captured in motion from planning through execution.",
    mediaClass: "object-[center_18%]",
  },
];

const AUTO_SLIDE_MS = 5500;

const INSTAGRAM_URL =
  "https://www.instagram.com/contracostaresources.nig?igsh=d3NrOTFlOWxxZGhj&utm_source=qr";

const NAV_LINKS = [
  { href: "#", label: "Home", active: true },
  { href: "#about", label: "About us" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact us" },
];

export default function HeroSection() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [index, setIndex] = useState(0);

  const activeSlides = useMemo(
    () =>
      isMobile
        ? CAROUSEL_SLIDES.filter((slide) => !slide.hideOnMobile)
        : CAROUSEL_SLIDES,
    [isMobile],
  );

  const go = useCallback(
    (dir) => {
      setIndex((i) => {
        const n = activeSlides.length;
        return (i + dir + n) % n;
      });
    },
    [activeSlides.length]
  );

  const goToSlide = useCallback((i) => {
    const n = activeSlides.length;
    setIndex(((i % n) + n) % n);
  }, [activeSlides.length]);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 639px)");
    const update = () => setIsMobile(query.matches);

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (menuOpen) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % activeSlides.length);
    }, AUTO_SLIDE_MS);
    return () => window.clearInterval(id);
  }, [activeSlides.length, menuOpen, index]);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) setServicesOpen(false);
  }, [menuOpen]);

  useEffect(() => {
    const id = window.setTimeout(() => {
      SERVICES.forEach((service) => {
        router.prefetch(`/services/${service.slug}`);
      });
    }, 1000);

    return () => window.clearTimeout(id);
  }, [router]);

  useEffect(() => {
    setIndex((i) => (i >= activeSlides.length ? 0 : i));
  }, [activeSlides.length]);

  const currentSlide = useMemo(
    () => activeSlides[index] ?? activeSlides[0],
    [activeSlides, index],
  );

  const slideCount = activeSlides.length;

  return (
    <div className="min-h-dvh bg-brand-green p-4 pb-8 font-sans dark:bg-[#4d5c2e] sm:p-6 md:p-8">
      <div className={HERO_VIEWPORT_COLUMN_CLASS}>
        <div
          className={`${HERO_CAROUSEL_SHELL_CLASS} isolate min-h-[min(680px,calc(100dvh-2rem))]`}
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured project media"
        >
          {currentSlide.type === "video" ? (
            <video
              key={currentSlide.video}
              className={`absolute inset-0 h-full w-full ${MEDIA_COVER_CLASS} ${
                currentSlide.mediaClass ?? "object-center"
              } -z-10`}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={currentSlide.title}
            >
              <source src={currentSlide.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              key={currentSlide.image}
              src={currentSlide.image}
              alt=""
              fill
              priority
              unoptimized
              className={`${MEDIA_COVER_CLASS} ${
                currentSlide.mediaClass ?? "object-center"
              } -z-10`}
              sizes="100vw"
            />
          )}
          <div
            className={`${HERO_MEDIA_LAYER_CLASS} -z-10 bg-black/10`}
            aria-hidden
          />

          <header className="relative z-10 flex items-start justify-between gap-3 p-5 sm:p-6 md:p-8">
            <a href="#" className="relative z-10 block w-36 shrink-0 sm:w-44">
              <Image
                src="/images/ContraCostaLogo.jpeg"
                alt="Contra Costa"
                width={260}
                height={98}
                className="h-auto w-full max-h-12 object-contain object-left drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)] sm:max-h-14"
                priority
              />
            </a>
            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold tracking-wide text-neutral-900 shadow-sm transition hover:bg-white/95 sm:px-5 sm:text-[0.8125rem]"
                aria-expanded={menuOpen}
                aria-controls="site-menu"
              >
                <span className="flex flex-col gap-[5px]" aria-hidden>
                  <span className="block h-0.5 w-5 rounded-full bg-neutral-900" />
                  <span className="block h-0.5 w-5 rounded-full bg-neutral-900" />
                  <span className="block h-0.5 w-5 rounded-full bg-neutral-900" />
                </span>
                MENU
              </button>
            </div>
          </header>

          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-28 text-center sm:pb-32">
            <div key={index} className="animate-fade-up">
              <h1 className="max-w-3xl text-2xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                {currentSlide.title}
              </h1>
              <p className="mt-4 max-w-2xl text-sm font-medium text-white/90 sm:text-base">
                {currentSlide.subtitle}
              </p>
            </div>
          </div>

          <div
            className="absolute bottom-24 left-0 right-0 z-10 flex justify-center gap-2 sm:bottom-28"
            role="tablist"
            aria-label="Choose hero slide"
          >
            {activeSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Slide ${i + 1} of ${slideCount}`}
                onClick={() => goToSlide(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === index
                    ? "w-8 bg-white"
                    : "w-2.5 bg-white/45 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(-1)}
            className="absolute bottom-6 right-20 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/55 text-neutral-900 shadow backdrop-blur-sm transition hover:bg-white/75 sm:bottom-auto sm:left-5 sm:right-auto sm:top-1/2 sm:h-12 sm:w-12 sm:-translate-y-1/2"
            aria-label="Previous slide"
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
          <button
            type="button"
            onClick={() => go(1)}
            className="absolute bottom-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/55 text-neutral-900 shadow backdrop-blur-sm transition hover:bg-white/75 sm:bottom-auto sm:right-5 sm:top-1/2 sm:h-12 sm:w-12 sm:-translate-y-1/2"
            aria-label="Next slide"
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

          <button
            type="button"
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="absolute bottom-6 left-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/90 text-white transition hover:bg-white/10 sm:bottom-8 sm:left-8"
            aria-label="Scroll to About section"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M12 5v14M12 19l-4-4M12 19l4-4"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="fixed inset-0 z-100" id="site-menu">
          <button
            type="button"
            className="absolute inset-0 z-0 bg-black/45"
            aria-label="Dismiss menu"
            onClick={() => setMenuOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="absolute inset-y-0 right-0 z-10 flex w-[min(calc(100vw/3),380px)] min-w-[220px] flex-col border-x-8 border-brand-green bg-menu-surface text-white shadow-2xl sm:min-w-[240px]"
          >
          <div className="relative flex min-h-0 flex-1 flex-col pl-5 pr-4 pt-5 sm:pl-7 sm:pr-6 sm:pt-7">
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="absolute right-3 top-4 flex h-9 w-9 items-center justify-center text-white transition hover:opacity-80 sm:right-4 sm:top-5"
              aria-label="Close menu"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <nav className="mt-14 flex min-h-0 flex-1 flex-col overflow-y-auto pb-28 sm:mt-16">
              <ul className="space-y-5 sm:space-y-6">
                {NAV_LINKS.slice(0, 2).map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={`block text-base font-bold uppercase tracking-wide sm:text-lg ${
                        item.active ? "text-brand-green" : "text-white hover:text-white/90"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                  <div className="flex w-full items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setServicesOpen((open) => !open)}
                      className="menu-service-trigger text-left text-base font-bold uppercase tracking-wide text-white sm:text-lg"
                    >
                      Services
                    </button>
                    <button
                      type="button"
                      onClick={() => setServicesOpen((open) => !open)}
                      className="menu-service-caret flex h-9 w-9 shrink-0 items-center justify-center text-white"
                      aria-expanded={servicesOpen}
                      aria-controls="menu-services-list"
                      aria-label={
                        servicesOpen ? "Collapse services" : "Expand services"
                      }
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden
                        className={`transition-transform duration-200 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  {servicesOpen ? (
                    <ul
                      id="menu-services-list"
                      className="mt-3 space-y-2 pl-1 sm:pl-2"
                    >
                      {SERVICES.map((service) => (
                        <li key={service.slug}>
                          <Link
                            href={`/services/${service.slug}`}
                            prefetch
                            onClick={() => setMenuOpen(false)}
                            onMouseEnter={() => {
                              router.prefetch(`/services/${service.slug}`);
                              prefetchVideo(service.video);
                            }}
                            onFocus={() => {
                              router.prefetch(`/services/${service.slug}`);
                              prefetchVideo(service.video);
                            }}
                            className="menu-service-item text-sm font-normal leading-snug text-white/90 sm:text-base"
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
                {NAV_LINKS.slice(2).map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={`block text-base font-bold uppercase tracking-wide sm:text-lg ${
                        item.active ? "text-brand-green" : "text-white hover:text-white/90"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white shadow-md ring-1 ring-white/30 transition hover:scale-105 hover:brightness-110 hover:ring-white/50 motion-reduce:transition-none motion-reduce:hover:scale-100 sm:h-14 sm:w-14"
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="sm:h-7 sm:w-7"
                  aria-hidden
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
