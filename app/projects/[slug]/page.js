import Link from "next/link";
import { notFound } from "next/navigation";
import DetailPageLayout from "@/app/components/DetailPageLayout";
import { FEATURED_PROJECTS, getProjectBySlug } from "@/lib/projects";

export function generateStaticParams() {
  return FEATURED_PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project | Contra Costa" };
  return {
    title: `${project.title} | Contra Costa`,
    description: project.caption,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <DetailPageLayout
      backHref="/#projects"
      backLabel="← All projects"
      eyebrow="Project details"
      title={project.title}
      caption={project.caption}
      videoSrc={project.video}
      videoTitle={project.title}
    >
      <Link
        href="/#projects"
        className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
        prefetch
      >
        Back to featured projects
      </Link>
    </DetailPageLayout>
  );
}
