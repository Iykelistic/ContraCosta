"use client";

import { useEffect } from "react";
import { prefetchVideo } from "@/lib/prefetchVideo";
import ProjectVideo from "./ProjectVideo";

export default function DetailVideoSection({
  src,
  title,
  caption,
  ariaLabel,
  endAt,
}) {
  useEffect(() => {
    prefetchVideo(src);
  }, [src]);

  return (
    <ProjectVideo
      src={src}
      title={title}
      caption={caption}
      ariaLabel={ariaLabel}
      endAt={endAt}
    />
  );
}
