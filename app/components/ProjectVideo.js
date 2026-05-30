"use client";

import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";

const FRAME_CLASS =
  "mx-auto w-full overflow-hidden rounded-[24px] bg-black shadow-lg sm:rounded-[28px]";

const VIDEO_CLASS =
  "block h-[720px] w-full object-cover object-center [image-rendering:auto]";

function ProjectVideo({ src, title, caption, ariaLabel, endAt }) {
  const videoRef = useRef(null);
  const [error, setError] = useState(false);

  const videoLabel = useMemo(
    () =>
      ariaLabel ??
      (title ? (caption ? `${title}. ${caption}` : title) : "Project video"),
    [ariaLabel, title, caption],
  );

  const showHeading = Boolean(title);

  const handleError = useCallback(() => {
    setError(true);
  }, []);

  const handleTimeUpdate = useCallback(
    (event) => {
      if (endAt == null) return;
      const el = event.currentTarget;
      if (el.currentTime >= endAt) {
        el.pause();
        el.currentTime = endAt;
      }
    },
    [endAt],
  );

  const handleSeeked = useCallback(
    (event) => {
      if (endAt == null) return;
      const el = event.currentTarget;
      if (el.currentTime > endAt) {
        el.currentTime = endAt;
      }
    },
    [endAt],
  );

  useEffect(() => {
    setError(false);
    const el = videoRef.current;
    if (!el) return;
    el.load();
  }, [src, endAt]);

  return (
    <div className="bg-white px-4 pb-6 sm:px-6 md:px-8 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl">
        {showHeading ? (
          <div className="mb-6 text-center sm:mb-8 sm:text-left">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl dark:text-white">
              {title}
            </h2>
            {caption ? (
              <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-neutral-600 sm:mx-0 md:text-lg dark:text-white/80">
                {caption}
              </p>
            ) : null}
          </div>
        ) : null}

        <div className={`${FRAME_CLASS} relative min-h-70 sm:min-h-90 md:min-h-105`}>
          {error ? (
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
            controlsList="nodownload noremoteplayback"
            onTimeUpdate={handleTimeUpdate}
            onSeeked={handleSeeked}
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
