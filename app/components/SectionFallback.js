export default function SectionFallback({ label = "Loading section…" }) {
  return (
    <div
      className="flex min-h-[200px] items-center justify-center px-4 py-12"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <p className="text-sm font-medium text-neutral-600">
        {label}
      </p>
    </div>
  );
}
