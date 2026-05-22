import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/assets";
import { SERVICES } from "@/lib/services";

const INSTAGRAM_URL =
  "https://www.instagram.com/contracostaresources.nig?igsh=d3NrOTFlOWxxZGhj&utm_source=qr";

export default function SiteFooter() {
  return (
    <footer
      id="contact"
      className="scroll-mt-4 border-t border-neutral-200 bg-white text-neutral-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-8 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="inline-block">
              <Image
                src={IMAGES.logoFooter}
                alt="Contra Costa"
                width={320}
                height={120}
                className="h-auto w-56 max-h-20 object-contain object-left sm:w-64 sm:max-h-24"
              />
            </a>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-neutral-600 dark:text-zinc-300 md:text-lg">
              Construction and engineering with clear communication, disciplined safety, and work that
              holds up for decades.
            </p>
          </div>

          <div>
            <p className="text-base font-semibold text-neutral-900 dark:text-zinc-100 md:text-lg">
              Services
            </p>
            <ul className="mt-4 space-y-2 text-base md:text-lg">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-neutral-600 transition hover:text-brand-green dark:text-zinc-300"
                    prefetch
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-base font-semibold text-neutral-900 dark:text-zinc-100 md:text-lg">
              Explore
            </p>
            <ul className="mt-4 space-y-2 text-base md:text-lg">
              <li>
                <a
                  href="#about"
                  className="text-neutral-600 transition hover:text-brand-green dark:text-zinc-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-neutral-600 transition hover:text-brand-green dark:text-zinc-300"
                >
                  Featured projects
                </a>
              </li>
              <li>
                <a
                  href="#insights"
                  className="text-neutral-600 transition hover:text-brand-green dark:text-zinc-300"
                >
                  Why choose us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-base font-semibold text-neutral-900 dark:text-zinc-100 md:text-lg">
              Contact us
            </p>
            <address className="mt-4 not-italic text-base leading-relaxed text-neutral-600 dark:text-zinc-300 md:text-lg">
              <p>General inquiries</p>
              <p>
                <a
                  href="mailto:hello@contracosta.example"
                  className="text-brand-green hover:underline"
                >
                  hello@contracosta.example
                </a>
              </p>
              <p className="mt-2">
                <a href="tel:+15555550100" className="hover:text-brand-green">
                  +1 (555) 555-0100
                </a>
              </p>
            </address>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white shadow-md ring-1 ring-black/10 transition hover:scale-105 hover:brightness-110 hover:ring-black/15 motion-reduce:transition-none motion-reduce:hover:scale-100"
              aria-label="Contra Costa Resources on Instagram"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>
        <p className="mt-12 border-t border-neutral-200 pt-8 text-center text-sm text-neutral-500 dark:border-zinc-700 dark:text-zinc-400 md:text-base">
          © {new Date().getFullYear()} Contra Costa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
