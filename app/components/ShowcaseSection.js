import Image from "next/image";
import FeaturedProjectCards from "./FeaturedProjectCards";

function BadgeCard({ tone = "green", title, subtitle, children }) {
  const toneClass =
    tone === "olive"
      ? "bg-brand-mid text-white"
      : "bg-brand-green text-white";

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

export default function ShowcaseSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-4 bg-white px-4 pb-12 font-sans dark:bg-zinc-950 sm:px-6 md:px-8 md:pb-16"
      aria-labelledby="showcase-heading"
    >
      <h2 id="showcase-heading" className="sr-only">
        Team and featured projects
      </h2>
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[24px] shadow-lg sm:rounded-[28px]">
        <div className="relative min-h-[430px] sm:min-h-[520px] lg:min-h-[620px]">
          <Image
            src="/images/ContraCosta3.jpeg"
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

      <div className="mx-auto mt-14 max-w-7xl sm:mt-16">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-dark dark:text-brand-accent">
            Our work
          </p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 md:text-3xl lg:text-4xl">
            Featured projects
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-base">
            A sample of recent builds across residential, commercial, and retail
            environments.
          </p>
        </div>

        <div className="mt-10 sm:mt-12">
          <FeaturedProjectCards />
        </div>
      </div>
    </section>
  );
}
