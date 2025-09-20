'use client';

import React from 'react'
import SectionHeading from '@/components/section-heading';
import { useSectionInView } from '@/hook/use-section-inview';
import { projectsData } from '@/lib/data';
import ProjectCard from '@/components/project-card';
import { FaChevronRight, FaGithub } from "react-icons/fa";
import Link from 'next/link';
import StyledBtn from '@/components/styled-btn';
import SocialBtn from '@/components/social-btn';

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.25);
  
  return (
    <section id="projects" className='pt-12 sm:pt-28 mb-12 sm:mb-0'>
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
          <div className='rounded-full shadow-md'>
            <SocialBtn Icon={FaGithub} href="https://github.com/ChamodDulanjana" />
          </div>

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