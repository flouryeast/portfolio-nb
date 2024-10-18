"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion"
import { useSectionInView } from '@/lib/hooks';


export default function Contact() {
    const {ref} = useSectionInView("Contact");
   


  return (
    <motion.section 
    ref={ref}
    id="contact" 
    className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
    initial={{
        opacity:0,
    }}
    whileInView={{
        opacity:1,
    }}
    transition={{
        duration:1,
    }}
    viewport={{
        once: true,
    }}>
        <SectionHeading>Contact me</SectionHeading>
        <p className='text-gray-700 -mt-6 dark:text-white/80'>You can contact me at <a className='underline' href='mailto:noe_bernard@outlook.com'>noe_bernard@outlook.com</a></p>

         
    </motion.section>
  )
}
