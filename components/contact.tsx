"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion"
import { useSectionInView } from '@/lib/hooks';
import { CiCalendar } from "react-icons/ci";





export default function Contact() {
    const {ref} = useSectionInView("Contact");
   


  return (
    <motion.section 
    ref={ref}
    id="contact" 
    className='flex flex-col items-center justify-center mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
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
        <p className='text-gray-700 -mt-6 dark:text-white/80'>You can contact me at <a className='underline' href='mailto:noe_bernard@outlook.com'>noe_bernard@outlook.com</a> or book a meeting here:</p>

        
  
      <iframe         src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1anO3PftpfeslqxYiPriqaRZb8y_Gol0tqZXBTFQWwmH93iKW1z6tgbn_kDDpS78I1iptCmxMN?gv=true"
        className=" hidden sm:block justify center w-[60rem] h-[53rem] mt-6  border-0"
        title="Google Calendar"></iframe>
     
      <a className='group flex sm:hidden m-4   bg-gray-900 text-white px-7 py-3  items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-[1.05]  active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10' href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1anO3PftpfeslqxYiPriqaRZb8y_Gol0tqZXBTFQWwmH93iKW1z6tgbn_kDDpS78I1iptCmxMN?gv=true" >
               Book a meeting <CiCalendar className='opacity-60 group-hover:translate-x-1 transition'/>
            </a>
    </motion.section>
    
    

  )
}
