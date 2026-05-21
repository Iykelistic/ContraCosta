"use client";

import { lazy, Suspense, useEffect, useMemo, useRef, useState } from "react";
import SectionFallback from "./SectionFallback";

/**
 * Loads a code-split section only when it nears the viewport, then renders via React.lazy + Suspense.
 */
export default function DeferredLazySection({
  load,
  label,
  revealWrapper,
}) {
  const ref = useRef(null);
  const [nearView, setNearView] = useState(false);

  const LazyComponent = useMemo(() => lazy(load), [load]);

  useEffect(() => {
    const el = ref.current;
    if (!el || nearView) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNearView(true);
          io.disconnect();
        }
      },
      { rootMargin: "240px 0px", threshold: 0.01 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [nearView]);

  const content = nearView ? (
    <Suspense fallback={<SectionFallback label={label} />}>
      <LazyComponent />
    </Suspense>
  ) : (
    <SectionFallback label={label} />
  );

  return (
    <div ref={ref}>
      {typeof revealWrapper === "function" ? revealWrapper(content) : content}
    </div>
  );
}
