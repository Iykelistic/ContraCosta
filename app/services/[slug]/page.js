import Link from "next/link";
import { notFound } from "next/navigation";
import DetailPageLayout from "@/app/components/DetailPageLayout";
import { SERVICES, getServiceBySlug } from "@/lib/services";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service | Contra Costa" };
  return {
    title: `${service.title} | Contra Costa`,
    description: service.caption,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <DetailPageLayout
      backHref="/"
      backLabel="← Home"
      eyebrow="Service details"
      title={service.title}
      caption={service.caption}
      videoSrc={service.video}
      videoTitle={service.title}
    >
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
        prefetch
      >
        Back to home
      </Link>
    </DetailPageLayout>
  );
}
