"use client";

import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { prefetchVideo } from "@/lib/prefetchVideo";
import VideoSkeleton from "./VideoSkeleton";

const FRAME_CLASS =
  "mx-auto w-full overflow-hidden rounded-[24px] shadow-lg sm:rounded-[28px]";

const VIDEO_CLASS =
  "block h-[720px] w-full object-cover object-center transition-opacity duration-500";

function ProjectVideo({ src, title, eager = true }) {
  const videoRef = useRef(null);
  const [attachSrc, setAttachSrc] = useState(eager);
  const [videoReady, setVideoReady] = useState(false);

  const videoLabel = useMemo(() => `${title} video`, [title]);
  const videoSrc = useMemo(() => (attachSrc ? src : undefined), [attachSrc, src]);

  useEffect(() => {
    prefetchVideo(src);
  }, [src]);

  useEffect(() => {
    if (eager) {
      setAttachSrc(true);
      return;
    }
    const el = videoRef.current?.parentElement;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAttachSrc(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.01 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [eager]);

  const handleReady = useCallback(() => {
    setVideoReady(true);
  }, []);

  return (
    <div className="bg-neutral-950 px-4 pb-6 sm:px-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className={`${FRAME_CLASS} relative min-h-70 sm:min-h-90 md:min-h-105`}>
          {!videoReady ? (
            <div className="absolute inset-0 z-10">
              <VideoSkeleton
                label={attachSrc ? "Buffering video…" : "Loading video…"}
              />
            </div>
          ) : null}
          <video
            ref={videoRef}
            className={`${VIDEO_CLASS} ${videoReady ? "opacity-100" : "opacity-0"}`}
            controls
            playsInline
            preload={attachSrc ? "auto" : "none"}
            aria-label={videoLabel}
            onCanPlay={handleReady}
            onLoadedData={handleReady}
          >
            {videoSrc ? (
              <source src={videoSrc} type="video/mp4" />
            ) : null}
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default memo(ProjectVideo);
