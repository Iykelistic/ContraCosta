"use client";

import DeferredLazySection from "./DeferredLazySection";
import RevealOnScroll from "./RevealOnScroll";

const loadAbout = () => import("./AboutSection");
const loadShowcase = () => import("./ShowcaseSection");
const loadPreFooter = () => import("./PreFooterSection");
const loadBackToTop = () => import("./BackToTop");

function withReveal(content) {
  return <RevealOnScroll>{content}</RevealOnScroll>;
}

export default function HomeSections() {
  return (
    <>
      <DeferredLazySection
        load={loadAbout}
        label="Loading about…"
        revealWrapper={withReveal}
      />
      <DeferredLazySection
        load={loadShowcase}
        label="Loading projects…"
        revealWrapper={withReveal}
      />
      <DeferredLazySection
        load={loadPreFooter}
        label="Loading insights…"
        revealWrapper={withReveal}
      />
      <DeferredLazySection load={loadBackToTop} label="Loading…" />
    </>
  );
}
