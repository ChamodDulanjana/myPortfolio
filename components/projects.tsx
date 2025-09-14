'use client';

import React from 'react'
import SectionHeading from './section-heading';
import { useSectionInView } from '@/hook/use-section-inview';
import { projectsData } from '@/lib/data';
import ProjectCard from './project-card';

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  
  return (
    <section
      id="projects"
      ref={ref}
      className="pt-28 max-w-[48rem] leading-8 sm:mb-10 px-4"
    >
      <SectionHeading>My projects</SectionHeading>

      <div>
        {projectsData.slice(0, 3).map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects