"use client";

import { lazy, Suspense, useEffect, useMemo } from "react";
import { prefetchVideo } from "@/lib/prefetchVideo";
import VideoSkeleton from "./VideoSkeleton";

const ProjectVideo = lazy(() => import("./ProjectVideo"));

function DetailVideoSection({ src, title }) {
  const videoProps = useMemo(() => ({ src, title }), [src, title]);

  useEffect(() => {
    prefetchVideo(src);
  }, [src]);

  return (
    <Suspense fallback={<VideoSkeleton label="Preparing player…" />}>
      <ProjectVideo {...videoProps} />
    </Suspense>
  );
}

export default DetailVideoSection;
