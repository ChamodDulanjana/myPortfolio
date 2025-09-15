'use client';

import React from 'react'
import SectionHeading from './section-heading';
import { useSectionInView } from '@/hook/use-section-inview';
import { projectsData } from '@/lib/data';
import ProjectCard from './project-card';
import { FaChevronRight } from "react-icons/fa";
import Link from 'next/link';

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.25);
  
  return (
    <section id="projects" className='pt-28'>
      <section
        ref={ref}
        className="max-w-[48rem] leading-7 sm:mb-10 px-4 flex flex-col items-center"
      >
        <SectionHeading>My projects</SectionHeading>

        <div>
          {projectsData.slice(0, 3).map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <Link href={'/all-projects'}>
            <button className="outline-none cursor-pointer  py-3 px-6 text-[17px] rounded-full overflow-hidden bg-transparent text-white relative group mt-12 sm:mt-16 border-2 border-black">
            <span className="relative z-10 transition-colors duration-400 group-hover:text-black font-semibold flex items-center gap-2 text-[16px]">
              View All Projects
              <FaChevronRight className='group-hover:translate-x-1 transition mt-1 text-lg' />
            </span>
            <div className="absolute top-0 -left-[10%] w-[120%] h-full bg-black skew-x-[30deg] transition-transform duration-400 ease-[cubic-bezier(0.3,1,0.8,1)] group-hover:translate-x-full z-0"></div>
          </button>
        </Link>
      </section>
    </section>
  )
}

export default Projects