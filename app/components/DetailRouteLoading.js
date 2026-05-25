import { IMAGES } from "@/lib/assets";
import Image from "next/image";

export default function DetailRouteLoading({ label = "Loading page…" }) {
  return (
    <main className="min-h-dvh bg-neutral-950 font-sans text-white">
      <header className="border-b border-white/10 px-4 py-5 sm:px-6 md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Image
            src={IMAGES.logo}
            alt="Contra Costa"
            width={260}
            height={98}
            className="h-auto w-36 max-h-12 object-contain object-left brightness-110 sm:w-44 sm:max-h-14"
            priority
          />
          <p className="text-sm font-semibold text-white/60">{label}</p>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 md:py-10">
        <div className="h-4 w-40 animate-pulse rounded-full bg-white/15" />
        <div className="mt-5 h-10 w-3/4 animate-pulse rounded-xl bg-white/15" />
        <div className="mt-4 h-5 w-full max-w-2xl animate-pulse rounded-full bg-white/10" />
        <div className="mt-3 h-5 w-2/3 animate-pulse rounded-full bg-white/10" />
      </section>
    </main>
  );
}
