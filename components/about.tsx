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
              After graduating with a degree in <span className="font-medium">Management</span> from <span className="font-medium">Audencia Business School</span> with a focus on <span className="font-medium">Corporate Finance</span>, I began my career in strategy and finance projects at companies like <span className="font-medium">L'Oréal</span> and <span className="font-medium">Saint Laurent</span>. My passion for data and startups led me to work at <span className="font-medium">Project A</span>, a VC-funds, and <span className="font-medium">Milano Vice</span> in Berlin, where I honed my skills in leveraging data for strategic insights. Today, I specialize in approaching data from a strategic perspective, utilizing tools like <span className="font-medium">Google BigQuery (GBQ)</span>, <span className="font-medium">dbt</span>, <span className="font-medium">Metabase</span>, <span className="font-medium">Looker Studio</span>, <span className="font-medium">Power BI</span>, and <span className="font-medium">Google Apps Script</span>.
          </p>

          <p>
              <span className="italic">When I'm not diving into data</span>, I enjoy exploring the latest tech trends, reading about business strategy, and spending time in the vibrant city of Berlin. I'm always eager to learn and grow, constantly seeking out new tools and methods to enhance my approach to data and strategy. Currently, I'm focusing on expanding my knowledge in <span className="font-medium">web-app development</span> and <span className="font-medium">automated data workflows</span> in order to master the full pipeline.
          </p>


        
     </motion.section>
  )
}
