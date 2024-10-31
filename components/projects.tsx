"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'
import { useSectionInView } from '@/lib/hooks';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';


export default function Projects() {
  const {ref} = useSectionInView("Projects", 0.5);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
        <SectionHeading>Some of my projects</SectionHeading>
        <div>
            {
                projectsData.slice(0,5).map((project, index) => (
                <React.Fragment key={index}>
                    <Project {...project} />
                </React.Fragment>
                ))
            }
        
        </div>
      <div className="flex justify-end">
        <Link
          href="/projects"
          className="bg-gray-900 text-white my-8 px-4 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-105 transition"
        >
          See all projects
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
      </div>
    </section>
  )
}

