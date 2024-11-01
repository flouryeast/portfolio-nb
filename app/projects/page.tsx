
import ProjectsPage from '@/components/projectsPage'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Noé Bernard - Projects',
  description: 'Noé Bernard is a data consultant specializing in data analysis, visualization, and project management. Explore his projects showcasing various skills and industries.',
  verification: {
    google: 'LKaB2KPOAZvZAPBw3dEavgpy5eSc0wWiAht1Alxc168',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://noe-bernard.vercel.app',
  },
}

export default function ProjectPage() {

  return <ProjectsPage/>
   

}