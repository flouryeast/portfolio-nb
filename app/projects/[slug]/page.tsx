import { projectsData } from '@/lib/data'
import ProjectDetails from '@/components/projectDetails'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projectsData.find(p => p.slug === params.slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} - Noé Bernard Portfolio`,
    description: project.description || 'Detailed project information',
    openGraph: {
      title: project.title,
      description: project.description || 'Detailed project information',
      images: [
        {
          url: project.imageUrl.src,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      url: `https://noe-bernard.vercel.app/projects/${project.slug}`,
      type: 'website',
    },
  }
}

export default function ProjectPage({ params }: Props) {
  const project = projectsData.find(p => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetails project={project} />
}