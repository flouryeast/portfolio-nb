'use client';
import React from 'react'
import SectionHeading from './section-heading'
import {  motion } from "framer-motion"

import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const {ref} = useSectionInView("About");
  return (
    <motion.section
    ref={ref}
    className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    initial={{ opacity: 0, y: 100}}
    animate={{ opacity: 1, y: 0}}
    transition={{ delay: 0.175}}
    id="about">
        <SectionHeading>About me</SectionHeading>
        
      <p className="mb-3">
        After earning my <span className="font-medium">Master in Management</span> with a focus on <span className="font-medium">Corporate Finance</span> from <span className="font-medium">Audencia Business School</span>, I jumped into the world of strategy and data. My journey has taken me from various start-ups like <span className="font-medium">Milano Vice</span> to VC funds like <span className="font-medium">Project A Ventures</span>. I turned fulltime freelance in 2023 and since then had the opportunity to work with various <span className="font-medium">Luxe Corporates</span>, data projects for funds or latly co-lead a <span className="font-medium">M&A sell side</span> process.
      </p>

      <p>
        <span className="italic">When I'm not deep into data</span>, I love to travel—like my recent motorcycle adventure from Colombia to Uruguay. I also enjoy playing and discovering new musics. <br></br> I’m currently diving into <span className="font-medium">web-app development</span> and <span className="font-medium">automated data workflows</span> to master the entire data pipeline.
      </p>



        
     </motion.section>
  )
}
