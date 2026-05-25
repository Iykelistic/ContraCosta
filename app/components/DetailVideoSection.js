"use client";

import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { prefetchVideo } from "@/lib/prefetchVideo";
import VideoSkeleton from "./VideoSkeleton";

const ProjectVideo = lazy(() => import("./ProjectVideo"));

function VideoPlaceholder({ label }) {
  return (
    <div className="bg-neutral-950 px-4 pb-6 sm:px-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <VideoSkeleton label={label} />
      </div>
    </div>
  );
}

function DetailVideoSection({ src, title }) {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoProps = useMemo(() => ({ src, title }), [src, title]);

  useEffect(() => {
    prefetchVideo(src);
  }, [src]);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      setShouldLoadVideo(true);
    });

    return () => window.cancelAnimationFrame(id);
  }, [src]);

  if (!shouldLoadVideo) {
    return <VideoPlaceholder label="Opening page…" />;
  }

  return (
    <Suspense fallback={<VideoPlaceholder label="Preparing video player…" />}>
      <ProjectVideo {...videoProps} />
    </Suspense>
  );
}

export default DetailVideoSection;
