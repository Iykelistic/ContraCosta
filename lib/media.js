/** Same object-cover treatment for hero images and videos */
export const MEDIA_COVER_CLASS =
  "object-cover brightness-[1.02] saturate-[0.9] contrast-[1.02]";

/** Outer shell matching the hero carousel media area */
export const HERO_CAROUSEL_SHELL_CLASS =
  "relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-[24px] shadow-lg sm:rounded-[28px]";

export const HERO_MEDIA_LAYER_CLASS = "absolute inset-0";

/** Flex column used on the home hero (sets carousel height) */
export const HERO_VIEWPORT_COLUMN_CLASS =
  "mx-auto flex min-h-[calc(100dvh-2rem)] max-w-7xl flex-col sm:min-h-[calc(100dvh-3rem)]";
