"use client";

import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import VideoSkeleton from "./VideoSkeleton";

const FRAME_CLASS =
  "mx-auto w-full overflow-hidden rounded-[24px] shadow-lg sm:rounded-[28px]";

const VIDEO_CLASS =
  "block h-[720px] w-full object-cover object-center";

function ProjectVideo({ src, title }) {
  const videoRef = useRef(null);
  const [status, setStatus] = useState("loading");

  const videoLabel = useMemo(() => `${title} video`, [title]);

  const handleReady = useCallback(() => {
    setStatus("ready");
  }, []);

  const handleError = useCallback(() => {
    setStatus("error");
  }, []);

  useEffect(() => {
    setStatus("loading");
    const el = videoRef.current;
    if (!el) return;
    el.load();
  }, [src]);

  return (
    <div className="bg-neutral-950 px-4 pb-6 sm:px-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className={`${FRAME_CLASS} relative min-h-70 sm:min-h-90 md:min-h-105`}>
          {status === "loading" ? (
            <div className="absolute inset-0 z-10">
              <VideoSkeleton label="Loading video…" />
            </div>
          ) : null}
          {status === "error" ? (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-neutral-900 px-6 text-center">
              <p className="text-sm text-white/80">
                Video could not be loaded. Please check your connection and try
                again.
              </p>
            </div>
          ) : null}
          <video
            ref={videoRef}
            key={src}
            src={src}
            className={VIDEO_CLASS}
            controls
            playsInline
            preload="auto"
            aria-label={videoLabel}
            onLoadedMetadata={handleReady}
            onLoadedData={handleReady}
            onCanPlay={handleReady}
            onError={handleError}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default memo(ProjectVideo);
