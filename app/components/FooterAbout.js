"use client";

import { useState } from "react";

const PARAGRAPHS = [
  "Beyond execution, Contra-Costa Resources is deeply invested in sourcing quality materials, understanding evolving industry standards, and building strong supplier networks both locally and internationally. Our commitment to excellence allows us to deliver projects that are visually compelling, structurally sound, and commercially practical.",
  "We pride ourselves on professionalism, attention to detail, structured delivery systems, and the ability to transform ideas into well-executed realities.",
  "Contra-Costa Resources — building spaces, sourcing solutions, and delivering excellence with intention.",
];

export default function FooterAbout() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-t border-white/20 pt-8 text-left">
      <div className="space-y-4 text-sm leading-relaxed text-white/90 md:text-base">
        <p className={expanded ? undefined : "line-clamp-3"}>{PARAGRAPHS[0]}</p>
        {expanded ? (
          <>
            <p>{PARAGRAPHS[1]}</p>
            <p>{PARAGRAPHS[2]}</p>
          </>
        ) : null}
      </div>
      <button
        type="button"
        onClick={() => setExpanded((open) => !open)}
        className="mt-3 text-sm font-medium text-brand-accent underline-offset-2 transition hover:text-white hover:underline md:text-base"
        aria-expanded={expanded}
      >
        {expanded ? "Read less" : "Read more"}
      </button>
    </div>
  );
}
