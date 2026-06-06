import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/assets";
import DetailVideoSection from "./DetailVideoSection";

export default function DetailPageLayout({
  backHref,
  backLabel,
  eyebrow,
  title,
  caption,
  children,
  videoSrc,
  videoTitle,
  videoCaption,
  videoAriaLabel,
  videoEndAt,
}) {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="min-h-dvh bg-white font-sans text-neutral-900 outline-none"
    >
      <header className="border-b border-neutral-200 px-4 py-5 sm:px-6 md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link href="/" className="relative block w-36 shrink-0 sm:w-44">
            <Image
              src={IMAGES.logo}
              alt="Contra Costa"
              width={260}
              height={98}
              className="h-auto w-full max-h-12 object-contain object-left sm:max-h-14"
              priority
            />
          </Link>
          <Link
            href={backHref}
            className="btn-cta px-4 py-2 text-sm"
            prefetch
          >
            {backLabel}
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 md:py-10">
        <p className="font-serif text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-neutral-700 md:text-xl">
          {caption}
        </p>
        {children ? <div className="mt-10">{children}</div> : null}
      </article>

      <DetailVideoSection
        src={videoSrc}
        title={videoTitle}
        caption={videoCaption}
        ariaLabel={videoAriaLabel}
        endAt={videoEndAt}
      />
    </main>
  );
}
