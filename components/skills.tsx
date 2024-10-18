"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { dataSkillsData, stratSkillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import { animate, motion } from "framer-motion";
import { initialize } from 'next/dist/server/lib/render-server';


const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition:{
            delay: 0.05 * index,
        }
    }),
}

export default function Skills() {
    const {ref} = useSectionInView("Skills");
  return (
    <section id="skills" ref={ref} className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
        <SectionHeading>My Skills</SectionHeading>
          <div className='grid grid-cols-2	gap-16 justify-center'>
           <div>
              <h3 className='p-6 font-semibold text-2xl'>Strategy</h3> 
              <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800 '>

                  {stratSkillsData.map((skill, index) => (
                      <motion.li className='bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80' 
                      key={index}
                      variants={fadeInAnimationVariants}
                      initial="initial"
                      whileInView='animate' 
                      viewport={{
                        once: true,
                      }}
                      custom={index}
                      >{skill}</motion.li>
                  ))}
                  

              </ul>
           </div>
          
       
           <div>
              <h3 className='p-6 font-semibold text-2xl'>Data</h3> 
              <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800 '>

                  {dataSkillsData.map((skill, index) => (
                      <motion.li className='bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80' 
                      key={index}
                      variants={fadeInAnimationVariants}
                      initial="initial"
                      whileInView='animate' 
                      viewport={{
                        once: true,
                      }}
                      custom={index}
                      >{skill}</motion.li>
                  ))}
                  

              </ul>
           </div>
        </div>

          
    </section>
  )
}
