import Link from "next/link";
import { notFound } from "next/navigation";
import DetailPageLayout from "@/app/components/DetailPageLayout";
import { FEATURED_PROJECTS, getProjectBySlug } from "@/lib/projects";

export const dynamic = "force-static";

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
      videoTitle={project.videoTitle}
      videoCaption={project.videoCaption}
      videoAriaLabel={`${project.title}. ${project.caption}`}
      videoEndAt={project.videoEndAt}
    >
      <Link
        href="/#projects"
        className="inline-flex items-center justify-center rounded-full border border-brand-green px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-brand-light dark:border-white/30 dark:text-white dark:hover:border-white/60 dark:hover:bg-white/10"
        prefetch
      >
        Back to featured projects
      </Link>
    </DetailPageLayout>
  );
}
