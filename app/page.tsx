import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Noé Bernard - Data & Strategy Consultant ',
  description: 'Noé Bernard is a data consultant specializing in data analysis, visualization, and project management. Explore his portfolio showcasing various projects and skills.',
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

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 ">
      <Header />
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  )
}
