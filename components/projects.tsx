'use client';

import React from 'react'
import SectionHeading from './section-heading';
import { useSectionInView } from '@/hook/use-section-inview';
import { projectsData } from '@/lib/data';
import ProjectCard from './project-card';
import { FaChevronRight, FaGithub } from "react-icons/fa";
import Link from 'next/link';
import StyledBtn from './styled-btn';

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.25);
  
  return (
    <section id="projects" className='pt-28'>
      <section
        ref={ref}
        className="max-w-[48rem] leading-5 sm:mb-10 px-4 flex flex-col items-center"
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
            <StyledBtn text="Show All" Icon={FaChevronRight} />
          </Link>
        </div>
      </section>
    </section>
  )
}

export default Projects