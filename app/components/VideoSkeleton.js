export default function VideoSkeleton({ label = "Loading video…" }) {
  return (
    <div
      className="flex min-h-70 flex-col items-center justify-center gap-3 rounded-[24px] bg-neutral-900/80 px-6 sm:min-h-90 sm:rounded-[28px] md:min-h-105"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div
        className="h-10 w-10 animate-pulse rounded-full border-2 border-white/20 border-t-brand-green"
        aria-hidden
      />
      <p className="text-sm font-medium text-white/70">{label}</p>
    </div>
  );
}
