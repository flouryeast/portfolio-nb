'use client'
    
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { projectsData }  from '@/lib/data' 
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

export default function ProjectPage({ params }: { params: { slug: string } }) {
   

  return (
    <main className="flex flex-col items-center px-4 py-8 max-w-4xl mx-auto">
        <Link href="/" className='self-start group bg-gray-900 text-white px-7 py-3 mb-8 items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-105 transition'>
        ← Back to Home
      </Link>
      
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
        Projects
      </h1>
      <div className="flex flex-col items-center gap-6 w-full max-w-6xl">
        {projectsData.map((project, index) => (
          <motion.div
          key={project.slug}
         
        
          className="group mb-3 sm:mb-8 last:mb-0"
      >
          <Link href={`/projects/${project.slug}`} className="block">
              <section 
                  className='group bg-gray-100 max-w-[50rem] border border-black/5 overflow-hidden rounded-lg sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 sm:group-even:pl-8 hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20'
              >
                  <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]'>
                      <h3 className='text-2xl font-semibold'>{project.title}</h3>
                      <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>{project.description}</p>
                      <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                          {project.tags.map((tag,index) => (
                              <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70' key={index}>{tag}</li>
                          ))}
                      </ul>
                  </div>
                  
                  <Image 
                      src={project.imageUrl}
                      alt={`Project: ${project.title}`}
                      quality={95} 
                      className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                      transition
                      group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2
                      group-hover:scale-[1.04]
                      group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2
                      group-even:-right-[initial] group-even:-left-40'
                  />
              </section>
          </Link>
      </motion.div>
        ))}
      </div>
    </main>
  )
}