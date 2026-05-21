export function prefetchVideo(href) {
  if (typeof document === "undefined" || !href) return;
  const id = `prefetch-video-${href.replace(/\W/g, "-")}`;
  if (document.getElementById(id)) return;
  const link = document.createElement("link");
  link.id = id;
  link.rel = "prefetch";
  link.as = "video";
  link.href = href;
  document.head.appendChild(link);
}
