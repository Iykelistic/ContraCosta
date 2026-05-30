const warmedVideos = new Map();

export function prefetchVideo(href) {
  if (typeof document === "undefined" || !href) return;

  const linkId = `preload-video-${href.replace(/\W/g, "-")}`;
  if (!document.getElementById(linkId)) {
    const link = document.createElement("link");
    link.id = linkId;
    link.rel = "preload";
    link.as = "video";
    link.href = href;
    document.head.appendChild(link);
  }

  if (warmedVideos.has(href)) return;

  const video = document.createElement("video");
  video.preload = "auto";
  video.muted = true;
  video.playsInline = true;
  video.src = href;
  video.setAttribute("aria-hidden", "true");
  video.style.cssText =
    "position:absolute;width:0;height:0;opacity:0;pointer-events:none;overflow:hidden";
  document.body.appendChild(video);
  warmedVideos.set(href, video);
}
