"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      setP(height > 0 ? Math.min(1, scrollTop / height) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 right-0 top-0 z-120 h-1 origin-left bg-brand-green transition-[transform] duration-150 ease-out motion-reduce:transition-none"
      style={{ transform: `scaleX(${p})` }}
      aria-hidden
    />
  );
}
