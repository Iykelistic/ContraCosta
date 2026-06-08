import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/assets";
import { COMPANY_SERVICE_GROUPS } from "@/lib/companyServices";
import FooterAbout from "./FooterAbout";

const INSTAGRAM_URL =
  "https://www.instagram.com/contracostaresources.nig?igsh=d3NrOTFlOWxxZGhj&utm_source=qr";

function FooterIcon({ children }) {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
      {children}
    </span>
  );
}

export default function SiteFooter() {
  return (
    <footer
      id="contact"
      className="scroll-mt-4 overflow-x-hidden bg-brand-green text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 md:py-16">
        <div className="grid gap-10 text-left sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <div>
            <Link href="/" className="inline-block bg-white">
              <Image
                src={IMAGES.logoFooter}
                alt="Contra Costa Resources"
                width={260}
                height={98}
                unoptimized
                className="block h-12 w-auto object-contain sm:h-14"
              />
            </Link>
          </div>

          <div className="w-full max-w-xs">
            <p className="text-base font-bold text-white md:text-lg">Company</p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/90 md:text-base">
              <li>
                <a
                  href="#about"
                  className="transition hover:text-white hover:underline"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="transition hover:text-white hover:underline"
                >
                  Featured projects
                </a>
              </li>
              <li>
                <a
                  href="#insights"
                  className="transition hover:text-white hover:underline"
                >
                  Why choose us
                </a>
              </li>
              {/* <li>
                <a href="#contact" className="transition hover:text-white hover:underline">
                  Contact
                </a>
              </li> */}
            </ul>
          </div>

          <div className="w-full max-w-xs sm:col-span-2 lg:col-span-1">
            <p className="text-base font-bold text-white md:text-lg">
              Contact us
            </p>
            <ul className="mt-4 space-y-4 text-sm text-white/90 md:text-base">
              <li className="flex items-center gap-3">
                <FooterIcon>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </FooterIcon>
                <a
                  href="tel:+15555550100"
                  className="transition hover:text-white hover:underline"
                >
                  +234915555608
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FooterIcon>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 6l-10 7L2 6"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </FooterIcon>
                <a
                  href="mailto:hello@contracosta.example"
                  className="transition hover:text-white hover:underline"
                >
                  directorcontracostaresources@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FooterIcon>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </FooterIcon>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white hover:underline"
                >
                  @contracostaresources.nig
                </a>
              </li>
            </ul>
          </div>
        </div>

        <FooterAbout />

        <div
          id="footer-services"
          className="mt-10 scroll-mt-4 border-t border-white/20 pt-10"
        >
          <p className="text-base font-bold text-white md:text-lg">
            Our services include
          </p>
          <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {COMPANY_SERVICE_GROUPS.map((group) => (
              <div key={group.label} className="text-left">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/70 md:text-sm">
                  {group.label}
                </p>
                <ul className="mt-3 space-y-2.5 text-sm text-white/90 md:text-base">
                  {group.items.map((service) => (
                    <li
                      key={service}
                      className="flex items-start gap-2.5 leading-snug"
                    >
                      <span
                        className="mt-2.5 flex h-4 w-4 shrink-0 items-center justify-center text-brand-accent"
                        aria-hidden
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M5 12h14M13 6l6 6-6 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-brand-dark py-4 text-center text-xs text-white/85 sm:text-sm">
        <p>© {new Date().getFullYear()} Contra Costa. All rights reserved.</p>
      </div>
    </footer>
  );
}
