'use client';

import React from 'react'
import SectionHeading from './section-heading';
import { useSectionInView } from '@/hook/use-section-inview';
import { projectsData } from '@/lib/data';
import ProjectCard from './project-card';
import { FaChevronRight, FaGithub } from "react-icons/fa";
import Link from 'next/link';
import { motion } from 'framer-motion';

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.25);
  
  return (
    <section id="projects" className='pt-28'>
      <section
        ref={ref}
        className="max-w-[48rem] leading-7 sm:mb-10 px-4 flex flex-col items-center"
      >
        <SectionHeading>My projects</SectionHeading>

        {/* Project Cards */}
        <div>
          {projectsData.slice(0, 3).map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className='flex items-center mt-12 sm:mt-16 gap-4 sm:gap-6'>
          {/* GitHub Link */}
          <a
            className="bg-transparent py-4 px-6 text-gray-900 flex items-center gap-2 text-[1.35rem] rounded-full  hover:bg-gray-100 cursor-pointer border border-gray-300 shadow-md"
            href="https://github.com/ChamodDulanjana"
            target="_blank"
          >
            <FaGithub />
          </a>

          {/* View All Projects Button */}
          <Link href={'/all-projects'}>
            <motion.button 
              className="outline-none cursor-pointer py-3 px-6 text-[17px] rounded-full overflow-hidden bg-transparent text-white relative group border border-gray-300 shadow-md"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.175 }}
            >
              <span className="relative z-10 transition-colors duration-400 group-hover:text-gray-900 font-semibold flex items-center gap-2 text-[16px]">
                Show All
                <FaChevronRight className='group-hover:translate-x-1 transition mt-1 text-lg' />
              </span>
              <div className="absolute top-0 -left-[10%] w-[120%] h-full bg-gray-900 skew-x-[30deg] transition-transform duration-400 ease-[cubic-bezier(0.3,1,0.8,1)] group-hover:translate-x-full z-0"></div>
            </motion.button>
          </Link>
        </div>
      </section>
    </section>
  )
}

export default Projects