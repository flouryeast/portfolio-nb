'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { projectsData } from '@/lib/data'
import { fadeInAnimationVariants } from '@/lib/animations'
import { BsArrowRight } from 'react-icons/bs'

type ProjectDetailsProps = {
  project: (typeof projectsData)[number]
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const router = useRouter()
  const currentIndex = projectsData.findIndex(p => p.slug === project.slug)
  const nextProject = projectsData[currentIndex + 1] || projectsData[0]
  const previousProject = currentIndex === 0 ? projectsData[projectsData.length - 1] : projectsData[currentIndex - 1]

  return (
    <main className="flex flex-col items-center px-4 py-8 max-w-4xl mx-auto">
      <Link href="/projects" className='self-start group bg-gray-900 text-white px-7 py-3 mb-8 items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-105 transition'>
        ← Back to projects
      </Link>

      <h1 className="text-3xl font-bold mb-8">{project.title}</h1>

      <section className="w-full mb-12">
        <h2 className="text-2xl font-semibold mb-4">Concept</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <p>{project.concept}</p>
          </div>
          <div className="md:w-1/2">
            <Image
              src={project.imageUrl}
              alt="Concept illustration"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="w-full mb-12">
        <h2 className="text-2xl font-semibold mb-4">Tools Used</h2>
        <ul className='flex flex-wrap justify-start gap-2 text-lg text-gray-800'>
          {project.tools.map((tool, index) => (
            <motion.li
              className='bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80'
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView='animate'
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {tool}
            </motion.li>
          ))}
        </ul>
      </section>

      <section className="w-full mb-12">
        <h2 className="text-2xl font-semibold mb-4">Results</h2>
        <p className="mb-12">{project.results}</p>
        <div className='flex justify-start'>
        {project.link && (
          <Link
            href={project.link}
            className="  bg-gray-900 text-white px-7 py-4 flex  items-center justify-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-105 transition w-full md:w-auto"
          >Voir site</Link> 
        )}
        </div>

        {project.resultImage && (
          <Image
            src={project.resultImage}
            alt="Project results"
            width={600}
            height={400}
            className="rounded-lg"
          />
        )}
      </section>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 mt-12">
        <button
          onClick={() => router.push(`/projects/${previousProject.slug}`)}
          className='bg-white text-gray-700 hover:text-gray-950 p-4 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-[1.15] active:scale-[1.15] transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 w-full md:w-auto'
        >
          <BsArrowRight className='rotate-180 opacity-70 group-hover:translate-x-1 transition' />
          Previous Project
        </button>

        <Link
          href="/#contact"
          className='group bg-gray-900 text-white px-7 py-4 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-105 transition w-full md:w-auto'
        >
          Contact Me
        </Link>

        <button
          onClick={() => router.push(`/projects/${nextProject.slug}`)}
          className='bg-white text-gray-700 hover:text-gray-950 p-4 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-[1.15] active:scale-[1.15] transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 w-full md:w-auto'
        >
          Next Project <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </button>
      </div>
    </main>
  )
}