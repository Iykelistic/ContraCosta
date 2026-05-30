"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle({
  onLightSurface = false,
  brand = false,
  muted = false,
  className = "",
}) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  const surface = muted
    ? "hero-control-btn !bg-white border-0"
    : brand
    ? "btn-cta-icon border-0 shadow-md"
    : onLightSurface
      ? "border-neutral-300/90 bg-white/95 text-neutral-800 shadow-sm backdrop-blur-sm hover:bg-white dark:border-zinc-600 dark:bg-zinc-800/95 dark:text-white dark:hover:bg-zinc-800"
      : "border-white/35 bg-white/15 text-white shadow-sm backdrop-blur-sm hover:bg-white/25";

  return (
    <button
      type="button"
      onClick={toggle}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition ${surface} ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
          <path
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4"
          />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M21 14.5A8.5 8.5 0 0110.5 4 8.5 8.5 0 0021 14.5z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
